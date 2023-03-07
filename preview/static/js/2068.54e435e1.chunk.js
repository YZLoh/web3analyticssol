"use strict";(self.webpackChunkpurple_react_pro=self.webpackChunkpurple_react_pro||[]).push([[2068,8542],{3593:function(e,t,n){var a=n(4942),o=n(1413),i=n(45987),r=n(81694),l=n.n(r),s=n(72791),c=n(10162),u=n(11701),p=n(80184),d=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],h=["isChild"],y=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function f(e,t,n){var a=(e-t)/(n-t)*100;return Math.round(1e3*a)/1e3}function v(e,t){var n,r=e.min,s=e.now,c=e.max,u=e.label,h=e.visuallyHidden,y=e.striped,v=e.animated,b=e.className,m=e.style,g=e.variant,k=e.bsPrefix,S=(0,i.Z)(e,d);return(0,p.jsx)("div",(0,o.Z)((0,o.Z)({ref:t},S),{},{role:"progressbar",className:l()(b,"".concat(k,"-bar"),(n={},(0,a.Z)(n,"bg-".concat(g),g),(0,a.Z)(n,"".concat(k,"-bar-animated"),v),(0,a.Z)(n,"".concat(k,"-bar-striped"),v||y),n)),style:(0,o.Z)({width:"".concat(f(s,r,c),"%")},m),"aria-valuenow":s,"aria-valuemin":r,"aria-valuemax":c,children:h?(0,p.jsx)("span",{className:"visually-hidden",children:u}):u}))}var b=s.forwardRef((function(e,t){var n=e.isChild,a=(0,i.Z)(e,h);if(a.bsPrefix=(0,c.vE)(a.bsPrefix,"progress"),n)return v(a,t);var r=a.min,d=a.now,f=a.max,b=a.label,m=a.visuallyHidden,g=a.striped,k=a.animated,S=a.bsPrefix,C=a.variant,M=a.className,w=a.children,x=(0,i.Z)(a,y);return(0,p.jsx)("div",(0,o.Z)((0,o.Z)({ref:t},x),{},{className:l()(M,S),children:w?(0,u.UI)(w,(function(e){return(0,s.cloneElement)(e,{isChild:!0})})):v({min:r,now:d,max:f,label:b,visuallyHidden:m,striped:g,animated:k,bsPrefix:S,variant:C},t)}))}));b.displayName="ProgressBar",b.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},t.Z=b},12332:function(e,t,n){var a=n(72791);function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?y(e):t}var v={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},b={empty:u({},v,{backgroundColor:"#ccc"}),full:u({},v,{backgroundColor:"black"}),placeholder:u({},v,{backgroundColor:"red"})},m=function(e){return a.isValidElement(e)?e:"object"===o(e)&&null!==e?a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?a.createElement("span",{className:e}):void 0},g=function(e){function t(){return i(this,t),f(this,d(t).apply(this,arguments))}return p(t,e),l(t,[{key:"render",value:function(){var e,t=this.props,n=t.index,o=t.inactiveIcon,i=t.activeIcon,r=t.percent,l=t.direction,c=t.readonly,u=t.onClick,p=t.onMouseMove,d=m(o),h=r<100?{}:{visibility:"hidden"},y=m(i),f=(s(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===l?"right":"left",0),s(e,"width","".concat(r,"%")),e),v={cursor:c?"inherit":"pointer",display:"inline-block",position:"relative"};function b(e){p&&p(n,e)}function g(e){u&&(e.preventDefault(),u(n,e))}return a.createElement("span",{style:v,onClick:g,onMouseMove:b,onTouchMove:b,onTouchEnd:g},a.createElement("span",{style:h},d),a.createElement("span",{style:f},y))}}]),t}(a.PureComponent),k=function(e){function t(e){var n;return i(this,t),(n=f(this,d(t).call(this,e))).state={displayValue:n.props.value,interacting:!1},n.onMouseLeave=n.onMouseLeave.bind(y(y(n))),n.symbolMouseMove=n.symbolMouseMove.bind(y(y(n))),n.symbolClick=n.symbolClick.bind(y(y(n))),n}return p(t,e),l(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(n){return{displayValue:t?e.value:n.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.props.onClick(n,t)}},{key:"symbolMouseMove",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:n})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var n=this.calculateHoverPercentage(t),a=Math.ceil(n%1*this.props.fractions)/this.props.fractions,o=Math.pow(10,3),i=e+(Math.floor(n)+Math.floor(a*o)/o);return i>0?i>this.props.totalSymbols?this.props.totalSymbols:i:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,n=e.target.getBoundingClientRect(),a="rtl"===this.props.direction?n.right-t:t-n.left;return a<0?0:a/n.width}},{key:"render",value:function(){var e,t=this.props,n=t.readonly,o=t.quiet,i=t.totalSymbols,r=t.value,l=t.placeholderValue,s=t.direction,p=t.emptySymbol,d=t.fullSymbol,h=t.placeholderSymbol,y=t.className,f=t.id,v=t.style,b=t.tabIndex,m=this.state,k=m.displayValue,S=m.interacting,C=[],M=[].concat(p),w=[].concat(d),x=[].concat(h),P=0!==l&&0===r&&!S;e=P?l:o?r:k;for(var V=Math.floor(e),O=0;O<i;O++){var E=void 0;E=O-V<0?100:O-V===0?100*(e-O):0,C.push(a.createElement(g,c({key:O,index:O,readonly:n,inactiveIcon:M[O%M.length],activeIcon:P?x[O%w.length]:w[O%w.length],percent:E,direction:s},!n&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return a.createElement("span",c({id:f,style:u({},v,{display:"inline-block",direction:s}),className:y,tabIndex:b,"aria-label":this.props["aria-label"]},!n&&{onMouseLeave:this.onMouseLeave}),C)}}]),t}(a.PureComponent);function S(){}S._name="react_rating_noop";var C=function(e){function t(e){var n;return i(this,t),(n=f(this,d(t).call(this,e))).state={value:e.initialRating},n.handleClick=n.handleClick.bind(y(y(n))),n.handleHover=n.handleHover.bind(y(y(n))),n}return p(t,e),l(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var n=this,a=this.translateDisplayValueToValue(e);this.props.onClick(a),this.state.value!==a&&this.setState({value:a},(function(){return n.props.onChange(n.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,n=e.emptySymbol,o=e.fullSymbol,i=e.placeholderSymbol,r=e.readonly,l=e.quiet,s=e.fractions,c=e.direction,u=e.start,p=e.stop,d=e.id,h=e.className,y=e.style,f=e.tabIndex;return a.createElement(k,{id:d,style:y,className:h,tabIndex:f,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,n){return Math.floor((t-e)/n)}(u,p,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:r,quiet:l,fractions:s,direction:c,emptySymbol:n,fullSymbol:o,placeholderSymbol:i,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(a.PureComponent);C.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:S,onClick:S,onChange:S,emptySymbol:b.empty,fullSymbol:b.full,placeholderSymbol:b.placeholder},t.Z=C}}]);
//# sourceMappingURL=2068.54e435e1.chunk.js.map