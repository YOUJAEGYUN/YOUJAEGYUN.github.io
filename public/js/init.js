/*-----------------------------------------------------------------------------------
/*
/* Init JS (React/Vite friendly)
/*
-----------------------------------------------------------------------------------*/

(function () {
  // 중복 실행 방지용 플래그
  var initialized = false;
  var initRetryCount = 0;
  var MAX_RETRY = 20; // 20 * 200ms = 최대 4초 재시도

  function hasCoreDom() {
    // React가 렌더링해서 section/header/nav-wrap 등이 실제로 생겼는지 체크
    return (
      document.getElementById('nav-wrap') &&
      document.querySelector('header') &&
      document.querySelectorAll('section').length > 0
    );
  }

  function initAll($) {
    if (initialized) return;

    // 핵심 DOM이 아직 없으면 잠깐 기다렸다가 재시도
    if (!hasCoreDom()) {
      if (initRetryCount++ < MAX_RETRY) {
        setTimeout(function () {
          initAll($);
        }, 200);
      }
      return;
    }

    initialized = true;

    /*----------------------------------------------------*/
    /* FitText Settings
    ------------------------------------------------------ */
    setTimeout(function () {
      if ($.fn.fitText) {
        $('h1.responsive-headline').fitText(1, {
          minFontSize: '60px',
          maxFontSize: '60px',
        });
      }
    }, 100);

    /*----------------------------------------------------*/
    /* Smooth Scrolling (중복 바인딩 방지)
    ------------------------------------------------------ */
    $(document)
      .off('click.smoothscroll', '.smoothscroll')
      .on('click.smoothscroll', '.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        if ($target.length === 0) return;

        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top,
            },
            800,
            'swing',
            function () {
              window.location.hash = target;
            },
          );
      });

    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
    /* (waypoints 중복 초기화 방지)
    ------------------------------------------------------*/
    var sections = $('section');
    var navigation_links = $('#nav-wrap a');

    if ($.fn.waypoint && sections.length) {
      // 기존 waypoint 인스턴스가 있으면 제거(재초기화 안전)
      try {
        sections.waypoint('destroy');
      } catch (e) {}

      sections.waypoint({
        handler: function (event, direction) {
          var active_section = $(this);
          if (direction === 'up') active_section = active_section.prev();

          var active_link = $(
            '#nav-wrap a[href="#' + active_section.attr('id') + '"]',
          );

          navigation_links.parent().removeClass('current');
          active_link.parent().addClass('current');
        },
        offset: '35%',
      });
    }

    /*----------------------------------------------------*/
    /* header height = browser height (resize 핸들러 중복 방지)
    ------------------------------------------------------ */
    function setHeaderHeight() {
      $('header').css({ height: $(window).height() });
      $('body').css({ width: $(window).width() });
    }

    setHeaderHeight();
    $(window).off('resize.headerHeight').on('resize.headerHeight', setHeaderHeight);

    /*----------------------------------------------------*/
    /* Fade In/Out Primary Navigation (scroll 핸들러 중복 방지)
    ------------------------------------------------------*/
    $(window)
      .off('scroll.navFade')
      .on('scroll.navFade', function () {
        var h = $('header').height();
        var y = $(window).scrollTop();
        var nav = $('#nav-wrap');

        if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
          nav.fadeOut('fast');
        } else {
          if (y < h * 0.2) {
            nav.removeClass('opaque').fadeIn('fast');
          } else {
            nav.addClass('opaque').fadeIn('fast');
          }
        }
      });

    /*----------------------------------------------------*/
    /* Modal Popup (중복 초기화 방지)
    ------------------------------------------------------*/
    if ($.fn.magnificPopup) {
      $('.item-wrap a').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        removalDelay: 200,
        showCloseBtn: false,
        mainClass: 'mfp-fade',
      });

      $(document)
        .off('click.popupDismiss', '.popup-modal-dismiss')
        .on('click.popupDismiss', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
    }

    /*----------------------------------------------------*/
    /* Flexslider (중복 초기화 방지)
    ------------------------------------------------------*/
    if ($.fn.flexslider) {
      // 이미 초기화된 요소는 건너뜀
      $('.flexslider').each(function () {
        var $el = $(this);
        if ($el.data('flexslider')) return;

        $el.flexslider({
          namespace: 'flex-',
          controlsContainer: '.flex-container',
          animation: 'slide',
          controlNav: true,
          directionNav: false,
          smoothHeight: true,
          slideshowSpeed: 7000,
          animationSpeed: 600,
          randomize: false,
        });
      });
    }

    /*----------------------------------------------------*/
    /* contact form (그대로 유지)
    ------------------------------------------------------*/
    $('form#contactForm button.submit')
      .off('click.contactSubmit')
      .on('click.contactSubmit', function () {
        $('#image-loader').fadeIn();

        var contactName = $('#contactForm #contactName').val();
        var contactEmail = $('#contactForm #contactEmail').val();
        var contactSubject = $('#contactForm #contactSubject').val();
        var contactMessage = $('#contactForm #contactMessage').val();

        var data =
          'contactName=' +
          contactName +
          '&contactEmail=' +
          contactEmail +
          '&contactSubject=' +
          contactSubject +
          '&contactMessage=' +
          contactMessage;

        $.ajax({
          type: 'POST',
          url: 'inc/sendEmail.php',
          data: data,
          success: function (msg) {
            if (msg == 'OK') {
              $('#image-loader').fadeOut();
              $('#message-warning').hide();
              $('#contactForm').fadeOut();
              $('#message-success').fadeIn();
            } else {
              $('#image-loader').fadeOut();
              $('#message-warning').html(msg);
              $('#message-warning').fadeIn();
            }
          },
        });

        return false;
      });
  }

  function boot() {
    // jQuery가 준비될 때까지 기다림
    function waitForJQ() {
      if (window.jQuery) {
        // React 렌더 + 이미지/CSS 로딩까지 고려해서 load 이후에도 한 번 더 보장
        initAll(window.jQuery);
      } else {
        setTimeout(waitForJQ, 50);
      }
    }
    waitForJQ();
  }

  // document.ready 대신 load에서 시작(React 렌더 + 리소스 로딩 고려)
  window.addEventListener('load', boot);

  // 혹시 SPA 라우팅/렌더 타이밍이 더 늦는 경우를 대비한 안전망
  // (URL hash 변경 시에도 섹션 하이라이트/스크롤 동작이 안정적)
  window.addEventListener('hashchange', function () {
    if (window.jQuery) {
      // initialized 상태라도 이벤트가 날아갔을 수 있어서, destroy/재바인딩 로직이 있으니 한 번 더 시도
      initialized = false;
      initRetryCount = 0;
      initAll(window.jQuery);
    }
  });
})();
