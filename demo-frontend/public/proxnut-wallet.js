function ft() {
}
function Oi(e) {
  return e();
}
function po() {
  return /* @__PURE__ */ Object.create(null);
}
function Pe(e) {
  e.forEach(Oi);
}
function Jr(e) {
  return typeof e == "function";
}
function Be(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Pr;
function pi(e, t) {
  return Pr || (Pr = document.createElement("a")), Pr.href = t, e === Pr.href;
}
function $o(e) {
  return Object.keys(e).length === 0;
}
function Zo(e, ...t) {
  if (e == null)
    return ft;
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function Kr(e) {
  let t;
  return Zo(e, (r) => t = r)(), t;
}
function We(e, t, r) {
  e.$$.on_destroy.push(Zo(t, r));
}
function j(e, t) {
  e.appendChild(t);
}
function et(e, t, r) {
  e.insertBefore(t, r || null);
}
function rt(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function aa(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function $(e) {
  return document.createElement(e);
}
function ee(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Jt(e) {
  return document.createTextNode(e);
}
function ct() {
  return Jt(" ");
}
function hn() {
  return Jt("");
}
function ne(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function D(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function Jo(e) {
  return e === "" ? null : +e;
}
function ua(e) {
  return Array.from(e.childNodes);
}
function te(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function Gr(e, t) {
  e.value = t ?? "";
}
function Yt(e, t, r, n) {
  r === null ? e.style.removeProperty(t) : e.style.setProperty(t, r, n ? "important" : "");
}
function fa(e) {
  const t = {};
  for (const r of e)
    t[r.name] = r.value;
  return t;
}
let Ar;
function _r(e) {
  Ar = e;
}
function la() {
  if (!Ar)
    throw new Error("Function called outside component initialization");
  return Ar;
}
function Go(e) {
  la().$$.on_mount.push(e);
}
const nr = [], $e = [], zr = [], mi = [], ca = Promise.resolve();
let gi = !1;
function ha() {
  gi || (gi = !0, ca.then(Yr));
}
function yi(e) {
  zr.push(e);
}
function Pi(e) {
  mi.push(e);
}
const Gn = /* @__PURE__ */ new Set();
let Qe = 0;
function Yr() {
  if (Qe !== 0)
    return;
  const e = Ar;
  do {
    try {
      for (; Qe < nr.length; ) {
        const t = nr[Qe];
        Qe++, _r(t), da(t.$$);
      }
    } catch (t) {
      throw nr.length = 0, Qe = 0, t;
    }
    for (_r(null), nr.length = 0, Qe = 0; $e.length; )
      $e.pop()();
    for (let t = 0; t < zr.length; t += 1) {
      const r = zr[t];
      Gn.has(r) || (Gn.add(r), r());
    }
    zr.length = 0;
  } while (nr.length);
  for (; mi.length; )
    mi.pop()();
  gi = !1, Gn.clear(), _r(e);
}
function da(e) {
  if (e.fragment !== null) {
    e.update(), Pe(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(yi);
  }
}
const jr = /* @__PURE__ */ new Set();
let ze;
function Le() {
  ze = {
    r: 0,
    c: [],
    p: ze
    // parent group
  };
}
function Fe() {
  ze.r || Pe(ze.c), ze = ze.p;
}
function gt(e, t) {
  e && e.i && (jr.delete(e), e.i(t));
}
function xt(e, t, r, n) {
  if (e && e.o) {
    if (jr.has(e))
      return;
    jr.add(e), ze.c.push(() => {
      jr.delete(e), n && (r && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
function Li(e, t, r) {
  const n = e.$$.props[t];
  n !== void 0 && (e.$$.bound[n] = r, r(e.$$.ctx[n]));
}
function Me(e) {
  e && e.c();
}
function me(e, t, r, n) {
  const { fragment: o, after_update: i } = e.$$;
  o && o.m(t, r), n || yi(() => {
    const s = e.$$.on_mount.map(Oi).filter(Jr);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Pe(s), e.$$.on_mount = [];
  }), i.forEach(yi);
}
function fe(e, t) {
  const r = e.$$;
  r.fragment !== null && (Pe(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function pa(e, t) {
  e.$$.dirty[0] === -1 && (nr.push(e), ha(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function De(e, t, r, n, o, i, s, a = [-1]) {
  const l = Ar;
  _r(e);
  const p = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: ft,
    not_equal: o,
    bound: po(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: po(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(p.root);
  let y = !1;
  if (p.ctx = r ? r(e, t.props || {}, (b, S, ...I) => {
    const T = I.length ? I[0] : S;
    return p.ctx && o(p.ctx[b], p.ctx[b] = T) && (!p.skip_bound && p.bound[b] && p.bound[b](T), y && pa(e, b)), S;
  }) : [], p.update(), y = !0, Pe(p.before_update), p.fragment = n ? n(p.ctx) : !1, t.target) {
    if (t.hydrate) {
      const b = ua(t.target);
      p.fragment && p.fragment.l(b), b.forEach(rt);
    } else
      p.fragment && p.fragment.c();
    t.intro && gt(e.$$.fragment), me(e, t.target, t.anchor, t.customElement), Yr();
  }
  _r(l);
}
let Yo;
typeof HTMLElement == "function" && (Yo = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(Oi).filter(Jr);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, r) {
    this[e] = r;
  }
  disconnectedCallback() {
    Pe(this.$$.on_disconnect);
  }
  $destroy() {
    fe(this, 1), this.$destroy = ft;
  }
  $on(e, t) {
    if (!Jr(t))
      return ft;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    };
  }
  $set(e) {
    this.$$set && !$o(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
class Ge {
  $destroy() {
    fe(this, 1), this.$destroy = ft;
  }
  $on(t, r) {
    if (!Jr(r))
      return ft;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !$o(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const tr = [];
function dn(e, t = ft) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (Be(e, a) && (e = a, r)) {
      const l = !tr.length;
      for (const p of n)
        p[1](), tr.push(p, e);
      if (l) {
        for (let p = 0; p < tr.length; p += 2)
          tr[p][0](tr[p + 1]);
        tr.length = 0;
      }
    }
  }
  function i(a) {
    o(a(e));
  }
  function s(a, l = ft) {
    const p = [a, l];
    return n.add(p), n.size === 1 && (r = t(o) || ft), a(e), () => {
      n.delete(p), n.size === 0 && (r(), r = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
const sr = dn(
  "https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC"
), ma = window.localStorage.getItem("cashu-tokens") ?? "[]", ga = JSON.parse(ma), Ne = dn(ga);
Ne.subscribe(async (e) => {
  const t = JSON.stringify(e);
  window.localStorage.setItem("cashu-tokens", t);
});
const ya = window.localStorage.getItem("cashu-keys") ?? "{}", wa = JSON.parse(ya), Mr = dn(wa);
Mr.subscribe(async (e) => {
  const t = JSON.stringify(e);
  window.localStorage.setItem("cashu-keys", t);
});
const Fi = dn([]);
function xe(e, t) {
  Fi.update((r) => [{ level: e, message: t }, ...r]), setTimeout(va, 4e3);
}
function va() {
  Fi.update((e) => [...e.slice(0, e.length - 1)]);
}
function ba(e) {
  let t, r, n, o, i, s, a, l, p, y, b, S, I, T, E, N, C, U, O, P, L, q, z, W, Y;
  return {
    c() {
      t = $("div"), r = $("div"), n = $("div"), o = $("p"), i = Jt(
        /*amount*/
        e[1]
      ), s = ct(), a = ee("svg"), l = ee("g"), p = ee("g"), y = ee("path"), b = ee("circle"), S = ee("circle"), I = ct(), T = $("div"), E = $("p"), E.textContent = "Mint:", N = ct(), C = $("p"), U = Jt(
        /*$mint*/
        e[2]
      ), O = ct(), P = $("div"), L = $("div"), L.textContent = "top up", q = ct(), z = $("div"), z.textContent = "cash out", D(y, "id", "path846"), Yt(y, "stroke-width", "1.76621"), Yt(y, "stroke-dasharray", "14.1297, 14.1297"), D(y, "d", "M 35.068359,563.06055 A 377.95276,377.95276 0 0 0 412.63086,935.55273 377.95276,377.95276 0 0 0 790.19336,563.06055 H 488.1875 a 75.59055,75.59055 0 0 1 0.0332,0.21484 75.59055,75.59055 0 0 1 -75.58984,75.5918 75.59055,75.59055 0 0 1 -75.58984,-75.5918 75.59055,75.59055 0 0 1 0.0332,-0.21484 z"), D(y, "transform", "scale(0.26458333)"), Yt(b, "stroke-width", "0.884323"), Yt(b, "stroke-dasharray", "7.07458, 7.07458"), D(b, "id", "path870-8"), D(b, "cx", "49.175293"), D(b, "cy", "149.03348"), D(b, "r", "40"), Yt(S, "stroke-width", "0.884323"), Yt(S, "stroke-dasharray", "7.07458, 7.07458"), D(S, "id", "path870-8-3"), D(S, "cx", "169.17529"), D(S, "cy", "149.03348"), D(S, "r", "40"), D(p, "id", "g1910"), D(p, "transform", "rotate(90,109.17529,178.28257)"), D(l, "id", "layer1"), D(l, "transform", "translate(-39.926203,-78.282573)"), D(a, "class", "h-6 -rotate-12"), D(a, "fill", "currentColor"), D(a, "viewBox", "0 0 138.49818 200"), D(a, "version", "1.1"), D(a, "id", "svg5"), D(a, "xmlns", "http://www.w3.org/2000/svg"), D(n, "class", "flex gap-3 items-center bg-violet-200 p-4 rounded-2xl"), D(r, "class", "flex justify-center gap-3 text-4xl text-violet-600 h-64 items-center"), D(E, "class", "font-bold"), D(T, "class", "text-xs flex gap-1 w-full items-center justify-center"), D(t, "class", "bg-violet-100 flex flex-col text-violet-400 p-2"), D(L, "class", "bg-violet-400 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-violet-800 cursor-pointer"), D(z, "class", "bg-violet-500 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-violet-900 cursor-pointer"), D(P, "class", "flex w-full flex-grow");
    },
    m(G, B) {
      et(G, t, B), j(t, r), j(r, n), j(n, o), j(o, i), j(n, s), j(n, a), j(a, l), j(l, p), j(p, y), j(p, b), j(p, S), j(t, I), j(t, T), j(T, E), j(T, N), j(T, C), j(C, U), et(G, O, B), et(G, P, B), j(P, L), j(P, q), j(P, z), W || (Y = [
        ne(
          L,
          "click",
          /*click_handler*/
          e[3]
        ),
        ne(
          z,
          "click",
          /*click_handler_1*/
          e[4]
        )
      ], W = !0);
    },
    p(G, [B]) {
      B & /*amount*/
      2 && te(
        i,
        /*amount*/
        G[1]
      ), B & /*$mint*/
      4 && te(
        U,
        /*$mint*/
        G[2]
      );
    },
    i: ft,
    o: ft,
    d(G) {
      G && rt(t), G && rt(O), G && rt(P), W = !1, Pe(Y);
    }
  };
}
function xa(e, t, r) {
  let n;
  We(e, sr, (l) => r(2, n = l));
  let { amount: o } = t, { nav: i } = t;
  const s = () => r(0, i = "topup"), a = () => r(0, i = "cashout");
  return e.$$set = (l) => {
    "amount" in l && r(1, o = l.amount), "nav" in l && r(0, i = l.nav);
  }, [i, o, n, s, a];
}
class Ea extends Ge {
  constructor(t) {
    super(), De(this, t, xa, ba, Be, { amount: 1, nav: 0 });
  }
}
function Xo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _a } = Object.prototype, { getPrototypeOf: Di } = Object, pn = ((e) => (t) => {
  const r = _a.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ge = (e) => (e = e.toLowerCase(), (t) => pn(t) === e), mn = (e) => (t) => typeof t === e, { isArray: mr } = Array, Sr = mn("undefined");
function Ma(e) {
  return e !== null && !Sr(e) && e.constructor !== null && !Sr(e.constructor) && ae(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qo = ge("ArrayBuffer");
function Ba(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qo(e.buffer), t;
}
const Aa = mn("string"), ae = mn("function"), ts = mn("number"), gn = (e) => e !== null && typeof e == "object", Sa = (e) => e === !0 || e === !1, Vr = (e) => {
  if (pn(e) !== "object")
    return !1;
  const t = Di(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ia = ge("Date"), Ta = ge("File"), Ca = ge("Blob"), ka = ge("FileList"), Ra = (e) => gn(e) && ae(e.pipe), Na = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ae(e.append) && ((t = pn(e)) === "formdata" || // detect form-data instance
  t === "object" && ae(e.toString) && e.toString() === "[object FormData]"));
}, Ua = ge("URLSearchParams"), Oa = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), mr(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (n = 0; n < s; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function es(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const rs = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ns = (e) => !Sr(e) && e !== rs;
function wi() {
  const { caseless: e } = ns(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && es(t, o) || o;
    Vr(t[i]) && Vr(n) ? t[i] = wi(t[i], n) : Vr(n) ? t[i] = wi({}, n) : mr(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Rr(arguments[n], r);
  return t;
}
const Pa = (e, t, r, { allOwnKeys: n } = {}) => (Rr(t, (o, i) => {
  r && ae(o) ? e[i] = Xo(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), La = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Fa = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Da = (e, t, r, n) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!n || n(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = r !== !1 && Di(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, qa = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Ha = (e) => {
  if (!e)
    return null;
  if (mr(e))
    return e;
  let t = e.length;
  if (!ts(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ka = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Di(Uint8Array)), za = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, ja = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Va = ge("HTMLFormElement"), Wa = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), mo = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), $a = ge("RegExp"), is = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Rr(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, Za = (e) => {
  is(e, (t, r) => {
    if (ae(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ae(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ja = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return mr(e) ? n(e) : n(String(e).split(t)), r;
}, Ga = () => {
}, Ya = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Yn = "abcdefghijklmnopqrstuvwxyz", go = "0123456789", os = {
  DIGIT: go,
  ALPHA: Yn,
  ALPHA_DIGIT: Yn + Yn.toUpperCase() + go
}, Xa = (e = 16, t = os.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Qa(e) {
  return !!(e && ae(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const tu = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (gn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = mr(n) ? [] : {};
        return Rr(n, (s, a) => {
          const l = r(s, o + 1);
          !Sr(l) && (i[a] = l);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, eu = ge("AsyncFunction"), ru = (e) => e && (gn(e) || ae(e)) && ae(e.then) && ae(e.catch), K = {
  isArray: mr,
  isArrayBuffer: Qo,
  isBuffer: Ma,
  isFormData: Na,
  isArrayBufferView: Ba,
  isString: Aa,
  isNumber: ts,
  isBoolean: Sa,
  isObject: gn,
  isPlainObject: Vr,
  isUndefined: Sr,
  isDate: Ia,
  isFile: Ta,
  isBlob: Ca,
  isRegExp: $a,
  isFunction: ae,
  isStream: Ra,
  isURLSearchParams: Ua,
  isTypedArray: Ka,
  isFileList: ka,
  forEach: Rr,
  merge: wi,
  extend: Pa,
  trim: Oa,
  stripBOM: La,
  inherits: Fa,
  toFlatObject: Da,
  kindOf: pn,
  kindOfTest: ge,
  endsWith: qa,
  toArray: Ha,
  forEachEntry: za,
  matchAll: ja,
  isHTMLForm: Va,
  hasOwnProperty: mo,
  hasOwnProp: mo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: is,
  freezeMethods: Za,
  toObjectSet: Ja,
  toCamelCase: Wa,
  noop: Ga,
  toFiniteNumber: Ya,
  findKey: es,
  global: rs,
  isContextDefined: ns,
  ALPHABET: os,
  generateString: Xa,
  isSpecCompliantForm: Qa,
  toJSONObject: tu,
  isAsyncFn: eu,
  isThenable: ru
};
function lt(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
K.inherits(lt, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: K.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ss = lt.prototype, as = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  as[e] = { value: e };
});
Object.defineProperties(lt, as);
Object.defineProperty(ss, "isAxiosError", { value: !0 });
lt.from = (e, t, r, n, o, i) => {
  const s = Object.create(ss);
  return K.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), lt.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const nu = null;
function vi(e) {
  return K.isPlainObject(e) || K.isArray(e);
}
function us(e) {
  return K.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yo(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = us(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function iu(e) {
  return K.isArray(e) && !e.some(vi);
}
const ou = K.toFlatObject(K, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function yn(e, t, r) {
  if (!K.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = K.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, N) {
    return !K.isUndefined(N[E]);
  });
  const n = r.metaTokens, o = r.visitor || y, i = r.dots, s = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && K.isSpecCompliantForm(t);
  if (!K.isFunction(o))
    throw new TypeError("visitor must be a function");
  function p(T) {
    if (T === null)
      return "";
    if (K.isDate(T))
      return T.toISOString();
    if (!l && K.isBlob(T))
      throw new lt("Blob is not supported. Use a Buffer instead.");
    return K.isArrayBuffer(T) || K.isTypedArray(T) ? l && typeof Blob == "function" ? new Blob([T]) : Buffer.from(T) : T;
  }
  function y(T, E, N) {
    let C = T;
    if (T && !N && typeof T == "object") {
      if (K.endsWith(E, "{}"))
        E = n ? E : E.slice(0, -2), T = JSON.stringify(T);
      else if (K.isArray(T) && iu(T) || (K.isFileList(T) || K.endsWith(E, "[]")) && (C = K.toArray(T)))
        return E = us(E), C.forEach(function(O, P) {
          !(K.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? yo([E], P, i) : s === null ? E : E + "[]",
            p(O)
          );
        }), !1;
    }
    return vi(T) ? !0 : (t.append(yo(N, E, i), p(T)), !1);
  }
  const b = [], S = Object.assign(ou, {
    defaultVisitor: y,
    convertValue: p,
    isVisitable: vi
  });
  function I(T, E) {
    if (!K.isUndefined(T)) {
      if (b.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      b.push(T), K.forEach(T, function(C, U) {
        (!(K.isUndefined(C) || C === null) && o.call(
          t,
          C,
          K.isString(U) ? U.trim() : U,
          E,
          S
        )) === !0 && I(C, E ? E.concat(U) : [U]);
      }), b.pop();
    }
  }
  if (!K.isObject(e))
    throw new TypeError("data must be an object");
  return I(e), t;
}
function wo(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function qi(e, t) {
  this._pairs = [], e && yn(e, this, t);
}
const fs = qi.prototype;
fs.append = function(t, r) {
  this._pairs.push([t, r]);
};
fs.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, wo);
  } : wo;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function su(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ls(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || su, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = K.isURLSearchParams(t) ? t.toString() : new qi(t, r).toString(n), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class au {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    K.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const vo = au, cs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, uu = typeof URLSearchParams < "u" ? URLSearchParams : qi, fu = typeof FormData < "u" ? FormData : null, lu = typeof Blob < "u" ? Blob : null, cu = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), hu = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), pe = {
  isBrowser: !0,
  classes: {
    URLSearchParams: uu,
    FormData: fu,
    Blob: lu
  },
  isStandardBrowserEnv: cu,
  isStandardBrowserWebWorkerEnv: hu,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function du(e, t) {
  return yn(e, new pe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return pe.isNode && K.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function pu(e) {
  return K.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mu(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function hs(e) {
  function t(r, n, o, i) {
    let s = r[i++];
    const a = Number.isFinite(+s), l = i >= r.length;
    return s = !s && K.isArray(o) ? o.length : s, l ? (K.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !a) : ((!o[s] || !K.isObject(o[s])) && (o[s] = []), t(r, n, o[s], i) && K.isArray(o[s]) && (o[s] = mu(o[s])), !a);
  }
  if (K.isFormData(e) && K.isFunction(e.entries)) {
    const r = {};
    return K.forEachEntry(e, (n, o) => {
      t(pu(n), o, r, 0);
    }), r;
  }
  return null;
}
const gu = {
  "Content-Type": void 0
};
function yu(e, t, r) {
  if (K.isString(e))
    try {
      return (t || JSON.parse)(e), K.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const wn = {
  transitional: cs,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = K.isObject(t);
    if (i && K.isHTMLForm(t) && (t = new FormData(t)), K.isFormData(t))
      return o && o ? JSON.stringify(hs(t)) : t;
    if (K.isArrayBuffer(t) || K.isBuffer(t) || K.isStream(t) || K.isFile(t) || K.isBlob(t))
      return t;
    if (K.isArrayBufferView(t))
      return t.buffer;
    if (K.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return du(t, this.formSerializer).toString();
      if ((a = K.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return yn(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), yu(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || wn.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && K.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? lt.from(a, lt.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: pe.classes.FormData,
    Blob: pe.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
K.forEach(["delete", "get", "head"], function(t) {
  wn.headers[t] = {};
});
K.forEach(["post", "put", "patch"], function(t) {
  wn.headers[t] = K.merge(gu);
});
const Hi = wn, wu = K.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), vu = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && wu[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, bo = Symbol("internals");
function vr(e) {
  return e && String(e).trim().toLowerCase();
}
function Wr(e) {
  return e === !1 || e == null ? e : K.isArray(e) ? e.map(Wr) : String(e);
}
function bu(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const xu = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xn(e, t, r, n, o) {
  if (K.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!K.isString(t)) {
    if (K.isString(n))
      return t.indexOf(n) !== -1;
    if (K.isRegExp(n))
      return n.test(t);
  }
}
function Eu(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function _u(e, t) {
  const r = K.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, s) {
        return this[n].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class vn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(a, l, p) {
      const y = vr(l);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const b = K.findKey(o, y);
      (!b || o[b] === void 0 || p === !0 || p === void 0 && o[b] !== !1) && (o[b || l] = Wr(a));
    }
    const s = (a, l) => K.forEach(a, (p, y) => i(p, y, l));
    return K.isPlainObject(t) || t instanceof this.constructor ? s(t, r) : K.isString(t) && (t = t.trim()) && !xu(t) ? s(vu(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = vr(t), t) {
      const n = K.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return bu(o);
        if (K.isFunction(r))
          return r.call(this, o, n);
        if (K.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = vr(t), t) {
      const n = K.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Xn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(s) {
      if (s = vr(s), s) {
        const a = K.findKey(n, s);
        a && (!r || Xn(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return K.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Xn(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return K.forEach(this, (o, i) => {
      const s = K.findKey(n, i);
      if (s) {
        r[s] = Wr(o), delete r[i];
        return;
      }
      const a = t ? Eu(i) : String(i).trim();
      a !== i && delete r[i], r[a] = Wr(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return K.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && K.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[bo] = this[bo] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = vr(s);
      n[a] || (_u(o, s), n[a] = !0);
    }
    return K.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
vn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
K.freezeMethods(vn.prototype);
K.freezeMethods(vn);
const _e = vn;
function Qn(e, t) {
  const r = this || Hi, n = t || r, o = _e.from(n.headers);
  let i = n.data;
  return K.forEach(e, function(a) {
    i = a.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function ds(e) {
  return !!(e && e.__CANCEL__);
}
function Nr(e, t, r) {
  lt.call(this, e ?? "canceled", lt.ERR_CANCELED, t, r), this.name = "CanceledError";
}
K.inherits(Nr, lt, {
  __CANCEL__: !0
});
function Mu(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new lt(
    "Request failed with status code " + r.status,
    [lt.ERR_BAD_REQUEST, lt.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Bu = pe.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, i, s, a) {
        const l = [];
        l.push(r + "=" + encodeURIComponent(n)), K.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), K.isString(i) && l.push("path=" + i), K.isString(s) && l.push("domain=" + s), a === !0 && l.push("secure"), document.cookie = l.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Au(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Su(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ps(e, t) {
  return e && !Au(t) ? Su(e, t) : t;
}
const Iu = pe.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let s = i;
      return t && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(s) {
      const a = K.isString(s) ? o(s) : s;
      return a.protocol === n.protocol && a.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Tu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Cu(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const p = Date.now(), y = n[i];
    s || (s = p), r[o] = l, n[o] = p;
    let b = i, S = 0;
    for (; b !== o; )
      S += r[b++], b = b % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), p - s < t)
      return;
    const I = y && p - y;
    return I ? Math.round(S * 1e3 / I) : void 0;
  };
}
function xo(e, t) {
  let r = 0;
  const n = Cu(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - r, l = n(a), p = i <= s;
    r = i;
    const y = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && p ? (s - i) / l : void 0,
      event: o
    };
    y[t ? "download" : "upload"] = !0, e(y);
  };
}
const ku = typeof XMLHttpRequest < "u", Ru = ku && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = _e.from(e.headers).normalize(), s = e.responseType;
    let a;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    K.isFormData(o) && (pe.isStandardBrowserEnv || pe.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let p = new XMLHttpRequest();
    if (e.auth) {
      const I = e.auth.username || "", T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(I + ":" + T));
    }
    const y = ps(e.baseURL, e.url);
    p.open(e.method.toUpperCase(), ls(y, e.params, e.paramsSerializer), !0), p.timeout = e.timeout;
    function b() {
      if (!p)
        return;
      const I = _e.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), E = {
        data: !s || s === "text" || s === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: I,
        config: e,
        request: p
      };
      Mu(function(C) {
        r(C), l();
      }, function(C) {
        n(C), l();
      }, E), p = null;
    }
    if ("onloadend" in p ? p.onloadend = b : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, p.onabort = function() {
      p && (n(new lt("Request aborted", lt.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      n(new lt("Network Error", lt.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let T = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || cs;
      e.timeoutErrorMessage && (T = e.timeoutErrorMessage), n(new lt(
        T,
        E.clarifyTimeoutError ? lt.ETIMEDOUT : lt.ECONNABORTED,
        e,
        p
      )), p = null;
    }, pe.isStandardBrowserEnv) {
      const I = (e.withCredentials || Iu(y)) && e.xsrfCookieName && Bu.read(e.xsrfCookieName);
      I && i.set(e.xsrfHeaderName, I);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in p && K.forEach(i.toJSON(), function(T, E) {
      p.setRequestHeader(E, T);
    }), K.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), s && s !== "json" && (p.responseType = e.responseType), typeof e.onDownloadProgress == "function" && p.addEventListener("progress", xo(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", xo(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (I) => {
      p && (n(!I || I.type ? new Nr(null, e, p) : I), p.abort(), p = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const S = Tu(y);
    if (S && pe.protocols.indexOf(S) === -1) {
      n(new lt("Unsupported protocol " + S + ":", lt.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(o || null);
  });
}, $r = {
  http: nu,
  xhr: Ru
};
K.forEach($r, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Nu = {
  getAdapter: (e) => {
    e = K.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = K.isString(r) ? $r[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new lt(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        K.hasOwnProp($r, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!K.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: $r
};
function ti(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Nr(null, e);
}
function Eo(e) {
  return ti(e), e.headers = _e.from(e.headers), e.data = Qn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nu.getAdapter(e.adapter || Hi.adapter)(e).then(function(n) {
    return ti(e), n.data = Qn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = _e.from(n.headers), n;
  }, function(n) {
    return ds(n) || (ti(e), n && n.response && (n.response.data = Qn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = _e.from(n.response.headers))), Promise.reject(n);
  });
}
const _o = (e) => e instanceof _e ? e.toJSON() : e;
function ar(e, t) {
  t = t || {};
  const r = {};
  function n(p, y, b) {
    return K.isPlainObject(p) && K.isPlainObject(y) ? K.merge.call({ caseless: b }, p, y) : K.isPlainObject(y) ? K.merge({}, y) : K.isArray(y) ? y.slice() : y;
  }
  function o(p, y, b) {
    if (K.isUndefined(y)) {
      if (!K.isUndefined(p))
        return n(void 0, p, b);
    } else
      return n(p, y, b);
  }
  function i(p, y) {
    if (!K.isUndefined(y))
      return n(void 0, y);
  }
  function s(p, y) {
    if (K.isUndefined(y)) {
      if (!K.isUndefined(p))
        return n(void 0, p);
    } else
      return n(void 0, y);
  }
  function a(p, y, b) {
    if (b in t)
      return n(p, y);
    if (b in e)
      return n(void 0, p);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (p, y) => o(_o(p), _o(y), !0)
  };
  return K.forEach(Object.keys(Object.assign({}, e, t)), function(y) {
    const b = l[y] || o, S = b(e[y], t[y], y);
    K.isUndefined(S) && b !== a || (r[y] = S);
  }), r;
}
const ms = "1.4.0", Ki = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ki[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Mo = {};
Ki.transitional = function(t, r, n) {
  function o(i, s) {
    return "[Axios v" + ms + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new lt(
        o(s, " has been removed" + (r ? " in " + r : "")),
        lt.ERR_DEPRECATED
      );
    return r && !Mo[s] && (Mo[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
function Uu(e, t, r) {
  if (typeof e != "object")
    throw new lt("options must be an object", lt.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], s = t[i];
    if (s) {
      const a = e[i], l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new lt("option " + i + " must be " + l, lt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new lt("Unknown option " + i, lt.ERR_BAD_OPTION);
  }
}
const bi = {
  assertOptions: Uu,
  validators: Ki
}, Ae = bi.validators;
class Xr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new vo(),
      response: new vo()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ar(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && bi.assertOptions(n, {
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), o != null && (K.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : bi.assertOptions(o, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && K.merge(
      i.common,
      i[r.method]
    ), s && K.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete i[T];
      }
    ), r.headers = _e.concat(s, i);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(r) === !1 || (l = l && E.synchronous, a.unshift(E.fulfilled, E.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(E) {
      p.push(E.fulfilled, E.rejected);
    });
    let y, b = 0, S;
    if (!l) {
      const T = [Eo.bind(this), void 0];
      for (T.unshift.apply(T, a), T.push.apply(T, p), S = T.length, y = Promise.resolve(r); b < S; )
        y = y.then(T[b++], T[b++]);
      return y;
    }
    S = a.length;
    let I = r;
    for (b = 0; b < S; ) {
      const T = a[b++], E = a[b++];
      try {
        I = T(I);
      } catch (N) {
        E.call(this, N);
        break;
      }
    }
    try {
      y = Eo.call(this, I);
    } catch (T) {
      return Promise.reject(T);
    }
    for (b = 0, S = p.length; b < S; )
      y = y.then(p[b++], p[b++]);
    return y;
  }
  getUri(t) {
    t = ar(this.defaults, t);
    const r = ps(t.baseURL, t.url);
    return ls(r, t.params, t.paramsSerializer);
  }
}
K.forEach(["delete", "get", "head", "options"], function(t) {
  Xr.prototype[t] = function(r, n) {
    return this.request(ar(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
K.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, s, a) {
      return this.request(ar(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Xr.prototype[t] = r(), Xr.prototype[t + "Form"] = r(!0);
});
const Zr = Xr;
class zi {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      n.reason || (n.reason = new Nr(i, s, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new zi(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Ou = zi;
function Pu(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Lu(e) {
  return K.isObject(e) && e.isAxiosError === !0;
}
const xi = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(xi).forEach(([e, t]) => {
  xi[t] = e;
});
const Fu = xi;
function gs(e) {
  const t = new Zr(e), r = Xo(Zr.prototype.request, t);
  return K.extend(r, Zr.prototype, t, { allOwnKeys: !0 }), K.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return gs(ar(e, o));
  }, r;
}
const jt = gs(Hi);
jt.Axios = Zr;
jt.CanceledError = Nr;
jt.CancelToken = Ou;
jt.isCancel = ds;
jt.VERSION = ms;
jt.toFormData = yn;
jt.AxiosError = lt;
jt.Cancel = jt.CanceledError;
jt.all = function(t) {
  return Promise.all(t);
};
jt.spread = Pu;
jt.isAxiosError = Lu;
jt.mergeConfig = ar;
jt.AxiosHeaders = _e;
jt.formToJSON = (e) => hs(K.isHTMLForm(e) ? new FormData(e) : e);
jt.HttpStatusCode = Fu;
jt.default = jt;
const ys = jt;
var we = ys.create(), Du = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qu(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var gr = {}, bn = {};
bn.byteLength = zu;
bn.toByteArray = Vu;
bn.fromByteArray = Zu;
var de = [], se = [], Hu = typeof Uint8Array < "u" ? Uint8Array : Array, ei = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var er = 0, Ku = ei.length; er < Ku; ++er)
  de[er] = ei[er], se[ei.charCodeAt(er)] = er;
se["-".charCodeAt(0)] = 62;
se["_".charCodeAt(0)] = 63;
function ws(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function zu(e) {
  var t = ws(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function ju(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function Vu(e) {
  var t, r = ws(e), n = r[0], o = r[1], i = new Hu(ju(e, n, o)), s = 0, a = o > 0 ? n - 4 : n, l;
  for (l = 0; l < a; l += 4)
    t = se[e.charCodeAt(l)] << 18 | se[e.charCodeAt(l + 1)] << 12 | se[e.charCodeAt(l + 2)] << 6 | se[e.charCodeAt(l + 3)], i[s++] = t >> 16 & 255, i[s++] = t >> 8 & 255, i[s++] = t & 255;
  return o === 2 && (t = se[e.charCodeAt(l)] << 2 | se[e.charCodeAt(l + 1)] >> 4, i[s++] = t & 255), o === 1 && (t = se[e.charCodeAt(l)] << 10 | se[e.charCodeAt(l + 1)] << 4 | se[e.charCodeAt(l + 2)] >> 2, i[s++] = t >> 8 & 255, i[s++] = t & 255), i;
}
function Wu(e) {
  return de[e >> 18 & 63] + de[e >> 12 & 63] + de[e >> 6 & 63] + de[e & 63];
}
function $u(e, t, r) {
  for (var n, o = [], i = t; i < r; i += 3)
    n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255), o.push(Wu(n));
  return o.join("");
}
function Zu(e) {
  for (var t, r = e.length, n = r % 3, o = [], i = 16383, s = 0, a = r - n; s < a; s += i)
    o.push($u(e, s, s + i > a ? a : s + i));
  return n === 1 ? (t = e[r - 1], o.push(
    de[t >> 2] + de[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], o.push(
    de[t >> 10] + de[t >> 4 & 63] + de[t << 2 & 63] + "="
  )), o.join("");
}
var ji = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ji.read = function(e, t, r, n, o) {
  var i, s, a = o * 8 - n - 1, l = (1 << a) - 1, p = l >> 1, y = -7, b = r ? o - 1 : 0, S = r ? -1 : 1, I = e[t + b];
  for (b += S, i = I & (1 << -y) - 1, I >>= -y, y += a; y > 0; i = i * 256 + e[t + b], b += S, y -= 8)
    ;
  for (s = i & (1 << -y) - 1, i >>= -y, y += n; y > 0; s = s * 256 + e[t + b], b += S, y -= 8)
    ;
  if (i === 0)
    i = 1 - p;
  else {
    if (i === l)
      return s ? NaN : (I ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, n), i = i - p;
  }
  return (I ? -1 : 1) * s * Math.pow(2, i - n);
};
ji.write = function(e, t, r, n, o, i) {
  var s, a, l, p = i * 8 - o - 1, y = (1 << p) - 1, b = y >> 1, S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, I = n ? 0 : i - 1, T = n ? 1 : -1, E = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = y) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + b >= 1 ? t += S / l : t += S * Math.pow(2, 1 - b), t * l >= 2 && (s++, l /= 2), s + b >= y ? (a = 0, s = y) : s + b >= 1 ? (a = (t * l - 1) * Math.pow(2, o), s = s + b) : (a = t * Math.pow(2, b - 1) * Math.pow(2, o), s = 0)); o >= 8; e[r + I] = a & 255, I += T, a /= 256, o -= 8)
    ;
  for (s = s << o | a, p += o; p > 0; e[r + I] = s & 255, I += T, s /= 256, p -= 8)
    ;
  e[r + I - T] |= E * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = bn, r = ji, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = U, e.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  e.kMaxLength = o, a.TYPED_ARRAY_SUPPORT = i(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const g = new Uint8Array(1), f = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(g, f), g.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function s(g) {
    if (g > o)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
    const f = new Uint8Array(g);
    return Object.setPrototypeOf(f, a.prototype), f;
  }
  function a(g, f, h) {
    if (typeof g == "number") {
      if (typeof f == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(g);
    }
    return l(g, f, h);
  }
  a.poolSize = 8192;
  function l(g, f, h) {
    if (typeof g == "string")
      return S(g, f);
    if (ArrayBuffer.isView(g))
      return T(g);
    if (g == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
      );
    if (ht(g, ArrayBuffer) || g && ht(g.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ht(g, SharedArrayBuffer) || g && ht(g.buffer, SharedArrayBuffer)))
      return E(g, f, h);
    if (typeof g == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const _ = g.valueOf && g.valueOf();
    if (_ != null && _ !== g)
      return a.from(_, f, h);
    const k = N(g);
    if (k)
      return k;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
      return a.from(g[Symbol.toPrimitive]("string"), f, h);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
    );
  }
  a.from = function(g, f, h) {
    return l(g, f, h);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function p(g) {
    if (typeof g != "number")
      throw new TypeError('"size" argument must be of type number');
    if (g < 0)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
  }
  function y(g, f, h) {
    return p(g), g <= 0 ? s(g) : f !== void 0 ? typeof h == "string" ? s(g).fill(f, h) : s(g).fill(f) : s(g);
  }
  a.alloc = function(g, f, h) {
    return y(g, f, h);
  };
  function b(g) {
    return p(g), s(g < 0 ? 0 : C(g) | 0);
  }
  a.allocUnsafe = function(g) {
    return b(g);
  }, a.allocUnsafeSlow = function(g) {
    return b(g);
  };
  function S(g, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !a.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    const h = O(g, f) | 0;
    let _ = s(h);
    const k = _.write(g, f);
    return k !== h && (_ = _.slice(0, k)), _;
  }
  function I(g) {
    const f = g.length < 0 ? 0 : C(g.length) | 0, h = s(f);
    for (let _ = 0; _ < f; _ += 1)
      h[_] = g[_] & 255;
    return h;
  }
  function T(g) {
    if (ht(g, Uint8Array)) {
      const f = new Uint8Array(g);
      return E(f.buffer, f.byteOffset, f.byteLength);
    }
    return I(g);
  }
  function E(g, f, h) {
    if (f < 0 || g.byteLength < f)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (g.byteLength < f + (h || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let _;
    return f === void 0 && h === void 0 ? _ = new Uint8Array(g) : h === void 0 ? _ = new Uint8Array(g, f) : _ = new Uint8Array(g, f, h), Object.setPrototypeOf(_, a.prototype), _;
  }
  function N(g) {
    if (a.isBuffer(g)) {
      const f = C(g.length) | 0, h = s(f);
      return h.length === 0 || g.copy(h, 0, 0, f), h;
    }
    if (g.length !== void 0)
      return typeof g.length != "number" || Xe(g.length) ? s(0) : I(g);
    if (g.type === "Buffer" && Array.isArray(g.data))
      return I(g.data);
  }
  function C(g) {
    if (g >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return g | 0;
  }
  function U(g) {
    return +g != g && (g = 0), a.alloc(+g);
  }
  a.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== a.prototype;
  }, a.compare = function(f, h) {
    if (ht(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), ht(h, Uint8Array) && (h = a.from(h, h.offset, h.byteLength)), !a.isBuffer(f) || !a.isBuffer(h))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === h)
      return 0;
    let _ = f.length, k = h.length;
    for (let F = 0, H = Math.min(_, k); F < H; ++F)
      if (f[F] !== h[F]) {
        _ = f[F], k = h[F];
        break;
      }
    return _ < k ? -1 : k < _ ? 1 : 0;
  }, a.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(f, h) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return a.alloc(0);
    let _;
    if (h === void 0)
      for (h = 0, _ = 0; _ < f.length; ++_)
        h += f[_].length;
    const k = a.allocUnsafe(h);
    let F = 0;
    for (_ = 0; _ < f.length; ++_) {
      let H = f[_];
      if (ht(H, Uint8Array))
        F + H.length > k.length ? (a.isBuffer(H) || (H = a.from(H)), H.copy(k, F)) : Uint8Array.prototype.set.call(
          k,
          H,
          F
        );
      else if (a.isBuffer(H))
        H.copy(k, F);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      F += H.length;
    }
    return k;
  };
  function O(g, f) {
    if (a.isBuffer(g))
      return g.length;
    if (ArrayBuffer.isView(g) || ht(g, ArrayBuffer))
      return g.byteLength;
    if (typeof g != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
      );
    const h = g.length, _ = arguments.length > 2 && arguments[2] === !0;
    if (!_ && h === 0)
      return 0;
    let k = !1;
    for (; ; )
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return h;
        case "utf8":
        case "utf-8":
          return Ye(g).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return h * 2;
        case "hex":
          return h >>> 1;
        case "base64":
          return wr(g).length;
        default:
          if (k)
            return _ ? -1 : Ye(g).length;
          f = ("" + f).toLowerCase(), k = !0;
      }
  }
  a.byteLength = O;
  function P(g, f, h) {
    let _ = !1;
    if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((h === void 0 || h > this.length) && (h = this.length), h <= 0) || (h >>>= 0, f >>>= 0, h <= f))
      return "";
    for (g || (g = "utf8"); ; )
      switch (g) {
        case "hex":
          return x(this, f, h);
        case "utf8":
        case "utf-8":
          return w(this, f, h);
        case "ascii":
          return A(this, f, h);
        case "latin1":
        case "binary":
          return R(this, f, h);
        case "base64":
          return d(this, f, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return c(this, f, h);
        default:
          if (_)
            throw new TypeError("Unknown encoding: " + g);
          g = (g + "").toLowerCase(), _ = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function L(g, f, h) {
    const _ = g[f];
    g[f] = g[h], g[h] = _;
  }
  a.prototype.swap16 = function() {
    const f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let h = 0; h < f; h += 2)
      L(this, h, h + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let h = 0; h < f; h += 4)
      L(this, h, h + 3), L(this, h + 1, h + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let h = 0; h < f; h += 8)
      L(this, h, h + 7), L(this, h + 1, h + 6), L(this, h + 2, h + 5), L(this, h + 3, h + 4);
    return this;
  }, a.prototype.toString = function() {
    const f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? w(this, 0, f) : P.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(f) {
    if (!a.isBuffer(f))
      throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : a.compare(this, f) === 0;
  }, a.prototype.inspect = function() {
    let f = "";
    const h = e.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, h).replace(/(.{2})/g, "$1 ").trim(), this.length > h && (f += " ... "), "<Buffer " + f + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(f, h, _, k, F) {
    if (ht(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (h === void 0 && (h = 0), _ === void 0 && (_ = f ? f.length : 0), k === void 0 && (k = 0), F === void 0 && (F = this.length), h < 0 || _ > f.length || k < 0 || F > this.length)
      throw new RangeError("out of range index");
    if (k >= F && h >= _)
      return 0;
    if (k >= F)
      return -1;
    if (h >= _)
      return 1;
    if (h >>>= 0, _ >>>= 0, k >>>= 0, F >>>= 0, this === f)
      return 0;
    let H = F - k, X = _ - h;
    const bt = Math.min(H, X), tt = this.slice(k, F), nt = f.slice(h, _);
    for (let pt = 0; pt < bt; ++pt)
      if (tt[pt] !== nt[pt]) {
        H = tt[pt], X = nt[pt];
        break;
      }
    return H < X ? -1 : X < H ? 1 : 0;
  };
  function q(g, f, h, _, k) {
    if (g.length === 0)
      return -1;
    if (typeof h == "string" ? (_ = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, Xe(h) && (h = k ? 0 : g.length - 1), h < 0 && (h = g.length + h), h >= g.length) {
      if (k)
        return -1;
      h = g.length - 1;
    } else if (h < 0)
      if (k)
        h = 0;
      else
        return -1;
    if (typeof f == "string" && (f = a.from(f, _)), a.isBuffer(f))
      return f.length === 0 ? -1 : z(g, f, h, _, k);
    if (typeof f == "number")
      return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? k ? Uint8Array.prototype.indexOf.call(g, f, h) : Uint8Array.prototype.lastIndexOf.call(g, f, h) : z(g, [f], h, _, k);
    throw new TypeError("val must be string, number or Buffer");
  }
  function z(g, f, h, _, k) {
    let F = 1, H = g.length, X = f.length;
    if (_ !== void 0 && (_ = String(_).toLowerCase(), _ === "ucs2" || _ === "ucs-2" || _ === "utf16le" || _ === "utf-16le")) {
      if (g.length < 2 || f.length < 2)
        return -1;
      F = 2, H /= 2, X /= 2, h /= 2;
    }
    function bt(nt, pt) {
      return F === 1 ? nt[pt] : nt.readUInt16BE(pt * F);
    }
    let tt;
    if (k) {
      let nt = -1;
      for (tt = h; tt < H; tt++)
        if (bt(g, tt) === bt(f, nt === -1 ? 0 : tt - nt)) {
          if (nt === -1 && (nt = tt), tt - nt + 1 === X)
            return nt * F;
        } else
          nt !== -1 && (tt -= tt - nt), nt = -1;
    } else
      for (h + X > H && (h = H - X), tt = h; tt >= 0; tt--) {
        let nt = !0;
        for (let pt = 0; pt < X; pt++)
          if (bt(g, tt + pt) !== bt(f, pt)) {
            nt = !1;
            break;
          }
        if (nt)
          return tt;
      }
    return -1;
  }
  a.prototype.includes = function(f, h, _) {
    return this.indexOf(f, h, _) !== -1;
  }, a.prototype.indexOf = function(f, h, _) {
    return q(this, f, h, _, !0);
  }, a.prototype.lastIndexOf = function(f, h, _) {
    return q(this, f, h, _, !1);
  };
  function W(g, f, h, _) {
    h = Number(h) || 0;
    const k = g.length - h;
    _ ? (_ = Number(_), _ > k && (_ = k)) : _ = k;
    const F = f.length;
    _ > F / 2 && (_ = F / 2);
    let H;
    for (H = 0; H < _; ++H) {
      const X = parseInt(f.substr(H * 2, 2), 16);
      if (Xe(X))
        return H;
      g[h + H] = X;
    }
    return H;
  }
  function Y(g, f, h, _) {
    return vt(Ye(f, g.length - h), g, h, _);
  }
  function G(g, f, h, _) {
    return vt(Et(f), g, h, _);
  }
  function B(g, f, h, _) {
    return vt(wr(f), g, h, _);
  }
  function u(g, f, h, _) {
    return vt(_t(f, g.length - h), g, h, _);
  }
  a.prototype.write = function(f, h, _, k) {
    if (h === void 0)
      k = "utf8", _ = this.length, h = 0;
    else if (_ === void 0 && typeof h == "string")
      k = h, _ = this.length, h = 0;
    else if (isFinite(h))
      h = h >>> 0, isFinite(_) ? (_ = _ >>> 0, k === void 0 && (k = "utf8")) : (k = _, _ = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const F = this.length - h;
    if ((_ === void 0 || _ > F) && (_ = F), f.length > 0 && (_ < 0 || h < 0) || h > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    k || (k = "utf8");
    let H = !1;
    for (; ; )
      switch (k) {
        case "hex":
          return W(this, f, h, _);
        case "utf8":
        case "utf-8":
          return Y(this, f, h, _);
        case "ascii":
        case "latin1":
        case "binary":
          return G(this, f, h, _);
        case "base64":
          return B(this, f, h, _);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u(this, f, h, _);
        default:
          if (H)
            throw new TypeError("Unknown encoding: " + k);
          k = ("" + k).toLowerCase(), H = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function d(g, f, h) {
    return f === 0 && h === g.length ? t.fromByteArray(g) : t.fromByteArray(g.slice(f, h));
  }
  function w(g, f, h) {
    h = Math.min(g.length, h);
    const _ = [];
    let k = f;
    for (; k < h; ) {
      const F = g[k];
      let H = null, X = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
      if (k + X <= h) {
        let bt, tt, nt, pt;
        switch (X) {
          case 1:
            F < 128 && (H = F);
            break;
          case 2:
            bt = g[k + 1], (bt & 192) === 128 && (pt = (F & 31) << 6 | bt & 63, pt > 127 && (H = pt));
            break;
          case 3:
            bt = g[k + 1], tt = g[k + 2], (bt & 192) === 128 && (tt & 192) === 128 && (pt = (F & 15) << 12 | (bt & 63) << 6 | tt & 63, pt > 2047 && (pt < 55296 || pt > 57343) && (H = pt));
            break;
          case 4:
            bt = g[k + 1], tt = g[k + 2], nt = g[k + 3], (bt & 192) === 128 && (tt & 192) === 128 && (nt & 192) === 128 && (pt = (F & 15) << 18 | (bt & 63) << 12 | (tt & 63) << 6 | nt & 63, pt > 65535 && pt < 1114112 && (H = pt));
        }
      }
      H === null ? (H = 65533, X = 1) : H > 65535 && (H -= 65536, _.push(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), _.push(H), k += X;
    }
    return v(_);
  }
  const m = 4096;
  function v(g) {
    const f = g.length;
    if (f <= m)
      return String.fromCharCode.apply(String, g);
    let h = "", _ = 0;
    for (; _ < f; )
      h += String.fromCharCode.apply(
        String,
        g.slice(_, _ += m)
      );
    return h;
  }
  function A(g, f, h) {
    let _ = "";
    h = Math.min(g.length, h);
    for (let k = f; k < h; ++k)
      _ += String.fromCharCode(g[k] & 127);
    return _;
  }
  function R(g, f, h) {
    let _ = "";
    h = Math.min(g.length, h);
    for (let k = f; k < h; ++k)
      _ += String.fromCharCode(g[k]);
    return _;
  }
  function x(g, f, h) {
    const _ = g.length;
    (!f || f < 0) && (f = 0), (!h || h < 0 || h > _) && (h = _);
    let k = "";
    for (let F = f; F < h; ++F)
      k += Mt[g[F]];
    return k;
  }
  function c(g, f, h) {
    const _ = g.slice(f, h);
    let k = "";
    for (let F = 0; F < _.length - 1; F += 2)
      k += String.fromCharCode(_[F] + _[F + 1] * 256);
    return k;
  }
  a.prototype.slice = function(f, h) {
    const _ = this.length;
    f = ~~f, h = h === void 0 ? _ : ~~h, f < 0 ? (f += _, f < 0 && (f = 0)) : f > _ && (f = _), h < 0 ? (h += _, h < 0 && (h = 0)) : h > _ && (h = _), h < f && (h = f);
    const k = this.subarray(f, h);
    return Object.setPrototypeOf(k, a.prototype), k;
  };
  function M(g, f, h) {
    if (g % 1 !== 0 || g < 0)
      throw new RangeError("offset is not uint");
    if (g + f > h)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(f, h, _) {
    f = f >>> 0, h = h >>> 0, _ || M(f, h, this.length);
    let k = this[f], F = 1, H = 0;
    for (; ++H < h && (F *= 256); )
      k += this[f + H] * F;
    return k;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(f, h, _) {
    f = f >>> 0, h = h >>> 0, _ || M(f, h, this.length);
    let k = this[f + --h], F = 1;
    for (; h > 0 && (F *= 256); )
      k += this[f + --h] * F;
    return k;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(f, h) {
    return f = f >>> 0, h || M(f, 1, this.length), this[f];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(f, h) {
    return f = f >>> 0, h || M(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(f, h) {
    return f = f >>> 0, h || M(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(f, h) {
    return f = f >>> 0, h || M(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(f, h) {
    return f = f >>> 0, h || M(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, a.prototype.readBigUInt64LE = mt(function(f) {
    f = f >>> 0, ot(f, "offset");
    const h = this[f], _ = this[f + 7];
    (h === void 0 || _ === void 0) && Xt(f, this.length - 8);
    const k = h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, F = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + _ * 2 ** 24;
    return BigInt(k) + (BigInt(F) << BigInt(32));
  }), a.prototype.readBigUInt64BE = mt(function(f) {
    f = f >>> 0, ot(f, "offset");
    const h = this[f], _ = this[f + 7];
    (h === void 0 || _ === void 0) && Xt(f, this.length - 8);
    const k = h * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], F = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + _;
    return (BigInt(k) << BigInt(32)) + BigInt(F);
  }), a.prototype.readIntLE = function(f, h, _) {
    f = f >>> 0, h = h >>> 0, _ || M(f, h, this.length);
    let k = this[f], F = 1, H = 0;
    for (; ++H < h && (F *= 256); )
      k += this[f + H] * F;
    return F *= 128, k >= F && (k -= Math.pow(2, 8 * h)), k;
  }, a.prototype.readIntBE = function(f, h, _) {
    f = f >>> 0, h = h >>> 0, _ || M(f, h, this.length);
    let k = h, F = 1, H = this[f + --k];
    for (; k > 0 && (F *= 256); )
      H += this[f + --k] * F;
    return F *= 128, H >= F && (H -= Math.pow(2, 8 * h)), H;
  }, a.prototype.readInt8 = function(f, h) {
    return f = f >>> 0, h || M(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, a.prototype.readInt16LE = function(f, h) {
    f = f >>> 0, h || M(f, 2, this.length);
    const _ = this[f] | this[f + 1] << 8;
    return _ & 32768 ? _ | 4294901760 : _;
  }, a.prototype.readInt16BE = function(f, h) {
    f = f >>> 0, h || M(f, 2, this.length);
    const _ = this[f + 1] | this[f] << 8;
    return _ & 32768 ? _ | 4294901760 : _;
  }, a.prototype.readInt32LE = function(f, h) {
    return f = f >>> 0, h || M(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, a.prototype.readInt32BE = function(f, h) {
    return f = f >>> 0, h || M(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, a.prototype.readBigInt64LE = mt(function(f) {
    f = f >>> 0, ot(f, "offset");
    const h = this[f], _ = this[f + 7];
    (h === void 0 || _ === void 0) && Xt(f, this.length - 8);
    const k = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (_ << 24);
    return (BigInt(k) << BigInt(32)) + BigInt(h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), a.prototype.readBigInt64BE = mt(function(f) {
    f = f >>> 0, ot(f, "offset");
    const h = this[f], _ = this[f + 7];
    (h === void 0 || _ === void 0) && Xt(f, this.length - 8);
    const k = (h << 24) + // Overflow
    this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(k) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + _);
  }), a.prototype.readFloatLE = function(f, h) {
    return f = f >>> 0, h || M(f, 4, this.length), r.read(this, f, !0, 23, 4);
  }, a.prototype.readFloatBE = function(f, h) {
    return f = f >>> 0, h || M(f, 4, this.length), r.read(this, f, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(f, h) {
    return f = f >>> 0, h || M(f, 8, this.length), r.read(this, f, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(f, h) {
    return f = f >>> 0, h || M(f, 8, this.length), r.read(this, f, !1, 52, 8);
  };
  function V(g, f, h, _, k, F) {
    if (!a.isBuffer(g))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > k || f < F)
      throw new RangeError('"value" argument is out of bounds');
    if (h + _ > g.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(f, h, _, k) {
    if (f = +f, h = h >>> 0, _ = _ >>> 0, !k) {
      const X = Math.pow(2, 8 * _) - 1;
      V(this, f, h, _, X, 0);
    }
    let F = 1, H = 0;
    for (this[h] = f & 255; ++H < _ && (F *= 256); )
      this[h + H] = f / F & 255;
    return h + _;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(f, h, _, k) {
    if (f = +f, h = h >>> 0, _ = _ >>> 0, !k) {
      const X = Math.pow(2, 8 * _) - 1;
      V(this, f, h, _, X, 0);
    }
    let F = _ - 1, H = 1;
    for (this[h + F] = f & 255; --F >= 0 && (H *= 256); )
      this[h + F] = f / H & 255;
    return h + _;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 1, 255, 0), this[h] = f & 255, h + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 2, 65535, 0), this[h] = f & 255, this[h + 1] = f >>> 8, h + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 2, 65535, 0), this[h] = f >>> 8, this[h + 1] = f & 255, h + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 4, 4294967295, 0), this[h + 3] = f >>> 24, this[h + 2] = f >>> 16, this[h + 1] = f >>> 8, this[h] = f & 255, h + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 4, 4294967295, 0), this[h] = f >>> 24, this[h + 1] = f >>> 16, this[h + 2] = f >>> 8, this[h + 3] = f & 255, h + 4;
  };
  function Z(g, f, h, _, k) {
    dt(f, _, k, g, h, 7);
    let F = Number(f & BigInt(4294967295));
    g[h++] = F, F = F >> 8, g[h++] = F, F = F >> 8, g[h++] = F, F = F >> 8, g[h++] = F;
    let H = Number(f >> BigInt(32) & BigInt(4294967295));
    return g[h++] = H, H = H >> 8, g[h++] = H, H = H >> 8, g[h++] = H, H = H >> 8, g[h++] = H, h;
  }
  function J(g, f, h, _, k) {
    dt(f, _, k, g, h, 7);
    let F = Number(f & BigInt(4294967295));
    g[h + 7] = F, F = F >> 8, g[h + 6] = F, F = F >> 8, g[h + 5] = F, F = F >> 8, g[h + 4] = F;
    let H = Number(f >> BigInt(32) & BigInt(4294967295));
    return g[h + 3] = H, H = H >> 8, g[h + 2] = H, H = H >> 8, g[h + 1] = H, H = H >> 8, g[h] = H, h + 8;
  }
  a.prototype.writeBigUInt64LE = mt(function(f, h = 0) {
    return Z(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = mt(function(f, h = 0) {
    return J(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(f, h, _, k) {
    if (f = +f, h = h >>> 0, !k) {
      const bt = Math.pow(2, 8 * _ - 1);
      V(this, f, h, _, bt - 1, -bt);
    }
    let F = 0, H = 1, X = 0;
    for (this[h] = f & 255; ++F < _ && (H *= 256); )
      f < 0 && X === 0 && this[h + F - 1] !== 0 && (X = 1), this[h + F] = (f / H >> 0) - X & 255;
    return h + _;
  }, a.prototype.writeIntBE = function(f, h, _, k) {
    if (f = +f, h = h >>> 0, !k) {
      const bt = Math.pow(2, 8 * _ - 1);
      V(this, f, h, _, bt - 1, -bt);
    }
    let F = _ - 1, H = 1, X = 0;
    for (this[h + F] = f & 255; --F >= 0 && (H *= 256); )
      f < 0 && X === 0 && this[h + F + 1] !== 0 && (X = 1), this[h + F] = (f / H >> 0) - X & 255;
    return h + _;
  }, a.prototype.writeInt8 = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[h] = f & 255, h + 1;
  }, a.prototype.writeInt16LE = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 2, 32767, -32768), this[h] = f & 255, this[h + 1] = f >>> 8, h + 2;
  }, a.prototype.writeInt16BE = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 2, 32767, -32768), this[h] = f >>> 8, this[h + 1] = f & 255, h + 2;
  }, a.prototype.writeInt32LE = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 4, 2147483647, -2147483648), this[h] = f & 255, this[h + 1] = f >>> 8, this[h + 2] = f >>> 16, this[h + 3] = f >>> 24, h + 4;
  }, a.prototype.writeInt32BE = function(f, h, _) {
    return f = +f, h = h >>> 0, _ || V(this, f, h, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[h] = f >>> 24, this[h + 1] = f >>> 16, this[h + 2] = f >>> 8, this[h + 3] = f & 255, h + 4;
  }, a.prototype.writeBigInt64LE = mt(function(f, h = 0) {
    return Z(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = mt(function(f, h = 0) {
    return J(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Q(g, f, h, _, k, F) {
    if (h + _ > g.length)
      throw new RangeError("Index out of range");
    if (h < 0)
      throw new RangeError("Index out of range");
  }
  function it(g, f, h, _, k) {
    return f = +f, h = h >>> 0, k || Q(g, f, h, 4), r.write(g, f, h, _, 23, 4), h + 4;
  }
  a.prototype.writeFloatLE = function(f, h, _) {
    return it(this, f, h, !0, _);
  }, a.prototype.writeFloatBE = function(f, h, _) {
    return it(this, f, h, !1, _);
  };
  function st(g, f, h, _, k) {
    return f = +f, h = h >>> 0, k || Q(g, f, h, 8), r.write(g, f, h, _, 52, 8), h + 8;
  }
  a.prototype.writeDoubleLE = function(f, h, _) {
    return st(this, f, h, !0, _);
  }, a.prototype.writeDoubleBE = function(f, h, _) {
    return st(this, f, h, !1, _);
  }, a.prototype.copy = function(f, h, _, k) {
    if (!a.isBuffer(f))
      throw new TypeError("argument should be a Buffer");
    if (_ || (_ = 0), !k && k !== 0 && (k = this.length), h >= f.length && (h = f.length), h || (h = 0), k > 0 && k < _ && (k = _), k === _ || f.length === 0 || this.length === 0)
      return 0;
    if (h < 0)
      throw new RangeError("targetStart out of bounds");
    if (_ < 0 || _ >= this.length)
      throw new RangeError("Index out of range");
    if (k < 0)
      throw new RangeError("sourceEnd out of bounds");
    k > this.length && (k = this.length), f.length - h < k - _ && (k = f.length - h + _);
    const F = k - _;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(h, _, k) : Uint8Array.prototype.set.call(
      f,
      this.subarray(_, k),
      h
    ), F;
  }, a.prototype.fill = function(f, h, _, k) {
    if (typeof f == "string") {
      if (typeof h == "string" ? (k = h, h = 0, _ = this.length) : typeof _ == "string" && (k = _, _ = this.length), k !== void 0 && typeof k != "string")
        throw new TypeError("encoding must be a string");
      if (typeof k == "string" && !a.isEncoding(k))
        throw new TypeError("Unknown encoding: " + k);
      if (f.length === 1) {
        const H = f.charCodeAt(0);
        (k === "utf8" && H < 128 || k === "latin1") && (f = H);
      }
    } else
      typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (h < 0 || this.length < h || this.length < _)
      throw new RangeError("Out of range index");
    if (_ <= h)
      return this;
    h = h >>> 0, _ = _ === void 0 ? this.length : _ >>> 0, f || (f = 0);
    let F;
    if (typeof f == "number")
      for (F = h; F < _; ++F)
        this[F] = f;
    else {
      const H = a.isBuffer(f) ? f : a.from(f, k), X = H.length;
      if (X === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (F = 0; F < _ - h; ++F)
        this[F + h] = H[F % X];
    }
    return this;
  };
  const zt = {};
  function at(g, f, h) {
    zt[g] = class extends h {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: f.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${g}]`, this.stack, delete this.name;
      }
      get code() {
        return g;
      }
      set code(k) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: k,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${g}]: ${this.message}`;
      }
    };
  }
  at(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(g) {
      return g ? `${g} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), at(
    "ERR_INVALID_ARG_TYPE",
    function(g, f) {
      return `The "${g}" argument must be of type number. Received type ${typeof f}`;
    },
    TypeError
  ), at(
    "ERR_OUT_OF_RANGE",
    function(g, f, h) {
      let _ = `The value of "${g}" is out of range.`, k = h;
      return Number.isInteger(h) && Math.abs(h) > 2 ** 32 ? k = ut(String(h)) : typeof h == "bigint" && (k = String(h), (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) && (k = ut(k)), k += "n"), _ += ` It must be ${f}. Received ${k}`, _;
    },
    RangeError
  );
  function ut(g) {
    let f = "", h = g.length;
    const _ = g[0] === "-" ? 1 : 0;
    for (; h >= _ + 4; h -= 3)
      f = `_${g.slice(h - 3, h)}${f}`;
    return `${g.slice(0, h)}${f}`;
  }
  function He(g, f, h) {
    ot(f, "offset"), (g[f] === void 0 || g[f + h] === void 0) && Xt(f, g.length - (h + 1));
  }
  function dt(g, f, h, _, k, F) {
    if (g > h || g < f) {
      const H = typeof f == "bigint" ? "n" : "";
      let X;
      throw F > 3 ? f === 0 || f === BigInt(0) ? X = `>= 0${H} and < 2${H} ** ${(F + 1) * 8}${H}` : X = `>= -(2${H} ** ${(F + 1) * 8 - 1}${H}) and < 2 ** ${(F + 1) * 8 - 1}${H}` : X = `>= ${f}${H} and <= ${h}${H}`, new zt.ERR_OUT_OF_RANGE("value", X, g);
    }
    He(_, k, F);
  }
  function ot(g, f) {
    if (typeof g != "number")
      throw new zt.ERR_INVALID_ARG_TYPE(f, "number", g);
  }
  function Xt(g, f, h) {
    throw Math.floor(g) !== g ? (ot(g, h), new zt.ERR_OUT_OF_RANGE(h || "offset", "an integer", g)) : f < 0 ? new zt.ERR_BUFFER_OUT_OF_BOUNDS() : new zt.ERR_OUT_OF_RANGE(
      h || "offset",
      `>= ${h ? 1 : 0} and <= ${f}`,
      g
    );
  }
  const yt = /[^+/0-9A-Za-z-_]/g;
  function wt(g) {
    if (g = g.split("=")[0], g = g.trim().replace(yt, ""), g.length < 2)
      return "";
    for (; g.length % 4 !== 0; )
      g = g + "=";
    return g;
  }
  function Ye(g, f) {
    f = f || 1 / 0;
    let h;
    const _ = g.length;
    let k = null;
    const F = [];
    for (let H = 0; H < _; ++H) {
      if (h = g.charCodeAt(H), h > 55295 && h < 57344) {
        if (!k) {
          if (h > 56319) {
            (f -= 3) > -1 && F.push(239, 191, 189);
            continue;
          } else if (H + 1 === _) {
            (f -= 3) > -1 && F.push(239, 191, 189);
            continue;
          }
          k = h;
          continue;
        }
        if (h < 56320) {
          (f -= 3) > -1 && F.push(239, 191, 189), k = h;
          continue;
        }
        h = (k - 55296 << 10 | h - 56320) + 65536;
      } else
        k && (f -= 3) > -1 && F.push(239, 191, 189);
      if (k = null, h < 128) {
        if ((f -= 1) < 0)
          break;
        F.push(h);
      } else if (h < 2048) {
        if ((f -= 2) < 0)
          break;
        F.push(
          h >> 6 | 192,
          h & 63 | 128
        );
      } else if (h < 65536) {
        if ((f -= 3) < 0)
          break;
        F.push(
          h >> 12 | 224,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else if (h < 1114112) {
        if ((f -= 4) < 0)
          break;
        F.push(
          h >> 18 | 240,
          h >> 12 & 63 | 128,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return F;
  }
  function Et(g) {
    const f = [];
    for (let h = 0; h < g.length; ++h)
      f.push(g.charCodeAt(h) & 255);
    return f;
  }
  function _t(g, f) {
    let h, _, k;
    const F = [];
    for (let H = 0; H < g.length && !((f -= 2) < 0); ++H)
      h = g.charCodeAt(H), _ = h >> 8, k = h % 256, F.push(k), F.push(_);
    return F;
  }
  function wr(g) {
    return t.toByteArray(wt(g));
  }
  function vt(g, f, h, _) {
    let k;
    for (k = 0; k < _ && !(k + h >= f.length || k >= g.length); ++k)
      f[k + h] = g[k];
    return k;
  }
  function ht(g, f) {
    return g instanceof f || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === f.name;
  }
  function Xe(g) {
    return g !== g;
  }
  const Mt = function() {
    const g = "0123456789abcdef", f = new Array(256);
    for (let h = 0; h < 16; ++h) {
      const _ = h * 16;
      for (let k = 0; k < 16; ++k)
        f[_ + k] = g[h] + g[k];
    }
    return f;
  }();
  function mt(g) {
    return typeof BigInt > "u" ? Or : g;
  }
  function Or() {
    throw new Error("BigInt not supported");
  }
})(gr);
function vs(e) {
  return gr.Buffer.from(e).toString("base64");
}
function Ju(e) {
  var t = JSON.stringify(e);
  return Xu(gr.Buffer.from(t).toString("base64"));
}
function Gu(e) {
  var t = gr.Buffer.from(Yu(e), "base64").toString(), r = JSON.parse(t);
  return r;
}
function Yu(e) {
  return e.replace(/-/g, "+").replace(/_/g, "/");
}
function Xu(e) {
  return e.replace(/\+/g, "-").replace(/\//g, "_").split("=")[0];
}
var Qu = "A", tf = "cashu";
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const bs = BigInt(0), xn = BigInt(1), ef = BigInt(2), En = (e) => e instanceof Uint8Array, rf = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Ue(e) {
  if (!En(e))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += rf[e[r]];
  return t;
}
function xs(e) {
  const t = e.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function Vi(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
function ur(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  if (e.length % 2)
    throw new Error("hex string is invalid: unpadded " + e.length);
  const t = new Uint8Array(e.length / 2);
  for (let r = 0; r < t.length; r++) {
    const n = r * 2, o = e.slice(n, n + 2), i = Number.parseInt(o, 16);
    if (Number.isNaN(i) || i < 0)
      throw new Error("invalid byte sequence");
    t[r] = i;
  }
  return t;
}
function Qt(e) {
  return Vi(Ue(e));
}
function Wi(e) {
  if (!En(e))
    throw new Error("Uint8Array expected");
  return Vi(Ue(Uint8Array.from(e).reverse()));
}
const Re = (e, t) => ur(e.toString(16).padStart(t * 2, "0")), Es = (e, t) => Re(e, t).reverse(), nf = (e) => ur(xs(e));
function Gt(e, t, r) {
  let n;
  if (typeof t == "string")
    try {
      n = ur(t);
    } catch (i) {
      throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${i}`);
    }
  else if (En(t))
    n = Uint8Array.from(t);
  else
    throw new Error(`${e} must be hex string or Uint8Array`);
  const o = n.length;
  if (typeof r == "number" && o !== r)
    throw new Error(`${e} expected ${r} bytes, got ${o}`);
  return n;
}
function re(...e) {
  const t = new Uint8Array(e.reduce((n, o) => n + o.length, 0));
  let r = 0;
  return e.forEach((n) => {
    if (!En(n))
      throw new Error("Uint8Array expected");
    t.set(n, r), r += n.length;
  }), t;
}
function of(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function _n(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function sf(e) {
  let t;
  for (t = 0; e > bs; e >>= xn, t += 1)
    ;
  return t;
}
const af = (e, t) => e >> BigInt(t) & xn, uf = (e, t, r) => e | (r ? xn : bs) << BigInt(t), $i = (e) => (ef << BigInt(e - 1)) - xn, ri = (e) => new Uint8Array(e), Bo = (e) => Uint8Array.from(e);
function _s(e, t, r) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof r != "function")
    throw new Error("hmacFn must be a function");
  let n = ri(e), o = ri(e), i = 0;
  const s = () => {
    n.fill(1), o.fill(0), i = 0;
  }, a = (...b) => r(o, n, ...b), l = (b = ri()) => {
    o = a(Bo([0]), b), n = a(), b.length !== 0 && (o = a(Bo([1]), b), n = a());
  }, p = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let b = 0;
    const S = [];
    for (; b < t; ) {
      n = a();
      const I = n.slice();
      S.push(I), b += n.length;
    }
    return re(...S);
  };
  return (b, S) => {
    s(), l(b);
    let I;
    for (; !(I = S(p())); )
      l();
    return s(), I;
  };
}
const ff = {
  bigint: (e) => typeof e == "bigint",
  function: (e) => typeof e == "function",
  boolean: (e) => typeof e == "boolean",
  string: (e) => typeof e == "string",
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function yr(e, t, r = {}) {
  const n = (o, i, s) => {
    const a = ff[i];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const l = e[o];
    if (!(s && l === void 0) && !a(l, e))
      throw new Error(`Invalid param ${String(o)}=${l} (${typeof l}), expected ${i}`);
  };
  for (const [o, i] of Object.entries(t))
    n(o, i, !1);
  for (const [o, i] of Object.entries(r))
    n(o, i, !0);
  return e;
}
const lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: af,
  bitLen: sf,
  bitMask: $i,
  bitSet: uf,
  bytesToHex: Ue,
  bytesToNumberBE: Qt,
  bytesToNumberLE: Wi,
  concatBytes: re,
  createHmacDrbg: _s,
  ensureBytes: Gt,
  equalBytes: of,
  hexToBytes: ur,
  hexToNumber: Vi,
  numberToBytesBE: Re,
  numberToBytesLE: Es,
  numberToHexUnpadded: xs,
  numberToVarBytesBE: nf,
  utf8ToBytes: _n,
  validateObject: yr
}, Symbol.toStringTag, { value: "Module" }));
function Ei(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
function cf(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
function Ms(e, ...t) {
  if (!(e instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function hf(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ei(e.outputLen), Ei(e.blockLen);
}
function df(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function pf(e, t) {
  Ms(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const je = {
  number: Ei,
  bool: cf,
  bytes: Ms,
  hash: hf,
  exists: df,
  output: pf
}, ni = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ii = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), le = (e, t) => e << 32 - t | e >>> t, mf = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!mf)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function gf(e) {
  if (typeof e != "string")
    throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function Zi(e) {
  if (typeof e == "string" && (e = gf(e)), !(e instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
function yf(...e) {
  if (!e.every((n) => n instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (e.length === 1)
    return e[0];
  const t = e.reduce((n, o) => n + o.length, 0), r = new Uint8Array(t);
  for (let n = 0, o = 0; n < e.length; n++) {
    const i = e[n];
    r.set(i, o), o += i.length;
  }
  return r;
}
class Bs {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function As(e) {
  const t = (n) => e().update(Zi(n)).digest(), r = e();
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
}
function Qr(e = 32) {
  if (ni && typeof ni.getRandomValues == "function")
    return ni.getRandomValues(new Uint8Array(e));
  throw new Error("crypto.getRandomValues must be defined");
}
function wf(e, t, r, n) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, r, n);
  const o = BigInt(32), i = BigInt(4294967295), s = Number(r >> o & i), a = Number(r & i), l = n ? 4 : 0, p = n ? 0 : 4;
  e.setUint32(t + l, s, n), e.setUint32(t + p, a, n);
}
class vf extends Bs {
  constructor(t, r, n, o) {
    super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = ii(this.buffer);
  }
  update(t) {
    je.exists(this);
    const { view: r, buffer: n, blockLen: o } = this;
    t = Zi(t);
    const i = t.length;
    for (let s = 0; s < i; ) {
      const a = Math.min(o - this.pos, i - s);
      if (a === o) {
        const l = ii(t);
        for (; o <= i - s; s += o)
          this.process(l, s);
        continue;
      }
      n.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === o && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    je.exists(this), je.output(t, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: o, isLE: i } = this;
    let { pos: s } = this;
    r[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > o - s && (this.process(n, 0), s = 0);
    for (let b = s; b < o; b++)
      r[b] = 0;
    wf(n, o - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const a = ii(t), l = this.outputLen;
    if (l % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const p = l / 4, y = this.get();
    if (p > y.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let b = 0; b < p; b++)
      a.setUint32(4 * b, y[b], i);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: o, finished: i, destroyed: s, pos: a } = this;
    return t.length = o, t.pos = a, t.finished = i, t.destroyed = s, o % r && t.buffer.set(n), t;
  }
}
const bf = (e, t, r) => e & t ^ ~e & r, xf = (e, t, r) => e & t ^ e & r ^ t & r, Ef = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Se = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Ie = new Uint32Array(64);
class Ss extends vf {
  constructor() {
    super(64, 32, 8, !1), this.A = Se[0] | 0, this.B = Se[1] | 0, this.C = Se[2] | 0, this.D = Se[3] | 0, this.E = Se[4] | 0, this.F = Se[5] | 0, this.G = Se[6] | 0, this.H = Se[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: o, E: i, F: s, G: a, H: l } = this;
    return [t, r, n, o, i, s, a, l];
  }
  // prettier-ignore
  set(t, r, n, o, i, s, a, l) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = o | 0, this.E = i | 0, this.F = s | 0, this.G = a | 0, this.H = l | 0;
  }
  process(t, r) {
    for (let b = 0; b < 16; b++, r += 4)
      Ie[b] = t.getUint32(r, !1);
    for (let b = 16; b < 64; b++) {
      const S = Ie[b - 15], I = Ie[b - 2], T = le(S, 7) ^ le(S, 18) ^ S >>> 3, E = le(I, 17) ^ le(I, 19) ^ I >>> 10;
      Ie[b] = E + Ie[b - 7] + T + Ie[b - 16] | 0;
    }
    let { A: n, B: o, C: i, D: s, E: a, F: l, G: p, H: y } = this;
    for (let b = 0; b < 64; b++) {
      const S = le(a, 6) ^ le(a, 11) ^ le(a, 25), I = y + S + bf(a, l, p) + Ef[b] + Ie[b] | 0, E = (le(n, 2) ^ le(n, 13) ^ le(n, 22)) + xf(n, o, i) | 0;
      y = p, p = l, l = a, a = s + I | 0, s = i, i = o, o = n, n = I + E | 0;
    }
    n = n + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, l = l + this.F | 0, p = p + this.G | 0, y = y + this.H | 0, this.set(n, o, i, s, a, l, p, y);
  }
  roundClean() {
    Ie.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class _f extends Ss {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
const Ze = As(() => new Ss());
As(() => new _f());
var tn = globalThis && globalThis.__assign || function() {
  return tn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, tn.apply(this, arguments);
}, Ao = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
};
function Mf(e) {
  for (var t = [], r = 0; r < 32; r++) {
    var n = 1 << r;
    e & n && t.push(Math.pow(2, r));
  }
  return t;
}
function Bf(e) {
  return Af(Ue(e));
}
function Af(e) {
  return BigInt("0x".concat(e));
}
function Is(e) {
  return tf + Qu + Ju(e);
}
function So(e) {
  var t = ["web+cashu://", "cashu://", "cashu:", "cashuA"];
  return t.forEach(function(r) {
    e.startsWith(r) && (e = e.slice(r.length));
  }), Sf(e);
}
function Sf(e) {
  var t, r, n = Gu(e);
  return "token" in n ? n : Array.isArray(n) ? { token: [{ proofs: n, mint: "" }] } : { token: [{ proofs: n.proofs, mint: (r = (t = n == null ? void 0 : n.mints[0]) === null || t === void 0 ? void 0 : t.url) !== null && r !== void 0 ? r : "" }] };
}
function Lr(e) {
  var t = Object.entries(e).sort(function(n, o) {
    return +n[0] - +o[0];
  }).map(function(n) {
    var o = n[1];
    return o;
  }).join(""), r = Ze(new TextEncoder().encode(t));
  return gr.Buffer.from(r).toString("base64").slice(0, 12);
}
function If(e) {
  for (var t, r, n = {}, o = 0, i = e.token; o < i.length; o++) {
    var s = i[o];
    if (!(!(!((r = s == null ? void 0 : s.proofs) === null || r === void 0) && r.length) || !(s != null && s.mint))) {
      if (n[s.mint]) {
        (t = n[s.mint].proofs).push.apply(t, Ao([], s.proofs, !0));
        continue;
      }
      n[s.mint] = { mint: s.mint, proofs: Ao([], s.proofs, !0) };
    }
  }
  return {
    memo: e == null ? void 0 : e.memo,
    token: Object.values(n).map(function(a) {
      return tn(tn({}, a), { proofs: Tf(a.proofs) });
    })
  };
}
function Tf(e) {
  return e.sort(function(t, r) {
    return t.id.localeCompare(r.id);
  });
}
function ir(e) {
  return typeof e == "object";
}
function br(e) {
  if (ir(e)) {
    if ("error" in e && e.error)
      throw new Error(e.error);
    if ("detail" in e && e.detail)
      throw new Error(e.detail);
  }
}
function xr(e) {
  var t;
  if (ys.isAxiosError(e) && (!((t = e == null ? void 0 : e.response) === null || t === void 0) && t.data)) {
    if ("error" in e.response.data)
      throw new Error(e.response.data.error);
    if ("detail" in e.response.data)
      throw new Error(e.response.data.detail);
  }
}
var Vt = globalThis && globalThis.__awaiter || function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function a(y) {
      try {
        p(n.next(y));
      } catch (b) {
        s(b);
      }
    }
    function l(y) {
      try {
        p(n.throw(y));
      } catch (b) {
        s(b);
      }
    }
    function p(y) {
      y.done ? i(y.value) : o(y.value).then(a, l);
    }
    p((n = n.apply(e, t || [])).next());
  });
}, Wt = globalThis && globalThis.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(p) {
    return function(y) {
      return l([p, y]);
    };
  }
  function l(p) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, p[0] && (r = 0)), r; )
      try {
        if (n = 1, o && (i = p[0] & 2 ? o.return : p[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, p[1])).done)
          return i;
        switch (o = 0, i && (p = [p[0] & 2, i.value]), p[0]) {
          case 0:
          case 1:
            i = p;
            break;
          case 4:
            return r.label++, { value: p[1], done: !1 };
          case 5:
            r.label++, o = p[1], p = [0];
            continue;
          case 7:
            p = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              r = 0;
              continue;
            }
            if (p[0] === 3 && (!i || p[1] > i[0] && p[1] < i[3])) {
              r.label = p[1];
              break;
            }
            if (p[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = p;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(p);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        p = t.call(e, r);
      } catch (y) {
        p = [6, y], o = 0;
      } finally {
        n = i = 0;
      }
    if (p[0] & 5)
      throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, _i = (
  /** @class */
  function() {
    function e(t) {
      this._mintUrl = t;
    }
    return Object.defineProperty(e.prototype, "mintUrl", {
      get: function() {
        return this._mintUrl;
      },
      enumerable: !1,
      configurable: !0
    }), e.getInfo = function(t) {
      return Vt(this, void 0, void 0, function() {
        var r;
        return Wt(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, we.get("".concat(t, "/info"))];
            case 1:
              return r = n.sent().data, [2, r];
          }
        });
      });
    }, e.prototype.getInfo = function() {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(t) {
          return [2, e.getInfo(this._mintUrl)];
        });
      });
    }, e.requestMint = function(t, r) {
      return Vt(this, void 0, void 0, function() {
        var n;
        return Wt(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, we.get("".concat(t, "/mint"), {
                params: { amount: r }
              })];
            case 1:
              return n = o.sent().data, [2, n];
          }
        });
      });
    }, e.prototype.requestMint = function(t) {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(r) {
          return [2, e.requestMint(this._mintUrl, t)];
        });
      });
    }, e.mint = function(t, r, n) {
      return Vt(this, void 0, void 0, function() {
        var o, i;
        return Wt(this, function(s) {
          switch (s.label) {
            case 0:
              return s.trys.push([0, 2, , 3]), [4, we.post("".concat(t, "/mint"), r, {
                params: {
                  // payment_hash is deprecated
                  payment_hash: n,
                  hash: n
                }
              })];
            case 1:
              if (o = s.sent().data, br(o), !ir(o) || !Array.isArray(o == null ? void 0 : o.promises))
                throw new Error("bad response");
              return [2, o];
            case 2:
              throw i = s.sent(), xr(i), i;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.mint = function(t, r) {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(n) {
          return [2, e.mint(this._mintUrl, t, r)];
        });
      });
    }, e.getKeys = function(t, r) {
      return Vt(this, void 0, void 0, function() {
        var n;
        return Wt(this, function(o) {
          switch (o.label) {
            case 0:
              return r && (r = r.replace(/\//g, "_").replace(/\+/g, "-")), [4, we.get("".concat(t, "/keys").concat(r ? "/".concat(r) : ""))];
            case 1:
              return n = o.sent().data, [2, n];
          }
        });
      });
    }, e.prototype.getKeys = function(t) {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(r) {
          return [2, e.getKeys(this._mintUrl, t)];
        });
      });
    }, e.getKeySets = function(t) {
      return Vt(this, void 0, void 0, function() {
        var r;
        return Wt(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, we.get("".concat(t, "/keysets"))];
            case 1:
              return r = n.sent().data, [2, r];
          }
        });
      });
    }, e.prototype.getKeySets = function() {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(t) {
          return [2, e.getKeySets(this._mintUrl)];
        });
      });
    }, e.split = function(t, r) {
      return Vt(this, void 0, void 0, function() {
        var n, o;
        return Wt(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, we.post("".concat(t, "/split"), r)];
            case 1:
              if (n = i.sent().data, br(n), !ir(n) || !Array.isArray(n == null ? void 0 : n.fst) || !Array.isArray(n == null ? void 0 : n.snd))
                throw new Error("bad response");
              return [2, n];
            case 2:
              throw o = i.sent(), xr(o), o;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.split = function(t) {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(r) {
          return [2, e.split(this._mintUrl, t)];
        });
      });
    }, e.melt = function(t, r) {
      return Vt(this, void 0, void 0, function() {
        var n, o;
        return Wt(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, we.post("".concat(t, "/melt"), r)];
            case 1:
              if (n = i.sent().data, br(n), !ir(n) || typeof (n == null ? void 0 : n.paid) != "boolean" || (n == null ? void 0 : n.preimage) !== null && typeof (n == null ? void 0 : n.preimage) != "string")
                throw new Error("bad response");
              return [2, n];
            case 2:
              throw o = i.sent(), xr(o), o;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.melt = function(t) {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(r) {
          return [2, e.melt(this._mintUrl, t)];
        });
      });
    }, e.checkFees = function(t, r) {
      return Vt(this, void 0, void 0, function() {
        var n, o;
        return Wt(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, we.post("".concat(t, "/checkfees"), r)];
            case 1:
              if (n = i.sent().data, br(n), !ir(n) || typeof (n == null ? void 0 : n.fee) != "number")
                throw new Error("bad response");
              return [2, n];
            case 2:
              throw o = i.sent(), xr(o), o;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.checkFees = function(t) {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(r) {
          return [2, e.checkFees(this._mintUrl, t)];
        });
      });
    }, e.check = function(t, r) {
      return Vt(this, void 0, void 0, function() {
        var n, o;
        return Wt(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, we.post("".concat(t, "/check"), r)];
            case 1:
              if (n = i.sent().data, br(n), !ir(n) || !Array.isArray(n == null ? void 0 : n.spendable))
                throw new Error("bad response");
              return [2, n];
            case 2:
              throw o = i.sent(), xr(o), o;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.check = function(t) {
      return Vt(this, void 0, void 0, function() {
        return Wt(this, function(r) {
          return [2, e.check(this._mintUrl, t)];
        });
      });
    }, e;
  }()
);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Zt = BigInt(0), Bt = BigInt(1), Ke = BigInt(2), Cf = BigInt(3), Mi = BigInt(4), Io = BigInt(5), To = BigInt(8);
BigInt(9);
BigInt(16);
function $t(e, t) {
  const r = e % t;
  return r >= Zt ? r : t + r;
}
function kf(e, t, r) {
  if (r <= Zt || t < Zt)
    throw new Error("Expected power/modulo > 0");
  if (r === Bt)
    return Zt;
  let n = Bt;
  for (; t > Zt; )
    t & Bt && (n = n * e % r), e = e * e % r, t >>= Bt;
  return n;
}
function oe(e, t, r) {
  let n = e;
  for (; t-- > Zt; )
    n *= n, n %= r;
  return n;
}
function Bi(e, t) {
  if (e === Zt || t <= Zt)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let r = $t(e, t), n = t, o = Zt, i = Bt;
  for (; r !== Zt; ) {
    const a = n / r, l = n % r, p = o - i * a;
    n = r, r = l, o = i, i = p;
  }
  if (n !== Bt)
    throw new Error("invert: does not exist");
  return $t(o, t);
}
function Rf(e) {
  const t = (e - Bt) / Ke;
  let r, n, o;
  for (r = e - Bt, n = 0; r % Ke === Zt; r /= Ke, n++)
    ;
  for (o = Ke; o < e && kf(o, t, e) !== e - Bt; o++)
    ;
  if (n === 1) {
    const s = (e + Bt) / Mi;
    return function(l, p) {
      const y = l.pow(p, s);
      if (!l.eql(l.sqr(y), p))
        throw new Error("Cannot find square root");
      return y;
    };
  }
  const i = (r + Bt) / Ke;
  return function(a, l) {
    if (a.pow(l, t) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let p = n, y = a.pow(a.mul(a.ONE, o), r), b = a.pow(l, i), S = a.pow(l, r);
    for (; !a.eql(S, a.ONE); ) {
      if (a.eql(S, a.ZERO))
        return a.ZERO;
      let I = 1;
      for (let E = a.sqr(S); I < p && !a.eql(E, a.ONE); I++)
        E = a.sqr(E);
      const T = a.pow(y, Bt << BigInt(p - I - 1));
      y = a.sqr(T), b = a.mul(b, T), S = a.mul(S, y), p = I;
    }
    return b;
  };
}
function Nf(e) {
  if (e % Mi === Cf) {
    const t = (e + Bt) / Mi;
    return function(n, o) {
      const i = n.pow(o, t);
      if (!n.eql(n.sqr(i), o))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (e % To === Io) {
    const t = (e - Io) / To;
    return function(n, o) {
      const i = n.mul(o, Ke), s = n.pow(i, t), a = n.mul(o, s), l = n.mul(n.mul(a, Ke), s), p = n.mul(a, n.sub(l, n.ONE));
      if (!n.eql(n.sqr(p), o))
        throw new Error("Cannot find square root");
      return p;
    };
  }
  return Rf(e);
}
const Uf = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Ts(e) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, r = Uf.reduce((n, o) => (n[o] = "function", n), t);
  return yr(e, r);
}
function Of(e, t, r) {
  if (r < Zt)
    throw new Error("Expected power > 0");
  if (r === Zt)
    return e.ONE;
  if (r === Bt)
    return t;
  let n = e.ONE, o = t;
  for (; r > Zt; )
    r & Bt && (n = e.mul(n, o)), o = e.sqr(o), r >>= Bt;
  return n;
}
function Pf(e, t) {
  const r = new Array(t.length), n = t.reduce((i, s, a) => e.is0(s) ? i : (r[a] = i, e.mul(i, s)), e.ONE), o = e.inv(n);
  return t.reduceRight((i, s, a) => e.is0(s) ? i : (r[a] = e.mul(i, r[a]), e.mul(i, s)), o), r;
}
function Ji(e, t) {
  const r = t !== void 0 ? t : e.toString(2).length, n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function Lf(e, t, r = !1, n = {}) {
  if (e <= Zt)
    throw new Error(`Expected Fp ORDER > 0, got ${e}`);
  const { nBitLength: o, nByteLength: i } = Ji(e, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const s = Nf(e), a = Object.freeze({
    ORDER: e,
    BITS: o,
    BYTES: i,
    MASK: $i(o),
    ZERO: Zt,
    ONE: Bt,
    create: (l) => $t(l, e),
    isValid: (l) => {
      if (typeof l != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);
      return Zt <= l && l < e;
    },
    is0: (l) => l === Zt,
    isOdd: (l) => (l & Bt) === Bt,
    neg: (l) => $t(-l, e),
    eql: (l, p) => l === p,
    sqr: (l) => $t(l * l, e),
    add: (l, p) => $t(l + p, e),
    sub: (l, p) => $t(l - p, e),
    mul: (l, p) => $t(l * p, e),
    pow: (l, p) => Of(a, l, p),
    div: (l, p) => $t(l * Bi(p, e), e),
    // Same as above, but doesn't normalize
    sqrN: (l) => l * l,
    addN: (l, p) => l + p,
    subN: (l, p) => l - p,
    mulN: (l, p) => l * p,
    inv: (l) => Bi(l, e),
    sqrt: n.sqrt || ((l) => s(a, l)),
    invertBatch: (l) => Pf(a, l),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (l, p, y) => y ? p : l,
    toBytes: (l) => r ? Es(l, i) : Re(l, i),
    fromBytes: (l) => {
      if (l.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${l.length}`);
      return r ? Wi(l) : Qt(l);
    }
  });
  return Object.freeze(a);
}
function Ff(e, t, r = !1) {
  e = Gt("privateHash", e);
  const n = e.length, o = Ji(t).nByteLength + 8;
  if (o < 24 || n < o || n > 1024)
    throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${n}`);
  const i = r ? Wi(e) : Qt(e);
  return $t(i, t - Bt) + Bt;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Df = BigInt(0), oi = BigInt(1);
function qf(e, t) {
  const r = (o, i) => {
    const s = i.negate();
    return o ? s : i;
  }, n = (o) => {
    const i = Math.ceil(t / o) + 1, s = 2 ** (o - 1);
    return { windows: i, windowSize: s };
  };
  return {
    constTimeNegate: r,
    // non-const time multiplication ladder
    unsafeLadder(o, i) {
      let s = e.ZERO, a = o;
      for (; i > Df; )
        i & oi && (s = s.add(a)), a = a.double(), i >>= oi;
      return s;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(o, i) {
      const { windows: s, windowSize: a } = n(i), l = [];
      let p = o, y = p;
      for (let b = 0; b < s; b++) {
        y = p, l.push(y);
        for (let S = 1; S < a; S++)
          y = y.add(p), l.push(y);
        p = y.double();
      }
      return l;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(o, i, s) {
      const { windows: a, windowSize: l } = n(o);
      let p = e.ZERO, y = e.BASE;
      const b = BigInt(2 ** o - 1), S = 2 ** o, I = BigInt(o);
      for (let T = 0; T < a; T++) {
        const E = T * l;
        let N = Number(s & b);
        s >>= I, N > l && (N -= S, s += oi);
        const C = E, U = E + Math.abs(N) - 1, O = T % 2 !== 0, P = N < 0;
        N === 0 ? y = y.add(r(O, i[C])) : p = p.add(r(P, i[U]));
      }
      return { p, f: y };
    },
    wNAFCached(o, i, s, a) {
      const l = o._WINDOW_SIZE || 1;
      let p = i.get(o);
      return p || (p = this.precomputeWindow(o, l), l !== 1 && i.set(o, a(p))), this.wNAF(l, p, s);
    }
  };
}
function Cs(e) {
  return Ts(e.Fp), yr(e, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Ji(e.n, e.nBitLength),
    ...e,
    p: e.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Hf(e) {
  const t = Cs(e);
  yr(t, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: r, Fp: n, a: o } = t;
  if (r) {
    if (!n.eql(o, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof r != "object" || typeof r.beta != "bigint" || typeof r.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: Kf, hexToBytes: zf } = lf, Ve = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(e) {
    const { Err: t } = Ve;
    if (e.length < 2 || e[0] !== 2)
      throw new t("Invalid signature integer tag");
    const r = e[1], n = e.subarray(2, r + 2);
    if (!r || n.length !== r)
      throw new t("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: Kf(n), l: e.subarray(r + 2) };
  },
  toSig(e) {
    const { Err: t } = Ve, r = typeof e == "string" ? zf(e) : e;
    if (!(r instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = r.length;
    if (n < 2 || r[0] != 48)
      throw new t("Invalid signature tag");
    if (r[1] !== n - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: o, l: i } = Ve._parseInt(r.subarray(2)), { d: s, l: a } = Ve._parseInt(i);
    if (a.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: o, s };
  },
  hexFromSig(e) {
    const t = (p) => Number.parseInt(p[0], 16) & 8 ? "00" + p : p, r = (p) => {
      const y = p.toString(16);
      return y.length & 1 ? `0${y}` : y;
    }, n = t(r(e.s)), o = t(r(e.r)), i = n.length / 2, s = o.length / 2, a = r(i), l = r(s);
    return `30${r(s + i + 4)}02${l}${o}02${a}${n}`;
  }
}, ue = BigInt(0), Kt = BigInt(1), ve = BigInt(2), en = BigInt(3), Co = BigInt(4);
function jf(e) {
  const t = Hf(e), { Fp: r } = t, n = t.toBytes || ((T, E, N) => {
    const C = E.toAffine();
    return re(Uint8Array.from([4]), r.toBytes(C.x), r.toBytes(C.y));
  }), o = t.fromBytes || ((T) => {
    const E = T.subarray(1), N = r.fromBytes(E.subarray(0, r.BYTES)), C = r.fromBytes(E.subarray(r.BYTES, 2 * r.BYTES));
    return { x: N, y: C };
  });
  function i(T) {
    const { a: E, b: N } = t, C = r.sqr(T), U = r.mul(C, T);
    return r.add(r.add(U, r.mul(T, E)), N);
  }
  if (!r.eql(r.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function s(T) {
    return typeof T == "bigint" && ue < T && T < t.n;
  }
  function a(T) {
    if (!s(T))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function l(T) {
    const { allowedPrivateKeyLengths: E, nByteLength: N, wrapPrivateKey: C, n: U } = t;
    if (E && typeof T != "bigint") {
      if (T instanceof Uint8Array && (T = Ue(T)), typeof T != "string" || !E.includes(T.length))
        throw new Error("Invalid key");
      T = T.padStart(N * 2, "0");
    }
    let O;
    try {
      O = typeof T == "bigint" ? T : Qt(Gt("private key", T, N));
    } catch {
      throw new Error(`private key must be ${N} bytes, hex or bigint, not ${typeof T}`);
    }
    return C && (O = $t(O, U)), a(O), O;
  }
  const p = /* @__PURE__ */ new Map();
  function y(T) {
    if (!(T instanceof b))
      throw new Error("ProjectivePoint expected");
  }
  class b {
    constructor(E, N, C) {
      if (this.px = E, this.py = N, this.pz = C, E == null || !r.isValid(E))
        throw new Error("x required");
      if (N == null || !r.isValid(N))
        throw new Error("y required");
      if (C == null || !r.isValid(C))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(E) {
      const { x: N, y: C } = E || {};
      if (!E || !r.isValid(N) || !r.isValid(C))
        throw new Error("invalid affine point");
      if (E instanceof b)
        throw new Error("projective point not allowed");
      const U = (O) => r.eql(O, r.ZERO);
      return U(N) && U(C) ? b.ZERO : new b(N, C, r.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(E) {
      const N = r.invertBatch(E.map((C) => C.pz));
      return E.map((C, U) => C.toAffine(N[U])).map(b.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(E) {
      const N = b.fromAffine(o(Gt("pointHex", E)));
      return N.assertValidity(), N;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(E) {
      return b.BASE.multiply(l(E));
    }
    // "Private method", don't use it directly
    _setWindowSize(E) {
      this._WINDOW_SIZE = E, p.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint)
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: E, y: N } = this.toAffine();
      if (!r.isValid(E) || !r.isValid(N))
        throw new Error("bad point: x or y not FE");
      const C = r.sqr(N), U = i(E);
      if (!r.eql(C, U))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: E } = this.toAffine();
      if (r.isOdd)
        return !r.isOdd(E);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(E) {
      y(E);
      const { px: N, py: C, pz: U } = this, { px: O, py: P, pz: L } = E, q = r.eql(r.mul(N, L), r.mul(O, U)), z = r.eql(r.mul(C, L), r.mul(P, U));
      return q && z;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new b(this.px, r.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: E, b: N } = t, C = r.mul(N, en), { px: U, py: O, pz: P } = this;
      let L = r.ZERO, q = r.ZERO, z = r.ZERO, W = r.mul(U, U), Y = r.mul(O, O), G = r.mul(P, P), B = r.mul(U, O);
      return B = r.add(B, B), z = r.mul(U, P), z = r.add(z, z), L = r.mul(E, z), q = r.mul(C, G), q = r.add(L, q), L = r.sub(Y, q), q = r.add(Y, q), q = r.mul(L, q), L = r.mul(B, L), z = r.mul(C, z), G = r.mul(E, G), B = r.sub(W, G), B = r.mul(E, B), B = r.add(B, z), z = r.add(W, W), W = r.add(z, W), W = r.add(W, G), W = r.mul(W, B), q = r.add(q, W), G = r.mul(O, P), G = r.add(G, G), W = r.mul(G, B), L = r.sub(L, W), z = r.mul(G, Y), z = r.add(z, z), z = r.add(z, z), new b(L, q, z);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(E) {
      y(E);
      const { px: N, py: C, pz: U } = this, { px: O, py: P, pz: L } = E;
      let q = r.ZERO, z = r.ZERO, W = r.ZERO;
      const Y = t.a, G = r.mul(t.b, en);
      let B = r.mul(N, O), u = r.mul(C, P), d = r.mul(U, L), w = r.add(N, C), m = r.add(O, P);
      w = r.mul(w, m), m = r.add(B, u), w = r.sub(w, m), m = r.add(N, U);
      let v = r.add(O, L);
      return m = r.mul(m, v), v = r.add(B, d), m = r.sub(m, v), v = r.add(C, U), q = r.add(P, L), v = r.mul(v, q), q = r.add(u, d), v = r.sub(v, q), W = r.mul(Y, m), q = r.mul(G, d), W = r.add(q, W), q = r.sub(u, W), W = r.add(u, W), z = r.mul(q, W), u = r.add(B, B), u = r.add(u, B), d = r.mul(Y, d), m = r.mul(G, m), u = r.add(u, d), d = r.sub(B, d), d = r.mul(Y, d), m = r.add(m, d), B = r.mul(u, m), z = r.add(z, B), B = r.mul(v, m), q = r.mul(w, q), q = r.sub(q, B), B = r.mul(w, u), W = r.mul(v, W), W = r.add(W, B), new b(q, z, W);
    }
    subtract(E) {
      return this.add(E.negate());
    }
    is0() {
      return this.equals(b.ZERO);
    }
    wNAF(E) {
      return I.wNAFCached(this, p, E, (N) => {
        const C = r.invertBatch(N.map((U) => U.pz));
        return N.map((U, O) => U.toAffine(C[O])).map(b.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(E) {
      const N = b.ZERO;
      if (E === ue)
        return N;
      if (a(E), E === Kt)
        return this;
      const { endo: C } = t;
      if (!C)
        return I.unsafeLadder(this, E);
      let { k1neg: U, k1: O, k2neg: P, k2: L } = C.splitScalar(E), q = N, z = N, W = this;
      for (; O > ue || L > ue; )
        O & Kt && (q = q.add(W)), L & Kt && (z = z.add(W)), W = W.double(), O >>= Kt, L >>= Kt;
      return U && (q = q.negate()), P && (z = z.negate()), z = new b(r.mul(z.px, C.beta), z.py, z.pz), q.add(z);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(E) {
      a(E);
      let N = E, C, U;
      const { endo: O } = t;
      if (O) {
        const { k1neg: P, k1: L, k2neg: q, k2: z } = O.splitScalar(N);
        let { p: W, f: Y } = this.wNAF(L), { p: G, f: B } = this.wNAF(z);
        W = I.constTimeNegate(P, W), G = I.constTimeNegate(q, G), G = new b(r.mul(G.px, O.beta), G.py, G.pz), C = W.add(G), U = Y.add(B);
      } else {
        const { p: P, f: L } = this.wNAF(N);
        C = P, U = L;
      }
      return b.normalizeZ([C, U])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(E, N, C) {
      const U = b.BASE, O = (L, q) => q === ue || q === Kt || !L.equals(U) ? L.multiplyUnsafe(q) : L.multiply(q), P = O(this, N).add(O(E, C));
      return P.is0() ? void 0 : P;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(E) {
      const { px: N, py: C, pz: U } = this, O = this.is0();
      E == null && (E = O ? r.ONE : r.inv(U));
      const P = r.mul(N, E), L = r.mul(C, E), q = r.mul(U, E);
      if (O)
        return { x: r.ZERO, y: r.ZERO };
      if (!r.eql(q, r.ONE))
        throw new Error("invZ was invalid");
      return { x: P, y: L };
    }
    isTorsionFree() {
      const { h: E, isTorsionFree: N } = t;
      if (E === Kt)
        return !0;
      if (N)
        return N(b, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: E, clearCofactor: N } = t;
      return E === Kt ? this : N ? N(b, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(E = !0) {
      return this.assertValidity(), n(b, this, E);
    }
    toHex(E = !0) {
      return Ue(this.toRawBytes(E));
    }
  }
  b.BASE = new b(t.Gx, t.Gy, r.ONE), b.ZERO = new b(r.ZERO, r.ONE, r.ZERO);
  const S = t.nBitLength, I = qf(b, t.endo ? Math.ceil(S / 2) : S);
  return {
    CURVE: t,
    ProjectivePoint: b,
    normPrivateKeyToScalar: l,
    weierstrassEquation: i,
    isWithinCurveOrder: s
  };
}
function Vf(e) {
  const t = Cs(e);
  return yr(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function Wf(e) {
  const t = Vf(e), { Fp: r, n } = t, o = r.BYTES + 1, i = 2 * r.BYTES + 1;
  function s(m) {
    return ue < m && m < r.ORDER;
  }
  function a(m) {
    return $t(m, n);
  }
  function l(m) {
    return Bi(m, n);
  }
  const { ProjectivePoint: p, normPrivateKeyToScalar: y, weierstrassEquation: b, isWithinCurveOrder: S } = jf({
    ...t,
    toBytes(m, v, A) {
      const R = v.toAffine(), x = r.toBytes(R.x), c = re;
      return A ? c(Uint8Array.from([v.hasEvenY() ? 2 : 3]), x) : c(Uint8Array.from([4]), x, r.toBytes(R.y));
    },
    fromBytes(m) {
      const v = m.length, A = m[0], R = m.subarray(1);
      if (v === o && (A === 2 || A === 3)) {
        const x = Qt(R);
        if (!s(x))
          throw new Error("Point is not on curve");
        const c = b(x);
        let M = r.sqrt(c);
        const V = (M & Kt) === Kt;
        return (A & 1) === 1 !== V && (M = r.neg(M)), { x, y: M };
      } else if (v === i && A === 4) {
        const x = r.fromBytes(R.subarray(0, r.BYTES)), c = r.fromBytes(R.subarray(r.BYTES, 2 * r.BYTES));
        return { x, y: c };
      } else
        throw new Error(`Point of length ${v} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`);
    }
  }), I = (m) => Ue(Re(m, t.nByteLength));
  function T(m) {
    const v = n >> Kt;
    return m > v;
  }
  function E(m) {
    return T(m) ? a(-m) : m;
  }
  const N = (m, v, A) => Qt(m.slice(v, A));
  class C {
    constructor(v, A, R) {
      this.r = v, this.s = A, this.recovery = R, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(v) {
      const A = t.nByteLength;
      return v = Gt("compactSignature", v, A * 2), new C(N(v, 0, A), N(v, A, 2 * A));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(v) {
      const { r: A, s: R } = Ve.toSig(Gt("DER", v));
      return new C(A, R);
    }
    assertValidity() {
      if (!S(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!S(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(v) {
      return new C(this.r, this.s, v);
    }
    recoverPublicKey(v) {
      const { r: A, s: R, recovery: x } = this, c = z(Gt("msgHash", v));
      if (x == null || ![0, 1, 2, 3].includes(x))
        throw new Error("recovery id invalid");
      const M = x === 2 || x === 3 ? A + t.n : A;
      if (M >= r.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const V = x & 1 ? "03" : "02", Z = p.fromHex(V + I(M)), J = l(M), Q = a(-c * J), it = a(R * J), st = p.BASE.multiplyAndAddUnsafe(Z, Q, it);
      if (!st)
        throw new Error("point at infinify");
      return st.assertValidity(), st;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return T(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new C(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return ur(this.toDERHex());
    }
    toDERHex() {
      return Ve.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return ur(this.toCompactHex());
    }
    toCompactHex() {
      return I(this.r) + I(this.s);
    }
  }
  const U = {
    isValidPrivateKey(m) {
      try {
        return y(m), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: y,
    /**
     * Produces cryptographically secure private key from random of size (nBitLength+64)
     * as per FIPS 186 B.4.1 with modulo bias being neglible.
     */
    randomPrivateKey: () => {
      const m = t.randomBytes(r.BYTES + 8), v = Ff(m, n);
      return Re(v, t.nByteLength);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(m = 8, v = p.BASE) {
      return v._setWindowSize(m), v.multiply(BigInt(3)), v;
    }
  };
  function O(m, v = !0) {
    return p.fromPrivateKey(m).toRawBytes(v);
  }
  function P(m) {
    const v = m instanceof Uint8Array, A = typeof m == "string", R = (v || A) && m.length;
    return v ? R === o || R === i : A ? R === 2 * o || R === 2 * i : m instanceof p;
  }
  function L(m, v, A = !0) {
    if (P(m))
      throw new Error("first arg must be private key");
    if (!P(v))
      throw new Error("second arg must be public key");
    return p.fromHex(v).multiply(y(m)).toRawBytes(A);
  }
  const q = t.bits2int || function(m) {
    const v = Qt(m), A = m.length * 8 - t.nBitLength;
    return A > 0 ? v >> BigInt(A) : v;
  }, z = t.bits2int_modN || function(m) {
    return a(q(m));
  }, W = $i(t.nBitLength);
  function Y(m) {
    if (typeof m != "bigint")
      throw new Error("bigint expected");
    if (!(ue <= m && m < W))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return Re(m, t.nByteLength);
  }
  function G(m, v, A = B) {
    if (["recovered", "canonical"].some((at) => at in A))
      throw new Error("sign() legacy options not supported");
    const { hash: R, randomBytes: x } = t;
    let { lowS: c, prehash: M, extraEntropy: V } = A;
    c == null && (c = !0), m = Gt("msgHash", m), M && (m = Gt("prehashed msgHash", R(m)));
    const Z = z(m), J = y(v), Q = [Y(J), Y(Z)];
    if (V != null) {
      const at = V === !0 ? x(r.BYTES) : V;
      Q.push(Gt("extraEntropy", at, r.BYTES));
    }
    const it = re(...Q), st = Z;
    function zt(at) {
      const ut = q(at);
      if (!S(ut))
        return;
      const He = l(ut), dt = p.BASE.multiply(ut).toAffine(), ot = a(dt.x);
      if (ot === ue)
        return;
      const Xt = a(He * a(st + ot * J));
      if (Xt === ue)
        return;
      let yt = (dt.x === ot ? 0 : 2) | Number(dt.y & Kt), wt = Xt;
      return c && T(Xt) && (wt = E(Xt), yt ^= 1), new C(ot, wt, yt);
    }
    return { seed: it, k2sig: zt };
  }
  const B = { lowS: t.lowS, prehash: !1 }, u = { lowS: t.lowS, prehash: !1 };
  function d(m, v, A = B) {
    const { seed: R, k2sig: x } = G(m, v, A);
    return _s(t.hash.outputLen, t.nByteLength, t.hmac)(R, x);
  }
  p.BASE._setWindowSize(8);
  function w(m, v, A, R = u) {
    var dt;
    const x = m;
    if (v = Gt("msgHash", v), A = Gt("publicKey", A), "strict" in R)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: c, prehash: M } = R;
    let V, Z;
    try {
      if (typeof x == "string" || x instanceof Uint8Array)
        try {
          V = C.fromDER(x);
        } catch (ot) {
          if (!(ot instanceof Ve.Err))
            throw ot;
          V = C.fromCompact(x);
        }
      else if (typeof x == "object" && typeof x.r == "bigint" && typeof x.s == "bigint") {
        const { r: ot, s: Xt } = x;
        V = new C(ot, Xt);
      } else
        throw new Error("PARSE");
      Z = p.fromHex(A);
    } catch (ot) {
      if (ot.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (c && V.hasHighS())
      return !1;
    M && (v = t.hash(v));
    const { r: J, s: Q } = V, it = z(v), st = l(Q), zt = a(it * st), at = a(J * st), ut = (dt = p.BASE.multiplyAndAddUnsafe(Z, zt, at)) == null ? void 0 : dt.toAffine();
    return ut ? a(ut.x) === J : !1;
  }
  return {
    CURVE: t,
    getPublicKey: O,
    getSharedSecret: L,
    sign: d,
    verify: w,
    ProjectivePoint: p,
    Signature: C,
    utils: U
  };
}
function $f(e, t) {
  const r = e.ORDER;
  let n = ue;
  for (let S = r - Kt; S % ve === ue; S /= ve)
    n += Kt;
  const o = n, i = (r - Kt) / ve ** o, s = (i - Kt) / ve, a = ve ** o - Kt, l = ve ** (o - Kt), p = e.pow(t, i), y = e.pow(t, (i + Kt) / ve);
  let b = (S, I) => {
    let T = p, E = e.pow(I, a), N = e.sqr(E);
    N = e.mul(N, I);
    let C = e.mul(S, N);
    C = e.pow(C, s), C = e.mul(C, E), E = e.mul(C, I), N = e.mul(C, S);
    let U = e.mul(N, E);
    C = e.pow(U, l);
    let O = e.eql(C, e.ONE);
    E = e.mul(N, y), C = e.mul(U, T), N = e.cmov(E, N, O), U = e.cmov(C, U, O);
    for (let P = o; P > Kt; P--) {
      let L = ve ** (P - ve), q = e.pow(U, L);
      const z = e.eql(q, e.ONE);
      E = e.mul(N, T), T = e.mul(T, T), q = e.mul(U, T), N = e.cmov(E, N, z), U = e.cmov(q, U, z);
    }
    return { isValid: O, value: N };
  };
  if (e.ORDER % Co === en) {
    const S = (e.ORDER - en) / Co, I = e.sqrt(e.neg(t));
    b = (T, E) => {
      let N = e.sqr(E);
      const C = e.mul(T, E);
      N = e.mul(N, C);
      let U = e.pow(N, S);
      U = e.mul(U, C);
      const O = e.mul(U, I), P = e.mul(e.sqr(U), E), L = e.eql(P, T);
      let q = e.cmov(O, U, L);
      return { isValid: L, value: q };
    };
  }
  return b;
}
function Zf(e, t) {
  if (Ts(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const r = $f(e, t.Z);
  if (!e.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (n) => {
    let o, i, s, a, l, p, y, b;
    o = e.sqr(n), o = e.mul(o, t.Z), i = e.sqr(o), i = e.add(i, o), s = e.add(i, e.ONE), s = e.mul(s, t.B), a = e.cmov(t.Z, e.neg(i), !e.eql(i, e.ZERO)), a = e.mul(a, t.A), i = e.sqr(s), p = e.sqr(a), l = e.mul(p, t.A), i = e.add(i, l), i = e.mul(i, s), p = e.mul(p, a), l = e.mul(p, t.B), i = e.add(i, l), y = e.mul(o, s);
    const { isValid: S, value: I } = r(i, p);
    b = e.mul(o, n), b = e.mul(b, I), y = e.cmov(y, s, S), b = e.cmov(b, I, S);
    const T = e.isOdd(n) === e.isOdd(b);
    return b = e.cmov(e.neg(b), b, T), y = e.div(y, a), { x: y, y: b };
  };
}
function Jf(e) {
  if (e instanceof Uint8Array)
    return e;
  if (typeof e == "string")
    return _n(e);
  throw new Error("DST must be Uint8Array or string");
}
const Gf = Qt;
function Te(e, t) {
  if (e < 0 || e >= 1 << 8 * t)
    throw new Error(`bad I2OSP call: value=${e} length=${t}`);
  const r = Array.from({ length: t }).fill(0);
  for (let n = t - 1; n >= 0; n--)
    r[n] = e & 255, e >>>= 8;
  return new Uint8Array(r);
}
function Yf(e, t) {
  const r = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n] ^ t[n];
  return r;
}
function Ir(e) {
  if (!(e instanceof Uint8Array))
    throw new Error("Uint8Array expected");
}
function Gi(e) {
  if (!Number.isSafeInteger(e))
    throw new Error("number expected");
}
function Xf(e, t, r, n) {
  Ir(e), Ir(t), Gi(r), t.length > 255 && (t = n(re(_n("H2C-OVERSIZE-DST-"), t)));
  const { outputLen: o, blockLen: i } = n, s = Math.ceil(r / o);
  if (s > 255)
    throw new Error("Invalid xmd length");
  const a = re(t, Te(t.length, 1)), l = Te(0, i), p = Te(r, 2), y = new Array(s), b = n(re(l, e, p, Te(0, 1), a));
  y[0] = n(re(b, Te(1, 1), a));
  for (let I = 1; I <= s; I++) {
    const T = [Yf(b, y[I - 1]), Te(I + 1, 1), a];
    y[I] = n(re(...T));
  }
  return re(...y).slice(0, r);
}
function Qf(e, t, r, n, o) {
  if (Ir(e), Ir(t), Gi(r), t.length > 255) {
    const i = Math.ceil(2 * n / 8);
    t = o.create({ dkLen: i }).update(_n("H2C-OVERSIZE-DST-")).update(t).digest();
  }
  if (r > 65535 || t.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return o.create({ dkLen: r }).update(e).update(Te(r, 2)).update(t).update(Te(t.length, 1)).digest();
}
function ko(e, t, r) {
  yr(r, {
    DST: "string",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p: n, k: o, m: i, hash: s, expand: a, DST: l } = r;
  Ir(e), Gi(t);
  const p = Jf(l), y = n.toString(2).length, b = Math.ceil((y + o) / 8), S = t * i * b;
  let I;
  if (a === "xmd")
    I = Xf(e, p, S, s);
  else if (a === "xof")
    I = Qf(e, p, S, o, s);
  else if (a === "_internal_pass")
    I = e;
  else
    throw new Error('expand must be "xmd" or "xof"');
  const T = new Array(t);
  for (let E = 0; E < t; E++) {
    const N = new Array(i);
    for (let C = 0; C < i; C++) {
      const U = b * (C + E * i), O = I.subarray(U, U + b);
      N[C] = $t(Gf(O), n);
    }
    T[E] = N;
  }
  return T;
}
function tl(e, t) {
  const r = t.map((n) => Array.from(n).reverse());
  return (n, o) => {
    const [i, s, a, l] = r.map((p) => p.reduce((y, b) => e.add(e.mul(y, n), b)));
    return n = e.div(i, s), o = e.mul(o, e.div(a, l)), { x: n, y: o };
  };
}
function el(e, t, r) {
  if (typeof t != "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve
    // https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-3
    hashToCurve(n, o) {
      const i = ko(n, 2, { ...r, DST: r.DST, ...o }), s = e.fromAffine(t(i[0])), a = e.fromAffine(t(i[1])), l = s.add(a).clearCofactor();
      return l.assertValidity(), l;
    },
    // https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-3
    encodeToCurve(n, o) {
      const i = ko(n, 1, { ...r, DST: r.encodeDST, ...o }), s = e.fromAffine(t(i[0])).clearCofactor();
      return s.assertValidity(), s;
    }
  };
}
class ks extends Bs {
  constructor(t, r) {
    super(), this.finished = !1, this.destroyed = !1, je.hash(t);
    const n = Zi(r);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new TypeError("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o = this.blockLen, i = new Uint8Array(o);
    i.set(n.length > o ? t.create().update(n).digest() : n);
    for (let s = 0; s < i.length; s++)
      i[s] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let s = 0; s < i.length; s++)
      i[s] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return je.exists(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    je.exists(this), je.bytes(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: r, iHash: n, finished: o, destroyed: i, blockLen: s, outputLen: a } = this;
    return t = t, t.finished = o, t.destroyed = i, t.blockLen = s, t.outputLen = a, t.oHash = r._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Rs = (e, t, r) => new ks(e, t).update(r).digest();
Rs.create = (e, t) => new ks(e, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function rl(e) {
  return {
    hash: e,
    hmac: (t, ...r) => Rs(e, t, yf(...r)),
    randomBytes: Qr
  };
}
function nl(e, t) {
  const r = (n) => Wf({ ...e, ...rl(n) });
  return Object.freeze({ ...r(t), create: r });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Mn = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), rn = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Ns = BigInt(1), nn = BigInt(2), Ro = (e, t) => (e + t / nn) / t;
function Us(e) {
  const t = Mn, r = BigInt(3), n = BigInt(6), o = BigInt(11), i = BigInt(22), s = BigInt(23), a = BigInt(44), l = BigInt(88), p = e * e * e % t, y = p * p * e % t, b = oe(y, r, t) * y % t, S = oe(b, r, t) * y % t, I = oe(S, nn, t) * p % t, T = oe(I, o, t) * I % t, E = oe(T, i, t) * T % t, N = oe(E, a, t) * E % t, C = oe(N, l, t) * N % t, U = oe(C, a, t) * E % t, O = oe(U, r, t) * y % t, P = oe(O, s, t) * T % t, L = oe(P, n, t) * p % t, q = oe(L, nn, t);
  if (!Oe.eql(Oe.sqr(q), e))
    throw new Error("Cannot find square root");
  return q;
}
const Oe = Lf(Mn, void 0, void 0, { sqrt: Us }), Je = nl({
  a: BigInt(0),
  b: BigInt(7),
  Fp: Oe,
  n: rn,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (e) => {
      const t = rn, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -Ns * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = r, s = BigInt("0x100000000000000000000000000000000"), a = Ro(i * e, t), l = Ro(-n * e, t);
      let p = $t(e - a * r - l * o, t), y = $t(-a * n - l * i, t);
      const b = p > s, S = y > s;
      if (b && (p = t - p), S && (y = t - y), p > s || y > s)
        throw new Error("splitScalar: Endomorphism failed, k=" + e);
      return { k1neg: b, k1: p, k2neg: S, k2: y };
    }
  }
}, Ze), Bn = BigInt(0), Os = (e) => typeof e == "bigint" && Bn < e && e < Mn, il = (e) => typeof e == "bigint" && Bn < e && e < rn, No = {};
function on(e, ...t) {
  let r = No[e];
  if (r === void 0) {
    const n = Ze(Uint8Array.from(e, (o) => o.charCodeAt(0)));
    r = re(n, n), No[e] = r;
  }
  return Ze(re(r, ...t));
}
const Yi = (e) => e.toRawBytes(!0).slice(1), Ai = (e) => Re(e, 32), si = (e) => $t(e, Mn), Tr = (e) => $t(e, rn), Xi = Je.ProjectivePoint, ol = (e, t, r) => Xi.BASE.multiplyAndAddUnsafe(e, t, r);
function Si(e) {
  let t = Je.utils.normPrivateKeyToScalar(e), r = Xi.fromPrivateKey(t);
  return { scalar: r.hasEvenY() ? t : Tr(-t), bytes: Yi(r) };
}
function Ps(e) {
  if (!Os(e))
    throw new Error("bad x: need 0 < x < p");
  const t = si(e * e), r = si(t * e + BigInt(7));
  let n = Us(r);
  n % nn !== Bn && (n = si(-n));
  const o = new Xi(e, n, Ns);
  return o.assertValidity(), o;
}
function Ls(...e) {
  return Tr(Qt(on("BIP0340/challenge", ...e)));
}
function sl(e) {
  return Si(e).bytes;
}
function al(e, t, r = Qr(32)) {
  const n = Gt("message", e), { bytes: o, scalar: i } = Si(t), s = Gt("auxRand", r, 32), a = Ai(i ^ Qt(on("BIP0340/aux", s))), l = on("BIP0340/nonce", a, o, n), p = Tr(Qt(l));
  if (p === Bn)
    throw new Error("sign failed: k is zero");
  const { bytes: y, scalar: b } = Si(p), S = Ls(y, o, n), I = new Uint8Array(64);
  if (I.set(y, 0), I.set(Ai(Tr(b + S * i)), 32), !Fs(I, n, o))
    throw new Error("sign: Invalid signature produced");
  return I;
}
function Fs(e, t, r) {
  const n = Gt("signature", e, 64), o = Gt("message", t), i = Gt("publicKey", r, 32);
  try {
    const s = Ps(Qt(i)), a = Qt(n.subarray(0, 32));
    if (!Os(a))
      return !1;
    const l = Qt(n.subarray(32, 64));
    if (!il(l))
      return !1;
    const p = Ls(Ai(a), Yi(s), o), y = ol(s, l, Tr(-p));
    return !(!y || !y.hasEvenY() || y.toAffine().x !== a);
  } catch {
    return !1;
  }
}
Je.utils.randomPrivateKey;
const ul = tl(Oe, [
  // xNum
  [
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
    "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
    "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
  ],
  // xDen
  [
    "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
    "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
    "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
    "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
    "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
  ],
  // yDen
  [
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
    "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
    "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((e) => e.map((t) => BigInt(t)))), fl = Zf(Oe, {
  A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
  B: BigInt("1771"),
  Z: Oe.create(BigInt("-11"))
});
el(Je.ProjectivePoint, (e) => {
  const { x: t, y: r } = fl(Oe.create(e[0]));
  return ul(t, r);
}, {
  DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
  encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
  p: Oe.ORDER,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: Ze
});
function Ds(e) {
  for (var t; !t; ) {
    var r = Ze(e), n = Ue(r), o = "02" + n;
    try {
      t = sn(o);
    } catch {
      e = Ze(e);
    }
  }
  return t;
}
function sn(e) {
  return Je.ProjectivePoint.fromHex(e);
}
function Ii(e, t) {
  var r = vs(e), n = new TextEncoder().encode(r), o = Ds(n);
  t || (t = Bf(Je.utils.randomPrivateKey()));
  var i = Je.ProjectivePoint.BASE.multiply(t), s = o.add(i);
  return { B_: s, r: t };
}
function qs(e, t, r) {
  var n = e.subtract(r.multiply(t));
  return n;
}
function ll(e, t, r, n) {
  return e.map(function(o, i) {
    var s = sn(o.C_), a = sn(n[o.amount]), l = qs(s, t[i], a), p = {
      id: o.id,
      amount: o.amount,
      secret: vs(r[i]),
      C: l.toHex(!0)
    };
    return p;
  });
}
const rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blindMessage: Ii,
  constructProofs: ll,
  hashToCurve: Ds,
  pointFromHex: sn,
  unblindSignature: qs
}, Symbol.toStringTag, { value: "Module" }));
var Uo = (
  /** @class */
  function() {
    function e(t, r) {
      this.amount = t, this.B_ = r;
    }
    return e.prototype.getSerializedBlindedMessage = function() {
      return { amount: this.amount, B_: this.B_.toHex(!0) };
    }, e;
  }()
), an = globalThis && globalThis.__assign || function() {
  return an = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, an.apply(this, arguments);
}, ce = globalThis && globalThis.__awaiter || function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function a(y) {
      try {
        p(n.next(y));
      } catch (b) {
        s(b);
      }
    }
    function l(y) {
      try {
        p(n.throw(y));
      } catch (b) {
        s(b);
      }
    }
    function p(y) {
      y.done ? i(y.value) : o(y.value).then(a, l);
    }
    p((n = n.apply(e, t || [])).next());
  });
}, he = globalThis && globalThis.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(p) {
    return function(y) {
      return l([p, y]);
    };
  }
  function l(p) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, p[0] && (r = 0)), r; )
      try {
        if (n = 1, o && (i = p[0] & 2 ? o.return : p[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, p[1])).done)
          return i;
        switch (o = 0, i && (p = [p[0] & 2, i.value]), p[0]) {
          case 0:
          case 1:
            i = p;
            break;
          case 4:
            return r.label++, { value: p[1], done: !1 };
          case 5:
            r.label++, o = p[1], p = [0];
            continue;
          case 7:
            p = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              r = 0;
              continue;
            }
            if (p[0] === 3 && (!i || p[1] > i[0] && p[1] < i[3])) {
              r.label = p[1];
              break;
            }
            if (p[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = p;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(p);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        p = t.call(e, r);
      } catch (y) {
        p = [6, y], o = 0;
      } finally {
        n = i = 0;
      }
    if (p[0] & 5)
      throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, be = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}, cl = (
  /** @class */
  function() {
    function e(t, r) {
      this._keysetId = "", this._keys = r || {}, this.mint = t, r && (this._keysetId = Lr(this._keys));
    }
    return Object.defineProperty(e.prototype, "keys", {
      get: function() {
        return this._keys;
      },
      set: function(t) {
        this._keys = t, this._keysetId = Lr(this._keys);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "keysetId", {
      get: function() {
        return this._keysetId;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.checkProofsSpent = function(t) {
      return ce(this, void 0, void 0, function() {
        var r, n;
        return he(this, function(o) {
          switch (o.label) {
            case 0:
              return r = {
                //send only the secret
                proofs: t.map(function(i) {
                  return { secret: i.secret };
                })
              }, [4, this.mint.check(r)];
            case 1:
              return n = o.sent().spendable, [2, t.filter(function(i, s) {
                return !n[s];
              })];
          }
        });
      });
    }, e.prototype.requestMint = function(t) {
      return this.mint.requestMint(t);
    }, e.prototype.payLnInvoice = function(t, r, n) {
      var o;
      return ce(this, void 0, void 0, function() {
        var i, s, a, l, p, y, b, S, I, T, E;
        return he(this, function(N) {
          switch (N.label) {
            case 0:
              return i = this.createPaymentPayload(t, r), n ? [3, 2] : [4, this.getFee(t)];
            case 1:
              n = N.sent(), N.label = 2;
            case 2:
              return s = this.createBlankOutputs(n), a = s.blindedMessages, l = s.secrets, p = s.rs, [4, this.mint.melt(an(an({}, i), { outputs: a }))];
            case 3:
              return y = N.sent(), E = {
                isPaid: (o = y.paid) !== null && o !== void 0 ? o : !1,
                preimage: y.preimage
              }, y != null && y.change ? (I = (S = rr).constructProofs, T = [y.change, p, l], [4, this.getKeys(y.change)]) : [3, 5];
            case 4:
              return b = I.apply(S, T.concat([N.sent()])), [3, 6];
            case 5:
              b = [], N.label = 6;
            case 6:
              return E.change = b, [4, this.changedKeys(y == null ? void 0 : y.change)];
            case 7:
              return [2, (E.newKeys = N.sent(), E)];
          }
        });
      });
    }, e.prototype.getFee = function(t) {
      return ce(this, void 0, void 0, function() {
        var r;
        return he(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.mint.checkFees({ pr: t })];
            case 1:
              return r = n.sent().fee, [2, r];
          }
        });
      });
    }, e.prototype.createPaymentPayload = function(t, r) {
      return {
        pr: t,
        proofs: r
      };
    }, e.prototype.payLnInvoiceWithToken = function(t, r) {
      var n = this, o = So(r), i = o.token.filter(function(s) {
        return s.mint === n.mint.mintUrl;
      }).flatMap(function(s) {
        return s.proofs;
      });
      return this.payLnInvoice(t, i);
    }, e.prototype.receive = function(t) {
      var r;
      return ce(this, void 0, void 0, function() {
        var n, o, i, s, a, l, p, y, b, S, I, T;
        return he(this, function(E) {
          switch (E.label) {
            case 0:
              n = If(So(t)).token, o = [], i = [], a = 0, l = n, E.label = 1;
            case 1:
              if (!(a < l.length))
                return [3, 6];
              if (p = l[a], !(!((r = p == null ? void 0 : p.proofs) === null || r === void 0) && r.length))
                return [3, 5];
              E.label = 2;
            case 2:
              return E.trys.push([2, 4, , 5]), [4, this.receiveTokenEntry(p)];
            case 3:
              return y = E.sent(), b = y.proofsWithError, S = y.proofs, I = y.newKeys, b != null && b.length ? (i.push(p), [3, 5]) : (o.push({ mint: p.mint, proofs: be([], S, !0) }), s || (s = I), [3, 5]);
            case 4:
              return T = E.sent(), console.error(T), i.push(p), [3, 5];
            case 5:
              return a++, [3, 1];
            case 6:
              return [2, {
                token: { token: o },
                tokensWithErrors: i.length ? { token: i } : void 0,
                newKeys: s
              }];
          }
        });
      });
    }, e.prototype.receiveTokenEntry = function(t) {
      return ce(this, void 0, void 0, function() {
        var r, n, o, i, s, a, l, p, y, b, S, I, T, E, N, C, U, O, P, L, q;
        return he(this, function(z) {
          switch (z.label) {
            case 0:
              r = [], n = [], z.label = 1;
            case 1:
              return z.trys.push([1, 8, , 9]), i = t.proofs.reduce(function(W, Y) {
                return W + Y.amount;
              }, 0), s = this.createSplitPayload(0, i, t.proofs), a = s.payload, l = s.amount1BlindedMessages, p = s.amount2BlindedMessages, [4, _i.split(t.mint, a)];
            case 2:
              return y = z.sent(), b = y.fst, S = y.snd, E = (T = rr).constructProofs, N = [
                b,
                l.rs,
                l.secrets
              ], [4, this.getKeys(b, t.mint)];
            case 3:
              return I = E.apply(T, N.concat([z.sent()])), O = (U = rr).constructProofs, P = [
                S,
                p.rs,
                p.secrets
              ], [4, this.getKeys(S, t.mint)];
            case 4:
              return C = O.apply(U, P.concat([z.sent()])), n.push.apply(n, be(be([], I, !1), C, !1)), t.mint !== this.mint.mintUrl ? [3, 6] : [4, this.changedKeys(be(be([], b || [], !0), S || [], !0))];
            case 5:
              return L = z.sent(), [3, 7];
            case 6:
              L = void 0, z.label = 7;
            case 7:
              return o = L, [3, 9];
            case 8:
              return q = z.sent(), console.error(q), r.push.apply(r, t.proofs), [3, 9];
            case 9:
              return [2, {
                proofs: n,
                proofsWithError: r.length ? r : void 0,
                newKeys: o
              }];
          }
        });
      });
    }, e.prototype.send = function(t, r) {
      return ce(this, void 0, void 0, function() {
        var n, o, i, s, a, l, p, y, b, S, I, T, E, N, C, U, O, P, L, q, z, W;
        return he(this, function(Y) {
          switch (Y.label) {
            case 0:
              if (n = 0, o = [], i = [], r.forEach(function(G) {
                if (n >= t) {
                  i.push(G);
                  return;
                }
                n = n + G.amount, o.push(G);
              }), t > n)
                throw new Error("Not enough funds available");
              return t < n ? (s = this.splitReceive(t, n), a = s.amount1, l = s.amount2, p = this.createSplitPayload(a, l, o), y = p.payload, b = p.amount1BlindedMessages, S = p.amount2BlindedMessages, [4, this.mint.split(y)]) : [3, 5];
            case 1:
              return I = Y.sent(), T = I.fst, E = I.snd, U = (C = rr).constructProofs, O = [
                T,
                b.rs,
                b.secrets
              ], [4, this.getKeys(T)];
            case 2:
              return N = U.apply(C, O.concat([Y.sent()])), q = (L = rr).constructProofs, z = [
                E,
                S.rs,
                S.secrets
              ], [4, this.getKeys(E)];
            case 3:
              return P = q.apply(L, z.concat([Y.sent()])), W = {
                returnChange: be(be([], N, !0), i, !0),
                send: P
              }, [4, this.changedKeys(be(be([], T || [], !0), E || [], !0))];
            case 4:
              return [2, (W.newKeys = Y.sent(), W)];
            case 5:
              return [2, { returnChange: i, send: o }];
          }
        });
      });
    }, e.prototype.requestTokens = function(t, r) {
      return ce(this, void 0, void 0, function() {
        var n, o, i, s, a, l, p, y, b, S;
        return he(this, function(I) {
          switch (I.label) {
            case 0:
              return n = this.createRandomBlindedMessages(t), o = n.blindedMessages, i = n.secrets, s = n.rs, a = { outputs: o }, [4, this.mint.mint(a, r)];
            case 1:
              return l = I.sent().promises, S = {}, y = (p = rr).constructProofs, b = [l, s, i], [4, this.getKeys(l)];
            case 2:
              return S.proofs = y.apply(p, b.concat([I.sent()])), [4, this.changedKeys(l)];
            case 3:
              return [2, (S.newKeys = I.sent(), S)];
          }
        });
      });
    }, e.prototype.initKeys = function() {
      return ce(this, void 0, void 0, function() {
        var t;
        return he(this, function(r) {
          switch (r.label) {
            case 0:
              return !this.keysetId || !Object.keys(this.keys).length ? (t = this, [4, this.mint.getKeys()]) : [3, 2];
            case 1:
              t.keys = r.sent(), this._keysetId = Lr(this.keys), r.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.changedKeys = function(t) {
      return t === void 0 && (t = []), ce(this, void 0, void 0, function() {
        var r, n, o = this;
        return he(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.initKeys()];
            case 1:
              return i.sent(), t != null && t.length ? t.some(function(s) {
                return s.id !== o.keysetId;
              }) ? [4, this.mint.getKeys()] : [2, void 0] : [2, void 0];
            case 2:
              return r = i.sent(), n = Lr(r), [2, n === this.keysetId ? void 0 : r];
          }
        });
      });
    }, e.prototype.getKeys = function(t, r) {
      var n;
      return ce(this, void 0, void 0, function() {
        var o, i, s;
        return he(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.initKeys()];
            case 1:
              return a.sent(), !(t != null && t.length) || !(!((n = t[0]) === null || n === void 0) && n.id) ? [2, this.keys] : (o = t[0].id, this.keysetId === o ? [2, this.keys] : !r || r === this.mint.mintUrl ? [4, this.mint.getKeys(t[0].id)] : [3, 3]);
            case 2:
              return s = a.sent(), [3, 5];
            case 3:
              return [4, _i.getKeys(r, t[0].id)];
            case 4:
              s = a.sent(), a.label = 5;
            case 5:
              return i = s, [2, i];
          }
        });
      });
    }, e.prototype.createSplitPayload = function(t, r, n) {
      var o = this.createRandomBlindedMessages(t), i = this.createRandomBlindedMessages(r), s = [];
      s.push.apply(s, o.blindedMessages), s.push.apply(s, i.blindedMessages);
      var a = {
        proofs: n,
        amount: r,
        outputs: s
      };
      return { payload: a, amount1BlindedMessages: o, amount2BlindedMessages: i };
    }, e.prototype.splitReceive = function(t, r) {
      var n = r - t, o = t;
      return { amount1: n, amount2: o };
    }, e.prototype.createRandomBlindedMessages = function(t) {
      for (var r = [], n = [], o = [], i = Mf(t), s = 0; s < i.length; s++) {
        var a = Qr(32);
        n.push(a);
        var l = Ii(a), p = l.B_, y = l.r;
        o.push(y);
        var b = new Uo(i[s], p);
        r.push(b.getSerializedBlindedMessage());
      }
      return { blindedMessages: r, secrets: n, rs: o, amounts: i };
    }, e.prototype.createBlankOutputs = function(t) {
      for (var r = [], n = [], o = [], i = Math.ceil(Math.log2(t)) || 1, s = 0; s < i; s++) {
        var a = Qr(32);
        n.push(a);
        var l = Ii(a), p = l.B_, y = l.r;
        o.push(y);
        var b = new Uo(0, p);
        r.push(b.getSerializedBlindedMessage());
      }
      return { blindedMessages: r, secrets: n, rs: o };
    }, e;
  }()
), un = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", Ti = {};
for (var Fr = 0; Fr < un.length; Fr++) {
  var ai = un.charAt(Fr);
  if (Ti[ai] !== void 0)
    throw new TypeError(ai + " is ambiguous");
  Ti[ai] = Fr;
}
function or(e) {
  var t = e >> 25;
  return (e & 33554431) << 5 ^ -(t >> 0 & 1) & 996825010 ^ -(t >> 1 & 1) & 642813549 ^ -(t >> 2 & 1) & 513874426 ^ -(t >> 3 & 1) & 1027748829 ^ -(t >> 4 & 1) & 705979059;
}
function Hs(e) {
  for (var t = 1, r = 0; r < e.length; ++r) {
    var n = e.charCodeAt(r);
    if (n < 33 || n > 126)
      return "Invalid prefix (" + e + ")";
    t = or(t) ^ n >> 5;
  }
  for (t = or(t), r = 0; r < e.length; ++r) {
    var o = e.charCodeAt(r);
    t = or(t) ^ o & 31;
  }
  return t;
}
function hl(e, t, r) {
  if (r = r || 90, e.length + 7 + t.length > r)
    throw new TypeError("Exceeds length limit");
  e = e.toLowerCase();
  var n = Hs(e);
  if (typeof n == "string")
    throw new Error(n);
  for (var o = e + "1", i = 0; i < t.length; ++i) {
    var s = t[i];
    if (s >> 5)
      throw new Error("Non 5-bit word");
    n = or(n) ^ s, o += un.charAt(s);
  }
  for (i = 0; i < 6; ++i)
    n = or(n);
  for (n ^= 1, i = 0; i < 6; ++i) {
    var a = n >> (5 - i) * 5 & 31;
    o += un.charAt(a);
  }
  return o;
}
function Ks(e, t) {
  if (t = t || 90, e.length < 8)
    return e + " too short";
  if (e.length > t)
    return "Exceeds length limit";
  var r = e.toLowerCase(), n = e.toUpperCase();
  if (e !== r && e !== n)
    return "Mixed-case string " + e;
  e = r;
  var o = e.lastIndexOf("1");
  if (o === -1)
    return "No separator character for " + e;
  if (o === 0)
    return "Missing prefix for " + e;
  var i = e.slice(0, o), s = e.slice(o + 1);
  if (s.length < 6)
    return "Data too short";
  var a = Hs(i);
  if (typeof a == "string")
    return a;
  for (var l = [], p = 0; p < s.length; ++p) {
    var y = s.charAt(p), b = Ti[y];
    if (b === void 0)
      return "Unknown character " + y;
    a = or(a) ^ b, !(p + 6 >= s.length) && l.push(b);
  }
  return a !== 1 ? "Invalid checksum for " + e : { prefix: i, words: l };
}
function dl() {
  var e = Ks.apply(null, arguments);
  if (typeof e == "object")
    return e;
}
function pl(e) {
  var t = Ks.apply(null, arguments);
  if (typeof t == "object")
    return t;
  throw new Error(t);
}
function An(e, t, r, n) {
  for (var o = 0, i = 0, s = (1 << r) - 1, a = [], l = 0; l < e.length; ++l)
    for (o = o << t | e[l], i += t; i >= r; )
      i -= r, a.push(o >> i & s);
  if (n)
    i > 0 && a.push(o << r - i & s);
  else {
    if (i >= t)
      return "Excess padding";
    if (o << r - i & s)
      return "Non-zero padding";
  }
  return a;
}
function ml(e) {
  var t = An(e, 8, 5, !0);
  if (Array.isArray(t))
    return t;
}
function gl(e) {
  var t = An(e, 8, 5, !0);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
function yl(e) {
  var t = An(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
}
function wl(e) {
  var t = An(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
var zs = {
  decodeUnsafe: dl,
  decode: pl,
  encode: hl,
  toWordsUnsafe: ml,
  toWords: gl,
  fromWordsUnsafe: yl,
  fromWords: wl
}, Qi = { exports: {} };
const vl = {}, bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vl
}, Symbol.toStringTag, { value: "Module" })), xl = /* @__PURE__ */ qu(bl);
Qi.exports;
(function(e) {
  (function(t, r) {
    function n(B, u) {
      if (!B)
        throw new Error(u || "Assertion failed");
    }
    function o(B, u) {
      B.super_ = u;
      var d = function() {
      };
      d.prototype = u.prototype, B.prototype = new d(), B.prototype.constructor = B;
    }
    function i(B, u, d) {
      if (i.isBN(B))
        return B;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, B !== null && ((u === "le" || u === "be") && (d = u, u = 10), this._init(B || 0, u || 10, d || "be"));
    }
    typeof t == "object" ? t.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var s;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = xl.Buffer;
    } catch {
    }
    i.isBN = function(u) {
      return u instanceof i ? !0 : u !== null && typeof u == "object" && u.constructor.wordSize === i.wordSize && Array.isArray(u.words);
    }, i.max = function(u, d) {
      return u.cmp(d) > 0 ? u : d;
    }, i.min = function(u, d) {
      return u.cmp(d) < 0 ? u : d;
    }, i.prototype._init = function(u, d, w) {
      if (typeof u == "number")
        return this._initNumber(u, d, w);
      if (typeof u == "object")
        return this._initArray(u, d, w);
      d === "hex" && (d = 16), n(d === (d | 0) && d >= 2 && d <= 36), u = u.toString().replace(/\s+/g, "");
      var m = 0;
      u[0] === "-" && (m++, this.negative = 1), m < u.length && (d === 16 ? this._parseHex(u, m, w) : (this._parseBase(u, d, m), w === "le" && this._initArray(this.toArray(), d, w)));
    }, i.prototype._initNumber = function(u, d, w) {
      u < 0 && (this.negative = 1, u = -u), u < 67108864 ? (this.words = [u & 67108863], this.length = 1) : u < 4503599627370496 ? (this.words = [
        u & 67108863,
        u / 67108864 & 67108863
      ], this.length = 2) : (n(u < 9007199254740992), this.words = [
        u & 67108863,
        u / 67108864 & 67108863,
        1
      ], this.length = 3), w === "le" && this._initArray(this.toArray(), d, w);
    }, i.prototype._initArray = function(u, d, w) {
      if (n(typeof u.length == "number"), u.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(u.length / 3), this.words = new Array(this.length);
      for (var m = 0; m < this.length; m++)
        this.words[m] = 0;
      var v, A, R = 0;
      if (w === "be")
        for (m = u.length - 1, v = 0; m >= 0; m -= 3)
          A = u[m] | u[m - 1] << 8 | u[m - 2] << 16, this.words[v] |= A << R & 67108863, this.words[v + 1] = A >>> 26 - R & 67108863, R += 24, R >= 26 && (R -= 26, v++);
      else if (w === "le")
        for (m = 0, v = 0; m < u.length; m += 3)
          A = u[m] | u[m + 1] << 8 | u[m + 2] << 16, this.words[v] |= A << R & 67108863, this.words[v + 1] = A >>> 26 - R & 67108863, R += 24, R >= 26 && (R -= 26, v++);
      return this.strip();
    };
    function a(B, u) {
      var d = B.charCodeAt(u);
      return d >= 65 && d <= 70 ? d - 55 : d >= 97 && d <= 102 ? d - 87 : d - 48 & 15;
    }
    function l(B, u, d) {
      var w = a(B, d);
      return d - 1 >= u && (w |= a(B, d - 1) << 4), w;
    }
    i.prototype._parseHex = function(u, d, w) {
      this.length = Math.ceil((u.length - d) / 6), this.words = new Array(this.length);
      for (var m = 0; m < this.length; m++)
        this.words[m] = 0;
      var v = 0, A = 0, R;
      if (w === "be")
        for (m = u.length - 1; m >= d; m -= 2)
          R = l(u, d, m) << v, this.words[A] |= R & 67108863, v >= 18 ? (v -= 18, A += 1, this.words[A] |= R >>> 26) : v += 8;
      else {
        var x = u.length - d;
        for (m = x % 2 === 0 ? d + 1 : d; m < u.length; m += 2)
          R = l(u, d, m) << v, this.words[A] |= R & 67108863, v >= 18 ? (v -= 18, A += 1, this.words[A] |= R >>> 26) : v += 8;
      }
      this.strip();
    };
    function p(B, u, d, w) {
      for (var m = 0, v = Math.min(B.length, d), A = u; A < v; A++) {
        var R = B.charCodeAt(A) - 48;
        m *= w, R >= 49 ? m += R - 49 + 10 : R >= 17 ? m += R - 17 + 10 : m += R;
      }
      return m;
    }
    i.prototype._parseBase = function(u, d, w) {
      this.words = [0], this.length = 1;
      for (var m = 0, v = 1; v <= 67108863; v *= d)
        m++;
      m--, v = v / d | 0;
      for (var A = u.length - w, R = A % m, x = Math.min(A, A - R) + w, c = 0, M = w; M < x; M += m)
        c = p(u, M, M + m, d), this.imuln(v), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      if (R !== 0) {
        var V = 1;
        for (c = p(u, M, u.length, d), M = 0; M < R; M++)
          V *= d;
        this.imuln(V), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      }
      this.strip();
    }, i.prototype.copy = function(u) {
      u.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        u.words[d] = this.words[d];
      u.length = this.length, u.negative = this.negative, u.red = this.red;
    }, i.prototype.clone = function() {
      var u = new i(null);
      return this.copy(u), u;
    }, i.prototype._expand = function(u) {
      for (; this.length < u; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, i.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var y = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], b = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], S = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(u, d) {
      u = u || 10, d = d | 0 || 1;
      var w;
      if (u === 16 || u === "hex") {
        w = "";
        for (var m = 0, v = 0, A = 0; A < this.length; A++) {
          var R = this.words[A], x = ((R << m | v) & 16777215).toString(16);
          v = R >>> 24 - m & 16777215, v !== 0 || A !== this.length - 1 ? w = y[6 - x.length] + x + w : w = x + w, m += 2, m >= 26 && (m -= 26, A--);
        }
        for (v !== 0 && (w = v.toString(16) + w); w.length % d !== 0; )
          w = "0" + w;
        return this.negative !== 0 && (w = "-" + w), w;
      }
      if (u === (u | 0) && u >= 2 && u <= 36) {
        var c = b[u], M = S[u];
        w = "";
        var V = this.clone();
        for (V.negative = 0; !V.isZero(); ) {
          var Z = V.modn(M).toString(u);
          V = V.idivn(M), V.isZero() ? w = Z + w : w = y[c - Z.length] + Z + w;
        }
        for (this.isZero() && (w = "0" + w); w.length % d !== 0; )
          w = "0" + w;
        return this.negative !== 0 && (w = "-" + w), w;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var u = this.words[0];
      return this.length === 2 ? u += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? u += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -u : u;
    }, i.prototype.toJSON = function() {
      return this.toString(16);
    }, i.prototype.toBuffer = function(u, d) {
      return n(typeof s < "u"), this.toArrayLike(s, u, d);
    }, i.prototype.toArray = function(u, d) {
      return this.toArrayLike(Array, u, d);
    }, i.prototype.toArrayLike = function(u, d, w) {
      var m = this.byteLength(), v = w || Math.max(1, m);
      n(m <= v, "byte array longer than desired length"), n(v > 0, "Requested array length <= 0"), this.strip();
      var A = d === "le", R = new u(v), x, c, M = this.clone();
      if (A) {
        for (c = 0; !M.isZero(); c++)
          x = M.andln(255), M.iushrn(8), R[c] = x;
        for (; c < v; c++)
          R[c] = 0;
      } else {
        for (c = 0; c < v - m; c++)
          R[c] = 0;
        for (c = 0; !M.isZero(); c++)
          x = M.andln(255), M.iushrn(8), R[v - c - 1] = x;
      }
      return R;
    }, Math.clz32 ? i.prototype._countBits = function(u) {
      return 32 - Math.clz32(u);
    } : i.prototype._countBits = function(u) {
      var d = u, w = 0;
      return d >= 4096 && (w += 13, d >>>= 13), d >= 64 && (w += 7, d >>>= 7), d >= 8 && (w += 4, d >>>= 4), d >= 2 && (w += 2, d >>>= 2), w + d;
    }, i.prototype._zeroBits = function(u) {
      if (u === 0)
        return 26;
      var d = u, w = 0;
      return d & 8191 || (w += 13, d >>>= 13), d & 127 || (w += 7, d >>>= 7), d & 15 || (w += 4, d >>>= 4), d & 3 || (w += 2, d >>>= 2), d & 1 || w++, w;
    }, i.prototype.bitLength = function() {
      var u = this.words[this.length - 1], d = this._countBits(u);
      return (this.length - 1) * 26 + d;
    };
    function I(B) {
      for (var u = new Array(B.bitLength()), d = 0; d < u.length; d++) {
        var w = d / 26 | 0, m = d % 26;
        u[d] = (B.words[w] & 1 << m) >>> m;
      }
      return u;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var u = 0, d = 0; d < this.length; d++) {
        var w = this._zeroBits(this.words[d]);
        if (u += w, w !== 26)
          break;
      }
      return u;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(u) {
      return this.negative !== 0 ? this.abs().inotn(u).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(u) {
      return this.testn(u - 1) ? this.notn(u).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(u) {
      for (; this.length < u.length; )
        this.words[this.length++] = 0;
      for (var d = 0; d < u.length; d++)
        this.words[d] = this.words[d] | u.words[d];
      return this.strip();
    }, i.prototype.ior = function(u) {
      return n((this.negative | u.negative) === 0), this.iuor(u);
    }, i.prototype.or = function(u) {
      return this.length > u.length ? this.clone().ior(u) : u.clone().ior(this);
    }, i.prototype.uor = function(u) {
      return this.length > u.length ? this.clone().iuor(u) : u.clone().iuor(this);
    }, i.prototype.iuand = function(u) {
      var d;
      this.length > u.length ? d = u : d = this;
      for (var w = 0; w < d.length; w++)
        this.words[w] = this.words[w] & u.words[w];
      return this.length = d.length, this.strip();
    }, i.prototype.iand = function(u) {
      return n((this.negative | u.negative) === 0), this.iuand(u);
    }, i.prototype.and = function(u) {
      return this.length > u.length ? this.clone().iand(u) : u.clone().iand(this);
    }, i.prototype.uand = function(u) {
      return this.length > u.length ? this.clone().iuand(u) : u.clone().iuand(this);
    }, i.prototype.iuxor = function(u) {
      var d, w;
      this.length > u.length ? (d = this, w = u) : (d = u, w = this);
      for (var m = 0; m < w.length; m++)
        this.words[m] = d.words[m] ^ w.words[m];
      if (this !== d)
        for (; m < d.length; m++)
          this.words[m] = d.words[m];
      return this.length = d.length, this.strip();
    }, i.prototype.ixor = function(u) {
      return n((this.negative | u.negative) === 0), this.iuxor(u);
    }, i.prototype.xor = function(u) {
      return this.length > u.length ? this.clone().ixor(u) : u.clone().ixor(this);
    }, i.prototype.uxor = function(u) {
      return this.length > u.length ? this.clone().iuxor(u) : u.clone().iuxor(this);
    }, i.prototype.inotn = function(u) {
      n(typeof u == "number" && u >= 0);
      var d = Math.ceil(u / 26) | 0, w = u % 26;
      this._expand(d), w > 0 && d--;
      for (var m = 0; m < d; m++)
        this.words[m] = ~this.words[m] & 67108863;
      return w > 0 && (this.words[m] = ~this.words[m] & 67108863 >> 26 - w), this.strip();
    }, i.prototype.notn = function(u) {
      return this.clone().inotn(u);
    }, i.prototype.setn = function(u, d) {
      n(typeof u == "number" && u >= 0);
      var w = u / 26 | 0, m = u % 26;
      return this._expand(w + 1), d ? this.words[w] = this.words[w] | 1 << m : this.words[w] = this.words[w] & ~(1 << m), this.strip();
    }, i.prototype.iadd = function(u) {
      var d;
      if (this.negative !== 0 && u.negative === 0)
        return this.negative = 0, d = this.isub(u), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && u.negative !== 0)
        return u.negative = 0, d = this.isub(u), u.negative = 1, d._normSign();
      var w, m;
      this.length > u.length ? (w = this, m = u) : (w = u, m = this);
      for (var v = 0, A = 0; A < m.length; A++)
        d = (w.words[A] | 0) + (m.words[A] | 0) + v, this.words[A] = d & 67108863, v = d >>> 26;
      for (; v !== 0 && A < w.length; A++)
        d = (w.words[A] | 0) + v, this.words[A] = d & 67108863, v = d >>> 26;
      if (this.length = w.length, v !== 0)
        this.words[this.length] = v, this.length++;
      else if (w !== this)
        for (; A < w.length; A++)
          this.words[A] = w.words[A];
      return this;
    }, i.prototype.add = function(u) {
      var d;
      return u.negative !== 0 && this.negative === 0 ? (u.negative = 0, d = this.sub(u), u.negative ^= 1, d) : u.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = u.sub(this), this.negative = 1, d) : this.length > u.length ? this.clone().iadd(u) : u.clone().iadd(this);
    }, i.prototype.isub = function(u) {
      if (u.negative !== 0) {
        u.negative = 0;
        var d = this.iadd(u);
        return u.negative = 1, d._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(u), this.negative = 1, this._normSign();
      var w = this.cmp(u);
      if (w === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var m, v;
      w > 0 ? (m = this, v = u) : (m = u, v = this);
      for (var A = 0, R = 0; R < v.length; R++)
        d = (m.words[R] | 0) - (v.words[R] | 0) + A, A = d >> 26, this.words[R] = d & 67108863;
      for (; A !== 0 && R < m.length; R++)
        d = (m.words[R] | 0) + A, A = d >> 26, this.words[R] = d & 67108863;
      if (A === 0 && R < m.length && m !== this)
        for (; R < m.length; R++)
          this.words[R] = m.words[R];
      return this.length = Math.max(this.length, R), m !== this && (this.negative = 1), this.strip();
    }, i.prototype.sub = function(u) {
      return this.clone().isub(u);
    };
    function T(B, u, d) {
      d.negative = u.negative ^ B.negative;
      var w = B.length + u.length | 0;
      d.length = w, w = w - 1 | 0;
      var m = B.words[0] | 0, v = u.words[0] | 0, A = m * v, R = A & 67108863, x = A / 67108864 | 0;
      d.words[0] = R;
      for (var c = 1; c < w; c++) {
        for (var M = x >>> 26, V = x & 67108863, Z = Math.min(c, u.length - 1), J = Math.max(0, c - B.length + 1); J <= Z; J++) {
          var Q = c - J | 0;
          m = B.words[Q] | 0, v = u.words[J] | 0, A = m * v + V, M += A / 67108864 | 0, V = A & 67108863;
        }
        d.words[c] = V | 0, x = M | 0;
      }
      return x !== 0 ? d.words[c] = x | 0 : d.length--, d.strip();
    }
    var E = function(u, d, w) {
      var m = u.words, v = d.words, A = w.words, R = 0, x, c, M, V = m[0] | 0, Z = V & 8191, J = V >>> 13, Q = m[1] | 0, it = Q & 8191, st = Q >>> 13, zt = m[2] | 0, at = zt & 8191, ut = zt >>> 13, He = m[3] | 0, dt = He & 8191, ot = He >>> 13, Xt = m[4] | 0, yt = Xt & 8191, wt = Xt >>> 13, Ye = m[5] | 0, Et = Ye & 8191, _t = Ye >>> 13, wr = m[6] | 0, vt = wr & 8191, ht = wr >>> 13, Xe = m[7] | 0, Mt = Xe & 8191, mt = Xe >>> 13, Or = m[8] | 0, g = Or & 8191, f = Or >>> 13, h = m[9] | 0, _ = h & 8191, k = h >>> 13, F = v[0] | 0, H = F & 8191, X = F >>> 13, bt = v[1] | 0, tt = bt & 8191, nt = bt >>> 13, pt = v[2] | 0, At = pt & 8191, St = pt >>> 13, so = v[3] | 0, It = so & 8191, Tt = so >>> 13, ao = v[4] | 0, Ct = ao & 8191, kt = ao >>> 13, uo = v[5] | 0, Rt = uo & 8191, Nt = uo >>> 13, fo = v[6] | 0, Ut = fo & 8191, Ot = fo >>> 13, lo = v[7] | 0, Pt = lo & 8191, Lt = lo >>> 13, co = v[8] | 0, Ft = co & 8191, Dt = co >>> 13, ho = v[9] | 0, qt = ho & 8191, Ht = ho >>> 13;
      w.negative = u.negative ^ d.negative, w.length = 19, x = Math.imul(Z, H), c = Math.imul(Z, X), c = c + Math.imul(J, H) | 0, M = Math.imul(J, X);
      var kn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (kn >>> 26) | 0, kn &= 67108863, x = Math.imul(it, H), c = Math.imul(it, X), c = c + Math.imul(st, H) | 0, M = Math.imul(st, X), x = x + Math.imul(Z, tt) | 0, c = c + Math.imul(Z, nt) | 0, c = c + Math.imul(J, tt) | 0, M = M + Math.imul(J, nt) | 0;
      var Rn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Rn >>> 26) | 0, Rn &= 67108863, x = Math.imul(at, H), c = Math.imul(at, X), c = c + Math.imul(ut, H) | 0, M = Math.imul(ut, X), x = x + Math.imul(it, tt) | 0, c = c + Math.imul(it, nt) | 0, c = c + Math.imul(st, tt) | 0, M = M + Math.imul(st, nt) | 0, x = x + Math.imul(Z, At) | 0, c = c + Math.imul(Z, St) | 0, c = c + Math.imul(J, At) | 0, M = M + Math.imul(J, St) | 0;
      var Nn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Nn >>> 26) | 0, Nn &= 67108863, x = Math.imul(dt, H), c = Math.imul(dt, X), c = c + Math.imul(ot, H) | 0, M = Math.imul(ot, X), x = x + Math.imul(at, tt) | 0, c = c + Math.imul(at, nt) | 0, c = c + Math.imul(ut, tt) | 0, M = M + Math.imul(ut, nt) | 0, x = x + Math.imul(it, At) | 0, c = c + Math.imul(it, St) | 0, c = c + Math.imul(st, At) | 0, M = M + Math.imul(st, St) | 0, x = x + Math.imul(Z, It) | 0, c = c + Math.imul(Z, Tt) | 0, c = c + Math.imul(J, It) | 0, M = M + Math.imul(J, Tt) | 0;
      var Un = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Un >>> 26) | 0, Un &= 67108863, x = Math.imul(yt, H), c = Math.imul(yt, X), c = c + Math.imul(wt, H) | 0, M = Math.imul(wt, X), x = x + Math.imul(dt, tt) | 0, c = c + Math.imul(dt, nt) | 0, c = c + Math.imul(ot, tt) | 0, M = M + Math.imul(ot, nt) | 0, x = x + Math.imul(at, At) | 0, c = c + Math.imul(at, St) | 0, c = c + Math.imul(ut, At) | 0, M = M + Math.imul(ut, St) | 0, x = x + Math.imul(it, It) | 0, c = c + Math.imul(it, Tt) | 0, c = c + Math.imul(st, It) | 0, M = M + Math.imul(st, Tt) | 0, x = x + Math.imul(Z, Ct) | 0, c = c + Math.imul(Z, kt) | 0, c = c + Math.imul(J, Ct) | 0, M = M + Math.imul(J, kt) | 0;
      var On = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (On >>> 26) | 0, On &= 67108863, x = Math.imul(Et, H), c = Math.imul(Et, X), c = c + Math.imul(_t, H) | 0, M = Math.imul(_t, X), x = x + Math.imul(yt, tt) | 0, c = c + Math.imul(yt, nt) | 0, c = c + Math.imul(wt, tt) | 0, M = M + Math.imul(wt, nt) | 0, x = x + Math.imul(dt, At) | 0, c = c + Math.imul(dt, St) | 0, c = c + Math.imul(ot, At) | 0, M = M + Math.imul(ot, St) | 0, x = x + Math.imul(at, It) | 0, c = c + Math.imul(at, Tt) | 0, c = c + Math.imul(ut, It) | 0, M = M + Math.imul(ut, Tt) | 0, x = x + Math.imul(it, Ct) | 0, c = c + Math.imul(it, kt) | 0, c = c + Math.imul(st, Ct) | 0, M = M + Math.imul(st, kt) | 0, x = x + Math.imul(Z, Rt) | 0, c = c + Math.imul(Z, Nt) | 0, c = c + Math.imul(J, Rt) | 0, M = M + Math.imul(J, Nt) | 0;
      var Pn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Pn >>> 26) | 0, Pn &= 67108863, x = Math.imul(vt, H), c = Math.imul(vt, X), c = c + Math.imul(ht, H) | 0, M = Math.imul(ht, X), x = x + Math.imul(Et, tt) | 0, c = c + Math.imul(Et, nt) | 0, c = c + Math.imul(_t, tt) | 0, M = M + Math.imul(_t, nt) | 0, x = x + Math.imul(yt, At) | 0, c = c + Math.imul(yt, St) | 0, c = c + Math.imul(wt, At) | 0, M = M + Math.imul(wt, St) | 0, x = x + Math.imul(dt, It) | 0, c = c + Math.imul(dt, Tt) | 0, c = c + Math.imul(ot, It) | 0, M = M + Math.imul(ot, Tt) | 0, x = x + Math.imul(at, Ct) | 0, c = c + Math.imul(at, kt) | 0, c = c + Math.imul(ut, Ct) | 0, M = M + Math.imul(ut, kt) | 0, x = x + Math.imul(it, Rt) | 0, c = c + Math.imul(it, Nt) | 0, c = c + Math.imul(st, Rt) | 0, M = M + Math.imul(st, Nt) | 0, x = x + Math.imul(Z, Ut) | 0, c = c + Math.imul(Z, Ot) | 0, c = c + Math.imul(J, Ut) | 0, M = M + Math.imul(J, Ot) | 0;
      var Ln = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Ln >>> 26) | 0, Ln &= 67108863, x = Math.imul(Mt, H), c = Math.imul(Mt, X), c = c + Math.imul(mt, H) | 0, M = Math.imul(mt, X), x = x + Math.imul(vt, tt) | 0, c = c + Math.imul(vt, nt) | 0, c = c + Math.imul(ht, tt) | 0, M = M + Math.imul(ht, nt) | 0, x = x + Math.imul(Et, At) | 0, c = c + Math.imul(Et, St) | 0, c = c + Math.imul(_t, At) | 0, M = M + Math.imul(_t, St) | 0, x = x + Math.imul(yt, It) | 0, c = c + Math.imul(yt, Tt) | 0, c = c + Math.imul(wt, It) | 0, M = M + Math.imul(wt, Tt) | 0, x = x + Math.imul(dt, Ct) | 0, c = c + Math.imul(dt, kt) | 0, c = c + Math.imul(ot, Ct) | 0, M = M + Math.imul(ot, kt) | 0, x = x + Math.imul(at, Rt) | 0, c = c + Math.imul(at, Nt) | 0, c = c + Math.imul(ut, Rt) | 0, M = M + Math.imul(ut, Nt) | 0, x = x + Math.imul(it, Ut) | 0, c = c + Math.imul(it, Ot) | 0, c = c + Math.imul(st, Ut) | 0, M = M + Math.imul(st, Ot) | 0, x = x + Math.imul(Z, Pt) | 0, c = c + Math.imul(Z, Lt) | 0, c = c + Math.imul(J, Pt) | 0, M = M + Math.imul(J, Lt) | 0;
      var Fn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Fn >>> 26) | 0, Fn &= 67108863, x = Math.imul(g, H), c = Math.imul(g, X), c = c + Math.imul(f, H) | 0, M = Math.imul(f, X), x = x + Math.imul(Mt, tt) | 0, c = c + Math.imul(Mt, nt) | 0, c = c + Math.imul(mt, tt) | 0, M = M + Math.imul(mt, nt) | 0, x = x + Math.imul(vt, At) | 0, c = c + Math.imul(vt, St) | 0, c = c + Math.imul(ht, At) | 0, M = M + Math.imul(ht, St) | 0, x = x + Math.imul(Et, It) | 0, c = c + Math.imul(Et, Tt) | 0, c = c + Math.imul(_t, It) | 0, M = M + Math.imul(_t, Tt) | 0, x = x + Math.imul(yt, Ct) | 0, c = c + Math.imul(yt, kt) | 0, c = c + Math.imul(wt, Ct) | 0, M = M + Math.imul(wt, kt) | 0, x = x + Math.imul(dt, Rt) | 0, c = c + Math.imul(dt, Nt) | 0, c = c + Math.imul(ot, Rt) | 0, M = M + Math.imul(ot, Nt) | 0, x = x + Math.imul(at, Ut) | 0, c = c + Math.imul(at, Ot) | 0, c = c + Math.imul(ut, Ut) | 0, M = M + Math.imul(ut, Ot) | 0, x = x + Math.imul(it, Pt) | 0, c = c + Math.imul(it, Lt) | 0, c = c + Math.imul(st, Pt) | 0, M = M + Math.imul(st, Lt) | 0, x = x + Math.imul(Z, Ft) | 0, c = c + Math.imul(Z, Dt) | 0, c = c + Math.imul(J, Ft) | 0, M = M + Math.imul(J, Dt) | 0;
      var Dn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Dn >>> 26) | 0, Dn &= 67108863, x = Math.imul(_, H), c = Math.imul(_, X), c = c + Math.imul(k, H) | 0, M = Math.imul(k, X), x = x + Math.imul(g, tt) | 0, c = c + Math.imul(g, nt) | 0, c = c + Math.imul(f, tt) | 0, M = M + Math.imul(f, nt) | 0, x = x + Math.imul(Mt, At) | 0, c = c + Math.imul(Mt, St) | 0, c = c + Math.imul(mt, At) | 0, M = M + Math.imul(mt, St) | 0, x = x + Math.imul(vt, It) | 0, c = c + Math.imul(vt, Tt) | 0, c = c + Math.imul(ht, It) | 0, M = M + Math.imul(ht, Tt) | 0, x = x + Math.imul(Et, Ct) | 0, c = c + Math.imul(Et, kt) | 0, c = c + Math.imul(_t, Ct) | 0, M = M + Math.imul(_t, kt) | 0, x = x + Math.imul(yt, Rt) | 0, c = c + Math.imul(yt, Nt) | 0, c = c + Math.imul(wt, Rt) | 0, M = M + Math.imul(wt, Nt) | 0, x = x + Math.imul(dt, Ut) | 0, c = c + Math.imul(dt, Ot) | 0, c = c + Math.imul(ot, Ut) | 0, M = M + Math.imul(ot, Ot) | 0, x = x + Math.imul(at, Pt) | 0, c = c + Math.imul(at, Lt) | 0, c = c + Math.imul(ut, Pt) | 0, M = M + Math.imul(ut, Lt) | 0, x = x + Math.imul(it, Ft) | 0, c = c + Math.imul(it, Dt) | 0, c = c + Math.imul(st, Ft) | 0, M = M + Math.imul(st, Dt) | 0, x = x + Math.imul(Z, qt) | 0, c = c + Math.imul(Z, Ht) | 0, c = c + Math.imul(J, qt) | 0, M = M + Math.imul(J, Ht) | 0;
      var qn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (qn >>> 26) | 0, qn &= 67108863, x = Math.imul(_, tt), c = Math.imul(_, nt), c = c + Math.imul(k, tt) | 0, M = Math.imul(k, nt), x = x + Math.imul(g, At) | 0, c = c + Math.imul(g, St) | 0, c = c + Math.imul(f, At) | 0, M = M + Math.imul(f, St) | 0, x = x + Math.imul(Mt, It) | 0, c = c + Math.imul(Mt, Tt) | 0, c = c + Math.imul(mt, It) | 0, M = M + Math.imul(mt, Tt) | 0, x = x + Math.imul(vt, Ct) | 0, c = c + Math.imul(vt, kt) | 0, c = c + Math.imul(ht, Ct) | 0, M = M + Math.imul(ht, kt) | 0, x = x + Math.imul(Et, Rt) | 0, c = c + Math.imul(Et, Nt) | 0, c = c + Math.imul(_t, Rt) | 0, M = M + Math.imul(_t, Nt) | 0, x = x + Math.imul(yt, Ut) | 0, c = c + Math.imul(yt, Ot) | 0, c = c + Math.imul(wt, Ut) | 0, M = M + Math.imul(wt, Ot) | 0, x = x + Math.imul(dt, Pt) | 0, c = c + Math.imul(dt, Lt) | 0, c = c + Math.imul(ot, Pt) | 0, M = M + Math.imul(ot, Lt) | 0, x = x + Math.imul(at, Ft) | 0, c = c + Math.imul(at, Dt) | 0, c = c + Math.imul(ut, Ft) | 0, M = M + Math.imul(ut, Dt) | 0, x = x + Math.imul(it, qt) | 0, c = c + Math.imul(it, Ht) | 0, c = c + Math.imul(st, qt) | 0, M = M + Math.imul(st, Ht) | 0;
      var Hn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Hn >>> 26) | 0, Hn &= 67108863, x = Math.imul(_, At), c = Math.imul(_, St), c = c + Math.imul(k, At) | 0, M = Math.imul(k, St), x = x + Math.imul(g, It) | 0, c = c + Math.imul(g, Tt) | 0, c = c + Math.imul(f, It) | 0, M = M + Math.imul(f, Tt) | 0, x = x + Math.imul(Mt, Ct) | 0, c = c + Math.imul(Mt, kt) | 0, c = c + Math.imul(mt, Ct) | 0, M = M + Math.imul(mt, kt) | 0, x = x + Math.imul(vt, Rt) | 0, c = c + Math.imul(vt, Nt) | 0, c = c + Math.imul(ht, Rt) | 0, M = M + Math.imul(ht, Nt) | 0, x = x + Math.imul(Et, Ut) | 0, c = c + Math.imul(Et, Ot) | 0, c = c + Math.imul(_t, Ut) | 0, M = M + Math.imul(_t, Ot) | 0, x = x + Math.imul(yt, Pt) | 0, c = c + Math.imul(yt, Lt) | 0, c = c + Math.imul(wt, Pt) | 0, M = M + Math.imul(wt, Lt) | 0, x = x + Math.imul(dt, Ft) | 0, c = c + Math.imul(dt, Dt) | 0, c = c + Math.imul(ot, Ft) | 0, M = M + Math.imul(ot, Dt) | 0, x = x + Math.imul(at, qt) | 0, c = c + Math.imul(at, Ht) | 0, c = c + Math.imul(ut, qt) | 0, M = M + Math.imul(ut, Ht) | 0;
      var Kn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Kn >>> 26) | 0, Kn &= 67108863, x = Math.imul(_, It), c = Math.imul(_, Tt), c = c + Math.imul(k, It) | 0, M = Math.imul(k, Tt), x = x + Math.imul(g, Ct) | 0, c = c + Math.imul(g, kt) | 0, c = c + Math.imul(f, Ct) | 0, M = M + Math.imul(f, kt) | 0, x = x + Math.imul(Mt, Rt) | 0, c = c + Math.imul(Mt, Nt) | 0, c = c + Math.imul(mt, Rt) | 0, M = M + Math.imul(mt, Nt) | 0, x = x + Math.imul(vt, Ut) | 0, c = c + Math.imul(vt, Ot) | 0, c = c + Math.imul(ht, Ut) | 0, M = M + Math.imul(ht, Ot) | 0, x = x + Math.imul(Et, Pt) | 0, c = c + Math.imul(Et, Lt) | 0, c = c + Math.imul(_t, Pt) | 0, M = M + Math.imul(_t, Lt) | 0, x = x + Math.imul(yt, Ft) | 0, c = c + Math.imul(yt, Dt) | 0, c = c + Math.imul(wt, Ft) | 0, M = M + Math.imul(wt, Dt) | 0, x = x + Math.imul(dt, qt) | 0, c = c + Math.imul(dt, Ht) | 0, c = c + Math.imul(ot, qt) | 0, M = M + Math.imul(ot, Ht) | 0;
      var zn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (zn >>> 26) | 0, zn &= 67108863, x = Math.imul(_, Ct), c = Math.imul(_, kt), c = c + Math.imul(k, Ct) | 0, M = Math.imul(k, kt), x = x + Math.imul(g, Rt) | 0, c = c + Math.imul(g, Nt) | 0, c = c + Math.imul(f, Rt) | 0, M = M + Math.imul(f, Nt) | 0, x = x + Math.imul(Mt, Ut) | 0, c = c + Math.imul(Mt, Ot) | 0, c = c + Math.imul(mt, Ut) | 0, M = M + Math.imul(mt, Ot) | 0, x = x + Math.imul(vt, Pt) | 0, c = c + Math.imul(vt, Lt) | 0, c = c + Math.imul(ht, Pt) | 0, M = M + Math.imul(ht, Lt) | 0, x = x + Math.imul(Et, Ft) | 0, c = c + Math.imul(Et, Dt) | 0, c = c + Math.imul(_t, Ft) | 0, M = M + Math.imul(_t, Dt) | 0, x = x + Math.imul(yt, qt) | 0, c = c + Math.imul(yt, Ht) | 0, c = c + Math.imul(wt, qt) | 0, M = M + Math.imul(wt, Ht) | 0;
      var jn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (jn >>> 26) | 0, jn &= 67108863, x = Math.imul(_, Rt), c = Math.imul(_, Nt), c = c + Math.imul(k, Rt) | 0, M = Math.imul(k, Nt), x = x + Math.imul(g, Ut) | 0, c = c + Math.imul(g, Ot) | 0, c = c + Math.imul(f, Ut) | 0, M = M + Math.imul(f, Ot) | 0, x = x + Math.imul(Mt, Pt) | 0, c = c + Math.imul(Mt, Lt) | 0, c = c + Math.imul(mt, Pt) | 0, M = M + Math.imul(mt, Lt) | 0, x = x + Math.imul(vt, Ft) | 0, c = c + Math.imul(vt, Dt) | 0, c = c + Math.imul(ht, Ft) | 0, M = M + Math.imul(ht, Dt) | 0, x = x + Math.imul(Et, qt) | 0, c = c + Math.imul(Et, Ht) | 0, c = c + Math.imul(_t, qt) | 0, M = M + Math.imul(_t, Ht) | 0;
      var Vn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Vn >>> 26) | 0, Vn &= 67108863, x = Math.imul(_, Ut), c = Math.imul(_, Ot), c = c + Math.imul(k, Ut) | 0, M = Math.imul(k, Ot), x = x + Math.imul(g, Pt) | 0, c = c + Math.imul(g, Lt) | 0, c = c + Math.imul(f, Pt) | 0, M = M + Math.imul(f, Lt) | 0, x = x + Math.imul(Mt, Ft) | 0, c = c + Math.imul(Mt, Dt) | 0, c = c + Math.imul(mt, Ft) | 0, M = M + Math.imul(mt, Dt) | 0, x = x + Math.imul(vt, qt) | 0, c = c + Math.imul(vt, Ht) | 0, c = c + Math.imul(ht, qt) | 0, M = M + Math.imul(ht, Ht) | 0;
      var Wn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Wn >>> 26) | 0, Wn &= 67108863, x = Math.imul(_, Pt), c = Math.imul(_, Lt), c = c + Math.imul(k, Pt) | 0, M = Math.imul(k, Lt), x = x + Math.imul(g, Ft) | 0, c = c + Math.imul(g, Dt) | 0, c = c + Math.imul(f, Ft) | 0, M = M + Math.imul(f, Dt) | 0, x = x + Math.imul(Mt, qt) | 0, c = c + Math.imul(Mt, Ht) | 0, c = c + Math.imul(mt, qt) | 0, M = M + Math.imul(mt, Ht) | 0;
      var $n = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + ($n >>> 26) | 0, $n &= 67108863, x = Math.imul(_, Ft), c = Math.imul(_, Dt), c = c + Math.imul(k, Ft) | 0, M = Math.imul(k, Dt), x = x + Math.imul(g, qt) | 0, c = c + Math.imul(g, Ht) | 0, c = c + Math.imul(f, qt) | 0, M = M + Math.imul(f, Ht) | 0;
      var Zn = (R + x | 0) + ((c & 8191) << 13) | 0;
      R = (M + (c >>> 13) | 0) + (Zn >>> 26) | 0, Zn &= 67108863, x = Math.imul(_, qt), c = Math.imul(_, Ht), c = c + Math.imul(k, qt) | 0, M = Math.imul(k, Ht);
      var Jn = (R + x | 0) + ((c & 8191) << 13) | 0;
      return R = (M + (c >>> 13) | 0) + (Jn >>> 26) | 0, Jn &= 67108863, A[0] = kn, A[1] = Rn, A[2] = Nn, A[3] = Un, A[4] = On, A[5] = Pn, A[6] = Ln, A[7] = Fn, A[8] = Dn, A[9] = qn, A[10] = Hn, A[11] = Kn, A[12] = zn, A[13] = jn, A[14] = Vn, A[15] = Wn, A[16] = $n, A[17] = Zn, A[18] = Jn, R !== 0 && (A[19] = R, w.length++), w;
    };
    Math.imul || (E = T);
    function N(B, u, d) {
      d.negative = u.negative ^ B.negative, d.length = B.length + u.length;
      for (var w = 0, m = 0, v = 0; v < d.length - 1; v++) {
        var A = m;
        m = 0;
        for (var R = w & 67108863, x = Math.min(v, u.length - 1), c = Math.max(0, v - B.length + 1); c <= x; c++) {
          var M = v - c, V = B.words[M] | 0, Z = u.words[c] | 0, J = V * Z, Q = J & 67108863;
          A = A + (J / 67108864 | 0) | 0, Q = Q + R | 0, R = Q & 67108863, A = A + (Q >>> 26) | 0, m += A >>> 26, A &= 67108863;
        }
        d.words[v] = R, w = A, A = m;
      }
      return w !== 0 ? d.words[v] = w : d.length--, d.strip();
    }
    function C(B, u, d) {
      var w = new U();
      return w.mulp(B, u, d);
    }
    i.prototype.mulTo = function(u, d) {
      var w, m = this.length + u.length;
      return this.length === 10 && u.length === 10 ? w = E(this, u, d) : m < 63 ? w = T(this, u, d) : m < 1024 ? w = N(this, u, d) : w = C(this, u, d), w;
    };
    function U(B, u) {
      this.x = B, this.y = u;
    }
    U.prototype.makeRBT = function(u) {
      for (var d = new Array(u), w = i.prototype._countBits(u) - 1, m = 0; m < u; m++)
        d[m] = this.revBin(m, w, u);
      return d;
    }, U.prototype.revBin = function(u, d, w) {
      if (u === 0 || u === w - 1)
        return u;
      for (var m = 0, v = 0; v < d; v++)
        m |= (u & 1) << d - v - 1, u >>= 1;
      return m;
    }, U.prototype.permute = function(u, d, w, m, v, A) {
      for (var R = 0; R < A; R++)
        m[R] = d[u[R]], v[R] = w[u[R]];
    }, U.prototype.transform = function(u, d, w, m, v, A) {
      this.permute(A, u, d, w, m, v);
      for (var R = 1; R < v; R <<= 1)
        for (var x = R << 1, c = Math.cos(2 * Math.PI / x), M = Math.sin(2 * Math.PI / x), V = 0; V < v; V += x)
          for (var Z = c, J = M, Q = 0; Q < R; Q++) {
            var it = w[V + Q], st = m[V + Q], zt = w[V + Q + R], at = m[V + Q + R], ut = Z * zt - J * at;
            at = Z * at + J * zt, zt = ut, w[V + Q] = it + zt, m[V + Q] = st + at, w[V + Q + R] = it - zt, m[V + Q + R] = st - at, Q !== x && (ut = c * Z - M * J, J = c * J + M * Z, Z = ut);
          }
    }, U.prototype.guessLen13b = function(u, d) {
      var w = Math.max(d, u) | 1, m = w & 1, v = 0;
      for (w = w / 2 | 0; w; w = w >>> 1)
        v++;
      return 1 << v + 1 + m;
    }, U.prototype.conjugate = function(u, d, w) {
      if (!(w <= 1))
        for (var m = 0; m < w / 2; m++) {
          var v = u[m];
          u[m] = u[w - m - 1], u[w - m - 1] = v, v = d[m], d[m] = -d[w - m - 1], d[w - m - 1] = -v;
        }
    }, U.prototype.normalize13b = function(u, d) {
      for (var w = 0, m = 0; m < d / 2; m++) {
        var v = Math.round(u[2 * m + 1] / d) * 8192 + Math.round(u[2 * m] / d) + w;
        u[m] = v & 67108863, v < 67108864 ? w = 0 : w = v / 67108864 | 0;
      }
      return u;
    }, U.prototype.convert13b = function(u, d, w, m) {
      for (var v = 0, A = 0; A < d; A++)
        v = v + (u[A] | 0), w[2 * A] = v & 8191, v = v >>> 13, w[2 * A + 1] = v & 8191, v = v >>> 13;
      for (A = 2 * d; A < m; ++A)
        w[A] = 0;
      n(v === 0), n((v & -8192) === 0);
    }, U.prototype.stub = function(u) {
      for (var d = new Array(u), w = 0; w < u; w++)
        d[w] = 0;
      return d;
    }, U.prototype.mulp = function(u, d, w) {
      var m = 2 * this.guessLen13b(u.length, d.length), v = this.makeRBT(m), A = this.stub(m), R = new Array(m), x = new Array(m), c = new Array(m), M = new Array(m), V = new Array(m), Z = new Array(m), J = w.words;
      J.length = m, this.convert13b(u.words, u.length, R, m), this.convert13b(d.words, d.length, M, m), this.transform(R, A, x, c, m, v), this.transform(M, A, V, Z, m, v);
      for (var Q = 0; Q < m; Q++) {
        var it = x[Q] * V[Q] - c[Q] * Z[Q];
        c[Q] = x[Q] * Z[Q] + c[Q] * V[Q], x[Q] = it;
      }
      return this.conjugate(x, c, m), this.transform(x, c, J, A, m, v), this.conjugate(J, A, m), this.normalize13b(J, m), w.negative = u.negative ^ d.negative, w.length = u.length + d.length, w.strip();
    }, i.prototype.mul = function(u) {
      var d = new i(null);
      return d.words = new Array(this.length + u.length), this.mulTo(u, d);
    }, i.prototype.mulf = function(u) {
      var d = new i(null);
      return d.words = new Array(this.length + u.length), C(this, u, d);
    }, i.prototype.imul = function(u) {
      return this.clone().mulTo(u, this);
    }, i.prototype.imuln = function(u) {
      n(typeof u == "number"), n(u < 67108864);
      for (var d = 0, w = 0; w < this.length; w++) {
        var m = (this.words[w] | 0) * u, v = (m & 67108863) + (d & 67108863);
        d >>= 26, d += m / 67108864 | 0, d += v >>> 26, this.words[w] = v & 67108863;
      }
      return d !== 0 && (this.words[w] = d, this.length++), this;
    }, i.prototype.muln = function(u) {
      return this.clone().imuln(u);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(u) {
      var d = I(u);
      if (d.length === 0)
        return new i(1);
      for (var w = this, m = 0; m < d.length && d[m] === 0; m++, w = w.sqr())
        ;
      if (++m < d.length)
        for (var v = w.sqr(); m < d.length; m++, v = v.sqr())
          d[m] !== 0 && (w = w.mul(v));
      return w;
    }, i.prototype.iushln = function(u) {
      n(typeof u == "number" && u >= 0);
      var d = u % 26, w = (u - d) / 26, m = 67108863 >>> 26 - d << 26 - d, v;
      if (d !== 0) {
        var A = 0;
        for (v = 0; v < this.length; v++) {
          var R = this.words[v] & m, x = (this.words[v] | 0) - R << d;
          this.words[v] = x | A, A = R >>> 26 - d;
        }
        A && (this.words[v] = A, this.length++);
      }
      if (w !== 0) {
        for (v = this.length - 1; v >= 0; v--)
          this.words[v + w] = this.words[v];
        for (v = 0; v < w; v++)
          this.words[v] = 0;
        this.length += w;
      }
      return this.strip();
    }, i.prototype.ishln = function(u) {
      return n(this.negative === 0), this.iushln(u);
    }, i.prototype.iushrn = function(u, d, w) {
      n(typeof u == "number" && u >= 0);
      var m;
      d ? m = (d - d % 26) / 26 : m = 0;
      var v = u % 26, A = Math.min((u - v) / 26, this.length), R = 67108863 ^ 67108863 >>> v << v, x = w;
      if (m -= A, m = Math.max(0, m), x) {
        for (var c = 0; c < A; c++)
          x.words[c] = this.words[c];
        x.length = A;
      }
      if (A !== 0)
        if (this.length > A)
          for (this.length -= A, c = 0; c < this.length; c++)
            this.words[c] = this.words[c + A];
        else
          this.words[0] = 0, this.length = 1;
      var M = 0;
      for (c = this.length - 1; c >= 0 && (M !== 0 || c >= m); c--) {
        var V = this.words[c] | 0;
        this.words[c] = M << 26 - v | V >>> v, M = V & R;
      }
      return x && M !== 0 && (x.words[x.length++] = M), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, i.prototype.ishrn = function(u, d, w) {
      return n(this.negative === 0), this.iushrn(u, d, w);
    }, i.prototype.shln = function(u) {
      return this.clone().ishln(u);
    }, i.prototype.ushln = function(u) {
      return this.clone().iushln(u);
    }, i.prototype.shrn = function(u) {
      return this.clone().ishrn(u);
    }, i.prototype.ushrn = function(u) {
      return this.clone().iushrn(u);
    }, i.prototype.testn = function(u) {
      n(typeof u == "number" && u >= 0);
      var d = u % 26, w = (u - d) / 26, m = 1 << d;
      if (this.length <= w)
        return !1;
      var v = this.words[w];
      return !!(v & m);
    }, i.prototype.imaskn = function(u) {
      n(typeof u == "number" && u >= 0);
      var d = u % 26, w = (u - d) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= w)
        return this;
      if (d !== 0 && w++, this.length = Math.min(w, this.length), d !== 0) {
        var m = 67108863 ^ 67108863 >>> d << d;
        this.words[this.length - 1] &= m;
      }
      return this.strip();
    }, i.prototype.maskn = function(u) {
      return this.clone().imaskn(u);
    }, i.prototype.iaddn = function(u) {
      return n(typeof u == "number"), n(u < 67108864), u < 0 ? this.isubn(-u) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < u ? (this.words[0] = u - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(u), this.negative = 1, this) : this._iaddn(u);
    }, i.prototype._iaddn = function(u) {
      this.words[0] += u;
      for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
        this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
      return this.length = Math.max(this.length, d + 1), this;
    }, i.prototype.isubn = function(u) {
      if (n(typeof u == "number"), n(u < 67108864), u < 0)
        return this.iaddn(-u);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(u), this.negative = 1, this;
      if (this.words[0] -= u, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var d = 0; d < this.length && this.words[d] < 0; d++)
          this.words[d] += 67108864, this.words[d + 1] -= 1;
      return this.strip();
    }, i.prototype.addn = function(u) {
      return this.clone().iaddn(u);
    }, i.prototype.subn = function(u) {
      return this.clone().isubn(u);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(u, d, w) {
      var m = u.length + w, v;
      this._expand(m);
      var A, R = 0;
      for (v = 0; v < u.length; v++) {
        A = (this.words[v + w] | 0) + R;
        var x = (u.words[v] | 0) * d;
        A -= x & 67108863, R = (A >> 26) - (x / 67108864 | 0), this.words[v + w] = A & 67108863;
      }
      for (; v < this.length - w; v++)
        A = (this.words[v + w] | 0) + R, R = A >> 26, this.words[v + w] = A & 67108863;
      if (R === 0)
        return this.strip();
      for (n(R === -1), R = 0, v = 0; v < this.length; v++)
        A = -(this.words[v] | 0) + R, R = A >> 26, this.words[v] = A & 67108863;
      return this.negative = 1, this.strip();
    }, i.prototype._wordDiv = function(u, d) {
      var w = this.length - u.length, m = this.clone(), v = u, A = v.words[v.length - 1] | 0, R = this._countBits(A);
      w = 26 - R, w !== 0 && (v = v.ushln(w), m.iushln(w), A = v.words[v.length - 1] | 0);
      var x = m.length - v.length, c;
      if (d !== "mod") {
        c = new i(null), c.length = x + 1, c.words = new Array(c.length);
        for (var M = 0; M < c.length; M++)
          c.words[M] = 0;
      }
      var V = m.clone()._ishlnsubmul(v, 1, x);
      V.negative === 0 && (m = V, c && (c.words[x] = 1));
      for (var Z = x - 1; Z >= 0; Z--) {
        var J = (m.words[v.length + Z] | 0) * 67108864 + (m.words[v.length + Z - 1] | 0);
        for (J = Math.min(J / A | 0, 67108863), m._ishlnsubmul(v, J, Z); m.negative !== 0; )
          J--, m.negative = 0, m._ishlnsubmul(v, 1, Z), m.isZero() || (m.negative ^= 1);
        c && (c.words[Z] = J);
      }
      return c && c.strip(), m.strip(), d !== "div" && w !== 0 && m.iushrn(w), {
        div: c || null,
        mod: m
      };
    }, i.prototype.divmod = function(u, d, w) {
      if (n(!u.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var m, v, A;
      return this.negative !== 0 && u.negative === 0 ? (A = this.neg().divmod(u, d), d !== "mod" && (m = A.div.neg()), d !== "div" && (v = A.mod.neg(), w && v.negative !== 0 && v.iadd(u)), {
        div: m,
        mod: v
      }) : this.negative === 0 && u.negative !== 0 ? (A = this.divmod(u.neg(), d), d !== "mod" && (m = A.div.neg()), {
        div: m,
        mod: A.mod
      }) : this.negative & u.negative ? (A = this.neg().divmod(u.neg(), d), d !== "div" && (v = A.mod.neg(), w && v.negative !== 0 && v.isub(u)), {
        div: A.div,
        mod: v
      }) : u.length > this.length || this.cmp(u) < 0 ? {
        div: new i(0),
        mod: this
      } : u.length === 1 ? d === "div" ? {
        div: this.divn(u.words[0]),
        mod: null
      } : d === "mod" ? {
        div: null,
        mod: new i(this.modn(u.words[0]))
      } : {
        div: this.divn(u.words[0]),
        mod: new i(this.modn(u.words[0]))
      } : this._wordDiv(u, d);
    }, i.prototype.div = function(u) {
      return this.divmod(u, "div", !1).div;
    }, i.prototype.mod = function(u) {
      return this.divmod(u, "mod", !1).mod;
    }, i.prototype.umod = function(u) {
      return this.divmod(u, "mod", !0).mod;
    }, i.prototype.divRound = function(u) {
      var d = this.divmod(u);
      if (d.mod.isZero())
        return d.div;
      var w = d.div.negative !== 0 ? d.mod.isub(u) : d.mod, m = u.ushrn(1), v = u.andln(1), A = w.cmp(m);
      return A < 0 || v === 1 && A === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
    }, i.prototype.modn = function(u) {
      n(u <= 67108863);
      for (var d = (1 << 26) % u, w = 0, m = this.length - 1; m >= 0; m--)
        w = (d * w + (this.words[m] | 0)) % u;
      return w;
    }, i.prototype.idivn = function(u) {
      n(u <= 67108863);
      for (var d = 0, w = this.length - 1; w >= 0; w--) {
        var m = (this.words[w] | 0) + d * 67108864;
        this.words[w] = m / u | 0, d = m % u;
      }
      return this.strip();
    }, i.prototype.divn = function(u) {
      return this.clone().idivn(u);
    }, i.prototype.egcd = function(u) {
      n(u.negative === 0), n(!u.isZero());
      var d = this, w = u.clone();
      d.negative !== 0 ? d = d.umod(u) : d = d.clone();
      for (var m = new i(1), v = new i(0), A = new i(0), R = new i(1), x = 0; d.isEven() && w.isEven(); )
        d.iushrn(1), w.iushrn(1), ++x;
      for (var c = w.clone(), M = d.clone(); !d.isZero(); ) {
        for (var V = 0, Z = 1; !(d.words[0] & Z) && V < 26; ++V, Z <<= 1)
          ;
        if (V > 0)
          for (d.iushrn(V); V-- > 0; )
            (m.isOdd() || v.isOdd()) && (m.iadd(c), v.isub(M)), m.iushrn(1), v.iushrn(1);
        for (var J = 0, Q = 1; !(w.words[0] & Q) && J < 26; ++J, Q <<= 1)
          ;
        if (J > 0)
          for (w.iushrn(J); J-- > 0; )
            (A.isOdd() || R.isOdd()) && (A.iadd(c), R.isub(M)), A.iushrn(1), R.iushrn(1);
        d.cmp(w) >= 0 ? (d.isub(w), m.isub(A), v.isub(R)) : (w.isub(d), A.isub(m), R.isub(v));
      }
      return {
        a: A,
        b: R,
        gcd: w.iushln(x)
      };
    }, i.prototype._invmp = function(u) {
      n(u.negative === 0), n(!u.isZero());
      var d = this, w = u.clone();
      d.negative !== 0 ? d = d.umod(u) : d = d.clone();
      for (var m = new i(1), v = new i(0), A = w.clone(); d.cmpn(1) > 0 && w.cmpn(1) > 0; ) {
        for (var R = 0, x = 1; !(d.words[0] & x) && R < 26; ++R, x <<= 1)
          ;
        if (R > 0)
          for (d.iushrn(R); R-- > 0; )
            m.isOdd() && m.iadd(A), m.iushrn(1);
        for (var c = 0, M = 1; !(w.words[0] & M) && c < 26; ++c, M <<= 1)
          ;
        if (c > 0)
          for (w.iushrn(c); c-- > 0; )
            v.isOdd() && v.iadd(A), v.iushrn(1);
        d.cmp(w) >= 0 ? (d.isub(w), m.isub(v)) : (w.isub(d), v.isub(m));
      }
      var V;
      return d.cmpn(1) === 0 ? V = m : V = v, V.cmpn(0) < 0 && V.iadd(u), V;
    }, i.prototype.gcd = function(u) {
      if (this.isZero())
        return u.abs();
      if (u.isZero())
        return this.abs();
      var d = this.clone(), w = u.clone();
      d.negative = 0, w.negative = 0;
      for (var m = 0; d.isEven() && w.isEven(); m++)
        d.iushrn(1), w.iushrn(1);
      do {
        for (; d.isEven(); )
          d.iushrn(1);
        for (; w.isEven(); )
          w.iushrn(1);
        var v = d.cmp(w);
        if (v < 0) {
          var A = d;
          d = w, w = A;
        } else if (v === 0 || w.cmpn(1) === 0)
          break;
        d.isub(w);
      } while (!0);
      return w.iushln(m);
    }, i.prototype.invm = function(u) {
      return this.egcd(u).a.umod(u);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(u) {
      return this.words[0] & u;
    }, i.prototype.bincn = function(u) {
      n(typeof u == "number");
      var d = u % 26, w = (u - d) / 26, m = 1 << d;
      if (this.length <= w)
        return this._expand(w + 1), this.words[w] |= m, this;
      for (var v = m, A = w; v !== 0 && A < this.length; A++) {
        var R = this.words[A] | 0;
        R += v, v = R >>> 26, R &= 67108863, this.words[A] = R;
      }
      return v !== 0 && (this.words[A] = v, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(u) {
      var d = u < 0;
      if (this.negative !== 0 && !d)
        return -1;
      if (this.negative === 0 && d)
        return 1;
      this.strip();
      var w;
      if (this.length > 1)
        w = 1;
      else {
        d && (u = -u), n(u <= 67108863, "Number is too big");
        var m = this.words[0] | 0;
        w = m === u ? 0 : m < u ? -1 : 1;
      }
      return this.negative !== 0 ? -w | 0 : w;
    }, i.prototype.cmp = function(u) {
      if (this.negative !== 0 && u.negative === 0)
        return -1;
      if (this.negative === 0 && u.negative !== 0)
        return 1;
      var d = this.ucmp(u);
      return this.negative !== 0 ? -d | 0 : d;
    }, i.prototype.ucmp = function(u) {
      if (this.length > u.length)
        return 1;
      if (this.length < u.length)
        return -1;
      for (var d = 0, w = this.length - 1; w >= 0; w--) {
        var m = this.words[w] | 0, v = u.words[w] | 0;
        if (m !== v) {
          m < v ? d = -1 : m > v && (d = 1);
          break;
        }
      }
      return d;
    }, i.prototype.gtn = function(u) {
      return this.cmpn(u) === 1;
    }, i.prototype.gt = function(u) {
      return this.cmp(u) === 1;
    }, i.prototype.gten = function(u) {
      return this.cmpn(u) >= 0;
    }, i.prototype.gte = function(u) {
      return this.cmp(u) >= 0;
    }, i.prototype.ltn = function(u) {
      return this.cmpn(u) === -1;
    }, i.prototype.lt = function(u) {
      return this.cmp(u) === -1;
    }, i.prototype.lten = function(u) {
      return this.cmpn(u) <= 0;
    }, i.prototype.lte = function(u) {
      return this.cmp(u) <= 0;
    }, i.prototype.eqn = function(u) {
      return this.cmpn(u) === 0;
    }, i.prototype.eq = function(u) {
      return this.cmp(u) === 0;
    }, i.red = function(u) {
      return new Y(u);
    }, i.prototype.toRed = function(u) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), u.convertTo(this)._forceRed(u);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(u) {
      return this.red = u, this;
    }, i.prototype.forceRed = function(u) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(u);
    }, i.prototype.redAdd = function(u) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, u);
    }, i.prototype.redIAdd = function(u) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, u);
    }, i.prototype.redSub = function(u) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, u);
    }, i.prototype.redISub = function(u) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, u);
    }, i.prototype.redShl = function(u) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, u);
    }, i.prototype.redMul = function(u) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, u), this.red.mul(this, u);
    }, i.prototype.redIMul = function(u) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, u), this.red.imul(this, u);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(u) {
      return n(this.red && !u.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, u);
    };
    var O = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function P(B, u) {
      this.name = B, this.p = new i(u, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    P.prototype._tmp = function() {
      var u = new i(null);
      return u.words = new Array(Math.ceil(this.n / 13)), u;
    }, P.prototype.ireduce = function(u) {
      var d = u, w;
      do
        this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), w = d.bitLength();
      while (w > this.n);
      var m = w < this.n ? -1 : d.ucmp(this.p);
      return m === 0 ? (d.words[0] = 0, d.length = 1) : m > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
    }, P.prototype.split = function(u, d) {
      u.iushrn(this.n, 0, d);
    }, P.prototype.imulK = function(u) {
      return u.imul(this.k);
    };
    function L() {
      P.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    o(L, P), L.prototype.split = function(u, d) {
      for (var w = 4194303, m = Math.min(u.length, 9), v = 0; v < m; v++)
        d.words[v] = u.words[v];
      if (d.length = m, u.length <= 9) {
        u.words[0] = 0, u.length = 1;
        return;
      }
      var A = u.words[9];
      for (d.words[d.length++] = A & w, v = 10; v < u.length; v++) {
        var R = u.words[v] | 0;
        u.words[v - 10] = (R & w) << 4 | A >>> 22, A = R;
      }
      A >>>= 22, u.words[v - 10] = A, A === 0 && u.length > 10 ? u.length -= 10 : u.length -= 9;
    }, L.prototype.imulK = function(u) {
      u.words[u.length] = 0, u.words[u.length + 1] = 0, u.length += 2;
      for (var d = 0, w = 0; w < u.length; w++) {
        var m = u.words[w] | 0;
        d += m * 977, u.words[w] = d & 67108863, d = m * 64 + (d / 67108864 | 0);
      }
      return u.words[u.length - 1] === 0 && (u.length--, u.words[u.length - 1] === 0 && u.length--), u;
    };
    function q() {
      P.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    o(q, P);
    function z() {
      P.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    o(z, P);
    function W() {
      P.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    o(W, P), W.prototype.imulK = function(u) {
      for (var d = 0, w = 0; w < u.length; w++) {
        var m = (u.words[w] | 0) * 19 + d, v = m & 67108863;
        m >>>= 26, u.words[w] = v, d = m;
      }
      return d !== 0 && (u.words[u.length++] = d), u;
    }, i._prime = function(u) {
      if (O[u])
        return O[u];
      var d;
      if (u === "k256")
        d = new L();
      else if (u === "p224")
        d = new q();
      else if (u === "p192")
        d = new z();
      else if (u === "p25519")
        d = new W();
      else
        throw new Error("Unknown prime " + u);
      return O[u] = d, d;
    };
    function Y(B) {
      if (typeof B == "string") {
        var u = i._prime(B);
        this.m = u.p, this.prime = u;
      } else
        n(B.gtn(1), "modulus must be greater than 1"), this.m = B, this.prime = null;
    }
    Y.prototype._verify1 = function(u) {
      n(u.negative === 0, "red works only with positives"), n(u.red, "red works only with red numbers");
    }, Y.prototype._verify2 = function(u, d) {
      n((u.negative | d.negative) === 0, "red works only with positives"), n(
        u.red && u.red === d.red,
        "red works only with red numbers"
      );
    }, Y.prototype.imod = function(u) {
      return this.prime ? this.prime.ireduce(u)._forceRed(this) : u.umod(this.m)._forceRed(this);
    }, Y.prototype.neg = function(u) {
      return u.isZero() ? u.clone() : this.m.sub(u)._forceRed(this);
    }, Y.prototype.add = function(u, d) {
      this._verify2(u, d);
      var w = u.add(d);
      return w.cmp(this.m) >= 0 && w.isub(this.m), w._forceRed(this);
    }, Y.prototype.iadd = function(u, d) {
      this._verify2(u, d);
      var w = u.iadd(d);
      return w.cmp(this.m) >= 0 && w.isub(this.m), w;
    }, Y.prototype.sub = function(u, d) {
      this._verify2(u, d);
      var w = u.sub(d);
      return w.cmpn(0) < 0 && w.iadd(this.m), w._forceRed(this);
    }, Y.prototype.isub = function(u, d) {
      this._verify2(u, d);
      var w = u.isub(d);
      return w.cmpn(0) < 0 && w.iadd(this.m), w;
    }, Y.prototype.shl = function(u, d) {
      return this._verify1(u), this.imod(u.ushln(d));
    }, Y.prototype.imul = function(u, d) {
      return this._verify2(u, d), this.imod(u.imul(d));
    }, Y.prototype.mul = function(u, d) {
      return this._verify2(u, d), this.imod(u.mul(d));
    }, Y.prototype.isqr = function(u) {
      return this.imul(u, u.clone());
    }, Y.prototype.sqr = function(u) {
      return this.mul(u, u);
    }, Y.prototype.sqrt = function(u) {
      if (u.isZero())
        return u.clone();
      var d = this.m.andln(3);
      if (n(d % 2 === 1), d === 3) {
        var w = this.m.add(new i(1)).iushrn(2);
        return this.pow(u, w);
      }
      for (var m = this.m.subn(1), v = 0; !m.isZero() && m.andln(1) === 0; )
        v++, m.iushrn(1);
      n(!m.isZero());
      var A = new i(1).toRed(this), R = A.redNeg(), x = this.m.subn(1).iushrn(1), c = this.m.bitLength();
      for (c = new i(2 * c * c).toRed(this); this.pow(c, x).cmp(R) !== 0; )
        c.redIAdd(R);
      for (var M = this.pow(c, m), V = this.pow(u, m.addn(1).iushrn(1)), Z = this.pow(u, m), J = v; Z.cmp(A) !== 0; ) {
        for (var Q = Z, it = 0; Q.cmp(A) !== 0; it++)
          Q = Q.redSqr();
        n(it < J);
        var st = this.pow(M, new i(1).iushln(J - it - 1));
        V = V.redMul(st), M = st.redSqr(), Z = Z.redMul(M), J = it;
      }
      return V;
    }, Y.prototype.invm = function(u) {
      var d = u._invmp(this.m);
      return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
    }, Y.prototype.pow = function(u, d) {
      if (d.isZero())
        return new i(1).toRed(this);
      if (d.cmpn(1) === 0)
        return u.clone();
      var w = 4, m = new Array(1 << w);
      m[0] = new i(1).toRed(this), m[1] = u;
      for (var v = 2; v < m.length; v++)
        m[v] = this.mul(m[v - 1], u);
      var A = m[0], R = 0, x = 0, c = d.bitLength() % 26;
      for (c === 0 && (c = 26), v = d.length - 1; v >= 0; v--) {
        for (var M = d.words[v], V = c - 1; V >= 0; V--) {
          var Z = M >> V & 1;
          if (A !== m[0] && (A = this.sqr(A)), Z === 0 && R === 0) {
            x = 0;
            continue;
          }
          R <<= 1, R |= Z, x++, !(x !== w && (v !== 0 || V !== 0)) && (A = this.mul(A, m[R]), x = 0, R = 0);
        }
        c = 26;
      }
      return A;
    }, Y.prototype.convertTo = function(u) {
      var d = u.umod(this.m);
      return d === u ? d.clone() : d;
    }, Y.prototype.convertFrom = function(u) {
      var d = u.clone();
      return d.red = null, d;
    }, i.mont = function(u) {
      return new G(u);
    };
    function G(B) {
      Y.call(this, B), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(G, Y), G.prototype.convertTo = function(u) {
      return this.imod(u.ushln(this.shift));
    }, G.prototype.convertFrom = function(u) {
      var d = this.imod(u.mul(this.rinv));
      return d.red = null, d;
    }, G.prototype.imul = function(u, d) {
      if (u.isZero() || d.isZero())
        return u.words[0] = 0, u.length = 1, u;
      var w = u.imul(d), m = w.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), v = w.isub(m).iushrn(this.shift), A = v;
      return v.cmp(this.m) >= 0 ? A = v.isub(this.m) : v.cmpn(0) < 0 && (A = v.iadd(this.m)), A._forceRed(this);
    }, G.prototype.mul = function(u, d) {
      if (u.isZero() || d.isZero())
        return new i(0)._forceRed(this);
      var w = u.mul(d), m = w.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), v = w.isub(m).iushrn(this.shift), A = v;
      return v.cmp(this.m) >= 0 ? A = v.isub(this.m) : v.cmpn(0) < 0 && (A = v.iadd(this.m)), A._forceRed(this);
    }, G.prototype.invm = function(u) {
      var d = this.imod(u._invmp(this.m).mul(this.r2));
      return d._forceRed(this);
    };
  })(e, Du);
})(Qi);
var Ee = Qi.exports, Oo = {
  // default network is bitcoin
  bech32: "bc",
  pubKeyHash: 0,
  scriptHash: 5,
  validWitnessVersions: [0]
}, Po = {
  bech32: "tb",
  pubKeyHash: 111,
  scriptHash: 196,
  validWitnessVersions: [0]
}, Lo = {
  bech32: "bcrt",
  pubKeyHash: 111,
  scriptHash: 196,
  validWitnessVersions: [0]
}, Fo = {
  bech32: "sb",
  pubKeyHash: 63,
  scriptHash: 123,
  validWitnessVersions: [0]
}, Er = [
  "option_data_loss_protect",
  "initial_routing_sync",
  "option_upfront_shutdown_script",
  "gossip_queries",
  "var_onion_optin",
  "gossip_queries_ex",
  "option_static_remotekey",
  "payment_secret",
  "basic_mpp",
  "option_support_large_channel"
], El = {
  m: new Ee.BN(1e3, 10),
  u: new Ee.BN(1e6, 10),
  n: new Ee.BN(1e9, 10),
  p: new Ee.BN(1e12, 10)
}, _l = new Ee.BN("2100000000000000000", 10), Do = new Ee.BN(1e11, 10), Ci = {
  payment_hash: 1,
  payment_secret: 16,
  description: 13,
  payee: 19,
  description_hash: 23,
  expiry: 6,
  min_final_cltv_expiry: 24,
  fallback_address: 9,
  route_hint: 3,
  feature_bits: 5,
  metadata: 27
}, js = {};
for (var Dr = 0, ui = Object.keys(Ci); Dr < ui.length; Dr++) {
  var Ml = ui[Dr], Bl = Ci[ui[Dr]].toString();
  js[Bl] = Ml;
}
var Al = {
  1: function(e) {
    return Ce(e, !0);
  },
  16: function(e) {
    return Ce(e, !0);
  },
  13: function(e) {
    return Ce(e, !0).toString("utf8");
  },
  19: function(e) {
    return Ce(e, !0);
  },
  23: function(e) {
    return Ce(e, !0);
  },
  27: function(e) {
    return Ce(e, !0);
  },
  6: fn,
  24: fn,
  3: Tl,
  5: Cl
  // keep feature bits as array of 5 bit words
};
function Sl(e) {
  return function(t) {
    return {
      tagCode: parseInt(e),
      words: zs.encode("unknown", t, Number.MAX_SAFE_INTEGER)
    };
  };
}
function fn(e) {
  return e.reverse().reduce(function(t, r, n) {
    return t + r * Math.pow(32, n);
  }, 0);
}
function Il(e, t, r) {
  for (var n = 0, o = 0, i = (1 << r) - 1, s = [], a = 0; a < e.length; ++a)
    for (n = n << t | e[a], o += t; o >= r; )
      o -= r, s.push(n >> o & i);
  return o > 0 && s.push(n << r - o & i), s;
}
function Ce(e, t) {
  var r = gr.Buffer.from(Il(e, 5, 8));
  return t && e.length * 5 % 8 !== 0 && (r = r.slice(0, -1)), r;
}
function Tl(e) {
  for (var t = [], r, n, o, i, s, a = Ce(e, !0); a.length > 0; )
    r = a.slice(0, 33).toString("hex"), n = a.slice(33, 41).toString("hex"), o = parseInt(a.slice(41, 45).toString("hex"), 16), i = parseInt(a.slice(45, 49).toString("hex"), 16), s = parseInt(a.slice(49, 51).toString("hex"), 16), a = a.slice(51), t.push({
      pubkey: r,
      short_channel_id: n,
      fee_base_msat: o,
      fee_proportional_millionths: i,
      cltv_expiry_delta: s
    });
  return t;
}
function Cl(e) {
  for (var t = e.slice().reverse().map(function(o) {
    return [
      !!(o & 1),
      !!(o & 2),
      !!(o & 4),
      !!(o & 8),
      !!(o & 16)
    ];
  }).reduce(function(o, i) {
    return o.concat(i);
  }, []); t.length < Er.length * 2; )
    t.push(!1);
  var r = { extra_bits: {} };
  if (Er.forEach(function(o, i) {
    var s;
    t[i * 2] ? s = "required" : t[i * 2 + 1] && (s = "supported"), r[o] = s;
  }), t.length > Er.length * 2) {
    var n = t.slice(Er.length * 2);
    r.extra_bits = {
      start_bit: Er.length * 2,
      bits: n,
      required: n.reduce(function(o, i, s) {
        return s % 2 !== 0 ? o || !1 : o || i;
      }, !1)
    };
  }
  return r;
}
function kl(e, t) {
  var r, n;
  if (e.slice(-1).match(/^[munp]$/))
    r = e.slice(-1), n = e.slice(0, -1);
  else {
    if (e.slice(-1).match(/^[^munp0-9]$/))
      throw new Error("Not a valid multiplier for the amount");
    n = e;
  }
  if (!n.match(/^\d+$/))
    throw new Error("Not a valid human readable amount");
  var o = new Ee.BN(n, 10), i = r ? o.mul(Do).div(El[r]) : o.mul(Do);
  if (r === "p" && !o.mod(new Ee.BN(10, 10)).eq(new Ee.BN(0, 10)) || i.gt(_l))
    throw new Error("Amount is outside of valid range");
  return t ? i.toString() : i;
}
function Rl(e, t) {
  if (typeof e != "string")
    throw new Error("Lightning Payment Request must be string");
  if (e.slice(0, 2).toLowerCase() !== "ln")
    throw new Error("Not a proper lightning payment request");
  var r = [], n = zs.decode(e, Number.MAX_SAFE_INTEGER);
  e = e.toLowerCase();
  var o = n.prefix, i = n.words, s = e.slice(o.length + 1), a = i.slice(-104);
  i = i.slice(0, -104);
  var l = o.match(/^ln(\S+?)(\d*)([a-zA-Z]?)$/);
  if (l && !l[2] && (l = o.match(/^ln(\S+)$/)), !l)
    throw new Error("Not a proper lightning payment request");
  r.push({
    name: "lightning_network",
    letters: "ln"
  });
  var p = l[1], y;
  if (t) {
    if (t.bech32 === void 0 || t.pubKeyHash === void 0 || t.scriptHash === void 0 || !Array.isArray(t.validWitnessVersions))
      throw new Error("Invalid network");
    y = t;
  } else
    switch (p) {
      case Oo.bech32:
        y = Oo;
        break;
      case Po.bech32:
        y = Po;
        break;
      case Lo.bech32:
        y = Lo;
        break;
      case Fo.bech32:
        y = Fo;
        break;
    }
  if (!y || y.bech32 !== p)
    throw new Error("Unknown coin bech32 prefix");
  r.push({
    name: "coin_network",
    letters: p,
    value: y
  });
  var b = l[2], S;
  if (b) {
    var I = l[3];
    S = kl(b + I, !0), r.push({
      name: "amount",
      letters: l[2] + l[3],
      value: S
    });
  } else
    S = null;
  r.push({
    name: "separator",
    letters: "1"
  });
  var T = fn(i.slice(0, 7));
  i = i.slice(7), r.push({
    name: "timestamp",
    letters: s.slice(0, 7),
    value: T
  }), s = s.slice(7);
  for (var E, N, C, U; i.length > 0; ) {
    var O = i[0].toString();
    E = js[O] || "unknown_tag", N = Al[O] || Sl(O), i = i.slice(1), C = fn(i.slice(0, 2)), i = i.slice(2), U = i.slice(0, C), i = i.slice(C), r.push({
      name: E,
      tag: s[0],
      letters: s.slice(0, 1 + 2 + C),
      value: N(U)
      // see: parsers for more comments
    }), s = s.slice(1 + 2 + C);
  }
  r.push({
    name: "signature",
    letters: s.slice(0, 104),
    value: Ce(a, !0)
  }), s = s.slice(104), r.push({
    name: "checksum",
    letters: s
  });
  var P = {
    paymentRequest: e,
    sections: r,
    get expiry() {
      var W = r.find(function(Y) {
        return Y.name === "expiry";
      });
      if (W)
        return z("timestamp") + W.value;
    },
    get route_hints() {
      return r.filter(function(W) {
        return W.name === "route_hint";
      }).map(function(W) {
        return W.value;
      });
    }
  }, L = function(W) {
    if (W === "route_hint")
      return "continue";
    Object.defineProperty(P, W, {
      get: function() {
        return z(W);
      }
    });
  };
  for (var q in Ci)
    L(q);
  return P;
  function z(W) {
    var Y = r.find(function(G) {
      return G.name === W;
    });
    return Y ? Y.value : void 0;
  }
}
const fr = async () => {
  const e = new _i(Kr(sr));
  let t;
  if (Kr(Mr)[1])
    t = Kr(Mr);
  else
    try {
      t = await e.getKeys(), Mr.set(t);
    } catch (r) {
      console.error(r);
    }
  return new cl(e, t);
}, Nl = (e) => {
  const t = document.createElement("input");
  t.value = e, document.body.appendChild(t), t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), document.body.removeChild(t);
}, Ul = (e) => Rl(e).sections[2].value / 1e3, Cr = (e) => {
  Mr.set(e), xe("info", "mint keys updated");
};
function Ol(e) {
  let t;
  return {
    c() {
      t = $("div"), Yt(t, "border-top-color", "transparent"), D(t, "class", "w-3 h-3 border-2 border-violet-300 rounded-full animate-spin");
    },
    m(r, n) {
      et(r, t, n);
    },
    p: ft,
    i: ft,
    o: ft,
    d(r) {
      r && rt(t);
    }
  };
}
class to extends Ge {
  constructor(t) {
    super(), De(this, t, null, Ol, Be, {});
  }
}
function Pl(e) {
  let t, r, n, o, i, s;
  const a = [Dl, Fl], l = [];
  function p(y, b) {
    return (
      /*hasLoaded*/
      y[4] ? 0 : 1
    );
  }
  return n = p(e), o = l[n] = a[n](e), {
    c() {
      t = $("p"), t.textContent = `Paste a lightning invoice to sweep wallet. (invoice should be 1%
                less than total wallet balance, to cover fees)`, r = ct(), o.c(), i = hn(), D(t, "class", "text-sm");
    },
    m(y, b) {
      et(y, t, b), et(y, r, b), l[n].m(y, b), et(y, i, b), s = !0;
    },
    p(y, b) {
      let S = n;
      n = p(y), n === S ? l[n].p(y, b) : (Le(), xt(l[S], 1, 1, () => {
        l[S] = null;
      }), Fe(), o = l[n], o ? o.p(y, b) : (o = l[n] = a[n](y), o.c()), gt(o, 1), o.m(i.parentNode, i));
    },
    i(y) {
      s || (gt(o), s = !0);
    },
    o(y) {
      xt(o), s = !1;
    },
    d(y) {
      y && rt(t), y && rt(r), l[n].d(y), y && rt(i);
    }
  };
}
function Ll(e) {
  let t, r, n, o, i;
  return o = new to({}), {
    c() {
      t = $("div"), r = $("p"), r.textContent = "Wait for lightning payment to complete", n = ct(), Me(o.$$.fragment), D(r, "class", "text-sm"), D(t, "class", "flex w-full h-full items-center gap-2 flex-col justify-center");
    },
    m(s, a) {
      et(s, t, a), j(t, r), j(t, n), me(o, t, null), i = !0;
    },
    p: ft,
    i(s) {
      i || (gt(o.$$.fragment, s), i = !0);
    },
    o(s) {
      xt(o.$$.fragment, s), i = !1;
    },
    d(s) {
      s && rt(t), fe(o);
    }
  };
}
function Fl(e) {
  let t, r, n, o, i, s, a, l;
  const p = [Hl, ql], y = [];
  function b(S, I) {
    return (
      /*isLoading*/
      S[3] ? 0 : 1
    );
  }
  return o = b(e), i = y[o] = p[o](e), {
    c() {
      t = $("input"), r = ct(), n = $("div"), i.c(), D(t, "type", "tesxt"), D(t, "class", "mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-violet-400"), D(n, "class", "h-10");
    },
    m(S, I) {
      et(S, t, I), Gr(
        t,
        /*invoice*/
        e[0]
      ), et(S, r, I), et(S, n, I), y[o].m(n, null), s = !0, a || (l = ne(
        t,
        "input",
        /*input_input_handler*/
        e[12]
      ), a = !0);
    },
    p(S, I) {
      I & /*invoice*/
      1 && Gr(
        t,
        /*invoice*/
        S[0]
      );
      let T = o;
      o = b(S), o === T ? y[o].p(S, I) : (Le(), xt(y[T], 1, 1, () => {
        y[T] = null;
      }), Fe(), i = y[o], i ? i.p(S, I) : (i = y[o] = p[o](S), i.c()), gt(i, 1), i.m(n, null));
    },
    i(S) {
      s || (gt(i), s = !0);
    },
    o(S) {
      xt(i), s = !1;
    },
    d(S) {
      S && rt(t), S && rt(r), S && rt(n), y[o].d(), a = !1, l();
    }
  };
}
function Dl(e) {
  let t, r, n, o, i, s, a, l, p, y;
  return {
    c() {
      t = $("div"), r = $("p"), r.textContent = "amount:", n = ct(), o = $("p"), i = Jt(
        /*invoiceAmount*/
        e[2]
      ), s = ct(), a = $("p"), a.textContent = "fee:", l = ct(), p = $("p"), y = Jt(
        /*fee*/
        e[1]
      ), D(r, "class", "font-bold"), D(o, "class", "col-span-2"), D(a, "class", "font-bold"), D(p, "class", "col-span-2"), D(t, "class", "grid grid-cols-3 text-sm items-start justify-start w-full");
    },
    m(b, S) {
      et(b, t, S), j(t, r), j(t, n), j(t, o), j(o, i), j(t, s), j(t, a), j(t, l), j(t, p), j(p, y);
    },
    p(b, S) {
      S & /*invoiceAmount*/
      4 && te(
        i,
        /*invoiceAmount*/
        b[2]
      ), S & /*fee*/
      2 && te(
        y,
        /*fee*/
        b[1]
      );
    },
    i: ft,
    o: ft,
    d(b) {
      b && rt(t);
    }
  };
}
function ql(e) {
  let t, r, n;
  return {
    c() {
      t = $("button"), t.textContent = "check", D(t, "class", "bg-violet-400 p-1 text-sm rounded-md opacity-90 hover:opacity-100");
    },
    m(o, i) {
      et(o, t, i), r || (n = ne(
        t,
        "click",
        /*checkInvoice*/
        e[7]
      ), r = !0);
    },
    p: ft,
    i: ft,
    o: ft,
    d(o) {
      o && rt(t), r = !1, n();
    }
  };
}
function Hl(e) {
  let t, r;
  return t = new to({}), {
    c() {
      Me(t.$$.fragment);
    },
    m(n, o) {
      me(t, n, o), r = !0;
    },
    p: ft,
    i(n) {
      r || (gt(t.$$.fragment, n), r = !0);
    },
    o(n) {
      xt(t.$$.fragment, n), r = !1;
    },
    d(n) {
      fe(t, n);
    }
  };
}
function qo(e) {
  let t, r, n;
  return {
    c() {
      t = $("div"), t.textContent = "confirm", D(t, "class", "bg-violet-500 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-violet-900 cursor-pointer");
    },
    m(o, i) {
      et(o, t, i), r || (n = ne(
        t,
        "click",
        /*payInvoice*/
        e[8]
      ), r = !0);
    },
    p: ft,
    d(o) {
      o && rt(t), r = !1, n();
    }
  };
}
function Kl(e) {
  let t, r, n, o, i, s, a, l, p, y, b, S, I, T, E, N, C;
  const U = [Ll, Pl], O = [];
  function P(q, z) {
    return (
      /*isPaying*/
      q[5] ? 0 : 1
    );
  }
  n = P(e), o = O[n] = U[n](e);
  let L = (
    /*hasLoaded*/
    e[4] && !/*isPaying*/
    e[5] && qo(e)
  );
  return {
    c() {
      t = $("div"), r = $("div"), o.c(), i = ct(), s = $("div"), a = $("p"), a.textContent = "Mint:", l = ct(), p = $("p"), y = Jt(
        /*$mint*/
        e[6]
      ), b = ct(), S = $("div"), I = $("div"), I.textContent = "back", T = ct(), L && L.c(), D(r, "class", "flex flex-col justify-start gap-3 text-violet-600 h-64 items-center"), D(a, "class", "font-bold"), D(s, "class", "text-xs flex gap-1 w-full items-center justify-center"), D(t, "class", "bg-violet-100 flex flex-col items-start text-violet-400 p-2"), D(I, "class", "bg-gray-400 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-gray-800 cursor-pointer"), D(S, "class", "flex w-full flex-grow");
    },
    m(q, z) {
      et(q, t, z), j(t, r), O[n].m(r, null), j(t, i), j(t, s), j(s, a), j(s, l), j(s, p), j(p, y), et(q, b, z), et(q, S, z), j(S, I), j(S, T), L && L.m(S, null), E = !0, N || (C = ne(
        I,
        "click",
        /*abort*/
        e[9]
      ), N = !0);
    },
    p(q, [z]) {
      let W = n;
      n = P(q), n === W ? O[n].p(q, z) : (Le(), xt(O[W], 1, 1, () => {
        O[W] = null;
      }), Fe(), o = O[n], o ? o.p(q, z) : (o = O[n] = U[n](q), o.c()), gt(o, 1), o.m(r, null)), (!E || z & /*$mint*/
      64) && te(
        y,
        /*$mint*/
        q[6]
      ), /*hasLoaded*/
      q[4] && !/*isPaying*/
      q[5] ? L ? L.p(q, z) : (L = qo(q), L.c(), L.m(S, null)) : L && (L.d(1), L = null);
    },
    i(q) {
      E || (gt(o), E = !0);
    },
    o(q) {
      xt(o), E = !1;
    },
    d(q) {
      q && rt(t), O[n].d(), q && rt(b), q && rt(S), L && L.d(), N = !1, C();
    }
  };
}
function zl(e, t, r) {
  let n, o;
  We(e, Ne, (C) => r(13, n = C)), We(e, sr, (C) => r(6, o = C));
  let { amount: i } = t, { nav: s } = t, a = "", l = 0, p = 0, y = !1, b = !1, S = !1;
  const I = async () => {
    try {
      if (r(3, y = !0), !a) {
        xe("warning", "no invoice provided");
        return;
      }
      r(2, p = Ul(a));
      const C = await fr();
      r(1, l = await C.getFee(a)), l + p > i && xe("warning", "not enough funds available"), r(4, b = !0);
    } catch (C) {
      xe("error", C);
    } finally {
      r(3, y = !1);
    }
  }, T = async () => {
    try {
      r(5, S = !0);
      const C = await fr(), { returnChange: U, send: O, newKeys: P } = await C.send(p + l, n);
      P && Cr(P);
      const { change: L, isPaid: q, preimage: z, newKeys: W } = await C.payLnInvoice(a, O);
      if (W && Cr(W), !q) {
        xe("warning", "invoice could not be paid. try again later."), U.push(...O);
        return;
      }
      Ne.update(() => [...L, ...U]), xe("success", "invoice paid"), E();
    } catch (C) {
      xe("error", C);
    } finally {
      r(5, S = !1);
    }
  }, E = () => {
    r(0, a = "a"), r(1, l = 0), r(2, p = 0), r(3, y = !1), r(4, b = !1), r(5, S = !1), r(10, s = "base");
  };
  function N() {
    a = this.value, r(0, a);
  }
  return e.$$set = (C) => {
    "amount" in C && r(11, i = C.amount), "nav" in C && r(10, s = C.nav);
  }, [
    a,
    l,
    p,
    y,
    b,
    S,
    o,
    I,
    T,
    E,
    s,
    i,
    N
  ];
}
class jl extends Ge {
  constructor(t) {
    super(), De(this, t, zl, Kl, Be, { amount: 11, nav: 10 });
  }
}
function Vl(e) {
  let t, r, n, o, i, s;
  return {
    c() {
      t = $("div"), r = $("span"), n = Jt(
        /*level*/
        e[0]
      ), o = ct(), i = $("span"), s = Jt(
        /*message*/
        e[1]
      ), D(r, "class", "font-bold text-xs text-blue-700"), D(i, "class", "text-xs text-blue-700"), D(t, "class", "flex gap-1 p-1 pl-2 bg-blue-200 w-full mx-2 mt-1 rounded-md");
    },
    m(a, l) {
      et(a, t, l), j(t, r), j(r, n), j(t, o), j(t, i), j(i, s);
    },
    p(a, l) {
      l & /*level*/
      1 && te(
        n,
        /*level*/
        a[0]
      ), l & /*message*/
      2 && te(
        s,
        /*message*/
        a[1]
      );
    },
    d(a) {
      a && rt(t);
    }
  };
}
function Wl(e) {
  let t, r, n, o, i, s;
  return {
    c() {
      t = $("div"), r = $("span"), n = Jt(
        /*level*/
        e[0]
      ), o = ct(), i = $("span"), s = Jt(
        /*message*/
        e[1]
      ), D(r, "class", "font-bold text-xs text-green-700"), D(i, "class", "text-xs text-green-700"), D(t, "class", "flex gap-1 p-1 pl-2 bg-green-200 w-full mx-2 mt-1 rounded-md");
    },
    m(a, l) {
      et(a, t, l), j(t, r), j(r, n), j(t, o), j(t, i), j(i, s);
    },
    p(a, l) {
      l & /*level*/
      1 && te(
        n,
        /*level*/
        a[0]
      ), l & /*message*/
      2 && te(
        s,
        /*message*/
        a[1]
      );
    },
    d(a) {
      a && rt(t);
    }
  };
}
function $l(e) {
  let t, r, n, o, i, s;
  return {
    c() {
      t = $("div"), r = $("span"), n = Jt(
        /*level*/
        e[0]
      ), o = ct(), i = $("span"), s = Jt(
        /*message*/
        e[1]
      ), D(r, "class", "font-bold text-xs text-red-700"), D(i, "class", "text-xs text-red-700"), D(t, "class", "flex gap-1 p-1 pl-2 bg-red-200 w-full mx-2 mt-1 rounded-md");
    },
    m(a, l) {
      et(a, t, l), j(t, r), j(r, n), j(t, o), j(t, i), j(i, s);
    },
    p(a, l) {
      l & /*level*/
      1 && te(
        n,
        /*level*/
        a[0]
      ), l & /*message*/
      2 && te(
        s,
        /*message*/
        a[1]
      );
    },
    d(a) {
      a && rt(t);
    }
  };
}
function Zl(e) {
  let t, r, n, o, i, s;
  return {
    c() {
      t = $("div"), r = $("span"), n = Jt(
        /*level*/
        e[0]
      ), o = ct(), i = $("span"), s = Jt(
        /*message*/
        e[1]
      ), D(r, "class", "font-bold text-xs text-yellow-700"), D(i, "class", "text-xs text-yellow-700"), D(t, "class", "flex gap-1 p-1 pl-2 bg-yellow-200 w-full mx-2 mt-1 rounded-md");
    },
    m(a, l) {
      et(a, t, l), j(t, r), j(r, n), j(t, o), j(t, i), j(i, s);
    },
    p(a, l) {
      l & /*level*/
      1 && te(
        n,
        /*level*/
        a[0]
      ), l & /*message*/
      2 && te(
        s,
        /*message*/
        a[1]
      );
    },
    d(a) {
      a && rt(t);
    }
  };
}
function Jl(e) {
  let t;
  function r(i, s) {
    if (
      /*level*/
      i[0] === "warning"
    )
      return Zl;
    if (
      /*level*/
      i[0] === "error"
    )
      return $l;
    if (
      /*level*/
      i[0] === "success"
    )
      return Wl;
    if (
      /*level*/
      i[0] === "info"
    )
      return Vl;
  }
  let n = r(e), o = n && n(e);
  return {
    c() {
      o && o.c(), t = hn();
    },
    m(i, s) {
      o && o.m(i, s), et(i, t, s);
    },
    p(i, [s]) {
      n === (n = r(i)) && o ? o.p(i, s) : (o && o.d(1), o = n && n(i), o && (o.c(), o.m(t.parentNode, t)));
    },
    i: ft,
    o: ft,
    d(i) {
      o && o.d(i), i && rt(t);
    }
  };
}
function Gl(e, t, r) {
  let { level: n } = t, { message: o } = t;
  return e.$$set = (i) => {
    "level" in i && r(0, n = i.level), "message" in i && r(1, o = i.message);
  }, [n, o];
}
class Yl extends Ge {
  constructor(t) {
    super(), De(this, t, Gl, Jl, Be, { level: 0, message: 1 });
  }
}
function Ho(e, t, r) {
  const n = e.slice();
  return n[1] = t[r], n;
}
function Ko(e) {
  let t, r;
  return t = new Yl({
    props: {
      level: (
        /*toast*/
        e[1].level
      ),
      message: (
        /*toast*/
        e[1].message
      )
    }
  }), {
    c() {
      Me(t.$$.fragment);
    },
    m(n, o) {
      me(t, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o & /*$notifications*/
      1 && (i.level = /*toast*/
      n[1].level), o & /*$notifications*/
      1 && (i.message = /*toast*/
      n[1].message), t.$set(i);
    },
    i(n) {
      r || (gt(t.$$.fragment, n), r = !0);
    },
    o(n) {
      xt(t.$$.fragment, n), r = !1;
    },
    d(n) {
      fe(t, n);
    }
  };
}
function Xl(e) {
  let t, r, n = (
    /*$notifications*/
    e[0]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Ko(Ho(e, n, s));
  const i = (s) => xt(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      t = $("div");
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      D(t, "class", "fixed z-20 flex flex-col w-60");
    },
    m(s, a) {
      et(s, t, a);
      for (let l = 0; l < o.length; l += 1)
        o[l].m(t, null);
      r = !0;
    },
    p(s, [a]) {
      if (a & /*$notifications*/
      1) {
        n = /*$notifications*/
        s[0];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const p = Ho(s, n, l);
          o[l] ? (o[l].p(p, a), gt(o[l], 1)) : (o[l] = Ko(p), o[l].c(), gt(o[l], 1), o[l].m(t, null));
        }
        for (Le(), l = n.length; l < o.length; l += 1)
          i(l);
        Fe();
      }
    },
    i(s) {
      if (!r) {
        for (let a = 0; a < n.length; a += 1)
          gt(o[a]);
        r = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        xt(o[a]);
      r = !1;
    },
    d(s) {
      s && rt(t), aa(o, s);
    }
  };
}
function Ql(e, t, r) {
  let n;
  return We(e, Fi, (o) => r(0, n = o)), [n];
}
class tc extends Ge {
  constructor(t) {
    super(), De(this, t, Ql, Xl, Be, {});
  }
}
var lr = {}, ec = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Vs = {}, ie = {};
let eo;
const rc = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
ie.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
ie.getSymbolTotalCodewords = function(t) {
  return rc[t];
};
ie.getBCHDigit = function(e) {
  let t = 0;
  for (; e !== 0; )
    t++, e >>>= 1;
  return t;
};
ie.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  eo = t;
};
ie.isKanjiModeEnabled = function() {
  return typeof eo < "u";
};
ie.toSJIS = function(t) {
  return eo(t);
};
var Sn = {};
(function(e) {
  e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
  function t(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  e.isValid = function(n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }, e.from = function(n, o) {
    if (e.isValid(n))
      return n;
    try {
      return t(n);
    } catch {
      return o;
    }
  };
})(Sn);
function Ws() {
  this.buffer = [], this.length = 0;
}
Ws.prototype = {
  get: function(e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
  },
  put: function(e, t) {
    for (let r = 0; r < t; r++)
      this.putBit((e >>> t - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var nc = Ws;
function Ur(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
}
Ur.prototype.set = function(e, t, r, n) {
  const o = e * this.size + t;
  this.data[o] = r, n && (this.reservedBit[o] = !0);
};
Ur.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
Ur.prototype.xor = function(e, t, r) {
  this.data[e * this.size + t] ^= r;
};
Ur.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var ic = Ur, $s = {};
(function(e) {
  const t = ie.getSymbolSize;
  e.getRowColCoords = function(n) {
    if (n === 1)
      return [];
    const o = Math.floor(n / 7) + 2, i = t(n), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, a = [i - 7];
    for (let l = 1; l < o - 1; l++)
      a[l] = a[l - 1] - s;
    return a.push(6), a.reverse();
  }, e.getPositions = function(n) {
    const o = [], i = e.getRowColCoords(n), s = i.length;
    for (let a = 0; a < s; a++)
      for (let l = 0; l < s; l++)
        a === 0 && l === 0 || // top-left
        a === 0 && l === s - 1 || // bottom-left
        a === s - 1 && l === 0 || o.push([i[a], i[l]]);
    return o;
  };
})($s);
var Zs = {};
const oc = ie.getSymbolSize, zo = 7;
Zs.getPositions = function(t) {
  const r = oc(t);
  return [
    // top-left
    [0, 0],
    // top-right
    [r - zo, 0],
    // bottom-left
    [0, r - zo]
  ];
};
var Js = {};
(function(e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function(o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }, e.from = function(o) {
    return e.isValid(o) ? parseInt(o, 10) : void 0;
  }, e.getPenaltyN1 = function(o) {
    const i = o.size;
    let s = 0, a = 0, l = 0, p = null, y = null;
    for (let b = 0; b < i; b++) {
      a = l = 0, p = y = null;
      for (let S = 0; S < i; S++) {
        let I = o.get(b, S);
        I === p ? a++ : (a >= 5 && (s += t.N1 + (a - 5)), p = I, a = 1), I = o.get(S, b), I === y ? l++ : (l >= 5 && (s += t.N1 + (l - 5)), y = I, l = 1);
      }
      a >= 5 && (s += t.N1 + (a - 5)), l >= 5 && (s += t.N1 + (l - 5));
    }
    return s;
  }, e.getPenaltyN2 = function(o) {
    const i = o.size;
    let s = 0;
    for (let a = 0; a < i - 1; a++)
      for (let l = 0; l < i - 1; l++) {
        const p = o.get(a, l) + o.get(a, l + 1) + o.get(a + 1, l) + o.get(a + 1, l + 1);
        (p === 4 || p === 0) && s++;
      }
    return s * t.N2;
  }, e.getPenaltyN3 = function(o) {
    const i = o.size;
    let s = 0, a = 0, l = 0;
    for (let p = 0; p < i; p++) {
      a = l = 0;
      for (let y = 0; y < i; y++)
        a = a << 1 & 2047 | o.get(p, y), y >= 10 && (a === 1488 || a === 93) && s++, l = l << 1 & 2047 | o.get(y, p), y >= 10 && (l === 1488 || l === 93) && s++;
    }
    return s * t.N3;
  }, e.getPenaltyN4 = function(o) {
    let i = 0;
    const s = o.data.length;
    for (let l = 0; l < s; l++)
      i += o.data[l];
    return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * t.N4;
  };
  function r(n, o, i) {
    switch (n) {
      case e.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case e.Patterns.PATTERN001:
        return o % 2 === 0;
      case e.Patterns.PATTERN010:
        return i % 3 === 0;
      case e.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return o * i % 2 + o * i % 3 === 0;
      case e.Patterns.PATTERN110:
        return (o * i % 2 + o * i % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (o * i % 3 + (o + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  e.applyMask = function(o, i) {
    const s = i.size;
    for (let a = 0; a < s; a++)
      for (let l = 0; l < s; l++)
        i.isReserved(l, a) || i.xor(l, a, r(o, l, a));
  }, e.getBestMask = function(o, i) {
    const s = Object.keys(e.Patterns).length;
    let a = 0, l = 1 / 0;
    for (let p = 0; p < s; p++) {
      i(p), e.applyMask(p, o);
      const y = e.getPenaltyN1(o) + e.getPenaltyN2(o) + e.getPenaltyN3(o) + e.getPenaltyN4(o);
      e.applyMask(p, o), y < l && (l = y, a = p);
    }
    return a;
  };
})(Js);
var In = {};
const ke = Sn, qr = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], Hr = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
In.getBlocksCount = function(t, r) {
  switch (r) {
    case ke.L:
      return qr[(t - 1) * 4 + 0];
    case ke.M:
      return qr[(t - 1) * 4 + 1];
    case ke.Q:
      return qr[(t - 1) * 4 + 2];
    case ke.H:
      return qr[(t - 1) * 4 + 3];
    default:
      return;
  }
};
In.getTotalCodewordsCount = function(t, r) {
  switch (r) {
    case ke.L:
      return Hr[(t - 1) * 4 + 0];
    case ke.M:
      return Hr[(t - 1) * 4 + 1];
    case ke.Q:
      return Hr[(t - 1) * 4 + 2];
    case ke.H:
      return Hr[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Gs = {}, Tn = {};
const Br = new Uint8Array(512), ln = new Uint8Array(256);
(function() {
  let t = 1;
  for (let r = 0; r < 255; r++)
    Br[r] = t, ln[t] = r, t <<= 1, t & 256 && (t ^= 285);
  for (let r = 255; r < 512; r++)
    Br[r] = Br[r - 255];
})();
Tn.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return ln[t];
};
Tn.exp = function(t) {
  return Br[t];
};
Tn.mul = function(t, r) {
  return t === 0 || r === 0 ? 0 : Br[ln[t] + ln[r]];
};
(function(e) {
  const t = Tn;
  e.mul = function(n, o) {
    const i = new Uint8Array(n.length + o.length - 1);
    for (let s = 0; s < n.length; s++)
      for (let a = 0; a < o.length; a++)
        i[s + a] ^= t.mul(n[s], o[a]);
    return i;
  }, e.mod = function(n, o) {
    let i = new Uint8Array(n);
    for (; i.length - o.length >= 0; ) {
      const s = i[0];
      for (let l = 0; l < o.length; l++)
        i[l] ^= t.mul(o[l], s);
      let a = 0;
      for (; a < i.length && i[a] === 0; )
        a++;
      i = i.slice(a);
    }
    return i;
  }, e.generateECPolynomial = function(n) {
    let o = new Uint8Array([1]);
    for (let i = 0; i < n; i++)
      o = e.mul(o, new Uint8Array([1, t.exp(i)]));
    return o;
  };
})(Gs);
const Ys = Gs;
function ro(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
ro.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = Ys.generateECPolynomial(this.degree);
};
ro.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const r = new Uint8Array(t.length + this.degree);
  r.set(t);
  const n = Ys.mod(r, this.genPoly), o = this.degree - n.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(n, o), i;
  }
  return n;
};
var sc = ro, Xs = {}, qe = {}, no = {};
no.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var ye = {};
const Qs = "[0-9]+", ac = "[A-Z $%*+\\-./:]+";
let kr = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kr = kr.replace(/u/g, "\\u");
const uc = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kr + `)(?:.|[\r
]))+`;
ye.KANJI = new RegExp(kr, "g");
ye.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
ye.BYTE = new RegExp(uc, "g");
ye.NUMERIC = new RegExp(Qs, "g");
ye.ALPHANUMERIC = new RegExp(ac, "g");
const fc = new RegExp("^" + kr + "$"), lc = new RegExp("^" + Qs + "$"), cc = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
ye.testKanji = function(t) {
  return fc.test(t);
};
ye.testNumeric = function(t) {
  return lc.test(t);
};
ye.testAlphanumeric = function(t) {
  return cc.test(t);
};
(function(e) {
  const t = no, r = ye;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function(i, s) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!t.isValid(s))
      throw new Error("Invalid version: " + s);
    return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2];
  }, e.getBestModeForData = function(i) {
    return r.testNumeric(i) ? e.NUMERIC : r.testAlphanumeric(i) ? e.ALPHANUMERIC : r.testKanji(i) ? e.KANJI : e.BYTE;
  }, e.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, e.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function n(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  e.from = function(i, s) {
    if (e.isValid(i))
      return i;
    try {
      return n(i);
    } catch {
      return s;
    }
  };
})(qe);
(function(e) {
  const t = ie, r = In, n = Sn, o = qe, i = no, s = 7973, a = t.getBCHDigit(s);
  function l(S, I, T) {
    for (let E = 1; E <= 40; E++)
      if (I <= e.getCapacity(E, T, S))
        return E;
  }
  function p(S, I) {
    return o.getCharCountIndicator(S, I) + 4;
  }
  function y(S, I) {
    let T = 0;
    return S.forEach(function(E) {
      const N = p(E.mode, I);
      T += N + E.getBitsLength();
    }), T;
  }
  function b(S, I) {
    for (let T = 1; T <= 40; T++)
      if (y(S, T) <= e.getCapacity(T, I, o.MIXED))
        return T;
  }
  e.from = function(I, T) {
    return i.isValid(I) ? parseInt(I, 10) : T;
  }, e.getCapacity = function(I, T, E) {
    if (!i.isValid(I))
      throw new Error("Invalid QR Code version");
    typeof E > "u" && (E = o.BYTE);
    const N = t.getSymbolTotalCodewords(I), C = r.getTotalCodewordsCount(I, T), U = (N - C) * 8;
    if (E === o.MIXED)
      return U;
    const O = U - p(E, I);
    switch (E) {
      case o.NUMERIC:
        return Math.floor(O / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(O / 11 * 2);
      case o.KANJI:
        return Math.floor(O / 13);
      case o.BYTE:
      default:
        return Math.floor(O / 8);
    }
  }, e.getBestVersionForData = function(I, T) {
    let E;
    const N = n.from(T, n.M);
    if (Array.isArray(I)) {
      if (I.length > 1)
        return b(I, N);
      if (I.length === 0)
        return 1;
      E = I[0];
    } else
      E = I;
    return l(E.mode, E.getLength(), N);
  }, e.getEncodedBits = function(I) {
    if (!i.isValid(I) || I < 7)
      throw new Error("Invalid QR Code version");
    let T = I << 12;
    for (; t.getBCHDigit(T) - a >= 0; )
      T ^= s << t.getBCHDigit(T) - a;
    return I << 12 | T;
  };
})(Xs);
var ta = {};
const ki = ie, ea = 1335, hc = 21522, jo = ki.getBCHDigit(ea);
ta.getEncodedBits = function(t, r) {
  const n = t.bit << 3 | r;
  let o = n << 10;
  for (; ki.getBCHDigit(o) - jo >= 0; )
    o ^= ea << ki.getBCHDigit(o) - jo;
  return (n << 10 | o) ^ hc;
};
var ra = {};
const dc = qe;
function cr(e) {
  this.mode = dc.NUMERIC, this.data = e.toString();
}
cr.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
cr.prototype.getLength = function() {
  return this.data.length;
};
cr.prototype.getBitsLength = function() {
  return cr.getBitsLength(this.data.length);
};
cr.prototype.write = function(t) {
  let r, n, o;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    n = this.data.substr(r, 3), o = parseInt(n, 10), t.put(o, 10);
  const i = this.data.length - r;
  i > 0 && (n = this.data.substr(r), o = parseInt(n, 10), t.put(o, i * 3 + 1));
};
var pc = cr;
const mc = qe, fi = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function hr(e) {
  this.mode = mc.ALPHANUMERIC, this.data = e;
}
hr.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
hr.prototype.getLength = function() {
  return this.data.length;
};
hr.prototype.getBitsLength = function() {
  return hr.getBitsLength(this.data.length);
};
hr.prototype.write = function(t) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let n = fi.indexOf(this.data[r]) * 45;
    n += fi.indexOf(this.data[r + 1]), t.put(n, 11);
  }
  this.data.length % 2 && t.put(fi.indexOf(this.data[r]), 6);
};
var gc = hr, yc = function(t) {
  for (var r = [], n = t.length, o = 0; o < n; o++) {
    var i = t.charCodeAt(o);
    if (i >= 55296 && i <= 56319 && n > o + 1) {
      var s = t.charCodeAt(o + 1);
      s >= 56320 && s <= 57343 && (i = (i - 55296) * 1024 + s - 56320 + 65536, o += 1);
    }
    if (i < 128) {
      r.push(i);
      continue;
    }
    if (i < 2048) {
      r.push(i >> 6 | 192), r.push(i & 63 | 128);
      continue;
    }
    if (i < 55296 || i >= 57344 && i < 65536) {
      r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
      continue;
    }
    if (i >= 65536 && i <= 1114111) {
      r.push(i >> 18 | 240), r.push(i >> 12 & 63 | 128), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
      continue;
    }
    r.push(239, 191, 189);
  }
  return new Uint8Array(r).buffer;
};
const wc = yc, vc = qe;
function dr(e) {
  this.mode = vc.BYTE, typeof e == "string" && (e = wc(e)), this.data = new Uint8Array(e);
}
dr.getBitsLength = function(t) {
  return t * 8;
};
dr.prototype.getLength = function() {
  return this.data.length;
};
dr.prototype.getBitsLength = function() {
  return dr.getBitsLength(this.data.length);
};
dr.prototype.write = function(e) {
  for (let t = 0, r = this.data.length; t < r; t++)
    e.put(this.data[t], 8);
};
var bc = dr;
const xc = qe, Ec = ie;
function pr(e) {
  this.mode = xc.KANJI, this.data = e;
}
pr.getBitsLength = function(t) {
  return t * 13;
};
pr.prototype.getLength = function() {
  return this.data.length;
};
pr.prototype.getBitsLength = function() {
  return pr.getBitsLength(this.data.length);
};
pr.prototype.write = function(e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let r = Ec.toSJIS(this.data[t]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), e.put(r, 13);
  }
};
var _c = pr, na = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(r, n, o) {
      var i = {}, s = {};
      s[n] = 0;
      var a = t.PriorityQueue.make();
      a.push(n, 0);
      for (var l, p, y, b, S, I, T, E, N; !a.empty(); ) {
        l = a.pop(), p = l.value, b = l.cost, S = r[p] || {};
        for (y in S)
          S.hasOwnProperty(y) && (I = S[y], T = b + I, E = s[y], N = typeof s[y] > "u", (N || E > T) && (s[y] = T, a.push(y, T), i[y] = p));
      }
      if (typeof o < "u" && typeof s[o] > "u") {
        var C = ["Could not find a path from ", n, " to ", o, "."].join("");
        throw new Error(C);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(r, n) {
      for (var o = [], i = n; i; )
        o.push(i), r[i], i = r[i];
      return o.reverse(), o;
    },
    find_path: function(r, n, o) {
      var i = t.single_source_shortest_paths(r, n, o);
      return t.extract_shortest_path_from_predecessor_list(
        i,
        o
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(r) {
        var n = t.PriorityQueue, o = {}, i;
        r = r || {};
        for (i in n)
          n.hasOwnProperty(i) && (o[i] = n[i]);
        return o.queue = [], o.sorter = r.sorter || n.default_sorter, o;
      },
      default_sorter: function(r, n) {
        return r.cost - n.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(r, n) {
        var o = { value: r, cost: n };
        this.queue.push(o), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  e.exports = t;
})(na);
var Mc = na.exports;
(function(e) {
  const t = qe, r = pc, n = gc, o = bc, i = _c, s = ye, a = ie, l = Mc;
  function p(C) {
    return unescape(encodeURIComponent(C)).length;
  }
  function y(C, U, O) {
    const P = [];
    let L;
    for (; (L = C.exec(O)) !== null; )
      P.push({
        data: L[0],
        index: L.index,
        mode: U,
        length: L[0].length
      });
    return P;
  }
  function b(C) {
    const U = y(s.NUMERIC, t.NUMERIC, C), O = y(s.ALPHANUMERIC, t.ALPHANUMERIC, C);
    let P, L;
    return a.isKanjiModeEnabled() ? (P = y(s.BYTE, t.BYTE, C), L = y(s.KANJI, t.KANJI, C)) : (P = y(s.BYTE_KANJI, t.BYTE, C), L = []), U.concat(O, P, L).sort(function(z, W) {
      return z.index - W.index;
    }).map(function(z) {
      return {
        data: z.data,
        mode: z.mode,
        length: z.length
      };
    });
  }
  function S(C, U) {
    switch (U) {
      case t.NUMERIC:
        return r.getBitsLength(C);
      case t.ALPHANUMERIC:
        return n.getBitsLength(C);
      case t.KANJI:
        return i.getBitsLength(C);
      case t.BYTE:
        return o.getBitsLength(C);
    }
  }
  function I(C) {
    return C.reduce(function(U, O) {
      const P = U.length - 1 >= 0 ? U[U.length - 1] : null;
      return P && P.mode === O.mode ? (U[U.length - 1].data += O.data, U) : (U.push(O), U);
    }, []);
  }
  function T(C) {
    const U = [];
    for (let O = 0; O < C.length; O++) {
      const P = C[O];
      switch (P.mode) {
        case t.NUMERIC:
          U.push([
            P,
            { data: P.data, mode: t.ALPHANUMERIC, length: P.length },
            { data: P.data, mode: t.BYTE, length: P.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          U.push([
            P,
            { data: P.data, mode: t.BYTE, length: P.length }
          ]);
          break;
        case t.KANJI:
          U.push([
            P,
            { data: P.data, mode: t.BYTE, length: p(P.data) }
          ]);
          break;
        case t.BYTE:
          U.push([
            { data: P.data, mode: t.BYTE, length: p(P.data) }
          ]);
      }
    }
    return U;
  }
  function E(C, U) {
    const O = {}, P = { start: {} };
    let L = ["start"];
    for (let q = 0; q < C.length; q++) {
      const z = C[q], W = [];
      for (let Y = 0; Y < z.length; Y++) {
        const G = z[Y], B = "" + q + Y;
        W.push(B), O[B] = { node: G, lastCount: 0 }, P[B] = {};
        for (let u = 0; u < L.length; u++) {
          const d = L[u];
          O[d] && O[d].node.mode === G.mode ? (P[d][B] = S(O[d].lastCount + G.length, G.mode) - S(O[d].lastCount, G.mode), O[d].lastCount += G.length) : (O[d] && (O[d].lastCount = G.length), P[d][B] = S(G.length, G.mode) + 4 + t.getCharCountIndicator(G.mode, U));
        }
      }
      L = W;
    }
    for (let q = 0; q < L.length; q++)
      P[L[q]].end = 0;
    return { map: P, table: O };
  }
  function N(C, U) {
    let O;
    const P = t.getBestModeForData(C);
    if (O = t.from(U, P), O !== t.BYTE && O.bit < P.bit)
      throw new Error('"' + C + '" cannot be encoded with mode ' + t.toString(O) + `.
 Suggested mode is: ` + t.toString(P));
    switch (O === t.KANJI && !a.isKanjiModeEnabled() && (O = t.BYTE), O) {
      case t.NUMERIC:
        return new r(C);
      case t.ALPHANUMERIC:
        return new n(C);
      case t.KANJI:
        return new i(C);
      case t.BYTE:
        return new o(C);
    }
  }
  e.fromArray = function(U) {
    return U.reduce(function(O, P) {
      return typeof P == "string" ? O.push(N(P, null)) : P.data && O.push(N(P.data, P.mode)), O;
    }, []);
  }, e.fromString = function(U, O) {
    const P = b(U, a.isKanjiModeEnabled()), L = T(P), q = E(L, O), z = l.find_path(q.map, "start", "end"), W = [];
    for (let Y = 1; Y < z.length - 1; Y++)
      W.push(q.table[z[Y]].node);
    return e.fromArray(I(W));
  }, e.rawSplit = function(U) {
    return e.fromArray(
      b(U, a.isKanjiModeEnabled())
    );
  };
})(ra);
const Cn = ie, li = Sn, Bc = nc, Ac = ic, Sc = $s, Ic = Zs, Ri = Js, Ni = In, Tc = sc, cn = Xs, Cc = ta, kc = qe, ci = ra;
function Rc(e, t) {
  const r = e.size, n = Ic.getPositions(t);
  for (let o = 0; o < n.length; o++) {
    const i = n[o][0], s = n[o][1];
    for (let a = -1; a <= 7; a++)
      if (!(i + a <= -1 || r <= i + a))
        for (let l = -1; l <= 7; l++)
          s + l <= -1 || r <= s + l || (a >= 0 && a <= 6 && (l === 0 || l === 6) || l >= 0 && l <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && l >= 2 && l <= 4 ? e.set(i + a, s + l, !0, !0) : e.set(i + a, s + l, !1, !0));
  }
}
function Nc(e) {
  const t = e.size;
  for (let r = 8; r < t - 8; r++) {
    const n = r % 2 === 0;
    e.set(r, 6, n, !0), e.set(6, r, n, !0);
  }
}
function Uc(e, t) {
  const r = Sc.getPositions(t);
  for (let n = 0; n < r.length; n++) {
    const o = r[n][0], i = r[n][1];
    for (let s = -2; s <= 2; s++)
      for (let a = -2; a <= 2; a++)
        s === -2 || s === 2 || a === -2 || a === 2 || s === 0 && a === 0 ? e.set(o + s, i + a, !0, !0) : e.set(o + s, i + a, !1, !0);
  }
}
function Oc(e, t) {
  const r = e.size, n = cn.getEncodedBits(t);
  let o, i, s;
  for (let a = 0; a < 18; a++)
    o = Math.floor(a / 3), i = a % 3 + r - 8 - 3, s = (n >> a & 1) === 1, e.set(o, i, s, !0), e.set(i, o, s, !0);
}
function hi(e, t, r) {
  const n = e.size, o = Cc.getEncodedBits(t, r);
  let i, s;
  for (i = 0; i < 15; i++)
    s = (o >> i & 1) === 1, i < 6 ? e.set(i, 8, s, !0) : i < 8 ? e.set(i + 1, 8, s, !0) : e.set(n - 15 + i, 8, s, !0), i < 8 ? e.set(8, n - i - 1, s, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, s, !0) : e.set(8, 15 - i - 1, s, !0);
  e.set(n - 8, 8, 1, !0);
}
function Pc(e, t) {
  const r = e.size;
  let n = -1, o = r - 1, i = 7, s = 0;
  for (let a = r - 1; a > 0; a -= 2)
    for (a === 6 && a--; ; ) {
      for (let l = 0; l < 2; l++)
        if (!e.isReserved(o, a - l)) {
          let p = !1;
          s < t.length && (p = (t[s] >>> i & 1) === 1), e.set(o, a - l, p), i--, i === -1 && (s++, i = 7);
        }
      if (o += n, o < 0 || r <= o) {
        o -= n, n = -n;
        break;
      }
    }
}
function Lc(e, t, r) {
  const n = new Bc();
  r.forEach(function(l) {
    n.put(l.mode.bit, 4), n.put(l.getLength(), kc.getCharCountIndicator(l.mode, e)), l.write(n);
  });
  const o = Cn.getSymbolTotalCodewords(e), i = Ni.getTotalCodewordsCount(e, t), s = (o - i) * 8;
  for (n.getLengthInBits() + 4 <= s && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  const a = (s - n.getLengthInBits()) / 8;
  for (let l = 0; l < a; l++)
    n.put(l % 2 ? 17 : 236, 8);
  return Fc(n, e, t);
}
function Fc(e, t, r) {
  const n = Cn.getSymbolTotalCodewords(t), o = Ni.getTotalCodewordsCount(t, r), i = n - o, s = Ni.getBlocksCount(t, r), a = n % s, l = s - a, p = Math.floor(n / s), y = Math.floor(i / s), b = y + 1, S = p - y, I = new Tc(S);
  let T = 0;
  const E = new Array(s), N = new Array(s);
  let C = 0;
  const U = new Uint8Array(e.buffer);
  for (let z = 0; z < s; z++) {
    const W = z < l ? y : b;
    E[z] = U.slice(T, T + W), N[z] = I.encode(E[z]), T += W, C = Math.max(C, W);
  }
  const O = new Uint8Array(n);
  let P = 0, L, q;
  for (L = 0; L < C; L++)
    for (q = 0; q < s; q++)
      L < E[q].length && (O[P++] = E[q][L]);
  for (L = 0; L < S; L++)
    for (q = 0; q < s; q++)
      O[P++] = N[q][L];
  return O;
}
function Dc(e, t, r, n) {
  let o;
  if (Array.isArray(e))
    o = ci.fromArray(e);
  else if (typeof e == "string") {
    let p = t;
    if (!p) {
      const y = ci.rawSplit(e);
      p = cn.getBestVersionForData(y, r);
    }
    o = ci.fromString(e, p || 40);
  } else
    throw new Error("Invalid data");
  const i = cn.getBestVersionForData(o, r);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = i;
  else if (t < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const s = Lc(t, r, o), a = Cn.getSymbolSize(t), l = new Ac(a);
  return Rc(l, t), Nc(l), Uc(l, t), hi(l, r, 0), t >= 7 && Oc(l, t), Pc(l, s), isNaN(n) && (n = Ri.getBestMask(
    l,
    hi.bind(null, l, r)
  )), Ri.applyMask(n, l), hi(l, r, n), {
    modules: l,
    version: t,
    errorCorrectionLevel: r,
    maskPattern: n,
    segments: o
  };
}
Vs.create = function(t, r) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let n = li.M, o, i;
  return typeof r < "u" && (n = li.from(r.errorCorrectionLevel, li.M), o = cn.from(r.version), i = Ri.from(r.maskPattern), r.toSJISFunc && Cn.setToSJISFunction(r.toSJISFunc)), Dc(t, o, n, i);
};
var ia = {}, io = {};
(function(e) {
  function t(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    let n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + r);
    (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(i) {
      return [i, i];
    }))), n.length === 6 && n.push("F", "F");
    const o = parseInt(n.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + n.slice(0, 6).join("")
    };
  }
  e.getOptions = function(n) {
    n || (n = {}), n.color || (n.color = {});
    const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, s = n.scale || 4;
    return {
      width: i,
      scale: i ? 4 : s,
      margin: o,
      color: {
        dark: t(n.color.dark || "#000000ff"),
        light: t(n.color.light || "#ffffffff")
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {}
    };
  }, e.getScale = function(n, o) {
    return o.width && o.width >= n + o.margin * 2 ? o.width / (n + o.margin * 2) : o.scale;
  }, e.getImageWidth = function(n, o) {
    const i = e.getScale(n, o);
    return Math.floor((n + o.margin * 2) * i);
  }, e.qrToImageData = function(n, o, i) {
    const s = o.modules.size, a = o.modules.data, l = e.getScale(s, i), p = Math.floor((s + i.margin * 2) * l), y = i.margin * l, b = [i.color.light, i.color.dark];
    for (let S = 0; S < p; S++)
      for (let I = 0; I < p; I++) {
        let T = (S * p + I) * 4, E = i.color.light;
        if (S >= y && I >= y && S < p - y && I < p - y) {
          const N = Math.floor((S - y) / l), C = Math.floor((I - y) / l);
          E = b[a[N * s + C] ? 1 : 0];
        }
        n[T++] = E.r, n[T++] = E.g, n[T++] = E.b, n[T] = E.a;
      }
  };
})(io);
(function(e) {
  const t = io;
  function r(o, i, s) {
    o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  e.render = function(i, s, a) {
    let l = a, p = s;
    typeof l > "u" && (!s || !s.getContext) && (l = s, s = void 0), s || (p = n()), l = t.getOptions(l);
    const y = t.getImageWidth(i.modules.size, l), b = p.getContext("2d"), S = b.createImageData(y, y);
    return t.qrToImageData(S.data, i, l), r(b, p, y), b.putImageData(S, 0, 0), p;
  }, e.renderToDataURL = function(i, s, a) {
    let l = a;
    typeof l > "u" && (!s || !s.getContext) && (l = s, s = void 0), l || (l = {});
    const p = e.render(i, s, l), y = l.type || "image/png", b = l.rendererOpts || {};
    return p.toDataURL(y, b.quality);
  };
})(ia);
var oa = {};
const qc = io;
function Vo(e, t) {
  const r = e.a / 255, n = t + '="' + e.hex + '"';
  return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function di(e, t, r) {
  let n = e + t;
  return typeof r < "u" && (n += " " + r), n;
}
function Hc(e, t, r) {
  let n = "", o = 0, i = !1, s = 0;
  for (let a = 0; a < e.length; a++) {
    const l = Math.floor(a % t), p = Math.floor(a / t);
    !l && !i && (i = !0), e[a] ? (s++, a > 0 && l > 0 && e[a - 1] || (n += i ? di("M", l + r, 0.5 + p + r) : di("m", o, 0), o = 0, i = !1), l + 1 < t && e[a + 1] || (n += di("h", s), s = 0)) : o++;
  }
  return n;
}
oa.render = function(t, r, n) {
  const o = qc.getOptions(r), i = t.modules.size, s = t.modules.data, a = i + o.margin * 2, l = o.color.light.a ? "<path " + Vo(o.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "", p = "<path " + Vo(o.color.dark, "stroke") + ' d="' + Hc(s, i, o.margin) + '"/>', y = 'viewBox="0 0 ' + a + " " + a + '"', S = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + y + ' shape-rendering="crispEdges">' + l + p + `</svg>
`;
  return typeof n == "function" && n(null, S), S;
};
const Kc = ec, Ui = Vs, sa = ia, zc = oa;
function oo(e, t, r, n, o) {
  const i = [].slice.call(arguments, 1), s = i.length, a = typeof i[s - 1] == "function";
  if (!a && !Kc())
    throw new Error("Callback required as last argument");
  if (a) {
    if (s < 2)
      throw new Error("Too few arguments provided");
    s === 2 ? (o = r, r = t, t = n = void 0) : s === 3 && (t.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = r, r = t, t = void 0));
  } else {
    if (s < 1)
      throw new Error("Too few arguments provided");
    return s === 1 ? (r = t, t = n = void 0) : s === 2 && !t.getContext && (n = r, r = t, t = void 0), new Promise(function(l, p) {
      try {
        const y = Ui.create(r, n);
        l(e(y, t, n));
      } catch (y) {
        p(y);
      }
    });
  }
  try {
    const l = Ui.create(r, n);
    o(null, e(l, t, n));
  } catch (l) {
    o(l);
  }
}
lr.create = Ui.create;
lr.toCanvas = oo.bind(null, sa.render);
lr.toDataURL = oo.bind(null, sa.renderToDataURL);
lr.toString = oo.bind(null, function(e, t, r) {
  return zc.render(e, r);
});
function jc(e) {
  let t, r, n, o, i;
  return {
    c() {
      t = $("div"), r = $("canvas"), n = ct(), o = $("img"), D(
        r,
        "style",
        /*displayStyle*/
        e[3]
      ), D(
        r,
        "width",
        /*displayWidth*/
        e[1]
      ), D(
        r,
        "height",
        /*displayHeight*/
        e[2]
      ), D(
        r,
        "id",
        /*_canvasTagID*/
        e[9]
      ), D(
        r,
        "class",
        /*displayClass*/
        e[5]
      ), pi(o.src, i = "") || D(o, "src", i), D(
        o,
        "alt",
        /*altText*/
        e[4]
      ), Yt(o, "position", "absolute"), Yt(o, "top", "0"), Yt(o, "left", "0"), Yt(o, "opacity", "0");
    },
    m(s, a) {
      et(s, t, a), j(t, r), e[21](r), j(t, n), j(t, o);
    },
    p(s, a) {
      a & /*displayStyle*/
      8 && D(
        r,
        "style",
        /*displayStyle*/
        s[3]
      ), a & /*displayWidth*/
      2 && D(
        r,
        "width",
        /*displayWidth*/
        s[1]
      ), a & /*displayHeight*/
      4 && D(
        r,
        "height",
        /*displayHeight*/
        s[2]
      ), a & /*displayClass*/
      32 && D(
        r,
        "class",
        /*displayClass*/
        s[5]
      ), a & /*altText*/
      16 && D(
        o,
        "alt",
        /*altText*/
        s[4]
      );
    },
    d(s) {
      s && rt(t), e[21](null);
    }
  };
}
function Vc(e) {
  let t, r;
  return {
    c() {
      t = $("img"), pi(t.src, r = /*_generatedImgURL*/
      e[6]) || D(t, "src", r), D(
        t,
        "alt",
        /*altText*/
        e[4]
      ), D(
        t,
        "width",
        /*displayWidth*/
        e[1]
      ), D(
        t,
        "height",
        /*displayHeight*/
        e[2]
      ), D(
        t,
        "style",
        /*displayStyle*/
        e[3]
      ), D(
        t,
        "id",
        /*_imgTagID*/
        e[8]
      ), D(
        t,
        "class",
        /*displayClass*/
        e[5]
      );
    },
    m(n, o) {
      et(n, t, o);
    },
    p(n, o) {
      o & /*_generatedImgURL*/
      64 && !pi(t.src, r = /*_generatedImgURL*/
      n[6]) && D(t, "src", r), o & /*altText*/
      16 && D(
        t,
        "alt",
        /*altText*/
        n[4]
      ), o & /*displayWidth*/
      2 && D(
        t,
        "width",
        /*displayWidth*/
        n[1]
      ), o & /*displayHeight*/
      4 && D(
        t,
        "height",
        /*displayHeight*/
        n[2]
      ), o & /*displayStyle*/
      8 && D(
        t,
        "style",
        /*displayStyle*/
        n[3]
      ), o & /*displayClass*/
      32 && D(
        t,
        "class",
        /*displayClass*/
        n[5]
      );
    },
    d(n) {
      n && rt(t);
    }
  };
}
function Wc(e) {
  let t;
  function r(i, s) {
    if (
      /*displayType*/
      i[0] === "img"
    )
      return Vc;
    if (
      /*displayType*/
      i[0] === "canvas"
    )
      return jc;
  }
  let n = r(e), o = n && n(e);
  return {
    c() {
      o && o.c(), t = hn();
    },
    m(i, s) {
      o && o.m(i, s), et(i, t, s);
    },
    p(i, [s]) {
      n === (n = r(i)) && o ? o.p(i, s) : (o && o.d(1), o = n && n(i), o && (o.c(), o.m(t.parentNode, t)));
    },
    i: ft,
    o: ft,
    d(i) {
      o && o.d(i), i && rt(t);
    }
  };
}
function $c(e, t, r) {
  let { text: n = "Hello World" } = t, { generator: o = "node-qrcode" } = t, { tagType: i = "img" } = t, { displayType: s = "img" } = t, { displayWidth: a = null } = t, { displayHeight: l = null } = t, { displayStyle: p = null } = t, { altText: y = "QR Code" } = t, { displayID: b = null } = t, { displayClass: S = null } = t, { margin: I = 4 } = t, { scale: T = 4 } = t, { width: E = void 0 } = t, { errorCorrectionLevel: N = "M" } = t, { version: C = void 0 } = t, U = "", O, P = !1, L = b, q = b;
  function z() {
    return U;
  }
  Go(async () => {
    switch (i != "img" && (r(0, s = "canvas"), console.warn("please use the `displayType` instead of `tagType` for `<QRCodeImage>`")), s) {
      case "img":
        await W();
        break;
      case "canvas":
        await G();
        break;
    }
    r(20, P = !0);
  });
  async function W() {
    switch (o) {
      case "node-qrcode":
        await Y();
        break;
      default:
        await Y();
        break;
    }
  }
  async function Y() {
    r(6, U = await lr.toDataURL(n, {
      margin: I,
      scale: T,
      width: E,
      errorCorrectionLevel: N,
      version: C
    }));
  }
  async function G() {
    await lr.toCanvas(O, n, {
      margin: I,
      scale: T,
      width: E,
      errorCorrectionLevel: N,
      version: C
    });
  }
  function B(u) {
    $e[u ? "unshift" : "push"](() => {
      O = u, r(7, O);
    });
  }
  return e.$$set = (u) => {
    "text" in u && r(10, n = u.text), "generator" in u && r(11, o = u.generator), "tagType" in u && r(12, i = u.tagType), "displayType" in u && r(0, s = u.displayType), "displayWidth" in u && r(1, a = u.displayWidth), "displayHeight" in u && r(2, l = u.displayHeight), "displayStyle" in u && r(3, p = u.displayStyle), "altText" in u && r(4, y = u.altText), "displayID" in u && r(13, b = u.displayID), "displayClass" in u && r(5, S = u.displayClass), "margin" in u && r(14, I = u.margin), "scale" in u && r(15, T = u.scale), "width" in u && r(16, E = u.width), "errorCorrectionLevel" in u && r(17, N = u.errorCorrectionLevel), "version" in u && r(18, C = u.version);
  }, e.$$.update = () => {
    e.$$.dirty & /*_initialized, text, displayType*/
    1049601 && P && (r(10, n), r(20, P), r(0, s), W(), s === "canvas" && G());
  }, [
    s,
    a,
    l,
    p,
    y,
    S,
    U,
    O,
    L,
    q,
    n,
    o,
    i,
    b,
    I,
    T,
    E,
    N,
    C,
    z,
    P,
    B
  ];
}
class Zc extends Ge {
  constructor(t) {
    super(), De(this, t, $c, Wc, Be, {
      text: 10,
      generator: 11,
      tagType: 12,
      displayType: 0,
      displayWidth: 1,
      displayHeight: 2,
      displayStyle: 3,
      altText: 4,
      displayID: 13,
      displayClass: 5,
      margin: 14,
      scale: 15,
      width: 16,
      errorCorrectionLevel: 17,
      version: 18,
      getImageURL: 19
    });
  }
  get getImageURL() {
    return this.$$.ctx[19];
  }
}
function Jc(e) {
  let t, r, n, o;
  const i = [Xc, Yc], s = [];
  function a(l, p) {
    return (
      /*invoice*/
      l[3] ? 0 : 1
    );
  }
  return t = a(e), r = s[t] = i[t](e), {
    c() {
      r.c(), n = hn();
    },
    m(l, p) {
      s[t].m(l, p), et(l, n, p), o = !0;
    },
    p(l, p) {
      let y = t;
      t = a(l), t === y ? s[t].p(l, p) : (Le(), xt(s[y], 1, 1, () => {
        s[y] = null;
      }), Fe(), r = s[t], r ? r.p(l, p) : (r = s[t] = i[t](l), r.c()), gt(r, 1), r.m(n.parentNode, n));
    },
    i(l) {
      o || (gt(r), o = !0);
    },
    o(l) {
      xt(r), o = !1;
    },
    d(l) {
      s[t].d(l), l && rt(n);
    }
  };
}
function Gc(e) {
  let t, r, n, o, i;
  return {
    c() {
      t = $("p"), t.textContent = "Amount (satoshi)", r = ct(), n = $("input"), D(n, "type", "number"), D(n, "class", "mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-violet-400");
    },
    m(s, a) {
      et(s, t, a), et(s, r, a), et(s, n, a), Gr(
        n,
        /*topupAmount*/
        e[1]
      ), o || (i = ne(
        n,
        "input",
        /*input_input_handler*/
        e[8]
      ), o = !0);
    },
    p(s, a) {
      a & /*topupAmount*/
      2 && Jo(n.value) !== /*topupAmount*/
      s[1] && Gr(
        n,
        /*topupAmount*/
        s[1]
      );
    },
    i: ft,
    o: ft,
    d(s) {
      s && rt(t), s && rt(r), s && rt(n), o = !1, i();
    }
  };
}
function Yc(e) {
  let t;
  return {
    c() {
      t = Jt("loading invoice...");
    },
    m(r, n) {
      et(r, t, n);
    },
    p: ft,
    i: ft,
    o: ft,
    d(r) {
      r && rt(t);
    }
  };
}
function Xc(e) {
  let t, r, n, o, i, s, a, l, p, y, b, S, I, T;
  return i = new to({}), l = new Zc({
    props: {
      displayHeight: 200,
      displayWidth: 200,
      text: (
        /*invoice*/
        e[3]
      )
    }
  }), {
    c() {
      t = $("div"), r = $("div"), n = $("p"), n.textContent = "waiting for payment", o = ct(), Me(i.$$.fragment), s = ct(), a = $("a"), Me(l.$$.fragment), y = ct(), b = $("div"), b.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 "><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg>', D(r, "class", "flex gap-1 items-center"), D(a, "href", p = "lightning:" + /*invoice*/
      e[3]), D(b, "class", "p-1 rounded-lg bg-violet-200 w-6 hover:bg-violet-300 cursor-pointer"), D(t, "class", "flex flex-col gap-1 items-center");
    },
    m(E, N) {
      et(E, t, N), j(t, r), j(r, n), j(r, o), me(i, r, null), j(t, s), j(t, a), me(l, a, null), j(t, y), j(t, b), S = !0, I || (T = ne(
        b,
        "click",
        /*copyInvoice*/
        e[7]
      ), I = !0);
    },
    p(E, N) {
      const C = {};
      N & /*invoice*/
      8 && (C.text = /*invoice*/
      E[3]), l.$set(C), (!S || N & /*invoice*/
      8 && p !== (p = "lightning:" + /*invoice*/
      E[3])) && D(a, "href", p);
    },
    i(E) {
      S || (gt(i.$$.fragment, E), gt(l.$$.fragment, E), S = !0);
    },
    o(E) {
      xt(i.$$.fragment, E), xt(l.$$.fragment, E), S = !1;
    },
    d(E) {
      E && rt(t), fe(i), fe(l), I = !1, T();
    }
  };
}
function Qc(e) {
  let t, r, n;
  return {
    c() {
      t = $("div"), t.textContent = "abort", D(t, "class", "bg-gray-400 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-gray-800 cursor-pointer");
    },
    m(o, i) {
      et(o, t, i), r || (n = ne(
        t,
        "click",
        /*abort*/
        e[6]
      ), r = !0);
    },
    p: ft,
    d(o) {
      o && rt(t), r = !1, n();
    }
  };
}
function t0(e) {
  let t, r, n, o, i;
  return {
    c() {
      t = $("div"), t.textContent = "back", r = ct(), n = $("div"), n.textContent = "confirm", D(t, "class", "bg-gray-400 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-gray-800 cursor-pointer"), D(n, "class", "bg-violet-500 opacity-90 hover:opacity-100 flex-grow text-center font-bold py-2 text-violet-900 cursor-pointer");
    },
    m(s, a) {
      et(s, t, a), et(s, r, a), et(s, n, a), o || (i = [
        ne(
          t,
          "click",
          /*click_handler*/
          e[9]
        ),
        ne(
          n,
          "click",
          /*getInvoice*/
          e[5]
        )
      ], o = !0);
    },
    p: ft,
    d(s) {
      s && rt(t), s && rt(r), s && rt(n), o = !1, Pe(i);
    }
  };
}
function e0(e) {
  let t, r, n, o, i, s, a, l, p, y, b, S, I;
  const T = [Gc, Jc], E = [];
  function N(P, L) {
    return (
      /*step*/
      P[2] === 1 ? 0 : (
        /*step*/
        P[2] === 2 ? 1 : -1
      )
    );
  }
  ~(n = N(e)) && (o = E[n] = T[n](e));
  function C(P, L) {
    return (
      /*step*/
      P[2] === 1 ? t0 : Qc
    );
  }
  let U = C(e), O = U(e);
  return {
    c() {
      t = $("div"), r = $("div"), o && o.c(), i = ct(), s = $("div"), a = $("p"), a.textContent = "Mint:", l = ct(), p = $("p"), y = Jt(
        /*$mint*/
        e[4]
      ), b = ct(), S = $("div"), O.c(), D(r, "class", "flex justify-center gap-3 text-violet-600 h-64 items-center"), D(a, "class", "font-bold"), D(s, "class", "text-xs flex gap-1 w-full items-center justify-center"), D(t, "class", "bg-violet-100 flex flex-col text-violet-400 p-2"), D(S, "class", "flex w-full flex-grow");
    },
    m(P, L) {
      et(P, t, L), j(t, r), ~n && E[n].m(r, null), j(t, i), j(t, s), j(s, a), j(s, l), j(s, p), j(p, y), et(P, b, L), et(P, S, L), O.m(S, null), I = !0;
    },
    p(P, [L]) {
      let q = n;
      n = N(P), n === q ? ~n && E[n].p(P, L) : (o && (Le(), xt(E[q], 1, 1, () => {
        E[q] = null;
      }), Fe()), ~n ? (o = E[n], o ? o.p(P, L) : (o = E[n] = T[n](P), o.c()), gt(o, 1), o.m(r, null)) : o = null), (!I || L & /*$mint*/
      16) && te(
        y,
        /*$mint*/
        P[4]
      ), U === (U = C(P)) && O ? O.p(P, L) : (O.d(1), O = U(P), O && (O.c(), O.m(S, null)));
    },
    i(P) {
      I || (gt(o), I = !0);
    },
    o(P) {
      xt(o), I = !1;
    },
    d(P) {
      P && rt(t), ~n && E[n].d(), P && rt(b), P && rt(S), O.d();
    }
  };
}
function r0(e, t, r) {
  let n;
  We(e, sr, (E) => r(4, n = E));
  let { nav: o } = t, i = 100, s = 1, a = "", l;
  const p = async () => {
    const E = await fr();
    try {
      r(2, s = 2);
      const { hash: N, pr: C, detail: U } = await E.requestMint(i);
      l = setInterval(
        () => {
          y(N);
        },
        4e3
      ), r(3, a = C);
    } catch {
    }
  }, y = async (E) => {
    try {
      const N = await fr(), { proofs: C, newKeys: U } = await N.requestTokens(i, E);
      U && Cr(U), Ne.update((O) => [...C, ...O]), xe("success", `topped up ${C.reduce((O, P) => O + P.amount, 0)} sat`), b();
    } catch (N) {
      console.error(N);
    }
  }, b = () => {
    r(0, o = "base"), r(3, a = ""), r(1, i = 100), r(2, s = 1), l && (clearInterval(l), l = void 0);
  }, S = () => {
    Nl(a), xe("info", "invoice copied to clipboard");
  };
  function I() {
    i = Jo(this.value), r(1, i);
  }
  const T = () => r(0, o = "base");
  return e.$$set = (E) => {
    "nav" in E && r(0, o = E.nav);
  }, [
    o,
    i,
    s,
    a,
    n,
    p,
    b,
    S,
    I,
    T
  ];
}
class n0 extends Ge {
  constructor(t) {
    super(), De(this, t, r0, e0, Be, { nav: 0 });
  }
}
function Wo(e) {
  let t, r, n, o, i, s, a, l, p, y, b;
  i = new tc({});
  const S = [s0, o0, i0], I = [];
  function T(E, N) {
    return (
      /*nav*/
      E[2] === "base" ? 0 : (
        /*nav*/
        E[2] === "topup" ? 1 : (
          /*nav*/
          E[2] === "cashout" ? 2 : -1
        )
      )
    );
  }
  return ~(a = T(e)) && (l = I[a] = S[a](e)), {
    c() {
      t = $("div"), r = ct(), n = $("div"), o = $("div"), Me(i.$$.fragment), s = ct(), l && l.c(), D(t, "class", "fixed inset-0 h-full w-full z-10"), D(n, "class", "absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 w-64");
    },
    m(E, N) {
      et(E, t, N), et(E, r, N), et(E, n, N), j(n, o), me(i, o, null), j(n, s), ~a && I[a].m(n, null), p = !0, y || (b = ne(
        t,
        "click",
        /*click_handler_1*/
        e[7]
      ), y = !0);
    },
    p(E, N) {
      let C = a;
      a = T(E), a === C ? ~a && I[a].p(E, N) : (l && (Le(), xt(I[C], 1, 1, () => {
        I[C] = null;
      }), Fe()), ~a ? (l = I[a], l ? l.p(E, N) : (l = I[a] = S[a](E), l.c()), gt(l, 1), l.m(n, null)) : l = null);
    },
    i(E) {
      p || (gt(i.$$.fragment, E), gt(l), p = !0);
    },
    o(E) {
      xt(i.$$.fragment, E), xt(l), p = !1;
    },
    d(E) {
      E && rt(t), E && rt(r), E && rt(n), fe(i), ~a && I[a].d(), y = !1, b();
    }
  };
}
function i0(e) {
  let t, r, n;
  function o(s) {
    e[10](s);
  }
  let i = { amount: (
    /*amount*/
    e[3]
  ) };
  return (
    /*nav*/
    e[2] !== void 0 && (i.nav = /*nav*/
    e[2]), t = new jl({ props: i }), $e.push(() => Li(t, "nav", o)), {
      c() {
        Me(t.$$.fragment);
      },
      m(s, a) {
        me(t, s, a), n = !0;
      },
      p(s, a) {
        const l = {};
        a & /*amount*/
        8 && (l.amount = /*amount*/
        s[3]), !r && a & /*nav*/
        4 && (r = !0, l.nav = /*nav*/
        s[2], Pi(() => r = !1)), t.$set(l);
      },
      i(s) {
        n || (gt(t.$$.fragment, s), n = !0);
      },
      o(s) {
        xt(t.$$.fragment, s), n = !1;
      },
      d(s) {
        fe(t, s);
      }
    }
  );
}
function o0(e) {
  let t, r, n;
  function o(s) {
    e[9](s);
  }
  let i = {};
  return (
    /*nav*/
    e[2] !== void 0 && (i.nav = /*nav*/
    e[2]), t = new n0({ props: i }), $e.push(() => Li(t, "nav", o)), {
      c() {
        Me(t.$$.fragment);
      },
      m(s, a) {
        me(t, s, a), n = !0;
      },
      p(s, a) {
        const l = {};
        !r && a & /*nav*/
        4 && (r = !0, l.nav = /*nav*/
        s[2], Pi(() => r = !1)), t.$set(l);
      },
      i(s) {
        n || (gt(t.$$.fragment, s), n = !0);
      },
      o(s) {
        xt(t.$$.fragment, s), n = !1;
      },
      d(s) {
        fe(t, s);
      }
    }
  );
}
function s0(e) {
  let t, r, n;
  function o(s) {
    e[8](s);
  }
  let i = { amount: (
    /*amount*/
    e[3]
  ) };
  return (
    /*nav*/
    e[2] !== void 0 && (i.nav = /*nav*/
    e[2]), t = new Ea({ props: i }), $e.push(() => Li(t, "nav", o)), {
      c() {
        Me(t.$$.fragment);
      },
      m(s, a) {
        me(t, s, a), n = !0;
      },
      p(s, a) {
        const l = {};
        a & /*amount*/
        8 && (l.amount = /*amount*/
        s[3]), !r && a & /*nav*/
        4 && (r = !0, l.nav = /*nav*/
        s[2], Pi(() => r = !1)), t.$set(l);
      },
      i(s) {
        n || (gt(t.$$.fragment, s), n = !0);
      },
      o(s) {
        xt(t.$$.fragment, s), n = !1;
      },
      d(s) {
        fe(t, s);
      }
    }
  );
}
function a0(e) {
  let t, r, n, o, i, s, a, l = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  }).format(
    /*amount*/
    e[3]
  ) + "", p, y, b, S, I, T, E, N, C, U, O, P, L = (
    /*dropdownOpen*/
    e[1] && Wo(e)
  );
  return {
    c() {
      t = $("div"), r = $("button"), n = $("div"), o = ee("svg"), i = ee("path"), s = ct(), a = $("p"), p = Jt(l), y = ct(), b = ee("svg"), S = ee("g"), I = ee("g"), T = ee("path"), E = ee("circle"), N = ee("circle"), C = ct(), L && L.c(), this.c = ft, D(i, "stroke-linecap", "round"), D(i, "stroke-linejoin", "round"), D(i, "d", "M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"), D(o, "xmlns", "http://www.w3.org/2000/svg"), D(o, "fill", "none"), D(o, "viewBox", "0 0 24 24"), D(o, "stroke-width", "1.5"), D(o, "stroke", "currentColor"), D(o, "class", "w-6 h-6 text-violet-500"), D(T, "id", "path846"), Yt(T, "stroke-width", "1.76621"), Yt(T, "stroke-dasharray", "14.1297, 14.1297"), D(T, "d", "M 35.068359,563.06055 A 377.95276,377.95276 0 0 0 412.63086,935.55273 377.95276,377.95276 0 0 0 790.19336,563.06055 H 488.1875 a 75.59055,75.59055 0 0 1 0.0332,0.21484 75.59055,75.59055 0 0 1 -75.58984,75.5918 75.59055,75.59055 0 0 1 -75.58984,-75.5918 75.59055,75.59055 0 0 1 0.0332,-0.21484 z"), D(T, "transform", "scale(0.26458333)"), Yt(E, "stroke-width", "0.884323"), Yt(E, "stroke-dasharray", "7.07458, 7.07458"), D(E, "id", "path870-8"), D(E, "cx", "49.175293"), D(E, "cy", "149.03348"), D(E, "r", "40"), Yt(N, "stroke-width", "0.884323"), Yt(N, "stroke-dasharray", "7.07458, 7.07458"), D(N, "id", "path870-8-3"), D(N, "cx", "169.17529"), D(N, "cy", "149.03348"), D(N, "r", "40"), D(I, "id", "g1910"), D(I, "transform", "rotate(90,109.17529,178.28257)"), D(S, "id", "layer1"), D(S, "transform", "translate(-39.926203,-78.282573)"), D(b, "class", "text-violet-600 h-3 -rotate-12"), D(b, "fill", "currentColor"), D(b, "viewBox", "0 0 138.49818 200"), D(b, "version", "1.1"), D(b, "id", "svg5"), D(b, "xmlns", "http://www.w3.org/2000/svg"), D(a, "class", "text-violet-500 flex gap-1 items-baseline"), D(n, "class", "flex gap-2 items-center"), D(r, "class", "relative z-10 block rounded-md p-2 focus:outline-none bg-violet-300 opacity-90 hover:opacity-100"), D(t, "class", "relative right-2 top-2"), D(t, "id", "cashu-base-div");
    },
    m(q, z) {
      et(q, t, z), j(t, r), j(r, n), j(n, o), j(o, i), j(n, s), j(n, a), j(a, p), j(a, y), j(a, b), j(b, S), j(S, I), j(I, T), j(I, E), j(I, N), j(t, C), L && L.m(t, null), e[11](t), U = !0, O || (P = ne(
        r,
        "click",
        /*click_handler*/
        e[6]
      ), O = !0);
    },
    p(q, [z]) {
      (!U || z & /*amount*/
      8) && l !== (l = Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0
      }).format(
        /*amount*/
        q[3]
      ) + "") && te(p, l), /*dropdownOpen*/
      q[1] ? L ? (L.p(q, z), z & /*dropdownOpen*/
      2 && gt(L, 1)) : (L = Wo(q), L.c(), gt(L, 1), L.m(t, null)) : L && (Le(), xt(L, 1, 1, () => {
        L = null;
      }), Fe());
    },
    i(q) {
      U || (gt(L), U = !0);
    },
    o(q) {
      xt(L), U = !1;
    },
    d(q) {
      q && rt(t), L && L.d(), e[11](null), O = !1, P();
    }
  };
}
function u0(e, t, r) {
  let n, o, i;
  We(e, Ne, (C) => r(5, o = C)), We(e, sr, (C) => r(12, i = C));
  let { minturl: s } = t, a;
  const l = async (C) => {
    try {
      const U = await fr(), { returnChange: O, send: P, newKeys: L } = await U.send(C.detail.amount, o);
      L && Cr(L), Ne.set([...O]);
      const q = Is({ token: [{ mint: i, proofs: P }] }), z = new CustomEvent(
        "return-nut",
        {
          bubbles: !0,
          composed: !0,
          detail: { token: q }
        }
      );
      a.dispatchEvent(z);
    } catch (U) {
      const O = new CustomEvent(
        "return-nut",
        {
          bubbles: !0,
          composed: !0,
          detail: { error: U }
        }
      );
      a.dispatchEvent(O);
    }
  };
  Go(() => {
    s && sr.set(s), console.log(a), a.addEventListener("ask-for-nut", l, !1);
  });
  let p = !1, y = "base";
  const b = () => r(1, p = !p), S = () => r(1, p = !1);
  function I(C) {
    y = C, r(2, y);
  }
  function T(C) {
    y = C, r(2, y);
  }
  function E(C) {
    y = C, r(2, y);
  }
  function N(C) {
    $e[C ? "unshift" : "push"](() => {
      a = C, r(0, a);
    });
  }
  return e.$$set = (C) => {
    "minturl" in C && r(4, s = C.minturl);
  }, e.$$.update = () => {
    e.$$.dirty & /*$tokens*/
    32 && r(3, n = o.reduce((C, U) => C + U.amount, 0));
  }, [
    a,
    p,
    y,
    n,
    s,
    o,
    b,
    S,
    I,
    T,
    E,
    N
  ];
}
class f0 extends Yo {
  constructor(t) {
    super(), this.shadowRoot.innerHTML = '<style>@import "cashu-wallet.css";</style>', De(
      this,
      {
        target: this.shadowRoot,
        props: fa(this.attributes),
        customElement: !0
      },
      u0,
      a0,
      Be,
      { minturl: 4 },
      null
    ), t && (t.target && et(t.target, this, t.anchor), t.props && (this.$set(t.props), Yr()));
  }
  static get observedAttributes() {
    return ["minturl"];
  }
  get minturl() {
    return this.$$.ctx[4];
  }
  set minturl(t) {
    this.$$set({ minturl: t }), Yr();
  }
}
customElements.define("proxnut-wallet", f0);
const h0 = async (e, t, r) => {
  const n = await fr(), { returnChange: o, send: i, newKeys: s } = await n.send(e, Kr(Ne));
  return s && Cr(s), Ne.set(o), r && r.headers && (r.headers = { ...r.headers, "X-Cashu": Is({ token: [{ proofs: i, mint: n.mint.mintUrl }] }) }), await fetch(t, r);
};
export {
  f0 as Wallet,
  h0 as cashu_fetch
};
