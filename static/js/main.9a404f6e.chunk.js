(this["webpackJsonpbudget-manager-app"]=this["webpackJsonpbudget-manager-app"]||[]).push([[0],{75:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),c=a.n(r),o=a(9),i=a.n(o),s=a(36),b=a(113),l=a(121),j=a(122),d=a(123),u=a(124),x=a(125),p=a(135),g=a(126),O=a(132),h=a(127),m=a(128),f=a(107),y=Object(f.a)((function(e){return{table:{border:"2px solig green",marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}},"@media (max-width: 960px)":{table:{"& thead th":{fontSize:"10px"},"& tbody td":{fontSize:"10px"}}},newButton:{textTransform:"capitalize"},newInput:{width:"100%",padding:"10px"}}})),v=a(118),w=a(119),D=a(133),C=a(114),S=a(115),P=Object(f.a)((function(e){return{margin:{margin:e.spacing(2)}}})),I=function(e){var t=e.value,a=e.onChange,r=P();return Object(n.jsx)(D.a,{className:r.margin,value:t,onChange:a,variant:"outlined",label:"Find your expense",InputProps:{startAdornment:Object(n.jsx)(C.a,{position:"start",children:Object(n.jsx)(S.a,{})})}})},k=a(116),z=a(117),E=function(){return Object(n.jsx)(k.a,{startIcon:Object(n.jsx)(z.a,{}),color:"primary",variant:"contained",children:"Add Item"})},B=Object(f.a)((function(e){return{margin:{margin:e.spacing(4)}}})),N=function(){var e=B();return Object(n.jsx)(v.a,{className:e.margin,children:Object(n.jsxs)(w.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(n.jsx)(I,{}),Object(n.jsx)(E,{})]})})},T=a(120),V=function(e){var t=e.children,a=e.color;return Object(n.jsx)(T.a,{size:"small",color:a,children:t})},W=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0};var A=function(e){var t=e.bodyData,a=e.headData,c=y(),o=[5,10,25],i=Object(r.useState)(0),f=Object(s.a)(i,2),v=f[0],w=f[1],D=Object(r.useState)(o[v]),C=Object(s.a)(D,2),S=C[0],P=C[1],I=Object(r.useState)("asc"),k=Object(s.a)(I,2),z=k[0],E=k[1],B=Object(r.useState)(""),T=Object(s.a)(B,2),A=T[0],F=T[1],H=function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(t,function(e,t){return"desc"===e?function(e,a){return W(e,a,t)}:function(e,a){return-W(e,a,t)}}(z,A)).slice(v*S,v*S+S);return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(N,{}),Object(n.jsx)(l.a,{children:Object(n.jsxs)(j.a,{className:c.table,children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(u.a,{children:a.map((function(e){return Object(n.jsx)(x.a,{children:Object(n.jsx)(p.a,{active:A===e.name,direction:A===e.name?z:"asc",onClick:function(){return t=e.name,E(A===t&&"asc"===z?"desc":"asc"),void F(t);var t},disabled:!e.sortable,children:e.label})},e.name)}))})}),Object(n.jsx)(g.a,{children:H.map((function(e){return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(x.a,{children:e.expense}),Object(n.jsx)(x.a,{children:e.cost}),Object(n.jsx)(x.a,{children:e.category}),Object(n.jsx)(x.a,{children:e.date.toLocaleDateString()}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)(V,{color:"primary",children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(V,{color:"secondary",children:Object(n.jsx)(m.a,{})})]})]},e.id)}))})]})}),Object(n.jsx)(O.a,{rowsPerPageOptions:o,count:t.length,rowsPerPage:S,page:v,onChangePage:function(e,t){w(t)},onChangeRowsPerPage:function(e){P(parseInt(e.target.value)),w(0)}})]})},F=[{id:0,expense:"New TV",cost:2e3,category:"Electronics",date:new Date},{id:1,expense:"Fruits and Vegetable",cost:10,category:"Grocery",date:new Date},{id:2,expense:"Electicity",cost:250,category:"Bills",date:new Date},{id:3,expense:"Vinyls",cost:300,category:"Hobby",date:new Date},{id:4,expense:"Shampoo",cost:20,category:"Hygiene",date:new Date}],H=[{name:"expense",label:"Expense",sortable:!0},{name:"cost",label:"Cost $",sortable:!0},{name:"category",label:"Category",sortable:!0},{name:"date",label:"Date",sortable:!0},{name:"actions",label:"Edit / Remove",sortable:!1}],J=function(){return Object(n.jsx)(A,{bodyData:F,headData:H})},M=function(){return Object(n.jsx)(J,{})},R=a(129),G=a(130),L=a(56),$=Object(L.a)({overrides:{MuiCssBaseline:{"@global":{html:{boxSizing:"border-box"},body:{margin:"30px auto",maxWidth:"1000px"}}}}});i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsxs)(R.a,{theme:$,children:[Object(n.jsx)(G.a,{}),Object(n.jsx)(M,{})]})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.9a404f6e.chunk.js.map