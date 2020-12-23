if (self.CavalryLogger) { CavalryLogger.start_js(["HQ37z"]); }

__d("CometStoryAggregatedUsersSuffixDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3644368755651942",metadata:{},name:"CometStoryAggregatedUsersSuffixDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometRemote3DPhotoViewer_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometRemote3DPhotoViewer_photo",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"immersive_photo_encodings",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"projection_type",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"binary_cdn_uri",storageKey:null}],type:"PhotoEncoding3D",abstractKey:null}],storageKey:null}],type:"Photo",abstractKey:null};e.exports=a}),null);
__d("EndianAwareDataView",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b,c){c===void 0&&(c=0),this.$2=new DataView(a,c),this.$1=b}var b=a.prototype;b.getByteLength=function(){return this.$2.byteLength};b.getU8=function(a){return this.$2.getUint8(a)};b.getI8=function(a){return this.$2.getInt8(a)};b.getU16=function(a){return this.$2.getUint16(a,this.$1)};b.getI16=function(a){return this.$2.getInt16(a,this.$1)};b.getU32=function(a){return this.$2.getUint32(a,this.$1)};b.getI32=function(a){return this.$2.getInt32(a,this.$1)};b.getF32=function(a){return this.$2.getFloat32(a,this.$1)};return a}();e.exports=a}),null);
__d("EndianAwareDataReader",["EndianAwareDataView"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,c){this.$2=new(b("EndianAwareDataView"))(a,c),this.$1=0}var c=a.prototype;c.canReadU8=function(){return this.$1<this.$2.getByteLength()};c.canReadU16=function(){return this.$1<this.$2.getByteLength()-1};c.canReadU32=function(){return this.$1<this.$2.getByteLength()-3};c.seekTo=function(a){this.$1=a};c.seekRelative=function(a){this.$1+=a};c.readU8=function(){var a=this.$2.getU8(this.$1);this.$1+=1;return a};c.peekU8=function(){return this.$2.getU8(this.$1)};c.readI8=function(){var a=this.$2.getI8(this.$1);this.$1+=1;return a};c.peekI8=function(){return this.$2.getI8(this.$1)};c.readU16=function(){var a=this.$2.getU16(this.$1);this.$1+=2;return a};c.peekU16=function(){return this.$2.getU16(this.$1)};c.readI16=function(){var a=this.$2.getI16(this.$1);this.$1+=2;return a};c.peekI16=function(){return this.$2.getI16(this.$1)};c.readU32=function(){var a=this.$2.getU32(this.$1);this.$1+=4;return a};c.peekU32=function(){return this.$2.getU32(this.$1)};c.readI32=function(){var a=this.$2.getI32(this.$1);this.$1+=4;return a};c.peekI32=function(){return this.$2.getI32(this.$1)};c.readF32=function(){var a=this.$2.getF32(this.$1);this.$1+=4;return a};c.peekF32=function(){return this.$2.getF32(this.$1)};return a}();e.exports=a}),null);
__d("CometStoryAggregatedUsersSuffixDialog.entrypoint",["JSResourceForInteraction","WebPixelRatio","CometStoryAggregatedUsersSuffixDialogQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.storyID;a=a.storyRenderLocation;return{queries:{queryReference:{parameters:b("CometStoryAggregatedUsersSuffixDialogQuery$Parameters"),variables:{id:c,renderLocation:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("CometStoryAggregatedUsersSuffixDialog.react").__setRef("CometStoryAggregatedUsersSuffixDialog.entrypoint")};e.exports=a}),null);
__d("CometFeedStorySuffixAggregatedUsersRenderer",["CometEntryPointDialogTrigger.react","CometLink.react","CometStoryAggregatedUsersSuffixDialog.entrypoint","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a,c){return function(d){if(a==null||c==null){b("recoverableViolation")("story ID or render location were null when rendering aggregated users link in story title","comet_ui");return d}return g.jsx(b("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:b("CometStoryAggregatedUsersSuffixDialog.entrypoint"),otherProps:{},preloadParams:{storyID:a,storyRenderLocation:c},children:function(a){return g.jsx(b("CometLink.react"),{onClick:a,children:d})}})}};e.exports=a}),null);
__d("Comet360PhotoTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["Cylindrical","Equirectangular","TiledCubemap"]);f.Comet360PhotoProjection=a}),null);
__d("Comet3DPhotoLoadingOverlay.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.isVisible;return g.jsx("div",{className:"orwu60u2 e4zzj2sf art1omkt jowmb856 py2didcb rk01pc8j kfkz5moi pmk7jnqg hzruof5a rdkrh8wx"+(a?"":" b5wmifdl"),children:g.jsx("div",{})})}}),null);
__d("CometRemote3DPhotoViewer.react",["Comet3DPhotoLoadingOverlay.react","CometFeedStoryViewportMaxHeightMediaLayout.react","CometRelay","React","clearTimeout","recoverableViolation","requireCond","setTimeout","stylex","cr:1298198","CometRemote3DPhotoViewer_photo.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=584,k={content:{height:"datstx6m",position:"l9j0dhe7"},image:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},overlays:{bottom:"i09qtzwb",end:"n7fi1qx3",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},photoContainer:{position:"l9j0dhe7"},root:{borderBottom:"linmgsc8",borderTop:"opwvks06",boxShadow:"g81y0s2s"}};function a(a){var c,d,e=a.fallback,f=b("CometRelay").useFragment(g!==void 0?g:g=b("CometRemote3DPhotoViewer_photo.graphql"),a.photo),l=i.useState(!1),m=l[0],n=l[1];l=i.useState(!1);var o=l[0],p=l[1],q=i.useRef(null);i.useEffect(function(){q.current=b("setTimeout")(function(){p(!0)},2e3);return function(){q.current!=null&&b("clearTimeout")(q.current)}},[]);l=i.useCallback(function(){n(!0)},[n]);o=!o||!m;f=(m=f==null?void 0:f.immersive_photo_encodings)!=null?m:[];m=f.find(function(a){return(a==null?void 0:a.projection_type)==="three_d"});if(a.glbFileURI==null&&m==null){b("recoverableViolation")("3D photo does not have three_d encoding","comet_feed");return e}a=a.glbFileURI!=null?a.glbFileURI:(f=m==null?void 0:m.binary_cdn_uri)!=null?f:"";m=(f=m==null?void 0:m.id)!=null?f:"";f=(f=e.props.src)!=null?f:"";c=(c=e.props.width)!=null?c:0;d=(d=e.props.height)!=null?d:0;(c===0||d===0)&&b("recoverableViolation")("null fallback size was provided for 3d photo","comet_feed");var r=c===0||d===0?{aspectRatio:1,height:1,width:1}:{aspectRatio:c/d,height:d,width:c};r=r.aspectRatio;var s=a!=null&&b("cr:1298198")!=null?i.jsxs("div",{className:(h||(h=b("stylex")))(k.photoContainer),children:[i.jsx(b("cr:1298198"),{fallbackURI:f,fileURI:a,height:j/r,onLoad:l,photoID:m,width:j}),i.jsx("div",{className:(h||(h=b("stylex")))(k.overlays),children:i.jsx(b("Comet3DPhotoLoadingOverlay.react"),{isVisible:o})})]}):e;return i.jsx("div",{className:(h||(h=b("stylex")))(k.root),children:i.jsx(b("CometFeedStoryViewportMaxHeightMediaLayout.react"),{backgroundColor:null,mediaHeight:d,mediaWidth:c,children:function(a){return i.jsx("div",{className:(h||(h=b("stylex")))(k.content,a),children:i.jsx("div",{className:h(k.image),children:s})})}})})}}),null);
__d("CometFeedStoryDropdownMenuLoggerContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({nodeID:null});e.exports=c}),null);
__d("CometMediaViewerDispatcherContext",["React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(b("emptyFunction"));e.exports=c}),null);
__d("CometMediaViewerViewStateContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({isHovered:!1,prevMouseX:0,prevMouseY:0,scale:1,translateX:0,translateY:0,zoom:1});e.exports=c}),null);
__d("ProductTagPhotoViewerIconClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744226");c=b("FalcoLoggerInternal").create("product_tag_photo_viewer_icon_click",a);e.exports=c}),null);
__d("CometPhotoViewerTopRightIcons.react",["ix","fbt","CometFullScreen","CometMediaViewerDispatcherContext","CometMediaViewerViewStateContext","CometPhotoViewerViewStateContext","CometPhotoViewerViewStateDispatcherContext","CometProductTagLoggingUtils","CometRouteParams","CometRow.react","CometRowItem.react","CometTooltip.react","CometTrackingNodeProvider.react","React","TetraIcon.react","WebSession","fbicon","gkx","requireCond","stylex","useCometCallout","cr:1809732","cr:1809733","ProductTagPhotoViewerIconClickFalcoEvent"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k={aiProductTagBadge:{display:"j83agx80",end:"n7fi1qx3",position:"pmk7jnqg",top:"kr520xx4",zIndex:"tkr6xdv7"},iconButtons:{end:"n7fi1qx3",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"pmk7jnqg",top:"kr520xx4",zIndex:"tkr6xdv7"},productTagCallout:{maxWidth:"gtvx26ai"}},l=2,m=1;c=.2;var n=1+c,o=1-c;function a(a){var c=a.authorId,d=a.canTag,e=a.fromAYMTRetroTagNotification,f=a.numNewAISuggestions,p=a.photoID,q=a.shouldShowPeopleTagButton,r=a.shouldShowProductTagButton,s=a.storyContainerId;a=j.useState(b("CometFullScreen").isFullScreen());var t=a[0],u=a[1];a=j.useContext(b("CometPhotoViewerViewStateContext"));var v=j.useContext(b("CometMediaViewerViewStateContext")),w=j.useContext(b("CometPhotoViewerViewStateDispatcherContext")),x=j.useContext(b("CometMediaViewerDispatcherContext")),y=j.useState(r&&e),z=y[0],A=y[1];y=h._("You can tag products from your catalog to make it easier for people to shop from your posts.");var B=b("CometRouteParams").useRouteParams(),C=e?b("CometProductTagLoggingUtils").getAYMTChannelName(B.aymt_channel):null;e={align:"end",arrowStyle:"edge",label:y,position:"below",type:"accent",xstyle:k.productTagCallout};B=b("useCometCallout")(e,z);y=j.useCallback(function(){if(!t){var a=document.documentElement;a!=null&&(b("CometFullScreen").requestFullScreen(a),u(!0))}else b("CometFullScreen").exitFullScreen(),u(!1)},[t]);e=t?h._("Exit Fullscreen"):h._("Enter Fullscreen");z=j.useCallback(function(){x({type:"SET_ZOOM",zoomFactor:o})},[x]);var D=j.useCallback(function(){x({type:"SET_ZOOM",zoomFactor:n})},[x]),E=null;r?E=j.jsxs(b("CometRowItem.react"),{children:[b("cr:1809733")&&j.jsx(b("cr:1809733"),{photoID:p}),j.jsxs(b("CometTooltip.react"),{position:"below",tooltip:f>0&&b("gkx")("1809734")?h._("See suggested product tags"):h._("Tag Product"),children:[f!==0&&j.jsx("div",{className:(i||(i=b("stylex")))(k.aiProductTagBadge),children:b("cr:1809732")!=null&&j.jsx(b("cr:1809732"),{color:"blue",value:f})}),j.jsx(b("TetraIcon.react"),{"aria-label":h._("Tag product"),color:"white",disabled:v.scale>1,hideHoverOverlay:!0,icon:b("fbicon")._(g("1650356"),24),onPress:function(){b("ProductTagPhotoViewerIconClickFalcoEvent").log(function(){return{container_post_id:s,creation_session_id:b("WebSession").getId(),creator_id:c,media_id:p,media_type:"photo",platform:"comet",referral_code:C,referral_source:"post_viewer"}}),w({tagModeEnabled:!0,type:"SET_TAG_MODE_ENABLED"}),w({isProductTagging:!0,type:"SET_IS_PRODUCT_TAGGING"}),A(!1)},ref:B})]})]}):q&&(E=j.jsx(b("CometRowItem.react"),{children:j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:140,children:j.jsx(b("CometTooltip.react"),{position:"below",tooltip:h._("Tag Photo"),children:j.jsx(b("TetraIcon.react"),{"aria-label":b("gkx")("1224637")?h._("tag coworkers"):h._("tag friends"),color:"white",disabled:v.scale>1,hideHoverOverlay:!0,icon:b("fbicon")._(g("502475"),24),onPress:function(){w({tagModeEnabled:!0,type:"SET_TAG_MODE_ENABLED"})},testid:void 0})})})}));return j.jsx("div",{className:(i||(i=b("stylex")))(k.iconButtons),children:j.jsxs(b("CometRow.react"),{align:"end",children:[b("gkx")("1785420")?j.jsx(b("CometRowItem.react"),{children:j.jsx(b("TetraIcon.react"),{"aria-label":h._("Zoom In"),color:v.scale===l?"disabled":"white",disabled:v.scale===l,hideHoverOverlay:!0,icon:b("fbicon")._(g("662137"),24),onPress:D})}):null,b("gkx")("1785420")?j.jsx(b("CometRowItem.react"),{children:j.jsx(b("TetraIcon.react"),{"aria-label":h._("Zoom Out"),color:v.scale===m?"disabled":"white",disabled:v.scale===m,hideHoverOverlay:!0,icon:b("fbicon")._(g("927287"),24),onPress:z})}):null,d&&!a.tagModeEnabled&&!a.isProductTagging?E:null,j.jsx(b("CometRowItem.react"),{children:j.jsx(b("CometTooltip.react"),{position:"below",tooltip:e,children:j.jsx(b("TetraIcon.react"),{"aria-label":e,color:"white",hideHoverOverlay:!0,icon:t?b("fbicon")._(g("517759"),24):b("fbicon")._(g("517764"),24),onPress:y})})})]})})}}),null);
__d("CometMediaViewerNavigationTapTarget.react",["ix","CometMediaViewerDispatcherContext","CometPressable.react","CometTrackingNodeProvider.react","React","TetraishSkittleIcon.react","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j={buttonContainerBackground:{backgroundColor:"r898ja9m"},buttonContainerHoverLeft:{opacity:"pedkr2u6",transform:"lhh4dqlf"},buttonContainerHoverRight:{opacity:"pedkr2u6",transform:"k9ht9y5y"},fullHeight:{height:"datstx6m"},invisible:{opacity:"b5wmifdl",transitionDuration:"ijkhr0an",transitionTimingFunction:"s13u9afw",visibility:"kr9hpln1"},navButton:{alignItems:"bp9cbjyn",display:"j83agx80",opacity:"l8rlqa9s",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a",position:"l9j0dhe7",transitionDuration:"ms05siws",transitionProperty:"pnx7fd3z",transitionTimingFunction:"msbwk0y7",willChange:"ejg0drik"},root:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",opacity:"pedkr2u6",position:"l9j0dhe7",transitionDuration:"c5ndavph",transitionProperty:"art1omkt",transitionTimingFunction:"ot9fgl3s",zIndex:"tkr6xdv7"},tapTargetOverlay:{height:"datstx6m"}};function a(a){var c=a.direction,d=a.hoverOverlayHeight,e=d===void 0?"default":d;d=a.invisible;d=d===void 0?!1:d;var f=a.label,k=a.onClick,l=a.testid;l=a.trackingNode;var m=i.useContext(b("CometMediaViewerDispatcherContext"));a=function(){m({isHovered:!0,type:"SET_IS_HOVERED"})};var n=function(){m({isHovered:!1,type:"SET_IS_HOVERED"})};return i.jsx("div",{className:(h||(h=b("stylex")))(j.root,d&&j.invisible,e==="default"&&j.fullHeight),"data-testid":void 0,onMouseEnter:a,onMouseLeave:n,children:i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:l,children:i.jsx(b("CometPressable.react"),{"aria-label":f,focusable:!1,onPress:k,testid:void 0,xstyle:e==="default"&&j.tapTargetOverlay,children:function(a){a=a.hovered;return i.jsx("div",{className:(h||(h=b("stylex")))(j.navButton,e==="default"&&j.buttonContainerBackground,a&&(c==="previous"?j.buttonContainerHoverLeft:j.buttonContainerHoverRight)),children:i.jsx(b("TetraishSkittleIcon.react"),{color:"gray",icon:c==="previous"?b("fbicon")._(g("492491"),24):b("fbicon")._(g("492539"),24),size:48})})}})})})}}),null);
__d("CometMediaViewerStage.react",["fbt","CometBlurredBackgroundImage.react","CometFullScreen","CometKeys","CometMediaViewerViewStateContext","CometProductTagFunnelIDContext","Locale","React","cometGetKeyCommandConfig","gkx","stylex","useCometRoute","useCometRouterDispatcher","useDebounced","useLayerKeyCommands","CometMediaViewerNavigationTapTarget.react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=2e3;function a(a){var c=a.backgroundColor;c=c===void 0?"default":c;var d=a.backgroundSrc,e=a.initialTracePolicy,f=a.isPlayable;f=f===void 0?!1:f;var k=a.nextMediaURI,l=a.onNavigatePhoto,m=a.prevMediaURI,n=a.storyRenderLocation,o=a.subOrigin,p=a.useKeyCommands,q=p===void 0?!0:p,r=i.useContext(b("CometProductTagFunnelIDContext")),s=b("useCometRouterDispatcher")();p=i.useState(!1);var t=p[0],u=p[1],v=i.useContext(b("CometMediaViewerViewStateContext")),w=i.useRef(!0);p=function(){return x.isPending()?y():x()};var x=b("useDebounced")(function(){u(!1),y()},j,!0),y=b("useDebounced")(function(){v.isHovered||u(!0),w.current=!1},j,!1),z=i.useRef(null);b("useLayoutEffect_SAFE_FOR_SSR")(function(){z.current&&w.current&&z.current.focus()});var A=i.useCallback(function(){s!=null&&s.popPushView()},[s]),B=i.useCallback(function(){k!=null&&s!=null&&(l&&l(),s.go(k,{passthroughProps:{initialTracePolicy:e,productTagFunnelID:r,storyRenderLocation:n,subOrigin:o},target:"self",traceParams:{navigation_source:"CometMediaViewer_next"}}))},[k,s,l,e,r,o,n]),C=i.useCallback(function(){m!=null&&s!=null&&(l&&l(),s.go(m,{passthroughProps:{initialTracePolicy:e,productTagFunnelID:r,storyRenderLocation:n,subOrigin:o},target:"self",traceParams:{navigation_source:"CometMediaViewer_prev"}}))},[m,s,l,e,r,n,o]);b("useCometRoute")(m);b("useCometRoute")(k);var D=g._("Previous photo"),E=g._("Next photo"),F=i.useCallback(function(){var a=b("CometFullScreen").getFullScreenElement();if(a==null){a=document.documentElement;a!=null&&b("CometFullScreen").requestFullScreen(a)}else b("CometFullScreen").exitFullScreen()},[]),G=k!=null&&k!=="",H=m!=null&&m!=="",I=!H||t;t=!G||t;var J=i.useMemo(function(){if(!q)return[];var a=[];H&&(a.push({command:{key:b("CometKeys").PREVIOUS},description:D,handler:C}),a.push(b("cometGetKeyCommandConfig")("photoViewer","viewPrevious",C)));G&&(a.push({command:{key:b("CometKeys").NEXT},description:E,handler:B}),a.push(b("cometGetKeyCommandConfig")("photoViewer","viewNext",B)));a.push(b("cometGetKeyCommandConfig")("photoViewer","fullscreen",F));return a},[B,C,G,H,E,D,F,q]);b("useLayerKeyCommands")(J);J=i.jsx(b("CometMediaViewerNavigationTapTarget.react"),{direction:b("Locale").isRTL()?"next":"previous",hoverOverlayHeight:f?"auto":"default",invisible:I,label:D,onClick:C,testid:void 0,trackingNode:143});I=i.jsx(b("CometMediaViewerNavigationTapTarget.react"),{direction:b("Locale").isRTL()?"previous":"next",hoverOverlayHeight:f?"auto":"default",invisible:t,label:E,onClick:B,testid:void 0,trackingNode:142});return i.jsxs("div",{className:(h||(h=b("stylex"))).dedupe({"display-1":"j83agx80","flex-direction-1":"cbu4d94t","flex-grow-1":"buofh1pr","height-1":"datstx6m","min-width-1":"p01isnhg","position-1":"l9j0dhe7","outline-8.1":"iqfcb0g7"},c==="default"?{"background-color-1":"tqsryivl"}:null,c==="dark"?{"background-color-1":"iuug3ofb"}:null),onMouseMove:p,ref:z,tabIndex:"0",children:[b("gkx")("1851563")?null:i.jsx("div",{className:"iqfcb0g7 kr520xx4 j9ispegn pmk7jnqg akz8cqyu n7fi1qx3 i09qtzwb",children:d!=null?i.jsx(b("CometBlurredBackgroundImage.react"),{src:d}):null}),i.jsxs("div",{className:"iqfcb0g7 l9j0dhe7 taijpn5t datstx6m buofh1pr j83agx80 bp9cbjyn",children:[i.jsxs("div",{className:"kr520xx4 j9ispegn pmk7jnqg i1fnvgqd n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn","data-name":"media-viewer-nav-container",children:[i.jsx("div",{"aria-hidden":!0,className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb","data-testid":void 0,onClick:A}),J,I]}),a.children]})]})}}),null);
__d("extractUTF8StringFromBuffer",["EndianAwareDataReader","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function g(a){return a>127}function h(a){return a>=192&&a<=223}function i(a){return a>=224&&a<=239}function j(a){return a>=240&&a<=247}function a(a,c,d){if(c+d>a.byteLength)throw new(b("unrecoverableViolation"))("offset and length exceed ArrayBuffer bounds","webgl");if("TextDecoder"in window){var e=new TextDecoder("utf-8"),f=new Uint8Array(a,c,d);return e.decode(f)}e=new(b("EndianAwareDataReader"))(a.slice(c,c+d),!1);f=[];while(e.canReadU8()){a=e.readU8();if(g(a))if(h(a)){if(!e.canReadU8())throw new(b("unrecoverableViolation"))("incomplete two-byte utf8 sequence","webgl");c=e.readU8();a=(a&31)<<6|c&63}else if(i(a)){d=e.canReadU8()?e.readU8():null;c=e.canReadU8()?e.readU8():null;if(d==null||c==null)throw new(b("unrecoverableViolation"))("incomplete three-byte utf8 sequence","webgl");a=(a&15)<<12|(d&63)<<6|c&63}else if(j(a)){d=e.canReadU8()?e.readU8():null;c=e.canReadU8()?e.readU8():null;var k=e.canReadU8()?e.readU8():null;if(d==null||c==null||k==null)throw new(b("unrecoverableViolation"))("incomplete four-byte utf8 sequence","webgl");a=(a&7)<<18|(d&63)<<12|(c&63)<<6|k&63}else throw new(b("unrecoverableViolation"))("unknown utf8 start sequence","webgl");if(a<=65535)f.push(String.fromCharCode(a));else if(a<=1114111)a-=65536,f.push(String.fromCharCode(a>>10|55296)),f.push(String.fromCharCode(a&1023|56320));else throw new(b("unrecoverableViolation"))("codepoint is beyond ","webgl")}return f.join("")}}),null);
__d("StoryRenderLocation",[],(function(a,b,c,d,e,f){a=Object.freeze({ACCOUNT_STATUS:"account_status",ACELA:"acela",ACTION_EXPERIENCE:"action_experience",ACTIVITY_AND_FEEDBACK_TEST:"activity_and_feedback_test",ACTIVITY_LOG:"activity_log",ACTOR_EXPERIENCE_APPEALS:"actor_experience_appeals",ACTOR_GATEWAY:"actor_gateway",ADMIN_FEED:"admin_feed",ADS_PREVIEW:"ads_preview",ADS_TRANSPARENCY_SHOW_ADS:"ads_transparency_show_ads",AGGREGATED_NOTIFICATIONS_PERMALINK:"aggregated_notifications_permalink",AGORA_BREAKING_NEWS:"agora_breaking_news",AGORA_DEEP_DIVE:"agora_deep_dive",AGORA_FEED:"agora_feed",AGORA_FUNDRAISERS_FEED:"agora_fundraisers_feed",AGORA_NEIGHBORHOOD_HELP_MY_POSTS_FEED:"agora_neighborhood_help_my_posts_feed",AGORA_NEIGHRBORHOOD_HELP_FEED:"agora_neighrborhood_help_feed",AGORA_PAGES_FEED:"agora_pages_feed",AGORA_SCHOOL_FEED:"agora_school_feed",AGORA_WEATHER_FEED:"agora_weather_feed",AGORA_YOUTH_HIGH_SCHOOL_DIGEST:"agora_youth_high_school_digest",ALBUM_FEED:"album_feed",APP_FEED:"app_feed",APPENDABLE_PROMPT:"appendable_prompt",ARTICLE_CONTEXT:"article_context",ASSET3D_PHOTO_FULLSCREEN:"asset3d_photo_fullscreen",ATHENS_FEED:"athens_feed",B2C_BOOKMARK:"b2c_bookmark",BIZ_DISCO_FEED:"biz_disco_feed",BLENDED_SEARCH_RESULTS:"blended_search",BREAKING_NEWS_COMPOSER:"breaking_news_composer",BREAKING_NEWS_COMPOSER_REMOVE:"breaking_news_composer_remove",BREAKUP_VIEW_POSTS_FEED:"breakup_view_posts_feed",BRIEF_ACTIVITY_LOG:"brief_activity_log",BUSINESS_FEED:"business_feed",BUY_AND_SELL:"buy_and_sell",CANDIDATE_PACKET_REVIEW:"candidate_packet_review",CENTRA_INVESTIGATION_FEED:"centra_investigation_feed",CM_FEED_VIEW:"cm_feed_view",CM_ORGANIC_CONTENT_PREVIEW_UFI:"cm_organic_content_preview_ufi",COLLEGE_HOMEPAGE:"college_community_homepage",COMET_MEDIA_VIEWER:"comet_media_viewer",COMET_TAHOE:"comet_tahoe",COMMENT_INSIGHTS_FEED:"comment_insights_feed",COMMERCE_BOOKMARK:"commerce_bookmark",COMMUNITY_VIEW:"community_view",COMPOSER_PREVIEW:"composer_preview",COMPOUNDEYE_PII_STRIPPED:"compoundeye_pii_stripped",CONTEXTUAL_PROFILE_FEED:"contextual_profile_feed",CONTINUOUS_CLOSE:"continuous_close",CONVERSATION_NUB:"conversation_nub",CORONAVIRUS_COMMUNITY_HELP_FEED:"coronavirus_community_help_feed",CORONAVIRUS_HUB_FEED:"coronavirus_hub_feed",COVER_FEED:"cover_feed",COVER_IMMERSIVE:"cover_immersive",CREATOR_APP_INSPIRATION_FEED:"inspiration_feed",CRISIS_FEED:"crisis_feed",CROWDSOURCING_CARD:"crowdsourcing_card",CRS_FEED:"crs_feed",CURATED_COLLECTION_PAGE:"curated_collection_page",CUSTOM_FEED_TEST:"custom_feed_test",DISABLE_WARNING_SCREEN_CHECK:"disable_warning_screen_check",DISCOVERY_HUB_CLIMATE_SCIENCE_FEED:"discovery_hub_climate_science_feed",DISCOVERY_HUB_FEED:"discovery_hub_feed",EDIT_HISTORY:"edit_history",END_OF_FEED_UNIT_OVERLAY:"end_of_feed_unit_overlay",EVENT:"event",EVENT_PENDING_QUEUE:"event_pending_queue",EVENT_SCHEDULED_QUEUE:"event_scheduled_queue",EXPLORE_FEED:"explore_feed",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive",FACEBOOK_360:"facebook_360",FAN_SUBMISSION_TOPIC:"fan_submission_topic",FB_SHOPPING_MALL:"fb_shopping_mall",FB_SHORTS_NOTIFICATION:"fb_shorts_notification",FB_SHORTS_PROFILE:"fb_shorts_profile",FB_SHORTS_PROFILE_VIDEO_DEEP_DIVE:"fb_shorts_profile_video_deep_dive",FB_SHORTS_VIDEO_DEEP_DIVE:"fb_shorts_video_deep_dive",FB_STORIES:"fb_stories",FBR:"fbr",FEED_IMMERSIVE:"feed_immersive",FEED_MOBILE:"feed_mobile",FILE_VIEWER:"file_viewer",FOX_FEED:"fox_feed",FOX_PERMALINK:"fox_permalink",FOX_RECOMMENDATIONS_FEED:"fox_recommendation_feed",FUNDRAISER_FOR_STORY_MORE_INFO_PAGE:"fundraiser_for_story_more_info_page",FUNDRAISER_HUB:"fundraiser_hub",FUNDRAISER_PAGE:"fundraiser_page",GAME_HUB_FEED:"game_hub_feed",GAMEROOM_FEED:"gameroom_feed",GAMES_FEED:"games_feed",GAMETIME_HIGHLIGHTS:"gametime_highlights",GAMING_FEED:"gaming_feed",GAMING_NEWS_FEED:"gaming_news_feed",GAMING_STATIC_UNIT:"gaming_static_unit",GAMING_VIDEO_CLIPS_LIBRARY:"gaming_video_clips_library",GAMING_VIDEO_STREAMER_HUB:"gaming_video_streamer_hub",GOV_DIGEST:"gov_digest",GRAMMAR_SEARCH:"grammar_search",GROUP:"group",GROUP_ACTIVITY_LOG:"group_activity_log",GROUP_ADMIN_HOME:"group_admin_home",GROUP_ADMIN_TO_MEMBER_FEEDBACK:"group_admin_to_member_feedback",GROUP_ALERTED_QUEUE:"group_alerted_queue",GROUP_BIO:"group_bio",GROUP_BUY_AND_SELL_DISCUSSION:"group_buy_and_sell_discussion",GROUP_COMMUNITY_HELP_FEED:"group_community_help_feed",GROUP_CONFLICTS:"group_conflicts",GROUP_DRAFT_QUEUE:"group_draft_queue",GROUP_FLAGGED_QUEUE:"group_flagged_queue",GROUP_GRID_ISLAND:"group_grid_island",GROUP_HOISTED:"group_hoisted",GROUP_IMMERSIVE:"group_immersive",GROUP_MALL:"group_mall",GROUP_PENDING_QUEUE:"group_pending_queue",GROUP_PERMALINK:"group_permalink",GROUP_QUALITY:"group_quality",GROUP_REPORT_QUEUE:"group_report_queue",GROUP_SCHEDULED_PENDING_QUEUE:"group_scheduled_pending_queue",GROUP_SCHEDULED_QUEUE:"group_scheduled_queue",GROUP_SERP:"group_serp",GROUP_UNITS:"group_units",GROUP_UNITS_PREVIEW:"group_units_preview",GROUP_VOICE:"group_voice",GROUPS_GSYM_SEE_MORE:"groups_gsym_see_more",GROUPS_LANDING:"groups_landing",GROUPS_MY_POSTS:"groups_my_posts",GROUPS_SAVED_POSTS:"groups_saved_posts",GROUPS_TAB:"groups_tab",GROUPS_VIEWER_CONTENT_DELETED_POSTS:"groups_viewer_content_deleted_posts",GROUPS_VIEWER_CONTENT_PENDING_POSTS:"groups_viewer_content_pending_posts",GROUPS_VIEWER_CONTENT_PUBLISHED_POSTS:"groups_viewer_content_published_posts",GROUPS_VIEWER_CONTENT_SCHEDULED_POSTS:"groups_viewer_content_scheduled_posts",HIGHLIGHTS_UNIT:"highlights_unit",HIRING_METRICS_DASHBOARD:"hiring_metrics_dashboard",HOME_BUBBLE:"home_bubble",HOMEPAGE_STREAM:"homepage_stream",IFR_DEEP_DIVE:"ifr_deep_dive",INSANT_ARTICLE:"instant_article",INTEGRITY_CONTEXT:"integrity_context",JOBS_MULTI_GROUP_BROWSER:"jobs_multi_group_browser",JOBS_NETWORK_TAB:"jobs_network_tab",JOBS_SINGLE_GROUP_BROWSER:"jobs_single_group_browser",JOBS_TAB:"jobs_tab",LINEAR_CHANNEL:"linear_channel",LIVE_COMPOSER_MOBILE:"live_composer_mobile",LIVE_EVENT:"live_event",LIVE_PRODUCER:"live_producer",LIVING_ROOM_REPLAY:"living_room_replay",LOCAL_ALERTS_DIGEST:"local_alerts_digest",LOCAL_COMMUNITY_FEED:"local_community_feed",LOCAL_COMMUNITY_PLACES_FEED:"local_community_places_feed",LOCAL_COMMUNITY_PROFILE:"local_community_profile",LOCAL_COMMUNITY_PROMPTS_FEED:"local_community_prompts_feed",LOCAL_SEARCH_RESULTS_PAGE:"local_search_results_page",LOCAL_SERP:"local_serp",LOCAL_SURFACE:"local_surface",LOGGED_OUT_FEED:"logged_out_feed",LUMOS:"lumos",MARKETPLACE:"marketplace",MARKETPLACE_B2C_REVIEW:"marketplace_b2c_review",MARKETPLACE_B2C_REVIEW_RESPONSE:"marketplace_b2c_review_response",MARKETPLACE_BSG_PROFILE:"marketplace_bsg_profile",MARKETPLACE_LOCAL_SHOP_PAGE_POSTS:"marketplace_local_shop_page_posts",MARKETPLACE_MEGAMALL:"marketplace_megamall",MARKETPLACE_MESSENGER_REPORT_BUYER:"marketplace_messenger_report_buyer",MARKETPLACE_MESSENGER_REPORT_SELLER:"marketplace_messenger_report_seller",MARKETPLACE_PDP:"marketplace_pdp",MARKETPLACE_PDP_SELLER:"marketplace_pdp_seller",MARKETPLACE_PROFILE:"marketplace_profile",MARKETPLACE_PROFILE_BUYER:"marketplace_profile_buyer",MARKETPLACE_PROFILE_SELLER:"marketplace_profile_seller",MARKETPLACE_PROFILE_SELLER_CROSS_POST:"marketplace_profile_seller_cross_post",MARKETPLACE_RATING_CONFIRMATION:"marketplace_rating_confirmation",MARKETPLACE_RATING_CONFIRMATION_BUYER:"marketplace_rating_confirmation_buyer",MARKETPLACE_RATING_CONFIRMATION_SELLER:"marketplace_rating_confirmation_seller",MARKETPLACE_RATING_FLOW:"marketplace_rating_flow",MARKETPLACE_RATING_FLOW_BUYER:"marketplace_rating_flow_buyer",MARKETPLACE_RATING_FLOW_SELLER:"marketplace_rating_flow_seller",MARKETPLACE_SHOP_PDP:"marketplace_shop_pdp",MARKETPLACE_SHOP_PDP_SELLER:"marketplace_shop_pdp_seller",MARKETPLACE_SOCIAL_DISCUSSIONS_FEED:"marketplace_social_discussions_feed",MARKETPLACE_THREAD:"marketplace_thread",MARKETPLACE_THREAD_BUYER:"marketplace_thread_buyer",MARKETPLACE_THREAD_SELLER:"marketplace_thread_seller",MARKETPLACE_VEHICLE_ENTITY_PAGE_QUESTION_AND_ANSWER:"marketplace_vehicle_entity_page_question_and_answer",MARKETPLACE_VEHICLE_ENTITY_PAGE_REVIEW:"marketplace_vehicle_entity_page_review",MARKETPLACE_YOU_FEED:"marketplace_you_feed",MEDIA_MANAGER_HOME:"media_manager_home",MEDIA_MANAGER_POST_INSIGHTS:"media_manager_post_insights",MEDIA_MANAGER_POSTS_TIMELINE:"media_manager_posts_timeline",MESSAGE_THREAD:"message_thread",MESSENGER_AD:"messenger_ad",MINI_FEED:"mini_feed",MISINFORMATION_FACT_CHECKER_APP:"misinformation_fact_checker_app",MONTHLY_ACTIVITY_DIGEST_FEED:"monthly_activity_digest_feed",MSITE_EMBEDDED_VIDEO_SPLASH:"msite_embedded_video_splash",MUSIC_HOME:"music_home",NATIVE_TEMPLATES:"native_templates",NBA_HUB_FEED:"nba_hub_feed",NEWS_FEED_DEEP_DIVE:"news_feed_deep_dive",NEWS_OCT_DRAFT_POST_PREVIEW:"news_oct_draft_post_preview",NEWS_STORYLINE_FEED:"news_storyline_feed",NEWS_STORYLINE_NEWSFEED_QP:"news_storyline_newsfeed_qp",NEWS_TAB:"news_tab",NEWSSTAND:"newsstand",NEWSSTAND_PERMALINK:"newsstand_permalink",NEXT_TOOL:"next_tool",NOTIF_CLOSE_FRIEND_FEED:"notif_close_friend_feed",OCULUS_HUB_FEED:"oculus_hub_feed",OFFERS_TAB:"offers_tab",OPENGRAPH_DIALOG:"opengraph_dialog",ORGANIC_CONTENT_PREVIEW:"organic_content_preview",ORION_VIDEO_PLAYER:"orion_video_player",PAGE_INBOX:"page_inbox",PAGE_INBOX_POST_VIEW:"page_inbox_post_view",PAGE_LIVE_VIDEO_MODULE:"page_live_video_module",PAGE_QUALITY:"page_quality",PAGE_RECOMMENDATIONS_TAB_FEED:"page_recommendation_tab_feed",PAGE_RECOMMENDATIONS_TOOL:"page_recommendations_tool",PAGE_SURFACE_RECOMMENDATIONS:"page_surface_recommendations",PAGES_COMMUNITY_TAB:"pages_community_tab",PAGES_FEED:"pages_feed",PAGES_LIVE_TAB:"pages_live_tab",PARTNER_ASSESSMENT:"partner_assessment",PAYCHECK_PROTECTION_PROGRAM:"paycheck_protection_program",PERMALINK:"permalink",PERMALINK_CHAINING:"permalink_chaining",PERMALINK_IMMERSIVE:"permalink_immersive",PFTF_DISCOVERY_HUB:"pftf_discovery_hub",PHOTO_REVIEW:"photo_review",PLACE_FEED:"place_feed",POLITICAL_POST_FEED:"political_post_feed",PRESENCE_FEED:"presence_feed",PROCUREMENT_REQUEST:"procurement_request",PRODUCT_DETAILS:"product_details",PRODUCT_QUESTION:"product_question",PROFESSIONAL_BUYER_PROGRAM:"professional_buyer_program",PROFILE_FEATURED:"profile_featured",PROFILE_FRAME_DISCOVERY:"profile_frame_discovery",PROFILE_PLUS_TIMELINE:"profile_plus_timeline",PROJECT_NEO:"project_neo",PUBLIC_CONVERSATION_PROFILE:"public_conversation_profile",PYI:"pyi",RACIAL_JUSTICE_HUB_FEED:"racial_justice_hub_feed",RAINBOW_EXPLORE:"rainbow_explore",REACTION_OVERLAY:"reaction_overlay",RECOMMENDATIONS_DASHBOARD:"recommendations_dashboard",RESHARES_DIALOG:"reshares_dialog",REVIEWS_FEED:"reviews_feed",SAVE_DISCOVERY_COLLECTIONS_EMBEDDED_VIEW:"save_discovery_collections_embedded_view",SAVE_DISCOVERY_IN_COLLECTIONS:"save_discovery_in_collections",SAVE_DISCOVERY_INTEREST_BASED:"save_discovery_interest_based",SAVE_DISCOVERY_PIVOTS:"save_discovery_pivot",SAVE_DISCOVERY_TAB:"save_discovery_tab",SEARCH:"search",SEARCH_RESULTS_PAGE:"search_results_page",SEARCH_TOPIC_DEEP_DIVE:"search_topic_deep_dive",SEARCH_TOPIC_DEEP_DIVE_GENERAL_GROUP_SCOPE:"search_topic_deep_dive_general_group_scope",SEARCH_TOPIC_DEEP_DIVE_SPECIFIC_GROUP_SCOPE:"search_topic_deep_dive_specific_group_scope",SEARCH_TOPIC_DEEP_DIVE_WATCH_SCOPE:"search_topic_deep_dive_watch_scope",SEARCH_VOYAGER:"search_voyager",SEEN_CONTENT:"seen_content",SERVICES_LOCAL_BUSINESS_DISCOVERY:"services_local_business_discovery",SHARING_SPACES:"sharing_spaces",SHOP_TAB_MAIN_FEED:"shop_tab_main_feed",SHORT_FORM_VIDEO_CHAINING:"short_form_video_chaining",SIDE_FEED:"side_feed",SIGNAL_APP:"signal_app",SNAPTU_FEED:"snaptu_feed",SNAPTU_GROUPS_FEED:"snaptu_groups_feed",SNAPTU_TIMELINE:"snaptu_timeline",SNAPTU_VIDEO_HOME:"snaptu_video_home",SOCIAL_BALLOT:"social_ballot",SONG_OBJECT:"song_object",SRT:"srt",SRT_PROCUREMENT:"srt_procurement",STONEHENGE_CONSUMPTION:"stonehenge_consumption",SUMMARY:"summary",SUPPLIER_CONNECT:"supplier_connect",SUPPORT_INBOX:"support_inbox",SURVEY_GALLERY:"survey_gallery",THROWBACK_COMPOSER:"throwback_composer",TIMELINE:"timeline",TIMELINE_CONTEXT:"timeline_context",TIMELINE_ENTSTREAM:"timeline_entstream",TIMELINE_IMMERSIVE:"timeline_immersive",TOP_GROUP_POSTS_TOOL:"top_group_posts_tool",TOP_LIVE_VIDEOS:"top_live_videos",TOPIC_ENTITY_PAGE:"topic_entity_page",TOPIC_FEED:"topic_feed",TOWN_HALL:"town_hall",TRENDING_HOVERCARD:"trending_hovercard",TRENDING_ISSUES:"trending_issues",UNSPECIFIED:"unspecified",UX_RESEARCH_FEEDS_TOOL:"ux_research_feeds_tool",VIDEO_CHANNEL:"video_channel",VIDEO_HOME:"video_home",VIDEO_HOME_CHANNEL:"video_home_channel",VIDEO_HOME_FEED:"video_home_feed",VIDEO_INSTREAM:"video_instream",WOODHENGE_EXCLUSIVE_FEED:"woodhenge_exclusive_feed",WORK_CHAT_STORY_PREVIEW:"work_chat_story_preview",WORKPLACE_ADMIN_REPORTED_CONTENT:"workplace_admin_reported_content",WORKPLACE_APPROVALS:"workplace_approvals",WORKPLACE_COMMUNITY_NOTES:"workplace_community_notes",WORKPLACE_DISCOVERY_FEED:"workplace_discovery_feed",WORKPLACE_DRAFTED_FOR_OTHERS:"workplace_drafted_for_others",WORKPLACE_DRAFTED_FOR_YOU:"workplace_drafted_for_you",WORKPLACE_EMAIL_CAMPAIGN:"workplace_email_campaign",WORKPLACE_ESM:"workplace_esm",WORKPLACE_FOLLOWEES_FEED:"workplace_followees_feed",WORKPLACE_HELPDESK:"workplace_helpdesk",WORKPLACE_HOVERCARD:"workplace_hovercard",WORKPLACE_KNOWLEDGE:"workplace_knowledge",WORKPLACE_LEARNING_UNIT:"workplace_learning_unit",WORKPLACE_NEWSFEED_PROMOTED_POST:"workplace_newsfeed_promoted_post",WORKPLACE_PLUGIN:"workplace_plugin",WORKPLACE_SHORTCUTS_FEED:"workplace_shortcuts_feed",WORKPLACE_TEAM_FEED:"workplace_team_feed",WORKSTREAM_STEP_FEED:"workstream_step_feed"});e.exports=a}),null);