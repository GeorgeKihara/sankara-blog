if (self.CavalryLogger) { CavalryLogger.start_js(["kHpQ4"]); }

__d("CometPivotLinkTab.react",["CometPressable.react","JSScheduler","React","TetraPivotLink.react","stylex","useIntersectionObserver"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={tab:{alignItems:"bp9cbjyn",boxSizing:"rq0escxv",display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"frgo5egb",paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus",position:"l9j0dhe7",zIndex:"tkr6xdv7"}};function a(a,c){var d=a.FocusItem,e=a.containerRef,f=a.disabled;f=f===void 0?!1:f;var j=a.hasNewContentBadge;j=j===void 0?!1:j;var k=a.image,l=a.label,m=a.labelIsHidden;m=m===void 0?!1:m;var n=a.onHidden,o=a.selected;o=o===void 0?!1:o;var p=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["FocusItem","containerRef","disabled","hasNewContentBadge","image","label","labelIsHidden","onHidden","selected","xstyle"]);var q=h.useState(!0),r=q[0],s=q[1],t=h.useRef(n);t.current=n;q=h.useCallback(function(a){var c=a.intersectionRatio;b("JSScheduler").runWithUserBlockingPriority_DO_NOT_USE(function(){var a=c<.1;s(a);t.current&&t.current(a)})},[]);n=b("useIntersectionObserver")(q,{root:e?function(){return e.current}:null,threshold:.5});q=h.jsx("div",{className:(g||(g=b("stylex")))(i.tab,p),ref:c,children:h.jsx(b("TetraPivotLink.react"),{disabled:f,hasNewContentBadge:j,image:k,label:l,labelIsHidden:m,linkProps:a.linkProps,onPress:a.onPress,ref:n,selected:o})});return d&&!r?h.jsx(d,{children:q}):q}c=h.forwardRef(a);e.exports=c}),null);
__d("CometPivotLinkTabs.react",["ix","fbt","BaseContainerQueryElement.react","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometKeys","CometPivotLinkTab.react","FocusGroup.react","HiddenSubtreePassiveContext","React","fbicon","focusScopeQueries","mergeRefs","requireDeferred","stylex","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=b("requireDeferred")("CometTabMenuForPivotLinks.react");c=b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);var l=c[0],m=c[1],n={horizontalList:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3"},moreTab:{height:"datstx6m"},moreWrapper:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",whiteSpace:"g0qnabr5"},root:{marginEnd:"dlv3wnog",marginStart:"rl04r1d5",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",zIndex:"du4w35lb"},tabsContainer:{width:"k4urcfbm"}};function a(a){var c=a.tabs,d=a.maxTabs,e=d===void 0?c.length:d,f=a.moreTabXStyle;d=a.tabsContainerStyle;var q=j.useContext(b("HiddenSubtreePassiveContext")),r=j.useRef(null),s=j.useRef([]),t=j.useRef(null);a=j.useState(null);var u=a[0],v=a[1];a=j.useState(0);var w=a[0],x=a[1];a=j.useState(function(){return Array.from({length:c.length}).map(function(b,a){return a}).filter(function(a){return a>=e})});var y=a[0],z=a[1],A=j.useCallback(function(){return[s.current.map(function(a){return a!=null?a.getBoundingClientRect().width:0}),t.current?t.current.getBoundingClientRect().width:0]},[]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=function(){var a=A(),b=a[0];a=a[1];v(b);x(a)};if(q.getCurrentState().hidden){var b=q.subscribeToChanges(function(c){c.hidden||(a(),b.remove())});return function(){b.remove()}}a()},[A,q]);var B=e<c.length?c.slice(0,e):c,C=[];if(u!=null){a=0;var D=0;for(var E=0;E<u.length;E++){var F;F=(F=u[E])!=null?F:0;a+=F;var G=void 0;E===c.length-1?(G=Math.max(D,a),C.push(j.jsx(b("BaseContainerQueryElement.react"),{breakpoint:G,maxWidth:"100%",minWidth:0},E))):(G=Math.max(D,a+w),C.push(j.jsx(b("BaseContainerQueryElement.react"),{breakpoint:G,maxWidth:F,minWidth:0},E)));D=G}}var H=[],I=0;F=function(a){var d,e=B[a];I+=(d=u&&u[a])!=null?d:0;H.push(j.jsx(b("BaseContainerQueryElement.react"),{breakpoint:I+(a===c.length-1?0:w),inverseToContainer:!0,maxWidth:"100%",minWidth:0},a+"pusher"));H.push(j.createElement(b("CometPivotLinkTab.react"),babelHelpers["extends"]({},e,{FocusItem:m,containerRef:r,key:a+"tab",onHidden:function(b){z(function(c){return b?o(c,a):p(c,a)})},ref:function(b){return s.current[a]=b},role:"tab"})))};for(var G=0;G<B.length;G++)F(G);E=[{command:{key:b("CometKeys").LEFT},description:h._("Previous item"),handler:function(){}},{command:{key:b("CometKeys").RIGHT},description:h._("Next item"),handler:function(){}}];var J=j.useMemo(function(){return y.some(function(a){return(a=c[a])==null?void 0:a.selected})},[y,c]);D=j.useCallback(function(a,c){a=b("mergeRefs")(a,t);var d=[{command:{key:b("CometKeys").DOWN},description:h._("Open Menu"),handler:c}];return j.jsxs(b("CometComponentWithKeyCommands.react"),{commandConfigs:d,xstyle:[n.horizontalList,n.moreWrapper],children:[C,j.jsx(b("CometPivotLinkTab.react"),{FocusItem:m,"aria-haspopup":"menu","aria-label":h._("More"),image:{icon:b("fbicon")._(g("484386"),16),type:"icon"},label:h._("More"),labelIsHidden:!0,onPress:c,ref:a,role:"tab",selected:J,testid:void 0,xstyle:[n.moreTab,f]})]})},[J,f,C]);return j.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:E,children:j.jsx(l,{orientation:"horizontal",preventScrollOnFocus:!0,tabScopeQuery:b("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:j.jsxs("div",{className:(i||(i=b("stylex")))(n.root),ref:r,role:"tablist",children:[j.jsx("div",{className:i(n.horizontalList,n.tabsContainer,d),role:"tab",children:H}),j.jsx(b("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:y.map(function(a){return c[a]}).filter(Boolean)},popoverResource:k,children:D})]})})})}function o(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function p(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}}),null);
__d("CometResponsiveTopNav.react",["BaseHeading.react","BaseRow.react","BaseRowItem.react","React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={row:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},tabs:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"},title:{paddingEnd:"hv4rvrfc"}};function a(a){var c=a.action,d=a.auxiliary,e=a.tabs,f=a.title;a=a.xstyle;return g.jsxs(b("BaseRow.react"),{verticalAlign:"center",xstyle:[h.row,a],children:[f!=null?g.jsx(b("BaseRowItem.react"),{xstyle:h.title,children:g.jsx(b("BaseHeading.react"),{isPrimaryHeading:!0,children:g.jsx(b("TetraText.react"),{type:"headlineEmphasized1",children:f})})}):null,g.jsx(b("BaseRowItem.react"),{expanding:!0,xstyle:h.tabs,children:e}),c&&g.jsx(b("BaseRowItem.react"),{children:c}),g.jsx(b("BaseRowItem.react"),{children:d})]})}}),null);
__d("CometLayoutSidePaneResponsive.react",["BaseGlimmer.react","CometLeftRailComponent.react","CometPivotLinkTab.react","CometPivotLinkTabs.react","CometResponsiveTopNav.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";f.CometLayoutSidePaneResponsive=a;f.CometLayoutSidePaneResponsiveLoading=c;var g,h=b("React"),i={glimmerContainer:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},left:{display:"j83agx80",minWidth:"dhp61c6y","@media (max-width: 899px)":{display:"hlyrhctz"}},top:{display:"mkhogb32","@media (max-width: 899px)":{backgroundColor:"gcwhehuz",borderBottom:"ac9gatro",display:"q852woou",paddingTop:"j27xe2ae",paddingBottom:"k7o7rpa8",zIndex:"nakwltuq"}},ufiGlimmer:{borderTopStartRadius:"dwerhba3",borderTopEndRadius:"kgjeooe1",borderBottomEndRadius:"kxcb68kb",borderBottomStartRadius:"mwvzfrdb",height:"bsodd3zb",marginTop:"tr9rh885",marginEnd:"wkznzc2l",marginBottom:"sjgh65i0",marginStart:"dhix69tm",width:"pnicyljo"}};function a(a){var c=a.header,d=a.primaryNav,e=a.search,f=a.secondaryNav;a=a.topTabs;return h.jsxs(h.Fragment,{children:[h.jsx(b("CometLeftRailComponent.react"),{header:c,primaryNav:d,search:e!=null?e.leftSearch:null,secondaryNav:f,xstyle:i.left}),h.jsx(b("CometResponsiveTopNav.react"),{action:e!=null?e.topSearch:void 0,tabs:h.jsx(b("CometPivotLinkTabs.react"),{tabs:a}),xstyle:i.top})]})}function c(a){var c=a.header;a=a.primaryNavPlaceholder;return h.jsxs(h.Fragment,{children:[h.jsx(b("CometLeftRailComponent.react"),{header:c,primaryNav:a,xstyle:i.left}),h.jsxs("div",{className:[(g||(g=b("stylex")))(i.top),g(i.glimmerContainer)],children:[h.jsx(b("BaseGlimmer.react"),{className:g(i.ufiGlimmer),index:1}),h.jsx(b("BaseGlimmer.react"),{className:g(i.ufiGlimmer),index:2}),h.jsx(b("BaseGlimmer.react"),{className:g(i.ufiGlimmer),index:3})]})]})}}),null);