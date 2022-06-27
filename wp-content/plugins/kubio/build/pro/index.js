this.kubio=this.kubio||{},this.kubio.pro=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=556)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},12:function(e,t){!function(){e.exports=this.wp.blocks}()},13:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var l=r.apply(null,o);l&&e.push(l)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var a in o)n.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},19:function(e,t){!function(){e.exports=this.kubio.utils}()},2:function(e,t){!function(){e.exports=this.lodash}()},24:function(e,t){!function(){e.exports=this.wp.hooks}()},3:function(e,t){!function(){e.exports=this.wp.components}()},34:function(e,t){!function(){e.exports=this.wp.url}()},556:function(e,t,n){"use strict";n.r(t),n.d(t,"ControlNotice",(function(){return P})),n.d(t,"AvailableInPro",(function(){return y})),n.d(t,"ProModal",(function(){return h})),n.d(t,"useProModal",(function(){return v})),n.d(t,"noticeMessage",(function(){return d})),n.d(t,"upgradeToPro",(function(){return m})),n.d(t,"tryOnline",(function(){return O})),n.d(t,"upgradeToProURL",(function(){return f})),n.d(t,"PRO_ON_FREE_FLAG",(function(){return w})),n.d(t,"proBadgeClasses",(function(){return E})),n.d(t,"ProBadge",(function(){return T})),n.d(t,"proItemOnFree",(function(){return N})),n.d(t,"proItemOnFreeClass",(function(){return A})),n.d(t,"sortItemsByPro",(function(){return R})),n.d(t,"addProTagToItems",(function(){return C})),n.d(t,"isFreeVersion",(function(){return F})),n.d(t,"addProTagToItem",(function(){return x})),n.d(t,"ProItem",(function(){return D}));var o=n(0),r=n(3),i=n(1),l=n(34),a=n(7),c=n(19),u=n(2),s=n.n(u);const b={pro:{link:top.kubioUtilsData.homepage_url,pricing_link:top.kubioUtilsData.upgrade_url,typography:Object(i.__)("available only in the PRO version","kubio"),upgrade:{label:Object(i.__)("Upgrade to PRO","kubio")},try:{label:Object(i.__)("Try PRO Online","kubio"),msg:Object(i.__)("Get unlimited customization with Kubio PRO","kubio"),link:top.kubioUtilsData.try_url},subscribe:{label:Object(i.__)("PRO version coming soon","kubio"),msg:Object(i.__)("The PRO version of Kubio will be available soon. Please enter your email below and we’ll announce you when it’s ready.","kubio")},popup:{option:Object(i.__)("This option is available only in the PRO version.","kubio"),innerpage:Object(i.__)("Adding predefined blocks to inner pages is available only in the PRO version.","kubio"),colorscheme:Object(i.__)("Customizing color scheme colors is available only in the PRO version.","kubio"),component:Object(i.__)("This component is available only in the PRO version.","kubio"),gradient:Object(i.__)("Customizing gradient settings is available only in the PRO version.","kubio"),buttonsLimit:Object(i.__)("Adding more than 2 items is available only in the PRO version.","kubio")},infobox:{text:Object(i.__)("Text customization options (font, color, etc) are only available in the PRO version.","kubio"),default:Object(i.__)("More customization options available in the PRO version.","kubio"),icon:Object(i.__)("More color options are available in the PRO version.","kubio"),button:Object(i.__)("More customization options available in the PRO version.","kubio"),menu:Object(i.__)("More menu design options are available in the PRO version.","kubio")},advanced:Object(i.__)("Advanced options are only available in the PRO version.","kubio"),footer:{msg:Object(i.__)("Footer text and customization options are available in the PRO version","kubio")}}},p=e=>s.a.get(b,e,""),d=e=>{let t=e.title||p(e.msgid?e.msgid:"pro.infobox.default");const n=e.include?e.include.join(", "):"";return t=t.replace("{{props}}",n),t=t.replace(/\[pro-link\]([\w]+)\[\/pro-link\]/,""),t},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{source:t,content:n,...o}=e;return Object(l.addQueryArgs)(p("pro.pricing_link"),{utm_medium:"editor",utm_source:t,utm_content:n,...o})},m=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=window.open(f(t));null==n||null===(e=n.focus)||void 0===e||e.call(n)},O=()=>{var e;const t=window.open(p("pro.link"));null==t||null===(e=t.focus)||void 0===e||e.call(t)},v=()=>g(),g=()=>{const[e,t]=Object(o.useState)({default:!1}),n=function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";t({...e,[o]:n})};return[Object(o.useCallback)((t=>{const{id:r="default"}=t;return!(null==e||!e[r])&&Object(o.createElement)(h,Object(a.a)({onClose:()=>{n(!1,r)}},t))}),[e]),n]},j=e=>{e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},_=e=>{const t=new e.ownerDocument.defaultView.CustomEvent("kubio-pro-modal-showed",{detail:{modalEl:e}});e.ownerDocument.defaultView.dispatchEvent(t)},h=Object(o.forwardRef)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{onClose:t=s.a.noop,anchorRef:n,urlArgs:i={}}=e,l=Object(o.useRef)(),a=Object(o.useCallback)((e=>{const n=null==e?void 0:e.target;l.current===n||l.current.contains(n)||t()}),[t]);Object(c.useOnClickOutside)(l,a);const u=Object(o.useCallback)((e=>{e.detail.modalEl.isSameNode(l.current)||t()}),[]);return Object(o.useEffect)((()=>{if(l.current){_(l.current);const e=l.current.ownerDocument.defaultView;return e.addEventListener("kubio-pro-modal-showed",u),()=>e.removeEventListener("kubio-pro-modal-showed",u)}}),[l]),Object(o.createElement)(r.Popover,{position:"bottom center",className:"kubio-upgrade-to-pro-popup sidebar-popover-container",anchorRef:n,__unstableSlotName:top.isKubioBlockEditor?"kubio-popover-slot":void 0},Object(o.createElement)("div",{ref:l,onClick:j},Object(o.createElement)(k,{urlArgs:i})))}));function k(){let{urlArgs:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=p("pro.popup.option"),n=Object(o.useRef)(!1),i=Object(o.useCallback)((t=>{n.current||t.defaultPrevented||(n.current=!0,m(e))}),[]);return Object(o.useEffect)((()=>{if(n.current){const e=setTimeout((()=>{n.current=!1}),100);return()=>clearTimeout(e)}}),[n.current]),Object(o.createElement)(o.Fragment,null,Object(o.createElement)("span",{className:"upgrade-to-pro-popup__text"},t),Object(o.createElement)(r.Flex,null,Object(o.createElement)(r.Button,{className:"upgrade-to-pro-popup__button",isPrimary:!0,onClick:i,onMouseUp:i,onMouseDown:i},p("pro.upgrade.label"))))}const P=e=>{let{showLabel:t=!0,label:n,content:i=""}=e;return Object(o.createElement)(r.BaseControl,null,Object(o.createElement)("div",{className:"h-control-notice"},t&&Object(o.createElement)("span",{className:"h-control-notice__label"},n),Object(o.createElement)("div",{className:"h-control-notice__content"},i)))},y=function(){let{displayModal:e=!0,urlArgs:t={},...n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[l,a]=v(),c=Object(o.useCallback)((n=>{e?(n.preventDefault(),n.stopPropagation(),a(!0)):m(t)}),[]);return Object(o.createElement)(r.BaseControl,{className:"kubio-feature-available-in-pro"},Object(o.createElement)("div",{className:"h-control-notice"},Object(o.createElement)("span",{className:"h-control-notice__label"},Object(i.__)("PRO","kubio")),Object(o.createElement)("div",{className:"h-control-notice__content"},Object(o.createElement)("label",{className:"label-title"},d(n))),Object(o.createElement)("div",{className:"h-control-notice__content"},Object(o.createElement)(r.Button,{isSmall:!0,isSecondary:!0,onClick:c},p("pro.upgrade.label"),e&&Object(o.createElement)(l,{urlArgs:t})))))},E={proItem:"kubio-pro-item",badgeClass:"kubio-pro-item__badge"},w="isProOnFree";function R(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s.a.sortBy(e,[function(e){return!0===(null==e?void 0:e[w])}],[t])}function x(e){return s.a.set(e,w,!0),e}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=s.a.cloneDeep(e);return s.a.each(n,((e,n)=>{s.a.isFunction(t)&&(t(e,n)||s.a.set(e,w,!0)),s.a.isArray(t)&&(t.includes(s.a.get(e,"value"))||s.a.set(e,w,!0))})),e=n}const N=e=>!0===e||(null==e?void 0:e[w]),A=e=>{const t=[];return N(e)&&t.push(E.proItem),t},T=e=>{let{item:t}=e;return N(t)?Object(o.createElement)("div",{className:E.badgeClass},Object(i.__)("PRO","kubio")):null};top.kubioEnv=Object({pro:!1,free:!0,internal:!1,all:!0,dev:!1});const F=()=>!top.kubioEnv.pro;var M=n(13),S=n.n(M);const D=e=>{const{tag:t,item:n=!0,onClick:r,className:i,children:l,urlArgs:c,...u}=e,[s,b]=v();let p=null;return p=Object(o.createElement)(o.Fragment,null,Object(o.createElement)(T,{item:n}),Object(o.createElement)(s,{urlArgs:c})),Object(o.createElement)(t,Object(a.a)({},u,{className:S()(i,A(n)),onClick:e=>{if(N(n))return e.preventDefault(),e.stopPropagation(),void b(!0);r(e)}}),l,p)};var B=n(12),I=n(24);Object(I.addFilter)("kubio.beforeInsertBlock","kubio/pro/blocks",(function(e){const t=Object(B.getBlockType)(null==e?void 0:e.name);return e.isProOnFree=t.isPro,e.isProOnFree&&(e.disabled=!0,e.isDisabled=!0),e}))},7:function(e,t,n){"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,"a",(function(){return o}))}});
