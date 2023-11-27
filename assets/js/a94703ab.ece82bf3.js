"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4368],{1796:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Me});var i=n(7294),o=n(4334),a=n(1944),s=n(5281),r=n(3438),l=n(1116),c=n(5999),d=n(2466),u=n(5936);const p={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=n(5893);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,i.useState)(!1),a=(0,i.useRef)(!1),{startScroll:s,cancelScroll:r}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:i}=e;const s=n?.scrollY;s&&(a.current?a.current=!1:i>=s?(r(),o(!1)):i<t?o(!1):i+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(a.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var b=n(1442),x=n(6550),f=n(7524),g=n(6668);function j(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function k(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",v.collapseSidebarButton),onClick:t,children:(0,m.jsx)(j,{className:v.collapseSidebarButtonIcon})})}var y=n(9689),C=n(902);const _=Symbol("EmptyContext"),S=i.createContext(_);function I(e){let{children:t}=e;const[n,o]=(0,i.useState)(null),a=(0,i.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,m.jsx)(S.Provider,{value:a,children:t})}var Z=n(6043),N=n(8596),T=n(9960),B=n(2389);function w(e){let{collapsed:t,categoryLabel:n,onClick:i}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:i})}function A(e){let{item:t,onItemClick:n,activePath:a,level:l,index:c,...d}=e;const{items:u,label:p,collapsible:h,className:b,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,g.L)(),j=function(e){const t=(0,B.Z)();return(0,i.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.LM)(e):void 0),[e,t])}(t),v=(0,r._F)(t,a),k=(0,N.Mg)(x,a),{collapsed:y,setCollapsed:I}=(0,Z.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:A,setExpandedItem:L}=function(){const e=(0,i.useContext)(S);if(e===_)throw new C.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!y),L(e?null:c),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const a=(0,C.D9)(t);(0,i.useEffect)((()=>{t&&!a&&n&&o(!1)}),[t,a,n,o])}({isActive:v,collapsed:y,updateCollapsed:E}),(0,i.useEffect)((()=>{h&&null!=A&&A!==c&&f&&I(!0)}),[h,A,c,I,f]),(0,m.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":y},b),children:[(0,m.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,m.jsx)(T.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":v}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":h?!y:void 0,href:h?j??"#":j,...d,children:p}),x&&h&&(0,m.jsx)(w,{collapsed:y,categoryLabel:p,onClick:e=>{e.preventDefault(),E()}})]}),(0,m.jsx)(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:y,children:(0,m.jsx)(W,{items:u,tabIndex:y?-1:0,onItemClick:n,activePath:a,level:l+1})})]})}var L=n(3919),E=n(9471);const M={menuExternalLink:"menuExternalLink_NmtK"};function z(e){let{item:t,onItemClick:n,activePath:i,level:a,index:l,...c}=e;const{href:d,label:u,className:p,autoAddBaseUrl:h}=t,b=(0,r._F)(t,i),x=(0,L.Z)(d);return(0,m.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(a),"menu__list-item",p),children:(0,m.jsxs)(T.Z,{className:(0,o.Z)("menu__link",!x&&M.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:h,"aria-current":b?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,m.jsx)(E.Z,{})]})},u)}const H={menuHtmlItem:"menuHtmlItem_M9Kj"};function D(e){let{item:t,level:n,index:i}=e;const{value:a,defaultStyle:r,className:l}=t;return(0,m.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),r&&[H.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:a}},i)}function R(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,m.jsx)(A,{item:t,...n});case"html":return(0,m.jsx)(D,{item:t,...n});default:return(0,m.jsx)(z,{item:t,...n})}}function F(e){let{items:t,...n}=e;const i=(0,r.f)(t,n.activePath);return(0,m.jsx)(I,{children:i.map(((e,t)=>(0,m.jsx)(R,{item:e,index:t,...n},t)))})}const W=(0,i.memo)(F),P={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function V(e){let{path:t,sidebar:n,className:a}=e;const r=function(){const{isActive:e}=(0,y.nT)(),[t,n]=(0,i.useState)(e);return(0,d.RF)((t=>{let{scrollY:i}=t;e&&n(0===i)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",P.menu,r&&P.menuWithAnnouncementBar,a),children:(0,m.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(W,{items:n,activePath:t,level:1})})})}var U=n(1327),Y=(n(9634),n(512)),O=n(1191),G=n(7473),K=n(5983),q=n(4996),J=n(8642);function Q(){var e=J.Z.filter((e=>e.top)),t=J.Z.filter((e=>!e.top));return(0,m.jsxs)("div",{style:{margin:"0.5em",display:"block",borderBottom:"1px solid #dedede",paddingBottom:"0.2em",clear:"both"},children:[e.map((e=>(0,m.jsx)(ee,{title:e.title,url:e.url,picture:e.picture,top:!0,last:!1,tag:e.tag},e.url))),t.map(((e,t)=>{let{picture:n,url:i,title:o,tag:a}=e;return(0,m.jsx)(ne,{title:o,url:i,picture:n,i:t,tag:a},i)})),(0,m.jsx)(G.Z,{})]})}const X={display:"block",position:"relative",alignItems:"center",boxSizing:"border-box",backgroundColor:"#fff"},$={position:"absolute",display:"block",right:0,bottom:0,zIndex:5,fontSize:12,backgroundColor:"rgba(0,0,0,0.8)",padding:"0 5px",color:"#25c2a0"};function ee(e){let{picture:t,url:n,last:i,title:o,top:a,tag:s,style:r}=e;return(0,m.jsxs)("a",{href:n,target:"_blank",title:o,style:{...X,marginBottom:i?null:"0.5em",border:a?"2px solid rgb(255, 176, 46)":void 0,...r},children:[(0,m.jsx)("img",{src:(0,q.Z)(t),style:{display:"block",width:"100%"},loading:"lazy"}),a&&(0,m.jsx)("span",{style:{position:"absolute",zIndex:10,top:-16,right:-8},children:"\ud83d\udc51"}),(0,m.jsx)("span",{style:$,children:s})]})}const te={display:"inline-block",position:"relative",width:"48.5%",position:"relative",boxSizing:"border-box",backgroundColor:"#fff"};function ne(e){let{picture:t,url:n,title:i,tag:o,i:a}=e;return(0,m.jsx)("a",{href:n,target:"_blank",title:i,style:{...te,marginRight:a%2!=0?0:8},children:(0,m.jsx)("img",{src:(0,q.Z)(t),style:{display:"block",width:"100%"},loading:"lazy"})})}const ie={margin:"0 auto",display:"inline-block",position:"relative",top:5,marginTop:-28,cursor:"pointer",borderRadius:"50%",width:28,height:28,minWidth:28,minHeight:28,display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",userSelect:"none",fontSize:12,backgroundColor:"#3fbbfe",color:"#fff",fontWeight:"bold"},oe="sidebar_mhZE",ae="sidebarWithHideableNavbar__6UL",se="sidebarHidden__LRd",re="sidebarLogo_F_0z";function le(e){let{path:t,sidebar:n,onCollapse:o,isHidden:a}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:r}}}=(0,g.L)(),{adv:l,setAdv:c}=(0,i.useContext)(K.Z),d=J.Z.find((e=>100==e.id));return(0,m.jsxs)("div",{className:(0,Y.Z)(oe,s&&ae,a&&se),children:[s&&(0,m.jsx)(U.Z,{tabIndex:-1,className:re}),(0,m.jsx)(O.Z,{}),(0,m.jsx)(V,{path:t,sidebar:n}),l&&d&&(0,m.jsx)("div",{children:(0,m.jsx)(ee,{title:d.title,url:d.url,picture:"img/xxyd2.jpeg",top:!0,last:!1,tag:d.tag,style:{marginBottom:0}},d.url)}),r&&(0,m.jsx)(k,{onClick:o})]})}const ce=i.memo(le);var de=n(3102),ue=n(3163);const pe=e=>{let{sidebar:t,path:n}=e;const o=(0,ue.e)(),{adv:a,setAdv:r}=(0,i.useContext)(K.Z),l=J.Z.find((e=>100==e.id));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(O.Z,{}),a?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Q,{}),(0,m.jsx)("span",{style:ie,onClick:()=>r((e=>!e)),children:"\u6536"})]}):(0,m.jsx)(G.Z,{style:{margin:"0.5em",border:"2px solid #ffb02e"}}),(0,m.jsx)("ul",{className:(0,Y.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(W,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1})}),a&&l&&(0,m.jsx)("div",{children:(0,m.jsx)(ee,{title:l.title,url:l.url,picture:"img/xxyd2.jpeg",top:!0,last:!1,tag:l.tag,style:{marginBottom:0}},l.url)})]})};function me(e){return(0,m.jsx)(de.Zo,{component:pe,props:e})}const he=i.memo(me);function be(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,i="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(ce,{...e}),i&&(0,m.jsx)(he,{...e})]})}const xe={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function fe(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:xe.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(j,{className:xe.expandButtonIcon})})}const ge={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function je(e){let{children:t}=e;const n=(0,l.V)();return(0,m.jsx)(i.Fragment,{children:t},n?.name??"noSidebar")}function ve(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}=e;const{pathname:r}=(0,x.TH)(),[l,c]=(0,i.useState)(!1),d=(0,i.useCallback)((()=>{l&&c(!1),!l&&(0,b.n)()&&c(!0),a((e=>!e))}),[a,l]);return(0,m.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,ge.docSidebarContainer,n&&ge.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ge.docSidebarContainer)&&n&&c(!0)},children:(0,m.jsx)(je,{children:(0,m.jsxs)("div",{className:(0,o.Z)(ge.sidebarViewport,l&&ge.sidebarViewportHidden),children:[(0,m.jsx)(be,{sidebar:t,path:r,onCollapse:d,isHidden:l}),l&&(0,m.jsx)(fe,{toggleSidebar:d})]})})})}var ke=n(2949),ye=n(7462),Ce=n(3366),_e=n(6993),Se=n(8615),Ie=n(3775);var Ze=["prefixCls","className","content","visibleArrow"];class Ne extends i.Component{constructor(){super(...arguments),this.renderArrow=()=>{var{prefixCls:e}=this.props;return(0,m.jsx)("div",{className:e+"-arrow",children:(0,m.jsxs)("svg",{viewBox:"0 0 30 30",children:[(0,m.jsx)("path",{fillOpacity:"0.2",d:"M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z"}),(0,m.jsx)("path",{fill:"#fff",d:"M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z"})]})})}}render(){var e=this.props,{prefixCls:t,className:n,visibleArrow:i}=e,o=(0,Ce.Z)(e,Ze),a=[t,n,i?null:"no-arrow"].filter(Boolean).join(" ").trim();return(0,m.jsx)(_e.Z,(0,ye.Z)({},o,{overlay:(0,m.jsxs)("div",{className:a,children:[i&&this.renderArrow(),(0,m.jsx)("div",{className:t+"-inner",children:this.props.content})]}),children:"object"==typeof this.props.children&&"Icon"!==this.props.children.type.name?this.props.children:(0,m.jsx)("span",{style:{display:"block",writingMode:"vertical-rl"},children:this.props.children})}))}}Ne.Confirm=function(e){var{trigger:t="click",placement:n="top",confirmText:o="Yes",title:a,cancelText:s="No",visibleArrow:r,children:l,onConfirm:c}=e,[d,u]=(0,i.useState)(!1);return(0,m.jsx)(Ne,{isOpen:d,visibleArrow:r,content:(0,m.jsxs)("div",{style:{padding:"12px 16px",position:"relative"},children:[(0,m.jsx)(Ie.Z,{type:"information",style:{position:"absolute",top:13.5,fontSize:14,transform:"rotate(180deg)",color:"#faad14"}}),(0,m.jsxs)("div",{style:{paddingLeft:20},children:[(0,m.jsx)("div",{style:{fontSize:14},children:a}),(0,m.jsxs)("div",{style:{position:"relative",bottom:0,marginTop:12,display:"flex",justifyContent:"end"},children:[(0,m.jsx)(Se.Z,{size:"small",onClick:()=>u(!1),children:s}),(0,m.jsx)(Se.Z,{size:"small",type:"primary",style:{marginLeft:10},onClick:()=>{null==c||c(),u(!1)},children:o})]})]})]}),trigger:t,placement:n,children:(0,m.jsx)("div",{onClick:()=>u(!0),children:l})})},Ne.defaultProps={prefixCls:"w-popover",placement:"top",usePortal:!0,isOpen:!1,visibleArrow:!0};const Te={docMainContainer:"docMainContainer_hjYf",cases:"cases_soRx",caseItem:"caseItem_oZMB",caseDark:"caseDark_IUet",notice:"notice_uV87",noticeDark:"noticeDark_uE9T",tip:"tip_pvnE",docMainContainerEnhanced:"docMainContainerEnhanced_of6x",docItemWrapperEnhanced:"docItemWrapperEnhanced_s6pk"};function Be(e){let{hiddenSidebarContainer:t,children:n}=e;const i=(0,l.V)();return(0,m.jsxs)("main",{className:(0,Y.Z)(Te.docMainContainer,(t||!i)&&Te.docMainContainerEnhanced),style:{flexDirection:"column"},children:[(0,m.jsx)(we,{}),(0,m.jsx)("div",{className:(0,Y.Z)("container padding-top--md padding-bottom--lg",Te.docItemWrapper,t&&Te.docItemWrapperEnhanced),children:n})]})}function we(){const{colorMode:e,setLightTheme:t,setDarkTheme:n}=(0,ke.I)(),i="dark"===e;return(0,m.jsx)("div",{className:(0,Y.Z)(Te.notice,i&&Te.noticeDark),children:(0,m.jsx)("div",{style:{marginBottom:1},children:(0,m.jsx)(T.Z,{to:(0,q.Z)("/docs/upgrade"),children:"\ud83d\ude80 Furion v4.9.1.7 \u7248\u672c\u5df2\u53d1\u5e03\u3002"})})})}const Ae={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function Le(e){let{children:t}=e;const n=(0,l.V)(),[o,a]=(0,i.useState)(!1);return(0,m.jsxs)("div",{className:Ae.docsWrapper,children:[(0,m.jsx)(h,{}),(0,m.jsxs)("div",{className:Ae.docRoot,children:[n&&(0,m.jsx)(ve,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:a}),(0,m.jsx)(Be,{hiddenSidebarContainer:o,children:t})]})]})}var Ee=n(5658);function Me(e){const t=(0,r.SN)(e);if(!t)return(0,m.jsx)(Ee.Z,{});const{docElement:n,sidebarName:i,sidebarItems:c}=t;return(0,m.jsx)(a.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,m.jsx)(l.b,{name:i,items:c,children:(0,m.jsx)(Le,{children:n})})})}},5658:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var i=n(4334),o=n(5999),a=n(2503),s=n(5893);function r(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,i.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(a.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},7473:(e,t,n)=>{n.d(t,{Z:()=>s});n(4996);var i=n(7294);var o=n(5983),a=n(5893);function s(e){let{style:t}=e;const{setDonate:n}=(0,i.useContext)(o.Z);return(0,a.jsx)(a.Fragment,{})}},8642:(e,t,n)=>{n.d(t,{Z:()=>i});const i=[]},512:(e,t,n)=>{function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}}}]);