"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2019],{4276:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(5893),c=s(1151);const r={id:"dynamicapicontrollersettings",title:"5. \u52a8\u6001API\u914d\u7f6e",sidebar_label:"5. \u52a8\u6001API\u914d\u7f6e"},l=void 0,d={id:"settings/dynamicapicontrollersettings",title:"5. \u52a8\u6001API\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/dynamicapicontrollersettings.mdx",sourceDirName:"settings",slug:"/settings/dynamicapicontrollersettings",permalink:"/docs/settings/dynamicapicontrollersettings",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/settings/dynamicapicontrollersettings.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701075976,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"dynamicapicontrollersettings",title:"5. \u52a8\u6001API\u914d\u7f6e",sidebar_label:"5. \u52a8\u6001API\u914d\u7f6e"},sidebar:"settings",previous:{title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",permalink:"/docs/settings/dependencyinjectionsettings"},next:{title:"6. \u53cb\u597d\u5f02\u5e38\u914d\u7f6e",permalink:"/docs/settings/friendlyexceptionsettings"}},t={},o=[{value:"5.1 \u5173\u4e8e\u914d\u7f6e",id:"51-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"5.2 \u914d\u7f6e\u4fe1\u606f",id:"52-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"5.3 \u914d\u7f6e\u793a\u4f8b",id:"53-\u914d\u7f6e\u793a\u4f8b",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,i.jsx)(n.a,{href:"../jsonschema",children:"2.7 JSON Schema \u4f7f\u7528"}),"\u3011"]}),(0,i.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u5728 ",(0,i.jsx)(n.code,{children:".json"})," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers {2}",children:'{\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json"\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"51-\u5173\u4e8e\u914d\u7f6e",children:"5.1 \u5173\u4e8e\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u52a8\u6001 API \u914d\u7f6e\u6307\u7684\u662f ",(0,i.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u52a8\u6001 API \u914d\u7f6e\u9009\u9879\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"52-\u914d\u7f6e\u4fe1\u606f",children:"5.2 \u914d\u7f6e\u4fe1\u606f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DynamicApiControllerSettings"}),"\uff1a\u914d\u7f6e\u6839\u8282\u70b9","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DefaultRoutePrefix"}),"\uff1a\u9ed8\u8ba4\u8def\u7531\u524d\u7f00\uff0c",(0,i.jsx)(n.code,{children:"string"}),"\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"api"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DefaultHttpMethod"}),"\uff1a\u9ed8\u8ba4\u8bf7\u6c42\u8c13\u8bcd\uff0c",(0,i.jsx)(n.code,{children:"string"}),"\uff0c\u9ed8\u8ba4\uff1a",(0,i.jsx)(n.code,{children:"POST"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DefaultModule"}),"\uff1a\u9ed8\u8ba4\u6a21\u5757\u540d\u79f0\uff08\u533a\u57df\uff09\uff0c\u53ef\u7528\u4f5c\u63a5\u53e3\u7248\u672c\uff0c",(0,i.jsx)(n.code,{children:"string"}),"\uff0c\u9ed8\u8ba4\uff1a",(0,i.jsx)(n.code,{children:"v1"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LowercaseRoute"}),"\uff1a\u5c0f\u5199\u8def\u7531\u683c\u5f0f\uff0c",(0,i.jsx)(n.code,{children:"bool"}),"\uff0c\u9ed8\u8ba4\uff1a",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AsLowerCamelCase"}),"\uff1a\u542f\u7528\u5c0f\u9a7c\u5cf0\u547d\u540d\uff08\u9996\u5b57\u6bcd\u5c0f\u5199\uff09\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"KeepVerb"}),"\uff1a\u662f\u5426\u4fdd\u7559\u52a8\u4f5c\u8c13\u8bcd\uff0c",(0,i.jsx)(n.code,{children:"bool"}),"\uff0c\u9ed8\u8ba4\uff1a",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"KeepName"}),"\uff1a\u662f\u5426\u4fdd\u7559\u9ed8\u8ba4\u540d\u79f0\uff0c",(0,i.jsx)(n.code,{children:"bool"}),"\uff0c\u9ed8\u8ba4\uff1a",(0,i.jsx)(n.code,{children:"fasle"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CamelCaseSeparator"}),"\uff1a\u9a86\u9a7c\uff08\u9a7c\u5cf0\uff09\u547d\u540d\u5206\u9694\u7b26\uff0c",(0,i.jsx)(n.code,{children:"string"}),"\uff0c\u9ed8\u8ba4\uff1a",(0,i.jsx)(n.code,{children:"-"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VersionSeparator"}),"\uff1a\u7248\u672c\u5206\u9694\u7b26\uff0c",(0,i.jsx)(n.code,{children:"string"}),"\uff0c\u9ed8\u8ba4\uff1a",(0,i.jsx)(n.code,{children:"@"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ModelToQuery"}),"\uff1a",(0,i.jsx)(n.code,{children:"GET/HEAD"})," \u8bf7\u6c42\u5c06 ",(0,i.jsx)(n.code,{children:"\u7c7b\u7c7b\u578b\u53c2\u6570\u8f6c\u67e5\u8be2\u53c2\u6570"}),"\uff0c",(0,i.jsx)(n.code,{children:"bool"}),"\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SupportedMvcController"}),"\uff1a\u662f\u5426\u652f\u6301 ",(0,i.jsx)(n.code,{children:"Mvc Controller"})," \u52a8\u6001\u914d\u7f6e\uff0c",(0,i.jsx)(n.code,{children:"bool"}),"\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UrlParameterization"}),"\uff1a\u8def\u7531\u53c2\u6570\u91c7\u7528 ",(0,i.jsx)(n.code,{children:"[FromQuery]"})," \u5316\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"false"}),"\uff08",(0,i.jsx)(n.code,{children:"[FromRoute]"})," \u65b9\u5f0f\uff09"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DefaultArea"}),"\uff1a\u914d\u7f6e\u9ed8\u8ba4\u533a\u57df\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"null"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ForceWithRoutePrefix"}),"\uff1a\u914d\u7f6e\u662f\u5426\u5f3a\u5236\u6dfb\u52a0 ",(0,i.jsx)(n.code,{children:"DefaultRoutePrefix"}),"\uff0c\u5f53\u63a7\u5236\u5668\u81ea\u5b9a\u4e49\u4e86 ",(0,i.jsx)(n.code,{children:"[Route]"})," \u6709\u6548\uff0c\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"false"}),"\uff0c",(0,i.jsx)(n.strong,{children:"\u4ec5\u9650 v3.4.1+\u7248\u672c\u6709\u6548"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AbandonControllerAffixes"}),"\uff1a\u9ed8\u8ba4\u53bb\u9664\u63a7\u5236\u5668\u540d\u79f0\u524d\u540e\u7f00\u5217\u8868\u540d\uff0c",(0,i.jsx)(n.code,{children:"string[]"}),"\uff0c\u9ed8\u8ba4\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"AppServices"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"AppService"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ApiController"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Controller"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Services"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Service"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AbandonActionAffixes"}),"\uff1a\u9ed8\u8ba4\u53bb\u9664\u52a8\u4f5c\u65b9\u6cd5\u540d\u79f0\u524d\u540e\u7f00\u5217\u8868\u540d\uff0c",(0,i.jsx)(n.code,{children:"string[]"}),"\uff0c\u9ed8\u8ba4\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Async"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VerbToHttpMethods"}),"\uff1a\u590d\u5199\u9ed8\u8ba4\u65b9\u6cd5\u540d\u8f6c ",(0,i.jsx)(n.code,{children:"[HttpMethod]"})," \u89c4\u5219\uff0c",(0,i.jsx)(n.code,{children:"string[][]"})," \u4e8c\u7ef4\u6570\u7ec4\u7c7b\u578b\uff0c\u5185\u7f6e\u5339\u914d\u89c4\u5219\u4e3a\uff1a","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'["post"] = "POST",\n["add"] = "POST",\n["create"] = "POST",\n["insert"] = "POST",\n["submit"] = "POST",\n["get"] = "GET",\n["find"] = "GET",\n["fetch"] = "GET",\n["query"] = "GET",\n["put"] = "PUT",\n["update"] = "PUT",\n["delete"] = "DELETE",\n["remove"] = "DELETE",\n["clear"] = "DELETE",\n["patch"] = "PATCH"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u590d\u5199\u793a\u4f8b"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'"DynamicApiControllerSettings": {\n    "VerbToHttpMethods": [\n      [ "getall", "HEAD" ],  // => getall \u4f1a\u88ab\u590d\u5199\u4e3a `[HttpHead]`\n      [ "other", "PUT" ]  // => \u65b0\u589e\u4e00\u6761\u65b0\u89c4\u5219\uff0c\u6bd4\u5982\uff0c\u4e00 `[other]` \u5f00\u5934\u4f1a\u8f6c\u6362\u4e3a `[HttpPut]` \u8bf7\u6c42\n    ]\n  }\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"53-\u914d\u7f6e\u793a\u4f8b",children:"5.3 \u914d\u7f6e\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "DynamicApiControllerSettings": {\n    "SupportedMvcController": true\n  }\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>l});var i=s(7294);const c={},r=i.createContext(c);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);