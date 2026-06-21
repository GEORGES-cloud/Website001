/* =====================================================================
   REAL DE COTE — interactions
   Vanilla JS · no dependencies · progressive & reduced-motion aware
   ===================================================================== */
(function () {
  "use strict";

  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------------------------------------------------------------
     1. i18n  (Spanish is authored in the DOM; EN comes from here.
        Missing keys gracefully fall back to the Spanish original.)
  --------------------------------------------------------------- */
  var EN = {
    "skip":"Skip to content",
    "nav.heritage":"Heritage","nav.collection":"Collection","nav.terroir":"Terroir",
    "nav.process":"Process","nav.export":"Export","nav.contact":"Contact","nav.cta":"Trade enquiry",

    "hero.eyebrow":"Extra Virgin Olive Oil · Montellano, Seville",
    "hero.title1":"Heritage & distinction","hero.title2":"in every drop",
    "hero.sub":"Early-harvest extra virgin olive oil, raised at Cortijo Cote — 250 metres above the heart of Seville.",
    "hero.cta1":"Explore the collection","hero.cta2":"Trade enquiry","hero.scroll":"Scroll",

    "her.eyebrow":"Our heritage","her.title":"Heritage & distinction",
    "her.p1":"In the countryside of Montellano, Seville, our farmhouse stands 250 metres above sea level, just 66 kilometres from the provincial capital. Here, in the heart of Andalusia, we cultivate excellence — every drop of our oil reflects the richness of our land and our tradition.",
    "her.p2":"Cortijo Cote is more than a place: it is the origin of an extra virgin olive oil raised with patience, craft and a deep respect for the grove.",
    "her.badge":"metres elevation",
    "stat.alt":"metres elevation","stat.km":"km to Seville","stat.var":"EVOO varieties","stat.shelf":"months shelf life",

    "col.eyebrow":"The collection","col.title":"Five oils, one origin",
    "col.intro":"Our family of extra virgin olive oils — from the house coupage to the most singular single-variety expressions and our organic edition. Each available in 500 ml and 250 ml.",
    "col.f.all":"All","col.f.single":"Single-variety","col.f.coupage":"Coupage","col.f.organic":"Organic",

    "p.more":"Enquire",
    "p.coup.tag":"Signature","p.coup.sub":"Our classic blend",
    "p.coup.notes":"The coupage that defines the house: a harmonious balance of varieties with subtle green notes. Smooth, rounded and versatile — perfect for everyday use and for dressing.",
    "p.manz.tag":"Single variety","p.manz.sub":"Seville's olive",
    "p.manz.notes":"Made from the emblematic Sevillian Manzanilla olive. Fresh and elegant, with a mild fruitiness and hints of green almond and apple. Balanced and highly versatile.",
    "p.bio.tag":"Organic","p.bio.var":"Organic coupage","p.bio.sub":"Unfiltered",
    "p.bio.notes":"From our certified organic groves, cold-extracted by mechanical means only. Unfiltered — it keeps the fine suspended solids that preserve its full aroma, flavour and texture.",
    "p.hoji.tag":"Single variety","p.hoji.sub":"Body & stability",
    "p.hoji.notes":"With 65–70% oleic acid, it offers medium intensity, a balanced profile and exceptional heat resistance. More stable at high temperatures — ideal both raw and cooked.",
    "p.arb.tag":"Single variety","p.arb.sub":"Fruity & aromatic",
    "p.arb.notes":"A refined Arbequina with southern character: delicate fruit aromas and green notes of herb and wheat, layered with almond, apple and ripe banana.",
    "feat.eyebrow":"Our signature",
    "feat.quote":"“The coupage that defines Real de Cote: varieties in harmony — smooth and rounded — bringing the soul of Andalusia to your table.”",
    "feat.l1":"A harmonious balance of select varieties",
    "feat.l2":"Smooth, rounded and highly versatile",
    "feat.l3":"Available in 500 ml and 250 ml",
    "feat.cta":"Enquire about this oil",

    "proc.eyebrow":"From grove to bottle","proc.title":"A craft of patience",
    "proc.s1t":"Early harvest","proc.s1p":"We pick the olives at their optimal ripeness, in the heart of the Montellano countryside.",
    "proc.s2t":"Cold extraction","proc.s2p":"Cold mechanical extraction, with no chemicals and within hours, to capture all the fruit's freshness.",
    "proc.s3t":"Natural richness","proc.s3p":"We keep the fine suspended solids — aroma, flavour and texture remain intact.",
    "proc.s4t":"Bottling","proc.s4p":"Bottled and sealed at origin to bring the best of Andalusia to your table.",

    "terr.eyebrow":"Our terroir","terr.title":"Montellano, Seville's southern hills",
    "terr.p":"At 250 metres, among olive groves and the silhouette of Cote castle, an oil is born with the unmistakable character of the Andalusian countryside.",
    "terr.c1":"Elevation","terr.c2":"Latitude","terr.c3":"Andalusia, Spain","terr.cta":"Plan a visit",

    "qual.eyebrow":"Certified quality","qual.title":"A guarantee in every bottle",
    "qual.c1t":"Extra Virgin","qual.c1p":"The highest grade of olive oil, obtained by physical means only.",
    "qual.c2t":"Organic farming","qual.c2p":"Our BIO line comes from certified organic groves.",
    "qual.c3t":"Cold extraction","qual.c3p":"Cold-extracted to preserve aromas, polyphenols and flavour.",
    "qual.c4t":"24-month shelf life","qual.c4p":"Guaranteed stability for export to any market.",

    "bey.eyebrow":"Beyond EVOO","bey.title":"The Real de Cote pantry",
    "bey.c1t":"Vinegars","bey.c1p":"Wine vinegar and balsamic vinegar, to elevate every dish.",
    "bey.c2f":"Cooking & frying","bey.c2t":"Pomace oil","bey.c2p":"100% olive origin with a high smoke point. Also blended with sunflower for mild frying.",
    "bey.c3f":"Food service","bey.c3t":"5 L jug","bey.c3p":"The professional format for restaurants and kitchens, in EVOO and pomace.",
    "bey.c4f":"Stuffed","bey.c4t":"Gordal olives","bey.c4p":"The great Sevillian olive, stuffed and cured, with a 36-month shelf life.",

    "exp.eyebrow":"Export","exp.title":"Andalusia, to any market in the world",
    "exp.c1t":"Worldwide shipping","exp.c1p":"EXW terms from Seville.",
    "exp.c2t":"Minimum order","exp.c2p":"1 pallet per reference.",
    "exp.c3t":"Lead time","exp.c3p":"30–40 days from confirmation.",
    "exp.c4t":"Private label","exp.c4p":"We develop your own-brand line.",

    "con.eyebrow":"Contact","con.title":"Trade enquiry",
    "con.intro":"Tell us which oils interest you and your estimated volume. We'll reply with our catalogue, 2026 price list and samples.",
    "con.l.addr":"Address","con.l.email":"Email","con.l.web":"Web","con.l.company":"Company",
    "con.f.name":"Name","con.f.name.ph":"Your name","con.f.company":"Company","con.f.company.ph":"Your company name",
    "con.f.country":"Country","con.f.country.ph":"Destination country","con.f.email":"Email",
    "con.f.interest":"Oils of interest","con.i.vinegar":"Vinegars","con.i.pomace":"Pomace","con.i.private":"Private label",
    "con.f.volume":"Estimated volume","con.v.choose":"Select…","con.v1":"Less than 1 pallet","con.v2":"1–5 pallets","con.v3":"5–20 pallets","con.v4":"More than 20 pallets","con.v5":"Full container",
    "con.f.phone":"Phone","con.f.message":"Message","con.f.message.ph":"Tell us more about your project…",
    "con.f.submit":"Send enquiry","con.f.note":"We reply within 24–48 working hours.",

    "foot.tag":"Extra virgin olive oil raised at Cortijo Cote, Montellano (Seville). Heritage and distinction in every drop.",
    "foot.nav":"Navigation","foot.collection":"Collection","foot.rights":"All rights reserved.",
    "foot.legal":"Legal notice","foot.privacy":"Privacy","foot.cookies":"Cookies"
  };

  var META = {
    es: { title:"Real de Cote · Aceite de Oliva Virgen Extra de Montellano, Sevilla",
          desc:"Real de Cote — aceite de oliva virgen extra criado en el Cortijo Cote, Montellano (Sevilla)." },
    en: { title:"Real de Cote · Extra Virgin Olive Oil from Montellano, Seville",
          desc:"Real de Cote — extra virgin olive oil raised at Cortijo Cote, Montellano (Seville)." }
  };
  var STATUS = {
    es:"Gracias. Hemos preparado su consulta — se abrirá su correo para enviarla.",
    en:"Thank you. Your enquiry is ready — your email app will open to send it."
  };

  // cache the Spanish originals so we can switch back
  var nodes = $$("[data-i18n]").map(function (el) {
    return { el: el, key: el.getAttribute("data-i18n"), es: el.textContent };
  });
  var phNodes = $$("[data-i18n-ph]").map(function (el) {
    return { el: el, key: el.getAttribute("data-i18n-ph"), es: el.getAttribute("placeholder") };
  });

  function setLang(lang) {
    var en = lang === "en";
    nodes.forEach(function (n) {
      n.el.textContent = en ? (EN[n.key] != null ? EN[n.key] : n.es) : n.es;
    });
    phNodes.forEach(function (n) {
      n.el.setAttribute("placeholder", en ? (EN[n.key] != null ? EN[n.key] : n.es) : n.es);
    });
    document.documentElement.lang = lang;
    var m = META[lang] || META.es;
    document.title = m.title;
    var d = $('meta[name="description"]'); if (d) d.setAttribute("content", m.desc);
    $$(".lang button").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try { localStorage.setItem("rdc-lang", lang); } catch (e) {}
  }

  $$(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  var saved = "es";
  try { saved = localStorage.getItem("rdc-lang") || "es"; } catch (e) {}
  if (saved === "en") setLang("en");

  /* ---------------------------------------------------------------
     2. Nav: solid-on-scroll + scrollspy
  --------------------------------------------------------------- */
  var nav = $("#nav");
  function onScrollNav() { nav.classList.toggle("scrolled", window.scrollY > 40); }
  onScrollNav();

  var spyLinks = {};
  $$(".nav__links .nav__link").forEach(function (l) {
    spyLinks[l.getAttribute("href").slice(1)] = l;
  });
  var spied = Object.keys(spyLinks).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if ("IntersectionObserver" in window && spied.length) {
    var spyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          Object.keys(spyLinks).forEach(function (id) {
            spyLinks[id].classList.toggle("active", id === e.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    spied.forEach(function (s) { spyObs.observe(s); });
  }

  /* ---------------------------------------------------------------
     3. Mobile menu
  --------------------------------------------------------------- */
  var menu = $("#mobileMenu"), burger = $("#burger"), closeBtn = $("#menuClose");
  function openMenu() {
    menu.classList.add("open"); menu.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }
  function closeMenu() {
    menu.classList.remove("open"); menu.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (burger) burger.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  $$("#mobileMenu a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("open")) closeMenu(); });

  /* ---------------------------------------------------------------
     4. Reveal on scroll + drawn rules + process line
  --------------------------------------------------------------- */
  var reveals = $$("[data-reveal]");
  var rules = $$(".rule-draw");
  var procLine = $("#procLine");
  if (REDUCE || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
    rules.forEach(function (el) { el.classList.add("in"); });
    if (procLine) procLine.classList.add("in");
  } else {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { revObs.observe(el); });
    rules.forEach(function (el) { revObs.observe(el); });

    if (procLine) {
      var lineObs = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
      }, { threshold: 0.5 });
      lineObs.observe(procLine);
      $$(".process .step").forEach(function (s) { lineObs.observe(s); });
    }
  }

  /* ---------------------------------------------------------------
     5. Count-up stats
  --------------------------------------------------------------- */
  var counters = $$("[data-count]");
  function runCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (REDUCE) { el.textContent = target; return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var cObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) { if (e.isIntersecting) { runCount(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cObs.observe(c); });
  } else {
    counters.forEach(runCount);
  }

  /* ---------------------------------------------------------------
     6. Parallax (rAF, reduced-motion off)
  --------------------------------------------------------------- */
  var pItems = [];
  var heroMedia = $(".hero__media"), heroSection = $(".hero");
  var terrMedia = $(".terroir__media"), terrSection = $(".terroir");
  if (heroMedia && heroSection) pItems.push({ media: heroMedia, sec: heroSection, range: 70 });
  if (terrMedia && terrSection) pItems.push({ media: terrMedia, sec: terrSection, range: 90 });

  var ticking = false;
  function parallax() {
    var vh = window.innerHeight;
    pItems.forEach(function (it) {
      var r = it.sec.getBoundingClientRect();
      if (r.bottom < -300 || r.top > vh + 300) return;
      var progress = (r.top + r.height / 2 - vh / 2) / vh;
      it.media.style.transform = "translate3d(0," + (progress * it.range).toFixed(1) + "px,0)";
    });
    ticking = false;
  }
  function onScroll() {
    onScrollNav();
    if (!REDUCE && pItems.length && !ticking) { ticking = true; requestAnimationFrame(parallax); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { if (!REDUCE) parallax(); }, { passive: true });
  if (!REDUCE) parallax();

  /* ---------------------------------------------------------------
     7. Collection filter
  --------------------------------------------------------------- */
  var filters = $$(".filter"), products = $$(".product");
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (f) { f.classList.remove("active"); });
      btn.classList.add("active");
      var cat = btn.getAttribute("data-filter");
      products.forEach(function (p) {
        var show = cat === "all" || p.getAttribute("data-cat") === cat;
        p.classList.toggle("hide", !show);
      });
    });
  });

  /* ---------------------------------------------------------------
     8. Marquee — duplicate for seamless loop (motion only)
  --------------------------------------------------------------- */
  var track = $("#marquee");
  if (track && !REDUCE) {
    track.innerHTML += track.innerHTML;
  }

  /* ---------------------------------------------------------------
     9. Enquiry form → compose email
  --------------------------------------------------------------- */
  var form = $("#enquiry");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var lang = document.documentElement.lang === "en" ? "en" : "es";
      var fd = new FormData(form);
      var interests = fd.getAll("interest").join(", ");
      var L = lang === "en"
        ? { name:"Name", company:"Company", country:"Country", email:"Email", phone:"Phone", interest:"Oils of interest", volume:"Estimated volume", message:"Message", subject:"Trade enquiry" }
        : { name:"Nombre", company:"Empresa", country:"País", email:"Email", phone:"Teléfono", interest:"Referencias", volume:"Volumen", message:"Mensaje", subject:"Consulta comercial" };
      var lines = [
        L.name + ": " + (fd.get("name") || ""),
        L.company + ": " + (fd.get("company") || ""),
        L.country + ": " + (fd.get("country") || ""),
        L.email + ": " + (fd.get("email") || ""),
        L.phone + ": " + (fd.get("phone") || ""),
        L.interest + ": " + interests,
        L.volume + ": " + (fd.get("volume") || ""),
        "", L.message + ":", (fd.get("message") || "")
      ];
      var subject = L.subject + " — " + (fd.get("company") || fd.get("name") || "");
      var href = "mailto:info@realdecote.es?subject=" + encodeURIComponent(subject) +
                 "&body=" + encodeURIComponent(lines.join("\n"));
      var status = $("#formStatus");
      if (status) { status.textContent = STATUS[lang]; status.className = "form__status ok"; }
      window.location.href = href;
    });
  }

})();
