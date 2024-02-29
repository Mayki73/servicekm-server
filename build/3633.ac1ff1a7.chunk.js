"use strict";(self.webpackChunkservicekm_server=self.webpackChunkservicekm_server||[]).push([[3633],{43633:(Ae,G,s)=>{s.d(G,{ProtectedSettingsPage:()=>Oe});var e=s(92132),f=s(21272),H=s(11273),X=s(76517),Z=s(80782),T=s(61485),p=s(99248),M=s(30893),B=s(6239),I=s(12081),y=s(83997),x=s(12408),S=s(48653),K=s(94061),j=s(24093),W=s(67030),P=s(85963),U=s(90151),L=s(68074),R=s(7537),J=s(4181),N=s(48323),w=s(35513),k=s(26127),$=s(90361),m=s(33363),q=s(98765),ee=s(25641),V=s(88353),se=s(38413),ae=s(55356),te=s(4198),le=s(53563),r=s(24952),F=s(54514),ne=s(41909),ie=s(50612),z=s(5194),oe=s(36481),h=s(54894),O=s(61535),C=s(12083),de=s(60256),ce=s(82437),a=s(40812),re=s(74930),Te=s(2600),pe=s(5409),Be=s(51187),Ie=s(59080),Se=s(48940),Ke=s(35223);const ge=()=>{const[t,n]=f.useState(!1),d=(0,ce.wA)(),l=(0,r.hN)(),{post:c}=(0,r.ry)(),{formatAPIError:i}=(0,r.wq)();return{isAdding:t,addLocale:async g=>{n(!0);try{const{data:_}=await c("/i18n/locales",g);l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.create.success")}}),d({type:a.A,newLocale:_})}catch(_){throw _ instanceof de.pe?l({type:"warning",message:i(_)}):l({type:"warning",message:{id:"notification.error"}}),_}finally{n(!1)}}}},Y=()=>{const{formatMessage:t}=(0,h.A)(),{notifyStatus:n}=(0,H.W)(),d=(0,r.hN)(),{get:l}=(0,r.ry)(),{isLoading:c,data:i}=(0,re.useQuery)(["plugin-i18n","locales"],async()=>{const{data:o}=await l("/i18n/iso-locales");if(Array.isArray(o))return o;throw new Error("The response is not an array.")},{onSuccess(){n(t({id:(0,a.g)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."}))},onError(){d({type:"warning",message:{id:"notification.error"}})},initialData:[]});return{defaultLocales:i,isLoading:c}},_e=({value:t,onClear:n,onLocaleChange:d,error:l})=>{const{formatMessage:c}=(0,h.A)(),{defaultLocales:i=[],isLoading:o}=Y(),{locales:g}=(0,a.u)(),_=i.map(E=>({label:E.name,value:E.code})).filter(E=>{const D=g.find(({code:u})=>u===E.value);return!D||D.code===t}),A=t||"";return(0,e.jsx)(X.G3,{"aria-busy":o,error:l,label:c({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:A,onClear:n,onChange:E=>{const D=_.find(u=>u.value===E);D&&d({code:D.value,name:D.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"}),children:_.map(E=>(0,e.jsx)(Z.j,{value:E.value,children:E.label},E.value))})},b=C.Ik().shape({code:C.Yj().required(),name:C.Yj().max(50,"Settings.locales.modal.locales.displayName.error").required(r.iW.required),isDefault:C.zM()}),Ee={code:"",name:"",isDefault:!1},Me=({onClose:t})=>{const{isAdding:n,addLocale:d}=ge(),{formatMessage:l}=(0,h.A)(),{refetchPermissions:c}=(0,r.r5)();return(0,e.jsx)(T.k,{onClose:t,labelledBy:"add-locale-title",children:(0,e.jsx)(O.l1,{initialValues:Ee,onSubmit:async i=>{await d(i),await c()},validationSchema:b,validateOnChange:!1,children:(0,e.jsxs)(r.lV,{children:[(0,e.jsx)(p.r,{children:(0,e.jsx)(M.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title",children:l({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),(0,e.jsx)(B.c,{children:(0,e.jsxs)(I.f,{label:l({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,e.jsxs)(y.s,{justifyContent:"space-between",children:[(0,e.jsx)(M.o,{as:"h2",variant:"beta",children:l({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,e.jsxs)(x.t,{children:[(0,e.jsx)(x.o,{children:l({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,e.jsx)(x.o,{children:l({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,e.jsx)(S.c,{}),(0,e.jsx)(K.a,{paddingTop:7,paddingBottom:7,children:(0,e.jsxs)(j.T,{children:[(0,e.jsx)(j.K,{children:(0,e.jsx)(he,{})}),(0,e.jsx)(j.K,{children:(0,e.jsx)(Q,{})})]})})]})}),(0,e.jsx)(W.j,{startActions:(0,e.jsx)(P.$,{variant:"tertiary",onClick:t,children:l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(P.$,{type:"submit",startIcon:(0,e.jsx)(F.A,{}),disabled:n,children:l({id:"global.save",defaultMessage:"Save"})})})]})})})},he=()=>{const{formatMessage:t}=(0,h.A)(),{values:n,handleChange:d,setFieldValue:l,errors:c}=(0,O.j7)(),i=g=>{l("name",g.name),l("code",g.code)},o=()=>{l("displayName",""),l("code","")};return(0,e.jsxs)(U.x,{gap:4,children:[(0,e.jsx)(L.E,{col:6,children:(0,e.jsx)(_e,{error:c.code,value:n.code,onLocaleChange:i,onClear:o})}),(0,e.jsx)(L.E,{col:6,children:(0,e.jsx)(R.k,{name:"name",label:t({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:t({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?t({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:n.name,onChange:d})})]})},Q=({isDefaultLocale:t})=>{const{values:n,setFieldValue:d}=(0,O.j7)(),{formatMessage:l}=(0,h.A)();return(0,e.jsx)(J.S,{name:"isDefault",hint:l({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>d("isDefault",!n.isDefault),value:n.isDefault,disabled:t,children:l({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"})})},me=()=>{const[t,n]=(0,f.useState)(!1),d=(0,a.a)(),l=(0,r.hN)(),{del:c}=(0,r.ry)();return{isDeleting:t,deleteLocale:async o=>{try{n(!0),await c(`/i18n/locales/${o}`),l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.delete.success")}}),d({type:a.D,id:o})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{n(!1)}}}},De=({localeToDelete:t,onClose:n})=>{const{isDeleting:d,deleteLocale:l}=me(),c=Boolean(t),i=()=>l(t.id).then(n);return(0,e.jsx)(r.TM,{isConfirmButtonLoading:d,onConfirm:i,onToggleDialog:n,isOpen:c})},ue=()=>{const[t,n]=(0,f.useState)(!1),d=(0,a.a)(),l=(0,r.hN)(),{put:c}=(0,r.ry)();return{isEditing:t,editLocale:async(o,g)=>{try{n(!0);const{data:_}=await c(`/i18n/locales/${o}`,g);if("id"in _)l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.edit.success")}}),d({type:a.U,editedLocale:_});else throw new Error("Invalid response")}catch{l({type:"warning",message:{id:"notification.error"}})}finally{n(!1)}}}},fe=({locale:t,onClose:n})=>{const{refetchPermissions:d}=(0,r.r5)(),{isEditing:l,editLocale:c}=ue(),{formatMessage:i}=(0,h.A)(),o=async({name:g,isDefault:_})=>{await c(t.id,{name:g,isDefault:_}),await d()};return(0,e.jsx)(T.k,{onClose:n,labelledBy:"edit-locale-title",children:(0,e.jsx)(O.l1,{initialValues:{code:t.code??"",name:t.name??"",isDefault:Boolean(t.isDefault)},onSubmit:o,validationSchema:b,children:(0,e.jsxs)(r.lV,{children:[(0,e.jsx)(p.r,{children:(0,e.jsx)(M.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title",children:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"})})}),(0,e.jsx)(B.c,{children:(0,e.jsxs)(I.f,{label:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,e.jsxs)(y.s,{justifyContent:"space-between",children:[(0,e.jsx)(M.o,{as:"h2",children:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,e.jsxs)(x.t,{children:[(0,e.jsx)(x.o,{children:i({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,e.jsx)(x.o,{children:i({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,e.jsx)(S.c,{}),(0,e.jsx)(K.a,{paddingTop:7,paddingBottom:7,children:(0,e.jsxs)(j.T,{children:[(0,e.jsx)(j.K,{children:(0,e.jsx)(xe,{locale:t})}),(0,e.jsx)(j.K,{children:(0,e.jsx)(Q,{isDefaultLocale:Boolean(t&&t.isDefault)})})]})})]})}),(0,e.jsx)(W.j,{startActions:(0,e.jsx)(P.$,{variant:"tertiary",onClick:n,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(P.$,{type:"submit",startIcon:(0,e.jsx)(F.A,{}),disabled:l,children:i({id:"global.save",defaultMessage:"Save"})})})]})})})},xe=({locale:t})=>{const{formatMessage:n}=(0,h.A)(),{values:d,handleChange:l,errors:c}=(0,O.j7)(),{defaultLocales:i=[]}=Y(),o=i.find(g=>g.code===t.code);return(0,e.jsxs)(U.x,{gap:4,children:[(0,e.jsx)(L.E,{col:6,children:(0,e.jsx)(N.Z,{label:n({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:o?.code||t.code,disabled:!0,children:(0,e.jsx)(N.eY,{value:o?.code||t.code,children:o?.name||t.code})})}),(0,e.jsx)(L.E,{col:6,children:(0,e.jsx)(R.k,{name:"name",label:n({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?n({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:d.name,onChange:l})})]})},je=({locales:t=[],onDeleteLocale:n,onEditLocale:d,canDelete:l=!0,canEdit:c=!0})=>{const{formatMessage:i}=(0,h.A)();return(0,e.jsxs)(w.X,{colCount:4,rowCount:t.length+1,children:[(0,e.jsx)(k.d,{children:(0,e.jsxs)($.Tr,{children:[(0,e.jsx)(m.Th,{children:(0,e.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.id"),defaultMessage:"ID"})})}),(0,e.jsx)(m.Th,{children:(0,e.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.displayName"),defaultMessage:"Display name"})})}),(0,e.jsx)(m.Th,{children:(0,e.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.default-locale"),defaultMessage:"Default locale"})})}),(0,e.jsx)(m.Th,{children:(0,e.jsx)(q.s,{children:"Actions"})})]})}),(0,e.jsx)(ee.N,{children:t.map(o=>(0,e.jsxs)($.Tr,{...(0,r.qM)({fn:()=>d(o),condition:Boolean(d)}),children:[(0,e.jsx)(m.Td,{children:(0,e.jsx)(M.o,{textColor:"neutral800",children:o.id})}),(0,e.jsx)(m.Td,{children:(0,e.jsx)(M.o,{textColor:"neutral800",children:o.name})}),(0,e.jsx)(m.Td,{children:(0,e.jsx)(M.o,{textColor:"neutral800",children:o.isDefault?i({id:(0,a.g)("Settings.locales.default"),defaultMessage:"Default"}):null})}),(0,e.jsx)(m.Td,{children:(0,e.jsxs)(y.s,{gap:1,justifyContent:"flex-end",onClick:g=>g.stopPropagation(),children:[c&&(0,e.jsx)(V.K,{onClick:()=>d(o),label:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit"}),icon:(0,e.jsx)(ne.A,{}),borderWidth:0}),l&&!o.isDefault&&(0,e.jsx)(V.K,{onClick:()=>n(o),label:i({id:(0,a.g)("Settings.list.actions.delete"),defaultMessage:"Delete"}),icon:(0,e.jsx)(ie.A,{}),borderWidth:0})]})})]},o.id))})]})},Pe=()=>{const[t,n]=f.useState(!1),[d,l]=f.useState(),[c,i]=f.useState(),{locales:o}=(0,a.u)(),{formatMessage:g}=(0,h.A)(),{isLoading:_,allowedActions:{canUpdate:A,canCreate:E,canDelete:D}}=(0,r.ec)(a.P),u=()=>{n(v=>!v)};(0,r.L4)();const ve=()=>l(void 0),Le=v=>{l(v)},Ce=()=>i(void 0),ye=v=>{i(v)};return _?(0,e.jsx)(r.Bl,{}):(0,e.jsxs)(se.g,{tabIndex:-1,children:[(0,e.jsx)(ae.Q,{primaryAction:(0,e.jsx)(P.$,{disabled:!E,startIcon:(0,e.jsx)(z.A,{}),onClick:u,size:"S",children:g({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})}),title:g({id:(0,a.g)("plugin.name"),defaultMessage:"Internationalization"}),subtitle:g({id:(0,a.g)("Settings.list.description"),defaultMessage:"Configure the settings"})}),(0,e.jsx)(te.s,{children:o?.length>0?(0,e.jsx)(je,{locales:o,canDelete:D,canEdit:A,onDeleteLocale:Le,onEditLocale:ye}):(0,e.jsx)(le.p,{icon:(0,e.jsx)(oe.A,{width:void 0,height:void 0}),content:g({id:(0,a.g)("Settings.list.empty.title"),defaultMessage:"There are no locales"}),action:(0,e.jsx)(P.$,{disabled:!E,variant:"secondary",startIcon:(0,e.jsx)(z.A,{}),onClick:u,children:g({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})})}),t&&(0,e.jsx)(Me,{onClose:u}),c&&(0,e.jsx)(fe,{onClose:Ce,locale:c}),d&&(0,e.jsx)(De,{localeToDelete:d,onClose:ve})]})},Oe=()=>(0,e.jsx)(r.kz,{permissions:a.P.read,children:(0,e.jsx)(Pe,{})})}}]);
