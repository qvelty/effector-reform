"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[951],{3762:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var t=o(4848),r=o(8453);const n={id:"validation-adapter",sidebar_position:1,title:"zodAdapter",tags:["Validation","Zod"]},d=void 0,i={id:"api/zod/validation-adapter",title:"zodAdapter",description:"Create adapter for form validation from zod schema",source:"@site/docs/api/zod/validation-adapter.md",sourceDirName:"api/zod",slug:"/api/zod/validation-adapter",permalink:"/effector-reform/docs/api/zod/validation-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/qvelty/effector-reform/tree/main/docs/docs/api/zod/validation-adapter.md",tags:[{label:"Validation",permalink:"/effector-reform/docs/tags/validation"},{label:"Zod",permalink:"/effector-reform/docs/tags/zod"}],version:"current",sidebarPosition:1,frontMatter:{id:"validation-adapter",sidebar_position:1,title:"zodAdapter",tags:["Validation","Zod"]},sidebar:"apiSidebar",previous:{title:"yupAdapter",permalink:"/effector-reform/docs/api/yup/validation-adapter"}},s={},c=[{value:"Formulae",id:"formulae",level:3},{value:"Example",id:"example",level:3}];function l(e){const a={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Create adapter for form validation from zod schema"}),"\n",(0,t.jsx)(a.h3,{id:"formulae",children:"Formulae"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"function zodAdapter<Schema extends AnySchema>(\n  schema: ZodObject<ZodRawShape>,\n): AsyncValidationFn<Schema>\n"})}),"\n",(0,t.jsx)(a.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"import { createForm } from '@effector-reform/core';\nimport { zodAdapter } from '@effector-reform/zod';\nimport { z } from 'zod';\n\nconst form = createForm({\n  schema: { a: '' },\n  validation: zodAdapter(\n    z.object({\n      a: z.string().min(5, 'msg'),\n    }),\n  ),\n});\n"})})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,a,o)=>{o.d(a,{R:()=>d,x:()=>i});var t=o(6540);const r={},n=t.createContext(r);function d(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);