"use strict";(self.webpackChunkservicekm_server=self.webpackChunkservicekm_server||[]).push([[7298],{67298:(p,g,s)=>{s.r(g),s.d(g,{InformationBoxEE:()=>J});var t=s(92132),a=s(24952),e=s(68886),I=s(7153),_=s(83997),W=s(76517),A=s(80782),d=s(48323),L=s(30893),z=s(43064),Y=s(16918),G=s(10229),w=s(54894),y=s(60032),o=s(45534),V=s(21272),m=s(45084),T=s(25524),N=s(35658),X=s(15126),$=s(63299),k=s(67014),b=s(59080),q=s(79275),ss=s(14718),ts=s(82437),as=s(61535),os=s(5790),ns=s(12083),es=s(35223),_s=s(5409),ls=s(74930),is=s(2600),rs=s(48940),Es=s(41286),ds=s(51187),Ms=s(56336),Ds=s(39404),Ps=s(58692),Os=s(54257),gs=s(501),ms=s(57646),vs=s(23120),hs=s(44414),Cs=s(25962),As=s(14664),cs=s(42588),Is=s(90325),Ws=s(62785),Ls=s(87443),Ts=s(41032),Rs=s(22957),Bs=s(93179),fs=s(73055),Us=s(15747),Ks=s(85306),us=s(77965),ys=s(26509),js=s(84624),xs=s(71210),Ss=s(32058),ps=s(81185),ws=s(82261);const H=()=>{const{initialData:l,layout:i,isSingleType:v,onChange:j}=(0,a.Cu)(),r=(0,e.j)(n=>n.admin_app.permissions),{formatMessage:E}=(0,w.A)(),{_unstableFormatAPIError:x}=(0,a.wq)(),S=(0,a.hN)(),{allowedActions:{canRead:R},isLoading:c}=(0,a.ec)(r.settings?.users),{data:h,isLoading:B,isError:f}=(0,e.k)({},{skip:c||!R}),M=h?.users||[],D=l?.[o.A]??null,[P,{error:U,isLoading:K}]=(0,y.u)(),u=async n=>{const O=await P({slug:v?"single-types":"collection-types",model:i.uid,id:l.id,data:{id:n?parseInt(n,10):null}});"data"in O&&(j?.({target:{type:"",name:o.A,value:O.data[o.A]}},!0),S({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}}))};return(0,t.jsx)(I.D,{name:o.A,id:o.A,children:(0,t.jsx)(_.s,{direction:"column",gap:2,alignItems:"stretch",children:(0,t.jsx)(W.G3,{clearLabel:E({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:(f&&R&&E({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||U&&x(U))??void 0,disabled:!c&&!B&&M.length===0,name:o.A,id:o.A,value:D?D.id.toString():null,onChange:u,onClear:()=>u(null),placeholder:E({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:E({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:B||c||K,children:M.map(n=>(0,t.jsx)(A.j,{value:n.id.toString(),textValue:(0,e.l)(n,E),children:(0,e.l)(n,E)},n.id))})})})},Z=()=>{const{initialData:l,layout:i,isSingleType:v,onChange:j}=(0,a.Cu)(),{formatMessage:r}=(0,w.A)(),{_unstableFormatAPIError:E}=(0,a.wq)(),x=(0,a.hN)(),{data:S,isLoading:R}=(0,y.a)({slug:v?"single-types":"collection-types",model:i.uid,id:l.id},{skip:!l?.id||!i?.uid}),{meta:c,stages:h=[]}=S??{},{getFeature:B}=(0,e.m)(),[f,M]=V.useState(null),D=B("review-workflows")??{},P=l?.[o.S]??null,[U,{error:K}]=(0,y.b)(),u=async O=>{try{if(D?.[T.C]&&parseInt(D[T.C],10)<(c?.workflowCount??0))M("workflow");else if(D?.[T.a]&&parseInt(D[T.a],10)<h.length)M("stage");else if(l.id&&i){const C=await U({model:i.uid,id:l.id,slug:v?"single-types":"collection-types",data:{id:O}});"data"in C&&(j?.({target:{name:o.S,value:C.data[o.S],type:""}},!0),x({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}}))}}catch{}},{themeColorName:n}=(0,N.g)(P?.color)??{};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.D,{hint:h.length===0&&r({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:o.S,id:o.S,children:(0,t.jsxs)(_.s,{direction:"column",gap:2,alignItems:"stretch",children:[(0,t.jsx)(d.Z,{disabled:h.length===0,error:K&&E(K)||void 0,name:o.S,id:o.S,value:P?.id,onChange:u,label:r({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:P&&(0,t.jsx)(_.s,{as:"span",height:2,background:P?.color,borderColor:n==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>(0,t.jsxs)(_.s,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,t.jsx)(L.o,{textColor:"neutral800",ellipsis:!0,children:P?.name??""}),R?(0,t.jsx)(z.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null]}),children:h.map(({id:O,color:C,name:F})=>{const{themeColorName:Q}=(0,N.g)(C)??{};return(0,t.jsx)(d.eY,{startIcon:(0,t.jsx)(_.s,{height:2,background:C,borderColor:Q==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:O,textValue:F,children:F},O)})}),(0,t.jsx)(Y.o,{}),(0,t.jsx)(G.b,{})]})}),(0,t.jsxs)(m.L.Root,{isOpen:f==="workflow",onClose:()=>M(null),children:[(0,t.jsx)(m.L.Title,{children:r({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(m.L.Body,{children:r({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(m.L.Root,{isOpen:f==="stage",onClose:()=>M(null),children:[(0,t.jsx)(m.L.Title,{children:r({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(m.L.Body,{children:r({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})},J=()=>{const{isCreatingEntry:l,layout:i}=(0,a.Cu)(),v=i?.options?.reviewWorkflows??!1;return(0,t.jsxs)(e.I.Root,{children:[(0,t.jsx)(e.I.Title,{}),v&&!l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Z,{}),(0,t.jsx)(H,{})]}),(0,t.jsx)(e.I.Body,{})]})}},35658:(p,g,s)=>{s.d(g,{a:()=>I,g:()=>e});var t=s(57438),a=s(25524);function e(_){if(!_)return null;const A=Object.entries(t._.colors).filter(([,d])=>d.toUpperCase()===_.toUpperCase()).reduce((d,[L])=>(a.S?.[L]&&(d=L),d),null);return A?{themeColorName:A,name:a.S[A]}:null}function I(){return Object.entries(a.S).map(([_,W])=>({hex:t._.colors[_].toUpperCase(),name:W}))}},45534:(p,g,s)=>{s.d(g,{A:()=>a,S:()=>t});const t="strapi_stage",a="strapi_assignee"}}]);
