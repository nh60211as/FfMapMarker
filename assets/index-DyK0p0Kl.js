(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var q,b,Ye,B,De,Ze,ue,je,ye,le,fe,Ke,K={},qe=[],ht=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function P(e,t){for(var n in t)e[n]=t[n];return e}function ve(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function U(e,t,n){var r,o,i,c={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:c[i]=t[i];if(arguments.length>2&&(c.children=arguments.length>3?q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)c[i]===void 0&&(c[i]=e.defaultProps[i]);return j(e,c,r,o,null)}function j(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Ye,__i:-1,__u:0};return o==null&&b.vnode!=null&&b.vnode(i),i}function O(e){return e.children}function ne(e,t){this.props=e,this.context=t}function X(e,t){if(t==null)return e.__?X(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?X(e):null}function Je(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Je(e)}}function de(e){(!e.__d&&(e.__d=!0)&&B.push(e)&&!oe.__r++||De!==b.debounceRendering)&&((De=b.debounceRendering)||Ze)(oe)}function oe(){var e,t,n,r,o,i,c,_;for(B.sort(ue);e=B.shift();)e.__d&&(t=B.length,r=void 0,i=(o=(n=e).__v).__e,c=[],_=[],n.__P&&((r=P({},o)).__v=o.__v+1,b.vnode&&b.vnode(r),be(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,c,i??X(o),!!(32&o.__u),_),r.__v=o.__v,r.__.__k[r.__i]=r,et(c,r,_),r.__e!=i&&Je(r)),B.length>t&&B.sort(ue));oe.__r=0}function Qe(e,t,n,r,o,i,c,_,u,s,h){var a,l,f,g,S,v,m=r&&r.__k||qe,y=t.length;for(u=pt(n,t,m,u,y),a=0;a<y;a++)(f=n.__k[a])!=null&&(l=f.__i===-1?K:m[f.__i]||K,f.__i=a,v=be(e,f,l,o,i,c,_,u,s,h),g=f.__e,f.ref&&l.ref!=f.ref&&(l.ref&&we(l.ref,null,f),h.push(f.ref,f.__c||g,f)),S==null&&g!=null&&(S=g),4&f.__u||l.__k===f.__k?u=ze(f,u,e):typeof f.type=="function"&&v!==void 0?u=v:g&&(u=g.nextSibling),f.__u&=-7);return n.__e=S,u}function pt(e,t,n,r,o){var i,c,_,u,s,h=n.length,a=h,l=0;for(e.__k=new Array(o),i=0;i<o;i++)(c=t[i])!=null&&typeof c!="boolean"&&typeof c!="function"?(u=i+l,(c=e.__k[i]=typeof c=="string"||typeof c=="number"||typeof c=="bigint"||c.constructor==String?j(null,c,null,null,null):ce(c)?j(O,{children:c},null,null,null):c.constructor===void 0&&c.__b>0?j(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c).__=e,c.__b=e.__b+1,_=null,(s=c.__i=mt(c,n,u,a))!==-1&&(a--,(_=n[s])&&(_.__u|=2)),_==null||_.__v===null?(s==-1&&l--,typeof c.type!="function"&&(c.__u|=4)):s!=u&&(s==u-1?l--:s==u+1?l++:(s>u?l--:l++,c.__u|=4))):e.__k[i]=null;if(a)for(i=0;i<h;i++)(_=n[i])!=null&&!(2&_.__u)&&(_.__e==r&&(r=X(_)),tt(_,_));return r}function ze(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=ze(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=X(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ve(e,t){return t=t||[],e==null||typeof e=="boolean"||(ce(e)?e.some(function(n){Ve(n,t)}):t.push(e)),t}function mt(e,t,n,r){var o,i,c=e.key,_=e.type,u=t[n];if(u===null||u&&c==u.key&&_===u.type&&!(2&u.__u))return n;if(r>(u!=null&&!(2&u.__u)?1:0))for(o=n-1,i=n+1;o>=0||i<t.length;){if(o>=0){if((u=t[o])&&!(2&u.__u)&&c==u.key&&_===u.type)return o;o--}if(i<t.length){if((u=t[i])&&!(2&u.__u)&&c==u.key&&_===u.type)return i;i++}}return-1}function Ae(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ht.test(t)?n:n+"px"}function V(e,t,n,r,o){var i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ae(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Ae(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(je,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=ye,e.addEventListener(t,i?fe:le,i)):e.removeEventListener(t,i?fe:le,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Te(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ye++;else if(t.t<n.u)return;return n(b.event?b.event(t):t)}}}function be(e,t,n,r,o,i,c,_,u,s){var h,a,l,f,g,S,v,m,y,T,A,R,F,z,W,k,C,I=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),i=[_=t.__e=n.__e]),(h=b.__b)&&h(t);e:if(typeof I=="function")try{if(m=t.props,y="prototype"in I&&I.prototype.render,T=(h=I.contextType)&&r[h.__c],A=h?T?T.props.value:h.__:r,n.__c?v=(a=t.__c=n.__c).__=a.__E:(y?t.__c=a=new I(m,A):(t.__c=a=new ne(m,A),a.constructor=I,a.render=yt),T&&T.sub(a),a.props=m,a.state||(a.state={}),a.context=A,a.__n=r,l=a.__d=!0,a.__h=[],a._sb=[]),y&&a.__s==null&&(a.__s=a.state),y&&I.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=P({},a.__s)),P(a.__s,I.getDerivedStateFromProps(m,a.__s))),f=a.props,g=a.state,a.__v=t,l)y&&I.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),y&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(y&&I.getDerivedStateFromProps==null&&m!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(m,A),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(m,a.__s,A)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(a.props=m,a.state=a.__s,a.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(G){G&&(G.__=t)}),R=0;R<a._sb.length;R++)a.__h.push(a._sb[R]);a._sb=[],a.__h.length&&c.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(m,a.__s,A),y&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,g,S)})}if(a.context=A,a.props=m,a.__P=e,a.__e=!1,F=b.__r,z=0,y){for(a.state=a.__s,a.__d=!1,F&&F(t),h=a.render(a.props,a.state,a.context),W=0;W<a._sb.length;W++)a.__h.push(a._sb[W]);a._sb=[]}else do a.__d=!1,F&&F(t),h=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++z<25);a.state=a.__s,a.getChildContext!=null&&(r=P(P({},r),a.getChildContext())),y&&!l&&a.getSnapshotBeforeUpdate!=null&&(S=a.getSnapshotBeforeUpdate(f,g)),_=Qe(e,ce(k=h!=null&&h.type===O&&h.key==null?h.props.children:h)?k:[k],t,n,r,o,i,c,_,u,s),a.base=t.__e,t.__u&=-161,a.__h.length&&c.push(a),v&&(a.__E=a.__=null)}catch(G){if(t.__v=null,u||i!=null)if(G.then){for(t.__u|=u?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;i[i.indexOf(_)]=null,t.__e=_}else for(C=i.length;C--;)ve(i[C]);else t.__e=n.__e,t.__k=n.__k;b.__e(G,t,n)}else i==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):_=t.__e=gt(n.__e,t,n,r,o,i,c,u,s);return(h=b.diffed)&&h(t),128&t.__u?void 0:_}function et(e,t,n){for(var r=0;r<n.length;r++)we(n[r],n[++r],n[++r]);b.__c&&b.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){b.__e(i,o.__v)}})}function gt(e,t,n,r,o,i,c,_,u){var s,h,a,l,f,g,S,v=n.props,m=t.props,y=t.type;if(y=="svg"?o="http://www.w3.org/2000/svg":y=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(s=0;s<i.length;s++)if((f=i[s])&&"setAttribute"in f==!!y&&(y?f.localName==y:f.nodeType==3)){e=f,i[s]=null;break}}if(e==null){if(y==null)return document.createTextNode(m);e=document.createElementNS(o,y,m.is&&m),_&&(b.__m&&b.__m(t,i),_=!1),i=null}if(y===null)v===m||_&&e.data===m||(e.data=m);else{if(i=i&&q.call(e.childNodes),v=n.props||K,!_&&i!=null)for(v={},s=0;s<e.attributes.length;s++)v[(f=e.attributes[s]).name]=f.value;for(s in v)if(f=v[s],s!="children"){if(s=="dangerouslySetInnerHTML")a=f;else if(!(s in m)){if(s=="value"&&"defaultValue"in m||s=="checked"&&"defaultChecked"in m)continue;V(e,s,null,f,o)}}for(s in m)f=m[s],s=="children"?l=f:s=="dangerouslySetInnerHTML"?h=f:s=="value"?g=f:s=="checked"?S=f:_&&typeof f!="function"||v[s]===f||V(e,s,f,v[s],o);if(h)_||a&&(h.__html===a.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(a&&(e.innerHTML=""),Qe(e,ce(l)?l:[l],t,n,r,y=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,c,i?i[0]:n.__k&&X(n,0),_,u),i!=null)for(s=i.length;s--;)ve(i[s]);_||(s="value",y=="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[s]||y=="progress"&&!g||y=="option"&&g!==v[s])&&V(e,s,g,v[s],o),s="checked",S!==void 0&&S!==e[s]&&V(e,s,S,v[s],o))}return e}function we(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){b.__e(o,n)}}function tt(e,t,n){var r,o;if(b.unmount&&b.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||we(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){b.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&tt(r[o],t,n||typeof e.type!="function");n||ve(e.__e),e.__c=e.__=e.__e=void 0}function yt(e,t,n){return this.constructor(e,n)}function vt(e,t,n){var r,o,i,c;t==document&&(t=document.documentElement),b.__&&b.__(e,t),o=(r=typeof n=="function")?null:t.__k,i=[],c=[],be(t,e=t.__k=U(O,null,[e]),o||K,K,t.namespaceURI,o?null:t.firstChild?q.call(t.childNodes):null,i,o?o.__e:t.firstChild,r,c),et(i,e,c)}function Ie(e,t,n){var r,o,i,c,_=P({},e.props);for(i in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)i=="key"?r=t[i]:i=="ref"?o=t[i]:_[i]=t[i]===void 0&&c!==void 0?c[i]:t[i];return arguments.length>2&&(_.children=arguments.length>3?q.call(arguments,2):n),j(e.type,_,r||e.key,o||e.ref,null)}function nt(e,t){var n={__c:t="__cC"+Ke++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=new Set,(i={})[t]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.forEach(function(_){_.__e=!0,de(_)})},this.sub=function(c){o.add(c);var _=c.componentWillUnmount;c.componentWillUnmount=function(){o&&o.delete(c),_&&_.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}q=qe.slice,b={__e:function(e,t,n,r){for(var o,i,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),c=o.__d),c)return o.__E=o}catch(_){e=_}throw e}},Ye=0,ne.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),de(this))},ne.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),de(this))},ne.prototype.render=O,B=[],Ze=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ue=function(e,t){return e.__v.__b-t.__v.__b},oe.__r=0,je=/(PointerCapture)$|Capture$/i,ye=0,le=Te(!1),fe=Te(!0),Ke=0;var bt=0;function p(e,t,n,r,o,i){t||(t={});var c,_,u=t;if("ref"in u)for(_ in u={},t)_=="ref"?c=t[_]:u[_]=t[_];var s={type:e,props:u,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--bt,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(c=e.defaultProps))for(_ in c)u[_]===void 0&&(u[_]=c[_]);return b.vnode&&b.vnode(s),s}const wt="modulepreload",Lt=function(e){return"/FfMapMarker/"+e},xe={},kt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),_=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=Lt(u),u in xe)return;xe[u]=!0;const s=u.endsWith(".css"),h=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":wt,s||(a.as="script"),a.crossOrigin="",a.href=u,_&&a.setAttribute("nonce",_),document.head.appendChild(a),s)return new Promise((l,f)=>{a.addEventListener("load",l),a.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(c){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=c,window.dispatchEvent(_),!_.defaultPrevented)throw c}return o.then(c=>{for(const _ of c||[])_.status==="rejected"&&i(_.reason);return t().catch(i)})};var $,w,_e,Ee,ie=0,rt=[],L=b,Oe=L.__b,Me=L.__r,Re=L.diffed,Ce=L.__c,Ne=L.unmount,Pe=L.__;function J(e,t){L.__h&&L.__h(w,e,ie||t),ie=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function E(e){return ie=1,Le(at,e)}function Le(e,t,n){var r=J($++,2);if(r.t=e,!r.__c&&(r.__=[at(void 0,t),function(_){var u=r.__N?r.__N[0]:r.__[0],s=r.t(u,_);u!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var o=function(_,u,s){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(l){return!!l.__c});if(h.every(function(l){return!l.__N}))return!i||i.call(this,_,u,s);var a=r.__c.props!==_;return h.forEach(function(l){if(l.__N){var f=l.__[0];l.__=l.__N,l.__N=void 0,f!==l.__[0]&&(a=!0)}}),i&&i.call(this,_,u,s)||a};w.u=!0;var i=w.shouldComponentUpdate,c=w.componentWillUpdate;w.componentWillUpdate=function(_,u,s){if(this.__e){var h=i;i=void 0,o(_,u,s),i=h}c&&c.call(this,_,u,s)},w.shouldComponentUpdate=o}return r.__N||r.__}function he(e,t){var n=J($++,3);!L.__s&&Se(n.__H,t)&&(n.__=e,n.i=t,w.__H.__h.push(n))}function ot(e,t){var n=J($++,4);!L.__s&&Se(n.__H,t)&&(n.__=e,n.i=t,w.__h.push(n))}function x(e){return ie=5,ke(function(){return{current:e}},[])}function ke(e,t){var n=J($++,7);return Se(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function it(e){var t=w.context[e.__c],n=J($++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(w)),t.props.value):e.__}function St(){for(var e;e=rt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(re),e.__H.__h.forEach(pe),e.__H.__h=[]}catch(t){e.__H.__h=[],L.__e(t,e.__v)}}L.__b=function(e){w=null,Oe&&Oe(e)},L.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Pe&&Pe(e,t)},L.__r=function(e){Me&&Me(e),$=0;var t=(w=e.__c).__H;t&&(_e===w?(t.__h=[],w.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(re),t.__h.forEach(pe),t.__h=[],$=0)),_e=w},L.diffed=function(e){Re&&Re(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(rt.push(t)!==1&&Ee===L.requestAnimationFrame||((Ee=L.requestAnimationFrame)||Dt)(St)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),_e=w=null},L.__c=function(e,t){t.some(function(n){try{n.__h.forEach(re),n.__h=n.__h.filter(function(r){return!r.__||pe(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],L.__e(r,n.__v)}}),Ce&&Ce(e,t)},L.unmount=function(e){Ne&&Ne(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{re(r)}catch(o){t=o}}),n.__H=void 0,t&&L.__e(t,n.__v))};var Fe=typeof requestAnimationFrame=="function";function Dt(e){var t,n=function(){clearTimeout(r),Fe&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Fe&&(t=requestAnimationFrame(n))}function re(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function pe(e){var t=w;e.__c=e.__(),w=t}function Se(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function at(e,t){return typeof t=="function"?t(e):t}let H,Z;const At=(e,t)=>{if(H=void 0,t&&t.type==="click"){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button!==0)return e;const n=t.target.closest("a[href]"),r=n&&n.getAttribute("href");if(!n||n.origin!=location.origin||/^#/.test(r)||!/^(_?self)?$/i.test(n.target)||Z&&(typeof Z=="string"?!r.startsWith(Z):!Z.test(r)))return e;H=!0,t.preventDefault(),t=n.href.replace(location.origin,"")}else typeof t=="string"?H=!0:t&&t.url?(H=!t.replace,t=t.url):t=location.pathname+location.search;return H===!0?history.pushState(null,"",t):H===!1&&history.replaceState(null,"",t),t},Tt=(e,t,n)=>{e=e.split("/").filter(Boolean),t=(t||"").split("/").filter(Boolean);for(let r=0,o,i;r<Math.max(e.length,t.length);r++){let[,c,_,u]=(t[r]||"").match(/^(:?)(.*?)([+*?]?)$/);if(o=e[r],!(!c&&_==o)){if(!c&&o&&u=="*"){n.rest="/"+e.slice(r).map(decodeURIComponent).join("/");break}if(!c||!o&&u!="?"&&u!="*")return;if(i=u=="+"||u=="*",i?o=e.slice(r).map(decodeURIComponent).join("/")||void 0:o&&(o=decodeURIComponent(o)),n.params[_]=o,_ in n||(n[_]=o),i)break}}return n};function Q(e){const[t,n]=Le(At,e.url||location.pathname+location.search);e.scope&&(Z=e.scope);const r=H===!0,o=ke(()=>{const i=new URL(t,location.origin),c=i.pathname.replace(/\/+$/g,"")||"/";return{url:t,path:c,query:Object.fromEntries(i.searchParams),route:(_,u)=>n({url:_,replace:u}),wasPush:r}},[t]);return ot(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),U(Q.ctx.Provider,{value:o},e.children)}const It=Promise.resolve();function ct(e){const[t,n]=Le(k=>k+1,0),{url:r,query:o,wasPush:i,path:c}=xt(),{rest:_=c,params:u={}}=it(He),s=x(!1),h=x(c),a=x(0),l=x(),f=x(),g=x(),S=x(!1),v=x();v.current=!1;const m=x(!1);let y,T,A;Ve(e.children).some(k=>{if(Tt(_,k.props.path,A={...k.props,path:_,query:o,params:u,rest:""}))return y=Ie(k,A);k.props.default&&(T=Ie(k,A))});let R=y||T;ke(()=>{f.current=l.current;const k=f.current&&f.current.props.children;!k||!R||R.type!==k.type||R.props.component!==k.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),a.current++,m.current=!0):m.current=!1},[r]);const F=l.current&&l.current.__u&ee&&l.current.__u&te,z=l.current&&l.current.__h;l.current=U(He.Provider,{value:A},R),F?(l.current.__u|=ee,l.current.__u|=te):z&&(l.current.__h=!0);const W=f.current;return f.current=null,this.__c=(k,C)=>{v.current=!0,f.current=W,e.onLoadStart&&e.onLoadStart(r),s.current=!0;let I=a.current;k.then(()=>{I===a.current&&(f.current=null,l.current&&(C.__h&&(l.current.__h=C.__h),C.__u&te&&(l.current.__u|=te),C.__u&ee&&(l.current.__u|=ee)),It.then(n))})},ot(()=>{const k=this.__v&&this.__v.__e;if(v.current){!S.current&&!g.current&&(g.current=k);return}!S.current&&g.current&&(g.current!==k&&g.current.remove(),g.current=null),S.current=!0,h.current!==c&&(i&&scrollTo(0,0),e.onRouteChange&&e.onRouteChange(r),h.current=c),e.onLoadEnd&&s.current&&e.onLoadEnd(r),s.current=!1},[c,i,t]),m.current?[U(se,{r:l}),U(se,{r:f})]:U(se,{r:l})}const ee=32,te=128,se=({r:e})=>e.current;ct.Provider=Q;Q.ctx=nt({});const He=nt({}),Be=e=>U(e.component,e),xt=()=>it(Q.ctx),Ue=b.__e;b.__e=(e,t,n)=>{if(e&&e.then){let r=t;for(;r=r.__;)if(r.__c&&r.__c.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),t.__k||(t.__k=[]),r.__c.__c(e,t)}Ue&&Ue(e,t,n)};const Et="/FfMapMarker/assets/2025_FF44_MAP_NEW_DAY1-DtQSo3EV.jpg",Ot="/FfMapMarker/assets/2025_FF44_MAP_NEW_DAY1-DtQSo3EV.jpg",Mt="/FfMapMarker/assets/2025_FF44_MAP_NEW_DAY1-DtQSo3EV.jpg",Rt="_container_1bk4t_1",Ct="_targetingBox_1bk4t_6",$e={container:Rt,targetingBox:Ct};var D=(e=>(e[e.plannedToGo=0]="plannedToGo",e[e.alreadyGone=1]="alreadyGone",e[e.none=2]="none",e))(D||{});function Nt(e){const t=x(null);return he(()=>{var n,r;e.openDialog?(n=t.current)==null||n.showModal():(r=t.current)==null||r.close()},[e.openDialog]),p("dialog",{ref:t,style:{position:"absolute",left:e.point.x,top:e.point.y,width:350,height:250},children:[p("p",{children:["攤位名稱：",e.boothDataOnMap.groupName]}),p("p",{children:["攤位編號：",Ft(e.boothDataOnMap.booth.boothNumberList)]}),p("p",{children:["攤位連結：",Ht(e.boothDataOnMap.groupLink)]}),p("p",{children:["標記：",p("button",{onClick:()=>e.setMarker(D.plannedToGo),children:"還沒去過"}),p("span",{children:"　|　"}),p("button",{onClick:()=>e.setMarker(D.alreadyGone),children:"已去過"}),p("span",{children:"　|　"}),p("button",{onClick:()=>e.setMarker(D.none),children:"取消標記"})]}),p("button",{onClick:e.closeDialog,children:"關閉"})]})}function Pt(e){return e.row+e.number.toString().padStart(2,"0")}function Ft(e){return e.map(Pt).join(", ")}function Ht(e){return e===null?p(O,{}):p("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e})}var d=(e=>(e[e.day1=0]="day1",e[e.day2=1]="day2",e[e.day3=2]="day3",e))(d||{}),M=(e=>(e[e.FF44=0]="FF44",e))(M||{});const me=0;function ae(e){switch(e){case d[d.day1]:return d.day1;case d[d.day2]:return d.day2;case d[d.day3]:return d.day3;default:return null}}function _t(e){switch(e){case D[D.plannedToGo]:return D.plannedToGo;case D[D.alreadyGone]:return D.alreadyGone;default:return D.none}}function st(e,t,n,r){const o=ft(e,t,n);localStorage.setItem(o,D[r])}function ut(e,t,n){const r=ft(e,t,n),o=localStorage.getItem(r);return _t(o)}function Bt(e){let t=[];for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);if(r===null)continue;const o=r.split(".");if(o.length===5&&o[0]===M[e]&&o[2]==="map"&&o[3]==="marker"){const i=ae(o[1]);if(i===null)continue;const c=o[4];t.push({id:c,activeDay:d[i],marker:D[ut(e,i,c)]})}}return t}function Ut(e,t){const n=dt(e);localStorage.setItem(n,d[t])}function lt(e,t){const n=dt(e),r=localStorage.getItem(n),o=ae(r);return o===null?t:(ae(r),o)}function ft(e,t,n){return`${M[e]}.${d[t]}.map.marker.${n}`}function dt(e){return`${M[e]}.map.activeDay`}const $t={groupId:"",groupName:"",groupLink:null,booth:{activeDay:d.day1,boothNumberList:[]},dimension:{x:0,y:0,width:0,height:0}};function Wt(e){switch(e.length){case 1:return ge(e[0]);case 2:return Xt(e[0],e[1]);default:throw Error(`Unsupported boothNumberList size: [${e.length}]`)}}function ge(e){const o=26.6190476190476,i=2898,c=2526,_=2179,u=1783,s=1476,h=399,a=28,l=41;switch(e.row){case"A":return{x:N(e.row),y:1969-(e.number-1)*o,width:41,height:o};case"B":case"C":case"D":case"E":case"F":case"G":case"H":case"I":case"J":case"K":case"L":return 1<=e.number&&e.number<=22?{x:N(e.row),y:1969-(e.number-1)*o,width:41,height:o}:{x:N(e.row)-41,y:1969-(44-e.number)*o,width:41,height:o};case"M":case"N":return 1<=e.number&&e.number<=22?{x:N(e.row),y:1158-(e.number-1)*o,width:41,height:o}:{x:N(e.row)-41,y:1158-(44-e.number)*o,width:41,height:o};case"O":case"P":case"Q":case"R":case"S":case"T":return 1<=e.number&&e.number<=24?{x:N(e.row),y:1158-(e.number-1)*o,width:41,height:o}:{x:N(e.row)-41,y:1158-(48-e.number)*o,width:41,height:o};case"U":return 1<=e.number&&e.number<=22?{x:N(e.row),y:1158-(e.number-1)*o,width:41,height:o}:{x:N(e.row)-41,y:1158-(44-e.number)*o,width:41,height:o};case"W":switch(e.number){case 1:case 2:case 3:case 4:case 5:case 6:return{x:i-(e.number-1)*a,y:h,width:a,height:l};case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:return{x:c-(e.number-7)*a,y:h,width:a,height:l};case 19:case 20:case 21:case 22:case 23:case 24:return{x:_-(e.number-19)*a,y:h,width:a,height:l};case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:return{x:u-(e.number-25)*a,y:h,width:a,height:l};case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:return{x:s-(e.number-35)*a,y:h,width:a,height:l}}}}function Xt(e,t){const n=ge(e),r=ge(t),o=Math.min(n.x,r.x),i=Math.min(n.y,r.y),c=Math.max(n.x+n.width,r.x+r.width)-o,_=Math.max(n.y+n.height,r.y+r.height)-i;return{x:o,y:i,width:c,height:_}}function N(e){switch(e){case"A":return 3216;case"B":return 3020;case"C":return 2851;case"D":return 2683;case"E":return 2512;case"F":return 2347;case"G":return 2175;case"H":return 1870;case"I":return 1702;case"J":return 1533;case"K":return 1365;case"L":return 1193;case"M":return 2726;case"N":return 2538;case"O":return 2352;case"P":return 2166;case"Q":return 1980;case"R":return 1794;case"S":return 1607;case"T":return 1421;case"U":return 1235}}function Gt(e){if(e===void 0)throw Error("Input is undefined when expecting a typed data.");return e}const Yt=[{groupId:"ffdde4aff94540ef8725db5dfc1db204",groupName:"殺必死天國",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:1},{row:"A",number:2}]}]},{groupId:"f3db9c49f44c4bd1bd1c8e40328feb46",groupName:"有害蕈類集會所",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:3},{row:"A",number:4}]},{activeDay:d.day3,boothNumberList:[{row:"A",number:3},{row:"A",number:4}]}]},{groupId:"4e7723807c4b4200b00143b9efb81fde",groupName:"三色坊",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:5},{row:"A",number:6}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:5},{row:"A",number:6}]}]},{groupId:"401e67b8bd4043349785b0d40cd8496b",groupName:"Himoata",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:7},{row:"A",number:8}]}]},{groupId:"07a39907f8474792a15a4a7c434ae88e",groupName:"Pure Reverie",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:9}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:9}]}]},{groupId:"e1bd938f44494021aaa17697577a33f0",groupName:"貓咖桃茶館",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:10}]}]},{groupId:"53e145b37e574cc59c0fa1dde2afabd0",groupName:"被爐裡的翻車魚",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:11}]}]},{groupId:"5cdceff8044c42f7a71098dd1f7c8baa",groupName:"ノラネコノタマ",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:12}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:12}]}]},{groupId:"b743b72b934b47149f401cf18507b6d3",groupName:"さくらアイス",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:13}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:13}]}]},{groupId:"520c28294293472c97490ac2bb49e253",groupName:"アクアドロップ",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:14}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:14}]}]},{groupId:"3292c53bb5064f23b6ab18af6d7e80a9",groupName:"心動美栗",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:15}]}]},{groupId:"939c5e797ca84d42b3396187a616794e",groupName:"RIN",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:16}]}]},{groupId:"b753fe069b6f4ea7b966b2b23887e36f",groupName:"Lumo",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:17}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:17}]}]},{groupId:"dfbae6cda5ec48be944c1b9af54036c1",groupName:"curry and rice(咖哩飯)",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:18}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:18}]}]},{groupId:"b31092ffcaf0459d802dec9253e760bd",groupName:"Atelier Kingyo(金魚工房)",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:19},{row:"A",number:20}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:19},{row:"A",number:20}]}]},{groupId:"0c897313b593445fac9a7dddb8cd2620",groupName:"TracoStrawberry",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"A",number:21},{row:"A",number:22}]},{activeDay:d.day2,boothNumberList:[{row:"A",number:21},{row:"A",number:22}]},{activeDay:d.day3,boothNumberList:[{row:"A",number:21},{row:"A",number:22}]}]},{groupId:"32014cff102c4d70a654d6b02d3e7276",groupName:"台北人",groupLink:null,boothList:[{activeDay:d.day1,boothNumberList:[{row:"S",number:3},{row:"S",number:4}]},{activeDay:d.day2,boothNumberList:[{row:"S",number:33}]}]},{groupId:"c8c7be762d444bb8b8f3b14bedda760a",groupName:"壞菇社",groupLink:"https://www.facebook.com/MARK4why",boothList:[{activeDay:d.day1,boothNumberList:[{row:"T",number:25},{row:"T",number:26}]},{activeDay:d.day2,boothNumberList:[{row:"T",number:25},{row:"T",number:26}]},{activeDay:d.day3,boothNumberList:[{row:"T",number:25},{row:"T",number:26}]}]}];function Zt(e){return Yt.filter(t=>t.boothList.some(n=>n.activeDay===e)).map(t=>({groupId:t.groupId,groupName:t.groupName,groupLink:t.groupLink,booth:Gt(t.boothList.find(n=>n.activeDay===e))}))}function We(e){return Zt(e).map(t=>({...t,dimension:Wt(t.booth.boothNumberList)}))}function Xe(e){const[t,n]=E(We(e.activeDay)),[r,o]=E(!1),[i,c]=E($t),[_,u]=E({x:0,y:0}),s=x(null),[h,a]=E(Ge(e.activeDay)),[l,f]=E([]);he(()=>{a(Ge(e.activeDay)),n(We(e.activeDay))},[e.activeDay]),he(()=>{if(s.current!==null){const v={width:s.current.naturalWidth,height:s.current.naturalHeight},m={width:s.current.width,height:s.current.height},y=t.map(T=>({...jt(v,m,T.dimension),groupId:T.groupId}));f(y)}},[s.current]);const g=()=>p("img",{ref:s,src:h,alt:"Fancy Frontier Map"}),S=()=>t.map(v=>{const m=l.find(T=>v.groupId===T.groupId);if(m==null)return p(O,{});const y=ut(me,e.activeDay,v.groupId);return p("div",{class:$e.targetingBox,style:{backgroundColor:Kt(y),left:m.x,top:m.y,width:m.width,height:m.height},onClick:()=>{c(v),u({x:m.x,y:m.y}),o(!0)}})});return p("div",{className:$e.container,children:[p(Nt,{boothDataOnMap:i,point:_,openDialog:r,closeDialog:()=>o(!1),setMarker:v=>{st(me,e.activeDay,i.groupId,v)}}),S(),p(g,{})]})}function jt(e,t,n){if(e.width===0||e.height===0)return{x:0,y:0,width:0,height:0};const r=t.width/e.width,o=t.height/e.height,i=n.x*r,c=n.y*o,_=n.width*r,u=n.height*o;return{x:i,y:c,width:_,height:u}}function Kt(e){switch(e){case D.plannedToGo:return"#ff0000b3";case D.alreadyGone:return"#008000b3";case D.none:return"transparent"}}function Ge(e){switch(e){case d.day1:return Et;case d.day2:return Ot;case d.day3:return Mt}}const Y=e=>e.toString().padStart(2,"0"),qt=()=>{const e=new Date;return e.getFullYear()+"-"+Y(e.getMonth()+1)+"-"+Y(e.getDate())+"-"+Y(e.getHours())+"-"+Y(e.getMinutes())+"-"+Y(e.getSeconds())};function Jt(e){return p("input",{type:"file",onChange:n=>{var o;const r=(o=n.target.files)==null?void 0:o[0];if(r){const i=new FileReader;i.onload=()=>{e.onFileContentChange(i.result)},i.onerror=()=>{console.error("Error reading file")},i.readAsText(r)}}})}const Qt="_dropDown_fiikc_1",zt={dropDown:Qt};function Vt(e){return p(O,{children:[p("span",{children:e.tipText}),p("select",{class:zt.dropDown,value:e.value,onChange:t=>{var n;(n=e.onChange)==null||n.call(e,t.target.value)},children:e.optionValue!==void 0?e.optionValue.map(t=>p("option",{value:t.value,children:t.option},t.value)):null})]})}function en(e){const t=[{option:p(O,{children:"第一天"}),value:d.day1},{option:p(O,{children:"第二天"}),value:d.day2},{option:p(O,{children:"第三天"}),value:d.day3}];return p("header",{children:[p(Vt,{tipText:"選擇天數：",value:lt(M.FF44,d.day1),optionValue:t,onChange:n=>{const r=parseInt(n);Ut(M.FF44,r),e.onActiveDayChange(r)}}),p("span",{children:"　|　"}),p("button",{onClick:tn,children:"匯出設定"}),p("span",{children:"　|　"}),p("span",{children:"匯入設定："}),p(Jt,{onFileContentChange:nn})]})}function tn(){const e=Bt(M.FF44),t={eventType:M[M.FF44],version:"1",mapMarker:e},n=JSON.stringify(t),r=new Blob([n],{type:"application/json"}),o=URL.createObjectURL(r),i=document.createElement("a");i.href=o,i.download=`FF44-setting-${qt()}.json`,i.click(),URL.revokeObjectURL(o)}function nn(e){if(e===null)return;JSON.parse(e).mapMarker.forEach(n=>{const r=ae(n.activeDay);r!==null&&st(me,r,n.id,_t(n.marker))})}function rn(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:c}=e;let _,u,s;const h=async(l=!0)=>{await u,s==null||s()};async function a(){if("serviceWorker"in navigator){if(_=await kt(async()=>{const{Workbox:l}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:l}},[]).then(({Workbox:l})=>new l("/FfMapMarker/sw.js",{scope:"/FfMapMarker/",type:"classic"})).catch(l=>{c==null||c(l)}),!_)return;s=()=>{_==null||_.messageSkipWaiting()};{let l=!1;const f=()=>{l=!0,_==null||_.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()}),n==null||n()};_.addEventListener("installed",g=>{typeof g.isUpdate>"u"?typeof g.isExternal<"u"&&g.isExternal?f():!l&&(r==null||r()):g.isUpdate||r==null||r()}),_.addEventListener("waiting",f)}_.register({immediate:t}).then(l=>{i?i("/FfMapMarker/sw.js",l):o==null||o(l)}).catch(l=>{c==null||c(l)})}}return u=a(),h}function on(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:c}=e,[_,u]=E(!1),[s,h]=E(!1),[a]=E(()=>rn({immediate:t,onOfflineReady(){h(!0),r==null||r()},onNeedRefresh(){u(!0),n==null||n()},onRegistered:o,onRegisteredSW:i,onRegisterError:c}));return{needRefresh:[_,u],offlineReady:[s,h],updateServiceWorker:a}}function an(){const{offlineReady:[e],needRefresh:[t],updateServiceWorker:n}=on({onRegistered(o){console.log("SW Registered: "+o)},onRegisterError(o){console.log("SW registration error",o)}}),r=()=>{};return p("div",{className:"ReloadPrompt-container",children:(e||t)&&p("div",{className:"ReloadPrompt-toast",children:[p("div",{className:"ReloadPrompt-message",children:e?p("span",{children:"App ready to work offline"}):p("span",{children:"New content available, click on reload button to update."})}),t&&p("button",{className:"ReloadPrompt-toast-button",onClick:()=>n(!0),children:"Reload"}),p("button",{className:"ReloadPrompt-toast-button",onClick:()=>r(),children:"Close"})]})})}function cn(){const[e,t]=E(lt(M.FF44,d.day1));return p(Q,{children:[p(an,{}),p(en,{onActiveDayChange:t}),p("main",{children:p(ct,{children:[p(Be,{path:"/",component:()=>Xe({activeDay:e})}),p(Be,{default:!0,component:()=>Xe({activeDay:e})})]})})]})}vt(p(cn,{}),document.body);