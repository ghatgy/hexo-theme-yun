/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7f8fcb577c4b1d214dd7bad41646f5bb"
  },
  {
    "url": "about.html",
    "revision": "641aefe128b632a8abaf1cee2f9372c3"
  },
  {
    "url": "assets/css/0.styles.3fc9eea4.css",
    "revision": "197c360dc4ae9484db60880f4728af14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.50cfa49c.js",
    "revision": "9c3d7c3b8367c3ea62ae1c460d5abbb6"
  },
  {
    "url": "assets/js/11.f2050cd2.js",
    "revision": "84c0822af8504adf13ab437bfa130129"
  },
  {
    "url": "assets/js/12.17461310.js",
    "revision": "3a687f95d72652af2e1cb835da564005"
  },
  {
    "url": "assets/js/13.963f934f.js",
    "revision": "f4fbf09ec54f40a8f36c284679ef0e12"
  },
  {
    "url": "assets/js/14.8d799600.js",
    "revision": "0c300e9a6533c7dcacfdca87e743219e"
  },
  {
    "url": "assets/js/15.75d67d2c.js",
    "revision": "cda61df4a25e95130f9869f011181832"
  },
  {
    "url": "assets/js/16.5a04131a.js",
    "revision": "5fec857e6524e1e6e2b1dc9940432be5"
  },
  {
    "url": "assets/js/17.c7ca52bb.js",
    "revision": "ff86575cfe45c10cc891b3f955175909"
  },
  {
    "url": "assets/js/18.f1e5a1b7.js",
    "revision": "4116b7810bf48203ca3251dad4eb9724"
  },
  {
    "url": "assets/js/19.566edd71.js",
    "revision": "16465577e14fcf9974b12390be29bbe5"
  },
  {
    "url": "assets/js/2.cc3555a3.js",
    "revision": "3a067f6b93f60cbe3fd36ad7dff67f0d"
  },
  {
    "url": "assets/js/20.2fb50d36.js",
    "revision": "fb2266c71b07f4d638efee43334e591f"
  },
  {
    "url": "assets/js/21.b8b9f50c.js",
    "revision": "858ae4fdd4ceb084a2c015e5cab6e517"
  },
  {
    "url": "assets/js/22.59caa48e.js",
    "revision": "f1ad5c5f7bd445df31d043b8902f2d84"
  },
  {
    "url": "assets/js/23.409a4ef2.js",
    "revision": "87f7e60ccd1e07bab41379d1e69ccb15"
  },
  {
    "url": "assets/js/24.5d3d7ebb.js",
    "revision": "20b84ef1d650e93c97ae289099c0e852"
  },
  {
    "url": "assets/js/25.590c9d60.js",
    "revision": "8f4e9b4faffa4ba452cbb8d0e286ceac"
  },
  {
    "url": "assets/js/26.07091736.js",
    "revision": "5d18838d203faf16edebbeba1da1bfc0"
  },
  {
    "url": "assets/js/27.7dfc482c.js",
    "revision": "ad333006e4d81ce315f731de92f297fb"
  },
  {
    "url": "assets/js/3.f4f051f8.js",
    "revision": "9cf70c4cdffccd9b147b90a856d5fdf7"
  },
  {
    "url": "assets/js/4.8ed62a6f.js",
    "revision": "b0b2da157d0752ebe318de8b19bca15f"
  },
  {
    "url": "assets/js/5.24557e6b.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.9088afc6.js",
    "revision": "220a258fee6358aa3e2e376e2622884a"
  },
  {
    "url": "assets/js/7.16c9f5f0.js",
    "revision": "ef5e23ef9cb414ead3d7cdb72b34af88"
  },
  {
    "url": "assets/js/8.1de6f7da.js",
    "revision": "6f21ee9372949925df2222c5848bce25"
  },
  {
    "url": "assets/js/9.043ee7d3.js",
    "revision": "856a90805d06ad062188cd4a138e97a4"
  },
  {
    "url": "assets/js/app.f472e7d7.js",
    "revision": "8aac5ddadd57c1ef5a69981fbcbd1a54"
  },
  {
    "url": "demo.html",
    "revision": "c0e3e7dd6f8fbfa5b0f55723d63261f8"
  },
  {
    "url": "en/about.html",
    "revision": "a2af878d1996379774539067d31c702f"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "4418d9196c4d3fb17d678de8605cc149"
  },
  {
    "url": "en/guide/config.html",
    "revision": "8e0dcfe840985b1fb8af94239e055a4b"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "7baee06ae4b52e376f7bf0a0ff2206b3"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "2f727444c43353b507dfe967c57f994d"
  },
  {
    "url": "en/guide/index.html",
    "revision": "50669ba10ef77d7d56f32167bab38980"
  },
  {
    "url": "en/guide/page.html",
    "revision": "70f34e1f7a03eb60d968ccd0a268643d"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "954087cfd424d4c0ee125b5892e505fc"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "b29ca3aa1fb867226c06f3e897a50582"
  },
  {
    "url": "en/index.html",
    "revision": "0ce419f46012ed81632746c057b3bf8b"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "0cfde0b4006f787dc8e2696f3d8cf768"
  },
  {
    "url": "guide/config.html",
    "revision": "e41624fedcb2f46469060f99ac0a8b83"
  },
  {
    "url": "guide/faq.html",
    "revision": "07425e51afaa1bd289c7252d14460369"
  },
  {
    "url": "guide/icon.html",
    "revision": "16a60373af83f37e2f008cb5f35d50ac"
  },
  {
    "url": "guide/index.html",
    "revision": "60d352b577fe901acebf3e13f17e2709"
  },
  {
    "url": "guide/page.html",
    "revision": "504bce4dad6d10ad9eeec90783d65e97"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "bdef49a66622e2fa16ca0f48408540e0"
  },
  {
    "url": "guide/Todo.html",
    "revision": "6e79d2cef4825b56ba36443112767b48"
  },
  {
    "url": "index.html",
    "revision": "3b4370ec59d0244c5674a485f2c8d754"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
