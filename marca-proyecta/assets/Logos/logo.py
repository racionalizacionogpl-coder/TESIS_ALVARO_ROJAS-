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
def mark(dx=0, dy=0, sc=1.0, diamond=NAVY):
    t = lambda v: v
    return (f'<g transform="translate({dx} {dy}) scale({sc})">'
            f'<rect width="48" height="48" rx="11" fill="{TEAL}"/>'
            f'<rect x="13.5" y="11" width="6.5" height="26" rx="1.2" fill="{WHITE}"/>'
            f'<path d="M17 14.25H26.5A6.75 6.75 0 0 1 26.5 27.75H17" fill="none" stroke="{WHITE}" stroke-width="6.5"/>'
            f'<path d="M33 32.5L37.5 37L33 41.5L28.5 37Z" fill="{diamond}"/></g>')
open('ds/project/assets/Logos/proyecta-mark.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><title>Proyecta</title>{mark()}</svg>')
for name, ink, sub in (('proyecta-lockup.svg', NAVY, '#55657E'), ('proyecta-lockup-inverse.svg', WHITE, '#B8C6DB')):
    d, w = text_path('PROYECTA', 27, 62, 31, 0.06)
    d2, w2 = text_path('DIRECCIÓN DE PROYECTOS', 8.6, 63, 45, 0.16) if 'Ó' and ord('Ó') in cmap else ('', 0)
    W = int(max(w, w2) + 4)
    open('ds/project/assets/Logos/' + name, 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} 48" width="{W}" height="48"><title>Proyecta · Dirección de Proyectos</title>{mark(diamond=NAVY if ink == NAVY else WHITE)}<path d="{d}" fill="{ink}"/><path d="{d2}" fill="{sub}"/></svg>')
    print(name, W)
# export path data for the app header (wordmark only, origin 0)
d, w = text_path('PROYECTA', 20, 0, 20, 0.06)
open('wordmark-path.txt','w').write(f'{w:.1f}\n{d}')
print('wordmark w', w)
