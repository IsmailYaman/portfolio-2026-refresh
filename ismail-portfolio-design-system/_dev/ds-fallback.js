/* Dev fallback ONLY.
   The design-system compiler generates /_ds_bundle.js and exposes the components on a
   window.<Namespace> object. Until that file exists (or when opening these HTML files
   straight off disk), this shim compiles the .jsx sources in the browser so every card
   and UI-kit screen still renders. It no-ops the moment the real bundle is present.
   Requires React + @babel/standalone to be loaded before it. */
(function () {
  var has = false;
  for (var k in window) { try { var v = window[k]; if (v && typeof v === "object" && v.Button && v.WorkCard) { has = true; break; } } catch (e) {} }
  if (has) return;
  if (typeof Babel === "undefined" || typeof React === "undefined") { console.warn("[ds-fallback] needs React + Babel"); return; }
  var here = document.currentScript.src;
  var base = new URL("../", here).href;

  /* 1. prefer the compiled bundle if it has been generated */
  try {
    var b = new XMLHttpRequest();
    b.open("GET", base + "_ds_bundle.js", false);
    b.send();
    if (b.status < 400 && b.responseText) {
      new Function(b.responseText)();
      for (var k2 in window) { try { var v2 = window[k2]; if (v2 && typeof v2 === "object" && v2.Button && v2.WorkCard) return; } catch (e) {} }
    }
  } catch (e) {}

  /* 2. otherwise compile the sources in-browser */
  var files = ["components/core/Icon.jsx","components/brand/Mark.jsx","components/brand/Logo.jsx","components/core/Button.jsx","components/core/Tag.jsx","components/core/Eyebrow.jsx","components/core/Marquee.jsx","components/core/StatCounter.jsx","components/navigation/Navbar.jsx","components/navigation/MenuOverlay.jsx","components/navigation/FooterCTA.jsx","components/content/WorkCard.jsx","components/content/BlogCard.jsx","components/content/ExperienceRow.jsx","components/content/AwardRow.jsx","components/content/CaseMeta.jsx","components/forms/Input.jsx"];
  var names = ["Icon","Mark","Logo","Button","Tag","Eyebrow","Marquee","StatCounter","Navbar","MenuOverlay","FooterCTA","WorkCard","BlogCard","ExperienceRow","AwardRow","CaseMeta","Input"];
  var src = "";
  files.forEach(function (p) {
    var x = new XMLHttpRequest();
    x.open("GET", base + p, false);
    x.send();
    if (x.status >= 400) { console.warn("[ds-fallback] missing " + p); return; }
    src += "\n" + x.responseText;
  });
  var code = src.replace(/^[ \t]*import[^\n]*\n/gm, "").replace(/export[ \t]+function/g, "function");
  var out = Babel.transform(code, { presets: [["react", { runtime: "classic" }]] }).code;
  var ns = {};
  try {
    new Function("React", "__ns", out + "\n" + names.map(function (n) { return "__ns." + n + " = " + n + ";"; }).join("\n"))(React, ns);
  } catch (e) { console.error("[ds-fallback] compile failed", e); return; }
  window.IsmailDesignSystem = ns;
})();
