"use strict";(self.webpackChunkservicekm_server=self.webpackChunkservicekm_server||[]).push([[3059],{13059:(N,O,_)=>{_.r(O),_.d(O,{InstalledPluginsPage:()=>C,ProtectedInstalledPluginsPage:()=>f});var s=_(92132),T=_(21272),I=_(11273),d=_(42455),o=_(38413),r=_(55356),L=_(4198),B=_(35513),W=_(26127),i=_(90361),a=_(33363),P=_(30893),K=_(25641),t=_(24952),R=_(14718),v=_(54894),U=_(82437),h=_(97987),m=_(68886),c=_(72810),e=_(18022),F=_(48940),u=_(2600),z=_(51187),S=_(15126),$=_(63299),Q=_(67014),V=_(59080),X=_(79275),G=_(61535),H=_(5790),J=_(12083),Y=_(35223),Z=_(5409),p=_(74930),k=_(41286),b=_(56336),w=_(39404),q=_(58692),__=_(54257),s_=_(501),E_=_(57646),t_=_(23120),a_=_(44414),P_=_(25962),M_=_(14664),l_=_(42588),D_=_(90325),n_=_(62785),O_=_(87443),d_=_(41032),o_=_(22957),i_=_(93179),v_=_(73055),C_=_(15747),g_=_(85306),A_=_(77965),T_=_(26509),I_=_(84624),r_=_(71210),L_=_(32058),B_=_(81185),W_=_(82261);const C=()=>{const{formatMessage:E}=(0,v.A)(),{notifyStatus:M}=(0,I.W)(),g=(0,t.hN)(),{_unstableFormatAPIError:A}=(0,t.wq)();(0,t.L4)();const{isLoading:x,data:l,error:D}=(0,m.q)();return T.useEffect(()=>{l&&M(E({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:E({id:"global.plugins",defaultMessage:"Plugins"})})),D&&g({type:"warning",message:A(D)})},[l,D,A,E,M,g]),x?(0,s.jsx)(d.P,{children:(0,s.jsx)(o.g,{"aria-busy":!0,children:(0,s.jsx)(t.Bl,{})})}):(0,s.jsx)(d.P,{children:(0,s.jsxs)(o.g,{children:[(0,s.jsx)(r.Q,{title:E({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:E({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),(0,s.jsx)(L.s,{children:(0,s.jsxs)(B.X,{colCount:2,rowCount:l?.plugins?.length??0+1,children:[(0,s.jsx)(W.d,{children:(0,s.jsxs)(i.Tr,{children:[(0,s.jsx)(a.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(a.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.description",defaultMessage:"description"})})})]})}),(0,s.jsx)(K.N,{children:l?.plugins.map(({name:n,displayName:j,description:y})=>(0,s.jsxs)(i.Tr,{children:[(0,s.jsx)(a.Td,{children:(0,s.jsx)(P.o,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:E({id:`global.plugins.${n}`,defaultMessage:j})})}),(0,s.jsx)(a.Td,{children:(0,s.jsx)(P.o,{textColor:"neutral800",children:E({id:`global.plugins.${n}.description`,defaultMessage:y})})})]},n))})]})})]})})},f=()=>{const{formatMessage:E}=(0,v.A)(),M=(0,U.d4)(h.s);return(0,s.jsxs)(t.kz,{permissions:M.marketplace?.main,children:[(0,s.jsx)(R.m,{title:E({id:"global.plugins",defaultMessage:"Plugins"})}),(0,s.jsx)(C,{})]})}}}]);