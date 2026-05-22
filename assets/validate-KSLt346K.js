import{db as u}from"./App-DR__QKA2.js";function a(t){return t.reduce((r,e)=>e==="number"?`${r}[${e}]`:e==="id"?r:`${r}.${e}`)}function c(t,r){const e=t.safeParse(r);return e.success!==!1?void 0:e.error.issues.reduce((o,s)=>{const n=a(s.path);return u(o,n,s.message)},{})}function d(t){return r=>c(t,r)}export{d as c};
//# sourceMappingURL=validate-KSLt346K.js.map
