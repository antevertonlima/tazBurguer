!function(a){"use strict";function b(){this.isMobile=!1,this.isFlash=!1,this.isBasic=!1,this.ua=navigator.userAgent.toLowerCase();var b="undefined",c="object",d="Shockwave Flash",e="ShockwaveFlash.ShockwaveFlash",f="application/x-shockwave-flash",g=[0,0,0],h=navigator.platform.toLowerCase(),i=this.ua.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0];if(typeof navigator.plugins!==b&&typeof navigator.plugins[d]===c){var j=navigator.plugins[d].description;if(j&&(typeof navigator.mimeTypes==b||!navigator.mimeTypes[f]||navigator.mimeTypes[f].enabledPlugin)){var k=!1;j=j.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),g[0]=parseInt(j.replace(/^(.*)\..*$/,"$1"),10),g[1]=parseInt(j.replace(/^.*\.(.*)\s.*$/,"$1"),10),g[2]=/[a-zA-Z]/.test(j)?parseInt(j.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else if(typeof window.ActiveXObject!==b)try{var l=new ActiveXObject(e);l&&(j=l.GetVariable("$version"),j&&(k=!0,j=j.split(" ")[1].split(","),g=[parseInt(j[0],10),parseInt(j[1],10),parseInt(j[2],10)]))}catch(m){}this.flash=0===g[0]&&0===g[1]&&0===g[2]?!1:!0,this.publisher={},this.publisher.isOn="undefined"!=typeof a.publisher,this.browser={},this.platform={},this.device={},this.browser.name="version"==i[1]?i[3]:i[1],this.browser.name="unknown"==this.browser.name?"safari":this.browser.name,this.browser[this.browser.name]=!0;var n="ie"==i[1]&&document.documentMode;if(this.browser.version=n||parseFloat("opera"==i[1]&&i[4]?i[4]:i[2]),this.platform.name=this.ua.match(/ip(?:ad|od|hone)/)?"ios":this.ua.match(/(?:msie 9)/)?"wphone":(this.ua.match(/(?:webos|android|bada|symbian|palm|blackberry)/)||h.match(/mac|win|linux/)||["other"])[0],this.platform[this.platform.name]=!0,this.platform.version=0,this.platform.mac){var o=this.ua.match(/os\sx\s(\d+[\._]*\d*[\._]*\d*)/);this.platform.version="[object Array]"===Object.prototype.toString.call(o)&&o.length>1?o[1].split(/[\._]/):0}else if(this.platform.ios){var o=this.ua.match(/os\s(\d+_*\d*_*\d*)/);this.platform.version="[object Array]"===Object.prototype.toString.call(o)&&o.length>1?o[1].split("_"):0}else if(this.platform.android){var o=this.ua.match(/android\s(\d+\.*\d*\.*\d*)/);this.platform.version="[object Array]"===Object.prototype.toString.call(o)&&o.length>1?o[1].split("."):0}switch(this.platform.verCheck=function(a){return 1*this.platform.version===1*a?0:1*a>1*this.platform.version?-1:1},this.device.name=this.ua.match(/ipad/)?"ipad":this.ua.match(/ipad/)?"ipad":this.ua.match(/iphone/)?"iphone":this.ua.match(/android/)?"android":h.match(/mac|win|linux/)?"pc":"other",this.device[this.device.name]=!0,this.device.version=this.platform.version[0],this.device.type=this.ua.match(/(mobile\ssafari)|iphone|ipod/)?"mobile":"tablet",this.queryString=function(){var a={},b=window.location.search.substring(1);if(""===b)return a;for(var c=b.split("&"),d=0;d<c.length;d++)if(""!==c[d]){var e=c[d].split("=");if("undefined"==typeof a[e[0]])a[e[0]]=e[1];else if("string"==typeof a[e[0]]){var f=[a[e[0]],e[1]];a[e[0]]=f}else a[e[0]].push(e[1])}return a}(),this.queryString.v){case"basic":this.isBasic=!0,this.isMobile=this.isFlash=!1;break;case"mobile":this.isMobile=!0;break;case"flash":this.isFlash=!0}var p=this.platform.ios,q=this.platform.android&&(parseInt(this.platform.version[0],10)>4||4===parseInt(this.platform.version[0],10)&&parseInt(this.platform.version[1],10)>=1),r=p&&this.browser.safari,s=q&&this.browser.chrome;if(this.isBasic||this.isMobile||this.isFlash||((p||q)&&"undefined"==typeof COMPATIBLE?this.isMobile=!0:r||s?this.isMobile=!0:this.flash&&this.device.pc&&(g[0]>10||10===g[0]&&g[1]>=3)?this.isFlash=!0:this.isBasic=!0),this._loadVersion(),this.device.android&&!this.browser.chrome){for(var t=document.getElementsByTagName("meta"),u=0;u<t.length;u++)"viewport"==t[u].name&&document.head.removeChild(t[u]);var v=this.platform.android&&!this.browser.chrome&&(parseInt(this.platform.version[0],10)<4||4===parseInt(this.platform.version[0],10)&&parseInt(this.platform.version[1],10)<=3),w=v?1.5:1,x="width=device-width, height=device-height, initial-scale="+w/window.devicePixelRatio+", minimum-scale="+w/window.devicePixelRatio+", user-scalable=yes, maximum-scale=2.0"+(v?"":", target-densitydpi=device-dpi"),y=document.createElement("meta");y.name="viewport",y.content=x,document.getElementsByTagName("head")[0].appendChild(y)}}b.prototype._loadVersion=function(){if(!(!this.isMobile&&!this.isFlash||"undefined"!=typeof a.IS_DEBUG&&a.IS_DEBUG||this.publisher.isOn)){var b=a.MAIN_PAGE||"index.html",c="../../../"+b,d=a.document;(-1!=d.domain.indexOf("publ.com")||-1!=d.domain.indexOf("cld.bz")||-1!=d.domain.indexOf("cld.mobi")||-1!=d.domain.indexOf("cld.local"))&&(c=a.location.protocol+"//"+a.location.host+"/"+a.location.href.split("/")[4]);var e="";"undefined"!=typeof a.CURRENT_PAGE&&"1"!=a.CURRENT_PAGE&&(e+="#"+encodeURIComponent(a.CURRENT_PAGE));var f="";("mobile"===this.queryString.v||"flash"===this.queryString.v)&&(f="?v"+this.queryString.v),window.location=c+f+e}this.device.pc||a.document.getElementsByTagName("html")[0].setAttribute("class","isMobile")},a.detector=new b}(this),!function(a){"use strict";function b(){this._popUp(),"undefined"==typeof this.currentZoom&&(this.currentZoom=1),this.pageContainer=document.getElementById("pageContainer"),this.pageRect=this._getBoundingClientRect(this.pageContainer),this.mobileMenu="close",this.lastFontSize=0,this.offset={right:.05,left:.05,top:.05,bottom:.05},this.videoFrame=!1,this.currentWindowWidth=this._getWindowWidth(),this.currentWindowHeight=this._getWindowHeight(),this._setSizes(),this._fontCorrection(),this._parseVideos();var b=this;if(this._addEvent(window,"resize",function(){a.detector.device.pc?(b._setSizes.call(b),b._fontCorrection.call(b)):((b.currentWindowWidth<b.currentWindowHeight&&b._getWindowWidth.call(b)>b._getWindowHeight.call(b)||b.currentWindowWidth>b.currentWindowHeight&&b._getWindowWidth.call(b)<b._getWindowHeight.call(b))&&(b._setSizes.call(b),b._fontCorrection.call(b)),b.currentWindowWidth=b._getWindowWidth.call(b),b.currentWindowHeight=b._getWindowHeight.call(b))}),this._zoomButtons(),this._socialButtons(),this._mobileMenu(),a.detector.platform.mac&&document.getElementById("downloadWindows")?document.getElementById("downloadWindows").parentNode.removeChild(document.getElementById("downloadWindows")):a.detector.platform.win&&document.getElementById("downloadMac")?document.getElementById("downloadMac").parentNode.removeChild(document.getElementById("downloadMac")):a.detector.platform.linux&&(document.getElementById("downloadWindows")&&document.getElementById("downloadWindows").parentNode.removeChild(document.getElementById("downloadWindows")),document.getElementById("downloadMac")&&document.getElementById("downloadMac").parentNode.removeChild(document.getElementById("downloadMac"))),"basic"===a.detector.queryString.v)for(var c=this._getElementsByClass("internalLink"),d=0,e=c.length;e>d;d++){var f=c[d];f.href=f.href+"?v=basic"}}b.prototype._popUp=function(){var a=function(){document.getElementById("infoPopUp").style.display="none",document.getElementById("popUp").style.display="none"},b=function(){document.getElementById("infoPopUp").style.display="block",document.getElementById("popUp").style.display="block"};this._addEvent(document.getElementById("infoPopUp"),"click",a),this._addEvent(document.getElementById("closeButton"),"click",a),this._addEvent(document.getElementById("verContainer"),"click",b)},b.prototype._mobileMenu=function(){if(document.getElementById("mobileMenuButton")){var b=this;"ontouchstart"in document.documentElement&&(!a.detector.platform.android||a.detector.browser.chrome||a.detector.browser.opera||a.detector.browser.firefox)?(document.getElementById("mobileMenuButton").addEventListener("touchstart",function(a){a.preventDefault(),a.stopPropagation()}),document.getElementById("mobileMenuButton").addEventListener("touchend",function(a){a.stopPropagation(),a.preventDefault(),"close"===b.mobileMenu?b._mobileMenuOpen.call(b):b._mobileMenuClose.call(b)}),document.getElementById("mainFrame").addEventListener("touchend",function(){event.stopPropagation(),"close"!==b.mobileMenu&&b._mobileMenuClose.call(b)})):(this._addEvent(document.getElementById("mobileMenuButton"),"click",function(){event.stopPropagation(),event.preventDefault(),"close"===b.mobileMenu?b._mobileMenuOpen.call(b):b._mobileMenuClose.call(b)}),this._addEvent(document.getElementById("mainFrame"),"click",function(){"close"!==b.mobileMenu&&b._mobileMenuClose.call(b)}))}},b.prototype._mobileMenuOpen=function(){document.getElementById("mainFrame").className="mainFrame openMenu",this.mobileMenu="open"},b.prototype._mobileMenuClose=function(){document.getElementById("mainFrame").className="mainFrame closeMenu",this.mobileMenu="close"},b.prototype._socialButtons=function(b){var c=a.FILES_FOLDER||"files",d=a.MAIN_PAGE||"index.html";if(document.getElementById("facebookShare")){if("undefined"==typeof b){b=window.location.href;var e=new RegExp("/"+c+"/.*","i");b=b.replace(e,"/"+d)}b=encodeURIComponent(b),document.getElementById("facebookShare").setAttribute("href","//m.facebook.com/sharer.php?u="+b),document.getElementById("twitterShare").setAttribute("href","//twitter.com/intent/tweet?text="+a.PUBLICATION_NAME+"&url="+b),document.getElementById("linkedinShare").setAttribute("href","//www.linkedin.com/shareArticle?mini=true&url="+b+"&title="+a.PUBLICATION_NAME+"&summary="+a.PUBLICATION_NAME+"&source="+b),document.getElementById("tumblrShare").setAttribute("href","//www.tumblr.com/share/link?url="+b+"&name="+a.PUBLICATION_NAME),document.getElementById("googleShare").setAttribute("href","//plus.google.com/share?url="+b),document.getElementById("mailShare").setAttribute("href","mailto:?subject="+a.PUBLICATION_NAME+"&body="+b),document.getElementById("vkShare").setAttribute("href","//vk.com/share.php?url="+b+"&title="+a.PUBLICATION_NAME)}},b.prototype._zoomButtons=function(){function b(a,b,c,d,e){try{if(!a||!b)return!1;var f=a+"="+encodeURIComponent(b);return f+="; path=/",c&&(f+="; expires="+c.toGMTString()),d&&(f+="; domain="+d),e&&(f+="; secure"),document.cookie=f,!0}catch(g){console.log(g)}}if(document.getElementById("zoomIn")){if((window.PointerEvent||"ontouchstart"in window)&&!a.detector.device.pc)return void document.getElementById("zoomContainer").parentNode.removeChild(document.getElementById("zoomContainer"));var c=this,d=(this._getWindowWidth()-100)/this._getFitScreenSizes(this.pageRect.width,this.pageRect.height).width,e=new Date;e.setMonth(e.getMonth()+6),this._addEvent(document.getElementById("zoomIn"),"click",function(){c.currentZoom+.2>d||(c.currentZoom=c.currentZoom+.2,c._setSizes.call(c),c._fontCorrection.call(c))}),this._addEvent(document.getElementById("zoomOut"),"click",function(){1!==c.currentZoom&&(c.currentZoom=c.currentZoom-.2,c._setSizes.call(c),c._fontCorrection.call(c),b("zoom",c.currentZoom,e))})}},b.prototype._getFitScreenSizes=function(a,b,c){c=c||2*this._getWindowWidth()*this.offset.top,c=Math.round(c);var d=this._getWindowWidth(),e=this._getWindowHeight(),f=d/e,g=a/b,h=Math.round(f>g?a*(e-c)/b:d-c),i=Math.round(f>g?e-c:b*(d-c)/a);return{width:Math.round(h),height:Math.round(i)}},b.prototype._getFitWidthSizes=function(a,b,c){c=c||2*this._getBoundingClientRect(document.body).width*this.offset.top,c=Math.round(c);var d=this._getBoundingClientRect(document.body).width,e=Math.round(d-c),f=Math.round(b*(d-c)/a);return{width:Math.round(e),height:Math.round(f)}},b.prototype._setSizes=function(){var b=0,c=0;"undefined"!=typeof a.TOC_BOOK_HEIGHT?(this.newRect=a.detector.device.pc?this._getFitScreenSizes(this.pageRect.width,a.TOC_BOOK_HEIGHT):this._getFitWidthSizes(this.pageRect.width,a.TOC_BOOK_HEIGHT),this.pageContainer.style.width=this.newRect.width*this.currentZoom+"px",b=this._getWindowHeight()>this.pageRect.height*this.currentZoom?(this._getWindowHeight()-this.pageRect.height*this.currentZoom)/2:this._getWindowHeight()*this.offset.top,c=this._getWindowWidth()-100>this.newRect.width*this.currentZoom?(this._getWindowWidth()-this.newRect.width*this.currentZoom)/2+"px":this._getWindowWidth()*this.offset.left+"px"):(this.newRect=a.detector.device.pc?this._getFitScreenSizes(this.pageRect.width,this.pageRect.height):this._getFitWidthSizes(this.pageRect.width,this.pageRect.height),this.pageContainer.style.width=this.newRect.width*this.currentZoom+"px",this.pageContainer.style.height=this.newRect.height*this.currentZoom+"px",b=this._getWindowHeight()>this.newRect.height*this.currentZoom?(this._getWindowHeight()-this.newRect.height*this.currentZoom)/2:this._getWindowHeight()*this.offset.top,c=this._getWindowWidth()-100>this.newRect.width*this.currentZoom?(this._getWindowWidth()-this.newRect.width*this.currentZoom)/2+"px":this._getWindowWidth()*this.offset.left+"px"),this.pageContainer.style.left="0",b=b-45>10?b-45:10,"pc"!==a.detector.device.type&&(b=20),this.pageContainer.style.margin=b+"px 0 0 "+c,this.lastFontSize=(this.newRect.width*this.currentZoom*20/this.pageRect.width).toFixed(6),document.body.style.fontSize=this.lastFontSize+"px"},b.prototype._fontCorrection=function(){for(var a=this._getElementsByClass("testString"),b=0,c=0,d=a.length;d>c;c++){var e=a[c],f=e.parentNode,g=this._getBoundingClientRect(e),h=this._getBoundingClientRect(f),i=this._getBoundingClientRect(document.getElementById("pageContainer")),j=h.width/i.width,k=g.width-h.width>0?(g.width-h.width)/h.width:0;k*=j,b=b>=k?b:k}document.body.style.fontSize=this.lastFontSize*(1-b)+"px"},b.prototype._parseVideos=function(){for(var a=this._getElementsByClass("videoItem"),b=this,c=0,d=a.length;d>c;c++){var e=a[c],f=e.getAttribute("class").split(" ")[1],g=e.id;!function(a,c){b._addEvent(e,"click",function(){b._showVideo.call(b,a,c)})}(g,f)}this._sizeVideoIcons(),this._addEvent(window,"resize",function(){b._sizeVideoIcons()})},b.prototype._sizeVideoIcons=function(){for(var a=this._getElementsByClass("videoItem"),b=0,c=a.length;c>b;b++){var d=a[b],e=this._getBoundingClientRect(d),f=this._getElementsByClass("play",d)[0];if(f){var g=e.height>50?.35*e.height:.8*e.height;f.style.width=g+"px",f.style.height=g+"px",f.style.margin=-g/2+"px 0 0 "+-g/2+"px"}}},b.prototype._showVideo=function(b,c){this.videoFrame=document.createElement("iframe");{var d=document.createElement("div"),e=this;this._getFitScreenSizes(1600,900,this._getWindowHeight()/10)}d.setAttribute("class","blackoutVideo"),document.body.appendChild(d),this._addEvent(d,"click",function(a){a.stopPropagation(),e._hideVideo.call(e)}),"youtube"===c?(this.videoFrame.className=this.videoFrame.getAttribute("class")+" youtube-player",this.videoFrame.src="http://www.youtube.com/embed/"+b+"?autoplay=1&html5=1"):this.videoFrame.src="http://player.vimeo.com/video/"+b+"?title=0&amp;byline=0&amp;portrait=0&amp;color=da4541",document.body.appendChild(this.videoFrame),this._resizeVideo(),this._addEvent(a.document,"keyup",function(a){a.stopPropagation();var b=a.keyCode?a.keyCode:a.which;27===b&&e._hideVideo.call(e)}),this._addEvent(window,"resize",function(){e._resizeVideo()})},b.prototype._resizeVideo=function(){if(this.videoFrame){var a=this._getFitScreenSizes(1600,900,this._getWindowHeight()/10);this.videoFrame.setAttribute("class","videoFrame"),this.videoFrame.setAttribute("type","text/html"),this.videoFrame.setAttribute("width",a.width+"px"),this.videoFrame.setAttribute("height",a.height+"px"),this.videoFrame.setAttribute("frameBorder","0"),this.videoFrame.style.top="50%",this.videoFrame.style.left="50%",this.videoFrame.style.margin=-a.height/2+"px 0 0 "+-a.width/2+"px"}},b.prototype._hideVideo=function(){var a=this._getElementsByClass("blackoutVideo");this.videoFrame&&this.videoFrame.parentNode.removeChild(this.videoFrame);for(var b=0,c=a.length;c>b;b++){var d=a[b];d.parentNode.removeChild(d)}this.videoFrame=!1},b.prototype._getBoundingClientRect=function(a){var b=a.getBoundingClientRect();return{width:b.width||b.right-b.left,height:b.height||b.bottom-b.top,left:b.left,right:b.right,top:b.top,bottom:b.bottom}},b.prototype._getWindowWidth=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},b.prototype._getWindowHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},b.prototype._getElementsByClass=function(b,c){if("undefined"==typeof c&&(c=a.document),"function"==typeof c.getElementsByClassName)return c.getElementsByClassName(b);var d=[],e=c.getElementsByTagName("*");for(var f in e)if(Object.prototype.hasOwnProperty.call(e,f)&&"object"==typeof e[f]){var g=e[f].getAttribute("className"),h=null===g?[]:g.split(" ");-1!==this._indexOf(h,b)&&d.push(e[f])}return d},b.prototype._addEvent=function(a,b,c){window.addEventListener?a.addEventListener(b,c,!0):a.attachEvent("on"+b,c)},b.prototype._indexOf=function(a,b){if(null==a)return-1;var c,d;for(c=0,d=a.length;d>c;c++)if(c in a&&a[c]===b)return c;return-1},b.prototype._setFrame=function(){navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)&&(document.body.style.height=this._getWindowHeight()+"px"),window.scrollTo(0,0)},a.BasicPage=b;var c=function(){"undefined"==typeof a.BASIC_PAGE&&(a.BASIC_PAGE=new b)};window.addEventListener?a.addEventListener("load",c,!0):a.attachEvent("onload",c)}(this);