Proyecta es la marca del sistema de dirección de proyectos de la Dirección de Gestión de Proyectos (DGP) de la OGPL-UNMSM. Promete una sola cosa: **ver el estado real de cada proyecto, ahora**. Su carácter es ejecutivo, preciso y sereno: marino que da autoridad, turquesa que señala lo que está vivo, mucho aire y cifras grandes.

## Esencia

- **Nombre:** Proyecta. Se escribe así en texto corrido y PROYECTA solo dentro del logotipo.
- **Descriptor:** Dirección de Proyectos. Respaldo institucional: DGP · OGPL-UNMSM.
- **Lema:** Dirección de proyectos en tiempo real.
- **Atributos:** ejecutivo, preciso, transparente, vivo. Si una pieza se ve festiva, recargada o escolar, no es Proyecta.

## Voz y contenido

- Escribe en español, en segunda persona («Actualiza el avance», «Registra el acuerdo»). El verbo va primero en botones y acciones.
- Frases cortas y concretas. Sin exclamaciones, sin emojis y sin superlativos («increíble», «revolucionario»).
- Nombra las cosas como las conoce el equipo y como las llama el PMBOK: *acta de constitución*, *EDT*, *línea base*, *área de enfoque*, *valor ganado*.
- Las cifras llevan unidad y formato peruano: `S/ 12 500`, `78 %`, `04 oct 2026`, `SPI 0.71`.
- Un estado siempre se dice con palabras además del color: «Crítico», «En observación», «En control», «Sin línea base».
- Mayúsculas solo en dos lugares: el titular `hero` y las etiquetas `label`. Los títulos de sección van en tipo oración: «Proyectos en cartera».
- Ejemplos reales: «Dirige tu cartera en tiempo real» · «Acuerdo vencido el 02 oct 2026 (Oriol): Enviar matriz de indicadores» · «El cronograma está vacío. Empieza por los entregables de la EDT».

## Logotipo

- **Símbolo** (`proyecta-mark.svg`): cuadrado turquesa `teal-500` con una P blanca y un rombo de hito en `navy-900`, el mismo rombo que marca los hitos en un diagrama de Gantt.
- **Firma horizontal** (`proyecta-lockup.svg`): símbolo, PROYECTA en Montserrat 800 en `navy-900` y el descriptor en `ink-muted`. Úsala sobre `surface`, `canvas` o `mist`.
- **Firma invertida** (`proyecta-lockup-inverse.svg`): texto blanco y rombo blanco. Úsala solo sobre `navy-900` o `navy-700`.
- Zona de protección: deja libre alrededor de la firma al menos el ancho de la P (≈ 1/5 del símbolo). Tamaño mínimo: símbolo de 24 px, firma de 140 px de ancho.
- No recolorees, no estires, no agregues sombras ni pongas la firma sobre fotos sin una capa `navy-900`. En aplicaciones pequeñas (favicon, avatar) usa solo el símbolo.

## Color

Proporción 60 · 30 · 10: neutros claros (`canvas`, `surface`, `mist`) en el 60 %, marino (`navy-900`, `navy-700`) en el 30 %, turquesa en el 10 %.

- `canvas` es el fondo general; `surface` va en tarjetas y tablas, y `mist` en la franja principal de cada pantalla.
- `navy-900` va en la barra superior, el pie de página y los paneles oscuros, siempre con texto `on-navy` y secundario `on-navy-muted`.
- Turquesa en tres intensidades con roles fijos:
  - `teal-500` es la marca y lo decorativo: logo, barras de subrayado y formas grandes. Nunca lo uses como texto sobre blanco (2.6:1).
  - `teal-600` es relleno con texto blanco: bloques de indicadores, tarjeta destacada, botón de acento y la línea base en gráficos.
  - `teal-700` es texto y enlaces sobre fondos claros.
- `primary` / `on-primary` es el botón principal, una vez por vista: marino en tema claro y turquesa claro en tema oscuro.
- Estados: `ok`, `warn`, `crit` e `idle`, cada uno sobre su `*-soft`. El turquesa nunca comunica un estado y los estados nunca decoran.
- Para daltonismo, verde y rojo se distinguen además por la palabra y el ícono de la píldora; nunca muestres un estado solo con color.

## Tipografía

- **Montserrat** (familia `display`) para titulares, títulos, nombres de tarjeta y cifras de indicadores. Usa `hero` solo en la franja principal y en MAYÚSCULAS, `title` para el nombre del proyecto, `section` para títulos de sección, `card-title` en tarjetas y `kpi` en cifras con números tabulares.
- **Source Sans 3** (familia `body`) para todo lo demás: `lead` bajo el titular, `body` en texto y tablas, `small` en metadatos y `label` en etiquetas y cabeceras de tabla, en mayúsculas con 0.08 em de espaciado.
- **IBM Plex Mono** (familia `mono`) solo para códigos: `1.4.2.5`, `R-03`, `SC-02`, `RQ-01`.
- Se cargan desde Google Fonts: `Montserrat:wght@600;700;800`, `Source+Sans+3:wght@400;600;700` e `IBM+Plex+Mono:wght@400;500`.

## Composición y patrones firma

1. **Barra superior marina** de 64 px (`space-16`): firma invertida a la izquierda, navegación en `label` con subrayado `teal-500` en la opción activa, y a la derecha botones en píldora blanca (`radius-full`).
2. **Franja principal** sobre `mist` con `radius-lg` en el borde inferior: antetítulo `label` en `teal-700`, titular `hero` en `ink`, bajada `lead` y acciones. A la derecha, una forma orgánica en `navy-900` que contiene datos reales (barras de avance por proyecto), nunca fotos de banco.
3. **Título de sección centrado** con subrayado doble: una barra `teal-500` de 28 × 4 px y otra de 8 × 4 px, separadas 6 px. En paneles internos, alineado a la izquierda con la misma barra.
4. **Tarjetas** sobre `surface` con borde `line`, `radius-md` y `shadow-card`; al pasar el cursor, `shadow-float`. La tarjeta que exige atención va destacada en `teal-600` con texto `on-navy`, solo una por grilla.
5. **Banda de indicadores**: bloques `teal-600` con ícono de línea blanco, etiqueta `label`, cifra `kpi` y nota `small`, de 4 a 5 por fila.
6. **Cuenta regresiva al próximo hito**: panel `navy-900` con `radius-lg` y cuatro círculos (días, horas, minutos y segundos) con borde `teal-500`.
7. **Personas**: avatar circular con anillo `teal-500` e iniciales en `navy-700`, nombre en `card-title` y rol en `small`. El compromiso de un interesado se muestra con cinco puntos, de Desconocedor a Líder.
8. **Pie marino** en cuatro columnas (Proyecta, Sistema, Dominios PMBOK, Proyectos), firma invertida y botón circular `teal-600` para volver arriba.

El espaciado sigue la escala de 4 px: `space-6` dentro de paneles, `space-12` entre secciones y `space-4` como margen lateral mínimo en móvil.

## Iconografía

- Set propio de líneas (grupo Icons): 24 px, trazo de 1.75 px, extremos y uniones redondeados, sin rellenos.
- En la interfaz se insertan en línea y heredan `currentColor`: blanco sobre `teal-600` y `navy-900`, `ink-muted` sobre fondos claros.
- Los archivos del grupo vienen en tinta `ink` (#0F2240) para usarse como `<img>`.
- Cada ícono tiene un uso fijo:
  - `portafolio`: cartera.
  - `alerta`: alertas críticas.
  - `cronograma`: actividades.
  - `riesgo`: riesgos.
  - `acuerdo`: acuerdos.
  - `equipo`: personas.
  - `hito`: hitos.
  - `curva`: avance.
  - `cambio`: control de cambios.
  - `asesor`: informe con IA.
- Sin emojis ni íconos de otras librerías mezclados en la misma vista.

## Datos y gráficos

- Usa `teal-600` para la línea base y la serie principal, `navy-700` para la serie comparada y `ok`, `warn` o `crit` solo cuando el dato es un estado.
- La cuadrícula va en `line-soft` y las etiquetas en `ink-muted`.
- Marca un solo punto destacado (el valor de hoy) y escribe su valor junto a él.
- Las cifras de indicadores van en `kpi` con números tabulares. Los umbrales del semáforo son ≥ 0.95 verde, de 0.80 a 0.95 ámbar y < 0.80 rojo.

## Movimiento, estados y accesibilidad

- Transiciones de 150–200 ms con salida suave. El único movimiento continuo es el punto «En vivo». Respeta `prefers-reduced-motion`.
- El foco de teclado es `focus-ring`: una separación del color del fondo y luego un anillo sólido `teal-700`, visible en ambos temas.
- Pares de texto verificados (≥ 4.5:1 en ambos temas):
  - `ink` y `ink-muted` sobre `canvas`, `surface` y `mist`.
  - `on-navy` sobre `navy-900`, `navy-700` y `teal-600`.
  - `teal-700` sobre fondos claros.
  - Cada estado sobre su `*-soft`.
- `ink-faint` queda solo para elementos deshabilitados.

## Componentes

Los componentes viven en `components/bundle.js` como `window.Proyecta` y requieren React 18:

- `Button`: botones.
- `StatusPill`: píldoras de estado.
- `SectionTitle`: títulos con subrayado doble.
- `KpiTile`: bloques de indicadores.
- `ProjectCard`: tarjetas de proyecto.
- `Countdown`: cuenta regresiva al próximo hito.
- `Icon`: el set de íconos.

Sus estilos están en `components/bundle.css` y usan solo estos tokens.

## Sí y no

- **Sí:** cifras grandes y pocas; una tarjeta destacada por grilla; el subrayado doble en cada título de sección; el marino en los extremos de la página (barra y pie).
- **No:** degradados, fotos de banco, sombras de color, más de un botón `primary` por vista, turquesa como estado, mayúsculas fuera de `hero` y `label`.
