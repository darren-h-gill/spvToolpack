import { defineComponent as E, openBlock as u, createElementBlock as f, normalizeClass as C, renderSlot as z, createCommentVNode as P, ref as U, onMounted as ae, onBeforeUnmount as de, watch as X, createElementVNode as k, toDisplayString as F, nextTick as ce, Fragment as j, renderList as Z, computed as m, createBlock as G, unref as c, withCtx as Y, createVNode as ge, createTextVNode as ne, withModifiers as ie, withDirectives as fe, vModelText as ye, normalizeStyle as he, vModelCheckbox as xe, resolveDynamicComponent as ke, mergeProps as Ve } from "vue";
const $e = /* @__PURE__ */ E({
  __name: "SpvAlert",
  props: {
    variant: { default: "primary" },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismissed"],
  setup(e, { emit: i }) {
    const a = i;
    function l() {
      a("update:modelValue", !1), a("dismissed");
    }
    return (o, t) => e.modelValue ? (u(), f("div", {
      key: 0,
      class: C(["alert", `alert-${e.variant}`, { "alert-dismissible fade show": e.dismissible }]),
      role: "alert"
    }, [
      z(o.$slots, "default"),
      e.dismissible ? (u(), f("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "aria-label": "Close",
        onClick: l
      })) : P("", !0)
    ], 2)) : P("", !0);
  }
}), we = { class: "modal-content" }, Ce = {
  key: 0,
  class: "modal-header"
}, Te = { class: "modal-title" }, Be = { class: "modal-body" }, Ie = {
  key: 1,
  class: "modal-footer"
}, Pe = /* @__PURE__ */ E({
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
  setup(e, { emit: i }) {
    const a = e, l = i, o = U(null);
    let t = null;
    ae(() => {
      o.value && (t = new window.bootstrap.Modal(o.value, {
        backdrop: a.staticBackdrop ? "static" : !0,
        keyboard: !a.staticBackdrop
      }), o.value.addEventListener("shown.bs.modal", () => l("shown")), o.value.addEventListener("hidden.bs.modal", () => {
        l("update:modelValue", !1), l("hidden");
      }), a.modelValue && t.show());
    }), de(() => {
      t == null || t.dispose();
    }), X(() => a.modelValue, (d) => {
      t && (d ? t.show() : t.hide());
    });
    const v = () => [
      "modal-dialog",
      a.size ? a.size === "fullscreen" ? "modal-fullscreen" : `modal-${a.size}` : "",
      { "modal-dialog-scrollable": a.scrollable },
      { "modal-dialog-centered": a.centered }
    ];
    return (d, T) => (u(), f("div", {
      ref_key: "elRef",
      ref: o,
      class: "modal fade",
      tabindex: "-1"
    }, [
      k("div", {
        class: C(v())
      }, [
        k("div", we, [
          e.title || d.$slots.header ? (u(), f("div", Ce, [
            z(d.$slots, "header", {}, () => [
              k("h5", Te, F(e.title), 1)
            ]),
            k("button", {
              type: "button",
              class: "btn-close",
              onClick: T[0] || (T[0] = (h) => l("update:modelValue", !1))
            })
          ])) : P("", !0),
          k("div", Be, [
            z(d.$slots, "default")
          ]),
          d.$slots.footer ? (u(), f("div", Ie, [
            z(d.$slots, "footer")
          ])) : P("", !0)
        ])
      ], 2)
    ], 512));
  }
}), Se = {
  key: 0,
  class: "toast-header"
}, qe = {
  key: 0,
  class: "me-auto"
}, Me = { key: 1 }, Le = { class: "toast-body" }, Fe = /* @__PURE__ */ E({
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
  setup(e, { emit: i }) {
    const a = e, l = i, o = U(null);
    let t = null;
    return ae(() => {
      o.value && (t = new window.bootstrap.Toast(o.value, {
        autohide: a.autohide,
        delay: a.delay
      }), o.value.addEventListener("shown.bs.toast", () => l("shown")), o.value.addEventListener("hidden.bs.toast", () => {
        l("update:modelValue", !1), l("hidden");
      }), a.modelValue && t.show());
    }), de(() => {
      t == null || t.dispose();
    }), X(() => a.modelValue, (v) => {
      t && (v ? t.show() : t.hide());
    }), (v, d) => (u(), f("div", {
      ref_key: "elRef",
      ref: o,
      class: C(["toast", e.variant ? `text-bg-${e.variant}` : ""]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      e.title || e.subtitle ? (u(), f("div", Se, [
        z(v.$slots, "header", {}, () => [
          e.title ? (u(), f("strong", qe, F(e.title), 1)) : P("", !0),
          e.subtitle ? (u(), f("small", Me, F(e.subtitle), 1)) : P("", !0)
        ]),
        k("button", {
          type: "button",
          class: "btn-close",
          onClick: d[0] || (d[0] = (T) => l("update:modelValue", !1))
        })
      ])) : P("", !0),
      k("div", Le, [
        z(v.$slots, "default")
      ])
    ], 2));
  }
}), De = { class: "offcanvas-header" }, Ne = { class: "offcanvas-title" }, Oe = { class: "offcanvas-body" }, Ee = /* @__PURE__ */ E({
  __name: "SpvOffcanvas",
  props: {
    modelValue: { type: Boolean },
    title: {},
    placement: { default: "start" },
    staticBackdrop: { type: Boolean, default: !1 },
    scroll: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "shown", "hidden"],
  setup(e, { emit: i }) {
    const a = e, l = i, o = U(null);
    let t = null;
    return ae(() => {
      o.value && (t = new window.bootstrap.Offcanvas(o.value, {
        backdrop: a.staticBackdrop ? "static" : !0,
        keyboard: !a.staticBackdrop,
        scroll: a.scroll
      }), o.value.addEventListener("shown.bs.offcanvas", () => l("shown")), o.value.addEventListener("hidden.bs.offcanvas", () => {
        l("update:modelValue", !1), l("hidden");
      }), a.modelValue && t.show());
    }), de(() => {
      t == null || t.dispose();
    }), X(() => a.modelValue, (v) => {
      t && (v ? t.show() : t.hide());
    }), (v, d) => (u(), f("div", {
      ref_key: "elRef",
      ref: o,
      class: C(["offcanvas", `offcanvas-${e.placement}`]),
      tabindex: "-1"
    }, [
      k("div", De, [
        z(v.$slots, "header", {}, () => [
          k("h5", Ne, F(e.title), 1)
        ]),
        k("button", {
          type: "button",
          class: "btn-close",
          onClick: d[0] || (d[0] = (T) => l("update:modelValue", !1))
        })
      ]),
      k("div", Oe, [
        z(v.$slots, "default")
      ])
    ], 2));
  }
}), Ue = ["data-bs-toggle", "data-bs-target", "aria-controls", "aria-selected", "onShown"], Ae = { class: "tab-content" }, Re = ["id"], ze = /* @__PURE__ */ E({
  __name: "SpvNavTabs",
  props: {
    modelValue: {},
    tabs: {},
    pills: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: i }) {
    const a = e, l = i, o = U({});
    function t(d) {
      const T = o.value[d];
      if (!T) return;
      window.bootstrap.Tab.getOrCreateInstance(T).show();
    }
    ae(() => {
      ce(() => t(a.modelValue));
    }), X(() => a.modelValue, (d) => t(d));
    function v(d) {
      l("update:modelValue", d), l("change", d);
    }
    return (d, T) => (u(), f("div", null, [
      k("ul", {
        class: C(["nav", e.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (u(!0), f(j, null, Z(e.tabs, (h) => (u(), f("li", {
          key: h.key,
          class: "nav-item",
          role: "presentation"
        }, [
          k("button", {
            ref_for: !0,
            ref: (p) => {
              p && (o.value[h.key] = p);
            },
            class: C(["nav-link", { active: e.modelValue === h.key, disabled: h.disabled }]),
            type: "button",
            role: "tab",
            "data-bs-toggle": e.pills ? "pill" : "tab",
            "data-bs-target": `#tab-pane-${h.key}`,
            "aria-controls": `tab-pane-${h.key}`,
            "aria-selected": e.modelValue === h.key,
            onShown: (p) => v(h.key)
          }, F(h.label), 43, Ue)
        ]))), 128))
      ], 2),
      k("div", Ae, [
        (u(!0), f(j, null, Z(e.tabs, (h) => (u(), f("div", {
          id: `tab-pane-${h.key}`,
          key: h.key,
          class: C(["tab-pane", "fade", { "show active": e.modelValue === h.key }]),
          role: "tabpanel"
        }, [
          z(d.$slots, h.key)
        ], 10, Re))), 128))
      ])
    ]));
  }
}), Ke = {
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
}, Ye = {
  Text: 255
  // SP enforces 255 char limit on single-line text fields
}, je = ["for"], Ze = {
  key: 0,
  class: "input-group-text"
}, Ge = {
  key: 1,
  class: "invalid-feedback"
}, Je = {
  key: 2,
  class: "input-group-text"
}, J = /* @__PURE__ */ E({
  __name: "FormControlWrapper",
  props: {
    id: {},
    label: {},
    labelClasses: {},
    iconClass: {},
    haveValue: { type: Boolean },
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    isInvalid: { type: Boolean },
    errorMessage: {}
  },
  setup(e) {
    return (i, a) => (u(), f("div", null, [
      e.label ? (u(), f("label", {
        key: 0,
        for: e.id,
        class: C(e.labelClasses)
      }, F(e.label), 11, je)) : P("", !0),
      k("div", {
        class: C(["input-group", { "has-validation": e.isInvalid }])
      }, [
        !e.suppressPrefixIcon && e.iconClass ? (u(), f("span", Ze, [
          k("i", {
            class: C(["fas", e.iconClass])
          }, null, 2)
        ])) : P("", !0),
        z(i.$slots, "default"),
        e.isInvalid && e.errorMessage ? (u(), f("div", Ge, F(e.errorMessage), 1)) : P("", !0),
        z(i.$slots, "suffix"),
        e.required ? (u(), f("span", Je, [
          k("i", {
            class: C([
              "fas fa-asterisk fa-xs",
              e.haveValue ? "text-success" : "text-danger"
            ])
          }, null, 2)
        ])) : P("", !0)
      ], 2)
    ]));
  }
});
function N(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function H(e) {
  return function i(a) {
    return arguments.length === 0 || N(a) ? i : e.apply(this, arguments);
  };
}
function Q(e) {
  return function i(a, l) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return N(a) ? i : H(function(o) {
          return e(a, o);
        });
      default:
        return N(a) && N(l) ? i : N(a) ? H(function(o) {
          return e(o, l);
        }) : N(l) ? H(function(o) {
          return e(a, o);
        }) : e(a, l);
    }
  };
}
function He(e) {
  return function i(a, l, o) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return N(a) ? i : Q(function(t, v) {
          return e(a, t, v);
        });
      case 2:
        return N(a) && N(l) ? i : N(a) ? Q(function(t, v) {
          return e(t, l, v);
        }) : N(l) ? Q(function(t, v) {
          return e(a, t, v);
        }) : H(function(t) {
          return e(a, l, t);
        });
      default:
        return N(a) && N(l) && N(o) ? i : N(a) && N(l) ? Q(function(t, v) {
          return e(t, v, o);
        }) : N(a) && N(o) ? Q(function(t, v) {
          return e(t, l, v);
        }) : N(l) && N(o) ? Q(function(t, v) {
          return e(a, t, v);
        }) : N(a) ? H(function(t) {
          return e(t, l, o);
        }) : N(l) ? H(function(t) {
          return e(a, t, o);
        }) : N(o) ? H(function(t) {
          return e(a, l, t);
        }) : e(a, l, o);
    }
  };
}
var W = /* @__PURE__ */ H(function(i) {
  return i == null;
}), ve = /* @__PURE__ */ He(function(i, a, l) {
  if (i > a)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return l < i ? i : l > a ? a : l;
});
function We() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function A(e) {
  const i = We(), a = m(() => {
    const d = e.modelValue;
    return !(W(d) || typeof d == "string" && d.trim() === "" || Array.isArray(d) && d.length === 0);
  }), l = m(() => !e.required || a.value), o = m(() => {
    const d = ["form-label"];
    return e.labelClass && d.push(...e.labelClass.split(/\s+/).filter(Boolean)), d;
  }), t = U(!1);
  return { id: i, haveValue: a, requiredPass: l, labelClasses: o, touched: t, touch: () => {
    t.value = !0;
  } };
}
const Xe = [
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
function ee(e, i) {
  if (typeof e == "string") return e;
  if (typeof e == "number") return String(e);
  if (typeof i == "function") return i(e);
  if (typeof i == "string") {
    const a = e[i];
    return a != null ? String(a) : "";
  }
  for (const a of Xe)
    if (a in e && e[a] != null) return String(e[a]);
  return JSON.stringify(e);
}
const Qe = ["id", "value", "placeholder", "readonly", "maxlength", "list"], _e = ["id"], el = ["value"], ll = /* @__PURE__ */ E({
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
    optionStrict: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = U(!0), b = m(() => {
      const r = d.value;
      return !l.optionStrict || !h.value ? r : r && (v.value ? V.value : !0);
    }), w = m(() => h.value && !b.value);
    i({ requiredPass: b, touch: p });
    const g = m(() => {
      var r;
      return (r = l.options) != null && r.length ? `${t}-list` : void 0;
    }), I = m(() => {
      var r;
      return (r = l.options) != null && r.length ? l.options.map((s) => ee(s, l.optionLabel)) : [];
    });
    function S(r) {
      const s = r.target.value;
      o("update:modelValue", s === "" ? null : s);
    }
    function B(r) {
      var O;
      if (p(), !l.optionStrict || !((O = l.options) != null && O.length)) return;
      const s = r.target, n = s.value;
      if (!n) {
        V.value = !0;
        return;
      }
      const y = n.toLowerCase(), M = I.value.find((R) => R.toLowerCase() === y);
      M ? (V.value = !0, M !== n && (s.value = M, o("update:modelValue", M))) : (V.value = !1, s.value = "", o("update:modelValue", null));
    }
    return (r, s) => (u(), G(J, {
      id: c(t),
      label: e.label,
      "label-classes": c(T),
      "icon-class": "fa-font",
      "have-value": c(v),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": w.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: Y(() => [
        k("input", {
          id: c(t),
          type: "text",
          class: C(["form-control", { "is-invalid": w.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          list: g.value,
          onInput: S,
          onBlur: B
        }, null, 42, Qe),
        g.value ? (u(), f("datalist", {
          key: 0,
          id: g.value
        }, [
          (u(!0), f(j, null, Z(I.value, (n) => (u(), f("option", {
            key: n,
            value: n
          }, null, 8, el))), 128))
        ], 8, _e)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), tl = ["id", "type", "value", "placeholder", "readonly"], al = ["title", "aria-label", "aria-pressed"], nl = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, ol = /* @__PURE__ */ E({
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
    mustMatch: {},
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, labelClasses: d, touched: T, touch: h } = A(l), p = U(!1), V = U(!1);
    function b(s) {
      return /^\d+$/.test(s) ? "At least one number (0–9)" : /^[a-z]+$/i.test(s) ? "At least one letter" : s.length <= 12 ? `At least one of: ${s}` : "At least one special character";
    }
    const w = m(() => {
      var y;
      const s = l.modelValue ?? "", n = [];
      return l.minLength && n.push({
        key: "minLength",
        label: `At least ${l.minLength} character${l.minLength === 1 ? "" : "s"}`,
        passed: s.length >= l.minLength
      }), l.mixedCase && n.push({
        key: "mixedCase",
        label: "Upper and lowercase letters",
        passed: /[a-z]/.test(s) && /[A-Z]/.test(s)
      }), (y = l.requiredCharacters) == null || y.forEach((M, O) => {
        n.push({
          key: `chars-${O}`,
          label: b(M),
          passed: [...M].some((R) => s.includes(R))
        });
      }), l.mustMatch !== void 0 && n.push({
        key: "mustMatch",
        label: "Passwords match",
        passed: s.length > 0 && s === (l.mustMatch ?? "")
      }), n;
    }), g = m(() => w.value.every((s) => s.passed)), I = m(() => w.value.length > 0), S = m(() => !l.required && !I.value ? !0 : l.required && !v.value ? !1 : g.value), B = m(() => T.value && !S.value);
    i({ requiredPass: S, touch: h });
    function r(s) {
      V.value = !0;
      const n = s.target.value;
      o("update:modelValue", n === "" ? null : n);
    }
    return (s, n) => (u(), f("div", null, [
      ge(J, {
        id: c(t),
        label: e.label,
        "label-classes": c(d),
        "icon-class": "fa-lock",
        "have-value": g.value && c(v),
        required: e.required || I.value,
        readonly: e.readonly,
        "suppress-prefix-icon": e.suppressPrefixIcon,
        "is-invalid": B.value,
        "error-message": e.errorMessage ?? "This field is required"
      }, {
        suffix: Y(() => [
          k("button", {
            type: "button",
            class: "btn btn-outline-secondary",
            title: p.value ? "Hide password" : "Show password",
            "aria-label": p.value ? "Hide password" : "Show password",
            "aria-pressed": p.value,
            tabindex: "-1",
            onClick: n[1] || (n[1] = (y) => p.value = !p.value)
          }, [
            k("i", {
              class: C(["fas", p.value ? "fa-eye-slash" : "fa-eye"])
            }, null, 2)
          ], 8, al)
        ]),
        default: Y(() => [
          k("input", {
            id: c(t),
            type: p.value ? "text" : "password",
            class: C(["form-control", { "is-invalid": B.value }]),
            value: e.modelValue ?? "",
            placeholder: e.placeholder,
            readonly: e.readonly,
            autocomplete: "current-password",
            onInput: r,
            onBlur: n[0] || (n[0] = //@ts-ignore
            (...y) => c(h) && c(h)(...y))
          }, null, 42, tl)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]),
      I.value && V.value ? (u(), f("ul", nl, [
        (u(!0), f(j, null, Z(w.value, (y) => (u(), f("li", {
          key: y.key,
          class: C(y.passed ? "text-success" : "text-danger")
        }, [
          k("i", {
            class: C(["fas fa-xs me-1", y.passed ? "fa-check" : "fa-times"])
          }, null, 2),
          ne(" " + F(y.label), 1)
        ], 2))), 128))
      ])) : P("", !0)
    ]));
  }
}), sl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], rl = /* @__PURE__ */ E({
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
    step: {},
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = U(null), w = m(() => W(l.modelValue) ? "" : String(l.modelValue));
    function g(I) {
      const S = I.target.value;
      if (S === "" || S === "-") {
        o("update:modelValue", null);
        return;
      }
      const B = parseFloat(S);
      if (isNaN(B)) {
        b.value && (b.value.value = w.value);
        return;
      }
      const r = W(l.min) ? Number.NEGATIVE_INFINITY : l.min, s = W(l.max) ? Number.POSITIVE_INFINITY : l.max, n = ve(r, s, B);
      n !== B && b.value && (b.value.value = String(n)), o("update:modelValue", n);
    }
    return (I, S) => (u(), G(J, {
      id: c(t),
      label: e.label,
      "label-classes": c(T),
      "icon-class": "fa-hashtag",
      "have-value": c(v),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: Y(() => [
        k("input", {
          id: c(t),
          ref_key: "inputRef",
          ref: b,
          type: "number",
          class: C(["form-control", { "is-invalid": V.value }]),
          value: w.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: g,
          onBlur: S[0] || (S[0] = //@ts-ignore
          (...B) => c(p) && c(p)(...B))
        }, null, 42, sl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), ul = ["id", "value", "placeholder", "readonly", "min", "max"], il = /* @__PURE__ */ E({
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
    max: {},
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = U(null);
    function w(r) {
      const s = r.toString(), n = s.indexOf(".");
      return n > -1 ? s.length - n - 1 : 0;
    }
    function g(r) {
      const s = w(r), n = r * 100;
      return w(n) > s + 2 ? parseFloat(n.toFixed(s)).toString() : n.toString();
    }
    function I(r) {
      const s = w(r), n = r / 100;
      return parseFloat(n.toFixed(s + 2));
    }
    const S = m(() => W(l.modelValue) ? "" : g(l.modelValue));
    function B(r) {
      const s = r.target.value;
      if (s === "" || s === "-") {
        o("update:modelValue", null);
        return;
      }
      const n = parseFloat(s);
      if (isNaN(n)) {
        b.value && (b.value.value = S.value);
        return;
      }
      const y = W(l.min) ? Number.NEGATIVE_INFINITY : l.min, M = W(l.max) ? Number.POSITIVE_INFINITY : l.max, O = ve(y, M, n);
      O !== n && b.value && (b.value.value = String(O)), o("update:modelValue", I(O));
    }
    return (r, s) => (u(), G(J, {
      id: c(t),
      label: e.label,
      "label-classes": c(T),
      "icon-class": "fa-percent",
      "have-value": c(v),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: Y(() => [
        k("input", {
          id: c(t),
          ref_key: "inputRef",
          ref: b,
          type: "number",
          class: C(["form-control", { "is-invalid": V.value }]),
          value: S.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          onInput: B,
          onBlur: s[0] || (s[0] = //@ts-ignore
          (...n) => c(p) && c(p)(...n))
        }, null, 42, ul)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
});
function pe() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function dl(e, i) {
  const a = new Date(e.toLocaleString("en-US", { timeZone: "UTC" })), l = new Date(e.toLocaleString("en-US", { timeZone: i }));
  return (a.getTime() - l.getTime()) / 6e4;
}
function re(e) {
  return e ? e.substring(0, 10) : "";
}
function cl(e) {
  return e ? `${e}T00:00:00Z` : null;
}
function ue(e, i) {
  if (!e) return "";
  const a = i ?? pe(), l = new Date(e), o = new Intl.DateTimeFormat("en-CA", {
    timeZone: a,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).formatToParts(l), t = {};
  return o.forEach(({ type: v, value: d }) => {
    t[v] = d;
  }), `${t.year}-${t.month}-${t.day}T${t.hour}:${t.minute}`;
}
function fl(e, i) {
  if (!e) return null;
  const a = i ?? pe(), l = /* @__PURE__ */ new Date(`${e}:00Z`), o = dl(l, a);
  return new Date(l.getTime() + o * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const vl = ["id", "value", "readonly", "min", "max"], pl = /* @__PURE__ */ E({
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
    max: {},
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = m(() => re(l.modelValue)), w = m(() => l.min ? re(l.min) : void 0), g = m(() => l.max ? re(l.max) : void 0);
    function I(S) {
      p();
      const B = S.target.value;
      o("update:modelValue", cl(B));
    }
    return (S, B) => (u(), G(J, {
      id: c(t),
      label: e.label,
      "label-classes": c(T),
      "icon-class": "fa-calendar",
      "have-value": c(v),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: Y(() => [
        k("input", {
          id: c(t),
          type: "date",
          class: C(["form-control", { "is-invalid": V.value }]),
          value: b.value,
          readonly: e.readonly,
          min: w.value,
          max: g.value,
          onChange: I
        }, null, 42, vl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), ml = ["id", "value", "readonly", "min", "max"], yl = ["title"], hl = /* @__PURE__ */ E({
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
    max: {},
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = m(() => l.timezone ?? pe()), w = m(
      () => ue(l.modelValue, b.value)
    ), g = m(
      () => l.min ? ue(l.min, b.value) : void 0
    ), I = m(
      () => l.max ? ue(l.max, b.value) : void 0
    );
    function S(B) {
      p();
      const r = B.target.value;
      o("update:modelValue", fl(r, b.value));
    }
    return (B, r) => (u(), G(J, {
      id: c(t),
      label: e.label,
      "label-classes": c(T),
      "icon-class": "fa-clock",
      "have-value": c(v),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: Y(() => [
        k("input", {
          id: c(t),
          type: "datetime-local",
          class: C(["form-control", { "is-invalid": V.value }]),
          value: w.value,
          readonly: e.readonly,
          min: g.value,
          max: I.value,
          onChange: S
        }, null, 42, ml),
        e.timezone ? (u(), f("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${b.value}`
        }, [...r[0] || (r[0] = [
          k("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, yl)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), bl = ["id", "value", "disabled"], gl = ["disabled"], xl = ["value"], kl = /* @__PURE__ */ E({
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
    optionValue: { type: [String, Function] },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = ["Lookup", "User"];
    function w(r) {
      return typeof l.optionValue == "function" ? l.optionValue(r) : typeof l.optionValue == "string" ? typeof r == "string" || typeof r == "number" ? r : r[l.optionValue] ?? null : typeof r == "string" || typeof r == "number" ? r : l.spType && b.includes(l.spType) ? r.Id ?? null : r;
    }
    const g = m(() => {
      var r;
      return (r = l.options) != null && r.length ? l.options.map((s) => {
        const n = ee(s, l.optionLabel), y = w(s), M = y == null ? "" : typeof y == "object" ? JSON.stringify(y) : String(y);
        return { label: n, value: y, key: M };
      }) : [];
    }), I = m(() => {
      const r = l.modelValue;
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
    function S(r) {
      p();
      const n = r.target.value;
      if (n === "") {
        o("update:modelValue", null);
        return;
      }
      const y = g.value.find((M) => M.key === n);
      o("update:modelValue", y ? y.value : null);
    }
    function B(r) {
      r.key !== "Delete" && r.key !== "Backspace" || l.readonly || (r.preventDefault(), o("update:modelValue", null));
    }
    return (r, s) => (u(), G(J, {
      id: c(t),
      label: e.label,
      "label-classes": c(T),
      "icon-class": "fa-list-ul",
      "have-value": c(v),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "Please select a value"
    }, {
      default: Y(() => [
        k("select", {
          id: c(t),
          class: C(["form-select", { "is-invalid": V.value }]),
          value: I.value,
          disabled: e.readonly,
          onChange: S,
          onKeydown: B,
          onBlur: s[0] || (s[0] = //@ts-ignore
          (...n) => c(p) && c(p)(...n))
        }, [
          k("option", {
            value: "",
            disabled: e.required
          }, F(e.placeholder ?? "Choose…"), 9, gl),
          (u(!0), f(j, null, Z(g.value, (n) => (u(), f("option", {
            key: n.key,
            value: n.key
          }, F(n.label), 9, xl))), 128))
        ], 42, bl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Vl = ["for"], $l = {
  key: 0,
  class: "input-group-text"
}, wl = ["aria-label", "onClick"], Cl = ["id", "placeholder"], Tl = ["aria-label"], Bl = ["aria-selected", "onMousedown", "onMouseover"], Il = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Pl = {
  key: 1,
  class: "invalid-feedback"
}, Sl = {
  key: 2,
  class: "input-group-text"
}, ql = /* @__PURE__ */ E({
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
    optionValue: { type: [String, Function] },
    errorMessage: {}
  },
  emits: ["update:modelValue", "search"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, labelClasses: v, touched: d, touch: T } = A(l), h = m(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
    ), p = m(() => h.value.length > 0), V = m(() => !l.required || p.value), b = m(() => d.value && !V.value);
    i({ requiredPass: V, touch: T });
    const w = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function g(x) {
      return typeof l.optionValue == "function" ? l.optionValue(x) : typeof l.optionValue == "string" ? typeof x == "string" || typeof x == "number" ? x : x[l.optionValue] ?? null : typeof x == "string" || typeof x == "number" ? x : l.spType && w.includes(l.spType) ? x.Id ?? null : x;
    }
    function I(x) {
      return x == null ? "" : typeof x == "object" ? JSON.stringify(x) : String(x);
    }
    const S = m(
      () => (l.options ?? []).map((x) => ({
        label: ee(x, l.optionLabel),
        value: g(x),
        key: I(g(x))
      }))
    ), B = m(() => new Set(h.value.map(I))), r = m(
      () => h.value.map((x) => {
        const q = I(x), L = S.value.find((K) => K.key === q);
        return { label: (L == null ? void 0 : L.label) ?? (q || String(x)), value: x, key: q };
      })
    ), s = U(""), n = U(!1), y = U(0), M = U(null), O = m(() => {
      const x = s.value.trim().toLowerCase();
      return S.value.filter((q) => B.value.has(q.key) ? !1 : x ? q.label.toLowerCase().includes(x) : !0);
    });
    X(O, (x) => {
      y.value >= x.length && (y.value = 0);
    });
    function R() {
      l.readonly || (n.value = !0, y.value = 0);
    }
    function _() {
      T(), n.value = !1, s.value = "", y.value = 0, o("search", "");
    }
    function le(x) {
      const q = [...h.value, x.value];
      o("update:modelValue", q), s.value = "", y.value = 0, ce(() => {
        var L;
        (L = M.value) == null || L.focus(), n.value = !0;
      });
    }
    function te(x) {
      const q = h.value.filter((L) => I(L) !== x);
      o("update:modelValue", q.length ? q : null);
    }
    function oe() {
      n.value = !0, y.value = 0, o("search", s.value);
    }
    function se() {
      R();
    }
    function $() {
      setTimeout(_, 150);
    }
    function D(x) {
      const q = O.value;
      switch (x.key) {
        case "ArrowDown":
          if (x.preventDefault(), !n.value) {
            R();
            return;
          }
          y.value = q.length ? (y.value + 1) % q.length : 0;
          break;
        case "ArrowUp":
          if (x.preventDefault(), !n.value) {
            R();
            return;
          }
          y.value = q.length ? (y.value - 1 + q.length) % q.length : 0;
          break;
        case "Enter":
          if (x.preventDefault(), n.value && q.length) {
            const L = y.value >= 0 && y.value < q.length ? y.value : 0;
            le(q[L]);
          }
          break;
        case "Escape":
          x.preventDefault(), _();
          break;
        case "Backspace":
          if (!s.value && h.value.length) {
            const L = r.value[r.value.length - 1];
            te(L.key);
          }
          break;
      }
    }
    return (x, q) => (u(), f("div", null, [
      e.label ? (u(), f("label", {
        key: 0,
        for: c(t),
        class: C(c(v))
      }, F(e.label), 11, Vl)) : P("", !0),
      k("div", {
        class: C(["input-group", { "has-validation": b.value }])
      }, [
        e.suppressPrefixIcon ? P("", !0) : (u(), f("span", $l, [...q[2] || (q[2] = [
          k("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        k("div", {
          class: C(["form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative", { "bg-body-secondary": e.readonly, "is-invalid": b.value }]),
          style: { cursor: "text", "min-height": "2.375rem" },
          onClick: q[1] || (q[1] = (L) => {
            var K;
            return (K = M.value) == null ? void 0 : K.focus();
          })
        }, [
          (u(!0), f(j, null, Z(r.value, (L) => (u(), f("span", {
            key: L.key,
            class: "badge rounded-pill bg-primary d-inline-flex align-items-center gap-1",
            style: { "font-size": "0.8em" }
          }, [
            ne(F(L.label) + " ", 1),
            e.readonly ? P("", !0) : (u(), f("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${L.label}`,
              onClick: ie((K) => te(L.key), ["stop"])
            }, null, 8, wl))
          ]))), 128)),
          e.readonly ? P("", !0) : fe((u(), f("input", {
            key: 0,
            id: c(t),
            ref_key: "inputRef",
            ref: M,
            type: "text",
            class: "border-0 p-0 flex-grow-1 bg-transparent",
            style: { outline: "none", "min-width": "8ch", "line-height": "inherit" },
            "onUpdate:modelValue": q[0] || (q[0] = (L) => s.value = L),
            placeholder: r.value.length ? "" : e.placeholder ?? "Type to search…",
            autocomplete: "off",
            onInput: oe,
            onFocus: se,
            onBlur: $,
            onKeydown: D
          }, null, 40, Cl)), [
            [ye, s.value]
          ]),
          n.value && O.value.length ? (u(), f("ul", {
            key: 1,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": e.label ?? "Suggestions"
          }, [
            (u(!0), f(j, null, Z(O.value, (L, K) => (u(), f("li", {
              key: L.key,
              role: "option",
              "aria-selected": K === y.value,
              class: C(["dropdown-item", { active: K === y.value }]),
              style: he(K === y.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ie((be) => le(L), ["prevent"]),
              onMouseover: (be) => y.value = K
            }, F(L.label), 47, Bl))), 128))
          ], 8, Tl)) : n.value && s.value && !O.value.length ? (u(), f("ul", Il, [...q[3] || (q[3] = [
            k("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : P("", !0)
        ], 2),
        b.value ? (u(), f("div", Pl, F(e.errorMessage ?? "Please select at least one value"), 1)) : P("", !0),
        e.required ? (u(), f("span", Sl, [
          k("i", {
            class: C(["fas fa-asterisk fa-xs", p.value ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : P("", !0)
      ], 2)
    ]));
  }
}), Ml = ["id", "value", "disabled", "title"], Ll = /* @__PURE__ */ E({
  __name: "FormControlColor",
  props: {
    modelValue: {},
    label: {},
    labelClass: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    function b(g) {
      p(), o("update:modelValue", g.target.value);
    }
    function w(g) {
      g.key !== "Delete" && g.key !== "Backspace" || l.readonly || (g.preventDefault(), o("update:modelValue", null));
    }
    return (g, I) => (u(), G(J, {
      id: c(t),
      label: e.label,
      "label-classes": c(T),
      "icon-class": "fa-palette",
      "have-value": c(v),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: Y(() => [
        k("input", {
          id: c(t),
          type: "color",
          class: C(["form-control form-control-color flex-grow-1", { "is-invalid": V.value }]),
          value: e.modelValue ?? "#000000",
          disabled: e.readonly,
          title: e.modelValue ?? "Choose a colour",
          onChange: b,
          onKeydown: w
        }, null, 42, Ml)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Fl = ["aria-labelledby"], Dl = ["id"], Nl = ["id", "type", "checked", "disabled", "name", "onClick"], Ol = ["for"], El = {
  key: 1,
  class: "invalid-feedback d-block"
}, me = /* @__PURE__ */ E({
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
    suppressPrefixIcon: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function w(n) {
      return typeof l.optionValue == "function" ? l.optionValue(n) : typeof l.optionValue == "string" ? typeof n == "string" || typeof n == "number" ? n : n[l.optionValue] ?? null : typeof n == "string" || typeof n == "number" ? n : l.spType && b.includes(l.spType) ? n.Id ?? null : n;
    }
    function g(n) {
      return n == null ? "" : typeof n == "object" ? JSON.stringify(n) : String(n);
    }
    const I = m(
      () => (l.options ?? []).map((n) => ({
        label: ee(n, l.optionLabel),
        value: w(n),
        key: g(w(n))
      }))
    ), S = m(
      () => l.multi && Array.isArray(l.modelValue) ? l.modelValue : []
    );
    function B(n) {
      return l.multi ? S.value.some((y) => g(y) === n) : g(l.modelValue) === n;
    }
    function r(n) {
      if (!l.readonly)
        if (p(), l.multi)
          if (S.value.some((M) => g(M) === n.key)) {
            const M = S.value.filter((O) => g(O) !== n.key);
            o("update:modelValue", M.length ? M : null);
          } else
            o("update:modelValue", [...S.value, n.value]);
        else
          g(l.modelValue) === n.key ? o("update:modelValue", null) : o("update:modelValue", n.value);
    }
    const s = m(
      () => l.multi ? "Please select at least one option" : "Please select an option"
    );
    return (n, y) => (u(), f("div", {
      role: "group",
      "aria-labelledby": e.label ? `${c(t)}-label` : void 0
    }, [
      e.label ? (u(), f("div", {
        key: 0,
        id: `${c(t)}-label`,
        class: C(c(T)),
        style: { "margin-bottom": "0.25rem" }
      }, [
        ne(F(e.label) + " ", 1),
        e.required ? (u(), f("i", {
          key: 0,
          class: C(["fas fa-asterisk fa-xs ms-1", c(v) ? "text-success" : "text-danger"])
        }, null, 2)) : P("", !0)
      ], 10, Dl)) : P("", !0),
      k("div", null, [
        (u(!0), f(j, null, Z(I.value, (M, O) => (u(), f("div", {
          key: M.key,
          class: C(["form-check", { "form-check-inline": !e.stacked }])
        }, [
          k("input", {
            id: `${c(t)}-opt-${O}`,
            type: e.multi ? "checkbox" : "radio",
            class: C(["form-check-input", { "is-invalid": V.value }]),
            checked: B(M.key),
            disabled: e.readonly,
            name: e.multi ? void 0 : c(t),
            onClick: (R) => r(M)
          }, null, 10, Nl),
          k("label", {
            for: `${c(t)}-opt-${O}`,
            class: "form-check-label"
          }, F(M.label), 9, Ol)
        ], 2))), 128))
      ]),
      V.value ? (u(), f("div", El, F(e.errorMessage ?? s.value), 1)) : P("", !0)
    ], 8, Fl));
  }
}), Ul = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], Al = /* @__PURE__ */ E({
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
    rows: { default: 3 },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    function b(w) {
      const g = w.target.value;
      o("update:modelValue", g === "" ? null : g);
    }
    return (w, g) => (u(), G(J, {
      id: c(t),
      label: e.label,
      "label-classes": c(T),
      "icon-class": "fa-pen-fancy",
      "have-value": c(v),
      required: e.required,
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: Y(() => [
        k("textarea", {
          id: c(t),
          class: C(["form-control", { "is-invalid": V.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          rows: e.rows,
          onInput: b,
          onBlur: g[0] || (g[0] = //@ts-ignore
          (...I) => c(p) && c(p)(...I))
        }, null, 42, Ul)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Rl = { class: "form-check form-switch" }, zl = ["id", "disabled"], Kl = ["for"], Yl = {
  key: 0,
  class: "invalid-feedback d-block"
}, jl = /* @__PURE__ */ E({
  __name: "FormControlSwitch",
  props: {
    modelValue: { type: [Boolean, null] },
    label: {},
    labelClass: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = m({
      get: () => l.modelValue === !0,
      set: (w) => {
        l.readonly || (p(), o("update:modelValue", w));
      }
    });
    return (w, g) => (u(), f("div", null, [
      k("div", Rl, [
        fe(k("input", {
          id: c(t),
          type: "checkbox",
          role: "switch",
          class: C(["form-check-input", { "is-invalid": V.value }]),
          "onUpdate:modelValue": g[0] || (g[0] = (I) => b.value = I),
          disabled: e.readonly
        }, null, 10, zl), [
          [xe, b.value]
        ]),
        k("label", {
          for: c(t),
          class: C(["form-check-label", ...c(T).filter((I) => I !== "form-label")])
        }, [
          ne(F(e.label) + " ", 1),
          e.required ? (u(), f("i", {
            key: 0,
            class: C(["fas fa-asterisk fa-xs ms-1", c(v) ? "text-success" : "text-danger"])
          }, null, 2)) : P("", !0)
        ], 10, Kl)
      ]),
      V.value ? (u(), f("div", Yl, F(e.errorMessage ?? "This field is required"), 1)) : P("", !0)
    ]));
  }
}), Zl = ["for"], Gl = { class: "input-group-text fw-semibold" }, Jl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], Hl = {
  key: 0,
  class: "invalid-feedback"
}, Wl = {
  key: 1,
  class: "input-group-text"
}, Xl = /* @__PURE__ */ E({
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
    step: {},
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = U(null), w = m(() => {
      var r;
      try {
        const s = l.locale ?? (typeof navigator < "u" ? navigator.language : "en-GB");
        return ((r = new Intl.NumberFormat(s, {
          style: "currency",
          currency: l.currency ?? "GBP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).formatToParts(0).find((y) => y.type === "currency")) == null ? void 0 : r.value) ?? l.currency ?? "£";
      } catch {
        return l.currency ?? "£";
      }
    }), g = m(() => l.min ?? -1 / 0), I = m(() => l.max ?? 1 / 0);
    function S(r) {
      const s = r.target.value;
      if (s === "") {
        o("update:modelValue", null);
        return;
      }
      const n = parseFloat(s);
      isNaN(n) || o("update:modelValue", n);
    }
    function B(r) {
      if (p(), r.target.value === "" || l.modelValue === null) return;
      const n = ve(g.value, I.value, l.modelValue);
      n !== l.modelValue && (o("update:modelValue", n), b.value && (b.value.value = String(n)));
    }
    return (r, s) => (u(), f("div", null, [
      e.label ? (u(), f("label", {
        key: 0,
        for: c(t),
        class: C(c(T))
      }, F(e.label), 11, Zl)) : P("", !0),
      k("div", {
        class: C(["input-group", { "has-validation": V.value }])
      }, [
        k("span", Gl, F(w.value), 1),
        k("input", {
          id: c(t),
          ref_key: "inputRef",
          ref: b,
          type: "number",
          class: C(["form-control", { "is-invalid": V.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: S,
          onBlur: B
        }, null, 42, Jl),
        V.value ? (u(), f("div", Hl, F(e.errorMessage ?? "This field is required"), 1)) : P("", !0),
        e.required ? (u(), f("span", Wl, [
          k("i", {
            class: C(["fas fa-asterisk fa-xs", c(v) ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : P("", !0)
      ], 2)
    ]));
  }
}), Ql = ["for"], _l = {
  key: 0,
  class: "input-group-text"
}, et = { class: "position-relative flex-grow-1 d-flex" }, lt = ["id", "placeholder", "readonly"], tt = ["aria-label"], at = ["aria-selected", "onMousedown", "onMouseover"], nt = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, ot = {
  key: 1,
  class: "invalid-feedback"
}, st = {
  key: 3,
  class: "input-group-text"
}, rt = /* @__PURE__ */ E({
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
    optionValue: { type: [String, Function] },
    errorMessage: {}
  },
  emits: ["update:modelValue", "search"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, { id: t, haveValue: v, requiredPass: d, labelClasses: T, touched: h, touch: p } = A(l), V = m(() => h.value && !d.value);
    i({ requiredPass: d, touch: p });
    const b = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function w($) {
      return typeof l.optionValue == "function" ? l.optionValue($) : typeof l.optionValue == "string" ? typeof $ == "string" || typeof $ == "number" ? $ : $[l.optionValue] ?? null : typeof $ == "string" || typeof $ == "number" ? $ : l.spType && b.includes(l.spType) ? $.Id ?? null : $;
    }
    function g($) {
      return $ == null ? "" : typeof $ == "object" ? JSON.stringify($) : String($);
    }
    const I = m(
      () => (l.options ?? []).map(($) => ({
        label: ee($, l.optionLabel),
        value: w($),
        key: g(w($))
      }))
    ), S = m(() => {
      if (l.modelValue === null || l.modelValue === void 0) return null;
      const $ = g(l.modelValue), D = I.value.find((x) => x.key === $);
      return (D == null ? void 0 : D.label) ?? String(l.modelValue);
    }), B = U(""), r = U(!1), s = U(0), n = U(null);
    X(S, ($) => {
      $ !== null && (B.value = $);
    }, { immediate: !0 });
    const y = m(() => {
      const $ = B.value.trim().toLowerCase(), D = g(l.modelValue);
      return I.value.filter((x) => x.key === D ? !1 : $ ? x.label.toLowerCase().includes($) : !0);
    });
    X(y, ($) => {
      s.value >= $.length && (s.value = 0);
    });
    function M() {
      l.readonly || (r.value = !0, s.value = 0);
    }
    function O() {
      p(), r.value = !1, s.value = 0, o("search", ""), S.value !== null && (B.value = S.value);
    }
    function R($) {
      o("update:modelValue", $.value), B.value = $.label, r.value = !1, o("search", "");
    }
    function _() {
      o("update:modelValue", null), B.value = "", o("search", ""), ce(() => {
        var $;
        return ($ = n.value) == null ? void 0 : $.focus();
      });
    }
    function le() {
      l.modelValue !== null && l.modelValue !== void 0 && o("update:modelValue", null), r.value = !0, s.value = 0, o("search", B.value);
    }
    function te() {
      M();
    }
    function oe() {
      setTimeout(O, 150);
    }
    function se($) {
      const D = y.value;
      switch ($.key) {
        case "ArrowDown":
          if ($.preventDefault(), !r.value) {
            M();
            return;
          }
          s.value = D.length ? (s.value + 1) % D.length : 0;
          break;
        case "ArrowUp":
          if ($.preventDefault(), !r.value) {
            M();
            return;
          }
          s.value = D.length ? (s.value - 1 + D.length) % D.length : 0;
          break;
        case "Enter":
          if ($.preventDefault(), r.value && D.length) {
            const x = s.value >= 0 && s.value < D.length ? s.value : 0;
            R(D[x]);
          }
          break;
        case "Escape":
          $.preventDefault(), O();
          break;
        case "Delete":
        case "Backspace":
          l.modelValue !== null && l.modelValue !== void 0 && !B.value && ($.preventDefault(), _());
          break;
      }
    }
    return ($, D) => (u(), f("div", null, [
      e.label ? (u(), f("label", {
        key: 0,
        for: c(t),
        class: C(c(T))
      }, F(e.label), 11, Ql)) : P("", !0),
      k("div", {
        class: C(["input-group", { "has-validation": V.value }])
      }, [
        e.suppressPrefixIcon ? P("", !0) : (u(), f("span", _l, [...D[1] || (D[1] = [
          k("i", { class: "fas fa-search" }, null, -1)
        ])])),
        k("div", et, [
          fe(k("input", {
            id: c(t),
            ref_key: "inputRef",
            ref: n,
            type: "text",
            class: C(["form-control border-end-0", { "is-invalid": V.value }]),
            "onUpdate:modelValue": D[0] || (D[0] = (x) => B.value = x),
            placeholder: e.placeholder ?? "Type to search…",
            readonly: e.readonly,
            autocomplete: "off",
            onInput: le,
            onFocus: te,
            onBlur: oe,
            onKeydown: se
          }, null, 42, lt), [
            [ye, B.value]
          ]),
          r.value && y.value.length ? (u(), f("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": e.label ?? "Suggestions"
          }, [
            (u(!0), f(j, null, Z(y.value, (x, q) => (u(), f("li", {
              key: x.key,
              role: "option",
              "aria-selected": q === s.value,
              class: C(["dropdown-item", { active: q === s.value }]),
              style: he(q === s.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ie((L) => R(x), ["prevent"]),
              onMouseover: (L) => s.value = q
            }, F(x.label), 47, at))), 128))
          ], 8, tt)) : r.value && B.value && !y.value.length ? (u(), f("ul", nt, [...D[2] || (D[2] = [
            k("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : P("", !0)
        ]),
        V.value ? (u(), f("div", ot, F(e.errorMessage ?? "Please select a value"), 1)) : P("", !0),
        c(v) && !e.readonly ? (u(), f("button", {
          key: 2,
          type: "button",
          class: "btn btn-outline-secondary",
          title: "Clear selection",
          "aria-label": "Clear selection",
          tabindex: "-1",
          onClick: _
        }, [...D[3] || (D[3] = [
          k("i", { class: "fas fa-times" }, null, -1)
        ])])) : P("", !0),
        e.required ? (u(), f("span", st, [
          k("i", {
            class: C(["fas fa-asterisk fa-xs", c(v) ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : P("", !0)
      ], 2)
    ]));
  }
}), ut = {
  key: 0,
  class: "form-text text-muted"
}, it = /* @__PURE__ */ E({
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
    errorMessage: {},
    minLength: {},
    requiredCharacters: {},
    mixedCase: { type: Boolean },
    mustMatch: {}
  },
  emits: ["update:modelValue", "search"],
  setup(e, { expose: i, emit: a }) {
    const l = e, o = a, t = m(() => l.type ? l.type : l.spType ? Ke[l.spType] : "text"), v = m(() => {
      if (l.maxlength !== void 0) return l.maxlength;
      if (l.spType) return Ye[l.spType];
    }), d = m(() => {
      switch (t.value) {
        case "password":
          return ol;
        case "number":
          return rl;
        case "percent":
          return il;
        case "date":
          return pl;
        case "datetime-local":
          return hl;
        case "select":
          return kl;
        case "lookupMulti":
          return ql;
        case "color":
          return Ll;
        case "checkboxes":
          return me;
        case "radio":
          return me;
        case "textarea":
          return Al;
        case "switch":
          return jl;
        case "currency":
          return Xl;
        case "lookup":
          return rt;
        case "text":
        default:
          return ll;
      }
    }), T = U(null), h = m(() => {
      var b;
      return ((b = T.value) == null ? void 0 : b.requiredPass) ?? !0;
    });
    function p() {
      var b, w;
      (w = (b = T.value) == null ? void 0 : b.touch) == null || w.call(b);
    }
    i({ requiredPass: h, touch: p });
    const V = m(() => ({
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
      maxlength: v.value,
      rows: l.rows,
      currency: l.currency,
      locale: l.locale,
      timezone: l.timezone,
      options: l.options,
      optionLabel: l.optionLabel,
      optionValue: l.optionValue,
      optionStrict: l.optionStrict,
      errorMessage: l.errorMessage,
      minLength: l.minLength,
      requiredCharacters: l.requiredCharacters,
      mixedCase: l.mixedCase,
      mustMatch: l.mustMatch
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }));
    return (b, w) => (u(), f("div", null, [
      (u(), G(ke(d.value), Ve({
        ref_key: "innerRef",
        ref: T
      }, V.value, {
        "onUpdate:modelValue": w[0] || (w[0] = (g) => o("update:modelValue", g)),
        onSearch: w[1] || (w[1] = (g) => o("search", g))
      }), null, 16)),
      e.helpText ? (u(), f("div", ut, F(e.helpText), 1)) : P("", !0)
    ]));
  }
}), dt = {
  SpvAlert: $e,
  SpvModal: Pe,
  SpvToast: Fe,
  SpvOffcanvas: Ee,
  SpvNavTabs: ze,
  SpvFormControl: it
}, ft = {
  install(e) {
    for (const [i, a] of Object.entries(dt))
      e.component(i, a);
  }
};
export {
  $e as SpvAlert,
  it as SpvFormControl,
  Pe as SpvModal,
  ze as SpvNavTabs,
  Ee as SpvOffcanvas,
  Fe as SpvToast,
  ft as default
};
