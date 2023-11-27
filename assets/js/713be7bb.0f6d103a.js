"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6696],{5622:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var s=r(5893),t=r(1151),i=(r(4996),r(4866)),a=r(5162);const l={id:"dbcontext-hight-query",title:"9.12 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.12 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c"},o=void 0,u={id:"dbcontext-hight-query",title:"9.12 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",description:"9.12.1 \u5173\u8054\u6570\u636e\u6a21\u578b",source:"@site/docs/dbcontext-high-query.mdx",sourceDirName:".",slug:"/dbcontext-hight-query",permalink:"/furion-doc/docs/dbcontext-hight-query",draft:!1,unlisted:!1,editUrl:"https://github.com/IcedMango/Furion/tree/v4/handbook/docs/dbcontext-high-query.mdx",tags:[],version:"current",lastUpdatedBy:"IcedMango",lastUpdatedAt:1701077150,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"dbcontext-hight-query",title:"9.12 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.12 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.11 \u67e5\u8be2\u64cd\u4f5c",permalink:"/furion-doc/docs/dbcontext-query"},next:{title:"9.13 \u89c6\u56fe\u64cd\u4f5c",permalink:"/furion-doc/docs/dbcontext-view"}},d={},c=[{value:"9.12.1 \u5173\u8054\u6570\u636e\u6a21\u578b",id:"9121-\u5173\u8054\u6570\u636e\u6a21\u578b",level:2},{value:"9.12.2 \u4e00\u5bf9\u4e00\u67e5\u8be2",id:"9122-\u4e00\u5bf9\u4e00\u67e5\u8be2",level:2},{value:"9.12.3 \u4e00\u5bf9\u591a\u67e5\u8be2",id:"9123-\u4e00\u5bf9\u591a\u67e5\u8be2",level:2},{value:"9.12.4 \u591a\u5bf9\u591a\u67e5\u8be2",id:"9124-\u591a\u5bf9\u591a\u67e5\u8be2",level:2},{value:"9.12.5 \u8054\u8868\u67e5\u8be2",id:"9125-\u8054\u8868\u67e5\u8be2",level:2},{value:"9.12.5.1 \u5185\u8fde\u63a5 <code>Inner Join</code>",id:"91251-\u5185\u8fde\u63a5-inner-join",level:3},{value:"9.12.5.2 \u5de6\u8fde\u63a5 <code>Left Join</code>",id:"91252-\u5de6\u8fde\u63a5-left-join",level:3},{value:"9.12.5.3 \u53f3\u8fde\u63a5 <code>Right Join</code>",id:"91253-\u53f3\u8fde\u63a5-right-join",level:3},{value:"9.12.6 \u5206\u7ec4\u67e5\u8be2",id:"9126-\u5206\u7ec4\u67e5\u8be2",level:2},{value:"9.12.7 \u5408\u5e76\u7ed3\u679c\u96c6",id:"9127-\u5408\u5e76\u7ed3\u679c\u96c6",level:2},{value:"9.12.8 \u67e5\u8be2\u6392\u5e8f",id:"9128-\u67e5\u8be2\u6392\u5e8f",level:2},{value:"9.12.8.1 \u6b63\u5e8f",id:"91281-\u6b63\u5e8f",level:3},{value:"9.12.8.2 \u5012\u5e8f",id:"91282-\u5012\u5e8f",level:3},{value:"9.12.8.3 \u6df7\u5408\u5012\u5e8f",id:"91283-\u6df7\u5408\u5012\u5e8f",level:3},{value:"9.12.9 \u9012\u5f52\u67e5\u8be2",id:"9129-\u9012\u5f52\u67e5\u8be2",level:2},{value:"9.12.10 \u52a8\u6001 <code>Sql</code> \u67e5\u8be2",id:"91210-\u52a8\u6001-sql-\u67e5\u8be2",level:2},{value:"9.12.10.1 \u52a8\u6001 <code>Sql</code>",id:"912101-\u52a8\u6001-sql",level:3},{value:"9.12.10.2 \u52a8\u6001 <code>Lambda</code>",id:"912102-\u52a8\u6001-lambda",level:3},{value:"9.12.11 \u65f6\u6001\u67e5\u8be2",id:"91211-\u65f6\u6001\u67e5\u8be2",level:2},{value:"9.12.12 \u6027\u80fd\u4f18\u5316",id:"91212-\u6027\u80fd\u4f18\u5316",level:2},{value:"9.12.13 \u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",id:"91213-\u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",level:2},{value:"9.12.14 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"91214-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"9121-\u5173\u8054\u6570\u636e\u6a21\u578b",children:"9.12.1 \u5173\u8054\u6570\u636e\u6a21\u578b"}),"\n",(0,s.jsxs)(i.Z,{defaultValue:"person",values:[{label:"Person",value:"person"},{label:"PersonDetail",value:"person-detail"},{label:"Children",value:"children"},{label:"Post",value:"post"}],children:[(0,s.jsx)(a.Z,{value:"person",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {38,43,48}",children:"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace Furion.Core\n{\n    public class Person : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n        }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [MaxLength(32)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n\n        /// <summary>\n        /// \u4ece\u8868\n        /// </summary>\n        public PersonDetail PersonDetail { get; set; }\n\n        /// <summary>\n        /// \u4e00\u5bf9\u591a\n        /// </summary>\n        public ICollection<Children> Childrens { get; set; }\n\n        /// <summary>\n        /// \u591a\u5bf9\u591a\n        /// </summary>\n        public ICollection<Post> Posts { get; set; }\n    }\n}\n"})})}),(0,s.jsx)(a.Z,{value:"person-detail",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {25}",children:"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class PersonDetail : EntityBase\n    {\n        /// <summary>\n        /// \u7535\u8bdd\u53f7\u7801\n        /// </summary>\n        public string PhoneNumber { get; set; }\n\n        /// <summary>\n        /// QQ \u53f7\u7801\n        /// </summary>\n        public string QQ { get; set; }\n\n        /// <summary>\n        /// \u5916\u952e\n        /// </summary>\n        public int PersonId { get; set; }\n\n        /// <summary>\n        /// \u4e3b\u8868\n        /// </summary>\n        public Person Person { get; set; }\n    }\n}\n"})})}),(0,s.jsx)(a.Z,{value:"children",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {35}",children:"using Furion.DatabaseAccessor;\nusing System;\n\nnamespace Furion.Core\n{\n    public class Children : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Children()\n        {\n            CreatedTime = DateTime.Now;\n\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u6027\u522b\n        /// </summary>\n        public Gender Gender { get; set; }\n\n        /// <summary>\n        /// \u5916\u952e\n        /// </summary>\n        public int PersonId { get; set; }\n\n        /// <summary>\n        /// \u4e3b\u8868\n        /// </summary>\n        public Person Person { get; set; }\n    }\n}\n"})})}),(0,s.jsx)(a.Z,{value:"post",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {26}",children:"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Post : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Post()\n        {\n            CreatedTime = DateTime.Now;\n\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// Person \u96c6\u5408\n        /// </summary>\n        public ICollection<Person> Persons { get; set; }\n    }\n}\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"9122-\u4e00\u5bf9\u4e00\u67e5\u8be2",children:"9.12.2 \u4e00\u5bf9\u4e00\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Detail);\n\n// \u793a\u4f8b\u4e8c\nvar person = repository.Include(u => u.Detail)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u4e09\nvar person = repository.Include(u => u.Detail)\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u56db\nvar person = repository.Include(u => u.Detail.Where(d => d.Id > 10).OrderBy(d => d.Name))\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u4e94\nvar person = repository.Include(!string.IsNullOrEmpty(keyword), u => u.Detail);\n\n// \u793a\u4f8b\u516d\nvar person = repository.Include(!string.IsNullOrEmpty(keyword), u => u.Detail)\n                       .Include(age > 18, u => u.Detail.Where(d => d.Id > 10).OrderBy(d => d.Name))\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"9123-\u4e00\u5bf9\u591a\u67e5\u8be2",children:"9.12.3 \u4e00\u5bf9\u591a\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Childrens);\n\n// \u53c2\u8003 \u4e00\u5bf9\u4e00 \u4f8b\u5b50\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u7279\u522b\u8bf4\u660e",type:"important",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"\u4e00\u5bf9\u4e00"})," \u548c ",(0,s.jsx)(n.code,{children:"\u4e00\u5bf9\u591a"})," \u67e5\u8be2\u65b9\u6cd5\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a",(0,s.jsx)(n.code,{children:"\u4e00\u5bf9\u591a"})," \u91c7\u7528 ",(0,s.jsx)(n.code,{children:"ICollection<TEntity>"})," \u5b9a\u4e49\u5c5e\u6027\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"9124-\u591a\u5bf9\u591a\u67e5\u8be2",children:"9.12.4 \u591a\u5bf9\u591a\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Posts);\n\n// \u53c2\u8003 \u4e00\u5bf9\u4e00 \u4f8b\u5b50\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u7279\u522b\u8bf4\u660e",type:"important",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"\u4e00\u5bf9\u4e00"})," \u548c ",(0,s.jsx)(n.code,{children:"\u591a\u5bf9\u591a"})," \u67e5\u8be2\u65b9\u6cd5\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a",(0,s.jsx)(n.code,{children:"\u591a\u5bf9\u591a"})," \u91c7\u7528 ",(0,s.jsx)(n.code,{children:"ICollection<TEntity>"})," \u5b9a\u4e49\u5c5e\u6027\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"9125-\u8054\u8868\u67e5\u8be2",children:"9.12.5 \u8054\u8868\u67e5\u8be2"}),"\n",(0,s.jsxs)(n.h3,{id:"91251-\u5185\u8fde\u63a5-inner-join",children:["9.12.5.1 \u5185\u8fde\u63a5 ",(0,s.jsx)(n.code,{children:"Inner Join"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var query = from p in _personRepository.AsQueryable()\n            join d in _personDetailRepository.AsQueryable() on p.Id equals d.PersonId\n            select new PersonDto\n            {\n                PhoneNumber = p.PersonDetail.PhoneNumber,\n                Address = p.Address,\n                Age = p.Age,\n                Name = p.Name,\n                Id = p.Id,\n                QQ = p.PersonDetail.QQ\n            };\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"91252-\u5de6\u8fde\u63a5-left-join",children:["9.12.5.2 \u5de6\u8fde\u63a5 ",(0,s.jsx)(n.code,{children:"Left Join"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {2,3}",children:"var query = from p in _personRepository.AsQueryable()\n            join d in _personDetailRepository.AsQueryable() on p.Id equals d.PersonId into results\n            from d in results.DefaultIfEmpty()\n            select new PersonDto\n            {\n                PhoneNumber = p.PersonDetail.PhoneNumber,\n                Address = p.Address,\n                Age = p.Age,\n                Name = p.Name,\n                Id = p.Id,\n                QQ = p.PersonDetail.QQ\n            };\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u5c0f\u63d0\u793a",type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Left Join"})})," \u548c ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Inner Join"})})," \u4e0d\u540c\u7684\u662f\uff0c",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Left Join"})})," \u4f1a\u5148\u5c06\u7ed3\u679c ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"into"})})," \u5230\u65b0\u7684\u7ed3\u679c\u96c6\u7136\u540e\u518d\u67e5\u8be2\uff0c\u5e76\u8c03\u7528 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DefaultIfEmpty()"})})," \u65b9\u6cd5\u3002"]})}),"\n",(0,s.jsxs)(n.h3,{id:"91253-\u53f3\u8fde\u63a5-right-join",children:["9.12.5.3 \u53f3\u8fde\u63a5 ",(0,s.jsx)(n.code,{children:"Right Join"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Right Join"})," \u53ea\u9700\u8981\u5c06 ",(0,s.jsx)(n.code,{children:"Left Join"})," \u4e3b\u4ece\u8868\u4f4d\u7f6e\u66f4\u6362\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"9126-\u5206\u7ec4\u67e5\u8be2",children:"9.12.6 \u5206\u7ec4\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable().GroupBy(x => new { x.Column1, x.Column2 });\n\n// \u793a\u4f8b\u4e8c\nvar query = from student in repository.AsQueryable()\n            group student by repository2.AsQueryable() into dateGroup\n            select new ResultData()\n            {\n                Key = dateGroup.Key,\n                Value = dateGroup.Count()\n            };\n\n// \u793a\u4f8b\u4e09\nvar query = from a in repository.AsQueryable()\n            join b in repository2.AsQueryable() on a.Id equals b.Aid\n            join c in repository3.AsQueryable() on c.id equals b.Bid\n            group a by new { a.Age, b.Sex } into g\n            select new {\n                Peo = g.Key,\n                Count = g.Count()\n            };\n"})}),"\n",(0,s.jsx)(n.h2,{id:"9127-\u5408\u5e76\u7ed3\u679c\u96c6",children:"9.12.7 \u5408\u5e76\u7ed3\u679c\u96c6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var query = repository.AsQueryable(u => u.Id > 10)\n                      .Union(\n                          repository2.AsQueryable(u => u.Id <= 10)\n                      );\n"})}),"\n",(0,s.jsx)(n.h2,{id:"9128-\u67e5\u8be2\u6392\u5e8f",children:"9.12.8 \u67e5\u8be2\u6392\u5e8f"}),"\n",(0,s.jsx)(n.h3,{id:"91281-\u6b63\u5e8f",children:"9.12.8.1 \u6b63\u5e8f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderBy(u => u.Id);\n\n// \u793a\u4f8b\u4e8c\nvar query =repository.AsQueryable()\n                     .OrderBy(u => u.Id)\n                     .ThenBy(u => u.Name);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"91282-\u5012\u5e8f",children:"9.12.8.2 \u5012\u5e8f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderByDescending(u => u.Id);\n\n// \u793a\u4f8b\u4e8c\nvar query =repository.AsQueryable()\n                     .OrderByDescending(u => u.Id)\n                     .ThenByDescending(u => u.Name);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"91283-\u6df7\u5408\u5012\u5e8f",children:"9.12.8.3 \u6df7\u5408\u5012\u5e8f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderBy(u => u.Id)\n                      .OrderByDescending(u => u.Name)\n                      .ThenBy(u => u.Age);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"9129-\u9012\u5f52\u67e5\u8be2",children:"9.12.9 \u9012\u5f52\u67e5\u8be2"}),"\n",(0,s.jsxs)(i.Z,{defaultValue:"city",values:[{label:"City",value:"city"},{label:"CityDto",value:"citydto"}],children:[(0,s.jsx)(a.Z,{value:"city",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {12,36,41,49-55}",children:'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// \u57ce\u5e02\n    /// </summary>\n    public class City : Entity, IEntityTypeBuilder<City>, IEntitySeedData<City>\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public City()\n        {\n            CreatedTime = DateTime.Now;\n\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u4e0a\u7ea7Id\n        /// </summary>\n        public int? ParentId { get; set; }\n\n        /// <summary>\n        /// \u4e0a\u7ea7\n        /// </summary>\n        public virtual City Parent { get; set; }\n\n        /// <summary>\n        /// \u5b50\u96c6\n        /// </summary>\n        public virtual ICollection<City> Childrens { get; set; }\n\n        /// <summary>\n        /// \u914d\u7f6e\u5b9e\u4f53\u5173\u7cfb\n        /// </summary>\n        /// <param name="entityBuilder"></param>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        public void Configure(EntityTypeBuilder<City> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder\n                .HasMany(x => x.Childrens)\n                .WithOne(x => x.Parent)\n                .HasForeignKey(x => x.ParentId)\n                .OnDelete(DeleteBehavior.ClientSetNull); // \u5fc5\u987b\u8bbe\u7f6e\u8fd9\u4e00\u884c\n        }\n\n        /// <summary>\n        /// \u79cd\u5b50\u6570\u636e\n        /// </summary>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        /// <returns></returns>\n        public IEnumerable<City> HasData(DbContext dbContext, Type dbContextLocator)\n        {\n            return new List<City>\n            {\n                new City { Id=1,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u4e2d\u56fd" },\n                new City { Id=2,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u5e7f\u4e1c\u7701",ParentId=1 },\n                new City { Id=3,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u4e2d\u5c71\u5e02",ParentId=2 },\n                new City { Id=4,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u73e0\u6d77\u5e02",ParentId=2 },\n                new City { Id=5,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u6d59\u6c5f\u7701",ParentId=1 },\n            };\n        }\n    }\n}\n'})})}),(0,s.jsx)(a.Z,{value:"citydto",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"using System.Collections.Generic;\n\nnamespace Furion.Application.Persons\n{\n    public class CityDto\n    {\n        /// <summary>\n        /// \u4e3b\u952e\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5b50\u96c6\n        /// </summary>\n        public ICollection<CityDto> Childrens { get; set; }\n    }\n}\n"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var cities = await repository.AsQueryable()\n                             .Include(u => u.Childrens)\n                             .Where(u => u.Id == 1)\n                             .ToListAsync();\n\nvar dtos = cities.Adapt<List<CityDto>>();\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"91210-\u52a8\u6001-sql-\u67e5\u8be2",children:["9.12.10 \u52a8\u6001 ",(0,s.jsx)(n.code,{children:"Sql"})," \u67e5\u8be2"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Furion"})," \u9ed8\u8ba4\u4e0d\u652f\u6301 \u52a8\u6001 ",(0,s.jsx)(n.code,{children:"Sql"})," \u67e5\u8be2\u529f\u80fd\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e09\u65b9\u5b9e\u73b0\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Furion"})," \u9879\u76ee\u5c42\u5b89\u88c5 ",(0,s.jsx)(n.code,{children:"System.Linq.Dynamic.Core"})," \u5305 ",(0,s.jsx)(n.a,{href:"https://github.com/zzzprojects/System.Linq.Dynamic.Core",children:"https://github.com/zzzprojects/System.Linq.Dynamic.Core"})]}),"\n",(0,s.jsxs)(n.h3,{id:"912101-\u52a8\u6001-sql",children:["9.12.10.1 \u52a8\u6001 ",(0,s.jsx)(n.code,{children:"Sql"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .Where("City == @0 and Orders.Count >= @1", "China", 10)\n                      .OrderBy("CompanyName")\n                      .Select("new(CompanyName as Name, Phone)");\n\n// \u793a\u4f8b\u4e8c\nvar list = repository.AsQueryable()\n                     .Where("Name.Contains(@0)","Furion")\n                     .ToList();\n\n// \u793a\u4f8b\u4e09\uff0c\u652f\u6301 ? \u8bed\u6cd5\nvar customers = repository.AsQueryable()\n                          .Include(c => c.Location)\n                          .Where(c => c.Location?.Name == "test") // \u6ce8\u610f Location?.Name\n                          .ToList();\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"912102-\u52a8\u6001-lambda",children:["9.12.10.2 \u52a8\u6001 ",(0,s.jsx)(n.code,{children:"Lambda"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'// \u793a\u4f8b\u4e00\nvar x = Expression.Parameter(typeof(int), "x");\nvar y = Expression.Parameter(typeof(int), "y");\nvar e = DynamicExpressionParser\n            .ParseLambda(new ParameterExpression[] { x, y }, null, "(x + y) * 2");\n\n// \u793a\u4f8b\u4e8c\nvar e = DynamicExpressionParser.ParseLambda(\n        typeof(Customer), typeof(bool),\n        "City = @0 and Orders.Count >= @1",\n        "London", 10);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"91211-\u65f6\u6001\u67e5\u8be2",children:"9.12.11 \u65f6\u6001\u67e5\u8be2"}),"\n",(0,s.jsx)(n.admonition,{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"warning",children:(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,s.jsx)(n.code,{children:"Furion 2.13 +"})," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u8fd8\u63d0\u4f9b\u4e86\u65f6\u6001\u67e5\u8be2\u529f\u80fd\uff0c\u53ef\u4ee5\u67e5\u8be2\u7279\u5b9a\u65f6\u95f4\u7684\u6570\u636e\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'var result = rep.Entities\n    .AsTemporalOf(DateTime.UtcNow.AddDays(-1))\n    .Include(i=> i.Company)\n    .FirstOrDefault(i => i.Name == "Furion");\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u53e6\u5916\u63d0\u4f9b\u4e86\u591a\u4e2a\u65f6\u6001\u67e5\u8be2\u65b9\u6cd5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AsTemporalAll()"}),"\n",(0,s.jsx)(n.li,{children:"AsTemporalAsOf(date)"}),"\n",(0,s.jsx)(n.li,{children:"AsTemporalFrom(startDate, endDate)"}),"\n",(0,s.jsx)(n.li,{children:"AsTemporalBetween(startDate, endDate)"}),"\n",(0,s.jsx)(n.li,{children:"AsTemporalContained(startDate, endDate)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"91212-\u6027\u80fd\u4f18\u5316",children:"9.12.12 \u6027\u80fd\u4f18\u5316"}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(n.code,{children:"EF Core"})," \u4f1a\u8ddf\u8e2a\u6240\u6709\u5b9e\u4f53\uff0c\u4e5f\u5c31\u662f\u4efb\u4f55\u6570\u636e\u6539\u53d8\u90fd\u4f1a\u5f15\u8d77\u6570\u636e\u68c0\u67e5\uff0c\u6240\u4ee5\u5982\u679c\u53ea\u505a\u67e5\u8be2\u64cd\u4f5c\uff0c\u5efa\u8bae\u5173\u95ed\u5b9e\u4f53\u8ddf\u8e2a\u529f\u80fd\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Furion"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u9ad8\u6027\u80fd\u5b9e\u4f53\u96c6\u5408\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DetachedEntities"}),"\uff1a\u8131\u8f68/\u4e0d\u8ffd\u8e2a\u5b9e\u4f53"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AsQueryable(false)"}),"\uff1a\u4e0d\u8ffd\u8e2a\u5b9e\u4f53"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Entities.AsNoTracking()"}),"\uff1a\u624b\u52a8\u5173\u95ed\u5b9e\u4f53\u8ffd\u8e2a"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"EF Core"})," \u4e2d\uff0c\u590d\u6742\u67e5\u8be2\u603b\u662f\u4f1a\u751f\u6210\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"sql"}),"\uff0c\u4e5f\u5c31\u662f ",(0,s.jsx)(n.code,{children:"AsSingleQuery()"}),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"AsSplitQuery()"})," \u5207\u5272\u6210\u591a\u4e2a\u67e5\u8be2\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"91213-\u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",children:"9.12.13 \u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Person : Entity, IEntityTypeBuilder<Person>\n    {\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u914d\u7f6e\u5b9e\u4f53\u5173\u7cfb\n        /// </summary>\n        /// <param name="entityBuilder"></param>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        public void Configure(EntityTypeBuilder<Person> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.ToSqlQuery(\n              @"select * from dbo.person.2020-09-19\n                union all\n                select * from dbo.person.2020-09-20");\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers",children:"var posts = repository.Where(u => u.Id > 10).ToList();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"91214-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"9.12.14 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,s.jsx)(n.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,s.jsxs)(n.p,{children:["\u7ed9 Furion \u63d0 ",(0,s.jsx)(n.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var s=r(4334);const t={tabItem:"tabItem_Ymn6"};var i=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,a),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>C});var s=r(7294),t=r(4334),i=r(2466),a=r(6550),l=r(469),o=r(1980),u=r(7392),d=r(12);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function y(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=m(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[u,c]=p({queryString:r,groupId:t}),[y,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(r);return[t,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),b=(()=>{const e=u??y;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),x(e)}),[c,x,i]),tabValues:i}}var x=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function j(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),t=l[r].value;t!==s&&(u(n),a(t))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:c,onClick:d,...i,className:(0,t.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function f(e){const n=y(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function C(e){const n=(0,x.Z)();return(0,g.jsx)(f,{...e,children:c(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var s=r(7294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);