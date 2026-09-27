# Versión Google Apps Script — edición en vivo sin depender de Claude

Esta carpeta es una versión alternativa de la misma página (`Plan de Gestión del
Proyecto`) pensada para resolver la limitación de la versión Artifact de Claude:
cuando el Artifact se abre como enlace directo en una pestaña (en vez de verse
embebido dentro de la conversación), la plataforma de Claude no entrega permisos
de edición a la página. Google Apps Script no tiene esa limitación: la página se
sirve desde una URL propia del usuario y el guardado ocurre contra su propio
Google Drive.

## Qué hace cada archivo

- `Index.html`: la página completa (idéntica en diseño y contenido a la versión
  Artifact/GitHub Pages), pero sin ningún código de `window.claude`. En su lugar,
  usa `google.script.run` para leer y guardar el estado.
- `Code.gs`: el servidor. `doGet` sirve `Index.html`. `getState()` /
  `saveState(json)` leen y escriben un archivo `ogpl_plan_gestion_estado.json`
  en el Google Drive de quien despliega el proyecto (se crea solo la primera vez
  que alguien guarda un cambio).
- `appsscript.json`: manifiesto del proyecto (zona horaria, runtime V8).

## Cómo publicarlo (una sola vez)

1. Ve a [script.google.com](https://script.google.com) → **Proyecto nuevo**.
2. Borra el contenido de `Code.gs` que aparece por defecto y pega el contenido
   de este `Code.gs`.
3. En el menú de archivos (ícono `+` junto a "Archivos") → **HTML** → nómbralo
   exactamente `Index` (sin `.html`, Apps Script lo agrega solo). Borra su
   contenido por defecto y pega el contenido de este `Index.html`.
4. (Opcional) Abre **Configuración del proyecto** (ícono de engranaje) → activa
   "Mostrar archivo de manifiesto `appsscript.json`" → pega el contenido de este
   `appsscript.json` en el archivo que aparece.
5. **Implementar → Nueva implementación** → selecciona el tipo **Aplicación web**.
   - "Ejecutar como": **Yo (tu cuenta)**.
   - "Quién tiene acceso": **Cualquier usuario** (o "Cualquier usuario dentro de
     [tu organización]" si tienes cuenta de Google Workspace y quieres
     restringirlo a la UNMSM/tu institución).
6. Pulsa **Implementar**. Google pedirá autorizar el script (acceso a tu Drive):
   acepta con tu cuenta.
7. Copia la **URL de la aplicación web** que te entrega — esa es tu enlace fijo
   y permanente. Ábrelo: verás el botón "✎ Editar" siempre visible, y "Guardar
   cambios" guardará de verdad (queda un archivo `ogpl_plan_gestion_estado.json`
   en tu Google Drive, con historial de versiones nativo de Drive).

## Actualizar el diseño más adelante

Si Claude vuelve a modificar el diseño o contenido de la versión Artifact/GitHub
Pages, hay que copiar el nuevo `index.html` aquí, quitarle el bloque de
capacidades de Claude (`window.claude.use(...)`, `initCapabilities`,
`artifactCap`/`userCap`/`downloadsCap`, `buildFullDocument`/`RESET_CSS`) y
reemplazar la carga/guardado de estado (`document.getElementById("state-data")`)
por las llamadas `google.script.run.getState()` / `.saveState(json)` que ya
están en este `Index.html`. Pide a Claude que haga ese "port" cuando lo
necesites — es mecánico.

## Limitaciones a tener en cuenta

- No hay control de acceso por persona: cualquiera con el enlace de la Web App
  puede editar y guardar (mismo modelo que un Google Doc "cualquiera con el
  enlace puede editar"). Si quieres restringirlo, la opción más simple es
  desplegarlo con acceso "Cualquier usuario dentro de tu organización" (solo
  disponible con cuentas Google Workspace/institucionales).
- No hay fusión de cambios concurrentes: si dos personas editan y guardan casi
  al mismo tiempo, gana quien guarda último (igual que en la versión Artifact).
- El PDF se genera igual que en la versión Artifact (con las mismas librerías
  cargadas desde CDN), así que la exportación funciona igual.
