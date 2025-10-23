# Nuxt Minimal Starter

Consulta la [documentación de Nuxt](https://nuxt.com/docs/getting-started/introduction) para obtener más información.

## Configuración

Asegúrate de instalar las dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de Desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Producción

Compila la aplicación para producción:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Previsualiza la compilación de producción localmente:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Consulta la [documentación de despliegue](https://nuxt.com/docs/getting-started/deployment) para obtener más información.

## Descripción General del Proyecto

Este proyecto es un sitio web de portafolio construido con Nuxt.js. Aprovecha Vue 3, TypeScript, Tailwind CSS y Zod para la validación de datos. El contenido se gestiona a través de archivos JSON locales, lo que proporciona una estructura flexible y fácil de actualizar.

## Estructura del Proyecto

El proyecto sigue una estructura de directorios estándar de Nuxt.js con algunas convenciones adicionales:

- `app/`: Contiene la lógica central de la aplicación.
  - `assets/`: Activos estáticos.
    - `css/`: Archivos CSS globales, incluyendo importaciones de Tailwind CSS y variables CSS personalizadas.
    - `data/`: Archivos JSON que sirven como fuente de contenido para páginas y componentes. Cada archivo JSON generalmente corresponde a los datos de una sección o componente específico.
  - `components/`: Componentes Vue reutilizables. Los componentes se organizan en subdirectorios según su funcionalidad (por ejemplo, `contact/`, `layout/`, `project/`).
  - `composables/`: Composables de Vue que encapsulan lógica reutilizable y funciones con estado. Se utilizan en todos los componentes para abstraer lógica compleja (por ejemplo, manejo de formularios, alternancia de menú, filtrado de proyectos).
  - `layouts/`: Componentes de diseño de Vue que definen la estructura general de los diferentes tipos de página.
  - `pages/`: Componentes Vue que definen las rutas y vistas de la aplicación.
- `public/`: Activos estáticos que se sirven directamente (por ejemplo, `favicon.ico`, `img/`).
- `shared/`: Contiene utilidades y configuraciones compartidas.
  - `utils/`: Funciones y configuraciones de utilidad.
    - `zod/`: Esquemas Zod utilizados para la validación de datos, asegurando la seguridad de tipos y la integridad de los datos cargados desde archivos JSON.
- `nuxt.config.ts`: Archivo de configuración de Nuxt.js, que incluye registros de módulos, importaciones de CSS y configuraciones de compilación.
- `package.json`: Dependencias y scripts del proyecto.

## Flujo de Datos e Importaciones

El flujo de datos de la aplicación está diseñado para ser claro y mantenible:

1.  **Fuente de Contenido (`app/assets/data/*.json`):** Todo el contenido dinámico que se muestra en el sitio web (por ejemplo, etiquetas de formulario, detalles de proyectos, listados de trabajos) se almacena en archivos JSON dentro de `app/assets/data/`. Esto centraliza la gestión del contenido y permite actualizaciones fáciles sin modificar la lógica del componente.

2.  **Validación de Datos (`shared/utils/zod/*.ts`):** Antes de ser utilizados, los datos de los archivos JSON se validan contra los esquemas Zod definidos en `shared/utils/zod/`. Esto asegura que los datos cargados se ajusten a la estructura y los tipos esperados, evitando errores en tiempo de ejecución y mejorando la fiabilidad de los datos.

3.  **Carga de Datos de Páginas y Componentes:**
    - **Páginas (`app/pages/*.vue`):** Las páginas suelen importar los datos JSON relevantes y su esquema Zod correspondiente. Los datos se analizan y a menudo se pasan como props a los componentes hijos.
    - **Componentes (`app/components/**/\*.vue`):** Los componentes reciben datos principalmente a través de props de sus páginas padre u otros componentes. Algunos componentes pueden importar datos directamente si son autónomos (por ejemplo, `social-icons.vue`importando`footer.json`).

4.  **Abstracción de Lógica (`app/composables/*.ts`):**
    - La lógica compleja o reutilizable (por ejemplo, validación de formularios, mecanismos de filtrado, gestión del estado de la interfaz de usuario) se extrae en composables de Vue.
    - Los composables se importan y utilizan dentro de los bloques `<script setup>` de componentes o páginas. Devuelven estados reactivos y funciones que se pueden usar directamente en la plantilla.
    - **Ejemplo:** `use-contact-form.ts` maneja la lógica de estado y validación para el formulario de contacto, mientras que `use-project-tabs.ts` gestiona el filtrado de proyectos y la selección de categorías.

5.  **Estilado (`app/assets/css/main.css`):**
    - Los estilos globales y las importaciones de Tailwind CSS se gestionan en `app/assets/css/main.css`.
    - Las variables CSS personalizadas (por ejemplo, `--color-primary`, `--text-secondary-dark`) se definen aquí y se utilizan en toda la aplicación para una temática consistente.

**Convenciones de Importación:**

- **Alias `~` o `@`:** Se utiliza para importaciones absolutas desde la raíz del proyecto (por ejemplo, `~/assets/data/`, `~/composables/`).
- **Alias `~~`:** Se utiliza para importaciones absolutas desde el directorio de origen (por ejemplo, `~~/shared/utils/zod/`).
- **Rutas Relativas:** Se utilizan para importaciones dentro del mismo directorio o subdirectorios (por ejemplo, `./my-component.vue`).
