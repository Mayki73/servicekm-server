"use strict";(self.webpackChunkservicekm_server=self.webpackChunkservicekm_server||[]).push([[9292],{10152:(po,L,s)=>{s.r(L),s.d(L,{default:()=>co});var o=s(92132),l=s(21272),D=s(7537),T=s(88875),V=s(61485),H=s(99248),g=s(30893),N=s(6239),d=s(94061),O=s(75244),K=s(90151),E=s(68074),J=s(7297),I=s(85963),$=s(79793),Q=s(94293),R=s(83997);const U=(0,$.Ay)(d.a)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-left: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
`,X=(0,$.Ay)(d.a)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
    border-left: 1px solid ${({theme:t})=>t.colors.neutral200};
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral200};
    border-radius: ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius} 0 0;
    & > * {
      border-radius: ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({theme:t})=>t.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({theme:t})=>t.colors.primary600};
  }

  ${({theme:t,footer:n})=>`
    &:not(${n}) {
      & > *:last-of-type {
        border-radius: 0 0 ${t.borderRadius} ${t.borderRadius};
      }
    }
  `}
`,Y=(0,$.Ay)(d.a)`
  svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,Z=({children:t,footer:n,label:e,labelAction:j,error:h})=>{const y=l.Children.toArray(t).map(m=>l.cloneElement(m,{hasErrorMessage:!1}));return(0,o.jsxs)(Q.r,{attributeName:"data-strapi-accordion-toggle",children:[e&&(0,o.jsxs)(R.s,{paddingBottom:1,children:[(0,o.jsx)(g.o,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold",children:e}),j&&(0,o.jsx)(Y,{paddingLeft:1,children:j})]}),(0,o.jsx)(X,{footer:n,children:y}),n&&(0,o.jsx)(U,{children:n}),h&&(0,o.jsx)(d.a,{paddingTop:1,children:(0,o.jsx)(g.o,{variant:"pi",textColor:"danger600",children:h})})]})};var w=s(57237),k=s(60888),q=s(10573),_=s(44604),oo=s(67030),to=s(43739),M=s(95336),B=s(53573),F=s(11287),so=s(54894),ro=s(24952),u=s(91787),eo=s(86177);const no=window.localStorage.STRAPI_THEME,P=({icon:t,size:n})=>{const e=B[t];return e===void 0?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(eo.Vx.Provider,{value:{color:no==="light"?"#212134":"#a5a5ba"},children:(0,o.jsx)(e,{size:n})})},ao=({icons:t,onSelectIcon:n})=>(0,o.jsx)(o.Fragment,{children:t.map(e=>(0,o.jsx)(d.a,{variant:"secondary",onClick:()=>{n(e)},title:e,children:(0,o.jsx)(P,{size:30,icon:e})},e))});var lo=s(6514),io=s(5194);const co=({description:t,error:n,intlLabel:e,placeholder:j,name:h,required:y,onChange:m,value:p})=>{const{formatMessage:c}=(0,so.A)(),{get:ho}=(0,ro.ry)(),[x,xo]=(0,l.useState)([]),[A,vo]=(0,l.useState)(null),S=Object.keys(B),[go,jo]=(0,l.useState)(!1),[C,W]=(0,l.useState)(""),b=()=>jo(r=>!r),z=r=>m({target:{name:h,type:"string",value:r}}),uo=r=>{b(),z(r)};(0,l.useEffect)(()=>{(async()=>{xo((await ho("/react-icons/iconlibrary/find")).data.filter(a=>a.isEnabled))})()},[]);const[v,f]=(0,l.useState)([]),mo=r=>()=>{v?.includes(r)?f(v.filter(a=>a!==r)):f([...v,r])},G=()=>{x.length===v.length?f([]):f(x.map((r,a)=>"acc-"+a))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D.k,{type:"text",label:e&&c(e),placeholder:j&&c(j),hint:t&&c(t),disabled:!0,onChange:m,id:h,name:h,value:p||"",required:y,error:n,startAction:(0,o.jsx)(T.T,{onClick:b,children:p?(0,o.jsx)(P,{icon:p}):(0,o.jsx)(F.PuI,{})}),endAction:!!p&&(0,o.jsx)(T.T,{onClick:()=>z(""),children:(0,o.jsx)(F.$9n,{})})}),go&&(0,o.jsxs)(V.k,{onClose:b,labelledBy:"title",children:[(0,o.jsx)(H.r,{children:(0,o.jsx)(g.o,{fontWeight:"bold",id:"title",children:"Select icon"})}),(0,o.jsx)(N.c,{children:(0,o.jsxs)(d.a,{children:[(0,o.jsx)(O.B,{children:(0,o.jsxs)(K.x,{gap:2,children:[(0,o.jsx)(E.E,{col:10,children:(0,o.jsx)(J.S,{onClear:()=>W(""),value:C,onChange:r=>W(r.target.value),placeholder:c({id:(0,u.A)("react-icons.iconSelector.search")}),children:c({id:(0,u.A)("react-icons.iconSelector.search")})})},1),(0,o.jsx)(E.E,{col:2,children:x.length===v.length?(0,o.jsx)(I.$,{size:"L",onClick:G,startIcon:(0,o.jsx)(lo.A,{}),children:"Collapse"}):(0,o.jsx)(I.$,{size:"L",onClick:G,startIcon:(0,o.jsx)(io.A,{}),children:"Expand"})},2)]})}),x.length>0?(0,o.jsx)(d.a,{padding:4,marginTop:2,background:"neutral0",children:(0,o.jsx)(Z,{children:x.filter(r=>!A||r.abbreviation===A).map((r,a)=>S.filter(i=>i.toLowerCase().startsWith(r.abbreviation)&&i.toLowerCase().includes(C.toLowerCase())).length>0&&(0,o.jsxs)(w.n,{expanded:v.includes("acc-"+a),onToggle:mo("acc-"+a),id:"acc-"+a,size:"S",children:[(0,o.jsx)(k.P,{togglePosition:"left",title:(0,o.jsx)(g.o,{children:`${r.name} (${r.abbreviation})`}),action:(0,o.jsx)(q.E,{children:S.filter(i=>i.toLowerCase().startsWith(r.abbreviation)&&i.toLowerCase().includes(C.toLowerCase())).length})}),(0,o.jsx)(_.u,{children:(0,o.jsx)(d.a,{paddingLeft:3,paddingTop:3,paddingBottom:3,children:(0,o.jsx)(R.s,{direction:"row",wrap:"wrap",display:"flex",alignItems:"center",gap:1,children:(0,o.jsx)(ao,{icons:S.filter(i=>i.toLowerCase().startsWith(r.abbreviation)&&i.toLowerCase().includes(C.toLowerCase())),onSelectIcon:uo})})})})]}))})}):(0,o.jsx)(g.o,{variant:"pi",children:c({id:(0,u.A)("react-icons.iconSelector.noIconLibrariesAvailable")})})]})}),(0,o.jsx)(oo.j,{startActions:(0,o.jsxs)(to.l,{minWidth:500,required:0,error:n,value:A,onChange:vo,children:[(0,o.jsx)(M.c,{value:"",children:c({id:(0,u.A)("react-icons.iconSelector.allIconLibraries")})}),x.map(r=>(0,o.jsx)(M.c,{value:r.abbreviation,children:r.name},r.id))]}),endActions:(0,o.jsx)(I.$,{variant:"tertiary",onClick:b,children:"Close"})})]})]})}}}]);
