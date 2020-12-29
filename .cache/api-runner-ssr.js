var plugins = [{
      plugin: require('C:/Users/pavan/Desktop/gapvinc-website/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/pavan/Desktop/gapvinc-website/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"GTM-P4RNF8D","includeInDevelopment":false,"defaultDataLayer":null,"routeChangeEventName":"gatsby-route-change"},
    },{
      plugin: require('C:/Users/pavan/Desktop/gapvinc-website/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"runtimeCaching":[{"urlPattern":{},"handler":"cacheFirst"},{"urlPattern":{},"handler":"staleWhileRevalidate"},{"urlPattern":{},"handler":"staleWhileRevalidate"}],"skipWaiting":true,"clientsClaim":true},
    },{
      plugin: require('C:/Users/pavan/Desktop/gapvinc-website/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gapv inc","short_name":"gapv inc","start_url":"/","background_color":"#00C2BD","theme_color":"#00C2BD","display":"standalone","icon":"C:\\Users\\pavan\\Desktop\\gapvinc-website/static/images/logo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"d96b12616d3c2847fe82a8c8c2fcca23"},
    },{
      plugin: require('C:/Users/pavan/Desktop/gapvinc-website/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
