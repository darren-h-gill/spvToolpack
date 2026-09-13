import { defineComponent as U, openBlock as d, createElementBlock as p, normalizeClass as T, renderSlot as j, createCommentVNode as P, ref as A, onMounted as ie, onBeforeUnmount as me, watch as le, createElementVNode as h, toDisplayString as N, nextTick as ye, Fragment as G, renderList as H, createTextVNode as Q, createBlock as _, computed as f, unref as n, withCtx as J, createVNode as we, withModifiers as fe, withDirectives as he, vModelText as xe, normalizeStyle as ke, vModelCheckbox as Ce, resolveDynamicComponent as Be, mergeProps as Ie } from "vue";
const Te = /* @__PURE__ */ U({
  __name: "SpvAlert",
  props: {
    variant: { default: "primary" },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismissed"],
  setup(l, { emit: u }) {
    const a = u;
    function e() {
      a("update:modelValue", !1), a("dismissed");
    }
    return (o, t) => l.modelValue ? (d(), p("div", {
      key: 0,
      class: T(["alert", `alert-${l.variant}`, { "alert-dismissible fade show": l.dismissible }]),
      role: "alert"
    }, [
      j(o.$slots, "default"),
      l.dismissible ? (d(), p("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "aria-label": "Close",
        onClick: e
      })) : P("", !0)
    ], 2)) : P("", !0);
  }
}), Pe = { class: "modal-content" }, Se = {
  key: 0,
  class: "modal-header"
}, qe = { class: "modal-title" }, Me = { class: "modal-body" }, Le = {
  key: 1,
  class: "modal-footer"
}, Fe = /* @__PURE__ */ U({
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
  setup(l, { emit: u }) {
    const a = l, e = u, o = A(null);
    let t = null;
    ie(() => {
      o.value && (t = new window.bootstrap.Modal(o.value, {
        backdrop: a.staticBackdrop ? "static" : !0,
        keyboard: !a.staticBackdrop
      }), o.value.addEventListener("shown.bs.modal", () => e("shown")), o.value.addEventListener("hidden.bs.modal", () => {
        e("update:modelValue", !1), e("hidden");
      }), a.modelValue && t.show());
    }), me(() => {
      t == null || t.dispose();
    }), le(() => a.modelValue, (c) => {
      t && (c ? t.show() : t.hide());
    });
    const v = () => [
      "modal-dialog",
      a.size ? a.size === "fullscreen" ? "modal-fullscreen" : `modal-${a.size}` : "",
      { "modal-dialog-scrollable": a.scrollable },
      { "modal-dialog-centered": a.centered }
    ];
    return (c, C) => (d(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: "modal fade",
      tabindex: "-1"
    }, [
      h("div", {
        class: T(v())
      }, [
        h("div", Pe, [
          l.title || c.$slots.header ? (d(), p("div", Se, [
            j(c.$slots, "header", {}, () => [
              h("h5", qe, N(l.title), 1)
            ]),
            h("button", {
              type: "button",
              class: "btn-close",
              onClick: C[0] || (C[0] = (g) => e("update:modelValue", !1))
            })
          ])) : P("", !0),
          h("div", Me, [
            j(c.$slots, "default")
          ]),
          c.$slots.footer ? (d(), p("div", Le, [
            j(c.$slots, "footer")
          ])) : P("", !0)
        ])
      ], 2)
    ], 512));
  }
}), De = {
  key: 0,
  class: "toast-header"
}, Re = {
  key: 0,
  class: "me-auto"
}, Ne = { key: 1 }, Oe = { class: "toast-body" }, Ee = /* @__PURE__ */ U({
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
  setup(l, { emit: u }) {
    const a = l, e = u, o = A(null);
    let t = null;
    return ie(() => {
      o.value && (t = new window.bootstrap.Toast(o.value, {
        autohide: a.autohide,
        delay: a.delay
      }), o.value.addEventListener("shown.bs.toast", () => e("shown")), o.value.addEventListener("hidden.bs.toast", () => {
        e("update:modelValue", !1), e("hidden");
      }), a.modelValue && t.show());
    }), me(() => {
      t == null || t.dispose();
    }), le(() => a.modelValue, (v) => {
      t && (v ? t.show() : t.hide());
    }), (v, c) => (d(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: T(["toast", l.variant ? `text-bg-${l.variant}` : ""]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      l.title || l.subtitle ? (d(), p("div", De, [
        j(v.$slots, "header", {}, () => [
          l.title ? (d(), p("strong", Re, N(l.title), 1)) : P("", !0),
          l.subtitle ? (d(), p("small", Ne, N(l.subtitle), 1)) : P("", !0)
        ]),
        h("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (C) => e("update:modelValue", !1))
        })
      ])) : P("", !0),
      h("div", Oe, [
        j(v.$slots, "default")
      ])
    ], 2));
  }
}), Ae = { class: "offcanvas-header" }, Ue = { class: "offcanvas-title" }, ze = { class: "offcanvas-body" }, _e = /* @__PURE__ */ U({
  __name: "SpvOffcanvas",
  props: {
    modelValue: { type: Boolean },
    title: {},
    placement: { default: "start" },
    staticBackdrop: { type: Boolean, default: !1 },
    scroll: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "shown", "hidden"],
  setup(l, { emit: u }) {
    const a = l, e = u, o = A(null);
    let t = null;
    return ie(() => {
      o.value && (t = new window.bootstrap.Offcanvas(o.value, {
        backdrop: a.staticBackdrop ? "static" : !0,
        keyboard: !a.staticBackdrop,
        scroll: a.scroll
      }), o.value.addEventListener("shown.bs.offcanvas", () => e("shown")), o.value.addEventListener("hidden.bs.offcanvas", () => {
        e("update:modelValue", !1), e("hidden");
      }), a.modelValue && t.show());
    }), me(() => {
      t == null || t.dispose();
    }), le(() => a.modelValue, (v) => {
      t && (v ? t.show() : t.hide());
    }), (v, c) => (d(), p("div", {
      ref_key: "elRef",
      ref: o,
      class: T(["offcanvas", `offcanvas-${l.placement}`]),
      tabindex: "-1"
    }, [
      h("div", Ae, [
        j(v.$slots, "header", {}, () => [
          h("h5", Ue, N(l.title), 1)
        ]),
        h("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (C) => e("update:modelValue", !1))
        })
      ]),
      h("div", ze, [
        j(v.$slots, "default")
      ])
    ], 2));
  }
}), Ke = ["data-bs-toggle", "data-bs-target", "aria-controls", "aria-selected", "onShown"], je = { class: "tab-content" }, Ye = ["id"], Ze = /* @__PURE__ */ U({
  __name: "SpvNavTabs",
  props: {
    modelValue: {},
    tabs: {},
    pills: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(l, { emit: u }) {
    const a = l, e = u, o = A({});
    function t(c) {
      const C = o.value[c];
      if (!C) return;
      window.bootstrap.Tab.getOrCreateInstance(C).show();
    }
    ie(() => {
      ye(() => t(a.modelValue));
    }), le(() => a.modelValue, (c) => t(c));
    function v(c) {
      e("update:modelValue", c), e("change", c);
    }
    return (c, C) => (d(), p("div", null, [
      h("ul", {
        class: T(["nav", l.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (d(!0), p(G, null, H(l.tabs, (g) => (d(), p("li", {
          key: g.key,
          class: "nav-item",
          role: "presentation"
        }, [
          h("button", {
            ref_for: !0,
            ref: (I) => {
              I && (o.value[g.key] = I);
            },
            class: T(["nav-link", { active: l.modelValue === g.key, disabled: g.disabled }]),
            type: "button",
            role: "tab",
            "data-bs-toggle": l.pills ? "pill" : "tab",
            "data-bs-target": `#tab-pane-${g.key}`,
            "aria-controls": `tab-pane-${g.key}`,
            "aria-selected": l.modelValue === g.key,
            onShown: (I) => v(g.key)
          }, N(g.label), 43, Ke)
        ]))), 128))
      ], 2),
      h("div", je, [
        (d(!0), p(G, null, H(l.tabs, (g) => (d(), p("div", {
          id: `tab-pane-${g.key}`,
          key: g.key,
          class: T(["tab-pane", "fade", { "show active": l.modelValue === g.key }]),
          role: "tabpanel"
        }, [
          j(c.$slots, g.key)
        ], 10, Ye))), 128))
      ])
    ]));
  }
}), Ge = {
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
}, Je = {
  Text: 255
  // SP enforces 255 char limit on single-line text fields
}, He = {
  key: 0,
  class: "text-danger"
}, We = {
  key: 1,
  class: "text-success"
}, ae = /* @__PURE__ */ U({
  __name: "RequiredIndicator",
  props: {
    haveValue: { type: Boolean }
  },
  setup(l) {
    return (u, a) => (d(), p(G, null, [
      l.haveValue ? P("", !0) : (d(), p("span", He, [...a[0] || (a[0] = [
        h("i", { class: "fas fa-asterisk fa-xs ms-1" }, null, -1)
      ])])),
      l.haveValue ? (d(), p("span", We, [...a[1] || (a[1] = [
        h("i", { class: "fas fa-asterisk fa-xs ms-1" }, null, -1)
      ])])) : P("", !0)
    ], 64));
  }
}), Xe = ["for"], Qe = {
  key: 0,
  class: "input-group-text"
}, el = {
  key: 1,
  class: "invalid-feedback"
}, W = /* @__PURE__ */ U({
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
    return (u, a) => (d(), p("div", null, [
      l.label ? (d(), p("label", {
        key: 0,
        for: l.id,
        class: T(l.labelClasses)
      }, [
        Q(N(l.label) + " ", 1),
        l.required ? (d(), _(ae, {
          key: 0,
          "have-value": l.haveValue
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, Xe)) : P("", !0),
      h("div", {
        class: T(["input-group", { "has-validation": l.isInvalid }])
      }, [
        !l.suppressPrefixIcon && l.iconClass ? (d(), p("span", Qe, [
          h("i", {
            class: T(["fas", l.iconClass])
          }, null, 2)
        ])) : P("", !0),
        j(u.$slots, "default"),
        l.isInvalid && l.errorMessage ? (d(), p("div", el, N(l.errorMessage), 1)) : P("", !0),
        j(u.$slots, "suffix")
      ], 2)
    ]));
  }
});
function E(l) {
  return l != null && typeof l == "object" && l["@@functional/placeholder"] === !0;
}
function X(l) {
  return function u(a) {
    return arguments.length === 0 || E(a) ? u : l.apply(this, arguments);
  };
}
function te(l) {
  return function u(a, e) {
    switch (arguments.length) {
      case 0:
        return u;
      case 1:
        return E(a) ? u : X(function(o) {
          return l(a, o);
        });
      default:
        return E(a) && E(e) ? u : E(a) ? X(function(o) {
          return l(o, e);
        }) : E(e) ? X(function(o) {
          return l(a, o);
        }) : l(a, e);
    }
  };
}
function ll(l) {
  return function u(a, e, o) {
    switch (arguments.length) {
      case 0:
        return u;
      case 1:
        return E(a) ? u : te(function(t, v) {
          return l(a, t, v);
        });
      case 2:
        return E(a) && E(e) ? u : E(a) ? te(function(t, v) {
          return l(t, e, v);
        }) : E(e) ? te(function(t, v) {
          return l(a, t, v);
        }) : X(function(t) {
          return l(a, e, t);
        });
      default:
        return E(a) && E(e) && E(o) ? u : E(a) && E(e) ? te(function(t, v) {
          return l(t, v, o);
        }) : E(a) && E(o) ? te(function(t, v) {
          return l(t, e, v);
        }) : E(e) && E(o) ? te(function(t, v) {
          return l(a, t, v);
        }) : E(a) ? X(function(t) {
          return l(t, e, o);
        }) : E(e) ? X(function(t) {
          return l(a, t, o);
        }) : E(o) ? X(function(t) {
          return l(a, e, t);
        }) : l(a, e, o);
    }
  };
}
var ee = /* @__PURE__ */ X(function(u) {
  return u == null;
}), be = /* @__PURE__ */ ll(function(u, a, e) {
  if (u > a)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return e < u ? u : e > a ? a : e;
});
function tl() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function K(l) {
  const u = tl(), a = f(() => {
    const k = l.modelValue;
    if (ee(k) || typeof k == "string" && k.trim() === "" || Array.isArray(k) && k.length === 0) return !1;
    if (typeof k == "object") {
      const x = k.results;
      return Array.isArray(x) ? x.length > 0 : Object.keys(k).length > 0;
    }
    return !0;
  }), e = f(() => {
    var x;
    const k = (x = l.label) == null ? void 0 : x.trimEnd();
    return !!k && k.endsWith("*");
  }), o = f(() => l.required ?? e.value), t = f(() => e.value ? l.label.trimEnd().slice(0, -1).trimEnd() : l.label), v = f(() => !o.value || a.value), c = f(() => l.invalid === !0), C = f(() => {
    const k = ["form-label"];
    return l.labelClass && k.push(...l.labelClass.split(/\s+/).filter(Boolean)), k;
  }), g = A(!1);
  return { id: u, haveValue: a, requiredPass: v, externalInvalid: c, resolvedRequired: o, displayLabel: t, labelClasses: C, touched: g, touch: () => {
    g.value = !0;
  } };
}
const al = [
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
function oe(l, u) {
  if (typeof l == "string") return l;
  if (typeof l == "number") return String(l);
  if (typeof u == "function") return u(l);
  if (typeof u == "string") {
    const a = l[u];
    return a != null ? String(a) : "";
  }
  for (const a of al)
    if (a in l && l[a] != null) return String(l[a]);
  return JSON.stringify(l);
}
const nl = ["id", "value", "placeholder", "readonly", "maxlength", "list"], ol = ["id"], sl = ["value"], rl = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = A(!0), $ = f(() => {
      const r = c.value;
      return !e.optionStrict || !x.value ? r : r && (v.value ? V.value : !0);
    }), S = f(() => C.value || x.value && !$.value);
    u({ requiredPass: $, touch: m });
    const w = f(() => {
      var r;
      return (r = e.options) != null && r.length ? `${t}-list` : void 0;
    }), M = f(() => {
      var r;
      return (r = e.options) != null && r.length ? e.options.map((i) => oe(i, e.optionLabel)) : [];
    });
    function L(r) {
      const i = r.target.value;
      o("update:modelValue", i === "" ? null : i);
    }
    function q(r) {
      var z;
      if (m(), !e.optionStrict || !((z = e.options) != null && z.length)) return;
      const i = r.target, s = i.value;
      if (!s) {
        V.value = !0;
        return;
      }
      const y = s.toLowerCase(), D = M.value.find((Y) => Y.toLowerCase() === y);
      D ? (V.value = !0, D !== s && (i.value = D, o("update:modelValue", D))) : (V.value = !1, i.value = "", o("update:modelValue", null));
    }
    return (r, i) => (d(), _(W, {
      id: n(t),
      label: n(I),
      "label-classes": n(k),
      "icon-class": "fa-font",
      "have-value": n(v),
      required: n(g),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": S.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(t),
          type: "text",
          class: T(["form-control", { "is-invalid": S.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          maxlength: l.maxlength,
          list: w.value,
          onInput: L,
          onBlur: q
        }, null, 42, nl),
        w.value ? (d(), p("datalist", {
          key: 0,
          id: w.value
        }, [
          (d(!0), p(G, null, H(M.value, (s) => (d(), p("option", {
            key: s,
            value: s
          }, null, 8, sl))), 128))
        ], 8, ol)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), ul = ["id", "type", "value", "placeholder", "readonly"], il = ["title", "aria-label", "aria-pressed"], dl = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, cl = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, externalInvalid: c, resolvedRequired: C, displayLabel: g, labelClasses: I, touched: k, touch: x } = K(e), m = A(!1), V = A(!1);
    function $(i) {
      return /^\d+$/.test(i) ? "At least one number (0–9)" : /^[a-z]+$/i.test(i) ? "At least one letter" : i.length <= 12 ? `At least one of: ${i}` : "At least one special character";
    }
    const S = f(() => {
      var y;
      const i = e.modelValue ?? "", s = [];
      return e.minLength && s.push({
        key: "minLength",
        label: `At least ${e.minLength} character${e.minLength === 1 ? "" : "s"}`,
        passed: i.length >= e.minLength
      }), e.mixedCase && s.push({
        key: "mixedCase",
        label: "Upper and lowercase letters",
        passed: /[a-z]/.test(i) && /[A-Z]/.test(i)
      }), (y = e.requiredCharacters) == null || y.forEach((D, z) => {
        s.push({
          key: `chars-${z}`,
          label: $(D),
          passed: [...D].some((Y) => i.includes(Y))
        });
      }), e.mustMatch !== void 0 && s.push({
        key: "mustMatch",
        label: "Passwords match",
        passed: i.length > 0 && i === (e.mustMatch ?? "")
      }), s;
    }), w = f(() => S.value.every((i) => i.passed)), M = f(() => S.value.length > 0), L = f(() => !C.value && !M.value ? !0 : C.value && !v.value ? !1 : w.value), q = f(() => c.value || k.value && !L.value);
    u({ requiredPass: L, touch: x });
    function r(i) {
      V.value = !0;
      const s = i.target.value;
      o("update:modelValue", s === "" ? null : s);
    }
    return (i, s) => (d(), p("div", null, [
      we(W, {
        id: n(t),
        label: n(g),
        "label-classes": n(I),
        "icon-class": "fa-lock",
        "have-value": w.value && n(v),
        required: n(C) || M.value,
        readonly: l.readonly,
        "suppress-prefix-icon": l.suppressPrefixIcon,
        "is-invalid": q.value,
        "error-message": l.errorMessage ?? "This field is required"
      }, {
        suffix: J(() => [
          h("button", {
            type: "button",
            class: "btn btn-outline-secondary",
            title: m.value ? "Hide password" : "Show password",
            "aria-label": m.value ? "Hide password" : "Show password",
            "aria-pressed": m.value,
            tabindex: "-1",
            onClick: s[1] || (s[1] = (y) => m.value = !m.value)
          }, [
            h("i", {
              class: T(["fas", m.value ? "fa-eye-slash" : "fa-eye"])
            }, null, 2)
          ], 8, il)
        ]),
        default: J(() => [
          h("input", {
            id: n(t),
            type: m.value ? "text" : "password",
            class: T(["form-control", { "is-invalid": q.value }]),
            value: l.modelValue ?? "",
            placeholder: l.placeholder,
            readonly: l.readonly,
            autocomplete: "current-password",
            onInput: r,
            onBlur: s[0] || (s[0] = //@ts-ignore
            (...y) => n(x) && n(x)(...y))
          }, null, 42, ul)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]),
      M.value && V.value ? (d(), p("ul", dl, [
        (d(!0), p(G, null, H(S.value, (y) => (d(), p("li", {
          key: y.key,
          class: T(y.passed ? "text-success" : "text-danger")
        }, [
          h("i", {
            class: T(["fas fa-xs me-1", y.passed ? "fa-check" : "fa-times"])
          }, null, 2),
          Q(" " + N(y.label), 1)
        ], 2))), 128))
      ])) : P("", !0)
    ]));
  }
}), vl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], pl = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = A(null), S = f(() => ee(e.modelValue) ? "" : String(e.modelValue));
    function w(M) {
      const L = M.target.value;
      if (L === "" || L === "-") {
        o("update:modelValue", null);
        return;
      }
      const q = parseFloat(L);
      if (isNaN(q)) {
        $.value && ($.value.value = S.value);
        return;
      }
      const r = ee(e.min) ? Number.NEGATIVE_INFINITY : e.min, i = ee(e.max) ? Number.POSITIVE_INFINITY : e.max, s = be(r, i, q);
      s !== q && $.value && ($.value.value = String(s)), o("update:modelValue", s);
    }
    return (M, L) => (d(), _(W, {
      id: n(t),
      label: n(I),
      "label-classes": n(k),
      "icon-class": "fa-hashtag",
      "have-value": n(v),
      required: n(g),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(t),
          ref_key: "inputRef",
          ref: $,
          type: "number",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: S.value,
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          step: l.step,
          onInput: w,
          onBlur: L[0] || (L[0] = //@ts-ignore
          (...q) => n(m) && n(m)(...q))
        }, null, 42, vl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), fl = ["id", "value", "placeholder", "readonly", "min", "max"], ml = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = A(null);
    function S(r) {
      const i = r.toString(), s = i.indexOf(".");
      return s > -1 ? i.length - s - 1 : 0;
    }
    function w(r) {
      const i = S(r), s = r * 100;
      return S(s) > i + 2 ? parseFloat(s.toFixed(i)).toString() : s.toString();
    }
    function M(r) {
      const i = S(r), s = r / 100;
      return parseFloat(s.toFixed(i + 2));
    }
    const L = f(() => ee(e.modelValue) ? "" : w(e.modelValue));
    function q(r) {
      const i = r.target.value;
      if (i === "" || i === "-") {
        o("update:modelValue", null);
        return;
      }
      const s = parseFloat(i);
      if (isNaN(s)) {
        $.value && ($.value.value = L.value);
        return;
      }
      const y = ee(e.min) ? Number.NEGATIVE_INFINITY : e.min, D = ee(e.max) ? Number.POSITIVE_INFINITY : e.max, z = be(y, D, s);
      z !== s && $.value && ($.value.value = String(z)), o("update:modelValue", M(z));
    }
    return (r, i) => (d(), _(W, {
      id: n(t),
      label: n(I),
      "label-classes": n(k),
      "icon-class": "fa-percent",
      "have-value": n(v),
      required: n(g),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(t),
          ref_key: "inputRef",
          ref: $,
          type: "number",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: L.value,
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          onInput: q,
          onBlur: i[0] || (i[0] = //@ts-ignore
          (...s) => n(m) && n(m)(...s))
        }, null, 42, fl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
});
function se() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function yl(l, u) {
  const a = new Date(l.toLocaleString("en-US", { timeZone: "UTC" })), e = new Date(l.toLocaleString("en-US", { timeZone: u }));
  return (a.getTime() - e.getTime()) / 6e4;
}
function ve(l, u) {
  if (!l) return "";
  const a = u ?? se(), e = new Date(l), o = new Intl.DateTimeFormat("en-CA", {
    timeZone: a,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(e), t = {};
  return o.forEach(({ type: v, value: c }) => {
    t[v] = c;
  }), `${t.year}-${t.month}-${t.day}`;
}
function hl(l, u) {
  return l ? Ve(`${l}T00:00`, u) : null;
}
function pe(l, u) {
  if (!l) return "";
  const a = u ?? se(), e = new Date(l), o = new Intl.DateTimeFormat("en-CA", {
    timeZone: a,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).formatToParts(e), t = {};
  return o.forEach(({ type: v, value: c }) => {
    t[v] = c;
  }), `${t.year}-${t.month}-${t.day}T${t.hour}:${t.minute}`;
}
function Ve(l, u) {
  if (!l) return null;
  const a = u ?? se(), e = /* @__PURE__ */ new Date(`${l}:00Z`), o = yl(e, a);
  return new Date(e.getTime() + o * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const bl = ["id", "value", "readonly", "min", "max"], gl = ["title"], xl = /* @__PURE__ */ U({
  __name: "FormControlDate",
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = f(() => e.timezone ?? se()), S = f(
      () => ve(e.modelValue, $.value)
    ), w = f(
      () => e.min ? ve(e.min, $.value) : void 0
    ), M = f(
      () => e.max ? ve(e.max, $.value) : void 0
    );
    function L(q) {
      m();
      const r = q.target.value;
      o("update:modelValue", hl(r, $.value));
    }
    return (q, r) => (d(), _(W, {
      id: n(t),
      label: n(I),
      "label-classes": n(k),
      "icon-class": "fa-calendar",
      "have-value": n(v),
      required: n(g),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(t),
          type: "date",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: S.value,
          readonly: l.readonly,
          min: w.value,
          max: M.value,
          onChange: L
        }, null, 42, bl),
        l.timezone ? (d(), p("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Dates shown in ${$.value}`
        }, [...r[0] || (r[0] = [
          h("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, gl)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), kl = ["id", "value", "readonly", "min", "max"], Vl = ["title"], $l = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = f(() => e.timezone ?? se()), S = f(
      () => pe(e.modelValue, $.value)
    ), w = f(
      () => e.min ? pe(e.min, $.value) : void 0
    ), M = f(
      () => e.max ? pe(e.max, $.value) : void 0
    );
    function L(q) {
      m();
      const r = q.target.value;
      o("update:modelValue", Ve(r, $.value));
    }
    return (q, r) => (d(), _(W, {
      id: n(t),
      label: n(I),
      "label-classes": n(k),
      "icon-class": "fa-clock",
      "have-value": n(v),
      required: n(g),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(t),
          type: "datetime-local",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: S.value,
          readonly: l.readonly,
          min: w.value,
          max: M.value,
          onChange: L
        }, null, 42, kl),
        l.timezone ? (d(), p("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${$.value}`
        }, [...r[0] || (r[0] = [
          h("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, Vl)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), wl = ["id", "value", "disabled"], Cl = ["disabled"], Bl = ["value"], Il = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = ["Lookup", "User"];
    function S(r) {
      return typeof e.optionValue == "function" ? e.optionValue(r) : typeof e.optionValue == "string" ? typeof r == "string" || typeof r == "number" ? r : r[e.optionValue] ?? null : typeof r == "string" || typeof r == "number" ? r : e.spType && $.includes(e.spType) ? r.Id ?? null : r;
    }
    const w = f(() => {
      var r;
      return (r = e.options) != null && r.length ? e.options.map((i) => {
        const s = oe(i, e.optionLabel), y = S(i), D = y == null ? "" : typeof y == "object" ? JSON.stringify(y) : String(y);
        return { label: s, value: y, key: D };
      }) : [];
    }), M = f(() => {
      const r = e.modelValue;
      return r == null ? "" : typeof r == "object" ? JSON.stringify(r) : String(r);
    });
    function L(r) {
      m();
      const s = r.target.value;
      if (s === "") {
        o("update:modelValue", null);
        return;
      }
      const y = w.value.find((D) => D.key === s);
      o("update:modelValue", y ? y.value : null);
    }
    function q(r) {
      r.key !== "Delete" && r.key !== "Backspace" || e.readonly || (r.preventDefault(), o("update:modelValue", null));
    }
    return (r, i) => (d(), _(W, {
      id: n(t),
      label: n(I),
      "label-classes": n(k),
      "icon-class": "fa-list-ul",
      "have-value": n(v),
      required: n(g),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": l.errorMessage ?? "Please select a value"
    }, {
      default: J(() => [
        h("select", {
          id: n(t),
          class: T(["form-select", { "is-invalid": V.value }]),
          value: M.value,
          disabled: l.readonly,
          onChange: L,
          onKeydown: q,
          onBlur: i[0] || (i[0] = //@ts-ignore
          (...s) => n(m) && n(m)(...s))
        }, [
          h("option", {
            value: "",
            disabled: n(g)
          }, N(l.placeholder ?? "Choose…"), 9, Cl),
          (d(!0), p(G, null, H(w.value, (s) => (d(), p("option", {
            key: s.key,
            value: s.key
          }, N(s.label), 9, Bl))), 128))
        ], 42, wl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Tl = ["for"], Pl = {
  key: 0,
  class: "input-group-text"
}, Sl = ["aria-label", "onClick"], ql = ["id", "placeholder"], Ml = ["aria-label"], Ll = ["aria-selected", "onMousedown", "onMouseover"], Fl = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Dl = {
  key: 1,
  class: "invalid-feedback"
}, Rl = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue", "search"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, externalInvalid: v, resolvedRequired: c, displayLabel: C, labelClasses: g, touched: I, touch: k } = K(e), x = f(
      () => Array.isArray(e.modelValue) ? e.modelValue : []
    ), m = f(() => x.value.length > 0), V = f(() => !c.value || m.value), $ = f(() => v.value || I.value && !V.value);
    u({ requiredPass: V, touch: k });
    const S = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function w(b) {
      return typeof e.optionValue == "function" ? e.optionValue(b) : typeof e.optionValue == "string" ? typeof b == "string" || typeof b == "number" ? b : b[e.optionValue] ?? null : typeof b == "string" || typeof b == "number" ? b : e.spType && S.includes(e.spType) ? b.Id ?? null : b;
    }
    function M(b) {
      return b == null ? "" : typeof b == "object" ? JSON.stringify(b) : String(b);
    }
    const L = f(
      () => (e.options ?? []).map((b) => ({
        label: oe(b, e.optionLabel),
        value: w(b),
        key: M(w(b))
      }))
    ), q = f(() => new Set(x.value.map(M))), r = f(
      () => x.value.map((b) => {
        const F = M(b), R = L.value.find((Z) => Z.key === F);
        return { label: (R == null ? void 0 : R.label) ?? (F || String(b)), value: b, key: F };
      })
    ), i = A(""), s = A(!1), y = A(0), D = A(null), z = f(() => {
      const b = i.value.trim().toLowerCase();
      return L.value.filter((F) => q.value.has(F.key) ? !1 : b ? F.label.toLowerCase().includes(b) : !0);
    });
    le(z, (b) => {
      y.value >= b.length && (y.value = 0);
    });
    function Y() {
      e.readonly || (s.value = !0, y.value = 0);
    }
    function ne() {
      k(), s.value = !1, i.value = "", y.value = 0, o("search", "");
    }
    function re(b) {
      const F = [...x.value, b.value];
      o("update:modelValue", F), i.value = "", y.value = 0, ye(() => {
        var R;
        (R = D.value) == null || R.focus(), s.value = !0;
      });
    }
    function ue(b) {
      const F = x.value.filter((R) => M(R) !== b);
      o("update:modelValue", F.length ? F : null);
    }
    function de() {
      s.value = !0, y.value = 0, o("search", i.value);
    }
    function ce() {
      Y();
    }
    function B() {
      setTimeout(ne, 150);
    }
    function O(b) {
      const F = z.value;
      switch (b.key) {
        case "ArrowDown":
          if (b.preventDefault(), !s.value) {
            Y();
            return;
          }
          y.value = F.length ? (y.value + 1) % F.length : 0;
          break;
        case "ArrowUp":
          if (b.preventDefault(), !s.value) {
            Y();
            return;
          }
          y.value = F.length ? (y.value - 1 + F.length) % F.length : 0;
          break;
        case "Enter":
          if (b.preventDefault(), s.value && F.length) {
            const R = y.value >= 0 && y.value < F.length ? y.value : 0;
            re(F[R]);
          }
          break;
        case "Escape":
          b.preventDefault(), ne();
          break;
        case "Backspace":
          if (!i.value && x.value.length) {
            const R = r.value[r.value.length - 1];
            ue(R.key);
          }
          break;
      }
    }
    return (b, F) => (d(), p("div", null, [
      n(C) ? (d(), p("label", {
        key: 0,
        for: n(t),
        class: T(n(g))
      }, [
        Q(N(n(C)) + " ", 1),
        n(c) ? (d(), _(ae, {
          key: 0,
          "have-value": m.value
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, Tl)) : P("", !0),
      h("div", {
        class: T(["input-group", { "has-validation": $.value }])
      }, [
        l.suppressPrefixIcon ? P("", !0) : (d(), p("span", Pl, [...F[2] || (F[2] = [
          h("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        h("div", {
          class: T(["form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative", { "bg-body-secondary": l.readonly, "is-invalid": $.value }]),
          style: { cursor: "text", "min-height": "2.375rem" },
          onClick: F[1] || (F[1] = (R) => {
            var Z;
            return (Z = D.value) == null ? void 0 : Z.focus();
          })
        }, [
          (d(!0), p(G, null, H(r.value, (R) => (d(), p("span", {
            key: R.key,
            class: "badge rounded-pill bg-primary d-inline-flex align-items-center gap-1",
            style: { "font-size": "0.8em" }
          }, [
            Q(N(R.label) + " ", 1),
            l.readonly ? P("", !0) : (d(), p("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${R.label}`,
              onClick: fe((Z) => ue(R.key), ["stop"])
            }, null, 8, Sl))
          ]))), 128)),
          l.readonly ? P("", !0) : he((d(), p("input", {
            key: 0,
            id: n(t),
            ref_key: "inputRef",
            ref: D,
            type: "text",
            class: "border-0 p-0 flex-grow-1 bg-transparent",
            style: { outline: "none", "min-width": "8ch", "line-height": "inherit" },
            "onUpdate:modelValue": F[0] || (F[0] = (R) => i.value = R),
            placeholder: r.value.length ? "" : l.placeholder ?? "Type to search…",
            autocomplete: "off",
            onInput: de,
            onFocus: ce,
            onBlur: B,
            onKeydown: O
          }, null, 40, ql)), [
            [xe, i.value]
          ]),
          s.value && z.value.length ? (d(), p("ul", {
            key: 1,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(C) ?? "Suggestions"
          }, [
            (d(!0), p(G, null, H(z.value, (R, Z) => (d(), p("li", {
              key: R.key,
              role: "option",
              "aria-selected": Z === y.value,
              class: T(["dropdown-item", { active: Z === y.value }]),
              style: ke(Z === y.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: fe(($e) => re(R), ["prevent"]),
              onMouseover: ($e) => y.value = Z
            }, N(R.label), 47, Ll))), 128))
          ], 8, Ml)) : s.value && i.value && !z.value.length ? (d(), p("ul", Fl, [...F[3] || (F[3] = [
            h("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : P("", !0)
        ], 2),
        $.value ? (d(), p("div", Dl, N(l.errorMessage ?? "Please select at least one value"), 1)) : P("", !0)
      ], 2)
    ]));
  }
}), Nl = ["id", "value", "disabled", "title"], Ol = /* @__PURE__ */ U({
  __name: "FormControlColor",
  props: {
    modelValue: {},
    label: {},
    labelClass: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    function $(w) {
      m(), o("update:modelValue", w.target.value);
    }
    function S(w) {
      w.key !== "Delete" && w.key !== "Backspace" || e.readonly || (w.preventDefault(), o("update:modelValue", null));
    }
    return (w, M) => (d(), _(W, {
      id: n(t),
      label: n(I),
      "label-classes": n(k),
      "icon-class": "fa-palette",
      "have-value": n(v),
      required: n(g),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(t),
          type: "color",
          class: T(["form-control form-control-color flex-grow-1", { "is-invalid": V.value }]),
          value: l.modelValue ?? "#000000",
          disabled: l.readonly,
          title: l.modelValue ?? "Choose a colour",
          onChange: $,
          onKeydown: S
        }, null, 42, Nl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), El = ["aria-labelledby"], Al = ["id"], Ul = ["id", "type", "checked", "disabled", "name", "onClick"], zl = ["for"], _l = {
  key: 1,
  class: "invalid-feedback d-block"
}, ge = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function S(s) {
      return typeof e.optionValue == "function" ? e.optionValue(s) : typeof e.optionValue == "string" ? typeof s == "string" || typeof s == "number" ? s : s[e.optionValue] ?? null : typeof s == "string" || typeof s == "number" ? s : e.spType && $.includes(e.spType) ? s.Id ?? null : s;
    }
    function w(s) {
      return s == null ? "" : typeof s == "object" ? JSON.stringify(s) : String(s);
    }
    const M = f(
      () => (e.options ?? []).map((s) => ({
        label: oe(s, e.optionLabel),
        value: S(s),
        key: w(S(s))
      }))
    ), L = f(
      () => e.multi && Array.isArray(e.modelValue) ? e.modelValue : []
    );
    function q(s) {
      return e.multi ? L.value.some((y) => w(y) === s) : w(e.modelValue) === s;
    }
    function r(s) {
      if (!e.readonly)
        if (m(), e.multi)
          if (L.value.some((D) => w(D) === s.key)) {
            const D = L.value.filter((z) => w(z) !== s.key);
            o("update:modelValue", D.length ? D : null);
          } else
            o("update:modelValue", [...L.value, s.value]);
        else
          w(e.modelValue) === s.key ? o("update:modelValue", null) : o("update:modelValue", s.value);
    }
    const i = f(
      () => e.multi ? "Please select at least one option" : "Please select an option"
    );
    return (s, y) => (d(), p("div", {
      role: "group",
      "aria-labelledby": n(I) ? `${n(t)}-label` : void 0
    }, [
      n(I) ? (d(), p("div", {
        key: 0,
        id: `${n(t)}-label`,
        class: T(n(k)),
        style: { "margin-bottom": "0.25rem" }
      }, [
        Q(N(n(I)) + " ", 1),
        n(g) ? (d(), _(ae, {
          key: 0,
          "have-value": n(v)
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, Al)) : P("", !0),
      h("div", null, [
        (d(!0), p(G, null, H(M.value, (D, z) => (d(), p("div", {
          key: D.key,
          class: T(["form-check", { "form-check-inline": !l.stacked }])
        }, [
          h("input", {
            id: `${n(t)}-opt-${z}`,
            type: l.multi ? "checkbox" : "radio",
            class: T(["form-check-input", { "is-invalid": V.value }]),
            checked: q(D.key),
            disabled: l.readonly,
            name: l.multi ? void 0 : n(t),
            onClick: (Y) => r(D)
          }, null, 10, Ul),
          h("label", {
            for: `${n(t)}-opt-${z}`,
            class: "form-check-label"
          }, N(D.label), 9, zl)
        ], 2))), 128))
      ]),
      V.value ? (d(), p("div", _l, N(l.errorMessage ?? i.value), 1)) : P("", !0)
    ], 8, El));
  }
}), Kl = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], jl = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    function $(S) {
      const w = S.target.value;
      o("update:modelValue", w === "" ? null : w);
    }
    return (S, w) => (d(), _(W, {
      id: n(t),
      label: n(I),
      "label-classes": n(k),
      "icon-class": "fa-pen-fancy",
      "have-value": n(v),
      required: n(g),
      readonly: l.readonly,
      "suppress-prefix-icon": l.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": l.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("textarea", {
          id: n(t),
          class: T(["form-control", { "is-invalid": V.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          maxlength: l.maxlength,
          rows: l.rows,
          onInput: $,
          onBlur: w[0] || (w[0] = //@ts-ignore
          (...M) => n(m) && n(m)(...M))
        }, null, 42, Kl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Yl = { class: "form-check form-switch" }, Zl = ["id", "disabled"], Gl = ["for"], Jl = {
  key: 0,
  class: "invalid-feedback d-block"
}, Hl = /* @__PURE__ */ U({
  __name: "FormControlSwitch",
  props: {
    modelValue: { type: [Boolean, null] },
    label: {},
    labelClass: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    suppressPrefixIcon: { type: Boolean },
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = f({
      get: () => e.modelValue === !0,
      set: (S) => {
        e.readonly || (m(), o("update:modelValue", S));
      }
    });
    return (S, w) => (d(), p("div", null, [
      h("div", Yl, [
        he(h("input", {
          id: n(t),
          type: "checkbox",
          role: "switch",
          class: T(["form-check-input", { "is-invalid": V.value }]),
          "onUpdate:modelValue": w[0] || (w[0] = (M) => $.value = M),
          disabled: l.readonly
        }, null, 10, Zl), [
          [Ce, $.value]
        ]),
        h("label", {
          for: n(t),
          class: T(["form-check-label", ...n(k).filter((M) => M !== "form-label")])
        }, [
          Q(N(n(I)) + " ", 1),
          n(g) ? (d(), _(ae, {
            key: 0,
            "have-value": n(v)
          }, null, 8, ["have-value"])) : P("", !0)
        ], 10, Gl)
      ]),
      V.value ? (d(), p("div", Jl, N(l.errorMessage ?? "This field is required"), 1)) : P("", !0)
    ]));
  }
}), Wl = ["for"], Xl = { class: "input-group-text fw-semibold" }, Ql = ["id", "value", "placeholder", "readonly", "min", "max", "step"], et = {
  key: 0,
  class: "invalid-feedback"
}, lt = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = A(null), S = f(() => {
      var r;
      try {
        const i = e.locale ?? (typeof navigator < "u" ? navigator.language : "en-GB");
        return ((r = new Intl.NumberFormat(i, {
          style: "currency",
          currency: e.currency ?? "GBP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).formatToParts(0).find((y) => y.type === "currency")) == null ? void 0 : r.value) ?? e.currency ?? "£";
      } catch {
        return e.currency ?? "£";
      }
    }), w = f(() => e.min ?? -1 / 0), M = f(() => e.max ?? 1 / 0);
    function L(r) {
      const i = r.target.value;
      if (i === "") {
        o("update:modelValue", null);
        return;
      }
      const s = parseFloat(i);
      isNaN(s) || o("update:modelValue", s);
    }
    function q(r) {
      if (m(), r.target.value === "" || e.modelValue === null) return;
      const s = be(w.value, M.value, e.modelValue);
      s !== e.modelValue && (o("update:modelValue", s), $.value && ($.value.value = String(s)));
    }
    return (r, i) => (d(), p("div", null, [
      n(I) ? (d(), p("label", {
        key: 0,
        for: n(t),
        class: T(n(k))
      }, [
        Q(N(n(I)) + " ", 1),
        n(g) ? (d(), _(ae, {
          key: 0,
          "have-value": n(v)
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, Wl)) : P("", !0),
      h("div", {
        class: T(["input-group", { "has-validation": V.value }])
      }, [
        h("span", Xl, N(S.value), 1),
        h("input", {
          id: n(t),
          ref_key: "inputRef",
          ref: $,
          type: "number",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: l.modelValue ?? "",
          placeholder: l.placeholder,
          readonly: l.readonly,
          min: l.min,
          max: l.max,
          step: l.step,
          onInput: L,
          onBlur: q
        }, null, 42, Ql),
        V.value ? (d(), p("div", et, N(l.errorMessage ?? "This field is required"), 1)) : P("", !0)
      ], 2)
    ]));
  }
}), tt = ["for"], at = {
  key: 0,
  class: "input-group-text"
}, nt = { class: "position-relative flex-grow-1 d-flex" }, ot = ["id", "placeholder", "readonly"], st = ["aria-label"], rt = ["aria-selected", "onMousedown", "onMouseover"], ut = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, it = {
  key: 1,
  class: "invalid-feedback"
}, dt = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue", "search"],
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, { id: t, haveValue: v, requiredPass: c, externalInvalid: C, resolvedRequired: g, displayLabel: I, labelClasses: k, touched: x, touch: m } = K(e), V = f(() => C.value || x.value && !c.value);
    u({ requiredPass: c, touch: m });
    const $ = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function S(B) {
      return typeof e.optionValue == "function" ? e.optionValue(B) : typeof e.optionValue == "string" ? typeof B == "string" || typeof B == "number" ? B : B[e.optionValue] ?? null : typeof B == "string" || typeof B == "number" ? B : e.spType && $.includes(e.spType) ? B.Id ?? null : B;
    }
    function w(B) {
      return B == null ? "" : typeof B == "object" ? JSON.stringify(B) : String(B);
    }
    const M = f(
      () => (e.options ?? []).map((B) => ({
        label: oe(B, e.optionLabel),
        value: S(B),
        key: w(S(B))
      }))
    ), L = f(() => {
      if (e.modelValue === null || e.modelValue === void 0) return null;
      const B = w(e.modelValue), O = M.value.find((b) => b.key === B);
      return (O == null ? void 0 : O.label) ?? String(e.modelValue);
    }), q = A(""), r = A(!1), i = A(0), s = A(null);
    le(L, (B) => {
      B !== null && (q.value = B);
    }, { immediate: !0 });
    const y = f(() => {
      const B = q.value.trim().toLowerCase(), O = w(e.modelValue);
      return M.value.filter((b) => b.key === O ? !1 : B ? b.label.toLowerCase().includes(B) : !0);
    });
    le(y, (B) => {
      i.value >= B.length && (i.value = 0);
    });
    function D() {
      e.readonly || (r.value = !0, i.value = 0);
    }
    function z() {
      m(), r.value = !1, i.value = 0, o("search", ""), L.value !== null && (q.value = L.value);
    }
    function Y(B) {
      o("update:modelValue", B.value), q.value = B.label, r.value = !1, o("search", "");
    }
    function ne() {
      o("update:modelValue", null), q.value = "", o("search", ""), ye(() => {
        var B;
        return (B = s.value) == null ? void 0 : B.focus();
      });
    }
    function re() {
      e.modelValue !== null && e.modelValue !== void 0 && o("update:modelValue", null), r.value = !0, i.value = 0, o("search", q.value);
    }
    function ue() {
      D();
    }
    function de() {
      setTimeout(z, 150);
    }
    function ce(B) {
      const O = y.value;
      switch (B.key) {
        case "ArrowDown":
          if (B.preventDefault(), !r.value) {
            D();
            return;
          }
          i.value = O.length ? (i.value + 1) % O.length : 0;
          break;
        case "ArrowUp":
          if (B.preventDefault(), !r.value) {
            D();
            return;
          }
          i.value = O.length ? (i.value - 1 + O.length) % O.length : 0;
          break;
        case "Enter":
          if (B.preventDefault(), r.value && O.length) {
            const b = i.value >= 0 && i.value < O.length ? i.value : 0;
            Y(O[b]);
          }
          break;
        case "Escape":
          B.preventDefault(), z();
          break;
        case "Delete":
        case "Backspace":
          e.modelValue !== null && e.modelValue !== void 0 && !q.value && (B.preventDefault(), ne());
          break;
      }
    }
    return (B, O) => (d(), p("div", null, [
      n(I) ? (d(), p("label", {
        key: 0,
        for: n(t),
        class: T(n(k))
      }, [
        Q(N(n(I)) + " ", 1),
        n(g) ? (d(), _(ae, {
          key: 0,
          "have-value": n(v)
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, tt)) : P("", !0),
      h("div", {
        class: T(["input-group", { "has-validation": V.value }])
      }, [
        l.suppressPrefixIcon ? P("", !0) : (d(), p("span", at, [...O[1] || (O[1] = [
          h("i", { class: "fas fa-search" }, null, -1)
        ])])),
        h("div", nt, [
          he(h("input", {
            id: n(t),
            ref_key: "inputRef",
            ref: s,
            type: "text",
            class: T(["form-control border-end-0", { "is-invalid": V.value }]),
            "onUpdate:modelValue": O[0] || (O[0] = (b) => q.value = b),
            placeholder: l.placeholder ?? "Type to search…",
            readonly: l.readonly,
            autocomplete: "off",
            onInput: re,
            onFocus: ue,
            onBlur: de,
            onKeydown: ce
          }, null, 42, ot), [
            [xe, q.value]
          ]),
          r.value && y.value.length ? (d(), p("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(I) ?? "Suggestions"
          }, [
            (d(!0), p(G, null, H(y.value, (b, F) => (d(), p("li", {
              key: b.key,
              role: "option",
              "aria-selected": F === i.value,
              class: T(["dropdown-item", { active: F === i.value }]),
              style: ke(F === i.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: fe((R) => Y(b), ["prevent"]),
              onMouseover: (R) => i.value = F
            }, N(b.label), 47, rt))), 128))
          ], 8, st)) : r.value && q.value && !y.value.length ? (d(), p("ul", ut, [...O[2] || (O[2] = [
            h("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : P("", !0)
        ]),
        V.value ? (d(), p("div", it, N(l.errorMessage ?? "Please select a value"), 1)) : P("", !0),
        n(v) && !l.readonly ? (d(), p("button", {
          key: 2,
          type: "button",
          class: "btn btn-outline-secondary",
          title: "Clear selection",
          "aria-label": "Clear selection",
          tabindex: "-1",
          onClick: ne
        }, [...O[3] || (O[3] = [
          h("i", { class: "fas fa-times" }, null, -1)
        ])])) : P("", !0)
      ], 2)
    ]));
  }
}), ct = {
  key: 0,
  class: "form-text text-muted"
}, vt = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
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
  setup(l, { expose: u, emit: a }) {
    const e = l, o = a, t = f(() => e.type ? e.type : e.spType ? Ge[e.spType] : "text"), v = f(() => {
      if (e.maxlength !== void 0) return e.maxlength;
      if (e.spType) return Je[e.spType];
    }), c = f(() => {
      switch (t.value) {
        case "password":
          return cl;
        case "number":
          return pl;
        case "percent":
          return ml;
        case "date":
          return xl;
        case "datetime-local":
          return $l;
        case "select":
          return Il;
        case "lookupMulti":
          return Rl;
        case "color":
          return Ol;
        case "checkboxes":
          return ge;
        case "radio":
          return ge;
        case "textarea":
          return jl;
        case "switch":
          return Hl;
        case "currency":
          return lt;
        case "lookup":
          return dt;
        case "text":
        default:
          return rl;
      }
    }), C = A(null), g = f(() => {
      var x;
      return ((x = C.value) == null ? void 0 : x.requiredPass) ?? !0;
    });
    function I() {
      var x, m;
      (m = (x = C.value) == null ? void 0 : x.touch) == null || m.call(x);
    }
    u({ requiredPass: g, touch: I });
    const k = f(() => ({
      modelValue: e.modelValue,
      spType: e.spType,
      label: e.label,
      labelClass: e.labelClass,
      placeholder: e.placeholder,
      required: e.required,
      readonly: e.readonly,
      suppressPrefixIcon: e.suppressPrefixIcon,
      stacked: e.stacked,
      invalid: e.invalid,
      multi: t.value === "checkboxes",
      min: e.min,
      max: e.max,
      step: e.step,
      maxlength: v.value,
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
    return (x, m) => (d(), p("div", null, [
      (d(), _(Be(c.value), Ie({
        ref_key: "innerRef",
        ref: C
      }, k.value, {
        "onUpdate:modelValue": m[0] || (m[0] = (V) => o("update:modelValue", V)),
        onSearch: m[1] || (m[1] = (V) => o("search", V))
      }), null, 16)),
      l.helpText ? (d(), p("div", ct, N(l.helpText), 1)) : P("", !0)
    ]));
  }
});
function pt(l = 1500) {
  const u = A(!1), a = A(!1);
  let e = null;
  async function o(t) {
    e && clearTimeout(e);
    try {
      await navigator.clipboard.writeText(t), u.value = !0, a.value = !1;
    } catch {
      u.value = !1, a.value = !0;
    }
    e = setTimeout(() => {
      u.value = !1, a.value = !1;
    }, l);
  }
  return { copied: u, error: a, copy: o };
}
const ft = { class: "spv-copyable position-relative d-inline-block" }, mt = ["title"], yt = /* @__PURE__ */ U({
  __name: "SpvCopyable",
  props: {
    text: {}
  },
  emits: ["copied"],
  setup(l, { emit: u }) {
    const a = l, e = u, o = A(null), { copied: t, error: v, copy: c } = pt(), C = f(() => t.value ? "fas fa-check" : v.value ? "fas fa-times" : "fas fa-copy");
    async function g() {
      var k;
      const I = a.text ?? ((k = o.value) == null ? void 0 : k.innerText) ?? "";
      I && (await c(I), t.value && e("copied", I));
    }
    return (I, k) => (d(), p("span", ft, [
      h("span", {
        ref_key: "contentRef",
        ref: o
      }, [
        j(I.$slots, "default", {}, void 0, !0)
      ], 512),
      h("button", {
        type: "button",
        class: T(["spv-copyable__btn btn btn-sm btn-light border position-absolute top-0 end-0 p-1 lh-1", { "is-active text-success": n(t), "is-active text-danger": n(v) }]),
        title: n(t) ? "Copied!" : "Copy to clipboard",
        onClick: g
      }, [
        h("i", {
          class: T(C.value)
        }, null, 2)
      ], 10, mt)
    ]));
  }
}), ht = (l, u) => {
  const a = l.__vccOpts || l;
  for (const [e, o] of u)
    a[e] = o;
  return a;
}, bt = /* @__PURE__ */ ht(yt, [["__scopeId", "data-v-249ac02f"]]), gt = {
  SpvAlert: Te,
  SpvModal: Fe,
  SpvToast: Ee,
  SpvOffcanvas: _e,
  SpvNavTabs: Ze,
  SpvFormControl: vt,
  SpvCopyable: bt
}, kt = {
  install(l) {
    for (const [u, a] of Object.entries(gt))
      l.component(u, a);
  }
};
export {
  Te as SpvAlert,
  bt as SpvCopyable,
  vt as SpvFormControl,
  Fe as SpvModal,
  Ze as SpvNavTabs,
  _e as SpvOffcanvas,
  Ee as SpvToast,
  kt as default,
  pt as useClipboard
};
