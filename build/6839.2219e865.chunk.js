"use strict";(self.webpackChunkservicekm_server=self.webpackChunkservicekm_server||[]).push([[6839],{96839:(K,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>W});var a=_(92132),P=_(10529),n=_(75453),C=_(21272),A=_(24952),v=_(14718),i=_(97987),R=_(72810),U=_(18022),B=_(68886),t=_(15126),l=_(63299),L=_(67014),d=_(59080),I=_(79275),O=_(82437),T=_(61535),M=_(5790),E=_(12083),o=_(35223),m=_(5409),D=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(51187),S=_(56336),y=_(39404),N=_(58692),j=_(54257),e=_(501),x=_(57646),H=_(23120),F=_(44414),V=_(25962),c=_(14664),$=_(42588),z=_(90325),G=_(62785),J=_(87443),X=_(41032),Y=_(22957),Q=_(93179),Z=_(73055),u=_(15747),p=_(85306),k=_(77965),w=_(26509),b=_(84624),q=_(71210),__=_(32058),E_=_(81185),t_=_(82261),s_=_(264),O_=_(67031);const W=()=>((0,n.u)(),(0,a.jsx)(P.HomePageCE,{}))},75453:(K,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),P=_(24952),n=_(67031),C=_(54894),A=_(17703),v=_(68886);const i="strapi-notification-seat-limit",R="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,C.A)(),{license:l,isError:L,isLoading:d}=(0,v.m)(),I=(0,P.hN)(),{pathname:O}=(0,A.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:o}=l??{};a.useEffect(()=>{if(L||d)return;const m=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let D;E==="OVER_LIMIT"?D="warning":E==="AT_LIMIT"&&(D="softWarning"),m&&I({type:D,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:o?R:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[I,l,O,t,d,M,E,T,o,L])}}}]);