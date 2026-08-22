/* @ds-bundle: {"format":3,"namespace":"NotiveDesignSystem_943d2a","components":[{"name":"Mark","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"3ae1a74524ad","components/core/Avatar.jsx":"9d6dc9db008d","components/core/Button.jsx":"64a97a850db6","components/core/Card.jsx":"7c48c7579314","components/core/Eyebrow.jsx":"a8066c562a8e","components/core/Tag.jsx":"b9fb2acec059","components/forms/Input.jsx":"94c23f5460d8","components/navigation/Navbar.jsx":"13ace5d24989","ui_kits/website/sections.jsx":"c2f0d8961c33"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NotiveDesignSystem_943d2a = window.NotiveDesignSystem_943d2a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Notive Mark (beeldmerk) — the geometric arc + square + triangle.
 * Inline SVG using currentColor, so set `color` (or pass `color` prop) to recolor.
 */
function Mark({
  size = 40,
  color = "var(--nova-blue)",
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 120 120",
    width: size,
    height: size,
    fill: "none",
    style: {
      color,
      display: "block",
      ...style
    },
    role: "img",
    "aria-label": "Notive"
  }, props), /*#__PURE__*/React.createElement("path", {
    transform: "translate(0.102 79.934)",
    d: "M 0 0 L 39.967 0 L 39.967 39.967 L 0 39.967 L 0 0 Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "translate(80.033 0)",
    d: "M 0 0 L 39.967 0 L 39.967 39.967 L 0 0 Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 15.759 0 31.363 3.104 45.922 9.134 C 60.481 15.165 73.71 24.004 84.853 35.147 C 95.996 46.29 104.835 59.519 110.866 74.078 C 116.896 88.637 120 104.241 120 120 L 78.481 120 C 78.481 109.694 76.452 99.488 72.507 89.966 C 68.563 80.445 62.782 71.793 55.495 64.505 C 48.207 57.218 39.555 51.437 30.034 47.493 C 20.512 43.548 10.306 41.518 0 41.519 L 0 0 Z",
    fill: "currentColor"
  }));
}

/**
 * Notive Logo lockup — mark + NOTIVE wordmark.
 * `layout`: "horizontal" | "vertical" | "wordmark" | "mark"
 */
function Logo({
  layout = "horizontal",
  height = 28,
  color = "var(--nova-blue)",
  style = {},
  ...props
}) {
  const wordmarkPaths = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    transform: "translate(43.693 0.194)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.305 9.649 L 0 9.644 L 0.008 0 L 6.068 0.005 L 6.067 1.826 L 2.324 1.823 L 2.322 3.899 L 5.791 3.902 L 5.79 5.623 L 2.321 5.621 L 2.319 7.797 L 6.306 7.8 L 6.305 9.649 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(32.883 0.185)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.851 9.649 L 3.763 9.647 L 0 0 L 2.39 0.002 L 4.816 7.102 L 7.226 0.006 L 9.601 0.008 L 5.851 9.649 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(29.355 0.182)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.317 9.646 L 0 9.644 L 0.008 0 L 2.325 0.002 L 2.317 9.646 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(20.164 0.175)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.132 9.649 L 2.815 9.647 L 2.821 1.837 L 0 1.835 L 0.002 0 L 7.962 0.006 L 7.96 1.841 L 5.139 1.839 L 5.132 9.649 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(10.316 0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.847 10 C 1.867 9.998 -0.003 8.118 0 4.989 C 0.003 1.902 1.875 -0.002 4.855 0 C 7.82 0.002 9.69 1.91 9.688 4.997 C 9.685 8.126 7.812 10.002 4.847 10 Z M 4.848 8.094 C 6.489 8.095 7.34 6.944 7.341 4.995 C 7.343 3.046 6.495 1.865 4.854 1.863 C 3.213 1.862 2.348 3.042 2.346 4.991 C 2.345 6.94 3.207 8.093 4.848 8.094 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 0.159)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.68 9.651 L 6.233 9.649 L 2.323 3.572 L 2.318 9.646 L 0 9.644 L 0.008 0 L 2.383 0.002 L 6.365 6.236 L 6.37 0.005 L 8.688 0.007 L 8.68 9.651 Z",
    fill: "currentColor"
  })));
  if (layout === "mark") return /*#__PURE__*/React.createElement(Mark, _extends({
    size: height,
    color: color,
    style: style
  }, props));
  const common = {
    fill: "none",
    style: {
      color,
      display: "block",
      ...style
    },
    role: "img",
    "aria-label": "Notive",
    ...props
  };
  if (layout === "wordmark") return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 50 10",
    height: height,
    width: height * 5
  }, common), wordmarkPaths);
  if (layout === "vertical") return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 100 134",
    height: height,
    width: height * 100 / 134
  }, common), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.082 66.611)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 33.305 0 L 33.305 33.306 L 0 33.306 L 0 0 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(66.693 0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 33.305 0 L 33.305 33.306 L 0 0 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 13.132 0 26.136 2.587 38.268 7.612 C 50.4 12.638 61.424 20.004 70.71 29.289 C 79.996 38.575 87.362 49.599 92.387 61.732 C 97.413 73.864 99.999 86.868 99.999 100 L 65.401 100 C 65.401 91.411 63.709 82.907 60.422 74.972 C 57.136 67.037 52.318 59.827 46.245 53.754 C 40.172 47.681 32.963 42.864 25.028 39.577 C 17.093 36.29 8.589 34.599 0 34.599 L 0 0 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.168 114)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(87.389 0.387)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.61 19.299 L 0 19.289 L 0.016 0 L 12.136 0.01 L 12.133 3.651 L 4.648 3.645 L 4.645 7.799 L 11.583 7.804 L 11.58 11.247 L 4.642 11.241 L 4.638 15.594 L 12.613 15.601 L 12.61 19.299 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(65.767 0.37)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.701 19.298 L 7.527 19.295 L 0 0 L 4.779 0.004 L 9.633 14.204 L 14.452 0.011 L 19.203 0.015 L 11.701 19.298 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(58.712 0.364)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.635 19.293 L 0 19.289 L 0.016 0 L 4.651 0.004 L 4.635 19.293 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(40.329 0.35)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.265 19.297 L 5.63 19.293 L 5.643 3.675 L 0 3.67 L 0.003 0 L 15.924 0.013 L 15.921 3.683 L 10.278 3.678 L 10.265 19.297 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(20.632 0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.694 20 C 3.734 19.995 -0.005 16.237 0 9.978 C 0.005 3.804 3.751 -0.005 9.71 0 C 15.641 0.005 19.381 3.82 19.375 9.994 C 19.37 16.252 15.624 20.005 9.694 20 Z M 9.697 16.188 C 12.979 16.19 14.679 13.887 14.683 9.99 C 14.686 6.092 12.989 3.73 9.707 3.727 C 6.425 3.724 4.696 6.084 4.693 9.982 C 4.69 13.879 6.415 16.185 9.697 16.188 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 0.317)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.36 19.303 L 12.466 19.299 L 4.645 7.145 L 4.635 19.293 L 0 19.289 L 0.016 0 L 4.766 0.004 L 12.731 12.471 L 12.741 0.01 L 17.376 0.014 L 17.36 19.303 Z",
    fill: "currentColor"
  }))));

  // horizontal (default): small mark + wordmark
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 68 10",
    height: height,
    width: height * 6.8
  }, common), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.01 6.661)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 3.331 0 L 3.331 3.331 L 0 3.331 L 0 0 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(6.67 0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 3.331 0 L 3.331 3.331 L 0 0 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 1.313 0 2.614 0.259 3.827 0.761 C 5.04 1.264 6.142 2 7.071 2.929 C 8 3.858 8.736 4.96 9.239 6.173 C 9.741 7.386 10 8.687 10 10 L 6.54 10 C 6.54 9.141 6.371 8.291 6.042 7.497 C 5.714 6.704 5.232 5.983 4.625 5.375 C 4.017 4.768 3.296 4.286 2.503 3.958 C 1.709 3.629 0.859 3.46 0 3.46 L 0 0 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(18 0)"
  }, wordmarkPaths));
}
Object.assign(__ds_scope, { Mark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Notive Avatar — circular, with image or initials fallback. Sky-blue ring optional.
 */
function Avatar({
  src = null,
  name = "",
  size = 44,
  ring = false,
  style = {},
  ...props
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join("");
  return /*#__PURE__*/React.createElement("div", _extends({
    title: name || undefined,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--nova-blue)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * 0.38,
      flex: "none",
      boxShadow: ring ? "0 0 0 2px var(--surface-page), 0 0 0 4px var(--sky-blue)" : "none",
      ...style
    }
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Notive Button — primary action uses Leaf Green (accent), secondary uses Nova Blue.
 */
function Button({
  children,
  variant = "primary",
  // primary | secondary | ghost | link
  size = "md",
  // sm | md | lg
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  as = "button",
  style = {},
  ...props
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 14,
      gap: 8,
      height: 36
    },
    md: {
      padding: "12px 22px",
      fontSize: 15,
      gap: 9,
      height: 46
    },
    lg: {
      padding: "15px 28px",
      fontSize: 16,
      gap: 10,
      height: 54
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: variant === "link" ? 0 : s.padding,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: "-0.01em",
    borderRadius: variant === "link" ? 0 : "var(--radius-pill)",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background .16s ease, color .16s ease, border-color .16s ease, transform .08s ease, box-shadow .16s ease",
    textDecoration: "none",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--action-primary-text)"
    },
    secondary: {
      background: "var(--action-secondary)",
      color: "var(--action-secondary-text)"
    },
    ghost: {
      background: "transparent",
      color: "var(--nova-blue)",
      borderColor: "var(--border-strong)"
    },
    link: {
      background: "transparent",
      color: "var(--nova-blue)",
      height: "auto"
    }
  };
  const Comp = as;
  const dataAttr = `nv-btn-${variant}`;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    "data-nv": dataAttr,
    disabled: as === "button" ? disabled : undefined,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--action-primary-hover)";
      if (variant === "secondary") e.currentTarget.style.background = "var(--action-secondary-hover)";
      if (variant === "ghost") {
        e.currentTarget.style.borderColor = "var(--nova-blue)";
        e.currentTarget.style.background = "var(--neutral-50)";
      }
      if (variant === "link") e.currentTarget.style.color = "var(--sky-600)";
    },
    onMouseLeave: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--action-primary)";
      if (variant === "secondary") e.currentTarget.style.background = "var(--action-secondary)";
      if (variant === "ghost") {
        e.currentTarget.style.borderColor = "var(--border-strong)";
        e.currentTarget.style.background = "transparent";
      }
      if (variant === "link") e.currentTarget.style.color = "var(--nova-blue)";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(0)";
    }
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Notive Card — surface container. `tone` switches between light and Nova Blue (inverse).
 */
function Card({
  children,
  tone = "light",
  // light | tinted | dark
  elevation = "sm",
  // none | sm | md | lg
  pad = 24,
  radius = "var(--radius-lg)",
  interactive = false,
  style = {},
  ...props
}) {
  const tones = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)"
    },
    tinted: {
      background: "var(--surface-tinted)",
      color: "var(--text-body)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)",
      border: "1px solid transparent"
    }
  };
  const shadow = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  }[elevation];
  const t = tones[tone] || tones.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radius,
      padding: typeof pad === "number" ? pad : pad,
      boxShadow: shadow,
      transition: "transform .18s ease, box-shadow .18s ease",
      cursor: interactive ? "pointer" : "default",
      ...t,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = shadow;
    } : undefined
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Notive Eyebrow — uppercase section label preceded by the geometric mark bullet.
 * Mirrors the website pattern (square / arc bullet + "WIJ ZIJN NOTIVE").
 */
function Eyebrow({
  children,
  tone = "navy",
  // navy | sky
  bullet = "square",
  // square | arc | dot | none
  onDark = false,
  style = {},
  ...props
}) {
  const color = onDark ? "#fff" : tone === "sky" ? "var(--sky-600)" : "var(--nova-blue)";
  const bulletColor = onDark ? "var(--sky-blue)" : tone === "sky" ? "var(--sky-blue)" : "var(--nova-blue)";
  const Bullet = () => {
    if (bullet === "none") return null;
    if (bullet === "dot") return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: bulletColor,
        flex: "none"
      }
    });
    if (bullet === "arc") return /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 120 120",
      style: {
        flex: "none"
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 0 0 C 31.3 0 61.4 12.4 84.9 35.1 C 108.4 58.6 120 88.6 120 120 L 78.5 120 C 78.5 105 72.6 90.6 62.1 80.1 C 51.6 69.6 37.2 63.7 22.2 63.7 L 0 63.7 Z",
      fill: bulletColor
    }));
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        background: bulletColor,
        flex: "none"
      }
    });
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement(Bullet, null), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Notive Tag / Badge — compact label. Tone maps to brand colors.
 */
function Tag({
  children,
  tone = "neutral",
  // neutral | sky | green | navy | success | warning | danger
  variant = "soft",
  // soft | solid | outline
  size = "md",
  // sm | md
  style = {},
  ...props
}) {
  const palette = {
    neutral: {
      solid: ["var(--neutral-700)", "#fff"],
      soft: ["var(--neutral-100)", "var(--neutral-700)"],
      outline: ["var(--neutral-400)", "var(--neutral-700)"]
    },
    sky: {
      solid: ["var(--sky-blue)", "#fff"],
      soft: ["var(--sky-100)", "var(--sky-700)"],
      outline: ["var(--sky-blue)", "var(--sky-700)"]
    },
    green: {
      solid: ["var(--leaf-green)", "var(--nova-blue)"],
      soft: ["var(--leaf-100)", "var(--leaf-700)"],
      outline: ["var(--leaf-green)", "var(--leaf-700)"]
    },
    navy: {
      solid: ["var(--nova-blue)", "#fff"],
      soft: ["#E7EDF4", "var(--nova-blue)"],
      outline: ["var(--nova-blue)", "var(--nova-blue)"]
    },
    success: {
      solid: ["var(--success)", "var(--nova-blue)"],
      soft: ["var(--leaf-100)", "var(--leaf-700)"],
      outline: ["var(--success)", "var(--leaf-700)"]
    },
    warning: {
      solid: ["var(--warning)", "var(--nova-blue)"],
      soft: ["#FFF1D6", "#9A6800"],
      outline: ["var(--warning)", "#9A6800"]
    },
    danger: {
      solid: ["var(--danger)", "#fff"],
      soft: ["#FCE3DF", "#B11A07"],
      outline: ["var(--danger)", "#B11A07"]
    }
  };
  const [bg, fg] = (palette[tone] || palette.neutral)[variant];
  const isOutline = variant === "outline";
  const sizes = {
    sm: {
      padding: "3px 9px",
      fontSize: 11
    },
    md: {
      padding: "5px 12px",
      fontSize: 12.5
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: s.padding,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1.2,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-pill)",
      background: isOutline ? "transparent" : bg,
      color: fg,
      border: isOutline ? `1.5px solid ${bg}` : "1.5px solid transparent",
      whiteSpace: "nowrap",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Notive Input — text field with optional label, helper and error.
 * Focus ring uses Sky Blue.
 */
function Input({
  label = null,
  helper = null,
  error = null,
  iconLeft = null,
  multiline = false,
  rows = 4,
  id,
  style = {},
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const invalid = !!error;
  const fieldStyle = {
    width: "100%",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    color: "var(--text-body)",
    background: "var(--white)",
    border: `1.5px solid ${invalid ? "var(--danger)" : focus ? "var(--sky-blue)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-md)",
    padding: multiline ? "12px 14px" : "0 14px",
    paddingLeft: iconLeft && !multiline ? 42 : 14,
    height: multiline ? "auto" : 46,
    outline: "none",
    boxShadow: focus ? "var(--shadow-focus)" : "none",
    transition: "border-color .15s ease, box-shadow .15s ease",
    resize: multiline ? "vertical" : undefined,
    fontFamily: "var(--font-body)"
  };
  const Field = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13.5,
      color: "var(--nova-blue)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft && !multiline && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "inline-flex",
      color: "var(--neutral-500)",
      pointerEvents: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    rows: multiline ? rows : undefined,
    "aria-invalid": invalid,
    onFocus: e => {
      setFocus(true);
      props.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      props.onBlur?.(e);
    },
    style: fieldStyle
  }, props))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: invalid ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Notive Navbar — top navigation. `onDark` renders the white logo + light links
 * for use over the Nova Blue hero; default is the light (white surface) variant.
 */
function Navbar({
  links = ["Diensten", "Projecten", "Over ons", "Werken bij"],
  active = null,
  cta = "Contact",
  onDark = false,
  style = {},
  ...props
}) {
  const fg = onDark ? "#fff" : "var(--nova-blue)";
  const muted = onDark ? "rgba(255,255,255,0.8)" : "var(--text-body)";
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "18px 32px",
      background: onDark ? "transparent" : "var(--surface-page)",
      borderBottom: onDark ? "1px solid transparent" : "1px solid var(--border-subtle)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    layout: "horizontal",
    height: 22,
    color: fg
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, links.map(l => {
    const isActive = active === l;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15,
        color: isActive ? onDark ? "#fff" : "var(--sky-600)" : muted,
        textDecoration: "none",
        position: "relative",
        paddingBottom: 4,
        borderBottom: isActive ? `2px solid var(--sky-blue)` : "2px solid transparent",
        transition: "color .15s ease"
      },
      onMouseEnter: e => e.currentTarget.style.color = onDark ? "#fff" : "var(--sky-600)",
      onMouseLeave: e => e.currentTarget.style.color = isActive ? onDark ? "#fff" : "var(--sky-600)" : muted
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: onDark ? "primary" : "secondary",
    size: "sm"
  }, cta));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Notive website UI kit — section components.
   Loaded via <script type="text/babel">. Reads DS primitives from the bundle
   and exposes sections on window for index.html. No import/export (Babel-standalone). */
const NV = window.NotiveDesignSystem_943d2a;
const {
  Logo,
  Mark,
  Button,
  Card,
  Eyebrow,
  Tag,
  Input,
  Navbar,
  Avatar
} = NV;

/* ---- shared icons (Lucide-style inline strokes) ---- */
const Icon = ({
  d,
  size = 22,
  sw = 1.8
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d);
const ArrowRight = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))
}));
const CartIcon = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
  }))
}));
const LayersIcon = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
  }))
}));
const PlugIcon = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22v-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 8V2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 8V2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
  }))
}));
const Compass = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
  }))
}));
const Users = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }))
}));
const Spark = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"
  }))
}));
const Pin = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }))
}));
const Mailicon = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-10 5L2 7"
  }))
}));
const Phone = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
  }))
}));

/* ---- Hero ---- */
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      background: "var(--nova-blue)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-team.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(120deg, rgba(0,17,31,0.92) 30%, rgba(0,28,54,0.62) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -80,
      bottom: -120,
      opacity: 0.10,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 520,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    onDark: true,
    active: "Diensten",
    cta: "Contact"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "92px 32px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.16)",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--leaf-green)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.04em",
      color: "#fff"
    }
  }, "IT INNOVATION PARTNER")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 72,
      lineHeight: 1.02,
      letterSpacing: "-0.02em",
      maxWidth: 880
    }
  }, "Oplossingen voor ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sky-blue)"
    }
  }, "buiten gebaande paden")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      maxWidth: 620,
      color: "rgba(255,255,255,0.82)",
      fontSize: 19,
      lineHeight: 1.65
    }
  }, "Bij Notive kijken we verder dan je digitale vraagstuk. Met een decennium aan ervaring banen we nieuwe wegen met vooruitstrevende idee\xEBn en technieken."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 38,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    onClick: onContact
  }, "Start een project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.4)"
    }
  }, "Bekijk onze werkwijze")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 64
    }
  }, [["10+", "jaar ervaring"], ["120+", "projecten live"], ["98%", "klanttevredenheid"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 34,
      color: "#fff"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.6)",
      fontSize: 14,
      marginTop: 2
    }
  }, l)))))));
}

/* ---- Services ---- */
function Services() {
  const items = [{
    icon: /*#__PURE__*/React.createElement(CartIcon, null),
    tag: "E-commerce",
    title: "Schaalbare webshops",
    body: "Van concept tot conversie — webshops die meegroeien met je ambities."
  }, {
    icon: /*#__PURE__*/React.createElement(LayersIcon, null),
    tag: "Replatforming",
    title: "Shopify migraties",
    body: "Soepel van legacy naar een modern, onderhoudbaar platform."
  }, {
    icon: /*#__PURE__*/React.createElement(PlugIcon, null),
    tag: "Integratie",
    title: "Koppelingen & API's",
    body: "We verbinden je systemen tot één vloeiend geheel."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y) 32px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bullet: "square"
  }, "Diensten"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginTop: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "nv-h2",
    style: {
      maxWidth: 560,
      margin: 0
    }
  }, "Oplossingen voor elk digitaal vraagstuk"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    })
  }, "Alle diensten")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 44
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.tag,
    tone: "light",
    elevation: "sm",
    interactive: true,
    pad: 28,
    radius: "var(--radius-xl)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: "var(--radius-md)",
      background: "var(--sky-100)",
      color: "var(--sky-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, it.icon), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "sky",
    bullet: "none",
    style: {
      fontSize: 11
    }
  }, it.tag), /*#__PURE__*/React.createElement("h3", {
    className: "nv-h3",
    style: {
      fontSize: 23,
      margin: "8px 0 8px"
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "nv-body",
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: 15
    }
  }, it.body)))));
}

/* ---- About / Werkwijze ---- */
function About() {
  const steps = [{
    icon: /*#__PURE__*/React.createElement(Users, null),
    title: "Luisteren",
    body: "We duiken in je pijnpunten, behoeftes en dromen."
  }, {
    icon: /*#__PURE__*/React.createElement(Compass, null),
    title: "Verkennen",
    body: "We banen nieuwe paden naar de best passende oplossing."
  }, {
    icon: /*#__PURE__*/React.createElement(Spark, null),
    title: "Bouwen",
    body: "Vooruitstrevende technologie, kostenefficiënt opgeleverd."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-tinted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y) 32px",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    bullet: "arc",
    tone: "sky"
  }, "Wij zijn Notive"), /*#__PURE__*/React.createElement("h2", {
    className: "nv-h2",
    style: {
      margin: "16px 0 18px"
    }
  }, "Een unieke werkwijze, gebouwd op partnerschap"), /*#__PURE__*/React.createElement("p", {
    className: "nv-lead",
    style: {
      color: "var(--text-body)"
    }
  }, "We werken nauw samen en luisteren goed. Tijdens het hele traject ben jij eigenaar van je project en heb je altijd controle en overzicht."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    })
  }, "Ontdek onze werkwijze"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    tone: "light",
    elevation: "sm",
    pad: 22,
    radius: "var(--radius-lg)",
    style: {
      display: "flex",
      gap: 18,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      flex: "none",
      borderRadius: "50%",
      background: "var(--nova-blue)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 13,
      color: "var(--sky-600)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      color: "var(--nova-blue)"
    }
  }, s.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      color: "var(--text-muted)",
      fontSize: 14.5
    }
  }, s.body)))))));
}

/* ---- Partners ---- */
function Partners() {
  const names = ["PayPal", "Heineken", "Klarna", "FedEx", "Shopify", "Adyen"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bullet: "dot",
    style: {
      justifyContent: "center",
      width: "100%",
      display: "flex"
    }
  }, "Partners waar we trots op zijn"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 56,
      flexWrap: "wrap",
      marginTop: 30
    }
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      color: "var(--neutral-300)",
      letterSpacing: "-0.02em"
    }
  }, n))));
}

/* ---- CTA block ---- */
function CtaBlock({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--nova-blue)",
      borderRadius: "var(--radius-2xl)",
      padding: "64px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -60,
      top: -80,
      opacity: 0.12
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 360,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true,
    bullet: "square"
  }, "Aan de slag"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 14px",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 1.1
    }
  }, "Klaar voor een samenwerking die jou \xE9cht helpt?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 30px",
      color: "rgba(255,255,255,0.78)",
      fontSize: 18,
      lineHeight: 1.6
    }
  }, "Vertel ons over je vraagstuk. We denken graag met je mee en reageren binnen \xE9\xE9n werkdag."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    onClick: onContact
  }, "Neem contact met ons op"))));
}

/* ---- Footer ---- */
function Footer() {
  const cols = [["Diensten", ["E-commerce", "Replatforming", "Integraties", "Maatwerk"]], ["Bedrijf", ["Over ons", "Projecten", "Werken bij", "Nieuws"]], ["Contact", ["info@notive.nl", "+31 (0)20 123 45 67", "Amsterdam, NL"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--nova-900)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 40px",
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    layout: "horizontal",
    height: 26,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      color: "rgba(255,255,255,0.6)",
      fontSize: 14.5,
      maxWidth: 300,
      lineHeight: 1.6
    }
  }, "De go-to partner voor innovatieve en technische vraagstukken.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: "rgba(255,255,255,0.62)",
      fontSize: 14.5
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px 32px",
      display: "flex",
      justifyContent: "space-between",
      color: "rgba(255,255,255,0.45)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Notive. Alle rechten voorbehouden."), /*#__PURE__*/React.createElement("span", null, "IT Innovation Partner"))));
}
Object.assign(window, {
  Hero,
  Services,
  About,
  Partners,
  CtaBlock,
  Footer,
  NVIcons: {
    ArrowRight,
    Mailicon,
    Phone,
    Pin
  },
  NVComp: NV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
