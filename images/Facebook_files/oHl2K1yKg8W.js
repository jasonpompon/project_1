if (self.CavalryLogger) { CavalryLogger.start_js(["lhrVn"]); }

__d("LocaleSwitchingReferrers",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CARRY_LOGOUT_LOGIN:"carry_logout_login",FB4B_GLOBAL_SITES_DIALOG:"fb4b_global_sites_dialog",FB4B_GLOBAL_SITES_FOOTER:"fb4b_global_sites_footer",LOCALE_SWITCH_SCRIPT:"locale_switch_script",M_TOUCH_LOCALE_SELECTOR:"m_touch_locale_selector",SAFETY_CENTER_GLOBAL_SITES_FOOTER:"fbsc_global_sites_footer",SITEMAP:"sitemap",QP_PROMO:"qp_promo",WWW_ACCOUNT_SETTINGS:"www_account_settings",WWW_CARD_SELECTOR:"www_card_selector",WWW_CARD_SELECTOR_MORE:"www_card_selector_more",WWW_DEV_SITE:"www_dev_site",WWW_HELP_INLINE_SELECTOR:"www_help_inline_selector",WWW_I18N_NUB:"www_i18n_nub",WWW_LANGUAGE_PAGE:"www_language_page",WWW_LINK_DIALOG_SELECTOR:"www_link_dialog_selector",WWW_LIST_SELECTOR:"www_list_selector",WWW_LIST_SELECTOR_MORE:"www_list_selector_more",WWW_TRANS_APP_INCONSISTENT:"www_trans_app_inconsistent",FBCOLUMN_FOOTER:"fbcolumn_footer",WWW_LOGIN_BLUE_BAR:"www_login_blue_bar_nub",OTHER:"other"};}),null);
__d("ModuleDependencies",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l,m,n){var o=c.__debug.modulesMap[n],p=c.__debug.deps;if(m[n])return;m[n]=true;if(!o){p[n]&&(l[n]=true);return;}if(!o.dependencies||!o.dependencies.length){if(o.waiting)l[n]=true;return;}o.dependencies.forEach(function(q){h(l,m,q);});}function i(l){if(c.__debug){var m={};h(m,{},l);var n=Object.keys(m);n.sort();return n;}return null;}function j(){var l={loading:{},missing:[]};if(!c.__debug)return l;var m={},n=c.__debug.getModules(),o=c.__debug.deps;for(var p in n){var q=n[p];if(q.waiting){var r={};h(r,{},q.id);delete r[q.id];l.loading[q.id]=Object.keys(r);l.loading[q.id].sort();l.loading[q.id].forEach(function(s){if(!(s in n)&&o[s])m[s]=1;});}}l.missing=Object.keys(m);l.missing.sort();return l;}var k={setRequireDebug:function l(m){c.__debug=m;},getMissing:i,getNotLoadedModules:j};f.exports=k;}),null);
__d('ModuleErrorLogger',['Bootloader','ErrorUtils','ModuleDependencies','BanzaiScuba'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(k){if(!k||!k.length)return 0;return k.reduce(function(l,m){return l+m;})/k.length;}function i(k){if(!k)return [];var l=[];for(var m in k)l.push(k[m]);return l;}var j={init:function k(){c('ErrorUtils').addListener(function(l){if(l.name!=='ModuleError')return;var m=c('ModuleDependencies').getNotLoadedModules(),n=Object.keys(m.loading),o=i(c('Bootloader').getLoadingUrls()),p=i(c('Bootloader').getLoadedUrlTimes()),q={};m.missing.forEach(function(t){q[t]=1;});var r={};n.forEach(function(t){r[t]=1;});var s=new (c('BanzaiScuba'))('module_errors',null,{addAsnFields:true,addPredictedGeographyFields:true,addBrowserFields:true,addMobileDeviceFields:true,addPageFields:true,addUserFields:true});s.addNormal('message',l.message).addInteger('missing_count',m.missing.length).addInteger('loading_count',n.length).addInteger('error_url_count',c('Bootloader').getErrorUrls().length).addTagset('missing_modules',q).addTagset('loading_modules',r).addInteger('mean_url_loading_time',Math.floor(h(o))).addInteger('mean_url_loaded_time',Math.floor(h(p))).post();},true);}};f.exports=j;}),null);
__d('ResetScrollOnUnload',['Run'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={disableScrollRestoration:function i(){c('Run').onUnload(function(){window.history.scrollRestoration='manual';});},init:function i(j){c('Run').onUnload(function(){window.history.scrollRestoration='manual';j.style.opacity='0';window.scrollTo(0,0);});}};f.exports=h;}),null);
__d('AccessibilityWebAssistiveTechTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig',this.$AccessibilityWebAssistiveTechTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$AccessibilityWebAssistiveTechTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1=babelHelpers['extends']({},this.$AccessibilityWebAssistiveTechTypedLogger1,j);return this;};h.prototype.setIndicatedBrowsers=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1.indicated_browsers=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setIsVirtualCursorAction=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1.is_virtual_cursor_action=j;return this;};h.prototype.setVC=function(j){this.$AccessibilityWebAssistiveTechTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$AccessibilityWebAssistiveTechTypedLogger1=babelHelpers['extends']({},this.$AccessibilityWebAssistiveTechTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={indicated_browsers:true,is_virtual_cursor_action:true,vc:true};f.exports=h;}),null);
__d('AccessibilityWebVirtualCursorClickLogger',['AccessibilityWebAssistiveTechTypedLogger','VirtualCursorStatus'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j){j.forEach(function(k){c('VirtualCursorStatus').add(k,this._log);}.bind(this),this);},_log:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?false:arguments[2];if(j)new (c('AccessibilityWebAssistiveTechTypedLogger'))().setIndicatedBrowsers(k).setIsVirtualCursorAction(l).log();}};f.exports=h;}),null);
__d('BootloaderEventsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('bootloader_events:BootloaderEventsLoggerConfig',this.$BootloaderEventsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('bootloader_events:BootloaderEventsLoggerConfig',this.$BootloaderEventsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$BootloaderEventsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$BootloaderEventsTypedLogger1=babelHelpers['extends']({},this.$BootloaderEventsTypedLogger1,j);return this;};h.prototype.setAllResourcesCount=function(j){this.$BootloaderEventsTypedLogger1.all_resources_count=j;return this;};h.prototype.setAllResourcesDownloaded=function(j){this.$BootloaderEventsTypedLogger1.all_resources_downloaded=j;return this;};h.prototype.setAsyncResourcesCount=function(j){this.$BootloaderEventsTypedLogger1.async_resources_count=j;return this;};h.prototype.setAsyncResourcesDownloaded=function(j){this.$BootloaderEventsTypedLogger1.async_resources_downloaded=j;return this;};h.prototype.setBlEndpointMode=function(j){this.$BootloaderEventsTypedLogger1.bl_endpoint_mode=j;return this;};h.prototype.setBlSampleRate=function(j){this.$BootloaderEventsTypedLogger1.bl_sample_rate=j;return this;};h.prototype.setBlockingResourcesCount=function(j){this.$BootloaderEventsTypedLogger1.blocking_resources_count=j;return this;};h.prototype.setBlockingResourcesDownloaded=function(j){this.$BootloaderEventsTypedLogger1.blocking_resources_downloaded=j;return this;};h.prototype.setCavalryBlCohort=function(j){this.$BootloaderEventsTypedLogger1.cavalry_bl_cohort=j;return this;};h.prototype.setCavalryCohort=function(j){this.$BootloaderEventsTypedLogger1.cavalry_cohort=j;return this;};h.prototype.setComponents=function(j){this.$BootloaderEventsTypedLogger1.components=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setDuration=function(j){this.$BootloaderEventsTypedLogger1.duration=j;return this;};h.prototype.setErrCount=function(j){this.$BootloaderEventsTypedLogger1.err_count=j;return this;};h.prototype.setFirstIdenticalRequest=function(j){this.$BootloaderEventsTypedLogger1.first_identical_request=j;return this;};h.prototype.setHasNewComponent=function(j){this.$BootloaderEventsTypedLogger1.has_new_component=j;return this;};h.prototype.setIsEmployee=function(j){this.$BootloaderEventsTypedLogger1.is_employee=j;return this;};h.prototype.setMsSinceNavstart=function(j){this.$BootloaderEventsTypedLogger1.ms_since_navstart=j;return this;};h.prototype.setPkgCohort=function(j){this.$BootloaderEventsTypedLogger1.pkg_cohort=j;return this;};h.prototype.setRef=function(j){this.$BootloaderEventsTypedLogger1.ref=j;return this;};h.prototype.setRequestPath=function(j){this.$BootloaderEventsTypedLogger1.request_path=j;return this;};h.prototype.setRetries=function(j){this.$BootloaderEventsTypedLogger1.retries=j;return this;};h.prototype.setSvnRev=function(j){this.$BootloaderEventsTypedLogger1.svn_rev=j;return this;};h.prototype.setTimesliceContext=function(j){this.$BootloaderEventsTypedLogger1.timeslice_context=j;return this;};h.prototype.setVC=function(j){this.$BootloaderEventsTypedLogger1.vc=j;return this;};h.prototype.setWeight=function(j){this.$BootloaderEventsTypedLogger1.weight=j;return this;};var i={all_resources_count:true,all_resources_downloaded:true,async_resources_count:true,async_resources_downloaded:true,bl_endpoint_mode:true,bl_sample_rate:true,blocking_resources_count:true,blocking_resources_downloaded:true,cavalry_bl_cohort:true,cavalry_cohort:true,components:true,duration:true,err_count:true,first_identical_request:true,has_new_component:true,is_employee:true,ms_since_navstart:true,pkg_cohort:true,ref:true,request_path:true,retries:true,svn_rev:true,timeslice_context:true,vc:true,weight:true};f.exports=h;}),null);
__d('performanceNavigationStart',['performance'],(function a(b,c,d,e,f,g){var h;if(c.__markCompiled)c.__markCompiled();var i=void 0;if(c('performance').now){if(c('performance').timing&&c('performance').timing.navigationStart){i=function j(){return c('performance').timing.navigationStart;};}else if(typeof window._cstart==='number'){i=function j(){return window._cstart;};}else (function(){var j=Date.now();i=function k(){return j;};})();}else i=function j(){return 0;};f.exports=i;}),null);
__d('BootloaderLoggerUtil',['Arbiter','Bootloader','BootloaderEventsTypedLogger','CurrentUser','ScriptPath','SiteData','performanceNavigationStart'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i={initLogging:function j(k){if(h)return;h=c('Arbiter').subscribe(c('Bootloader').Events.BOOTLOAD,function(l,m){var n=m.start_time,o=babelHelpers.objectWithoutProperties(m,['start_time']),p=Math.round(n-c('performanceNavigationStart')());new (c('BootloaderEventsTypedLogger'))().setMsSinceNavstart(p).setCavalryCohort(k.cavalry_cohort).setPkgCohort(c('SiteData').pkg_cohort).setWeight(k.sample_rate).setIsEmployee(c('CurrentUser').isEmployee()).setSvnRev(c('SiteData').revision).setBlEndpointMode(c('SiteData').be_mode).setRequestPath(c('ScriptPath').getScriptPath()).setCavalryBlCohort(k.cavalry_bl_cohort).setBlSampleRate(k.bl_sample_rate).updateData(o).log();});}};f.exports=i;}),null);
__d('DetectBrokenProxyCache',['AsyncSignal','Cookie','URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=c('Cookie').get(j);if(k!=i&&k!=null&&i!='0'){var l={c:'si_detect_broken_proxy_cache',m:j+' '+i+' '+k},m=new (c('URI'))('/common/scribe_endpoint.php').getQualifiedURI().toString();new (c('AsyncSignal'))(m,l).send();}}f.exports={run:h};}),null);
__d('LoggedOutSwitchingLocaleTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig',this.$LoggedOutSwitchingLocaleTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig',this.$LoggedOutSwitchingLocaleTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$LoggedOutSwitchingLocaleTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1=babelHelpers['extends']({},this.$LoggedOutSwitchingLocaleTypedLogger1,j);return this;};h.prototype.setIndex=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.index=j;return this;};h.prototype.setNewLocale=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.new_locale=j;return this;};h.prototype.setOldLocale=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.old_locale=j;return this;};h.prototype.setReferrer=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.referrer=j;return this;};var i={index:true,new_locale:true,old_locale:true,referrer:true};f.exports=h;}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/intl\/ajax\/save_locale\/",{});}),null);
__d('IntlUtils',['AsyncRequest','Cookie','LocaleSwitchingReferrers','LoggedOutSwitchingLocaleTypedLogger','ReloadPage','XIntlAccountSetLocaleAsyncController','goURI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={setXmode:function i(j){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({xmode:j}).setHandler(function(){c('ReloadPage').now();}).send();},setAmode:function i(j){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({amode:j,app:false}).setHandler(function(){c('ReloadPage').now();}).send();},setRmode:function i(j){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({rmode:j}).setHandler(function(){c('ReloadPage').now();}).send();},setLocale:function i(j,k,l,m){if(!l)l=j.options[j.selectedIndex].value;var n=c('XIntlAccountSetLocaleAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(n).setData({loc:l,ref:k,should_redirect:false}).setHandler(function(o){c('ReloadPage').now();}).send();},setCookieLocale:function i(j,k,l){var m=arguments.length<=3||arguments[3]===undefined?c('LocaleSwitchingReferrers').OTHER:arguments[3],n=arguments.length<=4||arguments[4]===undefined?null:arguments[4];c('Cookie').set('locale',j,7*24*3600000);new (c('LoggedOutSwitchingLocaleTypedLogger'))().setNewLocale(j).setOldLocale(k).setIndex(n).setReferrer(m).log();c('goURI')(l);}};f.exports=h;}),null);
__d('legacy:intl-base',['IntlUtils'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.intl_set_xmode=c('IntlUtils').setXmode;b.intl_set_amode=c('IntlUtils').setAmode;b.intl_set_rmode=c('IntlUtils').setRmode;b.intl_set_locale=c('IntlUtils').setLocale;}),3);
__d('legacy:onload-action',['PageHooks'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b._domreadyHook=c('PageHooks')._domreadyHook;b._onloadHook=c('PageHooks')._onloadHook;b.runHook=c('PageHooks').runHook;b.runHooks=c('PageHooks').runHooks;b.keep_window_set_as_loaded=c('PageHooks').keepWindowSetAsLoaded;}),3);
__d('FlipDirection',['DOM','Input','Style'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={setDirection:function i(j){var k=c('DOM').isNodeOfType(j,'input')&&j.type=='text',l=c('DOM').isNodeOfType(j,'textarea');if(!(k||l)||j.getAttribute('data-prevent-auto-flip'))return;var m=c('Input').getValue(j),n=j.style&&j.style.direction;if(!n){var o=0,p=true;for(var q=0;q<m.length;q++){var r=m.charCodeAt(q);if(r>=48){if(p){p=false;o++;}if(r>=1470&&r<=1920){c('Style').set(j,'direction','rtl');j.setAttribute('dir','rtl');return;}if(o==5){c('Style').set(j,'direction','ltr');j.setAttribute('dir','ltr');return;}}else p=true;}}else if(m.length===0){c('Style').set(j,'direction','');j.removeAttribute('dir');}}};f.exports=h;}),null);
__d('FlipDirectionOnKeypress',['Event','FlipDirection'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function i(event){var j=event.getTarget();c('FlipDirection').setDirection(j);};c('Event').listen(document.documentElement,{keyup:h,input:h});}),null);
__d('FourOhFourJSTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:FourOhFourJSLoggerConfig',this.$FourOhFourJSTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:FourOhFourJSLoggerConfig',this.$FourOhFourJSTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$FourOhFourJSTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$FourOhFourJSTypedLogger1=babelHelpers['extends']({},this.$FourOhFourJSTypedLogger1,j);return this;};h.prototype.setFbid=function(j){this.$FourOhFourJSTypedLogger1.fbid=j;return this;};h.prototype.setOriginalURI=function(j){this.$FourOhFourJSTypedLogger1.original_uri=j;return this;};h.prototype.setScriptPath=function(j){this.$FourOhFourJSTypedLogger1.script_path=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$FourOhFourJSTypedLogger1=babelHelpers['extends']({},this.$FourOhFourJSTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={fbid:true,original_uri:true,script_path:true};f.exports=h;}),null);
__d('AccessibilityLogger',['AsyncSignal','Cookie'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function i(){var j=h.DEFAULT,k=c('Cookie').get(h.COOKIE);if(k){k=JSON.parse(k);for(var l in j)if(l in k)j[l]=k[l];}return j;},logKey:function i(j,k){var l=h.getCookie();l[j]++;var m=Date.now();if(m-l[j+'-ts']>h.DECAY_MS){new (c('AsyncSignal'))('/ajax/accessibilitylogging',{eventName:k,times_pressed:l[j]}).send();l[j+'-ts']=m;l[j]=0;}c('Cookie').set(h.COOKIE,JSON.stringify(l));},logHCM:function i(){h.logKey('hcm','hcm_users');},logSRKey:function i(){h.logKey('sr','sr_users');},logJKKey:function i(){h.logKey('jk','jk_users');},logFocusIn:function i(){h.logKey('kb','kb_users');}};f.exports=h;}),null);
__d('AsyncRequestNectarLogging',['AsyncRequest','Nectar'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();Object.assign(c('AsyncRequest').prototype,{setNectarModuleData:function h(i){if(this.method=='POST')c('Nectar').addModuleData(this.data,i);}});}),null);
__d('ClickRefUtils',['DataAttributeUtils'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={get_intern_ref:function i(j){if(!!j){var k={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var l=j;l&&l!=document.body;l=l.parentNode){if(!l.id||typeof l.id!=='string')continue;if(l.id.substr(0,8)=='pagelet_')return l.id.substr(8);if(l.id.substr(0,8)=='box_app_')return l.id;if(k[l.id])return l.id;}}return '-';},get_href:function i(j){var k=j.getAttribute&&(j.getAttribute('ajaxify')||j.getAttribute('data-endpoint'))||j.action||j.href||j.name;return typeof k==='string'?k:null;},should_report:function i(j,k){if(k=='FORCE')return true;if(k=='INDIRECT')return false;return j&&(h.get_href(j)||j.getAttribute&&c('DataAttributeUtils').getDataFt(j));}};f.exports=h;}),null);
__d("setUECookie",["Env"],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){if(!c("Env").no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}f.exports=h;}),null);
__d('ClickRefLogger',['Arbiter','Banzai','ClickRefUtils','Env','ScriptPath','SessionName','Vector','$','collectDataAttributes','ge','pageID','setUECookie'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={delay:0,retry:true};function i(m){if(!c('ge')('content'))return [0,0,0,0];var n=c('$')('content'),o=c('Vector').getEventPosition(m);return [o.x,o.y,n.offsetLeft,n.clientWidth];}function j(m,n,event,o){var p='r',q=[0,0,0,0],r,s;if(!!event){r=event.type;if(r=='click'&&c('ge')('content'))q=i(event);var t=0;event.ctrlKey&&(t+=1);event.shiftKey&&(t+=2);event.altKey&&(t+=4);event.metaKey&&(t+=8);if(t)r+=t;}if(!!n)s=c('ClickRefUtils').get_href(n);var u=c('collectDataAttributes')(!!event?event.target||event.srcElement:n,['ft','gt']);Object.assign(u.ft,o.ft);Object.assign(u.gt,o.gt);if(typeof u.ft.ei==='string')delete u.ft.ei;var v=[m._ue_ts,m._ue_count,s||'-',m._context,r||'-',c('ClickRefUtils').get_intern_ref(n),p,b.URI?b.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,u].concat(q).concat(c('pageID')).concat(c('ScriptPath').getScriptPath());return v;}c('Arbiter').subscribe("ClickRefAction/new",function(m,n){if(c('ClickRefUtils').should_report(n.node,n.mode)){var o=j(n.cfa,n.node,n.event,n.extra_data);c('setUECookie')(n.cfa.ue);var p=[c('SessionName').getName(),Date.now(),'act'];c('Banzai').post('click_ref_logger',Array.prototype.concat(p,o),h);}});function k(m){function n(v){var w='';for(var x=0;x<v.length;x++)w+=String.fromCharCode(1^v.charCodeAt(x));return w;}function o(v,w,x,y){var z=w[x];if(z&&v&&z in v)if(x+1<w.length){o(v[z],w,x+1,y);}else{var aa=v[z],ba=function ca(){setTimeout(y.bind(null,arguments));return aa.apply(this,arguments);};ba.toString=aa.toString.bind(aa);Object.defineProperty(v,z,{configurable:false,writable:true,value:ba});}}var p={},q={},r=false;function s(v,w){if(q[v])return;q[v]=p[v]=1;}var t=m[n('jiri')];if(t){var u=[];n(t).split(',').map(function(v,w){var x=v.substring(1).split(':'),y;switch(v.charAt(0)){case '1':y=new RegExp('\\b('+x[0]+')\\b','i');u.push(function(z){var aa=y.exec(Object.keys(window));if(aa)s(w,''+aa);});break;case '2':y=new RegExp(x[0]);o(window,x,2,function(z){var aa=z[x[1]];if(typeof aa==='string'&&y.test(aa))s(w,v);});break;case '3':o(window,x,0,function(){for(var z=u.length;z--;)u[z]();var aa=Object.keys(p);if(aa.length){p={};setTimeout(c('Banzai')[n('qnru')].bind(c('Banzai'),n('islg'),{m:''+aa}),5000);}});break;case '4':r=true;break;}});}}try{k(c('Env'));}catch(l){}}),null);
__d('DimensionTracking',['Cookie','Event','debounce','getViewportDimensions','isInIframe'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){var i=c('getViewportDimensions')();c('Cookie').set('wd',i.width+'x'+i.height);}if(!c('isInIframe')()){setTimeout(h,100);c('Event').listen(window,'resize',c('debounce')(h,250));c('Event').listen(window,'focus',h);}}),null);
__d('FourOhFourJSLogger',['FourOhFourJSTypedLogger','ScriptPath'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={log:function i(){window.onload=function(){var j=new (c('FourOhFourJSTypedLogger'))();j.setOriginalURI(window.location.href);j.setScriptPath(c('ScriptPath').getScriptPath());j.logVital();};}};f.exports=h;}),null);
__d('HighContrastMode',['AccessibilityLogger','CSS','CurrentUser','DOM','Style','URI','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j){var k=new (c('URI'))(window.location.href);if(k.getPath().indexOf('/intern/')===0)return;if(window.top!==window.self)return;var l=c('DOM').create('div');c('DOM').appendContent(document.body,l);l.style.cssText='border: 1px solid !important;'+'border-color: red green !important;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+j.spacerImage+') !important;';var m=c('Style').get(l,'background-image'),n=c('Style').get(l,'border-top-color'),o=c('Style').get(l,'border-right-color'),p=n==o&&m&&(m=='none'||m=='url(invalid-url:)');if(p){c('CSS').conditionClass(document.documentElement,'highContrast',p);if(c('CurrentUser').getID())c('AccessibilityLogger').logHCM();}c('DOM').remove(l);h.init=c('emptyFunction');}};f.exports=h;}),null);
__d('StringTransformations',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={unicodeEscape:function h(i){return i.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(j){var k=j.charCodeAt().toString(16);return '\\u'+('0000'+k.toUpperCase()).slice(-4);});},unicodeUnescape:function h(i){return i.replace(/(\\u[0-9A-Fa-f]{4})/g,function(j){return String.fromCharCode(parseInt(j.slice(2),16));});}};}),null);
__d('TimeSpentArray',['Banzai','pageID','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=2,i=h*32,j,k,l,m,n,o,p,q,r,s={},t;function u(){return {timeoutDelayMap:s,nextDelay:t,timeoutInSeconds:l};}function v(){if(j){var da=Date.now();if(da>n)p=Math.min(i,Math.ceil(da/1000-m));var ea=aa();if(ea)j(ea,t);}z();}function w(){x();k=c('setTimeoutAcrossTransitions')(v,l*1000);}function x(){if(k){clearTimeout(k);k=null;}}function y(da){m=da;n=m*1000;o=[1];for(var ea=1;ea<h;ea++)o.push(0);p=1;q+=1;r+=1;var fa=r.toString()+'_delay';t=s[fa];if(t===undefined)t=s.delay;var ga=r.toString()+'_timeout',ha=s[ga];if(ha===undefined)ha=s.timeout;ha=Math.min(ha,i);l=ha||i;w();}function z(){x();o=null;}function aa(){if(!o)return null;return {tos_id:c('pageID'),start_time:m,tos_array:o.slice(0),tos_len:p,tos_seq:r,tos_cum:q};}function ba(da){if(da>=n&&da-n<1000)return;ca(Math.floor(da/1000));}function ca(da){var ea=da-m;if(ea<0||ea>=i)v();if(!o){y(da);}else{o[ea>>5]|=1<<(ea&31);p=ea+1;q+=1;n=da*1000;}}f.exports={init:function da(ea,fa,ga){q=0;r=-1;j=ea;if(typeof fa=='object'&&fa!==null){s=fa;}else s={};if(!ga)ga=Date.now();y(Math.floor(ga/1000));c('Banzai').subscribe(c('Banzai').SHUTDOWN,v);},update:function da(ea){ba(ea);},get:function da(){return aa();},ship:function da(){v();},reset:function da(){z();},testState:function da(){return u();}};}),null);
__d('TimeSpentImmediateActiveSecondsLogger',['Banzai','ImmediateActiveSecondsConfig','ScriptPath'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='immediate_active_seconds',i={signal:true,retry:true},j=c('ImmediateActiveSecondsConfig').sampling_rate,k=c('ImmediateActiveSecondsConfig').ias_bucket,l=0;function m(q){if(j<=0)return false;var r=Math.floor(q/1000)%j;return r===k;}function n(q){if(q>=l&&q-l<1000)return;if(m(q)){var r={activity_time_ms:q,last_activity_time_ms:l,script_path:c('ScriptPath').getTopViewEndpoint()};try{c('Banzai').post(h,r,i);}catch(s){}}l=Math.floor(q/1000)*1000;}function o(event,q,r){if(s<0||t<0||s>t)return;var s=Math.floor(q/1000),t=Math.floor(r/1000);if(!p(s,t))return;var u={event:event,start_time_ms:q,end_time_ms:r};c('Banzai').post(h,u,i);}function p(q,r){if(j<=0)return false;if(r-q>=j)return true;var s=q+(k-q%j+j)%j;return s<=r;}f.exports={maybeReportActiveSecond:n,maybeReportActiveInterval:o};}),null);
__d('TimeSpentBitArrayLogger',['Arbiter','Banzai','BanzaiODS','TimeSpentArray','TimeSpentConfig','TimeSpentImmediateActiveSecondsLogger','UserActivity','isInIframe'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={delay:c('Banzai').BASIC.delay,retry:true};function i(j,k){c('Arbiter').inform('timespent/tosbitdataposted',babelHelpers['extends']({},j));if(typeof k=='number'){h.delay=k;}else h.delay=c('Banzai').BASIC.delay;c('Banzai').post('time_spent_bit_array',babelHelpers['extends']({},j),h);h.delay=c('TimeSpentConfig').delay;}f.exports={init:function j(k){if(c('isInIframe')())return;c('UserActivity').subscribe(function(m,n){var o=n.last_inform;c('TimeSpentArray').update(o);c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(o);});var l=Date.now();c('TimeSpentArray').init(i,c('TimeSpentConfig'),l);c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(l);c('BanzaiODS').bumpEntityKey('ms.time_spent.qa.www','time_spent.bits.js_initialized');}};}),null);
__d('UserActionHistory',['Arbiter','ClickRefUtils','ScriptPath','throttle','WebStorage'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={click:1,submit:1},i=false,j={log:[],len:0},k=c('throttle').acrossTransitions(function(){try{i._ua_log=JSON.stringify(j);}catch(n){i=false;}},1000);function l(){var n=c('WebStorage').getSessionStorage();if(n){i=n;i._ua_log&&(j=JSON.parse(i._ua_log));}else i=false;j.log[j.len%10]={ts:Date.now(),path:'-',index:j.len,type:'init',iref:'-'};j.len++;c('Arbiter').subscribe("UserAction/new",function(o,p){var q=p.ua,r=p.node,event=p.event;if(!event||!(event.type in h))return;var s={path:c('ScriptPath').getScriptPath(),type:event.type,ts:q._ue_ts,iref:c('ClickRefUtils').get_intern_ref(r)||'-',index:j.len};j.log[j.len++%10]=s;i&&k();});}function m(){return j.log.sort(function(n,o){return o.ts!=n.ts?o.ts-n.ts:o.index-n.index;});}l();f.exports={getHistory:m};}),null);
__d('KappaWrapper',['AsyncSignal','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;f.exports={forceStart:function i(j,k,l){var m=0,n=function o(){new (c('AsyncSignal'))('/si/kappa/',{Ko:"a"}).send();if(++m<j)c('setTimeoutAcrossTransitions')(o,k*1000);};c('setTimeoutAcrossTransitions')(n,(k+l)*1000);},start:function i(j,k,l){if(!h){h=true;this.forceStart(j,k,l);}}};}),null);
__d('Chromedome',['fbt'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();g.start=function(i){if(i.off||top!==window||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;var j=i.stop||h._("Stop!"),k=i.text||h._("This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account."),l=i.more||h._("See {url} for more information.",[h.param('url','https://www.facebook.com/selfxss')]);if((window.chrome||window.safari)&&!i.textonly){var m='font-family:helvetica; font-size:20px; ';[[j,i.c1||m+'font-size:50px; font-weight:bold; '+'color:red; -webkit-text-stroke:1px black;'],[k,i.c2||m],[l,i.c3||m],['','']].map(function(s){setTimeout(console.log.bind(console,'\n%c'+s[0],s[1]));});}else{var n=['',' .d8888b.  888                       888','d88P  Y88b 888                       888','Y88b.      888                       888',' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P','Y88b  d88P Y88b.  Y88..88P 888 d88P',' "Y8888P"   "Y888  "Y88P"  88888P"   888','                           888','                           888','                           888'],o=(''+k).match(/.{35}.+?\s+|.+$/g),p=Math.floor(Math.max(0,(n.length-o.length)/2));for(var q=0;q<n.length||q<o.length;q++){var r=n[q];n[q]=r+new Array(45-r.length).join(' ')+(o[q-p]||'');}console.log('\n\n\n'+n.join('\n')+'\n\n'+l+'\n');return;}};}),null);
__d('NavigationClickPointHandler',['Event','ScriptPath','collectDataAttributes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getClickPointInfo:function j(k){var l=null,m=c('collectDataAttributes')(k,['ft'],['href','data-click']),n=m.normal.href;if(!n||n==='#')return false;var o=m.normal['data-click'];if(l===null&&o)l={click:o};var p=m.ft.tn;if(l===null&&p)l={tn:p};if(l===null&&k.getAttribute){var q=k.getAttribute('class');if(q)l={'class':q};}return l;}};function i(event){var j=event.target||event.srcElement,k=h.getClickPointInfo(j);if(k!==false)c('ScriptPath').setClickPointInfo(k);}c('Event').listen(document.documentElement,{click:i});f.exports=h;}),null);
__d('TimezoneAutoset',['AsyncRequest','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;function i(l){var m=new Date(),n=m.getTimezoneOffset()/15,o=m.getTime()/1000,p=Math.round((l-o)/900),q=Math.round(n+p)%96;if(q==0){return 0;}else if(q>48){q-=Math.ceil(q/96)*96;}else if(q<-56)q+=Math.ceil(q/-96)*96;return q*15;}function j(l,m,n){if(!l||undefined==m)return;if(h)return;h=true;var o=-i(l);if(n||o!=m){var p='/ajax/timezone/update.php';new (c('AsyncRequest'))().setURI(p).setData({gmt_off:o,is_forced:n}).setErrorHandler(c('emptyFunction')).setTransportErrorHandler(c('emptyFunction')).setOption('suppressErrorAlerts',true).send();}}var k={setInputValue:function l(m,n){m.value=i(n);},setTimezone:j};f.exports=k;}),null);
__d("XWebStorageLoggingAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/webstorage\/process_keys\/",{});}),null);
__d('WebStorageMonster',['Event','AsyncRequest','UserActivity','StringTransformations','WebStorage','XWebStorageLoggingAsyncController','arrayContains','isEmpty','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=300000,i=false;function j(o){var p={};for(var q in o){var r=o.getItem(q),s=c('StringTransformations').unicodeEscape(q);if(typeof r==='string')p[s]=r.length;}return p;}function k(o){var p=c('WebStorage').getLocalStorage();if(!p||!o.keys)return;n._getLocalStorageKeys().forEach(function(q){if(c('arrayContains')(o.keys,q))p.removeItem(q);});}function l(o){var p=c('WebStorage').getLocalStorage();if(p)n._getLocalStorageKeys().forEach(function(q){if(!o.some(function(r){return new RegExp(r).test(q);}))p.removeItem(q);});}function m(){if(c('UserActivity').isActive(h)){c('setTimeoutAcrossTransitions')(m,h);}else n.cleanNow();}var n={registerLogoutForm:function o(p,q){c('Event').listen(p,'submit',function(r){n.cleanOnLogout(q);});},schedule:function o(){if(i)return;i=true;m();},cleanNow:function o(){var p=Date.now(),q={},r=c('WebStorage').getLocalStorage();if(r)q.local_storage=j(r);var s=c('WebStorage').getSessionStorage();if(s)q.session_storage=j(s);var t=!c('isEmpty')(q),u=Date.now();q.logtime=u-p;if(t){var v=c('XWebStorageLoggingAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(v).setData(q).setHandler(function(w){var x=w.getPayload();if(x.keys)x.keys=x.keys.map(c('StringTransformations').unicodeUnescape);k(x);}).send();}},cleanOnLogout:function o(p){if(p)l(p);var q=c('WebStorage').getSessionStorage();if(q)q.clear();},_getLocalStorageKeys:function o(){var p=c('WebStorage').getLocalStorage();return p?Object.keys(p):[];}};f.exports=n;}),null);
__d('ScriptPathLogger',['Banzai','BanzaiVitalWWW','ScriptPath','TimeSpentPageTransitionCause','URI','isInIframe'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h='script_path_change',i={scriptPath:null,categoryToken:null,extraData:{}},j=false,k='imp_id';function l(v){var w=c('URI').getNextURI?c('URI').getNextURI():new (c('URI'))(window.location.href),x=w.getQueryData(),y=w.getPath();if(y.endsWith('/'))y=y.substr(0,y.length-1);var z=m(y,x);if(z){v.content_id=z;return;}var aa=n(y);if(aa!==''){v.dest_topic_feed=aa;return;}if(o(y)){var ba=x.queue_id;if(ba)v.dest_srt_queue_id=ba;return;}}function m(v,w){if(w.story_fbid)return w.story_fbid;if(w.fbid)return w.fbid;if(w.view==='permalink'&&w.id)return w.id;var x=/\/(posts|videos|notes|groups\/.*\/permalink)\//,y=/^[0-9]+$/;if(x.test(v)){var z=v.split('/'),aa=z[z.length-1];if(y.test(aa))return aa;}return '';}function n(v){if(!v||v.search('/feed/topics/')==-1)return '';var w=v.split('/');return w[w.length-1];}function o(v){return !!v&&v.search('/intern/review/')!==-1;}function p(v,w,x,y){if(!j||c('isInIframe')())return;var z=c('Banzai').isEnabled('vital_navigations')||c('BanzaiVitalWWW').useVital,aa=z?c('Banzai').VITAL:c('Banzai').BASIC;if(z){y=y||{};y.via_banzai_vital='1';}var ba={source_path:v.scriptPath,source_token:v.categoryToken,dest_path:w.scriptPath,dest_token:w.categoryToken,impression_id:w.extraData?w.extraData.imp_id:null,cause:x};l(ba);if(y){if(y.snowlift_photo_id){ba.content_id=y.snowlift_photo_id;delete y.snowlift_photo_id;}ba.extra_data=y;}if(v.scriptPath===null)ba.referrer=document.referrer;var ca=c('ScriptPath').getClickPointInfo();if(ca)ba.click_point_info=ca;if(v.extraData)for(var da in v.extraData)if(da!=k)ba['source_'+da]=v.extraData[da];if(w.extraData)for(var ea in w.extraData)if(ea!=k)ba['dest_'+ea]=w.extraData[ea];if(v.topViewEndpoint)ba.source_endpoint=v.topViewEndpoint;if(w.topViewEndpoint)ba.dest_endpoint=w.topViewEndpoint;if(v.restored)ba.source_restored=true;c('Banzai').post(h,ba,aa);c('ScriptPath').setClickPointInfo(null);}function q(){p(c('ScriptPath').getSourcePageInfo()||i,c('ScriptPath').getPageInfo()||i,c('TimeSpentPageTransitionCause').PAGE_LOAD);}function r(v,w,x){p(v,w,c('TimeSpentPageTransitionCause').TRANSITION,x);}function s(){p(c('ScriptPath').getPageInfo()||i,i,c('TimeSpentPageTransitionCause').PAGE_UNLOAD);c('ScriptPath').shutdown();}var t=c('ScriptPath').subscribe(function(v){if(j){var w=v.source,x=v.dest,y=v.cause,z=v.extraData;if(y){p(w||i,x||i,y,z);}else if(w){r(w,x||i,z);}else q();}});c('Banzai').subscribe(c('Banzai').SHUTDOWN,s);var u={startLogging:function v(){j=true;if(c('ScriptPath').getPageInfo())q();},stopLogging:function v(){j=false;t.remove();},BANZAI_LOGGING_ROUTE:h};f.exports=u;}),null);