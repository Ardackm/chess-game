(function () {
    var aa = "pawn knight bishop rook queen king".split(" ");

    function ba(a, b) {
        return "abcdefgh" [b] + "12345678" [a]
    }

    function ca(a) {
        return "abcdefgh".indexOf(a[0]) + 8 * "12345678".indexOf(a[1])
    }

    function g(a) {
        return ba(a >>> 3, a & 7)
    };

    function n(a, b) {
        this.a = a >>> 0;
        this.b = b >>> 0
    }

    function da(a) {
        a >>>= 0;
        a -= a >>> 1 & 1431655765;
        a = (a & 858993459) + (a >>> 2 & 858993459);
        return 16843009 * (a + (a >>> 4) & 252645135) >>> 24
    }

    function ea(a) {
        a >>>= 0;
        return (a & a - 1) >>> 0
    }

    function fa(a) {
        a >>>= 0;
        return da((a & -a) - 1)
    }

    function p(a) {
        return da(a.a) + da(a.b)
    }

    function ha(a) {
        return a.a ? fa(a.a) : 32 + fa(a.b)
    }

    function t(a) {
        var b = ha(a);
        a.a ? a.a = ea(a.a) : a.b = ea(a.b);
        return b
    }

    function u(a) {
        return !a.a && !a.b
    }

    function v(a, b) {
        b >>>= 0;
        return 32 > b ? !(a.a & 1 << b) : !(a.b & 1 << b - 32)
    }

    function w(a, b) {
        b >>>= 0;
        32 > b ? a.a = (a.a | 1 << b) >>> 0 : a.b = (a.b | 1 << b - 32) >>> 0;
        return a
    }

    function ia(a, b) {
        b >>>= 0;
        32 > b ? a.a = (a.a & ~(1 << b)) >>> 0 : a.b = (a.b & ~(1 << b - 32)) >>> 0
    }
    n.prototype.and = function (a) {
        this.a = (this.a & a.a) >>> 0;
        this.b = (this.b & a.b) >>> 0;
        return this
    };

    function x(a, b) {
        a.a = (a.a & ~b.a) >>> 0;
        a.b = (a.b & ~b.b) >>> 0;
        return a
    }
    n.prototype.or = function (a) {
        this.a = (this.a | a.a) >>> 0;
        this.b = (this.b | a.b) >>> 0;
        return this
    };
    n.prototype.xor = function (a) {
        this.a = (this.a ^ a.a) >>> 0;
        this.b = (this.b ^ a.b) >>> 0;
        return this
    };

    function ja(a) {
        a.a = ~a.a >>> 0;
        a.b = ~a.b >>> 0;
        return a
    }

    function y(a, b) {
        b >>>= 0;
        31 < b ? (a.b = a.a << b - 32 >>> 0, a.a = 0) : 0 < b && (a.b = (a.b << b | a.a >>> 32 - b) >>> 0, a.a = a.a << b >>> 0);
        return a
    }

    function z(a, b) {
        b >>>= 0;
        31 < b ? (a.a = a.b >>> b - 32, a.b = 0) : 0 < b && (a.a = (a.a >>> b | a.b << 32 - b) >>> 0, a.b >>>= b);
        return a
    }

    function A(a, b) {
        63 < b || -63 > b ? a.a = a.b = 0 : 0 < b ? y(a, b) : 0 > b && z(a, -b);
        return a
    }

    function ka(a, b) {
        return a.a === b.a && a.b === b.b
    }

    function C(a) {
        return D(a.a, a.b)
    }

    function D(a, b) {
        return new n(a, b)
    }

    function F(a) {
        return w(D(0, 0), a)
    }

    function la() {
        var a = ma;
        return A(D(270549120, 16909320).and(A(D(4294967295, 4294967295), 8 * a)), a)
    }

    function na() {
        var a = oa;
        return A(D(134480385, 2151686160).and(A(D(4294967295, 4294967295), 8 * -a)), a)
    }

    function pa() {
        var a = w(D(0, 0), qa),
            b = x(z(C(a), 1), G[7]),
            d = x(x(z(C(a), 2), G[7]), G[6]),
            c = x(y(C(a), 1), G[0]);
        a = x(x(y(C(a), 2), G[0]), G[1]);
        d = d.or(a);
        b = b.or(c);
        return y(C(d), 8).or(z(d, 8)).or(y(C(b), 16)).or(z(b, 16))
    }

    function ra() {
        var a = w(D(0, 0), sa),
            b = x(z(C(a), 1), G[7]).or(x(y(C(a), 1), G[0])),
            d = z(C(a).or(b), 8);
        a = y(C(a).or(b), 8);
        return b.or(d).or(a)
    }
    for (var ta = D(4294967295, 4294967295), ua = D(1437226410, 1437226410), va = D(2857740885, 2857740885), wa = [], xa = 0; 8 > xa; ++xa) wa.push(y(D(16843009, 16843009), xa));
    for (var G = wa, H = [], ya = 0; 8 > ya; ++ya) H.push(y(D(255, 0), 8 * ya));
    for (var za = [], ma = -7; 8 > ma; ++ma) za.push(la());
    for (var Aa = [], oa = -7; 8 > oa; ++oa) Aa.push(na());
    for (var Ba = [], qa = 0; 64 > qa; ++qa) Ba.push(pa());
    for (var Ca = [], sa = 0; 64 > sa; ++sa) Ca.push(ra());

    function Da(a, b) {
        this.b = a >>> 0;
        this.a = b >>> 0
    }
    for (var Ea = [], Fa = 0; 1586 > Fa; ++Fa) Ea.push(1 + 4294967295 * Math.random() >>> 0);

    function I(a, b) {
        a.b = (a.b ^ Ea[b]) >>> 0;
        a.a = (a.a ^ Ea[b + 1]) >>> 0
    }

    function J(a, b) {
        0 <= b && I(a, 1570 + (b & 7))
    };

    function L(a, b, d, c, f) {
        this.value = b & 63 | (a & 63) << 6 | (d & 15) << 12 | (c & 7) << 16 | ((f | 0) & 7) << 19
    }

    function M(a) {
        return a.value >>> 6 & 63
    }

    function N(a) {
        return a.value >>> 12 & 15
    }

    function O(a) {
        return a.value >>> 16 & 7
    }

    function P(a) {
        return 2 === N(a) || 3 === N(a)
    }

    function Ga(a) {
        return 5 !== N(a) ? a.value & 63 : (a.value & 63) + (M(a) < (a.value & 63) ? -8 : 8)
    };

    function Ha() {
        this.b = new Da(0, 0);
        this.a = [C(H[1]).or(H[6]), F(1).or(F(6)).or(F(57)).or(F(62)), F(2).or(F(5)).or(F(58)).or(F(61)), F(0).or(F(7)).or(F(56)).or(F(63)), F(3).or(F(59)), F(4).or(F(60)), C(H[0]).or(H[1]), C(H[6]).or(H[7])];
        this.h = [];
        this.c = 0;
        this.g = 15;
        this.f = -1;
        this.l = 0;
        this.i = [];
        this.j = [];
        for (var a = this.h.length = 0; 64 > a; ++a) {
            var b;
            a: {
                for (b = 0; 5 >= b; ++b)
                    if (!v(this.a[b], a)) break a;b = null
            }
            this.h.push(b)
        }
        this.b = new Da(0, 0);
        this.c && I(this.b, 0);
        for (a = 0; 1 >= a; ++a)
            for (b = 0; 5 >= b; ++b) {
                var d = this.b,
                    c = b,
                    f = a,
                    e =
                    Q(this, b, a);
                for (e = C(e); !u(e);) {
                    var h = t(e);
                    I(d, 2 + c + 6 * f + 12 * h)
                }
            }
        I(this.b, 1538 + this.g);
        J(this.b, this.f);
        this.m = []
    }
    var R = [7, 63, 0, 56],
        Ia = [ja(y(D(16843009, 16843009), 7)), ta, ja(y(D(16843009, 16843009), 0))];

    function S(a, b, d) {
        d = Ja(a, !!d);
        return b ? d : d.filter(Ha.prototype.o, a)
    }

    function Q(a, b, d) {
        return C(a.a[b]).and(a.a[6 + d])
    }

    function Ka(a) {
        return C(a.a[6]).or(a.a[7])
    }

    function U(a) {
        return La(a, a.c ^ 1, ha(Q(a, 5, a.c)))
    }

    function V(a, b, d, c) {
        var f = D(0, 0);
        d = 8 * d + c;
        c = Ia[1 + c];
        for (A(a, d); !u(a.and(c)); A(x(a, b), d)) f.or(a);
        return f
    }

    function Oa(a, b) {
        return V(C(a), b, 1, 1).or(V(C(a), b, 1, -1)).or(V(C(a), b, -1, 1)).or(V(C(a), b, -1, -1))
    }

    function Pa(a, b) {
        return V(C(a), b, 0, 1).or(V(C(a), b, 0, -1)).or(V(C(a), b, 1, 0)).or(V(C(a), b, -1, 0))
    }

    function La(a, b, d) {
        var c = Q(a, 0, b),
            f = 0 === b;
        var e = A(x(C(c), G[0]), f ? 7 : -9);
        c = A(x(C(c), G[7]), f ? 9 : -7);
        e = e.or(c);
        if (!v(e, d)) return !0;
        e = Q(a, 1, b);
        if (!u(C(Ba[d]).and(e))) return !0;
        e = Q(a, 5, b);
        if (!u(C(Ca[d]).and(e))) return !0;
        e = Ka(a);
        c = Q(a, 4, b);
        f = C(Q(a, 2, b)).or(c);
        f = Oa(f, e);
        if (!v(f, d)) return !0;
        a = C(Q(a, 3, b)).or(c);
        a = Pa(a, e);
        return v(a, d) ? !1 : !0
    }

    function W(a, b, d) {
        I(a.b, 1538 + a.g);
        a.g &= ~(1 << b + (d ? 0 : 2));
        I(a.b, 1538 + a.g)
    }

    function Qa(a, b, d) {
        if (0 === (a.g & 1 << b + (d ? 0 : 2))) return !1;
        var c = d ? 1 : -1,
            f = 0 === b ? 4 : 60,
            e = Ka(a);
        (c = !v(e, f + c) || !v(e, f + 2 * c) || !d && !v(e, f + 3 * c)) || (c = b ^ 1, d = d ? 1 : -1, b = 0 === b ? 4 : 60, c = !(!La(a, c, b) && !La(a, c, b + d) && !La(a, c, b + 2 * d)));
        return c ? !1 : !0
    }

    function Ra(a) {
        var b = a.b;
        return 3 <= a.m.reduce(function (a, c) {
            return a + (c.b === b.b && c.a === b.a ? 1 : 0)
        }, 0)
    }

    function Sa(a) {
        if (!u(a.a[0]) || !u(a.a[3]) || !u(a.a[4])) return !1;
        if (4 > p(a.a[6]) + p(a.a[7])) return !0;
        if (!u(a.a[1])) return !1;
        a = a.a[2];
        return ka(C(a).and(ua), a) || ka(C(a).and(va), a) ? !0 : !1
    }

    function Ta(a) {
        return 100 <= a.l || Ra(a) || Sa(a)
    }

    function Ja(a, b) {
        function d(a, b, d) {
            for (; !u(a);) {
                var c = t(a);
                e.push(new L(c - b, c, d, 0, K.h[c]))
            }
        }

        function c(a, b, c) {
            d(C(a), b, c ? 15 : 11);
            d(C(a), b, c ? 14 : 10);
            d(C(a), b, c ? 13 : 9);
            d(C(a), b, c ? 12 : 8)
        }

        function f(a, b, c) {
            for (; !u(b);) {
                var d = t(b);
                e.push(new L(a, d, v(l, d) ? 0 : 4, c, K.h[d]))
            }
        }
        var e = [],
            h = a.c,
            l = a.a[6 + (h ^ 1)],
            k = Ka(a),
            K = a,
            q = 1 - 2 * h,
            B = 8 * q,
            r = Q(a, 0, h),
            m = H[h ? 0 : 7];
        if (!b) {
            var E = x(x(A(C(r).and(H[h ? 6 : 1]), 2 * B), k), A(C(k), B));
            d(E, 2 * B, 1);
            E = x(A(C(r), B), k);
            d(x(C(E), m), B, 0);
            c(C(E).and(m), B, !1)
        }
        var Ma = G[h ? 7 : 0];
        E = B - q;
        var T = A(x(C(r), Ma),
            E).and(l);
        d(x(C(T), m), E, 4);
        c(C(T).and(m), E, !0);
        T = G[h ? 0 : 7];
        B += q;
        var Na = A(x(C(r), T), B).and(l);
        d(x(C(Na), m), B, 4);
        c(C(Na).and(m), B, !0);
        0 <= a.f && (m = A(x(F(a.f + q).and(r), Ma), E), d(m, E, 5), q = A(x(F(a.f - q).and(r), T), B), d(q, B, 5));
        q = ja(C(a.a[6 + h]));
        b && q.and(l);
        for (r = C(Q(a, 1, h)); !u(r);) m = t(r), f(m, C(Ba[m]).and(q), 1);
        for (r = C(Q(a, 4, h)); !u(r);) m = t(r), f(m, Oa(F(m), k).or(Pa(F(m), k)).and(q), 4);
        for (r = C(Q(a, 2, h)); !u(r);) m = t(r), f(m, Oa(F(m), k).and(q), 2);
        for (r = C(Q(a, 3, h)); !u(r);) m = t(r), f(m, Pa(F(m), k).and(q), 3);
        k = ha(Q(a, 5, h));
        f(k, C(Ca[k]).and(q), 5);
        b || (Qa(a, h, !0) && e.push(new L(k, k + 2, 2, 5, null)), Qa(a, h, !1) && e.push(new L(k, k - 2, 3, 5, null)));
        return e
    }

    function Ua(a, b, d, c, f) {
        var e = F(c).or(F(f));
        a.a[b].xor(e);
        a.a[6 + d].xor(e);
        a.h[c] = null;
        a.h[f] = b;
        I(a.b, 2 + b + 6 * d + 12 * c);
        I(a.b, 2 + b + 6 * d + 12 * f)
    }

    function Va(a, b, d, c, f) {
        ia(a.a[b], f);
        w(a.a[d], f);
        a.h[f] = d;
        I(a.b, 2 + b + 6 * c + 12 * f);
        I(a.b, 2 + d + 6 * c + 12 * f)
    }

    function Wa(a, b) {
        if (N(b) & 4) {
            var d = b.value >>> 19 & 7,
                c = a.c ^ 1,
                f = Ga(b);
            ia(a.a[d], f);
            ia(a.a[6 + c], f);
            a.h[f] = null;
            I(a.b, 2 + d + 6 * c + 12 * f)
        }
        P(b) && (d = a.c, c = 2 === N(b), f = R[d + (c ? 0 : 2)], Ua(a, 3, d, f, f + (c ? -2 : 3)));
        Ua(a, O(b), a.c, M(b), b.value & 63);
        N(b) & 8 && Va(a, 0, N(b) & 8 ? 1 + (N(b) & 3) : 0, a.c, b.value & 63)
    }

    function Xa(a, b) {
        N(b) & 8 && Va(a, N(b) & 8 ? 1 + (N(b) & 3) : 0, 0, a.c, b.value & 63);
        Ua(a, O(b), a.c, b.value & 63, M(b));
        if (P(b)) {
            var d = a.c,
                c = 2 === N(b),
                f = R[d + (c ? 0 : 2)];
            Ua(a, 3, d, f + (c ? -2 : 3), f)
        }
        N(b) & 4 && (d = b.value >>> 19 & 7, c = a.c ^ 1, b = Ga(b), w(a.a[d], b), w(a.a[6 + c], b), a.h[b] = d, I(a.b, 2 + d + 6 * c + 12 * b))
    }
    Ha.prototype.o = function (a) {
        Wa(this, a);
        var b = U(this);
        Xa(this, a);
        return !b
    };

    function X(a, b) {
        var d = a.b;
        a.m.push(new Da(d.b, d.a));
        Wa(a, b);
        if (U(a)) return Xa(a, b), a.m.pop(), !1;
        a.i.push(b);
        a.j.push(a.f);
        a.j.push(a.g);
        a.j.push(a.l);
        J(a.b, a.f);
        a.f = 1 === N(b) ? b.value & 63 : -1;
        J(a.b, a.f);
        d = a.c;
        5 === O(b) ? (W(a, d, !0), W(a, d, !1)) : 3 === O(b) && (M(b) === R[d + 0] ? W(a, d, !0) : M(b) === R[d + 2] && W(a, d, !1));
        d ^= 1;
        3 === (b.value >>> 19 & 7) && (Ga(b) === R[d + 0] ? W(a, d, !0) : Ga(b) === R[d + 2] && W(a, d, !1));
        N(b) & 4 || 0 === O(b) ? a.l = 0 : ++a.l;
        a.c = d;
        I(a.b, 0);
        return !0
    }

    function Y(a) {
        if (a.i.length) {
            var b = a.i.pop();
            a.c ^= 1;
            I(a.b, 0);
            Xa(a, b);
            a.j.pop();
            I(a.b, 1538 + a.g);
            a.g = a.j.pop();
            I(a.b, 1538 + a.g);
            J(a.b, a.f);
            a.f = a.j.pop();
            J(a.b, a.f);
            a.m.pop()
        }
    };
    var Ya = [100, 300, 300, 500, 900, 2E4],
        Za = [
            [0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 20, 30, 30, 20, 10, 10, 5, 5, 10, 25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 5, 10, 10, -20, -20, 10, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0],
            [-50, -40, -30, -30, -30, -30, -40, -50, -40, -20, 0, 0, 0, 0, -20, -40, -30, 0, 10, 15, 15, 10, 0, -30, -30, 5, 15, 20, 20, 15, 5, -30, -30, 0, 15, 20, 20, 15, 0, -30, -30, 5, 10, 15, 15, 10, 5, -30, -40, -20, 0, 5, 5, 0, -20, -40, -50, -40, -30, -30, -30, -30, -40, -50],
            [-20, -10, -10, -10, -10, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 10, 10, 5, 0, -10, -10, 5, 5, 10, 10,
                5, 5, -10, -10, 0, 10, 10, 10, 10, 0, -10, -10, 10, 10, 10, 10, 10, 10, -10, -10, 5, 0, 0, 0, 0, 5, -10, -20, -10, -10, -10, -10, -10, -10, -20
            ],
            [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 10, 10, 10, 10, 10, 5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 5, 5, 0, 0, 0],
            [-20, -10, -10, -5, -5, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 5, 5, 5, 0, -10, -5, 0, 5, 5, 5, 5, 0, -5, 0, 0, 5, 5, 5, 5, 0, -5, -10, 5, 5, 5, 5, 5, 0, -10, -10, 0, 5, 0, 0, 0, 0, -10, -20, -10, -10, -5, -5, -10, -10, -20],
            [-30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30,
                -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -20, -30, -30, -40, -40, -30, -30, -20, -10, -20, -20, -20, -20, -20, -20, -10, 20, 20, 0, 0, 0, 0, 20, 20, 20, 30, 10, 0, 0, 10, 30, 20
            ]
        ],
        $a = Ya[0] / 2;

    function ab(a, b) {
        for (var d = 0, c = 0; 5 > c; ++c) d += p(Q(a, c, b)) * Ya[c];
        1 < p(Q(a, 2, b)) && (d += $a);
        return d
    }

    function bb(a, b) {
        for (var d = 0, c = 0; 5 >= c; ++c)
            for (var f = C(Q(a, c, b)); !u(f);) {
                var e = t(f);
                d += Za[c][b ? e : 56 ^ e]
            }
        return d
    }

    function cb(a) {
        function b(a) {
            function b(a) {
                var b = N(a) & 4 ? (1 + (a.value >>> 19 & 7)) / (1 + O(a)) : 0;
                b = 6 * b + O(a);
                b = 16 * b + N(a);
                b = 64 * b + (a.value & 63);
                return b = 64 * b + M(a)
            }
            a.sort(function (a, c) {
                return b(c) - b(a)
            });
            return a
        }

        function d(a, c, e) {
            if (Ta(a)) return 0;
            var h = ab(a, 0) - ab(a, 1);
            var l = bb(a, 0) - bb(a, 1);
            l = h + l;
            ++f;
            if (h = 0 === a.c) {
                if (l >= e) return e;
                c = l > c ? l : c
            } else {
                if (l <= c) return c;
                e = l < e ? l : e
            }
            l = b(S(a, !0, !U(a)));
            for (var k = 0; k < l.length; ++k)
                if (X(a, l[k])) {
                    var m = d(a, c, e);
                    Y(a);
                    if (h) {
                        if (m >= e) return e;
                        c = m > c ? m : c
                    } else {
                        if (m <= c) return c;
                        e = m <
                            e ? m : e
                    }
                } return h ? c : e
        }

        function c(a, f, e, h) {
            if (1 > f) return d(a, e, h);
            for (var l = b(S(a, !0, !1)), k = 0 === a.c, m = !1, q = 0; q < l.length; ++q)
                if (X(a, l[q])) {
                    m = !0;
                    var r = c(a, f - 1, e, h);
                    Y(a);
                    k ? e = r > e ? r : e : h = r < h ? r : h;
                    if (h <= e) break
                } if (!m) {
                if (!U(a)) return 0;
                a = Ya[5];
                return k ? -a : a
            }
            return Ta(a) ? 0 : k ? e : h
        }
        for (var f = 0, e = null, h = -Infinity, l = Infinity, k = b(S(a, !0)), K = 0; K < k.length; ++K)
            if (X(a, k[K])) {
                var q = c(a, 3, h, l);
                Y(a);
                0 === a.c ? q > h && (h = q, e = k[K]) : q < l && (l = q, e = k[K])
            } return e
    };

    function db() {
        this.a = new Ha
    }

    function eb() {
        var a = $("<table>"),
            b = "<tr><th></th>" + "abcdefgh".split("").map(function (a) {
                return '<th class="file">' + a + "</th>"
            }).join("") + "<th></th></tr>";
        a.append(b);
        for (var d = 0; 8 > d; ++d) {
            var c = 7 - d,
                f = $("<tr>");
            a.append(f);
            var e = '<th class="rank">' + (8 - d) + "</th>";
            f.append(e);
            for (var h = 0; 8 > h; ++h) {
                var l = $("<td>"),
                    k = (c + h) % 2 ? "light" : "dark";
                l.attr("id", ba(c, h));
                l.attr("title", "Algebraic: " + ba(c, h) + "\nRank: " + c + "\nFile: " + h + "\nIndex: " + (h + 8 * c) + "\nColor: " + k);
                l.addClass(k);
                f.append(l)
            }
            f.append(e)
        }
        a.append(b);
        $("#chessboard").append(a)
    }

    function fb() {
        $("#chessboard table tr td, #chessboard table tr td div").removeClass("from to positional capture double-push en-passant promotion castle king-castle queen-castle")
    }

    function gb() {
        $("#chessboard table tr td div.ui-draggable").draggable("destroy");
        $("#chessboard table tr td.ui-droppable").droppable("destroy")
    }

    function hb(a) {
        var b = S(a.a);
        $("#moves").html('<a href="#" id="undo" class="' + (a.a.i.length ? "can" : "cannot") + '">undo</a><br/><a href="#" id="auto" class="' + (0 < b.length ? "can" : "cannot") + '">auto</a><br/>' + b.map(function (a, b) {
            return '<a href="#" id="' + b + '">' + (P(a) ? "0-0" + (3 === N(a) ? "-0" : "") : " NBRQK".charAt(O(a)) + g(M(a)) + (N(a) & 4 ? "x" : "-") + g(a.value & 63) + (5 === N(a) ? "e.p." : "") + (N(a) & 8 ? " NBRQK".charAt(N(a) & 8 ? 1 + (N(a) & 3) : 0) : "")) + "</a><br/>"
        }).join(""));
        $("#chessboard table tr td, #chessboard table tr td div").removeClass("can-move");
        b.forEach(function (a) {
            a = $("#" + g(M(a)));
            a.add(a.children()).addClass("can-move")
        });
        var d = !1;
        $("#chessboard table tr td div.can-move").mouseenter(function () {
            if (!d) {
                var c = $(this),
                    f = c.parent(),
                    e = ca("" + f.attr("id"));
                f = f.add(c);
                f.toggleClass("from", b.some(function (a) {
                    return M(a) === e
                }));
                f.hasClass("from") && (b.forEach(function (a) {
                    if (M(a) === e) {
                        var b = $("#" + g(a.value & 63));
                        b = b.add(b.children());
                        b.addClass("to");
                        b.addClass(0 === N(a) ? "positional" : "");
                        b.addClass(N(a) & 4 ? "capture" : "");
                        b.addClass(1 === N(a) ? "double-push" :
                            "");
                        b.addClass(5 === N(a) ? "en-passant" : "");
                        b.addClass(N(a) & 8 ? "promotion" : "");
                        b.addClass(P(a) ? "castle" : "");
                        b.addClass(2 === N(a) ? "king-castle" : "");
                        b.addClass(3 === N(a) ? "queen-castle" : "")
                    }
                }), gb(), $("#chessboard table tr td.to").droppable({
                    drop: function () {
                        var d = ca("" + $(this).attr("id")),
                            c = b.filter(function (a) {
                                return M(a) === e && (a.value & 63) === d
                            });
                        0 < c.length ? (X(a.a, c[0]), Z(a)) : (fb(), gb())
                    }
                }), c.draggable({
                    start: function () {
                        d = !0
                    },
                    stop: function () {
                        d = !1
                    },
                    containment: "#chessboard table",
                    zIndex: 10,
                    revert: "invalid"
                }))
            }
        }).mouseleave(function () {
            d ||
                fb()
        });
        $("#moves a").click(function () {
            var c = $(this).attr("id");
            "undo" === c ? (Y(a.a), Y(a.a), Z(a)) : "auto" === c ? ib(a) : (X(a.a, b[parseInt(c, 10)]), Z(a))
        })
    }

    function ib(a) {
        $("#moves").html("");
        var b = $("#dim");
        b.fadeIn(function () {
            var d = cb(a.a);
            if (!d) throw Error("Move not found");
            X(a.a, d);
            var c = $("#" + g(M(d)));
            d = $("#" + g(d.value & 63));
            var f = d.offset().left - c.offset().left,
                e = d.offset().top - c.offset().top,
                h = c.children("div");
            h.css({
                position: "relative",
                top: "0px",
                left: "0px"
            });
            b.fadeOut(function () {
                h.animate({
                    top: e + "px",
                    left: f + "px"
                }, function () {
                    Z(a)
                })
            })
        })
    }

    function Z(a) {
        fb();
        gb();
        $("#chessboard table tr td div").remove();
        $("#chessboard table tr td").removeClass("white black turn last-move " + aa.join(" "));
        for (var b = a.a.a[6], d = a.a.a[7], c = 0; 64 > c; ++c)
            for (var f = $("#" + g(c)), e = 0; 5 >= e; ++e)
                if (!v(a.a.a[e], c)) {
                    var h = 0 === a.a.c ? !v(b, c) : !v(d, c),
                        l = $("<div>");
                    l.attr("title", f.attr("title") + "\nPiece: " + aa[e] + "\nColor: " + (v(b, c) ? "black" : "white"));
                    l.text("\u2659\u265f\u2658\u265e\u2657\u265d\u2656\u265c\u2655\u265b\u2654\u265a".charAt(2 * e + (v(b, c) ? 1 : 0)));
                    var k = l.add(f);
                    k.addClass(aa[e]);
                    k.toggleClass("white", !v(b, c));
                    k.toggleClass("black", !v(d, c));
                    k.toggleClass("turn", h);
                    f.append(l);
                    break
                } b = a.a;
        b = b.i.length ? b.i[b.i.length - 1] : null;
        null !== b && ($("#" + g(M(b))).addClass("last-move"), $("#" + g(b.value & 63)).addClass("last-move"));
        b = a.a;
        b = S(b).length ? 100 <= b.l ? 3 : Ra(b) ? 4 : Sa(b) ? 5 : 0 : U(b) ? 1 : 2;
        0 === b && 1 === a.a.c ? ib(a) : (hb(a), $("#dim").css({
            display: "none"
        }), 1 === b ? $("#moves").append("&#35;<br/>" + (a.a.c ? "1-0" : "0-1")) : 0 !== b && $("#moves").append("&frac12;-&frac12;"))
    };
    window.makeChessGame = function () {
        eb();
        Z(new db)
    };
})();