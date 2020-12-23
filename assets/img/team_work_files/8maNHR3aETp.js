if (self.CavalryLogger) { CavalryLogger.start_js(["Qfdy9"]); }

__d("MWChatMessageId.bs",["bs_caml_int64","bs_caml_format"],(function(a,b,c,d,e,f){"use strict";function a(a){if(typeof a==="number"||!a.TAG)return;else return a._0.messageId}function c(a){if(typeof a==="number"||!a.TAG)return;else return a._0.threadId}function d(a,c,d){return{TAG:1,_0:{threadId:b("bs_caml_format").caml_int64_of_string(a),messageId:c,timestamp:b("bs_caml_format").caml_int64_of_string(d)}}}function e(a){return{TAG:1,_0:{threadId:b("bs_caml_int64").zero,messageId:a,timestamp:b("bs_caml_int64").zero}}}var g={TAG:1,_0:{threadId:b("bs_caml_int64").zero,messageId:"",timestamp:b("bs_caml_int64").zero}};f.getMessageId=a;f.getThreadId=c;f.makeSent=d;f.emptyForExamples=g;f.emptyForExamplesWithId=e}),null);
__d("MWChatVideoPlayerControls.react",["React","VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerFullscreenControl.react","VideoPlayerHooks","VideoPlayerPlaybackControl.react","VideoPlayerPlaybackTimer.react","VideoPlayerScrubber.react","VideoPlayerVolumeControl.react","stylex","useVideoPlayerBigPlayButtonOverlay","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function h(a){return g.jsx("span",{className:"fi2e5rcv jk2qo03r",children:a.children})}function a(a){var c=b("useVideoPlayerDefaultControlsVisibility")(),d=c.isControlsVisible;c=c.onUserInteraction;var e=b("VideoPlayerHooks").usePaused();e=b("useVideoPlayerBigPlayButtonOverlay")({forceVisible:e});var f=e.bigPlayButtonElement;e=e.bigPlayButtonIsVisible;var i=b("VideoPlayerHooks").useIsFullscreen();d=d&&!e;e=g.jsx(b("VideoPlayerControlsContainerOverlay.react"),{isVisible:d,children:i?g.jsxs(g.Fragment,{children:[g.jsxs(b("VideoPlayerControlsGroups.react").Contracted,{children:[g.jsx(b("VideoPlayerPlaybackControl.react"),{}),g.jsx(b("VideoPlayerPlaybackTimer.react"),{})]}),g.jsx(b("VideoPlayerControlsGroups.react").Expanded,{children:g.jsx(b("VideoPlayerScrubber.react"),{onUserInteraction:c})}),g.jsxs(b("VideoPlayerControlsGroups.react").Contracted,{children:[g.jsx(b("VideoPlayerFullscreenControl.react"),{onUserInteraction:c}),g.jsx(b("VideoPlayerVolumeControl.react"),{onUserInteraction:c})]})]}):g.jsxs(g.Fragment,{children:[g.jsx(b("VideoPlayerControlsGroups.react").Contracted,{children:g.jsx(h,{children:g.jsx(b("VideoPlayerPlaybackControl.react"),{})})}),g.jsx(b("VideoPlayerControlsGroups.react").Expanded,{children:g.jsx(b("VideoPlayerScrubber.react"),{onUserInteraction:c})}),g.jsxs(b("VideoPlayerControlsGroups.react").Contracted,{children:[a.hideExpandButton?null:g.jsx(h,{children:g.jsx(b("VideoPlayerFullscreenControl.react"),{onUserInteraction:c})}),g.jsx(h,{children:g.jsx(b("VideoPlayerVolumeControl.react"),{onUserInteraction:c})})]})]})});return g.jsxs(g.Fragment,{children:[f,e]})}}),null);
__d("VideoPlayerX.react",["React","VideoPlayerRetryableErrorBoundary.react","VideoPlayerXImpl.react","defaultErrorBoundaryFallback"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;c=c===void 0?!1:c;var d=a.errorBoundaryFallback;a=babelHelpers.objectWithoutPropertiesLoose(a,["doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn","errorBoundaryFallback"]);a=g.jsx(b("VideoPlayerXImpl.react"),babelHelpers["extends"]({VideoPlayerShakaPerformanceLoggerClass:null},a));return c?a:g.jsx(b("VideoPlayerRetryableErrorBoundary.react"),{description:"VideoPlayerX",fallback:(c=d)!=null?c:b("defaultErrorBoundaryFallback"),children:a})}}),null);
__d("MWChatVideoPlayer.react",["GraphQLVideoAutoplayGatingResult","MWChatVideoAutoplaySettingContext","MWChatVideoPlayerControls.react","React","VideoPlayerDefaultControls.react","VideoPlayerProgressiveImplementationData","VideoPlayerProgressiveImplementationV2.react","VideoPlayerSurface.react","VideoPlayerX.react","getVideoPlayerAutoplayProps"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=function(a,c){switch(a){case"mwchat":return g.jsx(b("MWChatVideoPlayerControls.react"),{hideExpandButton:c===!0});case"default":return g.jsx(b("VideoPlayerDefaultControls.react"),{});case"none":return null;default:return null}};function a(a){var c=a.controls,d=a.fbid,e=a.hdSrc,f=a.hideExpandButton,i=a.initialForceHD,j=a.originalHeight,k=a.originalWidth;a=a.sdSrc;i=b("VideoPlayerProgressiveImplementationData").makeProgressiveImplementationData({hdSrc:e,hdSrcPreferred:(e=i)!=null?e:!1,sdSrc:a});e=b("MWChatVideoAutoplaySettingContext").useMWChatVideoAutoplaySetting();if(i==null)return null;a=[{Component:b("VideoPlayerProgressiveImplementationV2.react"),data:i,typename:"VideoPlayerProgressiveImplementation"}];i=b("getVideoPlayerAutoplayProps")(b("GraphQLVideoAutoplayGatingResult").makeGraphQLVideoAutoplayGatingResult("unknown",e,!0),"respect_user_settings",null);return g.createElement(b("VideoPlayerX.react"),babelHelpers["extends"]({},i,{implementations:a,key:d,loopCount:-1,originalHeight:j,originalWidth:k,playerOriginOverride:"messaging",portalingEnabled:!1,subOrigin:"messenger_thread",videoFBID:d}),g.jsx(b("VideoPlayerSurface.react"),{children:h(c,f)}))}}),null);
__d("URLScraper",["ArbiterMixin","DataStore","Event","URLMatcher","mixin"],(function(a,b,c,d,e,f){var g="scraperLastPermissiveMatch";a=function(a){babelHelpers.inheritsLoose(c,a);function c(b,c){var d;d=a.call(this)||this;d.input=b;d.enable();d.getValueFn=c;return d}var d=c.prototype;d.reset=function(){b("DataStore").set(this.input,g,null)};d.enable=function(){if(this.events)return;var a=function(a){window.setTimeout(this.check.bind(this,a),30)};this.events=b("Event").listen(this.input,{paste:a.bind(this,!1),keydown:a.bind(this,!0)})};d.disable=function(){if(!this.events)return;for(var a in this.events)this.events[a].remove();this.events=null};d.check=function(a){var d=this.getValueFn?this.getValueFn():this.input.value;if(a&&c.trigger(d))return;a=c.match(d);d=b("URLMatcher").permissiveMatch(d);d&&d!=b("DataStore").get(this.input,g)&&(b("DataStore").set(this.input,g,d),this.inform("match",{url:a||d,alt_url:d}))};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a;Object.assign(a,b("URLMatcher"))}),null);