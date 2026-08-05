import { defineComponent as A, openBlock as d, createElementBlock as v, normalizeClass as B, renderSlot as K, createCommentVNode as I, ref as E, onMounted as re, onBeforeUnmount as ve, watch as ee, createElementVNode as g, toDisplayString as R, nextTick as fe, Fragment as Z, renderList as J, createTextVNode as X, createBlock as _, computed as f, unref as n, withCtx as G, createVNode as Ve, withModifiers as pe, withDirectives as me, vModelText as ge, normalizeStyle as xe, vModelCheckbox as $e, resolveDynamicComponent as we, mergeProps as Ce } from "vue";
const Te = /* @__PURE__ */ A({
  __name: "SpvAlert",
  props: {
    variant: { default: "primary" },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismissed"],
  setup(e, { emit: i }) {
    const t = i;
    function l() {
      t("update:modelValue", !1), t("dismissed");
    }
    return (o, a) => e.modelValue ? (d(), v("div", {
      key: 0,
      class: B(["alert", `alert-${e.variant}`, { "alert-dismissible fade show": e.dismissible }]),
      role: "alert"
    }, [
      K(o.$slots, "default"),
      e.dismissible ? (d(), v("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "aria-label": "Close",
        onClick: l
      })) : I("", !0)
    ], 2)) : I("", !0);
  }
}), Be = { class: "modal-content" }, Ie = {
  key: 0,
  class: "modal-header"
}, Pe = { class: "modal-title" }, Se = { class: "modal-body" }, qe = {
  key: 1,
  class: "modal-footer"
}, Me = /* @__PURE__ */ A({
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
    const t = e, l = i, o = E(null);
    let a = null;
    re(() => {
      o.value && (a = new window.bootstrap.Modal(o.value, {
        backdrop: t.staticBackdrop ? "static" : !0,
        keyboard: !t.staticBackdrop
      }), o.value.addEventListener("shown.bs.modal", () => l("shown")), o.value.addEventListener("hidden.bs.modal", () => {
        l("update:modelValue", !1), l("hidden");
      }), t.modelValue && a.show());
    }), ve(() => {
      a == null || a.dispose();
    }), ee(() => t.modelValue, (c) => {
      a && (c ? a.show() : a.hide());
    });
    const p = () => [
      "modal-dialog",
      t.size ? t.size === "fullscreen" ? "modal-fullscreen" : `modal-${t.size}` : "",
      { "modal-dialog-scrollable": t.scrollable },
      { "modal-dialog-centered": t.centered }
    ];
    return (c, C) => (d(), v("div", {
      ref_key: "elRef",
      ref: o,
      class: "modal fade",
      tabindex: "-1"
    }, [
      g("div", {
        class: B(p())
      }, [
        g("div", Be, [
          e.title || c.$slots.header ? (d(), v("div", Ie, [
            K(c.$slots, "header", {}, () => [
              g("h5", Pe, R(e.title), 1)
            ]),
            g("button", {
              type: "button",
              class: "btn-close",
              onClick: C[0] || (C[0] = (b) => l("update:modelValue", !1))
            })
          ])) : I("", !0),
          g("div", Se, [
            K(c.$slots, "default")
          ]),
          c.$slots.footer ? (d(), v("div", qe, [
            K(c.$slots, "footer")
          ])) : I("", !0)
        ])
      ], 2)
    ], 512));
  }
}), Le = {
  key: 0,
  class: "toast-header"
}, Fe = {
  key: 0,
  class: "me-auto"
}, De = { key: 1 }, Re = { class: "toast-body" }, Ne = /* @__PURE__ */ A({
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
    const t = e, l = i, o = E(null);
    let a = null;
    return re(() => {
      o.value && (a = new window.bootstrap.Toast(o.value, {
        autohide: t.autohide,
        delay: t.delay
      }), o.value.addEventListener("shown.bs.toast", () => l("shown")), o.value.addEventListener("hidden.bs.toast", () => {
        l("update:modelValue", !1), l("hidden");
      }), t.modelValue && a.show());
    }), ve(() => {
      a == null || a.dispose();
    }), ee(() => t.modelValue, (p) => {
      a && (p ? a.show() : a.hide());
    }), (p, c) => (d(), v("div", {
      ref_key: "elRef",
      ref: o,
      class: B(["toast", e.variant ? `text-bg-${e.variant}` : ""]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      e.title || e.subtitle ? (d(), v("div", Le, [
        K(p.$slots, "header", {}, () => [
          e.title ? (d(), v("strong", Fe, R(e.title), 1)) : I("", !0),
          e.subtitle ? (d(), v("small", De, R(e.subtitle), 1)) : I("", !0)
        ]),
        g("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (C) => l("update:modelValue", !1))
        })
      ])) : I("", !0),
      g("div", Re, [
        K(p.$slots, "default")
      ])
    ], 2));
  }
}), Oe = { class: "offcanvas-header" }, Ee = { class: "offcanvas-title" }, Ae = { class: "offcanvas-body" }, Ue = /* @__PURE__ */ A({
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
    const t = e, l = i, o = E(null);
    let a = null;
    return re(() => {
      o.value && (a = new window.bootstrap.Offcanvas(o.value, {
        backdrop: t.staticBackdrop ? "static" : !0,
        keyboard: !t.staticBackdrop,
        scroll: t.scroll
      }), o.value.addEventListener("shown.bs.offcanvas", () => l("shown")), o.value.addEventListener("hidden.bs.offcanvas", () => {
        l("update:modelValue", !1), l("hidden");
      }), t.modelValue && a.show());
    }), ve(() => {
      a == null || a.dispose();
    }), ee(() => t.modelValue, (p) => {
      a && (p ? a.show() : a.hide());
    }), (p, c) => (d(), v("div", {
      ref_key: "elRef",
      ref: o,
      class: B(["offcanvas", `offcanvas-${e.placement}`]),
      tabindex: "-1"
    }, [
      g("div", Oe, [
        K(p.$slots, "header", {}, () => [
          g("h5", Ee, R(e.title), 1)
        ]),
        g("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (C) => l("update:modelValue", !1))
        })
      ]),
      g("div", Ae, [
        K(p.$slots, "default")
      ])
    ], 2));
  }
}), _e = ["data-bs-toggle", "data-bs-target", "aria-controls", "aria-selected", "onShown"], ze = { class: "tab-content" }, Ke = ["id"], je = /* @__PURE__ */ A({
  __name: "SpvNavTabs",
  props: {
    modelValue: {},
    tabs: {},
    pills: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: i }) {
    const t = e, l = i, o = E({});
    function a(c) {
      const C = o.value[c];
      if (!C) return;
      window.bootstrap.Tab.getOrCreateInstance(C).show();
    }
    re(() => {
      fe(() => a(t.modelValue));
    }), ee(() => t.modelValue, (c) => a(c));
    function p(c) {
      l("update:modelValue", c), l("change", c);
    }
    return (c, C) => (d(), v("div", null, [
      g("ul", {
        class: B(["nav", e.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (d(!0), v(Z, null, J(e.tabs, (b) => (d(), v("li", {
          key: b.key,
          class: "nav-item",
          role: "presentation"
        }, [
          g("button", {
            ref_for: !0,
            ref: (y) => {
              y && (o.value[b.key] = y);
            },
            class: B(["nav-link", { active: e.modelValue === b.key, disabled: b.disabled }]),
            type: "button",
            role: "tab",
            "data-bs-toggle": e.pills ? "pill" : "tab",
            "data-bs-target": `#tab-pane-${b.key}`,
            "aria-controls": `tab-pane-${b.key}`,
            "aria-selected": e.modelValue === b.key,
            onShown: (y) => p(b.key)
          }, R(b.label), 43, _e)
        ]))), 128))
      ], 2),
      g("div", ze, [
        (d(!0), v(Z, null, J(e.tabs, (b) => (d(), v("div", {
          id: `tab-pane-${b.key}`,
          key: b.key,
          class: B(["tab-pane", "fade", { "show active": e.modelValue === b.key }]),
          role: "tabpanel"
        }, [
          K(c.$slots, b.key)
        ], 10, Ke))), 128))
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
}, Ze = {
  Text: 255
  // SP enforces 255 char limit on single-line text fields
}, Ge = {
  key: 0,
  class: "text-danger"
}, Je = {
  key: 1,
  class: "text-success"
}, te = /* @__PURE__ */ A({
  __name: "RequiredIndicator",
  props: {
    haveValue: { type: Boolean }
  },
  setup(e) {
    return (i, t) => (d(), v(Z, null, [
      e.haveValue ? I("", !0) : (d(), v("span", Ge, [...t[0] || (t[0] = [
        g("i", { class: "fas fa-asterisk fa-xs ms-1" }, null, -1)
      ])])),
      e.haveValue ? (d(), v("span", Je, [...t[1] || (t[1] = [
        g("i", { class: "fas fa-asterisk fa-xs ms-1" }, null, -1)
      ])])) : I("", !0)
    ], 64));
  }
}), He = ["for"], We = {
  key: 0,
  class: "input-group-text"
}, Xe = {
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
  setup(e) {
    return (i, t) => (d(), v("div", null, [
      e.label ? (d(), v("label", {
        key: 0,
        for: e.id,
        class: B(e.labelClasses)
      }, [
        X(R(e.label) + " ", 1),
        e.required ? (d(), _(te, {
          key: 0,
          "have-value": e.haveValue
        }, null, 8, ["have-value"])) : I("", !0)
      ], 10, He)) : I("", !0),
      g("div", {
        class: B(["input-group", { "has-validation": e.isInvalid }])
      }, [
        !e.suppressPrefixIcon && e.iconClass ? (d(), v("span", We, [
          g("i", {
            class: B(["fas", e.iconClass])
          }, null, 2)
        ])) : I("", !0),
        K(i.$slots, "default"),
        e.isInvalid && e.errorMessage ? (d(), v("div", Xe, R(e.errorMessage), 1)) : I("", !0),
        K(i.$slots, "suffix")
      ], 2)
    ]));
  }
});
function O(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function W(e) {
  return function i(t) {
    return arguments.length === 0 || O(t) ? i : e.apply(this, arguments);
  };
}
function le(e) {
  return function i(t, l) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return O(t) ? i : W(function(o) {
          return e(t, o);
        });
      default:
        return O(t) && O(l) ? i : O(t) ? W(function(o) {
          return e(o, l);
        }) : O(l) ? W(function(o) {
          return e(t, o);
        }) : e(t, l);
    }
  };
}
function Qe(e) {
  return function i(t, l, o) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return O(t) ? i : le(function(a, p) {
          return e(t, a, p);
        });
      case 2:
        return O(t) && O(l) ? i : O(t) ? le(function(a, p) {
          return e(a, l, p);
        }) : O(l) ? le(function(a, p) {
          return e(t, a, p);
        }) : W(function(a) {
          return e(t, l, a);
        });
      default:
        return O(t) && O(l) && O(o) ? i : O(t) && O(l) ? le(function(a, p) {
          return e(a, p, o);
        }) : O(t) && O(o) ? le(function(a, p) {
          return e(a, l, p);
        }) : O(l) && O(o) ? le(function(a, p) {
          return e(t, a, p);
        }) : O(t) ? W(function(a) {
          return e(a, l, o);
        }) : O(l) ? W(function(a) {
          return e(t, a, o);
        }) : O(o) ? W(function(a) {
          return e(t, l, a);
        }) : e(t, l, o);
    }
  };
}
var Q = /* @__PURE__ */ W(function(i) {
  return i == null;
}), ye = /* @__PURE__ */ Qe(function(i, t, l) {
  if (i > t)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return l < i ? i : l > t ? t : l;
});
function el() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function z(e) {
  const i = el(), t = f(() => {
    const y = e.modelValue;
    if (Q(y) || typeof y == "string" && y.trim() === "" || Array.isArray(y) && y.length === 0) return !1;
    if (typeof y == "object") {
      const w = y.results;
      return Array.isArray(w) ? w.length > 0 : Object.keys(y).length > 0;
    }
    return !0;
  }), l = f(() => {
    var w;
    const y = (w = e.label) == null ? void 0 : w.trimEnd();
    return !!y && y.endsWith("*");
  }), o = f(() => e.required ?? l.value), a = f(() => l.value ? e.label.trimEnd().slice(0, -1).trimEnd() : e.label), p = f(() => !o.value || t.value), c = f(() => {
    const y = ["form-label"];
    return e.labelClass && y.push(...e.labelClass.split(/\s+/).filter(Boolean)), y;
  }), C = E(!1);
  return { id: i, haveValue: t, requiredPass: p, resolvedRequired: o, displayLabel: a, labelClasses: c, touched: C, touch: () => {
    C.value = !0;
  } };
}
const ll = [
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
function ne(e, i) {
  if (typeof e == "string") return e;
  if (typeof e == "number") return String(e);
  if (typeof i == "function") return i(e);
  if (typeof i == "string") {
    const t = e[i];
    return t != null ? String(t) : "";
  }
  for (const t of ll)
    if (t in e && e[t] != null) return String(e[t]);
  return JSON.stringify(e);
}
const tl = ["id", "value", "placeholder", "readonly", "maxlength", "list"], al = ["id"], nl = ["value"], ol = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = E(!0), V = f(() => {
      const u = c.value;
      return !l.optionStrict || !w.value ? u : u && (p.value ? x.value : !0);
    }), P = f(() => w.value && !V.value);
    i({ requiredPass: V, touch: m });
    const $ = f(() => {
      var u;
      return (u = l.options) != null && u.length ? `${a}-list` : void 0;
    }), q = f(() => {
      var u;
      return (u = l.options) != null && u.length ? l.options.map((r) => ne(r, l.optionLabel)) : [];
    });
    function M(u) {
      const r = u.target.value;
      o("update:modelValue", r === "" ? null : r);
    }
    function S(u) {
      var U;
      if (m(), !l.optionStrict || !((U = l.options) != null && U.length)) return;
      const r = u.target, s = r.value;
      if (!s) {
        x.value = !0;
        return;
      }
      const h = s.toLowerCase(), F = q.value.find((j) => j.toLowerCase() === h);
      F ? (x.value = !0, F !== s && (r.value = F, o("update:modelValue", F))) : (x.value = !1, r.value = "", o("update:modelValue", null));
    }
    return (u, r) => (d(), _(H, {
      id: n(a),
      label: n(b),
      "label-classes": n(y),
      "icon-class": "fa-font",
      "have-value": n(p),
      required: n(C),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": P.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: G(() => [
        g("input", {
          id: n(a),
          type: "text",
          class: B(["form-control", { "is-invalid": P.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          list: $.value,
          onInput: M,
          onBlur: S
        }, null, 42, tl),
        $.value ? (d(), v("datalist", {
          key: 0,
          id: $.value
        }, [
          (d(!0), v(Z, null, J(q.value, (s) => (d(), v("option", {
            key: s,
            value: s
          }, null, 8, nl))), 128))
        ], 8, al)) : I("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), sl = ["id", "type", "value", "placeholder", "readonly"], rl = ["title", "aria-label", "aria-pressed"], ul = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, il = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, resolvedRequired: c, displayLabel: C, labelClasses: b, touched: y, touch: w } = z(l), m = E(!1), x = E(!1);
    function V(r) {
      return /^\d+$/.test(r) ? "At least one number (0–9)" : /^[a-z]+$/i.test(r) ? "At least one letter" : r.length <= 12 ? `At least one of: ${r}` : "At least one special character";
    }
    const P = f(() => {
      var h;
      const r = l.modelValue ?? "", s = [];
      return l.minLength && s.push({
        key: "minLength",
        label: `At least ${l.minLength} character${l.minLength === 1 ? "" : "s"}`,
        passed: r.length >= l.minLength
      }), l.mixedCase && s.push({
        key: "mixedCase",
        label: "Upper and lowercase letters",
        passed: /[a-z]/.test(r) && /[A-Z]/.test(r)
      }), (h = l.requiredCharacters) == null || h.forEach((F, U) => {
        s.push({
          key: `chars-${U}`,
          label: V(F),
          passed: [...F].some((j) => r.includes(j))
        });
      }), l.mustMatch !== void 0 && s.push({
        key: "mustMatch",
        label: "Passwords match",
        passed: r.length > 0 && r === (l.mustMatch ?? "")
      }), s;
    }), $ = f(() => P.value.every((r) => r.passed)), q = f(() => P.value.length > 0), M = f(() => !c.value && !q.value ? !0 : c.value && !p.value ? !1 : $.value), S = f(() => y.value && !M.value);
    i({ requiredPass: M, touch: w });
    function u(r) {
      x.value = !0;
      const s = r.target.value;
      o("update:modelValue", s === "" ? null : s);
    }
    return (r, s) => (d(), v("div", null, [
      Ve(H, {
        id: n(a),
        label: n(C),
        "label-classes": n(b),
        "icon-class": "fa-lock",
        "have-value": $.value && n(p),
        required: n(c) || q.value,
        readonly: e.readonly,
        "suppress-prefix-icon": e.suppressPrefixIcon,
        "is-invalid": S.value,
        "error-message": e.errorMessage ?? "This field is required"
      }, {
        suffix: G(() => [
          g("button", {
            type: "button",
            class: "btn btn-outline-secondary",
            title: m.value ? "Hide password" : "Show password",
            "aria-label": m.value ? "Hide password" : "Show password",
            "aria-pressed": m.value,
            tabindex: "-1",
            onClick: s[1] || (s[1] = (h) => m.value = !m.value)
          }, [
            g("i", {
              class: B(["fas", m.value ? "fa-eye-slash" : "fa-eye"])
            }, null, 2)
          ], 8, rl)
        ]),
        default: G(() => [
          g("input", {
            id: n(a),
            type: m.value ? "text" : "password",
            class: B(["form-control", { "is-invalid": S.value }]),
            value: e.modelValue ?? "",
            placeholder: e.placeholder,
            readonly: e.readonly,
            autocomplete: "current-password",
            onInput: u,
            onBlur: s[0] || (s[0] = //@ts-ignore
            (...h) => n(w) && n(w)(...h))
          }, null, 42, sl)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]),
      q.value && x.value ? (d(), v("ul", ul, [
        (d(!0), v(Z, null, J(P.value, (h) => (d(), v("li", {
          key: h.key,
          class: B(h.passed ? "text-success" : "text-danger")
        }, [
          g("i", {
            class: B(["fas fa-xs me-1", h.passed ? "fa-check" : "fa-times"])
          }, null, 2),
          X(" " + R(h.label), 1)
        ], 2))), 128))
      ])) : I("", !0)
    ]));
  }
}), dl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], cl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = E(null), P = f(() => Q(l.modelValue) ? "" : String(l.modelValue));
    function $(q) {
      const M = q.target.value;
      if (M === "" || M === "-") {
        o("update:modelValue", null);
        return;
      }
      const S = parseFloat(M);
      if (isNaN(S)) {
        V.value && (V.value.value = P.value);
        return;
      }
      const u = Q(l.min) ? Number.NEGATIVE_INFINITY : l.min, r = Q(l.max) ? Number.POSITIVE_INFINITY : l.max, s = ye(u, r, S);
      s !== S && V.value && (V.value.value = String(s)), o("update:modelValue", s);
    }
    return (q, M) => (d(), _(H, {
      id: n(a),
      label: n(b),
      "label-classes": n(y),
      "icon-class": "fa-hashtag",
      "have-value": n(p),
      required: n(C),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": x.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: G(() => [
        g("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: B(["form-control", { "is-invalid": x.value }]),
          value: P.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: $,
          onBlur: M[0] || (M[0] = //@ts-ignore
          (...S) => n(m) && n(m)(...S))
        }, null, 42, dl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), pl = ["id", "value", "placeholder", "readonly", "min", "max"], vl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = E(null);
    function P(u) {
      const r = u.toString(), s = r.indexOf(".");
      return s > -1 ? r.length - s - 1 : 0;
    }
    function $(u) {
      const r = P(u), s = u * 100;
      return P(s) > r + 2 ? parseFloat(s.toFixed(r)).toString() : s.toString();
    }
    function q(u) {
      const r = P(u), s = u / 100;
      return parseFloat(s.toFixed(r + 2));
    }
    const M = f(() => Q(l.modelValue) ? "" : $(l.modelValue));
    function S(u) {
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
      const h = Q(l.min) ? Number.NEGATIVE_INFINITY : l.min, F = Q(l.max) ? Number.POSITIVE_INFINITY : l.max, U = ye(h, F, s);
      U !== s && V.value && (V.value.value = String(U)), o("update:modelValue", q(U));
    }
    return (u, r) => (d(), _(H, {
      id: n(a),
      label: n(b),
      "label-classes": n(y),
      "icon-class": "fa-percent",
      "have-value": n(p),
      required: n(C),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": x.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: G(() => [
        g("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: B(["form-control", { "is-invalid": x.value }]),
          value: M.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          onInput: S,
          onBlur: r[0] || (r[0] = //@ts-ignore
          (...s) => n(m) && n(m)(...s))
        }, null, 42, pl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
});
function he() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function fl(e, i) {
  const t = new Date(e.toLocaleString("en-US", { timeZone: "UTC" })), l = new Date(e.toLocaleString("en-US", { timeZone: i }));
  return (t.getTime() - l.getTime()) / 6e4;
}
function de(e) {
  return e ? e.substring(0, 10) : "";
}
function ml(e) {
  return e ? `${e}T00:00:00Z` : null;
}
function ce(e, i) {
  if (!e) return "";
  const t = i ?? he(), l = new Date(e), o = new Intl.DateTimeFormat("en-CA", {
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).formatToParts(l), a = {};
  return o.forEach(({ type: p, value: c }) => {
    a[p] = c;
  }), `${a.year}-${a.month}-${a.day}T${a.hour}:${a.minute}`;
}
function yl(e, i) {
  if (!e) return null;
  const t = i ?? he(), l = /* @__PURE__ */ new Date(`${e}:00Z`), o = fl(l, t);
  return new Date(l.getTime() + o * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const hl = ["id", "value", "readonly", "min", "max"], bl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = f(() => de(l.modelValue)), P = f(() => l.min ? de(l.min) : void 0), $ = f(() => l.max ? de(l.max) : void 0);
    function q(M) {
      m();
      const S = M.target.value;
      o("update:modelValue", ml(S));
    }
    return (M, S) => (d(), _(H, {
      id: n(a),
      label: n(b),
      "label-classes": n(y),
      "icon-class": "fa-calendar",
      "have-value": n(p),
      required: n(C),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": x.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: G(() => [
        g("input", {
          id: n(a),
          type: "date",
          class: B(["form-control", { "is-invalid": x.value }]),
          value: V.value,
          readonly: e.readonly,
          min: P.value,
          max: $.value,
          onChange: q
        }, null, 42, hl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), gl = ["id", "value", "readonly", "min", "max"], xl = ["title"], kl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = f(() => l.timezone ?? he()), P = f(
      () => ce(l.modelValue, V.value)
    ), $ = f(
      () => l.min ? ce(l.min, V.value) : void 0
    ), q = f(
      () => l.max ? ce(l.max, V.value) : void 0
    );
    function M(S) {
      m();
      const u = S.target.value;
      o("update:modelValue", yl(u, V.value));
    }
    return (S, u) => (d(), _(H, {
      id: n(a),
      label: n(b),
      "label-classes": n(y),
      "icon-class": "fa-clock",
      "have-value": n(p),
      required: n(C),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": x.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: G(() => [
        g("input", {
          id: n(a),
          type: "datetime-local",
          class: B(["form-control", { "is-invalid": x.value }]),
          value: P.value,
          readonly: e.readonly,
          min: $.value,
          max: q.value,
          onChange: M
        }, null, 42, gl),
        e.timezone ? (d(), v("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${V.value}`
        }, [...u[0] || (u[0] = [
          g("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, xl)) : I("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Vl = ["id", "value", "disabled"], $l = ["disabled"], wl = ["value"], Cl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "User"];
    function P(u) {
      return typeof l.optionValue == "function" ? l.optionValue(u) : typeof l.optionValue == "string" ? typeof u == "string" || typeof u == "number" ? u : u[l.optionValue] ?? null : typeof u == "string" || typeof u == "number" ? u : l.spType && V.includes(l.spType) ? u.Id ?? null : u;
    }
    const $ = f(() => {
      var u;
      return (u = l.options) != null && u.length ? l.options.map((r) => {
        const s = ne(r, l.optionLabel), h = P(r), F = h == null ? "" : typeof h == "object" ? JSON.stringify(h) : String(h);
        return { label: s, value: h, key: F };
      }) : [];
    }), q = f(() => {
      const u = l.modelValue;
      return u == null ? "" : typeof u == "object" ? JSON.stringify(u) : String(u);
    });
    function M(u) {
      m();
      const s = u.target.value;
      if (s === "") {
        o("update:modelValue", null);
        return;
      }
      const h = $.value.find((F) => F.key === s);
      o("update:modelValue", h ? h.value : null);
    }
    function S(u) {
      u.key !== "Delete" && u.key !== "Backspace" || l.readonly || (u.preventDefault(), o("update:modelValue", null));
    }
    return (u, r) => (d(), _(H, {
      id: n(a),
      label: n(b),
      "label-classes": n(y),
      "icon-class": "fa-list-ul",
      "have-value": n(p),
      required: n(C),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": x.value,
      "error-message": e.errorMessage ?? "Please select a value"
    }, {
      default: G(() => [
        g("select", {
          id: n(a),
          class: B(["form-select", { "is-invalid": x.value }]),
          value: q.value,
          disabled: e.readonly,
          onChange: M,
          onKeydown: S,
          onBlur: r[0] || (r[0] = //@ts-ignore
          (...s) => n(m) && n(m)(...s))
        }, [
          g("option", {
            value: "",
            disabled: n(C)
          }, R(e.placeholder ?? "Choose…"), 9, $l),
          (d(!0), v(Z, null, J($.value, (s) => (d(), v("option", {
            key: s.key,
            value: s.key
          }, R(s.label), 9, wl))), 128))
        ], 42, Vl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Tl = ["for"], Bl = {
  key: 0,
  class: "input-group-text"
}, Il = ["aria-label", "onClick"], Pl = ["id", "placeholder"], Sl = ["aria-label"], ql = ["aria-selected", "onMousedown", "onMouseover"], Ml = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Ll = {
  key: 1,
  class: "invalid-feedback"
}, Fl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, resolvedRequired: p, displayLabel: c, labelClasses: C, touched: b, touch: y } = z(l), w = f(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
    ), m = f(() => w.value.length > 0), x = f(() => !p.value || m.value), V = f(() => b.value && !x.value);
    i({ requiredPass: x, touch: y });
    const P = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function $(k) {
      return typeof l.optionValue == "function" ? l.optionValue(k) : typeof l.optionValue == "string" ? typeof k == "string" || typeof k == "number" ? k : k[l.optionValue] ?? null : typeof k == "string" || typeof k == "number" ? k : l.spType && P.includes(l.spType) ? k.Id ?? null : k;
    }
    function q(k) {
      return k == null ? "" : typeof k == "object" ? JSON.stringify(k) : String(k);
    }
    const M = f(
      () => (l.options ?? []).map((k) => ({
        label: ne(k, l.optionLabel),
        value: $(k),
        key: q($(k))
      }))
    ), S = f(() => new Set(w.value.map(q))), u = f(
      () => w.value.map((k) => {
        const L = q(k), D = M.value.find((Y) => Y.key === L);
        return { label: (D == null ? void 0 : D.label) ?? (L || String(k)), value: k, key: L };
      })
    ), r = E(""), s = E(!1), h = E(0), F = E(null), U = f(() => {
      const k = r.value.trim().toLowerCase();
      return M.value.filter((L) => S.value.has(L.key) ? !1 : k ? L.label.toLowerCase().includes(k) : !0);
    });
    ee(U, (k) => {
      h.value >= k.length && (h.value = 0);
    });
    function j() {
      l.readonly || (s.value = !0, h.value = 0);
    }
    function ae() {
      y(), s.value = !1, r.value = "", h.value = 0, o("search", "");
    }
    function oe(k) {
      const L = [...w.value, k.value];
      o("update:modelValue", L), r.value = "", h.value = 0, fe(() => {
        var D;
        (D = F.value) == null || D.focus(), s.value = !0;
      });
    }
    function se(k) {
      const L = w.value.filter((D) => q(D) !== k);
      o("update:modelValue", L.length ? L : null);
    }
    function ue() {
      s.value = !0, h.value = 0, o("search", r.value);
    }
    function ie() {
      j();
    }
    function T() {
      setTimeout(ae, 150);
    }
    function N(k) {
      const L = U.value;
      switch (k.key) {
        case "ArrowDown":
          if (k.preventDefault(), !s.value) {
            j();
            return;
          }
          h.value = L.length ? (h.value + 1) % L.length : 0;
          break;
        case "ArrowUp":
          if (k.preventDefault(), !s.value) {
            j();
            return;
          }
          h.value = L.length ? (h.value - 1 + L.length) % L.length : 0;
          break;
        case "Enter":
          if (k.preventDefault(), s.value && L.length) {
            const D = h.value >= 0 && h.value < L.length ? h.value : 0;
            oe(L[D]);
          }
          break;
        case "Escape":
          k.preventDefault(), ae();
          break;
        case "Backspace":
          if (!r.value && w.value.length) {
            const D = u.value[u.value.length - 1];
            se(D.key);
          }
          break;
      }
    }
    return (k, L) => (d(), v("div", null, [
      n(c) ? (d(), v("label", {
        key: 0,
        for: n(a),
        class: B(n(C))
      }, [
        X(R(n(c)) + " ", 1),
        n(p) ? (d(), _(te, {
          key: 0,
          "have-value": m.value
        }, null, 8, ["have-value"])) : I("", !0)
      ], 10, Tl)) : I("", !0),
      g("div", {
        class: B(["input-group", { "has-validation": V.value }])
      }, [
        e.suppressPrefixIcon ? I("", !0) : (d(), v("span", Bl, [...L[2] || (L[2] = [
          g("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        g("div", {
          class: B(["form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative", { "bg-body-secondary": e.readonly, "is-invalid": V.value }]),
          style: { cursor: "text", "min-height": "2.375rem" },
          onClick: L[1] || (L[1] = (D) => {
            var Y;
            return (Y = F.value) == null ? void 0 : Y.focus();
          })
        }, [
          (d(!0), v(Z, null, J(u.value, (D) => (d(), v("span", {
            key: D.key,
            class: "badge rounded-pill bg-primary d-inline-flex align-items-center gap-1",
            style: { "font-size": "0.8em" }
          }, [
            X(R(D.label) + " ", 1),
            e.readonly ? I("", !0) : (d(), v("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${D.label}`,
              onClick: pe((Y) => se(D.key), ["stop"])
            }, null, 8, Il))
          ]))), 128)),
          e.readonly ? I("", !0) : me((d(), v("input", {
            key: 0,
            id: n(a),
            ref_key: "inputRef",
            ref: F,
            type: "text",
            class: "border-0 p-0 flex-grow-1 bg-transparent",
            style: { outline: "none", "min-width": "8ch", "line-height": "inherit" },
            "onUpdate:modelValue": L[0] || (L[0] = (D) => r.value = D),
            placeholder: u.value.length ? "" : e.placeholder ?? "Type to search…",
            autocomplete: "off",
            onInput: ue,
            onFocus: ie,
            onBlur: T,
            onKeydown: N
          }, null, 40, Pl)), [
            [ge, r.value]
          ]),
          s.value && U.value.length ? (d(), v("ul", {
            key: 1,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(c) ?? "Suggestions"
          }, [
            (d(!0), v(Z, null, J(U.value, (D, Y) => (d(), v("li", {
              key: D.key,
              role: "option",
              "aria-selected": Y === h.value,
              class: B(["dropdown-item", { active: Y === h.value }]),
              style: xe(Y === h.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: pe((ke) => oe(D), ["prevent"]),
              onMouseover: (ke) => h.value = Y
            }, R(D.label), 47, ql))), 128))
          ], 8, Sl)) : s.value && r.value && !U.value.length ? (d(), v("ul", Ml, [...L[3] || (L[3] = [
            g("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : I("", !0)
        ], 2),
        V.value ? (d(), v("div", Ll, R(e.errorMessage ?? "Please select at least one value"), 1)) : I("", !0)
      ], 2)
    ]));
  }
}), Dl = ["id", "value", "disabled", "title"], Rl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    function V($) {
      m(), o("update:modelValue", $.target.value);
    }
    function P($) {
      $.key !== "Delete" && $.key !== "Backspace" || l.readonly || ($.preventDefault(), o("update:modelValue", null));
    }
    return ($, q) => (d(), _(H, {
      id: n(a),
      label: n(b),
      "label-classes": n(y),
      "icon-class": "fa-palette",
      "have-value": n(p),
      required: n(C),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": x.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: G(() => [
        g("input", {
          id: n(a),
          type: "color",
          class: B(["form-control form-control-color flex-grow-1", { "is-invalid": x.value }]),
          value: e.modelValue ?? "#000000",
          disabled: e.readonly,
          title: e.modelValue ?? "Choose a colour",
          onChange: V,
          onKeydown: P
        }, null, 42, Dl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Nl = ["aria-labelledby"], Ol = ["id"], El = ["id", "type", "checked", "disabled", "name", "onClick"], Al = ["for"], Ul = {
  key: 1,
  class: "invalid-feedback d-block"
}, be = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function P(s) {
      return typeof l.optionValue == "function" ? l.optionValue(s) : typeof l.optionValue == "string" ? typeof s == "string" || typeof s == "number" ? s : s[l.optionValue] ?? null : typeof s == "string" || typeof s == "number" ? s : l.spType && V.includes(l.spType) ? s.Id ?? null : s;
    }
    function $(s) {
      return s == null ? "" : typeof s == "object" ? JSON.stringify(s) : String(s);
    }
    const q = f(
      () => (l.options ?? []).map((s) => ({
        label: ne(s, l.optionLabel),
        value: P(s),
        key: $(P(s))
      }))
    ), M = f(
      () => l.multi && Array.isArray(l.modelValue) ? l.modelValue : []
    );
    function S(s) {
      return l.multi ? M.value.some((h) => $(h) === s) : $(l.modelValue) === s;
    }
    function u(s) {
      if (!l.readonly)
        if (m(), l.multi)
          if (M.value.some((F) => $(F) === s.key)) {
            const F = M.value.filter((U) => $(U) !== s.key);
            o("update:modelValue", F.length ? F : null);
          } else
            o("update:modelValue", [...M.value, s.value]);
        else
          $(l.modelValue) === s.key ? o("update:modelValue", null) : o("update:modelValue", s.value);
    }
    const r = f(
      () => l.multi ? "Please select at least one option" : "Please select an option"
    );
    return (s, h) => (d(), v("div", {
      role: "group",
      "aria-labelledby": n(b) ? `${n(a)}-label` : void 0
    }, [
      n(b) ? (d(), v("div", {
        key: 0,
        id: `${n(a)}-label`,
        class: B(n(y)),
        style: { "margin-bottom": "0.25rem" }
      }, [
        X(R(n(b)) + " ", 1),
        n(C) ? (d(), _(te, {
          key: 0,
          "have-value": n(p)
        }, null, 8, ["have-value"])) : I("", !0)
      ], 10, Ol)) : I("", !0),
      g("div", null, [
        (d(!0), v(Z, null, J(q.value, (F, U) => (d(), v("div", {
          key: F.key,
          class: B(["form-check", { "form-check-inline": !e.stacked }])
        }, [
          g("input", {
            id: `${n(a)}-opt-${U}`,
            type: e.multi ? "checkbox" : "radio",
            class: B(["form-check-input", { "is-invalid": x.value }]),
            checked: S(F.key),
            disabled: e.readonly,
            name: e.multi ? void 0 : n(a),
            onClick: (j) => u(F)
          }, null, 10, El),
          g("label", {
            for: `${n(a)}-opt-${U}`,
            class: "form-check-label"
          }, R(F.label), 9, Al)
        ], 2))), 128))
      ]),
      x.value ? (d(), v("div", Ul, R(e.errorMessage ?? r.value), 1)) : I("", !0)
    ], 8, Nl));
  }
}), _l = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], zl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    function V(P) {
      const $ = P.target.value;
      o("update:modelValue", $ === "" ? null : $);
    }
    return (P, $) => (d(), _(H, {
      id: n(a),
      label: n(b),
      "label-classes": n(y),
      "icon-class": "fa-pen-fancy",
      "have-value": n(p),
      required: n(C),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": x.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: G(() => [
        g("textarea", {
          id: n(a),
          class: B(["form-control", { "is-invalid": x.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          rows: e.rows,
          onInput: V,
          onBlur: $[0] || ($[0] = //@ts-ignore
          (...q) => n(m) && n(m)(...q))
        }, null, 42, _l)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Kl = { class: "form-check form-switch" }, jl = ["id", "disabled"], Yl = ["for"], Zl = {
  key: 0,
  class: "invalid-feedback d-block"
}, Gl = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = f({
      get: () => l.modelValue === !0,
      set: (P) => {
        l.readonly || (m(), o("update:modelValue", P));
      }
    });
    return (P, $) => (d(), v("div", null, [
      g("div", Kl, [
        me(g("input", {
          id: n(a),
          type: "checkbox",
          role: "switch",
          class: B(["form-check-input", { "is-invalid": x.value }]),
          "onUpdate:modelValue": $[0] || ($[0] = (q) => V.value = q),
          disabled: e.readonly
        }, null, 10, jl), [
          [$e, V.value]
        ]),
        g("label", {
          for: n(a),
          class: B(["form-check-label", ...n(y).filter((q) => q !== "form-label")])
        }, [
          X(R(n(b)) + " ", 1),
          n(C) ? (d(), _(te, {
            key: 0,
            "have-value": n(p)
          }, null, 8, ["have-value"])) : I("", !0)
        ], 10, Yl)
      ]),
      x.value ? (d(), v("div", Zl, R(e.errorMessage ?? "This field is required"), 1)) : I("", !0)
    ]));
  }
}), Jl = ["for"], Hl = { class: "input-group-text fw-semibold" }, Wl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], Xl = {
  key: 0,
  class: "invalid-feedback"
}, Ql = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = E(null), P = f(() => {
      var u;
      try {
        const r = l.locale ?? (typeof navigator < "u" ? navigator.language : "en-GB");
        return ((u = new Intl.NumberFormat(r, {
          style: "currency",
          currency: l.currency ?? "GBP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).formatToParts(0).find((h) => h.type === "currency")) == null ? void 0 : u.value) ?? l.currency ?? "£";
      } catch {
        return l.currency ?? "£";
      }
    }), $ = f(() => l.min ?? -1 / 0), q = f(() => l.max ?? 1 / 0);
    function M(u) {
      const r = u.target.value;
      if (r === "") {
        o("update:modelValue", null);
        return;
      }
      const s = parseFloat(r);
      isNaN(s) || o("update:modelValue", s);
    }
    function S(u) {
      if (m(), u.target.value === "" || l.modelValue === null) return;
      const s = ye($.value, q.value, l.modelValue);
      s !== l.modelValue && (o("update:modelValue", s), V.value && (V.value.value = String(s)));
    }
    return (u, r) => (d(), v("div", null, [
      n(b) ? (d(), v("label", {
        key: 0,
        for: n(a),
        class: B(n(y))
      }, [
        X(R(n(b)) + " ", 1),
        n(C) ? (d(), _(te, {
          key: 0,
          "have-value": n(p)
        }, null, 8, ["have-value"])) : I("", !0)
      ], 10, Jl)) : I("", !0),
      g("div", {
        class: B(["input-group", { "has-validation": x.value }])
      }, [
        g("span", Hl, R(P.value), 1),
        g("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: V,
          type: "number",
          class: B(["form-control", { "is-invalid": x.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: M,
          onBlur: S
        }, null, 42, Wl),
        x.value ? (d(), v("div", Xl, R(e.errorMessage ?? "This field is required"), 1)) : I("", !0)
      ], 2)
    ]));
  }
}), et = ["for"], lt = {
  key: 0,
  class: "input-group-text"
}, tt = { class: "position-relative flex-grow-1 d-flex" }, at = ["id", "placeholder", "readonly"], nt = ["aria-label"], ot = ["aria-selected", "onMousedown", "onMouseover"], st = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, rt = {
  key: 1,
  class: "invalid-feedback"
}, ut = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, resolvedRequired: C, displayLabel: b, labelClasses: y, touched: w, touch: m } = z(l), x = f(() => w.value && !c.value);
    i({ requiredPass: c, touch: m });
    const V = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function P(T) {
      return typeof l.optionValue == "function" ? l.optionValue(T) : typeof l.optionValue == "string" ? typeof T == "string" || typeof T == "number" ? T : T[l.optionValue] ?? null : typeof T == "string" || typeof T == "number" ? T : l.spType && V.includes(l.spType) ? T.Id ?? null : T;
    }
    function $(T) {
      return T == null ? "" : typeof T == "object" ? JSON.stringify(T) : String(T);
    }
    const q = f(
      () => (l.options ?? []).map((T) => ({
        label: ne(T, l.optionLabel),
        value: P(T),
        key: $(P(T))
      }))
    ), M = f(() => {
      if (l.modelValue === null || l.modelValue === void 0) return null;
      const T = $(l.modelValue), N = q.value.find((k) => k.key === T);
      return (N == null ? void 0 : N.label) ?? String(l.modelValue);
    }), S = E(""), u = E(!1), r = E(0), s = E(null);
    ee(M, (T) => {
      T !== null && (S.value = T);
    }, { immediate: !0 });
    const h = f(() => {
      const T = S.value.trim().toLowerCase(), N = $(l.modelValue);
      return q.value.filter((k) => k.key === N ? !1 : T ? k.label.toLowerCase().includes(T) : !0);
    });
    ee(h, (T) => {
      r.value >= T.length && (r.value = 0);
    });
    function F() {
      l.readonly || (u.value = !0, r.value = 0);
    }
    function U() {
      m(), u.value = !1, r.value = 0, o("search", ""), M.value !== null && (S.value = M.value);
    }
    function j(T) {
      o("update:modelValue", T.value), S.value = T.label, u.value = !1, o("search", "");
    }
    function ae() {
      o("update:modelValue", null), S.value = "", o("search", ""), fe(() => {
        var T;
        return (T = s.value) == null ? void 0 : T.focus();
      });
    }
    function oe() {
      l.modelValue !== null && l.modelValue !== void 0 && o("update:modelValue", null), u.value = !0, r.value = 0, o("search", S.value);
    }
    function se() {
      F();
    }
    function ue() {
      setTimeout(U, 150);
    }
    function ie(T) {
      const N = h.value;
      switch (T.key) {
        case "ArrowDown":
          if (T.preventDefault(), !u.value) {
            F();
            return;
          }
          r.value = N.length ? (r.value + 1) % N.length : 0;
          break;
        case "ArrowUp":
          if (T.preventDefault(), !u.value) {
            F();
            return;
          }
          r.value = N.length ? (r.value - 1 + N.length) % N.length : 0;
          break;
        case "Enter":
          if (T.preventDefault(), u.value && N.length) {
            const k = r.value >= 0 && r.value < N.length ? r.value : 0;
            j(N[k]);
          }
          break;
        case "Escape":
          T.preventDefault(), U();
          break;
        case "Delete":
        case "Backspace":
          l.modelValue !== null && l.modelValue !== void 0 && !S.value && (T.preventDefault(), ae());
          break;
      }
    }
    return (T, N) => (d(), v("div", null, [
      n(b) ? (d(), v("label", {
        key: 0,
        for: n(a),
        class: B(n(y))
      }, [
        X(R(n(b)) + " ", 1),
        n(C) ? (d(), _(te, {
          key: 0,
          "have-value": n(p)
        }, null, 8, ["have-value"])) : I("", !0)
      ], 10, et)) : I("", !0),
      g("div", {
        class: B(["input-group", { "has-validation": x.value }])
      }, [
        e.suppressPrefixIcon ? I("", !0) : (d(), v("span", lt, [...N[1] || (N[1] = [
          g("i", { class: "fas fa-search" }, null, -1)
        ])])),
        g("div", tt, [
          me(g("input", {
            id: n(a),
            ref_key: "inputRef",
            ref: s,
            type: "text",
            class: B(["form-control border-end-0", { "is-invalid": x.value }]),
            "onUpdate:modelValue": N[0] || (N[0] = (k) => S.value = k),
            placeholder: e.placeholder ?? "Type to search…",
            readonly: e.readonly,
            autocomplete: "off",
            onInput: oe,
            onFocus: se,
            onBlur: ue,
            onKeydown: ie
          }, null, 42, at), [
            [ge, S.value]
          ]),
          u.value && h.value.length ? (d(), v("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(b) ?? "Suggestions"
          }, [
            (d(!0), v(Z, null, J(h.value, (k, L) => (d(), v("li", {
              key: k.key,
              role: "option",
              "aria-selected": L === r.value,
              class: B(["dropdown-item", { active: L === r.value }]),
              style: xe(L === r.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: pe((D) => j(k), ["prevent"]),
              onMouseover: (D) => r.value = L
            }, R(k.label), 47, ot))), 128))
          ], 8, nt)) : u.value && S.value && !h.value.length ? (d(), v("ul", st, [...N[2] || (N[2] = [
            g("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : I("", !0)
        ]),
        x.value ? (d(), v("div", rt, R(e.errorMessage ?? "Please select a value"), 1)) : I("", !0),
        n(p) && !e.readonly ? (d(), v("button", {
          key: 2,
          type: "button",
          class: "btn btn-outline-secondary",
          title: "Clear selection",
          "aria-label": "Clear selection",
          tabindex: "-1",
          onClick: ae
        }, [...N[3] || (N[3] = [
          g("i", { class: "fas fa-times" }, null, -1)
        ])])) : I("", !0)
      ], 2)
    ]));
  }
}), it = {
  key: 0,
  class: "form-text text-muted"
}, dt = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, a = f(() => l.type ? l.type : l.spType ? Ye[l.spType] : "text"), p = f(() => {
      if (l.maxlength !== void 0) return l.maxlength;
      if (l.spType) return Ze[l.spType];
    }), c = f(() => {
      switch (a.value) {
        case "password":
          return il;
        case "number":
          return cl;
        case "percent":
          return vl;
        case "date":
          return bl;
        case "datetime-local":
          return kl;
        case "select":
          return Cl;
        case "lookupMulti":
          return Fl;
        case "color":
          return Rl;
        case "checkboxes":
          return be;
        case "radio":
          return be;
        case "textarea":
          return zl;
        case "switch":
          return Gl;
        case "currency":
          return Ql;
        case "lookup":
          return ut;
        case "text":
        default:
          return ol;
      }
    }), C = E(null), b = f(() => {
      var m;
      return ((m = C.value) == null ? void 0 : m.requiredPass) ?? !0;
    });
    function y() {
      var m, x;
      (x = (m = C.value) == null ? void 0 : m.touch) == null || x.call(m);
    }
    i({ requiredPass: b, touch: y });
    const w = f(() => ({
      modelValue: l.modelValue,
      spType: l.spType,
      label: l.label,
      labelClass: l.labelClass,
      placeholder: l.placeholder,
      required: l.required,
      readonly: l.readonly,
      suppressPrefixIcon: l.suppressPrefixIcon,
      stacked: l.stacked,
      multi: a.value === "checkboxes",
      min: l.min,
      max: l.max,
      step: l.step,
      maxlength: p.value,
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
    return (m, x) => (d(), v("div", null, [
      (d(), _(we(c.value), Ce({
        ref_key: "innerRef",
        ref: C
      }, w.value, {
        "onUpdate:modelValue": x[0] || (x[0] = (V) => o("update:modelValue", V)),
        onSearch: x[1] || (x[1] = (V) => o("search", V))
      }), null, 16)),
      e.helpText ? (d(), v("div", it, R(e.helpText), 1)) : I("", !0)
    ]));
  }
});
function ct(e = 1500) {
  const i = E(!1), t = E(!1);
  let l = null;
  async function o(a) {
    l && clearTimeout(l);
    try {
      await navigator.clipboard.writeText(a), i.value = !0, t.value = !1;
    } catch {
      i.value = !1, t.value = !0;
    }
    l = setTimeout(() => {
      i.value = !1, t.value = !1;
    }, e);
  }
  return { copied: i, error: t, copy: o };
}
const pt = { class: "spv-copyable position-relative d-inline-block" }, vt = ["title"], ft = /* @__PURE__ */ A({
  __name: "SpvCopyable",
  props: {
    text: {}
  },
  emits: ["copied"],
  setup(e, { emit: i }) {
    const t = e, l = i, o = E(null), { copied: a, error: p, copy: c } = ct(), C = f(() => a.value ? "fas fa-check" : p.value ? "fas fa-times" : "fas fa-copy");
    async function b() {
      var w;
      const y = t.text ?? ((w = o.value) == null ? void 0 : w.innerText) ?? "";
      y && (await c(y), a.value && l("copied", y));
    }
    return (y, w) => (d(), v("span", pt, [
      g("span", {
        ref_key: "contentRef",
        ref: o
      }, [
        K(y.$slots, "default", {}, void 0, !0)
      ], 512),
      g("button", {
        type: "button",
        class: B(["spv-copyable__btn btn btn-sm btn-light border position-absolute top-0 end-0 p-1 lh-1", { "is-active text-success": n(a), "is-active text-danger": n(p) }]),
        title: n(a) ? "Copied!" : "Copy to clipboard",
        onClick: b
      }, [
        g("i", {
          class: B(C.value)
        }, null, 2)
      ], 10, vt)
    ]));
  }
}), mt = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of i)
    t[l] = o;
  return t;
}, yt = /* @__PURE__ */ mt(ft, [["__scopeId", "data-v-249ac02f"]]), ht = {
  SpvAlert: Te,
  SpvModal: Me,
  SpvToast: Ne,
  SpvOffcanvas: Ue,
  SpvNavTabs: je,
  SpvFormControl: dt,
  SpvCopyable: yt
}, gt = {
  install(e) {
    for (const [i, t] of Object.entries(ht))
      e.component(i, t);
  }
};
export {
  Te as SpvAlert,
  yt as SpvCopyable,
  dt as SpvFormControl,
  Me as SpvModal,
  je as SpvNavTabs,
  Ue as SpvOffcanvas,
  Ne as SpvToast,
  gt as default,
  ct as useClipboard
};
