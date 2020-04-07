$(document).ready(function() {
    var num_kp = Math.random() * 100000;
    $('#num_kp span').text(num_kp.toFixed());
    var m_setka = new Array(0, 316, 632, 948, 1264, 510); /*1шт; 2шт; 3шт; 4шт; Дверная*/
    var otliv = new Array(0, 60, 68, 80, 100, 120, 140, 160, 180, 200, 165, 187, 220, 275, 330, 385); /*50Бел; 70Бел; 100Бел; 150Бел; 200Бел; 250Бел; 300Бел; 350Бел; 400Бел; 50Кор; 70Кор; 100Кор; 150Кор; 200Кор; 250Кор*/
    var podokon = new Array(0, 63, 95, 126, 158, 189, 221, 252, 284, 315, 347, 378, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 420, 635); /*100Эко; 150Эко; 200Эко; 250Эко; 300Эко; 350Эко; 400Эко; 450Эко; 500Эко; 550Эко; 600Эко; 100Crystal; 150Crystal; 200Crystal; 250Crystal; 300Crystal; 350Crystal; 400Crystal; 450Crystal; 500Crystal; 550Crystal; 600Crystal; 300Ламинир; 500Ламинир*/
    var kozyryok = new Array(0, 128, 136, 148, 158, 168, 352, 374, 407, 462, 517); /*50Бел; 70Бел; 100Бел; 150Бел; 200Бел; 50Кор; 70Кор; 100Кор; 150Кор; 200Кор*/
    var otkos = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14); /*Внутренний откос 1м.п. - ПВХ100мм; ПВХ150мм; ПВХ200мм; ПВХ250мм; ПВХ300мм; ПВХ350мм; ПВХ400мм; ПВХ450мм; ПВХ500мм; ПВХ550мм; Дерево50мм; Дерево100мм; Дерево200мм; Дерево300мм;*/
    var otkos_nar = new Array(0, 1, 2, 3, 4, 5, 6, 7); /*Наружный откос - ПВХ120мм; ПВХ200мм; ПВХ300мм; Дерево50мм; Дерево100мм; Дерево200мм; Дерево300мм;*/
    var dobor = new Array(0, 1, 2, 3, 4, 5, 6); /*20мм; 40мм; 60мм; 80мм; 100мм; 120мм*/
    var erker = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8); /*Соеденитель1шт; Соеденитель2шт; Эркер1шт; Эркер2шт; Угол1шт; Угол2шт; Кость1шт; Кость2шт;*/
    var ogranichitel = new Array(0, 95, 50);
    var naschelnik = new Array(0, 100, 200, 163, 325, 263); /*1 м.п. Наличника и нащельника - Нащельник1Сторона;Нащельник2Стороны; Наличник1Сторона;Наличник2Стороны; Нащельник и наличник*/
    var ruchka = new Array(0, 250, 700, 1400, 2550, 2300, 4000, 3200); /*Ручка стандартная; Замок BSL; Узказя-Широкая; Широкая-Широкая; Ручка с двух сторон + личина; Нажимной гарнитур с защелкой и личиной; Замок с прижимом; Офисная ручка с личиной*/
    var porog = new Array(0, 1900, 2550); /*Порог для дверей и входных групп 1м.п. - Высокий ПВХ; Низкий Алюминиевый; Высокой Алюминиевый*/
    var profill = new Array(0, 1, 2, 3, 4); /*Профиль - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    var type_glas = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); /*Однокамерный; Двухкамерный; ОднокамерныйТеплопакет; ДвухкамерныйТеплопакет; ОднокамерныйТонированный;ДвухкамерныйТонированый; Стекло4мм; Стекло4ммТонированное; Сэндвич32ммБелый; Сэндвич32ммЛаминированный1Сторона; Сэндвич32ммЛаминированный2Стороны*/
    var furnitura = new Array(0, 1, 2, 3, 4, 5, 6); /*SiAuFavorit; RotoNT*; Входная группа; SiAuTitan; SiAuTitanПротивовзломная; SiAuTitanСкрытыеПетли*/
    var montazh = new Array(0, 1, 2, 3); /*Стандарт; Термо; Сложный*/
    var color_profill = new Array(0, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2); /*0-Белый; 1-ЛаминацияСтандартная; 2-ЛаминацияНеСтандартная*/
    var color_profill_2 = new Array(0, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2); /*0-Белый; 1-ЛаминацияСтандартная; 2-ЛаминацияНеСтандартная*/
    var uplotnenie = new Array(0, 1, 2); /*Уплотнитель 0-Черный; 1-Серый; 2-Белый*/
    var price = new Array();
    $('[name="montazh"] option').each(function(e) {
        $(this).val(montazh[e]);
    });
    $('[name="m_setka"] option').each(function(e) {
        $(this).val(m_setka[e]);
    });
    $('[name="profill"] option').each(function(e) {
        $(this).val(profill[e]);
    });
    $('[name="furnitura"] option').each(function(e) {
        $(this).val(furnitura[e]);
    });
    $('[name="color_profill"] option').each(function(e) {
        $(this).val(color_profill[e]);
    });
    $('[name="color_profill_2"] option').each(function(e) {
        $(this).val(color_profill_2[e]);
    });
    $('[name="otliv"] option').each(function(e) {
        $(this).val(otliv[e]);
    });
    $('[name="kozyryok"] option').each(function(e) {
        $(this).val(kozyryok[e]);
    });
    $('[name="otkos"] option').each(function(e) {
        $(this).val(otkos[e]);
    });
    $('[name="otkos_nar"] option').each(function(e) {
        $(this).val(otkos_nar[e]);
    });
    $('[name="podokon"] option').each(function(e) {
        $(this).val(podokon[e]);
    });
    $('[name="dobor"] option').each(function(e) {
        $(this).val(dobor[e]);
    });
    $('[name="erker"] option').each(function(e) {
        $(this).val(erker[e]);
    });
    $('[name="ogranichitel"] option').each(function(e) {
        $(this).val(ogranichitel[e]);
    });
    $('[name="naschelnik"] option').each(function(e) {
        $(this).val(naschelnik[e]);
    });
    $('[name="uplotnenie"] option').each(function(e) {
        $(this).val(uplotnenie[e]);
    });
    $('[name="type_glas"] option').each(function(e) {
        $(this).val(type_glas[e]);
    });
    $('[name="ruchka"] option').each(function(e) {
        $(this).val(ruchka[e]);
    });
    $('[name="porog"] option').each(function(e) {
        $(this).val(porog[e]);
    });
    var alt;
    $('.preview').click(function() {
        $('.preview').removeClass('actv');
        alt = $(this).attr('alt');
        $('#frames').children().fadeOut(200);
        $('#frame' + alt).delay(200).fadeIn(200, function() {
            klk_pos();
        });
        $(this).addClass('actv');
        if (alt == 1) {
            $('.type_opening_win1 span').css('display', 'block');
            $('.type_opening_win2_1 span').css('display', 'none');
            $('.type_opening_win2_2 span').css('display', 'none');
            $('.type_opening_win3_1 span').css('display', 'none');
            $('.type_opening_win3_2 span').css('display', 'none');
            $('.type_opening_win3_3 span').css('display', 'none');
            $('.type_opening_win4_1 span').css('display', 'none');
            $('.type_opening_win4_2 span').css('display', 'none');
            $('.type_opening_win4_3 span').css('display', 'none');
            $('.type_opening_win4_4 span').css('display', 'none');
            $('.type_opening_win5_1 span').css('display', 'none');
            $('.type_opening_win6_1 span').css('display', 'none');
            $('.type_opening_win7_1 span').css('display', 'none');
            $('.type_opening_win7_2 span').css('display', 'none');
            $('.type_opening_win19_1 span').css('display', 'none');
            $('.type_opening_win19_2 span').css('display', 'none');
        } else if (alt == 2) {
            $('.type_opening_win1 span').css('display', 'none');
            $('.type_opening_win2_1 span').css('display', 'block');
            $('.type_opening_win2_2 span').css('display', 'block');
            $('.type_opening_win3_1 span').css('display', 'none');
            $('.type_opening_win3_2 span').css('display', 'none');
            $('.type_opening_win3_3 span').css('display', 'none');
            $('.type_opening_win4_1 span').css('display', 'none');
            $('.type_opening_win4_2 span').css('display', 'none');
            $('.type_opening_win4_3 span').css('display', 'none');
            $('.type_opening_win4_4 span').css('display', 'none');
            $('.type_opening_win5_1 span').css('display', 'none');
            $('.type_opening_win6_1 span').css('display', 'none');
            $('.type_opening_win7_1 span').css('display', 'none');
            $('.type_opening_win7_2 span').css('display', 'none');
            $('.type_opening_win19_1 span').css('display', 'none');
            $('.type_opening_win19_2 span').css('display', 'none');
        } else if (alt == 3) {
            $('.type_opening_win1 span').css('display', 'none');
            $('.type_opening_win2_1 span').css('display', 'none');
            $('.type_opening_win2_2 span').css('display', 'none');
            $('.type_opening_win3_1 span').css('display', 'block');
            $('.type_opening_win3_2 span').css('display', 'block');
            $('.type_opening_win3_3 span').css('display', 'block');
            $('.type_opening_win4_1 span').css('display', 'none');
            $('.type_opening_win4_2 span').css('display', 'none');
            $('.type_opening_win4_3 span').css('display', 'none');
            $('.type_opening_win4_4 span').css('display', 'none');
            $('.type_opening_win5_1 span').css('display', 'none');
            $('.type_opening_win6_1 span').css('display', 'none');
            $('.type_opening_win7_1 span').css('display', 'none');
            $('.type_opening_win7_2 span').css('display', 'none');
            $('.type_opening_win19_1 span').css('display', 'none');
            $('.type_opening_win19_2 span').css('display', 'none');
        } else if (alt == 4) {
            $('.type_opening_win1 span').css('display', 'none');
            $('.type_opening_win2_1 span').css('display', 'none');
            $('.type_opening_win2_2 span').css('display', 'none');
            $('.type_opening_win3_1 span').css('display', 'none');
            $('.type_opening_win3_2 span').css('display', 'none');
            $('.type_opening_win3_3 span').css('display', 'none');
            $('.type_opening_win4_1 span').css('display', 'block');
            $('.type_opening_win4_2 span').css('display', 'block');
            $('.type_opening_win4_3 span').css('display', 'block');
            $('.type_opening_win4_4 span').css('display', 'block');
            $('.type_opening_win5_1 span').css('display', 'none');
            $('.type_opening_win6_1 span').css('display', 'none');
            $('.type_opening_win7_1 span').css('display', 'none');
            $('.type_opening_win7_2 span').css('display', 'none');
            $('.type_opening_win19_1 span').css('display', 'none');
            $('.type_opening_win19_2 span').css('display', 'none');
        } else if (alt == 5) {
            $('.type_opening_win1 span').css('display', 'none');
            $('.type_opening_win2_1 span').css('display', 'none');
            $('.type_opening_win2_2 span').css('display', 'none');
            $('.type_opening_win3_1 span').css('display', 'none');
            $('.type_opening_win3_2 span').css('display', 'none');
            $('.type_opening_win3_3 span').css('display', 'none');
            $('.type_opening_win4_1 span').css('display', 'none');
            $('.type_opening_win4_2 span').css('display', 'none');
            $('.type_opening_win4_3 span').css('display', 'none');
            $('.type_opening_win4_4 span').css('display', 'none');
            $('.type_opening_win5_1 span').css('display', 'block');
            $('.type_opening_win6_1 span').css('display', 'none');
            $('.type_opening_win7_1 span').css('display', 'none');
            $('.type_opening_win7_2 span').css('display', 'none');
            $('.type_opening_win19_1 span').css('display', 'none');
            $('.type_opening_win19_2 span').css('display', 'none');
        } else if (alt == 6) {
            $('.type_opening_win1 span').css('display', 'none');
            $('.type_opening_win2_1 span').css('display', 'none');
            $('.type_opening_win2_2 span').css('display', 'none');
            $('.type_opening_win3_1 span').css('display', 'none');
            $('.type_opening_win3_2 span').css('display', 'none');
            $('.type_opening_win3_3 span').css('display', 'none');
            $('.type_opening_win4_1 span').css('display', 'none');
            $('.type_opening_win4_2 span').css('display', 'none');
            $('.type_opening_win4_3 span').css('display', 'none');
            $('.type_opening_win4_4 span').css('display', 'none');
            $('.type_opening_win5_1 span').css('display', 'none');
            $('.type_opening_win6_1 span').css('display', 'block');
            $('.type_opening_win7_1 span').css('display', 'none');
            $('.type_opening_win7_2 span').css('display', 'none');
            $('.type_opening_win19_1 span').css('display', 'none');
            $('.type_opening_win19_2 span').css('display', 'none');
        } else if (alt == 7) {
            $('.type_opening_win1 span').css('display', 'none');
            $('.type_opening_win2_1 span').css('display', 'none');
            $('.type_opening_win2_2 span').css('display', 'none');
            $('.type_opening_win3_1 span').css('display', 'none');
            $('.type_opening_win3_2 span').css('display', 'none');
            $('.type_opening_win3_3 span').css('display', 'none');
            $('.type_opening_win4_1 span').css('display', 'none');
            $('.type_opening_win4_2 span').css('display', 'none');
            $('.type_opening_win4_3 span').css('display', 'none');
            $('.type_opening_win4_4 span').css('display', 'none');
            $('.type_opening_win5_1 span').css('display', 'none');
            $('.type_opening_win6_1 span').css('display', 'none');
            $('.type_opening_win7_1 span').css('display', 'block');
            $('.type_opening_win7_2 span').css('display', 'block');
            $('.type_opening_win19_1 span').css('display', 'none');
            $('.type_opening_win19_2 span').css('display', 'none');
        } else if (alt == 19) {
            $('.type_opening_win1 span').css('display', 'none');
            $('.type_opening_win2_1 span').css('display', 'none');
            $('.type_opening_win2_2 span').css('display', 'none');
            $('.type_opening_win3_1 span').css('display', 'none');
            $('.type_opening_win3_2 span').css('display', 'none');
            $('.type_opening_win3_3 span').css('display', 'none');
            $('.type_opening_win4_1 span').css('display', 'none');
            $('.type_opening_win4_2 span').css('display', 'none');
            $('.type_opening_win4_3 span').css('display', 'none');
            $('.type_opening_win4_4 span').css('display', 'none');
            $('.type_opening_win5_1 span').css('display', 'none');
            $('.type_opening_win6_1 span').css('display', 'none');
            $('.type_opening_win7_1 span').css('display', 'none');
            $('.type_opening_win7_2 span').css('display', 'none');
            $('.type_opening_win19_1 span').css('display', 'block');
            $('.type_opening_win19_2 span').css('display', 'block');
        } 
        
        price_window(price);
    });
    $('.win0').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 6) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            $('.type_opening_win1 span').text('Тип створки: Глухое');  
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1) {
                $('.type_opening_win1 span').text('Тип створки: Поворотная створка, ручка слева');
            } else if (wnd == 2) {
                $('.type_opening_win1 span').text('Тип створки: Поворотная створка, ручка справа');
            } else if (wnd == 3) {
                $('.type_opening_win1 span').text('Тип створки: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4) {
                $('.type_opening_win1 span').text('Тип створки: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5) {
                $('.type_opening_win1 span').text('Тип створки: Откидная створка');
            } else if (wnd == 6) {
                $('.type_opening_win1 span').text('Тип створки: Подвисная створка');
            }
        }
        price_window(price);
    });
    $('.win01,.win02,.win03').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 2) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
        } else if (wnd == 1) {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 5 + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 6 + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
        }
        price_window(price);
    });
    $('.win1').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 4) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            if (alt == 2) {
                $('.type_opening_win2_1 span').text('Тип створки 1: Глухое');  
            } else if (alt == 3) {
                $('.type_opening_win3_1 span').text('Тип створки 1: Глухое');  
            } else if (alt == 4) {
                $('.type_opening_win4_1 span').text('Тип створки 1: Глухое');  
            }
            
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1 && alt == 2) {
                $('.type_opening_win2_1 span').text('Тип створки 1: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 2) {
                $('.type_opening_win2_1 span').text('Тип створки 1: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 2) {
                $('.type_opening_win2_1 span').text('Тип створки 1: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 2) {
                $('.type_opening_win2_1 span').text('Тип створки 1: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 2) {
                $('.type_opening_win2_1 span').text('Тип створки 1: Откидная створка');
            } else if (wnd == 6 && alt == 2) {
                $('.type_opening_win2_1 span').text('Тип створки 1: Подвисная створка');
            } else if (wnd == 1 && alt == 3) {
                $('.type_opening_win3_1 span').text('Тип створки 1: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 3) {
                $('.type_opening_win3_1 span').text('Тип створки 1: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 3) {
                $('.type_opening_win3_1 span').text('Тип створки 1: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 3) {
                $('.type_opening_win3_1 span').text('Тип створки 1: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 3) {
                $('.type_opening_win3_1 span').text('Тип створки 1: Откидная створка');
            } else if (wnd == 6 && alt == 3) {
                $('.type_opening_win3_1 span').text('Тип створки 1: Подвисная створка');
            } else if (wnd == 1 && alt == 4) {
                $('.type_opening_win4_1 span').text('Тип створки 1: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 4) {
                $('.type_opening_win4_1 span').text('Тип створки 1: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 4) {
                $('.type_opening_win4_1 span').text('Тип створки 1: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 4) {
                $('.type_opening_win4_1 span').text('Тип створки 1: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 4) {
                $('.type_opening_win4_1 span').text('Тип створки 1: Откидная створка');
            } else if (wnd == 6 && alt == 4) {
                $('.type_opening_win4_1 span').text('Тип створки 1: Подвисная створка');
            }
        }
        price_window(price);
    });
    $('.win2').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 4) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            if (alt == 2) {
                $('.type_opening_win2_2 span').text('Тип створки 2: Глухое');  
            } else if (alt == 3) {
                $('.type_opening_win3_2 span').text('Тип створки 2: Глухое'); 
            } else if (alt == 4) {
                $('.type_opening_win4_2 span').text('Тип створки 2: Глухое'); 
            }
            
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1 && alt == 2) {
                $('.type_opening_win2_2 span').text('Тип створки 2: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 2) {
                $('.type_opening_win2_2 span').text('Тип створки 2: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 2) {
                $('.type_opening_win2_2 span').text('Тип створки 2: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 2) {
                $('.type_opening_win2_2 span').text('Тип створки 2: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 2) {
                $('.type_opening_win2_2 span').text('Тип створки 2: Откидная створка');
            } else if (wnd == 6 && alt == 2) {
                $('.type_opening_win2_2 span').text('Тип створки 2: Подвисная створка');
            } else if (wnd == 1 && alt == 3) {
                $('.type_opening_win3_2 span').text('Тип створки 2: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 3) {
                $('.type_opening_win3_2 span').text('Тип створки 2: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 3) {
                $('.type_opening_win3_2 span').text('Тип створки 2: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 3) {
                $('.type_opening_win3_2 span').text('Тип створки 2: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 3) {
                $('.type_opening_win3_2 span').text('Тип створки 2: Откидная створка');
            } else if (wnd == 6 && alt == 3) {
                $('.type_opening_win3_2 span').text('Тип створки 2: Подвисная створка');
            } else if (wnd == 1 && alt == 4) {
                $('.type_opening_win4_2 span').text('Тип створки 2: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 4) {
                $('.type_opening_win4_2 span').text('Тип створки 2: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 4) {
                $('.type_opening_win4_2 span').text('Тип створки 2: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 4) {
                $('.type_opening_win4_2 span').text('Тип створки 2: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 4) {
                $('.type_opening_win4_2 span').text('Тип створки 2: Откидная створка');
            } else if (wnd == 6 && alt == 4) {
                $('.type_opening_win4_2 span').text('Тип створки 2: Подвисная створка');
            }
        }
        price_window(price);
    });
    $('.win3').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 4) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            if (alt == 3) {
                $('.type_opening_win3_3 span').text('Тип створки 3: Глухое');  
            } else if (alt == 4) {
                $('.type_opening_win4_3 span').text('Тип створки 3: Глухое');  
            }
            
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1 && alt == 3) {
                $('.type_opening_win3_3 span').text('Тип створки 3: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 3) {
                $('.type_opening_win3_3 span').text('Тип створки 3: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 3) {
                $('.type_opening_win3_3 span').text('Тип створки 3: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 3) {
                $('.type_opening_win3_3 span').text('Тип створки 3: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 3) {
                $('.type_opening_win3_3 span').text('Тип створки 3: Откидная створка');
            } else if (wnd == 6 && alt == 3) {
                $('.type_opening_win3_3 span').text('Тип створки 3: Подвисная створка');
            } else if (wnd == 1 && alt == 4) {
                $('.type_opening_win4_3 span').text('Тип створки 3: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 4) {
                $('.type_opening_win4_3 span').text('Тип створки 3: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 4) {
                $('.type_opening_win4_3 span').text('Тип створки 3: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 4) {
                $('.type_opening_win4_3 span').text('Тип створки 3: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 4) {
                $('.type_opening_win4_3 span').text('Тип створки 3: Откидная створка');
            } else if (wnd == 6 && alt == 4) {
                $('.type_opening_win4_3 span').text('Тип створки 3: Подвисная створка');
            }
        }
        price_window(price);
    });
    $('.win4').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 4) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            $('.type_opening_win4_4 span').text('Тип створки 4: Глухое');  
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1 && alt == 4) {
                $('.type_opening_win4_4 span').text('Тип створки 4: Поворотная створка, ручка слева');
            } else if (wnd == 2 && alt == 4) {
                $('.type_opening_win4_4 span').text('Тип створки 4: Поворотная створка, ручка справа');
            } else if (wnd == 3 && alt == 4) {
                $('.type_opening_win4_4 span').text('Тип створки 4: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4 && alt == 4) {
                $('.type_opening_win4_4 span').text('Тип створки 4: Поворотно-откидная створка, ручка справа');
            } else if (wnd == 5 && alt == 4) {
                $('.type_opening_win4_4 span').text('Тип створки 4: Откидная створка');
            } else if (wnd == 6 && alt == 4) {
                $('.type_opening_win4_4 span').text('Тип створки 4: Подвисная створка');
            }
        }
        price_window(price);
    });
    
    $('.win51').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 4) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            $('.type_opening_win5_1 span').text('Тип створки: Глухое');  
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1) {
                $('.type_opening_win5_1 span').text('Тип створки: Поворотная створка, ручка слева');
            } else if (wnd == 2) {
                $('.type_opening_win5_1 span').text('Тип створки: Поворотная створка, ручка справа');
            } else if (wnd == 3) {
                $('.type_opening_win5_1 span').text('Тип створки: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4) {
                $('.type_opening_win5_1 span').text('Тип створки: Поворотно-откидная створка, ручка справа');
            } 
        }
        price_window(price);
    });
    $('.win52,.win53').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 1) {
            $(this).attr('wnd', 0).css('background', '#fff');
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', '#67fbde');
            $(this).css('opacity', '0.3');
        }
        price_window(price);
    });
    $('.win61').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 2) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            $('.type_opening_win6_1 span').text('Тип створки: Глухое');  
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1) {
                $('.type_opening_win6_1 span').text('Тип створки: Поворотная створка, ручка слева');
            } else if (wnd == 2) {
                $('.type_opening_win6_1 span').text('Тип створки: Поворотная створка, ручка справа');
            } else if (wnd == 3) {
                $('.type_opening_win6_1 span').text('Тип створки: Поворотно-откидная створка, ручка слева');
            } else if (wnd == 4) {
                $('.type_opening_win6_1 span').text('Тип створки: Поворотно-откидная створка, ручка справа');
            } 
        }
        price_window(price);
    });
    $('.win72').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 1) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            if (alt == 7) {
                $('.type_opening_win7_2 span').text('Тип створки 2: Глухое');  
            } else if (alt == 19) {
                $('.type_opening_win19_2 span').text('Тип створки 2: Глухое');  
            }
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1 && alt == 7) {
                $('.type_opening_win7_2 span').text('Тип створки 2: Поворотная створка, ручка слева');
            } else if (wnd == 1 && alt == 19) {
                $('.type_opening_win19_2 span').text('Тип створки 2: Поворотная створка, ручка слева');
            }
        }
        price_window(price);
    });
    $('.win71').click(function() {
        var wnd = $(this).attr('wnd');
        if (wnd == 1) {
            $(this).attr('wnd', 0).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + 0 + '.png) no-repeat');
            $(this).css('c', '90% 90%');
            if (alt == 7) {
                $('.type_opening_win7_1 span').text('Тип створки 1: Глухая');  
            } else if (alt == 19) {
                $('.type_opening_win19_1 span').text('Тип створки 1: Глухая');  
            }
        } else {
            wnd++;
            $(this).attr('wnd', wnd).css('background', 'url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_7' + wnd + '.png) no-repeat');
            $(this).css('background-size', '90% 90%');
            if (wnd == 1 && alt == 7) {
                $('.type_opening_win7_1 span').text('Тип створки 1: Поворотная створка, ручка справа');
            } else if (wnd == 1 && alt == 19) {
                $('.type_opening_win19_1 span').text('Тип створки 1: Поворотная створка, ручка справа');
            }
        }
        price_window(price);
    });
    $('#close').click(function() {
        $('#body_klk').fadeOut(300);
        $('#win_bg').delay(300).fadeOut(300);
        return false;
    });
    $(window);
    $('#klk select, #klk :checkbox, #klk input').change(function() {
        price_window(price);
    });
    $('#klk input').keyup(function() {
        price_window(price);
    });
    $('#cart').click(function() {
        cart();
        setTimeout(klk_pos, 500);
    });
    $('#del_cart').live('click', function(e) {
        e.preventDefault();
        del_cart($(this));
        klk_pos();
    });
    price_window(price);
});

var content;
var tabl;
function cart() {
    var alt = $('#prev_win .actv').attr('alt');
    var profill = $('select[name="profill"]').find('option:selected').text();
    var furnitura = $('select[name="furnitura"]').find('option:selected').text();
    var color_profill = $('select[name="color_profill"]').find('option:selected').text();
    var color_profill_2 = $('select[name="color_profill_2"]').find('option:selected').text();
    var otliv = $('select[name="otliv"]').find('option:selected').text();
    var kozyryok = $('select[name="kozyryok"]').find('option:selected').text();
    var otkos = $('select[name="otkos"]').find('option:selected').text();
    var otkos_nar = $('select[name="otkos_nar"]').find('option:selected').text();
    var podokon = $('select[name="podokon"]').find('option:selected').text();
    var dobor = $('select[name="dobor"]').find('option:selected').text();
    var erker = $('select[name="erker"]').find('option:selected').text();
    var ogranichitel = $('select[name="ogranichitel"]').find('option:selected').text();
    var naschelnik = $('select[name="naschelnik"]').find('option:selected').text();
    var uplotnenie = $('select[name="uplotnenie"]').find('option:selected').text();
    var type_glas = $('select[name="type_glas"]').find('option:selected').text();
    var m_setka = $('select[name="m_setka"]').find('option:selected').text();
    var ruchka = $('select[name="ruchka"]').find('option:selected').text();
    var porog = $('select[name="porog"]').find('option:selected').text();
    var m_setka = $('select[name="m_setka"]').find('option:selected').text();
    var montazh = $('select[name="montazh"]').find('option:selected').text();
    var summ = $('#top_price span').text();
    var summ1 = $('#price1 span').text();
    var summ2 = $('#price2 span').text();
    var summ3 = $('#price3 span').text();
    var dop_skidka = $('.dop_skidka span').text();
    var stv1 = $('#prev_win .actv').attr('stv1');
    var stv2 = $('#prev_win .actv').attr('stv2');
    wnd0 = $('#frame' + alt + '').find('.win0').attr('wnd');
    wnd01 = $('#frame' + alt + '').find('.win01').attr('wnd');
    wnd02 = $('#frame' + alt + '').find('.win02').attr('wnd');
    wnd03 = $('#frame' + alt + '').find('.win03').attr('wnd');
    wnd1 = $('#frame' + alt + '').find('.win1').attr('wnd');
    wnd2 = $('#frame' + alt + '').find('.win2').attr('wnd');
    wnd3 = $('#frame' + alt + '').find('.win3').attr('wnd');
    wnd4 = $('#frame' + alt + '').find('.win4').attr('wnd');
    wnd51 = $('#frame' + alt + '').find('.win51').attr('wnd');
    wnd52 = $('#frame' + alt + '').find('.win52').attr('wnd');
    wnd53 = $('#frame' + alt + '').find('.win53').attr('wnd');
    wnd61 = $('#frame' + alt + '').find('.win61').attr('wnd');
    wnd71 = $('#frame' + alt + '').find('.win71').attr('wnd');
    wnd72 = $('#frame' + alt + '').find('.win72').attr('wnd');
    h1 = $('#frame' + alt + '').find('.inp_h1').val();
    w1 = $('#frame' + alt + '').find('.inp_w1').val();
    qty = $('.klk_quantity').find('.klk_input-text').val();
    var summ_izdelie = summ * qty;
    var summ_izd_dopy = (summ1 * qty + summ2 * qty) / 53;
    var summ_uslugi = summ3 * qty;
    stv1 = stv1 * 1;
    stv2 = stv2 * 1;
    w1 = w1 * 1;
    h1 = h1 * 1;
    var hidden_furnitura = $('select[name="furnitura"]').val();
    var hidden_color_profill = $('select[name="color_profill"]').val();
    var hidden_color_profill_2 = $('select[name="color_profill_2"]').val();
    var hidden_otliv = $('select[name="otliv"]').val();
    var hidden_kozyryok = $('select[name="kozyryok"]').val();
    var hidden_otkos = $('select[name="otkos"]').val();
    var hidden_otkos_nar = $('select[name="otkos_nar"]').val();
    var hidden_dobor = $('select[name="dobor"]').val();
    var hidden_podokon = $('select[name="podokon"]').val();
    var hidden_m_setka = $('select[name="m_setka"]').val();
    var hidden_ruchka = $('select[name="ruchka"]').val();
    var hidden_porog = $('select[name="porog"]').val();
    var hidden_ogranichitel = $('select[name="ogranichitel"]').val();
    var hidden_erker = $('select[name="erker"]').val();
    var hidden_montazh = $('select[name="montazh"]').val();
    var hidden_naschelnik = $('select[name="naschelnik"]').val();
    if (wnd0 > 0 || wnd01 > 0 || wnd02 > 0 || wnd03 > 0 || wnd1 > 0 || wnd2 > 0 || wnd3 > 0 || wnd4 > 0 || wnd51 > 0 || wnd61 > 0 || wnd71 > 0 || wnd72 > 0) {
        hidden_furnitura = '';
    } else {
        hidden_furnitura = 'hidden';
    }
    if (hidden_color_profill == 0) {
        hidden_color_profill = 'hidden';
    }
    if (hidden_color_profill_2 == 0) {
        hidden_color_profill_2 = 'hidden';
    }
    if (hidden_otliv == 0) {
        hidden_otliv = 'hidden';
    }
    if (hidden_kozyryok == 0) {
        hidden_kozyryok = 'hidden';
    }
    if (hidden_otkos == 0) {
        hidden_otkos = 'hidden';
    }
    if (hidden_otkos_nar == 0) {
        hidden_otkos_nar = 'hidden';
    }
    if (hidden_dobor == 0) {
        hidden_dobor = 'hidden';
    }
    if (hidden_podokon == 0) {
        hidden_podokon = 'hidden';
    }
    if (hidden_m_setka == 0) {
        hidden_m_setka = 'hidden';
    }
    if (hidden_ruchka == 0) {
        hidden_ruchka = 'hidden';
    }
    if (hidden_porog == 0) {
        hidden_porog = 'hidden';
    }
    if (hidden_ogranichitel == 0) {
        hidden_ogranichitel = 'hidden';
    }
    if (hidden_erker == 0) {
        hidden_erker = 'hidden';
    }
    if (hidden_montazh == 0) {
        hidden_montazh = 'hidden';
    }
    if (hidden_naschelnik == 0) {
        hidden_naschelnik = 'hidden';
    }
    var pr_height = 150;
    var pr_widht = 150;
    if (w1 < h1) {
        pr_widht = 150 * w1 / h1;
    }
    if (w1 > h1) {
        pr_height = 150 * h1 / w1;
    }
    if (pr_widht < 40) {
        pr_widht = 40;
    }
    if (pr_height < 40) {
        pr_height = 40;
    }
    var w_1 = pr_widht; /*Ширина эскиза*/
    var h_1 = pr_height; /*Высота эскиза*/
    var h_1_h = h_1 + 20; /*Размер вертикальной линии*/
    var h_1_m = h_1 / 2; /*Центр вертикальной линии для размещения inp_h1*/
    var wnd = $(this).attr('wnd');
    var w_stv1 = (w_1 - ((stv1 + 1) * 7)) / stv1;
    if (alt == 6 || alt == 7) {
        w_stv1 = w_stv1 - 10;
    }
    var w_stv2 = (w_1 - ((stv2 + 1) * 7)) / stv2;
    if (wnd52 == 0) {
        var bgr1 = '#e6e6e6';
    } else {
        var bgr1 = '#fff';
    }
    if (wnd53 == 0) {
        var bgr2 = '#e6e6e6';
    } else {
        var bgr2 = '#fff'
    }
    var printAlt, printAlt1, printAlt2, printAlt3, printAlt4;
    var printWnd = document.getElementById('sketch');
    if (alt == 1) {
        printAlt =  document.getElementById('type_opening_win1').innerHTML;
    } else if (alt == 2) {
        printAlt1 = document.getElementById('type_opening_win2_1');
        printAlt2 = document.getElementById('type_opening_win2_2');
        printAlt = printAlt1.innerHTML + '<br/>' + printAlt2.innerHTML;
    } else if (alt == 3) {
        printAlt1 = document.getElementById('type_opening_win3_1');
        printAlt2 = document.getElementById('type_opening_win3_2');
        printAlt3 = document.getElementById('type_opening_win3_3');
        printAlt = printAlt1.innerHTML + '<br/>' + printAlt2.innerHTML + '<br/>' + printAlt3.innerHTML;
    } else if (alt == 4) {
        printAlt1 = document.getElementById('type_opening_win4_1');
        printAlt2 = document.getElementById('type_opening_win4_2');
        printAlt3 = document.getElementById('type_opening_win4_3');
        printAlt4 = document.getElementById('type_opening_win4_4');
        printAlt = printAlt1.innerHTML + '<br/>' + printAlt2.innerHTML + '<br/>' + printAlt3.innerHTML + '<br/>' + printAlt4.innerHTML;
    } else if (alt == 5) {
        printAlt1 = document.getElementById('type_opening_win5_1');
        printAlt = printAlt1.innerHTML;
    } else if (alt == 19) {
        printAlt1 = document.getElementById('type_opening_win19_1');
        printAlt2 = document.getElementById('type_opening_win19_1');
        printAlt = printAlt1.innerHTML + '<br/>' + printAlt2.innerHTML;
    } else if (alt == 6) {
        printAlt1 = document.getElementById('type_opening_win6_1');
        printAlt = printAlt1.innerHTML;
    } else if (alt == 7) {
        printAlt1 = document.getElementById('type_opening_win7_1');
        printAlt2 = document.getElementById('type_opening_win7_2');
        printAlt = printAlt1.innerHTML + '<br/>' + printAlt2.innerHTML;
    }
    tabl = '<tr><td align="center" width="300px"><div id="prints"><p>' + printWnd.innerHTML + '</p><p>' + printAlt + '</p><a id="del_cart" href="#" title="Кликните, что бы удалить изделие из заказа">Удалить<div style="width:' + w_1 + 'px"><div id="inp_w" style="width:100%"><input disabled class="inp_w" value="' + w1 + 'мм" title="Ширина остекления в миллиметрах"/></div><div id="inp_h" style="height:' + h_1_h + 'px"><input disabled class="inp_h" style="margin-top:' + h_1_m + 'px" value="' + h1 + 'мм" title="Высота остекления в миллиметрах"/></div><div class="pr_' + alt + '" style="height:' + h_1 + 'px"><div class="pr_' + alt + '_0" style="width:' + w_stv1 + 'px"><div class="win_0" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd0 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_01" style="width:' + w_stv2 + 'px"><div class="win_01" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_5' + wnd01 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_02" style="width:' + w_stv2 + 'px"><div class="win_02" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_5' + wnd02 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_03" style="width:' + w_stv2 + 'px"><div class="win_03" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_5' + wnd03 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_1" style="width:' + w_stv1 + 'px"><div class="win_1" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd1 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_2" style="width:' + w_stv1 + 'px"><div class="win_2" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd2 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_3" style="width:' + w_stv1 + 'px"><div class="win_3" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd3 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_4" style="width:' + w_stv1 + 'px"><div class="win_4" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd4 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_61" style="width:' + w_stv1 + 'px"><div class="win_61" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd61 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_51" style="width:' + w_stv1 + 'px"><div class="win_51" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd51 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_52" style="width:' + w_stv1 + 'px;background:' + bgr1 + '"></div><div class="pr_' + alt + '_53" style="width:' + w_stv1 + 'px;background:' + bgr2 + '"><div class="win_53" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd53 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_100" style="width:' + w_stv1 + 'px"><div class="pr_' + alt + '_11" style="width:' + w_stv1 + 'px"><div class="win_71" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_7' + wnd71 + '.png) no-repeat;background-size:90% 90%"></div><div class="win_0" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd0 + '.png) no-repeat;background-size:90% 90%;position:relative;top:-180%"></div></div><div class="pr_' + alt + '_12" style="width:' + w_stv1 + 'px;background:' + bgr1 + '"><div class="win_52" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd52 + '.png) no-repeat;background-size:90% 90%"></div><div class="win_1" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd1 + '.png) no-repeat;background-size:90% 90%"></div></div></div><div class="pr_' + alt + '_200" style="width:' + w_stv1 + 'px"><div class="pr_' + alt + '_21" style="width:' + w_stv1 + 'px"><div class="win_72" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd72 + '.png) no-repeat;background-size:90% 90%"></div></div><div class="pr_' + alt + '_22" style="width:' + w_stv1 + 'px;background:' + bgr2 + '"><div class="win_53" style="background:url(http://ok-nam.ru/js_kalkulyator/calc/okna_pvh/image/klk/frames/wnd_' + wnd53 + '.png) no-repeat;background-size:90% 90%"></div></div></div></div></div></div></a></div></td><td colspan="2"><p><strong>Изделие ПВХ ' + profill + ' (' + w1 + ' mm x ' + h1 + ' mm) -</strong><strong class="summ1"> ' + Math.ceil(summ1 / 53) + '.00 руб</strong></p><p>- ' + type_glas + '</p><p ' + hidden_furnitura + '>- ' + furnitura + '</p><p ' + hidden_color_profill + '>- ' + color_profill + '</p><p ' + hidden_color_profill_2 + '>- ' + color_profill_2 + '</p><p>- ' + uplotnenie + '</p><p><strong>Дополнения к изделию - </strong><strong class="summ2">' + Math.ceil(summ2 / 53) + '.00 руб</strong></p><p ' + hidden_m_setka + '>- ' + m_setka + '</p><p ' + hidden_otliv + '>- ' + otliv + '</p><p ' + hidden_kozyryok + '>- ' + kozyryok + '</p><p ' + hidden_podokon + '>- ' + podokon + '</p><p ' + hidden_otkos + '>- ' + otkos + '</p><p ' + hidden_otkos_nar + '>- ' + otkos_nar + '</p><p ' + hidden_naschelnik + '>- ' + naschelnik + '</p><p ' + hidden_ruchka + '>- ' + ruchka + '</p><p ' + hidden_porog + '>- ' + porog + '</p><p ' + hidden_ogranichitel + '>- ' + ogranichitel + '</p><p ' + hidden_dobor + '>- ' + dobor + '</p><p ' + hidden_erker + '>- ' + erker + '</p><p class="summ3"><strong>Услуги - </strong><strong class="summ3">' + Math.ceil(summ3 / 53) + '.00 руб</strong></p><p ' + hidden_montazh + '>- ' + montazh + '</p><p style="border-top:solid 1px #ccc;padding-top:10px;text-align:right">Количество изделий - <a class="qty_sum">' + qty + '</a> шт x <strong>' + summ + '.00 руб</strong> ИТОГО: <strong class="win_izdelie" style="font-size:1.5em;color:#779665">' + summ_izdelie + '.00 руб</strong></p><p style="font-size:0.7em;text-align:right">В том числе: изделия - <span class="izdel_dopy" style="font-size:1em">' + Math.ceil(summ_izd_dopy) + ' руб, услуги - <span class="uslugi" style="font-size:1em">' + Math.ceil(summ_uslugi / 53) + ' руб.</span></p></td></tr>';
    
    $('#list_cart tr').eq(0).after(tabl);

    

    var total_summ = 0;
    var summ_izdelie = 0;
    var total_summ_izdelie = 0;
    var total_skidka = 0;
    var total_summ_skidka = 0;
    var sum_qty = 0;
    var koef_skidka = 0;
    $('.qty_sum').each(function() {
        qty1 = parseInt($(this).text());
    });
    $('.qty_sum').each(function() {
        sum_qty += parseInt($(this).text());
    });
    var summ_izd_dopy = 0;
    $('.izdel_dopy').each(function() {
        summ_izd_dopy += parseInt($(this).text());
    });
    $('#summ_izdelie_dopy span').text(summ_izd_dopy.toFixed());
    var summ_uslugi = 0;
    $('.uslugi').each(function() {
        summ_uslugi += parseInt($(this).text());
    });
    $('#summ_uslug span').text(summ_uslugi.toFixed());
    $('.win_izdelie').each(function() {
        summ_izdelie += parseInt($(this).text());
    });
    // var p_kod = 0;
    // var p_kod2 = 0;
    // p_kod = $('#promo_kod').find('.secure').val();
    // p_kod2 += parseInt(p_kod);
    // if (p_kod2 > 0 && p_kod2 < 101) {
    //     koef_skidka = p_kod * 1;
    // }    
    /* else{
    if (summ_izdelie<13000){koef_skidka=0;}
    else if (summ_izdelie>12999&&summ_izdelie<21500){koef_skidka=3;}
    else if (summ_izdelie>21499&&summ_izdelie<28000){koef_skidka=4;}
    else if (summ_izdelie>27999&&summ_izdelie<34500){koef_skidka=5;}
    else if (summ_izdelie>34499&&summ_izdelie<41000){koef_skidka=6;}
    else if (summ_izdelie>40999&&summ_izdelie<47500){koef_skidka=7;}
    else if (summ_izdelie>47499&&summ_izdelie<54000){koef_skidka=8;}
    else if (summ_izdelie>53999&&summ_izdelie<60500){koef_skidka=9;}
    else if (summ_izdelie>60499&&summ_izdelie<98500){koef_skidka=10;}
    else if (summ_izdelie>98499&&summ_izdelie<136500){koef_skidka=11;}
    else if (summ_izdelie>136499&&summ_izdelie<174500){koef_skidka=12;}
    else if (summ_izdelie>174499&&summ_izdelie<212500){koef_skidka=13;}
    else if (summ_izdelie>212499&&summ_izdelie<250000){koef_skidka=14;}
    else if (summ_izdelie>249999){koef_skidka=15;}} */
    // total_skidka = (100 - koef_skidka) / 100;
    // total_summ_izdelie += (summ_izdelie * total_skidka);
    $('#cart_summ_izdelie1 span').text(total_summ_izdelie.toFixed());
    var vyezd_brigady = 0;
    var montazh = $('select[name="montazh"]').val();
    var gorod_dostavka = $('select[name="gorod_dostavka"]').val();
    var long_dostavka = $('#long_dostavka').find('.long_dostavka').val();
    montazh = montazh * 1;
    gorod_dostavka = gorod_dostavka * 1 + long_dostavka * 1;
    if (gorod_dostavka > 30) {
        if (montazh == 0) {
            gorod_dostavka = gorod_dostavka * 15 - total_summ_izdelie / 15;
            vyezd_brigady = 0;
        } else {
            vyezd_brigady = gorod_dostavka * 20 - total_summ_izdelie / 26.25;
            gorod_dostavka = gorod_dostavka * 15 - total_summ_izdelie / 35;
        }
    } else {
        gorod_dostavka = 0;
    }
    if (gorod_dostavka < 0) {
        gorod_dostavka = 0;
    }
    if (vyezd_brigady < 0) {
        vyezd_brigady = 0;
    }
    $('.dostavka span').text(gorod_dostavka.toFixed());
    $('.vyezd_brigady span').text(vyezd_brigady.toFixed());
    total_summ_izdelie = total_summ_izdelie + gorod_dostavka + vyezd_brigady;
    $('#summ_izdelie_bez_skidki span').text(summ_izdelie.toFixed());
    $('#qty span').text(sum_qty.toFixed());
    $('#koef_skidka span').text(koef_skidka.toFixed(1));
    $('#total_summ_skidka span').text(total_summ_skidka.toFixed());
    $('#cart_summ_izdelie span').text(total_summ_izdelie.toFixed());
    $('#cart_print').slideDown(300);
}
function send() {
    content = document.getElementById('table').innerHTML;
    document.getElementById('value_table').value = table + content;
    document.getElementById('value_table_zamer').value = table + content;
}

function del_cart(link) {
    link.parents('tr').remove();
    var total_summ = 0;
    var summ_izdelie = 0;
    var total_summ_izdelie = 0;
    var total_skidka = 0;
    var total_summ_skidka = 0;
    var qty = $('#qty span').text();
    var sum_qty = 0;
    var koef_skidka = 1;
    dostavka = $('#dostavka').find('.sel').val();
    var summ_izd_dopy = 0;
    $('.izdel_dopy').each(function() {
        summ_izd_dopy += parseInt($(this).text());
    });
    $('#summ_izdelie_dopy span').text(summ_izd_dopy.toFixed());
    var summ_uslugi = 0;
    $('.uslugi').each(function() {
        summ_uslugi += parseInt($(this).text());
    });
    $('#summ_uslug span').text(summ_uslugi.toFixed());
    $('.win_izdelie').each(function() {
        summ_izdelie += parseInt($(this).text());
    });
    $('.qty_sum').each(function() {
        sum_qty += parseInt($(this).text());
    });
    var p_kod = 0;
    var p_kod2 = 0;
    p_kod = $('#promo_kod').find('.secure').val();
    p_kod2 += parseInt(p_kod);
    if (p_kod2 > 0 && p_kod2 < 101) {
        koef_skidka = p_kod * 1;
    } /* else{ if (summ_izdelie<13000){koef_skidka=0;} else if (summ_izdelie>12999&&summ_izdelie<21500){koef_skidka=3;} else if (summ_izdelie>21499&&summ_izdelie<28000){koef_skidka=4;} else if (summ_izdelie>27999&&summ_izdelie<34500){koef_skidka=5;} else if (summ_izdelie>34499&&summ_izdelie<41000){koef_skidka=6;} else if (summ_izdelie>40999&&summ_izdelie<47500){koef_skidka=7;} else if (summ_izdelie>47499&&summ_izdelie<54000){koef_skidka=8;} else if (summ_izdelie>53999&&summ_izdelie<60500){koef_skidka=9;} else if (summ_izdelie>60499&&summ_izdelie<98500){koef_skidka=10;} else if (summ_izdelie>98499&&summ_izdelie<136500){koef_skidka=11;} else if (summ_izdelie>136499&&summ_izdelie<174500){koef_skidka=12;} else if (summ_izdelie>174499&&summ_izdelie<212500){koef_skidka=13;} else if (summ_izdelie>212499&&summ_izdelie<250000){koef_skidka=14;} else if (summ_izdelie>249999){koef_skidka=15;}} */
    total_skidka = (100 - koef_skidka) / 100;
    total_summ_izdelie += (summ_izdelie * total_skidka);
    $('#cart_summ_izdelie1 span').text(total_summ_izdelie.toFixed());
    var vyezd_brigady = 0;
    var dop_uslugi = 0;
    var montazh = $('select[name="montazh"]').val();
    var gorod_dostavka = $('select[name="gorod_dostavka"]').val();
    var long_dostavka = $('#long_dostavka').find('.long_dostavka').val();
    montazh = montazh * 1;
    gorod_dostavka = gorod_dostavka * 1 + long_dostavka * 1;
    if (gorod_dostavka > 30) {
        if (montazh == 0) {
            gorod_dostavka = gorod_dostavka * 15 - total_summ_izdelie / 15;
            vyezd_brigady = 0;
        } else {
            vyezd_brigady = gorod_dostavka * 20 - total_summ_izdelie / 26.25;
            gorod_dostavka = gorod_dostavka * 15 - total_summ_izdelie / 35;
        }
    } else {
        gorod_dostavka = 0;
    }
    if (gorod_dostavka < 0) {
        gorod_dostavka = 0;
    }
    if (vyezd_brigady < 0) {
        vyezd_brigady = 0;
    }
    dop_uslugi = gorod_dostavka + vyezd_brigady;
    $('.dostavka span').text(dop_uslugi.toFixed());
    $('.vyezd_brigady span').text(vyezd_brigady.toFixed());
    total_summ_izdelie = total_summ_izdelie + gorod_dostavka + vyezd_brigady;
    $('#summ_izdelie_bez_skidki span').text(summ_izdelie.toFixed());
    $('#qty span').text(sum_qty.toFixed());
    $('#koef_skidka span').text(koef_skidka.toFixed(1));
    $('#total_summ_skidka span').text(total_summ_skidka.toFixed());
    $('#cart_summ_izdelie span').text(total_summ_izdelie.toFixed());
    var rows = 0;
    $('#list_cart tr').each(function(e) {
        rows = e;
    });
    if (rows == 7) {
        $('#cart_print').slideUp(300);
    }
}

function price_window(price) {
    var k_cena = 2.6;
    var k_nestandarta = 1;
    var cena1 = 0;
    var cena2 = 0;
    var cena3 = 0;
    var summ_top = 0;
    var laminaciya_korobka = 0;
    var laminaciya_stvorka = 0;
    var qty = 0;
    var qty2 = $('input[name="klk_quantity"]').val();
    var proverka_shyriny_1 = 0;
    var proverka_vysoty_1 = 0;
    var dop_skidka = 0;
    var type_glas = $('select[name="type_glas"]').val();
    var profill = $('select[name="profill"]').val();
    var furnitura = $('select[name="furnitura"]').val();
    var color_profill = $('select[name="color_profill"]').val();
    var color_profill_2 = $('select[name="color_profill_2"]').val();
    var otliv = $('select[name="otliv"]').val();
    var kozyryok = $('select[name="kozyryok"]').val();
    var otkos = $('select[name="otkos"]').val();
    var otkos_nar = $('select[name="otkos_nar"]').val();
    var podokon = $('select[name="podokon"]').val();
    var dobor = $('select[name="dobor"]').val();
    var erker = $('select[name="erker"]').val();
    var ogranichitel = $('select[name="ogranichitel"]').val();
    var naschelnik = $('select[name="naschelnik"]').val();
    var uplotnenie = $('select[name="uplotnenie"]').val();
    var m_setka = $('select[name="m_setka"]').val();
    var ruchka = $('select[name="ruchka"]').val();
    var porog = $('select[name="porog"]').val();
    var montazh = $('select[name="montazh"]').val();
    var alt = $('#prev_win .actv').attr('alt');
    var stv1 = $('#prev_win .actv').attr('stv1');
    var stv2 = $('#prev_win .actv').attr('stv2');
    var k_vhodnaya_gruppa = new Array(1000, 1100); /*Входная группа 1 м.п. - Коробка; Створка*/
    var korobka = new Array(210, 255, 280, 300, 1570); /*Коробка белая - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    var stvorka = new Array(245, 225, 250, 265, 1200); /*Створка белая - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    var uplotnenie_korobka = new Array(0, 34, 121); /*Коробка 0-Черный; 1-Серый; 2-Белый*/
    var uplotnenie_stvorka = new Array(0, 54, 232); /*Створка 0-Черный; 1-Серый; 2-Белый*/
    var cena_otkos = new Array(0, 120, 130, 140, 155, 165, 175, 190, 200, 210, 225, 235, 375, 656, 940); /*Внутренний откос 1м.п. - ПВХ100мм; ПВХ150мм; ПВХ200мм; ПВХ250мм; ПВХ300мм; ПВХ350мм; ПВХ400мм; ПВХ450мм; ПВХ500мм; ПВХ550мм; Дерево50мм; Дерево100мм; Дерево200мм; Дерево300мм;*/
    var cena_otkos_nar = new Array(0, 130, 147, 168, 235, 375, 656, 940); /*Наружный откос - ПВХ120мм; ПВХ200мм; ПВХ300мм; Дерево50мм; Дерево100мм; Дерево200мм; Дерево300мм;*/
    var erker_60 = new Array(0, 113, 226, 770, 1540, 1510, 3020, 2093, 4186); /*Соеденитель60-1шт; Соеденитель60-2шт; Эркер60-1шт; Эркер60-2шт; Угол60-1шт; Угол60-2шт; Кость-1шт: Кость-2шт*/
    var erker_70 = new Array(0, 195, 390, 1450, 2900, 1900, 3800, 2115, 4230); /*Соеденитель70-1шт; Соеденитель70-2шт; Эркер70-1шт; Эркер70-2шт; Угол70-1шт; Угол70-2шт; Кость-1шт: Кость-2шт*/
    var dobor_60_bel = new Array(0, 456, 300, 500, 600, 800, 1000); /*60ммБелый - 20мм; 40мм; 60мм; 80мм; 100мм; 120мм*/
    var dobor_60_bel_lam = new Array(0, 566, 383, 637, 766, 1020, 1274); /*60ммЛаминированный1сторона - 20мм; 40мм; 60мм; 80мм; 100мм; 120мм*/
    var dobor_60_lam = new Array(0, 682, 500, 787, 1000, 1287, 1574); /*60ммЛаминированный2стороны - 20мм; 40мм; 60мм; 80мм; 100мм; 120мм*/
    var dobor_70_bel = new Array(0, 480, 530, 500, 1060, 1030, 1000); /*70ммБелый - 20мм; 40мм; 60мм; 80мм; 100мм; 120мм*/
    var dobor_70_bel_lam = new Array(0, 595, 642, 710, 1284, 1352, 1420); /*70ммЛаминированный1сторона20мм; 40мм; 60мм; 80мм; 100мм; 120мм*/
    var dobor_70_lam = new Array(0, 705, 1340, 1522, 2680, 2862, 3044); /*70ммЛаминированный2стороны20мм; 40мм; 60мм; 80мм; 100мм; 120мм*/
    var montazh_okna = new Array(0, 595, 595, 1000); /*1 кв.м. - Стандартный; Термо; Сложный*/
    var termo_dopy = new Array(0, 0, 140, 0); /*Расходники для термо монтажа*/
    var montazh_otkos = new Array(0, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 570, 570, 570, 570); /*Внутненние откосы 1 кв.м. окна - ПВХ100мм; ПВХ150мм; ПВХ200мм; ПВХ250мм; ПВХ300мм; ПВХ350мм; ПВХ400мм; ПВХ450мм; ПВХ500мм; ПВХ550мм; Дерево50мм; Дерево100мм; Дерево200мм; Дерево300мм;*/
    var montazh_otkos_nar = new Array(0, 480, 480, 480, 690, 690, 690, 690); /*Наружные откосы откосы 1 кв.м. окна - ПВХ120мм; ПВХ200мм; ПВХ300мм; Дерево50мм; Дерево100мм; Дерево200мм; Дерево300мм*/
    var korobka_lam_bel = new Array(160, 170, 160, 165, 455); /*Коробка-Снаружу ламинация изнутри белая - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    var korobka_bel_lam = new Array(210, 210, 200, 250, 340); /*Коробка-Снаружу белая изнутри ламинация - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    var korobka_lam_lam = new Array(355, 370, 350, 400, 580); /*Коробка-Снаружу ламинация изнутри ламинация - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    var stvorka_lam_bel = new Array(295, 345, 360, 405, 340); /*Створка-Снаружу ламинация изнутри белая - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    var stvorka_bel_lam = new Array(290, 335, 360, 430, 360); /*Створка-Снаружу белая изнутри ламинация - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    var stvorka_lam_lam = new Array(425, 480, 495, 420, 525); /*Створка-Снаружу ламинация изнутри ламинация - Blitz; Sib; DeLight; DeLight-Elite; Geneo*/
    if (alt == 1) {
        $('.sketch span').text('Эскиз: Одностворчатого окна');
    }
    if (alt == 2) {
        $('.sketch span').text('Эскиз: Двухстворчатого окна');
    }
    if (alt == 3) {
        $('.sketch span').text('Эскиз: Трехстворчатого окна');
    }
    if (alt == 4) {
        $('.sketch span').text('Эскиз: Четырехстворчатого окна');
    }
    if (alt == 5) {
        $('.sketch span').text('Эскиз: Балконной двери');
    }
    if (alt == 6) {
        $('.sketch span').text('Эскиз: Входной группы одностворчатой');
    }
    if (alt == 7) {
        $('.sketch span').text('Эскиз: Входной группы двухстворчатой');
    }
    if (alt == 8) {
        $('.sketch span').text('Эскиз: Одностворчатого окна с фрамугой');
    }
    if (alt == 9) {
        $('.sketch span').text('Эскиз: Двухстворчатого окна с фрамугой');
    }
    if (alt == 10) {
        $('.sketch span').text('Эскиз: Двухстворчатого окна с двумя фрамугами');
    }
    if (alt == 11) {
        $('.sketch span').text('Эскиз: Двухстворчатого окна с форточкой');
    }
    if (alt == 12) {
        $('.sketch span').text('Эскиз: Трехстворчатого окна с фрамугой');
    }
    if (alt == 13) {
        $('.sketch span').text('Эскиз: Трехстворчатого окна с двумя фрамугами');
    }
    if (alt == 14) {
        $('.sketch span').text('Эскиз: Трехстворчатого окна с тремя фрамугами');
    }
    if (alt == 15) {
        $('.sketch span').text('Эскиз: Четырехстворчатого окна с двумя фрамугами');
    }
    if (alt == 16) {
        $('.sketch span').text('Эскиз: Арочного одностворчатого окна');
    }
    if (alt == 17) {
        $('.sketch span').text('Эскиз: Одностворчатого окна с аркой');
    }
    if (alt == 18) {
        $('.sketch span').text('Эскиз: Двухстворчатого окна с аркой');
    }
    if (alt == 19) {
        $('.sketch span').text('Эскиз: Двухстворчатой балконной двери');
    }
    var fr_w1 = 0;
    var fr_w2 = 0;
    var fr_h1 = 0;
    var fr_h2 = 0;
    var W1 = 0;
    var H1 = 0;
    stv1 = stv1 * 1; /*Колличесво створок нижний (основной) уроверь*/
    stv2 = stv2 * 1; /*Колличесво створок верхний уровень (фрамуги)*/
    var wnd0 = $('#frame' + alt + '').find('.win0').attr('wnd');
    var wnd01 = $('#frame' + alt + '').find('.win01').attr('wnd');
    var wnd02 = $('#frame' + alt + '').find('.win02').attr('wnd');
    var wnd03 = $('#frame' + alt + '').find('.win03').attr('wnd');
    var wnd1 = $('#frame' + alt + '').find('.win1').attr('wnd');
    var wnd2 = $('#frame' + alt + '').find('.win2').attr('wnd');
    var wnd3 = $('#frame' + alt + '').find('.win3').attr('wnd');
    var wnd4 = $('#frame' + alt + '').find('.win4').attr('wnd');
    var wnd51 = $('#frame' + alt + '').find('.win51').attr('wnd');
    var wnd52 = $('#frame' + alt + '').find('.win52').attr('wnd');
    var wnd53 = $('#frame' + alt + '').find('.win53').attr('wnd');
    var wnd61 = $('#frame' + alt + '').find('.win61').attr('wnd');
    var wnd71 = $('#frame' + alt + '').find('.win71').attr('wnd');
    var wnd72 = $('#frame' + alt + '').find('.win72').attr('wnd');
    var h1 = ($('#frame' + alt + '').find('.inp_h1').val()) / 1000;
    var w1 = ($('#frame' + alt + '').find('.inp_w1').val()) / 1000; /*Определение высоты и ширины #frame1(n)*/
    var fr_w = 0; /*Ширина Заполнения*/
    var fr_h = 0; /*Высота Заполнения*/
    var d_w1 = 0; /*Разница ширины импостов между вехним (2) и нижним (1) уровнями*/
    var d_w2 = 0; /*Разница ширины импостов между вехним (2) и нижним (1) уровнями*/
    if (w1 < h1) {
        fr_h = 280;
        fr_w = 280 * w1 / h1;
    } else if (w1 > h1) {
        fr_w = 280;
        fr_h = 280 * h1 / w1;
    } else {
        fr_h = 280;
        fr_w = 280;
    }
    if (fr_w < 40) {
        fr_w = 40;
    }
    if (stv1 == stv2 || stv1 > stv2) {
        var W1 = fr_w + 13 * (stv1 + 1);
        var d_w2 = (stv1 - stv2) * 12 / stv2;
    }
    if (stv1 < stv2) {
        var W1 = fr_w + 13 * (stv2 + 1);
        var d_w1 = (stv2 - stv1) * 12 / stv1;
    }
    if (stv1 > 0 && stv2 > 0) {
        var H1 = fr_h + 12;
    } else {
        var H1 = fr_h;
    }
    if (stv1 > 0 && stv2 > 0) {
        fr_h1 = fr_h * 0.65;
        fr_h2 = fr_h * 0.35;
    } else {
        fr_h1 = fr_h;
        fr_h2 = fr_h;
    }
    if (alt == 5) {
        fr_h1 = fr_h * 0.65;
        fr_h2 = fr_h * 0.3;
    }
    if (alt == 17) {
        fr_h1 = fr_h * 0.8;
        fr_h2 = fr_h * 0.2;
    } /*Определение центра для размещения .inp_w1 и .inp_h1*/
    var ccs_inp_w1 = W1 / 2 - 21;
    var ccs_inp_h1 = H1 / 2 - 6; /*Определение размера ширины створки нижний уровень*/
    var fr_w1 = fr_w / stv1 + d_w1; /*Определение размера ширины верний уровень (фрамуги)*/
    var fr_w2 = fr_w / stv2 + d_w2; /*Продление вертикальной линии inp_h1*/
    var inp_h1 = H1 + 20; /*Отрисовка эскиза окна*/
    if (alt == 2 || alt == 3 || alt == 4) {
        $('#frame' + alt + '').css('width', '' + W1 - 80 +  'px'); /*Ширина эскиза 2 3 4*/
        $('#frame' + alt + '').css('height', '' + H1 - 80 + 'px'); /*Высота эскиза 2 3 4*/
        inp_h1 = H1 - 60;
        ccs_inp_w1 = (W1 - 80) / 2 - 21;
        ccs_inp_h1 = (H1 - 80) / 2 - 6;
        if (alt == 2) {
            $('#frame' + alt + ' .fr_' + alt + '_1').css('width', '' + fr_w1 - 40 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_1').css('height', '' + (fr_h1 - 80) + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_2').css('width', '' + fr_w1 - 40 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_2').css('height', '' + (fr_h1 - 80) + 'px');
        } else if (alt == 3) {
            $('#frame' + alt + ' .fr_' + alt + '_1').css('width', '' + fr_w1 - 26 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_1').css('height', '' + (fr_h1 - 80) + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_2').css('width', '' + fr_w1 - 26 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_2').css('height', '' + (fr_h1 - 80) + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_3').css('width', '' + fr_w1 - 26 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_3').css('height', '' + (fr_h1 - 80) + 'px');
        } else {
            $('#frame' + alt + ' .fr_' + alt + '_1').css('width', '' + fr_w1 - 20 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_1').css('height', '' + (fr_h1 - 80) + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_2').css('width', '' + fr_w1 - 20 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_2').css('height', '' + (fr_h1 - 80) + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_3').css('width', '' + fr_w1 - 20 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_3').css('height', '' + (fr_h1 - 80) + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_4').css('width', '' + fr_w1 - 20 + 'px');
            $('#frame' + alt + ' .fr_' + alt + '_4').css('height', '' + (fr_h1 - 80) + 'px');
        }
        
    } else {
        $('#frame' + alt + '').css('width', '' + W1 + 'px'); /*Ширина эскиза*/
        $('#frame' + alt + '').css('height', '' + H1 + 'px'); /*Высота эскиза*/
        $('#frame' + alt + ' .fr_' + alt + '_0').css('width', '' + fr_w1 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_0').css('height', '' + fr_h1 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_1').css('width', '' + fr_w1  + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_1').css('height', '' + (fr_h1 ) + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_2').css('width', '' + fr_w1 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_2').css('height', '' + (fr_h1) + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_3').css('width', '' + fr_w1 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_3').css('height', '' + (fr_h1) + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_4').css('width', '' + fr_w1 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_4').css('height', '' + (fr_h1) + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_5').css('width', '' + fr_w2 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_5').css('height', '' + fr_h2 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_6').css('width', '' + fr_w2 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_6').css('height', '' + fr_h2 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_7').css('width', '' + fr_w2 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_7').css('height', '' + fr_h2 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_8').css('width', '' + fr_w2 + 'px');
        $('#frame' + alt + ' .fr_' + alt + '_8').css('height', '' + fr_h2 + 'px');
    }
    
    $('.inp_w1').css('left', '' + ccs_inp_w1 + 'px');
    $('.inp_h1').css('top', '' + ccs_inp_h1 + 'px');
    $('#frame' + alt + ' #inp_h1').css('height', '' + inp_h1 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_0').css('width', '' + fr_w1 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_0').css('height', '' + fr_h1 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_1').css('width', '' + fr_w1  + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_1').css('height', '' + (fr_h1 ) + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_2').css('width', '' + fr_w1 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_2').css('height', '' + (fr_h1) + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_3').css('width', '' + fr_w1 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_3').css('height', '' + (fr_h1) + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_4').css('width', '' + fr_w1 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_4').css('height', '' + (fr_h1) + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_5').css('width', '' + fr_w2 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_5').css('height', '' + fr_h2 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_6').css('width', '' + fr_w2 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_6').css('height', '' + fr_h2 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_7').css('width', '' + fr_w2 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_7').css('height', '' + fr_h2 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_8').css('width', '' + fr_w2 + 'px');
    // $('#frame' + alt + ' .fr_' + alt + '_8').css('height', '' + fr_h2 + 'px'); /*----Расчет стоимости окна----*/ /*Определение нестандартного изделия*/
    if (color_profill == 2 || color_profill_2 == 2 || alt == 16 || alt == 17 || alt == 18) {
        var k_nestandarta = 1.389;
    } /*Ламинация наружная*/
    if (color_profill > 0 && color_profill_2 == 0) {
        laminaciya_korobka = korobka_lam_bel[profill];
        laminaciya_stvorka = stvorka_lam_bel[profill];
    } /*Ламинация внутренняя*/
    if (color_profill == 0 && color_profill_2 > 0) {
        laminaciya_korobka = korobka_bel_lam[profill];
        laminaciya_stvorka = stvorka_bel_lam[profill];
    } /*Ламинация наружная и внутренняя*/
    if (color_profill > 0 && color_profill_2 > 0) {
        laminaciya_korobka = korobka_lam_lam[profill];
        laminaciya_stvorka = stvorka_lam_lam[profill];
    } /*Расчет ширины и высоты створок*/
    var W_stv1 = 0;
    var H_stv1 = 0;
    var W_stv2 = 0;
    var H_stv2 = 0;
    if (stv1 > 0 && stv2 == 0) {
        var W_stv1 = w1 / stv1;
        var H_stv1 = h1;
    }
    if (stv1 == 0 && stv2 > 0) {
        var W_stv2 = w1 / stv2;
        var H_stv2 = h1;
    }
    if (stv1 > 0 && stv2 > 0) {
        var W_stv1 = w1 / stv1;
        var H_stv1 = h1 * 0.65;
        var W_stv2 = w1 / stv2;
        var H_stv2 = h1 * 0.35;
    } /*Проверка ввода значений*/
    var flag_error = 0;
    if (wnd0 == 0 || wnd01 == 0 || wnd02 == 0 || wnd03 == 0 || wnd1 == 0 || wnd2 == 0 || wnd3 == 0 || wnd4 == 0 || wnd51 == 0 || wnd61 == 0 || wnd71 == 0 || wnd72 == 0) {
        if (W_stv1 > 0 && W_stv1 < 0.35) {
            flag_error = 1;
        } else if (W_stv2 > 0 && W_stv2 < 0.35) {
            flag_error = 1;
        } else if (H_stv1 > 0 && H_stv1 < 0.35) {
            flag_error = 1;
        } else if (H_stv2 > 0 && H_stv2 < 0.35) {
            flag_error = 1;
        }
    } else {
        if (wnd0 > 0 || wnd1 > 0 || wnd2 > 0 || wnd3 > 0 || wnd4 > 0 || wnd51 > 0) {
            if (W_stv1 < 0.47 || H_stv1 < 0.47) {
                flag_error = 1;
            }
        }
        if (wnd61 > 0 || wnd71 > 0 || wnd72 > 0) {
            if (W_stv1 < 0.5 || H_stv1 < 0.6) {
                flag_error = 1;
            }
        }
        if (wnd01 > 0 || wnd02 > 0 || wnd03 > 0) {
            if (W_stv2 < 0.47 || H_stv2 < 0.47) {
                flag_error = 1;
            }
        }
    }
    if (flag_error == 1) {
        $('.error_w span').text('ВНИМАНИЕ! Изделие трудно или не возможно изготовить!');
        $('#error').css('border', 'solid')
    } else {
        $('.error_w span').text('');
        $('#error').css('border', 'none')
    } /*Определяет отображать или нет фурнитуру в параметрах окна*/
    if (wnd0 > 0 || wnd01 > 0 || wnd02 > 0 || wnd03 > 0 || wnd1 > 0 || wnd2 > 0 || wnd3 > 0 || wnd4 > 0 || wnd51 > 0 || wnd61 > 0 || wnd71 > 0 || wnd72 > 0) {
        $('#hidden_furnitura').attr('hidden', '');
    } else {
        $('#hidden_furnitura').attr('hidden', 'true');
    } /*Коробка (Профиль+Уплотнитель+Ламинация)*/
    var k_vhodnaya_korobka = 0;
    k_vhodnaya_stvorka = 0;
    if (alt == 6 || alt == 7) {
        var k_vhodnaya_korobka = k_vhodnaya_gruppa[0];
        k_vhodnaya_stvorka = k_vhodnaya_gruppa[1];
    }
    if (stv1 > 0) {
        cena1 += (korobka[profill] + k_vhodnaya_korobka + uplotnenie_korobka[uplotnenie] + laminaciya_korobka) * ((W_stv1 + H_stv1) * 2 * stv1);
    }
    if (stv2 > 0) {
        cena1 += (korobka[profill] + uplotnenie_korobka[uplotnenie] + laminaciya_korobka) * ((W_stv2 + H_stv2) * 2 * stv2);
    } /*Створка (Профиль+Уплотнитель+Ламинация)*/
    if (wnd0 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    if (wnd01 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv2 + H_stv2) * 2 / stv2;
    }
    if (wnd02 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv2 + H_stv2) * 2 / stv2;
    }
    if (wnd03 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv2 + H_stv2) * 2 / stv2;
    }
    if (wnd1 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    if (wnd2 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    if (wnd3 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    if (wnd4 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    if (wnd51 > 0) {
        cena1 += (stvorka[profill] + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    if (wnd61 > 0) {
        cena1 += (stvorka[profill] + k_vhodnaya_stvorka + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    if (wnd71 > 0) {
        cena1 += (stvorka[profill] + k_vhodnaya_stvorka + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    if (wnd72 > 0) {
        cena1 += (stvorka[profill] + k_vhodnaya_stvorka + uplotnenie_stvorka[uplotnenie] + laminaciya_stvorka) * (W_stv1 + H_stv1) * 2 / stv1;
    }
    var zapolnenie_60 = new Array(790, 920, 890, 1015, 2120, 2345, 720, 1540, 685, 7900, 9800); /*Заполнение для 60мм - Однокамерный; Двухкамерный; ОднокамерныйТеплопакет; ДвухкамерныйТеплопакет; ОднокамерныйТонированный;ДвухкамерныйТонированый; Стекло4мм; Стекло4ммТонированное; Сэндвич32ммБелый; Сэндвич32ммЛаминированный*/
    var zapolnenie_70 = new Array(960, 960, 1045, 1045, 2420, 2420, 957, 2420, 685, 7900, 9800); /*Заполнение для 70мм - Однокамерный; Двухкамерный; ОднокамерныйТеплопакет; ДвухкамерныйТеплопакет; ОднокамерныйТонированный;ДвухкамерныйТонированый; Стекло4мм; Стекло4ммТонированное; Сэндвич32ммБелый; Сэндвич32ммЛам1Сторона; Сэндвич32ммЛам2Стороны*/
    var zapolnenie_86 = new Array(1035, 1035, 1135, 1135, 2550, 2550, 1035, 2550, 685, 7900, 9800); /*Заполнение для 86мм - Однокамерный; Двухкамерный; ОднокамерныйТеплопакет; ДвухкамерныйТеплопакет; ОднокамерныйТонированный;ДвухкамерныйТонированый; Стекло4мм; Стекло4ммТонированное; Сэндвич32ммБелый; Сэндвич32ммЛам1Сторона; Сэндвич32ммЛам2Стороны*/ /* ***Площадь заполнения нижних частей двери*** */
    var S_zapolnenie_52 = 0;
    var S_zapolnenie_53 = 0;
    var lam_5 = 0;
    if (wnd52 == 0 || wnd53 == 0) {
        if (color_profill > 0 && color_profill_2 == 0) {
            var lam_5 = 9;
        } else if (color_profill == 0 && color_profill_2 > 0) {
            var lam_5 = 9;
        } else if (color_profill > 0 && color_profill_2 > 0) {
            var lam_5 = 10;
        } else {
            var lam_5 = 8;
        }
    }
    if (wnd52 == 0) {
        S_zapolnenie_52 = W_stv1 / stv1 * 0.35 * H_stv1
    }
    if (wnd53 == 0) {
        S_zapolnenie_53 = W_stv1 / stv1 * 0.35 * H_stv1
    } /*Заполнение*/
    if (profill == 0) {
        cena1 += zapolnenie_60[type_glas] * w1 * h1 - (S_zapolnenie_52 + S_zapolnenie_53) * (zapolnenie_60[type_glas] - zapolnenie_60[lam_5]);
    } else if (profill == 4) {
        cena1 += zapolnenie_86[type_glas] * w1 * h1 - (S_zapolnenie_52 + S_zapolnenie_53) * (zapolnenie_86[type_glas] - zapolnenie_86[lam_5]);
    } else {
        cena1 += zapolnenie_70[type_glas] * w1 * h1 - (S_zapolnenie_52 + S_zapolnenie_53) * (zapolnenie_70[type_glas] - zapolnenie_70[lam_5]);
    }
    var povor = new Array(900, 725, 0, 900, 900, 1000, 900); /*Фурнитура 1 кв.м. поворотной створки - SiAuFavorit; RotoNT*; Входная группа; SiAuTitan; SiAuTitanПротивовзломная; SiAuTitanСкрытыеПетли*/
    var povor_otk = new Array(1200, 1000, 0, 700, 700, 650, 700); /*Фурнитура 1 кв.м. поворотно-откидной створки - SiAuFavorit; RotoNT*; Входная группа; SiAuTitan; SiAuTitanПротивовзломная; SiAuTitanСкрытыеПетли*/
    var povor_const = new Array(150, 450, 3800, 200, 1600, 3650, 190); /*Фурнитура Постоянная на 1 поворотную створку - SiAuFavorit; RotoNT*; Входная группа; SiAuTitan; SiAuTitanПротивовзломная; SiAuTitanСкрытыеПетли*/
    var povor_otk_const = new Array(150, 450, 3800, 1300, 2700, 4900, 1290); /*Фурнитура Постоянная на 1 поворотно откидную створку - SiAuFavorit; RotoNT*; SiAuTitan; SiAuTitanПротивовзломная; SiAuTitanСкрытыеПетли*/ /* ***Фурнитура Поворотная*** */
    if (wnd0 == 1 || wnd0 == 2 || wnd0 == 5 || wnd0 == 6) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd01 == 1 || wnd01 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd02 == 1 || wnd02 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd03 == 1 || wnd03 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd1 == 1 || wnd1 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd2 == 1 || wnd2 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd3 == 1 || wnd3 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd4 == 1 || wnd4 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd51 == 1 || wnd51 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd61 == 1 || wnd61 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd71 == 1 || wnd71 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    }
    if (wnd72 == 1 || wnd72 == 2) {
        cena1 += povor[furnitura] * w1 / stv1 * h1 + povor_const[furnitura];
    } /*Фурнитура Поворотно-Откидная*/
    if (wnd0 == 3 || wnd0 == 4) {
        cena1 += povor_otk[furnitura] * w1 / stv1 * h1 + povor_otk_const[furnitura];
    }
    if (wnd1 == 3 || wnd1 == 4) {
        cena1 += povor_otk[furnitura] * w1 / stv1 * h1 + povor_otk_const[furnitura];
    }
    if (wnd2 == 3 || wnd2 == 4) {
        cena1 += povor_otk[furnitura] * w1 / stv1 * h1 + povor_otk_const[furnitura];
    }
    if (wnd3 == 3 || wnd3 == 4) {
        cena1 += povor_otk[furnitura] * w1 / stv1 * h1 + povor_otk_const[furnitura];
    }
    if (wnd4 == 3 || wnd4 == 4) {
        cena1 += povor_otk[furnitura] * w1 / stv1 * h1 + povor_otk_const[furnitura];
    } /* ***Ручка*** */
    cena1 += ruchka * 1; /* ***Порог*** */
    if (alt == 5 || alt == 6 || alt == 7) {
        cena1 += porog * w1;
        $('#hidden_porog').attr('hidden', '');
    } else {
        $('#hidden_porog').attr('hidden', 'true');
    } /* ***Москитная сетка*** */
    if (wnd0 > 0 || wnd01 > 0 || wnd02 > 0 || wnd03 > 0 || wnd1 > 0 || wnd2 > 0 || wnd3 > 0 || wnd4 > 0 || wnd51 > 0 || wnd61 > 0 || wnd71 > 0 || wnd72 > 0) {
        cena2 += m_setka * w1 / stv1 * h1;
    } /*Отлив*/
    cena2 += otliv * (w1 + 0.1); /*Козырек*/
    cena2 += kozyryok * (w1 + 0.1); /*Откос внутренний и наружный*/
    cena2 += cena_otkos[otkos] * (w1 + h1 * 2 + 0.3);
    cena2 += cena_otkos_nar[otkos_nar] * (w1 + h1 * 2 + 0.3); /*Подоконник*/
    cena2 += podokon * (w1 + 0.2); /*Монтаж окна*/
    s_okna = w1 * h1;
    if (s_okna < 2.1) {
        s_okna = 2.1;
    }
    cena3 += montazh_okna[montazh] * s_okna + termo_dopy[montazh] * (2 * w1 + 2 * h1); /*Монтаж откосов*/
    montazh = montazh * 1;
    if (otkos > 0) {
        cena3 += montazh_otkos[montazh] * s_okna;
    }
    if (otkos_nar > 0) {
        cena3 += montazh_otkos[montazh] * s_okna;
    } /*Ограничитель открывания*/
    cena2 += parseInt(ogranichitel); /*Наличник и нащельник*/
    cena2 += naschelnik * 2 * (w1 + h1); /*Эркер, угол, кость*/
    if (profill == 0) {
        cena2 += erker_60[erker] * h1;
    } else {
        cena2 += erker_70[erker] * h1;
    } /*Добор 60мм*/
    if (color_profill == 0 && color_profill_2 == 0 && profill == 0) {
        cena2 += dobor_60_bel[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 0 && color_profill_2 > 0 && profill == 0) {
        cena2 += dobor_60_bel_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 1 && color_profill_2 == 0 && profill == 0) {
        cena2 += dobor_60_bel_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 1 && color_profill_2 > 0 && profill == 0) {
        cena2 += dobor_60_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 2 && color_profill_2 == 0 && profill == 0) {
        cena2 += dobor_60_bel_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 2 && color_profill_2 > 0 && profill == 0) {
        cena2 += dobor_60_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 0 && color_profill_2 == 0 && profill > 0) {
        cena2 += dobor_70_bel[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 0 && color_profill_2 > 0 && profill > 0) {
        cena2 += dobor_70_bel_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 1 && color_profill_2 == 0 && profill > 0) {
        cena2 += dobor_70_bel_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 1 && color_profill_2 > 0 && profill > 0) {
        cena2 += dobor_70_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 2 && color_profill_2 == 0 && profill > 0) {
        cena2 += dobor_70_bel_lam[dobor] * (w1 + 2 * h1);
    }
    if (color_profill == 2 && color_profill_2 > 0 && profill > 0) {
        cena2 += dobor_70_lam[dobor] * (w1 + 2 * h1);
    }
    qty = parseInt(qty2);
    if (montazh == 0) {
        dop_skidka = 10;
    } else {
        dop_skidka = 5;
    }
    cena1 = cena1 * k_cena * k_nestandarta * (100 - dop_skidka + 5) / 100;
    cena2 = cena2 * k_cena * k_nestandarta * (100 - dop_skidka + 5) / 100;
    cena3 = cena3 * k_cena * k_nestandarta * (100 - dop_skidka + 5) / 100;


    summ_top = (cena1 + cena2 + cena3) / 53; //поделил на 53 типо курс от рубля до буна 
    $('#price1 span').text(cena1.toFixed());
    $('#price2 span').text(cena2.toFixed());
    $('#price3 span').text(cena3.toFixed());
    $('#top_price span').text(summ_top.toFixed());
    $('.dop_skidka span').text(dop_skidka.toFixed());
}

function klk_pos() {
    fr_scroll = $(window).scrollTop();
    win_width = $(window).width();
    win_height = $(window).height();
    form_width = $('#klk').width();
    form_height = $('#klk').height();
    if (win_height > form_height) {
        fr_pos_top = (win_height * 2) - (form_height / 2) + fr_scroll;
    } else {
        fr_pos_top = 0;
    }
    if (win_width > form_width) {
        fr_pos_left = (win_width / 2) - (form_width / 2);
    } else {
        fr_pos_left = 0;
    }
}

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('#msg_pop');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('#msg_pop').fadeOut();
		
	}
});