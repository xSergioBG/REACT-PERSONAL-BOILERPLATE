# ⚛️ React Boilerplate

Este es un proyecto de boilerplate sencillo para iniciar rápidamente el desarrollo de aplicaciones React. El proyecto ya viene configurado con ESLint y Prettier para ayudarte a mantener un código limpio y consistente.

![Screen inicio](/public/screen.png)

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Puedes descargar la última versión estable de Node.js desde el sitio oficial: [https://nodejs.org](https://nodejs.org)

## ⚙️ Configuración

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.

```shell
git clone https://github.com/xSergioBG/REACT-PERSONAL-BOILERPLATE.git
cd REACT-PERSONAL-BOILERPLATE
```

2. Instala las dependencias del proyecto utilizando npm o yarn

```shell
npm ci
```

```shell
yarn install
```

## 📜 Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- `npm run dev` o `yarn dev`: Inicia el servidor de desarrollo de Vite para ejecutar la aplicación en modo de desarrollo. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

- `npm run build` o `yarn build`: Genera una versión optimizada y lista para producción de la aplicación en el directorio `dist`.

- `npm run preview` o `yarn preview`: Sirve la versión de producción de la aplicación generada por el comando `build`, lo que te permite previsualizarla antes de implementarla en un servidor.

- `npm run format` o `yarn format`: Formatea automáticamente el código del proyecto utilizando Prettier.

- `npm run lint` o `yarn lint`: Verifica y corrige automáticamente el estilo de código utilizando ESLint.


## 🎨 Estilo de código

Este proyecto utiliza ESLint y Prettier para mantener un estilo de código consistente y libre de errores. Estas herramientas se configuran según las reglas estándar de ESLint.

Si utilizas un editor de código compatible con ESLint, como Visual Studio Code, verás las advertencias y errores de ESLint directamente en tu editor. Además, puedes ejecutar los siguientes comandos para verificar y corregir automáticamente el estilo de código en todo el proyecto:

- `npm run lint` o `yarn lint`: Verifica y corrige automáticamente el estilo de código utilizando ESLint.

- `npm run format` o `yarn format`: Formatea automáticamente el código del proyecto utilizando Prettier.


## 📦 Paquetes utilizados

El proyecto utiliza los siguientes paquetes:

- **eslint**: Herramienta de análisis estático que ayuda a identificar y reportar patrones problemáticos en el código JavaScript.
- **eslint-config-prettier**: Configuración de ESLint que desactiva las reglas que puedan entrar en conflicto con el formateo de código aplicado por Prettier.
- **eslint-config-standard**: Configuración de ESLint para el estilo de código estándar.
- **eslint-plugin-import**: Reglas de ESLint para validar las importaciones y exportaciones en JavaScript.
- **eslint-plugin-n**: Reglas de ESLint para variables en JavaScript.
- **eslint-plugin-promise**: Reglas de ESLint para validar el uso de promesas en JavaScript.
- **eslint-plugin-react**: Reglas de ESLint específicas para el desarrollo de aplicaciones React.
- **prettier**: Herramienta de formateo de código que ayuda a mantener un estilo de código coherente.
- **standard**: Estilo de código JavaScript popular y bien mantenido.

Además, también se utilizan las siguientes dependencias para el desarrollo y ejecución de la aplicación:

- **@vitejs/plugin-react**: Plugin de Vite para admitir React en la aplicación.
- **react**: Biblioteca de JavaScript para construir interfaces de usuario.
- **react-dom**: Biblioteca de JavaScript para manipular el árbol de elementos del DOM en aplicaciones React.
- **vite**: Herramienta de construcción y desarrollo rápida para aplicaciones web modernas.

## 👥 Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir un problema o enviar una solicitud de extracción con tus mejoras o correcciones.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.
