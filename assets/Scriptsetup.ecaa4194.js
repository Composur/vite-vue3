import{d as g,a0 as x,o as f,c as h,a as F,j as c,b as e,y as n,k as _,a1 as N,F as C,Z as E,$ as y,Y as k,e as i,G as B}from"./vendor.83dfb2ef.js";/* empty css              */const w=_("\u6539\u53D8\u7236\u7684name"),T=g({props:{name:{type:String,default:"name"}},emits:["change-name"],setup(m,{expose:a,emit:t}){const o=m,s="script-setup",p=()=>{t("change-name","Tom")},u=x();return console.log(u),a({name:o.name}),(r,V)=>{const l=E,v=y,d=k;return f(),h(C,null,[F("div",{class:"page-title"},c(s)),e(d,null,{default:n(()=>[e(l,{span:5},{default:n(()=>[_(c(N(u).msg),1)]),_:1}),e(l,{span:5},{default:n(()=>[_(c(o.name),1)]),_:1}),e(l,{span:4},{default:n(()=>[e(v,{onClick:p},{default:n(()=>[w]),_:1})]),_:1})]),_:1}),e(d)],64)}}}),S=g({setup(m){const a=i("\u7236\u7EC4\u4EF6\u4F20\u9012\u7684name"),t=i(null);B(()=>{console.log(t.value.name)});const o=s=>{a.value=s};return(s,p)=>{const u=E,r=k;return f(),h(C,null,[e(r,null,{default:n(()=>[e(u,{span:4},{default:n(()=>[F("p",null,c(a.value),1)]),_:1})]),_:1}),e(T,{ref_key:"son",ref:t,name:a.value,msg:"\u7236\u7EC4\u4EF6\u4F20\u9012\u7684msg","data-msg":"\u7236\u7EC4\u4EF6\u4F20\u9012\u7684data-msg",onChangeName:o},null,8,["name"])],64)}}});export{S as default};
