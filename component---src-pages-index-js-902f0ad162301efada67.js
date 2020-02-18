(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
  '0mN4': function (e, t, a) {
    a('OGtf')('fixed', ((e) => function () { return e(this, 'tt', '', ''); }));
  },
  '9eSz': function (e, t, a) {
    a('rGqo'), a('yt8O'), a('Btvt'), a('XfO3'), a('EK0E'), a('INYr'), a('0mN4'); const r = a('TqRt'); t.__esModule = !0, t.default = void 0; let i; const n = r(a('PJYZ')); const s = r(a('VbXa')); const d = r(a('8OQS')); const o = r(a('pVnL')); const l = r(a('q1tI')); const c = r(a('17x9')); const u = function (e) { const t = (0, o.default)({}, e); const a = t.resolutions; const r = t.sizes; const i = t.critical; return a && (t.fixed = a, delete t.resolutions), r && (t.fluid = r, delete t.sizes), i && (t.loading = 'eager'), t.fluid && (t.fluid = E([].concat(t.fluid))), t.fixed && (t.fixed = E([].concat(t.fixed))), t; }; const f = function (e) { const t = e.media; return !!t && (S && !!window.matchMedia(t).matches); }; const g = function (e) { const t = e.fluid; const a = e.fixed; return p(t || a).src; }; var p = function (e) { if (S && (function (e) { return !!e && Array.isArray(e) && e.some(((e) => void 0 !== e.media)); }(e))) { const t = e.findIndex(f); if (t !== -1) return e[t]; } return e[0]; }; const h = Object.create({}); const m = function (e) { const t = u(e); const a = g(t); return h[a] || !1; }; const b = typeof HTMLImageElement !== 'undefined' && 'loading' in HTMLImageElement.prototype; var S = typeof window !== 'undefined'; const y = S && window.IntersectionObserver; const v = new WeakMap(); function w(e) {
      return e.map(((e) => {
        const t = e.src; const a = e.srcSet; const r = e.srcSetWebp; const i = e.media; const n = e.sizes; return l.default.createElement(l.default.Fragment, { key: t }, r && l.default.createElement('source', {
          type: 'image/webp', media: i, srcSet: r, sizes: n,
        }), l.default.createElement('source', { media: i, srcSet: a, sizes: n }));
      }));
    } function E(e) { const t = []; const a = []; return e.forEach(((e) => (e.media ? t : a).push(e))), [].concat(t, a); } function I(e) { return e.map(((e) => { const t = e.src; const a = e.media; const r = e.tracedSVG; return l.default.createElement('source', { key: t, media: a, srcSet: r }); })); } function z(e) { return e.map(((e) => { const t = e.src; const a = e.media; const r = e.base64; return l.default.createElement('source', { key: t, media: a, srcSet: r }); })); } function L(e, t) { const a = e.srcSet; const r = e.srcSetWebp; const i = e.media; const n = e.sizes; return `<source ${t ? "type='image/webp' " : ''}${i ? `media="${i}" ` : ''}srcset="${t ? r : a}" ${n ? `sizes="${n}" ` : ''}/>`; } const A = function (e, t) { const a = (void 0 === i && typeof window !== 'undefined' && window.IntersectionObserver && (i = new window.IntersectionObserver((((e) => { e.forEach(((e) => { if (v.has(e.target)) { const t = v.get(e.target); (e.isIntersecting || e.intersectionRatio > 0) && (i.unobserve(e.target), v.delete(e.target), t()); } })); })), { rootMargin: '200px' })), i); return a && (a.observe(e), v.set(e, t)), function () { a.unobserve(e), v.delete(e); }; }; const O = function (e) { const t = e.src ? `src="${e.src}" ` : 'src="" '; const a = e.sizes ? `sizes="${e.sizes}" ` : ''; const r = e.srcSet ? `srcset="${e.srcSet}" ` : ''; const i = e.title ? `title="${e.title}" ` : ''; const n = e.alt ? `alt="${e.alt}" ` : 'alt="" '; const s = e.width ? `width="${e.width}" ` : ''; const d = e.height ? `height="${e.height}" ` : ''; const o = e.crossOrigin ? `crossorigin="${e.crossOrigin}" ` : ''; const l = e.loading ? `loading="${e.loading}" ` : ''; const c = e.draggable ? `draggable="${e.draggable}" ` : ''; return `<picture>${e.imageVariants.map(((e) => (e.srcSetWebp ? L(e, !0) : '') + L(e))).join('')}<img ${l}${s}${d}${a}${r}${t}${n}${i}${o}${c}style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`; }; const R = function (e) { const t = e.src; const a = e.imageVariants; const r = e.generateSources; const i = e.spreadProps; const n = e.ariaHidden; const s = l.default.createElement(V, (0, o.default)({ src: t }, i, { ariaHidden: n })); return a.length > 1 ? l.default.createElement('picture', null, r(a), s) : s; }; var V = l.default.forwardRef(((e, t) => {
      const a = e.sizes; const r = e.srcSet; const i = e.src; const n = e.style; const s = e.onLoad; const c = e.onError; const u = e.loading; const f = e.draggable; const g = e.ariaHidden; const p = (0, d.default)(e, ['sizes', 'srcSet', 'src', 'style', 'onLoad', 'onError', 'loading', 'draggable', 'ariaHidden']); return l.default.createElement('img', (0, o.default)({
        'aria-hidden': g, sizes: a, srcSet: r, src: i,
      }, p, {
        onLoad: s,
        onError: c,
        ref: t,
        loading: u,
        draggable: f,
        style: (0, o.default)({
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center',
        }, n),
      }));
    })); V.propTypes = { style: c.default.object, onError: c.default.func, onLoad: c.default.func }; const N = (function (e) {
      function t(t) {
        let a; (a = e.call(this, t) || this).seenBefore = S && m(t), a.isCritical = t.loading === 'eager' || t.critical, a.addNoScript = !(a.isCritical && !t.fadeIn), a.useIOSupport = !b && y && !a.isCritical && !a.seenBefore; const r = a.isCritical || S && (b || !a.useIOSupport); return a.state = {
          isVisible: r, imgLoaded: !1, imgCached: !1, fadeIn: !a.seenBefore && t.fadeIn,
        }, a.imageRef = l.default.createRef(), a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a)), a.handleRef = a.handleRef.bind((0, n.default)(a)), a;
      }(0, s.default)(t, e); const a = t.prototype; return a.componentDidMount = function () { if (this.state.isVisible && typeof this.props.onStartLoad === 'function' && this.props.onStartLoad({ wasCached: m(this.props) }), this.isCritical) { const e = this.imageRef.current; e && e.complete && this.handleImageLoaded(); } }, a.componentWillUnmount = function () { this.cleanUpListeners && this.cleanUpListeners(); }, a.handleRef = function (e) { const t = this; this.useIOSupport && e && (this.cleanUpListeners = A(e, (() => { const e = m(t.props); t.state.isVisible || typeof t.props.onStartLoad !== 'function' || t.props.onStartLoad({ wasCached: e }), t.setState({ isVisible: !0 }, (() => t.setState({ imgLoaded: e, imgCached: !!t.imageRef.current.currentSrc }))); }))); }, a.handleImageLoaded = function () { let e; let t; let a; e = this.props, t = u(e), a = g(t), h[a] = !0, this.setState({ imgLoaded: !0 }), this.props.onLoad && this.props.onLoad(); }, a.render = function () {
        const e = u(this.props); const t = e.title; const a = e.alt; const r = e.className; const i = e.style; const n = void 0 === i ? {} : i; const s = e.imgStyle; const d = void 0 === s ? {} : s; const c = e.placeholderStyle; const f = void 0 === c ? {} : c; const g = e.placeholderClassName; const h = e.fluid; const m = e.fixed; const b = e.backgroundColor; const S = e.durationFadeIn; const y = e.Tag; const v = e.itemProp; const E = e.loading; const L = e.draggable; const A = !1 === this.state.fadeIn || this.state.imgLoaded; const N = !0 === this.state.fadeIn && !this.state.imgCached; const C = (0, o.default)({ opacity: A ? 1 : 0, transition: N ? `opacity ${S}ms` : 'none' }, d); const x = typeof b === 'boolean' ? 'lightgray' : b; const T = { transitionDelay: `${S}ms` }; const q = (0, o.default)({ opacity: this.state.imgLoaded ? 0 : 1 }, N && T, {}, d, {}, f); const W = {
          title: t, alt: this.state.isVisible ? '' : a, style: q, className: g, itemProp: v,
        }; if (h) {
          const H = h; const P = p(h); return l.default.createElement(y, {
            className: `${r || ''} gatsby-image-wrapper`, style: (0, o.default)({ position: 'relative', overflow: 'hidden' }, n), ref: this.handleRef, key: `fluid-${JSON.stringify(P.srcSet)}`,
          }, l.default.createElement(y, { 'aria-hidden': !0, style: { width: '100%', paddingBottom: `${100 / P.aspectRatio}%` } }), x && l.default.createElement(y, {
            'aria-hidden': !0,
            title: t,
            style: (0, o.default)({
              backgroundColor: x, position: 'absolute', top: 0, bottom: 0, opacity: this.state.imgLoaded ? 0 : 1, right: 0, left: 0,
            }, N && T),
          }), P.base64 && l.default.createElement(R, {
            ariaHidden: !0, src: P.base64, spreadProps: W, imageVariants: H, generateSources: z,
          }), P.tracedSVG && l.default.createElement(R, {
            ariaHidden: !0, src: P.tracedSVG, spreadProps: W, imageVariants: H, generateSources: I,
          }), this.state.isVisible && l.default.createElement('picture', null, w(H), l.default.createElement(V, {
            alt: a, title: t, sizes: P.sizes, src: P.src, crossOrigin: this.props.crossOrigin, srcSet: P.srcSet, style: C, ref: this.imageRef, onLoad: this.handleImageLoaded, onError: this.props.onError, itemProp: v, loading: E, draggable: L,
          })), this.addNoScript && l.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: O((0, o.default)({ alt: a, title: t, loading: E }, P, { imageVariants: H })) } }));
        } if (m) {
          const M = m; const k = p(m); const B = (0, o.default)({
            position: 'relative', overflow: 'hidden', display: 'inline-block', width: k.width, height: k.height,
          }, n); return n.display === 'inherit' && delete B.display, l.default.createElement(y, {
            className: `${r || ''} gatsby-image-wrapper`, style: B, ref: this.handleRef, key: `fixed-${JSON.stringify(k.srcSet)}`,
          }, x && l.default.createElement(y, {
            'aria-hidden': !0,
            title: t,
            style: (0, o.default)({
              backgroundColor: x, width: k.width, opacity: this.state.imgLoaded ? 0 : 1, height: k.height,
            }, N && T),
          }), k.base64 && l.default.createElement(R, {
            ariaHidden: !0, src: k.base64, spreadProps: W, imageVariants: M, generateSources: z,
          }), k.tracedSVG && l.default.createElement(R, {
            ariaHidden: !0, src: k.tracedSVG, spreadProps: W, imageVariants: M, generateSources: I,
          }), this.state.isVisible && l.default.createElement('picture', null, w(M), l.default.createElement(V, {
            alt: a, title: t, width: k.width, height: k.height, sizes: k.sizes, src: k.src, crossOrigin: this.props.crossOrigin, srcSet: k.srcSet, style: C, ref: this.imageRef, onLoad: this.handleImageLoaded, onError: this.props.onError, itemProp: v, loading: E, draggable: L,
          })), this.addNoScript && l.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: O((0, o.default)({ alt: a, title: t, loading: E }, k, { imageVariants: M })) } }));
        } return null;
      }, t;
    }(l.default.Component)); N.defaultProps = {
      fadeIn: !0, durationFadeIn: 500, alt: '', Tag: 'div', loading: 'lazy',
    }; const C = c.default.shape({
      width: c.default.number.isRequired, height: c.default.number.isRequired, src: c.default.string.isRequired, srcSet: c.default.string.isRequired, base64: c.default.string, tracedSVG: c.default.string, srcWebp: c.default.string, srcSetWebp: c.default.string, media: c.default.string,
    }); const x = c.default.shape({
      aspectRatio: c.default.number.isRequired, src: c.default.string.isRequired, srcSet: c.default.string.isRequired, sizes: c.default.string.isRequired, base64: c.default.string, tracedSVG: c.default.string, srcWebp: c.default.string, srcSetWebp: c.default.string, media: c.default.string,
    }); N.propTypes = {
      resolutions: C, sizes: x, fixed: c.default.oneOfType([C, c.default.arrayOf(C)]), fluid: c.default.oneOfType([x, c.default.arrayOf(x)]), fadeIn: c.default.bool, durationFadeIn: c.default.number, title: c.default.string, alt: c.default.string, className: c.default.oneOfType([c.default.string, c.default.object]), critical: c.default.bool, crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]), style: c.default.object, imgStyle: c.default.object, placeholderStyle: c.default.object, placeholderClassName: c.default.string, backgroundColor: c.default.oneOfType([c.default.string, c.default.bool]), onLoad: c.default.func, onError: c.default.func, onStartLoad: c.default.func, Tag: c.default.string, itemProp: c.default.string, loading: c.default.oneOf(['auto', 'lazy', 'eager']), draggable: c.default.bool,
    }; const T = N; t.default = T;
  },
  INYr(e, t, a) {
    const r = a('XKFU'); const i = a('CkkT')(6); const n = 'findIndex'; let s = !0; n in [] && Array(1)[n]((() => { s = !1; })), r(r.P + r.F * s, 'Array', { findIndex(e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0); } }), a('nGyu')(n);
  },
  OGtf(e, t, a) { const r = a('XKFU'); const i = a('eeVq'); const n = a('vhPU'); const s = /"/g; const d = function (e, t, a, r) { const i = String(n(e)); let d = `<${t}`; return a !== '' && (d += ` ${a}="${String(r).replace(s, '&quot;')}"`), `${d}>${i}</${t}>`; }; e.exports = function (e, t) { const a = {}; a[e] = t(d), r(r.P + r.F * i((() => { const t = ''[e]('"'); return t !== t.toLowerCase() || t.split('"').length > 3; })), 'String', a); }; },
  RXBc(e, t, a) {
    a.r(t); const r = a('q1tI'); const i = a.n(r); const n = a('Wbzz'); const s = a('Bl7J'); const d = a('ezAz'); const o = a('9eSz'); const l = a.n(o); const c = function () { const e = d.data; return i.a.createElement(l.a, { fluid: e.placeholderImage.childImageSharp.fluid }); }; const u = a('vrFN'); t.default = function () { return i.a.createElement(s.a, null, i.a.createElement(u.a, { title: 'Home' }), i.a.createElement('h1', null, 'Hi people'), i.a.createElement('p', null, 'Welcome to your new Gatsby site.'), i.a.createElement('p', null, 'Now go build something great.'), i.a.createElement('div', { style: { maxWidth: '300px', marginBottom: '1.45rem' } }, i.a.createElement(c, null)), i.a.createElement(n.Link, { to: '/page-2/' }, 'Go to page 2')); };
  },
  ezAz(e) { e.exports = JSON.parse('{"data":{"placeholderImage":{"id":"894b12fd-5022-52a7-9b45-bcefec342214","childImageSharp":{"id":"4be9c4eb-f0c9-59a2-bf61-f817728bcba4","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'); },
}]);
// # sourceMappingURL=component---src-pages-index-js-902f0ad162301efada67.js.map
