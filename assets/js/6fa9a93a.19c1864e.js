"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[647],{3100:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=i(5893),d=i(1151);const c={id:"jwtsettings",title:"9. JWT \u914d\u7f6e",sidebar_label:"9. JWT \u914d\u7f6e"},l=void 0,r={id:"settings/jwtsettings",title:"9. JWT \u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/jwtsettings.mdx",sourceDirName:"settings",slug:"/settings/jwtsettings",permalink:"/furion-doc/docs/settings/jwtsettings",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/settings/jwtsettings.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701077150,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"jwtsettings",title:"9. JWT \u914d\u7f6e",sidebar_label:"9. JWT \u914d\u7f6e"},sidebar:"settings",previous:{title:"8. \u591a\u8bed\u8a00\u914d\u7f6e",permalink:"/furion-doc/docs/settings/localizationsettings"},next:{title:"10. \u89c4\u8303\u5316\u7ed3\u679c\u914d\u7f6e",permalink:"/furion-doc/docs/settings/unifyresultsettings"}},t={},o=[{value:"9.1 \u5173\u4e8e\u914d\u7f6e",id:"91-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"9.2 \u914d\u7f6e\u4fe1\u606f",id:"92-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"9.3 \u914d\u7f6e\u793a\u4f8b",id:"93-\u914d\u7f6e\u793a\u4f8b",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,s.jsx)(n.a,{href:"../jsonschema",children:"2.7 JSON Schema \u4f7f\u7528"}),"\u3011"]}),(0,s.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:".json"})," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers {2}",children:'{\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json"\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"91-\u5173\u4e8e\u914d\u7f6e",children:"9.1 \u5173\u4e8e\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"JWT"})," \u914d\u7f6e\u6307\u7684\u662f\u751f\u6210 ",(0,s.jsx)(n.code,{children:"JWT"})," token \u914d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"92-\u914d\u7f6e\u4fe1\u606f",children:"9.2 \u914d\u7f6e\u4fe1\u606f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JWTSettings"}),"\uff1a\u6839\u8282\u70b9","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ValidateIssuerSigningKey"}),"\uff1a\u662f\u5426\u9a8c\u8bc1\u5bc6\u94a5\uff0c",(0,s.jsx)(n.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IssuerSigningKey"}),"\uff1a\u5bc6\u94a5\uff0c",(0,s.jsx)(n.code,{children:"string"})," \u7c7b\u578b\uff0c\u5fc5\u987b\u662f\u590d\u6742\u5bc6\u94a5\uff0c\u957f\u5ea6\u5927\u4e8e ",(0,s.jsx)(n.code,{children:"16"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ValidateIssuer"}),"\uff1a\u662f\u5426\u9a8c\u8bc1\u7b7e\u53d1\u65b9\uff0c",(0,s.jsx)(n.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ValidIssuer"}),"\uff1a\u7b7e\u53d1\u65b9\uff0c",(0,s.jsx)(n.code,{children:"string"})," \u7c7b\u578b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ValidateAudience"}),"\uff1a\u662f\u5426\u9a8c\u8bc1\u7b7e\u6536\u65b9\uff0c",(0,s.jsx)(n.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ValidAudience"}),"\uff1a\u7b7e\u6536\u65b9\uff0c",(0,s.jsx)(n.code,{children:"string"})," \u7c7b\u578b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ValidateLifetim"}),"\uff1a\u662f\u5426\u9a8c\u8bc1\u8fc7\u671f\u65f6\u95f4\uff0c",(0,s.jsx)(n.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u5efa\u8bae ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ExpiredTime"}),"\uff1a\u8fc7\u671f\u65f6\u95f4\uff0c",(0,s.jsx)(n.code,{children:"long"})," \u7c7b\u578b\uff0c\u5355\u4f4d\u5206\u949f\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"20"})," \u5206\u949f"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ClockSkew"}),"\uff1a\u8fc7\u671f\u65f6\u95f4\u5bb9\u9519\u503c\uff0c",(0,s.jsx)(n.code,{children:"long"})," \u7c7b\u578b\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"5"})," \u79d2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Algorithm"}),"\uff1a\u52a0\u5bc6\u7b97\u6cd5\uff0c",(0,s.jsx)(n.code,{children:"string"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"HS256"}),"\uff0c\u53ef\u9009\u7b97\u6cd5\u6709\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"HS256"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"HS384"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"HS512"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PS256"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PS384"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PS512"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"RS256"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"RS384"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"RS512"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ES256"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ES256K"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ES384"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ES512"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"EdDSA"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"93-\u914d\u7f6e\u793a\u4f8b",children:"9.3 \u914d\u7f6e\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers  {4,6,8}",children:'{\n  "JWTSettings": {\n    "ValidateIssuerSigningKey": true, // \u662f\u5426\u9a8c\u8bc1\u5bc6\u94a5\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "IssuerSigningKey": "\u4f60\u7684\u5bc6\u94a5", // \u5bc6\u94a5\uff0cstring \u7c7b\u578b\uff0c\u5fc5\u987b\u662f\u590d\u6742\u5bc6\u94a5\uff0c\u957f\u5ea6\u5927\u4e8e16\n    "ValidateIssuer": true, // \u662f\u5426\u9a8c\u8bc1\u7b7e\u53d1\u65b9\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "ValidIssuer": "\u7b7e\u53d1\u65b9", // \u7b7e\u53d1\u65b9\uff0cstring \u7c7b\u578b\n    "ValidateAudience": true, // \u662f\u5426\u9a8c\u8bc1\u7b7e\u6536\u65b9\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "ValidAudience": "\u7b7e\u6536\u65b9", // \u7b7e\u6536\u65b9\uff0cstring \u7c7b\u578b\n    "ValidateLifetime": true, // \u662f\u5426\u9a8c\u8bc1\u8fc7\u671f\u65f6\u95f4\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\uff0c\u5efa\u8baetrue\n    "ExpiredTime": 20, // \u8fc7\u671f\u65f6\u95f4\uff0clong \u7c7b\u578b\uff0c\u5355\u4f4d\u5206\u949f\uff0c\u9ed8\u8ba420\u5206\u949f\n    "ClockSkew": 5, // \u8fc7\u671f\u65f6\u95f4\u5bb9\u9519\u503c\uff0clong \u7c7b\u578b\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4 5\u79d2\n    "Algorithm": "HS256" // \u52a0\u5bc6\u7b97\u6cd5\uff0cstring \u7c7b\u578b\uff0c\u9ed8\u8ba4 HS256\n  }\n}\n'})})]})}function j(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var s=i(7294);const d={},c=s.createContext(d);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);