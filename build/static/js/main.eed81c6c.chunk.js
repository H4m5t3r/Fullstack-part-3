(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(14),u=n.n(c),i=(n(19),n(3)),o=n(4),s=n.n(o),l="/api/persons",d={getAll:function(){return s.a.get(l).then((function(e){return e.data}))},create:function(e){return s.a.post(l,e).then((function(e){return e.data}))},delete:function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},update:function(e,t){return s.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))}},j=n(0),b=function(e){var t=e.person,n=e.deletePerson;return Object(j.jsxs)("div",{children:[t.name," ",t.number," ",Object(j.jsx)("button",{value:t.id,onClick:n,children:"delete"})]})},f=function(e){var t=e.filter,n=e.handleFilterChange;return Object(j.jsxs)("div",{children:["filter shown with ",Object(j.jsx)("input",{value:t,onChange:n})]})},h=function(e){var t=e.addPerson,n=e.newName,r=e.newNumber,a=e.handleNameChange,c=e.handleNumberChange;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:n,onChange:a})]}),Object(j.jsxs)("div",{children:["number: ",Object(j.jsx)("input",{value:r,onChange:c})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var t=e.list,n=e.deletePerson;return Object(j.jsx)("li",{children:t.map((function(e){return Object(j.jsx)(b,{person:e,deletePerson:n},e.name)}))})},m=function(e){var t=e.message;return null===t?null:Object(j.jsx)("div",{className:"successful",children:t})},v=function(e){var t=e.message;return null===t?null:Object(j.jsx)("div",{className:"error",children:t})},g=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),u=Object(i.a)(c,2),o=u[0],s=u[1],l=Object(r.useState)(""),b=Object(i.a)(l,2),g=b[0],p=b[1],x=Object(r.useState)(""),C=Object(i.a)(x,2),w=C[0],I=C[1],N=n.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())})),P=Object(r.useState)(null),S=Object(i.a)(P,2),k=S[0],F=S[1],D=Object(r.useState)(null),L=Object(i.a)(D,2),T=L[0],y=L[1];Object(r.useEffect)((function(){d.getAll().then((function(e){a(e)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(m,{message:k}),Object(j.jsx)(v,{message:T}),Object(j.jsx)("form",{children:Object(j.jsx)(f,{filter:w,handleFilterChange:function(e){I(e.target.value)}})}),Object(j.jsx)("h2",{children:"add a new"}),Object(j.jsx)(h,{addPerson:function(e){e.preventDefault();var t={name:o,number:g};d.create(t).then((function(e){F("Added ".concat(e.name)),setTimeout((function(){F(null)}),5e3),a(n.concat(e)),s(""),p("")}))},newName:o,newNumber:g,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){p(e.target.value)}}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(O,{list:N,deletePerson:function(e){e.preventDefault(),window.confirm("Delete ".concat(n.filter((function(t){var n=t.id;return parseInt(n)===parseInt(e.target.value)}))[0].name,"?"))&&d.delete(e.target.value).then((function(){a(n.filter((function(t){var n=t.id;return parseInt(n)!==parseInt(e.target.value)})))})).catch((function(t){y("Information of \n          ".concat(n.filter((function(t){var n=t.id;return parseInt(n)===parseInt(e.target.value)}))[0].name," \n          has already been removed from the server")),setTimeout((function(){y(null)}),5e3),a(n.filter((function(t){var n=t.id;return parseInt(n)!==parseInt(e.target.value)})))}))}})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),c(e),u(e)}))};u.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.eed81c6c.chunk.js.map