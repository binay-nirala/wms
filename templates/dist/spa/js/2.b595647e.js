(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0668":function(e,t,n){},"713b":function(e,t,n){"use strict";n.r(t);var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hhh LpR lFf"}},[n("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",elevated:""}},[n("q-toolbar",{staticClass:"bg-light-blue-10 text-white shadow-18 rounded-borders"},[n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawerleft=!e.drawerleft}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[15,15],"content-style":"font-size: 12px"}},[e._v("\n              "+e._s(e.$t("index.hide_menu"))+"\n            ")])],1)],1),n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:!e.$q.platform.is.mobile,expression:"!$q.platform.is.mobile"}],staticClass:"text-weight-bold",attrs:{shrink:""}},[e._v("\n            "+e._s(e.$t("index.title"))+"\n          ")])],1),n("q-space"),n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.$q.platform.is.mobile,expression:"!$q.platform.is.mobile"}],attrs:{icon:"img:statics/icons/logo.png",stretch:"",flat:"",label:e.$t("index.home"),to:"/"}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n              "+e._s(e.$t("index.title_tip"))+"\n            ")])],1)],1),n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("a",{directives:[{name:"show",rawName:"v-show",value:!e.$q.platform.is.mobile,expression:"!$q.platform.is.mobile"}],staticStyle:{"text-decoration":"none",color:"#c8e6c9"},attrs:{href:"/docs/"}},[n("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{icon:"api",round:"",dense:"",flat:""}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[15,15],"content-style":"font-size: 12px"}},[e._v("\n                API Docs\n              ")])],1)],1)]),n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.$q.platform.is.mobile,expression:"!$q.platform.is.mobile"}],staticStyle:{margin:"0 10px 0 10px"},attrs:{icon:"img:statics/icons/GitHub.png",round:"",dense:"",flat:""},on:{click:function(t){return e.brownlink("https://github.com/Singosgu/GreaterWMS")}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[15,15],"content-style":"font-size: 12px"}},[e._v("\n              GitHub Link\n            ")])],1)],1),n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{round:"",dense:"",flat:"",color:"white",icon:"translate"}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[15,15],"content-style":"font-size: 12px"}},[e._v("\n              "+e._s(e.$t("index.translate"))+"\n            ")]),n("q-menu",[n("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.langOptions,(function(t,i){return n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:i,attrs:{clickable:""},on:{click:function(n){e.lang=t.value}}},[n("q-item-section",[e._v(e._s(t.label))])],1)})),1)],1)],1)],1),n("q-separator",{attrs:{vertical:""}}),"1"===e.authin?[n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{round:"",dense:"",flat:"",color:"white",icon:"notifications"},on:{click:function(t){e.read=!0}}},[n("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[e._v("\n              "+e._s(e.read_num)+"\n            ")]),n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[15,15],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("index.unread"))+"\n            ")])],1)],1),n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn-dropdown",{attrs:{stretch:"",flat:"",color:"white-8",icon:"account_circle"},on:{click:function(t){e.chat=!1}}},[n("div",{staticClass:"row no-wrap q-pa-md"},[n("div",{staticClass:"column",staticStyle:{width:"200px"}},[n("div",{staticClass:"text-h6 q-mb-md"},[e._v("\n                  "+e._s(e.$t("index.user_center"))+"\n                ")]),n("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",icon:"connect_without_contact",label:e.$t("index.change_user")},on:{click:function(t){e.login=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                          "+e._s(e.$t("index.change_user"))+"\n                      ")])],1),n("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",icon:"list",label:e.$t("index.view_my_openid")},on:{click:function(t){e.authid=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                          "+e._s(e.$t("index.view_my_openid"))+"\n                      ")])],1),n("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",icon:"img:statics/icons/profile.png",label:e.$t("index.contact_list")},on:{click:function(t){return e.Friend()}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                          "+e._s(e.$t("index.contact_list"))+"\n                      ")])],1)],1),n("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),n("div",{staticClass:"column items-center"},[n("q-avatar",{attrs:{size:"72px"}},[n("q-img",{attrs:{src:"statics/staff/staffauth.png"}})],1),n("div",{staticClass:"text-subtitle1 q-mt-md q-mb-xs"},[e._v(e._s(e.login_name))]),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:e.$t("index.logout"),push:"",size:"sm",icon:"img:statics/icons/logout.png"},on:{click:function(t){return e.Logout("")}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                  "+e._s(e.$t("index.logout")))])],1)],1)],1)])],1)]:e._e(),"0"===e.authin?[n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.login"),color:"primary"},on:{click:function(t){e.login=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[15,15],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("index.login_tip"))+"\n              ")])],1)],1),n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.register"),color:"primary"},on:{click:function(t){e.register=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[15,15],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("index.register_tip"))+"\n              ")])],1)],1)]:e._e()],2)],1),n("q-drawer",{attrs:{"show-if-above":"",mini:!e.drawerleft||e.miniState,width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3 shadow-24"},on:{"!click":function(t){return e.drawerClick(t)}},model:{value:e.drawerleft,callback:function(t){e.drawerleft=t},expression:"drawerleft"}},[n("q-scroll-area",{staticClass:"fit",staticStyle:{"overflow-y":"hidden"}},[n("q-list",[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"inbound"===e.link,to:"/inbound",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("inbound")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"speaker_notes"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.inbound"))+"\n            ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"outbound"===e.link,to:"/outbound",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("outbound")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"rv_hookup"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.outbound"))+"\n            ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"stock"===e.link,to:"/stock",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("stock")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"multiline_chart"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.stock"))+"\n            ")])],1),n("q-separator"),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"capital"===e.link,to:"/capital",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("capital")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"devices_other"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.capital"))+"\n            ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"goods"===e.link,to:"/goods",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("goods")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"shop_two"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.goods"))+"\n            ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"baseinfo"===e.link,to:"/baseinfo",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("baseinfo")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"info"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.baseinfo"))+"\n            ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"warehouse"===e.link,to:"/warehouse",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("warehouse")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"settings"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.warehouse"))+"\n            ")])],1),n("q-separator"),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"staff"===e.link,to:"/staff",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("staff")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"assignment_ind"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.staff"))+"\n            ")])],1),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"driver"===e.link,to:"/driver",exact:"","active-class":"my-menu-link"},on:{click:function(t){return e.linkChange("driver")}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"img:statics/staff/driver.png"}})],1),n("q-item-section",[e._v("\n              "+e._s(e.$t("menuItem.driver"))+"\n            ")])],1),n("q-separator")],1)],1),n("div",{staticClass:"q-mini-drawer-hide absolute",staticStyle:{top:"15px",right:"-17px"}},[n("q-btn",{attrs:{dense:"",round:"",glossy:"",unelevated:"",color:"purple",icon:"chevron_left"},on:{click:function(t){e.miniState=!0}}})],1)],1),n("q-page-container",{staticStyle:{width:"100%"}},[n("router-view"),"zh-hans"===e.lang?n("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[n("q-btn",{attrs:{flat:"",color:"black",label:"版权所有 ICP证：沪ICP备16034540号-1"},on:{click:function(t){return e.brownlink("http://www.miit.gov.cn/")}}})],1):e._e()],1),n("q-dialog",{model:{value:e.chat,callback:function(t){e.chat=t},expression:"chat"}},[n("q-card",{staticStyle:{width:"600px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.receiver))]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"},on:{click:function(t){return e.ChatClose()}}},[e._v(e._s(e.$t("index.close")))])],1)],1),n("q-separator"),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"},attrs:{id:"chat_scroll"}},[[n("div",{staticClass:"q-pa-md row justify-center"},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.chat_next,expression:"chat_next !== null"}],attrs:{flat:"",rounded:"",label:e.$t("index.chat_more")},on:{click:function(t){return e.LoadChatList()}}}),n("div",{staticStyle:{width:"100%"}},[n("q-chat-message",{directives:[{name:"show",rawName:"v-show",value:null===e.chat_next,expression:"chat_next === null"}],attrs:{label:e.$t("index.chat_no_more")}}),e._l(e.chat_list,(function(t){return n("div",{key:t.id},[t.sender===e.sender+"-"+e.openid?n("q-chat-message",{attrs:{name:e.sender,text:[t.detail],"bg-color":"light-green-4","name-sanitize":"",sent:"","text-sanitize":""}}):n("q-chat-message",{attrs:{name:e.receiver,text:[t.detail],"text-sanitize":"","name-sanitize":"","bg-color":"grey-4"}})],1)}))],2)],1)]],2),n("q-separator"),n("q-card-actions",{attrs:{align:"right"}},[n("q-input",{staticClass:"bg-white col",attrs:{autofocus:"",dense:"",outlined:"",square:"",placeholder:"Send Message"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.websocketsend()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.ChatClose()}]},model:{value:e.chat_text,callback:function(t){e.chat_text=t},expression:"chat_text"}}),n("q-btn",{attrs:{flat:"",label:e.$t("index.chat_send"),color:"primary"},on:{click:function(t){return e.websocketsend()}}})],1)],1)],1),n("q-dialog",{attrs:{position:"right"},model:{value:e.read,callback:function(t){e.read=t},expression:"read"}},[n("q-card",{staticStyle:{width:"300px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.$t("index.unread"))+"("+e._s(e.read_num)+")")]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),n("q-separator"),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"}},[n("q-list",e._l(e.read_list,(function(t){return n("div",{key:t.id},[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[n("q-item-section",[n("q-item-label",{on:{click:function(n){e.ChatWith(t.sender.split("-")[0])}}},[e._v(e._s(t.sender.split("-")[0]))]),n("q-item-label",{attrs:{caption:"",lines:"2"},on:{click:function(n){e.ChatWith(t.sender.split("-")[0])}}},[e._v(e._s(t.detail))])],1)],1)],1)})),0)],1),n("q-separator",{directives:[{name:"show",rawName:"v-show",value:e.read_num>30,expression:"read_num > 30"}]}),n("q-card-actions",{attrs:{align:"left"}},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.read_previous,expression:"read_previous !== null"}],attrs:{flat:"",label:e.$t("index.previous"),color:"primary"},on:{click:function(t){return e.ReadnumPrevious()}}}),n("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.read_next,expression:"read_next !== null"}],attrs:{flat:"",label:e.$t("index.next"),color:"primary"},on:{click:function(t){return e.ReadnumNext()}}})],1)],1)],1),n("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.authid,callback:function(t){e.authid=t},expression:"authid"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.$t("index.your_openid")))]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),n("q-card-section",{staticClass:"q-pt-md"},[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Openid",readonly:""},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}})],1)],1)],1),n("q-dialog",{attrs:{position:"right"},model:{value:e.friend,callback:function(t){e.friend=t},expression:"friend"}},[n("q-card",{staticStyle:{width:"300px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.$t("index.contact_list"))+"("+e._s(e.friend_num)+")")]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"}},[e._v("关闭")])],1)],1),n("q-separator"),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"}},[n("q-list",[e._l(e.friend_list,(function(t){return[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:""}},[n("q-item-section",[n("q-item-label",{on:{click:function(n){return e.ChatWith(t.staff_name)}}},[e._v(e._s(t.staff_name))])],1)],1)]}))],2)],1),n("q-separator",{directives:[{name:"show",rawName:"v-show",value:e.friend_num>30,expression:"friend_num > 30"}]}),n("q-card-actions",{attrs:{align:"left"}},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.friend_previous,expression:"friend_previous !== null"}],attrs:{flat:"",label:e.$t("index.previous"),color:"primary"},on:{click:function(t){return e.Friend_previous()}}}),n("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.friend_next,expression:"friend_next !== null"}],attrs:{flat:"",label:e.$t("index.next"),color:"primary"},on:{click:function(t){return e.Friend_next()}}})],1)],1)],1),n("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.$t("index.user_login")))]),n("q-space"),e.admin?[n("q-btn",{attrs:{dense:"",flat:"",label:e.$t("index.user_login")},on:{click:function(t){e.admin=!1}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.user_login")))])],1)]:e.admin?e._e():[n("q-btn",{attrs:{dense:"",flat:"",label:e.$t("index.admin_login")},on:{click:function(t){e.admin=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.admin_login")))])],1)],n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],2),n("q-card-section",{staticClass:"q-pt-md"},[e.admin?[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.admin_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},model:{value:e.adminlogin.name,callback:function(t){e.$set(e.adminlogin,"name",t)},expression:"adminlogin.name"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.adminlogin.password,callback:function(t){e.$set(e.adminlogin,"password",t)},expression:"adminlogin.password"}})]:e._e(),e.admin?e._e():[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.your_openid")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.login_name,callback:function(t){e.login_name=t},expression:"login_name"}})]],2),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.$t("index.cancel")}}),e.admin?[n("q-btn",{attrs:{color:"primary",label:e.$t("index.login")},on:{click:function(t){return e.adminLogin()}}})]:e._e(),e.admin?e._e():[n("q-btn",{attrs:{color:"primary",label:e.$t("index.login")},on:{click:function(t){return e.Login()}}})]],2)],1)],1),n("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.register,callback:function(t){e.register=t},expression:"register"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.$t("index.register_tip")))]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),n("q-card-section",{staticClass:"q-pt-md"},[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},model:{value:e.registerform.name,callback:function(t){e.$set(e.registerform,"name",t)},expression:"registerform.name"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.registerform.password1,callback:function(t){e.$set(e.registerform,"password1",t)},expression:"registerform.password1"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.confirm_password"),type:e.isPwd2?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd2?"visibility_off":"visibility"},on:{click:function(t){e.isPwd2=!e.isPwd2}}})]},proxy:!0}]),model:{value:e.registerform.password2,callback:function(t){e.$set(e.registerform,"password2",t)},expression:"registerform.password2"}})],1),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.$t("index.cancel")}}),n("q-btn",{attrs:{color:"primary",label:e.$t("index.register")},on:{click:function(t){return e.Register()}}})],1)],1)],1)],1)},s=[],o=(n("26e9"),n("5319"),n("3004")),r=n("b06b"),l=n("bd4c"),c={meta:{title:"GreaterWMS",titleTemplate:e=>e+"--Open Source Warehouse Management System",meta:{description:{name:"description",content:"GreaterWMS--Open Source Warehouse Management System"},keywords:{name:"keywords",content:"GreaterWMS, Open Source Warehouse Management System, WMS,仓库管理系统"}}},data(){return{lang:this.$i18n.locale,langOptions:[{value:"en-us",label:"English"},{value:"zh-hans",label:"中文简体"}],admin:!1,adminlogin:{name:"",password:""},openid:"",isPwd:!0,isPwd2:!0,authin:"0",authid:!1,left:!1,drawerleft:!1,miniState:!0,tab:"",login:!1,link:localStorage.getItem("menulink"),login_name:"",register:!1,registerform:{name:"",password1:"",password2:""},friend:!1,friend_num:0,friend_list:[],friend_previous:null,friend_next:null,sender:"",receiver:"",chat:!1,chat_list:"",chat_text:"",chat_next:null,read:!1,read_num:0,read_list:[],read_previous:"",read_next:""}},methods:{linkChange(e){var t=this;localStorage.setItem("menulink",e),t.link=e},drawerClick(e){var t=this;t.miniState&&(t.miniState=!1,e.stopPropagation())},brownlink(e){Object(r["a"])(e)},Login(){var e=this;""===e.login_name?e.$q.notify({message:"Please enter the login name",color:"negative",icon:"close"}):""===e.openid?e.$q.notify({message:"Please enter the openid",icon:"close",color:"negative"}):(e.$q.localStorage.set("openid",e.openid),Object(o["d"])("staff/?staff_name="+e.login_name).then((t=>{1===t.count?(e.authin="1",e.login=!1,e.$q.localStorage.set("auth","1"),e.$q.localStorage.set("login_name",e.login_name),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),window.location.reload()):e.$q.notify({message:"No user's Data",icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})})))},adminLogin(){var e=this;""===e.admin_name?e.$q.notify({message:"Please enter the admin name",color:"negative",icon:"close"}):""===e.admin_password?e.$q.notify({message:"Please enter the admin password",icon:"close",color:"negative"}):Object(o["e"])("login/",e.adminlogin).then((t=>{"200"===t.code?(e.authin="1",e.login=!1,e.admin=!1,e.openid=t.data.openid,e.login_name=t.data.name,e.$q.localStorage.set("auth","1"),e.$q.localStorage.set("login_name",e.login_name),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),window.location.reload()):e.$q.notify({message:"No user's Data",icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Logout(){var e=this;e.authin="0",e.login_name="",e.$q.localStorage.remove("auth"),e.$q.localStorage.set("login_name",""),e.$q.notify({message:"Success Logout",icon:"check",color:"negative"}),window.location.reload()},Register(){var e=this;Object(o["e"])("register/",e.registerform).then((t=>{"200"===t.code?(e.register=!1,e.openid=t.data.openid,e.login_name=e.registerform.name,e.authin="1",e.$q.localStorage.set("openid",t.data.openid),e.$q.localStorage.set("login_name",e.registerform.name),e.$q.localStorage.set("auth","1"),e.registerform={name:"",password1:"",password2:""},e.$q.notify({message:t.msg,icon:"check",color:"green"}),window.location.reload()):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},initWebSocket(){var e=this;i=new WebSocket(o["h"]+"?sender="+e.login_name+"&receiver="+e.receiver+"&openid="+e.openid),i.onmessage=e.websocketonmessage,i.onopen=e.websocketonopen,i.onerror=e.websocketonerror,i.onclose=e.websocketclose},websocketonopen(){console.log("Success Connect")},websocketonerror(){var e=this;e.initWebSocket()},websocketonmessage(e){var t=this;t.$q.sessionStorage.getItem("receiver")===JSON.parse(e.data).sender&&t.chat_list.push(JSON.parse(e.data)),t.Readnum(),t.$q.notify({message:JSON.parse(e.data).sender+"Send you a message",color:"deep-purple",icon:"textsms",position:"right",actions:[{label:"查看",color:"yellow",handler:()=>{t.ChatWith(JSON.parse(e.data).sender)}}]})},websocketsend(){var e=this;""===e.chat_text||(i.send(e.chat_text),e.chat_list.push({sender:e.sender+"-"+e.openid,receiver:e.receiver,detail:e.chat_text,create_time:l["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")}),e.chat_text="")},websocketclose(e){console.log("Disconnect",e)},ChatWith(e){var t=this;t.sender=t.login_name,t.receiver=e,t.$q.sessionStorage.set("receiver",e),t.sender===t.receiver?t.$q.notify({message:"Cannot Chat with yourself",icon:"close",color:"negative"}):(t.chat=!0,t.chat_text="",t.initWebSocket(),Object(o["d"])("chat/?sender="+t.sender+"&receiver="+t.receiver).then((e=>{if(t.chat_list=e.results.reverse(),t.Readnum(),e.next){var n=e.next.split(":")[0];e.next.replace(n,window.location.href.split(":")[0]),t.chat_next=e.next}else t.chat_next=e.next})).catch((e=>{console.log(e),t.$q.notify({message:e.detail,icon:"close",color:"negative"})})))},LoadChatList(){var e=this;Object(o["d"])(e.chat_next).then((t=>{if(t.results.forEach((t=>{e.chat_list.unshift(t)})),t.next){var n=t.next.split(":")[0];t.next.replace(n,window.location.href.split(":")[0]),e.chat_next=t.next}else e.chat_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ChatClose(){var e=this;e.receiver="",e.$q.sessionStorage.set("receiver",""),e.chat_list=[],e.chat_text="",e.chat_next=null},Readnum(){var e=this;Object(o["d"])("chat/read/?sender="+e.login_name).then((t=>{if(t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.read_previous=t.previous}else e.read_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.read_next=t.next}else e.read_next=t.next;e.read_list=t.results,e.read_num=t.count})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ReadnumPrevious(){var e=this;Object(o["d"])(e.read_previous,{}).then((t=>{if(e.read_list=t.results,t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.read_previous=t.previous}else e.read_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.read_next=t.next}else e.read_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ReadnumNext(){var e=this;Object(o["d"])(e.read_next,{}).then((t=>{if(e.read_list=t.results,t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.read_previous=t.previous}else e.read_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.read_next=t.next}else e.read_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend(){var e=this;e.friend=!0,Object(o["d"])("staff/",{}).then((t=>{if(e.friend_list=t.results,t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.friend_previous=t.previous}else e.friend_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.friend_next=t.next}else e.friend_next=t.next;e.friend_num=t.count})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend_previous(){var e=this;Object(o["d"])(e.friend_previous,{}).then((t=>{if(e.friend_list=t.results,t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.friend_previous=t.previous}else e.friend_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.friend_next=t.next}else e.friend_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend_next(){var e=this;Object(o["d"])(e.friend_next,{}).then((t=>{if(e.friend_list=t.results,t.previous){var n=t.previous.split(":")[0];t.previous.replace(n,window.location.href.split(":")[0]),e.friend_previous=t.previous}else e.friend_previous=t.previous;if(t.next){var i=t.next.split(":")[0];t.next.replace(i,window.location.href.split(":")[0]),e.friend_next=t.next}else e.friend_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))}},created(){var e=this;e.$q.localStorage.has("openid")?e.openid=e.$q.localStorage.getItem("openid"):(e.openid="",e.$q.localStorage.set("openid","")),e.$q.localStorage.has("login_name")?e.login_name=e.$q.localStorage.getItem("login_name"):(e.login_name="",e.$q.localStorage.set("login_name","")),e.$q.localStorage.has("auth")?(e.authin="1",e.initWebSocket(),e.Readnum()):e.authin="0"},mounted(){},updated(){document.getElementById("chat_scroll")&&(document.getElementById("chat_scroll").scrollTop=document.getElementById("chat_scroll").scrollHeight)},destroyed(){i&&i.readyState===i.OPEN&&i.close()},watch:{lang(e){localStorage.setItem("lang",e),this.$i18n.locale=e}}},d=c,p=(n("83ec"),n("2877")),u=n("4d5a"),m=n("e359"),f=n("65c6"),v=n("9c40"),g=n("05c0"),h=n("6ac5"),_=n("2c91"),x=n("4e73"),q=n("1c1c"),b=n("66e5"),w=n("4074"),k=n("eb85"),y=n("58a8"),$=n("f20b"),S=n("cb32"),C=n("068f"),N=n("9404"),z=n("4983"),I=n("0016"),O=n("09e3"),Q=n("de5e"),P=n("24e8"),L=n("f09f"),j=n("d847"),W=n("a370"),E=n("8169"),R=n("4b7e"),M=n("27f9"),D=n("0170"),B=n("7f67"),F=n("714f"),G=n("eebe"),H=n.n(G),J=Object(p["a"])(d,a,s,!1,null,null,null);t["default"]=J.exports;H()(J,"components",{QLayout:u["a"],QHeader:m["a"],QToolbar:f["a"],QBtn:v["a"],QTooltip:g["a"],QToolbarTitle:h["a"],QSpace:_["a"],QMenu:x["a"],QList:q["a"],QItem:b["a"],QItemSection:w["a"],QSeparator:k["a"],QBadge:y["a"],QBtnDropdown:$["a"],QAvatar:S["a"],QImg:C["a"],QDrawer:N["a"],QScrollArea:z["a"],QIcon:I["a"],QPageContainer:O["a"],QPageSticky:Q["a"],QDialog:P["a"],QCard:L["a"],QBar:j["a"],QCardSection:W["a"],QChatMessage:E["a"],QCardActions:R["a"],QInput:M["a"],QItemLabel:D["a"]}),H()(J,"directives",{ClosePopup:B["a"],Ripple:F["a"]})},"83ec":function(e,t,n){"use strict";var i=n("0668"),a=n.n(i);a.a}}]);