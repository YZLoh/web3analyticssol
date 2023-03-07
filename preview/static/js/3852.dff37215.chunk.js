"use strict";(self.webpackChunkpurple_react_pro=self.webpackChunkpurple_react_pro||[]).push([[3852],{23852:function(t,n,e){e.r(n),e.d(n,{Notifications:function(){return F},default:function(){return _}});var i=e(15671),r=e(43144),o=e(60136),a=e(54062),s=e(72791),c=e(54164),l=e(52007),d=function(){return(d=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};var u={success:function(t){return s.createElement("svg",d({viewBox:"0 0 426.667 426.667",width:18,height:18},t),s.createElement("path",{d:"M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z",fill:"#6ac259"}))},warn:function(t){return s.createElement("svg",d({viewBox:"0 0 310.285 310.285",width:18,height:18},t),s.createElement("path",{d:"M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z",fill:"#FFDA44"}))},loading:function(t){return s.createElement("div",d({className:"ct-icon-loading"},t))},info:function(t){return s.createElement("svg",d({viewBox:"0 0 23.625 23.625",width:18,height:18},t),s.createElement("path",{d:"M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z",fill:"#006DF0"}))},error:function(t){return s.createElement("svg",d({viewBox:"0 0 51.976 51.976",width:18,height:18},t),s.createElement("path",{d:"M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z",fill:"#D80027"}))}},p={success:"#6EC05F",info:"#1271EC",warn:"#FED953",error:"#D60A2E",loading:"#0088ff"},f=function(t){var n,e,i,r,o="margin"+((t.position||"top-center").includes("bottom")?"Bottom":"Top"),a=["ct-toast",t.onClick?" ct-cursor-pointer":"","ct-toast-"+t.type].join(" "),c=((null===(e=t.bar)||void 0===e?void 0:e.size)||"3px")+" "+((null===(i=t.bar)||void 0===i?void 0:i.style)||"solid")+" "+((null===(r=t.bar)||void 0===r?void 0:r.color)||p[t.type]),l=u[t.type],f=(0,s.useState)(((n={opacity:0})[o]=-15,n)),m=f[0],h=f[1],b=d({paddingLeft:t.heading?25:void 0,minHeight:t.heading?50:void 0,borderLeft:c},m),x=function(){var n;h(((n={opacity:0})[o]="-15px",n)),setTimeout((function(){t.onHide(t.id,t.position)}),300)};(0,s.useEffect)((function(){var n,e=setTimeout((function(){var t;h(((t={opacity:1})[o]="15px",t))}),50);return 0!==t.hideAfter&&(n=setTimeout((function(){x()}),1e3*t.hideAfter)),function(){clearTimeout(e),n&&clearTimeout(n)}}),[]),(0,s.useEffect)((function(){t.show||x()}),[t.show]);var g={tabIndex:0,onClick:t.onClick,onKeyPress:function(n){13===n.keyCode&&t.onClick(n)}};return s.createElement("div",d({className:a,role:t.role?t.role:"status",style:b},t.onClick?g:{}),t.renderIcon?t.renderIcon():s.createElement(l,null),s.createElement("div",{className:t.heading?"ct-text-group-heading":"ct-text-group"},t.heading&&s.createElement("h4",{className:"ct-heading"},t.heading),s.createElement("div",{className:"ct-text"},t.text)))};f.propTypes={type:l.string.isRequired,text:(0,l.oneOfType)([l.string,l.node]).isRequired,show:l.bool,onHide:l.func,id:(0,l.oneOfType)([l.string,l.number]),hideAfter:l.number,heading:l.string,position:l.string,renderIcon:l.func,bar:(0,l.shape)({}),onClick:l.func,role:l.string},f.defaultProps={id:void 0,show:!0,onHide:void 0,hideAfter:3,heading:void 0,position:"top-center",renderIcon:void 0,bar:{},onClick:void 0,role:"status"};var m=function(t){return t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))},h={topLeft:[],topCenter:[],topRight:[],bottomLeft:[],bottomCenter:[],bottomRight:[]},b=function(t){var n=t.toast,e=t.hiddenID,i=(0,s.useState)(h),r=i[0],o=i[1];(0,s.useEffect)((function(){n&&o((function(t){var e,i=m(n.position||"top-center");return d(d({},t),((e={})[i]=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var i=Array(t),r=0;for(n=0;n<e;n++)for(var o=arguments[n],a=0,s=o.length;a<s;a++,r++)i[r]=o[a];return i}(t[i],[n]),e))}))}),[n]);var a=function(t,n){o((function(e){var i,r=m(n||"top-center");return d(d({},e),((i={})[r]=e[r].filter((function(n){return n.id!==t})),i))}))},c=["Left","Center","Right"];return s.createElement(s.Fragment,null,["top","bottom"].map((function(t){return s.createElement("div",{key:"row_"+t,className:"ct-row"},c.map((function(n){var i=""+t+n,o=["ct-group","bottom"===t?"ct-flex-bottom":""].join(" ");return s.createElement("div",{key:i,className:o},r[i].map((function(t){return s.createElement(f,d({key:i+"_"+t.id},t,{id:t.id,text:t.text,type:t.type,onClick:t.onClick,hideAfter:t.hideAfter,show:e!==t.id,onHide:a}))})))})))})))};b.propTypes={toast:(0,l.shape)({}),hiddenID:l.number},b.defaultProps={toast:void 0,hiddenID:void 0};!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===e&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}("#ct-container {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100vh;\n\ttop: 0px;\n\tleft: 0px;\n\tz-index: 2000;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpointer-events: none;\n}\n\n.ct-row {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.ct-group {\n\tflex: 1;\n\tmargin: 10px 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.ct-group:first-child {\n\talign-items: flex-start;\n}\n\n.ct-group:last-child {\n\talign-items: flex-end;\n}\n\n.ct-flex-bottom {\n\tjustify-content: flex-end;\n}\n\n.ct-toast {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 12px 20px;\n\tbackground-color: #fff;\n\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n\tcolor: #000;\n\tborder-radius: 4px;\n\tmargin: 0px;\n\topacity: 1;\n\ttransition: 0.3s all ease-in-out;\n\tmin-height: 45px;\n\tpointer-events: all;\n}\n\n.ct-toast:focus {\n\toutline: none;\n}\n\n.ct-toast svg {\n\tmin-width: 18px;\n}\n\n.ct-cursor-pointer {\n\tcursor: pointer;\n}\n\n.ct-icon-loading {\n\tdisplay: inline-block;\n\twidth: 20px;\n\theight: 20px;\n}\n\n.ct-icon-loading:after {\n\tcontent: ' ';\n\tdisplay: block;\n\twidth: 14px;\n\theight: 14px;\n\tmargin: 1px;\n\tborder-radius: 50%;\n\tborder: 2px solid #0088ff;\n\tborder-color: #0088ff transparent #0088ff transparent;\n\tanimation: ct-icon-loading 1.2s linear infinite;\n}\n\n@keyframes ct-icon-loading {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.ct-text-group {\n\tmargin-left: 15px;\n}\n\n.ct-text-group-heading {\n\tmargin-left: 25px;\n}\n\n.ct-heading {\n\tfont-size: 18px;\n\tmargin: 0px;\n\tmargin-bottom: 5px;\n}\n\n.ct-text {\n\tfont-size: 14px;\n}\n\n@media (max-width: 768px) {\n\t.ct-row {\n\t\tjustify-content: flex-start;\n\t\tflex-direction: column;\n\t\tmargin: 7px 0px;\n\t}\n\n\t.ct-group {\n\t\tflex: none;\n\t\tmargin: 0px;\n\t}\n\n\t.ct-toast {\n\t\tmargin: 8px 15px;\n\t\twidth: initial;\n\t}\n}\n");var x=0,g=function(t,n){var e,i,r=document.getElementById((null===(e=n)||void 0===e?void 0:e.toastContainerID)||"ct-container");r||((r=document.createElement("div")).id="ct-container",document.body.appendChild(r)),x+=1;var o=1e3*(void 0===(null===(i=n)||void 0===i?void 0:i.hideAfter)?3:n.hideAfter),a=d({id:x,text:t},n);c.render(s.createElement(b,{toast:a}),r);var l=new Promise((function(t){setTimeout((function(){t()}),o)}));return l.hide=function(){c.render(s.createElement(b,{hiddenID:a.id}),r)},l};g.success=function(t,n){return g(t,d(d({},n),{type:"success"}))},g.warn=function(t,n){return g(t,d(d({},n),{type:"warn"}))},g.info=function(t,n){return g(t,d(d({},n),{type:"info"}))},g.error=function(t,n){return g(t,d(d({},n),{type:"error"}))},g.loading=function(t,n){return g(t,d(d({},n),{type:"loading"}))};var v=g,y=e(1413),j=e(45987),N=e(81694),w=e.n(N),C=e(32592),k=e(39007),E=e(16445),T=e(10162),Z=e(72709),A=e(80473),z=e(27472),B=e(66543),L=e(80184),I=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],D=(0,z.Z)("h4");D.displayName="DivStyledAsH4";var R=(0,B.Z)("alert-heading",{Component:D}),S=(0,B.Z)("alert-link",{Component:E.Z}),H={variant:"primary",show:!0,transition:Z.Z,closeLabel:"Close alert"},O=s.forwardRef((function(t,n){var e=(0,C.Ch)(t,{show:"onClose"}),i=e.bsPrefix,r=e.show,o=e.closeLabel,a=e.closeVariant,s=e.className,c=e.children,l=e.variant,d=e.onClose,u=e.dismissible,p=e.transition,f=(0,j.Z)(e,I),m=(0,T.vE)(i,"alert"),h=(0,k.Z)((function(t){d&&d(!1,t)})),b=!0===p?Z.Z:p,x=(0,L.jsxs)("div",(0,y.Z)((0,y.Z)({role:"alert"},b?void 0:f),{},{ref:n,className:w()(s,m,l&&"".concat(m,"-").concat(l),u&&"".concat(m,"-dismissible")),children:[u&&(0,L.jsx)(A.Z,{onClick:h,"aria-label":o,variant:a}),c]}));return b?(0,L.jsx)(b,(0,y.Z)((0,y.Z)({unmountOnExit:!0},f),{},{ref:void 0,in:r,children:x})):r?x:null}));O.displayName="Alert",O.defaultProps=H;var P=Object.assign(O,{Link:S,Heading:R}),F=function(t){(0,o.Z)(e,t);var n=(0,a.Z)(e);function e(){var t;(0,i.Z)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))).toastoptions={hideAfter:5,position:"top-right",heading:"Attention"},t}return(0,r.Z)(e,[{key:"render",value:function(){var t=this;return(0,L.jsxs)("div",{children:[(0,L.jsxs)("div",{className:"page-header",children:[(0,L.jsx)("h3",{className:"page-title",children:"Notifications"}),(0,L.jsx)("nav",{"aria-label":"breadcrumb",children:(0,L.jsxs)("ol",{className:"breadcrumb",children:[(0,L.jsx)("li",{className:"breadcrumb-item",children:(0,L.jsx)("a",{href:"!#",onClick:function(t){return t.preventDefault()},children:"UI Features"})}),(0,L.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Notifications"})]})})]}),(0,L.jsxs)("div",{className:"row",children:[(0,L.jsx)("div",{className:"col-12 grid-margin",children:(0,L.jsx)("div",{className:"card px-3",children:(0,L.jsxs)("div",{className:"card-body",children:[(0,L.jsx)("h4",{className:"card-title",children:"Toast Styles"}),(0,L.jsx)("p",{className:"card-description mb-0",children:"Click on the below buttons for notifications in different styles."}),(0,L.jsx)("p",{className:"card-description",children:"Specify the predefined types of toasts - success, info, warn and error"}),(0,L.jsxs)("div",{className:"template-demo d-flex justify-content-md-between flex-wrap",children:[(0,L.jsx)("button",{type:"button",className:"btn btn-gradient-success btn-fw",onClick:function(){return v.success("This is a success message!",t.toastoptions)},children:"Success"}),(0,L.jsx)("button",{type:"button",className:"btn btn-gradient-info btn-fw",onClick:function(){return v.info("This is a success message!",t.toastoptions)},children:"Info"}),(0,L.jsx)("button",{type:"button",className:"btn btn-gradient-warning btn-fw",onClick:function(){return v.warn("This is a success message!",t.toastoptions)},children:"Warning"}),(0,L.jsx)("button",{type:"button",className:"btn btn-gradient-danger btn-fw",onClick:function(){return v.error("This is a success message!",t.toastoptions)},children:"Error"})]})]})})}),(0,L.jsx)("div",{className:"col-12 grid-margin",children:(0,L.jsx)("div",{className:"card px-3",children:(0,L.jsxs)("div",{className:"card-body",children:[(0,L.jsx)("h4",{className:"card-title",children:"Toast Positions"}),(0,L.jsxs)("p",{className:"card-description mb-0",children:["The ",(0,L.jsx)("code",{children:"position"})," property can be used to specify the predefined positions of toasts."]}),(0,L.jsx)("p",{className:"card-description",children:"Specify the predefined types of toasts - success, info, warn and error"}),(0,L.jsxs)("div",{className:"template-demo d-flex justify-content-md-between flex-wrap",children:[(0,L.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return v.info("Top Left!",{position:"top-left"})},children:"Top Left"}),(0,L.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return v.info("Top Center!",{position:"top-center"})},children:"Top Center"}),(0,L.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return v.info("Top Right!",{position:"top-right"})},children:"Top Right"}),(0,L.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return v.info("Bottom Left!",{position:"bottom-left"})},children:"Bottom Left"}),(0,L.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return v.info("Bottom Center!",{position:"bottom-center"})},children:"Bottom Center"}),(0,L.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return v.info("Bottom Right!",{position:"bottom-right"})},children:"Bottom Right"})]})]})})}),(0,L.jsx)("div",{className:"col-md-6 grid-margin stretch-card",children:(0,L.jsx)("div",{className:"card",children:(0,L.jsxs)("div",{className:"card-body",children:[(0,L.jsx)("h4",{className:"card-title",children:"Bootstrap alert"}),(0,L.jsxs)("p",{className:"card-description",children:["Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight ",(0,L.jsx)("code",{children:"variant"}),"s."]}),["primary","secondary","success","danger","warning","info","light","dark"].map((function(t,n){return(0,L.jsxs)(P,{variant:t,children:["This is a ",t," alert\u2014check it out!"]},n)}))]})})}),(0,L.jsx)("div",{className:"col-md-6 grid-margin stretch-card",children:(0,L.jsx)("div",{className:"card",children:(0,L.jsxs)("div",{className:"card-body",children:[(0,L.jsx)("h4",{className:"card-title",children:"Custom alert"}),(0,L.jsx)("p",{className:"card-description",children:"Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy."}),(0,L.jsxs)(P,{variant:"secondary",children:[(0,L.jsx)("p",{className:"p-3 mb-0",children:"Well done! You successfully read this important alert message."}),(0,L.jsxs)("p",{className:"mb-0 p-3",children:[(0,L.jsx)("button",{className:"btn btn-secondary mb-2",children:"Ok"}),(0,L.jsx)("button",{className:"btn btn-inverse-secondary mb-2",children:"Cancel"})]})]}),(0,L.jsxs)(P,{variant:"info",children:[(0,L.jsx)("p",{className:"p-3 mb-0",children:"Heads up! This alert needs your attention, but it's not super important."}),(0,L.jsxs)("p",{className:"mb-0 p-3",children:[(0,L.jsx)("button",{className:"btn btn-info mb-2",children:"Ok"}),(0,L.jsx)("button",{className:"btn btn-light mb-2",children:"Cancel"})]})]})]})})})]})]})}}]),e}(s.Component),_=F},80473:function(t,n,e){var i=e(1413),r=e(45987),o=e(18600),a=e.n(o),s=e(72791),c=e(81694),l=e.n(c),d=e(80184),u=["className","variant"],p={"aria-label":a().string,onClick:a().func,variant:a().oneOf(["white"])},f=s.forwardRef((function(t,n){var e=t.className,o=t.variant,a=(0,r.Z)(t,u);return(0,d.jsx)("button",(0,i.Z)({ref:n,type:"button",className:l()("btn-close",o&&"btn-close-".concat(o),e)},a))}));f.displayName="CloseButton",f.propTypes=p,f.defaultProps={"aria-label":"Close"},n.Z=f},27472:function(t,n,e){var i=e(1413),r=e(72791),o=e(81694),a=e.n(o),s=e(80184);n.Z=function(t){return r.forwardRef((function(n,e){return(0,s.jsx)("div",(0,i.Z)((0,i.Z)({},n),{},{ref:e,className:a()(n.className,t)}))}))}}}]);
//# sourceMappingURL=3852.dff37215.chunk.js.map