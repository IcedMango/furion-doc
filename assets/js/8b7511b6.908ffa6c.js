"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1507],{4689:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=s(5893),r=s(1151),l=s(510);const c={id:"app",title:"1. App \u9759\u6001\u7c7b",sidebar_label:"1. App \u9759\u6001\u7c7b"},t=void 0,o={id:"global/app",title:"1. App \u9759\u6001\u7c7b",description:"\ud83d\udcdd \u6a21\u5757\u66f4\u65b0\u65e5\u5fd7",source:"@site/docs/global/app.mdx",sourceDirName:"global",slug:"/global/app",permalink:"/docs/global/app",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/global/app.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701075976,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"app",title:"1. App \u9759\u6001\u7c7b",sidebar_label:"1. App \u9759\u6001\u7c7b"},sidebar:"global",next:{title:"2. Db \u9759\u6001\u7c7b",permalink:"/docs/global/db"}},a={},d=[{value:"1.1 \u83b7\u53d6\u5168\u5c40\u914d\u7f6e",id:"11-\u83b7\u53d6\u5168\u5c40\u914d\u7f6e",level:2},{value:"1.2 \u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61",id:"12-\u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61",level:2},{value:"1.3 \u83b7\u53d6\u73af\u5883\u5bf9\u8c61",id:"13-\u83b7\u53d6\u73af\u5883\u5bf9\u8c61",level:2},{value:"1.4 \u83b7\u53d6\u9879\u76ee\u6240\u6709\u7a0b\u5e8f\u96c6",id:"14-\u83b7\u53d6\u9879\u76ee\u6240\u6709\u7a0b\u5e8f\u96c6",level:2},{value:"1.5 \u83b7\u53d6\u9879\u76ee\u6240\u6709\u6709\u6548\u7c7b\u578b",id:"15-\u83b7\u53d6\u9879\u76ee\u6240\u6709\u6709\u6548\u7c7b\u578b",level:2},{value:"1.6 \u83b7\u53d6 <code>HttpContext</code>",id:"16-\u83b7\u53d6-httpcontext",level:2},{value:"1.7 \u83b7\u53d6\u767b\u5f55\u7684 <code>User</code> \u5bf9\u8c61",id:"17-\u83b7\u53d6\u767b\u5f55\u7684-user-\u5bf9\u8c61",level:2},{value:"1.8 \u83b7\u53d6\u670d\u52a1\u63d0\u4f9b\u5668",id:"18-\u83b7\u53d6\u670d\u52a1\u63d0\u4f9b\u5668",level:2},{value:"1.9 \u89e3\u6790\u670d\u52a1",id:"19-\u89e3\u6790\u670d\u52a1",level:2},{value:"1.10 \u83b7\u53d6\u9009\u9879\u914d\u7f6e",id:"110-\u83b7\u53d6\u9009\u9879\u914d\u7f6e",level:2},{value:"1.11 \u6253\u5370\u6570\u636e\u5230 <code>MiniProfiler</code>",id:"111-\u6253\u5370\u6570\u636e\u5230-miniprofiler",level:2},{value:"1.12 \u83b7\u53d6\u5e94\u7528\u540d\u79f0",id:"112-\u83b7\u53d6\u5e94\u7528\u540d\u79f0",level:2},{value:"1.13 \u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6839\u76ee\u5f55",id:"113-\u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6839\u76ee\u5f55",level:2},{value:"1.14 \u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55 <code>wwwroot</code> \u76ee\u5f55",id:"114-\u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55-wwwroot-\u76ee\u5f55",level:2},{value:"1.15 \u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6240\u5728\u7a0b\u5e8f\u96c6",id:"115-\u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6240\u5728\u7a0b\u5e8f\u96c6",level:2},{value:"1.16 \u83b7\u53d6\u542f\u52a8\u9879\u76ee <code>bin</code> \u76ee\u5f55",id:"116-\u83b7\u53d6\u542f\u52a8\u9879\u76ee-bin-\u76ee\u5f55",level:2},{value:"1.17 \u83b7\u53d6\u73af\u5883\u53d8\u91cf\u540d",id:"117-\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u540d",level:2},{value:"1.18 \u5224\u65ad\u7cfb\u7edf\u73af\u5883",id:"118-\u5224\u65ad\u7cfb\u7edf\u73af\u5883",level:2},{value:"1.19 \u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f",id:"119-\u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f",level:2},{value:"1.20 \u83b7\u53d6\u6846\u67b6\u5e95\u5c42\u6240\u6709\u672a\u6258\u7ba1\u5bf9\u8c61",id:"120-\u83b7\u53d6\u6846\u67b6\u5e95\u5c42\u6240\u6709\u672a\u6258\u7ba1\u5bf9\u8c61",level:2},{value:"1.21 \u624b\u52a8\u91ca\u653e\u975e\u6258\u7ba1\u5bf9\u8c61",id:"121-\u624b\u52a8\u91ca\u653e\u975e\u6258\u7ba1\u5bf9\u8c61",level:2},{value:"1.22 \u5224\u65ad\u662f\u5426\u662f\u5355\u6587\u4ef6\u73af\u5883",id:"122-\u5224\u65ad\u662f\u5426\u662f\u5355\u6587\u4ef6\u73af\u5883",level:2},{value:"1.23 \u89e3\u6790\u547d\u4ee4\u884c\u53c2\u6570",id:"123-\u89e3\u6790\u547d\u4ee4\u884c\u53c2\u6570",level:2},{value:"1.24 \u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b <code>Id</code>",id:"124-\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b-id",level:2},{value:"1.25 \u83b7\u53d6\u5f53\u524d\u8bf7\u6c42 <code>TraceId</code>",id:"125-\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42-traceid",level:2},{value:"1.26 \u83b7\u53d6\u4ee3\u7801\u6267\u884c\u8017\u65f6",id:"126-\u83b7\u53d6\u4ee3\u7801\u6267\u884c\u8017\u65f6",level:2},{value:"1.27 \u83b7\u53d6\u670d\u52a1\u6ce8\u518c\u751f\u547d\u5468\u671f\u7c7b\u578b",id:"127-\u83b7\u53d6\u670d\u52a1\u6ce8\u518c\u751f\u547d\u5468\u671f\u7c7b\u578b",level:2},{value:"1.28 \u52a8\u6001\u7f16\u8bd1\u7c7b\u5b9a\u4e49\u4ee3\u7801",id:"128-\u52a8\u6001\u7f16\u8bd1\u7c7b\u5b9a\u4e49\u4ee3\u7801",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"\ud83d\udcdd \u6a21\u5757\u66f4\u65b0\u65e5\u5fd7"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u65b0\u7279\u6027"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(l.Z,{children:"\u65b0\u589e"})," ",(0,i.jsx)(n.code,{children:"App.CompileCSharpClassCode(code)"})," \u52a8\u6001\u7f16\u8bd1\u7c7b\u5b9a\u4e49\u4ee3\u7801 ",(0,i.jsx)("sup",{children:"4.8.8.7"})," ",(0,i.jsx)("sup",{children:"\u23f1\ufe0f2023.04.30"})," ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/commit/fe1e8a1768c7020477684689b35a2a1349ec2b01",children:"fe1e8a1"})]}),"\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(l.Z,{children:"\u65b0\u589e"})," ",(0,i.jsx)(n.code,{children:"App.GetServices(type)"})," \u548c ",(0,i.jsx)(n.code,{children:"App.GetServices<T>()"})," \u83b7\u53d6\u670d\u52a1\u5b9e\u4f8b\u96c6\u5408 ",(0,i.jsx)("sup",{children:"4.8.7.33"})," ",(0,i.jsx)("sup",{children:"\u23f1\ufe0f2023.04.03"})," ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/commit/c3e9957fd276920b3a8366eda3e347500334458e",children:"c3e9957"})]}),"\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(l.Z,{children:"\u65b0\u589e"})," ",(0,i.jsx)(n.code,{children:"App.GetServiceLifetime(type)"})," \u83b7\u53d6\u670d\u52a1\u6ce8\u518c\u751f\u547d\u5468\u671f\u7c7b\u578b ",(0,i.jsx)("sup",{children:"4.8.5.3"})," ",(0,i.jsx)("sup",{children:"\u23f1\ufe0f2023.01.31"})," ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/commit/4a573a8934784b1d7e11f7d1fa3cfa65b5ec2b3a",children:"4a573a8"})]}),"\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(l.Z,{children:"\u65b0\u589e"})," ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"App.GetThreadId()"})," \u548c ",(0,i.jsx)(n.code,{children:"App.GetTraceId()"})," \u83b7\u53d6\u7ebf\u7a0b ",(0,i.jsx)(n.code,{children:"Id"})," \u548c\u8bf7\u6c42 ",(0,i.jsx)(n.code,{children:"TraceId"})]})," ",(0,i.jsx)("sup",{children:"4.8.2.4"})," ",(0,i.jsx)("sup",{children:"\u23f1\ufe0f2022.11.29"})," ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/commit/910fc1fbad9e40245c5694f30457cd4d2ca0d630",children:"910fc1f"})]}),"\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(l.Z,{children:"\u65b0\u589e"})," ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"App.GetExecutionTime(() => { /*Your Code*/ })"})," \u83b7\u53d6\u4ee3\u7801\u6267\u884c\u8017\u65f6"]})," ",(0,i.jsx)("sup",{children:"4.8.2.4"})," ",(0,i.jsx)("sup",{children:"\u23f1\ufe0f2022.11.29"})," ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/commit/5ab4b19786e53d8934de08fd2f5430fc66c3b9a1",children:"5ab4b19"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u95ee\u9898\u4fee\u590d"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(l.Z,{children:"\u4fee\u590d"})," ",(0,i.jsx)(n.code,{children:"App.CompileCSharpClassCode(code)"})," \u8fd0\u884c\u65f6\u6dfb\u52a0\u533f\u540d\u7a0b\u5e8f\u96c6\u7f16\u8bd1\u5f02\u5e38\u95ee\u9898 ",(0,i.jsx)("sup",{children:"4.8.8.8"})," ",(0,i.jsx)("sup",{children:"\u23f1\ufe0f2023.05.04"})," ",(0,i.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/commit/322ea599ed58b1804e9f8ab85d7ed44882b3e5a8",children:"322ea59"})]}),"\n"]}),"\n"]}),"\n"]})})})]}),"\n",(0,i.jsx)(n.h2,{id:"11-\u83b7\u53d6\u5168\u5c40\u914d\u7f6e",children:"1.1 \u83b7\u53d6\u5168\u5c40\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var settings = App.Settings;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"12-\u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61",children:"1.2 \u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1,6,9}",children:'// \u83b7\u53d6 IConfiguration \u5bf9\u8c61\nvar configuration = App.Configuration;\nvar value = configuration["xxx:xxx"];\n\n// \u83b7\u53d6\u6307\u5b9a\u8282\u70b9\u503c\u5e76\u8f6c\u6210 T \u7c7b\u578b\nvar data = App.GetConfig<TConfig>("key:key2");\n\n// \u91cd\u8f7d/\u5237\u65b0\u914d\u7f6e\nApp.Configuration.Reload();\n'})}),"\n",(0,i.jsx)(n.h2,{id:"13-\u83b7\u53d6\u73af\u5883\u5bf9\u8c61",children:"1.3 \u83b7\u53d6\u73af\u5883\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var webHostEnvironment = App.HostEnvironment;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"14-\u83b7\u53d6\u9879\u76ee\u6240\u6709\u7a0b\u5e8f\u96c6",children:"1.4 \u83b7\u53d6\u9879\u76ee\u6240\u6709\u7a0b\u5e8f\u96c6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var assemblies = App.Assemblies;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"15-\u83b7\u53d6\u9879\u76ee\u6240\u6709\u6709\u6548\u7c7b\u578b",children:"1.5 \u83b7\u53d6\u9879\u76ee\u6240\u6709\u6709\u6548\u7c7b\u578b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var types = App.EffectiveTypes;\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"16-\u83b7\u53d6-httpcontext",children:["1.6 \u83b7\u53d6 ",(0,i.jsx)(n.code,{children:"HttpContext"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var httpContext = App.HttpContext;\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"17-\u83b7\u53d6\u767b\u5f55\u7684-user-\u5bf9\u8c61",children:["1.7 \u83b7\u53d6\u767b\u5f55\u7684 ",(0,i.jsx)(n.code,{children:"User"})," \u5bf9\u8c61"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'var contextUser = App.User;\n\n// \u83b7\u53d6 `Jwt` \u5b58\u50a8\u7684\u4fe1\u606f\nvar userId = App.User?.FindFirstValue("\u952e");\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["\u6ce8\u610f\u5f15\u5165 ",(0,i.jsx)(n.code,{children:"System.Security.Claims"})," \u547d\u540d\u7a7a\u95f4"]})}),"\n",(0,i.jsx)(n.h2,{id:"18-\u83b7\u53d6\u670d\u52a1\u63d0\u4f9b\u5668",children:"1.8 \u83b7\u53d6\u670d\u52a1\u63d0\u4f9b\u5668"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var serviceProvider = App.ServiceProvider;\n\n// \u83b7\u53d6\u6839\u670d\u52a1\uff0c\u901a\u5e38\u7528\u6765\u89e3\u6790\u5355\u4f8b\uff0c\u53ef\u4f18\u5316\u6027\u80fd\nvar rootService = App.RootServices;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"19-\u89e3\u6790\u670d\u52a1",children:"1.9 \u89e3\u6790\u670d\u52a1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var service = App.GetService<TService>([IServiceProvider]);\nvar service2 = App.GetService(typeof(TService), [IServiceProvider]);\n\nvar service3 = App.GetRequiredService<TService>([IServiceProvider]);\nvar service4 = App.GetRequiredService(typeof(TService), [IServiceProvider]);\n\n// Furion 4.8.7.33+ \u652f\u6301\nvar services = App.GetServices<TService>([IServiceProvider]);\nvar services = App.GetServices(typeof(TService), [IServiceProvider]);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"110-\u83b7\u53d6\u9009\u9879\u914d\u7f6e",children:"1.10 \u83b7\u53d6\u9009\u9879\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var options = App.GetOptions<TOptions>([IServiceProvider]);\nvar options2 = App.GetOptionsMonitor<TOptions>([IServiceProvider]);\nvar options3 = App.GetOptionsSnapshot<TOptions>([IServiceProvider]);\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"111-\u6253\u5370\u6570\u636e\u5230-miniprofiler",children:["1.11 \u6253\u5370\u6570\u636e\u5230 ",(0,i.jsx)(n.code,{children:"MiniProfiler"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'App.PrintToMiniProfiler("\u5206\u7c7b", "\u72b6\u6001", "\u8981\u6253\u5370\u7684\u6d88\u606f");\n'})}),"\n",(0,i.jsx)(n.h2,{id:"112-\u83b7\u53d6\u5e94\u7528\u540d\u79f0",children:"1.12 \u83b7\u53d6\u5e94\u7528\u540d\u79f0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var applicationName = App.HostEnvironment.ApplicationName;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"113-\u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6839\u76ee\u5f55",children:"1.13 \u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6839\u76ee\u5f55"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var webRootPath = App.HostEnvironment.ContentRootPath;\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"114-\u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55-wwwroot-\u76ee\u5f55",children:["1.14 \u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55 ",(0,i.jsx)(n.code,{children:"wwwroot"})," \u76ee\u5f55"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var wwwroot = App.WebHostEnvironment.WebRootPath;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u53ef\u80fd\u4e2a\u522b\u64cd\u4f5c\u7cfb\u7edf\u83b7\u53d6\u503c\u4e3a ",(0,i.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"115-\u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6240\u5728\u7a0b\u5e8f\u96c6",children:"1.15 \u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6240\u5728\u7a0b\u5e8f\u96c6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var webAssembly = Assembly.GetEntryAssembly();\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"116-\u83b7\u53d6\u542f\u52a8\u9879\u76ee-bin-\u76ee\u5f55",children:["1.16 \u83b7\u53d6\u542f\u52a8\u9879\u76ee ",(0,i.jsx)(n.code,{children:"bin"})," \u76ee\u5f55"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var binPath = AppContext.BaseDirectory;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"117-\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u540d",children:"1.17 \u83b7\u53d6\u73af\u5883\u53d8\u91cf\u540d"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var environmentName = App.HostEnvironment.EnvironmentName;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"118-\u5224\u65ad\u7cfb\u7edf\u73af\u5883",children:"1.18 \u5224\u65ad\u7cfb\u7edf\u73af\u5883"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {2,5,8,11}",children:'// \u5224\u65ad\u662f\u5426\u5f00\u53d1\u73af\u5883\nvar isDevelopment = App.HostEnvironment.IsDevelopment();\n\n// \u5224\u65ad\u662f\u5426\u751f\u4ea7\u73af\u5883\nvar isProduction = App.HostEnvironment.IsProduction();\n\n// \u5224\u65ad\u662f\u5426 Stage \u73af\u5883\nvar isStaging = App.HostEnvironment.IsStaging();\n\n// \u5224\u65ad\u662f\u5426\u662f\u7279\u5b9a\u73af\u5883\uff0c\u6bd4\u5982\u81ea\u5b9a\u4e49\u6d4b\u8bd5\u73af\u5883\nvar isTest = App.HostEnvironment.IsEnvironment("TestEnvironment");\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["\u6ce8\u610f\uff0c\u9700\u5f15\u7528 ",(0,i.jsx)(n.code,{children:"Microsoft.Extensions.Hosting"})," \u547d\u540d\u7a7a\u95f4"]})}),"\n",(0,i.jsx)(n.h2,{id:"119-\u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f",children:"1.19 \u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {2,5,8,11}",children:"// \u83b7\u53d6\u7cfb\u7edf\u67b6\u6784\nvar osArchitecture = RuntimeInformation.OSArchitecture; // => X64\n\n// \u83b7\u53d6\u7cfb\u7edf\u540d\u79f0\nvar osDescription = RuntimeInformation.OSDescription;   // => Windows 10 \u4f01\u4e1a\u7248\n\n// \u83b7\u53d6\u8fdb\u7a0b\u67b6\u6784\nvar processArchitecture = RuntimeInformation.ProcessArchitecture;   // => X64\n\n// \u662f\u5426\u662f64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\nvar is64BitOperatingSystem = Environment.Is64BitOperatingSystem;    // => True\n"})}),"\n",(0,i.jsx)(n.h2,{id:"120-\u83b7\u53d6\u6846\u67b6\u5e95\u5c42\u6240\u6709\u672a\u6258\u7ba1\u5bf9\u8c61",children:"1.20 \u83b7\u53d6\u6846\u67b6\u5e95\u5c42\u6240\u6709\u672a\u6258\u7ba1\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var objs = App.UnmanagedObjects;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"121-\u624b\u52a8\u91ca\u653e\u975e\u6258\u7ba1\u5bf9\u8c61",children:"1.21 \u624b\u52a8\u91ca\u653e\u975e\u6258\u7ba1\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"App.DisposeUnmanagedObjects();  // \u901a\u5e38\u5728\u975e `Web` \u73af\u5883\u4e2d\u624b\u52a8\u5904\u7406\u91ca\u653e\u65f6\u673a\n"})}),"\n",(0,i.jsx)(n.h2,{id:"122-\u5224\u65ad\u662f\u5426\u662f\u5355\u6587\u4ef6\u73af\u5883",children:"1.22 \u5224\u65ad\u662f\u5426\u662f\u5355\u6587\u4ef6\u73af\u5883"}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.jsx)(n.code,{children:"Furion 3.6.8 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"bool isSingleFileEnviroment = App.SingleFileEnvironment;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"123-\u89e3\u6790\u547d\u4ee4\u884c\u53c2\u6570",children:"1.23 \u89e3\u6790\u547d\u4ee4\u884c\u53c2\u6570"}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.jsx)(n.code,{children:"Furion 4.4.5 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'var cmdConfig = App.GetCommandLineConfiguration(args);\ncmdConfig.TryGet("\u53c2\u6570", out var value);\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"124-\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b-id",children:["1.24 \u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b ",(0,i.jsx)(n.code,{children:"Id"})]}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.jsx)(n.code,{children:"Furion 4.8.2.4 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var threadId = App.GetThreadId();\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"125-\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42-traceid",children:["1.25 \u83b7\u53d6\u5f53\u524d\u8bf7\u6c42 ",(0,i.jsx)(n.code,{children:"TraceId"})]}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.jsx)(n.code,{children:"Furion 4.8.2.4 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var traceId = App.GetTraceId();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"126-\u83b7\u53d6\u4ee3\u7801\u6267\u884c\u8017\u65f6",children:"1.26 \u83b7\u53d6\u4ee3\u7801\u6267\u884c\u8017\u65f6"}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.jsx)(n.code,{children:"Furion 4.8.2.4 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'var elapsedMilliseconds = App.GetExecutionTime(() =>\n{\n    Console.WriteLine("Hello, Furion");\n});\n'})}),"\n",(0,i.jsx)(n.h2,{id:"127-\u83b7\u53d6\u670d\u52a1\u6ce8\u518c\u751f\u547d\u5468\u671f\u7c7b\u578b",children:"1.27 \u83b7\u53d6\u670d\u52a1\u6ce8\u518c\u751f\u547d\u5468\u671f\u7c7b\u578b"}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.jsx)(n.code,{children:"Furion 4.8.5.3 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var lifetime = App.GetServiceLifetime(typeof(IConfiguration));  // => ServiceLifetime.Singleton\nvar license = App.GetServiceLifetime(typeof(IRepository<Person>));  // => ServiceLifetime.Scoped\n"})}),"\n",(0,i.jsx)(n.h2,{id:"128-\u52a8\u6001\u7f16\u8bd1\u7c7b\u5b9a\u4e49\u4ee3\u7801",children:"1.28 \u52a8\u6001\u7f16\u8bd1\u7c7b\u5b9a\u4e49\u4ee3\u7801"}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c\u8bf4\u660e",type:"important",children:(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.jsx)(n.code,{children:"Furion 4.8.8.7 +"})," \u7248\u672c\u4f7f\u7528\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {1,28}",children:'var jobAssembly = App.CompileCSharpClassCode(@"\nusing Furion.Schedule;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace YourProject;\n\npublic class MyJob : IJob\n{\n    private readonly ILogger<MyJob> _logger;\n\n    public MyJob(ILogger<MyJob> logger)\n    {\n        _logger = logger;\n    }\n\n    public async Task ExecuteAsync(JobExecutingContext context, CancellationToken stoppingToken)\n    {\n        _logger.LogInformation($""\u6211\u662f Roslyn \u65b9\u5f0f\u521b\u5efa\u7684\uff1a{context}"");\n        await Task.CompletedTask;\n    }\n}\n");\n\n// \u751f\u6210\u8fd0\u884c\u65f6 MyJob \u7c7b\u578b\nvar jobType = jobAssembly.GetType("YourProject.MyJob");\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u652f\u6301\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"MemoryStream"})," \u5bf9\u8c61"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {2}",children:'// \u8fd4\u56de\u5185\u5b58\nvar memoryStream = App.CompileCSharpClassCodeToStream("C# \u7c7b\u5b9a\u4e49\u4ee3\u7801");\n\n// \u8f6c\u6362\u6210\u7a0b\u5e8f\u96c6\nvar assembly = Assembly.Load(memoryStream.ToArray());\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u652f\u6301\u4fdd\u5b58\u4e3a ",(0,i.jsx)(n.code,{children:"dll"})," \u6587\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {2}",children:'// \u4fdd\u5b58\u4e3a .dll \u6587\u4ef6\u5e76\u8fd4\u56de\u7a0b\u5e8f\u96c6\nvar assembly = App.CompileCSharpClassCodeToDllFile("C# \u7c7b\u5b9a\u4e49\u4ee3\u7801");\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},510:(e,n,s)=>{s.d(n,{Z:()=>U});s(7294);const i=(e,n,s)=>e?"string"==typeof e?e:e[n]||s:s;var r=s(5893);const l={display:"block"},c=e=>{let{size:n,color:s,style:c,...t}=e;const o=c?{...l,...c}:l;return(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:o,...t,children:(0,r.jsx)("path",{d:"M856.4 292.8c-63.3-63.6-126.6-127.1-190.2-190.3-15.3-15.2-32.7-16.1-48.1-0.8-64.3 63.6-128.1 127.6-191.8 191.9-14 14.2-16.3 31.6-1.7 46 14.8 14.7 31.5 10.6 46.1-2.7 5.1-4.6 9.8-9.7 14.7-14.7 39.2-39.7 78.5-79.5 122.8-124.4 0 170 3 332.2-1.1 494-2.4 96.4-91.2 174.6-187.4 176.6-110.6 2.3-198.6-84.4-199-197.4-0.6-136.3-0.2-272.6-0.1-408.9 0-21.8-7.9-37.4-31.2-39.9-18.9-2-33.2 13.2-33.1 37.5 0 145.8-3.4 291.7 2.4 437.2 6 152.1 160.4 263.5 309.5 230.5C591.8 900 672.8 797.2 673.6 664.6c0.8-144 0.2-288.1 0.2-432.1v-33.3c11.2 10.2 17.6 15.4 23.3 21.3 38.5 38.4 76.7 77 115.3 115.2 14.8 14.6 32.2 19.2 47.8 2.9 13.8-14.8 10.3-31.7-3.8-45.8z",fill:i(s,0,"#333333")})})};c.defaultProps={size:18};const t=c,o={display:"block"},a=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...o,...l}:o;return(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:[(0,r.jsx)("path",{d:"M143.872 768a51.2 51.2 0 0 1-15.36-2.56 51.2 51.2 0 0 1-35.328-51.2V283.136a148.992 148.992 0 0 1 141.824-153.6h450.56a148.992 148.992 0 0 1 141.824 153.6V512a148.992 148.992 0 0 1-141.824 153.6H244.224l-60.928 80.896a51.2 51.2 0 0 1-39.424 21.504zM235.008 180.224a97.792 97.792 0 0 0-90.624 102.4v430.592L218.624 614.4h466.944a97.792 97.792 0 0 0 90.624-102.4V283.136a97.792 97.792 0 0 0-90.624-102.4z",fill:i(s,0,"#333333")}),(0,r.jsx)("path",{d:"M880.128 875.52a51.2 51.2 0 0 1-39.424-20.48l-60.928-80.896h-243.2a25.6 25.6 0 0 1 0-51.2h268.8l76.288 102.4v-295.936a25.6 25.6 0 0 1 25.6-25.6 25.6 25.6 0 0 1 25.6 25.6v293.888a51.2 51.2 0 0 1-51.2 51.2z",fill:i(s,1,"#333333")})]})};a.defaultProps={size:18};const d=a,h={display:"block"},p=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...h,...l}:h;return(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:[(0,r.jsx)("path",{d:"M223.425605 449.2744l161.632237 0 0 253.65714c0 16.954137 13.745049 30.699186 30.699186 30.699186 16.95516 0 30.699186-13.745049 30.699186-30.699186l0-284.356326c0-16.95516-13.744026-30.699186-30.699186-30.699186L291.035446 387.876028l217.23665-248.51605L733.039255 387.580293 607.104031 387.580293c-16.954137 0-30.699186 13.745049-30.699186 30.699186l0 284.652062c0 16.954137 13.745049 30.699186 30.699186 30.699186s30.699186-13.745049 30.699186-30.699186L637.803217 448.978664l164.448376 0c12.140505 0 23.140023-7.154957 28.063149-18.251689 4.922103-11.097756 2.841721-24.053835-5.307889-33.05279L530.62315 72.570829c-5.881964-6.495948-14.273075-10.134825-23.024389-10.091846-8.763594 0.076748-17.076934 3.895727-22.844288 10.494005L200.312188 398.371056c-7.92653 9.067516-9.818623 21.931498-4.839215 32.896224S211.383338 449.2744 223.425605 449.2744z",fill:i(s,0,"#333333")}),(0,r.jsx)("path",{d:"M222.354204 829.113381l581.732178 0c16.954137 0 30.699186-13.745049 30.699186-30.699186s-13.745049-30.699186-30.699186-30.699186L222.354204 767.715009c-16.954137 0-30.699186 13.745049-30.699186 30.699186S205.400067 829.113381 222.354204 829.113381z",fill:i(s,1,"#333333")}),(0,r.jsx)("path",{d:"M804.086381 896.729361 222.354204 896.729361c-16.954137 0-30.699186 13.745049-30.699186 30.699186s13.745049 30.699186 30.699186 30.699186l581.732178 0c16.954137 0 30.699186-13.745049 30.699186-30.699186S821.041542 896.729361 804.086381 896.729361z",fill:i(s,2,"#333333")})]})};p.defaultProps={size:18};const x=p,u={display:"block"},j=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...u,...l}:u;return(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:(0,r.jsx)("path",{d:"M380.15463648 874.54223633c0 18.12744166-14.83154297 32.95898463-32.95898463 32.95898463s-32.95898463-14.83154297-32.95898462-32.95898463V228.9152832L172.71078883 370.86962865a33.04467773 33.04467773 0 0 1-46.60400416 0 33.04467773 33.04467773 0 0 1 0-46.6040034l197.55615234-198.14941406A32.76782227 32.76782227 0 0 1 347.0967749 116.52514674c0.03295924 0 0.06591772-0.03295924 0.09887695-0.03295924 1.54907201 0 2.90039088 0.69213867 4.41650366 0.88989258 2.66967773 0.39550781 5.40527318 0.59326172 7.94311548 1.61499049 12.03002904 4.94384766 20.59936549 16.71020508 20.59936549 30.45410156v725.0910642z m320.15698192 23.34155248a32.85351537 32.85351537 0 0 1-23.43383789 9.59106445c-0.03295924 0-0.06591772 0.03295924-0.09887696 0.03295924-1.54907201 0-2.90039088-0.69213867-4.41650365-0.92285182-2.70263697-0.36254857-5.40527318-0.56030248-7.94311549-1.61498972-12.03002904-4.91088842-20.59936549-16.67724584-20.59936473-30.42114309V149.45776367c0-18.12744166 14.83154297-32.95898463 32.95898387-32.95898463s32.95898463 14.83154297 32.95898463 32.95898463v645.60058619l141.52587916-141.92138697c12.81445313-12.82104467 33.81591797-12.82104467 46.63037109 0 12.78808619 12.81445313 12.78808619 33.77636719 0 46.60400416L700.3116184 897.88378881z",fill:i(s,0,"#333333")})})};j.defaultProps={size:18};const v=j,m={display:"block"},g=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...m,...l}:m;return(0,r.jsx)("svg",{viewBox:"0 0 1172 1024",width:n+"px",height:n+"px",style:t,...c,children:(0,r.jsx)("path",{d:"M870.0416 250.4704a38.4 38.4 0 0 0-8.96 53.5552c13.056 18.2784 24.4224 37.8368 33.7408 58.112a38.4512 38.4512 0 0 0 50.944 18.8928 38.4512 38.4512 0 0 0 18.8416-50.944 436.0192 436.0192 0 0 0-40.96-70.6048 38.3488 38.3488 0 0 0-53.6064-9.0112zM181.4528 566.016a35.9936 35.9936 0 0 0 25.5488-10.5984L351.7952 410.624a36.096 36.096 0 1 0-51.0976-51.0976L217.6 442.5728C250.0096 278.1184 395.264 153.6 569.1392 153.6c50.7904 0 99.8912 10.3936 145.92 30.9248a38.4 38.4 0 1 0 31.232-70.0928 431.36 431.36 0 0 0-177.152-37.632c-214.6816 0-393.1136 156.416-428.4416 361.216L62.1568 359.4752a36.1984 36.1984 0 0 0-51.0976 51.0976l144.8448 144.7936a36.0448 36.0448 0 0 0 25.5488 10.6496zM978.5344 463.104a36.1984 36.1984 0 0 0-51.0976 0l-144.8448 144.7936a36.096 36.096 0 1 0 51.0976 51.0976l88.6272-88.576C894.3104 740.2496 746.8032 870.4 569.1392 870.4a357.7856 357.7856 0 0 1-325.2736-207.7184 38.4 38.4 0 1 0-69.7344 32.3072 434.3808 434.3808 0 0 0 394.9568 252.2112c215.1936 0 393.984-157.184 428.6464-362.7008l74.496 74.496a35.9936 35.9936 0 0 0 51.0976 0 36.096 36.096 0 0 0 0-51.0976l-144.7936-144.7936z",fill:i(s,0,"#333333")})})};g.defaultProps={size:18};const b=g,f={display:"block"},y=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...f,...l}:f;return(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:[(0,r.jsx)("path",{d:"M302 332a30 30 0 1 1 0-60h420a30 30 0 0 1 0 60H302zM302 542a30 30 0 0 1 0-60h420a30 30 0 0 1 0 60H302zM302 752a30 30 0 0 1 0-60h120a30 30 0 0 1 0 60H302z",fill:i(s,0,"#333333")}),(0,r.jsx)("path",{d:"M789.47 784.1a30 30 0 0 1 39.36 45.3l-144.24 125.25a30 30 0 0 1-19.68 7.35H214.85C163.4 962 122 919.46 122 867.38V156.62C122 104.54 163.4 62 214.85 62h594.3C860.6 62 902 104.54 902 156.62v529.05a30 30 0 1 1-60 0V156.62C842 137.3 827.09 122 809.15 122H214.85C196.91 122 182 137.3 182 156.62v710.76C182 886.7 196.91 902 214.85 902h438.84l135.78-117.9z",fill:i(s,1,"#333333")}),(0,r.jsx)("path",{d:"M692 931.19a30 30 0 1 1-60 0v-174.6C632 704.57 673.4 662 724.85 662h147.78a30 30 0 0 1 0 60h-147.78c-17.94 0-32.85 15.3-32.85 34.62v174.6z",fill:i(s,2,"#333333")})]})};y.defaultProps={size:18};const w=y,C={display:"block"},A=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...C,...l}:C;return(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:[(0,r.jsx)("path",{d:"M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z",fill:i(s,0,"#333333")}),(0,r.jsx)("path",{d:"M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z",fill:i(s,1,"#333333")})]})};A.defaultProps={size:18};const N=A,S={display:"block"},L=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...S,...l}:S;return(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:[(0,r.jsx)("path",{d:"M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5 0.2 13 0.7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7 6 17.2 13.6 33.6 22.7 49 24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2c41.5-24.3 76.2-59 100.5-100.5 9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7 0.4-6.4 0.7-12.8 0.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3-20.1 11.8-42 20-64.9 24.3V484c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v396.5c-22.9-4.3-44.8-12.5-64.9-24.3-30.3-17.7-55.6-43-73.3-73.3C317.7 752 308 716.8 308 680V412h408v268z",fill:i(s,0,"#333333")}),(0,r.jsx)("path",{d:"M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z",fill:i(s,1,"#333333")})]})};L.defaultProps={size:18};const z=L,M={display:"block"},T=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...M,...l}:M;return(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:[(0,r.jsx)("path",{d:"M512 71.68c-242.688 0-440.32 197.632-440.32 440.32s197.632 440.32 440.32 440.32 440.32-197.632 440.32-440.32-197.632-440.32-440.32-440.32z m0 819.2c-208.896 0-378.88-169.984-378.88-378.88s169.984-378.88 378.88-378.88 378.88 169.984 378.88 378.88-169.984 378.88-378.88 378.88z",fill:i(s,0,"#333333")}),(0,r.jsx)("path",{d:"M542.72 261.12H481.28v220.16H261.12v61.44h220.16v220.16h61.44v-220.16h220.16V481.28h-220.16z",fill:i(s,1,"#333333")})]})};T.defaultProps={size:18};const I=T,P={display:"block"},k=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...P,...l}:P;return(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:(0,r.jsx)("path",{d:"M384 896h-64v-70.4c0-15.2-10.4-28-24.8-31.2C159.2 768 64 644.8 64 496v-32h64v32c0 118.4 73.6 215.2 179.2 236 44.8 8.8 76.8 48 76.8 94.4v69.6zM704 896h-64v-70.4c0-45.6 32-85.6 76.8-94.4C822.4 711.2 896 614.4 896 496v-32h64v32c0 148.8-95.2 272-231.2 298.4-14.4 3.2-24.8 16-24.8 31.2v70.4zM512.8 640l-41.6-37.6c-147.2-133.6-244-208-244-316.8 0-88 68.8-156.8 156.8-156.8 49.6 0 97.6 23.2 128.8 60C544 152 592 128.8 641.6 128.8c88 0 156.8 68.8 156.8 156.8 0 108-96.8 183.2-244 316.8L512.8 640z",fill:i(s,0,"#333333")})})};k.defaultProps={size:18};const E=k,H={display:"block"},G=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...H,...l}:H;return(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:(0,r.jsx)("path",{d:"M942.4615936 284.62787926c-14.30911886-14.12709945-37.31996786-14.05468217-51.48229632 0.21920654L517.97142983 661.27810333 139.75544149 286.45003606c-14.30911886-14.16232846-37.31996786-14.05468217-51.51948344 0.21920654-14.16232846 14.30911886-14.05468217 37.35519687 0.21920654 51.51948345l401.99014627 398.34974663c0.61847666 0.61847666 1.41897273 0.76526706 2.03940637 1.34655658 0.14483342 0.14483342 0.18201941 0.32685283 0.32685283 0.47364324 7.09877874 7.02636259 16.38375538 10.55911595 25.63154489 10.55911595 9.35739278 0 18.75001458-3.60516949 25.85075143-10.77636551l398.34974663-401.99014628C956.84312974 321.8382427 956.73548345 298.7921647 942.4615936 284.62787926z",fill:i(s,0,"#333333")})})};G.defaultProps={size:18};const F=G,B={display:"block"},O=e=>{let{size:n,color:s,style:l,...c}=e;const t=l?{...B,...l}:B;return(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",width:n+"px",height:n+"px",style:t,...c,children:(0,r.jsx)("path",{d:"M81.5384064 739.37212074c14.30911886 14.12709945 37.31996786 14.05468217 51.48229632-0.21920654L506.02857017 362.72189667 884.24455851 737.54996394c14.30911886 14.16232846 37.31996786 14.05468217 51.51948344-0.21920654 14.16232846-14.30911886 14.05468217-37.35519687-0.21920654-51.51948345l-401.99014627-398.34974663c-0.61847666-0.61847666-1.41897273-0.76526706-2.03940637-1.34655658-0.14483342-0.14483342-0.18201941-0.32685283-0.32685282-0.47364324-7.09877874-7.02636259-16.38375538-10.55911595-25.6315449-10.55911595-9.35739278 0-18.75001458 3.60516949-25.85075143 10.77636551l-398.34974663 401.99014628C67.15687026 702.1617573 67.26451655 725.2078353 81.5384064 739.37212074z",fill:i(s,0,"#333333")})})};O.defaultProps={size:18};const R=O,V=e=>{let{name:n,...s}=e;switch(n){case"youhua":return(0,r.jsx)(t,{...s});case"dayi":return(0,r.jsx)(d,{...s});case"shengji":return(0,r.jsx)(x,{...s});case"tiaozheng":return(0,r.jsx)(v,{...s});case"gengxin":return(0,r.jsx)(b,{...s});case"wendang":return(0,r.jsx)(w,{...s});case"shanchu":return(0,r.jsx)(N,{...s});case"bug":return(0,r.jsx)(z,{...s});case"xinzeng":return(0,r.jsx)(I,{...s});case"fuwu":return(0,r.jsx)(E,{...s});case"down":return(0,r.jsx)(F,{...s});case"up":return(0,r.jsx)(R,{...s})}return null},D={label:"label_p8vM",icon:"icon_knQK"};function U(e){const{children:n}=e,s={"\u65b0\u589e":{icon:"xinzeng",bgColor:"#39b54a"},"\u4fee\u590d":{icon:"bug",bgColor:"#9c26b0"},"\u6587\u6863":{icon:"wendang",bgColor:"rgb(79, 147, 255)"},"\u66f4\u65b0":{icon:"gengxin",bgColor:"#0081ff"},"\u8c03\u6574":{icon:"tiaozheng",bgColor:"#333"},"\u5347\u7ea7":{icon:"shengji",bgColor:"#e03997"},"\u79fb\u9664":{icon:"shanchu",bgColor:"#666"},"\u7b54\u7591":{icon:"dayi",bgColor:"#bbb"},"\u4f18\u5316":{icon:"youhua",bgColor:"#38e550"}};return(0,r.jsxs)("label",{className:D.label,title:n,style:{backgroundColor:s[n].bgColor},children:[(0,r.jsx)(V,{name:s[n].icon,color:"white",size:14,className:D.icon})," ",n]})}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var i=s(7294);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);