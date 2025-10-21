# 📦 Pasos de Instalación - Sistema de Autenticación

Sigue estos pasos **en orden** para configurar el sistema de autenticación.

## ✅ Requisitos Previos

- **Node.js** v18 o superior
- **npm** o **yarn**
- Cuenta en **Prisma Accelerate** (para base de datos)
- Cuenta en **Cloudinary** (para almacenamiento de archivos)

## 🚀 Instalación Paso a Paso

### 1. Instalar Dependencias

```bash
npm install
```

Esto instalará:
- `@prisma/client` v6.17.1
- `@prisma/extension-accelerate` v1.2.1
- `bcryptjs` v2.4.3
- `cloudinary` v2.5.1
- `iron-session` v8.0.3
- `prisma` v6.17.1 (devDependency)
- Y todas las demás dependencias

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (usa `.env.example` como guía):

```env
# Database URL (Prisma Accelerate)
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=TU_API_KEY_AQUI"

# Session Secret (genera uno único)
SESSION_SECRET="tu-secreto-super-seguro-de-al-menos-32-caracteres-aqui"

# Cloudinary
CLOUDINARY_CLOUD_NAME="tu-cloud-name"
CLOUDINARY_API_KEY="tu-api-key"
CLOUDINARY_API_SECRET="tu-api-secret"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**⚠️ Importante:**
- Usa tu **API Key de Prisma Accelerate** en `DATABASE_URL`
- Usa tus credenciales de **Cloudinary**
- Genera un `SESSION_SECRET` único (puedes usar: `openssl rand -base64 32`)

**📝 Cómo obtener las credenciales:**

1. **Prisma Accelerate:**
   - Ve a [https://console.prisma.io](https://console.prisma.io)
   - Crea un proyecto y obtén tu API Key
   
2. **Cloudinary:**
   - Ve a [https://cloudinary.com](https://cloudinary.com)
   - Regístrate y obtén tus credenciales del dashboard

### 4. Generar Cliente de Prisma

```bash
npm run prisma:generate
```

Este comando genera el cliente de Prisma en `prisma/generated/client/`

### 5. Crear Tablas en la Base de Datos

Tienes dos opciones:

#### Opción A: Push (recomendado para desarrollo)
```bash
npm run prisma:push
```

#### Opción B: Migraciones (recomendado para producción)
```bash
npm run prisma:migrate
```

### 6. Poblar con Datos Iniciales (Seed)

```bash
npm run prisma:seed
```

Este comando creará:
- ✅ 1 usuario **ADMIN**: `admin@saladbowl.mx` / `admin123`
- ✅ 1 usuario **FRANCHISEE**: `franchisee@saladbowl.mx` / `franchisee123`
- ✅ 1 usuario **EMPLOYEE**: `employee@saladbowl.mx` / `employee123`
- ✅ 1 Franquiciatario de ejemplo
- ✅ 1 Sucursal de ejemplo
- ✅ Categorías de guías

### 7. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

El servidor iniciará en: `http://localhost:3000`

### 8. Probar el Login

Ve a: `http://localhost:3000/admin/login`

Usa cualquiera de las credenciales:

**Admin:**
- Email: `admin@saladbowl.mx`
- Password: `admin123`

**Franquiciatario:**
- Email: `franchisee@saladbowl.mx`
- Password: `franchisee123`

**Empleado:**
- Email: `employee@saladbowl.mx`
- Password: `employee123`

## 🎯 Verificación

### Verificar que todo funciona:

1. ✅ **Base de datos conectada:**
   ```bash
   npm run prisma:studio
   ```
   Debería abrir Prisma Studio en `http://localhost:5555`

2. ✅ **Login funciona:**
   - Ve a `/admin/login`
   - Ingresa credenciales de admin
   - Deberías ser redirigido a `/admin/dashboard`

3. ✅ **Middleware protege rutas:**
   - Intenta acceder a `/admin/dashboard` sin login
   - Deberías ser redirigido a `/admin/login`

4. ✅ **Logout funciona:**
   - En el dashboard, click en "Cerrar Sesión"
   - Deberías ser redirigido a `/admin/login`

## 🔧 Scripts Útiles

```bash
# Ver base de datos en el navegador
npm run prisma:studio

# Regenerar cliente después de cambios en schema
npm run prisma:generate

# Resetear base de datos (CUIDADO: borra todos los datos)
npx prisma db push --force-reset

# Ver migraciones
npx prisma migrate status

# Crear nueva migración
npm run prisma:migrate
```

## 🐛 Problemas Comunes

### Error: "Can't reach database server"
- ✅ Verifica que PostgreSQL esté corriendo
- ✅ Verifica credenciales en `.env`
- ✅ Verifica que la base de datos exista

### Error: "Cannot find module '@prisma/client'"
```bash
npm run prisma:generate
```

### Error: "Session secret must be at least 32 characters"
- ✅ Genera un secret más largo:
  ```bash
  openssl rand -base64 32
  ```

### Error: "Port 3000 is already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Error al ejecutar seed
```bash
# Verifica que las tablas existan
npm run prisma:push

# Luego ejecuta seed
npm run prisma:seed
```

## 📚 Siguientes Pasos

Después de la instalación exitosa:

1. 📖 Lee `AUTH_SETUP.md` para entender la arquitectura
2. 🔐 Cambia las credenciales de los usuarios de prueba
3. 🎨 Personaliza los dashboards
4. 📝 Implementa CRUDs adicionales
5. 🚀 Prepara para producción

## 🔒 Antes de Producción

- [ ] Cambia `SESSION_SECRET` a un valor único y seguro
- [ ] Usa `prisma migrate` en lugar de `push`
- [ ] Configura variables de entorno en tu hosting
- [ ] Habilita HTTPS
- [ ] Configura PostgreSQL con conexiones seguras
- [ ] Elimina usuarios de prueba
- [ ] Configura backups de base de datos

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Verifica que seguiste todos los pasos en orden
2. Revisa la consola por errores
3. Verifica los logs de PostgreSQL
4. Consulta `AUTH_SETUP.md` para más detalles

---

**¡Listo!** 🎉 Tu sistema de autenticación está configurado y funcionando.
