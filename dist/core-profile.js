(()=>{"use strict";var t,e,n,a={88213:(t,e,n)=>{var a=n(21777),i=n(85471),r=n(85168),o=n(61338),s=n(32981),A=n(53334),l=n(63814),c=n(24764),d=n(73267),p=n(18195),C=n(41944),u=n(18740),_=n(22378),f=n(34196);const h={name:"AccountIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var m=n(14486);const g=(0,m.A)(h,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon account-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,v={name:"MapMarkerIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},x=(0,m.A)(v,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon map-marker-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var b=n(93919),y=n(96763);const k=(0,i.pM)({name:"Profile",components:{AccountIcon:g,MapMarkerIcon:x,NcActionLink:d.A,NcActions:c.A,NcAppContent:p.A,NcAvatar:C.A,NcButton:u.A,NcContent:_.A,NcEmptyContent:f.A,PencilIcon:b.A},data:()=>({...(0,s.C)("core","profileParameters",{userId:null,displayname:null,address:null,organisation:null,role:null,headline:null,biography:null,actions:[],isUserAvatarVisible:!1}),status:(0,s.C)("core","status",{}),sections:window.OCA.Core.ProfileSections.getSections()}),computed:{isCurrentUser(){return(0,a.HW)()?.uid===this.userId},allActions(){return this.actions},primaryAction(){return this.allActions.length?this.allActions[0]:null},otherActions(){return y.warn(this.allActions),this.allActions.length>1?this.allActions.slice(1):[]},settingsUrl:()=>(0,l.Jv)("/settings/user"),emptyProfileMessage(){return this.isCurrentUser?(0,A.Tl)("core","You have not added any info yet"):(0,A.Tl)("core","{user} has not added any info yet",{user:this.displayname||this.userId})}},mounted(){document.title=`${this.displayname||this.userId} - ${document.title}`,(0,o.B1)("user_status:status.updated",this.handleStatusUpdate)},beforeDestroy(){(0,o.al)("user_status:status.updated",this.handleStatusUpdate)},methods:{t:A.Tl,handleStatusUpdate(t){this.isCurrentUser&&t.userId===this.userId&&(this.status=t)},openStatusModal(){const t=document.querySelector(".user-status-menu-item");this.isCurrentUser&&(t?t.click():(0,r.Qg)((0,A.Tl)("core","Error opening the user status modal, try hard refreshing the page")))}}});var w=n(85072),B=n.n(w),S=n(97825),E=n.n(S),I=n(77659),D=n.n(I),N=n(55056),O=n.n(N),P=n(10540),U=n.n(P),j=n(41113),M=n.n(j),z=n(65494),T={};T.styleTagTransform=M(),T.setAttributes=O(),T.insert=D().bind(null,"head"),T.domAPI=E(),T.insertStyleElement=U(),B()(z.A,T),z.A&&z.A.locals&&z.A.locals;const $=(0,m.A)(k,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcContent",{attrs:{"app-name":"profile"}},[e("NcAppContent",[e("div",{staticClass:"profile__header"},[e("div",{staticClass:"profile__header__container"},[e("div",{staticClass:"profile__header__container__placeholder"}),t._v(" "),e("div",{staticClass:"profile__header__container__displayname"},[e("h2",[t._v(t._s(t.displayname||t.userId))]),t._v(" "),t.isCurrentUser?e("NcButton",{attrs:{type:"primary",href:t.settingsUrl},scopedSlots:t._u([{key:"icon",fn:function(){return[e("PencilIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,4260349822)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("core","Edit Profile"))+"\n\t\t\t\t\t")]):t._e()],1),t._v(" "),t.status.icon||t.status.message?e("NcButton",{attrs:{disabled:!t.isCurrentUser,type:t.isCurrentUser?"tertiary":"tertiary-no-background"},on:{click:t.openStatusModal}},[t._v("\n\t\t\t\t\t"+t._s(t.status.icon)+" "+t._s(t.status.message)+"\n\t\t\t\t")]):t._e()],1)]),t._v(" "),e("div",{staticClass:"profile__wrapper"},[e("div",{staticClass:"profile__content"},[e("div",{staticClass:"profile__sidebar"},[e("NcAvatar",{staticClass:"avatar",class:{interactive:t.isCurrentUser},attrs:{user:t.userId,size:180,"show-user-status":!0,"show-user-status-compact":!1,"disable-menu":!0,"disable-tooltip":!0,"is-no-user":!t.isUserAvatarVisible},nativeOn:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openStatusModal.apply(null,arguments)}}}),t._v(" "),e("div",{staticClass:"user-actions"},[t.primaryAction?e("NcButton",{staticClass:"user-actions__primary",attrs:{type:"primary",href:t.primaryAction.target,icon:t.primaryAction.icon,target:"phone"===t.primaryAction.id?"_self":"_blank"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"user-actions__primary__icon",attrs:{src:t.primaryAction.icon,alt:""}})]},proxy:!0}],null,!1,1780240256)},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.primaryAction.title)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),e("NcActions",{staticClass:"user-actions__other",attrs:{inline:4}},t._l(t.otherActions,(function(n){return e("NcActionLink",{key:n.id,attrs:{"close-after-click":!0,href:n.target,target:"phone"===n.id?"_self":"_blank"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"user-actions__other__icon",attrs:{src:n.icon,alt:""}})]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t")])})),1)],1)],1),t._v(" "),e("div",{staticClass:"profile__blocks"},[t.organisation||t.role||t.address?e("div",{staticClass:"profile__blocks-details"},[t.organisation||t.role?e("div",{staticClass:"detail"},[e("p",[t._v(t._s(t.organisation)+" "),t.organisation&&t.role?e("span",[t._v("•")]):t._e(),t._v(" "+t._s(t.role))])]):t._e(),t._v(" "),t.address?e("div",{staticClass:"detail"},[e("p",[e("MapMarkerIcon",{staticClass:"map-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.address)+"\n\t\t\t\t\t\t\t")],1)]):t._e()]):t._e(),t._v(" "),t.headline||t.biography||t.sections.length>0?[t.headline?e("h3",{staticClass:"profile__blocks-headline"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.headline)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.biography?e("p",{staticClass:"profile__blocks-biography"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.biography)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t._l(t.sections,(function(n,a){return e("div",{key:a,ref:"section-"+a,refInFor:!0,staticClass:"profile__additionalContent"},[e(n(t.$refs["section-"+a],t.userId),{tag:"component",attrs:{"user-id":t.userId}})],1)}))]:e("NcEmptyContent",{staticClass:"profile__blocks-empty-info",attrs:{name:t.emptyProfileMessage,description:t.t("core","The headline and about sections will show up here")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("AccountIcon",{attrs:{size:60}})]},proxy:!0}])})],2)])])])],1)}),[],!1,null,"7f31168a",null).exports;n.nc=(0,a.aV)(),window.OCA||(window.OCA={}),window.OCA.Core||(window.OCA.Core={}),Object.assign(window.OCA.Core,{ProfileSections:new class{constructor(){var t,e,n;t=this,n=void 0,(e=function(t){var e=function(t){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:e+""}(e="_sections"))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,this._sections=[]}registerSection(t){this._sections.push(t)}getSections(){return this._sections}}});const G=i.Ay.extend($);window.addEventListener("DOMContentLoaded",(()=>{(new G).$mount("#content")}))},65494:(t,e,n)=>{n.d(e,{A:()=>s});var a=n(71354),i=n.n(a),r=n(76314),o=n.n(r)()(i());o.push([t.id,"[data-v-7f31168a] #app-content-vue{background-color:unset}.profile[data-v-7f31168a]{width:100%;overflow-y:auto}.profile__header[data-v-7f31168a]{position:sticky;height:190px;top:-40px;background-color:var(--color-main-background-blur);backdrop-filter:var(--filter-background-blur);-webkit-backdrop-filter:var(--filter-background-blur)}.profile__header__container[data-v-7f31168a]{align-self:flex-end;width:100%;max-width:1024px;margin:0 auto;display:grid;grid-template-rows:max-content max-content;grid-template-columns:240px 1fr;justify-content:center}.profile__header__container__placeholder[data-v-7f31168a]{grid-row:1/3}.profile__header__container__displayname[data-v-7f31168a]{padding-inline:16px;width:640px;height:45px;margin-block:100px 0;display:flex;align-items:center;gap:18px}.profile__header__container__displayname h2[data-v-7f31168a]{font-size:30px}.profile__sidebar[data-v-7f31168a]{position:sticky;top:0;align-self:flex-start;padding-top:20px;min-width:220px;margin-block:-150px 0;margin-inline:0 20px}.profile__sidebar[data-v-7f31168a] .avatar.avatardiv{text-align:center;margin:auto;display:block;padding:8px}.profile__sidebar[data-v-7f31168a] .avatar.avatardiv.interactive .avatardiv__user-status{cursor:pointer}.profile__sidebar[data-v-7f31168a] .avatar.avatardiv .avatardiv__user-status{inset-inline-end:14px;bottom:14px;width:34px;height:34px;background-size:28px;border:none;background-color:var(--color-main-background);line-height:34px;font-size:20px}.profile__wrapper[data-v-7f31168a]{background-color:var(--color-main-background);min-height:100%}.profile__content[data-v-7f31168a]{max-width:1024px;margin:0 auto;display:flex;width:100%}.profile__blocks[data-v-7f31168a]{margin:18px 0 80px 0;display:grid;gap:16px 0;width:640px}.profile__blocks p[data-v-7f31168a],.profile__blocks h3[data-v-7f31168a]{cursor:text;overflow-wrap:anywhere}.profile__blocks-details[data-v-7f31168a]{display:flex;flex-direction:column;gap:2px 0}.profile__blocks-details .detail[data-v-7f31168a]{display:inline-block;color:var(--color-text-maxcontrast)}.profile__blocks-details .detail p .map-icon[data-v-7f31168a]{display:inline-block;vertical-align:middle}.profile__blocks-headline[data-v-7f31168a]{margin-inline:0;margin-block:10px 0;font-weight:bold;font-size:20px}.profile__blocks-biography[data-v-7f31168a]{white-space:pre-line}@media only screen and (max-width: 1024px){.profile__header[data-v-7f31168a]{height:250px;position:unset}.profile__header__container[data-v-7f31168a]{grid-template-columns:unset}.profile__header__container__displayname[data-v-7f31168a]{margin:80px 20px 0px !important;height:1em;width:unset;display:unset;text-align:center}.profile__header__container__edit-button[data-v-7f31168a]{width:fit-content;display:block;margin:60px auto}.profile__header__container__status-text[data-v-7f31168a]{margin:4px auto}.profile__content[data-v-7f31168a]{display:block}.profile__blocks[data-v-7f31168a]{width:unset;max-width:600px;margin:0 auto;padding:20px 50px 50px 50px}.profile__sidebar[data-v-7f31168a]{margin:unset;position:unset}}.user-actions[data-v-7f31168a]{display:flex;flex-direction:column;gap:8px 0;margin-top:20px}.user-actions__primary[data-v-7f31168a]{margin:0 auto}.user-actions__primary__icon[data-v-7f31168a]{filter:var(--primary-invert-if-dark)}.user-actions__other[data-v-7f31168a]{display:flex;justify-content:center;gap:0 4px}.user-actions__other__icon[data-v-7f31168a]{height:20px;width:20px;object-fit:contain;filter:var(--background-invert-if-dark);align-self:center;margin:12px}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAIA,mCACC,sBAAA,CAGD,0BACC,UAAA,CACA,eAAA,CAEA,kCACC,eAAA,CACA,YAAA,CACA,SAAA,CACA,kDAAA,CACA,6CAAA,CACA,qDAAA,CAEA,6CACC,mBAAA,CACA,UAAA,CACA,gBAtBiB,CAuBjB,aAAA,CACA,YAAA,CACA,0CAAA,CACA,+BAAA,CACA,sBAAA,CAEA,0DACC,YAAA,CAGD,0DACC,mBAAA,CACA,WAlCgB,CAmChB,WAAA,CACA,oBAAA,CACA,YAAA,CACA,kBAAA,CACA,QAAA,CAEA,6DACC,cAAA,CAMJ,mCACC,eAAA,CACA,KAAA,CACA,qBAAA,CACA,gBAAA,CACA,eAAA,CACA,qBAAA,CACA,oBAAA,CAGA,qDACC,iBAAA,CACA,WAAA,CACA,aAAA,CACA,WAAA,CAGC,yFAEC,cAAA,CAIF,6EACC,qBAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,WAAA,CAEA,6CAAA,CACA,gBAAA,CACA,cAAA,CAKH,mCACC,6CAAA,CACA,eAAA,CAGD,mCACC,gBA7FkB,CA8FlB,aAAA,CACA,YAAA,CACA,UAAA,CAGD,kCACC,oBAAA,CACA,YAAA,CACA,UAAA,CACA,WAtGkB,CAwGlB,yEACC,WAAA,CACA,sBAAA,CAGD,0CACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,kDACC,oBAAA,CACA,mCAAA,CAEA,8DACC,oBAAA,CACA,qBAAA,CAKH,2CACC,eAAA,CACA,mBAAA,CACA,gBAAA,CACA,cAAA,CAGD,4CACC,oBAAA,CAKH,2CAEE,kCACC,YAAA,CACA,cAAA,CAEA,6CACC,2BAAA,CAEA,0DACC,+BAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CAGD,0DACC,iBAAA,CACA,aAAA,CACA,gBAAA,CAGD,0DACC,eAAA,CAKH,mCACC,aAAA,CAGD,kCACC,WAAA,CACA,eAAA,CACA,aAAA,CACA,2BAAA,CAGD,mCACC,YAAA,CACA,cAAA,CAAA,CAKH,+BACC,YAAA,CACA,qBAAA,CACA,SAAA,CACA,eAAA,CAEA,wCACC,aAAA,CAEA,8CACC,oCAAA,CAIF,sCACC,YAAA,CACA,sBAAA,CACA,SAAA,CAEA,4CACC,WAAA,CACA,UAAA,CACA,kBAAA,CACA,uCAAA,CACA,iBAAA,CACA,WAAA",sourcesContent:["\n$profile-max-width: 1024px;\n$content-max-width: 640px;\n\n:deep(#app-content-vue) {\n\tbackground-color: unset;\n}\n\n.profile {\n\twidth: 100%;\n\toverflow-y: auto;\n\n\t&__header {\n\t\tposition: sticky;\n\t\theight: 190px;\n\t\ttop: -40px;\n\t\tbackground-color: var(--color-main-background-blur);\n\t\tbackdrop-filter: var(--filter-background-blur);\n\t\t-webkit-backdrop-filter: var(--filter-background-blur);\n\n\t\t&__container {\n\t\t\talign-self: flex-end;\n\t\t\twidth: 100%;\n\t\t\tmax-width: $profile-max-width;\n\t\t\tmargin: 0 auto;\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-rows: max-content max-content;\n\t\t\tgrid-template-columns: 240px 1fr;\n\t\t\tjustify-content: center;\n\n\t\t\t&__placeholder {\n\t\t\t\tgrid-row: 1 / 3;\n\t\t\t}\n\n\t\t\t&__displayname {\n\t\t\t\tpadding-inline: 16px; // same as the status text button, see NcButton\n\t\t\t\twidth: $content-max-width;\n\t\t\t\theight: 45px;\n\t\t\t\tmargin-block: 100px 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tgap: 18px;\n\n\t\t\t\th2 {\n\t\t\t\t\tfont-size: 30px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__sidebar {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\talign-self: flex-start;\n\t\tpadding-top: 20px;\n\t\tmin-width: 220px;\n\t\tmargin-block: -150px 0;\n\t\tmargin-inline: 0 20px;\n\n\t\t// Specificity hack is needed to override Avatar component styles\n\t\t:deep(.avatar.avatardiv) {\n\t\t\ttext-align: center;\n\t\t\tmargin: auto;\n\t\t\tdisplay: block;\n\t\t\tpadding: 8px;\n\n\t\t\t&.interactive {\n\t\t\t\t.avatardiv__user-status {\n\t\t\t\t\t// Show that the status is interactive\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.avatardiv__user-status {\n\t\t\t\tinset-inline-end: 14px;\n\t\t\t\tbottom: 14px;\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tbackground-size: 28px;\n\t\t\t\tborder: none;\n\t\t\t\t// Styles when custom status icon and status text are set\n\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\tline-height: 34px;\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__wrapper {\n\t\tbackground-color: var(--color-main-background);\n\t\tmin-height: 100%;\n\t}\n\n\t&__content {\n\t\tmax-width: $profile-max-width;\n\t\tmargin: 0 auto;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\n\t&__blocks {\n\t\tmargin: 18px 0 80px 0;\n\t\tdisplay: grid;\n\t\tgap: 16px 0;\n\t\twidth: $content-max-width;\n\n\t\tp, h3 {\n\t\t\tcursor: text;\n\t\t\toverflow-wrap: anywhere;\n\t\t}\n\n\t\t&-details {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 2px 0;\n\n\t\t\t.detail {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcolor: var(--color-text-maxcontrast);\n\n\t\t\t\tp .map-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&-headline {\n\t\t\tmargin-inline: 0;\n\t\t\tmargin-block: 10px 0;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\t&-biography {\n\t\t\twhite-space: pre-line;\n\t\t}\n\t}\n}\n\n@media only screen and (max-width: 1024px) {\n\t.profile {\n\t\t&__header {\n\t\t\theight: 250px;\n\t\t\tposition: unset;\n\n\t\t\t&__container {\n\t\t\t\tgrid-template-columns: unset;\n\n\t\t\t\t&__displayname {\n\t\t\t\t\tmargin: 80px 20px 0px!important;\n\t\t\t\t\theight: 1em;\n\t\t\t\t\twidth: unset;\n\t\t\t\t\tdisplay: unset;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t&__edit-button {\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 60px auto;\n\t\t\t\t}\n\n\t\t\t\t&__status-text {\n\t\t\t\t\tmargin: 4px auto;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t&__blocks {\n\t\t\twidth: unset;\n\t\t\tmax-width: 600px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 20px 50px 50px 50px;\n\t\t}\n\n\t\t&__sidebar {\n\t\t\tmargin: unset;\n\t\t\tposition: unset;\n\t\t}\n\t}\n}\n\n.user-actions {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px 0;\n\tmargin-top: 20px;\n\n\t&__primary {\n\t\tmargin: 0 auto;\n\n\t\t&__icon {\n\t\t\tfilter: var(--primary-invert-if-dark);\n\t\t}\n\t}\n\n\t&__other {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 0 4px;\n\n\t\t&__icon {\n\t\t\theight: 20px;\n\t\t\twidth: 20px;\n\t\t\tobject-fit: contain;\n\t\t\tfilter: var(--background-invert-if-dark);\n\t\t\talign-self: center;\n\t\t\tmargin: 12px; // so we get 44px x 44px\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=o}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return a[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=a,t=[],r.O=(e,n,a,i)=>{if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],i=t[c][2];for(var s=!0,A=0;A<n.length;A++)(!1&i||o>=i)&&Object.keys(r.O).every((t=>r.O[t](n[A])))?n.splice(A--,1):(s=!1,i<o&&(o=i));if(s){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,a,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+"-"+t+".js?v="+{802:"eddac441912aee9d7aa8",9291:"077955af818a227340aa"}[t],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},n="nextcloud:",r.l=(t,a,i,o)=>{if(e[t])e[t].push(a);else{var s,A;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+i){s=d;break}}s||(A=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",n+i),s.src=t),e[t]=[a];var p=(n,a)=>{s.onerror=s.onload=null,clearTimeout(C);var i=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((t=>t(a))),n)return n(a)},C=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),A&&document.head.appendChild(s)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=1390,(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=n[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{r.b=document.baseURI||self.location.href;var t={1390:0};r.f.j=(e,n)=>{var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(((n,i)=>a=t[e]=[n,i]));n.push(a[2]=i);var o=r.p+r.u(e),s=new Error;r.l(o,(n=>{if(r.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}}),"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,n)=>{var a,i,o=n[0],s=n[1],A=n[2],l=0;if(o.some((e=>0!==t[e]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(A)var c=A(r)}for(e&&e(n);l<o.length;l++)i=o[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[4208],(()=>r(88213)));o=r.O(o)})();
//# sourceMappingURL=core-profile.js.map?v=09cdb6621fa1dc844763