"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6746],{962:function(n,e,t){t.d(e,{Z:function(){return $}});var o=t(7462),r=t(3366);function i(n){return n&&n.ownerDocument||document}function a(n){void 0===n&&(n=i());try{var e=n.activeElement;return e&&e.nodeName?e:null}catch(t){return n.body}}function s(n,e){return n.contains?n.contains(e):n.compareDocumentPosition?n===e||!!(16&n.compareDocumentPosition(e)):void 0}var u=!("undefined"==typeof window||!window.document||!window.document.createElement),c=!1,l=!1;try{var d={get passive(){return c=!0},get once(){return l=c=!0}};u&&(window.addEventListener("test",d,d),window.removeEventListener("test",d,!0))}catch(j){}var f=function(n,e,t,o){if(o&&"boolean"!=typeof o&&!l){var r=o.once,i=o.capture,a=t;!l&&r&&(a=t.__once||function n(o){this.removeEventListener(e,n,i),t.call(this,o)},t.__once=a),n.addEventListener(e,a,c?o:i)}n.addEventListener(e,t,o)};var p=function(n,e,t,o){var r=o&&"boolean"!=typeof o?o.capture:o;n.removeEventListener(e,t,r),t.__once&&n.removeEventListener(e,t.__once,r)};var h=function(n,e,t,o){return f(n,e,t,o),function(){p(n,e,t,o)}},v=t(5697),m=t.n(v),E=t(7294),g=t(3935);function x(n){var e,t,o=(e=n,(t=(0,E.useRef)(e)).current=e,t);(0,E.useEffect)((function(){return function(){return o.current()}}),[])}var b=function(n){var e=(0,E.useRef)(n);return(0,E.useEffect)((function(){e.current=n}),[n]),e};function y(n){var e=b(n);return(0,E.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}function w(n,e){n.classList?n.classList.add(e):function(n,e){return n.classList?!!e&&n.classList.contains(e):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+e+" ")}(n,e)||("string"==typeof n.className?n.className=n.className+" "+e:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+e))}function k(n,e){return n.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function C(n,e){n.classList?n.classList.remove(e):"string"==typeof n.className?n.className=k(n.className,e):n.setAttribute("class",k(n.className&&n.className.baseVal||"",e))}function N(n,e){return function(n){var e=i(n);return e&&e.defaultView||window}(n).getComputedStyle(n,e)}var S=/([A-Z])/g;var O=/^ms-/;function T(n){return function(n){return n.replace(S,"-$1").toLowerCase()}(n).replace(O,"-ms-")}var R=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var D,L=function(n,e){var t="",o="";if("string"==typeof e)return n.style.getPropertyValue(T(e))||N(n).getPropertyValue(T(e));Object.keys(e).forEach((function(r){var i=e[r];i||0===i?!function(n){return!(!n||!R.test(n))}(r)?t+=T(r)+": "+i+";":o+=r+"("+i+") ":n.style.removeProperty(T(r))})),o&&(t+="transform: "+o+";"),n.style.cssText+=";"+t};function F(n){return"window"in n&&n.window===n?n:"nodeType"in(e=n)&&e.nodeType===document.DOCUMENT_NODE&&n.defaultView||!1;var e}function M(n){var e;return F(n)||(e=n)&&"body"===e.tagName.toLowerCase()?function(n){var e=F(n)?i():i(n),t=F(n)||e.defaultView;return e.body.clientWidth<t.innerWidth}(n):n.scrollHeight>n.clientHeight}var P=["template","script","style"],I=function(n,e,t){[].forEach.call(n.children,(function(n){var o,r,i;-1===e.indexOf(n)&&(r=(o=n).nodeType,i=o.tagName,1===r&&-1===P.indexOf(i.toLowerCase()))&&t(n)}))};function _(n,e){e&&(n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden"))}var B,V=function(){function n(n){var e=void 0===n?{}:n,t=e.hideSiblingNodes,o=void 0===t||t,r=e.handleContainerOverflow,i=void 0===r||r;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=o,this.handleContainerOverflow=i,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=function(n){if((!D&&0!==D||n)&&u){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),D=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return D}()}var e=n.prototype;return e.isContainerOverflowing=function(n){var e=this.data[this.containerIndexFromModal(n)];return e&&e.overflowing},e.containerIndexFromModal=function(n){return e=this.data,t=function(e){return-1!==e.modals.indexOf(n)},o=-1,e.some((function(n,e){return!!t(n,e)&&(o=e,!0)})),o;var e,t,o},e.setContainerStyle=function(n,e){var t={overflow:"hidden"};n.style={overflow:e.style.overflow,paddingRight:e.style.paddingRight},n.overflowing&&(t.paddingRight=parseInt(L(e,"paddingRight")||"0",10)+this.scrollbarSize+"px"),L(e,t)},e.removeContainerStyle=function(n,e){Object.assign(e.style,n.style)},e.add=function(n,e,t){var o=this.modals.indexOf(n),r=this.containers.indexOf(e);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(n),this.hideSiblingNodes&&function(n,e){var t=e.dialog,o=e.backdrop;I(n,[t,o],(function(n){return _(!0,n)}))}(e,n),-1!==r)return this.data[r].modals.push(n),o;var i={modals:[n],classes:t?t.split(/\s+/):[],overflowing:M(e)};return this.handleContainerOverflow&&this.setContainerStyle(i,e),i.classes.forEach(w.bind(null,e)),this.containers.push(e),this.data.push(i),o},e.remove=function(n){var e=this.modals.indexOf(n);if(-1!==e){var t=this.containerIndexFromModal(n),o=this.data[t],r=this.containers[t];if(o.modals.splice(o.modals.indexOf(n),1),this.modals.splice(e,1),0===o.modals.length)o.classes.forEach(C.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(o,r),this.hideSiblingNodes&&function(n,e){var t=e.dialog,o=e.backdrop;I(n,[t,o],(function(n){return _(!1,n)}))}(r,n),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var i=o.modals[o.modals.length-1],a=i.backdrop;_(!1,i.dialog),_(!1,a)}}},e.isTopModal=function(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n},n}(),Z=V,A=function(n){var e;return"undefined"==typeof document?null:null==n?i().body:("function"==typeof n&&(n=n()),n&&"current"in n&&(n=n.current),null!=(e=n)&&e.nodeType&&n||null)};function H(n){var e=n||(B||(B=new Z),B),t=(0,E.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(n,o){return e.add(t.current,n,o)},remove:function(){return e.remove(t.current)},isTopModal:function(){return e.isTopModal(t.current)},setDialogRef:(0,E.useCallback)((function(n){t.current.dialog=n}),[]),setBackdropRef:(0,E.useCallback)((function(n){t.current.backdrop=n}),[])})}var U=(0,E.forwardRef)((function(n,e){var t=n.show,i=void 0!==t&&t,c=n.role,l=void 0===c?"dialog":c,d=n.className,f=n.style,p=n.children,v=n.backdrop,m=void 0===v||v,b=n.keyboard,w=void 0===b||b,k=n.onBackdropClick,C=n.onEscapeKeyDown,N=n.transition,S=n.backdropTransition,O=n.autoFocus,T=void 0===O||O,R=n.enforceFocus,D=void 0===R||R,L=n.restoreFocus,F=void 0===L||L,M=n.restoreFocusOptions,P=n.renderDialog,I=n.renderBackdrop,_=void 0===I?function(n){return E.createElement("div",n)}:I,B=n.manager,V=n.container,Z=n.containerClassName,U=n.onShow,W=n.onHide,$=void 0===W?function(){}:W,j=n.onExit,X=n.onExited,z=n.onExiting,K=n.onEnter,G=n.onEntering,Y=n.onEntered,q=(0,r.Z)(n,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),J=function(n,e){var t=(0,E.useState)((function(){return A(n)})),o=t[0],r=t[1];if(!o){var i=A(n);i&&r(i)}return(0,E.useEffect)((function(){e&&o&&e(o)}),[e,o]),(0,E.useEffect)((function(){var e=A(n);e!==o&&r(e)}),[n,o]),o}(V),Q=H(B),nn=function(){var n=(0,E.useRef)(!0),e=(0,E.useRef)((function(){return n.current}));return(0,E.useEffect)((function(){return function(){n.current=!1}}),[]),e.current}(),en=function(n){var e=(0,E.useRef)(null);return(0,E.useEffect)((function(){e.current=n})),e.current}(i),tn=(0,E.useState)(!i),on=tn[0],rn=tn[1],an=(0,E.useRef)(null);(0,E.useImperativeHandle)(e,(function(){return Q}),[Q]),u&&!en&&i&&(an.current=a()),N||i||on?i&&on&&rn(!1):rn(!0);var sn=y((function(){if(Q.add(J,Z),pn.current=h(document,"keydown",dn),fn.current=h(document,"focus",(function(){return setTimeout(cn)}),!0),U&&U(),T){var n=a(document);Q.dialog&&n&&!s(Q.dialog,n)&&(an.current=n,Q.dialog.focus())}})),un=y((function(){var n;(Q.remove(),null==pn.current||pn.current(),null==fn.current||fn.current(),F)&&(null==(n=an.current)||null==n.focus||n.focus(M),an.current=null)}));(0,E.useEffect)((function(){i&&J&&sn()}),[i,J,sn]),(0,E.useEffect)((function(){on&&un()}),[on,un]),x((function(){un()}));var cn=y((function(){if(D&&nn()&&Q.isTopModal()){var n=a();Q.dialog&&n&&!s(Q.dialog,n)&&Q.dialog.focus()}})),ln=y((function(n){n.target===n.currentTarget&&(null==k||k(n),!0===m&&$())})),dn=y((function(n){w&&27===n.keyCode&&Q.isTopModal()&&(null==C||C(n),n.defaultPrevented||$())})),fn=(0,E.useRef)(),pn=(0,E.useRef)(),hn=N;if(!J||!(i||hn&&!on))return null;var vn=(0,o.Z)({role:l,ref:Q.setDialogRef,"aria-modal":"dialog"===l||void 0},q,{style:f,className:d,tabIndex:-1}),mn=P?P(vn):E.createElement("div",vn,E.cloneElement(p,{role:"document"}));hn&&(mn=E.createElement(hn,{appear:!0,unmountOnExit:!0,in:!!i,onExit:j,onExiting:z,onExited:function(){rn(!0);for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];null==X||X.apply(void 0,e)},onEnter:K,onEntering:G,onEntered:Y},mn));var En=null;if(m){var gn=S;En=_({ref:Q.setBackdropRef,onClick:ln}),gn&&(En=E.createElement(gn,{appear:!0,in:!!i},En))}return E.createElement(E.Fragment,null,g.createPortal(E.createElement(E.Fragment,null,En,mn),J))})),W={show:m().bool,container:m().any,onShow:m().func,onHide:m().func,backdrop:m().oneOfType([m().bool,m().oneOf(["static"])]),renderDialog:m().func,renderBackdrop:m().func,onEscapeKeyDown:m().func,onBackdropClick:m().func,containerClassName:m().string,keyboard:m().bool,transition:m().elementType,backdropTransition:m().elementType,autoFocus:m().bool,enforceFocus:m().bool,restoreFocus:m().bool,restoreFocusOptions:m().shape({preventScroll:m().bool}),onEnter:m().func,onEntering:m().func,onEntered:m().func,onExit:m().func,onExiting:m().func,onExited:m().func,manager:m().instanceOf(Z)};U.displayName="Modal",U.propTypes=W;var $=Object.assign(U,{Manager:Z})},9325:function(n,e,t){t.d(e,{ZP:function(){return m}});var o=t(3366),r=t(4578),i=t(7294),a=t(3935),s=!1,u=i.createContext(null),c="unmounted",l="exited",d="entering",f="entered",p="exiting",h=function(n){function e(e,t){var o;o=n.call(this,e,t)||this;var r,i=t&&!t.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?i?(r=l,o.appearStatus=d):r=f:r=e.unmountOnExit||e.mountOnEnter?c:l,o.state={status:r},o.nextCallback=null,o}(0,r.Z)(e,n),e.getDerivedStateFromProps=function(n,e){return n.in&&e.status===c?{status:l}:null};var t=e.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(n){var e=null;if(n!==this.props){var t=this.state.status;this.props.in?t!==d&&t!==f&&(e=d):t!==d&&t!==f||(e=p)}this.updateStatus(!1,e)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var n,e,t,o=this.props.timeout;return n=e=t=o,null!=o&&"number"!=typeof o&&(n=o.exit,e=o.enter,t=void 0!==o.appear?o.appear:e),{exit:n,enter:e,appear:t}},t.updateStatus=function(n,e){void 0===n&&(n=!1),null!==e?(this.cancelNextCallback(),e===d?this.performEnter(n):this.performExit()):this.props.unmountOnExit&&this.state.status===l&&this.setState({status:c})},t.performEnter=function(n){var e=this,t=this.props.enter,o=this.context?this.context.isMounting:n,r=this.props.nodeRef?[o]:[a.findDOMNode(this),o],i=r[0],u=r[1],c=this.getTimeouts(),l=o?c.appear:c.enter;!n&&!t||s?this.safeSetState({status:f},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,u),this.safeSetState({status:d},(function(){e.props.onEntering(i,u),e.onTransitionEnd(l,(function(){e.safeSetState({status:f},(function(){e.props.onEntered(i,u)}))}))})))},t.performExit=function(){var n=this,e=this.props.exit,t=this.getTimeouts(),o=this.props.nodeRef?void 0:a.findDOMNode(this);e&&!s?(this.props.onExit(o),this.safeSetState({status:p},(function(){n.props.onExiting(o),n.onTransitionEnd(t.exit,(function(){n.safeSetState({status:l},(function(){n.props.onExited(o)}))}))}))):this.safeSetState({status:l},(function(){n.props.onExited(o)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},t.setNextCallback=function(n){var e=this,t=!0;return this.nextCallback=function(o){t&&(t=!1,e.nextCallback=null,n(o))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(n,e){this.setNextCallback(e);var t=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),o=null==n&&!this.props.addEndListener;if(t&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],i=r[0],s=r[1];this.props.addEndListener(i,s)}null!=n&&setTimeout(this.nextCallback,n)}else setTimeout(this.nextCallback,0)},t.render=function(){var n=this.state.status;if(n===c)return null;var e=this.props,t=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,o.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(u.Provider,{value:null},"function"==typeof t?t(n,r):i.cloneElement(i.Children.only(t),r))},e}(i.Component);function v(){}h.contextType=u,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},h.UNMOUNTED=c,h.EXITED=l,h.ENTERING=d,h.ENTERED=f,h.EXITING=p;var m=h}}]);