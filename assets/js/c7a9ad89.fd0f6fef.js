"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9706],{5423:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=r(5893),t=r(1151);r(4996),r(4866),r(5162);const s={id:"dbcontext-multi-database",title:"9.19 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",sidebar_label:"9.19 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c \u2728"},i=void 0,l={id:"dbcontext-multi-database",title:"9.19 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",description:"\u5982\u679c\u8fde\u63a5\u5b57\u7b26\u4e32\u662f\u914d\u7f6e\u5728\u81ea\u5b9a\u4e49\u7684 .json \u6587\u4ef6\u4e2d\uff0c\u90a3\u4e48\u5fc5\u987b\u5728 Visual Studio \u4e2d\u914d\u7f6e .json \u53f3\u952e\u5c5e\u6027\uff0c\u8bbe\u7f6e \u590d\u5236 \u8f93\u51fa\u76ee\u5f55\u4e3a \u5982\u679c\u8f83\u65b0\u5219\u590d\u5236\uff0c\u751f\u6210\u64cd\u4f5c\u4e3a \u5185\u5bb9\u3002",source:"@site/docs/dbcontext-multi-database.mdx",sourceDirName:".",slug:"/dbcontext-multi-database",permalink:"/docs/dbcontext-multi-database",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/dbcontext-multi-database.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701075976,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"dbcontext-multi-database",title:"9.19 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",sidebar_label:"9.19 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c \u2728"},sidebar:"docs",previous:{title:"9.18 Sql \u9ad8\u7ea7\u4ee3\u7406",permalink:"/docs/dbcontext-sql-proxy"},next:{title:"9.20 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b (Db First)",permalink:"/docs/dbcontext-db-first"}},c={},d=[{value:"9.19.1 <code>Furion</code> \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",id:"9191-furion-\u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",level:2},{value:"9.19.1.1 \u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",id:"91911-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",level:3},{value:"9.19.2 \u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",id:"9192-\u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",level:2},{value:"9.19.3 \u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b",id:"9193-\u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b",level:2},{value:"9.19.4 \u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",id:"9194-\u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"9.19.4.1 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",id:"91941-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.19.4.2 \u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",id:"91942-\u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.19.4.3 <code>Sql</code> \u4ed3\u50a8\u65b9\u5f0f",id:"91943-sql-\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.19.4.4 \u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",id:"91944-\u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",level:3},{value:"9.19.4.5 Linq \u51fd\u6570\u65b9\u5f0f",id:"91945-linq-\u51fd\u6570\u65b9\u5f0f",level:3},{value:"9.19.5 <code>SqlServer</code> \u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e",id:"9195-sqlserver-\u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e",level:2},{value:"9.19.6 <code>MySql</code> \u65f6\u533a\u95ee\u9898/\u5c11 8 \u5c0f\u65f6\u95ee\u9898",id:"9196-mysql-\u65f6\u533a\u95ee\u9898\u5c11-8-\u5c0f\u65f6\u95ee\u9898",level:2},{value:"9.19.7 <code>snake_case</code> \u98ce\u683c\u8868\u540d\u548c\u5b57\u6bb5",id:"9197-snake_case-\u98ce\u683c\u8868\u540d\u548c\u5b57\u6bb5",level:2},{value:"9.19.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9198-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.admonition,{title:"\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u6ce8\u610f\u4e8b\u9879",type:"warning",children:[(0,o.jsxs)(n.p,{children:["\u5982\u679c\u8fde\u63a5\u5b57\u7b26\u4e32\u662f\u914d\u7f6e\u5728\u81ea\u5b9a\u4e49\u7684 ",(0,o.jsx)(n.code,{children:".json"})," \u6587\u4ef6\u4e2d\uff0c\u90a3\u4e48\u5fc5\u987b\u5728 ",(0,o.jsx)(n.code,{children:"Visual Studio"})," \u4e2d\u914d\u7f6e ",(0,o.jsx)(n.code,{children:".json"})," \u53f3\u952e\u5c5e\u6027\uff0c\u8bbe\u7f6e ",(0,o.jsx)(n.code,{children:"\u590d\u5236"})," \u8f93\u51fa\u76ee\u5f55\u4e3a ",(0,o.jsx)(n.code,{children:"\u5982\u679c\u8f83\u65b0\u5219\u590d\u5236"}),"\uff0c\u751f\u6210\u64cd\u4f5c\u4e3a ",(0,o.jsx)(n.code,{children:"\u5185\u5bb9"}),"\u3002"]}),(0,o.jsx)(n.p,{children:"\u5426\u5219\u5c31\u4f1a\u63d0\u793a\u627e\u4e0d\u5230\u914d\u7f6e\u6216\u8fde\u63a5\u5b57\u7b26\u4e32\u7684\u9519\u8bef\u3002"})]}),"\n",(0,o.jsxs)(n.h2,{id:"9191-furion-\u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",children:["9.19.1 ",(0,o.jsx)(n.code,{children:"Furion"})," \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"SqlServer"}),(0,o.jsx)(n.th,{children:"Sqlite"}),(0,o.jsx)(n.th,{children:"Cosmos"}),(0,o.jsx)(n.th,{children:"InMemoryDatabase"}),(0,o.jsx)(n.th,{children:"MySql"}),(0,o.jsx)(n.th,{children:"PostgreSQL"}),(0,o.jsx)(n.th,{children:"Oracle"}),(0,o.jsx)(n.th,{children:"Firebird"}),(0,o.jsx)(n.th,{children:"Dm"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u2714"}),(0,o.jsx)(n.td,{children:"\u2714"}),(0,o.jsx)(n.td,{children:"\u2714"}),(0,o.jsx)(n.td,{children:"\u2714"}),(0,o.jsx)(n.td,{children:"\u2714"}),(0,o.jsx)(n.td,{children:"\u2714"}),(0,o.jsx)(n.td,{children:"\u2714"}),(0,o.jsx)(n.td,{children:"\u2714"}),(0,o.jsx)(n.td,{children:"\u2714"})]})})]}),"\n",(0,o.jsx)(n.h3,{id:"91911-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",children:"9.19.1.1 \u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SqlServer"}),"\uff1a",(0,o.jsx)(n.code,{children:"Microsoft.EntityFrameworkCore.SqlServer"})," (\u652f\u6301 SqlServer 2005 +)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Sqlite"}),"\uff1a",(0,o.jsx)(n.code,{children:"Microsoft.EntityFrameworkCore.Sqlite"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Cosmos"}),"\uff1a",(0,o.jsx)(n.code,{children:"Microsoft.EntityFrameworkCore.Cosmos"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"InMemoryDatabase"}),"\uff1a",(0,o.jsx)(n.code,{children:"Microsoft.EntityFrameworkCore.InMemory"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MySql"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Pomelo.EntityFrameworkCore.MySql"}),"\uff1a(\u652f\u6301 MySql 5.x +)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MySql.EntityFrameworkCore"}),"\uff1a\u652f\u6301 (MySql 8.x +)"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PostgreSQL"}),"\uff1a",(0,o.jsx)(n.code,{children:"Npgsql.EntityFrameworkCore.PostgreSQL"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Oracle"}),"\uff1a",(0,o.jsx)(n.code,{children:"Oracle.EntityFrameworkCore"})," \uff08\u652f\u6301 Oracle 10 +\uff09"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Firebird"}),"\uff1a",(0,o.jsx)(n.code,{children:"FirebirdSql.EntityFrameworkCore.Firebird"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Dm"}),"\uff1a",(0,o.jsx)(n.code,{children:"Microsoft.EntityFrameworkCore.Dm"})]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"tip",children:(0,o.jsxs)(n.p,{children:["\u8fd9\u4e9b\u6570\u636e\u5e93\u5305\u5e94\u8be5\u5b89\u88c5\u5728 ",(0,o.jsx)(n.code,{children:"Furion.EntityFramework.Core"})," \u5c42\u3002\u7279\u6b8a\u60c5\u51b5\u9700\u5b89\u88c5\u5728 ",(0,o.jsx)(n.code,{children:"Furion.Core"})," \u5c42\u4e2d\uff0c\u5982 ",(0,o.jsx)(n.code,{children:"Mysql"})," ",(0,o.jsx)(n.code,{children:"HasCharset()"})," \u914d\u7f6e\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"9192-\u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",children:"9.19.2 \u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u6ce8\u518c SqlServer\noptions.AddDbPool<FurionDbContext>(DbProvider.SqlServer);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2005"); // \u652f\u6301 2005 \u6570\u636e\u5e93\noptions.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2008"); // \u652f\u6301 2008 \u6570\u636e\u5e93\n\n// \u6ce8\u518c Sqlite\noptions.AddDbPool<FurionDbContext>(DbProvider.Sqlite);\n\n// \u6ce8\u518c Cosmos\noptions.AddDbPool<FurionDbContext>(DbProvider.Cosmos);\n\n// \u6ce8\u518c InMemoryDatabase\noptions.AddDbPool<FurionDbContext>(DbProvider.InMemoryDatabase);\n\n// \u6ce8\u518c MySql\noptions.AddDbPool<FurionDbContext>(DbProvider.MySql);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.MySql}@8.0.22");  // \u53ef\u4ee5\u6307\u5b9a\u7248\u672c\u53f7\noptions.AddDbPool<FurionDbContext>(DbProvider.MySqlOfficial);   // \u4f7f\u7528 MySql \u5b98\u65b9\u5305\uff08MySql.EntityFrameworkCore\uff09\n\n// \u6ce8\u518c PostgreSQL\noptions.AddDbPool<FurionDbContext>(DbProvider.Npgsql);\n\n// \u6ce8\u518c Oracle\noptions.AddDbPool<FurionDbContext>(DbProvider.Oracle);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.Oracle}@11");  // \u652f\u6301 Oracle 11 \u7248\u672c\n\n// \u6ce8\u518c Firebird\noptions.AddDbPool<FurionDbContext>(DbProvider.Firebird);\n\n// \u6ce8\u518c Dm\noptions.AddDbPool<FurionDbContext>(DbProvider.Dm);\n'})}),"\n",(0,o.jsxs)(n.admonition,{title:"\u65b0\u7248 SqlServer/MySQL/Oracle \u6ce8\u610f",type:"caution",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"SqlServer"})," \u517c\u5bb9 ",(0,o.jsx)(n.code,{children:"2005-2008"})," \u5199\u6cd5\uff1a"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2005"); // \u652f\u6301 2005 \u6570\u636e\u5e93\n    options.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2008"); // \u652f\u6301 2008 \u6570\u636e\u5e93\n});\n'})}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MySQL"})," \u517c\u5bb9\u65e7\u7248\u672c\uff08\u5e26\u7248\u672c\u53f7\uff09\u5199\u6cd5\uff1a"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.MySql}@8.0.22");\n});\n'})}),(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528\u4e86 ",(0,o.jsx)(n.code,{children:"MySql.EntityFrameworkCore"})," \u5305\uff0c\u5219\u9700\u6539\u4e3a\u4ee5\u4e0b\u6ce8\u518c\uff1a"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>(DbProvider.MySqlOfficial);\n});\n"})}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Oracle"})," \u517c\u5bb9 ",(0,o.jsx)(n.code,{children:"11"})," \u7248\u672c"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {3-4,6-10}",children:'services.AddDatabaseAccessor(options =>\n{\n    // \u6b63\u5e38\u8fd9\u6837\u914d\u7f6e\u5373\u53ef\n    options.AddDbPool<FurionDbContext>($"{DbProvider.Oracle}@11");\n\n    // \u5982\u679c\u4f9d\u7136\u51fa\u73b0 ORA-00933: SQL \u9519\u8bef\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4ee5\u4e0b\u914d\u7f6e\uff1a\n    options.AddDbPool<FurionDbContext>($"{DbProvider.Oracle}@11", optionBuilder: (ses, opt) =>\n    {\n        opt.UseOracle(b => b.UseOracleSQLCompatibility("11"));\n    });\n});\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"9193-\u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b",children:"9.19.3 \u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Sqlite"}),"\uff1a",(0,o.jsx)(n.code,{children:"Data Source=./Furion.db"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"MySql"}),"\uff1a",(0,o.jsx)(n.code,{children:"Data Source=localhost;Database=Furion;User ID=root;Password=000000;pooling=true;port=3306;sslmode=none;CharSet=utf8;"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SqlServer"}),"\uff1a",(0,o.jsx)(n.code,{children:"Server=localhost;Database=Furion;User=sa;Password=000000;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=True;"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Oracle"}),"\uff1a",(0,o.jsx)(n.code,{children:"User Id=orcl;Password=orcl;Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=orcl)))"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PostgreSQL"}),"\uff1a",(0,o.jsx)(n.code,{children:"PORT=5432;DATABASE=postgres;HOST=127.0.0.1;PASSWORD=postgres;USER ID=postgres;"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"9194-\u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",children:"9.19.4 \u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Furion"})," \u901a\u8fc7\u72ec\u521b\u7684 ",(0,o.jsx)(n.code,{children:"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668"})," \u5b9e\u73b0\u591a\u6570\u636e\u5e93\u7075\u6d3b\u64cd\u4f5c\u5207\u6362\u3002\u53ea\u9700\u8981\u4e3a\u6bcf\u4e00\u79cd\u6570\u636e\u5e93\u7ed1\u5b9a\u552f\u4e00\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u5373\u53ef\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f ",(0,o.jsx)(n.code,{children:"Furion"})," \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5b9e\u4f8b\uff1a"]}),"\n",(0,o.jsx)(n.h3,{id:"91941-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",children:"9.19.4.1 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = personRepository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = personRepository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = personRepository.Change<Person, SqliteDbContextLocator>();\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"91942-\u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",children:"9.19.4.2 \u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = repository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = repository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = repository.Change<Person, SqliteDbContextLocator>();\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"91943-sql-\u4ed3\u50a8\u65b9\u5f0f",children:["9.19.4.3 ",(0,o.jsx)(n.code,{children:"Sql"})," \u4ed3\u50a8\u65b9\u5f0f"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = sqlRepository.Change<MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = sqlRepository.Change<MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = sqlRepository.Change<SqliteDbContextLocator>();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"91944-\u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",children:"9.19.4.4 \u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"\n// \u652f\u6301\u4e00\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator>\n{\n    // ....\n}\n\n// \u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator, SqliteDbContextLocator>\n{\n    // ....\n}\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"tip",children:(0,o.jsxs)(n.p,{children:["\u6240\u6709\u7684 ",(0,o.jsx)(n.code,{children:"\u5b9e\u4f53\u4f9d\u8d56\u63a5\u53e3\u6216\u62bd\u8c61\u7c7b"})," \u90fd\u652f\u6301\u6cdb\u578b\u65b9\u5f0f \u6307\u5b9a \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff0c\u6700\u591a\u652f\u6301 ",(0,o.jsx)(n.code,{children:"8"})," \u4e2a\u3002"]})}),"\n",(0,o.jsx)(n.h3,{id:"91945-linq-\u51fd\u6570\u65b9\u5f0f",children:"9.19.4.5 Linq \u51fd\u6570\u65b9\u5f0f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'public static class QueryFunctions\n{\n    [QueryableFunction("FN_GetId", "dbo", typeof(MySqlDbContextLocator), typeof(SqliteDbContextLocator))]\n    public static int GetId(int id) => throw new NotSupportedException();\n}\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"9195-sqlserver-\u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e",children:["9.19.5 ",(0,o.jsx)(n.code,{children:"SqlServer"})," \u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u8981\u5728\u6ce8\u518c\u7684\u65f6\u5019\u6307\u5b9a ",(0,o.jsx)(n.code,{children:"@2008"})," \u6570\u636e\u5e93\u5373\u53ef\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5728 ",(0,o.jsx)(n.code,{children:"DbContext"})," \u7684 ",(0,o.jsx)(n.code,{children:"OnConfigure"})," \u4e2d\u914d\u7f6e\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {4}",children:"protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n{\n    optionsBuilder.UseSqlServer(DbProvider.GetConnectionString<TDbContext>())\n                  .ReplaceService<IQueryTranslationPostprocessorFactory, SqlServer2008QueryTranslationPostprocessorFactory>();\n    base.OnConfiguring(optionsBuilder);\n}\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"DbProvider.GetConnectionString<TDbContext>()"})," \u662f\u83b7\u53d6\u5bf9\u5e94\u4e0a\u4e0b\u6587\u914d\u7f6e\u7684\u6570\u636e\u5e93\u94fe\u63a5\u5b57\u7b26\u4e32\u3002"]})}),"\n",(0,o.jsxs)(n.h2,{id:"9196-mysql-\u65f6\u533a\u95ee\u9898\u5c11-8-\u5c0f\u65f6\u95ee\u9898",children:["9.19.6 ",(0,o.jsx)(n.code,{children:"MySql"})," \u65f6\u533a\u95ee\u9898/\u5c11 8 \u5c0f\u65f6\u95ee\u9898"]}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u67e5\u9605\u76f8\u5173 ",(0,o.jsx)(n.code,{children:"Issue"}),"\uff1a",(0,o.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/I3RSCO",children:"https://gitee.com/dotnetchina/Furion/issues/I3RSCO"})]}),"\n",(0,o.jsxs)(n.h2,{id:"9197-snake_case-\u98ce\u683c\u8868\u540d\u548c\u5b57\u6bb5",children:["9.19.7 ",(0,o.jsx)(n.code,{children:"snake_case"})," \u98ce\u683c\u8868\u540d\u548c\u5b57\u6bb5"]}),"\n",(0,o.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,o.jsx)(n.code,{children:"EFCore"})," \u5c06\u4f7f\u7528\u548c\u6a21\u578b\u5b9a\u4e49\u4e00\u81f4\u7684\u65b9\u5f0f\u5b9a\u4e49\u8868\u548c\u5b57\u6bb5\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(n.a,{href:"https://github.com/efcore/EFCore.NamingConventions",children:"https://github.com/efcore/EFCore.NamingConventions"})," \u62d3\u5c55\u63d2\u4ef6\u6539\u53d8\u6b64\u884c\u4e3a\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers {2}",children:" builder.UseNpgsql()\n        .UseLowerCaseNamingConvention();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5176\u4ed6\u8d44\u6599\uff1a",(0,o.jsx)(n.a,{href:"https://www.npgsql.org/efcore/modeling/table-column-naming.html",children:"https://www.npgsql.org/efcore/modeling/table-column-naming.html"})]}),"\n",(0,o.jsx)(n.h2,{id:"9198-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.19.8 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,o.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,o.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,o.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var o=r(4334);const t={tabItem:"tabItem_Ymn6"};var s=r(5893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(t.tabItem,i),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>g});var o=r(7294),t=r(4334),s=r(2466),i=r(6550),l=r(469),c=r(1980),d=r(7392),a=r(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:o,default:t}}=e;return{value:n,label:r,attributes:o,default:t}}))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=h(e),[i,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[d,u]=b({queryString:r,groupId:t}),[p,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,a.Nk)(r);return[t,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),m=(()=>{const e=d??p;return x({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=r(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function S(e){let{className:n,block:r,selectedValue:o,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),a=e=>{const n=e.currentTarget,r=c.indexOf(n),t=l[r].value;t!==o&&(d(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:u,onClick:a,...s,className:(0,t.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":o===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function D(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,t.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(S,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function g(e){const n=(0,j.Z)();return(0,v.jsx)(D,{...e,children:u(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var o=r(7294);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);