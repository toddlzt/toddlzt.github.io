webpackJsonp([1],{"/XqL":function(e,t){},"0Er0":function(e,t,a){e.exports=a.p+"static/img/logo.fde08b5.png"},CWw3:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},i,!1,function(e){a("hvp2")},null,null).exports,r=a("/ocq"),o=(a("pFYg"),a("fZjL")),l=a.n(o);function c(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(e){return null===e||(void 0===e||("[object Array]"===Object.prototype.toString.call(e)?0===e.length:"[object Object]"===Object.prototype.toString.call(e)?0===l()(e).length:"string"==typeof e&&""===e.trim()))}var u=a("//Fk"),h=a.n(u),p=a("mtWM"),m=a("Tqaz"),f=a("mw3O"),v=a.n(f),b=(a("Mjk9"),a("Dd8w")),w=a.n(b),y=a("Xxa5"),g=a.n(y),C=a("exGp"),x=a.n(C),_=a("+6Bu"),k=a.n(_),S=a("CkTr"),A=function(){return window.history.replaceState({},document.title,window.location.pathname)},T=void 0,E={install:function(e,t){e.prototype.$auth=function(e){var t=e.onRedirectCallback,a=void 0===t?A:t,i=e.redirectUri,s=void 0===i?window.location.origin:i,r=k()(e,["onRedirectCallback","redirectUri"]);return T||(T=new n.default({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e,t){var a=this;return x()(g.a.mark(function n(){return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a.popupOpen=!0,n.prev=1,n.next=4,a.auth0Client.loginWithPopup(e,t);case 4:return n.next=6,a.auth0Client.getUser();case 6:return a.user=n.sent,n.next=9,a.auth0Client.isAuthenticated();case 9:a.isAuthenticated=n.sent,a.error=null,n.next=19;break;case 13:n.prev=13,n.t0=n.catch(1),a.error=n.t0,console.error(n.t0),a.user={},a.isAuthenticated=!1;case 19:return n.prev=19,a.popupOpen=!1,n.finish(19);case 22:case"end":return n.stop()}},n,a,[[1,13,19,22]])}))()},handleRedirectCallback:function(){var e=this;return x()(g.a.mark(function t(){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,e.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.error=t.t0;case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}},t,e,[[1,11,14,17]])}))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return x()(g.a.mark(function t(){var n,i;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.a)(w()({},r,{authorizationParams:w()({redirect_uri:s},r.authorizationParams)}));case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:n=t.sent,i=n.appState,e.error=null,a(i);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),e.error=t.t0;case 16:return t.prev=16,t.next=19,e.auth0Client.isAuthenticated();case 19:return e.isAuthenticated=t.sent,t.next=22,e.auth0Client.getUser();case 22:return e.user=t.sent,e.loading=!1,t.finish(16);case 25:case"end":return t.stop()}},t,e,[[3,13,16,25]])}))()}}))}(t)}};p.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",p.a.defaults.headers.post["api-key"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";-1!=window.location.href.indexOf("index.html")?window.location.href.split("index.html"):window.location.href.split("#");window.BASE_URL="https://api.proofy-ai.com:8443/";var B=p.a.create({baseURL:window.BASE_URL,timeout:6e5});B.interceptors.request.use(function(e){if(e.headers["Content-Type"]&&-1!==e.headers["Content-Type"].indexOf("application/json"))void 0!==e.data&&null!==e.data||(e.data={});else{var t=e.headers["Content-Type"]&&-1!==e.headers["Content-Type"].indexOf("multipart/form-data");e.data=t?e.data:v.a.stringify(e.data)}return e},function(e){return h.a.reject(e)}),B.interceptors.response.use(function(e){return e.data},function(e){if(e.response){var t=e.response;500==t.status||t.data&&t.data.msg}return h.a.reject(e)});var I=B;var O=a("Y81h"),F=a.n(O),M=(a("UVIz"),{name:"Modal",props:{type:{type:String,default:"info"},title:{type:String,default:""},content:{type:String,default:""},show:{type:Boolean,default:!1},centered:{type:Boolean,default:!0},footer:{type:Boolean,default:!1},hideCancel:{type:Boolean,default:!1},okText:{type:String,default:"Ok"},cancelText:{type:String,default:"Cancel"}},data:function(){return{vShow:!1,hideFooter:!0}},computed:{},watch:{show:{handler:function(e,t){this.vShow=e}}},methods:{onChange:function(e){this.$emit("onChange",e)},onClose:function(){this.$emit("onClose")},onOk:function(){this.$emit("onOk")}}}),U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{centered:e.centered,"hide-footer":e.hideFooter},on:{change:e.onChange,hide:e.onClose,close:e.onClose},scopedSlots:e._u([{key:"modal-header",fn:function(t){var n=t.close;return[a("div",{staticClass:"header d-flex justify-content-between w-100",class:e.type},[a("h5",{staticClass:"header-title"},[e._v(e._s(e.title))]),e._v(" "),a("i",{staticClass:"bi bi-x-circle-fill header-icon",on:{click:n}})])]}}]),model:{value:e.vShow,callback:function(t){e.vShow=t},expression:"vShow"}},[e._v(" "),e._t("content",[a("p",{staticClass:"my-4"},[e._v(e._s(e.content))]),e._v(" "),e.footer?[e._t("footer",[a("div",{staticClass:"footer d-flex justify-content-end flex-wrap pt-4"},[e.hideCancel?e._e():a("b-button",{staticClass:"btn",attrs:{pill:"",variant:"secondary"},on:{click:e.onClose}},[e._v("\n                        "+e._s(e.cancelText)+"\n                    ")]),e._v(" "),a("b-button",{staticClass:"btn ml-2",attrs:{pill:"",variant:"primary"},on:{click:e.onOk}},[e._v(e._s(e.okText))])],1)])]:e._e()])],2)},staticRenderFns:[]};var R=a("VU/8")(M,U,!1,function(e){a("CWw3")},"data-v-0c37b9e3",null).exports,$={name:"Account",components:{Modal:R},props:{show:{type:Boolean,default:!1}},data:function(){return{vShow:!1,title:"My Account",loading:{upgrade:!1,cancel:!1},disabled:{upgrade:!1},showCancelTip:!1}},computed:{userId:function(){return this.$auth.user.sub&&this.$auth.user.sub.replace("auth0|","auth0_")||""}},watch:{show:{handler:function(e,t){this.vShow=e}}},mounted:function(){},methods:{handleModalClose:function(){this.$emit("onClose")},handleLogout:function(){this.$auth.logout({logoutParams:{returnTo:window.location.origin}})},handleUpgrade:function(){var e=this;if(!this.loading.upgrade){this.loading.upgrade=!0;var t,a={userId:this.userId};(t=a,I({url:"createCheckoutSession",method:"post",data:t})).then(function(e){window.location.href=e}).catch(function(t){e.$error(t.response.data.error),e.loading.upgrade=!1})}},beforeCancelMembership:function(){this.loading.cancel||(this.showCancelTip=!0)},handleCancelTipClose:function(){this.showCancelTip=!1},handleCancelMembership:function(){var e=this;this.showCancelTip=!1,this.loading.cancel=!0;var t,a={userId:this.userId};(t=a,I({url:"cancelSubscription",method:"post",data:t})).then(function(t){e.$emit("onClose"),e.$emit("onCancelMembership"),e.loading.cancel=!1}).catch(function(t){e.$error(t.response.data.error),e.loading.cancel=!1})}}},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{attrs:{show:e.vShow,title:e.title},on:{onClose:e.handleModalClose},scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"title-wrap d-flex justify-content-between mb-3"},[a("div",{staticClass:"title-text font-weight-bold"},[e._v("Profile")])]),e._v(" "),a("div",{staticClass:"profile-item mb-4"},[a("div",{staticClass:"profile-item-label text-secondary mb-2"},[e._v("Email")]),e._v(" "),a("div",{staticClass:"profile-item-text text-dark"},[e._v(e._s(e.$auth.user.email))])]),e._v(" "),a("div",{staticClass:"title-wrap d-flex justify-content-between mb-3"},[a("div",{staticClass:"title-text font-weight-bold"},[e._v("Membership")]),e._v(" "),e.$auth.user.isPro?e._e():a("b-link",{staticClass:"text-primary text-underline font-weight-bold",attrs:{disabled:e.disabled.upgrade},on:{click:e.handleUpgrade}},[a("b-spinner",{attrs:{hidden:!e.loading.upgrade,small:""}}),e._v("Upgrade")],1)],1),e._v(" "),a("div",{staticClass:"membership-wrap"},[a("b-badge",{staticClass:"py-3 px-4 membership-wrap-badge",attrs:{pill:"",variant:"info"}},[e._v(e._s(e.$auth.user.isPro?"Pro Member":"Free Member"))]),e._v(" "),e.$auth.user.isPro?a("b-link",{staticClass:"text-danger text-underline font-weight-bold ml-2",on:{click:e.beforeCancelMembership}},[a("b-spinner",{staticClass:"mr-1",attrs:{hidden:!e.loading.cancel,small:""}}),e._v("Cancel Membership")],1):e._e()],1),e._v(" "),a("div",{staticClass:"border-top my-3"}),e._v(" "),a("div",{staticClass:"text-center"},[a("b-button",{staticClass:"px-4",attrs:{pill:"",variant:"outline-danger",size:"lg"},on:{click:e.handleLogout}},[a("b-spinner",{attrs:{hidden:!0,small:""}}),a("i",{staticClass:"bi bi-box-arrow-right mr-2"}),e._v("Logout")],1)],1),e._v(" "),a("Modal",{attrs:{show:e.showCancelTip,type:"error",title:"Attention: Subscription Cancellation Notice",okText:"Continue",content:"Please be informed that your subscription will be cancelled effective from the next billing cycle. However, you will still be able to access and use the service until the end of the current billing cycle.",footer:!0},on:{onClose:e.handleCancelTipClose,onOk:e.handleCancelMembership}})]},proxy:!0}])})},staticRenderFns:[]};var P=a("VU/8")($,L,!1,function(e){a("ruqh")},"data-v-49d30599",null).exports,j={name:"Collapse",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},content:{type:String,default:""}},data:function(){return{vShow:!1}},computed:{},watch:{},created:function(){this.vShow=this.show},methods:{handleToggle:function(){this.vShow=!this.vShow}}},z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"collapse-wrap border rounded-lg p-3"},[a("div",{staticClass:"collapse-wrap-header d-flex justify-content-between text-pointer",on:{click:e.handleToggle}},[a("div",{staticClass:"collapse-wrap-header-title text-dark h6 font-weight-bolder my-0 mr-4"},[e._v(e._s(e.title))]),e._v(" "),a("div",{staticClass:"collapse-wrap-header-icon text-centered",class:e.vShow?"up":""},[a("i",{staticClass:"bi bi-chevron-down header-icon h6 text-primary"})])]),e._v(" "),a("b-collapse",{model:{value:e.vShow,callback:function(t){e.vShow=t},expression:"vShow"}},[e._t("content",[a("div",{staticClass:"collapse-wrap-content border-top mt-2 pt-2"},[e._v(e._s(e.content))])])],2)],1)},staticRenderFns:[]};var W=a("VU/8")(j,z,!1,function(e){a("kgHL")},"data-v-7a065284",null).exports,Q={name:"Writing",components:{Modal:R,Account:P,Collapse:W},data:function(){return{scoreStyles:[{background:"#F1E2FF",color:"#864FB9"},{background:"#FFDDE2",color:"#C52C2C"},{background:"#E1E7FF",color:"#322F81"},{background:"#DDFDF5",color:"#339070"},{background:"#FFE6CA",color:"#7E2E13"}],scoreResults:[{type:"topic",name:"Quality of Ideas",hasDetail:!0,score:"0"},{type:"grammar",name:"Grammar",hasDetail:!0,score:"0"},{type:"organization",name:"Organization",hasDetail:!0,score:"0"},{type:"structure",name:"Writing Style",hasDetail:!0,score:"0"},{type:"overall_score",name:"Summary",score:"0"}],totalScore:0,essayTitle:"",essayBody:"",generateEssayBody:[],enableEdit:!0,generate:!1,modalType:"info",modalTitle:"",modalContent:"",loading:{submit:!1},show:{works:!1,msg:!1,account:!1},memberType:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},computed:{enableSubmit:function(){return!d(this.essayTitle.trim())&&!d(this.essayBody.trim())},wordsNum:function(){var e=this.essayBody.replace(/\n|\r|^\s+|\s+$/gi,"").replace(/\s+/gi," ");return d(e)?0:e.split(" ").length},userId:function(){return this.$auth.user.sub&&this.$auth.user.sub.replace("auth0|","auth0_")||""}},watch:{"$auth.user.sub":{handler:function(e,t){d(e)||this.checkUserPayStatus()},immediate:!0},"$auth.loading":{handler:function(e,t){e||F.a.done()},immediate:!0}},created:function(){F.a.start()},mounted:function(){},methods:{checkUserPayStatus:function(){var e,t=this,a={userId:this.userId};(e=a,I({url:"checkIsUserPaid",method:"post",data:e})).then(function(e){t.memberType=e.is_paid?"pro":"free",t.$auth.user.isPro=e.is_paid,F.a.done()}).catch(function(e){t.$error(e.response.data.error),F.a.done()})},handleLogin:function(){this.$auth.loginWithPopup()},handleModalShow:function(e){this.show[e]=!0},handleModalClose:function(e){this.show[e]=!1},handleSubmit:function(){var e=this;this.loading.submit=!0,this.enableEdit=!1,this.generateEssayBody=this.handleGenerateBody([],this.essayBody);var t,a={title:this.essayTitle,body:this.essayBody,userId:this.userId};(t=a,I({url:"feedbackWithUserId",method:"post",data:t})).then(function(t){c(t)?e.handleSubmitSuccess(t):(e.$modal({type:"error",title:"Failed",content:"Please try again. Do you submit a valid essay topic and answer?"}),e.enableEdit=!0),e.loading.submit=!1}).catch(function(t){e.$modal({type:"error",title:"Failed",content:t.response.data.message||"Please try again. Do you submit a valid essay topic and answer?"}),e.loading.submit=!1,e.enableEdit=!0})},handleSubmitSuccess:function(e){var t={overall_score:{score:e.overall_score}};e.score_breakdown.forEach(function(e){t[e.type]={score:e.score,detail:e.detail}}),this.scoreResults.forEach(function(e){e.hasDetail&&(e.detail=t[e.type].detail),e.score=t[e.type].score}),this.totalScore=parseInt(6*e.overall_score),this.generateEssayBody=this.handleGenerateBody(e.grammar_feedback,this.essayBody),this.generate=!0},handleGenerateBody:function(e,t){if(t=t.replace(/\n|\r/gi,"<br/>"),d(e))return[{words:t}];var a=[];return e.forEach(function(e){var a=e.context.replace(e.section,"-|s|-"+e.section+"-|f|-"+e.feedback+"-|s|-");t=t.replace(e.context,a)}),t.split("-|s|-").forEach(function(e){var t=e.split("-|f|-");a.push({words:t[0],feedback:t[1]})}),a},handleReset:function(){this.scoreResults=[{type:"topic",name:"Quality of Ideas",hasDetail:!0,score:"0"},{type:"grammar",name:"Grammar",hasDetail:!0,score:"0"},{type:"organization",name:"Organization",hasDetail:!0,score:"0"},{type:"structure",name:"Writing Style",hasDetail:!0,score:"0"},{type:"overall_score",name:"Summary",score:"0"}],this.totalScore=0,this.essayTitle="",this.essayBody="",this.generateEssayBody=[],this.enableEdit=!0,this.generate=!1},handleCancelMembership:function(){this.$alert("Your subscription is cancelled.")}}},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"px-0 d-flex flex-column",attrs:{fluid:""}},[n("div",{staticClass:"main"},[n("b-row",{staticClass:"h-100",attrs:{"no-gutters":""}},[n("b-col",{staticClass:"h-100",attrs:{cols:"3"}},[n("div",{staticClass:"main-col border-right p-4"},[n("div",{staticClass:"logo-wrap text-center mb-3"},[n("img",{staticClass:"logo-wrap-img",attrs:{src:a("0Er0"),alt:"PROOFY"}})]),e._v(" "),n("div",{staticClass:"predicted-score-wrap border rounded-lg d-flex align-items-center p-3"},[n("div",{staticClass:"predicted-score-wrap-text rounded-circle text-center text-primary font-weight-bolder h3 mr-3 my-0"},[e._v("\n                            "+e._s(e.totalScore)+"\n                        ")]),e._v(" "),n("div",{staticClass:"predicted-score-wrap-title d-flex flex-column justify-content-center flex-1"},[n("div",{staticClass:"predicted-score-wrap-title-text text-dark font-weight-bolder h5"},[e._v("Predicted Score\n                            ")]),e._v(" "),n("div",{staticClass:"predicted-score-wrap-title-tip"},[n("b-link",{staticClass:"p-0 text-secondary h6 m-0 text-underline text-truncate d-inline-block w-100",on:{click:function(t){return e.handleModalShow("works")}}},[e._v("\n                                    See how predictive score works\n                                ")]),e._v(" "),n("Modal",{attrs:{show:e.show.works,title:"See how predictive score works"},on:{onClose:function(t){return e.handleModalClose("works")}},scopedSlots:e._u([{key:"content",fn:function(){return[n("p",[e._v("Discover our AI-powered TOEFL Essay Scoring System!")]),e._v(" "),n("p",{staticClass:"my-4"},[e._v("Our innovative technology analyzes your essays on four crucial\n                                            axes,\n                                            each scored from 0 to 5: Addressing the Topic and Task, Organization and\n                                            Development, Unity, Progression, and Coherence, and Language Use. Embrace\n                                            accurate feedback with our system's ability to recognize subtle\n                                            improvements,\n                                            allowing for fractional scores like 4.5 or 5.")]),e._v(" "),n("p",{staticClass:"my-4"},[e._v("Enhance your TOEFL essay writing skills with our advanced\n                                            scoring\n                                            system and gain the competitive edge you need for exam success!")])]},proxy:!0}])})],1)])]),e._v(" "),n("div",{staticClass:"border-top my-3"}),e._v(" "),n("div",{staticClass:"h6 text-dark mb-3"},[e._v("Organization Feedback")]),e._v(" "),n("div",{staticClass:"score-wrap border rounded-lg p-3"},e._l(e.scoreResults,function(t,a){return n("div",{key:a,staticClass:"score-wrap-item d-flex justify-content-between align-items-center mb-3"},[n("div",{staticClass:"score-wrap-item-title w-75"},[n("h5",{staticClass:"mb-1"},[e._v(e._s(t.name))])]),e._v(" "),n("div",{staticClass:"score-wrap-item-score w-25 d-flex justify-content-end"},[n("div",{staticClass:"score-wrap-item-score-box text-center font-weight-bold",style:e.scoreStyles[a]},[e._v(e._s(t.score)+"\n                                ")])])])}),0),e._v(" "),e.$auth.isAuthenticated?n("div",{staticClass:"account-wrap mt-3"},[n("div",{staticClass:"account-btn-wrap"},[n("b-button",{attrs:{block:"",pill:"",variant:"primary"},on:{click:function(t){return e.handleModalShow("account")}}},[n("i",{staticClass:"bi bi-person-circle mr-2"}),e._v("My Account")]),e._v(" "),n("img",{staticClass:"account-star",attrs:{src:a("kMSR"),alt:""}})],1),e._v(" "),"pro"===e.memberType?n("p",{staticClass:"mt-2 text-secondary text-center h7"},[e._v("Pro Member")]):"free"===e.memberType?n("p",{staticClass:"mt-2 text-secondary text-center h7"},[e._v("As a free member\n                            you can submit your essay\n                            "),n("b",{staticClass:"text-primary"},[e._v("2")]),e._v(" times\n                        ")]):e._e()]):e._e(),e._v(" "),n("div",{staticClass:"writing-type-wrap w-100 p-4"},[n("b-dropdown",{staticClass:"col-12 mt-3 p-0",attrs:{id:"dropdown-dropup",dropup:"",text:"TOEFL Writing",variant:"outline-gray"}},[n("b-dropdown-item",{staticClass:"w-100",attrs:{href:"#"}},[e._v("TOEFL Writing")])],1)],1)])]),e._v(" "),n("b-col",{staticClass:"h-100",attrs:{cols:"6"}},[n("div",{staticClass:"main-col writing-wrap d-flex flex-column h-100"},[n("div",{staticClass:"writing-wrap-title"},[n("b-form-textarea",{directives:[{name:"show",rawName:"v-show",value:e.enableEdit,expression:"enableEdit"}],staticClass:"writing-wrap-title-textarea border-0 my-3 font-weight-bolder text-dark",attrs:{"no-resize":"",placeholder:"Add your topic here. For example, Do you agree or disagree with the following statement: “It is more important for students to study ...”"},model:{value:e.essayTitle,callback:function(t){e.essayTitle=t},expression:"essayTitle"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.enableEdit,expression:"!enableEdit"}],staticClass:"writing-wrap-title-textarea my-3 font-weight-bolder text-dark"},[e._v("\n                            "+e._s(e.essayTitle))])],1),e._v(" "),n("div",{staticClass:"writing-wrap-content flex-1"},[n("b-form-textarea",{directives:[{name:"show",rawName:"v-show",value:e.enableEdit,expression:"enableEdit"}],staticClass:"writing-wrap-content-textarea border-0 h-100 text-dark",attrs:{"no-resize":"",placeholder:"Add your essay response here."},model:{value:e.essayBody,callback:function(t){e.essayBody=t},expression:"essayBody"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.enableEdit,expression:"!enableEdit"}],staticClass:"writing-wrap-content-textarea h-100 text-dark"},[e._l(e.generateEssayBody,function(t,a){return[t.feedback?[n("span",{staticClass:"text-danger text-pointer",attrs:{id:"feedback_"+a},domProps:{innerHTML:e._s(t.words)}}),e._v(" "),n("b-popover",{attrs:{target:"feedback_"+a,triggers:"hover"},scopedSlots:e._u([{key:"default",fn:function(){return[n("div",{staticClass:"p-2 feedback-popover"},[n("b-badge",{staticClass:"py-3 px-3 feedback-popover-badge",attrs:{pill:"",variant:"info"}},[e._v("\n                                                    · Grammar")]),e._v(" "),n("div",{staticClass:"feedback-popover-text text-dark pt-3"},[e._v(e._s(t.feedback)+"\n                                                ")])],1)]},proxy:!0}],null,!0)})]:n("span",{domProps:{innerHTML:e._s(t.words)}})]})],2)],1),e._v(" "),n("div",{staticClass:"writing-wrap-options d-flex justify-content-between align-items-center p-4"},[n("div",{staticClass:"d-flex align-items-center text-secondary"},[n("small",[e._v("Characters: "+e._s(e.essayBody.length))]),e._v(" "),n("span",{staticClass:"mx-2"},[e._v("|")]),e._v(" "),n("small",[e._v("Words: "+e._s(e.wordsNum))])]),e._v(" "),e.$auth.loading?e._e():n("div",[e.$auth.isAuthenticated?[e.generate?n("b-button",{attrs:{pill:"",variant:"outline-primary"},on:{click:e.handleReset}},[e._v("Reset")]):n("b-button",{attrs:{pill:"",variant:"primary",disabled:!e.enableSubmit||e.loading.submit},on:{click:e.handleSubmit}},[n("b-spinner",{staticClass:"mr-1",attrs:{hidden:!e.loading.submit,small:""}}),e._v("Submit")],1)]:[n("b-button",{attrs:{pill:"",variant:"primary",disabled:!e.enableSubmit||e.loading.submit},on:{click:e.handleLogin}},[n("b-spinner",{attrs:{hidden:!e.loading.submit,small:""}}),e._v("Submit")],1)]],2)])])]),e._v(" "),n("b-col",{staticClass:"h-100",attrs:{cols:"3"}},[n("div",{staticClass:"main-col border-left d-flex flex-column p-4"},[n("div",{staticClass:"h6 text-dark mb-3"},[e._v("Organization Feedback")]),e._v(" "),n("div",{staticClass:"feedback-wrap flex-1"},e._l(e.scoreResults,function(t,a){return n("div",{staticClass:"mb-3"},[t.hasDetail?n("Collapse",{key:a,attrs:{title:t.name,content:t.detail}}):e._e()],1)}),0)])])],1)],1),e._v(" "),e.$auth.isAuthenticated?n("Account",{attrs:{show:e.show.account},on:{onClose:function(t){return e.handleModalClose("account")},onCancelMembership:e.handleCancelMembership}}):e._e()],1)},staticRenderFns:[]};var N=a("VU/8")(Q,D,!1,function(e){a("/XqL")},"data-v-72a3ba3d",null).exports;n.default.use(r.a);var G=new r.a({routes:[{path:"/",redirect:"/writing"},{path:"/writing",name:"Writing",component:N}]}),V=(a("yh13"),a("kMb3")),Y={install:function(e){var t=new(e.extend(R));t.$mount(document.createElement("div")),document.body.appendChild(t.$el),e.prototype.$modal=function(e){t.type=e.type||"info",t.title=e.title,t.content=e.content,t.vShow=!0}}},J=Y,q={name:"Alert",props:{msg:{type:String,default:""},isShow:{type:Boolean,default:!1},hideOk:{type:Boolean,default:!1},auto:{type:Boolean,default:!0},duration:{type:Number,default:3e3},type:{type:String,default:"info"},okText:{type:String,default:"Okay"},theme:{type:String,default:"dark"}},watch:{isShow:{handler:function(e,t){if(e&&this.auto)var a=this,n=setTimeout(function(){a.isShow=!1,clearTimeout(n)},a.duration)}}},methods:{onOk:function(){this.isShow=!1}}},X={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"alert"}},[e.isShow?a("div",{staticClass:"alert-container"},[a("div",{staticClass:"alert-wrap rounded d-flex justify-content-between align-items-center p-2",class:"light"===e.theme?"border "+e.theme+" "+e.type:e.theme+" "+e.type},[a("div",{staticClass:"alert-wrap-msg mx-1"},[e._v(e._s(e.msg))]),e._v(" "),e.hideOk?e._e():a("div",[a("b-link",{staticClass:"btn ml-1 text-primary",on:{click:e.onOk}},[e._v(e._s(e.okText))])],1)])]):e._e()])},staticRenderFns:[]};var H=a("VU/8")(q,X,!1,function(e){a("OVk5")},"data-v-82ab8044",null).exports,Z={install:function(e){var t=new(e.extend(H));t.$mount(document.createElement("div")),document.body.appendChild(t.$el),e.prototype.$alert=function(e,a){t.type="info",t.msg=e,a&&(t.type=a.type||"info",t.hideOk=a.hideOk||!1,t.auto=a.auto||!0,t.duration=a.duration||3e3,t.okText=a.okText||"Okay",t.theme=a.theme||"dark"),t.isShow=!0},e.prototype.$error=function(e,a){t.type="error",t.msg=e,a&&(t.hideOk=a.hideOk||!1,t.auto=a.auto||!0,t.duration=a.duration||3e3,t.okText=a.okText||"Okay",t.theme=a.theme||"dark"),t.isShow=!0}}},K=Z;n.default.use(m.a),n.default.use(m.b),n.default.use(E,{domain:V.domain,clientId:V.clientId,authorizationParams:V.authorizationParams,onRedirectCallback:function(e){G.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),n.default.use(J),n.default.use(K),n.default.config.productionTip=!1,new n.default({el:"#app",router:G,components:{App:s},template:"<App/>"})},OVk5:function(e,t){},UVIz:function(e,t){},hvp2:function(e,t){},kMSR:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALASURBVHgB1ZlNbtNAFMffcxBhmSO4N2hWELFxTkAr0VKxITlB6QlKTkB7AtINAorUcIK4iyp0RW9AjuAdtMJ+vJk4HySu7Zl5TspPiuSMx56/np/fxxhBGBq9DABrw8mfpIut8z4I4oE4XjA7RNgGYeQFI7yYH3tvQBhRwTQ68Fnl3KoEDR4LQBBZCyMdZ4wdgiAIQmjrIv3MPolb2Po0BgHkLJxl3fm59yC1DAiQa93ZJGyzlUNwRMbCSMMScz7Qj50GOOIsmK73lSv4Jab6cFs/BkecXOKfrFaeI3z2+QQssRac+q0S64MpcdLE5+c3YIGVSziJVTzyhnS1Z5W2jS3sLHa+cgR/krappY0sTFevt0XE6ptBQ1v6en/H5LLSgun7q0OoxTJiZzdl0YQXaaQpRaFL6Nh5x+GI4C1US5/F94pSeK5g/bgIVVr1YT2Muejv5RX9mYLT+KoeUwCb4QYoPsLW13D5xEywfvS/6h32alWAB/AwCNniZ4sWRxrtdbgzmIp0zvUVEfFvwOIvkd9+gv+ICprQavFUnQqQnIJ6Qx8uY61R1dSLo5OGMWGfRvFu15Iwjc3hdOCesKa63+TdBoWvCJ2SnzhGB520V/NhPUS8XheffhncN6E4NQ85Pj95fLIGaw+gftvF5iDKm1S6vOTwp2oJse53idJdiFE9rMvLWnwBci4Ssa/umnTTmyvgldi4xgX8R6MC3qqnExCtLNu02Q2yynR6IZ1wILK4fGJZy60r69Scit4Fc3qmbrCIUy2hXxYO8KUvUMnAYU9CrwkCcMhT/hwUTBuz2C1wRKZaI+wWzokTG/dZQUTwxJ8pzzX6tjs9y8jVw7/vlG9mRw0TPy9ATDC2uQYgOs041ZfafVcIdxxef2WI8AwEEfvGMWUpYohEhkXkezqiy4V/IQhTxZfQcHaY0DcQ5i+F2gkPFZv8EQAAAABJRU5ErkJggg=="},kMb3:function(e,t){e.exports={domain:"dev-pxqcewc8ao1p8nga.us.auth0.com",clientId:"AqypBvYLiULBYClNJgH90qHTON8qgkAF",authorizationParams:{audience:"https://dev-pxqcewc8ao1p8nga.us.auth0.com/api/v2/"}}},kgHL:function(e,t){},ruqh:function(e,t){},yh13:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.704021597fcefe748b12.js.map