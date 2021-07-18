/*! @omiu/component v0.0.0 http://omijs.org
Front End Cross-Frameworks Framework.
By dntzhang https://github.com/dntzhang 
 Github: https://github.com/Tencent/omi
 MIT Licensed. */
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { tag, WeElement, h, extractClass } from "omi";
var index = ":host {\n  display: inline-block;\n}\n\n:host([block]) {\n  display: block;\n}\n\n.o-button {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #dcdfe6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.o-button:hover {\n  border-color: rgba(7, 193, 96, 0.382);\n  border-color: var(--o-primary-fade-some, rgba(7, 193, 96, 0.382));\n  color: #07c160;\n  color: var(--o-primary, #07c160);\n  background-color: rgba(7, 193, 96, 0.1);\n  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1));\n}\n\n.o-button:active {\n  color: #07c160;\n  color: var(--o-primary, #07c160);\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160);\n  outline: none;\n}\n\n.o-button-primary {\n  color: #fff;\n  background-color: #07c160;\n  border-color: #07c160;\n  background-color: var(--o-primary, #07c160);\n  border-color: var(--o-primary, #07c160);\n}\n\n.o-button-primary.is-plain {\n  color: #07c160;\n  color: var(--o-primary, #07c160);\n  background-color: var(--o-primary-fade-lot, );\n  border-color: var(--o-primary-fade-some, );\n}\n\n.o-button-primary:hover {\n  background-color: var(--o-primary-fade-little, );\n  border-color: var(--o-primary-fade-little, );\n  color: #fff;\n}\n\n.o-button-primary:active {\n  background-color: var(--o-primary-active, );\n  border-color: var(--o-primary-active, );\n  color: #fff;\n}\n\n.o-button-danger {\n  color: #fff;\n  background-color: #fa5151;\n  border-color: #fa5151;\n  background-color: var(--o-danger, #fa5151);\n  border-color: var(--o-danger, #fa5151);\n}\n\n.o-button-danger.is-plain {\n  color: #fa5151;\n  color: var(--o-danger, #fa5151);\n  background-color: var(--o-danger-fade-lot, );\n  border-color: var(--o-danger-fade-some, );\n}\n\n.o-button-danger:hover {\n  background-color: var(--o-danger-fade-little, );\n  border-color: var(--o-danger-fade-little, );\n  color: #fff;\n}\n\n.o-button-danger:active {\n  background-color: var(--o-danger-active, );\n  border-color: var(--o-danger-active, );\n  color: #fff;\n}\n\n.loading {\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  animation: loading 1s steps(12, end) infinite;\n  vertical-align: -0.125em;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n\n.o-button-medium {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.o-button-small {\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.o-button-mini {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.o-button.is-round {\n  border-radius: 20px;\n}\n\n.o-button.is-circle {\n  border-radius: 20px;\n  padding: 12px;\n}\n\n.o-button.is-disabled,\n.o-button.is-disabled:focus,\n.o-button.is-disabled:hover {\n  color: #c0c4cc;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #fff;\n  border-color: #ebeef5;\n}\n\n.o-button.is-block {\n  display: block;\n  width: 100%;\n}";
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
let Button = class extends WeElement {
  render(props) {
    return /* @__PURE__ */ h("button", __spreadProps(__spreadValues({
      disabled: props.disabled
    }, extractClass(props, "o-button", {
      ["o-button-" + props.type]: props.type,
      ["o-button-" + props.size]: props.size,
      "is-plain": props.plain,
      "is-round": props.round,
      "is-circle": props.circle,
      "is-disabled": props.disabled,
      "is-block": props.block
    })), {
      type: props.nativeType
    }), props.loading && [/* @__PURE__ */ h("svg", {
      class: "loading",
      viewBox: "0 0 1024 1024",
      focusable: "false",
      "data-icon": "loading",
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /* @__PURE__ */ h("path", {
      d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
    })), " "], props.text, /* @__PURE__ */ h("slot", null));
  }
};
Button.css = index;
Button.defaultProps = {
  plain: false,
  round: false,
  circle: false,
  loading: false,
  disabled: false,
  autofocus: false,
  nativeType: "button",
  block: false
};
Button.propTypes = {
  size: String,
  type: String,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  icon: String,
  autofocus: Boolean,
  nativeType: String,
  block: Boolean,
  text: String
};
Button = __decorateClass([
  tag("o-button")
], Button);
export default Button;
//# sourceMappingURL=component.es.js.map
