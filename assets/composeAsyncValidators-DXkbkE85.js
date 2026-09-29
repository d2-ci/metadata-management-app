const c=o=>async(n,e)=>{for(let r=0;r<o.length;++r){const a=o[r];try{const t=await a(n,e);if(t)return t}catch(t){return console.error(t),`Failed to run validation: ${t.toString()} `}}};export{c};
//# sourceMappingURL=composeAsyncValidators-DXkbkE85.js.map
