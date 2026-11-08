const r=({programStageDataElements:a=[],programStageSections:n=[]})=>{const e=a.filter(t=>t.compulsory);if(e.length===0)return[];const s=new Set(n.filter(t=>!t.deleted).flatMap(t=>(t.dataElements??[]).map(l=>l.id)));return e.filter(t=>!s.has(t.dataElement.id))};export{r as getMandatoryDataElementsMissingFromSections};
//# sourceMappingURL=mandatoryStageDataElements-BEfjqjoz.js.map
