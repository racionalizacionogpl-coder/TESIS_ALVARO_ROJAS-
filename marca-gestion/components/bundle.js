/* @ds-bundle: {"format":4,"namespace":"Gestion","components":[{"name":"Button"},{"name":"StatusPill"},{"name":"SectionTitle"},{"name":"KpiTile"},{"name":"ProjectCard"},{"name":"Countdown"},{"name":"Icon"}]} */
(function () {
  var R = window.React, h = R.createElement;
  var ICONS = {"portafolio": "<rect x=\"3.5\" y=\"3.5\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"13.5\" y=\"3.5\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"3.5\" y=\"13.5\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"13.5\" y=\"13.5\" width=\"7\" height=\"7\" rx=\"1.5\"/>", "alerta": "<path d=\"M12 3.8L21 19.5H3Z\"/><path d=\"M12 9.5v4.5\"/><path d=\"M12 16.9v.1\"/>", "cronograma": "<rect x=\"3\" y=\"4.5\" width=\"10\" height=\"3.2\" rx=\"1\"/><rect x=\"8\" y=\"10.4\" width=\"12.5\" height=\"3.2\" rx=\"1\"/><rect x=\"5.5\" y=\"16.3\" width=\"9\" height=\"3.2\" rx=\"1\"/>", "riesgo": "<path d=\"M12 3l7 3v5c0 4.6-3 8.1-7 10-4-1.9-7-5.4-7-10V6z\"/><path d=\"M12 8.2v4.3\"/><path d=\"M12 15.6v.1\"/>", "acuerdo": "<rect x=\"5\" y=\"4.5\" width=\"14\" height=\"16.5\" rx=\"2\"/><path d=\"M9.5 4.5V3h5v1.5\"/><path d=\"M8.6 13.1l2.4 2.4 4.4-4.9\"/>", "equipo": "<circle cx=\"9\" cy=\"8\" r=\"3.2\"/><path d=\"M3.5 19.5c0-3.1 2.5-5.3 5.5-5.3s5.5 2.2 5.5 5.3\"/><circle cx=\"16.8\" cy=\"9\" r=\"2.6\"/><path d=\"M15.6 14.3c2.8-.2 4.9 1.8 4.9 4.7\"/>", "hito": "<path d=\"M12 3l6 6-6 6-6-6z\"/><path d=\"M12 15v6\"/>", "curva": "<path d=\"M3 18.5l6-6 4 3.2 8-9\"/><path d=\"M15.5 6.7H21v5.5\"/>", "cambio": "<path d=\"M4 8.5h14\"/><path d=\"M14.5 5l3.5 3.5-3.5 3.5\"/><path d=\"M20 15.5H6\"/><path d=\"M9.5 12L6 15.5 9.5 19\"/>", "asesor": "<path d=\"M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9z\"/><path d=\"M18.5 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z\"/>"};
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) if (keys.indexOf(k) < 0) r[k] = o[k]; return r; }
  function Icon(p) { return h('svg', { className: cx('py-icon', p.className), viewBox: '0 0 24 24', width: p.size || 24, height: p.size || 24, fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false', dangerouslySetInnerHTML: { __html: ICONS[p.name] || '' } }); }
  function Button(p) {
    var variant = p.variant || 'outline', rest = omit(p, ['variant', 'size', 'icon', 'children', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, { className: cx('py-btn', 'py-btn--' + variant, p.size === 'sm' && 'py-btn--sm', p.className) }), p.icon ? h(Icon, { name: p.icon, size: 18 }) : null, p.children);
  }
  var TONE_LABEL = { ok: 'En control', warn: 'En observación', crit: 'Crítico', idle: 'Sin línea base', info: 'En curso' };
  function StatusPill(p) { var tone = p.tone || 'idle'; return h('span', { className: 'py-pill py-pill--' + tone }, h('i', { 'aria-hidden': 'true' }), p.children || TONE_LABEL[tone]); }
  function SectionTitle(p) { return h('div', { className: 'py-st py-st--' + (p.align || 'center') }, p.eyebrow ? h('p', { className: 'py-st-eyebrow' }, p.eyebrow) : null, h('h2', null, p.title), h('div', { className: 'py-bars', 'aria-hidden': 'true' }, h('span', null), h('span', null))); }
  function KpiTile(p) { return h('div', { className: 'py-kpi' }, p.icon ? h(Icon, { name: p.icon, size: 40 }) : null, h('span', { className: 'py-kpi-label' }, p.label), h('span', { className: 'py-kpi-value' }, p.value), p.sub ? h('span', { className: 'py-kpi-sub' }, p.sub) : null); }
  function clamp(v) { return Math.max(0, Math.min(100, Number(v) || 0)); }
  function ProjectCard(p) {
    var real = clamp(p.real), plan = p.plan == null ? null : clamp(p.plan);
    return h('article', { className: cx('py-card', p.featured && 'py-card--featured') },
      h('div', { className: 'py-card-top' }, h('span', { className: 'py-code' }, p.code), h(StatusPill, { tone: p.tone || 'idle' }, p.status)),
      h('h3', { className: 'py-card-title' }, p.name),
      h('div', { className: 'py-progress', role: 'img', 'aria-label': 'Avance real ' + Math.round(real) + ' %' + (plan != null ? ', planificado ' + Math.round(plan) + ' %' : '') }, h('span', { style: { width: real + '%' } }), plan != null ? h('i', { style: { left: 'calc(' + plan + '% - 1px)' } }) : null),
      h('div', { className: 'py-card-meta' }, h('span', null, 'Real ', h('b', null, Math.round(real) + ' %')), plan != null ? h('span', null, 'Plan ', h('b', null, Math.round(plan) + ' %')) : null, p.spi != null ? h('span', null, 'SPI ', h('b', null, Number(p.spi).toFixed(2))) : null),
      p.onOpen ? h(Button, { variant: p.featured ? 'pill' : 'outline', size: 'sm', onClick: p.onOpen }, 'Ver proyecto') : null);
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function Countdown(p) {
    var st = R.useState(Date.now()), now = st[0], set = st[1];
    R.useEffect(function () { var t = setInterval(function () { set(Date.now()); }, 1000); return function () { clearInterval(t); }; }, []);
    var diff = Math.max(0, new Date(p.target).getTime() - now);
    var cells = [[Math.floor(diff / 864e5), 'Días'], [Math.floor(diff / 36e5) % 24, 'Horas'], [Math.floor(diff / 6e4) % 60, 'Min'], [Math.floor(diff / 1e3) % 60, 'Seg']];
    return h('section', { className: 'py-cd', 'aria-label': (p.label || 'Próximo hito') + ': ' + (p.title || '') },
      h('p', { className: 'py-cd-eyebrow' }, p.label || 'Próximo hito'), h('p', { className: 'py-cd-title' }, p.title),
      h('div', { className: 'py-cd-row' }, cells.map(function (c) { return h('div', { className: 'py-cd-c', key: c[1] }, h('b', null, pad(c[0])), h('span', null, c[1])); })));
  }
  window.Gestion = Object.assign(window.Gestion || {}, { Button: Button, StatusPill: StatusPill, SectionTitle: SectionTitle, KpiTile: KpiTile, ProjectCard: ProjectCard, Countdown: Countdown, Icon: Icon });
})();
