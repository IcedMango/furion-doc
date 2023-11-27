"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7065],{1692:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(5893),t=s(1151),l=(s(4996),s(4866)),i=s(5162);const o={id:"dbcontext-proc",title:"9.14 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c",sidebar_label:"9.14 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c"},c=void 0,a={id:"dbcontext-proc",title:"9.14 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c",description:"\u63a8\u8350\u4f7f\u7528 \u300a9.18 Sql \u9ad8\u7ea7\u4ee3\u7406\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002Sql \u9ad8\u7ea7\u4ee3\u7406 \u80fd\u591f\u63d0\u4f9b\u66f4\u5bb9\u6613\u4e14\u66f4\u6613\u7ef4\u62a4\u7684\u65b9\u5f0f\u3002",source:"@site/docs/dbcontext-proc.mdx",sourceDirName:".",slug:"/dbcontext-proc",permalink:"/furion-doc/docs/dbcontext-proc",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/dbcontext-proc.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701077150,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"dbcontext-proc",title:"9.14 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c",sidebar_label:"9.14 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.13 \u89c6\u56fe\u64cd\u4f5c",permalink:"/furion-doc/docs/dbcontext-view"},next:{title:"9.15 \u51fd\u6570\u64cd\u4f5c",permalink:"/furion-doc/docs/dbcontext-function"}},u={},d=[{value:"9.14.1 \u5173\u4e8e\u5b58\u50a8\u8fc7\u7a0b",id:"9141-\u5173\u4e8e\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"9.14.2.0 \u652f\u6301\u5b58\u50a8\u8fc7\u7a0b\u7684\u6570\u636e\u5e93",id:"91420-\u652f\u6301\u5b58\u50a8\u8fc7\u7a0b\u7684\u6570\u636e\u5e93",level:3},{value:"9.14.2 \u5b58\u50a8\u8fc7\u7a0b\u4f7f\u7528",id:"9142-\u5b58\u50a8\u8fc7\u7a0b\u4f7f\u7528",level:2},{value:"9.14.2.1 \u521d\u59cb\u5316\u65b9\u5f0f",id:"91421-\u521d\u59cb\u5316\u65b9\u5f0f",level:3},{value:"9.14.2.2 \u8fd4\u56de <code>DataTable</code>",id:"91422-\u8fd4\u56de-datatable",level:3},{value:"9.14.2.3 \u8fd4\u56de <code>DataSet</code>",id:"91423-\u8fd4\u56de-dataset",level:3},{value:"9.14.2.4 \u8fd4\u56de <code>List&lt;T&gt;</code>",id:"91424-\u8fd4\u56de-listt",level:3},{value:"9.14.2.5 \u8fd4\u56de <code>Tuple&lt;T1,...T8&gt;</code>",id:"91425-\u8fd4\u56de-tuplet1t8",level:3},{value:"9.14.2.6 \u8fd4\u56de <code>\u5355\u884c\u5355\u5217 object</code>",id:"91426-\u8fd4\u56de-\u5355\u884c\u5355\u5217-object",level:3},{value:"9.14.2.7 \u8fd4\u56de <code>\u5355\u884c\u5355\u5217 &lt;T&gt;</code>",id:"91427-\u8fd4\u56de-\u5355\u884c\u5355\u5217-t",level:3},{value:"9.14.2.8 \u6267\u884c\u4f46\u65e0\u8fd4\u56de",id:"91428-\u6267\u884c\u4f46\u65e0\u8fd4\u56de",level:3},{value:"9.14.3 \u6267\u884c\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b",id:"9143-\u6267\u884c\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"9.14.3.1 \u521b\u5efa\u53c2\u6570\u6a21\u578b",id:"91431-\u521b\u5efa\u53c2\u6570\u6a21\u578b",level:3},{value:"9.14.3.2 \u6267\u884c\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b",id:"91432-\u6267\u884c\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b",level:3},{value:"9.14.3 \u5173\u4e8e <code>[DbParameter]</code>",id:"9143-\u5173\u4e8e-dbparameter",level:2},{value:"9.14.4 \u5173\u4e8e <code>ProcedureOutputResult</code>",id:"9144-\u5173\u4e8e-procedureoutputresult",level:2},{value:"9.14.5 \u5b58\u50a8\u8fc7\u7a0b\u53c2\u6570",id:"9145-\u5b58\u50a8\u8fc7\u7a0b\u53c2\u6570",level:2},{value:"9.14.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9146-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function p(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.admonition,{title:"\u6e29\u99a8\u63d0\u793a",type:"important",children:(0,n.jsxs)(r.p,{children:["\u63a8\u8350\u4f7f\u7528 \u300a",(0,n.jsx)(r.a,{href:"/furion-doc/docs/dbcontext-sql-proxy",children:"9.18 Sql \u9ad8\u7ea7\u4ee3\u7406"}),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002",(0,n.jsx)(r.code,{children:"Sql \u9ad8\u7ea7\u4ee3\u7406"})," \u80fd\u591f\u63d0\u4f9b\u66f4\u5bb9\u6613\u4e14\u66f4\u6613\u7ef4\u62a4\u7684\u65b9\u5f0f\u3002"]})}),"\n","\n","\n",(0,n.jsx)(r.h2,{id:"9141-\u5173\u4e8e\u5b58\u50a8\u8fc7\u7a0b",children:"9.14.1 \u5173\u4e8e\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,n.jsx)(r.p,{children:"\u5f15\u7528\u767e\u5ea6\u767e\u79d1\uff1a"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"\u5b58\u50a8\u8fc7\u7a0b\uff08Stored Procedure\uff09\u662f\u5728\u5927\u578b\u6570\u636e\u5e93\u7cfb\u7edf\u4e2d\uff0c\u4e00\u7ec4\u4e3a\u4e86\u5b8c\u6210\u7279\u5b9a\u529f\u80fd\u7684 SQL \u8bed\u53e5\u96c6\uff0c\u5b83\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u4e00\u6b21\u7f16\u8bd1\u540e\u6c38\u4e45\u6709\u6548\uff0c\u7528\u6237\u901a\u8fc7\u6307\u5b9a\u5b58\u50a8\u8fc7\u7a0b\u7684\u540d\u5b57\u5e76\u7ed9\u51fa\u53c2\u6570\uff08\u5982\u679c\u8be5\u5b58\u50a8\u8fc7\u7a0b\u5e26\u6709\u53c2\u6570\uff09\u6765\u6267\u884c\u5b83\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u5b58\u50a8\u8fc7\u7a0b\u662f\u6570\u636e\u5e93\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u5bf9\u8c61\u3002\u5728\u6570\u636e\u91cf\u7279\u522b\u5e9e\u5927\u7684\u60c5\u51b5\u4e0b\u5229\u7528\u5b58\u50a8\u8fc7\u7a0b\u80fd\u8fbe\u5230\u500d\u901f\u7684\u6548\u7387\u63d0\u5347\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\u7b80\u5355\u6765\u8bf4\uff0c\u5b58\u50a8\u8fc7\u7a0b\u5c31\u662f\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\uff08",(0,n.jsx)(r.code,{children:"Sqlite"})," \u9664\u5916\uff09\u4e2d\u7f16\u5199\u903b\u8f91\u7684\u51fd\u6570/\u65b9\u6cd5\uff0c\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5c06 ",(0,n.jsx)(r.code,{children:"sql"})," \u7f16\u8bd1\u7f13\u5b58\u8d77\u6765\uff0c\u5927\u5927\u63d0\u9ad8\u5b58\u50a8\u8fc7\u7a0b\u7684\u6267\u884c\u6548\u7387\u3002"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u8fd9\u91cc\u4e0d\u8ba8\u8bba\u5b58\u50a8\u8fc7\u7a0b\u7684\u4f18\u7f3a\u70b9\u3002"})}),"\n",(0,n.jsx)(r.h3,{id:"91420-\u652f\u6301\u5b58\u50a8\u8fc7\u7a0b\u7684\u6570\u636e\u5e93",children:"9.14.2.0 \u652f\u6301\u5b58\u50a8\u8fc7\u7a0b\u7684\u6570\u636e\u5e93"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"SqlServer"}),(0,n.jsx)(r.th,{children:"Sqlite"}),(0,n.jsx)(r.th,{children:"Cosmos"}),(0,n.jsx)(r.th,{children:"InMemoryDatabase"}),(0,n.jsx)(r.th,{children:"MySql"}),(0,n.jsx)(r.th,{children:"PostgreSQL"}),(0,n.jsx)(r.th,{children:"Oracle"}),(0,n.jsx)(r.th,{children:"Firebird"}),(0,n.jsx)(r.th,{children:"Dm"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u2714"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"\u2714"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"\u2714"}),(0,n.jsx)(r.td,{children:"\u2714"}),(0,n.jsx)(r.td,{children:"\u2714"}),(0,n.jsx)(r.td,{children:"\u2714"}),(0,n.jsx)(r.td,{children:"\u2714"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"9142-\u5b58\u50a8\u8fc7\u7a0b\u4f7f\u7528",children:"9.14.2 \u5b58\u50a8\u8fc7\u7a0b\u4f7f\u7528"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u4e2d\u63d0\u4f9b\u4e86\u591a\u79cd\u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c\u65b9\u5f0f\uff1a"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ISqlRepository"}),"\uff1a",(0,n.jsx)(r.code,{children:"Sql"})," \u64cd\u4f5c\u4ed3\u50a8\uff0c\u53ef\u901a\u8fc7 ",(0,n.jsx)(r.code,{children:"\u4f9d\u8d56\u6ce8\u5165"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ISqlDispatchProxy"}),"\uff1a",(0,n.jsx)(r.code,{children:"Sql"})," \u4ee3\u7406\u65b9\u5f0f\uff08\u9ad8\u7ea7\u7528\u6cd5\uff0c\u63a8\u8350\uff09"]}),"\n",(0,n.jsxs)(r.li,{children:["\u901a\u8fc7\u4efb\u610f\u5b9e\u4f53\u4ed3\u50a8\u64cd\u4f5c\uff1a",(0,n.jsx)(r.code,{children:"personRepository.SqlProcedureQuery(procName)"})]}),"\n",(0,n.jsxs)(r.li,{children:["\u901a\u8fc7\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u6cd5\uff1a",(0,n.jsx)(r.code,{children:"procName.SqlProcedureQuery()"})]}),"\n",(0,n.jsxs)(r.li,{children:["\u901a\u8fc7 ",(0,n.jsx)(r.code,{children:"repository.Sql().SqlProcedureQuery()"})," \u65b9\u5f0f"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"91421-\u521d\u59cb\u5316\u65b9\u5f0f",children:"9.14.2.1 \u521d\u59cb\u5316\u65b9\u5f0f"}),"\n",(0,n.jsxs)(l.Z,{defaultValue:"one",values:[{label:"ISqlRepository",value:"one"},{label:"ISqlDispatchProxy",value:"two"},{label:"\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",value:"three"},{label:"\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f",value:"four"}],children:[(0,n.jsx)(i.Z,{value:"one",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers  {1,9-12}",children:"using Furion.DatabaseAccessor;\nusing Furion.DynamicApiController;\n\nnamespace Furion.Application\n{\n    [DynamicApiController]\n    public class SqlService\n    {\n        private ISqlRepository _sqlRepository;\n        public SqlService(ISqlRepository sqlRepository)\n        {\n            _sqlRepository = sqlRepository;\n        }\n    }\n}\n"})})}),(0,n.jsxs)(i.Z,{value:"two",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers  {2,7,9-10}",children:'using Furion.Core;\nusing Furion.DatabaseAccessor;\nusing System.Collections.Generic;\n\nnamespace Furion.Application\n{\n    public interface ISqlExecuteProxy : ISqlDispatchProxy\n    {\n        [SqlProcedure("proc_GetPersons")]\n        List<Person> GetPersons(string keyword);\n    }\n}\n'})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers  {9-12}",children:"using Furion.DatabaseAccessor;\nusing Furion.DynamicApiController;\n\nnamespace Furion.Application\n{\n    [DynamicApiController]\n    public class SqlService\n    {\n        private ISqlExecuteProxy _sqlExecuteProxy;\n        public SqlService(ISqlExecuteProxy sqlExecuteProxy)\n        {\n            _sqlExecuteProxy = sqlExecuteProxy;\n        }\n    }\n}\n"})})]}),(0,n.jsx)(i.Z,{value:"three",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'var persons = personRepository.SqlProcedureQuery("proc_GetPersons");\n'})})}),(0,n.jsx)(i.Z,{value:"four",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'var persons = "proc_GetPersons".SqlProcedureQuery();\n'})})})]}),"\n",(0,n.jsxs)(r.h3,{id:"91422-\u8fd4\u56de-datatable",children:["9.14.2.2 \u8fd4\u56de ",(0,n.jsx)(r.code,{children:"DataTable"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\nvar dataTable = _sqlRepository.SqlProcedureQuery("proc_GetPersons");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar dataTable = _sqlExecuteProxy.GetPersons();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar dataTable = _personRepository.SqlProcedureQuery("proc_GetPersons");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar dataTable = _repository.Sql().SqlProcedureQuery("proc_GetPersons");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\nvar dataTable = "proc_GetPersons".SqlProcedureQuery();\n'})}),"\n",(0,n.jsx)(r.admonition,{title:"\u5173\u4e8e\u5f02\u6b65",type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"]})}),"\n",(0,n.jsxs)(r.h3,{id:"91423-\u8fd4\u56de-dataset",children:["9.14.2.3 \u8fd4\u56de ",(0,n.jsx)(r.code,{children:"DataSet"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\nvar dataSet = _sqlRepository.SqlProcedureQueries("proc_GetPersons");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar dataSet = _sqlExecuteProxy.GetPersons();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar dataSet = _personRepository.SqlProcedureQueries("proc_GetPersons");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar dataSet = _repository.Sql().SqlProcedureQueries("proc_GetPersons");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\nvar dataSet = "proc_GetPersons".SqlProcedureQueries();\n'})}),"\n",(0,n.jsx)(r.admonition,{title:"\u5173\u4e8e\u5f02\u6b65",type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"]})}),"\n",(0,n.jsxs)(r.h3,{id:"91424-\u8fd4\u56de-listt",children:["9.14.2.4 \u8fd4\u56de ",(0,n.jsx)(r.code,{children:"List<T>"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\nvar list = _sqlRepository.SqlProcedureQuery<Person>("proc_GetPersons");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar list = _sqlExecuteProxy.GetPersons();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar list = _personRepository.SqlProcedureQuery<Person>("proc_GetPersons");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar list = _repository.Sql().SqlProcedureQuery<Person>("proc_GetPersons");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\nvar list = "proc_GetPersons".SqlProcedureQuery<Person>();\n'})}),"\n",(0,n.jsx)(r.admonition,{title:"\u5173\u4e8e\u5f02\u6b65",type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"]})}),"\n",(0,n.jsxs)(r.h3,{id:"91425-\u8fd4\u56de-tuplet1t8",children:["9.14.2.5 \u8fd4\u56de ",(0,n.jsx)(r.code,{children:"Tuple<T1,...T8>"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u5927\u5927\u5229\u7528\u4e86 ",(0,n.jsx)(r.code,{children:"Tuple"})," \u7684\u7279\u6027\uff0c\u5c06\u8fd4\u56de\u591a\u4e2a\u7ed3\u679c\u96c6\u8f6c\u6210 ",(0,n.jsx)(r.code,{children:"Tuple<T1,...T8>"})," \u7c7b\u578b"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\n\n// \u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6\nvar list1 = _sqlRepository.SqlProcedureQueries<T1>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e24\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2) = _sqlRepository.SqlProcedureQueries<T1,T2>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e09\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3) = _sqlRepository.SqlProcedureQueries<T1,T2,T3>("proc_GetPersons");\n\n// \u8fd4\u56de\u56db\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4) = _sqlRepository.SqlProcedureQueries<T1,T2,T3,T4>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e94\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5) = _sqlRepository.SqlProcedureQueries<T1,T2,T3,T4,T5>("proc_GetPersons");\n\n// \u8fd4\u56de\u516d\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6) = _sqlRepository.SqlProcedureQueries<T1,T2,T3,T4,T5,T6>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e03\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7) = _sqlRepository.SqlProcedureQueries<T1,T2,T3,T4,T5,T6,T7>("proc_GetPersons");\n\n// \u8fd4\u56de\u516b\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7, list8) = _sqlRepository.SqlProcedureQueries<T1,T2,T3,T4,T5,T6,T7,T8>("proc_GetPersons");\n\n// ==================================\n\n// ISqlDispatchProxy \u65b9\u5f0f\uff0c\u63a8\u8350\u65b9\u5f0f\uff0c\u81ea\u52a8\u5904\u7406\u591a\u4e2a\u7ed3\u679c\u96c6\n\n// \u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6\nvar list1 = _sqlRepository.GetDatas();\n\n// \u8fd4\u56de\u4e24\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2) = _sqlRepository.GetDatas();\n\n// \u8fd4\u56de\u4e09\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3) = _sqlRepository.GetDatas();\n\n// \u8fd4\u56de\u56db\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4) = _sqlRepository.GetDatas();\n\n// \u8fd4\u56de\u4e94\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5) = _sqlRepository.GetDatas();\n\n// \u8fd4\u56de\u516d\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6) = _sqlRepository.GetDatas();\n\n// \u8fd4\u56de\u4e03\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7) = _sqlRepository.GetDatas();\n\n// \u8fd4\u56de\u516b\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7, list8) = _sqlRepository.GetDatas();\n\n// ==================================\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\n\n// \u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6\nvar list1 = _personRepository.SqlProcedureQueries<T1>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e24\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2) = _personRepository.SqlProcedureQueries<T1,T2>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e09\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3) = _personRepository.SqlProcedureQueries<T1,T2,T3>("proc_GetPersons");\n\n// \u8fd4\u56de\u56db\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4) = _personRepository.SqlProcedureQueries<T1,T2,T3,T4>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e94\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5) = _personRepository.SqlProcedureQueries<T1,T2,T3,T4,T5>("proc_GetPersons");\n\n// \u8fd4\u56de\u516d\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6) = _personRepository.SqlProcedureQueries<T1,T2,T3,T4,T5,T6>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e03\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7) = _personRepository.SqlProcedureQueries<T1,T2,T3,T4,T5,T6,T7>("proc_GetPersons");\n\n// \u8fd4\u56de\u516b\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7, list8) = _personRepository.SqlProcedureQueries<T1,T2,T3,T4,T5,T6,T7,T8>("proc_GetPersons");\n\n// ==================================\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\n\n// \u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6\nvar list1 = _repository.Sql().SqlProcedureQueries<T1>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e24\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2) = _repository.Sql().SqlProcedureQueries<T1,T2>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e09\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3) = _repository.Sql().SqlProcedureQueries<T1,T2,T3>("proc_GetPersons");\n\n// \u8fd4\u56de\u56db\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4) = _repository.Sql().SqlProcedureQueries<T1,T2,T3,T4>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e94\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5) = _repository.Sql().SqlProcedureQueries<T1,T2,T3,T4,T5>("proc_GetPersons");\n\n// \u8fd4\u56de\u516d\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6) = _repository.Sql().SqlProcedureQueries<T1,T2,T3,T4,T5,T6>("proc_GetPersons");\n\n// \u8fd4\u56de\u4e03\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7) = _repository.Sql().SqlProcedureQueries<T1,T2,T3,T4,T5,T6,T7>("proc_GetPersons");\n\n// \u8fd4\u56de\u516b\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7, list8) = _repository.Sql().SqlProcedureQueries<T1,T2,T3,T4,T5,T6,T7,T8>("proc_GetPersons");\n\n// ==================================\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\n\n// \u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6\nvar list1 = "proc_GetPersons".SqlProcedureQueries<T1>();\n\n// \u8fd4\u56de\u4e24\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2) = "proc_GetPersons".SqlProcedureQueries<T1,T2>();\n\n// \u8fd4\u56de\u4e09\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3) = "proc_GetPersons".SqlProcedureQueries<T1,T2,T3>();\n\n// \u8fd4\u56de\u56db\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4) = "proc_GetPersons".SqlProcedureQueries<T1,T2,T3,T4>();\n\n// \u8fd4\u56de\u4e94\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5) = "proc_GetPersons".SqlProcedureQueries<T1,T2,T3,T4,T5>();\n\n// \u8fd4\u56de\u516d\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6) = "proc_GetPersons".SqlProcedureQueries<T1,T2,T3,T4,T5,T6>();\n\n// \u8fd4\u56de\u4e03\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7) = "proc_GetPersons".SqlProcedureQueries<T1,T2,T3,T4,T5,T6,T7>();\n\n// \u8fd4\u56de\u516b\u4e2a\u7ed3\u679c\u96c6\nvar (list1, list2, list3, list4, list5, list6, list7, list8) = "proc_GetPersons".SqlProcedureQueries<T1,T2,T3,T4,T5,T6,T7,T8>();\n'})}),"\n",(0,n.jsx)(r.admonition,{title:"\u5173\u4e8e\u5f02\u6b65",type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"]})}),"\n",(0,n.jsxs)(r.h3,{id:"91426-\u8fd4\u56de-\u5355\u884c\u5355\u5217-object",children:["9.14.2.6 \u8fd4\u56de ",(0,n.jsx)(r.code,{children:"\u5355\u884c\u5355\u5217 object"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlProcedureScalar("proc_GetName");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetName();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlProcedureScalar("proc_GetName");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlProcedureScalar("proc_GetName");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\nvar value = "proc_GetName".SqlProcedureScalar();\n'})}),"\n",(0,n.jsx)(r.admonition,{title:"\u5173\u4e8e\u5f02\u6b65",type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"]})}),"\n",(0,n.jsxs)(r.h3,{id:"91427-\u8fd4\u56de-\u5355\u884c\u5355\u5217-t",children:["9.14.2.7 \u8fd4\u56de ",(0,n.jsx)(r.code,{children:"\u5355\u884c\u5355\u5217 <T>"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlProcedureScalar<string>("proc_GetName");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetName();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlProcedureScalar<string>("proc_GetName");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlProcedureScalar<string>("proc_GetName");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\nvar value = "proc_GetName".SqlProcedureScalar<string>();\n'})}),"\n",(0,n.jsx)(r.admonition,{title:"\u5173\u4e8e\u5f02\u6b65",type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"]})}),"\n",(0,n.jsx)(r.h3,{id:"91428-\u6267\u884c\u4f46\u65e0\u8fd4\u56de",children:"9.14.2.8 \u6267\u884c\u4f46\u65e0\u8fd4\u56de"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\n_sqlRepository.SqlProcedureNonQuery("proc_UpdateData");\n\n// ISqlDispatchProxy \u65b9\u5f0f\n_sqlExecuteProxy.UpdateData();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\n_personRepository.SqlProcedureNonQuery("proc_UpdateData");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\n_repository.Sql().SqlProcedureNonQuery("proc_UpdateData");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\n"proc_UpdateData".SqlProcedureNonQuery();\n'})}),"\n",(0,n.jsx)(r.admonition,{title:"\u5173\u4e8e\u5f02\u6b65",type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"]})}),"\n",(0,n.jsx)(r.h2,{id:"9143-\u6267\u884c\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b",children:"9.14.3 \u6267\u884c\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,n.jsxs)(r.p,{children:["\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\uff0c\u6709\u4e00\u79cd\u4f8b\u5b50\u975e\u5e38\u590d\u6742\uff0c\u90a3\u5c31\u662f\u65e2\u6709 ",(0,n.jsx)(r.code,{children:"INPUT"})," \u53c2\u6570\uff0c\u53c8\u6709 ",(0,n.jsx)(r.code,{children:"OUTPUT"})," \u53c2\u6570\uff0c\u8fd8\u6709 ",(0,n.jsx)(r.code,{children:"RETURN"})," \u53c2\u6570\uff0c\u540c\u65f6\u8fd8\u8f93\u51fa \u7ed3\u679c\u96c6 \ud83d\udca5\uff0c\u5982\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",metastring:"showLineNumbers  {3,4,10-12,15-17,22}",children:"CREATE PROC PROC_Output\n    @Id INT,    // \u8f93\u5165\u53c2\u6570\n    @Name NVARCHAR(32) OUTPUT,  // \u8f93\u51fa\u53c2\u6570\uff0c\u8fd8\u5e26\u957f\u5ea6\n    @Age INT OUTPUT // \u8f93\u51fa\u53c2\u6570\nAS\nBEGIN\n    SET @Name = 'Furion Output';\n\n    // \u8f93\u51fa\u7ed3\u679c\u96c6\n    SELECT *\n    FROM dbo.Test\n    WHERE Id > @Id;\n\n    // \u8f93\u51fa\u7ed3\u679c\u96c6\n    SELECT TOP 10\n           *\n    FROM dbo.Test;\n\n    SET @Age = 27;\n\n    // \u5e26 RETURN \u8fd4\u56de\n    RETURN 10;\nEND;\n"})}),"\n",(0,n.jsx)(r.h3,{id:"91431-\u521b\u5efa\u53c2\u6570\u6a21\u578b",children:"9.14.3.1 \u521b\u5efa\u53c2\u6570\u6a21\u578b"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers  {1,10,13,16}",children:"using Furion.DatabaseAccessor;\nusing System.Data;\n\nnamespace Furion.Application\n{\n    public class ProcOutputModel\n    {\n        public int Id { get; set; } // \u8f93\u5165\u53c2\u6570\n\n        [DbParameter(ParameterDirection.Output, Size = 32)]\n        public string Name { get; set; }    // \u8f93\u51fa\u53c2\u6570\n\n        [DbParameter(ParameterDirection.Output)]\n        public int Age { get; set; }    // \u8f93\u51fa\u53c2\u6570\n\n        [DbParameter(ParameterDirection.ReturnValue)]\n        public int ReturnValue { get; set; }    // \u8fd4\u56de\u503c\n    }\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"91432-\u6267\u884c\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b",children:"9.14.3.2 \u6267\u884c\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["** ",(0,n.jsx)(r.code,{children:"DataSet"})," ** \u65b9\u5f0f"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\nProcedureOutputResult result = _sqlRepository.SqlProcedureOutput("proc_Complex", new ProcOutputModel{});\n\n// ISqlDispatchProxy \u65b9\u5f0f\nProcedureOutputResult result = _sqlExecuteProxy.Complex(new ProcOutputModel{});  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nProcedureOutputResult result = _personRepository.SqlProcedureOutput("proc_Complex", new ProcOutputModel{});\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nProcedureOutputResult result = _repository.Sql().SqlProcedureOutput("proc_Complex", new ProcOutputModel{});\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\nProcedureOutputResult result = "proc_Complex".SqlProcedureOutput(new ProcOutputModel{});\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u83b7\u53d6 OUTPUT \u53c2\u6570\u503c\nvar outputs = result.OutputValues;\n\n// \u83b7\u53d6 RETURN \u8fd4\u56de\u503c\nvar reval = result.ReturnValue;\n\n// \u83b7\u53d6\u8fd4\u56de\u7ed3\u679c\u96c6\nvar dataSet = result.Result;\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Tuple<T1,...T8>"})," \u65b9\u5f0f"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:'// ISqlRepository \u65b9\u6cd5\nProcedureOutputResult<(List<Test>, List<Test>)> result = _sqlRepository.SqlProcedureOutput<(List<Test>, List<Test>)>("proc_Complex", new ProcOutputModel{});\n\n// ISqlDispatchProxy \u65b9\u5f0f\nProcedureOutputResult<(List<Test>, List<Test>)> result = _sqlExecuteProxy.Complex(new ProcOutputModel{});  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nProcedureOutputResult<(List<Test>, List<Test>)> result = _personRepository.SqlProcedureOutput<(List<Test>, List<Test>)>("proc_Complex", new ProcOutputModel{});\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nProcedureOutputResult<(List<Test>, List<Test>)> result = _repository.Sql().SqlProcedureOutput<(List<Test>, List<Test>)>("proc_Complex", new ProcOutputModel{});\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u5b58\u50a8\u8fc7\u7a0b\u540d\u6267\u884c\nProcedureOutputResult<(List<Test>, List<Test>)> result = "proc_Complex".SqlProcedureOutput<(List<Test>, List<Test>)>(new ProcOutputModel{});\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u83b7\u53d6 OUTPUT \u53c2\u6570\u503c\nvar outputs = result.OutputValues;\n\n// \u83b7\u53d6 RETURN \u8fd4\u56de\u503c\nvar reval = result.ReturnValue;\n\n// \u83b7\u53d6\u8fd4\u56de\u7ed3\u679c\u96c6\nvar (list1,list2) = result.Result;\n"})}),"\n",(0,n.jsx)(r.admonition,{title:"\u5173\u4e8e\u5f02\u6b65",type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Furion"})," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"]})}),"\n",(0,n.jsxs)(r.h2,{id:"9143-\u5173\u4e8e-dbparameter",children:["9.14.3 \u5173\u4e8e ",(0,n.jsx)(r.code,{children:"[DbParameter]"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"[DbParameter]"})," \u7279\u6027\u662f\u7528\u6765\u6807\u6ce8 ",(0,n.jsx)(r.code,{children:"Sql"}),"\uff0c",(0,n.jsx)(r.code,{children:"\u51fd\u6570"}),"\uff0c",(0,n.jsx)(r.code,{children:"\u5b58\u50a8\u8fc7\u7a0b"})," \u53c2\u6570\u7684\uff0c\u53ef\u914d\u7f6e\u5c5e\u6027\uff1a"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Direction"}),"\uff1a\u8bbe\u7f6e\u53c2\u6570\u65b9\u5411\uff0c",(0,n.jsx)(r.code,{children:"ParameterDirection"})," \u679a\u4e3e\u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,n.jsx)(r.code,{children:"ParameterDirection.Input"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"DbType"}),"\uff1a\u8bbe\u7f6e\u53c2\u6570\u7c7b\u578b\uff0c",(0,n.jsx)(r.code,{children:"DbType"})," \u679a\u4e3e\u7c7b\u578b\uff0c\u65e0\u9ed8\u8ba4"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Size"}),"\uff1a\u8bbe\u7f6e\u53c2\u6570\u957f\u5ea6\u7684\uff0c",(0,n.jsx)(r.code,{children:"int"})," \u7c7b\u578b"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5176\u4e2d ",(0,n.jsx)(r.code,{children:"Direction"})," \u5c5e\u6027\u662f\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\u53c2\u6570\u3002"]}),"\n",(0,n.jsxs)(r.h2,{id:"9144-\u5173\u4e8e-procedureoutputresult",children:["9.14.4 \u5173\u4e8e ",(0,n.jsx)(r.code,{children:"ProcedureOutputResult"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"ProcedureOutputResult"})," \u548c ",(0,n.jsx)(r.code,{children:"ProcedureOutputResult<TResult>"})," \u662f\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b\u6267\u884c\u8fd4\u56de\u6a21\u578b\u7c7b\uff0c\u6709\u4ee5\u4e0b\u5c5e\u6027\uff1a"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"OutputValues"}),"\uff1a\u591a\u4e2a\u8f93\u51fa\u503c\uff0c",(0,n.jsx)(r.code,{children:"ProcedureOutputValue"})," \u7c7b\u578b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ReturnValue"}),"\uff1a\u8fd4\u56de\u503c\uff0c",(0,n.jsx)(r.code,{children:"object"})," \u7c7b\u578b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Result"}),"\uff1a\u7ed3\u679c\u96c6\uff0c\u975e\u6cdb\u578b\u7248\u672c\u662f ",(0,n.jsx)(r.code,{children:"DataSet"}),"\u7c7b\u578b\uff0c\u5426\u5219\u662f \u6cdb\u578b\u7c7b\u578b"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"9145-\u5b58\u50a8\u8fc7\u7a0b\u53c2\u6570",children:"9.14.5 \u5b58\u50a8\u8fc7\u7a0b\u53c2\u6570"}),"\n",(0,n.jsxs)(r.p,{children:["\u6240\u6709 ",(0,n.jsx)(r.code,{children:"sql"})," \u53c2\u6570\u90fd\u652f\u6301\u56db\u79cd\u65b9\u5f0f\uff1a"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"DbParameter[]"}),"\uff1a\u6570\u7ec4\u7c7b\u578b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"new {}"}),"\uff1a\u533f\u540d\u7c7b\u578b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"new Class{}"}),"\uff1a\u5f3a\u7c7b\u578b\u7c7b\u578b\uff08\u652f\u6301\u590d\u6742\u5b58\u50a8\u8fc7\u7a0b\u53c2\u6570\uff09"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Dictionary<string,object>"})," \u7c7b\u578b"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"9146-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.14.6 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,n.jsx)(r.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,n.jsxs)(r.p,{children:["\u7ed9 Furion \u63d0 ",(0,n.jsx)(r.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5162:(e,r,s)=>{s.d(r,{Z:()=>i});s(7294);var n=s(4334);const t={tabItem:"tabItem_Ymn6"};var l=s(5893);function i(e){let{children:r,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(t.tabItem,i),hidden:s,children:r})}},4866:(e,r,s)=>{s.d(r,{Z:()=>S});var n=s(7294),t=s(4334),l=s(2466),i=s(6550),o=s(469),c=s(1980),a=s(7392),u=s(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:s}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:s,attributes:n,default:t}}=e;return{value:r,label:s,attributes:n,default:t}}))}(s);return function(e){const r=(0,a.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function h(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:s}=e;const t=(0,i.k6)(),l=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,c._X)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})}),[l,t])]}function T(e){const{defaultValue:r,queryString:s=!1,groupId:t}=e,l=p(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[a,d]=x({queryString:s,groupId:t}),[T,j]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,l]=(0,u.Nk)(s);return[t,(0,n.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),P=(()=>{const e=a??T;return h({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{P&&c(P)}),[P]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,l]),tabValues:l}}var j=s(2389);const P={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var q=s(5893);function v(e){let{className:r,block:s,selectedValue:n,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.o5)(),u=e=>{const r=e.currentTarget,s=c.indexOf(r),t=o[s].value;t!==n&&(a(r),i(t))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;r=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;r=c[s]??c[c.length-1];break}}r?.focus()};return(0,q.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},r),children:o.map((e=>{let{value:r,label:s,attributes:l}=e;return(0,q.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,t.Z)("tabs__item",P.tabItem,l?.className,{"tabs__item--active":n===r}),children:s??r},r)}))})}function m(e){let{lazy:r,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,q.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function y(e){const r=T(e);return(0,q.jsxs)("div",{className:(0,t.Z)("tabs-container",P.tabList),children:[(0,q.jsx)(v,{...e,...r}),(0,q.jsx)(m,{...e,...r})]})}function S(e){const r=(0,j.Z)();return(0,q.jsx)(y,{...e,children:d(e.children)},String(r))}},1151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>i});var n=s(7294);const t={},l=n.createContext(t);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);