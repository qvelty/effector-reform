"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[259],{3669:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>x,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>g,toc:()=>h});var o=n(4848),t=n(8453),a=n(9084),s=n(5053),f=n(2489),m=n(3721);const l=(0,a.Fv)("",{forkOnCreateForm:!1}),i=(0,a.DG)({schema:{name:l}}),c=(0,f.y$)(":(");function d(){const{fields:e}=(0,s.mN)(i),r=(0,m.e3)(c);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:'type "Edward"'}),(0,o.jsx)("input",{value:e.name.value,onChange:r=>e.name.onChange(r.currentTarget.value)}),(0,o.jsxs)("p",{children:["message: ",r]})]})}(0,f.XM)({clock:l.changed,fn:e=>"Edward"===e?"nice!":":(",target:c});const p={sidebar_position:2,title:"Use field out of form",id:"field-out-of-form",tags:["Learn","Getting started","Use field out of form","Example","Examples"]},u=void 0,g={id:"learn/examples/field-out-of-form",title:"Use field out of form",description:"",source:"@site/docs/learn/examples/use-field-out-of-form.mdx",sourceDirName:"learn/examples",slug:"/learn/examples/field-out-of-form",permalink:"/effector-reform/docs/learn/examples/field-out-of-form",draft:!1,unlisted:!1,editUrl:"https://github.com/qvelty/effector-reform/tree/main/docs/docs/learn/examples/use-field-out-of-form.mdx",tags:[{label:"Learn",permalink:"/effector-reform/docs/tags/learn"},{label:"Getting started",permalink:"/effector-reform/docs/tags/getting-started"},{label:"Use field out of form",permalink:"/effector-reform/docs/tags/use-field-out-of-form"},{label:"Example",permalink:"/effector-reform/docs/tags/example"},{label:"Examples",permalink:"/effector-reform/docs/tags/examples"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Use field out of form",id:"field-out-of-form",tags:["Learn","Getting started","Use field out of form","Example","Examples"]},sidebar:"learnSidebar",previous:{title:"Base form example",permalink:"/effector-reform/docs/learn/examples/base-form"},next:{title:"Form with yup validation example",permalink:"/effector-reform/docs/learn/examples/yup-form"}},x={},h=[];function F(e){const r={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import { createField, createForm } from '@effector-reform/core';\nimport { useForm } from '@effector-reform/react';\n\nimport { createStore, sample } from 'effector';\nimport { useUnit } from 'effector-react';\n\nconst nameField = createField<string>('', { forkOnCreateForm: false });\n\nconst form = createForm({\n  schema: {\n    name: nameField,\n  },\n});\n\nconst $message = createStore(':(');\n\nsample({\n  clock: nameField.changed,\n  fn: (name) => (name === 'Edward' ? 'nice!' : ':('),\n  target: $message,\n});\n\nexport function FieldOutOfForm() {\n  const { fields } = useForm(form);\n  const message = useUnit($message);\n\n  return (\n    <>\n      <p>type \"Edward\"</p>\n\n      <input\n        value={fields.name.value}\n        onChange={(e) => fields.name.onChange(e.currentTarget.value)}\n      />\n\n      <p>message: {message}</p>\n    </>\n  );\n}\n"})})]})}function k(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(F,{...e})}):F(e)}}}]);