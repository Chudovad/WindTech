slide_conter_max = 5;
slide_speed = 50;
slide_conter = 0;
lenta_marginLeft = 0;
lenta_counter = 0;
lenta_switch = 0;

function slide(act) {
    if (window.lenta == undefined) {
        lenta = document.getElementById('lenta_technology');
        arrow_left = document.getElementById('slide_technology_arrow_left');
        arrow_right = document.getElementById('slide_technology_arrow_right');
    }
    if (act == 'right') {
        lenta_switch = -1;
        slide_conter++;
    } else {
        lenta_switch = 1;
        slide_conter--;
    }
    if (slide_conter == 0) {
        arrow_left.onclick = function() {};
    } else {
        arrow_left.onclick = function() {
            slide('left');
        };
        arrow_left.className = '';
    }
    if (slide_conter == slide_conter_max) {
        arrow_right.onclick = function() {};
    } else {
        arrow_right.onclick = function() {
            slide('right');
        };
        arrow_right.className = '';
    }
    action_slide();
}

function action_slide() {
    if (lenta_counter < 90 / slide_speed) {
        lenta_marginLeft += slide_speed * lenta_switch;
        lenta.style.marginLeft = lenta_marginLeft + 'px';
        timeoutId = setTimeout(arguments.callee, 100);
        lenta_counter++;
    } else {
        lenta_counter = 0;

    }
}

jQuery(document).ready(function(e) {
    e("select.orderby").change(function() {
        e(this).closest("form").submit()
    });
    e(".klk_plus").live("click", function() {
        var t = parseInt(e(this).prev(".klk_qty").val());
        if (!t || t == "" || t == "NaN") t = 100;
        $klk_qty = e(this).prev(".klk_qty");
        var n = parseInt($klk_qty.attr("data-max"));
        if (n == "" || n == "NaN") n = "";
        n && (n == t || t > n) ? $klk_qty.val(n) : $klk_qty.val(t + 1);
        $klk_qty.trigger("change")
    });
    e(".klk_minus").live("click", function() {
        var t = parseInt(e(this).next(".klk_qty").val());
        if (!t || t == "" || t == "NaN") t = 0;
        $klk_qty = e(this).next(".klk_qty");
        var n = parseInt($klk_qty.attr("data-min"));
        if (n == "" || n == "NaN") n = 0;
        n && (n == t || t < n) ? $klk_qty.val(n) : t > 0 && $klk_qty.val(t - 1);
        $klk_qty.trigger("change")
    });
});

var SR = {};

function T$(i) {
    return document.getElementById(i)
}

function T$$(e, p) {
    return p.getElementsByTagName(e)
}

SR.accordion = function() {
    function slider(n) {
        this.n = n;
        this.h = [];
        this.c = []
    }
    slider.prototype.init = function(t, e, m, o, k) {
        var a = T$(t),
            i = x = 0;
        this.s = k || '', w = [], n = a.childNodes, l = n.length;
        this.m = m || false;
        for (i; i < l; i++) {
            if (n[i].nodeType != 3) {
                w[x] = n[i];
                x++
            }
        }
        this.l = x;
        for (i = 0; i < this.l; i++) {
            var v = w[i];
            this.h[i] = h = T$$(e, v)[0];
            this.c[i] = c = T$$('div', v)[0];
            h.onclick = new Function(this.n + '.pr(false,this)');
            if (o == i) {
                h.className = this.s;
                c.style.height = 'auto';
                c.d = 1
            } else {
                c.style.height = 0;
                c.d = -1
            }
        }
    };
    slider.prototype.pr = function(f, d) {
        for (var i = 0; i < this.l; i++) {
            var h = this.h[i],
                c = this.c[i],
                k = c.style.height;
            k = k == 'auto' ? 1 : parseInt(k);
            clearInterval(c.t);
            if ((k != 1 && c.d == -1) && (f == 1 || h == d)) {
                c.style.height = '';
                c.m = c.offsetHeight;
                c.style.height = k + 'px';
                c.d = 1;
                h.className = this.s;
                su(c, 1)
            } else if (k > 0 && (f == -1 || this.m || h == d)) {
                c.d = -1;
                h.className = '';
                su(c, -1)
            }
        }
    };

    function su(c) {
        c.t = setInterval(function() {
            sl(c)
        }, 10)
    };

    function sl(c) {
        var h = c.offsetHeight,
            d = c.d == 1 ? c.m - h : h;
        c.style.height = h + (Math.ceil(d / 2) * c.d) + 'px';
        c.style.opacity = h / c.m;
        c.style.filter = 'alpha(opacity=' + h * 100 / c.m + ')';
        if ((c.d == 1 && h >= c.m) || (c.d != 1 && h == 1)) {
            if (c.d == 1) {
                c.style.height = 'auto'
            }
            clearInterval(c.t)
        }
    };
    return {
        slider: slider
    }
}();

jQuery(document).ready(function() {
    jQuery('#close').click(function() {
        jQuery('#money_container').delay(100).fadeOut(100);
        return false;
    });
});




