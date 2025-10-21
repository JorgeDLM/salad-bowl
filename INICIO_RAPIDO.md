# 🚀 INICIO RÁPIDO - Salad Bowl

## ⚡ 3 Pasos para Ver el Sistema Funcionando

### Paso 1: Abrir Terminal en VS Code
```
Ctrl + ` (acento grave)
```

### Paso 2: Ejecutar este comando
```bash
npm run dev
```

### Paso 3: Abrir en Navegador
```
http://localhost:3000/admin/login
```

---

## 🔑 Credenciales para Probar

### Admin (Ve todo)
```
Email: admin@saladbowl.mx
Password: admin123
```

### Franquiciatario (Ve sus sucursales)
```
Email: franchisee@saladbowl.mx
Password: franchisee123
```

### Empleado (Ve su sucursal)
```
Email: employee@saladbowl.mx
Password: employee123
```

---

## ❌ Si NO Funciona

### Si ves error de "Cannot find module"
```bash
npm install
npm run prisma:generate
```

### Si el servidor no inicia
```bash
# Cierra cualquier proceso de Node
# Luego ejecuta:
npm run dev
```

### Si login no funciona
```bash
npm run prisma:seed
```

---

## ✅ Cuando Funcione

1. Verás la página de login con fondo verde
2. Ingresa las credenciales de arriba
3. Click en "Iniciar Sesión"
4. Serás redirigido al dashboard según tu rol

---

## 📱 Páginas Disponibles

### Una vez logueado como Admin:
- `/admin/dashboard` - Inicio
- `/admin/dashboard/users` - Usuarios
- `/admin/dashboard/franchisees` - Franquicias
- `/admin/dashboard/branches` - Sucursales
- `/admin/dashboard/documents` - Documentos
- `/admin/dashboard/announcements` - Anuncios

### Como Franquiciatario:
- `/franchisee/dashboard` - Inicio
- `/franchisee/dashboard/branches` - Mis Sucursales
- `/franchisee/dashboard/employees` - Mis Empleados
- `/franchisee/dashboard/documents` - Documentos

### Como Empleado:
- `/employee/dashboard` - Inicio
- `/employee/dashboard/documents` - Capacitación

---

## 🆘 Ayuda Rápida

**Servidor no inicia?**
→ Revisa `VERIFICACION_SISTEMA.md`

**Login no acepta credenciales?**
→ Ejecuta `npm run prisma:seed`

**Página en blanco?**
→ Abre consola del navegador (F12) y revisa errores

---

**¡Eso es todo!** El sistema ya está completo y listo para usar. 🎉
