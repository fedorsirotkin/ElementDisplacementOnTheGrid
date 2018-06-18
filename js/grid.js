/* Получение состояния в которое необходимо перейти  */
function getTransition(state, selected) {
    /* Переходы */
    var transition = {
        /* Текущие состояние */
        1: {
            /* В какое состояние перейти */
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 3,
            airports: 9,
            trailers: 4,
            cranes: 5,
            tugboats: 6,
            firetrucks: 7,
            doublerowcabins: 8
        },
        2: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 6,
            firetrucks: 7,
            doublerowcabins: 8
        },
        3: {
            autohydraulic: 1,
            onboardcars: 13,
            sleepcabins: 10,
            dumpers: 3,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 6,
            firetrucks: 7,
            doublerowcabins: 8
        },
        4: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 4,
            cranes: 5,
            tugboats: 14,
            firetrucks: 15,
            doublerowcabins: 8
        },
        5: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 3,
            airports: 9,
            trailers: 4,
            cranes: 5,
            tugboats: 16,
            firetrucks: 7,
            doublerowcabins: 8
        },
        6: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 6,
            firetrucks: 15,
            doublerowcabins: 8
        },
        7: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 16,
            firetrucks: 7,
            doublerowcabins: 8
        },
        8: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 17,
            trailers: 12,
            cranes: 5,
            tugboats: 6,
            firetrucks: 15,
            doublerowcabins: 8
        },
        9: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 16,
            firetrucks: 15,
            doublerowcabins: 18
        },
        10: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 17,
            trailers: 12,
            cranes: 5,
            tugboats: 6,
            firetrucks: 7,
            doublerowcabins: 8
        },
        11: {
            autohydraulic: 19,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 4,
            cranes: 5,
            tugboats: 6,
            firetrucks: 7,
            doublerowcabins: 8
        },
        12: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 3,
            airports: 9,
            trailers: 12,
            cranes: 20,
            tugboats: 16,
            firetrucks: 7,
            doublerowcabins: 8
        },
        13: {
            autohydraulic: 19,
            onboardcars: 13,
            sleepcabins: 10,
            dumpers: 3,
            airports: 9,
            trailers: 4,
            cranes: 5,
            tugboats: 6,
            firetrucks: 7,
            doublerowcabins: 8
        },
        14: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 3,
            airports: 9,
            trailers: 4,
            cranes: 20,
            tugboats: 14,
            firetrucks: 7,
            doublerowcabins: 8
        },
        15: {
            autohydraulic: 1,
            onboardcars: 21,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 6,
            firetrucks: 15,
            doublerowcabins: 8
        },
        16: {
            autohydraulic: 1,
            onboardcars: 21,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 16,
            firetrucks: 7,
            doublerowcabins: 8
        },
        17: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 17,
            trailers: 12,
            cranes: 5,
            tugboats: 16,
            firetrucks: 22,
            doublerowcabins: 8
        },
        18: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 16,
            firetrucks: 22,
            doublerowcabins: 18
        },
        19: {
            autohydraulic: 19,
            onboardcars: 13,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 6,
            firetrucks: 7,
            doublerowcabins: 8
        },
        20: {
            autohydraulic: 1,
            onboardcars: 21,
            sleepcabins: 10,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 20,
            tugboats: 6,
            firetrucks: 7,
            doublerowcabins: 8
        },
        21: {
            autohydraulic: 1,
            onboardcars: 21,
            sleepcabins: 10,
            dumpers: 3,
            airports: 9,
            trailers: 4,
            cranes: 20,
            tugboats: 16,
            firetrucks: 7,
            doublerowcabins: 8
        },
        22: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 23,
            dumpers: 11,
            airports: 17,
            trailers: 12,
            cranes: 5,
            tugboats: 6,
            firetrucks: 22,
            doublerowcabins: 8
        },
        23: {
            autohydraulic: 1,
            onboardcars: 2,
            sleepcabins: 23,
            dumpers: 11,
            airports: 9,
            trailers: 12,
            cranes: 5,
            tugboats: 16,
            firetrucks: 22,
            doublerowcabins: 8
        }
    };

    return transition[state][selected];
}

/* Получение конкретного состояния по его идентификатору */
function getStatesByItem(id) {
    /* Состояния элементов при выбранном активном элементе */
    var states = {
        /* Порядковые номера для состояний */
        1: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-3',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-3',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        2: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-2',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        3: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-2 col-1',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-1 col-2',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        4: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-2 col-2',
            cranes: 'row-4 col-1',
            tugboats: 'row-3 col-1',
            firetrucks: 'row-1 col-2',
            doublerowcabins: 'row-4 col-4'
        },
        5: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-3',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-3',
            cranes: 'row-2 col-1',
            tugboats: 'row-1 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        6: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-2 col-2',
            firetrucks: 'row-1 col-2',
            doublerowcabins: 'row-4 col-4'
        },
        7: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-1 col-2',
            firetrucks: 'row-2 col-2',
            doublerowcabins: 'row-4 col-4'
        },
        8: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-2',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-1 col-2',
            doublerowcabins: 'row-2 col-3'
        },
        9: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-3',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-2 col-2',
            firetrucks: 'row-1 col-2',
            doublerowcabins: 'row-3 col-2'
        },
        10: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-2',
            sleepcabins: 'row-1 col-3',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-2',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        11: {
            autohydraulic: 'row-2 col-3',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-1 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-3',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        12: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-3',
            airports: 'row-2 col-4',
            trailers: 'row-2 col-1',
            cranes: 'row-3 col-3',
            tugboats: 'row-1 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        13: {
            autohydraulic: 'row-1 col-3',
            onboardcars: 'row-1 col-1',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-3',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-3',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        14: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-3',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-3',
            cranes: 'row-1 col-2',
            tugboats: 'row-2 col-1',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        15: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-4 col-2',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-3',
            firetrucks: 'row-1 col-2',
            doublerowcabins: 'row-4 col-4'
        },
        16: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-4 col-2',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-1 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        17: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-2',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-1 col-2',
            firetrucks: 'row-2 col-4',
            doublerowcabins: 'row-3 col-4'
        },
        18: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-3 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-1 col-2',
            firetrucks: 'row-2 col-4',
            doublerowcabins: 'row-2 col-2'
        },
        19: {
            autohydraulic: 'row-1 col-2',
            onboardcars: 'row-1 col-1',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        20: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-4 col-1',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-1 col-2',
            tugboats: 'row-4 col-2',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        21: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-2 col-1',
            sleepcabins: 'row-1 col-4',
            dumpers: 'row-2 col-3',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-3',
            cranes: 'row-1 col-2',
            tugboats: 'row-1 col-3',
            firetrucks: 'row-4 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        22: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-2',
            sleepcabins: 'row-4 col-2',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-2',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-4 col-3',
            firetrucks: 'row-1 col-3',
            doublerowcabins: 'row-4 col-4'
        },
        23: {
            autohydraulic: 'row-1 col-1',
            onboardcars: 'row-1 col-3',
            sleepcabins: 'row-2 col-2',
            dumpers: 'row-2 col-1',
            airports: 'row-2 col-4',
            trailers: 'row-3 col-1',
            cranes: 'row-4 col-1',
            tugboats: 'row-1 col-2',
            firetrucks: 'row-1 col-4',
            doublerowcabins: 'row-4 col-4'
        }
    };
    return states[id];
}

/* Установка состояний элементов по конкретному элементу  */
function setStatesByItem(coord) {
    for (var key in coord) {
        if (coord.hasOwnProperty(key)) {
            jQuery('#' + key).addClass(coord[key]);
        }
    }
}

/* Функция, которая выполняется на месте её вызова */
(function (jQuery)
{
    /* Прототоп jQuery для уменьшения элементов */
    jQuery.fn.elementsToSmall = function () {
        this.each(function () {
            jQuery(this).removeClass('big');
        });
    };

    /* Прототоп jQuery для увеличения элемента */
    jQuery.fn.elementToBig = function () {
        jQuery(this).addClass('big');
    };

    /* Прототоп jQuery для установки позиций элементов */
    jQuery.fn.setPosition = function (state) {
        jQuery('.box').each(function () {

            /* Сбросить текущие координаты по строкам */
            jQuery(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)row-\S+/g) || []).join(' ');
            });

            /* Сбросить текущие координаты по столбцам */
            jQuery(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)col-\S+/g) || []).join(' ');
            });
        });

        /* Получить новые координаты элементов по текущему состоянию */
        var coordinates = getStatesByItem(state);

        /* Установить новые координаты */
        setStatesByItem(coordinates);

    };
})(jQuery);

/* Работаем с данными после того, как структура страницы сформирована */
jQuery(document).ready(function () {

    /* Текущее состояние по умолчанию */
    var state = 1;

    /* Обработчики элементам с классом box при наведении */
    jQuery('.box').mouseenter(function () {

        /* Получить идентификаторы выбранного элемента */
        var selectedItem = jQuery(this).attr('id');

        /* Получаем состояние в которое необходимо перейти */
        state = getTransition(state, selectedItem);

        /* Уменьшаем все элементы кроме текущего */
        jQuery('.box').not(this).elementsToSmall();

        /* Увеличиваем текущий элемент */
        jQuery(this).elementToBig();

        /* Устанавливаем элементам положение на сетке */
        jQuery(this).setPosition(state);

    });

});