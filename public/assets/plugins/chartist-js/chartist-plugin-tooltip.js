/* chartist-plugin-tooltip 0.0.17
 * Copyright © 2016 Markus Padourek
 * Free to use under the WTFPL license.
 * http://www.wtfpl.net/
 */

! function(a, b) {
    "function" == typeof define && define.amd ? define(["chartist"], function(c) {
        return a.returnExportsGlobal = b(c)
    }) : "object" == typeof exports ? module.exports = b(require("chartist")) : a["Chartist.plugins.tooltips"] = b(Chartist)
}(this, function(a) {
    return function(a, b, c) {
        "use strict";

        function d(a) {
            f(a, "tooltip-show") || (a.className = a.className + " tooltip-show")
        }

        function e(a) {
            var b = new RegExp("tooltip-show\\s*", "gi");
            a.className = a.className.replace(b, "").trim()
        }

        function f(a, b) {
            return (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ") > -1
        }

        function g(a, b) {
            do a = a.nextSibling; while (a && !f(a, b));
            return a
        }

        function h(a) {
            return a.innerText || a.textContent
        }
        var i = {
            currency: void 0,
            currencyFormatCallback: void 0,
            tooltipOffset: {
                x: 0,
                y: -20
            },
            anchorToPoint: !1,
            appendToBody: !1,
            class: void 0,
            pointClass: "ct-point"
        };
        c.plugins = c.plugins || {}, c.plugins.tooltip = function(j) {
            return j = c.extend({}, i, j),
                function(i) {
                    function k(a, b, c) {
                        n.addEventListener(a, function(a) {
                            b && !f(a.target, b) || c(a)
                        })
                    }

                    function l(b) {
                        p = p || o.offsetHeight, q = q || o.offsetWidth;
                        var c, d, e = -q / 2 + j.tooltipOffset.x,
                            f = -p + j.tooltipOffset.y;
                        if (j.appendToBody) o.style.top = b.pageY + f + "px", o.style.left = b.pageX + e + "px";
                        else {
                            var g = n.getBoundingClientRect(),
                                h = b.pageX - g.left - a.pageXOffset,
                                i = b.pageY - g.top - a.pageYOffset;
                            !0 === j.anchorToPoint && b.target.x2 && b.target.y2 && (c = parseInt(b.target.x2.baseVal.value), d = parseInt(b.target.y2.baseVal.value)), o.style.top = (d || i) + f + "px", o.style.left = (c || h) + e + "px"
                        }
                    }
                    var m = j.pointClass;
                    i instanceof c.Bar ? m = "ct-bar" : i instanceof c.Pie && (m = i.options.donut ? "ct-slice-donut" : "ct-slice-pie");
                    var n = i.container,
                        o = n.querySelector(".chartist-tooltip");
                    o || (o = b.createElement("div"), o.className = j.class ? "chartist-tooltip " + j.class : "chartist-tooltip", j.appendToBody ? b.body.appendChild(o) : n.appendChild(o));
                    var p = o.offsetHeight,
                        q = o.offsetWidth;
                    e(o), k("mouseover", m, function(a) {
                        var e = a.target,
                            f = "",
                            k = i instanceof c.Pie ? e : e.parentNode,
                            m = k ? e.parentNode.getAttribute("ct:meta") || e.parentNode.getAttribute("ct:series-name") : "",
                            n = e.getAttribute("ct:meta") || m || "",
                            r = !!n,
                            s = e.getAttribute("ct:value");
                        if (j.transformTooltipTextFnc && "function" == typeof j.transformTooltipTextFnc && (s = j.transformTooltipTextFnc(s)), j.tooltipFnc && "function" == typeof j.tooltipFnc) f = j.tooltipFnc(n, s);
                        else {
                            if (j.metaIsHTML) {
                                var t = b.createElement("textarea");
                                t.innerHTML = n, n = t.value
                            }
                            if (n = '<span class="chartist-tooltip-meta">' + n + "</span>", r) f += n + "<br>";
                            else if (i instanceof c.Pie) {
                                var u = g(e, "ct-label");
                                u && (f += h(u) + "<br>")
                            }
                            s && (j.currency && (s = void 0 != j.currencyFormatCallback ? j.currencyFormatCallback(s, j) : j.currency + s.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")), s = '<span class="chartist-tooltip-value">' + s + "</span>", f += s)
                        }
                        f && (o.innerHTML = f, l(a), d(o), p = o.offsetHeight, q = o.offsetWidth)
                    }), k("mouseout", m, function() {
                        e(o)
                    }), k("mousemove", null, function(a) {
                        !1 === j.anchorToPoint && l(a)
                    })
                }
        }
    }(window, document, a), a.plugins.tooltips
});
//# sourceMappingURL=chartist-plugin-tooltip.min.js.map