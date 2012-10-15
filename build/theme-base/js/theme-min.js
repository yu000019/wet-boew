/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-a1
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-base",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,menu:null,init:function(){b.fullhd=pe.header.find("#base-fullhd");b.psnb=pe.header.find("#base-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#base-srchbx");b.bcrumb=pe.header.find("#base-bc");b.title=pe.header.find("#base-title");b.sft=pe.footer.find("#base-sft");b.fullft=pe.footer.find("#base-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.css("width","100%")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.css("width","100%")}}},mobileview:function(){var o,u,s,f="",n=pe.dic.get("%menu"),m=pe.dic.get("%search"),i,g,h,p,j='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-left">'+pe.dic.get("%close")+"</a>",l="",q,d,k,r,t;if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){r=b.menubar.find("ul.mb-menu li");o="<div "+j+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length!==0?pe.secnav.find("h2").eq(0):"");u=(b.menubar.length!==0?b.psnb.children(":header"):(pe.secnav.length!==0?g:b.bcrumb.children(":header")));s=u[0].innerHTML;o+="<h1>"+n+"</h1>"+e+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){o+='<section><div id="jqm-mb-location-text">'+b.bcrumb[0].innerHTML+"</div></section>";b.bcrumb.remove()}else{o+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){h=pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true);pe.menu.expandcollapsemobile(h,(pe.secnav.find("h3.top-section").length!==0?"h4":"h3"),true,false);pe.menu.expandcollapsemobile(h,".nav-current",false,true);f+="<section><div><h2>"+g[0].innerHTML+'</h2><div data-role="controlgroup">'+h[0].innerHTML+"</div></div></section>";pe.secnav.remove()}if(b.menubar.length!==0){h=pe.menu.buildmobile(r,3,"a",true,true,"c",true);f+="<section><div><h2>"+s+'</h2><div data-role="controlgroup">'+h[0].innerHTML+"</div></div></section>"}o+='<div id="jqm-mb-menu"></div></nav></div></div></div>';pe.bodydiv.append(o);b.menu=f;u.wrapInner('<a href="#jqm-wb-mb" data-rel="popup"></a>');l+='<li><a data-rel="popup" data-theme="a" data-icon="site-menu" href="#jqm-wb-mb">'+n+"</a></li>"}if(b.search.length!==0){i=b.search.find(":header");p="<div "+j+' id="jqm-wb-search"><div data-role="header"><h1>'+m+"</h1>"+e+'</div><div data-role="content">'+(c("<div/>").append(b.search.find("form")))[0].innerHTML+"</div></div>";pe.bodydiv.append(p);i.wrapInner('<a href="#jqm-wb-search" data-rel="popup"></a>');l+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+m+"</a></li>"}if(l.length!==0){q=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+l+"</ul></div>");b.title.after(q)}if(b.sft.length!==0){d=b.sft.find(".base-col-head a");t=b.sft.children("#base-sft-in");b.fullft.parent().remove();k='<div data-role="navbar"><ul>';d.each(function(){k+='<li><a href="'+this.href+'" data-theme="c">'+this.innerHTML+"</a></li>"});k+="</ul></div>";t.replaceWith(k)}c(document).on("pagecreate",function(){if(b.menubar.length!==0){b.psnb.parent().remove()}if(b.search.length!==0){b.search.parent().remove()}if(l.length!==0){q.children().removeClass("wb-hide")}var w=pe.bodydiv.find("#jqm-mb-menu");setTimeout(function(){w.append(b.menu).trigger("create");pe.menu.correctmobile(w)},1);function v(y,x,B,A){var z;c.mobile.showPageLoadingMsg();z=c.mobile.transitionHandlers.simultaneous("pop",x,B,A);z.done(function(){c.mobile.hidePageLoadingMsg()});return z}c.mobile.transitionHandlers.loadingTransition=v;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("mobileviewloaded");return}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));