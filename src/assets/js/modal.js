(function () {

    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();


var modalOpenEvent = new CustomEvent("modal_open"),
    modalCloseEvent = new CustomEvent("modal.close"),
    modalInitEvent = new CustomEvent("modal.init"),
    modalBeforeOpenEvent = new CustomEvent("modal_before_open"),
    modalBeforeCloseEvent = new CustomEvent("modal.before.close")

// var overlayModal = $('.modalsScroll .overlayModal')

var openMod = function () {
    $("[data-modal]").map(function () {
        if ($(window).width() >= 768) {
            $(this).on("click", modalEvent)
            var el = document.getElementById($(this).attr('data-modal'))
            if (!$(el).hasClass("init-modal")) {
                el.dispatchEvent(modalInitEvent)
                $(el).addClass("init-modal")
            }
        } else {
            if (!$(this).hasClass('notModalMob')) {
                $(this).on("click", modalEvent)
                var el = document.getElementById($(this).attr('data-modal'))
                if (!$(el).hasClass("init-modal")) {
                    el.dispatchEvent(modalInitEvent)
                    $(el).addClass("init-modal")
                }
            }
        }
    })
    $(".modalsScroll .closeModal").on("click", closeModal)
    $(".modalsScroll .overlayModal").on("click", closeModal)
}

var modalEventOpen = function (el) {
    var elAttr = "#" + el
    var blockEl = $(".blockMod")
    var blockElOpen = blockEl.filter("." + activeClass)
    var blockElNextModal = blockEl.filter(elAttr)
    var activeClass = "open"
    var activeMSClass = "open"
    var activeBodyClass = "bodyModal"
    var timeAnimation = 500

    if (blockElOpen.length > 0) {

        //if modal is open - mean -> body hasClass activeBodyClass, .modalsScroll hasClass activeMSClass

        blockElOpen.removeClass(activeClass).fadeOut(timeAnimation);
        setTimeout(function () {
            blockElNextModal.addClass(activeClass).fadeIn(timeAnimation);
        }, timeAnimation)
    } else {
        $('.overlayModal').fadeIn(timeAnimation);
        blockElNextModal.addClass(activeClass).fadeIn(timeAnimation);
        $("body").addClass(activeBodyClass);
        $(".modalsScroll").addClass(activeMSClass);
    }
}
var modalEvent = function () {
    var s = ".modalsScroll:not([data-modalid])";
    if ($(this).attr("data-modalid")) {
        s = ".modalsScroll#" + $(this).attr('data-modalid')
    }
    if ($(s + " .blockMod.open").length > 0) {
        openOtherModal($(this))
    } else {
        openModal($(this))
    }
}
var openOtherModal = function (elem) {
    closeModalOnly()
    setTimeout(function () {
        openModalOnly(elem)
    }, 500)
}
var openModal = function (elem) {
    var s = ".modalsScroll:not([data-modalid])";
    // console.log(s)
    if (elem.attr("data-modalid")) {
        s = ".modalsScroll#" + elem.attr('data-modalid')
    }
    // console.log(s)
    $(s + ' .overlayModal').fadeTo(500, 1)
    var el = document.getElementById(elem.attr('data-modal'))
    el.dispatchEvent(modalBeforeOpenEvent)
    $(s + " .blockMod#" + elem.attr('data-modal'))
        .addClass("open")
        .fadeTo(500, 1, function () {
            // console.log(el)
            el.dispatchEvent(modalOpenEvent)
        })
    $("html").addClass("bodyModal").on('keydown', function (e) {
        if (e.keyCode == 27) {
            closeModal()
        }
    });
    $(s).addClass("open")
}
var openModalOnly = function (elem) {
    var s = ".modalsScroll:not([data-modalid])";
    if (elem.attr("data-modalid")) {
        s = ".modalsScroll#" + $(this).attr('data-modalid')
    }
    var el = document.getElementById(elem.attr('data-modal'))
    el.dispatchEvent(modalBeforeOpenEvent)
    $(s + " .blockMod#" + elem.attr('data-modal'))
        .addClass("open")
        .fadeTo(500, 1, function () {
            el.dispatchEvent(modalOpenEvent)
        })
}
var closeModal = function () {
    $('.modalsScroll .overlayModal').fadeTo(500, 0)
    var el = document.getElementById($(".modalsScroll .blockMod.open").attr('id'))
    el.dispatchEvent(modalBeforeCloseEvent)
    $(".modalsScroll .blockMod.open").fadeTo(500, 0, function () {
        $(this).removeClass("open")
        $("html").removeClass("bodyModal").off('keydown')
        $(".modalsScroll").removeClass("open")
        el.dispatchEvent(modalCloseEvent)
    })
}
var closeModalOnly = function () {
    var el = document.getElementById($(".modalsScroll .blockMod.open").attr('id'))
    el.dispatchEvent(modalBeforeCloseEvent)
    $(".modalsScroll .blockMod.open").fadeTo(500, 0, function () {
        $(this).removeClass("open")
        el.dispatchEvent(modalCloseEvent)
    })
}