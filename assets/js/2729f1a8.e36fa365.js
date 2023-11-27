"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3350],{7508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(5893),i=t(1151);t(4996);const r={slug:"console",title:"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://gitee.com/dotnetchina",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5",".net6"]},s=void 0,l={permalink:"/blog/console",editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/blog/2021-07-24-console.mdx",source:"@site/blog/2021-07-24-console.mdx",title:"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528",description:"\u5f53\u524d\u5185\u5bb9\u5df2\u8fc7\u65f6\uff0c\u8bf7\u67e5\u770b 2.1 \u5165\u95e8\u6307\u5357 - 2.1.10.3 Console \u521d\u59cb\u5316",date:"2021-07-24T00:00:00.000Z",formattedDate:"July 24, 2021",tags:[{label:"furion",permalink:"/blog/tags/furion"},{label:"furos",permalink:"/blog/tags/furos"},{label:".net",permalink:"/blog/tags/net"},{label:".netcore",permalink:"/blog/tags/netcore"},{label:".net5",permalink:"/blog/tags/net-5"},{label:".net6",permalink:"/blog/tags/net-6"}],readingTime:.975,hasTruncateMarker:!1,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://gitee.com/dotnetchina",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"console",title:"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://gitee.com/dotnetchina",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5",".net6"]},unlisted:!1,prevItem:{title:"6. .NET 6 Preview 7 \u5c1d\u9c9c",permalink:"/blog/net6-preview7"},nextItem:{title:"4. .NET 6 Preview 6 \u5c1d\u9c9c",permalink:"/blog/net6-preview6"}},a={authorsImageUrls:[void 0]},c=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"\u5185\u5bb9\u8fc7\u65f6",type:"warning",children:(0,o.jsxs)(n.p,{children:["\u5f53\u524d\u5185\u5bb9\u5df2\u8fc7\u65f6\uff0c\u8bf7\u67e5\u770b ",(0,o.jsxs)(n.a,{href:"/docs/serverun#21103-console-%E5%88%9D%E5%A7%8B%E5%8C%96",children:["2.1 \u5165\u95e8\u6307\u5357 - 2.1.10.3 ",(0,o.jsx)(n.code,{children:"Console"})," \u521d\u59cb\u5316"]})]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Furion"})," \u4ece ",(0,o.jsx)(n.code,{children:"v2.15.3+"})," \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5168\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\uff0c\u5305\u62ec ",(0,o.jsx)(n.code,{children:"Web"}),"\uff0c",(0,o.jsx)(n.code,{children:"\u63a7\u5236\u53f0"}),"\uff0c",(0,o.jsx)(n.code,{children:"WinForm"}),"\uff0c",(0,o.jsx)(n.code,{children:"WPF"}),"\uff0c",(0,o.jsx)(n.code,{children:"Xamarin/MAUI"})," \u7b49\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers ",children:'using Furion;\nusing Furion.DependencyInjection;\nusing Furion.RemoteRequest.Extensions;\nusing Microsoft.Extensions.DependencyInjection;\nusing System;\n\nnamespace ConsoleApp1\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u5bb9\u5668\n            var services = Inject.Create();\n            // \u6ce8\u518c\u670d\u52a1\n            services.AddRemoteRequest();\n            // \u6240\u6709\u670d\u52a1\u6ce8\u518c\u5b8c\u6bd5\u540e\u8c03\u7528 Build() \u6784\u5efa\n            services.Build();\n\n            // \u4f7f\u7528\n            var helloService = App.GetService<IHelloService>();\n            Console.WriteLine(helloService.SayHello());\n\n            Console.WriteLine("=============");\n\n            var baidu = "https://www.baidu.com".GetAsStringAsync().GetAwaiter().GetResult();\n            Console.WriteLine(baidu);\n        }\n    }\n\n    public interface IHelloService\n    {\n        string SayHello();\n    }\n    public class HelloService : IHelloService, ITransient\n    {\n        public string SayHello()\n        {\n            return "Hello Furion.";\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee5\u4e0a\u4ee3\u7801\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"var services = Inject.Create();"})," \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u96c6\u5408\uff0c\u6700\u540e\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"services.Build()"})," \u5373\u53ef\u5b8c\u6210\u521d\u59cb\u5316\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);