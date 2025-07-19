# geo-visor

## Descripción
Geo-Visor es una aplicación basada en Angular y Nx diseñada para visualizar datos catastrales utilizando tecnologías modernas como Leaflet y Angular Material. Este proyecto incluye múltiples bibliotecas compartidas y herramientas para facilitar el desarrollo y la escalabilidad.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

- **apps/visor-app**: Aplicación principal del visor.
- **libs/cadastre/domain**: Biblioteca para la lógica de dominio catastral.
- **libs/shared/ui-common**: Componentes de interfaz de usuario compartidos.
- **libs/shared/util-gis**: Utilidades relacionadas con GIS.

## Requisitos Previos
- Node.js (versión 16 o superior)
- npm (versión 8 o superior)
- Angular CLI
- Nx CLI

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Juferoga/geo-visor.git
   cd geo-visor
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles
- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm test`: Ejecuta las pruebas unitarias.

## Configuración Adicional
### Angular Material
Angular Material está integrado en la aplicación principal `visor-app`. Asegúrate de que los estilos y módulos necesarios estén configurados correctamente.

### Leaflet
Leaflet y sus complementos están instalados para manejar mapas interactivos. Los estilos de Leaflet deben ser importados en `src/styles.scss`.

### Proxy
El archivo `proxy.conf.json` está configurado para manejar solicitudes API. Asegúrate de actualizarlo según tus necesidades.

## Contribución
1. Crea un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Envía tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request en GitHub.

## Licencia
Este proyecto está bajo la licencia MIT.