var ie=Object.defineProperty,le=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var N=(e,n,t)=>n in e?ie(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,M=(e,n)=>{for(var t in n||(n={}))_e.call(n,t)&&N(e,t,n[t]);if(w)for(var t of w(n))de.call(n,t)&&N(e,t,n[t]);return e},B=(e,n)=>le(e,pe(n));import{o as p,c as m,a as i,d as F,u as Y,r as y,b as $,e as O,f as I,t as me,g as U,h as fe,i as S,j as d,w as D,v as he,k as P,n as ve,F as C,p as Ee,l as Fe,m as $e,q as ge,s as ye,x as Ce,M as Me,y as h,z as E,A as V,_ as Oe,B as ke,C as Be,D as Z,E as Ae,G as Ie,H as Se,I as De,J as Ve,K,L as Pe,N as Te,O as be,P as He,Q as x,R as G,S as Le,T as j,U as Re}from"./vendor.1416fae6.js";const we=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerpolicy&&(a.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?a.credentials="include":u.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(u){if(u.ep)return;u.ep=!0;const a=t(u);fetch(u.href,a)}};we();const Ne="modulepreload",W={},Ue="./",A=function(n,t){return!t||t.length===0?n():Promise.all(t.map(o=>{if(o=`${Ue}${o}`,o in W)return;W[o]=!0;const u=o.endsWith(".css"),a=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":Ne,u||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),u)return new Promise((_,r)=>{s.addEventListener("load",_),s.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};var v=(e,n)=>{const t=e.__vccOpts||e;for(const[o,u]of n)t[o]=u;return t};const Ke={},Ge=i("h1",null,"Home",-1),je=[Ge];function We(e,n){return p(),m("div",null,je)}var g=v(Ke,[["render",We]]);const qe="_msg_o8vpx_2";var ze={msg:qe};const T=F({name:"Test"}),q=()=>{Y(e=>({"5b2d5ecc-fontColor":e.fontColor}))},z=T.setup;T.setup=z?(e,n)=>(q(),z(e,n)):q;const Je=T,Qe={class:"test-container page-container"};function Xe(e,n,t,o,u,a){const s=y("router-view");return p(),m("div",Qe,[$(s)])}const ee={};ee.$style=ze;var Ye=v(Je,[["render",Xe],["__cssModules",ee],["__scopeId","data-v-5b2d5ecc"]]);const Ze="_msg_o8vpx_2";var xe={msg:Ze};const b=F({setup(){const e=O(0),n=I({count1:0}),t={count:0},o=me(t,"count"),u=()=>{e.value+=1,n.count1+=1,t.count+=1};setTimeout(()=>{o.value=1e3,n.count1=999},2e3);const a=I({id:1,name:"Petter",age:18,gender:"male"});setTimeout(()=>{a.id=2,a.name="Tom",a.age=20},2e3);const s=U(()=>e.value+a.age),_=O([]),r=U({get(){return _.value.join(",")},set(f){_.value=f.split(",")}}),c=O("#ff0000");setTimeout(()=>{c.value="#666"},3e3);const l=fe();return l.msg="msg",B(M(M({count:e,increment:u,s:o},S(n)),S(a)),{comVal:s,tagsStr:r,tags:_,fontColor:c})}}),J=()=>{Y(e=>({"4ee7005a-fontColor":e.fontColor}))},Q=b.setup;b.setup=Q?(e,n)=>(J(),Q(e,n)):J;const en=b,H=e=>(Ee("data-v-4ee7005a"),e=e(),Fe(),e),nn=H(()=>i("h1",{class:"page-title"},"ref reactive toRef toRefs",-1)),tn=H(()=>i("h1",{class:"page-title"},"computer watch",-1)),on=P(" compute \u7684 set \u7528\u6CD5\uFF1A \u539F\u59CB\u7684\u8F93\u5165\uFF1A "),un={class:"page-title"},sn=H(()=>i("p",{class:"msg"},"Hello World!",-1));function an(e,n,t,o,u,a){return p(),m(C,null,[nn,i("p",null,"ref \u5B9A\u4E49 count is: "+d(e.count),1),i("p",null,"\u666E\u901A\u5BF9\u8C61\u5C5E\u6027\u8FDB\u884C toRef count is: "+d(e.s),1),i("p",null,"reactive \u89E3\u6784\u7528toRefs\u8F6C\u4E3A\u54CD\u5E94 count is: "+d(e.count1),1),i("p",null,d(e.id)+"--"+d(e.name)+"--"+d(e.age),1),i("button",{onClick:n[0]||(n[0]=(...s)=>e.increment&&e.increment(...s))},"increment"),tn,i("span",null,"\u53EA\u80FD\u8BFB\u4E0D\u80FD\u5199comVal\uFF1A"+d(e.comVal),1),i("div",null,[on,D(i("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=s=>e.tagsStr=s),placeholder:"\u8BF7\u8F93\u5165\u6807\u7B7E\uFF0C\u591A\u4E2A\u6807\u7B7E\u7528\u82F1\u6587\u9017\u53F7\u9694\u5F00"},null,512),[[he,e.tagsStr]]),P(" \u9700\u8981\u5904\u7406\u7684\u6210\u7684 tags "+d(e.tags),1)]),i("h1",un,[sn,i("p",{class:ve(e.$style.msg)},"Hello World!",2)])],64)}const ne={};ne.$style=xe;var rn=v(en,[["render",an],["__cssModules",ne],["__scopeId","data-v-4ee7005a"]]);const te=[{path:"/",name:"Home",component:g,meta:{title:"\u4E3B\u9875(\u4E3B)",icon:"MailOutlined"}},{path:"/test",name:"Test",component:Ye,meta:{title:"\u6D4B\u8BD5\u9875",icon:"MailOutlined"},children:[{path:"/setup",name:"Setup",component:rn,meta:{title:"setup",icon:"MailOutlined"}},{path:"/communication",name:"Communication",component:()=>A(()=>import("./Father.cda10ea4.js"),["assets/Father.cda10ea4.js","assets/vendor.1416fae6.js","assets/vendor.a6cecf57.css"]),meta:{title:"\u7EC4\u4EF6\u901A\u4FE1",icon:"MailOutlined"}},{path:"/pinia",name:"Pinia",component:()=>A(()=>import("./Pinia.6ba950d9.js"),["assets/Pinia.6ba950d9.js","assets/index.78a59569.css","assets/vendor.1416fae6.js","assets/vendor.a6cecf57.css"]),meta:{title:"Pinia",icon:"MailOutlined"}},{path:"/script-setup",name:"ScriptSetup",component:()=>A(()=>import("./Scriptsetup.a9fececb.js"),["assets/Scriptsetup.a9fececb.js","assets/index.78a59569.css","assets/vendor.1416fae6.js","assets/vendor.a6cecf57.css"]),meta:{title:"ScriptSetup",icon:"MailOutlined"}}]},{path:"/micro",redirect:"/micro/vue",component:g,meta:{title:"\u5FAE\u670D",icon:"MailOutlined"},children:[{path:"/vue",component:g,meta:{title:"Vue\u4E3B\u9875\uFF08\u5B50\uFF09",icon:"MailOutlined"}},{path:"/vue/list",component:g,meta:{title:"Vue\u5217\u8868\u9875\uFF08\u5B50\uFF09",icon:"MailOutlined"}},{path:"/static",component:g,meta:{title:"Static \u5FAE\u5E94\u7528\uFF08\u5B50\uFF09",icon:"MailOutlined"}}]}],{VITE_GIHUB:cn}={VITE_GIHUB:"true",VITE_PUBLICH_URL:"./",VITE_PORT:"3100",VITE_GLOB_APP_TITLE:"vite-vue3",VITE_GLOB_APP_SHORT_NAME:"vite_vue3",BASE_URL:"./",MODE:"github",DEV:!0,PROD:!1},ln=cn?$e():ge(),pn=ye({history:ln,routes:te}),_n=Ce();function dn(e){e.use(_n)}const mn=F({props:{item:{type:Object,default:()=>({})}},components:{MailOutlined:Me},setup(e,{emit:n}){return{changeMenu:o=>{n("clickHandle",o)}}}});function fn(e,n,t,o,u,a){const s=y("router-link"),_=Oe;return e.item.children?V("v-if",!0):(p(),h(_,{onClick:n[0]||(n[0]=r=>e.changeMenu(e.item)),key:e.item.key},{icon:E(()=>[(p(),h(ke(e.item.icon)))]),default:E(()=>[$(s,{to:{path:e.item.path},replace:""},{default:E(()=>[i("span",null,d(e.item.title),1)]),_:1},8,["to"])]),_:1}))}var k=v(mn,[["render",fn]]);const hn=F({props:{menuInfo:{type:Object,default:()=>({})}},components:{SubMenuItem:k},setup(e,{emit:n}){return{clickHandle:o=>{n("clickHandle",o)}}}});function vn(e,n,t,o,u,a){const s=y("MailOutlined"),_=k,r=y("sub-menu",!0),c=Be;return p(),h(c,{key:e.menuInfo.key},{icon:E(()=>[$(s)]),title:E(()=>[P(d(e.menuInfo.title),1)]),default:E(()=>[(p(!0),m(C,null,Z(e.menuInfo.children,l=>(p(),m(C,null,[l.children?(p(),h(r,{"menu-info":l,key:l.key},null,8,["menu-info"])):(p(),h(_,{item:l,onClickHandle:f=>e.clickHandle(l),key:l.key},null,8,["item","onClickHandle"]))],64))),256))]),_:1})}var oe=v(hn,[["render",vn]]);const ue=e=>{e.forEach(n=>{var t,o;n.children&&ue(n.children),delete n.component,n.key=n.path,n.title=(t=n.meta)==null?void 0:t.title,n.icon=(o=n.meta)==null?void 0:o.icon})},se=[...te];ue(se);const En=[{key:"VueMicroApp",title:"Vue\u4E3B\u9875\uFF08\u5B50\uFF09",path:"/vue",icon:"SmileFilled"},{key:"VueMicroAppList",title:"Vue\u5217\u8868\u9875\uFF08\u5B50\uFF09",path:"/vue/list",icon:"AppstoreOutlined"},{key:"StaticMicroApp",title:"Static \u5FAE\u5E94\u7528\uFF08\u5B50\uFF09",path:"/static",icon:"SettingOutlined"}],X=[...se,...En],Fn=F({components:{"sub-menu":oe,"sub-menu-item":k},setup(){const e=[];for(const{children:r,path:c}of X)r&&r.length>0&&e.push(c);const n=Ae(),t=I({menus:X,openKeys:[],rootSubMenuKeys:e}),o=O("");function u(r,c){for(let l=0;l<r.length;l+=1){const f=r[l],{path:ce}=f;if(ce===c)return f;const R=u(f.children||[],c);if(R)return R}return null}function a(r,c){const l=u(r,c);if(!l)return;const{key:f}=l;o.value=f}const s=r=>{const c=r.find(l=>t.openKeys.indexOf(l)===-1);t.rootSubMenuKeys.indexOf(c)===-1?t.openKeys=r:t.openKeys=c?[c]:[]};function _(r){const{key:c}=r;o.value=c}return Ie(()=>n.path,r=>{a(t.menus,r)}),Se(()=>{a(t.menus,n.path)}),B(M({},S(t)),{changeMenu:_,selectKey:o,onOpenChange:s})}}),$n={class:"cns-main-menu"};function gn(e,n,t,o,u,a){const s=k,_=oe,r=De;return p(),m("section",$n,[$(r,{mode:"inline",theme:"dark",selectedKeys:[e.selectKey],"open-keys":e.openKeys,onOpenChange:e.onOpenChange},{default:E(()=>[(p(!0),m(C,null,Z(e.menus,c=>(p(),m(C,null,[c.children?(p(),h(_,Ve({key:1},e.$props,{menuInfo:c,key:c.key,onClickHandle:e.changeMenu}),null,16,["menuInfo","onClickHandle"])):(p(),h(s,{item:c,onClickHandle:e.changeMenu,key:c.key},null,8,["item","onClickHandle"]))],64))),256))]),_:1},8,["selectedKeys","open-keys","onOpenChange"])])}var ae=v(Fn,[["render",gn],["__scopeId","data-v-65af85a3"]]);const yn=F({name:"Main",components:{Nav:ae}}),Cn={id:"cns-main-app"},Mn={class:"cns-menu-wrapper"},On={class:"cns-frame-wrapper"},kn={id:"frame"};function Bn(e,n,t,o,u,a){const s=ae,_=y("router-view");return p(),m("section",Cn,[i("section",Mn,[$(s)]),i("section",On,[V(" \u4E3B\u5E94\u7528\u6E32\u67D3\u533A\uFF0C\u7528\u4E8E\u6302\u8F7D\u4E3B\u5E94\u7528\u8DEF\u7531\u89E6\u53D1\u7684\u7EC4\u4EF6 "),D($(_,null,null,512),[[K,e.$route.name]]),V(" \u5B50\u5E94\u7528\u6E32\u67D3\u533A\uFF0C\u7528\u4E8E\u6302\u8F7D\u5B50\u5E94\u7528\u8282\u70B9 "),D(i("section",kn,null,512),[[K,!e.$route.name]])])])}var re=v(yn,[["render",Bn],["__scopeId","data-v-54d3a52e"]]);const An=F({name:"App",components:{Main:re}});function In(e,n,t,o,u,a){const s=re;return p(),h(s)}var Sn=v(An,[["render",In]]);const Dn=[{name:"VueMicroApp",entry:"//localhost:10200",container:"#frame",activeRule:"/vue"},{name:"static",entry:"//localhost:10201",container:"#frame",activeRule:"/static"}];Pe(Dn,{beforeLoad:()=>(G.start(),Promise.resolve()),afterMount:()=>(G.done(),Promise.resolve())});Te(e=>{const{message:n,error:t}=e;n&&n.includes("died in status LOADING_SOURCE_CODE")&&(x.error(`\u5B50\u5E94\u7528 ${t==null?void 0:t.appOrParcelName} \u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5E94\u7528\u662F\u5426\u53EF\u8FD0\u884C`),console.error(`\u5B50\u5E94\u7528 ${t==null?void 0:t.appOrParcelName} \u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5E94\u7528\u662F\u5426\u53EF\u8FD0\u884C`))});be(()=>{x.success("[MainApp] first app mounted"),console.log("[MainApp] first app mounted")});const L=Le(Sn);He();Object.keys(j).forEach(e=>{L.component(e,j[e])});dn(L);L.use(Re).use(pn).mount("#app");console.log({VITE_GIHUB:"true",VITE_PUBLICH_URL:"./",VITE_PORT:"3100",VITE_GLOB_APP_TITLE:"vite-vue3",VITE_GLOB_APP_SHORT_NAME:"vite_vue3",BASE_URL:"./",MODE:"github",DEV:!0,PROD:!1});export{v as _,_n as s};