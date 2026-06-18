import { defineComponent as F, openBlock as i, createElementBlock as p, normalizeClass as S, renderSlot as U, createCommentVNode as B, ref as D, onMounted as le, onBeforeUnmount as ue, watch as H, createElementVNode as h, toDisplayString as N, nextTick as re, Fragment as z, renderList as K, computed as k, createBlock as Y, unref as v, withCtx as R, createVNode as ye, createTextVNode as te, withModifiers as ee, withDirectives as pe, vModelText as fe, normalizeStyle as me, resolveDynamicComponent as he, mergeProps as be } from "vue";
const xe = /* @__PURE__ */ F({
  __name: "SpvAlert",
  props: {
    variant: { default: "primary" },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismissed"],
  setup(e, { emit: s }) {
    const n = s;
    function l() {
      n("update:modelValue", !1), n("dismissed");
    }
    return (o, t) => e.modelValue ? (i(), p("div", {
      key: 0,
      class: S(["alert", `alert-${e.variant}`, { "alert-dismissible fade show": e.dismissible }]),
      role: "alert"
    }, [
      U(o.$slots, "default"),
      e.dismissible ? (i(), p("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "aria-label": "Close",
        onClick: l
      })) : B("", !0)
    ], 2)) : B("", !0);
  }
}), ge = { class: "modal-content" }, Ve = {
  key: 0,
  class: "modal-header"
}, ke = { class: "modal-title" }, $e = { class: "modal-body" }, we = {
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
  setup(e, { emit: s }) {
    const n = e, l = s, o = D(null);
    let t = null;
    le(() => {
      o.value && (t = new window.bootstrap.Modal(o.value, {
        backdrop: n.staticBackdrop ? "static" : !0,
        keyboard: !n.staticBackdrop
      }), o.value.addEventListener("shown.bs.modal", () => l("shown")), o.value.addEventListener("hidden.bs.modal", () => {
        l("update:modelValue", !1), l("hidden");
      }), n.modelValue && t.show());
    }), ue(() => {
      t == null || t.dispose();
    }), H(() => n.modelValue, (m) => {
      t && (m ? t.show() : t.hide());
    });
    const f = () => [
      "modal-dialog",
      n.size ? n.size === "fullscreen" ? "modal-fullscreen" : `modal-${n.size}` : "",
      { "modal-dialog-scrollable": n.scrollable },
      { "modal-dialog-centered": n.centered }
    ];
    return (m, x) => (i(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: "modal fade",
      tabindex: "-1"
    }, [
      h("div", {
        class: S(f())
      }, [
        h("div", ge, [
          e.title || m.$slots.header ? (i(), p("div", Ve, [
            U(m.$slots, "header", {}, () => [
              h("h5", ke, N(e.title), 1)
            ]),
            h("button", {
              type: "button",
              class: "btn-close",
              onClick: x[0] || (x[0] = (d) => l("update:modelValue", !1))
            })
          ])) : B("", !0),
          h("div", $e, [
            U(m.$slots, "default")
          ]),
          m.$slots.footer ? (i(), p("div", we, [
            U(m.$slots, "footer")
          ])) : B("", !0)
        ])
      ], 2)
    ], 512));
  }
}), Te = {
  key: 0,
  class: "toast-header"
}, Be = {
  key: 0,
  class: "me-auto"
}, Se = { key: 1 }, Pe = { class: "toast-body" }, qe = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const n = e, l = s, o = D(null);
    let t = null;
    return le(() => {
      o.value && (t = new window.bootstrap.Toast(o.value, {
        autohide: n.autohide,
        delay: n.delay
      }), o.value.addEventListener("shown.bs.toast", () => l("shown")), o.value.addEventListener("hidden.bs.toast", () => {
        l("update:modelValue", !1), l("hidden");
      }), n.modelValue && t.show());
    }), ue(() => {
      t == null || t.dispose();
    }), H(() => n.modelValue, (f) => {
      t && (f ? t.show() : t.hide());
    }), (f, m) => (i(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: S(["toast", e.variant ? `text-bg-${e.variant}` : ""]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      e.title || e.subtitle ? (i(), p("div", Te, [
        U(f.$slots, "header", {}, () => [
          e.title ? (i(), p("strong", Be, N(e.title), 1)) : B("", !0),
          e.subtitle ? (i(), p("small", Se, N(e.subtitle), 1)) : B("", !0)
        ]),
        h("button", {
          type: "button",
          class: "btn-close",
          onClick: m[0] || (m[0] = (x) => l("update:modelValue", !1))
        })
      ])) : B("", !0),
      h("div", Pe, [
        U(f.$slots, "default")
      ])
    ], 2));
  }
}), Ie = { class: "offcanvas-header" }, Le = { class: "offcanvas-title" }, Fe = { class: "offcanvas-body" }, Me = /* @__PURE__ */ F({
  __name: "SpvOffcanvas",
  props: {
    modelValue: { type: Boolean },
    title: {},
    placement: { default: "start" },
    staticBackdrop: { type: Boolean, default: !1 },
    scroll: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "shown", "hidden"],
  setup(e, { emit: s }) {
    const n = e, l = s, o = D(null);
    let t = null;
    return le(() => {
      o.value && (t = new window.bootstrap.Offcanvas(o.value, {
        backdrop: n.staticBackdrop ? "static" : !0,
        keyboard: !n.staticBackdrop,
        scroll: n.scroll
      }), o.value.addEventListener("shown.bs.offcanvas", () => l("shown")), o.value.addEventListener("hidden.bs.offcanvas", () => {
        l("update:modelValue", !1), l("hidden");
      }), n.modelValue && t.show());
    }), ue(() => {
      t == null || t.dispose();
    }), H(() => n.modelValue, (f) => {
      t && (f ? t.show() : t.hide());
    }), (f, m) => (i(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: S(["offcanvas", `offcanvas-${e.placement}`]),
      tabindex: "-1"
    }, [
      h("div", Ie, [
        U(f.$slots, "header", {}, () => [
          h("h5", Le, N(e.title), 1)
        ]),
        h("button", {
          type: "button",
          class: "btn-close",
          onClick: m[0] || (m[0] = (x) => l("update:modelValue", !1))
        })
      ]),
      h("div", Fe, [
        U(f.$slots, "default")
      ])
    ], 2));
  }
}), De = ["data-bs-toggle", "data-bs-target", "aria-controls", "aria-selected", "onShown"], Ne = { class: "tab-content" }, Oe = ["id"], Ee = /* @__PURE__ */ F({
  __name: "SpvNavTabs",
  props: {
    modelValue: {},
    tabs: {},
    pills: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: s }) {
    const n = e, l = s, o = D({});
    function t(m) {
      const x = o.value[m];
      if (!x) return;
      window.bootstrap.Tab.getOrCreateInstance(x).show();
    }
    le(() => {
      re(() => t(n.modelValue));
    }), H(() => n.modelValue, (m) => t(m));
    function f(m) {
      l("update:modelValue", m), l("change", m);
    }
    return (m, x) => (i(), p("div", null, [
      h("ul", {
        class: S(["nav", e.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (i(!0), p(z, null, K(e.tabs, (d) => (i(), p("li", {
          key: d.key,
          class: "nav-item",
          role: "presentation"
        }, [
          h("button", {
            ref_for: !0,
            ref: (V) => {
              V && (o.value[d.key] = V);
            },
            class: S(["nav-link", { active: e.modelValue === d.key, disabled: d.disabled }]),
            type: "button",
            role: "tab",
            "data-bs-toggle": e.pills ? "pill" : "tab",
            "data-bs-target": `#tab-pane-${d.key}`,
            "aria-controls": `tab-pane-${d.key}`,
            "aria-selected": e.modelValue === d.key,
            onShown: (V) => f(d.key)
          }, N(d.label), 43, De)
        ]))), 128))
      ], 2),
      h("div", Ne, [
        (i(!0), p(z, null, K(e.tabs, (d) => (i(), p("div", {
          id: `tab-pane-${d.key}`,
          key: d.key,
          class: S(["tab-pane", "fade", { "show active": e.modelValue === d.key }]),
          role: "tabpanel"
        }, [
          U(m.$slots, d.key)
        ], 10, Oe))), 128))
      ])
    ]));
  }
}), Ue = {
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
}, Ae = {
  Text: 255
  // SP enforces 255 char limit on single-line text fields
}, Re = ["for"], ze = { class: "input-group" }, Ke = {
  key: 0,
  class: "input-group-text"
}, Ye = {
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
    return (s, n) => (i(), p("div", null, [
      e.label ? (i(), p("label", {
        key: 0,
        for: e.id,
        class: S(e.labelClasses)
      }, N(e.label), 11, Re)) : B("", !0),
      h("div", ze, [
        !e.suppressPrefixIcon && e.iconClass ? (i(), p("span", Ke, [
          h("i", {
            class: S(["fas", e.iconClass])
          }, null, 2)
        ])) : B("", !0),
        U(s.$slots, "default"),
        e.required ? (i(), p("span", Ye, [
          h("i", {
            class: S([
              "fas fa-asterisk fa-xs",
              e.haveValue ? "text-success" : "text-danger"
            ])
          }, null, 2)
        ])) : B("", !0),
        U(s.$slots, "suffix")
      ])
    ]));
  }
});
function L(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function Z(e) {
  return function s(n) {
    return arguments.length === 0 || L(n) ? s : e.apply(this, arguments);
  };
}
function W(e) {
  return function s(n, l) {
    switch (arguments.length) {
      case 0:
        return s;
      case 1:
        return L(n) ? s : Z(function(o) {
          return e(n, o);
        });
      default:
        return L(n) && L(l) ? s : L(n) ? Z(function(o) {
          return e(o, l);
        }) : L(l) ? Z(function(o) {
          return e(n, o);
        }) : e(n, l);
    }
  };
}
function je(e) {
  return function s(n, l, o) {
    switch (arguments.length) {
      case 0:
        return s;
      case 1:
        return L(n) ? s : W(function(t, f) {
          return e(n, t, f);
        });
      case 2:
        return L(n) && L(l) ? s : L(n) ? W(function(t, f) {
          return e(t, l, f);
        }) : L(l) ? W(function(t, f) {
          return e(n, t, f);
        }) : Z(function(t) {
          return e(n, l, t);
        });
      default:
        return L(n) && L(l) && L(o) ? s : L(n) && L(l) ? W(function(t, f) {
          return e(t, f, o);
        }) : L(n) && L(o) ? W(function(t, f) {
          return e(t, l, f);
        }) : L(l) && L(o) ? W(function(t, f) {
          return e(n, t, f);
        }) : L(n) ? Z(function(t) {
          return e(t, l, o);
        }) : L(l) ? Z(function(t) {
          return e(n, t, o);
        }) : L(o) ? Z(function(t) {
          return e(n, l, t);
        }) : e(n, l, o);
    }
  };
}
var J = /* @__PURE__ */ Z(function(s) {
  return s == null;
}), ie = /* @__PURE__ */ je(function(s, n, l) {
  if (s > n)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return l < s ? s : l > n ? n : l;
});
function Ze() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function O(e) {
  const s = Ze(), n = k(() => {
    const t = e.modelValue;
    return !(J(t) || typeof t == "string" && t.trim() === "" || Array.isArray(t) && t.length === 0);
  }), l = k(() => !e.required || n.value), o = k(() => {
    const t = ["form-label"];
    return e.labelClass && t.push(...e.labelClass.split(/\s+/).filter(Boolean)), t;
  });
  return { id: s, haveValue: n, requiredPass: l, labelClasses: o };
}
const Ge = [
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
function X(e, s) {
  if (typeof e == "string") return e;
  if (typeof e == "number") return String(e);
  if (typeof s == "function") return s(e);
  if (typeof s == "string") {
    const n = e[s];
    return n != null ? String(n) : "";
  }
  for (const n of Ge)
    if (n in e && e[n] != null) return String(e[n]);
  return JSON.stringify(e);
}
const Je = ["id", "value", "placeholder", "readonly", "maxlength", "list"], He = ["id"], We = ["value"], Xe = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l), d = D(!1), V = D(!0), b = k(() => {
      const a = m.value;
      return !l.optionStrict || !d.value ? a : a && (f.value ? V.value : !0);
    });
    s({ requiredPass: b });
    const w = k(() => {
      var a;
      return (a = l.options) != null && a.length ? `${t}-list` : void 0;
    }), $ = k(() => {
      var a;
      return (a = l.options) != null && a.length ? l.options.map((r) => X(r, l.optionLabel)) : [];
    });
    function C(a) {
      const r = a.target.value;
      o("update:modelValue", r === "" ? null : r);
    }
    function u(a) {
      var E;
      if (!l.optionStrict || !((E = l.options) != null && E.length)) return;
      d.value = !0;
      const r = a.target, c = r.value;
      if (!c) {
        V.value = !0;
        return;
      }
      const I = c.toLowerCase(), M = $.value.find((G) => G.toLowerCase() === I);
      M ? (V.value = !0, M !== c && (r.value = M, o("update:modelValue", M))) : (V.value = !1, r.value = "", o("update:modelValue", null));
    }
    return (a, r) => (i(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-font",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: R(() => [
        h("input", {
          id: v(t),
          type: "text",
          class: "form-control",
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          list: w.value,
          onInput: C,
          onBlur: u
        }, null, 40, Je),
        w.value ? (i(), p("datalist", {
          key: 0,
          id: w.value
        }, [
          (i(!0), p(z, null, K($.value, (c) => (i(), p("option", {
            key: c,
            value: c
          }, null, 8, We))), 128))
        ], 8, He)) : B("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), Qe = ["id", "type", "value", "placeholder", "readonly"], _e = ["title", "aria-label", "aria-pressed"], el = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, ll = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, labelClasses: m } = O(l), x = D(!1), d = D(!1);
    function V(a) {
      return /^\d+$/.test(a) ? "At least one number (0–9)" : /^[a-z]+$/i.test(a) ? "At least one letter" : a.length <= 12 ? `At least one of: ${a}` : "At least one special character";
    }
    const b = k(() => {
      var c;
      const a = l.modelValue ?? "", r = [];
      return l.minLength && r.push({
        key: "minLength",
        label: `At least ${l.minLength} character${l.minLength === 1 ? "" : "s"}`,
        passed: a.length >= l.minLength
      }), l.mixedCase && r.push({
        key: "mixedCase",
        label: "Upper and lowercase letters",
        passed: /[a-z]/.test(a) && /[A-Z]/.test(a)
      }), (c = l.requiredCharacters) == null || c.forEach((I, M) => {
        r.push({
          key: `chars-${M}`,
          label: V(I),
          passed: [...I].some((E) => a.includes(E))
        });
      }), l.mustMatch !== void 0 && r.push({
        key: "mustMatch",
        label: "Passwords match",
        passed: a.length > 0 && a === (l.mustMatch ?? "")
      }), r;
    }), w = k(
      () => b.value.every((a) => a.passed)
    ), $ = k(() => b.value.length > 0), C = k(() => !l.required && !$.value ? !0 : l.required && !f.value ? !1 : w.value);
    s({ requiredPass: C });
    function u(a) {
      d.value = !0;
      const r = a.target.value;
      o("update:modelValue", r === "" ? null : r);
    }
    return (a, r) => (i(), p("div", null, [
      ye(j, {
        id: v(t),
        label: e.label,
        "label-classes": v(m),
        "icon-class": "fa-lock",
        "have-value": w.value && v(f),
        required: e.required || $.value,
        readonly: e.readonly,
        "suppress-prefix-icon": e.suppressPrefixIcon
      }, {
        suffix: R(() => [
          h("button", {
            type: "button",
            class: "btn btn-outline-secondary",
            title: x.value ? "Hide password" : "Show password",
            "aria-label": x.value ? "Hide password" : "Show password",
            "aria-pressed": x.value,
            tabindex: "-1",
            onClick: r[0] || (r[0] = (c) => x.value = !x.value)
          }, [
            h("i", {
              class: S(["fas", x.value ? "fa-eye-slash" : "fa-eye"])
            }, null, 2)
          ], 8, _e)
        ]),
        default: R(() => [
          h("input", {
            id: v(t),
            type: x.value ? "text" : "password",
            class: "form-control",
            value: e.modelValue ?? "",
            placeholder: e.placeholder,
            readonly: e.readonly,
            autocomplete: "current-password",
            onInput: u
          }, null, 40, Qe)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]),
      $.value && d.value ? (i(), p("ul", el, [
        (i(!0), p(z, null, K(b.value, (c) => (i(), p("li", {
          key: c.key,
          class: S(c.passed ? "text-success" : "text-danger")
        }, [
          h("i", {
            class: S(["fas fa-xs me-1", c.passed ? "fa-check" : "fa-times"])
          }, null, 2),
          te(" " + N(c.label), 1)
        ], 2))), 128))
      ])) : B("", !0)
    ]));
  }
}), tl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], al = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = D(null), V = k(() => J(l.modelValue) ? "" : String(l.modelValue));
    function b(w) {
      const $ = w.target.value;
      if ($ === "" || $ === "-") {
        o("update:modelValue", null);
        return;
      }
      const C = parseFloat($);
      if (isNaN(C)) {
        d.value && (d.value.value = V.value);
        return;
      }
      const u = J(l.min) ? Number.NEGATIVE_INFINITY : l.min, a = J(l.max) ? Number.POSITIVE_INFINITY : l.max, r = ie(u, a, C);
      r !== C && d.value && (d.value.value = String(r)), o("update:modelValue", r);
    }
    return (w, $) => (i(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-hashtag",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: R(() => [
        h("input", {
          id: v(t),
          ref_key: "inputRef",
          ref: d,
          type: "number",
          class: "form-control",
          value: V.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: b
        }, null, 40, tl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), nl = ["id", "value", "placeholder", "readonly", "min", "max"], ol = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = D(null);
    function V(u) {
      const a = u.toString(), r = a.indexOf(".");
      return r > -1 ? a.length - r - 1 : 0;
    }
    function b(u) {
      const a = V(u), r = u * 100;
      return V(r) > a + 2 ? parseFloat(r.toFixed(a)).toString() : r.toString();
    }
    function w(u) {
      const a = V(u), r = u / 100;
      return parseFloat(r.toFixed(a + 2));
    }
    const $ = k(() => J(l.modelValue) ? "" : b(l.modelValue));
    function C(u) {
      const a = u.target.value;
      if (a === "" || a === "-") {
        o("update:modelValue", null);
        return;
      }
      const r = parseFloat(a);
      if (isNaN(r)) {
        d.value && (d.value.value = $.value);
        return;
      }
      const c = J(l.min) ? Number.NEGATIVE_INFINITY : l.min, I = J(l.max) ? Number.POSITIVE_INFINITY : l.max, M = ie(c, I, r);
      M !== r && d.value && (d.value.value = String(M)), o("update:modelValue", w(M));
    }
    return (u, a) => (i(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-percent",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: R(() => [
        h("input", {
          id: v(t),
          ref_key: "inputRef",
          ref: d,
          type: "number",
          class: "form-control",
          value: $.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          onInput: C
        }, null, 40, nl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
});
function ce() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function sl(e, s) {
  const n = new Date(e.toLocaleString("en-US", { timeZone: "UTC" })), l = new Date(e.toLocaleString("en-US", { timeZone: s }));
  return (n.getTime() - l.getTime()) / 6e4;
}
function oe(e) {
  return e ? e.substring(0, 10) : "";
}
function ul(e) {
  return e ? `${e}T00:00:00Z` : null;
}
function se(e, s) {
  if (!e) return "";
  const n = s ?? ce(), l = new Date(e), o = new Intl.DateTimeFormat("en-CA", {
    timeZone: n,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).formatToParts(l), t = {};
  return o.forEach(({ type: f, value: m }) => {
    t[f] = m;
  }), `${t.year}-${t.month}-${t.day}T${t.hour}:${t.minute}`;
}
function rl(e, s) {
  if (!e) return null;
  const n = s ?? ce(), l = /* @__PURE__ */ new Date(`${e}:00Z`), o = sl(l, n);
  return new Date(l.getTime() + o * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const il = ["id", "value", "readonly", "min", "max"], cl = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = k(() => oe(l.modelValue)), V = k(() => l.min ? oe(l.min) : void 0), b = k(() => l.max ? oe(l.max) : void 0);
    function w($) {
      const C = $.target.value;
      o("update:modelValue", ul(C));
    }
    return ($, C) => (i(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-calendar",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: R(() => [
        h("input", {
          id: v(t),
          type: "date",
          class: "form-control",
          value: d.value,
          readonly: e.readonly,
          min: V.value,
          max: b.value,
          onChange: w
        }, null, 40, il)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), dl = ["id", "value", "readonly", "min", "max"], pl = ["title"], fl = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = k(() => l.timezone ?? ce()), V = k(
      () => se(l.modelValue, d.value)
    ), b = k(
      () => l.min ? se(l.min, d.value) : void 0
    ), w = k(
      () => l.max ? se(l.max, d.value) : void 0
    );
    function $(C) {
      const u = C.target.value;
      o("update:modelValue", rl(u, d.value));
    }
    return (C, u) => (i(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-clock",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: R(() => [
        h("input", {
          id: v(t),
          type: "datetime-local",
          class: "form-control",
          value: V.value,
          readonly: e.readonly,
          min: b.value,
          max: w.value,
          onChange: $
        }, null, 40, dl),
        e.timezone ? (i(), p("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${d.value}`
        }, [...u[0] || (u[0] = [
          h("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, pl)) : B("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), ml = ["id", "value", "disabled"], vl = ["disabled"], yl = ["value"], hl = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = ["Lookup", "User"];
    function V(u) {
      return typeof l.optionValue == "function" ? l.optionValue(u) : typeof l.optionValue == "string" ? typeof u == "string" || typeof u == "number" ? u : u[l.optionValue] ?? null : typeof u == "string" || typeof u == "number" ? u : l.spType && d.includes(l.spType) ? u.Id ?? null : u;
    }
    const b = k(() => {
      var u;
      return (u = l.options) != null && u.length ? l.options.map((a) => {
        const r = X(a, l.optionLabel), c = V(a), I = c == null ? "" : typeof c == "object" ? JSON.stringify(c) : String(c);
        return { label: r, value: c, key: I };
      }) : [];
    }), w = k(() => {
      const u = l.modelValue;
      return u == null ? "" : typeof u == "object" ? JSON.stringify(u) : String(u);
    });
    function $(u) {
      const r = u.target.value;
      if (r === "") {
        o("update:modelValue", null);
        return;
      }
      const c = b.value.find((I) => I.key === r);
      o("update:modelValue", c ? c.value : null);
    }
    function C(u) {
      u.key !== "Delete" && u.key !== "Backspace" || l.readonly || (u.preventDefault(), o("update:modelValue", null));
    }
    return (u, a) => (i(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-list-ul",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: R(() => [
        h("select", {
          id: v(t),
          class: "form-select",
          value: w.value,
          disabled: e.readonly,
          onChange: $,
          onKeydown: C
        }, [
          h("option", {
            value: "",
            disabled: e.required
          }, N(e.placeholder ?? "Choose…"), 9, vl),
          (i(!0), p(z, null, K(b.value, (r) => (i(), p("option", {
            key: r.key,
            value: r.key
          }, N(r.label), 9, yl))), 128))
        ], 40, ml)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), bl = ["for"], xl = { class: "input-group" }, gl = {
  key: 0,
  class: "input-group-text"
}, Vl = ["aria-label", "onClick"], kl = ["id", "placeholder"], $l = ["aria-label"], wl = ["aria-selected", "onMousedown", "onMouseover"], Cl = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Tl = {
  key: 1,
  class: "input-group-text"
}, Bl = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, labelClasses: f } = O(l), m = k(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
    ), x = k(() => m.value.length > 0), d = k(() => !l.required || x.value);
    s({ requiredPass: d });
    const V = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function b(y) {
      return typeof l.optionValue == "function" ? l.optionValue(y) : typeof l.optionValue == "string" ? typeof y == "string" || typeof y == "number" ? y : y[l.optionValue] ?? null : typeof y == "string" || typeof y == "number" ? y : l.spType && V.includes(l.spType) ? y.Id ?? null : y;
    }
    function w(y) {
      return y == null ? "" : typeof y == "object" ? JSON.stringify(y) : String(y);
    }
    const $ = k(
      () => (l.options ?? []).map((y) => ({
        label: X(y, l.optionLabel),
        value: b(y),
        key: w(b(y))
      }))
    ), C = k(() => new Set(m.value.map(w))), u = k(
      () => m.value.map((y) => {
        const T = w(y), P = $.value.find((A) => A.key === T);
        return { label: (P == null ? void 0 : P.label) ?? (T || String(y)), value: y, key: T };
      })
    ), a = D(""), r = D(!1), c = D(0), I = D(null), M = k(() => {
      const y = a.value.trim().toLowerCase();
      return $.value.filter((T) => C.value.has(T.key) ? !1 : y ? T.label.toLowerCase().includes(y) : !0);
    });
    H(M, (y) => {
      c.value >= y.length && (c.value = 0);
    });
    function E() {
      l.readonly || (r.value = !0, c.value = 0);
    }
    function G() {
      r.value = !1, a.value = "", c.value = 0, o("search", "");
    }
    function Q(y) {
      const T = [...m.value, y.value];
      o("update:modelValue", T), a.value = "", c.value = 0, re(() => {
        var P;
        (P = I.value) == null || P.focus(), r.value = !0;
      });
    }
    function _(y) {
      const T = m.value.filter((P) => w(P) !== y);
      o("update:modelValue", T.length ? T : null);
    }
    function ae() {
      r.value = !0, c.value = 0, o("search", a.value);
    }
    function ne() {
      E();
    }
    function g() {
      setTimeout(G, 150);
    }
    function q(y) {
      const T = M.value;
      switch (y.key) {
        case "ArrowDown":
          if (y.preventDefault(), !r.value) {
            E();
            return;
          }
          c.value = T.length ? (c.value + 1) % T.length : 0;
          break;
        case "ArrowUp":
          if (y.preventDefault(), !r.value) {
            E();
            return;
          }
          c.value = T.length ? (c.value - 1 + T.length) % T.length : 0;
          break;
        case "Enter":
          if (y.preventDefault(), r.value && T.length) {
            const P = c.value >= 0 && c.value < T.length ? c.value : 0;
            Q(T[P]);
          }
          break;
        case "Escape":
          y.preventDefault(), G();
          break;
        case "Backspace":
          if (!a.value && m.value.length) {
            const P = u.value[u.value.length - 1];
            _(P.key);
          }
          break;
      }
    }
    return (y, T) => (i(), p("div", null, [
      e.label ? (i(), p("label", {
        key: 0,
        for: v(t),
        class: S(v(f))
      }, N(e.label), 11, bl)) : B("", !0),
      h("div", xl, [
        e.suppressPrefixIcon ? B("", !0) : (i(), p("span", gl, [...T[2] || (T[2] = [
          h("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        h("div", {
          class: S(["form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative", { "bg-body-secondary": e.readonly }]),
          style: { cursor: "text", "min-height": "2.375rem" },
          onClick: T[1] || (T[1] = (P) => {
            var A;
            return (A = I.value) == null ? void 0 : A.focus();
          })
        }, [
          (i(!0), p(z, null, K(u.value, (P) => (i(), p("span", {
            key: P.key,
            class: "badge rounded-pill bg-primary d-inline-flex align-items-center gap-1",
            style: { "font-size": "0.8em" }
          }, [
            te(N(P.label) + " ", 1),
            e.readonly ? B("", !0) : (i(), p("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${P.label}`,
              onClick: ee((A) => _(P.key), ["stop"])
            }, null, 8, Vl))
          ]))), 128)),
          e.readonly ? B("", !0) : pe((i(), p("input", {
            key: 0,
            id: v(t),
            ref_key: "inputRef",
            ref: I,
            type: "text",
            class: "border-0 p-0 flex-grow-1 bg-transparent",
            style: { outline: "none", "min-width": "8ch", "line-height": "inherit" },
            "onUpdate:modelValue": T[0] || (T[0] = (P) => a.value = P),
            placeholder: u.value.length ? "" : e.placeholder ?? "Type to search…",
            autocomplete: "off",
            onInput: ae,
            onFocus: ne,
            onBlur: g,
            onKeydown: q
          }, null, 40, kl)), [
            [fe, a.value]
          ]),
          r.value && M.value.length ? (i(), p("ul", {
            key: 1,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": e.label ?? "Suggestions"
          }, [
            (i(!0), p(z, null, K(M.value, (P, A) => (i(), p("li", {
              key: P.key,
              role: "option",
              "aria-selected": A === c.value,
              class: S(["dropdown-item", { active: A === c.value }]),
              style: me(A === c.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ee((ve) => Q(P), ["prevent"]),
              onMouseover: (ve) => c.value = A
            }, N(P.label), 47, wl))), 128))
          ], 8, $l)) : r.value && a.value && !M.value.length ? (i(), p("ul", Cl, [...T[3] || (T[3] = [
            h("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : B("", !0)
        ], 2),
        e.required ? (i(), p("span", Tl, [
          h("i", {
            class: S(["fas fa-asterisk fa-xs", x.value ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : B("", !0)
      ])
    ]));
  }
}), Sl = ["id", "value", "disabled", "title"], Pl = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    function d(b) {
      o("update:modelValue", b.target.value);
    }
    function V(b) {
      b.key !== "Delete" && b.key !== "Backspace" || l.readonly || (b.preventDefault(), o("update:modelValue", null));
    }
    return (b, w) => (i(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-palette",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: R(() => [
        h("input", {
          id: v(t),
          type: "color",
          class: "form-control form-control-color flex-grow-1",
          value: e.modelValue ?? "#000000",
          disabled: e.readonly,
          title: e.modelValue ?? "Choose a colour",
          onChange: d,
          onKeydown: V
        }, null, 40, Sl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), ql = ["aria-labelledby"], Il = ["id"], Ll = ["id", "type", "checked", "disabled", "name", "onClick"], Fl = ["for"], de = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function V(a) {
      return typeof l.optionValue == "function" ? l.optionValue(a) : typeof l.optionValue == "string" ? typeof a == "string" || typeof a == "number" ? a : a[l.optionValue] ?? null : typeof a == "string" || typeof a == "number" ? a : l.spType && d.includes(l.spType) ? a.Id ?? null : a;
    }
    function b(a) {
      return a == null ? "" : typeof a == "object" ? JSON.stringify(a) : String(a);
    }
    const w = k(
      () => (l.options ?? []).map((a) => ({
        label: X(a, l.optionLabel),
        value: V(a),
        key: b(V(a))
      }))
    ), $ = k(
      () => l.multi && Array.isArray(l.modelValue) ? l.modelValue : []
    );
    function C(a) {
      return l.multi ? $.value.some((r) => b(r) === a) : b(l.modelValue) === a;
    }
    function u(a) {
      if (!l.readonly)
        if (l.multi)
          if ($.value.some((c) => b(c) === a.key)) {
            const c = $.value.filter((I) => b(I) !== a.key);
            o("update:modelValue", c.length ? c : null);
          } else
            o("update:modelValue", [...$.value, a.value]);
        else
          b(l.modelValue) === a.key ? o("update:modelValue", null) : o("update:modelValue", a.value);
    }
    return (a, r) => (i(), p("div", {
      role: "group",
      "aria-labelledby": e.label ? `${v(t)}-label` : void 0
    }, [
      e.label ? (i(), p("div", {
        key: 0,
        id: `${v(t)}-label`,
        class: S(v(x)),
        style: { "margin-bottom": "0.25rem" }
      }, [
        te(N(e.label) + " ", 1),
        e.required ? (i(), p("i", {
          key: 0,
          class: S(["fas fa-asterisk fa-xs ms-1", v(f) ? "text-success" : "text-danger"])
        }, null, 2)) : B("", !0)
      ], 10, Il)) : B("", !0),
      h("div", null, [
        (i(!0), p(z, null, K(w.value, (c, I) => (i(), p("div", {
          key: c.key,
          class: S(["form-check", { "form-check-inline": !e.stacked }])
        }, [
          h("input", {
            id: `${v(t)}-opt-${I}`,
            type: e.multi ? "checkbox" : "radio",
            class: "form-check-input",
            checked: C(c.key),
            disabled: e.readonly,
            name: e.multi ? void 0 : v(t),
            onClick: (M) => u(c)
          }, null, 8, Ll),
          h("label", {
            for: `${v(t)}-opt-${I}`,
            class: "form-check-label"
          }, N(c.label), 9, Fl)
        ], 2))), 128))
      ])
    ], 8, ql));
  }
}), Ml = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], Dl = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    function d(V) {
      const b = V.target.value;
      o("update:modelValue", b === "" ? null : b);
    }
    return (V, b) => (i(), Y(j, {
      id: v(t),
      label: e.label,
      "label-classes": v(x),
      "icon-class": "fa-pen-fancy",
      "have-value": v(f),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon
    }, {
      default: R(() => [
        h("textarea", {
          id: v(t),
          class: "form-control",
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          rows: e.rows,
          onInput: d
        }, null, 40, Ml)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon"]));
  }
}), Nl = { class: "form-check form-switch" }, Ol = ["id", "checked", "disabled"], El = ["for"], Ul = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = k(() => l.modelValue === !0);
    function V() {
      l.readonly || o("update:modelValue", l.modelValue !== !0);
    }
    return (b, w) => (i(), p("div", Nl, [
      h("input", {
        id: v(t),
        type: "checkbox",
        role: "switch",
        class: "form-check-input",
        checked: d.value,
        disabled: e.readonly,
        onClick: ee(V, ["prevent"])
      }, null, 8, Ol),
      h("label", {
        for: v(t),
        class: S(["form-check-label", ...v(x).filter(($) => $ !== "form-label")])
      }, [
        te(N(e.label) + " ", 1),
        e.required ? (i(), p("i", {
          key: 0,
          class: S(["fas fa-asterisk fa-xs ms-1", v(f) ? "text-success" : "text-danger"])
        }, null, 2)) : B("", !0)
      ], 10, El)
    ]));
  }
}), Al = ["for"], Rl = { class: "input-group" }, zl = { class: "input-group-text fw-semibold" }, Kl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], Yl = {
  key: 0,
  class: "input-group-text"
}, jl = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = D(null), V = k(() => {
      var u;
      try {
        const a = l.locale ?? (typeof navigator < "u" ? navigator.language : "en-GB");
        return ((u = new Intl.NumberFormat(a, {
          style: "currency",
          currency: l.currency ?? "GBP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).formatToParts(0).find((c) => c.type === "currency")) == null ? void 0 : u.value) ?? l.currency ?? "£";
      } catch {
        return l.currency ?? "£";
      }
    }), b = k(() => l.min ?? -1 / 0), w = k(() => l.max ?? 1 / 0);
    function $(u) {
      const a = u.target.value;
      if (a === "") {
        o("update:modelValue", null);
        return;
      }
      const r = parseFloat(a);
      isNaN(r) || o("update:modelValue", r);
    }
    function C(u) {
      if (u.target.value === "" || l.modelValue === null) return;
      const r = ie(b.value, w.value, l.modelValue);
      r !== l.modelValue && (o("update:modelValue", r), d.value && (d.value.value = String(r)));
    }
    return (u, a) => (i(), p("div", null, [
      e.label ? (i(), p("label", {
        key: 0,
        for: v(t),
        class: S(v(x))
      }, N(e.label), 11, Al)) : B("", !0),
      h("div", Rl, [
        h("span", zl, N(V.value), 1),
        h("input", {
          id: v(t),
          ref_key: "inputRef",
          ref: d,
          type: "number",
          class: "form-control",
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: $,
          onBlur: C
        }, null, 40, Kl),
        e.required ? (i(), p("span", Yl, [
          h("i", {
            class: S(["fas fa-asterisk fa-xs", v(f) ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : B("", !0)
      ])
    ]));
  }
}), Zl = ["for"], Gl = { class: "input-group" }, Jl = {
  key: 0,
  class: "input-group-text"
}, Hl = { class: "position-relative flex-grow-1 d-flex" }, Wl = ["id", "placeholder", "readonly"], Xl = ["aria-label"], Ql = ["aria-selected", "onMousedown", "onMouseover"], _l = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, et = {
  key: 2,
  class: "input-group-text"
}, lt = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, { id: t, haveValue: f, requiredPass: m, labelClasses: x } = O(l);
    s({ requiredPass: m });
    const d = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function V(g) {
      return typeof l.optionValue == "function" ? l.optionValue(g) : typeof l.optionValue == "string" ? typeof g == "string" || typeof g == "number" ? g : g[l.optionValue] ?? null : typeof g == "string" || typeof g == "number" ? g : l.spType && d.includes(l.spType) ? g.Id ?? null : g;
    }
    function b(g) {
      return g == null ? "" : typeof g == "object" ? JSON.stringify(g) : String(g);
    }
    const w = k(
      () => (l.options ?? []).map((g) => ({
        label: X(g, l.optionLabel),
        value: V(g),
        key: b(V(g))
      }))
    ), $ = k(() => {
      if (l.modelValue === null || l.modelValue === void 0) return null;
      const g = b(l.modelValue), q = w.value.find((y) => y.key === g);
      return (q == null ? void 0 : q.label) ?? String(l.modelValue);
    }), C = D(""), u = D(!1), a = D(0), r = D(null);
    H($, (g) => {
      g !== null && (C.value = g);
    }, { immediate: !0 });
    const c = k(() => {
      const g = C.value.trim().toLowerCase(), q = b(l.modelValue);
      return w.value.filter((y) => y.key === q ? !1 : g ? y.label.toLowerCase().includes(g) : !0);
    });
    H(c, (g) => {
      a.value >= g.length && (a.value = 0);
    });
    function I() {
      l.readonly || (u.value = !0, a.value = 0);
    }
    function M() {
      u.value = !1, a.value = 0, o("search", ""), $.value !== null && (C.value = $.value);
    }
    function E(g) {
      o("update:modelValue", g.value), C.value = g.label, u.value = !1, o("search", "");
    }
    function G() {
      o("update:modelValue", null), C.value = "", o("search", ""), re(() => {
        var g;
        return (g = r.value) == null ? void 0 : g.focus();
      });
    }
    function Q() {
      l.modelValue !== null && l.modelValue !== void 0 && o("update:modelValue", null), u.value = !0, a.value = 0, o("search", C.value);
    }
    function _() {
      I();
    }
    function ae() {
      setTimeout(M, 150);
    }
    function ne(g) {
      const q = c.value;
      switch (g.key) {
        case "ArrowDown":
          if (g.preventDefault(), !u.value) {
            I();
            return;
          }
          a.value = q.length ? (a.value + 1) % q.length : 0;
          break;
        case "ArrowUp":
          if (g.preventDefault(), !u.value) {
            I();
            return;
          }
          a.value = q.length ? (a.value - 1 + q.length) % q.length : 0;
          break;
        case "Enter":
          if (g.preventDefault(), u.value && q.length) {
            const y = a.value >= 0 && a.value < q.length ? a.value : 0;
            E(q[y]);
          }
          break;
        case "Escape":
          g.preventDefault(), M();
          break;
        case "Delete":
        case "Backspace":
          l.modelValue !== null && l.modelValue !== void 0 && !C.value && (g.preventDefault(), G());
          break;
      }
    }
    return (g, q) => (i(), p("div", null, [
      e.label ? (i(), p("label", {
        key: 0,
        for: v(t),
        class: S(v(x))
      }, N(e.label), 11, Zl)) : B("", !0),
      h("div", Gl, [
        e.suppressPrefixIcon ? B("", !0) : (i(), p("span", Jl, [...q[1] || (q[1] = [
          h("i", { class: "fas fa-search" }, null, -1)
        ])])),
        h("div", Hl, [
          pe(h("input", {
            id: v(t),
            ref_key: "inputRef",
            ref: r,
            type: "text",
            class: "form-control border-end-0",
            "onUpdate:modelValue": q[0] || (q[0] = (y) => C.value = y),
            placeholder: e.placeholder ?? "Type to search…",
            readonly: e.readonly,
            autocomplete: "off",
            onInput: Q,
            onFocus: _,
            onBlur: ae,
            onKeydown: ne
          }, null, 40, Wl), [
            [fe, C.value]
          ]),
          u.value && c.value.length ? (i(), p("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": e.label ?? "Suggestions"
          }, [
            (i(!0), p(z, null, K(c.value, (y, T) => (i(), p("li", {
              key: y.key,
              role: "option",
              "aria-selected": T === a.value,
              class: S(["dropdown-item", { active: T === a.value }]),
              style: me(T === a.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ee((P) => E(y), ["prevent"]),
              onMouseover: (P) => a.value = T
            }, N(y.label), 47, Ql))), 128))
          ], 8, Xl)) : u.value && C.value && !c.value.length ? (i(), p("ul", _l, [...q[2] || (q[2] = [
            h("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : B("", !0)
        ]),
        v(f) && !e.readonly ? (i(), p("button", {
          key: 1,
          type: "button",
          class: "btn btn-outline-secondary",
          title: "Clear selection",
          "aria-label": "Clear selection",
          tabindex: "-1",
          onClick: G
        }, [...q[3] || (q[3] = [
          h("i", { class: "fas fa-times" }, null, -1)
        ])])) : B("", !0),
        e.required ? (i(), p("span", et, [
          h("i", {
            class: S(["fas fa-asterisk fa-xs", v(f) ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : B("", !0)
      ])
    ]));
  }
}), tt = {
  key: 0,
  class: "form-text text-muted"
}, at = /* @__PURE__ */ F({
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
    helpText: {},
    minLength: {},
    requiredCharacters: {},
    mixedCase: { type: Boolean },
    mustMatch: {}
  },
  emits: ["update:modelValue", "search"],
  setup(e, { expose: s, emit: n }) {
    const l = e, o = n, t = k(() => l.type ? l.type : l.spType ? Ue[l.spType] : "text"), f = k(() => {
      if (l.maxlength !== void 0) return l.maxlength;
      if (l.spType) return Ae[l.spType];
    }), m = k(() => {
      switch (t.value) {
        case "password":
          return ll;
        case "number":
          return al;
        case "percent":
          return ol;
        case "date":
          return cl;
        case "datetime-local":
          return fl;
        case "select":
          return hl;
        case "lookupMulti":
          return Bl;
        case "color":
          return Pl;
        case "checkboxes":
          return de;
        case "radio":
          return de;
        case "textarea":
          return Dl;
        case "switch":
          return Ul;
        case "currency":
          return jl;
        case "lookup":
          return lt;
        case "text":
        default:
          return Xe;
      }
    }), x = D(null), d = k(() => {
      var b;
      return ((b = x.value) == null ? void 0 : b.requiredPass) ?? !0;
    });
    s({ requiredPass: d });
    const V = k(() => ({
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
    return (b, w) => (i(), p("div", null, [
      (i(), Y(he(m.value), be({
        ref_key: "innerRef",
        ref: x
      }, V.value, {
        "onUpdate:modelValue": w[0] || (w[0] = ($) => o("update:modelValue", $)),
        onSearch: w[1] || (w[1] = ($) => o("search", $))
      }), null, 16)),
      e.helpText ? (i(), p("div", tt, N(e.helpText), 1)) : B("", !0)
    ]));
  }
}), nt = {
  SpvAlert: xe,
  SpvModal: Ce,
  SpvToast: qe,
  SpvOffcanvas: Me,
  SpvNavTabs: Ee,
  SpvFormControl: at
}, st = {
  install(e) {
    for (const [s, n] of Object.entries(nt))
      e.component(s, n);
  }
};
export {
  xe as SpvAlert,
  at as SpvFormControl,
  Ce as SpvModal,
  Ee as SpvNavTabs,
  Me as SpvOffcanvas,
  qe as SpvToast,
  st as default
};
