(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[970],{6970:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ze}});var r=n(9434),o=n(2791),a=n(3634),i="NOT_FOUND";var s=function(e,t){return e===t};function c(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,o=void 0===r?s:r,a=n.maxSize,c=void 0===a?1:a,u=n.resultEqualityCheck,l=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),d=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:i},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}return i}return{get:r,put:function(t,o){r(t)===i&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,l);function p(){var t=d.get(arguments);if(t===i){if(t=e.apply(null,arguments),u){var n=d.getEntries(),r=n.find((function(e){return u(e.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return p.clearCache=function(){return d.clear()},p}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,i=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=s,d=l.memoizeOptions,p=void 0===d?n:d,f=Array.isArray(p)?p:[p],v=u(r),m=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(f)),h=e((function(){for(var e=[],t=v.length,n=0;n<t;n++)e.push(v[n].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:v,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var d=l(c),p=function(e){return e.contacts.contacts},f=function(e){return e.contacts.isLoading},v=function(e){return e.contacts.error},m=function(e){return e.contacts.filter},h=(d([p,m],(function(e,t){return e.contacts.filter((function(e){var n,r;return null===e||void 0===e||null===(n=e.name)||void 0===n||null===(r=n.toLowerCase())||void 0===r?void 0:r.includes(t)}))})),function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}),g=n(5953),y=n(8093),b=n(7205),x=n(6009),Z=n(5218),j=n(184),C=function(){var e=(0,r.I0)(),t=(0,r.v9)(p),n=(0,x.a)().user;return(0,j.jsx)("form",{onSubmit:function(r){r.preventDefault();var o=r.currentTarget.elements[0].value,i=r.currentTarget.elements[2].value,s={id:h(),name:o,phone:i,email:n.email,favorite:!1};o.length>1&&o.length<51?i.length>8&&i.length<21?t.find((function(e){return e.name.toLocaleLowerCase()===s.name.toLocaleLowerCase()}))?Z.ZP.error("".concat(s.name," is already in contacts"),{duration:4e3,position:"top-center"}):(Z.ZP.success("Successfully created!",{duration:4e3,position:"top-center"}),e((0,a.el)(s)),r.currentTarget.reset()):Z.ZP.error("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",{duration:4e3,position:"top-center"}):Z.ZP.error("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",{duration:4e3,position:"top-center"})},children:(0,j.jsxs)(g.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:3,children:[(0,j.jsx)(g.ZP,{item:!0,xs:!0,children:(0,j.jsx)(y.Z,{required:!0,id:"outlined-required",label:"Name",type:"text",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}})}),(0,j.jsx)(g.ZP,{item:!0,xs:!0,children:(0,j.jsx)(y.Z,{required:!0,id:"outlined-number-required",label:"Number",type:"tel",inputProps:{pattern:"^\\d{10}$"}})}),(0,j.jsx)(g.ZP,{item:!0,xs:"auto",children:(0,j.jsx)(b.Z,{variant:"outlined",type:"submit",children:"Add"})})]})})},w=function(e){var t=e.title,n=e.children;return(0,j.jsxs)("section",{children:[(0,j.jsx)("h2",{children:t}),n]})},P=n(885),S=n(5629),I=n(4942),A=n(3366),k=n(7462),N=n(8182),R=n(4419),M=n(627),F=n(2065),L=n(277),O=n(5513),G=n(753),B=n(6258),q=n(3026),T=n(7933),_=n(8826),z=n(5878),E=n(1217);function V(e){return(0,E.Z)("MuiListItem",e)}var W=(0,z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var D=(0,z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function U(e){return(0,E.Z)("MuiListItemSecondaryAction",e)}(0,z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var J=["className"],H=(0,L.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,k.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),Y=o.forwardRef((function(e,t){var n=(0,O.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,a=(0,A.Z)(n,J),i=o.useContext(_.Z),s=(0,k.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,R.Z)(r,U,n)}(s);return(0,j.jsx)(H,(0,k.Z)({className:(0,N.Z)(c.root,r),ownerState:s,ref:t},a))}));Y.muiName="ListItemSecondaryAction";var $=Y,K=["className"],Q=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],X=(0,L.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,k.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,k.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,I.Z)({},"& > .".concat(D.root),{paddingRight:48}),(t={},(0,I.Z)(t,"&.".concat(W.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,I.Z)(t,"&.".concat(W.selected),(0,I.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,F.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(W.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,F.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,I.Z)(t,"&.".concat(W.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,I.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(W.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,F.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,F.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),ee=(0,L.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),te=o.forwardRef((function(e,t){var n=(0,O.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,a=void 0===r?"center":r,i=n.autoFocus,s=void 0!==i&&i,c=n.button,u=void 0!==c&&c,l=n.children,d=n.className,p=n.component,f=n.components,v=void 0===f?{}:f,m=n.componentsProps,h=void 0===m?{}:m,g=n.ContainerComponent,y=void 0===g?"li":g,b=n.ContainerProps,x=(b=void 0===b?{}:b).className,Z=n.dense,C=void 0!==Z&&Z,w=n.disabled,P=void 0!==w&&w,S=n.disableGutters,I=void 0!==S&&S,F=n.disablePadding,L=void 0!==F&&F,z=n.divider,E=void 0!==z&&z,D=n.focusVisibleClassName,U=n.secondaryAction,J=n.selected,H=void 0!==J&&J,Y=n.slotProps,te=void 0===Y?{}:Y,ne=n.slots,re=void 0===ne?{}:ne,oe=(0,A.Z)(n.ContainerProps,K),ae=(0,A.Z)(n,Q),ie=o.useContext(_.Z),se=o.useMemo((function(){return{dense:C||ie.dense||!1,alignItems:a,disableGutters:I}}),[a,ie.dense,C,I]),ce=o.useRef(null);(0,q.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var ue=o.Children.toArray(l),le=ue.length&&(0,B.Z)(ue[ue.length-1],["ListItemSecondaryAction"]),de=(0,k.Z)({},n,{alignItems:a,autoFocus:s,button:u,dense:se.dense,disabled:P,disableGutters:I,disablePadding:L,divider:E,hasSecondaryAction:le,selected:H}),pe=function(e){var t=e.alignItems,n=e.button,r=e.classes,o=e.dense,a=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",a&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,R.Z)(i,V,r)}(de),fe=(0,T.Z)(ce,t),ve=re.root||v.Root||X,me=te.root||h.root||{},he=(0,k.Z)({className:(0,N.Z)(pe.root,me.className,d),disabled:P},ae),ge=p||"li";return u&&(he.component=p||"div",he.focusVisibleClassName=(0,N.Z)(W.focusVisible,D),ge=G.Z),le?(ge=he.component||p?ge:"div","li"===y&&("li"===ge?ge="div":"li"===he.component&&(he.component="div")),(0,j.jsx)(_.Z.Provider,{value:se,children:(0,j.jsxs)(ee,(0,k.Z)({as:y,className:(0,N.Z)(pe.container,x),ref:fe,ownerState:de},oe,{children:[(0,j.jsx)(ve,(0,k.Z)({},me,!(0,M.Z)(ve)&&{as:ge,ownerState:(0,k.Z)({},de,me.ownerState)},he,{children:ue})),ue.pop()]}))})):(0,j.jsx)(_.Z.Provider,{value:se,children:(0,j.jsxs)(ve,(0,k.Z)({},me,{as:ge,ref:fe},!(0,M.Z)(ve)&&{ownerState:(0,k.Z)({},de,me.ownerState)},he,{children:[ue,U&&(0,j.jsx)($,{children:U})]}))})})),ne=n(7247),re=n(5861),oe=n(4687),ae=n.n(oe),ie=n(2939),se=n(6015),ce=n(8519),ue=n(9853);function le(e){return(0,E.Z)("MuiTypography",e)}(0,z.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var de=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],pe=(0,L.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,ue.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return(0,k.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),fe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ve={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},me=o.forwardRef((function(e,t){var n=(0,O.Z)({props:e,name:"MuiTypography"}),r=function(e){return ve[e]||e}(n.color),o=(0,ce.Z)((0,k.Z)({},n,{color:r})),a=o.align,i=void 0===a?"inherit":a,s=o.className,c=o.component,u=o.gutterBottom,l=void 0!==u&&u,d=o.noWrap,p=void 0!==d&&d,f=o.paragraph,v=void 0!==f&&f,m=o.variant,h=void 0===m?"body1":m,g=o.variantMapping,y=void 0===g?fe:g,b=(0,A.Z)(o,de),x=(0,k.Z)({},o,{align:i,color:r,className:s,component:c,gutterBottom:l,noWrap:p,paragraph:v,variant:h,variantMapping:y}),Z=c||(v?"p":y[h]||fe[h])||"span",C=function(e){var t=e.align,n=e.gutterBottom,r=e.noWrap,o=e.paragraph,a=e.variant,i=e.classes,s={root:["root",a,"inherit"!==e.align&&"align".concat((0,ue.Z)(t)),n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,R.Z)(s,le,i)}(x);return(0,j.jsx)(pe,(0,k.Z)({as:Z,ref:t,ownerState:x,className:(0,N.Z)(C.root,s)},b))})),he=function(e){var t=e.open,n=e.onClose,i=e.id,s=(0,r.I0)(),c=(0,o.useState)(null),u=(0,P.Z)(c,2),l=u[0],d=u[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,re.Z)(ae().mark((function e(){var t;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=5;break}return e.next=3,s((0,a.NJ)(i));case 3:t=e.sent,d(t.payload.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,j.jsx)(ie.Z,{open:t,onClose:n,sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,j.jsxs)(se.Z,{sx:{width:300,padding:2,background:"white",borderRadius:4},children:[(0,j.jsx)(me,{variant:"h6",children:"Contact details"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(me,{children:["name: ",null===l||void 0===l?void 0:l.name]}),(0,j.jsxs)(me,{children:["phone: ",null===l||void 0===l?void 0:l.phone]}),(0,j.jsxs)(me,{children:["favorite: ",null!==l&&void 0!==l&&l.favorite?"yes":"no"]}),(0,j.jsxs)(me,{children:["createdAt: ",null===l||void 0===l?void 0:l.createdAt]}),(0,j.jsxs)(me,{children:["updatedAt: ",null===l||void 0===l?void 0:l.updatedAt]})]})]})})},ge=function(){var e=(0,r.v9)(p),t=(0,r.v9)(m),n=(0,r.I0)(),i=(0,o.useState)(null),s=(0,P.Z)(i,2),c=s[0],u=s[1],l=Array.isArray(e)?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):[];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S.Z,{sx:{width:"100%",maxWidth:360},children:l.map((function(e){var t=e.name,r=e.phone,o=e._id,i=e.favorite;return(0,j.jsx)(te,{sx:{paddingLeft:0,paddingRight:0},children:(0,j.jsxs)(g.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,j.jsx)(g.ZP,{item:!0,xs:"auto",children:(0,j.jsxs)(g.ZP,{container:!0,justifyContent:"space-between",children:[(0,j.jsx)(g.ZP,{item:!0,xs:"auto",children:(0,j.jsxs)("span",{children:[t,":"]})}),(0,j.jsx)(g.ZP,{item:!0,xs:"auto",children:(0,j.jsx)("span",{children:r})})]})}),(0,j.jsx)(b.Z,{variant:"contained",onClick:function(){u(o)},children:"See details"}),(0,j.jsxs)(g.ZP,{item:!0,xs:"auto",children:[(0,j.jsx)(b.Z,{variant:"outlined",startIcon:(0,j.jsx)(ne.Z,{}),onClick:function(){return e={contactsId:o,favorite:i},n((0,a.R3)(e)),void Z.ZP.success("Successfully upated!",{duration:4e3,position:"top-center"});var e},children:i?"delete from fav":"add to fav"}),(0,j.jsx)(b.Z,{variant:"outlined",startIcon:(0,j.jsx)(ne.Z,{}),onClick:function(){return e=o,n((0,a._f)(e)),void Z.ZP.success("Successfully deleted!",{duration:4e3,position:"top-center"});var e},children:"Delete"})]})]})},o)}))}),c&&(0,j.jsx)(he,{open:!0,onClose:function(){u(null)},id:c})]})},ye=n(1538),be=function(){var e=(0,r.I0)();return(0,j.jsxs)(g.ZP,{container:!0,direction:"colomn",maxWidth:400,children:[(0,j.jsx)(g.ZP,{item:!0,xs:!0,children:(0,j.jsx)("p",{children:"Find contacts by name"})}),(0,j.jsx)(g.ZP,{item:!0,xs:!0,children:(0,j.jsx)(y.Z,{required:!0,id:"outlined-required",type:"text",name:"filter",onChange:function(t){e((0,ye.Tv)(t.target.value))}})})]})},xe=function(){var e=(0,r.I0)(),t=(0,r.v9)(f),n=(0,r.v9)(v);return(0,o.useEffect)((function(){e((0,a.yF)())}),[e]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{title:"Phonebook",children:(0,j.jsx)(C,{})}),(0,j.jsxs)(w,{title:"Contacts",children:[(0,j.jsx)(be,{}),t&&!n&&(0,j.jsx)("b",{children:"Request in progress..."}),(0,j.jsx)(ge,{})]})]})};function Ze(){var e=(0,x.a)().isLoggedIn;return(0,j.jsx)(j.Fragment,{children:e&&(0,j.jsx)(xe,{})})}},7247:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(5741)},5741:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return m},unsupportedProp:function(){return h},useControlled:function(){return g.Z},useEventCallback:function(){return y.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return x.Z}});var r=n(5902),o=n(9853),a=n(8949).Z,i=n(1245),s=n(2977);var c=function(e,t){return function(){return null}},u=n(6258),l=n(5783),d=n(8195);n(7462);var p=function(e,t){return function(){return null}},f=n(2971).Z,v=n(3026),m=n(6248).Z;var h=function(e,t,n,r,o){return null},g=n(4938),y=n(9511),b=n(7933),x=n(2763),Z={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=970.a033d8cc.chunk.js.map