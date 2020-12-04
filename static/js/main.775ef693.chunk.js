(this["webpackJsonpbudget-manager-app"]=this["webpackJsonpbudget-manager-app"]||[]).push([[0],{128:function(e,n,t){"use strict";t.r(n);var a,c,i,r=t(6),o=t(0),s=t.n(o),d=t(12),l=t.n(d),j=t(18),p=t(195),b=t(196),u=t(65),x=t(189),O=t(190),h=t(174),m=t(109),g=t(183),f=t(184),y=t(185),E=t(186),v=t(187),C=t(200),M=t(188),w=t(191),A=t(201);!function(e){e.Bills="Bills",e.Electronics="Electronics",e.Grocery="Grocery",e.Hobby="Hobby",e.Hygiene="Hygiene",e.Another="Another"}(a||(a={})),function(e){e.Expense="expense",e.Cost="cost",e.Category="category",e.Date="date",e.id="id"}(c||(c={})),function(e){e.Ascending="asc",e.Descending="desc"}(i||(i={}));var D=t(179),k=t(180),S=t(181),W=t(173),T=t(175),P=t(176),I=t(170),H=Object(I.a)((function(e){return{margin:{margin:e.spacing(2)}}})),z=function(e){var n=e.value,t=e.onChange,a=e.size,c=H();return Object(r.jsx)(W.a,{size:a,className:c.margin,value:n,onChange:t,variant:"outlined",label:"Find your expense",InputProps:{startAdornment:Object(r.jsx)(T.a,{position:"start",children:Object(r.jsx)(P.a,{})})}})},B=t(177),N=function(e){var n=e.onClick,t=e.startIcon,a=e.color,c=e.variant,i=e.children,o=e.fullWidth,s=e.type,d=e.style;return Object(r.jsx)(B.a,{onClick:n,startIcon:t,color:a,variant:c,fullWidth:o,type:s,style:d,children:i})},F=Object(I.a)({margin:{marginTop:"20px"}}),G=t(58),V=t(80),R=[{id:0,expense:"New TV",cost:2e3,category:"Electronics",date:new Date},{id:1,expense:"Fruits and Vegetable",cost:10,category:"Grocery",date:new Date},{id:2,expense:"Electicity",cost:250,category:"Bills",date:new Date},{id:3,expense:"Vinyls",cost:300,category:"Hobby",date:new Date},{id:4,expense:"Shampoo",cost:20,category:"Hygiene",date:new Date}],q={id:Math.random(),expense:"",cost:0,category:"Electronics",date:new Date},J={expenses:R,isAddExpenseModalOpen:!1,isEditExpenseModalOpen:!1,newOrEditedExpense:q},L=Object(V.b)({name:"expenses",initialState:J,reducers:{addExpense:function(e,n){e.expenses.push(n.payload)},editExpense:function(e,n){var t=e.expenses.findIndex((function(e){return e.id===n.payload.id}));e.expenses[t]=Object(G.a)(Object(G.a)({},n.payload),{},{id:e.newOrEditedExpense.id})},removeExpense:function(e,n){e.expenses=e.expenses.filter((function(e){return e.id!==n.payload}))},openAddExpenseModal:function(e){e.isAddExpenseModalOpen=!0},closeAddExpenseModal:function(e){e.isAddExpenseModalOpen=!1,e.newOrEditedExpense=q},openEditExpenseModal:function(e,n){e.isEditExpenseModalOpen=!0,e.newOrEditedExpense=n.payload},closeEditExpenseModal:function(e){e.isEditExpenseModalOpen=!1,e.newOrEditedExpense=q}}}),$=function(e){return e.expenses},K=function(e){return $(e).expenses},Q=function(e){return $(e).isAddExpenseModalOpen},U=function(e){return $(e).isEditExpenseModalOpen},X=function(e){return $(e).newOrEditedExpense},Y=L.actions,Z=Y.addExpense,_=Y.editExpense,ee=Y.removeExpense,ne=Y.openAddExpenseModal,te=Y.closeAddExpenseModal,ae=Y.openEditExpenseModal,ce=Y.closeEditExpenseModal,ie=L.reducer,re=t(26),oe=t(178),se=function(){var e=F(),n=Object(j.b)(),t=Object(re.a)(),a=Object(oe.a)(t.breakpoints.up("sm"));return Object(r.jsx)(D.a,{className:e.margin,children:Object(r.jsxs)(k.a,{container:!0,direction:a?"row":"column",justify:"space-between",alignItems:"center",children:[Object(r.jsx)(z,{size:a?"medium":"small"}),Object(r.jsx)(N,{onClick:function(){n(ne())},variant:"contained",color:"primary",startIcon:Object(r.jsx)(S.a,{}),style:a?void 0:{width:"242px"},children:"Add Expense"})]})})},de=t(182),le=function(e){var n=e.children,t=e.color,a=e.onClick;return Object(r.jsx)(de.a,{onClick:a,size:"small",color:t,children:n})},je=function(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0},pe=Object(I.a)((function(e){return{root:{paddingTop:"20px",margin:e.spacing(3)},table:{border:"2px solig green",marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}},"@media (max-width: 670px)":{table:{"& thead th":{fontSize:"10px",padding:"8px"},"& tbody td":{fontSize:"10px",padding:"8px"}}}}})),be=function(e){var n,t=e.bodyData,a=e.headData,c=Object(j.b)(),s=pe(),d=[5,10,25],l=Object(o.useState)(0),p=Object(u.a)(l,2),b=p[0],D=p[1],k=Object(o.useState)(d[b]),S=Object(u.a)(k,2),W=S[0],T=S[1],P=Object(o.useState)(i.Ascending),I=Object(u.a)(P,2),H=I[0],z=I[1],B=Object(o.useState)(""),N=Object(u.a)(B,2),F=N[0],G=N[1],V=function(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var a=n(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),t.map((function(e){return e[0]}))}(t,function(e,n){return e===i.Descending?function(e,t){return je(e,t,n)}:function(e,t){return-je(e,t,n)}}(H,F)).slice(b*W,b*W+W);return Object(r.jsxs)(h.a,{className:s.root,children:[Object(r.jsx)(m.a,{variant:"h3",component:"h1",align:"center",children:"Budget Manager"}),Object(r.jsx)(se,{}),Object(r.jsx)(g.a,{children:Object(r.jsxs)(f.a,{className:s.table,children:[Object(r.jsx)(y.a,{children:Object(r.jsx)(E.a,{children:a.map((function(e){return Object(r.jsx)(v.a,{children:Object(r.jsx)(C.a,{active:F===e.name,direction:F===e.name?H:i.Ascending,onClick:function(){return function(e){var n=F===e&&H===i.Ascending;z(n?i.Descending:i.Ascending),G(e)}(e.name)},disabled:!e.sortable,children:e.label})},e.name)}))})}),Object(r.jsx)(M.a,{children:V.map((function(e){return Object(r.jsxs)(E.a,{children:[Object(r.jsx)(v.a,{children:e.expense}),Object(r.jsx)(v.a,{children:e.cost}),Object(r.jsx)(v.a,{children:e.category}),Object(r.jsx)(v.a,{children:e.date.toLocaleDateString()}),Object(r.jsxs)(v.a,{children:[Object(r.jsx)(le,{onClick:function(){c(ae(e))},color:"primary",children:Object(r.jsx)(x.a,{})}),Object(r.jsx)(le,{onClick:function(){return n=e.id,void c(ee(n));var n},color:"secondary",children:Object(r.jsx)(O.a,{})})]})]},e.id)}))}),Object(r.jsx)(w.a,{children:Object(r.jsxs)(E.a,{children:[Object(r.jsx)(v.a,{variant:"head",children:"Summary Expenses"}),Object(r.jsx)(v.a,{variant:"head",children:(n=t,n.reduce((function(e,n){return e+n.cost}),0))})]})})]})}),Object(r.jsx)(A.a,{rowsPerPageOptions:d,count:t.length,rowsPerPage:W,page:b,onChangePage:function(e,n){D(n)},onChangeRowsPerPage:function(e){T(parseInt(e.target.value)),D(0)}})]})},ue=t(194),xe=t(198),Oe=t(193),he=t(192),me=t(132),ge=t(137),fe=t(202),ye=t(14),Ee=t(104),ve=t(13),Ce=t(81),Me=t(105),we=[a.Bills,a.Electronics,a.Grocery,a.Hobby,a.Hygiene,a.Another],Ae=Object(I.a)({root:{"& .MuiFormControl-root":{width:"100%",margin:"16px 0",display:"flex",flexDirection:"column"}}}),De=function(e){var n=e.formType,t=Object(j.b)(),a=Object(j.c)(Q),i=Object(j.c)(U),o=Object(j.c)(X),s=Ae();return Object(r.jsx)(ye.a,{utils:Ee.a,children:Object(r.jsx)(ve.c,{initialValues:o,validate:function(e){var n={};return e.expense.trim()||(n.expense="Expense is required"),e.cost||(n.cost="Cost is required"),n},onSubmit:function(e){return function(e){a?(t(Z(Object(G.a)(Object(G.a)({},e),{},{id:Math.random()}))),t(te())):i&&(t(_(e)),t(ce()))}(e)},children:function(e){var t=e.submitForm,a=e.resetForm;return Object(r.jsxs)(ve.b,{className:s.root,children:[Object(r.jsx)(ve.a,{fullWidth:!0,variant:"outlined",label:"Expense",name:c.Expense,component:Ce.b}),Object(r.jsx)(ve.a,{variant:"outlined",label:"Cost",name:c.Cost,type:"number",fullWidth:!0,component:Ce.b,InputProps:{inputProps:{min:0}}}),Object(r.jsxs)(me.a,{fullWidth:!0,variant:"outlined",children:[Object(r.jsx)(ge.a,{children:"Category"}),Object(r.jsx)(ve.a,{component:Ce.a,label:"Category",name:c.Category,children:we.map((function(e){return Object(r.jsx)(fe.a,{value:e,children:e},e)}))})]}),Object(r.jsx)(ve.a,{component:Me.a,fullWidth:!0,inputVariant:"outlined",format:"MMM/dd/yyyy",name:c.Date,label:"Date"}),Object(r.jsxs)(k.a,{container:!0,justify:"center",spacing:2,children:[Object(r.jsx)(k.a,{item:!0,xs:5,children:Object(r.jsx)(N,{variant:"contained",onClick:a,color:"primary",fullWidth:!0,type:"reset",children:"Reset"})}),Object(r.jsx)(k.a,{item:!0,xs:5,children:Object(r.jsx)(N,{variant:"contained",onClick:t,color:"primary",fullWidth:!0,type:"submit",children:"add"===n?"Add":"Edit"})})]})]})}})})},ke=Object(I.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{padding:"0px"}}})),Se=function(e){var n=e.actionType,t=Object(j.b)(),a=ke();return Object(r.jsxs)(xe.a,{open:!0,classes:{paper:a.dialogWrapper},children:[Object(r.jsx)(Oe.a,{className:a.dialogTitle,children:Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)(m.a,{variant:"h5",component:"h2",style:{flexGrow:1},children:"add"===n?"Add Expense":"Edit Expense"}),Object(r.jsx)(le,{onClick:function(){"add"===n?t(te()):"edit"===n&&t(ce())},color:"secondary",children:Object(r.jsx)(ue.a,{})})]})}),Object(r.jsx)(he.a,{children:Object(r.jsx)(De,{formType:n})})]})},We=[{name:"expense",label:"Expense",sortable:!0},{name:"cost",label:"Cost $",sortable:!0},{name:"category",label:"Category",sortable:!0},{name:"date",label:"Date",sortable:!0},{name:"actions",label:"Edit / Remove",sortable:!1}],Te=function(){var e=Object(j.c)(K),n=Object(j.c)(Q),t=Object(j.c)(U);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(be,{bodyData:e,headData:We}),n&&Object(r.jsx)(Se,{actionType:"add"}),t&&Object(r.jsx)(Se,{actionType:"edit"})]})},Pe=function(){return Object(r.jsx)(Te,{})},Ie=t(106),He=Object(Ie.a)({overrides:{MuiCssBaseline:{"@global":{html:{boxSizing:"border-box"},body:{margin:"30px auto",maxWidth:"1000px"}}}}}),ze=Object(V.a)({reducer:{expenses:ie}});l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j.a,{store:ze,children:Object(r.jsxs)(p.a,{theme:He,children:[Object(r.jsx)(b.a,{}),Object(r.jsx)(Pe,{})]})})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.775ef693.chunk.js.map