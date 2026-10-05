import math
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
f = TTFont('Montserrat.ttf'); f = instantiateVariableFont(f, {'wght': 800})
gs = f.getGlyphSet(); cmap = f.getBestCmap(); upm = f['head'].unitsPerEm
def text_path(txt, size, x0, baseline, tracking=0.0):
    s = size / upm; x = x0; out = []
    for ch in txt:
        g = cmap[ord(ch)]; pen = SVGPathPen(gs)
        tp = TransformPen(pen, (s, 0, 0, -s, x, baseline)); gs[g].draw(tp)
        out.append(pen.getCommands()); x += gs[g].width * s + tracking * size
    return ' '.join(out), x - tracking * size
TEAL, NAVY, WHITE = '#1BB0C4', '#0B1D3A', '#FFFFFF'
CX, CY, R, SW = 22, 22, 9, 6.25
a = math.radians(-40)
sx, sy = CX + R * math.cos(a), CY + R * math.sin(a)
G_PATH = f'M{sx:.2f} {sy:.2f}A{R} {R} 0 1 0 {CX+R} {CY}H{CX+1}'
def mark(diamond=NAVY):
    return (f'<rect width="48" height="48" rx="11" fill="{TEAL}"/>'
            f'<path d="{G_PATH}" fill="none" stroke="{WHITE}" stroke-width="{SW}" stroke-linejoin="miter"/>'
            f'<path d="M33 32.5L37.5 37L33 41.5L28.5 37Z" fill="{diamond}"/>')
out = ''  # ejecutar desde esta carpeta, con Montserrat.ttf (variable) al lado
open(out + 'gestion-mark.svg', 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><title>Gestión</title>{mark()}</svg>')
for name, ink, sub, dia in (('gestion-lockup.svg', NAVY, '#55657E', NAVY), ('gestion-lockup-inverse.svg', WHITE, '#B8C6DB', WHITE)):
    d, w = text_path('GESTIÓN', 27, 62, 32, 0.06)
    d2, w2 = text_path('DE LA DIRECCIÓN DE PROYECTOS', 7.4, 63, 45, 0.12)
    W = int(max(w, w2) + 4)
    open(out + name, 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} 48" width="{W}" height="48"><title>Gestión · de la Dirección de Proyectos</title>{mark(dia)}<path d="{d}" fill="{ink}"/><path d="{d2}" fill="{sub}"/></svg>')
    print(name, W, round(w), round(w2))
print('G_PATH', G_PATH)
