# Button

Un solo botón con cuatro variantes; `primary` aparece como máximo una vez por vista.

- `primary`: la acción para la que existe la pantalla (Guardar, Crear proyecto). Marino en claro, turquesa claro en oscuro (`primary` / `on-primary`).
- `accent`: acciones del sistema que no son la principal, como «Informe con IA». `teal-600` con texto `on-navy`.
- `outline` (predeterminada): el resto (Exportar, Editar, Cancelar).
- `pill`: solo dentro de la barra superior o de superficies `navy-900`, en MAYÚSCULAS.

El texto empieza con un verbo y va en tipo oración. `icon` acepta un nombre del set (`asesor`, `cambio`…). Pasa `onClick` y cualquier atributo de `<button>`.
