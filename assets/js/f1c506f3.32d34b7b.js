"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6918],{9143:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=i(5893),s=i(1151);const c={id:"dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",sidebar_label:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e"},d=void 0,r={id:"settings/dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/dependencyinjectionsettings.mdx",sourceDirName:"settings",slug:"/settings/dependencyinjectionsettings",permalink:"/docs/settings/dependencyinjectionsettings",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/settings/dependencyinjectionsettings.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701075976,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",sidebar_label:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e"},sidebar:"settings",previous:{title:"3. \u9a8c\u8bc1\u6d88\u606f\u914d\u7f6e",permalink:"/docs/settings/validationTypemessagesettings"},next:{title:"5. \u52a8\u6001API\u914d\u7f6e",permalink:"/docs/settings/dynamicapicontrollersettings"}},o={},l=[{value:"4.1 \u5173\u4e8e\u914d\u7f6e",id:"41-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"4.2 \u914d\u7f6e\u4fe1\u606f",id:"42-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"4.3 \u914d\u7f6e\u793a\u4f8b",id:"43-\u914d\u7f6e\u793a\u4f8b",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,t.jsx)(n.a,{href:"../jsonschema",children:"2.7 JSON Schema \u4f7f\u7528"}),"\u3011"]}),(0,t.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u5728 ",(0,t.jsx)(n.code,{children:".json"})," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers {2}",children:'{\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json"\n}\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"41-\u5173\u4e8e\u914d\u7f6e",children:"4.1 \u5173\u4e8e\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u6307\u7684\u662f ",(0,t.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u9009\u9879\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"42-\u914d\u7f6e\u4fe1\u606f",children:"4.2 \u914d\u7f6e\u4fe1\u606f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DependencyInjectionSettings"}),"\uff1a\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u6839\u8282\u70b9","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Definitions"}),"\uff1a\u52a8\u6001\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u8282\u70b9\uff0c",(0,t.jsx)(n.code,{children:"ExternalService"})," \u6570\u7ec4\u7c7b\u578b","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ExternalService"}),"\uff1a\u914d\u7f6e\u5355\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4fe1\u606f","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Interface"}),"\uff1a\u914d\u7f6e\u4f9d\u8d56\u63a5\u53e3\u4fe1\u606f\uff0c\u683c\u5f0f\uff1a",(0,t.jsx)(n.code,{children:"\u7a0b\u5e8f\u96c6\u540d\u79f0;\u63a5\u53e3\u5b8c\u6574\u540d\u79f0"}),"\uff0c\u5982\uff1a",(0,t.jsx)(n.code,{children:"Furion.Application;Furion.Application.ITestService"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Service"}),"\uff1a\u914d\u7f6e\u63a5\u53e3\u5b9e\u73b0\u4fe1\u606f\uff0c\u683c\u5f0f\u540c\u4e0a"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RegisterType"}),"\uff1a\u914d\u7f6e\u4f9d\u8d56\u6ce8\u5165\u7684\u5bf9\u8c61\u751f\u5b58\u671f\uff0c\u53d6\u503c\uff1a",(0,t.jsx)(n.code,{children:"Transient"}),"\uff0c",(0,t.jsx)(n.code,{children:"Scoped"}),"\uff0c",(0,t.jsx)(n.code,{children:"Singleton"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Action"}),"\uff1a\u6ce8\u518c\u884c\u4e3a\uff0c\u53ef\u9009\u503c\uff1a",(0,t.jsx)(n.code,{children:"Add"}),"\uff0c",(0,t.jsx)(n.code,{children:"TryAdd"}),"\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE",children:"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Pattern"}),"\uff1a\u6ce8\u518c\u9009\u9879\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE",children:"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e\u7f6e"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Named"}),"\uff1a\u6ce8\u518c\u522b\u540d\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE",children:"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Order"}),"\uff1a\u6ce8\u518c\u6392\u5e8f\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE",children:"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Proxy"}),"\uff1a\u914d\u7f6e\u4ee3\u7406\u62e6\u622a\uff0c\u683c\u5f0f\uff1a",(0,t.jsx)(n.code,{children:"\u7a0b\u5e8f\u96c6\u540d\u79f0;\u4ee3\u7406\u7c7b\u5b8c\u6574\u540d\u79f0"}),"\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE",children:"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"43-\u914d\u7f6e\u793a\u4f8b",children:"4.3 \u914d\u7f6e\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "DependencyInjectionSettings": {\n    "Definitions": [\n      {\n        "Interface": "Furion.Application;Furion.Application.ITestService",\n        "Service": "Furion.Application;Furion.Application.TestService",\n        "RegisterType": "Transient",\n        "Action": "Add",\n        "Pattern": "SelfWithFirstInterface",\n        "Named": "TestService",\n        "Order": 1,\n        "Proxy": "Furion.Application;Furion.Application.LogDispathProxy"\n      }\n    ]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>d});var t=i(7294);const s={},c=t.createContext(s);function d(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);