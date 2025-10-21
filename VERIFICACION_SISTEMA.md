# 🔍 Verificación del Sistema - Guía de Troubleshooting

## ⚠️ Si no ves el login o las vistas

### Paso 1: Verificar que el servidor esté corriendo

```bash
npm run dev
```

Deberías ver algo como:
```
  ▲ Next.js 14.2.3
  - Local:        http://localhost:3000
  - ready started server on 0.0.0.0:3000
```

### Paso 2: Acceder al login

Abre tu navegador y ve a:
```
http://localhost:3000/admin/login
```

### Paso 3: Verificar credenciales

Si el login carga, usa estas credenciales:

**Admin:**
```
Email: admin@saladbowl.mx
Password: admin123
```

---

## 🐛 Problemas Comunes y Soluciones

### Error: "Cannot find module '@prisma/client'"

**Solución:**
```bash
npm run prisma:generate
```

### Error: "Database connection failed"

**Solución:**
Verifica tu archivo `.env` y asegúrate de que `DATABASE_URL` esté correctamente configurado:
```env
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=TU_API_KEY"
```

### Error: "Session secret must be at least 32 characters"

**Solución:**
Agrega en `.env`:
```env
SESSION_SECRET="tu-secreto-de-al-menos-32-caracteres-aqui-cambiar-en-produccion"
```

### Error: TypeScript - "Cannot find module" en imports

**Solución:**
```bash
npm install
npm run prisma:generate
```

### Error: Puerto 3000 ya en uso

**Solución (Windows):**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### El login carga pero no puede iniciar sesión

**Solución:**
Verifica que la base de datos esté poblada con datos:
```bash
npm run prisma:seed
```

---

## ✅ Lista de Verificación Completa

Ejecuta estos pasos en orden:

### 1. Instalar dependencias
```bash
npm install
```

### 2. Generar cliente Prisma
```bash
npm run prisma:generate
```

### 3. Sincronizar base de datos
```bash
npm run prisma:push
```

### 4. Poblar con datos de prueba
```bash
npm run prisma:seed
```

### 5. Iniciar servidor
```bash
npm run dev
```

### 6. Abrir navegador
```
http://localhost:3000/admin/login
```

### 7. Login con credenciales de prueba
```
Email: admin@saladbowl.mx
Password: admin123
```

---

## 📁 Archivos que DEBEN Existir

### Verifica que estos archivos existan:

#### Autenticación (✅ Deben existir)
- `src/lib/auth.ts`
- `src/lib/session.ts`
- `src/lib/prisma.ts`
- `src/app/actions/auth.ts`
- `src/middleware.ts`

#### Login (✅ Debe existir)
- `src/app/admin/login/page.tsx`

#### Dashboards (✅ Deben existir)
- `src/app/admin/dashboard/page.tsx`
- `src/app/franchisee/dashboard/page.tsx`
- `src/app/employee/dashboard/page.tsx`

#### Componentes (✅ Debe existir)
- `src/components/admin/DashboardLayout.tsx`

#### Base de datos (✅ Deben existir)
- `prisma/schema.prisma`
- `prisma/seed.ts`

#### Configuración (✅ Deben existir)
- `.env` (debes crearlo basado en `.env.example`)
- `package.json`
- `next.config.mjs`
- `tailwind.config.ts`

---

## 🔍 Comandos de Diagnóstico

### Ver si Prisma está bien configurado
```bash
npm run prisma:studio
```
Esto abrirá una interfaz visual de tu base de datos en `http://localhost:5555`

### Ver logs del servidor
Cuando ejecutes `npm run dev`, presta atención a:
- ✅ "compiled successfully" = Todo bien
- ❌ Errores de sintaxis = Revisa el archivo mencionado
- ❌ "Module not found" = Ejecuta `npm install`

---

## 🆘 Si NADA Funciona

### Reseteo Completo

```bash
# 1. Borrar node_modules y reinstalar
rm -rf node_modules
rm package-lock.json
npm install

# 2. Limpiar Next.js
rm -rf .next

# 3. Regenerar Prisma
npm run prisma:generate

# 4. Resetear base de datos (⚠️ borra todos los datos)
npx prisma db push --force-reset

# 5. Seed de nuevo
npm run prisma:seed

# 6. Iniciar servidor
npm run dev
```

---

## 📞 URLs del Sistema

Una vez que todo esté funcionando, estas URLs deben funcionar:

### Públicas
- `http://localhost:3000/` - Homepage
- `http://localhost:3000/admin/login` - Login
- `http://localhost:3000/sucursales` - Sucursales
- `http://localhost:3000/contacto` - Contacto
- `http://localhost:3000/franquicias` - Franquicias

### Admin (requiere login)
- `http://localhost:3000/admin/dashboard`
- `http://localhost:3000/admin/dashboard/users`
- `http://localhost:3000/admin/dashboard/franchisees`
- `http://localhost:3000/admin/dashboard/branches`
- `http://localhost:3000/admin/dashboard/documents`
- `http://localhost:3000/admin/dashboard/announcements`

### Franchisee (requiere login)
- `http://localhost:3000/franchisee/dashboard`
- `http://localhost:3000/franchisee/dashboard/branches`
- `http://localhost:3000/franchisee/dashboard/employees`
- `http://localhost:3000/franchisee/dashboard/documents`

### Employee (requiere login)
- `http://localhost:3000/employee/dashboard`
- `http://localhost:3000/employee/dashboard/documents`

---

## ✅ Señales de que Todo Está Bien

Cuando ejecutes `npm run dev`, debes ver:

```
✓ Compiled /admin/login in XXXms
✓ Compiled in XXXms
Ready in XXXms
```

Y cuando accedas a `http://localhost:3000/admin/login`, debes ver:
- Logo de Salad Bowl
- Formulario de login con campos Email y Password
- Fondo verde con diseño moderno

---

## 🎯 Test Rápido

```bash
# 1. Servidor corriendo?
npm run dev

# 2. Abrir navegador
http://localhost:3000/admin/login

# 3. Intentar login
Email: admin@saladbowl.mx
Password: admin123

# 4. ¿Te redirige a dashboard?
Si: ✅ Todo funciona
No: ❌ Revisar errores en consola
```

---

## 💡 Consejo Final

Si ves errores en la consola del navegador (F12 > Console), esos errores son MUY importantes. Copia el error completo y revisa:

1. **"Failed to fetch"** = Servidor no está corriendo
2. **"404"** = Ruta no existe (verifica URL)
3. **"500"** = Error en servidor (revisa terminal donde corre `npm run dev`)
4. **"401/403"** = Problema de autenticación (revisa credenciales)

---

**Desarrollado para Salad Bowl** 🥗
