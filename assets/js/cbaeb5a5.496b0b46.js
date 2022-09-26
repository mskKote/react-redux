"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,x=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(x,c(c({ref:t},p),{},{components:n})):r.createElement(x,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7774:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"accessing-store",title:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store)",hide_title:!0,sidebar_label:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store)",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 > \u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store): \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store) \u0432 \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445"},s=void 0,l={unversionedId:"using-react-redux/accessing-store",id:"using-react-redux/accessing-store",isDocsHomePage:!1,title:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store)",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 > \u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store): \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store) \u0432 \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445",source:"@site/../docs/using-react-redux/accessing-store.md",sourceDirName:"using-react-redux",slug:"/using-react-redux/accessing-store",permalink:"/using-react-redux/accessing-store",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/using-react-redux/accessing-store.md",tags:[],version:"current",lastUpdatedAt:1664043473,formattedLastUpdatedAt:"9/24/2022",frontMatter:{id:"accessing-store",title:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store)",hide_title:!0,sidebar_label:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store)",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 > \u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store): \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store) \u0432 \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445"},sidebar:"docs",previous:{title:"Connect: \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e mapDispatchToProps",permalink:"/using-react-redux/connect-mapdispatch"},next:{title:"Provider",permalink:"/api/provider"}},p=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",children:[],level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u0443\u043a\u0430 <code>useStore</code>",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0445\u0443\u043a\u0430-usestore",children:[],level:2},{value:"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",id:"\u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",children:[{value:"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0438 API \u0445\u0443\u043a\u043e\u0432",id:"\u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u0438-api-\u0445\u0443\u043a\u043e\u0432",children:[],level:3}],level:2},{value:"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449(store)",id:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449store",children:[],level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 <code>ReactReduxContext</code> \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-reactreduxcontext-\u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e",children:[],level:2},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0440\u0435\u0441\u0443\u0440\u0441\u044b",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0434\u043e\u0441\u0442\u0443\u043f-\u043a-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443store"},"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store)"),(0,a.kt)("p",null,"React Redux \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 API, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0432\u0430\u0448\u0438\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c(dispatch) \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430(store)."),(0,a.kt)("p",null,"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u044d\u0442\u043e\u0433\u043e, React Redux \u0430\u0431\u0441\u0442\u0440\u0430\u0433\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435, \u0438 \u043a\u0430\u043a \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043d\u0438\u043c. \u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0432\u0430\u0448\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u044c\u0441\u044f \u043e\u0431 \u044d\u0442\u0438\u0445 \u0434\u0435\u0442\u0430\u043b\u044f\u0445 \u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043d\u0435 \u0441\u0441\u044b\u043b\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435(store). React Redux \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0434\u0435\u0442\u0430\u043b\u0438 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435(store) \u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435(state) \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0432 c\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u0442\u0430\u043a \u044d\u0442\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043b\u0436\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("p",null,"\u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435, \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430(store) \u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f(state) \u0432 c\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u044f\u043c\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store). \u0412\u043e\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c."),(0,a.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"),(0,a.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0438 React Redux \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},'\u0444\u0443\u043d\u043a\u0446\u0438\u044e "\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430" React'),", \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 Redux \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u0434\u043b\u044f \u0433\u043b\u0443\u0431\u043e\u043a\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 c\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432. \u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0432\u0435\u0440\u0441\u0438\u0438 6 React Redux, \u044d\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createContext()"),", \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactReduxContext"),"."),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," \u0438\u0437 React Redux \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ReactReduxContext.Provider>"),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c Redux \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435(store) \u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0435\n\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435(state) \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442, \u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ReactReduxContext.Consumer>"),", \u0447\u0442\u043e\u0431\u044b \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f."),(0,a.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0445\u0443\u043a\u0430-usestore"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u0443\u043a\u0430 ",(0,a.kt)("inlineCode",{parentName:"h2"},"useStore")),(0,a.kt)("p",null,"\u0425\u0443\u043a ",(0,a.kt)("a",{parentName:"p",href:"/api/hooks#useStore"},(0,a.kt)("inlineCode",{parentName:"a"},"useStore"))," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactReduxContext"),". \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store),\n\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434."),(0,a.kt)("h2",{id:"\u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"},"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"),(0,a.kt)("p",null,"\u0412\u043c\u0435\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0437 React Redux \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Provider context={MyContext} store={store}>\n  <App />\n</Provider>\n")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442, React Redux \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider />"),", \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0432\u0441\u0435\u043c \u0432\u0430\u0448\u0438\u043c c\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435, \u043a\u0430\u043a \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f,\n\u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u043e\u0434\u043d\u043e\u043c\u0443 \u0438 \u0442\u043e\u043c\u0443 \u0436\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u043a \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0432 connect\nexport default connect(\n  mapState,\n  mapDispatch,\n  null,\n  { context: MyContext }\n)(MyComponent)\n\n// \u0418\u043b\u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c connect \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e...\nconst ConnectedComponent = connect(\n  mapState,\n  mapDispatch\n)(MyComponent)\n\n// ...\u0438 \u0437\u0430\u0442\u0435\u043c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \n// \u043a\u0430\u043a \u043f\u0440\u043e\u043f\u0441 \u0432 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\n<ConnectedComponent context={MyContext} />\n")),(0,a.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 React Redux \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435(store) \u0432 \u0441\u0432\u043e\u0451\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0412\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0434\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"<Provider />"),", \u043d\u043e \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u0436\u0435 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 (\u0438\u043b\u0438 \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0432\u043e\u043e\u0431\u0449\u0435) c\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c."),(0,a.kt)("li",{parentName:"ul"},"\u0412\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 c\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443, \u043d\u043e \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0442\u043e\u0442 \u0436\u0435 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 (\u0438\u043b\u0438 \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0435\u0433\u043e) \u0434\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"<Provider />"),".")),(0,a.kt)("p",null,"\u0412\u0438\u0434 \u043e\u0448\u0438\u0431\u043a\u0430:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Invariant Violation")),(0,a.kt)("p",{parentName:"blockquote"},'Could not find "store" in the context of "Connect(MyComponent)". Either wrap the root component in a ',(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>"),", or pass a custom React context provider to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," and the corresponding React context consumer to Connect(Todo) in connect options.")),(0,a.kt)("h3",{id:"\u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u0438-api-\u0445\u0443\u043a\u043e\u0432"},"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0438 API \u0445\u0443\u043a\u043e\u0432"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a c\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c\u0443 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443 \u0447\u0435\u0440\u0435\u0437 API \u0445\u0443\u043a\u043e\u0432, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0445\u0443\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("a",{parentName:"p",href:"/api/hooks#custom-context"},"\u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0445\u0443\u043a\u043e\u0432"),"."),(0,a.kt)("h2",{id:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449store"},"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449(store)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store#a-note-for-flux-users"},"Redux \u0431\u044b\u043b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u043e\u0434\u043d\u0438\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c(store)"),". \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435\u0438\u0437\u0431\u0435\u0436\u043d\u043e \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0432\u0435\u0440\u0441\u0438\u0438 6, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u0432.\n\u042d\u0442\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430(store) \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430\u0445 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u041d\u0430\u0438\u0432\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440\nconst ContextA = React.createContext();\nconst ContextB = React.createContext();\n\n// \u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c, \u0447\u0442\u043e reducerA \u0438 reducerB \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c\u0438 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u0430\u043c\u0438(reducer)\nconst storeA = createStore(reducerA);\nconst storeB = createStore(reducerB);\n\n// \u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u044b \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0432 Provider\nfunction App() {\n  return (\n    <Provider store={storeA} context={ContextA} />\n      <Provider store={storeB} context={ContextB}>\n        <RootModule />\n      </Provider>\n    </Provider>\n  );\n}\n\n// \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430(store),\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0443\u0436\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\nconnect(mapStateA, null, null, { context: ContextA })(MyComponentA)\n\n// \u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\n<ConnectedMyComponentA context={ContextA} />\n\n// \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u0432\u044b\u0437\u043e\u0432\u043e\u0432 connect().\n// \u0422\u0430\u043a MyComponent \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u043f\u0441\u044b \u0438\u0437 \u043e\u0431\u043e\u0438\u0445 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449 (stores)\ncompose(\n  connect(mapStateA, null, null, { context: ContextA }),\n  connect(mapStateB, null, null, { context: ContextB })\n)(MyComponent);\n")),(0,a.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-reactreduxcontext-\u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"h2"},"ReactReduxContext")," \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e"),(0,a.kt)("p",null,"\u0412 \u0440\u0435\u0434\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043e\u0441\u0442\u0443\u043f \u043a Redux \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443(store) \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u0432\u0430\u0448\u0438\u0445 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0443\u0442\u0435\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043f\u043e\u043b\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u0438\u0437 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u042d\u0442\u043e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u043d\u0435")," \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u044c\u044e \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e API React Redux \u0438 \u043c\u043e\u0436\u0435\u0442 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0431\u0435\u0437 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),". \u041c\u044b \u043f\u0440\u0438\u0437\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0435\u0441\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u0433\u0434\u0435 \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u0438 \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u0435\u043c\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0432\u0435\u0440\u0445 React Redux, \u043d\u043e \u043d\u0430\u0448\u0435 \u043e\u0441\u043e\u0431\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0434\u0435\u0442\u0430\u043b\u044c\u044e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438. \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043e\u0445\u0432\u0430\u0447\u0435\u043d\u044b \u0442\u0435\u043a\u0443\u0449\u0438\u043c\u0438 API, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441 \u0434\u043b\u044f \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0439 API."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ReactReduxContext } from 'react-redux'\n\n// \u0413\u0434\u0435-\u0442\u043e \u0432\u043d\u0443\u0442\u0440\u0438 <Provider>\nfunction MyConnectedComponent() {\n  // \u0414\u043e\u0441\u0442\u0443\u043f \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435(store) \u0447\u0435\u0440\u0435\u0437 \u0445\u0443\u043a `useContext`\n  const { store } = useContext(ReactReduxContext)\n\n  // \u0412 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438 \u043f\u0440\u043e\u043f\u0441\u043e\u0432 \u0438\u0437 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430\n  /*\n  return (\n    <ReactReduxContext.Consumer>\n      {({ store }) => {\n        // \u041b\u043e\u0433\u0438\u043a\u0430 \u0441 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c(store): \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0435\u0433\u043e \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c, \n        // \u0433\u0434\u0435 \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432 \u043c\u0435\u0442\u043e\u0434\u0430\u0445 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430\n      }}\n    </ReactReduxContext.Consumer>\n  )\n  */\n}\n")),(0,a.kt)("h2",{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0440\u0435\u0441\u0443\u0440\u0441\u044b"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u043c\u0435\u0440 CodeSandbox: ",(0,a.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/92pm9n2kl4"},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u0441 \u0442\u0435\u043c\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435(store)"),", \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0443\u0442\u0435\u043c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u0432."),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/1132"},"#1132: \u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430(store)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/1126"},"#1126: ",(0,a.kt)("inlineCode",{parentName:"a"},"<Provider>")," \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043c\u0435\u0436\u0434\u0443 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u043c \u0438 \u0435\u0433\u043e \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435\u043c"))))))}u.isMDXComponent=!0}}]);