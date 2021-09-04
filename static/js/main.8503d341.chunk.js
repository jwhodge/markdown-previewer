(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{369:function(e,n,t){"use strict";t.r(n);var a=t(6),i=t.n(a),s=t(66),c=t.n(s),r=(t(86),t(10)),o=t(79),l=t(9),d=t(32),u=t(16),h=t(19),j=t(21),b=(t(87),t(77)),m=t(78),g=t(71),O=t(380),p=t(379),x=t(17),f=t(48),v=t(50),k=t(49),w=t(4),N=["node","inline","className","children"];function y(){return Object(w.jsxs)("div",{className:"Navbar",children:[Object(w.jsxs)("h1",{className:"PageText",children:[Object(w.jsx)(x.a,{icon:f.b})," Markdown Previewer"]}),Object(w.jsxs)("a",{href:"https://guides.github.com/features/mastering-markdown/",className:"PanelButton",target:"_blank",title:"Learn Markdown",rel:"noreferrer",children:[Object(w.jsx)(x.a,{icon:f.a,size:"lg"})," Markdown Guide"]})]})}var P=function(e){Object(h.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={input:"_This is just placeholder text. When you are ready to edit select it all and delete._\n\n# Welcome to Markdown Previewer!\n\n## General Formatting\n\n### There are smaller sub-headings ...\n\n> You can create a blockquote. \n\nYou can make text **bold**... \nOr _italic_.\nOr... **_both_**\nAnd with GFM (_github flavoured markdown_) you can go crazy ~~crossing stuff out~~.\n\nYou can also create [links](https://www.freecodecamp.org)\n\nAnd tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here...\nAnd here. | Okay. | I think we get it.\n\n- And of course, there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And numbered lists too.\n1. Use just 1s if you want!\n1. Don't forget about ...\n\n\n## Formatting Code\n\nHere's some inline code, `<div></div>`, marked using backticks.\n\nThis is code, marked using 3 backticks. 3 tildes (~) work too.\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\nIf you specify the code language next to the backticks (eg. js, css, html) it will highlight the code.\n\n```html\n<div>\n  <h1>Heading</h1>\n  <p> Hello here is some text</p>\n</div>\n```\n\n## Embedding Images\nYou can embed images like this:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a}return Object(d.a)(t,[{key:"handleInput",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{className:"Main",children:[Object(w.jsxs)("div",{className:"Panel",children:[Object(w.jsxs)("div",{className:"PanelHeader",children:[Object(w.jsxs)("h3",{className:"PageText",children:[Object(w.jsx)(x.a,{icon:k.b,size:"lg"})," Edit Markdown"]}),Object(w.jsx)("a",{href:"#",className:"PanelButton",role:"button",title:"Copy Markdown",onClick:function(){return navigator.clipboard.writeText(e.state.input)},children:Object(w.jsx)(x.a,{icon:k.a,size:"md"})})]}),Object(w.jsx)("textarea",{className:"Input",id:"editor",onChange:this.handleInput,children:this.state.input})]}),Object(w.jsxs)("div",{className:"Panel",children:[Object(w.jsxs)("div",{className:"PanelHeader",children:[Object(w.jsxs)("h3",{className:"PageText",children:[Object(w.jsx)(x.a,{icon:v.b,size:"md"})," Preview Result"]}),Object(w.jsx)("a",{href:"#",className:"PanelButton",role:"button",title:"Copy HTML",onClick:function(){return navigator.clipboard.writeText(document.getElementById("preview").innerHTML)},children:Object(w.jsx)(x.a,{icon:v.a,size:"md"})})]}),Object(w.jsx)("div",{className:"Output",id:"preview",children:Object(w.jsx)(b.a,{children:this.state.input,remarkPlugins:[[m.a],[g.a]],components:{code:function(e){e.node;var n=e.inline,t=e.className,a=e.children,i=Object(o.a)(e,N),s=/language-(\w+)/.exec(t||"");return!n&&s?Object(w.jsx)(O.a,Object(r.a)({children:String(a).replace(/\n$/,""),style:p.a,language:s[1],PreTag:"div"},i)):Object(w.jsx)("code",Object(r.a)(Object(r.a)({className:t},i),{},{children:a}))}}})})]})]})}}]),t}(i.a.Component);var C=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(y,{}),Object(w.jsx)(P,{})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,381)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),s(e),c(e)}))},I=t(76),L=t.n(I);c.a.render(Object(w.jsxs)(i.a.StrictMode,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(L.a,{})]}),document.getElementById("root")),T()},86:function(e,n,t){},87:function(e,n,t){}},[[369,1,2]]]);
//# sourceMappingURL=main.8503d341.chunk.js.map