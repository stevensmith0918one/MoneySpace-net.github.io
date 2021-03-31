/*
tinc project builder
jsFile create on 29.09.2020 09:17:06
*/
$(document).ready(function () {
  if ($('.scrollBlock').length > 0) {
    var previewItem = $('.scrollSlider .preview').find('.item');

    $('.scrollBlock').mCustomScrollbar({
      callbacks: {
        onScroll: function () {
          var item = $('.scrollSlider .main').find('.item'),
            itemHeight = item.height(),
            scrolledHeight = this.mcs.top < 0 ? this.mcs.top * -1 : 0,
            itemIndex = Math.round(scrolledHeight / itemHeight);

          previewItem.siblings().removeClass('active');
          previewItem.eq(itemIndex).addClass('active');
        }
      }
    })

    previewItem.on('click', function () {
      var item = $('.scrollSlider .main').find('.item'),
        itemHeight = item.height(),
        index = $(this).index(),
        scroll = itemHeight * index;

      $('.scrollBlock').mCustomScrollbar('scrollTo', scroll);
    })
  }

  if ($('.dropdownItem').length > 0) {
    var dropHead = $('.dropdownItem > .head'),
      dropContent = $('.dropdownItem > .content');

    $('.dropdownItem').map(function () {
      var el = $(this);

      if (el.find(dropHead).length > 0 && el.find(dropContent).length > 0) {
        el.find(dropHead).on('click', function () {
          var el = $(this),
            cont = el.siblings(dropContent);

          if (el.hasClass('active')) {
            cont.stop().slideUp(500, function () {
              el.removeClass('active');
            });

          } else {
            cont.stop().slideDown(500, function () {
              el.addClass('active');
            });
          }
        })
      }
    })
  }

  if ($(".copyLink").length > 0) {
    new ClipboardJS(".copyLink");
  }

  if ($(".modalsScroll").length > 0) {
    openMod();
  }

  if ($('.cardNumber').length > 0) {
    $('.cardNumber').mask('0000 0000 0000 0000');
  }

  if ($('.cardMonth').length > 0) {
    $('.cardMonth').mask('00');
  }

  if ($('.cardYear').length > 0) {
    $('.cardYear').mask('0000')
  }

  if ($('.cardCvc').length > 0) {
    $('.cardCvc').mask('000')
  }

  if ($('.wow').length > 0) {
    var wow;

    if ($(window).width() >= 1200) {
      wow = new WOW({
        animateClass: 'animate__animated',
        offset: $(window).height() / 2
      });
    } else {
      wow = new WOW({
        animateClass: 'animate__animated',
        offset: 0
      });
    }

    wow.init();
  }

  if ($('.animatedBlock').length > 0) {
    var blocks = $('.animatedBlock');

    $(window).on('scroll', function () {
      var scroll = $(this).scrollTop();

      blocks.map(function () {
        var topPosition = $(this).offset().top,
          bottomPosition = $(this).offset().top + $(this).height(),
          windowHeight = $(window).height();

        if (scroll + windowHeight >= bottomPosition && scroll <= topPosition) {
          $(this).addClass('runningAnimation')
        }
      })
    })
  }

  if ($('.openMenuBtn').length > 0) {
    $('.openMenuBtn').on('click', function () {
      $('.menuSm').stop().fadeIn(500);
      $('body').addClass('menuIsOpened');
    })
  }

  if ($('.closeMenuBtn').length > 0) {
    $('.closeMenuBtn').on('click', function () {
      $('.menuSm').stop().fadeOut(500);
      $('body').removeClass('menuIsOpened');
    })
  }

  $(window).on('resize', function () {
    if ($(window).width() > 768 && $('body').hasClass('menuIsOpened')) {
      $('.menuSm').stop().fadeOut(500);
      $('body').removeClass('menuIsOpened');
    }
  })

  if ($('.langBlock').length > 0) {
    $('.langBlock .head').on('click', function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').siblings('.list').stop().fadeOut(300);
      } else {
        $(this).addClass('active').siblings('.list').stop().fadeIn(300);
      }
    })

    $(document).mouseup(function (e) {
      if ($('.langBlock .head').hasClass('active')) {
        var block = $('.langBlock'),
          head = $('.langBlock .head'),
          list = $('.langBlock .list');

        if (!block.is(e.target) && block.has(e.target).length === 0) {
          head.removeClass('active');
          list.stop().fadeOut(300)
        }
      }
    });
  }
});

$(window).on('load', function () {
  if ($('.createLinkAnimation').length > 0) {
    $('.createLinkAnimation').addClass('runningAnimation');
  }
});