import { defineComponent as E, openBlock as u, createElementBlock as f, normalizeClass as C, renderSlot as z, createCommentVNode as P, ref as U, onMounted as ne, onBeforeUnmount as de, watch as X, createElementVNode as x, toDisplayString as F, nextTick as ce, Fragment as j, renderList as Z, computed as m, createBlock as G, unref as c, withCtx as Y, createVNode as ge, createTextVNode as oe, withModifiers as ae, withDirectives as me, vModelText as ye, normalizeStyle as he, resolveDynamicComponent as xe, mergeProps as ke } from "vue";
const Ve = /* @__PURE__ */ E({
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
}), $e = { class: "modal-content" }, we = {
  key: 0,
  class: "modal-header"
}, Ce = { class: "modal-title" }, Te = { class: "modal-body" }, Be = {
  key: 1,
  class: "modal-footer"
}, Ie = /* @__PURE__ */ E({
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
    ne(() => {
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
      x("div", {
        class: C(v())
      }, [
        x("div", $e, [
          e.title || d.$slots.header ? (u(), f("div", we, [
            z(d.$slots, "header", {}, () => [
              x("h5", Ce, F(e.title), 1)
            ]),
            x("button", {
              type: "button",
              class: "btn-close",
              onClick: T[0] || (T[0] = (h) => l("update:modelValue", !1))
            })
          ])) : P("", !0),
          x("div", Te, [
            z(d.$slots, "default")
          ]),
          d.$slots.footer ? (u(), f("div", Be, [
            z(d.$slots, "footer")
          ])) : P("", !0)
        ])
      ], 2)
    ], 512));
  }
}), Pe = {
  key: 0,
  class: "toast-header"
}, Se = {
  key: 0,
  class: "me-auto"
}, qe = { key: 1 }, Me = { class: "toast-body" }, Le = /* @__PURE__ */ E({
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
    return ne(() => {
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
      e.title || e.subtitle ? (u(), f("div", Pe, [
        z(v.$slots, "header", {}, () => [
          e.title ? (u(), f("strong", Se, F(e.title), 1)) : P("", !0),
          e.subtitle ? (u(), f("small", qe, F(e.subtitle), 1)) : P("", !0)
        ]),
        x("button", {
          type: "button",
          class: "btn-close",
          onClick: d[0] || (d[0] = (T) => l("update:modelValue", !1))
        })
      ])) : P("", !0),
      x("div", Me, [
        z(v.$slots, "default")
      ])
    ], 2));
  }
}), Fe = { class: "offcanvas-header" }, De = { class: "offcanvas-title" }, Ne = { class: "offcanvas-body" }, Oe = /* @__PURE__ */ E({
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
    return ne(() => {
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
      x("div", Fe, [
        z(v.$slots, "header", {}, () => [
          x("h5", De, F(e.title), 1)
        ]),
        x("button", {
          type: "button",
          class: "btn-close",
          onClick: d[0] || (d[0] = (T) => l("update:modelValue", !1))
        })
      ]),
      x("div", Ne, [
        z(v.$slots, "default")
      ])
    ], 2));
  }
}), Ee = ["data-bs-toggle", "data-bs-target", "aria-controls", "aria-selected", "onShown"], Ue = { class: "tab-content" }, Ae = ["id"], Re = /* @__PURE__ */ E({
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
    ne(() => {
      ce(() => t(a.modelValue));
    }), X(() => a.modelValue, (d) => t(d));
    function v(d) {
      l("update:modelValue", d), l("change", d);
    }
    return (d, T) => (u(), f("div", null, [
      x("ul", {
        class: C(["nav", e.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (u(!0), f(j, null, Z(e.tabs, (h) => (u(), f("li", {
          key: h.key,
          class: "nav-item",
          role: "presentation"
        }, [
          x("button", {
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
          }, F(h.label), 43, Ee)
        ]))), 128))
      ], 2),
      x("div", Ue, [
        (u(!0), f(j, null, Z(e.tabs, (h) => (u(), f("div", {
          id: `tab-pane-${h.key}`,
          key: h.key,
          class: C(["tab-pane", "fade", { "show active": e.modelValue === h.key }]),
          role: "tabpanel"
        }, [
          z(d.$slots, h.key)
        ], 10, Ae))), 128))
      ])
    ]));
  }
}), ze = {
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
}, Ke = {
  Text: 255
  // SP enforces 255 char limit on single-line text fields
}, Ye = ["for"], je = {
  key: 0,
  class: "input-group-text"
}, Ze = {
  key: 1,
  class: "invalid-feedback"
}, Ge = {
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
      }, F(e.label), 11, Ye)) : P("", !0),
      x("div", {
        class: C(["input-group", { "has-validation": e.isInvalid }])
      }, [
        !e.suppressPrefixIcon && e.iconClass ? (u(), f("span", je, [
          x("i", {
            class: C(["fas", e.iconClass])
          }, null, 2)
        ])) : P("", !0),
        z(i.$slots, "default"),
        e.isInvalid && e.errorMessage ? (u(), f("div", Ze, F(e.errorMessage), 1)) : P("", !0),
        z(i.$slots, "suffix"),
        e.required ? (u(), f("span", Ge, [
          x("i", {
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
function Je(e) {
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
}), fe = /* @__PURE__ */ Je(function(i, a, l) {
  if (i > a)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return l < i ? i : l > a ? a : l;
});
function He() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function A(e) {
  const i = He(), a = m(() => {
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
const We = [
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
  for (const a of We)
    if (a in e && e[a] != null) return String(e[a]);
  return JSON.stringify(e);
}
const Xe = ["id", "value", "placeholder", "readonly", "maxlength", "list"], Qe = ["id"], _e = ["value"], el = /* @__PURE__ */ E({
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
    const k = m(() => {
      var r;
      return (r = l.options) != null && r.length ? `${t}-list` : void 0;
    }), q = m(() => {
      var r;
      return (r = l.options) != null && r.length ? l.options.map((s) => ee(s, l.optionLabel)) : [];
    });
    function B(r) {
      const s = r.target.value;
      o("update:modelValue", s === "" ? null : s);
    }
    function I(r) {
      var O;
      if (p(), !l.optionStrict || !((O = l.options) != null && O.length)) return;
      const s = r.target, n = s.value;
      if (!n) {
        V.value = !0;
        return;
      }
      const y = n.toLowerCase(), M = q.value.find((R) => R.toLowerCase() === y);
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
        x("input", {
          id: c(t),
          type: "text",
          class: C(["form-control", { "is-invalid": w.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          list: k.value,
          onInput: B,
          onBlur: I
        }, null, 42, Xe),
        k.value ? (u(), f("datalist", {
          key: 0,
          id: k.value
        }, [
          (u(!0), f(j, null, Z(q.value, (n) => (u(), f("option", {
            key: n,
            value: n
          }, null, 8, _e))), 128))
        ], 8, Qe)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), ll = ["id", "type", "value", "placeholder", "readonly"], tl = ["title", "aria-label", "aria-pressed"], al = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, nl = /* @__PURE__ */ E({
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
    }), k = m(() => w.value.every((s) => s.passed)), q = m(() => w.value.length > 0), B = m(() => !l.required && !q.value ? !0 : l.required && !v.value ? !1 : k.value), I = m(() => T.value && !B.value);
    i({ requiredPass: B, touch: h });
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
        "have-value": k.value && c(v),
        required: e.required || q.value,
        readonly: e.readonly,
        "suppress-prefix-icon": e.suppressPrefixIcon,
        "is-invalid": I.value,
        "error-message": e.errorMessage ?? "This field is required"
      }, {
        suffix: Y(() => [
          x("button", {
            type: "button",
            class: "btn btn-outline-secondary",
            title: p.value ? "Hide password" : "Show password",
            "aria-label": p.value ? "Hide password" : "Show password",
            "aria-pressed": p.value,
            tabindex: "-1",
            onClick: n[1] || (n[1] = (y) => p.value = !p.value)
          }, [
            x("i", {
              class: C(["fas", p.value ? "fa-eye-slash" : "fa-eye"])
            }, null, 2)
          ], 8, tl)
        ]),
        default: Y(() => [
          x("input", {
            id: c(t),
            type: p.value ? "text" : "password",
            class: C(["form-control", { "is-invalid": I.value }]),
            value: e.modelValue ?? "",
            placeholder: e.placeholder,
            readonly: e.readonly,
            autocomplete: "current-password",
            onInput: r,
            onBlur: n[0] || (n[0] = //@ts-ignore
            (...y) => c(h) && c(h)(...y))
          }, null, 42, ll)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]),
      q.value && V.value ? (u(), f("ul", al, [
        (u(!0), f(j, null, Z(w.value, (y) => (u(), f("li", {
          key: y.key,
          class: C(y.passed ? "text-success" : "text-danger")
        }, [
          x("i", {
            class: C(["fas fa-xs me-1", y.passed ? "fa-check" : "fa-times"])
          }, null, 2),
          oe(" " + F(y.label), 1)
        ], 2))), 128))
      ])) : P("", !0)
    ]));
  }
}), ol = ["id", "value", "placeholder", "readonly", "min", "max", "step"], sl = /* @__PURE__ */ E({
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
    function k(q) {
      const B = q.target.value;
      if (B === "" || B === "-") {
        o("update:modelValue", null);
        return;
      }
      const I = parseFloat(B);
      if (isNaN(I)) {
        b.value && (b.value.value = w.value);
        return;
      }
      const r = W(l.min) ? Number.NEGATIVE_INFINITY : l.min, s = W(l.max) ? Number.POSITIVE_INFINITY : l.max, n = fe(r, s, I);
      n !== I && b.value && (b.value.value = String(n)), o("update:modelValue", n);
    }
    return (q, B) => (u(), G(J, {
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
        x("input", {
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
          onInput: k,
          onBlur: B[0] || (B[0] = //@ts-ignore
          (...I) => c(p) && c(p)(...I))
        }, null, 42, ol)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), rl = ["id", "value", "placeholder", "readonly", "min", "max"], ul = /* @__PURE__ */ E({
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
    function k(r) {
      const s = w(r), n = r * 100;
      return w(n) > s + 2 ? parseFloat(n.toFixed(s)).toString() : n.toString();
    }
    function q(r) {
      const s = w(r), n = r / 100;
      return parseFloat(n.toFixed(s + 2));
    }
    const B = m(() => W(l.modelValue) ? "" : k(l.modelValue));
    function I(r) {
      const s = r.target.value;
      if (s === "" || s === "-") {
        o("update:modelValue", null);
        return;
      }
      const n = parseFloat(s);
      if (isNaN(n)) {
        b.value && (b.value.value = B.value);
        return;
      }
      const y = W(l.min) ? Number.NEGATIVE_INFINITY : l.min, M = W(l.max) ? Number.POSITIVE_INFINITY : l.max, O = fe(y, M, n);
      O !== n && b.value && (b.value.value = String(O)), o("update:modelValue", q(O));
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
        x("input", {
          id: c(t),
          ref_key: "inputRef",
          ref: b,
          type: "number",
          class: C(["form-control", { "is-invalid": V.value }]),
          value: B.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          onInput: I,
          onBlur: s[0] || (s[0] = //@ts-ignore
          (...n) => c(p) && c(p)(...n))
        }, null, 42, rl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
});
function ve() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function il(e, i) {
  const a = new Date(e.toLocaleString("en-US", { timeZone: "UTC" })), l = new Date(e.toLocaleString("en-US", { timeZone: i }));
  return (a.getTime() - l.getTime()) / 6e4;
}
function ue(e) {
  return e ? e.substring(0, 10) : "";
}
function dl(e) {
  return e ? `${e}T00:00:00Z` : null;
}
function ie(e, i) {
  if (!e) return "";
  const a = i ?? ve(), l = new Date(e), o = new Intl.DateTimeFormat("en-CA", {
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
function cl(e, i) {
  if (!e) return null;
  const a = i ?? ve(), l = /* @__PURE__ */ new Date(`${e}:00Z`), o = il(l, a);
  return new Date(l.getTime() + o * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const fl = ["id", "value", "readonly", "min", "max"], vl = /* @__PURE__ */ E({
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
    const b = m(() => ue(l.modelValue)), w = m(() => l.min ? ue(l.min) : void 0), k = m(() => l.max ? ue(l.max) : void 0);
    function q(B) {
      p();
      const I = B.target.value;
      o("update:modelValue", dl(I));
    }
    return (B, I) => (u(), G(J, {
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
        x("input", {
          id: c(t),
          type: "date",
          class: C(["form-control", { "is-invalid": V.value }]),
          value: b.value,
          readonly: e.readonly,
          min: w.value,
          max: k.value,
          onChange: q
        }, null, 42, fl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), pl = ["id", "value", "readonly", "min", "max"], ml = ["title"], yl = /* @__PURE__ */ E({
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
    const b = m(() => l.timezone ?? ve()), w = m(
      () => ie(l.modelValue, b.value)
    ), k = m(
      () => l.min ? ie(l.min, b.value) : void 0
    ), q = m(
      () => l.max ? ie(l.max, b.value) : void 0
    );
    function B(I) {
      p();
      const r = I.target.value;
      o("update:modelValue", cl(r, b.value));
    }
    return (I, r) => (u(), G(J, {
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
        x("input", {
          id: c(t),
          type: "datetime-local",
          class: C(["form-control", { "is-invalid": V.value }]),
          value: w.value,
          readonly: e.readonly,
          min: k.value,
          max: q.value,
          onChange: B
        }, null, 42, pl),
        e.timezone ? (u(), f("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${b.value}`
        }, [...r[0] || (r[0] = [
          x("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, ml)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), hl = ["id", "value", "disabled"], bl = ["disabled"], gl = ["value"], xl = /* @__PURE__ */ E({
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
    const k = m(() => {
      var r;
      return (r = l.options) != null && r.length ? l.options.map((s) => {
        const n = ee(s, l.optionLabel), y = w(s), M = y == null ? "" : typeof y == "object" ? JSON.stringify(y) : String(y);
        return { label: n, value: y, key: M };
      }) : [];
    }), q = m(() => {
      const r = l.modelValue;
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
    function B(r) {
      p();
      const n = r.target.value;
      if (n === "") {
        o("update:modelValue", null);
        return;
      }
      const y = k.value.find((M) => M.key === n);
      o("update:modelValue", y ? y.value : null);
    }
    function I(r) {
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
        x("select", {
          id: c(t),
          class: C(["form-select", { "is-invalid": V.value }]),
          value: q.value,
          disabled: e.readonly,
          onChange: B,
          onKeydown: I,
          onBlur: s[0] || (s[0] = //@ts-ignore
          (...n) => c(p) && c(p)(...n))
        }, [
          x("option", {
            value: "",
            disabled: e.required
          }, F(e.placeholder ?? "Choose…"), 9, bl),
          (u(!0), f(j, null, Z(k.value, (n) => (u(), f("option", {
            key: n.key,
            value: n.key
          }, F(n.label), 9, gl))), 128))
        ], 42, hl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), kl = ["for"], Vl = {
  key: 0,
  class: "input-group-text"
}, $l = ["aria-label", "onClick"], wl = ["id", "placeholder"], Cl = ["aria-label"], Tl = ["aria-selected", "onMousedown", "onMouseover"], Bl = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Il = {
  key: 1,
  class: "invalid-feedback"
}, Pl = {
  key: 2,
  class: "input-group-text"
}, Sl = /* @__PURE__ */ E({
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
    function k(g) {
      return typeof l.optionValue == "function" ? l.optionValue(g) : typeof l.optionValue == "string" ? typeof g == "string" || typeof g == "number" ? g : g[l.optionValue] ?? null : typeof g == "string" || typeof g == "number" ? g : l.spType && w.includes(l.spType) ? g.Id ?? null : g;
    }
    function q(g) {
      return g == null ? "" : typeof g == "object" ? JSON.stringify(g) : String(g);
    }
    const B = m(
      () => (l.options ?? []).map((g) => ({
        label: ee(g, l.optionLabel),
        value: k(g),
        key: q(k(g))
      }))
    ), I = m(() => new Set(h.value.map(q))), r = m(
      () => h.value.map((g) => {
        const S = q(g), L = B.value.find((K) => K.key === S);
        return { label: (L == null ? void 0 : L.label) ?? (S || String(g)), value: g, key: S };
      })
    ), s = U(""), n = U(!1), y = U(0), M = U(null), O = m(() => {
      const g = s.value.trim().toLowerCase();
      return B.value.filter((S) => I.value.has(S.key) ? !1 : g ? S.label.toLowerCase().includes(g) : !0);
    });
    X(O, (g) => {
      y.value >= g.length && (y.value = 0);
    });
    function R() {
      l.readonly || (n.value = !0, y.value = 0);
    }
    function _() {
      T(), n.value = !1, s.value = "", y.value = 0, o("search", "");
    }
    function le(g) {
      const S = [...h.value, g.value];
      o("update:modelValue", S), s.value = "", y.value = 0, ce(() => {
        var L;
        (L = M.value) == null || L.focus(), n.value = !0;
      });
    }
    function te(g) {
      const S = h.value.filter((L) => q(L) !== g);
      o("update:modelValue", S.length ? S : null);
    }
    function se() {
      n.value = !0, y.value = 0, o("search", s.value);
    }
    function re() {
      R();
    }
    function $() {
      setTimeout(_, 150);
    }
    function D(g) {
      const S = O.value;
      switch (g.key) {
        case "ArrowDown":
          if (g.preventDefault(), !n.value) {
            R();
            return;
          }
          y.value = S.length ? (y.value + 1) % S.length : 0;
          break;
        case "ArrowUp":
          if (g.preventDefault(), !n.value) {
            R();
            return;
          }
          y.value = S.length ? (y.value - 1 + S.length) % S.length : 0;
          break;
        case "Enter":
          if (g.preventDefault(), n.value && S.length) {
            const L = y.value >= 0 && y.value < S.length ? y.value : 0;
            le(S[L]);
          }
          break;
        case "Escape":
          g.preventDefault(), _();
          break;
        case "Backspace":
          if (!s.value && h.value.length) {
            const L = r.value[r.value.length - 1];
            te(L.key);
          }
          break;
      }
    }
    return (g, S) => (u(), f("div", null, [
      e.label ? (u(), f("label", {
        key: 0,
        for: c(t),
        class: C(c(v))
      }, F(e.label), 11, kl)) : P("", !0),
      x("div", {
        class: C(["input-group", { "has-validation": b.value }])
      }, [
        e.suppressPrefixIcon ? P("", !0) : (u(), f("span", Vl, [...S[2] || (S[2] = [
          x("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        x("div", {
          class: C(["form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative", { "bg-body-secondary": e.readonly, "is-invalid": b.value }]),
          style: { cursor: "text", "min-height": "2.375rem" },
          onClick: S[1] || (S[1] = (L) => {
            var K;
            return (K = M.value) == null ? void 0 : K.focus();
          })
        }, [
          (u(!0), f(j, null, Z(r.value, (L) => (u(), f("span", {
            key: L.key,
            class: "badge rounded-pill bg-primary d-inline-flex align-items-center gap-1",
            style: { "font-size": "0.8em" }
          }, [
            oe(F(L.label) + " ", 1),
            e.readonly ? P("", !0) : (u(), f("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${L.label}`,
              onClick: ae((K) => te(L.key), ["stop"])
            }, null, 8, $l))
          ]))), 128)),
          e.readonly ? P("", !0) : me((u(), f("input", {
            key: 0,
            id: c(t),
            ref_key: "inputRef",
            ref: M,
            type: "text",
            class: "border-0 p-0 flex-grow-1 bg-transparent",
            style: { outline: "none", "min-width": "8ch", "line-height": "inherit" },
            "onUpdate:modelValue": S[0] || (S[0] = (L) => s.value = L),
            placeholder: r.value.length ? "" : e.placeholder ?? "Type to search…",
            autocomplete: "off",
            onInput: se,
            onFocus: re,
            onBlur: $,
            onKeydown: D
          }, null, 40, wl)), [
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
              onMousedown: ae((be) => le(L), ["prevent"]),
              onMouseover: (be) => y.value = K
            }, F(L.label), 47, Tl))), 128))
          ], 8, Cl)) : n.value && s.value && !O.value.length ? (u(), f("ul", Bl, [...S[3] || (S[3] = [
            x("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : P("", !0)
        ], 2),
        b.value ? (u(), f("div", Il, F(e.errorMessage ?? "Please select at least one value"), 1)) : P("", !0),
        e.required ? (u(), f("span", Pl, [
          x("i", {
            class: C(["fas fa-asterisk fa-xs", p.value ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : P("", !0)
      ], 2)
    ]));
  }
}), ql = ["id", "value", "disabled", "title"], Ml = /* @__PURE__ */ E({
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
    function b(k) {
      p(), o("update:modelValue", k.target.value);
    }
    function w(k) {
      k.key !== "Delete" && k.key !== "Backspace" || l.readonly || (k.preventDefault(), o("update:modelValue", null));
    }
    return (k, q) => (u(), G(J, {
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
        x("input", {
          id: c(t),
          type: "color",
          class: C(["form-control form-control-color flex-grow-1", { "is-invalid": V.value }]),
          value: e.modelValue ?? "#000000",
          disabled: e.readonly,
          title: e.modelValue ?? "Choose a colour",
          onChange: b,
          onKeydown: w
        }, null, 42, ql)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Ll = ["aria-labelledby"], Fl = ["id"], Dl = ["id", "type", "checked", "disabled", "name", "onClick"], Nl = ["for"], Ol = {
  key: 1,
  class: "invalid-feedback d-block"
}, pe = /* @__PURE__ */ E({
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
    function k(n) {
      return n == null ? "" : typeof n == "object" ? JSON.stringify(n) : String(n);
    }
    const q = m(
      () => (l.options ?? []).map((n) => ({
        label: ee(n, l.optionLabel),
        value: w(n),
        key: k(w(n))
      }))
    ), B = m(
      () => l.multi && Array.isArray(l.modelValue) ? l.modelValue : []
    );
    function I(n) {
      return l.multi ? B.value.some((y) => k(y) === n) : k(l.modelValue) === n;
    }
    function r(n) {
      if (!l.readonly)
        if (p(), l.multi)
          if (B.value.some((M) => k(M) === n.key)) {
            const M = B.value.filter((O) => k(O) !== n.key);
            o("update:modelValue", M.length ? M : null);
          } else
            o("update:modelValue", [...B.value, n.value]);
        else
          k(l.modelValue) === n.key ? o("update:modelValue", null) : o("update:modelValue", n.value);
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
        oe(F(e.label) + " ", 1),
        e.required ? (u(), f("i", {
          key: 0,
          class: C(["fas fa-asterisk fa-xs ms-1", c(v) ? "text-success" : "text-danger"])
        }, null, 2)) : P("", !0)
      ], 10, Fl)) : P("", !0),
      x("div", null, [
        (u(!0), f(j, null, Z(q.value, (M, O) => (u(), f("div", {
          key: M.key,
          class: C(["form-check", { "form-check-inline": !e.stacked }])
        }, [
          x("input", {
            id: `${c(t)}-opt-${O}`,
            type: e.multi ? "checkbox" : "radio",
            class: C(["form-check-input", { "is-invalid": V.value }]),
            checked: I(M.key),
            disabled: e.readonly,
            name: e.multi ? void 0 : c(t),
            onClick: (R) => r(M)
          }, null, 10, Dl),
          x("label", {
            for: `${c(t)}-opt-${O}`,
            class: "form-check-label"
          }, F(M.label), 9, Nl)
        ], 2))), 128))
      ]),
      V.value ? (u(), f("div", Ol, F(e.errorMessage ?? s.value), 1)) : P("", !0)
    ], 8, Ll));
  }
}), El = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], Ul = /* @__PURE__ */ E({
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
      const k = w.target.value;
      o("update:modelValue", k === "" ? null : k);
    }
    return (w, k) => (u(), G(J, {
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
        x("textarea", {
          id: c(t),
          class: C(["form-control", { "is-invalid": V.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          rows: e.rows,
          onInput: b,
          onBlur: k[0] || (k[0] = //@ts-ignore
          (...q) => c(p) && c(p)(...q))
        }, null, 42, El)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Al = { class: "form-check form-switch" }, Rl = ["id", "checked", "disabled"], zl = ["for"], Kl = {
  key: 0,
  class: "invalid-feedback d-block"
}, Yl = /* @__PURE__ */ E({
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
    const b = m(() => l.modelValue === !0);
    function w() {
      l.readonly || (p(), o("update:modelValue", l.modelValue !== !0));
    }
    return (k, q) => (u(), f("div", null, [
      x("div", Al, [
        x("input", {
          id: c(t),
          type: "checkbox",
          role: "switch",
          class: C(["form-check-input", { "is-invalid": V.value }]),
          checked: b.value,
          disabled: e.readonly,
          onClick: ae(w, ["prevent"])
        }, null, 10, Rl),
        x("label", {
          for: c(t),
          class: C(["form-check-label", ...c(T).filter((B) => B !== "form-label")])
        }, [
          oe(F(e.label) + " ", 1),
          e.required ? (u(), f("i", {
            key: 0,
            class: C(["fas fa-asterisk fa-xs ms-1", c(v) ? "text-success" : "text-danger"])
          }, null, 2)) : P("", !0)
        ], 10, zl)
      ]),
      V.value ? (u(), f("div", Kl, F(e.errorMessage ?? "This field is required"), 1)) : P("", !0)
    ]));
  }
}), jl = ["for"], Zl = { class: "input-group-text fw-semibold" }, Gl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], Jl = {
  key: 0,
  class: "invalid-feedback"
}, Hl = {
  key: 1,
  class: "input-group-text"
}, Wl = /* @__PURE__ */ E({
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
    }), k = m(() => l.min ?? -1 / 0), q = m(() => l.max ?? 1 / 0);
    function B(r) {
      const s = r.target.value;
      if (s === "") {
        o("update:modelValue", null);
        return;
      }
      const n = parseFloat(s);
      isNaN(n) || o("update:modelValue", n);
    }
    function I(r) {
      if (p(), r.target.value === "" || l.modelValue === null) return;
      const n = fe(k.value, q.value, l.modelValue);
      n !== l.modelValue && (o("update:modelValue", n), b.value && (b.value.value = String(n)));
    }
    return (r, s) => (u(), f("div", null, [
      e.label ? (u(), f("label", {
        key: 0,
        for: c(t),
        class: C(c(T))
      }, F(e.label), 11, jl)) : P("", !0),
      x("div", {
        class: C(["input-group", { "has-validation": V.value }])
      }, [
        x("span", Zl, F(w.value), 1),
        x("input", {
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
          onInput: B,
          onBlur: I
        }, null, 42, Gl),
        V.value ? (u(), f("div", Jl, F(e.errorMessage ?? "This field is required"), 1)) : P("", !0),
        e.required ? (u(), f("span", Hl, [
          x("i", {
            class: C(["fas fa-asterisk fa-xs", c(v) ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : P("", !0)
      ], 2)
    ]));
  }
}), Xl = ["for"], Ql = {
  key: 0,
  class: "input-group-text"
}, _l = { class: "position-relative flex-grow-1 d-flex" }, et = ["id", "placeholder", "readonly"], lt = ["aria-label"], tt = ["aria-selected", "onMousedown", "onMouseover"], at = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, nt = {
  key: 1,
  class: "invalid-feedback"
}, ot = {
  key: 3,
  class: "input-group-text"
}, st = /* @__PURE__ */ E({
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
    function k($) {
      return $ == null ? "" : typeof $ == "object" ? JSON.stringify($) : String($);
    }
    const q = m(
      () => (l.options ?? []).map(($) => ({
        label: ee($, l.optionLabel),
        value: w($),
        key: k(w($))
      }))
    ), B = m(() => {
      if (l.modelValue === null || l.modelValue === void 0) return null;
      const $ = k(l.modelValue), D = q.value.find((g) => g.key === $);
      return (D == null ? void 0 : D.label) ?? String(l.modelValue);
    }), I = U(""), r = U(!1), s = U(0), n = U(null);
    X(B, ($) => {
      $ !== null && (I.value = $);
    }, { immediate: !0 });
    const y = m(() => {
      const $ = I.value.trim().toLowerCase(), D = k(l.modelValue);
      return q.value.filter((g) => g.key === D ? !1 : $ ? g.label.toLowerCase().includes($) : !0);
    });
    X(y, ($) => {
      s.value >= $.length && (s.value = 0);
    });
    function M() {
      l.readonly || (r.value = !0, s.value = 0);
    }
    function O() {
      p(), r.value = !1, s.value = 0, o("search", ""), B.value !== null && (I.value = B.value);
    }
    function R($) {
      o("update:modelValue", $.value), I.value = $.label, r.value = !1, o("search", "");
    }
    function _() {
      o("update:modelValue", null), I.value = "", o("search", ""), ce(() => {
        var $;
        return ($ = n.value) == null ? void 0 : $.focus();
      });
    }
    function le() {
      l.modelValue !== null && l.modelValue !== void 0 && o("update:modelValue", null), r.value = !0, s.value = 0, o("search", I.value);
    }
    function te() {
      M();
    }
    function se() {
      setTimeout(O, 150);
    }
    function re($) {
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
            const g = s.value >= 0 && s.value < D.length ? s.value : 0;
            R(D[g]);
          }
          break;
        case "Escape":
          $.preventDefault(), O();
          break;
        case "Delete":
        case "Backspace":
          l.modelValue !== null && l.modelValue !== void 0 && !I.value && ($.preventDefault(), _());
          break;
      }
    }
    return ($, D) => (u(), f("div", null, [
      e.label ? (u(), f("label", {
        key: 0,
        for: c(t),
        class: C(c(T))
      }, F(e.label), 11, Xl)) : P("", !0),
      x("div", {
        class: C(["input-group", { "has-validation": V.value }])
      }, [
        e.suppressPrefixIcon ? P("", !0) : (u(), f("span", Ql, [...D[1] || (D[1] = [
          x("i", { class: "fas fa-search" }, null, -1)
        ])])),
        x("div", _l, [
          me(x("input", {
            id: c(t),
            ref_key: "inputRef",
            ref: n,
            type: "text",
            class: C(["form-control border-end-0", { "is-invalid": V.value }]),
            "onUpdate:modelValue": D[0] || (D[0] = (g) => I.value = g),
            placeholder: e.placeholder ?? "Type to search…",
            readonly: e.readonly,
            autocomplete: "off",
            onInput: le,
            onFocus: te,
            onBlur: se,
            onKeydown: re
          }, null, 42, et), [
            [ye, I.value]
          ]),
          r.value && y.value.length ? (u(), f("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": e.label ?? "Suggestions"
          }, [
            (u(!0), f(j, null, Z(y.value, (g, S) => (u(), f("li", {
              key: g.key,
              role: "option",
              "aria-selected": S === s.value,
              class: C(["dropdown-item", { active: S === s.value }]),
              style: he(S === s.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ae((L) => R(g), ["prevent"]),
              onMouseover: (L) => s.value = S
            }, F(g.label), 47, tt))), 128))
          ], 8, lt)) : r.value && I.value && !y.value.length ? (u(), f("ul", at, [...D[2] || (D[2] = [
            x("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : P("", !0)
        ]),
        V.value ? (u(), f("div", nt, F(e.errorMessage ?? "Please select a value"), 1)) : P("", !0),
        c(v) && !e.readonly ? (u(), f("button", {
          key: 2,
          type: "button",
          class: "btn btn-outline-secondary",
          title: "Clear selection",
          "aria-label": "Clear selection",
          tabindex: "-1",
          onClick: _
        }, [...D[3] || (D[3] = [
          x("i", { class: "fas fa-times" }, null, -1)
        ])])) : P("", !0),
        e.required ? (u(), f("span", ot, [
          x("i", {
            class: C(["fas fa-asterisk fa-xs", c(v) ? "text-success" : "text-danger"])
          }, null, 2)
        ])) : P("", !0)
      ], 2)
    ]));
  }
}), rt = {
  key: 0,
  class: "form-text text-muted"
}, ut = /* @__PURE__ */ E({
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
    const l = e, o = a, t = m(() => l.type ? l.type : l.spType ? ze[l.spType] : "text"), v = m(() => {
      if (l.maxlength !== void 0) return l.maxlength;
      if (l.spType) return Ke[l.spType];
    }), d = m(() => {
      switch (t.value) {
        case "password":
          return nl;
        case "number":
          return sl;
        case "percent":
          return ul;
        case "date":
          return vl;
        case "datetime-local":
          return yl;
        case "select":
          return xl;
        case "lookupMulti":
          return Sl;
        case "color":
          return Ml;
        case "checkboxes":
          return pe;
        case "radio":
          return pe;
        case "textarea":
          return Ul;
        case "switch":
          return Yl;
        case "currency":
          return Wl;
        case "lookup":
          return st;
        case "text":
        default:
          return el;
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
      (u(), G(xe(d.value), ke({
        ref_key: "innerRef",
        ref: T
      }, V.value, {
        "onUpdate:modelValue": w[0] || (w[0] = (k) => o("update:modelValue", k)),
        onSearch: w[1] || (w[1] = (k) => o("search", k))
      }), null, 16)),
      e.helpText ? (u(), f("div", rt, F(e.helpText), 1)) : P("", !0)
    ]));
  }
}), it = {
  SpvAlert: Ve,
  SpvModal: Ie,
  SpvToast: Le,
  SpvOffcanvas: Oe,
  SpvNavTabs: Re,
  SpvFormControl: ut
}, ct = {
  install(e) {
    for (const [i, a] of Object.entries(it))
      e.component(i, a);
  }
};
export {
  Ve as SpvAlert,
  ut as SpvFormControl,
  Ie as SpvModal,
  Re as SpvNavTabs,
  Oe as SpvOffcanvas,
  Le as SpvToast,
  ct as default
};
