import React from "react";

/* Lucide v0.544.0 (ISC) geometry, inlined so the glyph inherits currentColor and needs
   no network request. Source SVGs are also copied to assets/icons/.
   Intentional addition — the site itself ships no icon set (see readme → ICONOGRAPHY). */
const PATHS = {
  "arrow-up-right": [["path", {"d":"M7 7h10v10"}], ["path", {"d":"M7 17 17 7"}]],
  "arrow-right": [["path", {"d":"M5 12h14"}], ["path", {"d":"m12 5 7 7-7 7"}]],
  "arrow-down": [["path", {"d":"M12 5v14"}], ["path", {"d":"m19 12-7 7-7-7"}]],
  "menu": [["path", {"d":"M4 5h16"}], ["path", {"d":"M4 12h16"}], ["path", {"d":"M4 19h16"}]],
  "x": [["path", {"d":"M18 6 6 18"}], ["path", {"d":"m6 6 12 12"}]],
  "mail": [["path", {"d":"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}], ["rect", {"x":"2","y":"4","width":"20","height":"16","rx":"2"}]],
  "phone": [["path", {"d":"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]],
  "map-pin": [["path", {"d":"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}], ["circle", {"cx":"12","cy":"10","r":"3"}]],
  "external-link": [["path", {"d":"M15 3h6v6"}], ["path", {"d":"M10 14 21 3"}], ["path", {"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]],
  "plus": [["path", {"d":"M5 12h14"}], ["path", {"d":"M12 5v14"}]],
  "chevron-right": [["path", {"d":"m9 18 6-6-6-6"}]],
  "instagram": [["rect", {"width":"20","height":"20","x":"2","y":"2","rx":"5","ry":"5"}], ["path", {"d":"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}], ["line", {"x1":"17.5","x2":"17.51","y1":"6.5","y2":"6.5"}]]
};

export function Icon({ name = "arrow-up-right", size = 20, stroke = 1.75, color = "currentColor", style, ...rest }) {
  const parts = PATHS[name] || PATHS["arrow-up-right"];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
      fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" style={{ display: "block", flex: "none", ...style }} {...rest}>
      {parts.map((p, i) => React.createElement(p[0], { key: i, ...p[1] }))}
    </svg>
  );
}
