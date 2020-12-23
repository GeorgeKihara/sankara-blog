if (self.CavalryLogger) { CavalryLogger.start_js(["YWvz3"]); }

__d("CometMarketplaceBasicFeedCard_feedItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"amount_with_offset",storageKey:null},c=[a];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometMarketplaceBasicFeedCard_feedItem",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"creation_time",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"formatted_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Location",kind:"LinkedField",name:"location",plural:!1,selections:[{alias:null,args:null,concreteType:"ReverseGeocodeData",kind:"LinkedField",name:"reverse_geocode",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"city",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"city_page",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"display_name",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_pending",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_sold",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"min_listing_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_amount",storageKey:null},b],storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"max_listing_price",plural:!1,selections:[b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"marketplace_listing_category_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"marketplace_listing_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"custom_title",storageKey:null},{alias:null,args:null,concreteType:"MarketplaceCustomSubtitleWithRenderingFlags",kind:"LinkedField",name:"custom_sub_titles_with_rendering_flags",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"subtitle",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"origin_group",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:256}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"pre_recorded_videos",plural:!0,selections:c,storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"creation_time_override",storageKey:null}],type:"MarketplaceListingWithEnhancedUpdateTime",abstractKey:"__isMarketplaceListingWithEnhancedUpdateTime"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"parent_listing",plural:!1,selections:c,storageKey:null}],type:"MarketplaceListingWithChildListings",abstractKey:"__isMarketplaceListingWithChildListings"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"pet_breed",storageKey:null}],type:"AdoptablePet",abstractKey:null},{args:null,kind:"FragmentSpread",name:"useListingDeliveryType"}],type:"MarketplaceListingRenderable",abstractKey:"__isMarketplaceListingRenderable"}}();e.exports=a}),null);
__d("GroupsCometSaleItemImageFallback.react",["ix","CometImage.react","React","TetraIcon.react","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j={icon:{position:"pmk7jnqg"},imageFallback:{alignItems:"bp9cbjyn",backgroundColor:"g6srhlxm",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",display:"j83agx80",justifyContent:"taijpn5t",position:"l9j0dhe7"},squareImage:{height:"idiwt2bm",width:"k4urcfbm"}};function a(a){return i.jsxs("div",{className:(h||(h=b("stylex")))(j.imageFallback),children:[i.jsx(b("CometImage.react"),{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",xstyle:j.squareImage}),i.jsx("div",{className:h(j.icon),children:i.jsx(b("TetraIcon.react"),{color:"secondary",icon:b("fbicon")._(g("936310"),24),size:24})})]})}}),null);
__d("CometMarketplaceFeedCardMetaText.react",["React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.lines!=null?a.lines:1;return g.jsx("div",{className:"a8nywdso e5nlhep0 rz4wbd8a ecm0bbzt",children:g.jsx(b("TetraText.react"),{numberOfLines:c,type:"meta3",children:a.value})})}c=g.memo(a);e.exports=c}),null);
__d("CometTime",["unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";f.fromSeconds=a;f.toSeconds=c;function a(a){return new Date(a*1e3)}function c(a){var c=a.getTime();if(Number.isNaN(c))throw b("unrecoverableViolation")("Tried to get time, but got NaN: "+a.toString(),"comet_ui");return Math.floor(c/1e3)}}),null);
__d("MarketplaceComposerCategoryUtils",["fbt","gkx"],(function(a,b,c,d,e,f,g){"use strict";f.buildOptions=a;f.buildVirtualTaxonomyOptions=c;d={HOME_SALES:"821056594720130",RENTAL:"1468271819871448",VEHICLE:"807311116002614"};f.MARKETPLACE_CATEGORIES=d;var h=[d.RENTAL,d.HOME_SALES],i=[d.VEHICLE];function a(a){var b=[],c=[];a.forEach(function(a){var d=a.children,e=a.id;a=a.name;if(!h.includes(e)){var f=b;i.includes(e)&&(f=c);d.length>0?f.push({clickable:!1,icon:!0,label:a,subtitle:null,value:e}):f.push({clickable:!0,icon:!0,label:a,subtitle:null,value:e});d.forEach(function(a){var b=a.id,c=a.name;a=a.subtitle;if(b==null||c==null)return;f.push({clickable:!0,icon:!1,label:c,subtitle:a,value:b})})}});return b.concat(c)}function c(a,c){c===void 0&&(c=[]);var d=[];a=a;var e;for(var f=0;f<c.length;f++)f===c.length-1&&(e=a[c[f]]),a=a[c[f]].subCategories||{};f=!1;for(var h in a){var i=a[h],j=i.id,k=i.name,l=i.path,m=i.subCategories;i=i.subtitle;if(j!=null&&k!=null){m=m==null||Object.keys(m).length===0;m||(f=!0);d.push({clickable:!0,icon:!1,label:k,leaf:m,path:l,subtitle:i,value:j})}}m=b("gkx")("1820220");if(m===!0&&e!=null&&(c.length>=2||!f)){l=e;var j=l.id,k=l.name;i=l.subtitle;if(j!=null&&k!=null){a={clickable:!0,icon:!1,label:g._("Other {category name}",[g._param("category name",k)]),leaf:!0,path:c.slice(0,-1),subtitle:i,value:j};d.push(a)}}return d}}),null);
__d("useHasLocalPickupFilter",["CometRouteParams"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){var a=b("CometRouteParams").useRouteParams();a=a.deliveryMethod!=null?String(a.deliveryMethod):null;return a==="local_pick_up"}}),null);
__d("useLoggingContextMetadata",["CometMarketplaceComponentLoggingContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){return g.useContext(b("CometMarketplaceComponentLoggingContext")).metadata}}),null);
__d("CometMarketplaceBasicFeedCard.react",["ix","fbt","CometMarketplaceFeedCard.react","CometMarketplaceFeedCardHoverContextProvider.react","CometMarketplaceFeedCardMetaText.react","CometMarketplaceFeedCardPrice.react","CometMarketplaceFeedCardTitle.react","CometMarketplaceMultipleItemUtils","CometMarketplaceRealEstateUtils","CometRelativeTimestamp.react","CometRelay","CometTime","GroupsCometSaleItemImageFallback.react","MarketplaceComposerCategoryUtils","MarketplaceMediaQueryWrapper.hybrid","React","TetraIcon.react","TetraText.react","fbicon","isStringNullOrEmpty","qex","stylex","useCurrentMarketplaceSurface","useHasLocalPickupFilter","useListingDeliveryType.hybrid","useLoggingContextMetadata","useProductDetailsRouteUrlBuilder","CometMarketplaceBasicFeedCard_feedItem.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React");function a(a){var c,d,e,f=a.showMetaText;f=f===void 0?!0:f;a=babelHelpers.objectWithoutPropertiesLoose(a,["showMetaText"]);var k=b("useProductDetailsRouteUrlBuilder")(),l=b("useLoggingContextMetadata")(),m=b("useCurrentMarketplaceSurface")();m=m.surface;var n=b("CometRelay").useFragment(i!==void 0?i:i=b("CometMarketplaceBasicFeedCard_feedItem.graphql"),a.feedItem),o=b("useListingDeliveryType.hybrid")(n),p=n==null?void 0:n.id,q=b("useHasLocalPickupFilter")();if(n==null||p==null)return null;var r=n.is_hidden===!0,s=n.origin_group,t=n==null?void 0:n.marketplace_listing_category_id,u=t===b("MarketplaceComposerCategoryUtils").MARKETPLACE_CATEGORIES.VEHICLE,v=t===String(750989852111054),w=u?n.custom_title:n.marketplace_listing_title;c=(c=n.formatted_price)==null?void 0:c.text;d=(d=n.location)==null?void 0:d.reverse_geocode;s=s==null?void 0:s.name;var x=!1,y="";e=n==null?void 0:(e=n.min_listing_price)==null?void 0:e.formatted_amount;if(!b("isStringNullOrEmpty")(e)){var z;x=parseInt(n==null?void 0:(z=n.min_listing_price)==null?void 0:z.amount_with_offset,10)<parseInt(n==null?void 0:(z=n.max_listing_price)==null?void 0:z.amount_with_offset,10);y=b("CometMarketplaceRealEstateUtils").removeUnnecessaryDecimals(e)+"+"}z=n.pre_recorded_videos.length>0;e=null;v?e=j.jsx("span",{className:"j83agx80",children:j.jsx(b("MarketplaceMediaQueryWrapper.hybrid"),{children:function(a){return j.jsx(b("TetraText.react"),{type:a==="desktop"?"headlineEmphasized3":"headline4",children:w})}})}):e=j.jsxs("span",{className:"j83agx80",children:[j.jsx(b("CometMarketplaceFeedCardPrice.react"),{categoryID:t,hideSellerOrientedMetadata:f===!1,isLive:n.is_live,isPending:n.is_pending,isSold:n.is_sold,isViewerSeller:n.is_viewer_seller,price:x?y:c}),z?j.jsx("span",{className:"b3onmgus e5nlhep0 ph5uu5jm ecm0bbzt h676nmdw j83agx80 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj tdjehn4e",children:j.jsx(b("TetraIcon.react"),{color:"primary",icon:b("fbicon")._(g("493172"),12)})}):null]});t=null;v?n.pet_breed!=null&&n.pet_breed!==""&&(t=j.jsx("span",{"aria-hidden":"true",children:j.jsx(b("CometMarketplaceFeedCardTitle.react"),{title:n.pet_breed})})):t=j.jsx("span",{"aria-hidden":"true",children:j.jsx(b("CometMarketplaceFeedCardTitle.react"),{title:w})});x=null;y=null;if(!q&&(o==="shipping_and_local"||o==="shipping_only"))x=h._("Ships to you");else{if(f)if(s!=null)y=s;else if(!b("isStringNullOrEmpty")(d==null?void 0:d.city)&&!b("isStringNullOrEmpty")(d==null?void 0:d.state))y=h._("{city}, {state}",[h._param("city",d==null?void 0:d.city),h._param("state",d==null?void 0:d.state)]);else{y=d==null?void 0:(c=d.city_page)==null?void 0:c.display_name}o==="shipping_and_local"&&!q?x=h._("Shipping & local pickup"):o==="shipping_only"&&!q&&(x=h._("Ships to you"))}s=(v=(z=n.parent_listing)==null?void 0:z.id)!=null?v:p;d=y!=null?j.jsx("span",{"aria-hidden":"true",children:j.jsx(b("CometMarketplaceFeedCardMetaText.react"),{value:y})}):null;c=u&&f?n.custom_sub_titles_with_rendering_flags.map(function(a,c){return a.subtitle!=null?j.jsx(b("CometMarketplaceFeedCardMetaText.react"),{value:a.subtitle},"subtitle"+c):null}).filter(Boolean):null;o=b("CometMarketplaceMultipleItemUtils").getChildrenOrSelf(n).map(function(a){return(a=a.primary_listing_photo)==null?void 0:(a=a.image)==null?void 0:a.uri});q=h._("{listing_title} in {listing_group}",[h._param("listing_title",w),h._param("listing_group",y)]);z=x!=null?j.jsx(b("CometMarketplaceFeedCardMetaText.react"),{value:x}):null;v=b("qex")._("1753141")===!0;u=null;if(v){f=b("qex")._("1773305")===!0;y=f&&(n==null?void 0:n.creation_time_override)!=null?n==null?void 0:n.creation_time_override:n==null?void 0:n.creation_time;x=y!=null?h._("Listed {relative timestamp}",[h._param("relative timestamp",j.jsx(b("CometRelativeTimestamp.react"),{date:b("CometTime").fromSeconds(y)}))]):null;u=x!=null?j.jsx(b("CometMarketplaceFeedCardMetaText.react"),{value:x}):null}return j.jsx(b("CometMarketplaceFeedCardHoverContextProvider.react"),{children:j.jsxs(b("CometMarketplaceFeedCard.react"),{href:k(s,String(m),String(l==null?void 0:l.referralCode)),imageAlt:q,imageFallback:j.jsx(b("GroupsCometSaleItemImageFallback.react"),{}),images:o.filter(Boolean),isHidden:r,listingId:s,openLinkInNewTab:a.openLinkInNewTab,trackingData:l==null?void 0:l.tracking,children:[e,t,d,u,c,z]},p)})}}),null);