import { defineComponent as A, openBlock as d, createElementBlock as p, normalizeClass as T, renderSlot as _, createCommentVNode as q, ref as E, onMounted as se, onBeforeUnmount as pe, watch as ee, createElementVNode as k, toDisplayString as N, nextTick as fe, Fragment as Z, renderList as G, createTextVNode as X, computed as v, createBlock as J, unref as n, withCtx as j, createVNode as ke, withModifiers as ce, withDirectives as ve, vModelText as be, normalizeStyle as ge, vModelCheckbox as Ve, resolveDynamicComponent as $e, mergeProps as we } from "vue";
const Ce = /* @__PURE__ */ A({
  __name: "SpvAlert",
  props: {
    variant: { default: "primary" },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismissed"],
  setup(l, { emit: i }) {
    const a = i;
    function e() {
      a("update:modelValue", !1), a("dismissed");
    }
    return (o, t) => l.modelValue ? (d(), p("div", {
      key: 0,
      class: T(["alert", `alert-${l.variant}`, { "alert-dismissible fade show": l.dismissible }]),
      role: "alert"
    }, [
      _(o.$slots, "default"),
      l.dismissible ? (d(), p("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "aria-label": "Close",
        onClick: e
      })) : q("", !0)
    ], 2)) : q("", !0);
  }
}), Te = { class: "modal-content" }, Be = {
  key: 0,
  class: "modal-header"
}, Ie = { class: "modal-title" }, Pe = { class: "modal-body" }, Se = {
  key: 1,
  class: "modal-footer"
}, qe = /* @__PURE__ */ A({
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
  setup(l, { emit: i }) {
    const a = l, e = i, o = E(null);
    let t = null;
    se(() => {
      o.value && (t = new window.bootstrap.Modal(o.value, {
        backdrop: a.staticBackdrop ? "static" : !0,
        keyboard: !a.staticBackdrop
      }), o.value.addEventListener("shown.bs.modal", () => e("shown")), o.value.addEventListener("hidden.bs.modal", () => {
        e("update:modelValue", !1), e("hidden");
      }), a.modelValue && t.show());
    }), pe(() => {
      t == null || t.dispose();
    }), ee(() => a.modelValue, (c) => {
      t && (c ? t.show() : t.hide());
    });
    const f = () => [
      "modal-dialog",
      a.size ? a.size === "fullscreen" ? "modal-fullscreen" : `modal-${a.size}` : "",
      { "modal-dialog-scrollable": a.scrollable },
      { "modal-dialog-centered": a.centered }
    ];
    return (c, w) => (d(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: "modal fade",
      tabindex: "-1"
    }, [
      k("div", {
        class: T(f())
      }, [
        k("div", Te, [
          l.title || c.$slots.header ? (d(), p("div", Be, [
            _(c.$slots, "header", {}, () => [
              k("h5", Ie, N(l.title), 1)
            ]),
            k("button", {
              type: "button",
              class: "btn-close",
              onClick: w[0] || (w[0] = (h) => e("update:modelValue", !1))
            })
          ])) : q("", !0),
          k("div", Pe, [
            _(c.$slots, "default")
          ]),
          c.$slots.footer ? (d(), p("div", Se, [
            _(c.$slots, "footer")
          ])) : q("", !0)
        ])
      ], 2)
    ], 512));
  }
}), Me = {
  key: 0,
  class: "toast-header"
}, Le = {
  key: 0,
  class: "me-auto"
}, Fe = { key: 1 }, De = { class: "toast-body" }, Ne = /* @__PURE__ */ A({
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
  setup(l, { emit: i }) {
    const a = l, e = i, o = E(null);
    let t = null;
    return se(() => {
      o.value && (t = new window.bootstrap.Toast(o.value, {
        autohide: a.autohide,
        delay: a.delay
      }), o.value.addEventListener("shown.bs.toast", () => e("shown")), o.value.addEventListener("hidden.bs.toast", () => {
        e("update:modelValue", !1), e("hidden");
      }), a.modelValue && t.show());
    }), pe(() => {
      t == null || t.dispose();
    }), ee(() => a.modelValue, (f) => {
      t && (f ? t.show() : t.hide());
    }), (f, c) => (d(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: T(["toast", l.variant ? `text-bg-${l.variant}` : ""]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      l.title || l.subtitle ? (d(), p("div", Me, [
        _(f.$slots, "header", {}, () => [
          l.title ? (d(), p("strong", Le, N(l.title), 1)) : q("", !0),
          l.subtitle ? (d(), p("small", Fe, N(l.subtitle), 1)) : q("", !0)
        ]),
        k("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (w) => e("update:modelValue", !1))
        })
      ])) : q("", !0),
      k("div", De, [
        _(f.$slots, "default")
      ])
    ], 2));
  }
}), Re = { class: "offcanvas-header" }, Oe = { class: "offcanvas-title" }, Ee = { class: "offcanvas-body" }, Ue = /* @__PURE__ */ A({
  __name: "SpvOffcanvas",
  props: {
    modelValue: { type: Boolean },
    title: {},
    placement: { default: "start" },
    staticBackdrop: { type: Boolean, default: !1 },
    scroll: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "shown", "hidden"],
  setup(l, { emit: i }) {
    const a = l, e = i, o = E(null);
    let t = null;
    return se(() => {
      o.value && (t = new window.bootstrap.Offcanvas(o.value, {
        backdrop: a.staticBackdrop ? "static" : !0,
        keyboard: !a.staticBackdrop,
        scroll: a.scroll
      }), o.value.addEventListener("shown.bs.offcanvas", () => e("shown")), o.value.addEventListener("hidden.bs.offcanvas", () => {
        e("update:modelValue", !1), e("hidden");
      }), a.modelValue && t.show());
    }), pe(() => {
      t == null || t.dispose();
    }), ee(() => a.modelValue, (f) => {
      t && (f ? t.show() : t.hide());
    }), (f, c) => (d(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: T(["offcanvas", `offcanvas-${l.placement}`]),
      tabindex: "-1"
    }, [
      k("div", Re, [
        _(f.$slots, "header", {}, () => [
          k("h5", Oe, N(l.title), 1)
        ]),
        k("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (w) => e("update:modelValue", !1))
        })
      ]),
      k("div", Ee, [
        _(f.$slots, "default")
      ])
    ], 2));
  }
}), Ae = ["data-bs-toggle", "data-bs-target", "aria-controls", "aria-selected", "onShown"], ze = { class: "tab-content" }, _e = ["id"], Ke = /* @__PURE__ */ A({
  __name: "SpvNavTabs",
  props: {
    modelValue: {},
    tabs: {},
    pills: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: i }) {
    const a = l, e = i, o = E({});
    function t(c) {
      const w = o.value[c];
      if (!w) return;
      window.bootstrap.Tab.getOrCreateInstance(w).show();
    }
    se(() => {
      fe(() => t(a.modelValue));
    }), ee(() => a.modelValue, (c) => t(c));
    function f(c) {
      e("update:modelValue", c), e("change", c);
    }
    return (c, w) => (d(), p("div", null, [
      k("ul", {
        class: T(["nav", l.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (d(!0), p(Z, null, G(l.tabs, (h) => (d(), p("li", {
          key: h.key,
          class: "nav-item",
          role: "presentation"
        }, [
          k("button", {
            ref_for: !0,
            ref: (x) => {
              x && (o.value[h.key] = x);
            },
            class: T(["nav-link", { active: l.modelValue === h.key, disabled: h.disabled }]),
            type: "button",
            role: "tab",
            "data-bs-toggle": l.pills ? "pill" : "tab",
            "data-bs-target": `#tab-pane-${h.key}`,
            "aria-controls": `tab-pane-${h.key}`,
            "aria-selected": l.modelValue === h.key,
            onShown: (x) => f(h.key)
          }, N(h.label), 43, Ae)
        ]))), 128))
      ], 2),
      k("div", ze, [
        (d(!0), p(Z, null, G(l.tabs, (h) => (d(), p("div", {
          id: `tab-pane-${h.key}`,
          key: h.key,
          class: T(["tab-pane", "fade", { "show active": l.modelValue === h.key }]),
          role: "tabpanel"
        }, [
          _(c.$slots, h.key)
        ], 10, _e))), 128))
      ])
    ]));
  }
}), Ye = {
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
}, je = {
  Text: 255
  // SP enforces 255 char limit on single-line text fields
}, Ze = ["for"], Ge = {
  key: 0,
  class: "input-group-text"
}, Je = {
  key: 1,
  class: "invalid-feedback"
}, H = /* @__PURE__ */ A({
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
  setup(l) {
    return (i, a) => (d(), p("div", null, [
      l.label ? (d(), p("label", {
        key: 0,
        for: l.id,
        class: T(l.labelClasses)
      }, [
        X(N(l.label) + " ", 1),
        l.required ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", l.haveValue ? "text-success" : "text-danger"])
        }, null, 2)) : q("", !0)
      ], 10, Ze)) : q("", !0),
      k("div", {
        class: T(["input-group", { "has-validation": l.isInvalid }])
      }, [
        !l.suppressPrefixIcon && l.iconClass ? (d(), p("span", Ge, [
          k("i", {
            class: T(["fas", l.iconClass])
          }, null, 2)
        ])) : q("", !0),
        _(i.$slots, "default"),
        l.isInvalid && l.errorMessage ? (d(), p("div", Je, N(l.errorMessage), 1)) : q("", !0),
        _(i.$slots, "suffix")
      ], 2)
    ]));
  }
});
function O(l) {
  return l != null && typeof l == "object" && l["@@functional/placeholder"] === !0;
}
function W(l) {
  return function i(a) {
    return arguments.length === 0 || O(a) ? i : l.apply(this, arguments);
  };
}
function le(l) {
  return function i(a, e) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return O(a) ? i : W(function(o) {
          return l(a, o);
        });
      default:
        return O(a) && O(e) ? i : O(a) ? W(function(o) {
          return l(o, e);
        }) : O(e) ? W(function(o) {
          return l(a, o);
        }) : l(a, e);
    }
  };
}
function He(l) {
  return function i(a, e, o) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return O(a) ? i : le(function(t, f) {
          return l(a, t, f);
        });
      case 2:
        return O(a) && O(e) ? i : O(a) ? le(function(t, f) {
          return l(t, e, f);
        }) : O(e) ? le(function(t, f) {
          return l(a, t, f);
        }) : W(function(t) {
          return l(a, e, t);
        });
      default:
        return O(a) && O(e) && O(o) ? i : O(a) && O(e) ? le(function(t, f) {
          return l(t, f, o);
        }) : O(a) && O(o) ? le(function(t, f) {
          return l(t, e, f);
        }) : O(e) && O(o) ? le(function(t, f) {
          return l(a, t, f);
        }) : O(a) ? W(function(t) {
          return l(t, e, o);
        }) : O(e) ? W(function(t) {
          return l(a, t, o);
        }) : O(o) ? W(function(t) {
          return l(a, e, t);
        }) : l(a, e, o);
    }
  };
}
var Q = /* @__PURE__ */ W(function(i) {
  return i == null;
}), me = /* @__PURE__ */ He(function(i, a, e) {
  if (i > a)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return e < i ? i : e > a ? a : e;
});
function We() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function z(l) {
  const i = We(), a = v(() => {
    const x = l.modelValue;
    return !(Q(x) || typeof x == "string" && x.trim() === "" || Array.isArray(x) && x.length === 0);
  }), e = v(() => {
    var B;
    const x = (B = l.label) == null ? void 0 : B.trimEnd();
    return !!x && x.endsWith("*");
  }), o = v(() => l.required ?? e.value), t = v(() => e.value ? l.label.trimEnd().slice(0, -1).trimEnd() : l.label), f = v(() => !o.value || a.value), c = v(() => {
    const x = ["form-label"];
    return l.labelClass && x.push(...l.labelClass.split(/\s+/).filter(Boolean)), x;
  }), w = E(!1);
  return { id: i, haveValue: a, requiredPass: f, resolvedRequired: o, displayLabel: t, labelClasses: c, touched: w, touch: () => {
    w.value = !0;
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
function ae(l, i) {
  if (typeof l == "string") return l;
  if (typeof l == "number") return String(l);
  if (typeof i == "function") return i(l);
  if (typeof i == "string") {
    const a = l[i];
    return a != null ? String(a) : "";
  }
  for (const a of Xe)
    if (a in l && l[a] != null) return String(l[a]);
  return JSON.stringify(l);
}
const Qe = ["id", "value", "placeholder", "readonly", "maxlength", "list"], el = ["id"], ll = ["value"], tl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = E(!0), V = v(() => {
      const u = c.value;
      return !e.optionStrict || !B.value ? u : u && (f.value ? b.value : !0);
    }), I = v(() => B.value && !V.value);
    i({ requiredPass: V, touch: m });
    const $ = v(() => {
      var u;
      return (u = e.options) != null && u.length ? `${t}-list` : void 0;
    }), S = v(() => {
      var u;
      return (u = e.options) != null && u.length ? e.options.map((r) => ae(r, e.optionLabel)) : [];
    });
    function M(u) {
      const r = u.target.value;
      o("update:modelValue", r === "" ? null : r);
    }
    function P(u) {
      var U;
      if (m(), !e.optionStrict || !((U = e.options) != null && U.length)) return;
      const r = u.target, s = r.value;
      if (!s) {
        b.value = !0;
        return;
      }
      const y = s.toLowerCase(), F = S.value.find((K) => K.toLowerCase() === y);
      F ? (b.value = !0, F !== s && (r.value = F, o("update:modelValue", F))) : (b.value = !1, r.value = "", o("update:modelValue", null));
    }
    return (u, r) => (d(), J(H, {
      id: n(t),
      label: n(h),
      "label-classes": n(x),
      "icon-class": "fa-font",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": I.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        k("input", {
          id: n(t),
          type: "text",
          class: T(["form-control", { "is-invalid": I.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          maxlength: l.maxlength,
          list: $.value,
          onInput: M,
          onBlur: P
        }, null, 42, Qe),
        $.value ? (d(), p("datalist", {
          key: 0,
          id: $.value
        }, [
          (d(!0), p(Z, null, G(S.value, (s) => (d(), p("option", {
            key: s,
            value: s
          }, null, 8, ll))), 128))
        ], 8, el)) : q("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), al = ["id", "type", "value", "placeholder", "readonly"], nl = ["title", "aria-label", "aria-pressed"], ol = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, sl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, resolvedRequired: c, displayLabel: w, labelClasses: h, touched: x, touch: B } = z(e), m = E(!1), b = E(!1);
    function V(r) {
      return /^\d+$/.test(r) ? "At least one number (0–9)" : /^[a-z]+$/i.test(r) ? "At least one letter" : r.length <= 12 ? `At least one of: ${r}` : "At least one special character";
    }
    const I = v(() => {
      var y;
      const r = e.modelValue ?? "", s = [];
      return e.minLength && s.push({
        key: "minLength",
        label: `At least ${e.minLength} character${e.minLength === 1 ? "" : "s"}`,
        passed: r.length >= e.minLength
      }), e.mixedCase && s.push({
        key: "mixedCase",
        label: "Upper and lowercase letters",
        passed: /[a-z]/.test(r) && /[A-Z]/.test(r)
      }), (y = e.requiredCharacters) == null || y.forEach((F, U) => {
        s.push({
          key: `chars-${U}`,
          label: V(F),
          passed: [...F].some((K) => r.includes(K))
        });
      }), e.mustMatch !== void 0 && s.push({
        key: "mustMatch",
        label: "Passwords match",
        passed: r.length > 0 && r === (e.mustMatch ?? "")
      }), s;
    }), $ = v(() => I.value.every((r) => r.passed)), S = v(() => I.value.length > 0), M = v(() => !c.value && !S.value ? !0 : c.value && !f.value ? !1 : $.value), P = v(() => x.value && !M.value);
    i({ requiredPass: M, touch: B });
    function u(r) {
      b.value = !0;
      const s = r.target.value;
      o("update:modelValue", s === "" ? null : s);
    }
    return (r, s) => (d(), p("div", null, [
      ke(H, {
        id: n(t),
        label: n(w),
        "label-classes": n(h),
        "icon-class": "fa-lock",
        "have-value": $.value && n(f),
        required: n(c) || S.value,
        readonly: l.readonly,
        "suppress-prefix-icon": l.suppressPrefixIcon,
        "is-invalid": P.value,
        "error-message": l.errorMessage ?? "This field is required"
      }, {
        suffix: j(() => [
          k("button", {
            type: "button",
            class: "btn btn-outline-secondary",
            title: m.value ? "Hide password" : "Show password",
            "aria-label": m.value ? "Hide password" : "Show password",
            "aria-pressed": m.value,
            tabindex: "-1",
            onClick: s[1] || (s[1] = (y) => m.value = !m.value)
          }, [
            k("i", {
              class: T(["fas", m.value ? "fa-eye-slash" : "fa-eye"])
            }, null, 2)
          ], 8, nl)
        ]),
        default: j(() => [
          k("input", {
            id: n(t),
            type: m.value ? "text" : "password",
            class: T(["form-control", { "is-invalid": P.value }]),
            value: l.modelValue ?? "",
            placeholder: l.placeholder,
            readonly: l.readonly,
            autocomplete: "current-password",
            onInput: u,
            onBlur: s[0] || (s[0] = //@ts-ignore
            (...y) => n(B) && n(B)(...y))
          }, null, 42, al)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]),
      S.value && b.value ? (d(), p("ul", ol, [
        (d(!0), p(Z, null, G(I.value, (y) => (d(), p("li", {
          key: y.key,
          class: T(y.passed ? "text-success" : "text-danger")
        }, [
          k("i", {
            class: T(["fas fa-xs me-1", y.passed ? "fa-check" : "fa-times"])
          }, null, 2),
          X(" " + N(y.label), 1)
        ], 2))), 128))
      ])) : q("", !0)
    ]));
  }
}), rl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], ul = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = E(null), I = v(() => Q(e.modelValue) ? "" : String(e.modelValue));
    function $(S) {
      const M = S.target.value;
      if (M === "" || M === "-") {
        o("update:modelValue", null);
        return;
      }
      const P = parseFloat(M);
      if (isNaN(P)) {
        V.value && (V.value.value = I.value);
        return;
      }
      const u = Q(e.min) ? Number.NEGATIVE_INFINITY : e.min, r = Q(e.max) ? Number.POSITIVE_INFINITY : e.max, s = me(u, r, P);
      s !== P && V.value && (V.value.value = String(s)), o("update:modelValue", s);
    }
    return (S, M) => (d(), J(H, {
      id: n(t),
      label: n(h),
      "label-classes": n(x),
      "icon-class": "fa-hashtag",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": b.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        k("input", {
          id: n(t),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: T(["form-control", { "is-invalid": b.value }]),
          value: I.value,
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          step: l.step,
          onInput: $,
          onBlur: M[0] || (M[0] = //@ts-ignore
          (...P) => n(m) && n(m)(...P))
        }, null, 42, rl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), il = ["id", "value", "placeholder", "readonly", "min", "max"], dl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = E(null);
    function I(u) {
      const r = u.toString(), s = r.indexOf(".");
      return s > -1 ? r.length - s - 1 : 0;
    }
    function $(u) {
      const r = I(u), s = u * 100;
      return I(s) > r + 2 ? parseFloat(s.toFixed(r)).toString() : s.toString();
    }
    function S(u) {
      const r = I(u), s = u / 100;
      return parseFloat(s.toFixed(r + 2));
    }
    const M = v(() => Q(e.modelValue) ? "" : $(e.modelValue));
    function P(u) {
      const r = u.target.value;
      if (r === "" || r === "-") {
        o("update:modelValue", null);
        return;
      }
      const s = parseFloat(r);
      if (isNaN(s)) {
        V.value && (V.value.value = M.value);
        return;
      }
      const y = Q(e.min) ? Number.NEGATIVE_INFINITY : e.min, F = Q(e.max) ? Number.POSITIVE_INFINITY : e.max, U = me(y, F, s);
      U !== s && V.value && (V.value.value = String(U)), o("update:modelValue", S(U));
    }
    return (u, r) => (d(), J(H, {
      id: n(t),
      label: n(h),
      "label-classes": n(x),
      "icon-class": "fa-percent",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": b.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        k("input", {
          id: n(t),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: T(["form-control", { "is-invalid": b.value }]),
          value: M.value,
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          onInput: P,
          onBlur: r[0] || (r[0] = //@ts-ignore
          (...s) => n(m) && n(m)(...s))
        }, null, 42, il)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
});
function ye() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function cl(l, i) {
  const a = new Date(l.toLocaleString("en-US", { timeZone: "UTC" })), e = new Date(l.toLocaleString("en-US", { timeZone: i }));
  return (a.getTime() - e.getTime()) / 6e4;
}
function ie(l) {
  return l ? l.substring(0, 10) : "";
}
function pl(l) {
  return l ? `${l}T00:00:00Z` : null;
}
function de(l, i) {
  if (!l) return "";
  const a = i ?? ye(), e = new Date(l), o = new Intl.DateTimeFormat("en-CA", {
    timeZone: a,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).formatToParts(e), t = {};
  return o.forEach(({ type: f, value: c }) => {
    t[f] = c;
  }), `${t.year}-${t.month}-${t.day}T${t.hour}:${t.minute}`;
}
function fl(l, i) {
  if (!l) return null;
  const a = i ?? ye(), e = /* @__PURE__ */ new Date(`${l}:00Z`), o = cl(e, a);
  return new Date(e.getTime() + o * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const vl = ["id", "value", "readonly", "min", "max"], ml = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = v(() => ie(e.modelValue)), I = v(() => e.min ? ie(e.min) : void 0), $ = v(() => e.max ? ie(e.max) : void 0);
    function S(M) {
      m();
      const P = M.target.value;
      o("update:modelValue", pl(P));
    }
    return (M, P) => (d(), J(H, {
      id: n(t),
      label: n(h),
      "label-classes": n(x),
      "icon-class": "fa-calendar",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": b.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        k("input", {
          id: n(t),
          type: "date",
          class: T(["form-control", { "is-invalid": b.value }]),
          value: V.value,
          readonly: l.readonly,
          min: I.value,
          max: $.value,
          onChange: S
        }, null, 42, vl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), yl = ["id", "value", "readonly", "min", "max"], hl = ["title"], bl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = v(() => e.timezone ?? ye()), I = v(
      () => de(e.modelValue, V.value)
    ), $ = v(
      () => e.min ? de(e.min, V.value) : void 0
    ), S = v(
      () => e.max ? de(e.max, V.value) : void 0
    );
    function M(P) {
      m();
      const u = P.target.value;
      o("update:modelValue", fl(u, V.value));
    }
    return (P, u) => (d(), J(H, {
      id: n(t),
      label: n(h),
      "label-classes": n(x),
      "icon-class": "fa-clock",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": b.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        k("input", {
          id: n(t),
          type: "datetime-local",
          class: T(["form-control", { "is-invalid": b.value }]),
          value: I.value,
          readonly: l.readonly,
          min: $.value,
          max: S.value,
          onChange: M
        }, null, 42, yl),
        l.timezone ? (d(), p("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${V.value}`
        }, [...u[0] || (u[0] = [
          k("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, hl)) : q("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), gl = ["id", "value", "disabled"], xl = ["disabled"], kl = ["value"], Vl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "User"];
    function I(u) {
      return typeof e.optionValue == "function" ? e.optionValue(u) : typeof e.optionValue == "string" ? typeof u == "string" || typeof u == "number" ? u : u[e.optionValue] ?? null : typeof u == "string" || typeof u == "number" ? u : e.spType && V.includes(e.spType) ? u.Id ?? null : u;
    }
    const $ = v(() => {
      var u;
      return (u = e.options) != null && u.length ? e.options.map((r) => {
        const s = ae(r, e.optionLabel), y = I(r), F = y == null ? "" : typeof y == "object" ? JSON.stringify(y) : String(y);
        return { label: s, value: y, key: F };
      }) : [];
    }), S = v(() => {
      const u = e.modelValue;
      return u == null ? "" : typeof u == "object" ? JSON.stringify(u) : String(u);
    });
    function M(u) {
      m();
      const s = u.target.value;
      if (s === "") {
        o("update:modelValue", null);
        return;
      }
      const y = $.value.find((F) => F.key === s);
      o("update:modelValue", y ? y.value : null);
    }
    function P(u) {
      u.key !== "Delete" && u.key !== "Backspace" || e.readonly || (u.preventDefault(), o("update:modelValue", null));
    }
    return (u, r) => (d(), J(H, {
      id: n(t),
      label: n(h),
      "label-classes": n(x),
      "icon-class": "fa-list-ul",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": b.value,
      "error-message": l.errorMessage ?? "Please select a value"
    }, {
      default: j(() => [
        k("select", {
          id: n(t),
          class: T(["form-select", { "is-invalid": b.value }]),
          value: S.value,
          disabled: l.readonly,
          onChange: M,
          onKeydown: P,
          onBlur: r[0] || (r[0] = //@ts-ignore
          (...s) => n(m) && n(m)(...s))
        }, [
          k("option", {
            value: "",
            disabled: n(w)
          }, N(l.placeholder ?? "Choose…"), 9, xl),
          (d(!0), p(Z, null, G($.value, (s) => (d(), p("option", {
            key: s.key,
            value: s.key
          }, N(s.label), 9, kl))), 128))
        ], 42, gl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), $l = ["for"], wl = {
  key: 0,
  class: "input-group-text"
}, Cl = ["aria-label", "onClick"], Tl = ["id", "placeholder"], Bl = ["aria-label"], Il = ["aria-selected", "onMousedown", "onMouseover"], Pl = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Sl = {
  key: 1,
  class: "invalid-feedback"
}, ql = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, resolvedRequired: f, displayLabel: c, labelClasses: w, touched: h, touch: x } = z(e), B = v(
      () => Array.isArray(e.modelValue) ? e.modelValue : []
    ), m = v(() => B.value.length > 0), b = v(() => !f.value || m.value), V = v(() => h.value && !b.value);
    i({ requiredPass: b, touch: x });
    const I = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function $(g) {
      return typeof e.optionValue == "function" ? e.optionValue(g) : typeof e.optionValue == "string" ? typeof g == "string" || typeof g == "number" ? g : g[e.optionValue] ?? null : typeof g == "string" || typeof g == "number" ? g : e.spType && I.includes(e.spType) ? g.Id ?? null : g;
    }
    function S(g) {
      return g == null ? "" : typeof g == "object" ? JSON.stringify(g) : String(g);
    }
    const M = v(
      () => (e.options ?? []).map((g) => ({
        label: ae(g, e.optionLabel),
        value: $(g),
        key: S($(g))
      }))
    ), P = v(() => new Set(B.value.map(S))), u = v(
      () => B.value.map((g) => {
        const L = S(g), D = M.value.find((Y) => Y.key === L);
        return { label: (D == null ? void 0 : D.label) ?? (L || String(g)), value: g, key: L };
      })
    ), r = E(""), s = E(!1), y = E(0), F = E(null), U = v(() => {
      const g = r.value.trim().toLowerCase();
      return M.value.filter((L) => P.value.has(L.key) ? !1 : g ? L.label.toLowerCase().includes(g) : !0);
    });
    ee(U, (g) => {
      y.value >= g.length && (y.value = 0);
    });
    function K() {
      e.readonly || (s.value = !0, y.value = 0);
    }
    function te() {
      x(), s.value = !1, r.value = "", y.value = 0, o("search", "");
    }
    function ne(g) {
      const L = [...B.value, g.value];
      o("update:modelValue", L), r.value = "", y.value = 0, fe(() => {
        var D;
        (D = F.value) == null || D.focus(), s.value = !0;
      });
    }
    function oe(g) {
      const L = B.value.filter((D) => S(D) !== g);
      o("update:modelValue", L.length ? L : null);
    }
    function re() {
      s.value = !0, y.value = 0, o("search", r.value);
    }
    function ue() {
      K();
    }
    function C() {
      setTimeout(te, 150);
    }
    function R(g) {
      const L = U.value;
      switch (g.key) {
        case "ArrowDown":
          if (g.preventDefault(), !s.value) {
            K();
            return;
          }
          y.value = L.length ? (y.value + 1) % L.length : 0;
          break;
        case "ArrowUp":
          if (g.preventDefault(), !s.value) {
            K();
            return;
          }
          y.value = L.length ? (y.value - 1 + L.length) % L.length : 0;
          break;
        case "Enter":
          if (g.preventDefault(), s.value && L.length) {
            const D = y.value >= 0 && y.value < L.length ? y.value : 0;
            ne(L[D]);
          }
          break;
        case "Escape":
          g.preventDefault(), te();
          break;
        case "Backspace":
          if (!r.value && B.value.length) {
            const D = u.value[u.value.length - 1];
            oe(D.key);
          }
          break;
      }
    }
    return (g, L) => (d(), p("div", null, [
      n(c) ? (d(), p("label", {
        key: 0,
        for: n(t),
        class: T(n(w))
      }, [
        X(N(n(c)) + " ", 1),
        n(f) ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", m.value ? "text-success" : "text-danger"])
        }, null, 2)) : q("", !0)
      ], 10, $l)) : q("", !0),
      k("div", {
        class: T(["input-group", { "has-validation": V.value }])
      }, [
        l.suppressPrefixIcon ? q("", !0) : (d(), p("span", wl, [...L[2] || (L[2] = [
          k("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        k("div", {
          class: T(["form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative", { "bg-body-secondary": l.readonly, "is-invalid": V.value }]),
          style: { cursor: "text", "min-height": "2.375rem" },
          onClick: L[1] || (L[1] = (D) => {
            var Y;
            return (Y = F.value) == null ? void 0 : Y.focus();
          })
        }, [
          (d(!0), p(Z, null, G(u.value, (D) => (d(), p("span", {
            key: D.key,
            class: "badge rounded-pill bg-primary d-inline-flex align-items-center gap-1",
            style: { "font-size": "0.8em" }
          }, [
            X(N(D.label) + " ", 1),
            l.readonly ? q("", !0) : (d(), p("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${D.label}`,
              onClick: ce((Y) => oe(D.key), ["stop"])
            }, null, 8, Cl))
          ]))), 128)),
          l.readonly ? q("", !0) : ve((d(), p("input", {
            key: 0,
            id: n(t),
            ref_key: "inputRef",
            ref: F,
            type: "text",
            class: "border-0 p-0 flex-grow-1 bg-transparent",
            style: { outline: "none", "min-width": "8ch", "line-height": "inherit" },
            "onUpdate:modelValue": L[0] || (L[0] = (D) => r.value = D),
            placeholder: u.value.length ? "" : l.placeholder ?? "Type to search…",
            autocomplete: "off",
            onInput: re,
            onFocus: ue,
            onBlur: C,
            onKeydown: R
          }, null, 40, Tl)), [
            [be, r.value]
          ]),
          s.value && U.value.length ? (d(), p("ul", {
            key: 1,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(c) ?? "Suggestions"
          }, [
            (d(!0), p(Z, null, G(U.value, (D, Y) => (d(), p("li", {
              key: D.key,
              role: "option",
              "aria-selected": Y === y.value,
              class: T(["dropdown-item", { active: Y === y.value }]),
              style: ge(Y === y.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ce((xe) => ne(D), ["prevent"]),
              onMouseover: (xe) => y.value = Y
            }, N(D.label), 47, Il))), 128))
          ], 8, Bl)) : s.value && r.value && !U.value.length ? (d(), p("ul", Pl, [...L[3] || (L[3] = [
            k("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : q("", !0)
        ], 2),
        V.value ? (d(), p("div", Sl, N(l.errorMessage ?? "Please select at least one value"), 1)) : q("", !0)
      ], 2)
    ]));
  }
}), Ml = ["id", "value", "disabled", "title"], Ll = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    function V($) {
      m(), o("update:modelValue", $.target.value);
    }
    function I($) {
      $.key !== "Delete" && $.key !== "Backspace" || e.readonly || ($.preventDefault(), o("update:modelValue", null));
    }
    return ($, S) => (d(), J(H, {
      id: n(t),
      label: n(h),
      "label-classes": n(x),
      "icon-class": "fa-palette",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": b.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        k("input", {
          id: n(t),
          type: "color",
          class: T(["form-control form-control-color flex-grow-1", { "is-invalid": b.value }]),
          value: l.modelValue ?? "#000000",
          disabled: l.readonly,
          title: l.modelValue ?? "Choose a colour",
          onChange: V,
          onKeydown: I
        }, null, 42, Ml)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Fl = ["aria-labelledby"], Dl = ["id"], Nl = ["id", "type", "checked", "disabled", "name", "onClick"], Rl = ["for"], Ol = {
  key: 1,
  class: "invalid-feedback d-block"
}, he = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function I(s) {
      return typeof e.optionValue == "function" ? e.optionValue(s) : typeof e.optionValue == "string" ? typeof s == "string" || typeof s == "number" ? s : s[e.optionValue] ?? null : typeof s == "string" || typeof s == "number" ? s : e.spType && V.includes(e.spType) ? s.Id ?? null : s;
    }
    function $(s) {
      return s == null ? "" : typeof s == "object" ? JSON.stringify(s) : String(s);
    }
    const S = v(
      () => (e.options ?? []).map((s) => ({
        label: ae(s, e.optionLabel),
        value: I(s),
        key: $(I(s))
      }))
    ), M = v(
      () => e.multi && Array.isArray(e.modelValue) ? e.modelValue : []
    );
    function P(s) {
      return e.multi ? M.value.some((y) => $(y) === s) : $(e.modelValue) === s;
    }
    function u(s) {
      if (!e.readonly)
        if (m(), e.multi)
          if (M.value.some((F) => $(F) === s.key)) {
            const F = M.value.filter((U) => $(U) !== s.key);
            o("update:modelValue", F.length ? F : null);
          } else
            o("update:modelValue", [...M.value, s.value]);
        else
          $(e.modelValue) === s.key ? o("update:modelValue", null) : o("update:modelValue", s.value);
    }
    const r = v(
      () => e.multi ? "Please select at least one option" : "Please select an option"
    );
    return (s, y) => (d(), p("div", {
      role: "group",
      "aria-labelledby": n(h) ? `${n(t)}-label` : void 0
    }, [
      n(h) ? (d(), p("div", {
        key: 0,
        id: `${n(t)}-label`,
        class: T(n(x)),
        style: { "margin-bottom": "0.25rem" }
      }, [
        X(N(n(h)) + " ", 1),
        n(w) ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", n(f) ? "text-success" : "text-danger"])
        }, null, 2)) : q("", !0)
      ], 10, Dl)) : q("", !0),
      k("div", null, [
        (d(!0), p(Z, null, G(S.value, (F, U) => (d(), p("div", {
          key: F.key,
          class: T(["form-check", { "form-check-inline": !l.stacked }])
        }, [
          k("input", {
            id: `${n(t)}-opt-${U}`,
            type: l.multi ? "checkbox" : "radio",
            class: T(["form-check-input", { "is-invalid": b.value }]),
            checked: P(F.key),
            disabled: l.readonly,
            name: l.multi ? void 0 : n(t),
            onClick: (K) => u(F)
          }, null, 10, Nl),
          k("label", {
            for: `${n(t)}-opt-${U}`,
            class: "form-check-label"
          }, N(F.label), 9, Rl)
        ], 2))), 128))
      ]),
      b.value ? (d(), p("div", Ol, N(l.errorMessage ?? r.value), 1)) : q("", !0)
    ], 8, Fl));
  }
}), El = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], Ul = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    function V(I) {
      const $ = I.target.value;
      o("update:modelValue", $ === "" ? null : $);
    }
    return (I, $) => (d(), J(H, {
      id: n(t),
      label: n(h),
      "label-classes": n(x),
      "icon-class": "fa-pen-fancy",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": b.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        k("textarea", {
          id: n(t),
          class: T(["form-control", { "is-invalid": b.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          maxlength: l.maxlength,
          rows: l.rows,
          onInput: V,
          onBlur: $[0] || ($[0] = //@ts-ignore
          (...S) => n(m) && n(m)(...S))
        }, null, 42, El)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Al = { class: "form-check form-switch" }, zl = ["id", "disabled"], _l = ["for"], Kl = {
  key: 0,
  class: "invalid-feedback d-block"
}, Yl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = v({
      get: () => e.modelValue === !0,
      set: (I) => {
        e.readonly || (m(), o("update:modelValue", I));
      }
    });
    return (I, $) => (d(), p("div", null, [
      k("div", Al, [
        ve(k("input", {
          id: n(t),
          type: "checkbox",
          role: "switch",
          class: T(["form-check-input", { "is-invalid": b.value }]),
          "onUpdate:modelValue": $[0] || ($[0] = (S) => V.value = S),
          disabled: l.readonly
        }, null, 10, zl), [
          [Ve, V.value]
        ]),
        k("label", {
          for: n(t),
          class: T(["form-check-label", ...n(x).filter((S) => S !== "form-label")])
        }, [
          X(N(n(h)) + " ", 1),
          n(w) ? (d(), p("i", {
            key: 0,
            class: T(["fas fa-asterisk fa-xs ms-1", n(f) ? "text-success" : "text-danger"])
          }, null, 2)) : q("", !0)
        ], 10, _l)
      ]),
      b.value ? (d(), p("div", Kl, N(l.errorMessage ?? "This field is required"), 1)) : q("", !0)
    ]));
  }
}), jl = ["for"], Zl = { class: "input-group-text fw-semibold" }, Gl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], Jl = {
  key: 0,
  class: "invalid-feedback"
}, Hl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = E(null), I = v(() => {
      var u;
      try {
        const r = e.locale ?? (typeof navigator < "u" ? navigator.language : "en-GB");
        return ((u = new Intl.NumberFormat(r, {
          style: "currency",
          currency: e.currency ?? "GBP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).formatToParts(0).find((y) => y.type === "currency")) == null ? void 0 : u.value) ?? e.currency ?? "£";
      } catch {
        return e.currency ?? "£";
      }
    }), $ = v(() => e.min ?? -1 / 0), S = v(() => e.max ?? 1 / 0);
    function M(u) {
      const r = u.target.value;
      if (r === "") {
        o("update:modelValue", null);
        return;
      }
      const s = parseFloat(r);
      isNaN(s) || o("update:modelValue", s);
    }
    function P(u) {
      if (m(), u.target.value === "" || e.modelValue === null) return;
      const s = me($.value, S.value, e.modelValue);
      s !== e.modelValue && (o("update:modelValue", s), V.value && (V.value.value = String(s)));
    }
    return (u, r) => (d(), p("div", null, [
      n(h) ? (d(), p("label", {
        key: 0,
        for: n(t),
        class: T(n(x))
      }, [
        X(N(n(h)) + " ", 1),
        n(w) ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", n(f) ? "text-success" : "text-danger"])
        }, null, 2)) : q("", !0)
      ], 10, jl)) : q("", !0),
      k("div", {
        class: T(["input-group", { "has-validation": b.value }])
      }, [
        k("span", Zl, N(I.value), 1),
        k("input", {
          id: n(t),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: T(["form-control", { "is-invalid": b.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          step: l.step,
          onInput: M,
          onBlur: P
        }, null, 42, Gl),
        b.value ? (d(), p("div", Jl, N(l.errorMessage ?? "This field is required"), 1)) : q("", !0)
      ], 2)
    ]));
  }
}), Wl = ["for"], Xl = {
  key: 0,
  class: "input-group-text"
}, Ql = { class: "position-relative flex-grow-1 d-flex" }, et = ["id", "placeholder", "readonly"], lt = ["aria-label"], tt = ["aria-selected", "onMousedown", "onMouseover"], at = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, nt = {
  key: 1,
  class: "invalid-feedback"
}, ot = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, { id: t, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: x, touched: B, touch: m } = z(e), b = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function I(C) {
      return typeof e.optionValue == "function" ? e.optionValue(C) : typeof e.optionValue == "string" ? typeof C == "string" || typeof C == "number" ? C : C[e.optionValue] ?? null : typeof C == "string" || typeof C == "number" ? C : e.spType && V.includes(e.spType) ? C.Id ?? null : C;
    }
    function $(C) {
      return C == null ? "" : typeof C == "object" ? JSON.stringify(C) : String(C);
    }
    const S = v(
      () => (e.options ?? []).map((C) => ({
        label: ae(C, e.optionLabel),
        value: I(C),
        key: $(I(C))
      }))
    ), M = v(() => {
      if (e.modelValue === null || e.modelValue === void 0) return null;
      const C = $(e.modelValue), R = S.value.find((g) => g.key === C);
      return (R == null ? void 0 : R.label) ?? String(e.modelValue);
    }), P = E(""), u = E(!1), r = E(0), s = E(null);
    ee(M, (C) => {
      C !== null && (P.value = C);
    }, { immediate: !0 });
    const y = v(() => {
      const C = P.value.trim().toLowerCase(), R = $(e.modelValue);
      return S.value.filter((g) => g.key === R ? !1 : C ? g.label.toLowerCase().includes(C) : !0);
    });
    ee(y, (C) => {
      r.value >= C.length && (r.value = 0);
    });
    function F() {
      e.readonly || (u.value = !0, r.value = 0);
    }
    function U() {
      m(), u.value = !1, r.value = 0, o("search", ""), M.value !== null && (P.value = M.value);
    }
    function K(C) {
      o("update:modelValue", C.value), P.value = C.label, u.value = !1, o("search", "");
    }
    function te() {
      o("update:modelValue", null), P.value = "", o("search", ""), fe(() => {
        var C;
        return (C = s.value) == null ? void 0 : C.focus();
      });
    }
    function ne() {
      e.modelValue !== null && e.modelValue !== void 0 && o("update:modelValue", null), u.value = !0, r.value = 0, o("search", P.value);
    }
    function oe() {
      F();
    }
    function re() {
      setTimeout(U, 150);
    }
    function ue(C) {
      const R = y.value;
      switch (C.key) {
        case "ArrowDown":
          if (C.preventDefault(), !u.value) {
            F();
            return;
          }
          r.value = R.length ? (r.value + 1) % R.length : 0;
          break;
        case "ArrowUp":
          if (C.preventDefault(), !u.value) {
            F();
            return;
          }
          r.value = R.length ? (r.value - 1 + R.length) % R.length : 0;
          break;
        case "Enter":
          if (C.preventDefault(), u.value && R.length) {
            const g = r.value >= 0 && r.value < R.length ? r.value : 0;
            K(R[g]);
          }
          break;
        case "Escape":
          C.preventDefault(), U();
          break;
        case "Delete":
        case "Backspace":
          e.modelValue !== null && e.modelValue !== void 0 && !P.value && (C.preventDefault(), te());
          break;
      }
    }
    return (C, R) => (d(), p("div", null, [
      n(h) ? (d(), p("label", {
        key: 0,
        for: n(t),
        class: T(n(x))
      }, [
        X(N(n(h)) + " ", 1),
        n(w) ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", n(f) ? "text-success" : "text-danger"])
        }, null, 2)) : q("", !0)
      ], 10, Wl)) : q("", !0),
      k("div", {
        class: T(["input-group", { "has-validation": b.value }])
      }, [
        l.suppressPrefixIcon ? q("", !0) : (d(), p("span", Xl, [...R[1] || (R[1] = [
          k("i", { class: "fas fa-search" }, null, -1)
        ])])),
        k("div", Ql, [
          ve(k("input", {
            id: n(t),
            ref_key: "inputRef",
            ref: s,
            type: "text",
            class: T(["form-control border-end-0", { "is-invalid": b.value }]),
            "onUpdate:modelValue": R[0] || (R[0] = (g) => P.value = g),
            placeholder: l.placeholder ?? "Type to search…",
            readonly: l.readonly,
            autocomplete: "off",
            onInput: ne,
            onFocus: oe,
            onBlur: re,
            onKeydown: ue
          }, null, 42, et), [
            [be, P.value]
          ]),
          u.value && y.value.length ? (d(), p("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(h) ?? "Suggestions"
          }, [
            (d(!0), p(Z, null, G(y.value, (g, L) => (d(), p("li", {
              key: g.key,
              role: "option",
              "aria-selected": L === r.value,
              class: T(["dropdown-item", { active: L === r.value }]),
              style: ge(L === r.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ce((D) => K(g), ["prevent"]),
              onMouseover: (D) => r.value = L
            }, N(g.label), 47, tt))), 128))
          ], 8, lt)) : u.value && P.value && !y.value.length ? (d(), p("ul", at, [...R[2] || (R[2] = [
            k("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : q("", !0)
        ]),
        b.value ? (d(), p("div", nt, N(l.errorMessage ?? "Please select a value"), 1)) : q("", !0),
        n(f) && !l.readonly ? (d(), p("button", {
          key: 2,
          type: "button",
          class: "btn btn-outline-secondary",
          title: "Clear selection",
          "aria-label": "Clear selection",
          tabindex: "-1",
          onClick: te
        }, [...R[3] || (R[3] = [
          k("i", { class: "fas fa-times" }, null, -1)
        ])])) : q("", !0)
      ], 2)
    ]));
  }
}), st = {
  key: 0,
  class: "form-text text-muted"
}, rt = /* @__PURE__ */ A({
  __name: "SpvFormControl",
  props: {
    spType: {},
    type: {},
    modelValue: {},
    label: {},
    labelClass: {},
    placeholder: {},
    required: { type: Boolean, default: void 0 },
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
    optionLabel: {},
    optionValue: {},
    optionStrict: { type: Boolean },
    helpText: {},
    errorMessage: {},
    minLength: {},
    requiredCharacters: {},
    mixedCase: { type: Boolean },
    mustMatch: {}
  },
  emits: ["update:modelValue", "search"],
  setup(l, { expose: i, emit: a }) {
    const e = l, o = a, t = v(() => e.type ? e.type : e.spType ? Ye[e.spType] : "text"), f = v(() => {
      if (e.maxlength !== void 0) return e.maxlength;
      if (e.spType) return je[e.spType];
    }), c = v(() => {
      switch (t.value) {
        case "password":
          return sl;
        case "number":
          return ul;
        case "percent":
          return dl;
        case "date":
          return ml;
        case "datetime-local":
          return bl;
        case "select":
          return Vl;
        case "lookupMulti":
          return ql;
        case "color":
          return Ll;
        case "checkboxes":
          return he;
        case "radio":
          return he;
        case "textarea":
          return Ul;
        case "switch":
          return Yl;
        case "currency":
          return Hl;
        case "lookup":
          return ot;
        case "text":
        default:
          return tl;
      }
    }), w = E(null), h = v(() => {
      var m;
      return ((m = w.value) == null ? void 0 : m.requiredPass) ?? !0;
    });
    function x() {
      var m, b;
      (b = (m = w.value) == null ? void 0 : m.touch) == null || b.call(m);
    }
    i({ requiredPass: h, touch: x });
    const B = v(() => ({
      modelValue: e.modelValue,
      spType: e.spType,
      label: e.label,
      labelClass: e.labelClass,
      placeholder: e.placeholder,
      required: e.required,
      readonly: e.readonly,
      suppressPrefixIcon: e.suppressPrefixIcon,
      stacked: e.stacked,
      multi: t.value === "checkboxes",
      min: e.min,
      max: e.max,
      step: e.step,
      maxlength: f.value,
      rows: e.rows,
      currency: e.currency,
      locale: e.locale,
      timezone: e.timezone,
      options: e.options,
      optionLabel: e.optionLabel,
      optionValue: e.optionValue,
      optionStrict: e.optionStrict,
      errorMessage: e.errorMessage,
      minLength: e.minLength,
      requiredCharacters: e.requiredCharacters,
      mixedCase: e.mixedCase,
      mustMatch: e.mustMatch
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }));
    return (m, b) => (d(), p("div", null, [
      (d(), J($e(c.value), we({
        ref_key: "innerRef",
        ref: w
      }, B.value, {
        "onUpdate:modelValue": b[0] || (b[0] = (V) => o("update:modelValue", V)),
        onSearch: b[1] || (b[1] = (V) => o("search", V))
      }), null, 16)),
      l.helpText ? (d(), p("div", st, N(l.helpText), 1)) : q("", !0)
    ]));
  }
});
function ut(l = 1500) {
  const i = E(!1), a = E(!1);
  let e = null;
  async function o(t) {
    e && clearTimeout(e);
    try {
      await navigator.clipboard.writeText(t), i.value = !0, a.value = !1;
    } catch {
      i.value = !1, a.value = !0;
    }
    e = setTimeout(() => {
      i.value = !1, a.value = !1;
    }, l);
  }
  return { copied: i, error: a, copy: o };
}
const it = { class: "spv-copyable position-relative d-inline-block" }, dt = ["title"], ct = /* @__PURE__ */ A({
  __name: "SpvCopyable",
  props: {
    text: {}
  },
  emits: ["copied"],
  setup(l, { emit: i }) {
    const a = l, e = i, o = E(null), { copied: t, error: f, copy: c } = ut(), w = v(() => t.value ? "fas fa-check" : f.value ? "fas fa-times" : "fas fa-copy");
    async function h() {
      var B;
      const x = a.text ?? ((B = o.value) == null ? void 0 : B.innerText) ?? "";
      x && (await c(x), t.value && e("copied", x));
    }
    return (x, B) => (d(), p("span", it, [
      k("span", {
        ref_key: "contentRef",
        ref: o
      }, [
        _(x.$slots, "default", {}, void 0, !0)
      ], 512),
      k("button", {
        type: "button",
        class: T(["spv-copyable__btn btn btn-sm btn-light border position-absolute top-0 end-0 p-1 lh-1", { "is-active text-success": n(t), "is-active text-danger": n(f) }]),
        title: n(t) ? "Copied!" : "Copy to clipboard",
        onClick: h
      }, [
        k("i", {
          class: T(w.value)
        }, null, 2)
      ], 10, dt)
    ]));
  }
}), pt = (l, i) => {
  const a = l.__vccOpts || l;
  for (const [e, o] of i)
    a[e] = o;
  return a;
}, ft = /* @__PURE__ */ pt(ct, [["__scopeId", "data-v-249ac02f"]]), vt = {
  SpvAlert: Ce,
  SpvModal: qe,
  SpvToast: Ne,
  SpvOffcanvas: Ue,
  SpvNavTabs: Ke,
  SpvFormControl: rt,
  SpvCopyable: ft
}, yt = {
  install(l) {
    for (const [i, a] of Object.entries(vt))
      l.component(i, a);
  }
};
export {
  Ce as SpvAlert,
  ft as SpvCopyable,
  rt as SpvFormControl,
  qe as SpvModal,
  Ke as SpvNavTabs,
  Ue as SpvOffcanvas,
  Ne as SpvToast,
  yt as default,
  ut as useClipboard
};
