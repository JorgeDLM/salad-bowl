# 🔐 Sistema de Autenticación - Salad Bowl

Sistema completo de autenticación con **Prisma ORM**, **PostgreSQL**, **bcryptjs** y **Next.js Server Actions**.

## 📋 Características

- ✅ 4 tipos de usuarios: **ADMIN**, **FRANCHISEE** (Franquiciatario), **EMPLOYEE** (Empleado)
- ✅ Autenticación con **bcryptjs** (hash seguro de contraseñas)
- ✅ Sesiones seguras con **iron-session**
- ✅ Base de datos **PostgreSQL** con **Prisma Accelerate** (optimización global)
- ✅ **@prisma/extension-accelerate** para pooling y cache
- ✅ **Cloudinary** para almacenamiento de archivos e imágenes
- ✅ **RBAC** (Control de acceso basado en roles)
- ✅ Aislamiento por franquicia (`franchiseeId`)
- ✅ Soft delete en todos los modelos
- ✅ Middleware para protección de rutas
- ✅ Dashboard de administración

## 🚀 Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Database URL (Prisma Accelerate)
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_PRISMA_ACCELERATE_API_KEY"

# Session Secret (CAMBIA ESTO en producción)
SESSION_SECRET="tu-secreto-super-seguro-de-al-menos-32-caracteres"

# Cloudinary (para archivos/imágenes)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Generar cliente de Prisma

```bash
npm run prisma:generate
```

### 4. Crear la base de datos y tablas

```bash
npm run prisma:push
```

O si prefieres usar migraciones:

```bash
npm run prisma:migrate
```

### 5. Poblar con datos iniciales (seed)

```bash
npm run prisma:seed
```

Esto creará:
- 1 usuario **ADMIN**
- 1 usuario **FRANCHISEE**
- 1 usuario **EMPLOYEE**
- 1 Franquiciatario de ejemplo
- 1 Sucursal de ejemplo
- Categorías de guías

## 🔑 Credenciales de Prueba

Después del seed, puedes usar estas credenciales:

### Administrador
- **Email:** `admin@saladbowl.mx`
- **Password:** `admin123`
- **Dashboard:** `/admin/dashboard`

### Franquiciatario
- **Email:** `franchisee@saladbowl.mx`
- **Password:** `franchisee123`
- **Dashboard:** `/franchisee/dashboard`

### Empleado
- **Email:** `employee@saladbowl.mx`
- **Password:** `employee123`
- **Dashboard:** `/employee/dashboard`

## 📂 Estructura de Archivos

```
salad-bowl/
├── prisma/
│   ├── schema.prisma          # Modelo de datos
│   ├── seed.ts                # Datos iniciales
│   └── generated/
│       └── client/            # Cliente generado
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── login/
│   │   │   │   └── page.tsx   # Página de login
│   │   │   └── dashboard/
│   │   │       └── page.tsx   # Dashboard admin
│   │   ├── franchisee/
│   │   │   └── dashboard/
│   │   │       └── page.tsx   # Dashboard franquiciatario
│   │   ├── employee/
│   │   │   └── dashboard/
│   │   │       └── page.tsx   # Dashboard empleado
│   │   └── actions/
│   │       └── auth.ts        # Server Actions
│   ├── lib/
│   │   ├── prisma.ts          # Cliente Prisma
│   │   ├── auth.ts            # Utilidades bcryptjs
│   │   └── session.ts         # Gestión de sesiones
│   └── middleware.ts          # Protección de rutas
└── .env                       # Variables de entorno
```

## 🔐 Modelo de Datos

### Usuarios (`User`)
- `id`: Int (autoincrement)
- `email`: String (unique)
- `username`: String (unique, opcional)
- `passwordHash`: String (bcryptjs)
- `role`: UserRole (ADMIN | EMPLOYEE | FRANCHISEE)
- `isActive`: Boolean
- `franchiseeId`: Int (opcional)
- `branchId`: Int (opcional)
- Soft delete: `deletedAt`, `deletedBy`

### Franquiciatarios (`Franchisee`)
- `id`: Int (autoincrement)
- `name`: String
- `contactName`, `contactPhone`, `contactEmail`: String
- `isActive`: Boolean
- Relaciones: `branches[]`, `users[]`

### Sucursales (`Branch`)
- `id`: Int (autoincrement)
- `franchiseeId`: Int
- `name`: String
- `address`: String
- `latitude`, `longitude`: Decimal
- `openingHours`: Json
- Relaciones: `franchisee`, `employees[]`

### Documentos de Guías (`GuidelineDocument`)
- `id`: Int (autoincrement)
- `categoryId`: Int
- `franchiseeId`: Int (opcional, null = global)
- `title`, `version`: String
- `status`: GuidelineStatus (DRAFT | PUBLISHED | ARCHIVED)
- `visibility`: VisibilityScope (ALL | ADMIN | EMPLOYEE | FRANCHISEE)
- `isMandatory`: Boolean
- `contentMd`: String (Markdown)
- `coverImage`: String (URL S3)

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Generar cliente Prisma
npm run prisma:generate

# Sincronizar schema con BD (sin migraciones)
npm run prisma:push

# Crear migración
npm run prisma:migrate

# Ver BD en navegador
npm run prisma:studio

# Ejecutar seed
npm run prisma:seed

# Build para producción
npm run build
npm start
```

## 🔒 Seguridad

### Passwords
- Hasheados con **bcryptjs** (salt rounds: 12)
- Nunca se almacenan en texto plano
- Verificación segura con `bcrypt.compare()`

### Sesiones
- Implementadas con **iron-session**
- Cookies HTTP-only
- Secure en producción
- Duración: 7 días

### Rutas Protegidas
- Middleware verifica autenticación
- Control de acceso por rol (RBAC)
- Redirección automática si no autenticado

### Aislamiento de Datos
- Todas las tablas tienen `franchiseeId`
- Los franquiciatarios solo ven sus datos
- Los empleados solo ven datos de su sucursal
- Los admins ven todo

## 🎯 Flujo de Autenticación

1. Usuario ingresa email y password en `/admin/login`
2. Server Action `loginAction` valida credenciales
3. Se verifica password con `verifyPassword()`
4. Se crea sesión con `iron-session`
5. Se redirige según rol:
   - ADMIN → `/admin/dashboard`
   - FRANCHISEE → `/franchisee/dashboard`
   - EMPLOYEE → `/employee/dashboard`
6. Middleware protege todas las rutas del dashboard
7. Al cerrar sesión, se destruye la sesión y redirige a login

## 📝 Server Actions Disponibles

### `loginAction(formData)`
Inicia sesión de usuario.

### `logoutAction()`
Cierra sesión y destruye cookie.

### `registerUserAction(data)`
Crea nuevo usuario (solo ADMIN).

### `changePasswordAction(data)`
Cambia contraseña del usuario actual.

## 🌐 Rutas del Sistema

### Públicas
- `/` - Página principal
- `/admin/login` - Login

### Protegidas
- `/admin/dashboard` - Solo ADMIN
- `/franchisee/dashboard` - Solo FRANCHISEE
- `/employee/dashboard` - Solo EMPLOYEE

## 🔄 Próximos Pasos

1. ✅ Sistema de autenticación básico
2. 🔲 CRUD de usuarios
3. 🔲 CRUD de franquiciatarios y sucursales
4. 🔲 Sistema de documentos/guías
5. 🔲 Integración con AWS S3
6. 🔲 Sistema de anuncios
7. 🔲 Dashboard con gráficos
8. 🔲 Sistema de reconocimientos (acknowledgements)

## 📚 Recursos

- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- [iron-session](https://github.com/vvo/iron-session)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [NIST RBAC](https://csrc.nist.gov/projects/role-based-access-control)

## ⚠️ Importante

- **Cambia `SESSION_SECRET`** en producción
- **Usa HTTPS** en producción
- **Configura PostgreSQL** con conexiones seguras
- **Habilita Row-Level Security** en Postgres para hardening extra
- **Valida tipos de archivos** en subidas (OWASP File Upload)
- **Usa presigned URLs** de S3 para archivos temporales

## 🐛 Troubleshooting

### Error: "Cannot find module '@prisma/client'"
```bash
npm run prisma:generate
```

### Error: "Database connection failed"
Verifica tu `DATABASE_URL` en `.env`

### Error: "Session secret must be at least 32 characters"
Genera un secret más largo o usa el predeterminado en desarrollo

## 📞 Soporte

Si tienes problemas, revisa:
1. Que PostgreSQL esté corriendo
2. Que las variables de entorno estén configuradas
3. Que hayas ejecutado `prisma:generate` y `prisma:push`
4. Que hayas ejecutado el seed

---

**Desarrollado con ❤️ para Salad Bowl**
