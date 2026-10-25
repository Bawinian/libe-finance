'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Decorations() {
  const pathname = usePathname();
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    import('three').then((THREE) => {
      if (disposed) return;
      const frames = new Set(), observers = [], renderers = [], resizes = [];
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      function scheduleFrame(callback) {
        const id = requestAnimationFrame(() => { frames.delete(id); if (!disposed) callback(); });
        frames.add(id);
      }
      function observeIntersection(callback) { const observer = new IntersectionObserver(callback); observers.push(observer); return observer; }
      function observeResize(callback) { const observer = new ResizeObserver(callback); observers.push(observer); return observer; }
      function onResize(callback) { resizes.push(callback); window.addEventListener('resize', callback); }
      function createRenderer(scene) {
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderers.push({ renderer, scene });
        return renderer;
      }
      cleanup = () => {
        frames.forEach(cancelAnimationFrame);
        observers.forEach((observer) => observer.disconnect());
        resizes.forEach((callback) => window.removeEventListener('resize', callback));
        renderers.forEach(({ renderer, scene }) => {
          scene.traverse((object) => {
            object.geometry?.dispose();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => material?.dispose());
          });
          renderer.dispose();
          renderer.domElement.remove();
        });
      };
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

    var renderer = createRenderer(scene);
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
      scheduleFrame(loop);
    }
    loop();

    // Pause rendering while the band is off screen
    if ('IntersectionObserver' in window) {
      observeIntersection(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }

    onResize( function () {
      camera.aspect = holder.clientWidth / holder.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(holder.clientWidth, holder.clientHeight);
    });
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

    var renderer = createRenderer(scene);
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
      scheduleFrame(loop);
    }
    loop();

    if ('IntersectionObserver' in window) {
      observeIntersection(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }

    onResize( function () {
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

    var renderer = createRenderer(scene);
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
      scheduleFrame(loop);
    }
    loop();

    if ('IntersectionObserver' in window) {
      observeIntersection(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }

    onResize( function () {
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

    var renderer = createRenderer(scene);
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
      scheduleFrame(loop);
    }
    loop();

    if ('IntersectionObserver' in window) {
      observeIntersection(function (entries) {
        running = entries[0].isIntersecting;
      }).observe(holder);
    }

    onResize( syncSize);
  }

  // Defer a scene until its holder actually has layout size - covers hidden
  // tabs at load time and holders revealed later by responsive breakpoints
  function whenSized(el, init) {
    if (!el) { return; }
    if (el.clientWidth) { init(el); return; }
    if ('ResizeObserver' in window) {
      var ro = observeResize(function () {
        if (el.clientWidth) {
          ro.disconnect();
          init(el);
        }
      });
      ro.observe(el);
    }
  }

  function doThreeFx() {
    whenSized(document.querySelector('.hero-wave'), function (el) {
      initWave(el, { colorA: 0x1656D6, colorB: 0x7FB2FF, size: 3, opacity: 0.35 });
    });
    whenSized(document.querySelector('.ld-lines'), initLines);
    whenSized(document.querySelector('.hero-fx'), initParticles);
    whenSized(document.querySelector('.subheader-area .page-fx'), initParticles);
    whenSized(document.querySelector('.practice-fx .ld-knot'), initKnot);
  }


      try { doThreeFx(); } catch { cleanup(); }
    }).catch(() => { /* Decorative effects may be unavailable; content stays usable. */ });
    return () => { disposed = true; cleanup(); };
  }, [pathname]);
  return null;
}
