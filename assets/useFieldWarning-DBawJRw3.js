import{i as o,r as s}from"./main-3CBIO4cq.js";function c(n){if(n&&n!==n.trim())return o.t("Leading and trailing spaces will be removed when saving")}function d(n,a){const[i,t]=s.useState(),r=n.touched&&n.invalid;return{onChange:async e=>{t(await a(e))},validationText:r?void 0:i,warning:!r&&!!i}}export{c as g,d as u};
//# sourceMappingURL=useFieldWarning-DBawJRw3.js.map
