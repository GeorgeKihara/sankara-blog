if (self.CavalryLogger) { CavalryLogger.start_js(["X4tXU"]); }

__d("MWChatBusinessCTAAdsSenderMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"action_link",variableName:"input"}],kind:"ScalarField",name:"messenger_business_ads_sender",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatBusinessCTAAdsSenderMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatBusinessCTAAdsSenderMutation",selections:b},params:{id:"4111572015534682",metadata:{},name:"MWChatBusinessCTAAdsSenderMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("MWChatBusinessCTAAdsSenderMutation",["CometRelay","MWChatBusinessCTAAdsSenderMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.sendAds=a;var g,h=g!==void 0?g:g=b("MWChatBusinessCTAAdsSenderMutation.graphql");function a(a,c){b("CometRelay").commitMutation(a,{mutation:h,onCompleted:function(){},onError:function(a){},variables:{input:c}})}}),null);
__d("XPaymentsVerificationFlowDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/payments/verification/dialog/",{payment_type:{type:"Enum",defaultValue:"nmor_donation_p4p",enumType:1},verification_product_type:{type:"Enum",defaultValue:"MANAGED_STRIPE",enumType:1},notif_id:{type:"String"},notif_t:{type:"String"},ref:{type:"String"},__asyncDialog:{type:"Int"}})}),null);