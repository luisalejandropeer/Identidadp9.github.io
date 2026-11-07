(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- Menú móvil ---------- */
  var burger = $("#burger"), nav = $("#nav"), topbar = $("#topbar");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }
  burger.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("scroll", function () {
    topbar.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  /* ---------- Propuestas destacadas ---------- */
  var ICONOS = {
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7.5 3v5.6c0 4.4-3 7.8-7.5 9.4-4.5-1.6-7.5-5-7.5-9.4V6z"/><path d="M9 12l2.2 2.2L15.5 10"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"/></svg>'
  };
  var box = $("#cards-destacadas");
  box.innerHTML = DESTACADAS.map(function (d) {
    var p = PROPUESTAS.filter(function (x) { return x.t === d.t; })[0];
    return '<article class="card3">' + (ICONOS[d.icono] || "") +
      '<p class="k">' + esc(d.lema) + '</p><h3>' + esc(d.t) + '</h3><p>' + esc(p ? p.d : "") + '</p></article>';
  }).join("");

  /* ---------- Pestañas Quiénes somos ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function selectTab(t) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
    });
  }
  tabs.forEach(function (b, i) {
    b.addEventListener("click", function () { selectTab(b); });
    b.addEventListener("keydown", function (e) {
      var n = null;
      if (e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); n.focus(); selectTab(n); }
    });
  });

  /* ---------- Propuestas: filtros ---------- */
  var PAGE = 12, shown = PAGE, cat = "", turno = "";
  var grid = $("#grid"), chips = $("#chips"), more = $("#more"), count = $("#count");

  var chipHTML = '<button type="button" class="chip" data-c="" aria-pressed="true">Todas</button>';
  Object.keys(CATEGORIAS).forEach(function (k) {
    chipHTML += '<button type="button" class="chip" data-c="' + k + '" aria-pressed="false">' + esc(CATEGORIAS[k]) + "</button>";
  });
  chips.innerHTML = chipHTML;

  function render() {
    var list = PROPUESTAS.filter(function (p) {
      return (!cat || p.c === cat) && (!turno || p.turnos.indexOf(turno) > -1);
    });
    var part = list.slice(0, shown);
    grid.innerHTML = part.length ? part.map(function (p) {
      var tags = '<span class="tag">' + esc(CATEGORIAS[p.c]) + "</span>" +
        p.turnos.map(function (t) { return '<span class="tag tag--soft">' + esc(TURNOS[t]) + "</span>"; }).join("");
      return '<article class="pcard"><h3>' + esc(p.t) + "</h3><p>" + esc(p.d) + '</p><div class="tags">' + tags + "</div></article>";
    }).join("") : '<p class="empty">No hay propuestas con ese filtro.</p>';
    count.textContent = list.length + (list.length === 1 ? " propuesta" : " propuestas");
    more.hidden = list.length <= shown;
  }

  chips.addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    cat = b.getAttribute("data-c"); shown = PAGE;
    Array.prototype.forEach.call(chips.children, function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
    render();
  });
  $("#turno").addEventListener("change", function (e) { turno = e.target.value; shown = PAGE; render(); });
  more.addEventListener("click", function () { shown += PAGE; render(); });
  render();

  /* ---------- Candidatos ---------- */
  $("#people").innerHTML = CANDIDATOS.map(function (c, i) {
    var sup = /suplente/i.test(c.cargo);
    return '<article class="person' + (sup ? " person--sup" : "") + '">' +
      '<img src="' + esc(c.foto) + '" alt="Foto de ' + esc(c.nombre) + '" width="630" height="580" loading="' + (i < 3 ? "eager" : "lazy") + '">' +
      '<div class="person__b"><span class="person__cargo">' + esc(c.cargo) + "</span><h3>" + esc(c.nombre) + "</h3>" +
      (c.bio ? "<p>" + esc(c.bio) + "</p>" : "") + "</div></article>";
  }).join("");

  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
})();
