(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{MZF8:function(e,t,a){"use strict";var l=a("ogwx");a.d(t,"a",(function(){return l["b"]}));a("VCU9")},WpQk:function(e,t,a){},"dMo/":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("hKI/"),c=a.n(r);a("WpQk");function m(e,t){return i(e)||E(e,t)||d(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function E(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,r=[],c=!0,m=!1;try{for(a=a.call(e);!(c=(l=a.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(o){m=!0,n=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(m)throw n}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,a=Object(l["useRef"])(),r=Object(l["useState"])(!1),o=m(r,2),d=o[0],u=o[1],E=Object(l["useState"])(!1),i=m(E,2),s=i[0],f=i[1];return Object(l["useEffect"])((function(){var e=a.current,t=c()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":d||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},s67x:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("dEAq"),c=a("Zxc8"),m=a("dMo/"),o=n.a.memo((e=>{var t=e.demos,a=t["scatterdemo-demo1"].component,l=t["scatterdemo-demo2"].component,o=t["scatterdemo-demo3"].component,d=t["scatterdemo-demo4"].component,u=t["scatterdemo-demo5"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u76f4\u89d2\u5750\u6807\u7cfb\u6563\u70b9\u56fe"},n.a.createElement(r["AnchorLink"],{to:"#\u76f4\u89d2\u5750\u6807\u7cfb\u6563\u70b9\u56fe","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u76f4\u89d2\u5750\u6807\u7cfb\u6563\u70b9\u56fe"),n.a.createElement("h2",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u5fc5\u586b"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"xAxisData"),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"x \u8f74\u6570\u636e"),n.a.createElement("td",null,n.a.createElement("code",null,"any[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"unit"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5355\u4f4d"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"seriesData"),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u56fe\u8868\u6570\u636e"),n.a.createElement("td",null,n.a.createElement("code",null,"{"," name: string; data: (string | number)[] ","}","[]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6837\u5f0f"),n.a.createElement("td",null,n.a.createElement("code",null,"CSSProperties")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"autoLoop"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u63a7\u5236\u662f\u5426\u81ea\u52a8\u8f6e\u64ad"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"duration"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u52a8\u8f6e\u64ad\u7684\u65f6\u957f"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"2000"))),n.a.createElement("tr",null,n.a.createElement("td",null,"config"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49 Echarts \u914d\u7f6e"),n.a.createElement("td",null,n.a.createElement("code",null,"ECOption")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"inModal"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u662f\u5426\u5728\u5f39\u7a97\u5185\u663e\u793a"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"showYAxisLine"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u63a7\u5236\u662f\u5426\u663e\u793a y \u8f74\u7684\u7ebf"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"scatterColors"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u989c\u8272"),n.a.createElement("td",null,n.a.createElement("code",null,"[string, string][]")),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onEvents"),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"Record<string, (params?: any) => void>")),n.a.createElement("td",null)))),n.a.createElement("h2",{id:"\u6548\u679c\u56fe-1"},n.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u56fe-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u56fe 1")),n.a.createElement(c["default"],t["scatterdemo-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u6548\u679c\u56fe-2-\u81ea\u52a8\u8f6e\u64ad"},n.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u56fe-2-\u81ea\u52a8\u8f6e\u64ad","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u56fe 2 \u81ea\u52a8\u8f6e\u64ad")),n.a.createElement(c["default"],t["scatterdemo-demo2"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u6548\u679c\u56fe-3-\u8f6e\u64ad\u4e24\u6b21\u540e\u505c\u6b62"},n.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u56fe-3-\u8f6e\u64ad\u4e24\u6b21\u540e\u505c\u6b62","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u56fe 3 (\u8f6e\u64ad\u4e24\u6b21\u540e\u505c\u6b62)")),n.a.createElement(c["default"],t["scatterdemo-demo3"].previewerProps,n.a.createElement(o,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u6548\u679c\u56fe-4-\u5f39\u7a97"},n.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u56fe-4-\u5f39\u7a97","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u56fe 4 (\u5f39\u7a97)")),n.a.createElement(c["default"],t["scatterdemo-demo4"].previewerProps,n.a.createElement(d,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u6548\u679c\u56fe-5-\u624b\u52a8\u63a7\u5236\u56fe\u8868\u8f6e\u64ad"},n.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u56fe-5-\u624b\u52a8\u63a7\u5236\u56fe\u8868\u8f6e\u64ad","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u56fe 5 (\u624b\u52a8\u63a7\u5236\u56fe\u8868\u8f6e\u64ad)")),n.a.createElement(c["default"],t["scatterdemo-demo5"].previewerProps,n.a.createElement(u,null))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:a})}}}]);