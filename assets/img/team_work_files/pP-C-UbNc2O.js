if (self.CavalryLogger) { CavalryLogger.start_js(["rrE49"]); }

__d("TetraishEntityHeaderCoverDraggable.react",["ix","fbt","BaseScrollableArea.react","CometAspectRatioContainer.react","React","TetraIcon.react","TetraText.react","UserAgent","clamp","fbicon","stylex","useGlobalEventListener"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k={container:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},coverDraggable:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",cursor:"a7woen2v",touchAction:"kk8tqec8"},dragInstructions:{alignItems:"bp9cbjyn",backgroundColor:"d6rk862h",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",display:"j83agx80",paddingBottom:"sj5x9vvc",paddingEnd:"d1544ag0",paddingStart:"tw6a2znq",paddingTop:"cxgpxx05",position:"pmk7jnqg",start:"kfkz5moi",top:"rk01pc8j",transform:"py2didcb"},dragInstructionsIcon:{display:"j83agx80",marginEnd:"oi9244e8"}};function a(a){var c=a.children,d=a.containerAspectRatio,e=a.contentAspectRatio,f=a.focus;f=f===void 0?{x:.5,y:.5}:f;var m=a.onDrag;a=a.xstyle;var n=b("UserAgent").isBrowser("Firefox < 53");n=n?{minHeight:"100%"}:{};var o=j.useRef({x:f.x,y:f.y});f=j.useState(!0);var p=f[0],q=f[1],r=j.useRef(null),s=j.useRef(m);s.current=m;f=l(r);m=f[0];var t=f[1];f=j.useCallback(function(){var a;a=(a=r.current)==null?void 0:a.getDOMNode();if(a==null)return;var c=a.scrollHeight,f=a.scrollLeft,g=a.scrollTop;a=a.scrollWidth;var h=o.current.x,i=o.current.y;if(e<d){var j=1-e/d;i=g/c/j}else if(e>d){g=1-d/e;h=f/a/g}s.current(b("clamp")(h,0,1),b("clamp")(i,0,1))},[d,e]);j.useLayoutEffect(function(){var a;a=(a=r.current)==null?void 0:a.getDOMNode();if(a==null)return;var b=(a.scrollHeight-a.offsetHeight)*o.current.y;a.scrollTop=b;t.current.top=b;b=(a.scrollWidth-a.offsetWidth)*o.current.x;a.scrollLeft=b;t.current.left=b},[t,f]);j.useEffect(function(){var a,b=(a=r.current)==null?void 0:a.getDOMNode();if(b==null)return;var c=function a(){q(!1),b.removeEventListener("mousewheel",a,{passive:!0}),b.removeEventListener("touchstart",a,{passive:!0}),b.removeEventListener("mousedown",a,{passive:!0})};b.addEventListener("mousewheel",c,{passive:!0});b.addEventListener("touchstart",c,{passive:!0});b.addEventListener("mousedown",c,{passive:!0});return function(){b.removeEventListener("mousewheel",c,{passive:!0}),b.removeEventListener("touchstart",c,{passive:!0}),b.removeEventListener("mousedown",c,{passive:!0})}},[]);return j.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:d,xstyle:a,children:j.jsxs("div",{className:(i||(i=b("stylex")))(k.container),onMouseDown:m,children:[j.jsx(b("BaseScrollableArea.react"),{hideScrollbar:!0,horizontal:!0,onScroll:f,ref:r,vertical:!0,xstyle:k.coverDraggable,children:e<d?j.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:e,style:n,children:c}):j.jsx("div",{style:{width:100*e/d+"%"},children:j.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:e,children:c})})}),p&&j.jsxs("div",{className:(i||(i=b("stylex")))(k.dragInstructions),children:[j.jsx("div",{className:(i||(i=b("stylex")))(k.dragInstructionsIcon),children:j.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("697185"),20)})}),j.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized4",children:h._("Drag to Reposition")})]})]})})}function l(a){var c=j.useRef({x:0,y:0}),d=j.useRef({left:0,top:0}),e=j.useState(!1),f=e[0],g=e[1];e=function(b){var e;if(b.button!==0)return;e=(e=a.current)==null?void 0:e.getDOMNode();if(e==null)return;g(!0);c.current={x:b.clientX,y:b.clientY};d.current.top=e.scrollTop;d.current.left=e.scrollLeft;b.preventDefault()};var h=j.useCallback(function(b){var e;e=(e=a.current)==null?void 0:e.getDOMNode();if(e==null)return;if(!f)return;var g=b.clientX-c.current.x,h=b.clientY-c.current.y;e.scrollTop=d.current.top-h;e.scrollLeft=d.current.left-g;b.preventDefault()},[f,a]),i=j.useCallback(function(a){g(!1),a.preventDefault()},[]);b("useGlobalEventListener")("mousemove",f?h:null,{capture:!0});b("useGlobalEventListener")("mouseup",f?i:null,{capture:!0});return[e,d]}}),null);
__d("TetraishEntityHeaderCoverMedia.react",["BaseImage.react","BaseRow.react","BaseRowItem.react","CometAspectRatioContainer.react","CometFeedWidthStyles","CometObjectFitContainerNext.react","CometPlaceholder.react","CometPressable.react","CometRouteRenderType","React","deferredLoadComponent","requireDeferredForDisplay","TetraishEntityHeaderScrollToContext","CometRow.react","CometRowItem.react","emptyFunction","gkx","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("deferredLoadComponent")(b("requireDeferredForDisplay")("TetraishEntityHeaderCoverDraggable.react")),j={accessory:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn"},backgroundCover:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},backgroundMask:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",backgroundImage:"jge66auo"},backgroundMaskWash:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",backgroundImage:"j6lzsp60"},coverActionBarContainer:{backgroundColor:"d6rk862h",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",zIndex:"tkr6xdv7"},coverActionBarContainerPushView:{top:"t4zy2t7z"},coverButton:{marginBottom:"sjgh65i0"},coverButtonRow:{backgroundImage:"kpb67iw4",paddingEnd:"gl4o1x5y",paddingStart:"lt9micmv",position:"l9j0dhe7"},coverFooterExternal:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"k4urcfbm"},coverHeaderRow:{display:"j83agx80",justifyContent:"taijpn5t",paddingTop:"immc8rqz",position:"l9j0dhe7"},coverMedia:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"},coverMediaLarge:{maxWidth:"l946jzrp"},coverMediaPlaceholder:{backgroundColor:"qsy8amke"},coverMediaRoundCornersBottom:{borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi","@media (max-width: 939px)":{borderBottomEndRadius:"kipmrytf",borderBottomStartRadius:"bti8j40k"}},coverMediaRoundCornersTop:{borderTopEndRadius:"pw54ja7n",borderTopStartRadius:"ue3kfks5","@media (max-width: 939px)":{borderTopEndRadius:"mhvw0uep",borderTopStartRadius:"rldwrbua"}},coverPhoto:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t"},image:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",height:"datstx6m",width:"k4urcfbm"},mediaOverlayContainer:{backgroundColor:"d6rk862h",bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},navBarPushViewBackground:{backgroundColor:"hybvsw6c",height:"cb02d2ww"},pressable:{display:"a8c37x1j"}},k=b("CometFeedWidthStyles").getEntityHeaderWidthStyles(),l=1.9,m=2.7,n=9.4,o=1.1;function a(a){var c=a.backgroundMask;c=c===void 0?"card":c;var d=a.backgroundMedia,e=a.coverActionBar,f=a.coverButton,p=a.coverFooter,q=a.coverHeader,r=a.coverMedia,s=a.coverOverlay,t=a.isDraggable;t=t===void 0?!1:t;var u=a.onDrag;u=u===void 0?b("emptyFunction"):u;var v=a.renderCoverFooterBelow;v=v===void 0?!1:v;var w=a.roundCorners,x=a.size;x=x===void 0?"normal":x;a=a.scrollToBottom;var y=a===void 0?!1:a;a=.5;var z=.5,A=0,B=null,C=0,D=null;if(r!=null){var E=r.focusX,F=r.focusY,G=r.height,H=r.mediaSource,I=r.width;r=babelHelpers.objectWithoutPropertiesLoose(r,["focusX","focusY","height","mediaSource","width"]);a=(E=E)!=null?E:a;z=(E=F)!=null?E:z;A=(F=G)!=null?F:A;B=(E=H)!=null?E:B;C=(G=I)!=null?G:C;D=(F=r)!=null?F:D}H={large:l,mobile:o,normal:m,"short":n};E=H[x];I=b("CometRouteRenderType").useIsPushView();var J=h.useContext(b("TetraishEntityHeaderScrollToContext")),K=h.useRef(null);h.useEffect(function(){y&&J.scrollToTop(K,316)},[J,y]);G=b("gkx")("708253");F=((r=d==null?void 0:d.focusX)!=null?r:.5)*100+"%";H=C>0&&A>0?C/A:E;r=typeof B==="string"?h.jsx(b("BaseImage.react"),{"data-imgperflogname":"profileCoverPhoto",src:B,xstyle:j.image}):B;C=typeof B==="string"?h.jsx(b("CometObjectFitContainerNext.react"),{containerAspectRatio:E,contentAspectRatio:H,focus:{x:a,y:z},mode:"cover",children:h.jsx(b("BaseImage.react"),{"data-imgperflogname":"profileCoverPhoto",src:B,xstyle:j.image})}):h.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:E,children:B});A=t?h.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:E,children:h.jsx(b("CometPlaceholder.react"),{fallback:C,children:h.jsx(i,{containerAspectRatio:E,contentAspectRatio:H,focus:{x:a,y:z},onDrag:u,xstyle:j.image,children:r})})}):C;return h.jsxs(h.Fragment,{children:[e!=null&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:(g||(g=b("stylex")))(I&&j.navBarPushViewBackground)}),h.jsx("div",{className:(g||(g=b("stylex")))(j.coverActionBarContainer,I&&j.coverActionBarContainerPushView),children:e})]}),h.jsxs(b("BaseRow.react"),{align:"center",children:[G&&d!=null&&h.jsxs("div",{className:(g||(g=b("stylex")))(j.backgroundCover,d.xstyle),children:[h.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:H,style:{left:F,position:"absolute",top:0,transform:"translateX(-"+F+")"},children:h.jsx(b("BaseImage.react"),{src:d.uri,xstyle:j.image})}),h.jsx("div",{className:(g||(g=b("stylex")))(c==="card"&&j.backgroundMask,c==="wash"&&j.backgroundMaskWash)})]}),h.jsxs(b("BaseRowItem.react"),{expanding:!0,useDeprecatedStyles:!0,xstyle:[j.coverPhoto,k.coverMediaContainer],children:[h.jsxs("div",{className:(g||(g=b("stylex")))(j.coverMedia,x==="large"&&j.coverMediaLarge,!v&&w!=="none"&&G&&j.coverMediaRoundCornersBottom,w==="all"&&j.coverMediaRoundCornersTop,r==null&&j.coverMediaPlaceholder),ref:K,style:{borderRadius:!v&&w!=="none"?"max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px":"",borderTopLeftRadius:"0px",borderTopRightRadius:"0px"},children:[q!=null&&h.jsx("div",{className:(g||(g=b("stylex")))(j.coverHeaderRow),children:q}),((B=D)==null?void 0:B.linkProps)!=null||((t=D)==null?void 0:t.onPress)!=null?h.jsx(b("CometPressable.react"),babelHelpers["extends"]({},D,{display:"inline",overlayDisabled:!0,testid:void 0,xstyle:j.pressable,children:A})):A,s!=null&&h.jsx("div",{className:(g||(g=b("stylex")))(j.mediaOverlayContainer),children:s}),(f!=null||p!=null)&&h.jsxs("div",{className:(g||(g=b("stylex")))(j.accessory),children:[f!=null&&h.jsx("div",{className:(g||(g=b("stylex")))(j.coverButtonRow),children:h.jsx(b("CometRow.react"),{align:"end",children:h.jsx(b("CometRowItem.react"),{children:h.jsx("div",{className:(g||(g=b("stylex")))(j.coverButton),children:f})})})}),!v&&p]})]}),v&&h.jsx("div",{className:(g||(g=b("stylex")))(j.coverFooterExternal,w!=="none"&&G&&j.coverMediaRoundCornersBottom),children:p})]})]})]})}}),null);
__d("CometCoverPhotoEditReducer",[],(function(a,b,c,d,e,f){"use strict";f.getInitialState=a;f.reducer=b;function a(){return{canReposition:!1,coverPhoto:null,editSlideshow:!1,file:null,isUploading:!1,selectedSlideshowIndex:null,shouldShowEditMenu:!1,slideshowData:[],videoUploadState:null}}function b(a,b){switch(b.type){case"REPOSITION":return babelHelpers["extends"]({},a,{canReposition:!0,coverPhoto:b.data});case"REPOSITION_CANCEL":return babelHelpers["extends"]({},a,{canReposition:!1,coverPhoto:null});case"EDIT_SLIDESHOW":return babelHelpers["extends"]({},a,{coverPhoto:b.data,editSlideshow:!0,isUploading:!1,slideshowData:b.slideshowData});case"EDIT_SLIDESHOW_CANCEL":return babelHelpers["extends"]({},a,{editSlideshow:!1,isUploading:!1,selectedSlideshowIndex:null,slideshowData:[]});case"CHOOSE_SLIDESHOW":return babelHelpers["extends"]({},a,{selectedSlideshowIndex:b.selectedSlideshowIndex});case"EDIT_SLIDESHOW_STARTED":return babelHelpers["extends"]({},a,{isUploading:!0});case"UPLOAD_FAILED":return babelHelpers["extends"]({},a,{file:null,isUploading:!1});case"UPLOAD_STARTED":return babelHelpers["extends"]({},a,{file:b.file,isUploading:!0});case"UPLOAD_SUCCESS":return babelHelpers["extends"]({},a,{canReposition:!0,coverPhoto:b.data,file:null,isUploading:!1});case"VIDEO_UPLOAD_FAILED":return babelHelpers["extends"]({},a,{videoUploadState:"FAILED"});case"VIDEO_UPLOAD_ATTACHED":return babelHelpers["extends"]({},a,{videoUploadState:"ATTACHED"});case"VIDEO_UPLOAD_STARTED":return babelHelpers["extends"]({},a,{videoUploadState:"UPLOADING"});case"VIDEO_UPLOAD_POSTPROCESSING":return babelHelpers["extends"]({},a,{videoUploadState:"POSTPROCESSING"});case"VIDEO_UPLOAD_SUCCESS":return babelHelpers["extends"]({},a,{videoUploadState:null});case"UPLOAD_SLIDESHOW_SUCCESS":return babelHelpers["extends"]({},a,{canReposition:!1,editSlideshow:!0,file:null,isUploading:!1,slideshowData:b.slideshowData});case"SHOW_EDIT_MENU":return babelHelpers["extends"]({},a,{shouldShowEditMenu:!0});case"DID_SHOW_EDIT_MENU":return babelHelpers["extends"]({},a,{shouldShowEditMenu:!1});default:return a}}}),null);
__d("ProfileCometCoverPhotoEditContext",["CometCoverPhotoEditReducer","React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({dispatch:b("emptyFunction"),state:b("CometCoverPhotoEditReducer").getInitialState()});e.exports=c}),null);
__d("ProfileCometCoverPhotoUploaderContainer.react",["CometFileSelector.react","ProfileCometCoverPhotoEditContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children;a=g.useContext(b("ProfileCometCoverPhotoEditContext"));var d=a.dispatch;a=g.useCallback(function(a){if(!a.length)return;d({file:a[0],type:"UPLOAD_STARTED"})},[d]);return g.jsx(b("CometFileSelector.react"),{accept:["image/*","image/heif","image/heic"],onFilesSelected:a,children:function(a){return c(a)}})}}),null);