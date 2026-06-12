import { defineComponent as F, openBlock as s, createElementBlock as r, normalizeClass as P, renderSlot as E, createCommentVNode as $, ref as N, onMounted as le, onBeforeUnmount as ue, watch as H, createElementVNode as y, toDisplayString as B, nextTick as re, Fragment as A, renderList as R, computed as V, createBlock as Y, unref as v, withCtx as K, createVNode as ye, createTextVNode as te, withModifiers as ee, withDirectives as fe, vModelText as pe, normalizeStyle as me, resolveDynamicComponent as he, mergeProps as be } from "vue";
const xe = /* @__PURE__ */ F({
  __name: "SpvAlert",
  props: {
    variant: { default: "primary" },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismissed"],
  setup(e, { emit: u }) {
    const a = u;
    function l() {
      a("update:modelValue", !1), a("dismissed");
    }
    return (o, t) => e.modelValue ? (s(), r("div", {
      key: 0,
      class: P(["alert", `alert-${e.variant}`, { "alert-dismissible fade show": e.dismissible }]),
      role: "alert"
    }, [
      E(o.$slots, "default"),
      e.dismissible ? (s(), r("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "aria-label": "Close",
        onClick: l
      })) : $("", !0)
    ], 2)) : $("", !0);
  }
}), ge = { class: "modal-content" }, ke = {
  key: 0,
  class: "modal-header"
}, Ve = { class: "modal-title" }, $e = { class: "modal-body" }, we = {
  key: 1,
  class: "modal-footer"
}, Ce = /* @__PURE__ */ F({
  __name: "SpvModal",
  props: {
    modelValue: { type: Boolean },
    title: {},
    size: {},
    staticBackdrop: { type: Boolean, default: !1 },
    scrollable: { type: Boolean, default: !1 },
    centered: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "shown", "hidden"],
  setup(e, { emit: u }) {
    const a = e, l = u, o = N(null);
    let t = null;
    le(() => {
      o.value && (t = new window.bootstrap.Modal(o.value, {
        backdrop: a.staticBackdrop ? "static" : !0,
        keyboard: !a.staticBackdrop
      }), o.value.addEventListener("shown.bs.modal", () => l("shown")), o.value.addEventListener("hidden.bs.modal", () => {
        l("update:modelValue", !1), l("hidden");
      }), a.modelValue && t.show());
    }), ue(() => {
      t == null || t.dispose();
    }), H(() => a.modelValue, (c) => {
      t && (c ? t.show() : t.hide());
    });
    const f = () => [
      "modal-dialog",
      a.size ? a.size === "fullscreen" ? "modal-fullscreen" : `modal-${a.size}` : "",
      { "modal-dialog-scrollable": a.scrollable },
      { "modal-dialog-centered": a.centered }
    ];
    return (c, x) => (s(), r("div", {
      ref_key: "elRef",
      ref: o,
      class: "modal fade",
      tabindex: "-1"
    }, [
      y("div", {
        class: P(f())
      }, [
        y("div", ge, [
          e.title || c.$slots.header ? (s(), r("div", ke, [
            E(c.$slots, "header", {}, () => [
              y("h5", Ve, B(e.title), 1)
            ]),
            y("button", {
              type: "button",
              class: "btn-close",
              onClick: x[0] || (x[0] = (m) => l("update:modelValue", !1))
            })
          ])) : $("", !0),
          y("div", $e, [
            E(c.$slots, "default")
          ]),
          c.$slots.footer ? (s(), r("div", we, [
            E(c.$slots, "footer")
          ])) : $("", !0)
        ])
      ], 2)
    ], 512));
  }
}), Se = {
  key: 0,
  class: "toast-header"
}, Te = {
  key: 0,
  class: "me-auto"
}, Be = { key: 1 }, Pe = { class: "toast-body" }, Ie = /* @__PURE__ */ F({
  __name: "SpvToast",
  props: {
    modelValue: { type: Boolean },
    title: {},
    subtitle: {},
    variant: {},
    autohide: { type: Boolean, default: !0 },
    delay: { default: 5e3 }
  },
  emits: ["update:modelValue", "shown", "hidden"],
  setup(e, { emit: u }) {
    const a = e, l = u, o = N(null);
    let t = null;
    return le(() => {
      o.value && (t = new window.bootstrap.Toast(o.value, {
        autohide: a.autohide,
        delay: a.delay
      }), o.value.addEventListener("shown.bs.toast", () => l("shown")), o.value.addEventListener("hidden.bs.toast", () => {
        l("update:modelValue", !1), l("hidden");
      }), a.modelValue && t.show());
    }), ue(() => {
      t == null || t.dispose();
    }), H(() => a.modelValue, (f) => {
      t && (f ? t.show() : t.hide());
    }), (f, c) => (s(), r("div", {
      ref_key: "elRef",
      ref: o,
      class: P(["toast", e.variant ? `text-bg-${e.variant}` : ""]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      e.title || e.subtitle ? (s(), r("div", Se, [
        E(f.$slots, "header", {}, () => [
          e.title ? (s(), r("strong", Te, B(e.title), 1)) : $("", !0),
          e.subtitle ? (s(), r("small", Be, B(e.subtitle), 1)) : $("", !0)
        ]),
        y("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (x) => l("update:modelValue", !1))
        })
      ])) : $("", !0),
      y("div", Pe, [
        E(f.$slots, "default")
      ])
    ], 2));
  }
}), qe = { class: "offcanvas-header" }, Fe = { class: "offcanvas-title" }, Le = { class: "offcanvas-body" }, Me = /* @__PURE__ */ F({
  __name: "SpvOffcanvas",
  props: {
    modelValue: { type: Boolean },
    title: {},
    placement: { default: "start" },
    staticBackdrop: { type: Boolean, default: !1 },
    scroll: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "shown", "hidden"],
  setup(e, { emit: u }) {
    const a = e, l = u, o = N(null);
    let t = null;
    return le(() => {
      o.value && (t = new window.bootstrap.Offcanvas(o.value, {
        backdrop: a.staticBackdrop ? "static" : !0,
        keyboard: !a.staticBackdrop,
        scroll: a.scroll
      }), o.value.addEventListener("shown.bs.offcanvas", () => l("shown")), o.value.addEventListener("hidden.bs.offcanvas", () => {
        l("update:modelValue", !1), l("hidden");
      }), a.modelValue && t.show());
    }), ue(() => {
      t == null || t.dispose();
    }), H(() => a.modelValue, (f) => {
      t && (f ? t.show() : t.hide());
    }), (f, c) => (s(), r("div", {
      ref_key: "elRef",
      ref: o,
      class: P(["offcanvas", `offcanvas-${e.placement}`]),
      tabindex: "-1"
    }, [
      y("div", qe, [
        E(f.$slots, "header", {}, () => [
          y("h5", Fe, B(e.title), 1)
        ]),
        y("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (x) => l("update:modelValue", !1))
        })
      ]),
      y("div", Le, [
        E(f.$slots, "default")
      ])
    ], 2));
  }
}), De = ["data-bs-toggle", "data-bs-target", "aria-controls", "aria-selected", "onShown"], Ne = { class: "tab-content" }, Oe = ["id"], ze = /* @__PURE__ */ F({
  __name: "SpvNavTabs",
  props: {
    modelValue: {},
    tabs: {},
    pills: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: u }) {
    const a = e, l = u, o = N({});
    function t(c) {
      const x = o.value[c];
      if (!x) return;
      window.bootstrap.Tab.getOrCreateInstance(x).show();
    }
    le(() => {
      re(() => t(a.modelValue));
    }), H(() => a.modelValue, (c) => t(c));
    function f(c) {
      l("update:modelValue", c), l("change", c);
    }
    return (c, x) => (s(), r("div", null, [
      y("ul", {
        class: P(["nav", e.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (s(!0), r(A, null, R(e.tabs, (m) => (s(), r("li", {
          key: m.key,
          class: "nav-item",
          role: "presentation"
        }, [
          y("button", {
            ref_for: !0,
            ref: (k) => {
              k && (o.value[m.key] = k);
            },
            class: P(["nav-link", { active: e.modelValue === m.key, disabled: m.disabled }]),
            type: "button",
            role: "tab",
            "data-bs-toggle": e.pills ? "pill" : "tab",
            "data-bs-target": `#tab-pane-${m.key}`,
            "aria-controls": `tab-pane-${m.key}`,
            "aria-selected": e.modelValue === m.key,
            onShown: (k) => f(m.key)
          }, B(m.label), 43, De)
        ]))), 128))
      ], 2),
      y("div", Ne, [
        (s(!0), r(A, null, R(e.tabs, (m) => (s(), r("div", {
          id: `tab-pane-${m.key}`,
          key: m.key,
          class: P(["tab-pane", "fade", { "show active": e.modelValue === m.key }]),
          role: "tabpanel"
        }, [
          E(c.$slots, m.key)
        ], 10, Oe))), 128))
      ])
    ]));
  }
}), Ee = { class: "mb-3" }, Ue = ["for"], Ae = ["id", "type", "value", "placeholder", "disabled", "readonly"], Re = {
  key: 1,
  class: "valid-feedback"
}, Ke = {
  key: 2,
  class: "invalid-feedback"
}, Ye = {
  key: 3,
  class: "form-text"
}, je = /* @__PURE__ */ F({
  __name: "SpvInput",
  props: {
    modelValue: {},
    type: { default: "text" },
    label: {},
    placeholder: {},
    size: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    validationState: { default: null },
    validFeedback: {},
    invalidFeedback: {},
    helpText: {},
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: u }) {
    const a = e, l = u, o = () => [
      "form-control",
      a.size ? `form-control-${a.size}` : "",
      { "is-valid": a.validationState === "valid" },
      { "is-invalid": a.validationState === "invalid" }
    ];
    return (t, f) => (s(), r("div", Ee, [
      e.label ? (s(), r("label", {
        key: 0,
        for: e.id,
        class: "form-label"
      }, B(e.label), 9, Ue)) : $("", !0),
      y("input", {
        id: e.id,
        type: e.type,
        class: P(o()),
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        readonly: e.readonly,
        onInput: f[0] || (f[0] = (c) => l("update:modelValue", c.target.value))
      }, null, 42, Ae),
      e.validationState === "valid" && e.validFeedback ? (s(), r("div", Re, B(e.validFeedback), 1)) : $("", !0),
      e.validationState === "invalid" && e.invalidFeedback ? (s(), r("div", Ke, B(e.invalidFeedback), 1)) : $("", !0),
      e.helpText ? (s(), r("div", Ye, B(e.helpText), 1)) : $("", !0)
    ]));
  }
}), Ze = { class: "mb-3" }, Ge = ["for"], Je = ["id", "value", "disabled"], He = {
  key: 0,
  value: "",
  disabled: ""
}, We = ["value", "disabled"], Xe = {
  key: 1,
  class: "valid-feedback"
}, Qe = {
  key: 2,
  class: "invalid-feedback"
}, _e = {
  key: 3,
  class: "form-text"
}, el = /* @__PURE__ */ F({
  __name: "SpvSelect",
  props: {
    modelValue: {},
    options: {},
    label: {},
    placeholder: {},
    size: {},
    disabled: { type: Boolean },
    validationState: { default: null },
    validFeedback: {},
    invalidFeedback: {},
    helpText: {},
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: u }) {
    const a = e, l = u, o = () => [
      "form-select",
      a.size ? `form-select-${a.size}` : "",
      { "is-valid": a.validationState === "valid" },
      { "is-invalid": a.validationState === "invalid" }
    ];
    return (t, f) => (s(), r("div", Ze, [
      e.label ? (s(), r("label", {
        key: 0,
        for: e.id,
        class: "form-label"
      }, B(e.label), 9, Ge)) : $("", !0),
      y("select", {
        id: e.id,
        class: P(o()),
        value: e.modelValue,
        disabled: e.disabled,
        onChange: f[0] || (f[0] = (c) => l("update:modelValue", c.target.value))
      }, [
        e.placeholder ? (s(), r("option", He, B(e.placeholder), 1)) : $("", !0),
        (s(!0), r(A, null, R(e.options, (c) => (s(), r("option", {
          key: c.value,
          value: c.value,
          disabled: c.disabled
        }, B(c.label), 9, We))), 128))
      ], 42, Je),
      e.validationState === "valid" && e.validFeedback ? (s(), r("div", Xe, B(e.validFeedback), 1)) : $("", !0),
      e.validationState === "invalid" && e.invalidFeedback ? (s(), r("div", Qe, B(e.invalidFeedback), 1)) : $("", !0),
      e.helpText ? (s(), r("div", _e, B(e.helpText), 1)) : $("", !0)
    ]));
  }
}), ll = { class: "mb-3" }, tl = ["for"], al = ["id", "value", "placeholder", "rows", "disabled", "readonly"], nl = {
  key: 1,
  class: "valid-feedback"
}, ol = {
  key: 2,
  class: "invalid-feedback"
}, sl = {
  key: 3,
  class: "form-text"
}, ul = /* @__PURE__ */ F({
  __name: "SpvTextarea",
  props: {
    modelValue: {},
    label: {},
    placeholder: {},
    rows: { default: 3 },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    validationState: { default: null },
    validFeedback: {},
    invalidFeedback: {},
    helpText: {},
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: u }) {
    const a = e, l = u, o = () => [
      "form-control",
      { "is-valid": a.validationState === "valid" },
      { "is-invalid": a.validationState === "invalid" }
    ];
    return (t, f) => (s(), r("div", ll, [
      e.label ? (s(), r("label", {
        key: 0,
        for: e.id,
        class: "form-label"
      }, B(e.label), 9, tl)) : $("", !0),
      y("textarea", {
        id: e.id,
        class: P(o()),
        value: e.modelValue,
        placeholder: e.placeholder,
        rows: e.rows,
        disabled: e.disabled,
        readonly: e.readonly,
        onInput: f[0] || (f[0] = (c) => l("update:modelValue", c.target.value))
      }, null, 42, al),
      e.validationState === "valid" && e.validFeedback ? (s(), r("div", nl, B(e.validFeedback), 1)) : $("", !0),
      e.validationState === "invalid" && e.invalidFeedback ? (s(), r("div", ol, B(e.invalidFeedback), 1)) : $("", !0),
      e.helpText ? (s(), r("div", sl, B(e.helpText), 1)) : $("", !0)
    ]));
  }
}), rl = {
  Text: "text",
  Note: "textarea",
  Number: "number",
  Currency: "currency",
  DateTime: "date",
  // time component controlled separately
  Boolean: "switch",
  Choice: "select",
  MultiChoice: "checkboxes",
  Lookup: "select",
  LookupMulti: "lookupMulti",
  User: "select",
  UserMulti: "lookupMulti",
  URL: "text",
  // specialised further later
  Calculated: "text",
  // always readonly
  TaxonomyFieldType: "select",
  TaxonomyFieldTypeMulti: "lookupMulti"
}, il = {
  Text: 255
  // SP enforces 255 char limit on single-line text fields
}, dl = ["for"], cl = { class: "input-group" }, fl = {
  key: 0,
  class: "input-group-text"
}, pl = {
  key: 1,
  class: "input-group-text"
}, j = /* @__PURE__ */ F({
  __name: "FormControlWrapper",
  props: {
    id: {},
    label: {},
    labelClasses: {},
    iconClass: {},
    haveValue: { type: Boolean },
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean }
  },
  setup(e) {
    return (u, a) => (s(), r("div", null, [
      e.label ? (s(), r("label", {
        key: 0,
        for: e.id,
        class: P(e.labelClasses)
      }, B(e.label), 11, dl)) : $("", !0),
      y("div", cl, [
        !e.suppressPrefixIcon && e.iconClass ? (s(), r("span", fl, [
          y("i", {
            class: P(["fas", e.iconClass])
          }, null, 2)
        ])) : $("", !0),
        E(u.$slots, "default"),
        e.required ? (s(), r("span", pl, [
          y("i", {
            class: P([
              "fas fa-asterisk fa-xs",
              e.haveValue ? "text-success" : "text-danger"
            ])
          }, null, 2)
        ])) : $("", !0),
        E(u.$slots, "suffix")
      ])
    ]));
  }
});
function M(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function Z(e) {
  return function u(a) {
    return arguments.length === 0 || M(a) ? u : e.apply(this, arguments);
  };
}
function W(e) {
  return function u(a, l) {
    switch (arguments.length) {
      case 0:
        return u;
      case 1:
        return M(a) ? u : Z(function(o) {
          return e(a, o);
        });
      default:
        return M(a) && M(l) ? u : M(a) ? Z(function(o) {
          return e(o, l);
        }) : M(l) ? Z(function(o) {
          return e(a, o);
        }) : e(a, l);
    }
  };
}
function ml(e) {
  return function u(a, l, o) {
    switch (arguments.length) {
      case 0:
        return u;
      case 1:
        return M(a) ? u : W(function(t, f) {
          return e(a, t, f);
        });
      case 2:
        return M(a) && M(l) ? u : M(a) ? W(function(t, f) {
          return e(t, l, f);
        }) : M(l) ? W(function(t, f) {
          return e(a, t, f);
        }) : Z(function(t) {
          return e(a, l, t);
        });
      default:
        return M(a) && M(l) && M(o) ? u : M(a) && M(l) ? W(function(t, f) {
          return e(t, f, o);
        }) : M(a) && M(o) ? W(function(t, f) {
          return e(t, l, f);
        }) : M(l) && M(o) ? W(function(t, f) {
          return e(a, t, f);
        }) : M(a) ? Z(function(t) {
          return e(t, l, o);
        }) : M(l) ? Z(function(t) {
          return e(a, t, o);
        }) : M(o) ? Z(function(t) {
          return e(a, l, t);
        }) : e(a, l, o);
    }
  };
}
var J = /* @__PURE__ */ Z(function(u) {
  return u == null;
}), ie = /* @__PURE__ */ ml(function(u, a, l) {
  if (u > a)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return l < u ? u : l > a ? a : l;
});
function vl() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function O(e) {
  const u = vl(), a = V(() => {
    const t = e.modelValue;
    return !(J(t) || typeof t == "string" && t.trim() === "" || Array.isArray(t) && t.length === 0);
  }), l = V(() => !e.required || a.value), o = V(() => {
    const t = ["form-label"];
    return e.labelClass && t.push(...e.labelClass.split(/\s+/).filter(Boolean)), t;
  });
  return { id: u, haveValue: a, requiredPass: l, labelClasses: o };
}
const yl = [
  "label",
  "title",
  "Title",
  "name",
  "Name",
  "caption",
  "Caption",
  "text",
  "Text",
  "display"
];
function X(e, u) {
  if (typeof e == "string") return e;
  if (typeof e == "number") return String(e);
  if (typeof u == "function") return u(e);
  if (typeof u == "string") {
    const a = e[u];
    return a != null ? String(a) : "";
  }
  for (const a of yl)
    if (a in e && e[a] != null) return String(e[a]);
  return JSON.stringify(e);
}
const hl = ["id", "value", "placeholder", "readonly", "maxlength", "list"], bl = ["id"], xl = ["value"], gl = /* @__PURE__ */ F({
  __name: "FormControlText",
  props: {
    modelValue: { default: null },
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    maxlength: { default: 255 },
    options: {},
    optionLabel: {},
    optionStrict: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l), m = N(!1), k = N(!0), b = V(() => {
      const n = c.value;
      return !l.optionStrict || !m.value ? n : n && (f.value ? k.value : !0);
    });
    u({ requiredPass: b });
    const C = V(() => {
      var n;
      return (n = l.options) != null && n.length ? `${t}-list` : void 0;
    }), w = V(() => {
      var n;
      return (n = l.options) != null && n.length ? l.options.map((d) => X(d, l.optionLabel)) : [];
    });
    function S(n) {
      const d = n.target.value;
      o("update:modelValue", d === "" ? null : d);
    }
    function i(n) {
      var z;
      if (!l.optionStrict || !((z = l.options) != null && z.length)) return;
      m.value = !0;
      const d = n.target, p = d.value;
      if (!p) {
        k.value = !0;
        return;
      }
      const L = p.toLowerCase(), D = w.value.find((G) => G.toLowerCase() === L);
      D ? (k.value = !0, D !== p && (d.value = D, o("update:modelValue", D))) : (k.value = !1, d.value = "", o("update:modelValue", null));
    }
    return (n, d) => (s(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-font",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: K(() => [
        y("input", {
          id: v(t),
          type: "text",
          class: "form-control",
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          list: C.value,
          onInput: S,
          onBlur: i
        }, null, 40, hl),
        C.value ? (s(), r("datalist", {
          key: 0,
          id: C.value
        }, [
          (s(!0), r(A, null, R(w.value, (p) => (s(), r("option", {
            key: p,
            value: p
          }, null, 8, xl))), 128))
        ], 8, bl)) : $("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), kl = ["id", "type", "value", "placeholder", "readonly"], Vl = ["title", "aria-label", "aria-pressed"], $l = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, wl = /* @__PURE__ */ F({
  __name: "FormControlPassword",
  props: {
    modelValue: { default: null },
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    minLength: {},
    requiredCharacters: {},
    mixedCase: { type: Boolean },
    mustMatch: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, labelClasses: c } = O(l), x = N(!1), m = N(!1);
    function k(n) {
      return /^\d+$/.test(n) ? "At least one number (0–9)" : /^[a-z]+$/i.test(n) ? "At least one letter" : n.length <= 12 ? `At least one of: ${n}` : "At least one special character";
    }
    const b = V(() => {
      var p;
      const n = l.modelValue ?? "", d = [];
      return l.minLength && d.push({
        key: "minLength",
        label: `At least ${l.minLength} character${l.minLength === 1 ? "" : "s"}`,
        passed: n.length >= l.minLength
      }), l.mixedCase && d.push({
        key: "mixedCase",
        label: "Upper and lowercase letters",
        passed: /[a-z]/.test(n) && /[A-Z]/.test(n)
      }), (p = l.requiredCharacters) == null || p.forEach((L, D) => {
        d.push({
          key: `chars-${D}`,
          label: k(L),
          passed: [...L].some((z) => n.includes(z))
        });
      }), l.mustMatch !== void 0 && d.push({
        key: "mustMatch",
        label: "Passwords match",
        passed: n.length > 0 && n === (l.mustMatch ?? "")
      }), d;
    }), C = V(
      () => b.value.every((n) => n.passed)
    ), w = V(() => b.value.length > 0), S = V(() => !l.required && !w.value ? !0 : l.required && !f.value ? !1 : C.value);
    u({ requiredPass: S });
    function i(n) {
      m.value = !0;
      const d = n.target.value;
      o("update:modelValue", d === "" ? null : d);
    }
    return (n, d) => (s(), r("div", null, [
      ye(j, {
        id: v(t),
        label: e.label,
        "label-classes": v(c),
        "icon-class": "fa-lock",
        "have-value": C.value && v(f),
        required: e.required || w.value,
        readonly: e.readonly,
        "suppress-prefix-icon": e.suppressPrefixIcon
      }, {
        suffix: K(() => [
          y("button", {
            type: "button",
            class: "btn btn-outline-secondary",
            title: x.value ? "Hide password" : "Show password",
            "aria-label": x.value ? "Hide password" : "Show password",
            "aria-pressed": x.value,
            tabindex: "-1",
            onClick: d[0] || (d[0] = (p) => x.value = !x.value)
          }, [
            y("i", {
              class: P(["fas", x.value ? "fa-eye-slash" : "fa-eye"])
            }, null, 2)
          ], 8, Vl)
        ]),
        default: K(() => [
          y("input", {
            id: v(t),
            type: x.value ? "text" : "password",
            class: "form-control",
            value: e.modelValue ?? "",
            placeholder: e.placeholder,
            readonly: e.readonly,
            autocomplete: "current-password",
            onInput: i
          }, null, 40, kl)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]),
      w.value && m.value ? (s(), r("ul", $l, [
        (s(!0), r(A, null, R(b.value, (p) => (s(), r("li", {
          key: p.key,
          class: P(p.passed ? "text-success" : "text-danger")
        }, [
          y("i", {
            class: P(["fas fa-xs me-1", p.passed ? "fa-check" : "fa-times"])
          }, null, 2),
          te(" " + B(p.label), 1)
        ], 2))), 128))
      ])) : $("", !0)
    ]));
  }
}), Cl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], Sl = /* @__PURE__ */ F({
  __name: "FormControlNumber",
  props: {
    modelValue: { default: null },
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    min: {},
    max: {},
    step: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = N(null), k = V(() => J(l.modelValue) ? "" : String(l.modelValue));
    function b(C) {
      const w = C.target.value;
      if (w === "" || w === "-") {
        o("update:modelValue", null);
        return;
      }
      const S = parseFloat(w);
      if (isNaN(S)) {
        m.value && (m.value.value = k.value);
        return;
      }
      const i = J(l.min) ? Number.NEGATIVE_INFINITY : l.min, n = J(l.max) ? Number.POSITIVE_INFINITY : l.max, d = ie(i, n, S);
      d !== S && m.value && (m.value.value = String(d)), o("update:modelValue", d);
    }
    return (C, w) => (s(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-hashtag",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: K(() => [
        y("input", {
          id: v(t),
          ref_key: "inputRef",
          ref: m,
          type: "number",
          class: "form-control",
          value: k.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: b
        }, null, 40, Cl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), Tl = ["id", "value", "placeholder", "readonly", "min", "max"], Bl = /* @__PURE__ */ F({
  __name: "FormControlPercent",
  props: {
    modelValue: { default: null },
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    min: {},
    max: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = N(null);
    function k(i) {
      const n = i.toString(), d = n.indexOf(".");
      return d > -1 ? n.length - d - 1 : 0;
    }
    function b(i) {
      const n = k(i), d = i * 100;
      return k(d) > n + 2 ? parseFloat(d.toFixed(n)).toString() : d.toString();
    }
    function C(i) {
      const n = k(i), d = i / 100;
      return parseFloat(d.toFixed(n + 2));
    }
    const w = V(() => J(l.modelValue) ? "" : b(l.modelValue));
    function S(i) {
      const n = i.target.value;
      if (n === "" || n === "-") {
        o("update:modelValue", null);
        return;
      }
      const d = parseFloat(n);
      if (isNaN(d)) {
        m.value && (m.value.value = w.value);
        return;
      }
      const p = J(l.min) ? Number.NEGATIVE_INFINITY : l.min, L = J(l.max) ? Number.POSITIVE_INFINITY : l.max, D = ie(p, L, d);
      D !== d && m.value && (m.value.value = String(D)), o("update:modelValue", C(D));
    }
    return (i, n) => (s(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-percent",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: K(() => [
        y("input", {
          id: v(t),
          ref_key: "inputRef",
          ref: m,
          type: "number",
          class: "form-control",
          value: w.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          onInput: S
        }, null, 40, Tl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
});
function de() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function Pl(e, u) {
  const a = new Date(e.toLocaleString("en-US", { timeZone: "UTC" })), l = new Date(e.toLocaleString("en-US", { timeZone: u }));
  return (a.getTime() - l.getTime()) / 6e4;
}
function oe(e) {
  return e ? e.substring(0, 10) : "";
}
function Il(e) {
  return e ? `${e}T00:00:00Z` : null;
}
function se(e, u) {
  if (!e) return "";
  const a = u ?? de(), l = new Date(e), o = new Intl.DateTimeFormat("en-CA", {
    timeZone: a,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).formatToParts(l), t = {};
  return o.forEach(({ type: f, value: c }) => {
    t[f] = c;
  }), `${t.year}-${t.month}-${t.day}T${t.hour}:${t.minute}`;
}
function ql(e, u) {
  if (!e) return null;
  const a = u ?? de(), l = /* @__PURE__ */ new Date(`${e}:00Z`), o = Pl(l, a);
  return new Date(l.getTime() + o * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const Fl = ["id", "value", "readonly", "min", "max"], Ll = /* @__PURE__ */ F({
  __name: "FormControlDate",
  props: {
    modelValue: { default: null },
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    min: {},
    max: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = V(() => oe(l.modelValue)), k = V(() => l.min ? oe(l.min) : void 0), b = V(() => l.max ? oe(l.max) : void 0);
    function C(w) {
      const S = w.target.value;
      o("update:modelValue", Il(S));
    }
    return (w, S) => (s(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-calendar",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: K(() => [
        y("input", {
          id: v(t),
          type: "date",
          class: "form-control",
          value: m.value,
          readonly: e.readonly,
          min: k.value,
          max: b.value,
          onChange: C
        }, null, 40, Fl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), Ml = ["id", "value", "readonly", "min", "max"], Dl = ["title"], Nl = /* @__PURE__ */ F({
  __name: "FormControlDateTimeLocal",
  props: {
    modelValue: { default: null },
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    timezone: {},
    min: {},
    max: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = V(() => l.timezone ?? de()), k = V(
      () => se(l.modelValue, m.value)
    ), b = V(
      () => l.min ? se(l.min, m.value) : void 0
    ), C = V(
      () => l.max ? se(l.max, m.value) : void 0
    );
    function w(S) {
      const i = S.target.value;
      o("update:modelValue", ql(i, m.value));
    }
    return (S, i) => (s(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-clock",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: K(() => [
        y("input", {
          id: v(t),
          type: "datetime-local",
          class: "form-control",
          value: k.value,
          readonly: e.readonly,
          min: b.value,
          max: C.value,
          onChange: w
        }, null, 40, Ml),
        e.timezone ? (s(), r("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${m.value}`
        }, [...i[0] || (i[0] = [
          y("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, Dl)) : $("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), Ol = ["id", "value", "disabled"], zl = ["disabled"], El = ["value"], Ul = /* @__PURE__ */ F({
  __name: "FormControlSelect",
  props: {
    modelValue: {},
    spType: {},
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    options: {},
    optionLabel: { type: [String, Function] },
    optionValue: { type: [String, Function] }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = ["Lookup", "User"];
    function k(i) {
      return typeof l.optionValue == "function" ? l.optionValue(i) : typeof l.optionValue == "string" ? typeof i == "string" || typeof i == "number" ? i : i[l.optionValue] ?? null : typeof i == "string" || typeof i == "number" ? i : l.spType && m.includes(l.spType) ? i.Id ?? null : i;
    }
    const b = V(() => {
      var i;
      return (i = l.options) != null && i.length ? l.options.map((n) => {
        const d = X(n, l.optionLabel), p = k(n), L = p == null ? "" : typeof p == "object" ? JSON.stringify(p) : String(p);
        return { label: d, value: p, key: L };
      }) : [];
    }), C = V(() => {
      const i = l.modelValue;
      return i == null ? "" : typeof i == "object" ? JSON.stringify(i) : String(i);
    });
    function w(i) {
      const d = i.target.value;
      if (d === "") {
        o("update:modelValue", null);
        return;
      }
      const p = b.value.find((L) => L.key === d);
      o("update:modelValue", p ? p.value : null);
    }
    function S(i) {
      i.key !== "Delete" && i.key !== "Backspace" || l.readonly || (i.preventDefault(), o("update:modelValue", null));
    }
    return (i, n) => (s(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-list-ul",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: K(() => [
        y("select", {
          id: v(t),
          class: "form-select",
          value: C.value,
          disabled: e.readonly,
          onChange: w,
          onKeydown: S
        }, [
          y("option", {
            value: "",
            disabled: e.required
          }, B(e.placeholder ?? "Choose…"), 9, zl),
          (s(!0), r(A, null, R(b.value, (d) => (s(), r("option", {
            key: d.key,
            value: d.key
          }, B(d.label), 9, El))), 128))
        ], 40, Ol)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), Al = ["for"], Rl = { class: "input-group" }, Kl = {
  key: 0,
  class: "input-group-text"
}, Yl = ["aria-label", "onClick"], jl = ["id", "placeholder"], Zl = ["aria-label"], Gl = ["aria-selected", "onMousedown", "onMouseover"], Jl = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Hl = {
  key: 1,
  class: "input-group-text"
}, Wl = /* @__PURE__ */ F({
  __name: "FormControlLookupMulti",
  props: {
    modelValue: {},
    spType: {},
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    options: {},
    optionLabel: { type: [String, Function] },
    optionValue: { type: [String, Function] }
  },
  emits: ["update:modelValue", "search"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, labelClasses: f } = O(l), c = V(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
    ), x = V(() => c.value.length > 0), m = V(() => !l.required || x.value);
    u({ requiredPass: m });
    const k = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function b(h) {
      return typeof l.optionValue == "function" ? l.optionValue(h) : typeof l.optionValue == "string" ? typeof h == "string" || typeof h == "number" ? h : h[l.optionValue] ?? null : typeof h == "string" || typeof h == "number" ? h : l.spType && k.includes(l.spType) ? h.Id ?? null : h;
    }
    function C(h) {
      return h == null ? "" : typeof h == "object" ? JSON.stringify(h) : String(h);
    }
    const w = V(
      () => (l.options ?? []).map((h) => ({
        label: X(h, l.optionLabel),
        value: b(h),
        key: C(b(h))
      }))
    ), S = V(() => new Set(c.value.map(C))), i = V(
      () => c.value.map((h) => {
        const T = C(h), I = w.value.find((U) => U.key === T);
        return { label: (I == null ? void 0 : I.label) ?? (T || String(h)), value: h, key: T };
      })
    ), n = N(""), d = N(!1), p = N(0), L = N(null), D = V(() => {
      const h = n.value.trim().toLowerCase();
      return w.value.filter((T) => S.value.has(T.key) ? !1 : h ? T.label.toLowerCase().includes(h) : !0);
    });
    H(D, (h) => {
      p.value >= h.length && (p.value = 0);
    });
    function z() {
      l.readonly || (d.value = !0, p.value = 0);
    }
    function G() {
      d.value = !1, n.value = "", p.value = 0, o("search", "");
    }
    function Q(h) {
      const T = [...c.value, h.value];
      o("update:modelValue", T), n.value = "", p.value = 0, re(() => {
        var I;
        (I = L.value) == null || I.focus(), d.value = !0;
      });
    }
    function _(h) {
      const T = c.value.filter((I) => C(I) !== h);
      o("update:modelValue", T.length ? T : null);
    }
    function ae() {
      d.value = !0, p.value = 0, o("search", n.value);
    }
    function ne() {
      z();
    }
    function g() {
      setTimeout(G, 150);
    }
    function q(h) {
      const T = D.value;
      switch (h.key) {
        case "ArrowDown":
          if (h.preventDefault(), !d.value) {
            z();
            return;
          }
          p.value = T.length ? (p.value + 1) % T.length : 0;
          break;
        case "ArrowUp":
          if (h.preventDefault(), !d.value) {
            z();
            return;
          }
          p.value = T.length ? (p.value - 1 + T.length) % T.length : 0;
          break;
        case "Enter":
          if (h.preventDefault(), d.value && T.length) {
            const I = p.value >= 0 && p.value < T.length ? p.value : 0;
            Q(T[I]);
          }
          break;
        case "Escape":
          h.preventDefault(), G();
          break;
        case "Backspace":
          if (!n.value && c.value.length) {
            const I = i.value[i.value.length - 1];
            _(I.key);
          }
          break;
      }
    }
    return (h, T) => (s(), r("div", null, [
      e.label ? (s(), r("label", {
        key: 0,
        for: v(t),
        class: P(v(f))
      }, B(e.label), 11, Al)) : $("", !0),
      y("div", Rl, [
        e.suppressPrefixIcon ? $("", !0) : (s(), r("span", Kl, [...T[2] || (T[2] = [
          y("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        y("div", {
          class: P(["form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative", { "bg-body-secondary": e.readonly }]),
          style: { cursor: "text", "min-height": "2.375rem" },
          onClick: T[1] || (T[1] = (I) => {
            var U;
            return (U = L.value) == null ? void 0 : U.focus();
          })
        }, [
          (s(!0), r(A, null, R(i.value, (I) => (s(), r("span", {
            key: I.key,
            class: "badge rounded-pill bg-primary d-inline-flex align-items-center gap-1",
            style: { "font-size": "0.8em" }
          }, [
            te(B(I.label) + " ", 1),
            e.readonly ? $("", !0) : (s(), r("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${I.label}`,
              onClick: ee((U) => _(I.key), ["stop"])
            }, null, 8, Yl))
          ]))), 128)),
          e.readonly ? $("", !0) : fe((s(), r("input", {
            key: 0,
            id: v(t),
            ref_key: "inputRef",
            ref: L,
            type: "text",
            class: "border-0 p-0 flex-grow-1 bg-transparent",
            style: { outline: "none", "min-width": "8ch", "line-height": "inherit" },
            "onUpdate:modelValue": T[0] || (T[0] = (I) => n.value = I),
            placeholder: i.value.length ? "" : e.placeholder ?? "Type to search…",
            autocomplete: "off",
            onInput: ae,
            onFocus: ne,
            onBlur: g,
            onKeydown: q
          }, null, 40, jl)), [
            [pe, n.value]
          ]),
          d.value && D.value.length ? (s(), r("ul", {
            key: 1,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": e.label ?? "Suggestions"
          }, [
            (s(!0), r(A, null, R(D.value, (I, U) => (s(), r("li", {
              key: I.key,
              role: "option",
              "aria-selected": U === p.value,
              class: P(["dropdown-item", { active: U === p.value }]),
              style: me(U === p.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ee((ve) => Q(I), ["prevent"]),
              onMouseover: (ve) => p.value = U
            }, B(I.label), 47, Gl))), 128))
          ], 8, Zl)) : d.value && n.value && !D.value.length ? (s(), r("ul", Jl, [...T[3] || (T[3] = [
            y("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : $("", !0)
        ], 2),
        e.required ? (s(), r("span", Hl, [
          y("i", {
            class: P(["fas fa-asterisk fa-xs", x.value ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : $("", !0)
      ])
    ]));
  }
}), Xl = ["id", "value", "disabled", "title"], Ql = /* @__PURE__ */ F({
  __name: "FormControlColor",
  props: {
    modelValue: {},
    label: {},
    labelClass: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    function m(b) {
      o("update:modelValue", b.target.value);
    }
    function k(b) {
      b.key !== "Delete" && b.key !== "Backspace" || l.readonly || (b.preventDefault(), o("update:modelValue", null));
    }
    return (b, C) => (s(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-palette",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: K(() => [
        y("input", {
          id: v(t),
          type: "color",
          class: "form-control form-control-color flex-grow-1",
          value: e.modelValue ?? "#000000",
          disabled: e.readonly,
          title: e.modelValue ?? "Choose a colour",
          onChange: m,
          onKeydown: k
        }, null, 40, Xl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), _l = ["aria-labelledby"], et = ["id"], lt = ["id", "type", "checked", "disabled", "name", "onClick"], tt = ["for"], ce = /* @__PURE__ */ F({
  __name: "FormControlOptions",
  props: {
    modelValue: {},
    multi: { type: Boolean },
    spType: {},
    label: {},
    labelClass: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    stacked: { type: Boolean },
    options: {},
    optionLabel: { type: [String, Function] },
    optionValue: { type: [String, Function] },
    suppressPrefixIcon: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function k(n) {
      return typeof l.optionValue == "function" ? l.optionValue(n) : typeof l.optionValue == "string" ? typeof n == "string" || typeof n == "number" ? n : n[l.optionValue] ?? null : typeof n == "string" || typeof n == "number" ? n : l.spType && m.includes(l.spType) ? n.Id ?? null : n;
    }
    function b(n) {
      return n == null ? "" : typeof n == "object" ? JSON.stringify(n) : String(n);
    }
    const C = V(
      () => (l.options ?? []).map((n) => ({
        label: X(n, l.optionLabel),
        value: k(n),
        key: b(k(n))
      }))
    ), w = V(
      () => l.multi && Array.isArray(l.modelValue) ? l.modelValue : []
    );
    function S(n) {
      return l.multi ? w.value.some((d) => b(d) === n) : b(l.modelValue) === n;
    }
    function i(n) {
      if (!l.readonly)
        if (l.multi)
          if (w.value.some((p) => b(p) === n.key)) {
            const p = w.value.filter((L) => b(L) !== n.key);
            o("update:modelValue", p.length ? p : null);
          } else
            o("update:modelValue", [...w.value, n.value]);
        else
          b(l.modelValue) === n.key ? o("update:modelValue", null) : o("update:modelValue", n.value);
    }
    return (n, d) => (s(), r("div", {
      role: "group",
      "aria-labelledby": e.label ? `${v(t)}-label` : void 0
    }, [
      e.label ? (s(), r("div", {
        key: 0,
        id: `${v(t)}-label`,
        class: P(v(x)),
        style: { "margin-bottom": "0.25rem" }
      }, [
        te(B(e.label) + " ", 1),
        e.required ? (s(), r("i", {
          key: 0,
          class: P(["fas fa-asterisk fa-xs ms-1", v(f) ? "text-success" : "text-danger"])
        }, null, 2)) : $("", !0)
      ], 10, et)) : $("", !0),
      y("div", null, [
        (s(!0), r(A, null, R(C.value, (p, L) => (s(), r("div", {
          key: p.key,
          class: P(["form-check", { "form-check-inline": !e.stacked }])
        }, [
          y("input", {
            id: `${v(t)}-opt-${L}`,
            type: e.multi ? "checkbox" : "radio",
            class: "form-check-input",
            checked: S(p.key),
            disabled: e.readonly,
            name: e.multi ? void 0 : v(t),
            onClick: (D) => i(p)
          }, null, 8, lt),
          y("label", {
            for: `${v(t)}-opt-${L}`,
            class: "form-check-label"
          }, B(p.label), 9, tt)
        ], 2))), 128))
      ])
    ], 8, _l));
  }
}), at = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], nt = /* @__PURE__ */ F({
  __name: "FormControlTextarea",
  props: {
    modelValue: { default: null },
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    maxlength: {},
    rows: { default: 3 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    function m(k) {
      const b = k.target.value;
      o("update:modelValue", b === "" ? null : b);
    }
    return (k, b) => (s(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-pen-fancy",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: K(() => [
        y("textarea", {
          id: v(t),
          class: "form-control",
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          rows: e.rows,
          onInput: m
        }, null, 40, at)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), ot = { class: "form-check form-switch" }, st = ["id", "checked", "disabled"], ut = ["for"], rt = /* @__PURE__ */ F({
  __name: "FormControlSwitch",
  props: {
    modelValue: { type: [Boolean, null] },
    label: {},
    labelClass: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = V(() => l.modelValue === !0);
    function k() {
      l.readonly || o("update:modelValue", l.modelValue !== !0);
    }
    return (b, C) => (s(), r("div", ot, [
      y("input", {
        id: v(t),
        type: "checkbox",
        role: "switch",
        class: "form-check-input",
        checked: m.value,
        disabled: e.readonly,
        onClick: ee(k, ["prevent"])
      }, null, 8, st),
      y("label", {
        for: v(t),
        class: P(["form-check-label", ...v(x).filter((w) => w !== "form-label")])
      }, [
        te(B(e.label) + " ", 1),
        e.required ? (s(), r("i", {
          key: 0,
          class: P(["fas fa-asterisk fa-xs ms-1", v(f) ? "text-success" : "text-danger"])
        }, null, 2)) : $("", !0)
      ], 10, ut)
    ]));
  }
}), it = ["for"], dt = { class: "input-group" }, ct = { class: "input-group-text fw-semibold" }, ft = ["id", "value", "placeholder", "readonly", "min", "max", "step"], pt = {
  key: 0,
  class: "input-group-text"
}, mt = /* @__PURE__ */ F({
  __name: "FormControlCurrency",
  props: {
    modelValue: { default: null },
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    currency: { default: "GBP" },
    locale: {},
    min: {},
    max: {},
    step: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = N(null), k = V(() => {
      var i;
      try {
        const n = l.locale ?? (typeof navigator < "u" ? navigator.language : "en-GB");
        return ((i = new Intl.NumberFormat(n, {
          style: "currency",
          currency: l.currency ?? "GBP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).formatToParts(0).find((p) => p.type === "currency")) == null ? void 0 : i.value) ?? l.currency ?? "£";
      } catch {
        return l.currency ?? "£";
      }
    }), b = V(() => l.min ?? -1 / 0), C = V(() => l.max ?? 1 / 0);
    function w(i) {
      const n = i.target.value;
      if (n === "") {
        o("update:modelValue", null);
        return;
      }
      const d = parseFloat(n);
      isNaN(d) || o("update:modelValue", d);
    }
    function S(i) {
      if (i.target.value === "" || l.modelValue === null) return;
      const d = ie(b.value, C.value, l.modelValue);
      d !== l.modelValue && (o("update:modelValue", d), m.value && (m.value.value = String(d)));
    }
    return (i, n) => (s(), r("div", null, [
      e.label ? (s(), r("label", {
        key: 0,
        for: v(t),
        class: P(v(x))
      }, B(e.label), 11, it)) : $("", !0),
      y("div", dt, [
        y("span", ct, B(k.value), 1),
        y("input", {
          id: v(t),
          ref_key: "inputRef",
          ref: m,
          type: "number",
          class: "form-control",
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: w,
          onBlur: S
        }, null, 40, ft),
        e.required ? (s(), r("span", pt, [
          y("i", {
            class: P(["fas fa-asterisk fa-xs", v(f) ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : $("", !0)
      ])
    ]));
  }
}), vt = ["for"], yt = { class: "input-group" }, ht = {
  key: 0,
  class: "input-group-text"
}, bt = { class: "position-relative flex-grow-1 d-flex" }, xt = ["id", "placeholder", "readonly"], gt = ["aria-label"], kt = ["aria-selected", "onMousedown", "onMouseover"], Vt = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, $t = {
  key: 2,
  class: "input-group-text"
}, wt = /* @__PURE__ */ F({
  __name: "FormControlLookup",
  props: {
    modelValue: {},
    spType: {},
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    options: {},
    optionLabel: { type: [String, Function] },
    optionValue: { type: [String, Function] }
  },
  emits: ["update:modelValue", "search"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, { id: t, haveValue: f, requiredPass: c, labelClasses: x } = O(l);
    u({ requiredPass: c });
    const m = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function k(g) {
      return typeof l.optionValue == "function" ? l.optionValue(g) : typeof l.optionValue == "string" ? typeof g == "string" || typeof g == "number" ? g : g[l.optionValue] ?? null : typeof g == "string" || typeof g == "number" ? g : l.spType && m.includes(l.spType) ? g.Id ?? null : g;
    }
    function b(g) {
      return g == null ? "" : typeof g == "object" ? JSON.stringify(g) : String(g);
    }
    const C = V(
      () => (l.options ?? []).map((g) => ({
        label: X(g, l.optionLabel),
        value: k(g),
        key: b(k(g))
      }))
    ), w = V(() => {
      if (l.modelValue === null || l.modelValue === void 0) return null;
      const g = b(l.modelValue), q = C.value.find((h) => h.key === g);
      return (q == null ? void 0 : q.label) ?? String(l.modelValue);
    }), S = N(""), i = N(!1), n = N(0), d = N(null);
    H(w, (g) => {
      g !== null && (S.value = g);
    }, { immediate: !0 });
    const p = V(() => {
      const g = S.value.trim().toLowerCase(), q = b(l.modelValue);
      return C.value.filter((h) => h.key === q ? !1 : g ? h.label.toLowerCase().includes(g) : !0);
    });
    H(p, (g) => {
      n.value >= g.length && (n.value = 0);
    });
    function L() {
      l.readonly || (i.value = !0, n.value = 0);
    }
    function D() {
      i.value = !1, n.value = 0, o("search", ""), w.value !== null && (S.value = w.value);
    }
    function z(g) {
      o("update:modelValue", g.value), S.value = g.label, i.value = !1, o("search", "");
    }
    function G() {
      o("update:modelValue", null), S.value = "", o("search", ""), re(() => {
        var g;
        return (g = d.value) == null ? void 0 : g.focus();
      });
    }
    function Q() {
      l.modelValue !== null && l.modelValue !== void 0 && o("update:modelValue", null), i.value = !0, n.value = 0, o("search", S.value);
    }
    function _() {
      L();
    }
    function ae() {
      setTimeout(D, 150);
    }
    function ne(g) {
      const q = p.value;
      switch (g.key) {
        case "ArrowDown":
          if (g.preventDefault(), !i.value) {
            L();
            return;
          }
          n.value = q.length ? (n.value + 1) % q.length : 0;
          break;
        case "ArrowUp":
          if (g.preventDefault(), !i.value) {
            L();
            return;
          }
          n.value = q.length ? (n.value - 1 + q.length) % q.length : 0;
          break;
        case "Enter":
          if (g.preventDefault(), i.value && q.length) {
            const h = n.value >= 0 && n.value < q.length ? n.value : 0;
            z(q[h]);
          }
          break;
        case "Escape":
          g.preventDefault(), D();
          break;
        case "Delete":
        case "Backspace":
          l.modelValue !== null && l.modelValue !== void 0 && !S.value && (g.preventDefault(), G());
          break;
      }
    }
    return (g, q) => (s(), r("div", null, [
      e.label ? (s(), r("label", {
        key: 0,
        for: v(t),
        class: P(v(x))
      }, B(e.label), 11, vt)) : $("", !0),
      y("div", yt, [
        e.suppressPrefixIcon ? $("", !0) : (s(), r("span", ht, [...q[1] || (q[1] = [
          y("i", { class: "fas fa-search" }, null, -1)
        ])])),
        y("div", bt, [
          fe(y("input", {
            id: v(t),
            ref_key: "inputRef",
            ref: d,
            type: "text",
            class: "form-control border-end-0",
            "onUpdate:modelValue": q[0] || (q[0] = (h) => S.value = h),
            placeholder: e.placeholder ?? "Type to search…",
            readonly: e.readonly,
            autocomplete: "off",
            onInput: Q,
            onFocus: _,
            onBlur: ae,
            onKeydown: ne
          }, null, 40, xt), [
            [pe, S.value]
          ]),
          i.value && p.value.length ? (s(), r("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": e.label ?? "Suggestions"
          }, [
            (s(!0), r(A, null, R(p.value, (h, T) => (s(), r("li", {
              key: h.key,
              role: "option",
              "aria-selected": T === n.value,
              class: P(["dropdown-item", { active: T === n.value }]),
              style: me(T === n.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ee((I) => z(h), ["prevent"]),
              onMouseover: (I) => n.value = T
            }, B(h.label), 47, kt))), 128))
          ], 8, gt)) : i.value && S.value && !p.value.length ? (s(), r("ul", Vt, [...q[2] || (q[2] = [
            y("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : $("", !0)
        ]),
        v(f) && !e.readonly ? (s(), r("button", {
          key: 1,
          type: "button",
          class: "btn btn-outline-secondary",
          title: "Clear selection",
          "aria-label": "Clear selection",
          tabindex: "-1",
          onClick: G
        }, [...q[3] || (q[3] = [
          y("i", { class: "fas fa-times" }, null, -1)
        ])])) : $("", !0),
        e.required ? (s(), r("span", $t, [
          y("i", {
            class: P(["fas fa-asterisk fa-xs", v(f) ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : $("", !0)
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ F({
  __name: "SpvFormControl",
  props: {
    spType: {},
    type: {},
    modelValue: {},
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    stacked: { type: Boolean },
    min: {},
    max: {},
    step: {},
    maxlength: {},
    rows: {},
    currency: {},
    locale: {},
    timezone: {},
    options: {},
    optionLabel: { type: [String, Function] },
    optionValue: { type: [String, Function] },
    optionStrict: { type: Boolean },
    minLength: {},
    requiredCharacters: {},
    mixedCase: { type: Boolean },
    mustMatch: {}
  },
  emits: ["update:modelValue", "search"],
  setup(e, { expose: u, emit: a }) {
    const l = e, o = a, t = V(() => l.type ? l.type : l.spType ? rl[l.spType] : "text"), f = V(() => {
      if (l.maxlength !== void 0) return l.maxlength;
      if (l.spType) return il[l.spType];
    }), c = V(() => {
      switch (t.value) {
        case "password":
          return wl;
        case "number":
          return Sl;
        case "percent":
          return Bl;
        case "date":
          return Ll;
        case "datetime-local":
          return Nl;
        case "select":
          return Ul;
        case "lookupMulti":
          return Wl;
        case "color":
          return Ql;
        case "checkboxes":
          return ce;
        case "radio":
          return ce;
        case "textarea":
          return nt;
        case "switch":
          return rt;
        case "currency":
          return mt;
        case "lookup":
          return wt;
        case "text":
        default:
          return gl;
      }
    }), x = N(null), m = V(() => {
      var b;
      return ((b = x.value) == null ? void 0 : b.requiredPass) ?? !0;
    });
    u({ requiredPass: m });
    const k = V(() => ({
      modelValue: l.modelValue,
      spType: l.spType,
      label: l.label,
      labelClass: l.labelClass,
      placeholder: l.placeholder,
      required: l.required,
      readonly: l.readonly,
      suppressPrefixIcon: l.suppressPrefixIcon,
      stacked: l.stacked,
      multi: t.value === "checkboxes",
      min: l.min,
      max: l.max,
      step: l.step,
      maxlength: f.value,
      rows: l.rows,
      currency: l.currency,
      locale: l.locale,
      timezone: l.timezone,
      options: l.options,
      optionLabel: l.optionLabel,
      optionValue: l.optionValue,
      optionStrict: l.optionStrict,
      minLength: l.minLength,
      requiredCharacters: l.requiredCharacters,
      mixedCase: l.mixedCase,
      mustMatch: l.mustMatch
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }));
    return (b, C) => (s(), Y(he(c.value), be({
      ref_key: "innerRef",
      ref: x
    }, k.value, {
      "onUpdate:modelValue": C[0] || (C[0] = (w) => o("update:modelValue", w)),
      onSearch: C[1] || (C[1] = (w) => o("search", w))
    }), null, 16));
  }
}), St = {
  SpvAlert: xe,
  SpvModal: Ce,
  SpvToast: Ie,
  SpvOffcanvas: Me,
  SpvNavTabs: ze,
  SpvInput: je,
  SpvSelect: el,
  SpvTextarea: ul,
  SpvFormControl: Ct
}, Bt = {
  install(e) {
    for (const [u, a] of Object.entries(St))
      e.component(u, a);
  }
};
export {
  xe as SpvAlert,
  je as SpvInput,
  Ce as SpvModal,
  ze as SpvNavTabs,
  Me as SpvOffcanvas,
  el as SpvSelect,
  ul as SpvTextarea,
  Ie as SpvToast,
  Bt as default
};
