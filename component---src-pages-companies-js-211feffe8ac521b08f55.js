(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{133:function(e,a,t){"use strict";t.r(a);var n=t(144),l=t(231),i=t(138),c=t(145),s=t(161),o=t(0),r=t.n(o),m=t(160);a.default=function(){return r.a.createElement(s.a,null,r.a.createElement(m.a,{title:"Companies"}),r.a.createElement(i.a,{className:"container"},r.a.createElement(n.a,{className:"col-10 spacing",heading:{title:"Developer stories",level:"h1"},headingFontSize:"3rem"}),r.a.createElement(i.a,{className:"spacing"}),r.a.createElement(l.a,null)),r.a.createElement(c.a,null))}},143:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},144:function(e,a,t){"use strict";t.d(a,"a",function(){return d});t(28),t(153);var n=t(140),l=t.n(n),i=(t(158),t(166)),c=t.n(i),s=t(155),o=t.n(s),r=t(4),m=t.n(r),g=t(0),A=t.n(g),p=t(159),E=t.n(p),u=t(138),d=function(e){var a=e.text,t=e.className,n=e.heading,i=e.headingFontSize,s=e.bold,r=e.centered,m=e.noPadding,g=e.headingFont,p=l()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),d=[];r&&d.push("centered"),s&&d.push("bold"),m&&d.push("body-text--no-padding"),g&&d.push("heading-font");var h={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"github-logo"===t.class)return A.a.createElement(u.a,{flex:!0,autoBottomMargin:!0,className:"github-logo__container"},A.a.createElement("img",{style:{maxWidth:"1rem",maxHeight:"1rem",margin:"auto 0"},alt:"github-logo",src:E.a}),A.a.createElement("p",{style:{marginLeft:"0.611rem"}},o()(n,h)))}};return A.a.createElement("div",Object.assign({className:"body-text "+t},p),n.title&&function(){if(n){var e=n.level;return A.a.createElement(e,{className:"body-text__title",style:i?{fontSize:i}:{}},n.title)}return null}(),a&&"string"==typeof a?A.a.createElement("p",{className:"body-text__content "+d.join(" ")},a):a&&a.map(function(e){return A.a.createElement("div",{key:e,className:"body-text__content "+d.join(" ")},c()(e,h))}))};d.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},d.propTypes={heading:m.a.shape({text:m.a.string,level:m.a.string}),headingFontSize:m.a.string,text:m.a.oneOfType([m.a.string,m.a.array]),className:m.a.string,centered:m.a.bool,bold:m.a.bool,noPadding:m.a.bool}},145:function(e,a,t){"use strict";t(146);var n=t(139),l=t(0),i=t.n(l),c=t(149),s=t.n(c),o=t(150),r=t.n(o),m=t(138),g=t(148),A=t(162),p=[{src:s.a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:r.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(){return i.a.createElement(m.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},i.a.createElement(m.a,{className:"col-5 col-10--mobile order-2--mobile footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return i.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},i.a.createElement(g.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),i.a.createElement(m.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile footer__navigation"},A.b.map(function(e){return i.a.createElement(n.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover col-10--mobile",style:{marginLeft:"4.5rem"}},e.text)})))}},146:function(e,a,t){},158:function(e,a,t){},159:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},163:function(e,a,t){var n=t(22).f,l=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in l||t(14)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},196:function(e,a,t){"use strict";t.d(a,"a",function(){return g});t(28),t(197),t(163),t(230);var n=t(139),l=t(4),i=t(0),c=t.n(i),s=t(143),o=t(148),r=t(171),m=function(e,a){e.currentTarget.firstElementChild.firstElementChild.firstElementChild.src=a},g=function(e){var a=e.image,t=e.hoverImageSrc,l=e.background,i=void 0===l?"main":l,g=e.name,A=e.summary,p=e.path,E=e.small,u=e.className,d=[];return E&&d.push("content-liftup--small"),p?c.a.createElement("div",{className:"content-liftup col-3 "+u+" "+d.join(" ")},c.a.createElement(r.a,{largeMargin:!0},c.a.createElement(n.Link,{to:p,onMouseOver:function(e){m(e,t||a.src)},onMouseOut:function(e){m(e,a.src)}},c.a.createElement(o.a,Object.assign({},a,{className:"content-liftup__image image--square-big",overlay:s[i]})))),c.a.createElement("p",{className:"content-liftup__name"},g),c.a.createElement("p",{className:"content-liftup__summary"},A)):c.a.createElement("div",{className:"content-liftup "+u+" "+d.join(" ")+" no-hover"},c.a.createElement(o.a,Object.assign({},a,{contain:!0,className:"content-liftup__image image--square-big"})),g&&c.a.createElement("p",{className:"content-liftup__name"},g),A&&c.a.createElement("p",{className:"content-liftup__summary"},A))};g.defaultProps={className:"",published:"",path:""},g.propTypes={className:l.PropTypes.string,image:l.PropTypes.shape({alt:l.PropTypes.string.isRequired,src:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.object]).isRequired}),hoverImageSrc:l.PropTypes.string,name:l.PropTypes.string,summary:l.PropTypes.string,path:l.PropTypes.string,small:l.PropTypes.bool}},230:function(e,a,t){},231:function(e,a,t){"use strict";t.d(a,"a",function(){return B});var n=t(144),l=t(196),i=t(138),c=t(0),s=t.n(c),o=t(232),r=t.n(o),m=t(150),g=t.n(m),A=t(233),p=t.n(A),E=t(234),u=t.n(E),d=t(235),h=t.n(d),b=t(149),f=t.n(b),B=function(){return s.a.createElement(i.a,{className:"container spacing--after",flex:!0},s.a.createElement(n.a,{centered:!0,className:"col-4 push-right-3",text:"These companies are taking the Full Stack Challenge"}),s.a.createElement(i.a,{flex:!0,spaceBetween:!0,className:"col-6 push-right-2"},s.a.createElement(l.a,{small:!0,image:{src:f.a,alt:"Helsingin yliopisto logo"},className:"col-2 col-4--mobile"}),s.a.createElement(l.a,{small:!0,image:{src:g.a,alt:"Houston Inc. logo"},className:"col-2 push-right-2 col-4--mobile"}),s.a.createElement(l.a,{small:!0,image:{src:h.a,alt:"Terveystalo logo"},className:"col-2 push-right-2 col-4--mobile"}),s.a.createElement(l.a,{small:!0,image:{src:p.a,alt:"Nokia logo"},className:"col-2 col-4--mobile"}),s.a.createElement(l.a,{small:!0,image:{src:r.a,alt:"Elisa logo"},className:"col-2 col-4--mobile"}),s.a.createElement(l.a,{small:!0,image:{src:u.a,alt:"Storaenso logo"},className:"col-2 col-4--mobile"})))}},232:function(e,a,t){e.exports=t.p+"static/Elisa_logo_black-26928a49fa4d7dad509c5ee216a6ac77.png"},233:function(e,a){e.exports="data:image/png;base64,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"},234:function(e,a,t){e.exports=t.p+"static/SE_Color_WebLogo_RGB-dfc981e25372c6f1e5b0e7d60e73f393.jpg"},235:function(e,a,t){e.exports=t.p+"static/terveystalo-logo-720383e2801a1f7da28258d7ceacb0a5.png"}}]);
//# sourceMappingURL=component---src-pages-companies-js-211feffe8ac521b08f55.js.map