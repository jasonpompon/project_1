if (self.CavalryLogger) { CavalryLogger.start_js(["TFw+c"]); }

__d('LazyPagesInsightsPostDetailsDialog.react',['cx','fbt','Arbiter','BootloadedComponent.react','DialogExpansion','FeedPlaceHolderStory.react','JSResource','LayerFadeOnHide','React','PagesInsightsDataDispatcher','PagesInsightsDataPayloadTypes','XUIDialog.react','XUIDialogBody.react','XUIDialogTitle.react','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.componentDidMount=function(){'use strict';c('PagesInsightsDataDispatcher').dispatch({pageID:this.props.pageID,postFeedObjectID:this.props.postFeedObjectID,type:c('PagesInsightsDataPayloadTypes').REQUEST_POST_DETAILS_DATA});c('Arbiter').subscribe('Story/delete',function(event,n){if(n===this.props.postFeedObjectID)this.refs.dialog.layer.hide();}.bind(this));};m.prototype.render=function(){'use strict';var n=c('React').createElement('div',{className:"_19vn"},c('React').createElement('div',{className:"_2pi0 _4c9a"},c('React').createElement('div',{className:"_4c9b"},c('React').createElement(c('FeedPlaceHolderStory.react'),null))),c('React').createElement('div',{className:"_4c9c"},c('React').createElement('div',{className:"_2ph_ _4mzv"},c('React').createElement(c('XUISpinner.react'),{size:'large'}))));return (c('React').createElement(c('XUIDialog.react'),{behaviors:{DialogExpansion:c('DialogExpansion'),LayerFadeOnHide:c('LayerFadeOnHide')},ref:'dialog',shown:true,width:961},c('React').createElement(c('XUIDialogTitle.react'),null,i._("Post Details")),c('React').createElement(c('XUIDialogBody.react'),{className:"_4hcm",useCustomPadding:true},c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('PagesInsightsPostDetails.react').__setRef('LazyPagesInsightsPostDetailsDialog.react'),bootloadPlaceholder:n,pageID:this.props.pageID,postFeedObjectID:this.props.postFeedObjectID}))));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={pageID:l.string.isRequired,postFeedObjectID:l.string.isRequired};f.exports=m;}),null);
__d('LazyHubblePostDrillDown.react',['cx','fbt','AsyncRequest','HubbleContext','InsightsLoadingIndicator.react','JSResource','LayerPage.react','LayerPageContent.react','LazyPagesInsightsPostDetailsDialog.react','PageInsightsPostDataType','PagesEventType','PagesInsightsGating','React','XPageAdminHomepagePanelLoggingController','XUICloseButton.react','XUIGrayText.react'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k={video:c('JSResource')('HubbleVideoPostDrillDown').__setRef('LazyHubblePostDrillDown.react'),post:c('JSResource')('HubbleDefaultPostDrillDown').__setRef('LazyHubblePostDrillDown.react')},l=c('React').createClass({displayName:'LazyHubblePostDrillDown',props:{drilldownProps:j.object,shown:j.bool,onClose:j.func,onToggle:j.func},getInitialState:function m(){return {Component:null};},componentWillMount:function m(){this._getDrillDownComponent();},componentDidUpdate:function m(n){if(n.drilldownProps!==this.props.drilldownProps)this._getDrillDownComponent();},_setDrilldownComponent:function m(n){n.load().done(function(r){this.setState({Component:r});}.bind(this));var o=this.props.drilldownProps.postID.split('_'),p=o[0],q=c('XPageAdminHomepagePanelLoggingController').getURIBuilder();new (c('AsyncRequest'))().setURI(q.getURI()).setData({event_type:c('PagesEventType').POST_DETAIL_VIEW,page_id:p,additional_data:{post_id:this.props.drilldownProps.postID,post_type:this.props.drilldownProps.postType,post_status_type:this.props.drilldownProps.postStatusType,is_admin:true,ref:this.props.ref}}).send();},_getDrillDownComponent:function m(){if(!this.props.drilldownProps.postIdentifier)return;var n=c('HubbleContext').get('minVideoInsightsCreationTime'),o=this.props.drilldownProps.postCreatedTime>=n;if(!o){if(c('PagesInsightsGating').hasPostDetailsDialogRefresh)return;this._setDrilldownComponent(k.post);return;}switch(this.props.drilldownProps.postType){case c('PageInsightsPostDataType').VIDEO:case c('PageInsightsPostDataType').SHARED_VIDEO:this._setDrilldownComponent(k.video);break;default:if(!c('PagesInsightsGating').hasPostDetailsDialogRefresh)this._setDrilldownComponent(k.post);}},render:function m(){if(!this.props.shown)return null;if(c('PagesInsightsGating').hasPostDetailsDialogRefresh&&this.props.drilldownProps.postIdentifier&&this.props.drilldownProps.postType!=='video'&&this.props.drilldownProps.postType!=='sharedVideo')return (c('React').createElement(c('LazyPagesInsightsPostDetailsDialog.react'),{onToggle:this.props.onToggle,pageID:this.props.drilldownProps.postID.split('_')[0],postFeedObjectID:this.props.drilldownProps.postIdentifier,shown:true,key:'postDetailsDialog'}));var n=this.state.Component,o;if(n){o=c('React').createElement(n,this.props.drilldownProps);}else o=c('React').createElement(c('InsightsLoadingIndicator.react'),null);return (c('React').createElement(c('LayerPage.react'),{key:'test',layerRootClass:"_55vx",onToggle:this.props.onToggle,shown:true,width:915},c('React').createElement(c('LayerPageContent.react'),{useCustomPadding:true,key:'reuse'},c('React').createElement('div',{className:"_55m4"},c('React').createElement(c('XUICloseButton.react'),{className:"_55ng",onClick:this.props.onClose}),c('React').createElement('div',null,i._("Post Details"),c('React').createElement(c('XUIGrayText.react'),{className:"_2kn"},i._("Reported stats may be delayed from what appears on posts")))),o)));}});f.exports=l;}),null);
__d('AYMTHomepagePanelPostViewWrap.react',['ApiClient','AsyncDialog','AsyncRequest','Event','HubbleContext','HubbleUtils','LazyHubblePostDrillDown.react','React','VideoAssetInsightsSource','VideoInsightsContext','XVideoAssetInsightsDialogController'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={drilldownProps:{},showDrillDown:false},this.handlePost=function(){if(!this.props.post)return;var q=c('HubbleUtils').getVideoID(this.props.post.id),r=c('HubbleUtils').getPageID(this.props.post.id);if(this.props.is_video_asset){var s=c('XVideoAssetInsightsDialogController').getURIBuilder().setInt('video_asset_id',q).setFBID('page_id',r).setEnum('source',c('VideoAssetInsightsSource').PAGE_VIDEO_INSIGHTS).setEnum('context',c('VideoInsightsContext').VIDEO_POST).getURI();c('AsyncDialog').send(new (c('AsyncRequest'))(s));}else this.setState({drilldownProps:{postCreatedTime:this.props.post.created_time,postID:this.props.post.id,postIdentifier:this.props.post.identifier,postType:this.props.post.type,postStatusType:this.props.post.status_type,ref:'AYMT_homepage_panel'},showDrillDown:true});}.bind(this),this.onClose=function(){this.onToggleDrillDown(false);}.bind(this),this.onToggleDrillDown=function(q){if(!q&&this.state.showDrillDown)this.setState({drilldownProps:{},showDrillDown:false});}.bind(this),m;}k.prototype.componentWillMount=function(){'use strict';c('Event').listen(this.props.link,'click',function(){c('ApiClient').setClientID(this.props.context.appID);c('ApiClient').setAccessToken(this.props.context.accessToken);c('HubbleContext').setContext(this.props.context);this.handlePost();return false;}.bind(this));};k.prototype.render=function(){'use strict';return (c('React').createElement(c('LazyHubblePostDrillDown.react'),{drilldownProps:this.state.drilldownProps,shown:this.state.showDrillDown,onClose:this.onClose,onToggle:this.onToggleDrillDown}));};k.propTypes={context:j.object,is_video_asset:j.bool,link:j.object,post:j.object};f.exports=k;}),null);