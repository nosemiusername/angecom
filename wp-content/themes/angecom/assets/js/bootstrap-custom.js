// Bootstrap 
function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
        mejs.YouTubeApi.flashReady(a)
    }! function(a, b) {
        function c(a) {
            var b = a.length,
                c = fb.type(a);
            return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }

        function d(a) {
            var b = ob[a] = {};
            return fb.each(a.match(hb) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function e() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = fb.expando + Math.random()
        }

        function f(a, c, d) {
            var e;
            if (d === b && 1 === a.nodeType)
                if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d
                    } catch (f) {}
                    pb.set(a, c, d)
                } else d = b;
            return d
        }

        function g() {
            return !0
        }

        function h() {
            return !1
        }

        function i() {
            try {
                return T.activeElement
            } catch (a) {}
        }

        function j(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function k(a, b, c) {
            if (fb.isFunction(b)) return fb.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return fb.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (Cb.test(b)) return fb.filter(b, a, c);
                b = fb.filter(b, a)
            }
            return fb.grep(a, function(a) {
                return bb.call(b, a) >= 0 !== c
            })
        }

        function l(a, b) {
            return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function m(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function n(a) {
            var b = Nb.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function o(a, b) {
            for (var c = a.length, d = 0; c > d; d++) qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"))
        }

        function p(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) fb.event.add(b, e, j[e][c])
                }
                pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i))
            }
        }

        function q(a, c) {
            var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
            return c === b || c && fb.nodeName(a, c) ? fb.merge([a], d) : d
        }

        function r(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }

        function s(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--;)
                if (b = _b[e] + c, b in a) return b;
            return d
        }

        function t(a, b) {
            return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a)
        }

        function u(b) {
            return a.getComputedStyle(b, null)
        }

        function v(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function w(a, b, c) {
            var d = Ub.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function x(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fb.css(a, c + $b[f], !0, e)), d ? ("content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + $b[f], !0, e), "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
            return g
        }

        function y(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = u(a),
                g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e)) return e;
                d = g && (fb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function z(a) {
            var b = T,
                c = Xb[a];
            return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c
        }

        function A(a, b) {
            var c = fb(b.createElement(a)).appendTo(b.body),
                d = fb.css(c[0], "display");
            return c.remove(), d
        }

        function B(a, b, c, d) {
            var e;
            if (fb.isArray(b)) fb.each(b, function(b, e) {
                c || bc.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== fb.type(b)) d(a, b);
            else
                for (e in b) B(a + "[" + e + "]", b[e], c, d)
        }

        function C(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(hb) || [];
                if (fb.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function D(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, fb.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === sc;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function E(a, c) {
            var d, e, f = fb.ajaxSettings.flatOptions || {};
            for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
            return e && fb.extend(!0, a, e), a
        }

        function F(a, c, d) {
            for (var e, f, g, h, i = a.contents, j = a.dataTypes;
                "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
            if (e)
                for (f in i)
                    if (i[f] && i[f].test(e)) {
                        j.unshift(f);
                        break
                    }
            if (j[0] in d) g = j[0];
            else {
                for (f in d) {
                    if (!j[0] || a.converters[f + " " + j[0]]) {
                        g = f;
                        break
                    }
                    h || (h = f)
                }
                g = g || h
            }
            return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
        }

        function G(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function H() {
            return setTimeout(function() {
                Bc = b
            }), Bc = fb.now()
        }

        function I(a, b, c) {
            for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function J(a, b, c) {
            var d, e, f = 0,
                g = Gc.length,
                h = fb.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: fb.extend({}, b),
                    opts: fb.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Bc || H(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (K(k, j.opts.specialEasing); g > f; f++)
                if (d = Gc[f].call(j, a, k, j.opts)) return d;
            return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), fb.fx.timer(fb.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function K(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function L(a, c, d) {
            var e, f, g, h, i, j, k = this,
                l = {},
                m = a.style,
                n = a.nodeType && t(a),
                o = qb.get(a, "fxshow");
            d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function() {
                i.unqueued || j()
            }), i.unqueued++, k.always(function() {
                k.always(function() {
                    i.unqueued--, fb.queue(a, "fx").length || i.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), d.overflow && (m.overflow = "hidden", k.always(function() {
                m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2]
            }));
            for (e in c)
                if (f = c[e], Dc.exec(f)) {
                    if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                        if ("show" !== f || !o || o[e] === b) continue;
                        n = !0
                    }
                    l[e] = o && o[e] || fb.style(a, e)
                }
            if (!fb.isEmptyObject(l)) {
                o ? "hidden" in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), g && (o.hidden = !n), n ? fb(a).show() : k.done(function() {
                    fb(a).hide()
                }), k.done(function() {
                    var b;
                    qb.remove(a, "fxshow");
                    for (b in l) fb.style(a, b, l[b])
                });
                for (e in l) h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
            }
        }

        function M(a, b, c, d, e) {
            return new M.prototype.init(a, b, c, d, e)
        }

        function N(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = $b[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function O(a) {
            return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var P, Q, R = typeof b,
            S = a.location,
            T = a.document,
            U = T.documentElement,
            V = a.jQuery,
            W = a.$,
            X = {},
            Y = [],
            Z = "2.0.3",
            $ = Y.concat,
            _ = Y.push,
            ab = Y.slice,
            bb = Y.indexOf,
            cb = X.toString,
            db = X.hasOwnProperty,
            eb = Z.trim,
            fb = function(a, b) {
                return new fb.fn.init(a, b, P)
            },
            gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            hb = /\S+/g,
            ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            kb = /^-ms-/,
            lb = /-([\da-z])/gi,
            mb = function(a, b) {
                return b.toUpperCase()
            },
            nb = function() {
                T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), fb.ready()
            };
        fb.fn = fb.prototype = {
                jquery: Z,
                constructor: fb,
                init: function(a, c, d) {
                    var e, f;
                    if (!a) return this;
                    if ("string" == typeof a) {
                        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ib.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                        if (e[1]) {
                            if (c = c instanceof fb ? c[0] : c, fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), jb.test(e[1]) && fb.isPlainObject(c))
                                for (e in c) fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                            return this
                        }
                        return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = T, this.selector = a, this
                    }
                    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fb.makeArray(a, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return ab.call(this)
                },
                get: function(a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function(a) {
                    var b = fb.merge(this.constructor(), a);
                    return b.prevObject = this, b.context = this.context, b
                },
                each: function(a, b) {
                    return fb.each(this, a, b)
                },
                ready: function(a) {
                    return fb.ready.promise().done(a), this
                },
                slice: function() {
                    return this.pushStack(ab.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(a) {
                    var b = this.length,
                        c = +a + (0 > a ? b : 0);
                    return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
                },
                map: function(a) {
                    return this.pushStack(fb.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: _,
                sort: [].sort,
                splice: [].splice
            }, fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function() {
                var a, c, d, e, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
                    if (null != (a = arguments[i]))
                        for (c in a) d = h[c], e = a[c], h !== e && (k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
                return h
            }, fb.extend({
                expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
                noConflict: function(b) {
                    return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? fb.readyWait++ : fb.ready(!0)
                },
                ready: function(a) {
                    (a === !0 ? --fb.readyWait : fb.isReady) || (fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (Q.resolveWith(T, [fb]), fb.fn.trigger && fb(T).trigger("ready").off("ready")))
                },
                isFunction: function(a) {
                    return "function" === fb.type(a)
                },
                isArray: Array.isArray,
                isWindow: function(a) {
                    return null != a && a === a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a
                },
                isPlainObject: function(a) {
                    if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                },
                isEmptyObject: function(a) {
                    var b;
                    for (b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseHTML: function(a, b, c) {
                    if (!a || "string" != typeof a) return null;
                    "boolean" == typeof b && (c = b, b = !1), b = b || T;
                    var d = jb.exec(a),
                        e = !c && [];
                    return d ? [b.createElement(d[1])] : (d = fb.buildFragment([a], b, e), e && fb(e).remove(), fb.merge([], d.childNodes))
                },
                parseJSON: JSON.parse,
                parseXML: function(a) {
                    var c, d;
                    if (!a || "string" != typeof a) return null;
                    try {
                        d = new DOMParser, c = d.parseFromString(a, "text/xml")
                    } catch (e) {
                        c = b
                    }
                    return (!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), c
                },
                noop: function() {},
                globalEval: function(a) {
                    var b, c = eval;
                    a = fb.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
                },
                camelCase: function(a) {
                    return a.replace(kb, "ms-").replace(lb, mb)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                },
                each: function(a, b, d) {
                    var e, f = 0,
                        g = a.length,
                        h = c(a);
                    if (d) {
                        if (h)
                            for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                        else
                            for (f in a)
                                if (e = b.apply(a[f], d), e === !1) break
                    } else if (h)
                        for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.call(a[f], f, a[f]), e === !1) break; return a
                },
                trim: function(a) {
                    return null == a ? "" : eb.call(a)
                },
                makeArray: function(a, b) {
                    var d = b || [];
                    return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)), d
                },
                inArray: function(a, b, c) {
                    return null == b ? -1 : bb.call(b, a, c)
                },
                merge: function(a, c) {
                    var d = c.length,
                        e = a.length,
                        f = 0;
                    if ("number" == typeof d)
                        for (; d > f; f++) a[e++] = c[f];
                    else
                        for (; c[f] !== b;) a[e++] = c[f++];
                    return a.length = e, a
                },
                grep: function(a, b, c) {
                    var d, e = [],
                        f = 0,
                        g = a.length;
                    for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function(a, b, d) {
                    var e, f = 0,
                        g = a.length,
                        h = c(a),
                        i = [];
                    if (h)
                        for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
                    else
                        for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
                    return $.apply([], i)
                },
                guid: 1,
                proxy: function(a, c) {
                    var d, e, f;
                    return "string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), f = function() {
                        return a.apply(c || this, e.concat(ab.call(arguments)))
                    }, f.guid = a.guid = a.guid || fb.guid++, f) : b
                },
                access: function(a, c, d, e, f, g, h) {
                    var i = 0,
                        j = a.length,
                        k = null == d;
                    if ("object" === fb.type(d)) {
                        f = !0;
                        for (i in d) fb.access(a, c, i, d[i], !0, g, h)
                    } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                            return k.call(fb(a), c)
                        })), c))
                        for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                    return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
                },
                now: Date.now,
                swap: function(a, b, c, d) {
                    var e, f, g = {};
                    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                    e = c.apply(a, d || []);
                    for (f in b) a.style[f] = g[f];
                    return e
                }
            }), fb.ready.promise = function(b) {
                return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), a.addEventListener("load", nb, !1))), Q.promise(b)
            }, fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                X["[object " + b + "]"] = b.toLowerCase()
            }), P = fb(T),
            function(a, b) {
                function c(a, b, c, d) {
                    var e, f, g, h, i, j, k, l, o, p;
                    if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
                    if (1 !== (h = b.nodeType) && 9 !== h) return [];
                    if (I && !d) {
                        if (e = tb.exec(a))
                            if (g = e[1]) {
                                if (9 === h) {
                                    if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                    if (f.id === g) return c.push(f), c
                                } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                            } else {
                                if (e[2]) return ab.apply(c, b.getElementsByTagName(a)), c;
                                if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return ab.apply(c, b.getElementsByClassName(g)), c
                            }
                        if (x.qsa && (!J || !J.test(a))) {
                            if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                                for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + n(j[i]);
                                o = nb.test(a) && b.parentNode || b, p = j.join(",")
                            }
                            if (p) try {
                                return ab.apply(c, o.querySelectorAll(p)), c
                            } catch (q) {} finally {
                                k || b.removeAttribute("id")
                            }
                        }
                    }
                    return v(a.replace(kb, "$1"), b, c, d)
                }

                function d() {
                    function a(c, d) {
                        return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
                    }
                    var b = [];
                    return a
                }

                function e(a) {
                    return a[N] = !0, a
                }

                function f(a) {
                    var b = G.createElement("div");
                    try {
                        return !!a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null
                    }
                }

                function g(a, b) {
                    for (var c = a.split("|"), d = a.length; d--;) z.attrHandle[c[d]] = b
                }

                function h(a, b) {
                    var c = b && a,
                        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
                    if (d) return d;
                    if (c)
                        for (; c = c.nextSibling;)
                            if (c === b) return -1;
                    return a ? 1 : -1
                }

                function i(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a
                    }
                }

                function j(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function k(a) {
                    return e(function(b) {
                        return b = +b, e(function(c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                    })
                }

                function l() {}

                function m(a, b) {
                    var d, e, f, g, h, i, j, k = S[a + " "];
                    if (k) return b ? 0 : k.slice(0);
                    for (h = a, i = [], j = z.preFilter; h;) {
                        (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({
                            value: d,
                            type: e[0].replace(kb, " ")
                        }), h = h.slice(d.length));
                        for (g in z.filter) !(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                        if (!d) break
                    }
                    return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
                }

                function n(a) {
                    for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                    return d
                }

                function o(a, b, c) {
                    var d = b.dir,
                        e = c && "parentNode" === d,
                        f = Q++;
                    return b.first ? function(b, c, f) {
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) return a(b, c, f)
                    } : function(b, c, g) {
                        var h, i, j, k = P + " " + f;
                        if (g) {
                            for (; b = b[d];)
                                if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                        } else
                            for (; b = b[d];)
                                if (1 === b.nodeType || e)
                                    if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                        if ((h = i[1]) === !0 || h === y) return h === !0
                                    } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0) return !0
                    }
                }

                function p(a) {
                    return a.length > 1 ? function(b, c, d) {
                        for (var e = a.length; e--;)
                            if (!a[e](b, c, d)) return !1;
                        return !0
                    } : a[0]
                }

                function q(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                    return g
                }

                function r(a, b, c, d, f, g) {
                    return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                        var j, k, l, m = [],
                            n = [],
                            o = g.length,
                            p = e || u(b || "*", h.nodeType ? [h] : h, []),
                            r = !a || !e && b ? p : q(p, m, a, h, i),
                            s = c ? f || (e ? a : o || d) ? [] : g : r;
                        if (c && c(r, s, h, i), d)
                            for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                        if (e) {
                            if (f || a) {
                                if (f) {
                                    for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                    f(null, s = [], j, i)
                                }
                                for (k = s.length; k--;)(l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                            }
                        } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s)
                    })
                }

                function s(a) {
                    for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                            return a === b
                        }, g, !0), j = o(function(a) {
                            return cb.call(b, a) > -1
                        }, g, !0), k = [function(a, c, d) {
                            return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                        }]; e > h; h++)
                        if (c = z.relative[a[h].type]) k = [o(p(k), c)];
                        else {
                            if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                                for (d = ++h; e > d && !z.relative[a[d].type]; d++);
                                return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                    value: " " === a[h - 2].type ? "*" : ""
                                })).replace(kb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                            }
                            k.push(c)
                        }
                    return p(k)
                }

                function t(a, b) {
                    var d = 0,
                        f = b.length > 0,
                        g = a.length > 0,
                        h = function(e, h, i, j, k) {
                            var l, m, n, o = [],
                                p = 0,
                                r = "0",
                                s = e && [],
                                t = null != k,
                                u = D,
                                v = e || g && z.find.TAG("*", k && h.parentNode || h),
                                w = P += null == u ? 1 : Math.random() || .1;
                            for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                                if (g && l) {
                                    for (m = 0; n = a[m++];)
                                        if (n(l, h, i)) {
                                            j.push(l);
                                            break
                                        }
                                    t && (P = w, y = ++d)
                                }
                                f && ((l = !n && l) && p--, e && s.push(l))
                            }
                            if (p += r, f && r !== p) {
                                for (m = 0; n = b[m++];) n(s, o, h, i);
                                if (e) {
                                    if (p > 0)
                                        for (; r--;) s[r] || o[r] || (o[r] = $.call(j));
                                    o = q(o)
                                }
                                ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                            }
                            return t && (P = w, D = u), s
                        };
                    return f ? e(h) : h
                }

                function u(a, b, d) {
                    for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
                    return d
                }

                function v(a, b, c, d) {
                    var e, f, g, h, i, j = m(a);
                    if (!d && 1 === j.length) {
                        if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                            if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b) return c;
                            a = a.slice(f.shift().value.length)
                        }
                        for (e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)
                            if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                                if (f.splice(e, 1), a = d.length && n(f), !a) return ab.apply(c, d), c;
                                break
                            }
                    }
                    return C(a, j)(d, b, !I, c, nb.test(a)), c
                }
                var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
                    O = a.document,
                    P = 0,
                    Q = 0,
                    R = d(),
                    S = d(),
                    T = d(),
                    U = !1,
                    V = function(a, b) {
                        return a === b ? (U = !0, 0) : 0
                    },
                    W = typeof b,
                    X = 1 << 31,
                    Y = {}.hasOwnProperty,
                    Z = [],
                    $ = Z.pop,
                    _ = Z.push,
                    ab = Z.push,
                    bb = Z.slice,
                    cb = Z.indexOf || function(a) {
                        for (var b = 0, c = this.length; c > b; b++)
                            if (this[b] === a) return b;
                        return -1
                    },
                    db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    eb = "[\\x20\\t\\r\\n\\f]",
                    gb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    hb = gb.replace("w", "w#"),
                    ib = "\\[" + eb + "*(" + gb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hb + ")|)|)" + eb + "*\\]",
                    jb = ":(" + gb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ib.replace(3, 8) + ")*)|.*)\\)|)",
                    kb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"),
                    lb = new RegExp("^" + eb + "*," + eb + "*"),
                    mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"),
                    nb = new RegExp(eb + "*[+~]"),
                    ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"),
                    pb = new RegExp(jb),
                    qb = new RegExp("^" + hb + "$"),
                    rb = {
                        ID: new RegExp("^#(" + gb + ")"),
                        CLASS: new RegExp("^\\.(" + gb + ")"),
                        TAG: new RegExp("^(" + gb.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ib),
                        PSEUDO: new RegExp("^" + jb),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + db + ")$", "i"),
                        needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
                    },
                    sb = /^[^{]+\{\s*\[native \w/,
                    tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ub = /^(?:input|select|textarea|button)$/i,
                    vb = /^h\d$/i,
                    wb = /'|\\/g,
                    xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"),
                    yb = function(a, b, c) {
                        var d = "0x" + b - 65536;
                        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                    };
                try {
                    ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
                } catch (zb) {
                    ab = {
                        apply: Z.length ? function(a, b) {
                            _.apply(a, bb.call(b))
                        } : function(a, b) {
                            for (var c = a.length, d = 0; a[c++] = b[d++];);
                            a.length = c - 1
                        }
                    }
                }
                B = c.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                }, x = c.support = {}, F = c.setDocument = function(a) {
                    var b = a ? a.ownerDocument || a : O,
                        c = b.defaultView;
                    return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                        F()
                    }), x.attributes = f(function(a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), x.getElementsByTagName = f(function(a) {
                        return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
                    }), x.getElementsByClassName = f(function(a) {
                        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                    }), x.getById = f(function(a) {
                        return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
                    }), x.getById ? (z.find.ID = function(a, b) {
                        if (typeof b.getElementById !== W && I) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : []
                        }
                    }, z.filter.ID = function(a) {
                        var b = a.replace(xb, yb);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete z.find.ID, z.filter.ID = function(a) {
                        var b = a.replace(xb, yb);
                        return function(a) {
                            var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), z.find.TAG = x.getElementsByTagName ? function(a, b) {
                        return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0
                    } : function(a, b) {
                        var c, d = [],
                            e = 0,
                            f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, z.find.CLASS = x.getElementsByClassName && function(a, b) {
                        return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0
                    }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function(a) {
                        a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
                    }), f(function(a) {
                        var c = b.createElement("input");
                        c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                    })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                        x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", jb)
                    }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sb.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                            d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, V = H.compareDocumentPosition ? function(a, c) {
                        if (a === c) return U = !0, 0;
                        var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                        return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                    } : function(a, c) {
                        var d, e = 0,
                            f = a.parentNode,
                            g = c.parentNode,
                            i = [a],
                            j = [c];
                        if (a === c) return U = !0, 0;
                        if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                        if (f === g) return h(a, c);
                        for (d = a; d = d.parentNode;) i.unshift(d);
                        for (d = c; d = d.parentNode;) j.unshift(d);
                        for (; i[e] === j[e];) e++;
                        return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                    }, b) : G
                }, c.matches = function(a, b) {
                    return c(a, null, null, b)
                }, c.matchesSelector = function(a, b) {
                    if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                        var d = L.call(a, b);
                        if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                    } catch (e) {}
                    return c(b, G, null, [a]).length > 0
                }, c.contains = function(a, b) {
                    return (a.ownerDocument || a) !== G && F(a), M(a, b)
                }, c.attr = function(a, c) {
                    (a.ownerDocument || a) !== G && F(a);
                    var d = z.attrHandle[c.toLowerCase()],
                        e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
                    return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
                }, c.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }, c.uniqueSort = function(a) {
                    var b, c = [],
                        d = 0,
                        e = 0;
                    if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                        for (; b = a[e++];) b === a[e] && (d = c.push(e));
                        for (; d--;) a.splice(c[d], 1)
                    }
                    return a
                }, A = c.getText = function(a) {
                    var b, c = "",
                        d = 0,
                        e = a.nodeType;
                    if (e) {
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += A(a)
                        } else if (3 === e || 4 === e) return a.nodeValue
                    } else
                        for (; b = a[d]; d++) c += A(b);
                    return c
                }, z = c.selectors = {
                    cacheLength: 50,
                    createPseudo: e,
                    match: rb,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                        },
                        PSEUDO: function(a) {
                            var c, d = !a[5] && a[2];
                            return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(xb, yb).toLowerCase();
                            return "*" === a ? function() {
                                return !0
                            } : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        },
                        CLASS: function(a) {
                            var b = R[a + " "];
                            return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function(a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(a, b, d) {
                            return function(e) {
                                var f = c.attr(e, a);
                                return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                            }
                        },
                        CHILD: function(a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice(-4),
                                h = "of-type" === b;
                            return 1 === d && 0 === e ? function(a) {
                                return !!a.parentNode
                            } : function(b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                    q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(),
                                    s = !i && !h;
                                if (q) {
                                    if (f) {
                                        for (; p;) {
                                            for (l = b; l = l[p];)
                                                if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                            if (1 === l.nodeType && ++m && l === b) {
                                                k[a] = [P, n, m];
                                                break
                                            }
                                    } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                    else
                                        for (;
                                            (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                    return m -= e, m === d || m % d === 0 && m / d >= 0
                                }
                            }
                        },
                        PSEUDO: function(a, b) {
                            var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                            return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                                for (var d, e = f(a, b), g = e.length; g--;) d = cb.call(a, e[g]), a[d] = !(c[d] = e[g])
                            }) : function(a) {
                                return f(a, 0, d)
                            }) : f
                        }
                    },
                    pseudos: {
                        not: e(function(a) {
                            var b = [],
                                c = [],
                                d = C(a.replace(kb, "$1"));
                            return d[N] ? e(function(a, b, c, e) {
                                for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function(a, e, f) {
                                return b[0] = a, d(b, null, f, c), !c.pop()
                            }
                        }),
                        has: e(function(a) {
                            return function(b) {
                                return c(a, b).length > 0
                            }
                        }),
                        contains: e(function(a) {
                            return function(b) {
                                return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                            }
                        }),
                        lang: e(function(a) {
                            return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(),
                                function(b) {
                                    var c;
                                    do
                                        if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                    while ((b = b.parentNode) && 1 === b.nodeType);
                                    return !1
                                }
                        }),
                        target: function(b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        },
                        root: function(a) {
                            return a === H
                        },
                        focus: function(a) {
                            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        },
                        enabled: function(a) {
                            return a.disabled === !1
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                            return !0
                        },
                        parent: function(a) {
                            return !z.pseudos.empty(a)
                        },
                        header: function(a) {
                            return vb.test(a.nodeName)
                        },
                        input: function(a) {
                            return ub.test(a.nodeName)
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                        },
                        first: k(function() {
                            return [0]
                        }),
                        last: k(function(a, b) {
                            return [b - 1]
                        }),
                        eq: k(function(a, b, c) {
                            return [0 > c ? c + b : c]
                        }),
                        even: k(function(a, b) {
                            for (var c = 0; b > c; c += 2) a.push(c);
                            return a
                        }),
                        odd: k(function(a, b) {
                            for (var c = 1; b > c; c += 2) a.push(c);
                            return a
                        }),
                        lt: k(function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                            return a
                        }),
                        gt: k(function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                            return a
                        })
                    }
                }, z.pseudos.nth = z.pseudos.eq;
                for (w in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) z.pseudos[w] = i(w);
                for (w in {
                        submit: !0,
                        reset: !0
                    }) z.pseudos[w] = j(w);
                l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function(a, b) {
                    var c, d = [],
                        e = [],
                        f = T[a + " "];
                    if (!f) {
                        for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                        f = T(a, t(e, d))
                    }
                    return f
                }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function(a) {
                    return 1 & a.compareDocumentPosition(G.createElement("div"))
                }), f(function(a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || g("type|href|height|width", function(a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), x.attributes && f(function(a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || g("value", function(a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                }), f(function(a) {
                    return null == a.getAttribute("disabled")
                }) || g(db, function(a, b, c) {
                    var d;
                    return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
                }), fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains
            }(a);
        var ob = {};
        fb.Callbacks = function(a) {
            a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
            var c, e, f, g, h, i, j = [],
                k = !a.once && [],
                l = function(b) {
                    for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
                        if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                            c = !1;
                            break
                        }
                    f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
                },
                m = {
                    add: function() {
                        if (j) {
                            var b = j.length;
                            ! function d(b) {
                                fb.each(b, function(b, c) {
                                    var e = fb.type(c);
                                    "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                                })
                            }(arguments), f ? h = j.length : c && (g = b, l(c))
                        }
                        return this
                    },
                    remove: function() {
                        return j && fb.each(arguments, function(a, b) {
                            for (var c;
                                (c = fb.inArray(b, j, c)) > -1;) j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                        }), this
                    },
                    has: function(a) {
                        return a ? fb.inArray(a, j) > -1 : !(!j || !j.length)
                    },
                    empty: function() {
                        return j = [], h = 0, this
                    },
                    disable: function() {
                        return j = k = c = b, this
                    },
                    disabled: function() {
                        return !j
                    },
                    lock: function() {
                        return k = b, c || m.disable(), this
                    },
                    locked: function() {
                        return !k
                    },
                    fireWith: function(a, b) {
                        return !j || e && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], f ? k.push(b) : l(b)), this
                    },
                    fire: function() {
                        return m.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!e
                    }
                };
            return m
        }, fb.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", fb.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", fb.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", fb.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return fb.Deferred(function(c) {
                                fb.each(b, function(b, f) {
                                    var g = f[0],
                                        h = fb.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = h && h.apply(this, arguments);
                                        a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? fb.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, fb.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = ab.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : fb.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        }), fb.support = function(b) {
            var c = T.createElement("input"),
                d = T.createDocumentFragment(),
                e = T.createElement("div"),
                f = T.createElement("select"),
                g = f.appendChild(T.createElement("option"));
            return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function() {
                var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                    g = T.getElementsByTagName("body")[0];
                g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fb.swap(g, null != g.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    b.boxSizing = 4 === e.offsetWidth
                }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
            }), b) : b
        }({});
        var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            sb = /([A-Z])/g;
        e.uid = 1, e.accepts = function(a) {
            return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
        }, e.prototype = {
            key: function(a) {
                if (!e.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = e.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c, fb.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c
            },
            set: function(a, b, c) {
                var d, e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if (fb.isEmptyObject(f)) fb.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d];
                return f
            },
            get: function(a, c) {
                var d = this.cache[this.key(a)];
                return c === b ? d : d[c]
            },
            access: function(a, c, d) {
                var e;
                return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fb.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c)
            },
            remove: function(a, c) {
                var d, e, f, g = this.key(a),
                    h = this.cache[g];
                if (c === b) this.cache[g] = {};
                else {
                    fb.isArray(c) ? e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(hb) || [])), d = e.length;
                    for (; d--;) delete h[e[d]]
                }
            },
            hasData: function(a) {
                return !fb.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        }, pb = new e, qb = new e, fb.extend({
            acceptData: e.accepts,
            hasData: function(a) {
                return pb.hasData(a) || qb.hasData(a)
            },
            data: function(a, b, c) {
                return pb.access(a, b, c)
            },
            removeData: function(a, b) {
                pb.remove(a, b)
            },
            _data: function(a, b, c) {
                return qb.access(a, b, c)
            },
            _removeData: function(a, b) {
                qb.remove(a, b)
            }
        }), fb.fn.extend({
            data: function(a, c) {
                var d, e, g = this[0],
                    h = 0,
                    i = null;
                if (a === b) {
                    if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                        for (d = g.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), f(g, e, i[e]));
                        qb.set(g, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof a ? this.each(function() {
                    pb.set(this, a)
                }) : fb.access(this, function(c) {
                    var d, e = fb.camelCase(a);
                    if (g && c === b) {
                        if (d = pb.get(g, a), d !== b) return d;
                        if (d = pb.get(g, e), d !== b) return d;
                        if (d = f(g, e, b), d !== b) return d
                    } else this.each(function() {
                        var d = pb.get(this, e);
                        pb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c)
                    })
                }, null, c, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    pb.remove(this, a)
                })
            }
        }), fb.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = qb.get(a, b), c && (!d || fb.isArray(c) ? d = qb.access(a, b, fb.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = fb.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = fb._queueHooks(a, b),
                    g = function() {
                        fb.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return qb.get(a, c) || qb.access(a, c, {
                    empty: fb.Callbacks("once memory").add(function() {
                        qb.remove(a, [b + "queue", c])
                    })
                })
            }
        }), fb.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fb.queue(this[0], a) : c === b ? this : this.each(function() {
                    var b = fb.queue(this, a, c);
                    fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    fb.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                var d, e = 1,
                    f = fb.Deferred(),
                    g = this,
                    h = this.length,
                    i = function() {
                        --e || f.resolveWith(g, [g])
                    };
                for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = qb.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
                return i(), f.promise(c)
            }
        });
        var tb, ub, vb = /[\t\r\n\f]/g,
            wb = /\r/g,
            xb = /^(?:input|select|textarea|button)$/i;
        fb.fn.extend({
            attr: function(a, b) {
                return fb.access(this, fb.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    fb.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return fb.access(this, fb.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[fb.propFix[a] || a]
                })
            },
            addClass: function(a) {
                var b, c, d, e, f, g = 0,
                    h = this.length,
                    i = "string" == typeof a && a;
                if (fb.isFunction(a)) return this.each(function(b) {
                    fb(this).addClass(a.call(this, b, this.className))
                });
                if (i)
                    for (b = (a || "").match(hb) || []; h > g; g++)
                        if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            c.className = fb.trim(d)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g = 0,
                    h = this.length,
                    i = 0 === arguments.length || "string" == typeof a && a;
                if (fb.isFunction(a)) return this.each(function(b) {
                    fb(this).removeClass(a.call(this, b, this.className))
                });
                if (i)
                    for (b = (a || "").match(hb) || []; h > g; g++)
                        if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            c.className = a ? fb.trim(d) : ""
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fb.isFunction(a) ? function(c) {
                    fb(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function() {
                    if ("string" === c)
                        for (var b, d = 0, e = fb(this), f = a.match(hb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === R || "boolean" === c) && (this.className && qb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0) return !0;
                return !1
            },
            val: function(a) {
                var c, d, e, f = this[0]; {
                    if (arguments.length) return e = fb.isFunction(a), this.each(function(d) {
                        var f;
                        1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function(a) {
                            return null == a ? "" : a + ""
                        })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                    });
                    if (f) return c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d)
                }
            }
        }), fb.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                                if (b = fb(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            },
            attr: function(a, c, d) {
                var e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void fb.removeAttr(a, c))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(hb);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = fb.propFix[c] || c, fb.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, f = fb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), ub = {
            set: function(a, b, c) {
                return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, c) {
            var d = fb.expr.attrHandle[c] || fb.find.attr;
            fb.expr.attrHandle[c] = function(a, c, e) {
                var f = fb.expr.attrHandle[c],
                    g = e ? b : (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
                return fb.expr.attrHandle[c] = f, g
            }
        }), fb.support.optSelected || (fb.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), fb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fb.propFix[this.toLowerCase()] = this
        }), fb.each(["radio", "checkbox"], function() {
            fb.valHooks[this] = {
                set: function(a, b) {
                    return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0
                }
            }, fb.support.checkOn || (fb.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var yb = /^key/,
            zb = /^(?:mouse|contextmenu)|click/,
            Ab = /^(?:focusinfocus|focusoutblur)$/,
            Bb = /^([^.]*)(?:\.(.+)|)$/;
        fb.event = {
            global: {},
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
                if (r) {
                    for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fb.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                            return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = a), c = (c || "").match(hb) || [""], k = c.length; k--;) i = Bb.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fb.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fb.event.special[o] || {}, l = fb.extend({
                        type: o,
                        origType: q,
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && fb.expr.match.needsContext.test(f),
                        namespace: p.join(".")
                    }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fb.event.global[o] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(hb) || [""], j = b.length; j--;)
                        if (h = Bb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) fb.event.remove(a, n + b[j], c, d, !0);
                    fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"))
                }
            },
            trigger: function(c, d, e, f) {
                var g, h, i, j, k, l, m, n = [e || T],
                    o = db.call(c, "type") ? c.type : c,
                    p = db.call(c, "namespace") ? c.namespace.split(".") : [];
                if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fb.makeArray(d, [c]), m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                    if (!f && !m.noBubble && !fb.isWindow(e)) {
                        for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), i = h;
                        i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
                    }
                    for (g = 0;
                        (h = n[g++]) && !c.isPropagationStopped();) c.type = g > 1 ? j : m.bindType || o, l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                    return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), c.result
                }
            },
            dispatch: function(a) {
                a = fb.event.fix(a);
                var c, d, e, f, g, h = [],
                    i = ab.call(arguments),
                    j = (qb.get(this, "events") || {})[a.type] || [],
                    k = fb.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    for (h = fb.event.handlers.call(this, a, j), c = 0;
                        (f = h[c++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = f.elem, d = 0;
                            (g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, c) {
                var d, e, f, g, h = [],
                    i = c.delegateCount,
                    j = a.target;
                if (i && j.nodeType && (!a.button || "click" !== a.type))
                    for (; j !== this; j = j.parentNode || this)
                        if (j.disabled !== !0 || "click" !== a.type) {
                            for (e = [], d = 0; i > d; d++) g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [j]).length), e[f] && e.push(g);
                            e.length && h.push({
                                elem: j,
                                handlers: e
                            })
                        }
                return i < c.length && h.push({
                    elem: this,
                    handlers: c.slice(i)
                }), h
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button;
                    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[fb.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = zb.test(e) ? this.mouseHooks : yb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== i() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === i() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return fb.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        a.result !== b && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = fb.extend(new fb.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, fb.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }, fb.Event = function(a, b) {
            return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), void(this[fb.expando] = !0)) : new fb.Event(a, b)
        }, fb.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = g, this.stopPropagation()
            }
        }, fb.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            fb.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), fb.support.focusinBubbles || fb.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    fb.event.simulate(b, a.target, fb.event.fix(a), !0)
                };
            fb.event.special[b] = {
                setup: function() {
                    0 === c++ && T.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && T.removeEventListener(a, d, !0)
                }
            }
        }), fb.fn.extend({
            on: function(a, c, d, e, f) {
                var g, i;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = d || c, c = b);
                    for (i in a) this.on(i, c, d, a[i], f);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = h;
                else if (!e) return this;
                return 1 === f && (g = e, e = function(a) {
                    return fb().off(a), g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function() {
                    fb.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if ("object" == typeof a) {
                    for (f in a) this.off(f, c, a[f]);
                    return this
                }
                return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), this.each(function() {
                    fb.event.remove(this, a, d, c)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    fb.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? fb.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Cb = /^.[^:#\[\.,]*$/,
            Db = /^(?:parents|prev(?:Until|All))/,
            Eb = fb.expr.match.needsContext,
            Fb = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        fb.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(fb(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (fb.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) fb.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            has: function(a) {
                var b = fb(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (fb.contains(this, b[a])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(k(this, a || [], !0))
            },
            filter: function(a) {
                return this.pushStack(k(this, a || [], !1))
            },
            is: function(a) {
                return !!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                            c = f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? fb.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [a] : a),
                    d = fb.merge(this.get(), c);
                return this.pushStack(fb.unique(d))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), fb.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return fb.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return fb.dir(a, "parentNode", c)
            },
            next: function(a) {
                return j(a, "nextSibling")
            },
            prev: function(a) {
                return j(a, "previousSibling")
            },
            nextAll: function(a) {
                return fb.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return fb.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return fb.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return fb.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return fb.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return fb.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || fb.merge([], a.childNodes)
            }
        }, function(a, b) {
            fb.fn[a] = function(c, d) {
                var e = fb.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e)
            }
        }), fb.extend({
            filter: function(a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [d] : [] : fb.find.matches(a, fb.grep(b, function(a) {
                    return 1 === a.nodeType
                }))
            },
            dir: function(a, c, d) {
                for (var e = [], f = d !== b;
                    (a = a[c]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (f && fb(a).is(d)) break;
                        e.push(a)
                    }
                return e
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Hb = /<([\w:]+)/,
            Ib = /<|&#?\w+;/,
            Jb = /<(?:script|style|link)/i,
            Kb = /^(?:checkbox|radio)$/i,
            Lb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Mb = /^$|\/(?:java|ecma)script/i,
            Nb = /^true\/(.*)/,
            Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Pb = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, Pb.th = Pb.td, fb.fn.extend({
            text: function(a) {
                return fb.access(this, function(a) {
                    return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = l(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = l(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fb.cleanData(q(c)), c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fb.cleanData(q(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return fb.clone(this, a, b)
                })
            },
            html: function(a) {
                return fb.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b && 1 === c.nodeType) return c.innerHTML;
                    if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Gb, "<$1></$2>");
                        try {
                            for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (fb.cleanData(q(c, !1)), c.innerHTML = a);
                            c = 0
                        } catch (f) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = fb.map(this, function(a) {
                        return [a.nextSibling, a.parentNode]
                    }),
                    b = 0;
                return this.domManip(arguments, function(c) {
                    var d = a[b++],
                        e = a[b++];
                    e && (d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d))
                }, !0), b ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, c) {
                a = $.apply([], a);
                var d, e, f, g, h, i, j = 0,
                    k = this.length,
                    l = this,
                    o = k - 1,
                    p = a[0],
                    r = fb.isFunction(p);
                if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p)) return this.each(function(d) {
                    var e = l.eq(d);
                    r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
                });
                if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                    for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = fb.clone(h, !0, !0), g && fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
                    if (g)
                        for (i = f[f.length - 1].ownerDocument, fb.map(f, n), j = 0; g > j; j++) h = f[j], Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")))
                }
                return this
            }
        }), fb.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            fb.fn[a] = function(a) {
                for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), fb(e[g])[b](c), _.apply(d, c.get());
                return this.pushStack(d)
            }
        }), fb.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = fb.contains(a.ownerDocument, a);
                if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a)))
                    for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]);
                    else p(a, h);
                return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)
                    if (e = a[k], e || 0 === e)
                        if ("object" === fb.type(e)) fb.merge(n, e.nodeType ? [e] : e);
                        else if (Ib.test(e)) {
                    for (f = f || m.appendChild(b.createElement("div")), g = (Hb.exec(e) || ["", ""])[1].toLowerCase(), h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                    fb.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
                } else n.push(b.createTextNode(e));
                for (m.textContent = "", k = 0; e = n[k++];)
                    if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))
                        for (j = 0; e = f[j++];) Mb.test(e.type || "") && c.push(e);
                return m
            },
            cleanData: function(a) {
                for (var c, d, f, g, h, i, j = fb.event.special, k = 0;
                    (d = a[k]) !== b; k++) {
                    if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                        if (f = Object.keys(c.events || {}), f.length)
                            for (i = 0;
                                (g = f[i]) !== b; i++) j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                        qb.cache[h] && delete qb.cache[h]
                    }
                    delete pb.cache[d[pb.expando]]
                }
            },
            _evalUrl: function(a) {
                return fb.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), fb.fn.extend({
            wrapAll: function(a) {
                var b;
                return fb.isFunction(a) ? this.each(function(b) {
                    fb(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return this.each(fb.isFunction(a) ? function(b) {
                    fb(this).wrapInner(a.call(this, b))
                } : function() {
                    var b = fb(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = fb.isFunction(a);
                return this.each(function(c) {
                    fb(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var Qb, Rb, Sb = /^(none|table(?!-c[ea]).+)/,
            Tb = /^margin/,
            Ub = new RegExp("^(" + gb + ")(.*)$", "i"),
            Vb = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"),
            Wb = new RegExp("^([+-])=(" + gb + ")", "i"),
            Xb = {
                BODY: "block"
            },
            Yb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Zb = {
                letterSpacing: 0,
                fontWeight: 400
            },
            $b = ["Top", "Right", "Bottom", "Left"],
            _b = ["Webkit", "O", "Moz", "ms"];
        fb.fn.extend({
            css: function(a, c) {
                return fb.access(this, function(a, c, d) {
                    var e, f, g = {},
                        h = 0;
                    if (fb.isArray(c)) {
                        for (e = u(a), f = c.length; f > h; h++) g[c[h]] = fb.css(a, c[h], !1, e);
                        return g
                    }
                    return d !== b ? fb.style(a, c, d) : fb.css(a, c)
                }, a, c, arguments.length > 1)
            },
            show: function() {
                return v(this, !0)
            },
            hide: function() {
                return v(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    t(this) ? fb(this).show() : fb(this).hide()
                })
            }
        }), fb.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Qb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g, h, i = fb.camelCase(c),
                        j = a.style;
                    return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0)
                }
            },
            css: function(a, c, d, e) {
                var f, g, h, i = fb.camelCase(c);
                return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f
            }
        }), Qb = function(a, c, d) {
            var e, f, g, h = d || u(a),
                i = h ? h.getPropertyValue(c) || h[c] : b,
                j = a.style;
            return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
        }, fb.each(["height", "width"], function(a, b) {
            fb.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function() {
                        return y(a, b, d)
                    }) : y(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && u(a);
                    return w(a, c, d ? x(a, b, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), fb(function() {
            fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {
                get: function(a, b) {
                    return b ? fb.swap(a, {
                        display: "inline-block"
                    }, Qb, [a, "marginRight"]) : void 0
                }
            }), !fb.support.pixelPosition && fb.fn.position && fb.each(["top", "left"], function(a, b) {
                fb.cssHooks[b] = {
                    get: function(a, c) {
                        return c ? (c = Qb(a, b), Vb.test(c) ? fb(a).position()[b] + "px" : c) : void 0
                    }
                }
            })
        }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, fb.expr.filters.visible = function(a) {
            return !fb.expr.filters.hidden(a)
        }), fb.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            fb.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Tb.test(a) || (fb.cssHooks[a + b].set = w)
        });
        var ac = /%20/g,
            bc = /\[\]$/,
            cc = /\r?\n/g,
            dc = /^(?:submit|button|image|reset|file)$/i,
            ec = /^(?:input|select|textarea|keygen)/i;
        fb.fn.extend({
            serialize: function() {
                return fb.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = fb.prop(this, "elements");
                    return a ? fb.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a))
                }).map(function(a, b) {
                    var c = fb(this).val();
                    return null == c ? null : fb.isArray(c) ? fb.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(cc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(cc, "\r\n")
                    }
                }).get()
            }
        }), fb.param = function(a, c) {
            var d, e = [],
                f = function(a, b) {
                    b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a)) fb.each(a, function() {
                f(this.name, this.value)
            });
            else
                for (d in a) B(d, a[d], c, f);
            return e.join("&").replace(ac, "+")
        }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            fb.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), fb.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var fc, gc, hc = fb.now(),
            ic = /\?/,
            jc = /#.*$/,
            kc = /([?&])_=[^&]*/,
            lc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            nc = /^(?:GET|HEAD)$/,
            oc = /^\/\//,
            pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            qc = fb.fn.load,
            rc = {},
            sc = {},
            tc = "*/".concat("*");
        try {
            gc = S.href
        } catch (uc) {
            gc = T.createElement("a"), gc.href = "", gc = gc.href
        }
        fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function(a, c, d) {
            if ("string" != typeof a && qc) return qc.apply(this, arguments);
            var e, f, g, h = this,
                i = a.indexOf(" ");
            return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: c
            }).done(function(a) {
                g = arguments, h.html(e ? fb("<div>").append(fb.parseHTML(a)).find(e) : a)
            }).complete(d && function(a, b) {
                h.each(d, g || [a.responseText, b, a])
            }), this
        }, fb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            fb.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), fb.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gc,
                type: "GET",
                isLocal: mc.test(fc[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": tc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": fb.parseJSON,
                    "text xml": fb.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a)
            },
            ajaxPrefilter: C(rc),
            ajaxTransport: C(sc),
            ajax: function(a, c) {
                function d(a, c, d, h) {
                    var j, l, s, t, v, x = c;
                    2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fb.active || fb.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (c = a, a = b), c = c || {};
                var e, f, g, h, i, j, k, l, m = fb.ajaxSetup({}, c),
                    n = m.context || m,
                    o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event,
                    p = fb.Deferred(),
                    q = fb.Callbacks("once memory"),
                    r = m.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === u) {
                                if (!h)
                                    for (h = {}; b = lc.exec(g);) h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === u ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return u || (m.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > u)
                                    for (b in a) r[b] = [r[b], a[b]];
                                else w.always(a[w.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || v;
                            return e && e.abort(b), d(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [""], null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), D(rc, m, c, w), 2 === u) return w;
                k = m.global, k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !nc.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = kc.test(f) ? f.replace(kc, "$1_=" + hc++) : f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
                for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
                if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
                v = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[l](m[l]);
                if (e = D(sc, m, c, w)) {
                    w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1, e.send(s, d)
                    } catch (x) {
                        if (!(2 > u)) throw x;
                        d(-1, x)
                    }
                } else d(-1, "No Transport");
                return w
            },
            getJSON: function(a, b, c) {
                return fb.get(a, b, c, "json")
            },
            getScript: function(a, c) {
                return fb.get(a, b, c, "script")
            }
        }), fb.each(["get", "post"], function(a, c) {
            fb[c] = function(a, d, e, f) {
                return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({
                    url: a,
                    type: c,
                    dataType: f,
                    data: d,
                    success: e
                })
            }
        }), fb.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return fb.globalEval(a), a
                }
            }
        }), fb.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), fb.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = fb("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), T.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var vc = [],
            wc = /(=)\?(?=&|$)|\?\?/;
        fb.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = vc.pop() || fb.expando + "_" + hc++;
                return this[a] = !0, a
            }
        }), fb.ajaxPrefilter("json jsonp", function(c, d, e) {
            var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
            return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
                return h || fb.error(f + " was not called"), h[0]
            }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
                h = arguments
            }, e.always(function() {
                a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vc.push(f)), h && fb.isFunction(g) && g(h[0]), h = g = b
            }), "script") : void 0
        }), fb.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        };
        var xc = fb.ajaxSettings.xhr(),
            yc = {
                0: 200,
                1223: 204
            },
            zc = 0,
            Ac = {};
        a.ActiveXObject && fb(a).on("unload", function() {
            for (var a in Ac) Ac[a]();
            Ac = b
        }), fb.support.cors = !!xc && "withCredentials" in xc, fb.support.ajax = xc = !!xc, fb.ajaxTransport(function(a) {
            var c;
            return fb.support.cors || xc && !a.crossDomain ? {
                send: function(d, e) {
                    var f, g, h = a.xhr();
                    if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (f in a.xhrFields) h[f] = a.xhrFields[f];
                    a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) h.setRequestHeader(f, d[f]);
                    c = function(a) {
                        return function() {
                            c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
                                text: h.responseText
                            } : b, h.getAllResponseHeaders()))
                        }
                    }, h.onload = c(), h.onerror = c("error"), c = Ac[g = zc++] = c("abort"), h.send(a.hasContent && a.data || null)
                },
                abort: function() {
                    c && c()
                }
            } : void 0
        });
        var Bc, Cc, Dc = /^(?:toggle|show|hide)$/,
            Ec = new RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"),
            Fc = /queueHooks$/,
            Gc = [L],
            Hc = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = Ec.exec(b),
                        f = e && e[3] || (fb.cssNumber[a] ? "" : "px"),
                        g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        fb.Animation = fb.extend(J, {
            tweener: function(a, b) {
                fb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Gc.unshift(a) : Gc.push(a)
            }
        }), fb.Tween = M, M.prototype = {
            constructor: M,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = M.propHooks[this.prop];
                return a && a.get ? a.get(this) : M.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = M.propHooks[this.prop];
                return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, fb.each(["toggle", "show", "hide"], function(a, b) {
            var c = fb.fn[b];
            fb.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
            }
        }), fb.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(t).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = fb.isEmptyObject(a),
                    f = fb.speed(b, c, d),
                    g = function() {
                        var b = J(this, fb.extend({}, a), f);
                        (e || qb.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, c, d) {
                var e = function(a) {
                    var b = a.stop;
                    delete a.stop, b(d)
                };
                return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        c = null != a && a + "queueHooks",
                        f = fb.timers,
                        g = qb.get(this);
                    if (c) g[c] && g[c].stop && e(g[c]);
                    else
                        for (c in g) g[c] && g[c].stop && Fc.test(c) && e(g[c]);
                    for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                    (b || !d) && fb.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = qb.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = fb.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), fb.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            fb.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), fb.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? fb.extend({}, a) : {
                complete: c || !c && b || fb.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !fb.isFunction(b) && b
            };
            return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue)
            }, d
        }, fb.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function() {
            var a, c = fb.timers,
                d = 0;
            for (Bc = fb.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
            c.length || fb.fx.stop(), Bc = b
        }, fb.fx.timer = function(a) {
            a() && fb.timers.push(a) && fb.fx.start()
        }, fb.fx.interval = 13, fb.fx.start = function() {
            Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval))
        }, fb.fx.stop = function() {
            clearInterval(Cc), Cc = null
        }, fb.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function(a) {
            return fb.grep(fb.timers, function(b) {
                return a === b.elem
            }).length
        }), fb.fn.offset = function(a) {
            if (arguments.length) return a === b ? this : this.each(function(b) {
                fb.offset.setOffset(this, a, b)
            });
            var c, d, e = this[0],
                f = {
                    top: 0,
                    left: 0
                },
                g = e && e.ownerDocument;
            if (g) return c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {
                top: f.top + d.pageYOffset - c.clientTop,
                left: f.left + d.pageXOffset - c.clientLeft
            }) : f
        }, fb.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = fb.css(a, "position"),
                    l = fb(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, fb.fn.extend({
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), d.left += fb.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - fb.css(c, "marginTop", !0),
                        left: b.left - d.left - fb.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position");) a = a.offsetParent;
                    return a || U
                })
            }
        }), fb.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(c, d) {
            var e = "pageYOffset" === d;
            fb.fn[c] = function(f) {
                return fb.access(this, function(c, f, g) {
                    var h = O(c);
                    return g === b ? h ? h[d] : c[f] : void(h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g)
                }, c, f, arguments.length, null)
            }
        }), fb.each({
            Height: "height",
            Width: "width"
        }, function(a, c) {
            fb.each({
                padding: "inner" + a,
                content: c,
                "": "outer" + a
            }, function(d, e) {
                fb.fn[e] = function(e, f) {
                    var g = arguments.length && (d || "boolean" != typeof e),
                        h = d || (e === !0 || f === !0 ? "margin" : "border");
                    return fb.access(this, function(c, d, e) {
                        var f;
                        return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h)
                    }, c, g ? e : b, g, null)
                }
            })
        }), fb.fn.size = function() {
            return this.length
        }, fb.fn.andSelf = fb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fb : "function" == typeof define && define.amd && define("jquery", [], function() {
            return fb
        }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb)
    }(window), + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.affix"),
                    f = "object" == typeof b && b;
                e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
            })
        }
        var c = function(b, d) {
            this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
        };
        c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
            offset: 0,
            target: window
        }, c.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(c.RESET).addClass("affix");
            var a = this.$target.scrollTop(),
                b = this.$element.offset();
            return this.pinnedOffset = b.top - a
        }, c.prototype.checkPositionWithEventLoop = function() {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        }, c.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var b = a(document).height(),
                    d = this.$target.scrollTop(),
                    e = this.$element.offset(),
                    f = this.options.offset,
                    g = f.top,
                    h = f.bottom;
                "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
                var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
                if (this.affixed !== i) {
                    null != this.unpin && this.$element.css("top", "");
                    var j = "affix" + (i ? "-" + i : ""),
                        k = a.Event(j + ".bs.affix");
                    this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                        top: b - this.$element.height() - h
                    }))
                }
            }
        };
        var d = a.fn.affix;
        a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
            return a.fn.affix = d, this
        }, a(window).on("load", function() {
            a('[data-spy="affix"]').each(function() {
                var c = a(this),
                    d = c.data();
                d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
            })
        })
    }(jQuery)
    //  Bootstrap-Custome 
    /*Carousel*/
    , + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                    g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }
        var c = function(b, c) {
            this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
        };
        c.VERSION = "3.2.0", c.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0
        }, c.prototype.keydown = function(a) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }, c.prototype.cycle = function(b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
        }, c.prototype.getItemIndex = function(a) {
            return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
        }, c.prototype.to = function(b) {
            var c = this,
                d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                c.to(b)
            }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
        }, c.prototype.pause = function(b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, c.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, c.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, c.prototype.slide = function(b, c) {
            var d = this.$element.find(".item.active"),
                e = c || d[b](),
                f = this.interval,
                g = "next" == b ? "left" : "right",
                h = "next" == b ? "first" : "last",
                i = this;
            if (!e.length) {
                if (!this.options.wrap) return;
                e = this.$element.find(".item")[h]()
            }
            if (e.hasClass("active")) return this.sliding = !1;
            var j = e[0],
                k = a.Event("slide.bs.carousel", {
                    relatedTarget: j,
                    direction: g
                });
            if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var l = a(this.$indicators.children()[this.getItemIndex(e)]);
                    l && l.addClass("active")
                }
                var m = a.Event("slid.bs.carousel", {
                    relatedTarget: j,
                    direction: g
                });
                return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function() {
                    e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                        i.$element.trigger(m)
                    }, 0)
                }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this
            }
        };
        var d = a.fn.carousel;
        a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
            return a.fn.carousel = d, this
        }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(c) {
            var d, e = a(this),
                f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data()),
                    h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
            }
        }), a(window).on("load", function() {
            a('[data-ride="carousel"]').each(function() {
                var c = a(this);
                b.call(c, c.data())
            })
        })
    }(jQuery)
    /* Stickey Nav (max-width: 767px) */
    , + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.collapse"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
                !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
            })
        }
        var c = function(b, d) {
            this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
        };
        c.VERSION = "3.2.0", c.DEFAULTS = {
            toggle: !0
        }, c.prototype.dimension = function() {
            var a = this.$element.hasClass("width");
            return a ? "width" : "height"
        }, c.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var c = a.Event("show.bs.collapse");
                if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                    var d = this.$parent && this.$parent.find("> .panel > .in");
                    if (d && d.length) {
                        var e = d.data("bs.collapse");
                        if (e && e.transitioning) return;
                        b.call(d, "hide"), e || d.data("bs.collapse", null)
                    }
                    var f = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
                    var g = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return g.call(this);
                    var h = a.camelCase(["scroll", f].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
                }
            }
        }, c.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var d = function() {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
                }
            }
        }, c.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var d = a.fn.collapse;
        a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
            return a.fn.collapse = d, this
        }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
            var d, e = a(this),
                f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
                g = a(f),
                h = g.data("bs.collapse"),
                i = h ? "toggle" : e.data(),
                j = e.attr("data-parent"),
                k = j && a(j);
            h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i)
        })
    }(jQuery) /**/ , + function(a) {
        "use strict";

        function b() {
            var a = document.createElement("bootstrap"),
                b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var c in b)
                if (void 0 !== a.style[c]) return {
                    end: b[c]
                };
            return !1
        }
        a.fn.emulateTransitionEnd = function(b) {
            var c = !1,
                d = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0
            });
            var e = function() {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b), this
        }, a(function() {
            a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function(b) {
                    return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery) /**/ , + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.tooltip"),
                    f = "object" == typeof b && b;
                (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
        };
        c.VERSION = "3.2.0", c.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, c.prototype.init = function(b, c, d) {
            this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
            for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                var g = e[f];
                if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                else if ("manual" != g) {
                    var h = "hover" == g ? "mouseenter" : "focusin",
                        i = "hover" == g ? "mouseleave" : "focusout";
                    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, c.prototype.getDefaults = function() {
            return c.DEFAULTS
        }, c.prototype.getOptions = function(b) {
            return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        }, c.prototype.getDelegateOptions = function() {
            var b = {},
                c = this.getDefaults();
            return this._options && a.each(this._options, function(a, d) {
                c[a] != d && (b[a] = d)
            }), b
        }, c.prototype.enter = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show)) : c.show()
        }, c.prototype.leave = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) : c.hide()
        }, c.prototype.show = function() {
            var b = a.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(b);
                var c = a.contains(document.documentElement, this.$element[0]);
                if (b.isDefaultPrevented() || !c) return;
                var d = this,
                    e = this.tip(),
                    f = this.getUID(this.type);
                this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
                var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
                    h = /\s?auto?\s?/i,
                    i = h.test(g);
                i && (g = g.replace(h, "") || "top"), e.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
                var j = this.getPosition(),
                    k = e[0].offsetWidth,
                    l = e[0].offsetHeight;
                if (i) {
                    var m = g,
                        n = this.$element.parent(),
                        o = this.getPosition(n);
                    g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g)
                }
                var p = this.getCalculatedOffset(g, j, k, l);
                this.applyPlacement(p, g);
                var q = function() {
                    d.$element.trigger("shown.bs." + d.type), d.hoverState = null
                };
                a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
            }
        }, c.prototype.applyPlacement = function(b, c) {
            var d = this.tip(),
                e = d[0].offsetWidth,
                f = d[0].offsetHeight,
                g = parseInt(d.css("margin-top"), 10),
                h = parseInt(d.css("margin-left"), 10);
            isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
                using: function(a) {
                    d.css({
                        top: Math.round(a.top),
                        left: Math.round(a.left)
                    })
                }
            }, b), 0), d.addClass("in");
            var i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            "top" == c && j != f && (b.top = b.top + f - j);
            var k = this.getViewportAdjustedDelta(c, b, i, j);
            k.left ? b.left += k.left : b.top += k.top;
            var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
                m = k.left ? "left" : "top",
                n = k.left ? "offsetWidth" : "offsetHeight";
            d.offset(b), this.replaceArrow(l, d[0][n], m)
        }, c.prototype.replaceArrow = function(a, b, c) {
            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
        }, c.prototype.setContent = function() {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        }, c.prototype.hide = function() {
            function b() {
                "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
            }
            var c = this,
                d = this.tip(),
                e = a.Event("hide.bs." + this.type);
            return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
        }, c.prototype.fixTitle = function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        }, c.prototype.hasContent = function() {
            return this.getTitle()
        }, c.prototype.getPosition = function(b) {
            b = b || this.$element;
            var c = b[0],
                d = "BODY" == c.tagName;
            return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
                width: d ? a(window).width() : b.outerWidth(),
                height: d ? a(window).height() : b.outerHeight()
            }, d ? {
                top: 0,
                left: 0
            } : b.offset())
        }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
            return "bottom" == a ? {
                top: b.top + b.height,
                left: b.left + b.width / 2 - c / 2
            } : "top" == a ? {
                top: b.top - d,
                left: b.left + b.width / 2 - c / 2
            } : "left" == a ? {
                top: b.top + b.height / 2 - d / 2,
                left: b.left - c
            } : {
                top: b.top + b.height / 2 - d / 2,
                left: b.left + b.width
            }
        }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
            var e = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return e;
            var f = this.options.viewport && this.options.viewport.padding || 0,
                g = this.getPosition(this.$viewport);
            if (/right|left/.test(a)) {
                var h = b.top - f - g.scroll,
                    i = b.top + f - g.scroll + d;
                h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
            } else {
                var j = b.left - f,
                    k = b.left + f + c;
                j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
            }
            return e
        }, c.prototype.getTitle = function() {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        }, c.prototype.getUID = function(a) {
            do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
            return a
        }, c.prototype.tip = function() {
            return this.$tip = this.$tip || a(this.options.template)
        }, c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, c.prototype.validate = function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, c.prototype.enable = function() {
            this.enabled = !0
        }, c.prototype.disable = function() {
            this.enabled = !1
        }, c.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, c.prototype.toggle = function(b) {
            var c = this;
            b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
        }, c.prototype.destroy = function() {
            clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
        };
        var d = a.fn.tooltip;
        a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
            return a.fn.tooltip = d, this
        }
    }(jQuery)
    /*Transform 3D, Isotope*/
    , + function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.popover"),
                    f = "object" == typeof b && b;
                (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.init("popover", a, b)
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
            return c.DEFAULTS
        }, c.prototype.setContent = function() {
            var a = this.tip(),
                b = this.getTitle(),
                c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
        }, c.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, c.prototype.getContent = function() {
            var a = this.$element,
                b = this.options;
            return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        }, c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, c.prototype.tip = function() {
            return this.$tip || (this.$tip = a(this.options.template)), this.$tip
        };
        var d = a.fn.popover;
        a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
            return a.fn.popover = d, this
        }
    }(jQuery),
    function(a, b) {
        "use strict";
        var c, d = a.document,
            e = d.documentElement,
            f = a.Modernizr,
            g = function(a) {
                return a.charAt(0).toUpperCase() + a.slice(1)
            },
            h = "Moz Webkit O Ms".split(" "),
            i = function(a) {
                var b, c = e.style;
                if ("string" == typeof c[a]) return a;
                a = g(a);
                for (var d = 0, f = h.length; f > d; d++)
                    if (b = h[d] + a, "string" == typeof c[b]) return b
            },
            j = i("transform"),
            k = i("transitionProperty"),
            l = {
                csstransforms: function() {
                    return !!j
                },
                csstransforms3d: function() {
                    var a = !!i("perspective");
                    if (a && "webkitPerspective" in e.style) {
                        var c = b("<style>@media (transform-3d),(-webkit-transform-3d){#modernizr{height:3px}}</style>").appendTo("head"),
                            d = b('<div id="modernizr" />').appendTo("html");
                        a = 3 === d.height(), d.remove(), c.remove()
                    }
                    return a
                },
                csstransitions: function() {
                    return !!k
                }
            };
        if (f)
            for (c in l) f.hasOwnProperty(c) || f.addTest(c, l[c]);
        else {
            f = a.Modernizr = {
                _version: "1.6ish: miniModernizr for Isotope"
            };
            var m, n = " ";
            for (c in l) m = l[c](), f[c] = m, n += " " + (m ? "" : "no-") + c;
            b("html").addClass(n)
        }
        if (f.csstransforms) {
            var o = f.csstransforms3d ? {
                    translate: function(a) {
                        return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                    },
                    scale: function(a) {
                        return "scale3d(" + a + ", " + a + ", 1) "
                    }
                } : {
                    translate: function(a) {
                        return "translate(" + a[0] + "px, " + a[1] + "px) "
                    },
                    scale: function(a) {
                        return "scale(" + a + ") "
                    }
                },
                p = function(a, c, d) {
                    var e, f, g = b.data(a, "isoTransform") || {},
                        h = {},
                        i = {};
                    h[c] = d, b.extend(g, h);
                    for (e in g) f = g[e], i[e] = o[e](f);
                    var k = i.translate || "",
                        l = i.scale || "",
                        m = k + l;
                    b.data(a, "isoTransform", g), a.style[j] = m
                };
            b.cssNumber.scale = !0, b.cssHooks.scale = {
                set: function(a, b) {
                    p(a, "scale", b)
                },
                get: function(a) {
                    var c = b.data(a, "isoTransform");
                    return c && c.scale ? c.scale : 1
                }
            }, b.fx.step.scale = function(a) {
                b.cssHooks.scale.set(a.elem, a.now + a.unit)
            }, b.cssNumber.translate = !0, b.cssHooks.translate = {
                set: function(a, b) {
                    p(a, "translate", b)
                },
                get: function(a) {
                    var c = b.data(a, "isoTransform");
                    return c && c.translate ? c.translate : [0, 0]
                }
            }
        }
        var q, r;
        f.csstransitions && (q = {
            WebkitTransitionProperty: "webkitTransitionEnd",
            MozTransitionProperty: "transitionend",
            OTransitionProperty: "oTransitionEnd otransitionend",
            transitionProperty: "transitionend"
        }[k], r = i("transitionDuration"));
        var s, t = b.event,
            u = b.event.handle ? "handle" : "dispatch";
        t.special.smartresize = {
            setup: function() {
                b(this).bind("resize", t.special.smartresize.handler)
            },
            teardown: function() {
                b(this).unbind("resize", t.special.smartresize.handler)
            },
            handler: function(a, b) {
                var c = this,
                    d = arguments;
                a.type = "smartresize", s && clearTimeout(s), s = setTimeout(function() {
                    t[u].apply(c, d)
                }, "execAsap" === b ? 0 : 100)
            }
        }, b.fn.smartresize = function(a) {
            return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
        }, b.Isotope = function(a, c, d) {
            this.element = b(c), this._create(a), this._init(d)
        };
        var v = ["width", "height"],
            w = b(a);
        var _is_ie = !0;
        if(jQuery('html').hasClass('no-csstransforms3d')) {
          _is_ie = 0;
        } else {
          _is_ie = !0;
        }
        b.Isotope.settings = {
            resizable: !0,
            layoutMode: "masonry",
            containerClass: "isotope",
            itemClass: "isotope-item",
            hiddenClass: "isotope-hidden",
            hiddenStyle: {
                opacity: 0,
                scale: .001
            },
            visibleStyle: {
                opacity: 1,
                scale: 1
            },
            containerStyle: {
                position: "relative",
                overflow: "hidden"
            },
            animationEngine: "best-available",
            animationOptions: {
                queue: !1,
                duration: 800
            },
            sortBy: "original-order",
            sortAscending: !0,
            resizesContainer: !0,
            transformsEnabled: _is_ie,
            itemPositionDataEnabled: !1
        }, b.Isotope.prototype = {
            _create: function(a) {
                this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
                var c = this.element[0].style;
                this.originalStyle = {};
                var d = v.slice(0);
                for (var e in this.options.containerStyle) d.push(e);
                for (var f = 0, g = d.length; g > f; f++) e = d[f], this.originalStyle[e] = c[e] || "";
                this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
                var h = {
                    "original-order": function(a, b) {
                        return b.elemCount++, b.elemCount
                    },
                    random: function() {
                        return Math.random()
                    }
                };
                this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
                    left: parseInt(this.element.css("padding-left") || 0, 10),
                    top: parseInt(this.element.css("padding-top") || 0, 10)
                };
                var i = this;
                setTimeout(function() {
                    i.element.addClass(i.options.containerClass)
                }, 0), this.options.resizable && w.bind("smartresize.isotope", function() {
                    i.resize()
                }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                    return !1
                })
            },
            _getAtoms: function(a) {
                var b = this.options.itemSelector,
                    c = b ? a.filter(b).add(a.find(b)) : a,
                    d = {
                        position: "absolute"
                    };
                return c = c.filter(function(a, b) {
                    return 1 === b.nodeType
                }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
            },
            _init: function(a) {
                this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
            },
            option: function(a) {
                if (b.isPlainObject(a)) {
                    this.options = b.extend(!0, this.options, a);
                    var c;
                    for (var d in a) c = "_update" + g(d), this[c] && this[c]()
                }
            },
            _updateAnimationEngine: function() {
                var a, b = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
                switch (b) {
                    case "css":
                    case "none":
                        a = !1;
                        break;
                    case "jquery":
                        a = !0;
                        break;
                    default:
                        a = !f.csstransitions
                }
                this.isUsingJQueryAnimation = a, this._updateUsingTransforms()
            },
            _updateTransformsEnabled: function() {
                this._updateUsingTransforms()
            },
            _updateUsingTransforms: function() {
                var a = this.usingTransforms = this.options.transformsEnabled && f.csstransforms && f.csstransitions && !this.isUsingJQueryAnimation;
                a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
            },
            _filter: function(a) {
                var b = "" === this.options.filter ? "*" : this.options.filter;
                if (!b) return a;
                var c = this.options.hiddenClass,
                    d = "." + c,
                    e = a.filter(d),
                    f = e;
                if ("*" !== b) {
                    f = e.filter(b);
                    var g = a.not(d).not(b).addClass(c);
                    this.styleQueue.push({
                        $el: g,
                        style: this.options.hiddenStyle
                    })
                }
                return this.styleQueue.push({
                    $el: f,
                    style: this.options.visibleStyle
                }), f.removeClass(c), a.filter(b)
            },
            updateSortData: function(a, c) {
                var d, e, f = this,
                    g = this.options.getSortData;
                a.each(function() {
                    d = b(this), e = {};
                    for (var a in g) e[a] = c || "original-order" !== a ? g[a](d, f) : b.data(this, "isotope-sort-data")[a];
                    b.data(this, "isotope-sort-data", e)
                })
            },
            _sort: function() {
                var a = this.options.sortBy,
                    b = this._getSorter,
                    c = this.options.sortAscending ? 1 : -1,
                    d = function(d, e) {
                        var f = b(d, a),
                            g = b(e, a);
                        return f === g && "original-order" !== a && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : g > f ? -1 : 0) * c
                    };
                this.$filteredAtoms.sort(d)
            },
            _getSorter: function(a, c) {
                return b.data(a, "isotope-sort-data")[c]
            },
            _translate: function(a, b) {
                return {
                    translate: [a, b]
                }
            },
            _positionAbs: function(a, b) {
                return {
                    left: a,
                    top: b
                }
            },
            _pushPosition: function(a, b, c) {
                b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
                var d = this.getPositionStyles(b, c);
                this.styleQueue.push({
                    $el: a,
                    style: d
                }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                    x: b,
                    y: c
                })
            },
            layout: function(a, b) {
                var c = this.options.layoutMode;
                if (this["_" + c + "Layout"](a), this.options.resizesContainer) {
                    var d = this["_" + c + "GetContainerSize"]();
                    this.styleQueue.push({
                        $el: this.element,
                        style: d
                    })
                }
                this._processStyleQueue(a, b), this.isLaidOut = !0
            },
            _processStyleQueue: function(a, c) {
                var d, e, g, h, i = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
                    j = this.options.animationOptions,
                    k = this.options.onLayout;
                if (e = function(a, b) {
                        b.$el[i](b.style, j)
                    }, this._isInserting && this.isUsingJQueryAnimation) e = function(a, b) {
                    d = b.$el.hasClass("no-transition") ? "css" : i, b.$el[d](b.style, j)
                };
                else if (c || k || j.complete) {
                    var l = !1,
                        m = [c, k, j.complete],
                        n = this;
                    if (g = !0, h = function() {
                            if (!l) {
                                for (var b, c = 0, d = m.length; d > c; c++) b = m[c], "function" == typeof b && b.call(n.element, a, n);
                                l = !0
                            }
                        }, this.isUsingJQueryAnimation && "animate" === i) j.complete = h, g = !1;
                    else if (f.csstransitions) {
                        for (var o, p = 0, s = this.styleQueue[0], t = s && s.$el; !t || !t.length;) {
                            if (o = this.styleQueue[p++], !o) return;
                            t = o.$el
                        }
                        var u = parseFloat(getComputedStyle(t[0])[r]);
                        u > 0 && (e = function(a, b) {
                            b.$el[i](b.style, j).one(q, h)
                        }, g = !1)
                    }
                }
                b.each(this.styleQueue, e), g && h(), this.styleQueue = []
            },
            resize: function() {
                this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
            },
            reLayout: function(a) {
                this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
            },
            addItems: function(a, b) {
                var c = this._getAtoms(a);
                this.$allAtoms = this.$allAtoms.add(c), b && b(c)
            },
            insert: function(a, b) {
                this.element.append(a);
                var c = this;
                this.addItems(a, function(a) {
                    var d = c._filter(a);
                    c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
                })
            },
            appended: function(a, b) {
                var c = this;
                this.addItems(a, function(a) {
                    c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
                })
            },
            _addHideAppended: function(a) {
                this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                    $el: a,
                    style: this.options.hiddenStyle
                })
            },
            _revealAppended: function(a, b) {
                var c = this;
                setTimeout(function() {
                    a.removeClass("no-transition"), c.styleQueue.push({
                        $el: a,
                        style: c.options.visibleStyle
                    }), c._isInserting = !1, c._processStyleQueue(a, b)
                }, 10)
            },
            reloadItems: function() {
                this.$allAtoms = this._getAtoms(this.element.children())
            },
            remove: function(a, b) {
                this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
                var c = this,
                    d = function() {
                        a.remove(), b && b.call(c.element)
                    };
                a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                    $el: a,
                    style: this.options.hiddenStyle
                }), this._sort(), this.reLayout(d)) : d()
            },
            shuffle: function(a) {
                this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
            },
            destroy: function() {
                var a = this.usingTransforms,
                    b = this.options;
                this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                    var b = this.style;
                    b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[j] = "")
                });
                var c = this.element[0].style;
                for (var d in this.originalStyle) c[d] = this.originalStyle[d];
                this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), w.unbind(".isotope")
            },
            _getSegments: function(a) {
                var b, c = this.options.layoutMode,
                    d = a ? "rowHeight" : "columnWidth",
                    e = a ? "height" : "width",
                    f = a ? "rows" : "cols",
                    h = this.element[e](),
                    i = this.options[c] && this.options[c][d] || this.$filteredAtoms["outer" + g(e)](!0) || h;
                b = Math.floor(h / i), b = Math.max(b, 1), this[c][f] = b, this[c][d] = i
            },
            _checkIfSegmentsChanged: function(a) {
                var b = this.options.layoutMode,
                    c = a ? "rows" : "cols",
                    d = this[b][c];
                return this._getSegments(a), this[b][c] !== d
            },
            _masonryReset: function() {
                this.masonry = {}, this._getSegments();
                var a = this.masonry.cols;
                for (this.masonry.colYs = []; a--;) this.masonry.colYs.push(0)
            },
            _masonryLayout: function(a) {
                var c = this,
                    d = c.masonry;
                a.each(function() {
                    var a = b(this),
                        e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                    if (e = Math.min(e, d.cols), 1 === e) c._masonryPlaceBrick(a, d.colYs);
                    else {
                        var f, g, h = d.cols + 1 - e,
                            i = [];
                        for (g = 0; h > g; g++) f = d.colYs.slice(g, g + e), i[g] = Math.max.apply(Math, f);
                        c._masonryPlaceBrick(a, i)
                    }
                })
            },
            _masonryPlaceBrick: function(a, b) {
                for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; f > e; e++)
                    if (b[e] === c) {
                        d = e;
                        break
                    }
                var g = this.masonry.columnWidth * d,
                    h = c;
                this._pushPosition(a, g, h);
                var i = c + a.outerHeight(!0),
                    j = this.masonry.cols + 1 - f;
                for (e = 0; j > e; e++) this.masonry.colYs[d + e] = i
            },
            _masonryGetContainerSize: function() {
                var a = Math.max.apply(Math, this.masonry.colYs);
                return {
                    height: a
                }
            },
            _masonryResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _fitRowsReset: function() {
                this.fitRows = {
                    x: 0,
                    y: 0,
                    height: 0
                }
            },
            _fitRowsLayout: function(a) {
                var c = this,
                    d = this.element.width(),
                    e = this.fitRows;
                a.each(function() {
                    var a = b(this),
                        f = a.outerWidth(!0),
                        g = a.outerHeight(!0);
                    0 !== e.x && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
                })
            },
            _fitRowsGetContainerSize: function() {
                return {
                    height: this.fitRows.height
                }
            },
            _fitRowsResizeChanged: function() {
                return !0
            },
            _cellsByRowReset: function() {
                this.cellsByRow = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByRowLayout: function(a) {
                var c = this,
                    d = this.cellsByRow;
                a.each(function() {
                    var a = b(this),
                        e = d.index % d.cols,
                        f = Math.floor(d.index / d.cols),
                        g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                        h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                    c._pushPosition(a, g, h), d.index++
                })
            },
            _cellsByRowGetContainerSize: function() {
                return {
                    height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
                }
            },
            _cellsByRowResizeChanged: function() {
                return this._checkIfSegmentsChanged()
            },
            _straightDownReset: function() {
                this.straightDown = {
                    y: 0
                }
            },
            _straightDownLayout: function(a) {
                var c = this;
                a.each(function() {
                    var a = b(this);
                    c._pushPosition(a, 0, c.straightDown.y), c.straightDown.y += a.outerHeight(!0)
                })
            },
            _straightDownGetContainerSize: function() {
                return {
                    height: this.straightDown.y
                }
            },
            _straightDownResizeChanged: function() {
                return !0
            },
            _masonryHorizontalReset: function() {
                this.masonryHorizontal = {}, this._getSegments(!0);
                var a = this.masonryHorizontal.rows;
                for (this.masonryHorizontal.rowXs = []; a--;) this.masonryHorizontal.rowXs.push(0)
            },
            _masonryHorizontalLayout: function(a) {
                var c = this,
                    d = c.masonryHorizontal;
                a.each(function() {
                    var a = b(this),
                        e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                    if (e = Math.min(e, d.rows), 1 === e) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                    else {
                        var f, g, h = d.rows + 1 - e,
                            i = [];
                        for (g = 0; h > g; g++) f = d.rowXs.slice(g, g + e), i[g] = Math.max.apply(Math, f);
                        c._masonryHorizontalPlaceBrick(a, i)
                    }
                })
            },
            _masonryHorizontalPlaceBrick: function(a, b) {
                for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; f > e; e++)
                    if (b[e] === c) {
                        d = e;
                        break
                    }
                var g = c,
                    h = this.masonryHorizontal.rowHeight * d;
                this._pushPosition(a, g, h);
                var i = c + a.outerWidth(!0),
                    j = this.masonryHorizontal.rows + 1 - f;
                for (e = 0; j > e; e++) this.masonryHorizontal.rowXs[d + e] = i
            },
            _masonryHorizontalGetContainerSize: function() {
                var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
                return {
                    width: a
                }
            },
            _masonryHorizontalResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _fitColumnsReset: function() {
                this.fitColumns = {
                    x: 0,
                    y: 0,
                    width: 0
                }
            },
            _fitColumnsLayout: function(a) {
                var c = this,
                    d = this.element.height(),
                    e = this.fitColumns;
                a.each(function() {
                    var a = b(this),
                        f = a.outerWidth(!0),
                        g = a.outerHeight(!0);
                    0 !== e.y && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
                })
            },
            _fitColumnsGetContainerSize: function() {
                return {
                    width: this.fitColumns.width
                }
            },
            _fitColumnsResizeChanged: function() {
                return !0
            },
            _cellsByColumnReset: function() {
                this.cellsByColumn = {
                    index: 0
                }, this._getSegments(), this._getSegments(!0)
            },
            _cellsByColumnLayout: function(a) {
                var c = this,
                    d = this.cellsByColumn;
                a.each(function() {
                    var a = b(this),
                        e = Math.floor(d.index / d.rows),
                        f = d.index % d.rows,
                        g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                        h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                    c._pushPosition(a, g, h), d.index++
                })
            },
            _cellsByColumnGetContainerSize: function() {
                return {
                    width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
                }
            },
            _cellsByColumnResizeChanged: function() {
                return this._checkIfSegmentsChanged(!0)
            },
            _straightAcrossReset: function() {
                this.straightAcross = {
                    x: 0
                }
            },
            _straightAcrossLayout: function(a) {
                var c = this;
                a.each(function() {
                    var a = b(this);
                    c._pushPosition(a, c.straightAcross.x, 0), c.straightAcross.x += a.outerWidth(!0)
                })
            },
            _straightAcrossGetContainerSize: function() {
                return {
                    width: this.straightAcross.x
                }
            },
            _straightAcrossResizeChanged: function() {
                return !0
            }
        }, b.fn.imagesLoaded = function(a) {
            function c() {
                a.call(e, f)
            }

            function d(a) {
                var e = a.target;
                e.src !== h && -1 === b.inArray(e, i) && (i.push(e), --g <= 0 && (setTimeout(c), f.unbind(".imagesLoaded", d)))
            }
            var e = this,
                f = e.find("img").add(e.filter("img")),
                g = f.length,
                h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                i = [];
            return g || c(), f.bind("load.imagesLoaded error.imagesLoaded", d).each(function() {
                var a = this.src;
                this.src = h, this.src = a
            }), e
        };
        var x = function(b) {
            a.console && a.console.error(b)
        };
        b.fn.isotope = function(a, c) {
            if ("string" == typeof a) {
                var d = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var c = b.data(this, "isotope");
                    return c ? b.isFunction(c[a]) && "_" !== a.charAt(0) ? void c[a].apply(c, d) : void x("no such method '" + a + "' for isotope instance") : void x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'")
                })
            } else this.each(function() {
                var d = b.data(this, "isotope");
                d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
            });
            return this
        }
    }(window, jQuery)
    /*easyPieChart*/
    ,
    function(a, b) {
        "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery)
    }(this, function(a) {
        var b = function(a, b) {
                var c, d = document.createElement("canvas");
                a.appendChild(d), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
                var e = d.getContext("2d");
                d.width = d.height = b.size;
                var f = 1;
                window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
                var g = (b.size - b.lineWidth) / 2;
                b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var h = function(a, b, c) {
                        c = Math.min(Math.max(-1, c || 0), 1);
                        var d = 0 >= c ? !0 : !1;
                        e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
                    },
                    i = function() {
                        var a, c;
                        e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
                        for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                        e.restore()
                    },
                    j = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                            window.setTimeout(a, 1e3 / 60)
                        }
                    }(),
                    k = function() {
                        b.scaleColor && i(), b.trackColor && h(b.trackColor, b.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return d
                }, this.getCtx = function() {
                    return e
                }, this.clear = function() {
                    e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
                }, this.draw = function(a) {
                    b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
                    var d;
                    d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
                }.bind(this), this.animate = function(a, c) {
                    var d = Date.now();
                    b.onStart(a, c);
                    var e = function() {
                        var f = Math.min(Date.now() - d, b.animate.duration),
                            g = b.easing(this, f, a, c - a, b.animate.duration);
                        this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
                    }.bind(this);
                    j(e)
                }.bind(this)
            },
            c = function(a, c) {
                var d = {
                    barColor: "#FFF",
                    trackColor: "#fb905c",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(a, b, c, d, e) {
                        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                    },
                    onStart: function() {},
                    onStep: function() {},
                    onStop: function() {}
                };
                if ("undefined" != typeof b) d.renderer = b;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    d.renderer = SVGRenderer
                }
                var e = {},
                    f = 0,
                    g = function() {
                        this.el = a, this.options = e;
                        for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                        e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, "number" == typeof e.animate && (e.animate = {
                            duration: e.animate,
                            enabled: !0
                        }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                            duration: 1e3,
                            enabled: e.animate
                        }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(a) {
                    return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
                }.bind(this), this.disableAnimation = function() {
                    return e.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return e.animate.enabled = !0, this
                }, g()
            };
        a.fn.easyPieChart = function(b) {
            return this.each(function() {
                var d;
                a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
            })
        }
    })
    /*Vertical*/
    ,
    function() {
        var a = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            },
            b = [].slice;
        ! function(a, b) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(c) {
                return b(c, a)
            }) : b(a.jQuery, a)
        }(window, function(c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
            return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
                horizontal: {},
                vertical: {}
            }, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function() {
                function a(a) {
                    var b = this;
                    this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
                        x: a.scrollLeft(),
                        y: a.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, this.element[j] = this.id, k[this.id] = this, a.bind(p, function() {
                        var a;
                        return b.didScroll || l ? void 0 : (b.didScroll = !0, a = function() {
                            return b.doScroll(), b.didScroll = !1
                        }, d.setTimeout(a, c[t].settings.scrollThrottle))
                    }), a.bind(o, function() {
                        var a;
                        return b.didResize ? void 0 : (b.didResize = !0, a = function() {
                            return c[t]("refresh"), b.didResize = !1
                        }, d.setTimeout(a, c[t].settings.resizeThrottle))
                    })
                }
                return a.prototype.doScroll = function() {
                    var a, b = this;
                    return a = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function(a, d) {
                        var e, f, g;
                        return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function(a, b) {
                            var c, e;
                            return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
                        }), g.sort(function(a, b) {
                            return a.offset - b.offset
                        }), f || g.reverse(), c.each(g, function(a, b) {
                            return b.options.continuous || a === g.length - 1 ? b.trigger([e]) : void 0
                        })
                    }), this.oldScroll = {
                        x: a.horizontal.newScroll,
                        y: a.vertical.newScroll
                    }
                }, a.prototype.refresh = function() {
                    var a, b, d, e = this;
                    return d = c.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
                        horizontal: {
                            contextOffset: d ? 0 : b.left,
                            contextScroll: d ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: d ? 0 : b.top,
                            contextScroll: d ? 0 : this.oldScroll.y,
                            contextDimension: d ? c[t]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, c.each(a, function(a, b) {
                        return c.each(e.waypoints[a], function(a, d) {
                            var e, f, g, h, i;
                            return e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, d.options.onlyOnScroll && null != g || !d.enabled ? void 0 : null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
                        })
                    })
                }, a.prototype.checkEmpty = function() {
                    return c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([o, p].join(" ")), delete k[this.id]) : void 0
                }, a
            }(), g = function() {
                function a(a, b, d) {
                    var e, f;
                    "bottom-in-view" === d.offset && (d.offset = function() {
                        var a;
                        return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
                    }), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = this.element[r]) ? f : [], e.push(this.id), this.element[r] = e
                }
                return a.prototype.trigger = function(a) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, a.prototype.disable = function() {
                    return this.enabled = !1
                }, a.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, a.prototype.destroy = function() {
                    return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, a.getWaypointsByElement = function(a) {
                    var b, d;
                    return (d = a[r]) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function(a) {
                        return b[a]
                    })) : []
                }, a
            }(), n = {
                init: function(a, b) {
                    var d;
                    return b = c.extend({}, c.fn[s].defaults, b), null == (d = b.handler) && (b.handler = a), this.each(function() {
                        var a, d, e, h;
                        return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e[0][j]], d || (d = new f(e)), new g(a, d, b)
                    }), c[t]("refresh"), this
                },
                disable: function() {
                    return n._invoke.call(this, "disable")
                },
                enable: function() {
                    return n._invoke.call(this, "enable")
                },
                destroy: function() {
                    return n._invoke.call(this, "destroy")
                },
                prev: function(a, b) {
                    return n._traverse.call(this, a, b, function(a, b, c) {
                        return b > 0 ? a.push(c[b - 1]) : void 0
                    })
                },
                next: function(a, b) {
                    return n._traverse.call(this, a, b, function(a, b, c) {
                        return b < c.length - 1 ? a.push(c[b + 1]) : void 0
                    })
                },
                _traverse: function(a, b, e) {
                    var f, g;
                    return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function() {
                        var b;
                        return b = c.inArray(this, g[a]), e(f, b, g[a])
                    }), this.pushStack(f)
                },
                _invoke: function(a) {
                    return this.each(function() {
                        var b;
                        return b = g.getWaypointsByElement(this), c.each(b, function(b, c) {
                            return c[a](), !0
                        })
                    }), this
                }
            }, c.fn[s] = function() {
                var a, d;
                return d = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [null, d]) : c.error(d ? "The " + d + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
            }, c.fn[s].defaults = {
                context: d,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, m = {
                refresh: function() {
                    return c.each(k, function(a, b) {
                        return b.refresh()
                    })
                },
                viewportHeight: function() {
                    var a;
                    return null != (a = d.innerHeight) ? a : e.height()
                },
                aggregate: function(a) {
                    var b, d, e;
                    return b = h, a && (b = null != (e = k[c(a)[0][j]]) ? e.waypoints : void 0), b ? (d = {
                        horizontal: [],
                        vertical: []
                    }, c.each(d, function(a, e) {
                        return c.each(b[a], function(a, b) {
                            return e.push(b)
                        }), e.sort(function(a, b) {
                            return a.offset - b.offset
                        }), d[a] = c.map(e, function(a) {
                            return a.element
                        }), d[a] = c.unique(d[a])
                    }), d) : []
                },
                above: function(a) {
                    return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                        return b.offset <= a.oldScroll.y
                    })
                },
                below: function(a) {
                    return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                        return b.offset > a.oldScroll.y
                    })
                },
                left: function(a) {
                    return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                        return b.offset <= a.oldScroll.x
                    })
                },
                right: function(a) {
                    return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                        return b.offset > a.oldScroll.x
                    })
                },
                enable: function() {
                    return m._invoke("enable")
                },
                disable: function() {
                    return m._invoke("disable")
                },
                destroy: function() {
                    return m._invoke("destroy")
                },
                extendFn: function(a, b) {
                    return n[a] = b
                },
                _invoke: function(a) {
                    var b;
                    return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function(b, c) {
                        return c[a](), !0
                    })
                },
                _filter: function(a, b, d) {
                    var e, f;
                    return (e = k[c(a)[0][j]]) ? (f = [], c.each(e.waypoints[b], function(a, b) {
                        return d(e, b) ? f.push(b) : void 0
                    }), f.sort(function(a, b) {
                        return a.offset - b.offset
                    }), c.map(f, function(a) {
                        return a.element
                    })) : []
                }
            }, c[t] = function() {
                var a, c;
                return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
            }, c[t].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, e.on("load.waypoints", function() {
                return c[t]("refresh")
            })
        })
    }.call(this),
    function() {
        ! function(a, b) {
            return "function" == typeof define && define.amd ? define(["jquery", "waypoints"], b) : b(a.jQuery)
        }(window, function(a) {
            var b, c;
            return b = {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: "stuck",
                direction: "down right"
            }, c = function(a, b) {
                var c;
                return a.wrap(b.wrapper), c = a.parent(), c.data("isWaypointStickyWrapper", !0)
            }, a.waypoints("extendFn", "sticky", function(d) {
                var e, f, g;
                return f = a.extend({}, a.fn.waypoint.defaults, b, d), e = c(this, f), g = f.handler, f.handler = function(b) {
                    var c, d;
                    return c = a(this).children(":first"), d = -1 !== f.direction.indexOf(b), c.toggleClass(f.stuckClass, d), e.height(d ? c.outerHeight() : ""), null != g ? g.call(this, b) : void 0
                }, e.waypoint(f), this.data("stuckClass", f.stuckClass)
            }), a.waypoints("extendFn", "unsticky", function() {
                var a;
                return a = this.parent(), a.data("isWaypointStickyWrapper") ? (a.waypoint("destroy"), this.unwrap(), this.removeClass(this.data("stuckClass"))) : this
            })
        })
    }.call(this),
    function(a) {
        "use strict";
        a.fn.fitVids = function(b) {
            var c = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var d = document.createElement("div"),
                    e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                    f = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
                d.className = "fit-vids-style", d.id = "fit-vids-style", d.style.display = "none", d.innerHTML = f, e.parentNode.insertBefore(d, e)
            }
            return b && a.extend(c, b), this.each(function() {
                var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                c.customSelector && b.push(c.customSelector);
                var d = a(this).find(b.join(","));
                d = d.not("object object"), d.each(function() {
                    var b = a(this);
                    if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                        var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                            d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                            e = c / d;
                        if (!b.attr("id")) {
                            var f = "fitvid" + Math.floor(999999 * Math.random());
                            b.attr("id", f)
                        }
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto)
    /* iframe, document, html, body */
    ,
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(b) {
            return a.isFunction(b) || "object" == typeof b ? b : {
                top: b,
                left: b
            }
        }
        var c = a.scrollTo = function(b, c, d) {
            return a(window).scrollTo(b, c, d)
        };
        return c.defaults = {
            axis: "xy",
            duration: parseFloat(a.fn.jquery) >= 1.3 ? 0 : 1,
            limit: !0
        }, c.window = function() {
            return a(window)._scrollable()
        }, a.fn._scrollable = function() {
            return this.map(function() {
                var b = this,
                    c = !b.nodeName || -1 != a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!c) return b;
                var d = (b.contentWindow || b).document || b.ownerDocument || b;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" == d.compatMode ? d.body : d.documentElement
            })
        }, a.fn.scrollTo = function(d, e, f) {
            return "object" == typeof e && (f = e, e = 0), "function" == typeof f && (f = {
                onAfter: f
            }), "max" == d && (d = 9e9), f = a.extend({}, c.defaults, f), e = e || f.duration, f.queue = f.queue && f.axis.length > 1, f.queue && (e /= 2), f.offset = b(f.offset), f.over = b(f.over), this._scrollable().each(function() {
                function g(a) {
                    j.animate(l, e, f.easing, a && function() {
                        a.call(this, k, f)
                    })
                }
                if (null != d) {
                    var h, i = this,
                        j = a(i),
                        k = d,
                        l = {},
                        m = j.is("html,body");
                    switch (typeof k) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)) {
                                k = b(k);
                                break
                            }
                            if (k = m ? a(k) : a(k, this), !k.length) return;
                        case "object":
                            (k.is || k.style) && (h = (k = a(k)).offset())
                    }
                    var n = a.isFunction(f.offset) && f.offset(i, k) || f.offset;
                    a.each(f.axis.split(""), function(a, b) {
                        var d = "x" == b ? "Left" : "Top",
                            e = d.toLowerCase(),
                            o = "scroll" + d,
                            p = i[o],
                            q = c.max(i, b);
                        if (h) l[o] = h[e] + (m ? 0 : p - j.offset()[e]), f.margin && (l[o] -= parseInt(k.css("margin" + d)) || 0, l[o] -= parseInt(k.css("border" + d + "Width")) || 0), l[o] += n[e] || 0, f.over[e] && (l[o] += k["x" == b ? "width" : "height"]() * f.over[e]);
                        else {
                            var r = k[e];
                            l[o] = r.slice && "%" == r.slice(-1) ? parseFloat(r) / 100 * q : r
                        }
                        f.limit && /^\d+$/.test(l[o]) && (l[o] = l[o] <= 0 ? 0 : Math.min(l[o], q)), !a && f.queue && (p != l[o] && g(f.onAfterFirst), delete l[o])
                    }), g(f.onAfter)
                }
            }).end()
        }, c.max = function(b, c) {
            var d = "x" == c ? "Width" : "Height",
                e = "scroll" + d;
            if (!a(b).is("html,body")) return b[e] - a(b)[d.toLowerCase()]();
            var f = "client" + d,
                g = b.ownerDocument.documentElement,
                h = b.ownerDocument.body;
            return Math.max(g[e], h[e]) - Math.min(g[f], h[f])
        }, c
    })
    /*Portfolio Animating*/
    ,
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
        q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function(a) {
            var b;
            return b = document.createElement("div"), b.innerHTML = a, b.children[0]
        }, v = function(a, b) {
            return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
        }, r = function(a, b) {
            return v(a, b), a.className += " " + b
        }, z = function(a, b) {
            var c;
            return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
        }, u = function() {
            var a, b;
            return null != (a = null != (b = window.performance) && "function" == typeof b.now ? b.now() : void 0) ? a : +new Date
        }, x = function(a, b) {
            return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
        }, A = function(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }, t = function(a) {
            return a - x(a)
        }, C = !1, (B = function() {
            var a, b, c, d, e;
            if (!C && null != window.jQuery) {
                for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function(a) {
                    var b;
                    return b = window.jQuery.fn[a], window.jQuery.fn[a] = function(a) {
                        var c;
                        return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
                    }
                }(a));
                return e
            }
        })(), setTimeout(B, 0), m = function() {
            function a(b) {
                var c, d, e, g, h, i, l, m, n, o, p = this;
                if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
                this.el.odometer = this, m = a.options;
                for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
                null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
                try {
                    for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && ! function(a) {
                        return Object.defineProperty(p.el, a, {
                            get: function() {
                                var b;
                                return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
                            },
                            set: function(a) {
                                return p.update(a)
                            }
                        })
                    }(e)
                } catch (q) {
                    c = q, this.watchForMutations()
                }
            }
            return a.prototype.renderInside = function() {
                return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
            }, a.prototype.watchForMutations = function() {
                var a, b = this;
                if (null != l) try {
                    return null == this.observer && (this.observer = new l(function() {
                        var a;
                        return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a)
                    })), this.watchMutations = !0, this.startWatchingMutations()
                } catch (c) {
                    a = c
                }
            }, a.prototype.startWatchingMutations = function() {
                return this.watchMutations ? this.observer.observe(this.el, {
                    childList: !0
                }) : void 0
            }, a.prototype.stopWatchingMutations = function() {
                var a;
                return null != (a = this.observer) ? a.disconnect() : void 0
            }, a.prototype.cleanValue = function(a) {
                var b;
                return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
            }, a.prototype.bindTransitionEnd = function() {
                var a, b, c, d, e, f, g = this;
                if (!this.transitionEndBound) {
                    for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function() {
                        return b ? !0 : (b = !0, setTimeout(function() {
                            return g.render(), b = !1, z(g.el, "odometerdone")
                        }, 0), !0)
                    }, !1));
                    return f
                }
            }, a.prototype.resetFormat = function() {
                var a, b, d, e, f, g, i, j;
                if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
                return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
                    repeating: g,
                    radix: f,
                    precision: e
                }
            }, a.prototype.render = function(a) {
                var b, c, d, e, f, g, h;
                for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", f = this.options.theme, b = this.el.className.split(" "), e = [], g = 0, h = b.length; h > g; g++) c = b[g], c.length && ((d = /^odometer-theme-(.+)$/.exec(c)) ? f = d[1] : /^odometer(-|$)/.test(c) || e.push(c));
                return e.push("odometer"), p || e.push("odometer-no-transitions"), e.push(f ? "odometer-theme-" + f : "odometer-auto-theme"), this.el.className = e.join(" "), this.ribbons = {}, this.formatDigits(a), this.startWatchingMutations()
            }, a.prototype.formatDigits = function(a) {
                var b, c, d, e, f, g, h, i, j, k;
                if (this.digits = [], this.options.formatFunction)
                    for (d = this.options.formatFunction(a), j = d.split("").reverse(), f = 0, h = j.length; h > f; f++) c = j[f], c.match(/0-9/) ? (b = this.renderDigit(), b.querySelector(".odometer-value").innerHTML = c, this.digits.push(b), this.insertDigit(b)) : this.addSpacer(c);
                else
                    for (e = !this.format.precision || !t(a) || !1, k = a.toString().split("").reverse(), g = 0, i = k.length; i > g; g++) b = k[g], "." === b && (e = !0), this.addDigit(b, e)
            }, a.prototype.update = function(a) {
                var b, c = this;
                return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function() {
                    return c.el.offsetHeight, r(c.el, "odometer-animating")
                }, 0), this.value = a) : void 0
            }, a.prototype.renderDigit = function() {
                return s(d)
            }, a.prototype.insertDigit = function(a, b) {
                return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
            }, a.prototype.addSpacer = function(a, b, c) {
                var d;
                return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b)
            }, a.prototype.addDigit = function(a, b) {
                var c, d, e, f;
                if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
                if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
                if (b)
                    for (e = !1;;) {
                        if (!this.format.repeating.length) {
                            if (e) throw new Error("Bad odometer format without digits");
                            this.resetFormat(), e = !0
                        }
                        if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
                        this.addSpacer(c)
                    }
                return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
            }, a.prototype.animate = function(a) {
                return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
            }, a.prototype.animateCount = function(a) {
                var c, d, e, f, g, h = this;
                return (d = +a - this.value) ? (f = e = u(), c = this.value, (g = function() {
                    var i, j, k;
                    return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
                })()) : void 0
            }, a.prototype.getDigitCount = function() {
                var a, b, c, d, e, f;
                for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
                return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
            }, a.prototype.getFractionalDigitCount = function() {
                var a, b, c, d, e, f, g;
                for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
                return Math.max.apply(Math, e)
            }, a.prototype.resetDigits = function() {
                return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
            }, a.prototype.animateSlide = function(a) {
                var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
                if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
                    for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
                        if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
                            for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;
                            l[l.length - 1] !== i && l.push(i), b++
                        } else l = function() {
                            E = [];
                            for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);
                            return E
                        }.apply(this);
                        for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);
                        g.push(l)
                    }
                    for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
                        for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
                    return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
                }
            }, a
        }(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function() {
            var a, b, c, d, e;
            if (window.odometerOptions) {
                d = window.odometerOptions, e = [];
                for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
                return e
            }
        }, 0), m.init = function() {
            var a, b, c, d, e, f;
            if (null != document.querySelectorAll) {
                for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({
                    el: a,
                    value: null != (e = a.innerText) ? e : a.textContent
                }));
                return f
            }
        }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
            return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0
        }) : document.addEventListener("DOMContentLoaded", function() {
            return m.options.auto !== !1 ? m.init() : void 0
        }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
            return m
        }) : typeof exports === !1 ? module.exports = m : window.Odometer = m
    }.call(this),
    function(a, b, c) {
        "use strict";

        function d(c) {
            if (e = b.documentElement, f = b.body, S(), gb = this, c = c || {}, lb = c.constants || {}, c.easing)
                for (var d in c.easing) V[d] = c.easing[d];
            sb = c.edgeStrategy || "set", jb = {
                beforerender: c.beforerender,
                render: c.render,
                keyframe: c.keyframe
            }, kb = c.forceHeight !== !1, kb && (Jb = c.scale || 1), mb = c.mobileDeceleration || y, ob = c.smoothScrolling !== !1, pb = c.smoothScrollingDuration || z, qb = {
                targetTop: gb.getScrollTop()
            }, Rb = (c.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
            })(), Rb ? (ib = b.getElementById("skrollr-body"), ib && fb(), W(), Db(e, [s, v], [t])) : Db(e, [s, u], [t]), gb.refresh(), vb(a, "resize orientationchange", function() {
                var a = e.clientWidth,
                    b = e.clientHeight;
                (b !== Ob || a !== Nb) && (Ob = b, Nb = a, Pb = !0)
            });
            var g = T();
            return function h() {
                Z(), ub = g(h)
            }(), gb
        }
        var e, f, g = {
                get: function() {
                    return gb
                },
                init: function(a) {
                    return gb || new d(a)
                },
                VERSION: "0.6.26"
            },
            h = Object.prototype.hasOwnProperty,
            i = a.Math,
            j = a.getComputedStyle,
            k = "touchstart",
            l = "touchmove",
            m = "touchcancel",
            n = "touchend",
            o = "skrollable",
            p = o + "-before",
            q = o + "-between",
            r = o + "-after",
            s = "skrollr",
            t = "no-" + s,
            u = s + "-desktop",
            v = s + "-mobile",
            w = "linear",
            x = 1e3,
            y = .004,
            z = 200,
            A = "start",
            B = "end",
            C = "center",
            D = "bottom",
            E = "___skrollable_id",
            F = /^(?:input|textarea|button|select)$/i,
            G = /^\s+|\s+$/g,
            H = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            I = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            J = /^(@?[a-z\-]+)\[(\w+)\]$/,
            K = /-([a-z0-9_])/g,
            L = function(a, b) {
                return b.toUpperCase()
            },
            M = /[\-+]?[\d]*\.?[\d]+/g,
            N = /\{\?\}/g,
            O = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            P = /[a-z\-]+-gradient/g,
            Q = "",
            R = "",
            S = function() {
                var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (j) {
                    var b = j(f, null);
                    for (var d in b)
                        if (Q = d.match(a) || +d == d && b[d].match(a)) break;
                    if (!Q) return Q = R = "", c;
                    Q = Q[0], "-" === Q.slice(0, 1) ? (R = Q, Q = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[Q]) : R = "-" + Q.toLowerCase() + "-"
                }
            },
            T = function() {
                var b = a.requestAnimationFrame || a[Q.toLowerCase() + "RequestAnimationFrame"],
                    c = Gb();
                return (Rb || !b) && (b = function(b) {
                    var d = Gb() - c,
                        e = i.max(0, 1e3 / 60 - d);
                    return a.setTimeout(function() {
                        c = Gb(), b()
                    }, e)
                }), b
            },
            U = function() {
                var b = a.cancelAnimationFrame || a[Q.toLowerCase() + "CancelAnimationFrame"];
                return (Rb || !b) && (b = function(b) {
                    return a.clearTimeout(b)
                }), b
            },
            V = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(a) {
                    return a
                },
                quadratic: function(a) {
                    return a * a
                },
                cubic: function(a) {
                    return a * a * a
                },
                swing: function(a) {
                    return -i.cos(a * i.PI) / 2 + .5
                },
                sqrt: function(a) {
                    return i.sqrt(a)
                },
                outCubic: function(a) {
                    return i.pow(a - 1, 3) + 1
                },
                bounce: function(a) {
                    var b;
                    if (.5083 >= a) b = 3;
                    else if (.8489 >= a) b = 9;
                    else if (.96208 >= a) b = 27;
                    else {
                        if (!(.99981 >= a)) return 1;
                        b = 91
                    }
                    return 1 - i.abs(3 * i.cos(1.028 * a * b) / b)
                }
            };
        d.prototype.refresh = function(a) {
            var d, e, f = !1;
            for (a === c ? (f = !0, hb = [], Qb = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
                var g = a[d],
                    h = g,
                    i = [],
                    j = ob,
                    k = sb,
                    l = !1;
                if (f && E in g && delete g[E], g.attributes) {
                    for (var m = 0, n = g.attributes.length; n > m; m++) {
                        var p = g.attributes[m];
                        if ("data-anchor-target" !== p.name)
                            if ("data-smooth-scrolling" !== p.name)
                                if ("data-edge-strategy" !== p.name)
                                    if ("data-emit-events" !== p.name) {
                                        var q = p.name.match(H);
                                        if (null !== q) {
                                            var r = {
                                                props: p.value,
                                                element: g,
                                                eventType: p.name.replace(K, L)
                                            };
                                            i.push(r);
                                            var s = q[1];
                                            s && (r.constant = s.substr(1));
                                            var t = q[2];
                                            /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                                            var u = q[3],
                                                v = q[4] || u;
                                            u && u !== A && u !== B ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === B ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Jb))
                                        }
                                    } else l = !0;
                        else k = p.value;
                        else j = "off" !== p.value;
                        else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
                    }
                    if (i.length) {
                        var w, x, y;
                        !f && E in g ? (y = g[E], w = hb[y].styleAttr, x = hb[y].classAttr) : (y = g[E] = Qb++, w = g.style.cssText, x = Cb(g)), hb[y] = {
                            element: g,
                            styleAttr: w,
                            classAttr: x,
                            anchorTarget: h,
                            keyFrames: i,
                            smoothScrolling: j,
                            edgeStrategy: k,
                            emitEvents: l,
                            lastFrameIndex: -1
                        }, Db(g, [o], [])
                    }
                }
            }
            for (zb(), d = 0, e = a.length; e > d; d++) {
                var z = hb[a[d][E]];
                z !== c && ($(z), ab(z))
            }
            return gb
        }, d.prototype.relativeToAbsolute = function(a, b, c) {
            var d = e.clientHeight,
                f = a.getBoundingClientRect(),
                g = f.top,
                h = f.bottom - f.top;
            return b === D ? g -= d : b === C && (g -= d / 2), c === D ? g += h : c === C && (g += h / 2), g += gb.getScrollTop(), 0 | g + .5
        }, d.prototype.animateTo = function(a, b) {
            b = b || {};
            var d = Gb(),
                e = gb.getScrollTop();
            return nb = {
                startTop: e,
                topDiff: a - e,
                targetTop: a,
                duration: b.duration || x,
                startTime: d,
                endTime: d + (b.duration || x),
                easing: V[b.easing || w],
                done: b.done
            }, nb.topDiff || (nb.done && nb.done.call(gb, !1), nb = c), gb
        }, d.prototype.stopAnimateTo = function() {
            nb && nb.done && nb.done.call(gb, !0), nb = c
        }, d.prototype.isAnimatingTo = function() {
            return !!nb
        }, d.prototype.isMobile = function() {
            return Rb
        }, d.prototype.setScrollTop = function(b, c) {
            return rb = c === !0, Rb ? Sb = i.min(i.max(b, 0), Ib) : a.scrollTo(0, b), gb
        }, d.prototype.getScrollTop = function() {
            return Rb ? Sb : a.pageYOffset || e.scrollTop || f.scrollTop || 0
        }, d.prototype.getMaxScrollTop = function() {
            return Ib
        }, d.prototype.on = function(a, b) {
            return jb[a] = b, gb
        }, d.prototype.off = function(a) {
            return delete jb[a], gb
        }, d.prototype.destroy = function() {
            var a = U();
            a(ub), xb(), Db(e, [t], [s, u, v]);
            for (var b = 0, d = hb.length; d > b; b++) eb(hb[b].element);
            e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ib && g.setStyle(ib, "transform", "none"), gb = c, ib = c, jb = c, kb = c, Ib = 0, Jb = 1, lb = c, mb = c, Kb = "down", Lb = -1, Nb = 0, Ob = 0, Pb = !1, nb = c, ob = c, pb = c, qb = c, rb = c, Qb = 0, sb = c, Rb = !1, Sb = 0, tb = c
        };
        var W = function() {
                var d, g, h, j, o, p, q, r, s, t, u, v;
                vb(e, [k, l, m, n].join(" "), function(a) {
                    var e = a.changedTouches[0];
                    for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
                    switch (o = e.clientY, p = e.clientX, t = a.timeStamp, F.test(j.tagName) || a.preventDefault(), a.type) {
                        case k:
                            d && d.blur(), gb.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                            break;
                        case l:
                            F.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, gb.setScrollTop(Sb - r, !0), q = o, u = t;
                            break;
                        default:
                        case m:
                        case n:
                            var f = g - o,
                                w = h - p,
                                x = w * w + f * f;
                            if (49 > x) {
                                if (!F.test(d.tagName)) {
                                    d.focus();
                                    var y = b.createEvent("MouseEvents");
                                    y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                                }
                                return
                            }
                            d = c;
                            var z = r / v;
                            z = i.max(i.min(z, 3), -3);
                            var A = i.abs(z / mb),
                                B = z * A + .5 * mb * A * A,
                                C = gb.getScrollTop() - B,
                                D = 0;
                            C > Ib ? (D = (Ib - C) / B, C = Ib) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, gb.animateTo(0 | C + .5, {
                                easing: "outCubic",
                                duration: A
                            })
                    }
                }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
            },
            X = function() {
                var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
                    o = Ab();
                for (j = 0, k = hb.length; k > j; j++)
                    for (a = hb[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (eb(b), h.frame = gb.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, eb(b, !0)), h.frame += m, kb && !h.isEnd && h.frame > Ib && (Ib = h.frame);
                for (Ib = i.max(Ib, Bb()), j = 0, k = hb.length; k > j; j++) {
                    for (a = hb[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ib - h.offset + m);
                    a.keyFrames.sort(Hb)
                }
            },
            Y = function(a, b) {
                for (var c = 0, d = hb.length; d > c; c++) {
                    var e, f, i = hb[c],
                        j = i.element,
                        k = i.smoothScrolling ? a : b,
                        l = i.keyFrames,
                        m = l.length,
                        n = l[0],
                        s = l[l.length - 1],
                        t = n.frame > k,
                        u = k > s.frame,
                        v = t ? n : s,
                        w = i.emitEvents,
                        x = i.lastFrameIndex;
                    if (t || u) {
                        if (t && -1 === i.edge || u && 1 === i.edge) continue;
                        switch (t ? (Db(j, [p], [r, q]), w && x > -1 && (yb(j, n.eventType, Kb), i.lastFrameIndex = -1)) : (Db(j, [r], [p, q]), w && m > x && (yb(j, s.eventType, Kb), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                            case "reset":
                                eb(j);
                                continue;
                            case "ease":
                                k = v.frame;
                                break;
                            default:
                            case "set":
                                var y = v.props;
                                for (e in y) h.call(y, e) && (f = db(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                                continue
                        }
                    } else 0 !== i.edge && (Db(j, [o, q], [p, r]), i.edge = 0);
                    for (var z = 0; m - 1 > z; z++)
                        if (k >= l[z].frame && l[z + 1].frame >= k) {
                            var A = l[z],
                                B = l[z + 1];
                            for (e in A.props)
                                if (h.call(A.props, e)) {
                                    var C = (k - A.frame) / (B.frame - A.frame);
                                    C = A.props[e].easing(C), f = cb(A.props[e].value, B.props[e].value, C), f = db(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                                }
                            w && x !== z && ("down" === Kb ? yb(j, A.eventType, Kb) : yb(j, B.eventType, Kb), i.lastFrameIndex = z);
                            break
                        }
                }
            },
            Z = function() {
                Pb && (Pb = !1, zb());
                var a, b, d = gb.getScrollTop(),
                    e = Gb();
                if (nb) e >= nb.endTime ? (d = nb.targetTop, a = nb.done, nb = c) : (b = nb.easing((e - nb.startTime) / nb.duration), d = 0 | nb.startTop + b * nb.topDiff), gb.setScrollTop(d, !0);
                else if (!rb) {
                    var f = qb.targetTop - d;
                    f && (qb = {
                        startTop: Lb,
                        topDiff: d - Lb,
                        targetTop: d,
                        startTime: Mb,
                        endTime: Mb + pb
                    }), qb.endTime >= e && (b = V.sqrt((e - qb.startTime) / pb), d = 0 | qb.startTop + b * qb.topDiff)
                }
                if (Rb && ib && g.setStyle(ib, "transform", "translate(0, " + -Sb + "px) " + tb), rb || Lb !== d) {
                    Kb = d > Lb ? "down" : Lb > d ? "up" : Kb, rb = !1;
                    var h = {
                            curTop: d,
                            lastTop: Lb,
                            maxTop: Ib,
                            direction: Kb
                        },
                        i = jb.beforerender && jb.beforerender.call(gb, h);
                    i !== !1 && (Y(d, gb.getScrollTop()), Lb = d, jb.render && jb.render.call(gb, h)), a && a.call(gb, !1)
                }
                Mb = e
            },
            $ = function(a) {
                for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                    for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = I.exec(h.props));) f = g[1], e = g[2], d = f.match(J), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? _(e) : [e.slice(1)], i[f] = {
                        value: e,
                        easing: V[d]
                    };
                    h.props = i
                }
            },
            _ = function(a) {
                var b = [];
                return O.lastIndex = 0, a = a.replace(O, function(a) {
                    return a.replace(M, function(a) {
                        return 100 * (a / 255) + "%"
                    })
                }), R && (P.lastIndex = 0, a = a.replace(P, function(a) {
                    return R + a
                })), a = a.replace(M, function(a) {
                    return b.push(+a), "{?}"
                }), b.unshift(a), b
            },
            ab = function(a) {
                var b, c, d = {};
                for (b = 0, c = a.keyFrames.length; c > b; b++) bb(a.keyFrames[b], d);
                for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) bb(a.keyFrames[b], d)
            },
            bb = function(a, b) {
                var c;
                for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
                for (c in a.props) b[c] = a.props[c]
            },
            cb = function(a, b, c) {
                var d, e = a.length;
                if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
                var f = [a[0]];
                for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
                return f
            },
            db = function(a) {
                var b = 1;
                return N.lastIndex = 0, a[0].replace(N, function() {
                    return a[b++]
                })
            },
            eb = function(a, b) {
                a = [].concat(a);
                for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = hb[d[E]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Db(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Cb(d), d.style.cssText = c.styleAttr, Db(d, c.classAttr)))
            },
            fb = function() {
                tb = "translateZ(0)", g.setStyle(ib, "transform", tb);
                var a = j(ib),
                    b = a.getPropertyValue("transform"),
                    c = a.getPropertyValue(R + "transform"),
                    d = b && "none" !== b || c && "none" !== c;
                d || (tb = "")
            };
        g.setStyle = function(a, b, c) {
            var d = a.style;
            if (b = b.replace(K, L).replace("-", ""), "zIndex" === b) d[b] = isNaN(c) ? c : "" + (0 | c);
            else if ("float" === b) d.styleFloat = d.cssFloat = c;
            else try {
                Q && (d[Q + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
            } catch (e) {}
        };
        var gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb = g.addEvent = function(b, c, d) {
                var e = function(b) {
                    return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
                        b.returnValue = !1, b.defaultPrevented = !0
                    }), d.call(this, b)
                };
                c = c.split(" ");
                for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Tb.push({
                    element: b,
                    name: f,
                    listener: d
                })
            },
            wb = g.removeEvent = function(a, b, c) {
                b = b.split(" ");
                for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
            },
            xb = function() {
                for (var a, b = 0, c = Tb.length; c > b; b++) a = Tb[b], wb(a.element, a.name, a.listener);
                Tb = []
            },
            yb = function(a, b, c) {
                jb.keyframe && jb.keyframe.call(gb, a, b, c)
            },
            zb = function() {
                var a = gb.getScrollTop();
                Ib = 0, kb && !Rb && (f.style.height = ""), X(), kb && !Rb && (f.style.height = Ib + e.clientHeight + "px"), Rb ? gb.setScrollTop(i.min(gb.getScrollTop(), Ib)) : gb.setScrollTop(a, !0), rb = !0
            },
            Ab = function() {
                var a, b, c = e.clientHeight,
                    d = {};
                for (a in lb) b = lb[a], "function" == typeof b ? b = b.call(gb) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
                return d
            },
            Bb = function() {
                var a = ib && ib.offsetHeight || 0,
                    b = i.max(a, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight);
                return b - e.clientHeight
            },
            Cb = function(b) {
                var c = "className";
                return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
            },
            Db = function(b, d, e) {
                var f = "className";
                if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return b[f] = d, c;
                for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Fb(g).replace(Fb(e[h]), " ");
                g = Eb(g);
                for (var j = 0, k = d.length; k > j; j++) - 1 === Fb(g).indexOf(Fb(d[j])) && (g += " " + d[j]);
                b[f] = Eb(g)
            },
            Eb = function(a) {
                return a.replace(G, "")
            },
            Fb = function(a) {
                return " " + a + " "
            },
            Gb = Date.now || function() {
                return +new Date
            },
            Hb = function(a, b) {
                return a.frame - b.frame
            },
            Ib = 0,
            Jb = 1,
            Kb = "down",
            Lb = -1,
            Mb = Gb(),
            Nb = 0,
            Ob = 0,
            Pb = !1,
            Qb = 0,
            Rb = !1,
            Sb = 0,
            Tb = [];
        "function" == typeof define && define.amd ? define("skrollr", function() {
            return g
        }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
    }(window, document) /**/

//Slider carousel



jQuery('.carousel').each(function() {
    jQuery(this).carousel({
        //Stop auto sliding 
        //interval: false
        //Auto sliding, define time interval like 5000.
        interval: 5600
    });
    jQuery(this).carousel('pause');
});