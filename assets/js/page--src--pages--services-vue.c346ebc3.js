(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{312:function(t,e,i){},314:function(t,e,i){"use strict";var s=i(312);i.n(s).a},315:function(t,e,i){"use strict";var s={props:{pretitle:String}},n=(i(314),i(10)),r=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title"},[this.$props.pretitle?e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$props.pretitle)}}):this._e(),e("h1",[this._t("default")],2)])}),[],!1,null,null,null);e.a=r.exports},320:function(t,e,i){},321:function(t,e,i){},322:function(t,e){},333:function(t,e,i){"use strict";var s=i(320);i.n(s).a},334:function(t,e,i){"use strict";var s=i(321);i.n(s).a},335:function(t,e,i){"use strict";var s=i(322),n=i.n(s);e.default=n.a},345:function(t,e,i){"use strict";i.r(e);var s={props:{service:Object},data:function(){return{hover:!1}},computed:{mailto:function(){return"mailto:".concat(this.service.contact)}}},n=(i(333),i(10)),r={metaInfo:{title:"Services incubés"},components:{ServiceCard:Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"service-card-container",on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[i("g-link",{attrs:{to:t.service.link}},[i("div",{staticClass:"service-card"},[i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"title",domProps:{innerHTML:t._s(t.service.title)}}),t.hover?i("font-awesome",{staticClass:"icon",attrs:{height:"1.5rem",width:"1.5rem",icon:["fas","external-link-alt"]}}):t._e(),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mission",domProps:{innerHTML:t._s(t.service.mission)}}),i("div",{staticClass:"icon-links"},[t.service.contact?i("g-link",{attrs:{to:t.mailto}},[i("font-awesome",{attrs:{icon:["far","envelope"]}})],1):t._e(),t.service.repository?i("g-link",{attrs:{to:t.service.repository}},[i("font-awesome",{attrs:{icon:["fab","github"]}})],1):t._e(),t.service.stats_url?i("g-link",{attrs:{to:t.service.stats_url}},[i("font-awesome",{attrs:{icon:["far","chart-bar"]}})],1):t._e()],1)],1)])],1)}),[],!1,null,null,null).exports,PageTitle:i(315).a}},a=(i(334),i(335)),c=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"services"},[e("PageTitle",[this._v("\n      Services incubés\n    ")]),e("div",{staticClass:"px-4 services-cards"},this._l(this.$page.services.edges,(function(t){var i=t.node;return e("ServiceCard",{key:i.id,attrs:{service:i}})})),1)],1)])}),[],!1,null,null,null);"function"==typeof a.default&&Object(a.default)(c);e.default=c.exports}}]);