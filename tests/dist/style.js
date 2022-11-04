(() => {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $29608339c28b69dd$var$t = window, $29608339c28b69dd$export$b4d10f6001c083c2 = $29608339c28b69dd$var$t.ShadowRoot && (void 0 === $29608339c28b69dd$var$t.ShadyCSS || $29608339c28b69dd$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $29608339c28b69dd$var$s = Symbol(), $29608339c28b69dd$var$n = new WeakMap;
class $29608339c28b69dd$export$505d1e8739bad805 {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $29608339c28b69dd$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($29608339c28b69dd$export$b4d10f6001c083c2 && void 0 === t) {
            const e1 = void 0 !== s && 1 === s.length;
            e1 && (t = $29608339c28b69dd$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e1 && $29608339c28b69dd$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $29608339c28b69dd$export$8d80f9cac07cdb3 = (t)=>new $29608339c28b69dd$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $29608339c28b69dd$var$s), $29608339c28b69dd$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $29608339c28b69dd$export$505d1e8739bad805(n, t, $29608339c28b69dd$var$s);
}, $29608339c28b69dd$export$2ca4a66ec4cecb90 = (s, n)=>{
    $29608339c28b69dd$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $29608339c28b69dd$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $29608339c28b69dd$export$ee69dfd951e24778 = $29608339c28b69dd$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $29608339c28b69dd$export$8d80f9cac07cdb3(e);
    })(t) : t;



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $081a8a4225dd3406$var$s;
const $081a8a4225dd3406$var$e = window, $081a8a4225dd3406$var$r = $081a8a4225dd3406$var$e.trustedTypes, $081a8a4225dd3406$var$h = $081a8a4225dd3406$var$r ? $081a8a4225dd3406$var$r.emptyScript : "", $081a8a4225dd3406$var$o = $081a8a4225dd3406$var$e.reactiveElementPolyfillSupport, $081a8a4225dd3406$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $081a8a4225dd3406$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t1) {
                    s = null;
                }
        }
        return s;
    }
}, $081a8a4225dd3406$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $081a8a4225dd3406$var$l = {
    attribute: !0,
    type: String,
    converter: $081a8a4225dd3406$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $081a8a4225dd3406$export$53a6892c50694894
};
class $081a8a4225dd3406$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $081a8a4225dd3406$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $081a8a4225dd3406$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t1 = this.properties, i = [
                ...Object.getOwnPropertyNames(t1),
                ...Object.getOwnPropertySymbols(t1)
            ];
            for (const s of i)this.createProperty(s, t1[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i1 of e)s.unshift((0, $29608339c28b69dd$export$ee69dfd951e24778)(i1));
        } else void 0 !== i && s.push((0, $29608339c28b69dd$export$ee69dfd951e24778)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $29608339c28b69dd$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $081a8a4225dd3406$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $081a8a4225dd3406$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t1 = e.getPropertyOptions(r), h = "function" == typeof t1.converter ? {
                fromAttribute: t1.converter
            } : void 0 !== (null === (s = t1.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t1.converter : $081a8a4225dd3406$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t1.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $081a8a4225dd3406$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t1 = this.scheduleUpdate();
        return null != t1 && await t1, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t1) {
            throw i = !1, this._$Ek(), t1;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$081a8a4225dd3406$export$c7c07a37856565d.finalized = !0, $081a8a4225dd3406$export$c7c07a37856565d.elementProperties = new Map, $081a8a4225dd3406$export$c7c07a37856565d.elementStyles = [], $081a8a4225dd3406$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $081a8a4225dd3406$var$o || $081a8a4225dd3406$var$o({
    ReactiveElement: $081a8a4225dd3406$export$c7c07a37856565d
}), (null !== ($081a8a4225dd3406$var$s = $081a8a4225dd3406$var$e.reactiveElementVersions) && void 0 !== $081a8a4225dd3406$var$s ? $081a8a4225dd3406$var$s : $081a8a4225dd3406$var$e.reactiveElementVersions = []).push("1.4.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $ee1d87dd93350279$var$t;
const $ee1d87dd93350279$var$i = window, $ee1d87dd93350279$var$s = $ee1d87dd93350279$var$i.trustedTypes, $ee1d87dd93350279$var$e = $ee1d87dd93350279$var$s ? $ee1d87dd93350279$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $ee1d87dd93350279$var$o = `lit$${(Math.random() + "").slice(9)}$`, $ee1d87dd93350279$var$n = "?" + $ee1d87dd93350279$var$o, $ee1d87dd93350279$var$l = `<${$ee1d87dd93350279$var$n}>`, $ee1d87dd93350279$var$h = document, $ee1d87dd93350279$var$r = (t = "")=>$ee1d87dd93350279$var$h.createComment(t), $ee1d87dd93350279$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $ee1d87dd93350279$var$u = Array.isArray, $ee1d87dd93350279$var$c = (t)=>$ee1d87dd93350279$var$u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $ee1d87dd93350279$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $ee1d87dd93350279$var$a = /-->/g, $ee1d87dd93350279$var$f = />/g, $ee1d87dd93350279$var$_ = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), $ee1d87dd93350279$var$m = /'/g, $ee1d87dd93350279$var$p = /"/g, $ee1d87dd93350279$var$$ = /^(?:script|style|textarea|title)$/i, $ee1d87dd93350279$var$g = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $ee1d87dd93350279$export$c0bb0b647f701bb5 = $ee1d87dd93350279$var$g(1), $ee1d87dd93350279$export$7ed1367e7fa1ad68 = $ee1d87dd93350279$var$g(2), $ee1d87dd93350279$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $ee1d87dd93350279$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $ee1d87dd93350279$var$T = new WeakMap, $ee1d87dd93350279$var$A = $ee1d87dd93350279$var$h.createTreeWalker($ee1d87dd93350279$var$h, 129, null, !1), $ee1d87dd93350279$var$E = (t, i)=>{
    const s = t.length - 1, n = [];
    let h, r = 2 === i ? "<svg>" : "", d = $ee1d87dd93350279$var$v;
    for(let i1 = 0; i1 < s; i1++){
        const s1 = t[i1];
        let e1, u, c = -1, g = 0;
        for(; g < s1.length && (d.lastIndex = g, u = d.exec(s1), null !== u);)g = d.lastIndex, d === $ee1d87dd93350279$var$v ? "!--" === u[1] ? d = $ee1d87dd93350279$var$a : void 0 !== u[1] ? d = $ee1d87dd93350279$var$f : void 0 !== u[2] ? ($ee1d87dd93350279$var$$.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = $ee1d87dd93350279$var$_) : void 0 !== u[3] && (d = $ee1d87dd93350279$var$_) : d === $ee1d87dd93350279$var$_ ? ">" === u[0] ? (d = null != h ? h : $ee1d87dd93350279$var$v, c = -1) : void 0 === u[1] ? c = -2 : (c = d.lastIndex - u[2].length, e1 = u[1], d = void 0 === u[3] ? $ee1d87dd93350279$var$_ : '"' === u[3] ? $ee1d87dd93350279$var$p : $ee1d87dd93350279$var$m) : d === $ee1d87dd93350279$var$p || d === $ee1d87dd93350279$var$m ? d = $ee1d87dd93350279$var$_ : d === $ee1d87dd93350279$var$a || d === $ee1d87dd93350279$var$f ? d = $ee1d87dd93350279$var$v : (d = $ee1d87dd93350279$var$_, h = void 0);
        const y = d === $ee1d87dd93350279$var$_ && t[i1 + 1].startsWith("/>") ? " " : "";
        r += d === $ee1d87dd93350279$var$v ? s1 + $ee1d87dd93350279$var$l : c >= 0 ? (n.push(e1), s1.slice(0, c) + "$lit$" + s1.slice(c) + $ee1d87dd93350279$var$o + y) : s1 + $ee1d87dd93350279$var$o + (-2 === c ? (n.push(void 0), i1) : y);
    }
    const u1 = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== $ee1d87dd93350279$var$e ? $ee1d87dd93350279$var$e.createHTML(u1) : u1,
        n
    ];
};
class $ee1d87dd93350279$var$C {
    constructor({ strings: t , _$litType$: i  }, e){
        let l;
        this.parts = [];
        let h = 0, d = 0;
        const u = t.length - 1, c = this.parts, [v, a] = $ee1d87dd93350279$var$E(t, i);
        if (this.el = $ee1d87dd93350279$var$C.createElement(v, e), $ee1d87dd93350279$var$A.currentNode = this.el.content, 2 === i) {
            const t1 = this.el.content, i1 = t1.firstChild;
            i1.remove(), t1.append(...i1.childNodes);
        }
        for(; null !== (l = $ee1d87dd93350279$var$A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t2 = [];
                    for (const i2 of l.getAttributeNames())if (i2.endsWith("$lit$") || i2.startsWith($ee1d87dd93350279$var$o)) {
                        const s1 = a[d++];
                        if (t2.push(i2), void 0 !== s1) {
                            const t3 = l.getAttribute(s1.toLowerCase() + "$lit$").split($ee1d87dd93350279$var$o), i3 = /([.?@])?(.*)/.exec(s1);
                            c.push({
                                type: 1,
                                index: h,
                                name: i3[2],
                                strings: t3,
                                ctor: "." === i3[1] ? $ee1d87dd93350279$var$M : "?" === i3[1] ? $ee1d87dd93350279$var$k : "@" === i3[1] ? $ee1d87dd93350279$var$H : $ee1d87dd93350279$var$S
                            });
                        } else c.push({
                            type: 6,
                            index: h
                        });
                    }
                    for (const i4 of t2)l.removeAttribute(i4);
                }
                if ($ee1d87dd93350279$var$$.test(l.tagName)) {
                    const t4 = l.textContent.split($ee1d87dd93350279$var$o), i5 = t4.length - 1;
                    if (i5 > 0) {
                        l.textContent = $ee1d87dd93350279$var$s ? $ee1d87dd93350279$var$s.emptyScript : "";
                        for(let s2 = 0; s2 < i5; s2++)l.append(t4[s2], $ee1d87dd93350279$var$r()), $ee1d87dd93350279$var$A.nextNode(), c.push({
                            type: 2,
                            index: ++h
                        });
                        l.append(t4[i5], $ee1d87dd93350279$var$r());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === $ee1d87dd93350279$var$n) c.push({
                    type: 2,
                    index: h
                });
                else {
                    let t5 = -1;
                    for(; -1 !== (t5 = l.data.indexOf($ee1d87dd93350279$var$o, t5 + 1));)c.push({
                        type: 7,
                        index: h
                    }), t5 += $ee1d87dd93350279$var$o.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = $ee1d87dd93350279$var$h.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $ee1d87dd93350279$var$P(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $ee1d87dd93350279$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $ee1d87dd93350279$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $ee1d87dd93350279$var$P(t, r._$AS(t, i.values), r, e)), i;
}
class $ee1d87dd93350279$var$V {
    constructor(t, i){
        this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $ee1d87dd93350279$var$h).importNode(s, !0);
        $ee1d87dd93350279$var$A.currentNode = o;
        let n = $ee1d87dd93350279$var$A.nextNode(), l = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i1;
                2 === d.type ? i1 = new $ee1d87dd93350279$var$N(n, n.nextSibling, this, t) : 1 === d.type ? i1 = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i1 = new $ee1d87dd93350279$var$I(n, this, t)), this.u.push(i1), d = e[++r];
            }
            l !== (null == d ? void 0 : d.index) && (n = $ee1d87dd93350279$var$A.nextNode(), l++);
        }
        return o;
    }
    p(t) {
        let i = 0;
        for (const s of this.u)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $ee1d87dd93350279$var$N {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $ee1d87dd93350279$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cm = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cm;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $ee1d87dd93350279$var$P(this, t, i), $ee1d87dd93350279$var$d(t) ? t === $ee1d87dd93350279$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $ee1d87dd93350279$export$45b790e32b2810ee && this._$AR(), this._$AH = $ee1d87dd93350279$export$45b790e32b2810ee) : t !== this._$AH && t !== $ee1d87dd93350279$export$9c068ae9cc5db4e8 && this.g(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $ee1d87dd93350279$var$c(t) ? this.k(t) : this.g(t);
    }
    O(t, i = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, i);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    g(t) {
        this._$AH !== $ee1d87dd93350279$export$45b790e32b2810ee && $ee1d87dd93350279$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.T($ee1d87dd93350279$var$h.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $ee1d87dd93350279$var$C.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.p(s);
        else {
            const t1 = new $ee1d87dd93350279$var$V(o, this), i1 = t1.v(this.options);
            t1.p(s), this.T(i1), this._$AH = t1;
        }
    }
    _$AC(t) {
        let i = $ee1d87dd93350279$var$T.get(t.strings);
        return void 0 === i && $ee1d87dd93350279$var$T.set(t.strings, i = new $ee1d87dd93350279$var$C(t)), i;
    }
    k(t) {
        $ee1d87dd93350279$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $ee1d87dd93350279$var$N(this.O($ee1d87dd93350279$var$r()), this.O($ee1d87dd93350279$var$r()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i1 = t.nextSibling;
            t.remove(), t = i1;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cm = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $ee1d87dd93350279$var$S {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $ee1d87dd93350279$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $ee1d87dd93350279$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $ee1d87dd93350279$var$P(this, t, i, 0), n = !$ee1d87dd93350279$var$d(t) || t !== this._$AH && t !== $ee1d87dd93350279$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e1 = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $ee1d87dd93350279$var$P(this, e1[s + l], i, l), h === $ee1d87dd93350279$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$ee1d87dd93350279$var$d(h) || h !== this._$AH[l]), h === $ee1d87dd93350279$export$45b790e32b2810ee ? t = $ee1d87dd93350279$export$45b790e32b2810ee : t !== $ee1d87dd93350279$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $ee1d87dd93350279$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $ee1d87dd93350279$var$M extends $ee1d87dd93350279$var$S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $ee1d87dd93350279$export$45b790e32b2810ee ? void 0 : t;
    }
}
const $ee1d87dd93350279$var$R = $ee1d87dd93350279$var$s ? $ee1d87dd93350279$var$s.emptyScript : "";
class $ee1d87dd93350279$var$k extends $ee1d87dd93350279$var$S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== $ee1d87dd93350279$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $ee1d87dd93350279$var$R) : this.element.removeAttribute(this.name);
    }
}
class $ee1d87dd93350279$var$H extends $ee1d87dd93350279$var$S {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $ee1d87dd93350279$var$P(this, t, i, 0)) && void 0 !== s ? s : $ee1d87dd93350279$export$45b790e32b2810ee) === $ee1d87dd93350279$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $ee1d87dd93350279$export$45b790e32b2810ee && e !== $ee1d87dd93350279$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $ee1d87dd93350279$export$45b790e32b2810ee && (e === $ee1d87dd93350279$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $ee1d87dd93350279$var$I {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $ee1d87dd93350279$var$P(this, t);
    }
}
const $ee1d87dd93350279$export$8613d1ca9052b22e = {
    P: "$lit$",
    A: $ee1d87dd93350279$var$o,
    M: $ee1d87dd93350279$var$n,
    C: 1,
    L: $ee1d87dd93350279$var$E,
    R: $ee1d87dd93350279$var$V,
    D: $ee1d87dd93350279$var$c,
    V: $ee1d87dd93350279$var$P,
    I: $ee1d87dd93350279$var$N,
    H: $ee1d87dd93350279$var$S,
    N: $ee1d87dd93350279$var$k,
    U: $ee1d87dd93350279$var$H,
    B: $ee1d87dd93350279$var$M,
    F: $ee1d87dd93350279$var$I
}, $ee1d87dd93350279$var$z = $ee1d87dd93350279$var$i.litHtmlPolyfillSupport;
null == $ee1d87dd93350279$var$z || $ee1d87dd93350279$var$z($ee1d87dd93350279$var$C, $ee1d87dd93350279$var$N), (null !== ($ee1d87dd93350279$var$t = $ee1d87dd93350279$var$i.litHtmlVersions) && void 0 !== $ee1d87dd93350279$var$t ? $ee1d87dd93350279$var$t : $ee1d87dd93350279$var$i.litHtmlVersions = []).push("2.4.0");
const $ee1d87dd93350279$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t1 = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $ee1d87dd93350279$var$N(i.insertBefore($ee1d87dd93350279$var$r(), t1), t1, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};






/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $dfa2c146d32f28d4$var$l, $dfa2c146d32f28d4$var$o;
const $dfa2c146d32f28d4$export$8bf27daf9e8907c9 = (0, $081a8a4225dd3406$export$c7c07a37856565d);
class $dfa2c146d32f28d4$export$3f2f9f5909897157 extends (0, $081a8a4225dd3406$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $ee1d87dd93350279$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, $ee1d87dd93350279$export$9c068ae9cc5db4e8;
    }
}
$dfa2c146d32f28d4$export$3f2f9f5909897157.finalized = !0, $dfa2c146d32f28d4$export$3f2f9f5909897157._$litElement$ = !0, null === ($dfa2c146d32f28d4$var$l = globalThis.litElementHydrateSupport) || void 0 === $dfa2c146d32f28d4$var$l || $dfa2c146d32f28d4$var$l.call(globalThis, {
    LitElement: $dfa2c146d32f28d4$export$3f2f9f5909897157
});
const $dfa2c146d32f28d4$var$n = globalThis.litElementPolyfillSupport;
null == $dfa2c146d32f28d4$var$n || $dfa2c146d32f28d4$var$n({
    LitElement: $dfa2c146d32f28d4$export$3f2f9f5909897157
});
const $dfa2c146d32f28d4$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($dfa2c146d32f28d4$var$o = globalThis.litElementVersions) && void 0 !== $dfa2c146d32f28d4$var$o ? $dfa2c146d32f28d4$var$o : globalThis.litElementVersions = []).push("3.2.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a119c0b3f4ac2ab3$export$6acf61af03e62db = !1;




var $dd1c7da02266a77f$export$2e2bcd8739ae039 = (0, $29608339c28b69dd$export$dbf350e5966cf602)`button {
    background: purple;
    color: cyan;
}

input {
    background: white;
}`;

})();
//# sourceMappingURL=style.js.map
