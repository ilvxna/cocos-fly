function c(){for(var c=~~(Math.random()*r.length);r[c]===n.innerText;)c=~~(Math.random()*r.length);n.innerText=r[c],r.splice(c,1),0===r.length&&(r=o.slice())}!function(){"use strict";function c(){var c=window._CCSettings;if(window._CCSettings=void 0,!c.debug){var s=c.uuids,a=c.rawAssets,o=c.assetTypes,n=c.rawAssets={};for(var r in a){var t=a[r],e=n[r]={};for(var i in t){var d=t[i],u=d[1];"number"==typeof u&&(d[1]=o[u]),e[s[i]||i]=d}}for(var v=c.scenes,f=0;f<v.length;++f){var m=v[f];"number"==typeof m.uuid&&(m.uuid=s[m.uuid])}var p=c.packedAssets;for(var l in p)for(var w=p[l],j=0;j<w.length;++j)"number"==typeof w[j]&&(w[j]=s[w[j]])}var b;cc.sys.isBrowser&&(b=document.getElementById("GameCanvas"));var h=c.jsList,y=c.debug?"project.dev.js":"project-c729e2b19c.js";h?h.push(y):h=[y],cc.sys.isNative&&cc.sys.isMobile&&(h=h.concat(["jsb_anysdk.js","jsb_anysdk_constants.js"]));var k={id:"GameCanvas",scenes:c.scenes,debugMode:c.debug?cc.DebugMode.INFO:cc.DebugMode.ERROR,showFPS:c.debug,frameRate:60,jsList:h,groupList:c.groupList,collisionMatrix:c.collisionMatrix,renderMode:0};cc.game.run(k,function(){cc.view.resizeWithBrowserSize(!0),cc.sys.os===cc.sys.OS_ANDROID&&cc.sys.browserType===cc.sys.BROWSER_TYPE_UC||cc.view.enableRetina(!0),cc.sys.isBrowser&&function(){var c=document.getElementById("splash"),s=c.querySelector(".progress-bar span");cc.loader.onProgress=function(c,a,o){if(1!==a){var n=100*c/a;s&&(s.style.width=n.toFixed(2)+"%")}},c.style.display="block",s.style.width="0%",cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH,function(){document.body.removeChild(c)})}(),cc.sys.isMobile&&("landscape"===c.orientation?cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE):"portrait"===c.orientation&&cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT)),cc.sys.isBrowser&&cc.sys.os===cc.sys.OS_ANDROID&&(cc.macro.DOWNLOAD_MAX_CONCURRENT=2),cc.AssetLibrary.c({libraryPath:"res/import",rawAssetsBase:"res/raw-",rawAssets:c.rawAssets,packedAssets:c.packedAssets,md5AssetsMap:c.md5AssetsMap});var s=c.launchScene;cc.runtime&&cc.director.setRuntimeLaunchScene(s),cc.director.loadScene(s,null,function(){if(cc.sys.isBrowser){b.style.visibility="";var c=document.getElementById("GameDiv");c&&(c.style.backgroundImage="")}cc.loader.onProgress=null,console.log("Success to load scene: "+s)})})}if(window.document){document.getElementById("splash").style.display="block";var s=document.createElement("script");s.async=!0,s.src=window._CCSettings.debug?"cocos2d-js.js":"cocos2d-js-min-4bbe6abde1.js";var a=function(){document.body.removeChild(s),s.removeEventListener("load",a,!1),window.eruda&&eruda.c(),c()};s.addEventListener("load",a,!1),document.body.appendChild(s)}else window.jsb&&(require("src/settings-4b3ba3fa1b.js"),require("src/jsb_polyfill.js"),c())}();var s=document.getElementById("splash"),a=document.createElement("div");a.innerHTML="<span id='tipTxt'class='tip-txt'></span>",s.appendChild(a);var o=["快看漫画正在招聘CocosCreator开发","你是我们要找的人？快到碗里来","也许，这里能实现你的游戏梦想","去拉勾网看看，我们在那里更新招聘信息"],n=document.getElementById("tipTxt");n.addEventListener("webkitAnimationIteration",c),n.addEventListener("animationiteration",c);var r=o.slice();c();