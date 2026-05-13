import {j as x} from "./vendor-react-CfkYKD7G.js";
import {S as Te} from "./vendor-radix-VdrorRsZ.js";
import {u as Ve} from "./vendor-router-CuIEy8jV.js";
import {c as ke} from "./createLucideIcon-Bex6bMmO.js";
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = ke("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = ke("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
function ze(e) {
    var r, o, t = "";
    if (typeof e == "string" || typeof e == "number")
        t += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (r = 0; r < a; r++)
                e[r] && (o = ze(e[r])) && (t && (t += " "),
                t += o)
        } else
            for (o in e)
                e[o] && (t && (t += " "),
                t += o);
    return t
}
function Ce() {
    for (var e, r, o = 0, t = "", a = arguments.length; o < a; o++)
        (e = arguments[o]) && (r = ze(e)) && (t && (t += " "),
        t += r);
    return t
}
const be = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , he = Ce
  , Oe = (e, r) => o => {
    var t;
    if (r?.variants == null)
        return he(e, o?.class, o?.className);
    const {variants: a, defaultVariants: l} = r
      , c = Object.keys(a).map(g => {
        const f = o?.[g]
          , v = l?.[g];
        if (f === null)
            return null;
        const C = be(f) || be(v);
        return a[g][C]
    }
    )
      , p = o && Object.entries(o).reduce( (g, f) => {
        let[v,C] = f;
        return C === void 0 || (g[v] = C),
        g
    }
    , {})
      , u = r == null || (t = r.compoundVariants) === null || t === void 0 ? void 0 : t.reduce( (g, f) => {
        let {class: v, className: C, ...P} = f;
        return Object.entries(P).every(w => {
            let[k,N] = w;
            return Array.isArray(N) ? N.includes({
                ...l,
                ...p
            }[k]) : {
                ...l,
                ...p
            }[k] === N
        }
        ) ? [...g, v, C] : g
    }
    , []);
    return he(e, c, u, o?.class, o?.className)
}
  , ae = "-"
  , _e = e => {
    const r = We(e)
      , {conflictingClassGroups: o, conflictingClassGroupModifiers: t} = e;
    return {
        getClassGroupId: c => {
            const p = c.split(ae);
            return p[0] === "" && p.length !== 1 && p.shift(),
            Ne(p, r) || Be(c)
        }
        ,
        getConflictingClassGroupIds: (c, p) => {
            const u = o[c] || [];
            return p && t[c] ? [...u, ...t[c]] : u
        }
    }
}
  , Ne = (e, r) => {
    if (e.length === 0)
        return r.classGroupId;
    const o = e[0]
      , t = r.nextPart.get(o)
      , a = t ? Ne(e.slice(1), t) : void 0;
    if (a)
        return a;
    if (r.validators.length === 0)
        return;
    const l = e.join(ae);
    return r.validators.find( ({validator: c}) => c(l))?.classGroupId
}
  , xe = /^\[(.+)\]$/
  , Be = e => {
    if (xe.test(e)) {
        const r = xe.exec(e)[1]
          , o = r?.substring(0, r.indexOf(":"));
        if (o)
            return "arbitrary.." + o
    }
}
  , We = e => {
    const {theme: r, classGroups: o} = e
      , t = {
        nextPart: new Map,
        validators: []
    };
    for (const a in o)
        re(o[a], t, a, r);
    return t
}
  , re = (e, r, o, t) => {
    e.forEach(a => {
        if (typeof a == "string") {
            const l = a === "" ? r : ye(r, a);
            l.classGroupId = o;
            return
        }
        if (typeof a == "function") {
            if ($e(a)) {
                re(a(t), r, o, t);
                return
            }
            r.validators.push({
                validator: a,
                classGroupId: o
            });
            return
        }
        Object.entries(a).forEach( ([l,c]) => {
            re(c, ye(r, l), o, t)
        }
        )
    }
    )
}
  , ye = (e, r) => {
    let o = e;
    return r.split(ae).forEach(t => {
        o.nextPart.has(t) || o.nextPart.set(t, {
            nextPart: new Map,
            validators: []
        }),
        o = o.nextPart.get(t)
    }
    ),
    o
}
  , $e = e => e.isThemeGetter
  , Ue = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let r = 0
      , o = new Map
      , t = new Map;
    const a = (l, c) => {
        o.set(l, c),
        r++,
        r > e && (r = 0,
        t = o,
        o = new Map)
    }
    ;
    return {
        get(l) {
            let c = o.get(l);
            if (c !== void 0)
                return c;
            if ((c = t.get(l)) !== void 0)
                return a(l, c),
                c
        },
        set(l, c) {
            o.has(l) ? o.set(l, c) : a(l, c)
        }
    }
}
  , se = "!"
  , ne = ":"
  , He = ne.length
  , qe = e => {
    const {prefix: r, experimentalParseClassName: o} = e;
    let t = a => {
        const l = [];
        let c = 0, p = 0, u = 0, g;
        for (let w = 0; w < a.length; w++) {
            let k = a[w];
            if (c === 0 && p === 0) {
                if (k === ne) {
                    l.push(a.slice(u, w)),
                    u = w + He;
                    continue
                }
                if (k === "/") {
                    g = w;
                    continue
                }
            }
            k === "[" ? c++ : k === "]" ? c-- : k === "(" ? p++ : k === ")" && p--
        }
        const f = l.length === 0 ? a : a.substring(u)
          , v = Je(f)
          , C = v !== f
          , P = g && g > u ? g - u : void 0;
        return {
            modifiers: l,
            hasImportantModifier: C,
            baseClassName: v,
            maybePostfixModifierPosition: P
        }
    }
    ;
    if (r) {
        const a = r + ne
          , l = t;
        t = c => c.startsWith(a) ? l(c.substring(a.length)) : {
            isExternal: !0,
            modifiers: [],
            hasImportantModifier: !1,
            baseClassName: c,
            maybePostfixModifierPosition: void 0
        }
    }
    if (o) {
        const a = t;
        t = l => o({
            className: l,
            parseClassName: a
        })
    }
    return t
}
  , Je = e => e.endsWith(se) ? e.substring(0, e.length - 1) : e.startsWith(se) ? e.substring(1) : e
  , Ke = e => {
    const r = Object.fromEntries(e.orderSensitiveModifiers.map(t => [t, !0]));
    return t => {
        if (t.length <= 1)
            return t;
        const a = [];
        let l = [];
        return t.forEach(c => {
            c[0] === "[" || r[c] ? (a.push(...l.sort(), c),
            l = []) : l.push(c)
        }
        ),
        a.push(...l.sort()),
        a
    }
}
  , Xe = e => ({
    cache: Ue(e.cacheSize),
    parseClassName: qe(e),
    sortModifiers: Ke(e),
    ..._e(e)
})
  , De = /\s+/
  , Qe = (e, r) => {
    const {parseClassName: o, getClassGroupId: t, getConflictingClassGroupIds: a, sortModifiers: l} = r
      , c = []
      , p = e.trim().split(De);
    let u = "";
    for (let g = p.length - 1; g >= 0; g -= 1) {
        const f = p[g]
          , {isExternal: v, modifiers: C, hasImportantModifier: P, baseClassName: w, maybePostfixModifierPosition: k} = o(f);
        if (v) {
            u = f + (u.length > 0 ? " " + u : u);
            continue
        }
        let N = !!k
          , I = t(N ? w.substring(0, k) : w);
        if (!I) {
            if (!N) {
                u = f + (u.length > 0 ? " " + u : u);
                continue
            }
            if (I = t(w),
            !I) {
                u = f + (u.length > 0 ? " " + u : u);
                continue
            }
            N = !1
        }
        const U = l(C).join(":")
          , B = P ? U + se : U
          , T = B + I;
        if (c.includes(T))
            continue;
        c.push(T);
        const V = a(I, N);
        for (let R = 0; R < V.length; ++R) {
            const W = V[R];
            c.push(B + W)
        }
        u = f + (u.length > 0 ? " " + u : u)
    }
    return u
}
;
function Ye() {
    let e = 0, r, o, t = "";
    for (; e < arguments.length; )
        (r = arguments[e++]) && (o = Ae(r)) && (t && (t += " "),
        t += o);
    return t
}
const Ae = e => {
    if (typeof e == "string")
        return e;
    let r, o = "";
    for (let t = 0; t < e.length; t++)
        e[t] && (r = Ae(e[t])) && (o && (o += " "),
        o += r);
    return o
}
;
function Ze(e, ...r) {
    let o, t, a, l = c;
    function c(u) {
        const g = r.reduce( (f, v) => v(f), e());
        return o = Xe(g),
        t = o.cache.get,
        a = o.cache.set,
        l = p,
        p(u)
    }
    function p(u) {
        const g = t(u);
        if (g)
            return g;
        const f = Qe(u, o);
        return a(u, f),
        f
    }
    return function() {
        return l(Ye.apply(null, arguments))
    }
}
const b = e => {
    const r = o => o[e] || [];
    return r.isThemeGetter = !0,
    r
}
  , Se = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Me = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , eo = /^\d+\/\d+$/
  , oo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , to = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , ro = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , so = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , no = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , L = e => eo.test(e)
  , m = e => !!e && !Number.isNaN(Number(e))
  , j = e => !!e && Number.isInteger(Number(e))
  , oe = e => e.endsWith("%") && m(e.slice(0, -1))
  , M = e => oo.test(e)
  , ao = () => !0
  , io = e => to.test(e) && !ro.test(e)
  , je = () => !1
  , lo = e => so.test(e)
  , co = e => no.test(e)
  , mo = e => !s(e) && !n(e)
  , uo = e => O(e, Re, je)
  , s = e => Se.test(e)
  , F = e => O(e, Ge, io)
  , te = e => O(e, ho, m)
  , ve = e => O(e, Pe, je)
  , po = e => O(e, Ie, co)
  , D = e => O(e, Fe, lo)
  , n = e => Me.test(e)
  , $ = e => _(e, Ge)
  , go = e => _(e, xo)
  , we = e => _(e, Pe)
  , fo = e => _(e, Re)
  , bo = e => _(e, Ie)
  , Q = e => _(e, Fe, !0)
  , O = (e, r, o) => {
    const t = Se.exec(e);
    return t ? t[1] ? r(t[1]) : o(t[2]) : !1
}
  , _ = (e, r, o=!1) => {
    const t = Me.exec(e);
    return t ? t[1] ? r(t[1]) : o : !1
}
  , Pe = e => e === "position" || e === "percentage"
  , Ie = e => e === "image" || e === "url"
  , Re = e => e === "length" || e === "size" || e === "bg-size"
  , Ge = e => e === "length"
  , ho = e => e === "number"
  , xo = e => e === "family-name"
  , Fe = e => e === "shadow"
  , yo = () => {
    const e = b("color")
      , r = b("font")
      , o = b("text")
      , t = b("font-weight")
      , a = b("tracking")
      , l = b("leading")
      , c = b("breakpoint")
      , p = b("container")
      , u = b("spacing")
      , g = b("radius")
      , f = b("shadow")
      , v = b("inset-shadow")
      , C = b("text-shadow")
      , P = b("drop-shadow")
      , w = b("blur")
      , k = b("perspective")
      , N = b("aspect")
      , I = b("ease")
      , U = b("animate")
      , B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , T = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , V = () => [...T(), n, s]
      , R = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , W = () => ["auto", "contain", "none"]
      , d = () => [n, s, u]
      , A = () => [L, "full", "auto", ...d()]
      , le = () => [j, "none", "subgrid", n, s]
      , ce = () => ["auto", {
        span: ["full", j, n, s]
    }, j, n, s]
      , H = () => [j, "auto", n, s]
      , de = () => ["auto", "min", "max", "fr", n, s]
      , Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , E = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , S = () => ["auto", ...d()]
      , G = () => [L, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...d()]
      , i = () => [e, n, s]
      , me = () => [...T(), we, ve, {
        position: [n, s]
    }]
      , ue = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , pe = () => ["auto", "cover", "contain", fo, uo, {
        size: [n, s]
    }]
      , Z = () => [oe, $, F]
      , y = () => ["", "none", "full", g, n, s]
      , z = () => ["", m, $, F]
      , q = () => ["solid", "dashed", "dotted", "double"]
      , ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , h = () => [m, oe, we, ve]
      , fe = () => ["", "none", w, n, s]
      , J = () => ["none", m, n, s]
      , K = () => ["none", m, n, s]
      , ee = () => [m, n, s]
      , X = () => [L, "full", ...d()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [M],
            breakpoint: [M],
            color: [ao],
            container: [M],
            "drop-shadow": [M],
            ease: ["in", "out", "in-out"],
            font: [mo],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [M],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [M],
            shadow: [M],
            spacing: ["px", m],
            text: [M],
            "text-shadow": [M],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", L, s, n, N]
            }],
            container: ["container"],
            columns: [{
                columns: [m, s, n, p]
            }],
            "break-after": [{
                "break-after": B()
            }],
            "break-before": [{
                "break-before": B()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: V()
            }],
            overflow: [{
                overflow: R()
            }],
            "overflow-x": [{
                "overflow-x": R()
            }],
            "overflow-y": [{
                "overflow-y": R()
            }],
            overscroll: [{
                overscroll: W()
            }],
            "overscroll-x": [{
                "overscroll-x": W()
            }],
            "overscroll-y": [{
                "overscroll-y": W()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: A()
            }],
            "inset-x": [{
                "inset-x": A()
            }],
            "inset-y": [{
                "inset-y": A()
            }],
            start: [{
                start: A()
            }],
            end: [{
                end: A()
            }],
            top: [{
                top: A()
            }],
            right: [{
                right: A()
            }],
            bottom: [{
                bottom: A()
            }],
            left: [{
                left: A()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [j, "auto", n, s]
            }],
            basis: [{
                basis: [L, "full", "auto", p, ...d()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [m, L, "auto", "initial", "none", s]
            }],
            grow: [{
                grow: ["", m, n, s]
            }],
            shrink: [{
                shrink: ["", m, n, s]
            }],
            order: [{
                order: [j, "first", "last", "none", n, s]
            }],
            "grid-cols": [{
                "grid-cols": le()
            }],
            "col-start-end": [{
                col: ce()
            }],
            "col-start": [{
                "col-start": H()
            }],
            "col-end": [{
                "col-end": H()
            }],
            "grid-rows": [{
                "grid-rows": le()
            }],
            "row-start-end": [{
                row: ce()
            }],
            "row-start": [{
                "row-start": H()
            }],
            "row-end": [{
                "row-end": H()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": de()
            }],
            "auto-rows": [{
                "auto-rows": de()
            }],
            gap: [{
                gap: d()
            }],
            "gap-x": [{
                "gap-x": d()
            }],
            "gap-y": [{
                "gap-y": d()
            }],
            "justify-content": [{
                justify: [...Y(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...E(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...E()]
            }],
            "align-content": [{
                content: ["normal", ...Y()]
            }],
            "align-items": [{
                items: [...E(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...E(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Y()
            }],
            "place-items": [{
                "place-items": [...E(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...E()]
            }],
            p: [{
                p: d()
            }],
            px: [{
                px: d()
            }],
            py: [{
                py: d()
            }],
            ps: [{
                ps: d()
            }],
            pe: [{
                pe: d()
            }],
            pt: [{
                pt: d()
            }],
            pr: [{
                pr: d()
            }],
            pb: [{
                pb: d()
            }],
            pl: [{
                pl: d()
            }],
            m: [{
                m: S()
            }],
            mx: [{
                mx: S()
            }],
            my: [{
                my: S()
            }],
            ms: [{
                ms: S()
            }],
            me: [{
                me: S()
            }],
            mt: [{
                mt: S()
            }],
            mr: [{
                mr: S()
            }],
            mb: [{
                mb: S()
            }],
            ml: [{
                ml: S()
            }],
            "space-x": [{
                "space-x": d()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": d()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: G()
            }],
            w: [{
                w: [p, "screen", ...G()]
            }],
            "min-w": [{
                "min-w": [p, "screen", "none", ...G()]
            }],
            "max-w": [{
                "max-w": [p, "screen", "none", "prose", {
                    screen: [c]
                }, ...G()]
            }],
            h: [{
                h: ["screen", "lh", ...G()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...G()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...G()]
            }],
            "font-size": [{
                text: ["base", o, $, F]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [t, n, te]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", oe, s]
            }],
            "font-family": [{
                font: [go, s, r]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [a, n, s]
            }],
            "line-clamp": [{
                "line-clamp": [m, "none", n, te]
            }],
            leading: [{
                leading: [l, ...d()]
            }],
            "list-image": [{
                "list-image": ["none", n, s]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", n, s]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: i()
            }],
            "text-color": [{
                text: i()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...q(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [m, "from-font", "auto", n, F]
            }],
            "text-decoration-color": [{
                decoration: i()
            }],
            "underline-offset": [{
                "underline-offset": [m, "auto", n, s]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: d()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", n, s]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", n, s]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: me()
            }],
            "bg-repeat": [{
                bg: ue()
            }],
            "bg-size": [{
                bg: pe()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, j, n, s],
                    radial: ["", n, s],
                    conic: [j, n, s]
                }, bo, po]
            }],
            "bg-color": [{
                bg: i()
            }],
            "gradient-from-pos": [{
                from: Z()
            }],
            "gradient-via-pos": [{
                via: Z()
            }],
            "gradient-to-pos": [{
                to: Z()
            }],
            "gradient-from": [{
                from: i()
            }],
            "gradient-via": [{
                via: i()
            }],
            "gradient-to": [{
                to: i()
            }],
            rounded: [{
                rounded: y()
            }],
            "rounded-s": [{
                "rounded-s": y()
            }],
            "rounded-e": [{
                "rounded-e": y()
            }],
            "rounded-t": [{
                "rounded-t": y()
            }],
            "rounded-r": [{
                "rounded-r": y()
            }],
            "rounded-b": [{
                "rounded-b": y()
            }],
            "rounded-l": [{
                "rounded-l": y()
            }],
            "rounded-ss": [{
                "rounded-ss": y()
            }],
            "rounded-se": [{
                "rounded-se": y()
            }],
            "rounded-ee": [{
                "rounded-ee": y()
            }],
            "rounded-es": [{
                "rounded-es": y()
            }],
            "rounded-tl": [{
                "rounded-tl": y()
            }],
            "rounded-tr": [{
                "rounded-tr": y()
            }],
            "rounded-br": [{
                "rounded-br": y()
            }],
            "rounded-bl": [{
                "rounded-bl": y()
            }],
            "border-w": [{
                border: z()
            }],
            "border-w-x": [{
                "border-x": z()
            }],
            "border-w-y": [{
                "border-y": z()
            }],
            "border-w-s": [{
                "border-s": z()
            }],
            "border-w-e": [{
                "border-e": z()
            }],
            "border-w-t": [{
                "border-t": z()
            }],
            "border-w-r": [{
                "border-r": z()
            }],
            "border-w-b": [{
                "border-b": z()
            }],
            "border-w-l": [{
                "border-l": z()
            }],
            "divide-x": [{
                "divide-x": z()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": z()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...q(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...q(), "hidden", "none"]
            }],
            "border-color": [{
                border: i()
            }],
            "border-color-x": [{
                "border-x": i()
            }],
            "border-color-y": [{
                "border-y": i()
            }],
            "border-color-s": [{
                "border-s": i()
            }],
            "border-color-e": [{
                "border-e": i()
            }],
            "border-color-t": [{
                "border-t": i()
            }],
            "border-color-r": [{
                "border-r": i()
            }],
            "border-color-b": [{
                "border-b": i()
            }],
            "border-color-l": [{
                "border-l": i()
            }],
            "divide-color": [{
                divide: i()
            }],
            "outline-style": [{
                outline: [...q(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [m, n, s]
            }],
            "outline-w": [{
                outline: ["", m, $, F]
            }],
            "outline-color": [{
                outline: i()
            }],
            shadow: [{
                shadow: ["", "none", f, Q, D]
            }],
            "shadow-color": [{
                shadow: i()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", v, Q, D]
            }],
            "inset-shadow-color": [{
                "inset-shadow": i()
            }],
            "ring-w": [{
                ring: z()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: i()
            }],
            "ring-offset-w": [{
                "ring-offset": [m, F]
            }],
            "ring-offset-color": [{
                "ring-offset": i()
            }],
            "inset-ring-w": [{
                "inset-ring": z()
            }],
            "inset-ring-color": [{
                "inset-ring": i()
            }],
            "text-shadow": [{
                "text-shadow": ["none", C, Q, D]
            }],
            "text-shadow-color": [{
                "text-shadow": i()
            }],
            opacity: [{
                opacity: [m, n, s]
            }],
            "mix-blend": [{
                "mix-blend": [...ge(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": ge()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [m]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": h()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": h()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": i()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": i()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": h()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": h()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": i()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": i()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": h()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": h()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": i()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": i()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": h()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": h()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": i()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": i()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": h()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": h()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": i()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": i()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": h()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": h()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": i()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": i()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": h()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": h()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": i()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": i()
            }],
            "mask-image-radial": [{
                "mask-radial": [n, s]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": h()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": h()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": i()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": i()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": T()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [m]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": h()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": h()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": i()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": i()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: me()
            }],
            "mask-repeat": [{
                mask: ue()
            }],
            "mask-size": [{
                mask: pe()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", n, s]
            }],
            filter: [{
                filter: ["", "none", n, s]
            }],
            blur: [{
                blur: fe()
            }],
            brightness: [{
                brightness: [m, n, s]
            }],
            contrast: [{
                contrast: [m, n, s]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", P, Q, D]
            }],
            "drop-shadow-color": [{
                "drop-shadow": i()
            }],
            grayscale: [{
                grayscale: ["", m, n, s]
            }],
            "hue-rotate": [{
                "hue-rotate": [m, n, s]
            }],
            invert: [{
                invert: ["", m, n, s]
            }],
            saturate: [{
                saturate: [m, n, s]
            }],
            sepia: [{
                sepia: ["", m, n, s]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", n, s]
            }],
            "backdrop-blur": [{
                "backdrop-blur": fe()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [m, n, s]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [m, n, s]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", m, n, s]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [m, n, s]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", m, n, s]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m, n, s]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [m, n, s]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", m, n, s]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": d()
            }],
            "border-spacing-x": [{
                "border-spacing-x": d()
            }],
            "border-spacing-y": [{
                "border-spacing-y": d()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", n, s]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [m, "initial", n, s]
            }],
            ease: [{
                ease: ["linear", "initial", I, n, s]
            }],
            delay: [{
                delay: [m, n, s]
            }],
            animate: [{
                animate: ["none", U, n, s]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [k, n, s]
            }],
            "perspective-origin": [{
                "perspective-origin": V()
            }],
            rotate: [{
                rotate: J()
            }],
            "rotate-x": [{
                "rotate-x": J()
            }],
            "rotate-y": [{
                "rotate-y": J()
            }],
            "rotate-z": [{
                "rotate-z": J()
            }],
            scale: [{
                scale: K()
            }],
            "scale-x": [{
                "scale-x": K()
            }],
            "scale-y": [{
                "scale-y": K()
            }],
            "scale-z": [{
                "scale-z": K()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: ee()
            }],
            "skew-x": [{
                "skew-x": ee()
            }],
            "skew-y": [{
                "skew-y": ee()
            }],
            transform: [{
                transform: [n, s, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: V()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: X()
            }],
            "translate-x": [{
                "translate-x": X()
            }],
            "translate-y": [{
                "translate-y": X()
            }],
            "translate-z": [{
                "translate-z": X()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: i()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: i()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", n, s]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": d()
            }],
            "scroll-mx": [{
                "scroll-mx": d()
            }],
            "scroll-my": [{
                "scroll-my": d()
            }],
            "scroll-ms": [{
                "scroll-ms": d()
            }],
            "scroll-me": [{
                "scroll-me": d()
            }],
            "scroll-mt": [{
                "scroll-mt": d()
            }],
            "scroll-mr": [{
                "scroll-mr": d()
            }],
            "scroll-mb": [{
                "scroll-mb": d()
            }],
            "scroll-ml": [{
                "scroll-ml": d()
            }],
            "scroll-p": [{
                "scroll-p": d()
            }],
            "scroll-px": [{
                "scroll-px": d()
            }],
            "scroll-py": [{
                "scroll-py": d()
            }],
            "scroll-ps": [{
                "scroll-ps": d()
            }],
            "scroll-pe": [{
                "scroll-pe": d()
            }],
            "scroll-pt": [{
                "scroll-pt": d()
            }],
            "scroll-pr": [{
                "scroll-pr": d()
            }],
            "scroll-pb": [{
                "scroll-pb": d()
            }],
            "scroll-pl": [{
                "scroll-pl": d()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", n, s]
            }],
            fill: [{
                fill: ["none", ...i()]
            }],
            "stroke-w": [{
                stroke: [m, $, F, te]
            }],
            stroke: [{
                stroke: ["none", ...i()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , vo = Ze(yo);
function ie(...e) {
    return vo(Ce(e))
}
const wo = Oe("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function ko({className: e, variant: r, size: o, asChild: t=!1, ...a}) {
    const l = t ? Te : "button";
    return x.jsx(l, {
        "data-loc": "client/src/components/ui/button.tsx:52",
        "data-slot": "button",
        className: ie(wo({
            variant: r,
            size: o,
            className: e
        })),
        ...a
    })
}
function zo({className: e, ...r}) {
    return x.jsx("div", {
        "data-loc": "client/src/components/ui/card.tsx:7",
        "data-slot": "card",
        className: ie("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", e),
        ...r
    })
}
function Co({className: e, ...r}) {
    return x.jsx("div", {
        "data-loc": "client/src/components/ui/card.tsx:66",
        "data-slot": "card-content",
        className: ie("px-6", e),
        ...r
    })
}
function jo() {
    const [,e] = Ve()
      , r = () => {
        e("/")
    }
    ;
    return x.jsx("div", {
        "data-loc": "client/src/pages/NotFound.tsx:14",
        className: "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
        children: x.jsx(zo, {
            "data-loc": "client/src/pages/NotFound.tsx:15",
            className: "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
            children: x.jsxs(Co, {
                "data-loc": "client/src/pages/NotFound.tsx:16",
                className: "pt-8 pb-8 text-center",
                children: [x.jsx("div", {
                    "data-loc": "client/src/pages/NotFound.tsx:17",
                    className: "flex justify-center mb-6",
                    children: x.jsxs("div", {
                        "data-loc": "client/src/pages/NotFound.tsx:18",
                        className: "relative",
                        children: [x.jsx("div", {
                            "data-loc": "client/src/pages/NotFound.tsx:19",
                            className: "absolute inset-0 bg-red-100 rounded-full animate-pulse"
                        }), x.jsx(Ee, {
                            "data-loc": "client/src/pages/NotFound.tsx:20",
                            className: "relative h-16 w-16 text-red-500"
                        })]
                    })
                }), x.jsx("h1", {
                    "data-loc": "client/src/pages/NotFound.tsx:24",
                    className: "text-4xl font-bold text-slate-900 mb-2",
                    children: "404"
                }), x.jsx("h2", {
                    "data-loc": "client/src/pages/NotFound.tsx:26",
                    className: "text-xl font-semibold text-slate-700 mb-4",
                    children: "Page Not Found"
                }), x.jsxs("p", {
                    "data-loc": "client/src/pages/NotFound.tsx:30",
                    className: "text-slate-600 mb-8 leading-relaxed",
                    children: ["Sorry, the page you are looking for doesn't exist.", x.jsx("br", {
                        "data-loc": "client/src/pages/NotFound.tsx:32"
                    }), "It may have been moved or deleted."]
                }), x.jsx("div", {
                    "data-loc": "client/src/pages/NotFound.tsx:36",
                    className: "flex flex-col sm:flex-row gap-3 justify-center",
                    children: x.jsxs(ko, {
                        "data-loc": "client/src/pages/NotFound.tsx:37",
                        onClick: r,
                        className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
                        children: [x.jsx(Le, {
                            "data-loc": "client/src/pages/NotFound.tsx:41",
                            className: "w-4 h-4 mr-2"
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
export {jo as default};
