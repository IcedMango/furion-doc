"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[590],{5662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=n(5893),a=n(1151);n(4996);const l={slug:"fileupload-download",title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://gitee.com/dotnetchina",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","upload","download"]},i=void 0,r={permalink:"/blog/fileupload-download",editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/blog/2021-02-02-fileupload-download.mdx",source:"@site/blog/2021-02-02-fileupload-download.mdx",title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",description:"\u6587\u4ef6\u4e0b\u8f7d",date:"2021-02-02T00:00:00.000Z",formattedDate:"February 2, 2021",tags:[{label:"furion",permalink:"/blog/tags/furion"},{label:"furos",permalink:"/blog/tags/furos"},{label:".net",permalink:"/blog/tags/net"},{label:".netcore",permalink:"/blog/tags/netcore"},{label:".net5",permalink:"/blog/tags/net-5"},{label:"upload",permalink:"/blog/tags/upload"},{label:"download",permalink:"/blog/tags/download"}],readingTime:1.435,hasTruncateMarker:!0,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://gitee.com/dotnetchina",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"fileupload-download",title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://gitee.com/dotnetchina",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","upload","download"]},unlisted:!1,prevItem:{title:"3. .NET 6 Preview 5 \u5c1d\u9c9c",permalink:"/blog/net6-preview5"},nextItem:{title:"1. HttpContext \u5e94\u7528",permalink:"/blog/httpcontext"}},s={authorsImageUrls:[void 0]},d=[{value:"\u6587\u4ef6\u4e0b\u8f7d",id:"\u6587\u4ef6\u4e0b\u8f7d",level:2}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u6587\u4ef6\u4e0b\u8f7d",children:"\u6587\u4ef6\u4e0b\u8f7d"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers ",children:'[HttpGet, NonUnify]\npublic IActionResult FileDownload(string path, string fileName)\n{\n    string filePath = "\u8fd9\u91cc\u83b7\u53d6\u5b8c\u6574\u7684\u6587\u4ef6\u4e0b\u8f7d\u8def\u5f84";\n    return new FileStreamResult(new FileStream(filePath, FileMode.Open), "application/octet-stream") { FileDownloadName = fileName };\n}\n'})}),"\n",(0,o.jsxs)(t.admonition,{title:"\u5173\u4e8e\u524d\u7aef\u83b7\u53d6\u6587\u4ef6\u540d",type:"note",children:[(0,o.jsx)(t.p,{children:"\u5982\u679c\u524d\u7aef\u83b7\u53d6\u4e0d\u5230\u6587\u4ef6\u5939\uff0c\u53ef\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",metastring:"showLineNumbers ",children:'_httpContextAccessor.HttpContext.Response.Headers.Add("Content-Disposition", $"attachment; filename={\u6587\u4ef6\u540d}");\n_httpContextAccessor.HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "Content-Disposition");\n'})})]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(7294);const a={},l=o.createContext(a);function i(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);