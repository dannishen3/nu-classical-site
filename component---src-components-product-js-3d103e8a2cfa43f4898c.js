(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Al62:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));var n=function(e,t){void 0===e&&(e=0),void 0===t&&(t="USD");var a=e.toFixed(2);return new Intl.NumberFormat(["en-US"],{style:"currency",currency:t,currencyDisplay:"symbol"}).format(a)};function l(e){var t;return"active"===e.status?e.on_sale&&(t="On Sale"):"sold-out"===e.status?t="Sold out":"coming-soon"===e.status&&(t="Coming soon"),t}},vian:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("vrFN"),r=a("Wbzz"),i=a("Bl7J"),s=a("Al62");t.default=function(e){var t,a=e.pageContext,n=a.product,o=a.previous_product,u=a.next_product,d=Object(s.b)(n),p=l.a.createElement("aside",{class:"related-products-container wrapper","aria-label":"Related products"},(!!o||!!u)&&l.a.createElement("ul",{class:"prev-next-products"},!!o&&l.a.createElement("li",null,l.a.createElement(r.Link,{to:o},"Previous Product")),!!u&&l.a.createElement("li",null,l.a.createElement(r.Link,{to:u},"Next Product"))));return l.a.createElement(i.a,{bodyClass:"main",bodyId:"product_page",aside:p},l.a.createElement(c.a,{title:n.name}),l.a.createElement("div",{class:"product-page"},l.a.createElement("div",{class:"product-page-headings"},!!d&&l.a.createElement("span",{class:"product-status"},d),!!n.inventory&&l.a.createElement("span",{class:"product-status"},n.inventory),l.a.createElement("h1",{class:"product-title has-dash"},n.name),l.a.createElement("div",{class:"product-price"},n.xvariable_pricing?Object(s.a)(n.xmin_price)+" - "+Object(s.a)(n.xmax_price):""+Object(s.a)(n.default_price))),l.a.createElement("div",{class:"product-images"+(n.images.length>1?" product-images-slideshow":"")},l.a.createElement("ul",{class:"slides"},n.images.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("img",{alt:n.name,class:"product-image",src:e.childImageSharp.fluid.src,srcSet:e.childImageSharp.fluid.srcSet}))})))),l.a.createElement("div",{class:"product-details"},!!n.description&&l.a.createElement("div",{class:"product-description"},n.description),"active"===n.status&&l.a.createElement("div",null,l.a.createElement("input",{type:"hidden",name:"utf8",value:"✓"}),n.paypal_id&&l.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post"},l.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),l.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:n.paypal_id}),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"hidden",name:"on0",value:n.options_label}),n.options_value)),n.show_text_field&&l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"os0",maxlength:"200"}))),!!(null===(t=n.options)||void 0===t?void 0:t.length)&&l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{class:"select"},l.a.createElement("select",{class:"product_option_select",name:"os0","aria-label":"Select option"},n.options.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)}))),l.a.createElement("svg",{viewBox:"0 0 15 7.6",enableBackground:"new 0 0 15 7.6"},l.a.createElement("path",{d:"M15 1.1l-7.5 6.5-7.5-6.3 1-1.2 6.5 5.5 6.5-5.6z"}))))),l.a.createElement("input",{type:"hidden",name:"currency_code",value:"USD"}),l.a.createElement("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}),l.a.createElement("img",{class:"paypal-pixel",alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}))))))))}}}]);
//# sourceMappingURL=component---src-components-product-js-3d103e8a2cfa43f4898c.js.map