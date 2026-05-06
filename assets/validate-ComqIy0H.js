import{bD as u}from"./App-C6Ou7E4m.js";function a(t){return t.reduce((r,e)=>e==="number"?`${r}[${e}]`:e==="id"?r:`${r}.${e}`)}function c(t,r){const e=t.safeParse(r);return e.success!==!1?void 0:e.error.issues.reduce((o,s)=>{const n=a(s.path);return u(o,n,s.message)},{})}function l(t){return r=>c(t,r)}export{l as c};
//# sourceMappingURL=validate-ComqIy0H.js.map
