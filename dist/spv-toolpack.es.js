import { defineComponent as A, openBlock as d, createElementBlock as p, normalizeClass as T, renderSlot as _, createCommentVNode as S, ref as E, onMounted as oe, onBeforeUnmount as pe, watch as ee, createElementVNode as b, toDisplayString as N, nextTick as fe, Fragment as Z, renderList as G, createTextVNode as X, computed as v, createBlock as J, unref as n, withCtx as j, createVNode as ke, withModifiers as ce, withDirectives as ve, vModelText as be, normalizeStyle as ge, vModelCheckbox as Ve, resolveDynamicComponent as $e, mergeProps as we } from "vue";
const Ce = /* @__PURE__ */ A({
  __name: "SpvAlert",
  props: {
    variant: { default: "primary" },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismissed"],
  setup(l, { emit: i }) {
    const t = i;
    function e() {
      t("update:modelValue", !1), t("dismissed");
    }
    return (s, a) => l.modelValue ? (d(), p("div", {
      key: 0,
      class: T(["alert", `alert-${l.variant}`, { "alert-dismissible fade show": l.dismissible }]),
      role: "alert"
    }, [
      _(s.$slots, "default"),
      l.dismissible ? (d(), p("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "aria-label": "Close",
        onClick: e
      })) : S("", !0)
    ], 2)) : S("", !0);
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
    const t = l, e = i, s = E(null);
    let a = null;
    oe(() => {
      s.value && (a = new window.bootstrap.Modal(s.value, {
        backdrop: t.staticBackdrop ? "static" : !0,
        keyboard: !t.staticBackdrop
      }), s.value.addEventListener("shown.bs.modal", () => e("shown")), s.value.addEventListener("hidden.bs.modal", () => {
        e("update:modelValue", !1), e("hidden");
      }), t.modelValue && a.show());
    }), pe(() => {
      a == null || a.dispose();
    }), ee(() => t.modelValue, (c) => {
      a && (c ? a.show() : a.hide());
    });
    const f = () => [
      "modal-dialog",
      t.size ? t.size === "fullscreen" ? "modal-fullscreen" : `modal-${t.size}` : "",
      { "modal-dialog-scrollable": t.scrollable },
      { "modal-dialog-centered": t.centered }
    ];
    return (c, w) => (d(), p("div", {
      ref_key: "elRef",
      ref: s,
      class: "modal fade",
      tabindex: "-1"
    }, [
      b("div", {
        class: T(f())
      }, [
        b("div", Te, [
          l.title || c.$slots.header ? (d(), p("div", Be, [
            _(c.$slots, "header", {}, () => [
              b("h5", Ie, N(l.title), 1)
            ]),
            b("button", {
              type: "button",
              class: "btn-close",
              onClick: w[0] || (w[0] = (h) => e("update:modelValue", !1))
            })
          ])) : S("", !0),
          b("div", Pe, [
            _(c.$slots, "default")
          ]),
          c.$slots.footer ? (d(), p("div", Se, [
            _(c.$slots, "footer")
          ])) : S("", !0)
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
    const t = l, e = i, s = E(null);
    let a = null;
    return oe(() => {
      s.value && (a = new window.bootstrap.Toast(s.value, {
        autohide: t.autohide,
        delay: t.delay
      }), s.value.addEventListener("shown.bs.toast", () => e("shown")), s.value.addEventListener("hidden.bs.toast", () => {
        e("update:modelValue", !1), e("hidden");
      }), t.modelValue && a.show());
    }), pe(() => {
      a == null || a.dispose();
    }), ee(() => t.modelValue, (f) => {
      a && (f ? a.show() : a.hide());
    }), (f, c) => (d(), p("div", {
      ref_key: "elRef",
      ref: s,
      class: T(["toast", l.variant ? `text-bg-${l.variant}` : ""]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      l.title || l.subtitle ? (d(), p("div", Me, [
        _(f.$slots, "header", {}, () => [
          l.title ? (d(), p("strong", Le, N(l.title), 1)) : S("", !0),
          l.subtitle ? (d(), p("small", Fe, N(l.subtitle), 1)) : S("", !0)
        ]),
        b("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (w) => e("update:modelValue", !1))
        })
      ])) : S("", !0),
      b("div", De, [
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
    const t = l, e = i, s = E(null);
    let a = null;
    return oe(() => {
      s.value && (a = new window.bootstrap.Offcanvas(s.value, {
        backdrop: t.staticBackdrop ? "static" : !0,
        keyboard: !t.staticBackdrop,
        scroll: t.scroll
      }), s.value.addEventListener("shown.bs.offcanvas", () => e("shown")), s.value.addEventListener("hidden.bs.offcanvas", () => {
        e("update:modelValue", !1), e("hidden");
      }), t.modelValue && a.show());
    }), pe(() => {
      a == null || a.dispose();
    }), ee(() => t.modelValue, (f) => {
      a && (f ? a.show() : a.hide());
    }), (f, c) => (d(), p("div", {
      ref_key: "elRef",
      ref: s,
      class: T(["offcanvas", `offcanvas-${l.placement}`]),
      tabindex: "-1"
    }, [
      b("div", Re, [
        _(f.$slots, "header", {}, () => [
          b("h5", Oe, N(l.title), 1)
        ]),
        b("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (w) => e("update:modelValue", !1))
        })
      ]),
      b("div", Ee, [
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
    const t = l, e = i, s = E({});
    function a(c) {
      const w = s.value[c];
      if (!w) return;
      window.bootstrap.Tab.getOrCreateInstance(w).show();
    }
    oe(() => {
      fe(() => a(t.modelValue));
    }), ee(() => t.modelValue, (c) => a(c));
    function f(c) {
      e("update:modelValue", c), e("change", c);
    }
    return (c, w) => (d(), p("div", null, [
      b("ul", {
        class: T(["nav", l.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (d(!0), p(Z, null, G(l.tabs, (h) => (d(), p("li", {
          key: h.key,
          class: "nav-item",
          role: "presentation"
        }, [
          b("button", {
            ref_for: !0,
            ref: (k) => {
              k && (s.value[h.key] = k);
            },
            class: T(["nav-link", { active: l.modelValue === h.key, disabled: h.disabled }]),
            type: "button",
            role: "tab",
            "data-bs-toggle": l.pills ? "pill" : "tab",
            "data-bs-target": `#tab-pane-${h.key}`,
            "aria-controls": `tab-pane-${h.key}`,
            "aria-selected": l.modelValue === h.key,
            onShown: (k) => f(h.key)
          }, N(h.label), 43, Ae)
        ]))), 128))
      ], 2),
      b("div", ze, [
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
  class: "text-danger"
}, Je = {
  key: 1,
  class: "text-success"
}, He = {
  key: 0,
  class: "input-group-text"
}, We = {
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
    return (i, t) => (d(), p("div", null, [
      l.label ? (d(), p("label", {
        key: 0,
        for: l.id,
        class: T(l.labelClasses)
      }, [
        X(N(l.label) + " ", 1),
        l.required && !l.haveValue ? (d(), p("span", Ge, [...t[0] || (t[0] = [
          b("i", { class: "fas fa-asterisk fa-xs ms-1" }, null, -1)
        ])])) : S("", !0),
        l.required && l.haveValue ? (d(), p("span", Je, [...t[1] || (t[1] = [
          b("i", { class: "fas fa-asterisk fa-xs ms-1" }, null, -1)
        ])])) : S("", !0)
      ], 10, Ze)) : S("", !0),
      b("div", {
        class: T(["input-group", { "has-validation": l.isInvalid }])
      }, [
        !l.suppressPrefixIcon && l.iconClass ? (d(), p("span", He, [
          b("i", {
            class: T(["fas", l.iconClass])
          }, null, 2)
        ])) : S("", !0),
        _(i.$slots, "default"),
        l.isInvalid && l.errorMessage ? (d(), p("div", We, N(l.errorMessage), 1)) : S("", !0),
        _(i.$slots, "suffix")
      ], 2)
    ]));
  }
});
function O(l) {
  return l != null && typeof l == "object" && l["@@functional/placeholder"] === !0;
}
function W(l) {
  return function i(t) {
    return arguments.length === 0 || O(t) ? i : l.apply(this, arguments);
  };
}
function le(l) {
  return function i(t, e) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return O(t) ? i : W(function(s) {
          return l(t, s);
        });
      default:
        return O(t) && O(e) ? i : O(t) ? W(function(s) {
          return l(s, e);
        }) : O(e) ? W(function(s) {
          return l(t, s);
        }) : l(t, e);
    }
  };
}
function Xe(l) {
  return function i(t, e, s) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return O(t) ? i : le(function(a, f) {
          return l(t, a, f);
        });
      case 2:
        return O(t) && O(e) ? i : O(t) ? le(function(a, f) {
          return l(a, e, f);
        }) : O(e) ? le(function(a, f) {
          return l(t, a, f);
        }) : W(function(a) {
          return l(t, e, a);
        });
      default:
        return O(t) && O(e) && O(s) ? i : O(t) && O(e) ? le(function(a, f) {
          return l(a, f, s);
        }) : O(t) && O(s) ? le(function(a, f) {
          return l(a, e, f);
        }) : O(e) && O(s) ? le(function(a, f) {
          return l(t, a, f);
        }) : O(t) ? W(function(a) {
          return l(a, e, s);
        }) : O(e) ? W(function(a) {
          return l(t, a, s);
        }) : O(s) ? W(function(a) {
          return l(t, e, a);
        }) : l(t, e, s);
    }
  };
}
var Q = /* @__PURE__ */ W(function(i) {
  return i == null;
}), me = /* @__PURE__ */ Xe(function(i, t, e) {
  if (i > t)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return e < i ? i : e > t ? t : e;
});
function Qe() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function z(l) {
  const i = Qe(), t = v(() => {
    const k = l.modelValue;
    return !(Q(k) || typeof k == "string" && k.trim() === "" || Array.isArray(k) && k.length === 0);
  }), e = v(() => {
    var B;
    const k = (B = l.label) == null ? void 0 : B.trimEnd();
    return !!k && k.endsWith("*");
  }), s = v(() => l.required ?? e.value), a = v(() => e.value ? l.label.trimEnd().slice(0, -1).trimEnd() : l.label), f = v(() => !s.value || t.value), c = v(() => {
    const k = ["form-label"];
    return l.labelClass && k.push(...l.labelClass.split(/\s+/).filter(Boolean)), k;
  }), w = E(!1);
  return { id: i, haveValue: t, requiredPass: f, resolvedRequired: s, displayLabel: a, labelClasses: c, touched: w, touch: () => {
    w.value = !0;
  } };
}
const el = [
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
    const t = l[i];
    return t != null ? String(t) : "";
  }
  for (const t of el)
    if (t in l && l[t] != null) return String(l[t]);
  return JSON.stringify(l);
}
const ll = ["id", "value", "placeholder", "readonly", "maxlength", "list"], tl = ["id"], al = ["value"], nl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = E(!0), V = v(() => {
      const u = c.value;
      return !e.optionStrict || !B.value ? u : u && (f.value ? g.value : !0);
    }), I = v(() => B.value && !V.value);
    i({ requiredPass: V, touch: m });
    const $ = v(() => {
      var u;
      return (u = e.options) != null && u.length ? `${a}-list` : void 0;
    }), q = v(() => {
      var u;
      return (u = e.options) != null && u.length ? e.options.map((r) => ae(r, e.optionLabel)) : [];
    });
    function M(u) {
      const r = u.target.value;
      s("update:modelValue", r === "" ? null : r);
    }
    function P(u) {
      var U;
      if (m(), !e.optionStrict || !((U = e.options) != null && U.length)) return;
      const r = u.target, o = r.value;
      if (!o) {
        g.value = !0;
        return;
      }
      const y = o.toLowerCase(), F = q.value.find((K) => K.toLowerCase() === y);
      F ? (g.value = !0, F !== o && (r.value = F, s("update:modelValue", F))) : (g.value = !1, r.value = "", s("update:modelValue", null));
    }
    return (u, r) => (d(), J(H, {
      id: n(a),
      label: n(h),
      "label-classes": n(k),
      "icon-class": "fa-font",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": I.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        b("input", {
          id: n(a),
          type: "text",
          class: T(["form-control", { "is-invalid": I.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          maxlength: l.maxlength,
          list: $.value,
          onInput: M,
          onBlur: P
        }, null, 42, ll),
        $.value ? (d(), p("datalist", {
          key: 0,
          id: $.value
        }, [
          (d(!0), p(Z, null, G(q.value, (o) => (d(), p("option", {
            key: o,
            value: o
          }, null, 8, al))), 128))
        ], 8, tl)) : S("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), sl = ["id", "type", "value", "placeholder", "readonly"], ol = ["title", "aria-label", "aria-pressed"], rl = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, ul = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, resolvedRequired: c, displayLabel: w, labelClasses: h, touched: k, touch: B } = z(e), m = E(!1), g = E(!1);
    function V(r) {
      return /^\d+$/.test(r) ? "At least one number (0–9)" : /^[a-z]+$/i.test(r) ? "At least one letter" : r.length <= 12 ? `At least one of: ${r}` : "At least one special character";
    }
    const I = v(() => {
      var y;
      const r = e.modelValue ?? "", o = [];
      return e.minLength && o.push({
        key: "minLength",
        label: `At least ${e.minLength} character${e.minLength === 1 ? "" : "s"}`,
        passed: r.length >= e.minLength
      }), e.mixedCase && o.push({
        key: "mixedCase",
        label: "Upper and lowercase letters",
        passed: /[a-z]/.test(r) && /[A-Z]/.test(r)
      }), (y = e.requiredCharacters) == null || y.forEach((F, U) => {
        o.push({
          key: `chars-${U}`,
          label: V(F),
          passed: [...F].some((K) => r.includes(K))
        });
      }), e.mustMatch !== void 0 && o.push({
        key: "mustMatch",
        label: "Passwords match",
        passed: r.length > 0 && r === (e.mustMatch ?? "")
      }), o;
    }), $ = v(() => I.value.every((r) => r.passed)), q = v(() => I.value.length > 0), M = v(() => !c.value && !q.value ? !0 : c.value && !f.value ? !1 : $.value), P = v(() => k.value && !M.value);
    i({ requiredPass: M, touch: B });
    function u(r) {
      g.value = !0;
      const o = r.target.value;
      s("update:modelValue", o === "" ? null : o);
    }
    return (r, o) => (d(), p("div", null, [
      ke(H, {
        id: n(a),
        label: n(w),
        "label-classes": n(h),
        "icon-class": "fa-lock",
        "have-value": $.value && n(f),
        required: n(c) || q.value,
        readonly: l.readonly,
        "suppress-prefix-icon": l.suppressPrefixIcon,
        "is-invalid": P.value,
        "error-message": l.errorMessage ?? "This field is required"
      }, {
        suffix: j(() => [
          b("button", {
            type: "button",
            class: "btn btn-outline-secondary",
            title: m.value ? "Hide password" : "Show password",
            "aria-label": m.value ? "Hide password" : "Show password",
            "aria-pressed": m.value,
            tabindex: "-1",
            onClick: o[1] || (o[1] = (y) => m.value = !m.value)
          }, [
            b("i", {
              class: T(["fas", m.value ? "fa-eye-slash" : "fa-eye"])
            }, null, 2)
          ], 8, ol)
        ]),
        default: j(() => [
          b("input", {
            id: n(a),
            type: m.value ? "text" : "password",
            class: T(["form-control", { "is-invalid": P.value }]),
            value: l.modelValue ?? "",
            placeholder: l.placeholder,
            readonly: l.readonly,
            autocomplete: "current-password",
            onInput: u,
            onBlur: o[0] || (o[0] = //@ts-ignore
            (...y) => n(B) && n(B)(...y))
          }, null, 42, sl)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]),
      q.value && g.value ? (d(), p("ul", rl, [
        (d(!0), p(Z, null, G(I.value, (y) => (d(), p("li", {
          key: y.key,
          class: T(y.passed ? "text-success" : "text-danger")
        }, [
          b("i", {
            class: T(["fas fa-xs me-1", y.passed ? "fa-check" : "fa-times"])
          }, null, 2),
          X(" " + N(y.label), 1)
        ], 2))), 128))
      ])) : S("", !0)
    ]));
  }
}), il = ["id", "value", "placeholder", "readonly", "min", "max", "step"], dl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = E(null), I = v(() => Q(e.modelValue) ? "" : String(e.modelValue));
    function $(q) {
      const M = q.target.value;
      if (M === "" || M === "-") {
        s("update:modelValue", null);
        return;
      }
      const P = parseFloat(M);
      if (isNaN(P)) {
        V.value && (V.value.value = I.value);
        return;
      }
      const u = Q(e.min) ? Number.NEGATIVE_INFINITY : e.min, r = Q(e.max) ? Number.POSITIVE_INFINITY : e.max, o = me(u, r, P);
      o !== P && V.value && (V.value.value = String(o)), s("update:modelValue", o);
    }
    return (q, M) => (d(), J(H, {
      id: n(a),
      label: n(h),
      "label-classes": n(k),
      "icon-class": "fa-hashtag",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": g.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        b("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: T(["form-control", { "is-invalid": g.value }]),
          value: I.value,
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          step: l.step,
          onInput: $,
          onBlur: M[0] || (M[0] = //@ts-ignore
          (...P) => n(m) && n(m)(...P))
        }, null, 42, il)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), cl = ["id", "value", "placeholder", "readonly", "min", "max"], pl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = E(null);
    function I(u) {
      const r = u.toString(), o = r.indexOf(".");
      return o > -1 ? r.length - o - 1 : 0;
    }
    function $(u) {
      const r = I(u), o = u * 100;
      return I(o) > r + 2 ? parseFloat(o.toFixed(r)).toString() : o.toString();
    }
    function q(u) {
      const r = I(u), o = u / 100;
      return parseFloat(o.toFixed(r + 2));
    }
    const M = v(() => Q(e.modelValue) ? "" : $(e.modelValue));
    function P(u) {
      const r = u.target.value;
      if (r === "" || r === "-") {
        s("update:modelValue", null);
        return;
      }
      const o = parseFloat(r);
      if (isNaN(o)) {
        V.value && (V.value.value = M.value);
        return;
      }
      const y = Q(e.min) ? Number.NEGATIVE_INFINITY : e.min, F = Q(e.max) ? Number.POSITIVE_INFINITY : e.max, U = me(y, F, o);
      U !== o && V.value && (V.value.value = String(U)), s("update:modelValue", q(U));
    }
    return (u, r) => (d(), J(H, {
      id: n(a),
      label: n(h),
      "label-classes": n(k),
      "icon-class": "fa-percent",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": g.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        b("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: T(["form-control", { "is-invalid": g.value }]),
          value: M.value,
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          onInput: P,
          onBlur: r[0] || (r[0] = //@ts-ignore
          (...o) => n(m) && n(m)(...o))
        }, null, 42, cl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
});
function ye() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function fl(l, i) {
  const t = new Date(l.toLocaleString("en-US", { timeZone: "UTC" })), e = new Date(l.toLocaleString("en-US", { timeZone: i }));
  return (t.getTime() - e.getTime()) / 6e4;
}
function ie(l) {
  return l ? l.substring(0, 10) : "";
}
function vl(l) {
  return l ? `${l}T00:00:00Z` : null;
}
function de(l, i) {
  if (!l) return "";
  const t = i ?? ye(), e = new Date(l), s = new Intl.DateTimeFormat("en-CA", {
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).formatToParts(e), a = {};
  return s.forEach(({ type: f, value: c }) => {
    a[f] = c;
  }), `${a.year}-${a.month}-${a.day}T${a.hour}:${a.minute}`;
}
function ml(l, i) {
  if (!l) return null;
  const t = i ?? ye(), e = /* @__PURE__ */ new Date(`${l}:00Z`), s = fl(e, t);
  return new Date(e.getTime() + s * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const yl = ["id", "value", "readonly", "min", "max"], hl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = v(() => ie(e.modelValue)), I = v(() => e.min ? ie(e.min) : void 0), $ = v(() => e.max ? ie(e.max) : void 0);
    function q(M) {
      m();
      const P = M.target.value;
      s("update:modelValue", vl(P));
    }
    return (M, P) => (d(), J(H, {
      id: n(a),
      label: n(h),
      "label-classes": n(k),
      "icon-class": "fa-calendar",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": g.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        b("input", {
          id: n(a),
          type: "date",
          class: T(["form-control", { "is-invalid": g.value }]),
          value: V.value,
          readonly: l.readonly,
          min: I.value,
          max: $.value,
          onChange: q
        }, null, 42, yl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), bl = ["id", "value", "readonly", "min", "max"], gl = ["title"], xl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = v(() => e.timezone ?? ye()), I = v(
      () => de(e.modelValue, V.value)
    ), $ = v(
      () => e.min ? de(e.min, V.value) : void 0
    ), q = v(
      () => e.max ? de(e.max, V.value) : void 0
    );
    function M(P) {
      m();
      const u = P.target.value;
      s("update:modelValue", ml(u, V.value));
    }
    return (P, u) => (d(), J(H, {
      id: n(a),
      label: n(h),
      "label-classes": n(k),
      "icon-class": "fa-clock",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": g.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        b("input", {
          id: n(a),
          type: "datetime-local",
          class: T(["form-control", { "is-invalid": g.value }]),
          value: I.value,
          readonly: l.readonly,
          min: $.value,
          max: q.value,
          onChange: M
        }, null, 42, bl),
        l.timezone ? (d(), p("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${V.value}`
        }, [...u[0] || (u[0] = [
          b("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, gl)) : S("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), kl = ["id", "value", "disabled"], Vl = ["disabled"], $l = ["value"], wl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "User"];
    function I(u) {
      return typeof e.optionValue == "function" ? e.optionValue(u) : typeof e.optionValue == "string" ? typeof u == "string" || typeof u == "number" ? u : u[e.optionValue] ?? null : typeof u == "string" || typeof u == "number" ? u : e.spType && V.includes(e.spType) ? u.Id ?? null : u;
    }
    const $ = v(() => {
      var u;
      return (u = e.options) != null && u.length ? e.options.map((r) => {
        const o = ae(r, e.optionLabel), y = I(r), F = y == null ? "" : typeof y == "object" ? JSON.stringify(y) : String(y);
        return { label: o, value: y, key: F };
      }) : [];
    }), q = v(() => {
      const u = e.modelValue;
      return u == null ? "" : typeof u == "object" ? JSON.stringify(u) : String(u);
    });
    function M(u) {
      m();
      const o = u.target.value;
      if (o === "") {
        s("update:modelValue", null);
        return;
      }
      const y = $.value.find((F) => F.key === o);
      s("update:modelValue", y ? y.value : null);
    }
    function P(u) {
      u.key !== "Delete" && u.key !== "Backspace" || e.readonly || (u.preventDefault(), s("update:modelValue", null));
    }
    return (u, r) => (d(), J(H, {
      id: n(a),
      label: n(h),
      "label-classes": n(k),
      "icon-class": "fa-list-ul",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": g.value,
      "error-message": l.errorMessage ?? "Please select a value"
    }, {
      default: j(() => [
        b("select", {
          id: n(a),
          class: T(["form-select", { "is-invalid": g.value }]),
          value: q.value,
          disabled: l.readonly,
          onChange: M,
          onKeydown: P,
          onBlur: r[0] || (r[0] = //@ts-ignore
          (...o) => n(m) && n(m)(...o))
        }, [
          b("option", {
            value: "",
            disabled: n(w)
          }, N(l.placeholder ?? "Choose…"), 9, Vl),
          (d(!0), p(Z, null, G($.value, (o) => (d(), p("option", {
            key: o.key,
            value: o.key
          }, N(o.label), 9, $l))), 128))
        ], 42, kl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Cl = ["for"], Tl = {
  key: 0,
  class: "input-group-text"
}, Bl = ["aria-label", "onClick"], Il = ["id", "placeholder"], Pl = ["aria-label"], Sl = ["aria-selected", "onMousedown", "onMouseover"], ql = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Ml = {
  key: 1,
  class: "invalid-feedback"
}, Ll = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, resolvedRequired: f, displayLabel: c, labelClasses: w, touched: h, touch: k } = z(e), B = v(
      () => Array.isArray(e.modelValue) ? e.modelValue : []
    ), m = v(() => B.value.length > 0), g = v(() => !f.value || m.value), V = v(() => h.value && !g.value);
    i({ requiredPass: g, touch: k });
    const I = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function $(x) {
      return typeof e.optionValue == "function" ? e.optionValue(x) : typeof e.optionValue == "string" ? typeof x == "string" || typeof x == "number" ? x : x[e.optionValue] ?? null : typeof x == "string" || typeof x == "number" ? x : e.spType && I.includes(e.spType) ? x.Id ?? null : x;
    }
    function q(x) {
      return x == null ? "" : typeof x == "object" ? JSON.stringify(x) : String(x);
    }
    const M = v(
      () => (e.options ?? []).map((x) => ({
        label: ae(x, e.optionLabel),
        value: $(x),
        key: q($(x))
      }))
    ), P = v(() => new Set(B.value.map(q))), u = v(
      () => B.value.map((x) => {
        const L = q(x), D = M.value.find((Y) => Y.key === L);
        return { label: (D == null ? void 0 : D.label) ?? (L || String(x)), value: x, key: L };
      })
    ), r = E(""), o = E(!1), y = E(0), F = E(null), U = v(() => {
      const x = r.value.trim().toLowerCase();
      return M.value.filter((L) => P.value.has(L.key) ? !1 : x ? L.label.toLowerCase().includes(x) : !0);
    });
    ee(U, (x) => {
      y.value >= x.length && (y.value = 0);
    });
    function K() {
      e.readonly || (o.value = !0, y.value = 0);
    }
    function te() {
      k(), o.value = !1, r.value = "", y.value = 0, s("search", "");
    }
    function ne(x) {
      const L = [...B.value, x.value];
      s("update:modelValue", L), r.value = "", y.value = 0, fe(() => {
        var D;
        (D = F.value) == null || D.focus(), o.value = !0;
      });
    }
    function se(x) {
      const L = B.value.filter((D) => q(D) !== x);
      s("update:modelValue", L.length ? L : null);
    }
    function re() {
      o.value = !0, y.value = 0, s("search", r.value);
    }
    function ue() {
      K();
    }
    function C() {
      setTimeout(te, 150);
    }
    function R(x) {
      const L = U.value;
      switch (x.key) {
        case "ArrowDown":
          if (x.preventDefault(), !o.value) {
            K();
            return;
          }
          y.value = L.length ? (y.value + 1) % L.length : 0;
          break;
        case "ArrowUp":
          if (x.preventDefault(), !o.value) {
            K();
            return;
          }
          y.value = L.length ? (y.value - 1 + L.length) % L.length : 0;
          break;
        case "Enter":
          if (x.preventDefault(), o.value && L.length) {
            const D = y.value >= 0 && y.value < L.length ? y.value : 0;
            ne(L[D]);
          }
          break;
        case "Escape":
          x.preventDefault(), te();
          break;
        case "Backspace":
          if (!r.value && B.value.length) {
            const D = u.value[u.value.length - 1];
            se(D.key);
          }
          break;
      }
    }
    return (x, L) => (d(), p("div", null, [
      n(c) ? (d(), p("label", {
        key: 0,
        for: n(a),
        class: T(n(w))
      }, [
        X(N(n(c)) + " ", 1),
        n(f) ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", m.value ? "text-success" : "text-danger"])
        }, null, 2)) : S("", !0)
      ], 10, Cl)) : S("", !0),
      b("div", {
        class: T(["input-group", { "has-validation": V.value }])
      }, [
        l.suppressPrefixIcon ? S("", !0) : (d(), p("span", Tl, [...L[2] || (L[2] = [
          b("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        b("div", {
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
            l.readonly ? S("", !0) : (d(), p("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${D.label}`,
              onClick: ce((Y) => se(D.key), ["stop"])
            }, null, 8, Bl))
          ]))), 128)),
          l.readonly ? S("", !0) : ve((d(), p("input", {
            key: 0,
            id: n(a),
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
          }, null, 40, Il)), [
            [be, r.value]
          ]),
          o.value && U.value.length ? (d(), p("ul", {
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
            }, N(D.label), 47, Sl))), 128))
          ], 8, Pl)) : o.value && r.value && !U.value.length ? (d(), p("ul", ql, [...L[3] || (L[3] = [
            b("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : S("", !0)
        ], 2),
        V.value ? (d(), p("div", Ml, N(l.errorMessage ?? "Please select at least one value"), 1)) : S("", !0)
      ], 2)
    ]));
  }
}), Fl = ["id", "value", "disabled", "title"], Dl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    function V($) {
      m(), s("update:modelValue", $.target.value);
    }
    function I($) {
      $.key !== "Delete" && $.key !== "Backspace" || e.readonly || ($.preventDefault(), s("update:modelValue", null));
    }
    return ($, q) => (d(), J(H, {
      id: n(a),
      label: n(h),
      "label-classes": n(k),
      "icon-class": "fa-palette",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": g.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        b("input", {
          id: n(a),
          type: "color",
          class: T(["form-control form-control-color flex-grow-1", { "is-invalid": g.value }]),
          value: l.modelValue ?? "#000000",
          disabled: l.readonly,
          title: l.modelValue ?? "Choose a colour",
          onChange: V,
          onKeydown: I
        }, null, 42, Fl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Nl = ["aria-labelledby"], Rl = ["id"], Ol = ["id", "type", "checked", "disabled", "name", "onClick"], El = ["for"], Ul = {
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function I(o) {
      return typeof e.optionValue == "function" ? e.optionValue(o) : typeof e.optionValue == "string" ? typeof o == "string" || typeof o == "number" ? o : o[e.optionValue] ?? null : typeof o == "string" || typeof o == "number" ? o : e.spType && V.includes(e.spType) ? o.Id ?? null : o;
    }
    function $(o) {
      return o == null ? "" : typeof o == "object" ? JSON.stringify(o) : String(o);
    }
    const q = v(
      () => (e.options ?? []).map((o) => ({
        label: ae(o, e.optionLabel),
        value: I(o),
        key: $(I(o))
      }))
    ), M = v(
      () => e.multi && Array.isArray(e.modelValue) ? e.modelValue : []
    );
    function P(o) {
      return e.multi ? M.value.some((y) => $(y) === o) : $(e.modelValue) === o;
    }
    function u(o) {
      if (!e.readonly)
        if (m(), e.multi)
          if (M.value.some((F) => $(F) === o.key)) {
            const F = M.value.filter((U) => $(U) !== o.key);
            s("update:modelValue", F.length ? F : null);
          } else
            s("update:modelValue", [...M.value, o.value]);
        else
          $(e.modelValue) === o.key ? s("update:modelValue", null) : s("update:modelValue", o.value);
    }
    const r = v(
      () => e.multi ? "Please select at least one option" : "Please select an option"
    );
    return (o, y) => (d(), p("div", {
      role: "group",
      "aria-labelledby": n(h) ? `${n(a)}-label` : void 0
    }, [
      n(h) ? (d(), p("div", {
        key: 0,
        id: `${n(a)}-label`,
        class: T(n(k)),
        style: { "margin-bottom": "0.25rem" }
      }, [
        X(N(n(h)) + " ", 1),
        n(w) ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", n(f) ? "text-success" : "text-danger"])
        }, null, 2)) : S("", !0)
      ], 10, Rl)) : S("", !0),
      b("div", null, [
        (d(!0), p(Z, null, G(q.value, (F, U) => (d(), p("div", {
          key: F.key,
          class: T(["form-check", { "form-check-inline": !l.stacked }])
        }, [
          b("input", {
            id: `${n(a)}-opt-${U}`,
            type: l.multi ? "checkbox" : "radio",
            class: T(["form-check-input", { "is-invalid": g.value }]),
            checked: P(F.key),
            disabled: l.readonly,
            name: l.multi ? void 0 : n(a),
            onClick: (K) => u(F)
          }, null, 10, Ol),
          b("label", {
            for: `${n(a)}-opt-${U}`,
            class: "form-check-label"
          }, N(F.label), 9, El)
        ], 2))), 128))
      ]),
      g.value ? (d(), p("div", Ul, N(l.errorMessage ?? r.value), 1)) : S("", !0)
    ], 8, Nl));
  }
}), Al = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], zl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    function V(I) {
      const $ = I.target.value;
      s("update:modelValue", $ === "" ? null : $);
    }
    return (I, $) => (d(), J(H, {
      id: n(a),
      label: n(h),
      "label-classes": n(k),
      "icon-class": "fa-pen-fancy",
      "have-value": n(f),
      required: n(w),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": g.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: j(() => [
        b("textarea", {
          id: n(a),
          class: T(["form-control", { "is-invalid": g.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          maxlength: l.maxlength,
          rows: l.rows,
          onInput: V,
          onBlur: $[0] || ($[0] = //@ts-ignore
          (...q) => n(m) && n(m)(...q))
        }, null, 42, Al)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), _l = { class: "form-check form-switch" }, Kl = ["id", "disabled"], Yl = ["for"], jl = {
  key: 0,
  class: "invalid-feedback d-block"
}, Zl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = v({
      get: () => e.modelValue === !0,
      set: (I) => {
        e.readonly || (m(), s("update:modelValue", I));
      }
    });
    return (I, $) => (d(), p("div", null, [
      b("div", _l, [
        ve(b("input", {
          id: n(a),
          type: "checkbox",
          role: "switch",
          class: T(["form-check-input", { "is-invalid": g.value }]),
          "onUpdate:modelValue": $[0] || ($[0] = (q) => V.value = q),
          disabled: l.readonly
        }, null, 10, Kl), [
          [Ve, V.value]
        ]),
        b("label", {
          for: n(a),
          class: T(["form-check-label", ...n(k).filter((q) => q !== "form-label")])
        }, [
          X(N(n(h)) + " ", 1),
          n(w) ? (d(), p("i", {
            key: 0,
            class: T(["fas fa-asterisk fa-xs ms-1", n(f) ? "text-success" : "text-danger"])
          }, null, 2)) : S("", !0)
        ], 10, Yl)
      ]),
      g.value ? (d(), p("div", jl, N(l.errorMessage ?? "This field is required"), 1)) : S("", !0)
    ]));
  }
}), Gl = ["for"], Jl = { class: "input-group-text fw-semibold" }, Hl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], Wl = {
  key: 0,
  class: "invalid-feedback"
}, Xl = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
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
    }), $ = v(() => e.min ?? -1 / 0), q = v(() => e.max ?? 1 / 0);
    function M(u) {
      const r = u.target.value;
      if (r === "") {
        s("update:modelValue", null);
        return;
      }
      const o = parseFloat(r);
      isNaN(o) || s("update:modelValue", o);
    }
    function P(u) {
      if (m(), u.target.value === "" || e.modelValue === null) return;
      const o = me($.value, q.value, e.modelValue);
      o !== e.modelValue && (s("update:modelValue", o), V.value && (V.value.value = String(o)));
    }
    return (u, r) => (d(), p("div", null, [
      n(h) ? (d(), p("label", {
        key: 0,
        for: n(a),
        class: T(n(k))
      }, [
        X(N(n(h)) + " ", 1),
        n(w) ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", n(f) ? "text-success" : "text-danger"])
        }, null, 2)) : S("", !0)
      ], 10, Gl)) : S("", !0),
      b("div", {
        class: T(["input-group", { "has-validation": g.value }])
      }, [
        b("span", Jl, N(I.value), 1),
        b("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: T(["form-control", { "is-invalid": g.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          step: l.step,
          onInput: M,
          onBlur: P
        }, null, 42, Hl),
        g.value ? (d(), p("div", Wl, N(l.errorMessage ?? "This field is required"), 1)) : S("", !0)
      ], 2)
    ]));
  }
}), Ql = ["for"], et = {
  key: 0,
  class: "input-group-text"
}, lt = { class: "position-relative flex-grow-1 d-flex" }, tt = ["id", "placeholder", "readonly"], at = ["aria-label"], nt = ["aria-selected", "onMousedown", "onMouseover"], st = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, ot = {
  key: 1,
  class: "invalid-feedback"
}, rt = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, { id: a, haveValue: f, requiredPass: c, resolvedRequired: w, displayLabel: h, labelClasses: k, touched: B, touch: m } = z(e), g = v(() => B.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function I(C) {
      return typeof e.optionValue == "function" ? e.optionValue(C) : typeof e.optionValue == "string" ? typeof C == "string" || typeof C == "number" ? C : C[e.optionValue] ?? null : typeof C == "string" || typeof C == "number" ? C : e.spType && V.includes(e.spType) ? C.Id ?? null : C;
    }
    function $(C) {
      return C == null ? "" : typeof C == "object" ? JSON.stringify(C) : String(C);
    }
    const q = v(
      () => (e.options ?? []).map((C) => ({
        label: ae(C, e.optionLabel),
        value: I(C),
        key: $(I(C))
      }))
    ), M = v(() => {
      if (e.modelValue === null || e.modelValue === void 0) return null;
      const C = $(e.modelValue), R = q.value.find((x) => x.key === C);
      return (R == null ? void 0 : R.label) ?? String(e.modelValue);
    }), P = E(""), u = E(!1), r = E(0), o = E(null);
    ee(M, (C) => {
      C !== null && (P.value = C);
    }, { immediate: !0 });
    const y = v(() => {
      const C = P.value.trim().toLowerCase(), R = $(e.modelValue);
      return q.value.filter((x) => x.key === R ? !1 : C ? x.label.toLowerCase().includes(C) : !0);
    });
    ee(y, (C) => {
      r.value >= C.length && (r.value = 0);
    });
    function F() {
      e.readonly || (u.value = !0, r.value = 0);
    }
    function U() {
      m(), u.value = !1, r.value = 0, s("search", ""), M.value !== null && (P.value = M.value);
    }
    function K(C) {
      s("update:modelValue", C.value), P.value = C.label, u.value = !1, s("search", "");
    }
    function te() {
      s("update:modelValue", null), P.value = "", s("search", ""), fe(() => {
        var C;
        return (C = o.value) == null ? void 0 : C.focus();
      });
    }
    function ne() {
      e.modelValue !== null && e.modelValue !== void 0 && s("update:modelValue", null), u.value = !0, r.value = 0, s("search", P.value);
    }
    function se() {
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
            const x = r.value >= 0 && r.value < R.length ? r.value : 0;
            K(R[x]);
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
        for: n(a),
        class: T(n(k))
      }, [
        X(N(n(h)) + " ", 1),
        n(w) ? (d(), p("i", {
          key: 0,
          class: T(["fas fa-asterisk fa-xs ms-1", n(f) ? "text-success" : "text-danger"])
        }, null, 2)) : S("", !0)
      ], 10, Ql)) : S("", !0),
      b("div", {
        class: T(["input-group", { "has-validation": g.value }])
      }, [
        l.suppressPrefixIcon ? S("", !0) : (d(), p("span", et, [...R[1] || (R[1] = [
          b("i", { class: "fas fa-search" }, null, -1)
        ])])),
        b("div", lt, [
          ve(b("input", {
            id: n(a),
            ref_key: "inputRef",
            ref: o,
            type: "text",
            class: T(["form-control border-end-0", { "is-invalid": g.value }]),
            "onUpdate:modelValue": R[0] || (R[0] = (x) => P.value = x),
            placeholder: l.placeholder ?? "Type to search…",
            readonly: l.readonly,
            autocomplete: "off",
            onInput: ne,
            onFocus: se,
            onBlur: re,
            onKeydown: ue
          }, null, 42, tt), [
            [be, P.value]
          ]),
          u.value && y.value.length ? (d(), p("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(h) ?? "Suggestions"
          }, [
            (d(!0), p(Z, null, G(y.value, (x, L) => (d(), p("li", {
              key: x.key,
              role: "option",
              "aria-selected": L === r.value,
              class: T(["dropdown-item", { active: L === r.value }]),
              style: ge(L === r.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: ce((D) => K(x), ["prevent"]),
              onMouseover: (D) => r.value = L
            }, N(x.label), 47, nt))), 128))
          ], 8, at)) : u.value && P.value && !y.value.length ? (d(), p("ul", st, [...R[2] || (R[2] = [
            b("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : S("", !0)
        ]),
        g.value ? (d(), p("div", ot, N(l.errorMessage ?? "Please select a value"), 1)) : S("", !0),
        n(f) && !l.readonly ? (d(), p("button", {
          key: 2,
          type: "button",
          class: "btn btn-outline-secondary",
          title: "Clear selection",
          "aria-label": "Clear selection",
          tabindex: "-1",
          onClick: te
        }, [...R[3] || (R[3] = [
          b("i", { class: "fas fa-times" }, null, -1)
        ])])) : S("", !0)
      ], 2)
    ]));
  }
}), ut = {
  key: 0,
  class: "form-text text-muted"
}, it = /* @__PURE__ */ A({
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
  setup(l, { expose: i, emit: t }) {
    const e = l, s = t, a = v(() => e.type ? e.type : e.spType ? Ye[e.spType] : "text"), f = v(() => {
      if (e.maxlength !== void 0) return e.maxlength;
      if (e.spType) return je[e.spType];
    }), c = v(() => {
      switch (a.value) {
        case "password":
          return ul;
        case "number":
          return dl;
        case "percent":
          return pl;
        case "date":
          return hl;
        case "datetime-local":
          return xl;
        case "select":
          return wl;
        case "lookupMulti":
          return Ll;
        case "color":
          return Dl;
        case "checkboxes":
          return he;
        case "radio":
          return he;
        case "textarea":
          return zl;
        case "switch":
          return Zl;
        case "currency":
          return Xl;
        case "lookup":
          return rt;
        case "text":
        default:
          return nl;
      }
    }), w = E(null), h = v(() => {
      var m;
      return ((m = w.value) == null ? void 0 : m.requiredPass) ?? !0;
    });
    function k() {
      var m, g;
      (g = (m = w.value) == null ? void 0 : m.touch) == null || g.call(m);
    }
    i({ requiredPass: h, touch: k });
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
      multi: a.value === "checkboxes",
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
    return (m, g) => (d(), p("div", null, [
      (d(), J($e(c.value), we({
        ref_key: "innerRef",
        ref: w
      }, B.value, {
        "onUpdate:modelValue": g[0] || (g[0] = (V) => s("update:modelValue", V)),
        onSearch: g[1] || (g[1] = (V) => s("search", V))
      }), null, 16)),
      l.helpText ? (d(), p("div", ut, N(l.helpText), 1)) : S("", !0)
    ]));
  }
});
function dt(l = 1500) {
  const i = E(!1), t = E(!1);
  let e = null;
  async function s(a) {
    e && clearTimeout(e);
    try {
      await navigator.clipboard.writeText(a), i.value = !0, t.value = !1;
    } catch {
      i.value = !1, t.value = !0;
    }
    e = setTimeout(() => {
      i.value = !1, t.value = !1;
    }, l);
  }
  return { copied: i, error: t, copy: s };
}
const ct = { class: "spv-copyable position-relative d-inline-block" }, pt = ["title"], ft = /* @__PURE__ */ A({
  __name: "SpvCopyable",
  props: {
    text: {}
  },
  emits: ["copied"],
  setup(l, { emit: i }) {
    const t = l, e = i, s = E(null), { copied: a, error: f, copy: c } = dt(), w = v(() => a.value ? "fas fa-check" : f.value ? "fas fa-times" : "fas fa-copy");
    async function h() {
      var B;
      const k = t.text ?? ((B = s.value) == null ? void 0 : B.innerText) ?? "";
      k && (await c(k), a.value && e("copied", k));
    }
    return (k, B) => (d(), p("span", ct, [
      b("span", {
        ref_key: "contentRef",
        ref: s
      }, [
        _(k.$slots, "default", {}, void 0, !0)
      ], 512),
      b("button", {
        type: "button",
        class: T(["spv-copyable__btn btn btn-sm btn-light border position-absolute top-0 end-0 p-1 lh-1", { "is-active text-success": n(a), "is-active text-danger": n(f) }]),
        title: n(a) ? "Copied!" : "Copy to clipboard",
        onClick: h
      }, [
        b("i", {
          class: T(w.value)
        }, null, 2)
      ], 10, pt)
    ]));
  }
}), vt = (l, i) => {
  const t = l.__vccOpts || l;
  for (const [e, s] of i)
    t[e] = s;
  return t;
}, mt = /* @__PURE__ */ vt(ft, [["__scopeId", "data-v-249ac02f"]]), yt = {
  SpvAlert: Ce,
  SpvModal: qe,
  SpvToast: Ne,
  SpvOffcanvas: Ue,
  SpvNavTabs: Ke,
  SpvFormControl: it,
  SpvCopyable: mt
}, bt = {
  install(l) {
    for (const [i, t] of Object.entries(yt))
      l.component(i, t);
  }
};
export {
  Ce as SpvAlert,
  mt as SpvCopyable,
  it as SpvFormControl,
  qe as SpvModal,
  Ke as SpvNavTabs,
  Ue as SpvOffcanvas,
  Ne as SpvToast,
  bt as default,
  dt as useClipboard
};
