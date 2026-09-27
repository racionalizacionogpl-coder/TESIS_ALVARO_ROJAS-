# Teoría de Colas — Oficina de Presupuesto UNMSM

Sitio del **Plan de Gestión del Proyecto** de la tesis *"Análisis de la capacidad de servicio de un flujo documentario digital mediante la teoría de colas para la reducción de los tiempos de espera en la Oficina de Presupuesto de la UNMSM"* (Alvaro Rojas Carnero, Escuela Profesional de Investigación Operativa, UNMSM).

Replica la estructura del sistema institucional SIGPRO (Oficina de Racionalización, OGPL-UNMSM), adaptada al contenido de este proyecto de tesis.

## Contenido

`index.html` es una página estática autocontenida (sin dependencias de build) con:

- Inicio, con los indicadores clave del análisis (68.68% de expedientes derivados a Presupuesto, 90.39% vía Mesa de Partes, concentración de atención, etc.)
- Plan de Gestión del Proyecto (13 secciones: propósito, decisiones, alcance, EDT, matriz de requisitos, criterios de aceptación, RACI, control de cambios, cronograma, calidad, riesgos, interesados, documentos)
- Plan de Gestión del Cronograma
- Normativas & Guías
- Formato y anexos
- Equipo de trabajo
- Actas de Reunión
- Dashboard (incluye historial de cambios)

## Publicar como sitio web (GitHub Pages)

1. Entra a **Settings → Pages** en este repositorio.
2. En "Build and deployment" → **Source**, elige "Deploy from a branch".
3. Selecciona la rama donde está este archivo (revisa con tu equipo cuál usar: la rama de desarrollo actual, o `main` si prefieren fusionarlo primero) y la carpeta `/ (root)`.
4. Guarda. GitHub publicará el sitio en `https://<usuario-u-organización>.github.io/<nombre-del-repo>/` en un par de minutos.

## Edición

El contenido también se puede editar en vivo desde la versión publicada como Artifact de Claude (botón "Editar" visible solo para quien tiene permisos de edición sobre ese Artifact), que guarda cada versión y muestra un historial de cambios en la pestaña Dashboard. Este archivo `index.html` es una instantánea de esa versión; para mantenerlos sincronizados, vuelve a copiar el HTML publicado aquí cuando hagas cambios importantes.
