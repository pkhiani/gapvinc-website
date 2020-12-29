module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"GTM-P4RNF8D","includeInDevelopment":false,"defaultDataLayer":null,"routeChangeEventName":"gatsby-route-change"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"runtimeCaching":[{"urlPattern":{},"handler":"cacheFirst"},{"urlPattern":{},"handler":"staleWhileRevalidate"},{"urlPattern":{},"handler":"staleWhileRevalidate"}],"skipWaiting":true,"clientsClaim":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gapv inc","short_name":"gapv inc","start_url":"/","background_color":"#00C2BD","theme_color":"#00C2BD","display":"standalone","icon":"C:\\Users\\pavan\\Desktop\\gapvinc-website/static/images/logo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"d96b12616d3c2847fe82a8c8c2fcca23"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":800,"linkImagesToOriginal":false,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"white","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"modulePath":"C:\\Users\\pavan\\Desktop\\gapvinc-website/src/cms/cms.js","stylesPath":"C:\\Users\\pavan\\Desktop\\gapvinc-website/src/cms/admin.css","enableIdentityWidget":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
