import { defineComponent as U, openBlock as d, createElementBlock as v, normalizeClass as T, renderSlot as j, createCommentVNode as P, ref as A, onMounted as ue, onBeforeUnmount as fe, watch as le, createElementVNode as h, toDisplayString as N, nextTick as me, Fragment as G, renderList as H, createTextVNode as Q, createBlock as z, computed as f, unref as n, withCtx as J, createVNode as $e, withModifiers as pe, withDirectives as ye, vModelText as xe, normalizeStyle as ke, vModelCheckbox as we, resolveDynamicComponent as Ce, mergeProps as Be } from "vue";
const Ie = /* @__PURE__ */ U({
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
      class: T(["alert", `alert-${e.variant}`, { "alert-dismissible fade show": e.dismissible }]),
      role: "alert"
    }, [
      j(o.$slots, "default"),
      e.dismissible ? (d(), v("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "aria-label": "Close",
        onClick: l
      })) : P("", !0)
    ], 2)) : P("", !0);
  }
}), Te = { class: "modal-content" }, Pe = {
  key: 0,
  class: "modal-header"
}, Se = { class: "modal-title" }, qe = { class: "modal-body" }, Me = {
  key: 1,
  class: "modal-footer"
}, Le = /* @__PURE__ */ U({
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
    const t = e, l = i, o = A(null);
    let a = null;
    ue(() => {
      o.value && (a = new window.bootstrap.Modal(o.value, {
        backdrop: t.staticBackdrop ? "static" : !0,
        keyboard: !t.staticBackdrop
      }), o.value.addEventListener("shown.bs.modal", () => l("shown")), o.value.addEventListener("hidden.bs.modal", () => {
        l("update:modelValue", !1), l("hidden");
      }), t.modelValue && a.show());
    }), fe(() => {
      a == null || a.dispose();
    }), le(() => t.modelValue, (c) => {
      a && (c ? a.show() : a.hide());
    });
    const p = () => [
      "modal-dialog",
      t.size ? t.size === "fullscreen" ? "modal-fullscreen" : `modal-${t.size}` : "",
      { "modal-dialog-scrollable": t.scrollable },
      { "modal-dialog-centered": t.centered }
    ];
    return (c, w) => (d(), v("div", {
      ref_key: "elRef",
      ref: o,
      class: "modal fade",
      tabindex: "-1"
    }, [
      h("div", {
        class: T(p())
      }, [
        h("div", Te, [
          e.title || c.$slots.header ? (d(), v("div", Pe, [
            j(c.$slots, "header", {}, () => [
              h("h5", Se, N(e.title), 1)
            ]),
            h("button", {
              type: "button",
              class: "btn-close",
              onClick: w[0] || (w[0] = (g) => l("update:modelValue", !1))
            })
          ])) : P("", !0),
          h("div", qe, [
            j(c.$slots, "default")
          ]),
          c.$slots.footer ? (d(), v("div", Me, [
            j(c.$slots, "footer")
          ])) : P("", !0)
        ])
      ], 2)
    ], 512));
  }
}), Fe = {
  key: 0,
  class: "toast-header"
}, De = {
  key: 0,
  class: "me-auto"
}, Re = { key: 1 }, Ne = { class: "toast-body" }, Oe = /* @__PURE__ */ U({
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
    const t = e, l = i, o = A(null);
    let a = null;
    return ue(() => {
      o.value && (a = new window.bootstrap.Toast(o.value, {
        autohide: t.autohide,
        delay: t.delay
      }), o.value.addEventListener("shown.bs.toast", () => l("shown")), o.value.addEventListener("hidden.bs.toast", () => {
        l("update:modelValue", !1), l("hidden");
      }), t.modelValue && a.show());
    }), fe(() => {
      a == null || a.dispose();
    }), le(() => t.modelValue, (p) => {
      a && (p ? a.show() : a.hide());
    }), (p, c) => (d(), v("div", {
      ref_key: "elRef",
      ref: o,
      class: T(["toast", e.variant ? `text-bg-${e.variant}` : ""]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      e.title || e.subtitle ? (d(), v("div", Fe, [
        j(p.$slots, "header", {}, () => [
          e.title ? (d(), v("strong", De, N(e.title), 1)) : P("", !0),
          e.subtitle ? (d(), v("small", Re, N(e.subtitle), 1)) : P("", !0)
        ]),
        h("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (w) => l("update:modelValue", !1))
        })
      ])) : P("", !0),
      h("div", Ne, [
        j(p.$slots, "default")
      ])
    ], 2));
  }
}), Ee = { class: "offcanvas-header" }, Ae = { class: "offcanvas-title" }, Ue = { class: "offcanvas-body" }, _e = /* @__PURE__ */ U({
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
    const t = e, l = i, o = A(null);
    let a = null;
    return ue(() => {
      o.value && (a = new window.bootstrap.Offcanvas(o.value, {
        backdrop: t.staticBackdrop ? "static" : !0,
        keyboard: !t.staticBackdrop,
        scroll: t.scroll
      }), o.value.addEventListener("shown.bs.offcanvas", () => l("shown")), o.value.addEventListener("hidden.bs.offcanvas", () => {
        l("update:modelValue", !1), l("hidden");
      }), t.modelValue && a.show());
    }), fe(() => {
      a == null || a.dispose();
    }), le(() => t.modelValue, (p) => {
      a && (p ? a.show() : a.hide());
    }), (p, c) => (d(), v("div", {
      ref_key: "elRef",
      ref: o,
      class: T(["offcanvas", `offcanvas-${e.placement}`]),
      tabindex: "-1"
    }, [
      h("div", Ee, [
        j(p.$slots, "header", {}, () => [
          h("h5", Ae, N(e.title), 1)
        ]),
        h("button", {
          type: "button",
          class: "btn-close",
          onClick: c[0] || (c[0] = (w) => l("update:modelValue", !1))
        })
      ]),
      h("div", Ue, [
        j(p.$slots, "default")
      ])
    ], 2));
  }
}), ze = ["data-bs-toggle", "data-bs-target", "aria-controls", "aria-selected", "onShown"], Ke = { class: "tab-content" }, je = ["id"], Ye = /* @__PURE__ */ U({
  __name: "SpvNavTabs",
  props: {
    modelValue: {},
    tabs: {},
    pills: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: i }) {
    const t = e, l = i, o = A({});
    function a(c) {
      const w = o.value[c];
      if (!w) return;
      window.bootstrap.Tab.getOrCreateInstance(w).show();
    }
    ue(() => {
      me(() => a(t.modelValue));
    }), le(() => t.modelValue, (c) => a(c));
    function p(c) {
      l("update:modelValue", c), l("change", c);
    }
    return (c, w) => (d(), v("div", null, [
      h("ul", {
        class: T(["nav", e.pills ? "nav-pills" : "nav-tabs"]),
        role: "tablist"
      }, [
        (d(!0), v(G, null, H(e.tabs, (g) => (d(), v("li", {
          key: g.key,
          class: "nav-item",
          role: "presentation"
        }, [
          h("button", {
            ref_for: !0,
            ref: (B) => {
              B && (o.value[g.key] = B);
            },
            class: T(["nav-link", { active: e.modelValue === g.key, disabled: g.disabled }]),
            type: "button",
            role: "tab",
            "data-bs-toggle": e.pills ? "pill" : "tab",
            "data-bs-target": `#tab-pane-${g.key}`,
            "aria-controls": `tab-pane-${g.key}`,
            "aria-selected": e.modelValue === g.key,
            onShown: (B) => p(g.key)
          }, N(g.label), 43, ze)
        ]))), 128))
      ], 2),
      h("div", Ke, [
        (d(!0), v(G, null, H(e.tabs, (g) => (d(), v("div", {
          id: `tab-pane-${g.key}`,
          key: g.key,
          class: T(["tab-pane", "fade", { "show active": e.modelValue === g.key }]),
          role: "tabpanel"
        }, [
          j(c.$slots, g.key)
        ], 10, je))), 128))
      ])
    ]));
  }
}), Ze = {
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
}, Ge = {
  Text: 255
  // SP enforces 255 char limit on single-line text fields
}, Je = {
  key: 0,
  class: "text-danger"
}, He = {
  key: 1,
  class: "text-success"
}, ae = /* @__PURE__ */ U({
  __name: "RequiredIndicator",
  props: {
    haveValue: { type: Boolean }
  },
  setup(e) {
    return (i, t) => (d(), v(G, null, [
      e.haveValue ? P("", !0) : (d(), v("span", Je, [...t[0] || (t[0] = [
        h("i", { class: "fas fa-asterisk fa-xs ms-1" }, null, -1)
      ])])),
      e.haveValue ? (d(), v("span", He, [...t[1] || (t[1] = [
        h("i", { class: "fas fa-asterisk fa-xs ms-1" }, null, -1)
      ])])) : P("", !0)
    ], 64));
  }
}), We = ["for"], Xe = {
  key: 0,
  class: "input-group-text"
}, Qe = {
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
  setup(e) {
    return (i, t) => (d(), v("div", null, [
      e.label ? (d(), v("label", {
        key: 0,
        for: e.id,
        class: T(e.labelClasses)
      }, [
        Q(N(e.label) + " ", 1),
        e.required ? (d(), z(ae, {
          key: 0,
          "have-value": e.haveValue
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, We)) : P("", !0),
      h("div", {
        class: T(["input-group", { "has-validation": e.isInvalid }])
      }, [
        !e.suppressPrefixIcon && e.iconClass ? (d(), v("span", Xe, [
          h("i", {
            class: T(["fas", e.iconClass])
          }, null, 2)
        ])) : P("", !0),
        j(i.$slots, "default"),
        e.isInvalid && e.errorMessage ? (d(), v("div", Qe, N(e.errorMessage), 1)) : P("", !0),
        j(i.$slots, "suffix")
      ], 2)
    ]));
  }
});
function E(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function X(e) {
  return function i(t) {
    return arguments.length === 0 || E(t) ? i : e.apply(this, arguments);
  };
}
function te(e) {
  return function i(t, l) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return E(t) ? i : X(function(o) {
          return e(t, o);
        });
      default:
        return E(t) && E(l) ? i : E(t) ? X(function(o) {
          return e(o, l);
        }) : E(l) ? X(function(o) {
          return e(t, o);
        }) : e(t, l);
    }
  };
}
function el(e) {
  return function i(t, l, o) {
    switch (arguments.length) {
      case 0:
        return i;
      case 1:
        return E(t) ? i : te(function(a, p) {
          return e(t, a, p);
        });
      case 2:
        return E(t) && E(l) ? i : E(t) ? te(function(a, p) {
          return e(a, l, p);
        }) : E(l) ? te(function(a, p) {
          return e(t, a, p);
        }) : X(function(a) {
          return e(t, l, a);
        });
      default:
        return E(t) && E(l) && E(o) ? i : E(t) && E(l) ? te(function(a, p) {
          return e(a, p, o);
        }) : E(t) && E(o) ? te(function(a, p) {
          return e(a, l, p);
        }) : E(l) && E(o) ? te(function(a, p) {
          return e(t, a, p);
        }) : E(t) ? X(function(a) {
          return e(a, l, o);
        }) : E(l) ? X(function(a) {
          return e(t, a, o);
        }) : E(o) ? X(function(a) {
          return e(t, l, a);
        }) : e(t, l, o);
    }
  };
}
var ee = /* @__PURE__ */ X(function(i) {
  return i == null;
}), he = /* @__PURE__ */ el(function(i, t, l) {
  if (i > t)
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  return l < i ? i : l > t ? t : l;
});
function ll() {
  return typeof crypto < "u" && crypto.randomUUID ? `spv-fc-${crypto.randomUUID()}` : `spv-fc-${Math.random().toString(36).slice(2)}`;
}
function K(e) {
  const i = ll(), t = f(() => {
    const k = e.modelValue;
    if (ee(k) || typeof k == "string" && k.trim() === "" || Array.isArray(k) && k.length === 0) return !1;
    if (typeof k == "object") {
      const x = k.results;
      return Array.isArray(x) ? x.length > 0 : Object.keys(k).length > 0;
    }
    return !0;
  }), l = f(() => {
    var x;
    const k = (x = e.label) == null ? void 0 : x.trimEnd();
    return !!k && k.endsWith("*");
  }), o = f(() => e.required ?? l.value), a = f(() => l.value ? e.label.trimEnd().slice(0, -1).trimEnd() : e.label), p = f(() => !o.value || t.value), c = f(() => e.invalid === !0), w = f(() => {
    const k = ["form-label"];
    return e.labelClass && k.push(...e.labelClass.split(/\s+/).filter(Boolean)), k;
  }), g = A(!1);
  return { id: i, haveValue: t, requiredPass: p, externalInvalid: c, resolvedRequired: o, displayLabel: a, labelClasses: w, touched: g, touch: () => {
    g.value = !0;
  } };
}
const tl = [
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
function oe(e, i) {
  if (typeof e == "string") return e;
  if (typeof e == "number") return String(e);
  if (typeof i == "function") return i(e);
  if (typeof i == "string") {
    const t = e[i];
    return t != null ? String(t) : "";
  }
  for (const t of tl)
    if (t in e && e[t] != null) return String(e[t]);
  return JSON.stringify(e);
}
const al = ["id", "value", "placeholder", "readonly", "maxlength", "list"], nl = ["id"], ol = ["value"], sl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = A(!0), I = f(() => {
      const u = c.value;
      return !l.optionStrict || !x.value ? u : u && (p.value ? V.value : !0);
    }), S = f(() => w.value || x.value && !I.value);
    i({ requiredPass: I, touch: m });
    const $ = f(() => {
      var u;
      return (u = l.options) != null && u.length ? `${a}-list` : void 0;
    }), M = f(() => {
      var u;
      return (u = l.options) != null && u.length ? l.options.map((r) => oe(r, l.optionLabel)) : [];
    });
    function L(u) {
      const r = u.target.value;
      o("update:modelValue", r === "" ? null : r);
    }
    function q(u) {
      var _;
      if (m(), !l.optionStrict || !((_ = l.options) != null && _.length)) return;
      const r = u.target, s = r.value;
      if (!s) {
        V.value = !0;
        return;
      }
      const y = s.toLowerCase(), D = M.value.find((Y) => Y.toLowerCase() === y);
      D ? (V.value = !0, D !== s && (r.value = D, o("update:modelValue", D))) : (V.value = !1, r.value = "", o("update:modelValue", null));
    }
    return (u, r) => (d(), z(W, {
      id: n(a),
      label: n(B),
      "label-classes": n(k),
      "icon-class": "fa-font",
      "have-value": n(p),
      required: n(g),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": S.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(a),
          type: "text",
          class: T(["form-control", { "is-invalid": S.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          list: $.value,
          onInput: L,
          onBlur: q
        }, null, 42, al),
        $.value ? (d(), v("datalist", {
          key: 0,
          id: $.value
        }, [
          (d(!0), v(G, null, H(M.value, (s) => (d(), v("option", {
            key: s,
            value: s
          }, null, 8, ol))), 128))
        ], 8, nl)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), rl = ["id", "type", "value", "placeholder", "readonly"], ul = ["title", "aria-label", "aria-pressed"], il = {
  key: 0,
  class: "list-unstyled mt-1 mb-0 small ps-1"
}, dl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, externalInvalid: c, resolvedRequired: w, displayLabel: g, labelClasses: B, touched: k, touch: x } = K(l), m = A(!1), V = A(!1);
    function I(r) {
      return /^\d+$/.test(r) ? "At least one number (0–9)" : /^[a-z]+$/i.test(r) ? "At least one letter" : r.length <= 12 ? `At least one of: ${r}` : "At least one special character";
    }
    const S = f(() => {
      var y;
      const r = l.modelValue ?? "", s = [];
      return l.minLength && s.push({
        key: "minLength",
        label: `At least ${l.minLength} character${l.minLength === 1 ? "" : "s"}`,
        passed: r.length >= l.minLength
      }), l.mixedCase && s.push({
        key: "mixedCase",
        label: "Upper and lowercase letters",
        passed: /[a-z]/.test(r) && /[A-Z]/.test(r)
      }), (y = l.requiredCharacters) == null || y.forEach((D, _) => {
        s.push({
          key: `chars-${_}`,
          label: I(D),
          passed: [...D].some((Y) => r.includes(Y))
        });
      }), l.mustMatch !== void 0 && s.push({
        key: "mustMatch",
        label: "Passwords match",
        passed: r.length > 0 && r === (l.mustMatch ?? "")
      }), s;
    }), $ = f(() => S.value.every((r) => r.passed)), M = f(() => S.value.length > 0), L = f(() => !w.value && !M.value ? !0 : w.value && !p.value ? !1 : $.value), q = f(() => c.value || k.value && !L.value);
    i({ requiredPass: L, touch: x });
    function u(r) {
      V.value = !0;
      const s = r.target.value;
      o("update:modelValue", s === "" ? null : s);
    }
    return (r, s) => (d(), v("div", null, [
      $e(W, {
        id: n(a),
        label: n(g),
        "label-classes": n(B),
        "icon-class": "fa-lock",
        "have-value": $.value && n(p),
        required: n(w) || M.value,
        readonly: e.readonly,
        "suppress-prefix-icon": e.suppressPrefixIcon,
        "is-invalid": q.value,
        "error-message": e.errorMessage ?? "This field is required"
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
          ], 8, ul)
        ]),
        default: J(() => [
          h("input", {
            id: n(a),
            type: m.value ? "text" : "password",
            class: T(["form-control", { "is-invalid": q.value }]),
            value: e.modelValue ?? "",
            placeholder: e.placeholder,
            readonly: e.readonly,
            autocomplete: "current-password",
            onInput: u,
            onBlur: s[0] || (s[0] = //@ts-ignore
            (...y) => n(x) && n(x)(...y))
          }, null, 42, rl)
        ]),
        _: 1
      }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]),
      M.value && V.value ? (d(), v("ul", il, [
        (d(!0), v(G, null, H(S.value, (y) => (d(), v("li", {
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
}), cl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], vl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = A(null), S = f(() => ee(l.modelValue) ? "" : String(l.modelValue));
    function $(M) {
      const L = M.target.value;
      if (L === "" || L === "-") {
        o("update:modelValue", null);
        return;
      }
      const q = parseFloat(L);
      if (isNaN(q)) {
        I.value && (I.value.value = S.value);
        return;
      }
      const u = ee(l.min) ? Number.NEGATIVE_INFINITY : l.min, r = ee(l.max) ? Number.POSITIVE_INFINITY : l.max, s = he(u, r, q);
      s !== q && I.value && (I.value.value = String(s)), o("update:modelValue", s);
    }
    return (M, L) => (d(), z(W, {
      id: n(a),
      label: n(B),
      "label-classes": n(k),
      "icon-class": "fa-hashtag",
      "have-value": n(p),
      required: n(g),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: I,
          type: "number",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: S.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: $,
          onBlur: L[0] || (L[0] = //@ts-ignore
          (...q) => n(m) && n(m)(...q))
        }, null, 42, cl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), pl = ["id", "value", "placeholder", "readonly", "min", "max"], fl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = A(null);
    function S(u) {
      const r = u.toString(), s = r.indexOf(".");
      return s > -1 ? r.length - s - 1 : 0;
    }
    function $(u) {
      const r = S(u), s = u * 100;
      return S(s) > r + 2 ? parseFloat(s.toFixed(r)).toString() : s.toString();
    }
    function M(u) {
      const r = S(u), s = u / 100;
      return parseFloat(s.toFixed(r + 2));
    }
    const L = f(() => ee(l.modelValue) ? "" : $(l.modelValue));
    function q(u) {
      const r = u.target.value;
      if (r === "" || r === "-") {
        o("update:modelValue", null);
        return;
      }
      const s = parseFloat(r);
      if (isNaN(s)) {
        I.value && (I.value.value = L.value);
        return;
      }
      const y = ee(l.min) ? Number.NEGATIVE_INFINITY : l.min, D = ee(l.max) ? Number.POSITIVE_INFINITY : l.max, _ = he(y, D, s);
      _ !== s && I.value && (I.value.value = String(_)), o("update:modelValue", M(_));
    }
    return (u, r) => (d(), z(W, {
      id: n(a),
      label: n(B),
      "label-classes": n(k),
      "icon-class": "fa-percent",
      "have-value": n(p),
      required: n(g),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: I,
          type: "number",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: L.value,
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          onInput: q,
          onBlur: r[0] || (r[0] = //@ts-ignore
          (...s) => n(m) && n(m)(...s))
        }, null, 42, pl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
});
function be() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function ml(e, i) {
  const t = new Date(e.toLocaleString("en-US", { timeZone: "UTC" })), l = new Date(e.toLocaleString("en-US", { timeZone: i }));
  return (t.getTime() - l.getTime()) / 6e4;
}
function ce(e) {
  return e ? e.substring(0, 10) : "";
}
function yl(e) {
  return e ? `${e}T00:00:00Z` : null;
}
function ve(e, i) {
  if (!e) return "";
  const t = i ?? be(), l = new Date(e), o = new Intl.DateTimeFormat("en-CA", {
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
function hl(e, i) {
  if (!e) return null;
  const t = i ?? be(), l = /* @__PURE__ */ new Date(`${e}:00Z`), o = ml(l, t);
  return new Date(l.getTime() + o * 6e4).toISOString().replace(/\.\d{3}Z$/, "Z");
}
const bl = ["id", "value", "readonly", "min", "max"], gl = /* @__PURE__ */ U({
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
    invalid: { type: Boolean },
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = f(() => ce(l.modelValue)), S = f(() => l.min ? ce(l.min) : void 0), $ = f(() => l.max ? ce(l.max) : void 0);
    function M(L) {
      m();
      const q = L.target.value;
      o("update:modelValue", yl(q));
    }
    return (L, q) => (d(), z(W, {
      id: n(a),
      label: n(B),
      "label-classes": n(k),
      "icon-class": "fa-calendar",
      "have-value": n(p),
      required: n(g),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(a),
          type: "date",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: I.value,
          readonly: e.readonly,
          min: S.value,
          max: $.value,
          onChange: M
        }, null, 42, bl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), xl = ["id", "value", "readonly", "min", "max"], kl = ["title"], Vl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = f(() => l.timezone ?? be()), S = f(
      () => ve(l.modelValue, I.value)
    ), $ = f(
      () => l.min ? ve(l.min, I.value) : void 0
    ), M = f(
      () => l.max ? ve(l.max, I.value) : void 0
    );
    function L(q) {
      m();
      const u = q.target.value;
      o("update:modelValue", hl(u, I.value));
    }
    return (q, u) => (d(), z(W, {
      id: n(a),
      label: n(B),
      "label-classes": n(k),
      "icon-class": "fa-clock",
      "have-value": n(p),
      required: n(g),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(a),
          type: "datetime-local",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: S.value,
          readonly: e.readonly,
          min: $.value,
          max: M.value,
          onChange: L
        }, null, 42, xl),
        e.timezone ? (d(), v("span", {
          key: 0,
          class: "input-group-text text-muted small",
          title: `Times shown in ${I.value}`
        }, [...u[0] || (u[0] = [
          h("i", { class: "fas fa-globe fa-xs" }, null, -1)
        ])], 8, kl)) : P("", !0)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), $l = ["id", "value", "disabled"], wl = ["disabled"], Cl = ["value"], Bl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = ["Lookup", "User"];
    function S(u) {
      return typeof l.optionValue == "function" ? l.optionValue(u) : typeof l.optionValue == "string" ? typeof u == "string" || typeof u == "number" ? u : u[l.optionValue] ?? null : typeof u == "string" || typeof u == "number" ? u : l.spType && I.includes(l.spType) ? u.Id ?? null : u;
    }
    const $ = f(() => {
      var u;
      return (u = l.options) != null && u.length ? l.options.map((r) => {
        const s = oe(r, l.optionLabel), y = S(r), D = y == null ? "" : typeof y == "object" ? JSON.stringify(y) : String(y);
        return { label: s, value: y, key: D };
      }) : [];
    }), M = f(() => {
      const u = l.modelValue;
      return u == null ? "" : typeof u == "object" ? JSON.stringify(u) : String(u);
    });
    function L(u) {
      m();
      const s = u.target.value;
      if (s === "") {
        o("update:modelValue", null);
        return;
      }
      const y = $.value.find((D) => D.key === s);
      o("update:modelValue", y ? y.value : null);
    }
    function q(u) {
      u.key !== "Delete" && u.key !== "Backspace" || l.readonly || (u.preventDefault(), o("update:modelValue", null));
    }
    return (u, r) => (d(), z(W, {
      id: n(a),
      label: n(B),
      "label-classes": n(k),
      "icon-class": "fa-list-ul",
      "have-value": n(p),
      required: n(g),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "Please select a value"
    }, {
      default: J(() => [
        h("select", {
          id: n(a),
          class: T(["form-select", { "is-invalid": V.value }]),
          value: M.value,
          disabled: e.readonly,
          onChange: L,
          onKeydown: q,
          onBlur: r[0] || (r[0] = //@ts-ignore
          (...s) => n(m) && n(m)(...s))
        }, [
          h("option", {
            value: "",
            disabled: n(g)
          }, N(e.placeholder ?? "Choose…"), 9, wl),
          (d(!0), v(G, null, H($.value, (s) => (d(), v("option", {
            key: s.key,
            value: s.key
          }, N(s.label), 9, Cl))), 128))
        ], 42, $l)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Il = ["for"], Tl = {
  key: 0,
  class: "input-group-text"
}, Pl = ["aria-label", "onClick"], Sl = ["id", "placeholder"], ql = ["aria-label"], Ml = ["aria-selected", "onMousedown", "onMouseover"], Ll = {
  key: 2,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, Fl = {
  key: 1,
  class: "invalid-feedback"
}, Dl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, externalInvalid: p, resolvedRequired: c, displayLabel: w, labelClasses: g, touched: B, touch: k } = K(l), x = f(
      () => Array.isArray(l.modelValue) ? l.modelValue : []
    ), m = f(() => x.value.length > 0), V = f(() => !c.value || m.value), I = f(() => p.value || B.value && !V.value);
    i({ requiredPass: V, touch: k });
    const S = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function $(b) {
      return typeof l.optionValue == "function" ? l.optionValue(b) : typeof l.optionValue == "string" ? typeof b == "string" || typeof b == "number" ? b : b[l.optionValue] ?? null : typeof b == "string" || typeof b == "number" ? b : l.spType && S.includes(l.spType) ? b.Id ?? null : b;
    }
    function M(b) {
      return b == null ? "" : typeof b == "object" ? JSON.stringify(b) : String(b);
    }
    const L = f(
      () => (l.options ?? []).map((b) => ({
        label: oe(b, l.optionLabel),
        value: $(b),
        key: M($(b))
      }))
    ), q = f(() => new Set(x.value.map(M))), u = f(
      () => x.value.map((b) => {
        const F = M(b), R = L.value.find((Z) => Z.key === F);
        return { label: (R == null ? void 0 : R.label) ?? (F || String(b)), value: b, key: F };
      })
    ), r = A(""), s = A(!1), y = A(0), D = A(null), _ = f(() => {
      const b = r.value.trim().toLowerCase();
      return L.value.filter((F) => q.value.has(F.key) ? !1 : b ? F.label.toLowerCase().includes(b) : !0);
    });
    le(_, (b) => {
      y.value >= b.length && (y.value = 0);
    });
    function Y() {
      l.readonly || (s.value = !0, y.value = 0);
    }
    function ne() {
      k(), s.value = !1, r.value = "", y.value = 0, o("search", "");
    }
    function se(b) {
      const F = [...x.value, b.value];
      o("update:modelValue", F), r.value = "", y.value = 0, me(() => {
        var R;
        (R = D.value) == null || R.focus(), s.value = !0;
      });
    }
    function re(b) {
      const F = x.value.filter((R) => M(R) !== b);
      o("update:modelValue", F.length ? F : null);
    }
    function ie() {
      s.value = !0, y.value = 0, o("search", r.value);
    }
    function de() {
      Y();
    }
    function C() {
      setTimeout(ne, 150);
    }
    function O(b) {
      const F = _.value;
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
            se(F[R]);
          }
          break;
        case "Escape":
          b.preventDefault(), ne();
          break;
        case "Backspace":
          if (!r.value && x.value.length) {
            const R = u.value[u.value.length - 1];
            re(R.key);
          }
          break;
      }
    }
    return (b, F) => (d(), v("div", null, [
      n(w) ? (d(), v("label", {
        key: 0,
        for: n(a),
        class: T(n(g))
      }, [
        Q(N(n(w)) + " ", 1),
        n(c) ? (d(), z(ae, {
          key: 0,
          "have-value": m.value
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, Il)) : P("", !0),
      h("div", {
        class: T(["input-group", { "has-validation": I.value }])
      }, [
        e.suppressPrefixIcon ? P("", !0) : (d(), v("span", Tl, [...F[2] || (F[2] = [
          h("i", { class: "fas fa-search-plus" }, null, -1)
        ])])),
        h("div", {
          class: T(["form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative", { "bg-body-secondary": e.readonly, "is-invalid": I.value }]),
          style: { cursor: "text", "min-height": "2.375rem" },
          onClick: F[1] || (F[1] = (R) => {
            var Z;
            return (Z = D.value) == null ? void 0 : Z.focus();
          })
        }, [
          (d(!0), v(G, null, H(u.value, (R) => (d(), v("span", {
            key: R.key,
            class: "badge rounded-pill bg-primary d-inline-flex align-items-center gap-1",
            style: { "font-size": "0.8em" }
          }, [
            Q(N(R.label) + " ", 1),
            e.readonly ? P("", !0) : (d(), v("button", {
              key: 0,
              type: "button",
              class: "btn-close btn-close-white",
              style: { "font-size": "0.6em" },
              "aria-label": `Remove ${R.label}`,
              onClick: pe((Z) => re(R.key), ["stop"])
            }, null, 8, Pl))
          ]))), 128)),
          e.readonly ? P("", !0) : ye((d(), v("input", {
            key: 0,
            id: n(a),
            ref_key: "inputRef",
            ref: D,
            type: "text",
            class: "border-0 p-0 flex-grow-1 bg-transparent",
            style: { outline: "none", "min-width": "8ch", "line-height": "inherit" },
            "onUpdate:modelValue": F[0] || (F[0] = (R) => r.value = R),
            placeholder: u.value.length ? "" : e.placeholder ?? "Type to search…",
            autocomplete: "off",
            onInput: ie,
            onFocus: de,
            onBlur: C,
            onKeydown: O
          }, null, 40, Sl)), [
            [xe, r.value]
          ]),
          s.value && _.value.length ? (d(), v("ul", {
            key: 1,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(w) ?? "Suggestions"
          }, [
            (d(!0), v(G, null, H(_.value, (R, Z) => (d(), v("li", {
              key: R.key,
              role: "option",
              "aria-selected": Z === y.value,
              class: T(["dropdown-item", { active: Z === y.value }]),
              style: ke(Z === y.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: pe((Ve) => se(R), ["prevent"]),
              onMouseover: (Ve) => y.value = Z
            }, N(R.label), 47, Ml))), 128))
          ], 8, ql)) : s.value && r.value && !_.value.length ? (d(), v("ul", Ll, [...F[3] || (F[3] = [
            h("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : P("", !0)
        ], 2),
        I.value ? (d(), v("div", Fl, N(e.errorMessage ?? "Please select at least one value"), 1)) : P("", !0)
      ], 2)
    ]));
  }
}), Rl = ["id", "value", "disabled", "title"], Nl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    function I($) {
      m(), o("update:modelValue", $.target.value);
    }
    function S($) {
      $.key !== "Delete" && $.key !== "Backspace" || l.readonly || ($.preventDefault(), o("update:modelValue", null));
    }
    return ($, M) => (d(), z(W, {
      id: n(a),
      label: n(B),
      "label-classes": n(k),
      "icon-class": "fa-palette",
      "have-value": n(p),
      required: n(g),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("input", {
          id: n(a),
          type: "color",
          class: T(["form-control form-control-color flex-grow-1", { "is-invalid": V.value }]),
          value: e.modelValue ?? "#000000",
          disabled: e.readonly,
          title: e.modelValue ?? "Choose a colour",
          onChange: I,
          onKeydown: S
        }, null, 42, Rl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), Ol = ["aria-labelledby"], El = ["id"], Al = ["id", "type", "checked", "disabled", "name", "onClick"], Ul = ["for"], _l = {
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function S(s) {
      return typeof l.optionValue == "function" ? l.optionValue(s) : typeof l.optionValue == "string" ? typeof s == "string" || typeof s == "number" ? s : s[l.optionValue] ?? null : typeof s == "string" || typeof s == "number" ? s : l.spType && I.includes(l.spType) ? s.Id ?? null : s;
    }
    function $(s) {
      return s == null ? "" : typeof s == "object" ? JSON.stringify(s) : String(s);
    }
    const M = f(
      () => (l.options ?? []).map((s) => ({
        label: oe(s, l.optionLabel),
        value: S(s),
        key: $(S(s))
      }))
    ), L = f(
      () => l.multi && Array.isArray(l.modelValue) ? l.modelValue : []
    );
    function q(s) {
      return l.multi ? L.value.some((y) => $(y) === s) : $(l.modelValue) === s;
    }
    function u(s) {
      if (!l.readonly)
        if (m(), l.multi)
          if (L.value.some((D) => $(D) === s.key)) {
            const D = L.value.filter((_) => $(_) !== s.key);
            o("update:modelValue", D.length ? D : null);
          } else
            o("update:modelValue", [...L.value, s.value]);
        else
          $(l.modelValue) === s.key ? o("update:modelValue", null) : o("update:modelValue", s.value);
    }
    const r = f(
      () => l.multi ? "Please select at least one option" : "Please select an option"
    );
    return (s, y) => (d(), v("div", {
      role: "group",
      "aria-labelledby": n(B) ? `${n(a)}-label` : void 0
    }, [
      n(B) ? (d(), v("div", {
        key: 0,
        id: `${n(a)}-label`,
        class: T(n(k)),
        style: { "margin-bottom": "0.25rem" }
      }, [
        Q(N(n(B)) + " ", 1),
        n(g) ? (d(), z(ae, {
          key: 0,
          "have-value": n(p)
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, El)) : P("", !0),
      h("div", null, [
        (d(!0), v(G, null, H(M.value, (D, _) => (d(), v("div", {
          key: D.key,
          class: T(["form-check", { "form-check-inline": !e.stacked }])
        }, [
          h("input", {
            id: `${n(a)}-opt-${_}`,
            type: e.multi ? "checkbox" : "radio",
            class: T(["form-check-input", { "is-invalid": V.value }]),
            checked: q(D.key),
            disabled: e.readonly,
            name: e.multi ? void 0 : n(a),
            onClick: (Y) => u(D)
          }, null, 10, Al),
          h("label", {
            for: `${n(a)}-opt-${_}`,
            class: "form-check-label"
          }, N(D.label), 9, Ul)
        ], 2))), 128))
      ]),
      V.value ? (d(), v("div", _l, N(e.errorMessage ?? r.value), 1)) : P("", !0)
    ], 8, Ol));
  }
}), zl = ["id", "value", "placeholder", "readonly", "maxlength", "rows"], Kl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    function I(S) {
      const $ = S.target.value;
      o("update:modelValue", $ === "" ? null : $);
    }
    return (S, $) => (d(), z(W, {
      id: n(a),
      label: n(B),
      "label-classes": n(k),
      "icon-class": "fa-pen-fancy",
      "have-value": n(p),
      required: n(g),
      readonly: e.readonly,
      "suppress-prefix-icon": e.suppressPrefixIcon,
      "is-invalid": V.value,
      "error-message": e.errorMessage ?? "This field is required"
    }, {
      default: J(() => [
        h("textarea", {
          id: n(a),
          class: T(["form-control", { "is-invalid": V.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          maxlength: e.maxlength,
          rows: e.rows,
          onInput: I,
          onBlur: $[0] || ($[0] = //@ts-ignore
          (...M) => n(m) && n(m)(...M))
        }, null, 42, zl)
      ]),
      _: 1
    }, 8, ["id", "label", "label-classes", "have-value", "required", "readonly", "suppress-prefix-icon", "is-invalid", "error-message"]));
  }
}), jl = { class: "form-check form-switch" }, Yl = ["id", "disabled"], Zl = ["for"], Gl = {
  key: 0,
  class: "invalid-feedback d-block"
}, Jl = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = f({
      get: () => l.modelValue === !0,
      set: (S) => {
        l.readonly || (m(), o("update:modelValue", S));
      }
    });
    return (S, $) => (d(), v("div", null, [
      h("div", jl, [
        ye(h("input", {
          id: n(a),
          type: "checkbox",
          role: "switch",
          class: T(["form-check-input", { "is-invalid": V.value }]),
          "onUpdate:modelValue": $[0] || ($[0] = (M) => I.value = M),
          disabled: e.readonly
        }, null, 10, Yl), [
          [we, I.value]
        ]),
        h("label", {
          for: n(a),
          class: T(["form-check-label", ...n(k).filter((M) => M !== "form-label")])
        }, [
          Q(N(n(B)) + " ", 1),
          n(g) ? (d(), z(ae, {
            key: 0,
            "have-value": n(p)
          }, null, 8, ["have-value"])) : P("", !0)
        ], 10, Zl)
      ]),
      V.value ? (d(), v("div", Gl, N(e.errorMessage ?? "This field is required"), 1)) : P("", !0)
    ]));
  }
}), Hl = ["for"], Wl = { class: "input-group-text fw-semibold" }, Xl = ["id", "value", "placeholder", "readonly", "min", "max", "step"], Ql = {
  key: 0,
  class: "invalid-feedback"
}, et = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = A(null), S = f(() => {
      var u;
      try {
        const r = l.locale ?? (typeof navigator < "u" ? navigator.language : "en-GB");
        return ((u = new Intl.NumberFormat(r, {
          style: "currency",
          currency: l.currency ?? "GBP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).formatToParts(0).find((y) => y.type === "currency")) == null ? void 0 : u.value) ?? l.currency ?? "£";
      } catch {
        return l.currency ?? "£";
      }
    }), $ = f(() => l.min ?? -1 / 0), M = f(() => l.max ?? 1 / 0);
    function L(u) {
      const r = u.target.value;
      if (r === "") {
        o("update:modelValue", null);
        return;
      }
      const s = parseFloat(r);
      isNaN(s) || o("update:modelValue", s);
    }
    function q(u) {
      if (m(), u.target.value === "" || l.modelValue === null) return;
      const s = he($.value, M.value, l.modelValue);
      s !== l.modelValue && (o("update:modelValue", s), I.value && (I.value.value = String(s)));
    }
    return (u, r) => (d(), v("div", null, [
      n(B) ? (d(), v("label", {
        key: 0,
        for: n(a),
        class: T(n(k))
      }, [
        Q(N(n(B)) + " ", 1),
        n(g) ? (d(), z(ae, {
          key: 0,
          "have-value": n(p)
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, Hl)) : P("", !0),
      h("div", {
        class: T(["input-group", { "has-validation": V.value }])
      }, [
        h("span", Wl, N(S.value), 1),
        h("input", {
          id: n(a),
          ref_key: "inputRef",
          ref: I,
          type: "number",
          class: T(["form-control", { "is-invalid": V.value }]),
          value: e.modelValue ?? "",
          placeholder: e.placeholder,
          readonly: e.readonly,
          min: e.min,
          max: e.max,
          step: e.step,
          onInput: L,
          onBlur: q
        }, null, 42, Xl),
        V.value ? (d(), v("div", Ql, N(e.errorMessage ?? "This field is required"), 1)) : P("", !0)
      ], 2)
    ]));
  }
}), lt = ["for"], tt = {
  key: 0,
  class: "input-group-text"
}, at = { class: "position-relative flex-grow-1 d-flex" }, nt = ["id", "placeholder", "readonly"], ot = ["aria-label"], st = ["aria-selected", "onMousedown", "onMouseover"], rt = {
  key: 1,
  class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
  style: { top: "100%", left: "0", "z-index": "1000" }
}, ut = {
  key: 1,
  class: "invalid-feedback"
}, it = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, { id: a, haveValue: p, requiredPass: c, externalInvalid: w, resolvedRequired: g, displayLabel: B, labelClasses: k, touched: x, touch: m } = K(l), V = f(() => w.value || x.value && !c.value);
    i({ requiredPass: c, touch: m });
    const I = ["Lookup", "LookupMulti", "User", "UserMulti"];
    function S(C) {
      return typeof l.optionValue == "function" ? l.optionValue(C) : typeof l.optionValue == "string" ? typeof C == "string" || typeof C == "number" ? C : C[l.optionValue] ?? null : typeof C == "string" || typeof C == "number" ? C : l.spType && I.includes(l.spType) ? C.Id ?? null : C;
    }
    function $(C) {
      return C == null ? "" : typeof C == "object" ? JSON.stringify(C) : String(C);
    }
    const M = f(
      () => (l.options ?? []).map((C) => ({
        label: oe(C, l.optionLabel),
        value: S(C),
        key: $(S(C))
      }))
    ), L = f(() => {
      if (l.modelValue === null || l.modelValue === void 0) return null;
      const C = $(l.modelValue), O = M.value.find((b) => b.key === C);
      return (O == null ? void 0 : O.label) ?? String(l.modelValue);
    }), q = A(""), u = A(!1), r = A(0), s = A(null);
    le(L, (C) => {
      C !== null && (q.value = C);
    }, { immediate: !0 });
    const y = f(() => {
      const C = q.value.trim().toLowerCase(), O = $(l.modelValue);
      return M.value.filter((b) => b.key === O ? !1 : C ? b.label.toLowerCase().includes(C) : !0);
    });
    le(y, (C) => {
      r.value >= C.length && (r.value = 0);
    });
    function D() {
      l.readonly || (u.value = !0, r.value = 0);
    }
    function _() {
      m(), u.value = !1, r.value = 0, o("search", ""), L.value !== null && (q.value = L.value);
    }
    function Y(C) {
      o("update:modelValue", C.value), q.value = C.label, u.value = !1, o("search", "");
    }
    function ne() {
      o("update:modelValue", null), q.value = "", o("search", ""), me(() => {
        var C;
        return (C = s.value) == null ? void 0 : C.focus();
      });
    }
    function se() {
      l.modelValue !== null && l.modelValue !== void 0 && o("update:modelValue", null), u.value = !0, r.value = 0, o("search", q.value);
    }
    function re() {
      D();
    }
    function ie() {
      setTimeout(_, 150);
    }
    function de(C) {
      const O = y.value;
      switch (C.key) {
        case "ArrowDown":
          if (C.preventDefault(), !u.value) {
            D();
            return;
          }
          r.value = O.length ? (r.value + 1) % O.length : 0;
          break;
        case "ArrowUp":
          if (C.preventDefault(), !u.value) {
            D();
            return;
          }
          r.value = O.length ? (r.value - 1 + O.length) % O.length : 0;
          break;
        case "Enter":
          if (C.preventDefault(), u.value && O.length) {
            const b = r.value >= 0 && r.value < O.length ? r.value : 0;
            Y(O[b]);
          }
          break;
        case "Escape":
          C.preventDefault(), _();
          break;
        case "Delete":
        case "Backspace":
          l.modelValue !== null && l.modelValue !== void 0 && !q.value && (C.preventDefault(), ne());
          break;
      }
    }
    return (C, O) => (d(), v("div", null, [
      n(B) ? (d(), v("label", {
        key: 0,
        for: n(a),
        class: T(n(k))
      }, [
        Q(N(n(B)) + " ", 1),
        n(g) ? (d(), z(ae, {
          key: 0,
          "have-value": n(p)
        }, null, 8, ["have-value"])) : P("", !0)
      ], 10, lt)) : P("", !0),
      h("div", {
        class: T(["input-group", { "has-validation": V.value }])
      }, [
        e.suppressPrefixIcon ? P("", !0) : (d(), v("span", tt, [...O[1] || (O[1] = [
          h("i", { class: "fas fa-search" }, null, -1)
        ])])),
        h("div", at, [
          ye(h("input", {
            id: n(a),
            ref_key: "inputRef",
            ref: s,
            type: "text",
            class: T(["form-control border-end-0", { "is-invalid": V.value }]),
            "onUpdate:modelValue": O[0] || (O[0] = (b) => q.value = b),
            placeholder: e.placeholder ?? "Type to search…",
            readonly: e.readonly,
            autocomplete: "off",
            onInput: se,
            onFocus: re,
            onBlur: ie,
            onKeydown: de
          }, null, 42, nt), [
            [xe, q.value]
          ]),
          u.value && y.value.length ? (d(), v("ul", {
            key: 0,
            class: "dropdown-menu show position-absolute w-100 p-0 mb-0",
            style: { top: "100%", left: "0", "z-index": "1000" },
            role: "listbox",
            "aria-label": n(B) ?? "Suggestions"
          }, [
            (d(!0), v(G, null, H(y.value, (b, F) => (d(), v("li", {
              key: b.key,
              role: "option",
              "aria-selected": F === r.value,
              class: T(["dropdown-item", { active: F === r.value }]),
              style: ke(F === r.value ? "text-decoration: underline dotted;" : ""),
              onMousedown: pe((R) => Y(b), ["prevent"]),
              onMouseover: (R) => r.value = F
            }, N(b.label), 47, st))), 128))
          ], 8, ot)) : u.value && q.value && !y.value.length ? (d(), v("ul", rt, [...O[2] || (O[2] = [
            h("li", { class: "dropdown-item disabled text-muted fst-italic" }, "No matches", -1)
          ])])) : P("", !0)
        ]),
        V.value ? (d(), v("div", ut, N(e.errorMessage ?? "Please select a value"), 1)) : P("", !0),
        n(p) && !e.readonly ? (d(), v("button", {
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
}), dt = {
  key: 0,
  class: "form-text text-muted"
}, ct = /* @__PURE__ */ U({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, a = f(() => l.type ? l.type : l.spType ? Ze[l.spType] : "text"), p = f(() => {
      if (l.maxlength !== void 0) return l.maxlength;
      if (l.spType) return Ge[l.spType];
    }), c = f(() => {
      switch (a.value) {
        case "password":
          return dl;
        case "number":
          return vl;
        case "percent":
          return fl;
        case "date":
          return gl;
        case "datetime-local":
          return Vl;
        case "select":
          return Bl;
        case "lookupMulti":
          return Dl;
        case "color":
          return Nl;
        case "checkboxes":
          return ge;
        case "radio":
          return ge;
        case "textarea":
          return Kl;
        case "switch":
          return Jl;
        case "currency":
          return et;
        case "lookup":
          return it;
        case "text":
        default:
          return sl;
      }
    }), w = A(null), g = f(() => {
      var x;
      return ((x = w.value) == null ? void 0 : x.requiredPass) ?? !0;
    });
    function B() {
      var x, m;
      (m = (x = w.value) == null ? void 0 : x.touch) == null || m.call(x);
    }
    i({ requiredPass: g, touch: B });
    const k = f(() => ({
      modelValue: l.modelValue,
      spType: l.spType,
      label: l.label,
      labelClass: l.labelClass,
      placeholder: l.placeholder,
      required: l.required,
      readonly: l.readonly,
      suppressPrefixIcon: l.suppressPrefixIcon,
      stacked: l.stacked,
      invalid: l.invalid,
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
    return (x, m) => (d(), v("div", null, [
      (d(), z(Ce(c.value), Be({
        ref_key: "innerRef",
        ref: w
      }, k.value, {
        "onUpdate:modelValue": m[0] || (m[0] = (V) => o("update:modelValue", V)),
        onSearch: m[1] || (m[1] = (V) => o("search", V))
      }), null, 16)),
      e.helpText ? (d(), v("div", dt, N(e.helpText), 1)) : P("", !0)
    ]));
  }
});
function vt(e = 1500) {
  const i = A(!1), t = A(!1);
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
const pt = { class: "spv-copyable position-relative d-inline-block" }, ft = ["title"], mt = /* @__PURE__ */ U({
  __name: "SpvCopyable",
  props: {
    text: {}
  },
  emits: ["copied"],
  setup(e, { emit: i }) {
    const t = e, l = i, o = A(null), { copied: a, error: p, copy: c } = vt(), w = f(() => a.value ? "fas fa-check" : p.value ? "fas fa-times" : "fas fa-copy");
    async function g() {
      var k;
      const B = t.text ?? ((k = o.value) == null ? void 0 : k.innerText) ?? "";
      B && (await c(B), a.value && l("copied", B));
    }
    return (B, k) => (d(), v("span", pt, [
      h("span", {
        ref_key: "contentRef",
        ref: o
      }, [
        j(B.$slots, "default", {}, void 0, !0)
      ], 512),
      h("button", {
        type: "button",
        class: T(["spv-copyable__btn btn btn-sm btn-light border position-absolute top-0 end-0 p-1 lh-1", { "is-active text-success": n(a), "is-active text-danger": n(p) }]),
        title: n(a) ? "Copied!" : "Copy to clipboard",
        onClick: g
      }, [
        h("i", {
          class: T(w.value)
        }, null, 2)
      ], 10, ft)
    ]));
  }
}), yt = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of i)
    t[l] = o;
  return t;
}, ht = /* @__PURE__ */ yt(mt, [["__scopeId", "data-v-249ac02f"]]), bt = {
  SpvAlert: Ie,
  SpvModal: Le,
  SpvToast: Oe,
  SpvOffcanvas: _e,
  SpvNavTabs: Ye,
  SpvFormControl: ct,
  SpvCopyable: ht
}, xt = {
  install(e) {
    for (const [i, t] of Object.entries(bt))
      e.component(i, t);
  }
};
export {
  Ie as SpvAlert,
  ht as SpvCopyable,
  ct as SpvFormControl,
  Le as SpvModal,
  Ye as SpvNavTabs,
  _e as SpvOffcanvas,
  Oe as SpvToast,
  xt as default,
  vt as useClipboard
};
