# ITX Frontend Test - Mobile Devices SPA

Aplicación de página única (SPA) desarrollada en React + Vite para la gestión y compra de dispositivos móviles, cumpliendo con los requisitos de la prueba técnica de ITX.

## Tecnologías Principales
* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite
* **Routing:** React Router DOM (Manejo de rutas en cliente sin SSR)
* **Estilos:** Material UI (MUI) / Styled Components
* **Peticiones HTTP:** Axios
* **Despliegue:** Docker + Nginx + AWS EC2 + GitHub Actions

## Scripts de Ejecución (Configuración requerida)

El proyecto cuenta con los 4 scripts obligatorios definidos en el `package.json`:

1. `npm run start` - Inicia la aplicación en modo desarrollo.
2. `npm run build` - Compila la aplicación para el entorno de producción.
3. `npm run test` - Lanza la batería de pruebas unitarias.
4. `npm run lint` - Ejecuta la comprobación de código con ESLint.

## Notas Arquitectónicas Adicionales

* **Gestión de Caché:** Se ha implementado un sistema de persistencia en cliente (utilizando `localStorage` y un wrapper de expiración temporal) para evitar llamadas redundantes a la API `https://itx-frontend-test.onrender.com/`. La información de los productos expira exactamente a la hora de ser almacenada, forzando una revalidación automática.
* **CI/CD:** El proyecto cuenta con un pipeline configurado en GitHub Actions para el despliegue continuo en una instancia de AWS EC2 utilizando Nginx y Docker.