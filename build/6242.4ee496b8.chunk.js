"use strict";(self.webpackChunkservicekm_server=self.webpackChunkservicekm_server||[]).push([[6242],{56242:(hs,G,s)=>{s.d(G,{ReviewWorkflowsEditPage:()=>is});var t=s(92132),r=s(21272),X=s(85963),C=s(83997),Z=s(43064),A=s(30893),M=s(24952),b=s(54514),T=s(61535),q=s(54894),l=s(82437),ss=s(17703),ts=s(20296),os=s(264),e=s(97687),es=s(97987),x=s(68886),ns=s(60032),h=s(50516),E=s(45084),R=s(25524),as=s(47765),cs=s(35658),Ls=s(56336),Cs=s(48940),As=s(12083),Ts=s(72810),Rs=s(18022),Ws=s(2600),Is=s(51187),Bs=s(15126),Us=s(63299),Ks=s(67014),ys=s(59080),us=s(79275),ws=s(14718),js=s(5790),xs=s(35223),Ss=s(5409),ps=s(74930),Fs=s(41286),ks=s(39404),Ns=s(58692),zs=s(54257),Vs=s(501),Ys=s(57646),Hs=s(23120),Js=s(44414),Qs=s(25962),$s=s(14664),Gs=s(42588),Xs=s(90325),Zs=s(62785),bs=s(87443),qs=s(41032),st=s(22957),tt=s(93179),ot=s(73055),et=s(15747),nt=s(85306),at=s(77965),it=s(26509),lt=s(84624),rt=s(71210),_t=s(32058),Et=s(81185),dt=s(82261);const is=()=>{const{workflowId:W}=(0,ss.g)(),ls=(0,l.d4)(es.s),{formatMessage:n}=(0,q.A)(),_=(0,l.wA)(),{_unstableFormatAPIError:rs,_unstableFormatValidationErrors:_s}=(0,M.wq)(),D=(0,M.hN)(),{isLoading:P,meta:O,workflows:g}=(0,as.u)(),{collectionTypes:S,singleTypes:p,isLoading:I}=(0,os.u)(),Es=(0,l.d4)(e.j),ds=(0,l.d4)(e.a),a=(0,l.d4)(e.b),F=(0,l.d4)(e.k),k=(0,l.d4)(e.c),v=(0,l.d4)(e.s),{allowedActions:{canDelete:Ms,canUpdate:B}}=(0,M.ec)(ls.settings?.["review-workflows"]),[c,L]=r.useState({}),{getFeature:Ds,isLoading:N}=(0,x.m)(),{isLoading:U,roles:z}=(0,ts.u)(void 0),[V,d]=r.useState(null),[Ps,Y]=r.useState(),[Os,H]=r.useState(!1),K=g?.find(o=>o.id===parseInt(W,10)),J=g?.filter(o=>o.id!==parseInt(W,10)).flatMap(o=>o.contentTypes),y=Ds("review-workflows"),f=y?.[R.C],m=y?.[R.a],[gs]=(0,ns.e)(),Q=async()=>{Y(void 0),H(!0);try{const o=await gs({id:W,data:{...a,stages:a.stages?.map(i=>{let $=!0;const w=Es.workflow?.stages?.find(j=>j.id===i?.id);return w&&($=w.permissions?.length!==i.permissions?.length||!w.permissions?.every(j=>!!i.permissions?.find(ms=>ms.role===j.role))),{...i,permissions:$?i.permissions:void 0}})}});if("error"in o){(0,x.x)(o.error)&&o.error.name==="ValidationError"&&Y(_s(o.error)),D({type:"warning",message:rs(o.error)});return}D({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}catch{D({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{H(!1)}L({})},vs=async()=>{await Q()},fs=()=>{L({})},u=(0,T.Wx)({enableReinitialize:!0,initialErrors:Ps,initialValues:a,async onSubmit(){const o=a.contentTypes?.some(i=>J?.includes(i));O&&f&&O?.workflowCount>parseInt(f,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)?d("stage"):F||o?(F&&L(i=>({...i,hasDeletedServerStages:!0})),o&&L(i=>({...i,hasReassignedContentTypes:!0}))):Q()},validate(o){return(0,e.v)({values:o,formatMessage:n})}});return(0,e.u)(R.R,e.i),r.useEffect(()=>(!P&&K&&g&&(_((0,e.l)({workflow:K})),_((0,e.d)({workflows:g}))),I||_((0,e.e)({collectionTypes:S,singleTypes:p})),U||_((0,e.f)(z)),_((0,e.g)(P||I||U)),()=>{_((0,e.r)())}),[S,_,I,P,U,z,p,K,g]),r.useEffect(()=>{!P&&!N&&(O&&f&&O?.workflowCount>parseInt(f,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)&&d("stage"))},[a.stages,N,P,y,O,f,m]),r.useEffect(()=>{!v&&k?.length===0&&D({blockTransition:!0,type:"warning",message:n({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[n,v,k,D]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.D,{}),(0,t.jsx)(T.QI,{value:u,children:(0,t.jsxs)(T.lV,{onSubmit:u.handleSubmit,children:[(0,t.jsx)(h.H,{navigationAction:(0,t.jsx)(h.B,{href:"/settings/review-workflows"}),primaryAction:B&&(0,t.jsx)(X.$,{startIcon:(0,t.jsx)(b.A,{}),type:"submit",size:"M",disabled:!ds,loading:!Boolean(Object.keys(c).length>0)&&Os,children:n({id:"global.save",defaultMessage:"Save"})}),subtitle:!v&&n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:a.stages?.length}),title:a.name||""}),(0,t.jsx)(h.R,{children:v?(0,t.jsx)(C.s,{justifyContent:"center",children:(0,t.jsx)(Z.a,{children:n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})})}):(0,t.jsxs)(C.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(e.W,{canUpdate:B}),(0,t.jsx)(e.S,{canDelete:Ms,canUpdate:B,stages:u.values?.stages})]})})]})}),(0,t.jsx)(M.TM.Root,{isConfirmButtonLoading:v,isOpen:Object.keys(c).length>0,onToggleDialog:fs,onConfirm:vs,children:(0,t.jsx)(M.TM.Body,{children:(0,t.jsxs)(C.s,{direction:"column",gap:5,children:[c.hasDeletedServerStages&&(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),c.hasReassignedContentTypes&&(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:J?.filter(o=>a.contentTypes?.includes(o)).length})}),(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(E.L.Root,{isOpen:V==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(E.L.Root,{isOpen:V==="stage",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
