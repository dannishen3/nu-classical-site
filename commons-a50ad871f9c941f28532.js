(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3BkB":function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB3aaIxooq7ALQf//EABsQAQACAgMAAAAAAAAAAAAAAAECEQADBBIy/9oACAEBAAEFApSIjs6zzk3a2R8oIa4jn//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAARAQIQITFBUZH/2gAIAQEABj8CckRxbbFeh+EM1Gsf/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAQRAhMVH/2gAIAQEAAT8hYlCOZnoA5iwIvCCZo2jeiIQMRAbY/9oADAMBAAIAAwAAABBryAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhEDFBUWHR/9oACAEBAAE/EO/gCy7wBB4UBfX7wje/UaKe8h6CQRPz1nnGu7jg7eHOrB1Wzj//2Q==","aspectRatio":1.0135135135135136,"src":"/shop/static/f82cc98bf23d6099adbe8c5641dd069c/9dc27/nu_classics_round.jpg","srcSet":"/shop/static/f82cc98bf23d6099adbe8c5641dd069c/25b50/nu_classics_round.jpg 75w,\\n/shop/static/f82cc98bf23d6099adbe8c5641dd069c/aabdf/nu_classics_round.jpg 150w,\\n/shop/static/f82cc98bf23d6099adbe8c5641dd069c/9dc27/nu_classics_round.jpg 300w,\\n/shop/static/f82cc98bf23d6099adbe8c5641dd069c/32fd5/nu_classics_round.jpg 450w,\\n/shop/static/f82cc98bf23d6099adbe8c5641dd069c/4fe8c/nu_classics_round.jpg 600w,\\n/shop/static/f82cc98bf23d6099adbe8c5641dd069c/bb137/nu_classics_round.jpg 652w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var A,l=[];function s(){A=e(l.map((function(e){return e.props}))),u.canUseDOM?t(A):n&&(A=n(A))}var u=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return A},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=A;return A=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(u,"canUseDOM",c),u}}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("f98A"),a=n("q1tI"),o=n.n(a),i=n("3BkB"),c=n("Wbzz"),A=function(e){e.siteTitle;var t,n,r=i.data;return o.a.createElement("header",null,o.a.createElement("div",{class:"wrapper"},o.a.createElement("nav",{class:"header-nav",role:"navigation","aria-label":"Main"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/"},"Products")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement("form",{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"},o.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),o.a.createElement("input",{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----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-----END PKCS7-----"}),o.a.createElement("button",{class:"fake-anchor",type:"submit",value:"checkout",border:"0",name:"Checkout",alt:"PayPal - The safer, easier way to pay online!"},"Checkout"),o.a.createElement("img",{class:"paypal-pixel",alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}))))),o.a.createElement("div",{class:"branding"},o.a.createElement(c.Link,{to:"/",title:"home"},o.a.createElement("img",{class:"store-logo",srcSet:null===(t=r.placeholderImage)||void 0===t?void 0:t.childImageSharp.fluid.srcSet,src:null===(n=r.placeholderImage)||void 0===n?void 0:n.childImageSharp.fluid.src,alt:"Danni Studio Home"})))),o.a.createElement("nav",{class:"header-nav mobile-nav","aria-label":"Mobile Main",role:"navigation"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/"},"Products")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement("form",{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"},o.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),o.a.createElement("input",{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----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-----END PKCS7-----"}),o.a.createElement("button",{class:"fake-anchor",type:"submit",value:"checkout",border:"0",name:"Checkout",alt:"PayPal - The safer, easier way to pay online!"},"Checkout"),o.a.createElement("img",{class:"paypal-pixel",alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}))))))};A.defaultProps={siteTitle:""};var l=A,s=(n("8ypT"),n("z6iW"),n("aHAw"),n("r++n"),n("f4lz"),n("qhky")),u=function(e){e.siteTitle;return o.a.createElement("footer",null,o.a.createElement("div",{class:"wrapper"},o.a.createElement("nav",{class:"footer-nav",id:"footer",role:"navigation","aria-label":"Footer"},o.a.createElement("ul",{class:"footer-links"},o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/"},"Products")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement("form",{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"},o.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),o.a.createElement("input",{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----MIIG1QYJKoZIhvcNAQcEoIIGxjCCBsICAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAHyFoTkcIuFloWifkAzZAHDik/ALtMeU5LBQwpYwC0ObU3Whlmlo8CZreeeT0HIAeV8+TN/XatxZ0nBSCUe14qIrwotBqve0si6HTMVV1G2MM3rd0qlXKItSRIaUyDn9XRnA1s3w8euIeG2kdKx5FhjUN0ZPAdRLnBsibLCrsMdTELMAkGBSsOAwIaBQAwUwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAiSJWfpP71WH4AwfYQX/DYByIXANJ2OKBkmozoB/rbDKqNWnhjh+A+kNE1ZkxrMJohYejtTThFDVeljoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjAwODAyMDIyNTQ4WjAjBgkqhkiG9w0BCQQxFgQULBTtE6aLto9ecrgZSgIoHeczj5cwDQYJKoZIhvcNAQEBBQAEgYAeFCsJsDw4fzwhzCcks8Xtt46qeSKqxHPHpfzJfR5SDRLX1WhktS7U66G/xDM+JTyMuCpksaIpmK7MpiDuOBLVPa6chsQo6bWYjiv/eZi2WO73Ae1ERliGOqRWi+BdZpt6v0m3Lh2EjLp1Hl64dJTfGQLPNfryFMA2QcoY5BUlMw==-----END PKCS7-----"}),o.a.createElement("button",{class:"fake-anchor",type:"submit",value:"checkout",border:"0",name:"Checkout",alt:"PayPal - The safer, easier way to pay online!"},"Checkout"),o.a.createElement("img",{class:"paypal-pixel",alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"})))))))};u.defaultProps={siteTitle:""};var f=u;t.a=function(e){var t=e.children,n=e.bodyAttributes,a=e.aside,i=r.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.b,{bodyAttributes:n},o.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css?family=Montserrat:400,500,700|Varela+Round"})),o.a.createElement(l,{siteTitle:i.site.siteMetadata.title}),o.a.createElement("main",{class:"main",id:"main"},o.a.createElement("div",{class:"fade-in wrapper"},t)),a,o.a.createElement(f,null))}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),A=n("C/va"),l=r.RegExp,s=l,u=l.prototype,f=/a/g,p=/a/g,d=new l(f)!==f;if(n("nh4g")&&(!d||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,l(f)!=f||l(p)==p||"/a/i"!=l(f,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),o=void 0===t;return!n&&r&&e.constructor===l&&o?e:a(d?new s(r&&!o?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&o?A.call(e):t),n?this:u,l)};for(var h=function(e){e in l||o(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},B=i(s),E=0;B.length>E;)h(B[E++]);u.constructor=l,l.prototype=u,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},ZhWT:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,A,l,s;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(A=c;0!=A--;)if(!e(t[A],n[A]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(s=t.entries();!(A=s.next()).done;)if(!n.has(A.value[0]))return!1;for(s=t.entries();!(A=s.next()).done;)if(!e(A.value[1],n.get(A.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(s=t.entries();!(A=s.next()).done;)if(!n.has(A.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(A=c;0!=A--;)if(t[A]!==n[A])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(A=c;0!=A--;)if(!Object.prototype.hasOwnProperty.call(n,l[A]))return!1;if(r&&t instanceof Element)return!1;for(A=c;0!=A--;)if(("_owner"!==l[A]&&"__v"!==l[A]&&"__o"!==l[A]||!t.$$typeof)&&!e(t[l[A]],n[l[A]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},aHAw:function(e,t,n){},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},f4lz:function(e,t,n){},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}')},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,c=n("17x9"),A=n.n(c),l=n("8+s/"),s=n.n(l),u=n("ZhWT"),f=n.n(u),p=n("q1tI"),d=n.n(p),h=n("MgzW"),B=n.n(h),E="bodyAttributes",w="htmlAttributes",g="titleAttributes",m={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Q=(Object.keys(m).map((function(e){return m[e]})),"charset"),b="cssText",C="href",y="http-equiv",M="innerHTML",T="itemprop",I="name",G="property",v="rel",D="src",Y="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",j="defer",V="encodeSpecialCharacters",N="onChangeClientState",S="titleTemplate",U=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),L=[m.NOSCRIPT,m.SCRIPT,m.STYLE],R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=_(e,m.TITLE),n=_(e,S);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,x);return t||r||void 0},P=function(e){return _(e,N)||function(){}},H=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[m.BASE]})).map((function(e){return e[m.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],A=c.toLowerCase();-1===t.indexOf(A)||n===v&&"canonical"===e[n].toLowerCase()||A===v&&"stylesheet"===e[A].toLowerCase()||(n=A),-1===t.indexOf(c)||c!==M&&c!==b&&c!==T||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],A=B()({},r[c],a[c]);r[c]=A}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,A=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,u=e.title,f=e.titleAttributes;Ae(m.BODY,r),Ae(m.HTML,a),ce(u,f);var p={baseTag:le(m.BASE,n),linkTags:le(m.LINK,o),metaTags:le(m.META,i),noscriptTags:le(m.NOSCRIPT,c),scriptTags:le(m.SCRIPT,l),styleTags:le(m.STYLE,s)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),A(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),Ae(m.TITLE,t)},Ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var A=i[c],l=t[A]||"";n.getAttribute(A)!==l&&n.setAttribute(A,l),-1===a.indexOf(A)&&a.push(A);var s=o.indexOf(A);-1!==s&&o.splice(s,1)}for(var u=o.length-1;u>=0;u--)n.removeAttribute(o[u]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(m.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===M)n.innerHTML=t.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case m.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=ue(n,r),[d.a.createElement(m.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+J(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case E:case w:return{toComponent:function(){return ue(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===M||n===b){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===M||e===b)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===L.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,A=e.scriptTags,l=e.styleTags,s=e.title,u=void 0===s?"":s,f=e.titleAttributes;return{base:fe(m.BASE,t,r),bodyAttributes:fe(E,n,r),htmlAttributes:fe(w,a,r),link:fe(m.LINK,o,r),meta:fe(m.META,i,r),noscript:fe(m.NOSCRIPT,c,r),script:fe(m.SCRIPT,A,r),style:fe(m.STYLE,l,r),title:fe(m.TITLE,{title:u,titleAttributes:f},r)}},de=s()((function(e){return{baseTag:K([C,Y],e),bodyAttributes:H(E,e),defer:_(e,j),encode:_(e,V),htmlAttributes:H(w,e),linkTags:q(m.LINK,[v,C],e),metaTags:q(m.META,[I,Q,y,G,T],e),noscriptTags:q(m.NOSCRIPT,[M],e),onChangeClientState:P(e),scriptTags:q(m.SCRIPT,[D,M],e),styleTags:q(m.STYLE,[b],e),title:z(e),titleAttributes:H(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return W(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.SCRIPT:case m.NOSCRIPT:return{innerHTML:t};case m.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case m.TITLE:return F({},a,((t={})[r.type]=i,t.titleAttributes=F({},o),t));case m.BODY:return F({},a,{bodyAttributes:F({},o)});case m.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(X(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case m.LINK:case m.META:case m.NOSCRIPT:case m.SCRIPT:case m.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=X(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},O(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:A.a.object,bodyAttributes:A.a.object,children:A.a.oneOfType([A.a.arrayOf(A.a.node),A.a.node]),defaultTitle:A.a.string,defer:A.a.bool,encodeSpecialCharacters:A.a.bool,htmlAttributes:A.a.object,link:A.a.arrayOf(A.a.object),meta:A.a.arrayOf(A.a.object),noscript:A.a.arrayOf(A.a.object),onChangeClientState:A.a.func,script:A.a.arrayOf(A.a.object),style:A.a.arrayOf(A.a.object),title:A.a.string,titleAttributes:A.a.object,titleTemplate:A.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.b=he}).call(this,n("yLpj"))},"r++n":function(e,t,n){},vrFN:function(e,t,n){"use strict";var r=n("51K9"),a=n("q1tI"),o=n.n(a),i=n("qhky");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,A=r.data.site,l=t||A.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+A.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},z6iW:function(e,t,n){}}]);
//# sourceMappingURL=commons-a50ad871f9c941f28532.js.map