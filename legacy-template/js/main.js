/*
Theme Name: LibeFinance.
Author: Metropolitanthemes
Author URL: https://themeforest.net/user/metropolitantheme
Version: 1.0.0

%%%%%%% JS INDEX %%%%%%%

01. Preloader
02. Sticky Header
03. Offcanvas Menu
04. Scroll Reveals
05. Counters
06. Loan Math
07. Hero Calculator
08. Calculator Band
09. Testimonial Slider
10. Back To Top
11. Anchor Scroll
12. Three FX
13. X Feed Card
14. Parallax
15. X Slider
16. Hero Slider
17. Calculator Suite
18. Loan Wizard
19. Dashboard
20. AI Extras
21. Countdown
22. Contact Form
23. Blog Gallery
*/
(function ($) {
  'use strict';

  // JS is running - swap the no-js fallback class
  document.documentElement.classList.replace('no-js', 'js');

  gsap.registerPlugin(ScrollTrigger);

  // Respect the user's reduced-motion preference: content renders instantly.
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /*-------------------------------------------------------------------------------
  01. Preloader
  -------------------------------------------------------------------------------*/
  function doPreloader() {
    var $preloader = $('.ld-preloader');
    if (!$preloader.length) { return; }
    if (reducedMotion || document.hidden) {
      $preloader.hide();
      doCounters();
      return;
    }
    var $count = $preloader.find('.pre-count');
    var counter = { val: 0 };
    var tl = gsap.timeline({
      onComplete: function () {
        $preloader.hide();
      }
    });
    // Brand letters rise in while the ghost counter runs to 100
    tl.from('.ld-preloader .pre-brand span', {
      yPercent: 110,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power3.out'
    }, 0);
    tl.to(counter, {
      val: 100,
      duration: 1.05,
      ease: 'power2.inOut',
      onUpdate: function () {
        $count.text(Math.round(counter.val) + '%');
      }
    }, 0);
    tl.to('.ld-preloader .pre-inner, .ld-preloader .pre-count', {
      autoAlpha: 0,
      duration: 0.3,
      ease: 'power2.in'
    }, '+=0.1');
    // Split-curtain exit reveals the page
    tl.to('.ld-preloader .panel-l', { xPercent: -101, duration: 0.65, ease: 'power4.inOut' }, '-=0.1');
    tl.to('.ld-preloader .panel-r', { xPercent: 101, duration: 0.65, ease: 'power4.inOut' }, '<');
  }

  /*-------------------------------------------------------------------------------
  02. Sticky Header
  -------------------------------------------------------------------------------*/
  function doSticky() {
    var $header = $('.header-area');
    if (!$header.length) { return; }
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 160) {
        $header.addClass('sticky-active');
      } else {
        $header.removeClass('sticky-active');
      }
    });
  }

  /*-------------------------------------------------------------------------------
  03. Offcanvas Menu
  -------------------------------------------------------------------------------*/
  function doOffcanvas() {
    $('.ld-menu-toggle').on('click', function (e) {
      e.preventDefault();
      $('.ld-offcanvas, .ld-offcanvas-overlay').addClass('open');
    });
    $('.offcanvas-close, .ld-offcanvas-overlay').on('click', function (e) {
      e.preventDefault();
      $('.ld-offcanvas, .ld-offcanvas-overlay').removeClass('open');
    });
    $('.offcanvas-nav a').on('click', function () {
      $('.ld-offcanvas, .ld-offcanvas-overlay').removeClass('open');
    });
  }

  /*-------------------------------------------------------------------------------
  04. Scroll Reveals
  -------------------------------------------------------------------------------*/
  function doScrollReveals() {
    if (reducedMotion) {
      // No animations: show the reveal elements immediately
      gsap.set('.fade-top, .fade-in', { opacity: 1 });
      return;
    }
    // Content already inside or above the viewport on load (restored scroll
    // positions, anchors) renders instantly instead of waiting for a trigger
    function alreadyPassed(el, ratio) {
      return el.getBoundingClientRect().top < window.innerHeight * ratio;
    }
    $('.fade-wrapper').each(function () {
      var items = $(this).find('.fade-top');
      if (!items.length) { return; }
      if (alreadyPassed(this, 0.82)) {
        gsap.set(items, { opacity: 1 });
        return;
      }
      gsap.fromTo(items, { y: 54, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.11,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this,
          start: 'top 82%'
        }
      });
    });
    $('.fade-in').each(function () {
      if (alreadyPassed(this, 0.85)) {
        gsap.set(this, { opacity: 1 });
        return;
      }
      gsap.fromTo(this, { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this,
          start: 'top 85%'
        }
      });
    });
    $('.section-title').each(function () {
      if (alreadyPassed(this, 0.85)) { return; }
      gsap.from($(this).children(), {
        y: 38,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this,
          start: 'top 86%'
        }
      });
    });
  }

  /*-------------------------------------------------------------------------------
  05. Counters
  -------------------------------------------------------------------------------*/
  var countersDone = false;
  function doCounters() {
    if (countersDone) { return; }
    countersDone = true;
    if (reducedMotion) {
      $('.ld-counter').each(function () {
        this.textContent = $(this).data('count');
      });
      return;
    }
    $('.ld-counter').each(function () {
      var el = this;
      var target = parseFloat($(el).attr('data-count'));
      var decimals = (String(target).split('.')[1] || '').length;
      var obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          el.textContent = obj.val.toFixed(decimals);
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 90%'
        }
      });
    });
  }

  /*-------------------------------------------------------------------------------
  06. Loan Math
  -------------------------------------------------------------------------------*/
  function monthlyPayment(principal, annualRate, years) {
    var r = annualRate / 100 / 12;
    var n = Math.round(years * 12);
    if (n <= 0) { return 0; }
    if (r === 0) { return principal / n; }
    var f = Math.pow(1 + r, n);
    return principal * r * f / (f - 1);
  }
  function money(v) {
    return '$' + Math.round(v).toLocaleString('en-US');
  }

  /*-------------------------------------------------------------------------------
  07. Hero Calculator
  -------------------------------------------------------------------------------*/
  function paintRange($range) {
    var min = parseFloat($range.attr('min'));
    var max = parseFloat($range.attr('max'));
    var val = parseFloat($range.val());
    $range.css('--fill', ((val - min) / (max - min) * 100) + '%');
  }

  function doHeroCalc() {
    var $card = $('.hero-calc');
    if (!$card.length || !$card.find('.calc-amount').length) { return; }
    var $amount = $card.find('.calc-amount');
    var rates = { 1: 12.99, 3: 10.49, 5: 8.99, 7: 7.99 };
    var years = 5;

    function update() {
      var P = parseFloat($amount.val());
      var rate = rates[years];
      var emi = monthlyPayment(P, rate, years);
      var total = emi * years * 12;
      $card.find('.out-amount').text(money(P));
      var $m = $card.find('.out-monthly');
      $m.text(money(emi)).addClass('pop');
      clearTimeout($card.data('popTimer'));
      $card.data('popTimer', setTimeout(function () { $m.removeClass('pop'); }, 300));
      $card.find('.out-rate').text(rate.toFixed(2) + '% APR');
      $card.find('.out-interest').text(money(total - P));
      paintRange($amount);
    }
    $amount.on('input', update);
    $card.find('.calc-terms button').on('click', function () {
      $card.find('.calc-terms button').removeClass('active');
      $(this).addClass('active');
      years = parseInt($(this).data('years'), 10);
      update();
    });
    update();
  }

  /*-------------------------------------------------------------------------------
  08. Calculator Band
  -------------------------------------------------------------------------------*/
  function doCalcBand() {
    var $w = $('.calc-widget');
    if (!$w.length) { return; }
    var $amount = $w.find('.band-amount');
    var $rate = $w.find('.band-rate');
    var $years = $w.find('.band-years');

    function update() {
      var P = parseFloat($amount.val());
      var rate = parseFloat($rate.val());
      var years = parseInt($years.val(), 10);
      var emi = monthlyPayment(P, rate, years);
      var total = emi * years * 12;
      $w.find('.out-amount').text(money(P));
      $w.find('.out-rate').text(rate.toFixed(1) + '%');
      $w.find('.out-years').text(years + (years === 1 ? ' year' : ' years'));
      var $bm = $w.find('.out-monthly');
      $bm.text(money(emi)).addClass('pop');
      clearTimeout($w.data('popTimer'));
      $w.data('popTimer', setTimeout(function () { $bm.removeClass('pop'); }, 300));
      $w.find('.out-interest').text(money(total - P));
      $w.find('.out-total').text(money(total));
      $w.find('.calc-example').text('Representative example: borrowing ' + money(P) + ' over ' +
        years + (years === 1 ? ' year' : ' years') + ' at ' + rate.toFixed(1) + '% APR means ' +
        (years * 12) + ' monthly payments of ' + money(emi) + ' and ' + money(total) + ' repaid in total.');
      paintRange($amount);
      paintRange($rate);
      paintRange($years);
    }
    $amount.add($rate).add($years).on('input', update);
    update();
  }

  /*-------------------------------------------------------------------------------
  09. Testimonial Slider
  -------------------------------------------------------------------------------*/
  function doTestimonialSlider() {
    if (typeof Swiper === 'undefined' || !$('.testimonial-slider').length) { return; }
    new Swiper('.testimonial-slider', {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 700,
      rewind: true,
      autoplay: { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true },
      navigation: {
        nextEl: '.t-next',
        prevEl: '.t-prev'
      },
      breakpoints: {
        768: { slidesPerView: 2 }
      }
    });
  }

  /*-------------------------------------------------------------------------------
  10. Back To Top
  -------------------------------------------------------------------------------*/
  function doBackTop() {
    var $btn = $('.ld-backtop');
    if (!$btn.length) { return; }
    $(window).on('scroll', function () {
      $btn.toggleClass('show', $(window).scrollTop() > 600);
    });
    $btn.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
  }

  /*-------------------------------------------------------------------------------
  11. Anchor Scroll
  -------------------------------------------------------------------------------*/
  function doAnchorScroll() {
    $('a[href^="#"]').on('click', function (e) {
      var href = $(this).attr('href');
      if (href.length > 1 && $(href).length) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(href).offset().top - 80 }, 650);
      }
    });
  }

  /*-------------------------------------------------------------------------------
  12. Three FX
  -------------------------------------------------------------------------------*/
  function initWave(holder, opts) {
    if (!holder || typeof THREE === 'undefined') { return; }

    var AMOUNTX = 110;
    var AMOUNTY = 26;
    var SPACING = 26;
    var count = 0;

    var camera = new THREE.PerspectiveCamera(48, holder.clientWidth / holder.clientHeight, 1, 4000);
    camera.position.set(0, 110, 460);
    camera.lookAt(0, 0, 0);

    var scene = new THREE.Scene();
    var numParticles = AMOUNTX * AMOUNTY;
    var positions = new Float32Array(numParticles * 3);
    var colors = new Float32Array(numParticles * 3);
    var blue = new THREE.Color(opts.colorA);
    var mint = new THREE.Color(opts.colorB);
    var tmp = new THREE.Color();

    var i = 0;
    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SPACING - ((AMOUNTX * SPACING) / 2);
        positions[i + 1] = 0;
        positions[i + 2] = iy * SPACING - ((AMOUNTY * SPACING) / 2);
        tmp.copy(blue).lerp(mint, ix / AMOUNTX);
        colors[i] = tmp.r;
        colors[i + 1] = tmp.g;
        colors[i + 2] = tmp.b;
        i += 3;
      }
    }

    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    var material = new THREE.PointsMaterial({
      size: opts.size,
      vertexColors: true,
      transparent: true,
      opacity: opts.opacity,
      sizeAttenuation: true
    });
    var points = new THREE.Points(geometry, material);
    scene.add(points);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(holder.clientWidth, holder.clientHeight);
    renderer.setClearColor(0x000000, 0);
    holder.appendChild(renderer.domElement);

    function paint() {
      var pos = geometry.attributes.position.array;
      var j = 0;
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          pos[j + 1] = (Math.sin((ix + count) * 0.24) * 26) + (Math.sin((iy + count) * 0.42) * 18);
          j += 3;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.035;
    }

    // Reduced motion: draw a single calm frame, no animation loop
    if (reducedMotion) {
      count = 4;
      paint();
      return;
    }

    var running = true;
    function loop() {
      if (running) { paint(); }
      requestAnimationFrame(loop);
    }
    loop();

    // Pause rendering while the band is off screen
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }

    $(window).on('resize', function () {
      camera.aspect = holder.clientWidth / holder.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(holder.clientWidth, holder.clientHeight);
    });
  }

  // Wireframe lattice globe - slow twin-shell rotation (loan tabs band)
  function initGlobe(holder) {
    if (!holder || typeof THREE === 'undefined') { return; }

    var camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
    camera.position.z = 340;

    var scene = new THREE.Scene();
    var outer = new THREE.Mesh(
      new THREE.IcosahedronGeometry(150, 2),
      new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true, transparent: true, opacity: 0.16 })
    );
    var inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(110, 1),
      new THREE.MeshBasicMaterial({ color: 0x7FE0AE, wireframe: true, transparent: true, opacity: 0.14 })
    );
    scene.add(outer);
    scene.add(inner);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(holder.clientWidth, holder.clientHeight);
    renderer.setClearColor(0x000000, 0);
    holder.appendChild(renderer.domElement);

    function paint() {
      outer.rotation.y += 0.0016;
      outer.rotation.x += 0.0007;
      inner.rotation.y -= 0.0022;
      renderer.render(scene, camera);
    }

    // Reduced motion: one static frame
    if (reducedMotion) {
      outer.rotation.set(0.4, 0.6, 0);
      inner.rotation.set(0.2, -0.4, 0);
      paint();
      return;
    }

    var running = true;
    function loop() {
      if (running) { paint(); }
      requestAnimationFrame(loop);
    }
    loop();

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }
  }

  // Flowing signal lines - phase-shifted sine ribbons (CTA band)
  function initLines(holder) {
    if (!holder || typeof THREE === 'undefined') { return; }

    var camera = new THREE.PerspectiveCamera(55, holder.clientWidth / holder.clientHeight, 1, 1000);
    camera.position.set(0, 0, 150);

    var scene = new THREE.Scene();
    var POINTS = 140;
    var SPAN = 620;
    var specs = [
      { color: 0x2E7CF6, amp: 16, speed: 0.9, phase: 0, y: -6 },
      { color: 0x7FE0AE, amp: 12, speed: 1.25, phase: 2.1, y: 4 },
      { color: 0x7FB2FF, amp: 20, speed: 0.7, phase: 4.2, y: -14 },
      { color: 0x1656D6, amp: 10, speed: 1.5, phase: 1.1, y: 12 }
    ];
    var lines = [];

    specs.forEach(function (spec) {
      var positions = new Float32Array(POINTS * 3);
      for (var i = 0; i < POINTS; i++) {
        positions[i * 3] = (i / (POINTS - 1)) * SPAN - SPAN / 2;
        positions[i * 3 + 1] = spec.y;
        positions[i * 3 + 2] = 0;
      }
      var geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      var material = new THREE.LineBasicMaterial({ color: spec.color, transparent: true, opacity: 0.5 });
      var line = new THREE.Line(geometry, material);
      scene.add(line);
      lines.push({ mesh: line, spec: spec });
    });

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(holder.clientWidth, holder.clientHeight);
    renderer.setClearColor(0x000000, 0);
    holder.appendChild(renderer.domElement);

    var t = 0;
    function paint() {
      lines.forEach(function (item) {
        var pos = item.mesh.geometry.attributes.position.array;
        for (var i = 0; i < POINTS; i++) {
          var x = pos[i * 3];
          pos[i * 3 + 1] = item.spec.y +
            Math.sin(x * 0.018 + t * item.spec.speed + item.spec.phase) * item.spec.amp +
            Math.sin(x * 0.041 + t * item.spec.speed * 0.6) * (item.spec.amp * 0.35);
        }
        item.mesh.geometry.attributes.position.needsUpdate = true;
      });
      renderer.render(scene, camera);
      t += 0.02;
    }

    // Reduced motion: one static frame
    if (reducedMotion) {
      t = 5;
      paint();
      return;
    }

    var running = true;
    function loop() {
      if (running) { paint(); }
      requestAnimationFrame(loop);
    }
    loop();

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }

    $(window).on('resize', function () {
      camera.aspect = holder.clientWidth / holder.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(holder.clientWidth, holder.clientHeight);
    });
  }

  // Drifting particle field - depth-scattered dots (hero backdrop)
  function initParticles(holder) {
    if (!holder || !holder.clientWidth || typeof THREE === 'undefined') { return; }

    var camera = new THREE.PerspectiveCamera(55, holder.clientWidth / holder.clientHeight, 1, 2000);
    camera.position.z = 420;

    var scene = new THREE.Scene();
    var COUNT = 170;
    var positions = new Float32Array(COUNT * 3);
    var colors = new Float32Array(COUNT * 3);
    var blue = new THREE.Color(0x1656D6);
    var mint = new THREE.Color(0x7FE0AE);
    var tmp = new THREE.Color();
    // Deterministic scatter - keeps the field identical on every load
    function rnd(n) {
      var x = Math.sin(n * 127.1) * 43758.5453;
      return x - Math.floor(x);
    }
    for (var i = 0; i < COUNT; i++) {
      positions[i * 3] = (rnd(i + 1) - 0.5) * 1300;
      positions[i * 3 + 1] = (rnd(i + 101) - 0.5) * 480;
      positions[i * 3 + 2] = (rnd(i + 201) - 0.5) * 420;
      tmp.copy(blue).lerp(mint, rnd(i + 301));
      colors[i * 3] = tmp.r;
      colors[i * 3 + 1] = tmp.g;
      colors[i * 3 + 2] = tmp.b;
    }
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    var material = new THREE.PointsMaterial({
      size: 3.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true
    });
    var points = new THREE.Points(geometry, material);
    scene.add(points);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(holder.clientWidth, holder.clientHeight);
    renderer.setClearColor(0x000000, 0);
    holder.appendChild(renderer.domElement);

    var t = 0;
    function paint() {
      points.rotation.y += 0.00045;
      points.position.y = Math.sin(t) * 8;
      renderer.render(scene, camera);
      t += 0.004;
    }

    // Reduced motion: one static frame
    if (reducedMotion) {
      paint();
      return;
    }

    var running = true;
    function loop() {
      if (running) { paint(); }
      requestAnimationFrame(loop);
    }
    loop();

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }

    $(window).on('resize', function () {
      camera.aspect = holder.clientWidth / holder.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(holder.clientWidth, holder.clientHeight);
    });
  }

  // Torus knot - slow-turning wireframe sculpture (advisory practice)
  function initKnot(holder) {
    if (!holder || !holder.clientWidth || typeof THREE === 'undefined') { return; }

    var RADIUS = 80;
    var camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);

    var scene = new THREE.Scene();
    var knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(62, 16, 150, 10),
      new THREE.MeshBasicMaterial({ color: 0x1656D6, wireframe: true, transparent: true, opacity: 0.28 })
    );
    scene.add(knot);
    var core = new THREE.Mesh(
      new THREE.TorusKnotGeometry(62, 5, 100, 6),
      new THREE.MeshBasicMaterial({ color: 0x7FE0AE, wireframe: true, transparent: true, opacity: 0.32 })
    );
    scene.add(core);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    holder.appendChild(renderer.domElement);

    var W = 0;
    var H = 0;
    // Track the live holder box and pull the camera in so the sculpture
    // covers the whole area - the larger axis runs edge to edge
    function syncSize() {
      if (!holder.clientWidth || (holder.clientWidth === W && holder.clientHeight === H)) { return; }
      W = holder.clientWidth;
      H = holder.clientHeight;
      camera.aspect = W / H;
      var tanV = Math.tan((camera.fov / 2) * Math.PI / 180);
      camera.position.z = RADIUS / Math.max(tanV, tanV * camera.aspect);
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);
      renderer.setSize(W, H);
    }
    syncSize();

    function paint() {
      syncSize();
      knot.rotation.y += 0.0028;
      knot.rotation.x += 0.001;
      core.rotation.y += 0.0028;
      core.rotation.x += 0.001;
      renderer.render(scene, camera);
    }

    // Reduced motion: one static frame
    if (reducedMotion) {
      knot.rotation.set(0.6, 0.8, 0);
      core.rotation.set(0.6, 0.8, 0);
      paint();
      return;
    }

    var running = true;
    function loop() {
      if (running) { paint(); }
      requestAnimationFrame(loop);
    }
    loop();

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }

    $(window).on('resize', syncSize);
  }

  // Defer a scene until its holder actually has layout size - covers hidden
  // tabs at load time and holders revealed later by responsive breakpoints
  function whenSized(el, init) {
    if (!el) { return; }
    if (el.clientWidth) { init(el); return; }
    if ('ResizeObserver' in window) {
      var ro = new ResizeObserver(function () {
        if (el.clientWidth) {
          ro.disconnect();
          init(el);
        }
      });
      ro.observe(el);
    }
  }

  function doThreeFx() {
    whenSized(document.querySelector('.ld-wave'), function (el) {
      initWave(el, { colorA: 0x2E7CF6, colorB: 0x7FE0AE, size: 3.6, opacity: 0.85 });
    });
    whenSized(document.querySelector('.hero-wave'), function (el) {
      initWave(el, { colorA: 0x1656D6, colorB: 0x7FB2FF, size: 3, opacity: 0.35 });
    });
    whenSized(document.querySelector('.ld-globe'), initGlobe);
    whenSized(document.querySelector('.ld-lines'), initLines);
    whenSized(document.querySelector('.hero-fx'), initParticles);
    whenSized(document.querySelector('.subheader-area .page-fx'), initParticles);
    whenSized(document.querySelector('.practice-fx .ld-knot'), initKnot);
  }

  /*-------------------------------------------------------------------------------
  13. X Feed Card
  -------------------------------------------------------------------------------*/
  function doXFeed() {
    var $card = $('.footer-area .x-card');
    if (!$card.length) { return; }
    var tweets = [
      { text: 'Rates updated: personal loans now from 7.99% APR for excellent credit. Check yours in two minutes - soft search only.', time: '2h · from the LibeFinance rates desk' },
      { text: 'Milestone: $980M funded to 32,000+ borrowers. Thank you for trusting us with your next move.', time: '1d · LibeFinance' },
      { text: 'New in the dashboard: the early-payoff planner. See how one extra payment a month shortens your whole loan.', time: '3d · LibeFinance product team' }
    ];
    if (reducedMotion) { return; }
    var i = 0;
    setInterval(function () {
      i = (i + 1) % tweets.length;
      var $tweet = $card.find('.x-tweet');
      var $time = $card.find('.x-time');
      $tweet.css('opacity', 0);
      setTimeout(function () {
        $tweet.text(tweets[i].text).css('opacity', 1);
        $time.text(tweets[i].time);
      }, 400);
    }, 6000);
  }

  /*-------------------------------------------------------------------------------
  14. Parallax
  -------------------------------------------------------------------------------*/
  function doParallax() {
    if (reducedMotion) { return; }
    $('.ld-parallax-bg img').each(function () {
      gsap.set(this, { scale: 1.18, transformOrigin: 'center center' });
      gsap.fromTo(this, { yPercent: -8 }, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: $(this).closest('section')[0],
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  /*-------------------------------------------------------------------------------
  15. X Slider
  -------------------------------------------------------------------------------*/
  function doXSlider() {
    if (!$('.x-slider').length || typeof Swiper === 'undefined') { return; }
    new Swiper('.x-slider', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      speed: 700,
      autoplay: reducedMotion ? false : { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  /*-------------------------------------------------------------------------------
  16. Hero Slider
  -------------------------------------------------------------------------------*/
  function doHeroSlider() {
    if (!$('.hero-slider').length || typeof Swiper === 'undefined') { return; }
    new Swiper('.hero-slider', {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      rewind: true,
      speed: 800,
      autoHeight: true,
      autoplay: reducedMotion ? false : { delay: 6500, disableOnInteraction: false },
      navigation: {
        nextEl: '.hero-area .h-next',
        prevEl: '.hero-area .h-prev'
      },
      on: {
        slideChange: function () {
          // Each slide brings its own background photo
          $('.hero-area').toggleClass('slide-2', this.realIndex === 1);
        }
      }
    });
  }

  /*-------------------------------------------------------------------------------
  17. Calculator Suite
  -------------------------------------------------------------------------------*/
  function doCalcSuite() {
    if (!$('.calcsuite-area').length) { return; }

    function val(id) { return parseFloat($('#' + id).val()); }
    function setOut(id, text) { $('#' + id + '-out').text(text); }
    function pct(n) { return n.toFixed(2).replace(/\.?0+$/, '') + '%'; }
    function yearsLabel(n) { return n + (n === 1 ? ' year' : ' years'); }
    function monthsLabel(m) {
      var y = Math.floor(m / 12);
      var r = m % 12;
      if (!y) { return r + ' mo'; }
      return y + ' yr' + (y > 1 ? 's' : '') + (r ? ' ' + r + ' mo' : '');
    }
    function paintAll($scope) {
      $scope.find('.ld-range').each(function () { paintRange($(this)); });
    }

    // ---- EMI + amortization + doughnut ----
    var emiChart = null;
    function updateEmi() {
      var P = val('cs-amount');
      var rate = val('cs-rate');
      var years = val('cs-years');
      var emi = monthlyPayment(P, rate, years);
      var n = years * 12;
      var total = emi * n;
      var interest = total - P;

      setOut('cs-amount', money(P));
      setOut('cs-rate', pct(rate));
      setOut('cs-years', yearsLabel(years));
      var $csm = $('#cs-emi');
      $csm.text(money(emi)).addClass('pop');
      clearTimeout($csm.data('popTimer'));
      $csm.data('popTimer', setTimeout(function () { $csm.removeClass('pop'); }, 300));
      $('#cs-int').text(money(interest));
      $('#cs-total').text(money(total));
      $('#cs-leg-a').text(money(P));
      $('#cs-leg-b').text(money(interest));
      $('#cs-bar-a').css('width', (P / total * 100) + '%');
      $('#cs-bar-b').css('width', (interest / total * 100) + '%');
      $('#cs-note').text('Representative example: borrowing ' + money(P) + ' over ' + yearsLabel(years) +
        ' at ' + rate.toFixed(2) + '% APR means ' + n + ' monthly payments of ' + money(emi) +
        ' and ' + money(total) + ' repaid in total.');
      $('#cs-verdict').text('Every dollar of this loan costs about ' +
        Math.round(interest / P * 100) + ' cents in interest over its life.');

      // year-by-year schedule
      var r = rate / 100 / 12;
      var balance = P;
      var rows = '';
      for (var y = 1; y <= years; y++) {
        var principalPaid = 0;
        var interestPaid = 0;
        for (var m = 0; m < 12 && balance > 0; m++) {
          var i = balance * r;
          var pr = Math.min(emi - i, balance);
          interestPaid += i;
          principalPaid += pr;
          balance -= pr;
        }
        rows += '<tr><td>' + y + '</td><td>' + money(Math.round(principalPaid + interestPaid)) +
          '</td><td>' + money(Math.round(principalPaid)) + '</td><td>' + money(Math.round(interestPaid)) +
          '</td><td>' + money(Math.max(0, Math.round(balance))) + '</td></tr>';
      }
      rows += '<tr class="t-total"><td>Total</td><td>' + money(Math.round(total)) + '</td><td>' +
        money(P) + '</td><td>' + money(Math.round(interest)) + '</td><td>' + money(0) + '</td></tr>';
      $('#cs-amort').html(rows);

      if (typeof Chart !== 'undefined') {
        if (!emiChart) {
          var centreText = {
            id: 'ldCentre',
            afterDraw: function (chart) {
              var ctx = chart.ctx;
              var x = (chart.chartArea.left + chart.chartArea.right) / 2;
              var y = (chart.chartArea.top + chart.chartArea.bottom) / 2;
              ctx.save();
              ctx.textAlign = 'center';
              ctx.font = "700 19px 'Inter', sans-serif";
              ctx.fillStyle = '#0F1B2D';
              ctx.fillText(chart.$ldCentre || '', x, y - 2);
              ctx.font = "500 11px 'Inter', sans-serif";
              ctx.fillStyle = '#64748B';
              ctx.fillText('per month', x, y + 16);
              ctx.restore();
            }
          };
          emiChart = new Chart(document.getElementById('csChart'), {
            plugins: [centreText],
            type: 'doughnut',
            data: {
              labels: ['Principal', 'Interest'],
              datasets: [{
                data: [P, interest],
                backgroundColor: ['#1656D6', '#7FE0AE'],
                borderWidth: 0,
                hoverOffset: 6
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: '68%',
              animation: reducedMotion ? false : { duration: 600 },
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: function (ctx) { return ctx.label + ': ' + money(ctx.parsed); }
                  }
                }
              }
            }
          });
        }
        emiChart.$ldCentre = money(emi);
        emiChart.data.datasets[0].data = [P, interest];
        emiChart.update(reducedMotion ? 'none' : undefined);
      }
    }

    // ---- affordability (36% debt-service rule) ----
    function updateAfford() {
      var income = val('af-income');
      var costs = val('af-costs');
      var rate = val('af-rate');
      var years = val('af-years');
      var budget = Math.max(0, income * 0.36 - costs);
      var r = rate / 100 / 12;
      var n = years * 12;
      var factor = (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      var maxLoan = Math.floor(budget / factor / 100) * 100;

      setOut('af-income', money(income));
      setOut('af-costs', money(costs));
      setOut('af-rate', pct(rate));
      setOut('af-years', yearsLabel(years));
      $('#af-max').text(money(maxLoan));
      $('#af-budget').text(money(budget));
      $('#af-share').text(Math.round(budget / income * 100) + '%');
      $('#af-leg-a').text(money(budget));
      $('#af-leg-b').text(money(costs));
      $('#af-bar-a').css('width', (budget / income * 100) + '%');
      $('#af-bar-b').css('width', (costs / income * 100) + '%');
      $('#af-verdict').text(budget > 0
        ? 'With ' + money(income) + ' coming in and ' + money(costs) + ' committed, a ' + money(budget) +
          ' repayment keeps you inside the 36% rule - roughly ' + money(maxLoan) + ' over ' + yearsLabel(years) + '.'
        : 'Your commitments already use the full 36% budget - reduce them before taking on a new loan.');
    }

    // ---- early payoff ----
    function updatePayoff() {
      var balance = val('po-balance');
      var rate = val('po-rate');
      var years = val('po-years');
      var extra = val('po-extra');
      var r = rate / 100 / 12;
      var basePay = monthlyPayment(balance, rate, years);
      var baseMonths = years * 12;
      var baseInterest = basePay * baseMonths - balance;

      var b = balance;
      var m = 0;
      var paid = 0;
      var pay = basePay + extra;
      while (b > 0 && m < 1200) {
        var i = b * r;
        var pr = Math.min(pay - i, b);
        paid += pr + i;
        b -= pr;
        m++;
      }
      var newInterest = paid - balance;
      var savedMonths = baseMonths - m;
      var savedInterest = Math.max(0, baseInterest - newInterest);

      setOut('po-balance', money(balance));
      setOut('po-rate', pct(rate));
      setOut('po-years', yearsLabel(years));
      setOut('po-extra', money(extra));
      $('#po-when').text(monthsLabel(m));
      $('#po-saved').text(savedMonths);
      $('#po-int').text(money(savedInterest));
      $('#po-leg-a').text(m + ' mo');
      $('#po-leg-b').text(savedMonths + ' mo');
      $('#po-bar-a').css('width', (m / baseMonths * 100) + '%');
      $('#po-bar-b').css('width', (savedMonths / baseMonths * 100) + '%');
      $('#po-verdict').text(extra > 0
        ? 'An extra ' + money(extra) + ' a month clears this loan ' + savedMonths +
          (savedMonths === 1 ? ' month' : ' months') + ' sooner and keeps ' + money(savedInterest) +
          ' of interest in your pocket.'
        : 'Add an extra monthly payment above to see how much sooner you could be debt-free.');
    }

    // ---- refinance check ----
    function updateRefi() {
      var balance = val('rf-balance');
      var oldRate = val('rf-rate');
      var years = val('rf-years');
      var newRate = val('rf-newrate');
      var fees = val('rf-fees');
      var n = years * 12;
      var oldPay = monthlyPayment(balance, oldRate, years);
      var newPay = monthlyPayment(balance, newRate, years);
      var monthly = oldPay - newPay;
      var lifetime = monthly * n - fees;
      var breakEven = monthly > 0 ? Math.ceil(fees / monthly) : 0;

      setOut('rf-balance', money(balance));
      setOut('rf-rate', pct(oldRate));
      setOut('rf-years', yearsLabel(years));
      setOut('rf-newrate', pct(newRate));
      setOut('rf-fees', money(fees));
      $('#rf-monthly').text(monthly > 0 ? money(monthly) : money(0));
      $('#rf-be').text(monthly > 0 ? breakEven + (breakEven === 1 ? ' month' : ' months') : '-');
      $('#rf-life').text(money(Math.max(0, lifetime)));
      $('#rf-leg-a').text(money(newPay));
      $('#rf-leg-b').text(monthly > 0 ? money(monthly) : money(0));
      $('#rf-bar-a').css('width', (newPay / oldPay * 100) + '%');
      $('#rf-bar-b').css('width', Math.max(0, monthly / oldPay * 100) + '%');
      if (monthly <= 0) {
        $('#rf-verdict').text('The new rate is not lower than what you already pay - stay put, switching would cost you money.');
      } else if (lifetime <= 0) {
        $('#rf-verdict').text('You would save ' + money(monthly) + ' a month, but ' + money(fees) +
          ' in fees eats the gain over this term - stay put.');
      } else {
        $('#rf-verdict').text('Refinancing pays for itself in ' + breakEven +
          (breakEven === 1 ? ' month' : ' months') + ', then saves ' + money(monthly) +
          ' every month after that - ' + money(lifetime) + ' over the loan.');
      }
    }

    // presets drive the EMI sliders
    $('.cs-presets button').on('click', function () {
      $('.cs-presets button').removeClass('active');
      $(this).addClass('active');
      $('#cs-amount').val($(this).data('amount'));
      $('#cs-rate').val($(this).data('rate'));
      $('#cs-years').val($(this).data('years'));
      paintAll($('#cspane-emi'));
      updateEmi();
    });

    $('#cs-amount, #cs-rate, #cs-years').on('input', updateEmi);
    $('#af-income, #af-costs, #af-rate, #af-years').on('input', updateAfford);
    $('#po-balance, #po-rate, #po-years, #po-extra').on('input', updatePayoff);
    $('#rf-balance, #rf-rate, #rf-years, #rf-newrate, #rf-fees').on('input', updateRefi);

    paintAll($('.calcsuite-area'));
    updateEmi();
    updateAfford();
    updatePayoff();
    updateRefi();
  }

  /*-------------------------------------------------------------------------------
  18. Loan Wizard
  -------------------------------------------------------------------------------*/
  function doLoanWizard() {
    var $card = $('.wizard-card');
    if (!$card.length) { return; }

    var $panes = $card.find('.wizard-pane');
    var $steps = $('.wizard-progress .wstep');
    var $back = $card.find('.w-back');
    var $next = $card.find('.w-next');
    var $submit = $card.find('.w-submit');
    var step = 0;
    var rates = { 1: 12.99, 3: 10.49, 5: 8.99, 7: 7.99 };

    function estimate() {
      var P = parseFloat($('#ws-amount').val());
      var years = parseInt($('#ws-term').val(), 10);
      var emi = monthlyPayment(P, rates[years], years);
      $('#ws-amount-out').text(money(P));
      var $est = $('#ws-est');
      $est.text(money(emi)).addClass('pop');
      clearTimeout($est.data('popTimer'));
      $est.data('popTimer', setTimeout(function () { $est.removeClass('pop'); }, 300));
      return emi;
    }

    function fillReview() {
      var name = ($.trim($('#ws-first').val()) + ' ' + $.trim($('#ws-last').val()));
      $card.find('[data-r="purpose"]').text($card.find('.purpose-tile.selected').text() || 'Debt consolidation');
      $card.find('[data-r="amount"]').text(money(parseFloat($('#ws-amount').val())));
      $card.find('[data-r="term"]').text($('#ws-term option:selected').text());
      $card.find('[data-r="est"]').text(money(estimate()));
      $card.find('[data-r="name"]').text($.trim(name) || '-');
      $card.find('[data-r="email"]').text($('#ws-email').val() || '-');
      var income = parseFloat($('#ws-income').val());
      $card.find('[data-r="income"]').text(income ? money(income) : '-');
    }

    function show(i) {
      step = i;
      $panes.removeClass('active').eq(i).addClass('active');
      $steps.each(function (j) {
        var done = j < i || i >= $steps.length;
        $(this).toggleClass('done', done).toggleClass('active', j === i);
        $(this).find('.dot').html(done ? '<i class="fas fa-check"></i>' : (j + 1));
      });
      $back.toggleClass('d-none', i === 0 || i > 3);
      $next.toggleClass('d-none', i >= 3);
      $submit.toggleClass('d-none', i !== 3);
      if (i === 3) { fillReview(); }
      if (i > 3) { $back.addClass('d-none'); $next.addClass('d-none'); $submit.addClass('d-none'); }
    }

    function validate(i) {
      var ok = true;
      $panes.eq(i).find('input[required]').each(function () {
        var valid = this.checkValidity() && $.trim($(this).val()) !== '';
        $(this).toggleClass('is-invalid', !valid);
        if (!valid && ok) { this.focus(); }
        ok = ok && valid;
      });
      return ok;
    }

    $card.find('.purpose-tile').on('click', function () {
      $card.find('.purpose-tile').removeClass('selected');
      $(this).addClass('selected');
    });
    $card.find('.purpose-tile').first().addClass('selected');
    $card.find('input[required]').on('input', function () {
      $(this).removeClass('is-invalid');
    });

    $('#ws-amount').on('input', function () {
      paintRange($(this));
      estimate();
    });
    $('#ws-term').on('change', estimate);

    $next.on('click', function () {
      if (validate(step)) { show(step + 1); }
    });
    $back.on('click', function () {
      show(step - 1);
    });
    $submit.on('click', function () {
      if ($('#ws-consent').is(':checked')) {
        show(4);
      } else {
        $('#ws-consent').focus();
        $card.find('.w-check').css('color', '#E05B5B');
      }
    });
    $('#ws-consent').on('change', function () {
      $card.find('.w-check').css('color', '');
    });

    paintRange($('#ws-amount'));
    estimate();
    show(0);
  }

  /*-------------------------------------------------------------------------------
  19. Dashboard
  -------------------------------------------------------------------------------*/
  function doDashboard() {
    var $dash = $('.dashboard-area');
    if (!$dash.length) { return; }

    // repayment progress bars
    $dash.find('.loan-line .bar').each(function () {
      var $bar = $(this);
      setTimeout(function () {
        $bar.find('span').css('width', $bar.data('progress') + '%');
      }, reducedMotion ? 0 : 250);
    });

    if (typeof Chart === 'undefined') { return; }

    // balance over the last 24 months
    var lineEl = document.getElementById('dashLine');
    if (lineEl) {
      var labels = [];
      var balances = [];
      var names = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
      var start = 52300;
      for (var i = 0; i < 24; i++) {
        labels.push(names[i % 12] + (i < 4 ? ' 24' : i < 16 ? ' 25' : ' 26'));
        var eased = i / 23;
        balances.push(Math.round(start - (start - 38420) * (eased * (2 - eased))));
      }
      new Chart(lineEl, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Outstanding balance',
            data: balances,
            borderColor: '#1656D6',
            backgroundColor: 'rgba(22, 86, 214, 0.08)',
            fill: true,
            borderWidth: 2.5,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#1656D6',
            tension: 0.35
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: reducedMotion ? false : { duration: 700 },
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (ctx) { return money(ctx.parsed.y) + ' outstanding'; }
              }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { maxTicksLimit: 6, color: '#64748B', font: { size: 11 } } },
            y: {
              grid: { color: 'rgba(15, 27, 45, 0.06)' },
              ticks: {
                color: '#64748B',
                font: { size: 11 },
                callback: function (v) { return '$' + Math.round(v / 1000) + 'k'; }
              }
            }
          }
        }
      });
    }

    // where payments go
    var donutEl = document.getElementById('dashDonut');
    if (donutEl) {
      new Chart(donutEl, {
        type: 'doughnut',
        data: {
          labels: ['Principal', 'Interest', 'Fees'],
          datasets: [{
            data: [68, 27, 5],
            backgroundColor: ['#1656D6', '#7FE0AE', '#7FB2FF'],
            borderWidth: 0,
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '66%',
          animation: reducedMotion ? false : { duration: 700 },
          plugins: {
            legend: {
              position: 'bottom',
              labels: { usePointStyle: true, pointStyleWidth: 8, boxHeight: 8, color: '#0F1B2D', font: { size: 12 } }
            },
            tooltip: {
              callbacks: {
                label: function (ctx) { return ctx.label + ': ' + ctx.parsed + '%'; }
              }
            }
          }
        }
      });
    }
  }

  /*-------------------------------------------------------------------------------
  20. AI Extras
  -------------------------------------------------------------------------------*/
  function doAiExtras() {
    // approval likelihood readout on the AI estimate card
    var $card = $('.hero2-area .hero-calc');
    if ($card.length) {
      var paintApprove = function () {
        var P = parseFloat($card.find('.calc-amount').val());
        var likelihood = Math.min(98, Math.max(72, Math.round(98 - P / 12500)));
        $card.find('.out-approve').text(likelihood + '%');
      };
      $card.find('.calc-amount').on('input', paintApprove);
      $card.find('.calc-terms button').on('click', paintApprove);
      paintApprove();
    }

    // LibeFinance Score gauge
    var gaugeEl = document.getElementById('aiGauge');
    if (gaugeEl && typeof Chart !== 'undefined') {
      var gaugeText = {
        id: 'ldGauge',
        afterDraw: function (chart) {
          var ctx = chart.ctx;
          var x = (chart.chartArea.left + chart.chartArea.right) / 2;
          var y = (chart.chartArea.top + chart.chartArea.bottom) / 2 + 14;
          ctx.save();
          ctx.textAlign = 'center';
          ctx.font = "700 34px 'Inter', sans-serif";
          ctx.fillStyle = '#0F1B2D';
          ctx.fillText('812', x, y);
          ctx.font = "500 12px 'Inter', sans-serif";
          ctx.fillStyle = '#64748B';
          ctx.fillText('of 1,000 - Very strong', x, y + 20);
          ctx.restore();
        }
      };
      new Chart(gaugeEl, {
        plugins: [gaugeText],
        type: 'doughnut',
        data: {
          labels: ['Score', 'Headroom'],
          datasets: [{
            data: [812, 188],
            backgroundColor: ['#1656D6', 'rgba(15, 27, 45, 0.07)'],
            borderWidth: 0,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '74%',
          rotation: -120,
          circumference: 240,
          animation: reducedMotion ? false : { duration: 900 },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          }
        }
      });
    }

    // smarter-term suggestion under the AI planner band
    var $w = $('.calc-area .calc-widget');
    var $suggest = $('#ai-suggest');
    if ($w.length && $suggest.length) {
      var paintSuggest = function () {
        var P = parseFloat($w.find('.band-amount').val());
        var rate = parseFloat($w.find('.band-rate').val());
        var years = parseInt($w.find('.band-years').val(), 10);
        if (years > 1) {
          var alt = years - 1;
          var now = monthlyPayment(P, rate, years);
          var next = monthlyPayment(P, rate, alt);
          var save = (now * years * 12) - (next * alt * 12);
          $suggest.text('AI suggestion: take ' + alt + (alt === 1 ? ' year' : ' years') +
            ' instead - the payment rises to ' + money(next) + ' but you keep ' + money(save) +
            ' in interest.');
        } else {
          $suggest.text('AI suggestion: this is already the shortest term - the cheapest way to borrow this amount.');
        }
      };
      $w.find('.band-amount, .band-rate, .band-years').on('input', paintSuggest);
      paintSuggest();
    }
  }

  /*-------------------------------------------------------------------------------
  21. Countdown
  -------------------------------------------------------------------------------*/
  function doCountdown() {
    var $cd = $('.ld-countdown');
    if (!$cd.length) { return; }
    var target = new Date($cd.data('date')).getTime();

    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function tick() {
      var diff = Math.max(0, target - Date.now());
      var d = Math.floor(diff / 86400000);
      var h = Math.floor(diff / 3600000) % 24;
      var m = Math.floor(diff / 60000) % 60;
      var sec = Math.floor(diff / 1000) % 60;
      $cd.find('.cd-days').text(pad(d));
      $cd.find('.cd-hours').text(pad(h));
      $cd.find('.cd-mins').text(pad(m));
      $cd.find('.cd-secs').text(pad(sec));
    }
    tick();
    setInterval(tick, 1000);
  }

  /*-------------------------------------------------------------------------------
  22. Contact Form
  -------------------------------------------------------------------------------*/
  function doContactForm() {
    var $form = $('#contact-form');
    if (!$form.length) { return; }
    $form.on('submit', function (e) {
      e.preventDefault();
      var $status = $form.find('.form-status');
      if (!$form.attr('action') || $form.attr('action') === '#') {
        $status.removeClass('is-error').addClass('is-success').html('This form is not connected to a mailbox yet. Please call +234 817 490 3144 or email hello@libefinance.com.');
        return;
      }
      $status.removeClass('is-error is-success').html('Sending&hellip;');
      $.post($form.attr('action'), $form.serialize())
        .done(function (res) {
          var data = typeof res === 'string' ? JSON.parse(res) : res;
          if (data.status === 'success') {
            $status.addClass('is-success').html(data.message);
            $form[0].reset();
          } else {
            $status.addClass('is-error').html(data.errors || data.message);
          }
        })
        .fail(function () {
          $status.addClass('is-error').html('Could not reach the server &mdash; upload the template to a PHP-enabled host to activate the form.');
        });
    });
  }

  /*-------------------------------------------------------------------------------
  23. Blog Gallery
  -------------------------------------------------------------------------------*/
  function doBlogGallery() {
    if (!$('.post-gallery').length || typeof Swiper === 'undefined') { return; }
    new Swiper('.post-gallery', {
      slidesPerView: 1,
      loop: true,
      speed: 600,
      autoplay: reducedMotion ? false : { delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true },
      navigation: {
        nextEl: '.post-gallery .pg-next',
        prevEl: '.post-gallery .pg-prev'
      }
    });
  }

  /*-------------------------------------------------------------------------------
  Init
  -------------------------------------------------------------------------------*/
  $(document).ready(function () {
    doSticky();
    doOffcanvas();
    doScrollReveals();
    doHeroCalc();
    doCalcBand();
    doTestimonialSlider();
    doXSlider();
    doHeroSlider();
    doCalcSuite();
    doLoanWizard();
    doDashboard();
    doAiExtras();
    doCountdown();
    doContactForm();
    doBlogGallery();
    doBackTop();
    doAnchorScroll();
    doCounters();
    doThreeFx();
    doXFeed();
    doParallax();
  });

  $(window).on('load', function () {
    doPreloader();
    ScrollTrigger.refresh();
  });

})(jQuery);
