(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),l=(n(25),n(11)),r=n(20),i=(n(26),n(8)),b=n(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/About",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}d.defaultProps={title:"Your Title Here",searchBar:!0};var j=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsx)("div",{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"}),Object(b.jsx)("hr",{})]})})},u=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(b.jsx)("h3",{className:" my-3",children:"Todos List"}),Object(b.jsx)("hr",{}),0===e.todos.length?"No Todos to display":e.todos.map((function(t){return Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},m=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},h=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),d=i[0],j=i[1],u={backgroundColor:"lightyellow",border:"1px solid violet",outline:"none"};return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add a Todo"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&d?(t(s,d),o(""),j("")):alert("Title or Description cannot be blank.")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp",style:u})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){j(e.target.value)},className:"form-control",id:"desc",style:u})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success btn-sm",children:"Add Todo"})]})]})},x=function(){return Object(b.jsxs)("div",{children:["This is an About Component.",Object(b.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, doloremque cumque ducimus, velit similique culpa consectetur placeat maxime nesciunt doloribus, quia corrupti nobis impedit. Soluta ullam velit ad in non et sit quam vel."})]})},O=n(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){j(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){var n={sno:0===o.length?1:o[o.length-1].sno+1,title:e,desc:t};j([].concat(Object(r.a)(o),[n]))},c=Object(a.useState)(e),s=Object(l.a)(c,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"My Todos List",searchBar:!1}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{addTodo:n}),Object(b.jsx)(u,{todos:o,onDelete:t})]})}}),Object(b.jsx)(O.a,{exact:!0,path:"/about",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(m,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.3bd79b9c.chunk.js.map