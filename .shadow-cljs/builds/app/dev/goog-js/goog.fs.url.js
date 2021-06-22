["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fs/url.js"],"~:js","goog.provide(\"goog.fs.url\");\ngoog.fs.url.createObjectUrl = function(obj) {\n  return goog.fs.url.getUrlObject_().createObjectURL(obj);\n};\ngoog.fs.url.revokeObjectUrl = function(url) {\n  goog.fs.url.getUrlObject_().revokeObjectURL(url);\n};\ngoog.fs.url.UrlObject_ = function() {\n};\ngoog.fs.url.UrlObject_.prototype.createObjectURL = function(arg) {\n};\ngoog.fs.url.UrlObject_.prototype.revokeObjectURL = function(s) {\n};\ngoog.fs.url.getUrlObject_ = function() {\n  const urlObject = goog.fs.url.findUrlObject_();\n  if (urlObject != null) {\n    return urlObject;\n  } else {\n    throw new Error(\"This browser doesn't seem to support blob URLs\");\n  }\n};\ngoog.fs.url.findUrlObject_ = function() {\n  if (goog.global.URL !== undefined && goog.global.URL.createObjectURL !== undefined) {\n    return goog.global.URL;\n  } else {\n    if (goog.global.webkitURL !== undefined && goog.global.webkitURL.createObjectURL !== undefined) {\n      return goog.global.webkitURL;\n    } else {\n      if (goog.global.createObjectURL !== undefined) {\n        return goog.global;\n      } else {\n        return null;\n      }\n    }\n  }\n};\ngoog.fs.url.browserSupportsObjectUrls = function() {\n  return goog.fs.url.findUrlObject_() != null;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Wrapper for URL and its createObjectUrl and revokeObjectUrl\n * methods that are part of the HTML5 File API.\n */\n\ngoog.provide('goog.fs.url');\n\n\n/**\n * Creates a blob URL for a blob object.\n * Throws an error if the browser does not support Object Urls.\n *\n * @param {!File|!Blob|!MediaSource|!MediaStream} obj The object for which\n *   to create the URL.\n * @return {string} The URL for the object.\n */\ngoog.fs.url.createObjectUrl = function(obj) {\n  'use strict';\n  return goog.fs.url.getUrlObject_().createObjectURL(obj);\n};\n\n\n/**\n * Revokes a URL created by {@link goog.fs.url.createObjectUrl}.\n * Throws an error if the browser does not support Object Urls.\n *\n * @param {string} url The URL to revoke.\n */\ngoog.fs.url.revokeObjectUrl = function(url) {\n  'use strict';\n  goog.fs.url.getUrlObject_().revokeObjectURL(url);\n};\n\n\n/**\n * @record\n * @private\n */\ngoog.fs.url.UrlObject_ = function() {};\n\n/**\n * @param {!File|!Blob|!MediaSource|!MediaStream} arg\n * @return {string}\n */\ngoog.fs.url.UrlObject_.prototype.createObjectURL = function(arg) {};\n\n/**\n * @param {string} s\n */\ngoog.fs.url.UrlObject_.prototype.revokeObjectURL = function(s) {};\n\n\n/**\n * Get the object that has the createObjectURL and revokeObjectURL functions for\n * this browser.\n *\n * @return {!goog.fs.url.UrlObject_} The object for this browser.\n * @private\n */\ngoog.fs.url.getUrlObject_ = function() {\n  'use strict';\n  const urlObject = goog.fs.url.findUrlObject_();\n  if (urlObject != null) {\n    return urlObject;\n  } else {\n    throw new Error('This browser doesn\\'t seem to support blob URLs');\n  }\n};\n\n\n/**\n * Finds the object that has the createObjectURL and revokeObjectURL functions\n * for this browser.\n *\n * @return {?goog.fs.url.UrlObject_} The object for this browser or null if the\n *     browser does not support Object Urls.\n * @private\n */\ngoog.fs.url.findUrlObject_ = function() {\n  'use strict';\n  // This is what the spec says to do\n  // http://dev.w3.org/2006/webapi/FileAPI/#dfn-createObjectURL\n  if (goog.global.URL !== undefined &&\n      goog.global.URL.createObjectURL !== undefined) {\n    return /** @type {!goog.fs.url.UrlObject_} */ (goog.global.URL);\n    // This is what Chrome does (as of 10.0.648.6 dev)\n  } else if (\n      goog.global.webkitURL !== undefined &&\n      goog.global.webkitURL.createObjectURL !== undefined) {\n    return /** @type {!goog.fs.url.UrlObject_} */ (goog.global.webkitURL);\n    // This is what the spec used to say to do\n  } else if (goog.global.createObjectURL !== undefined) {\n    return /** @type {!goog.fs.url.UrlObject_} */ (goog.global);\n  } else {\n    return null;\n  }\n};\n\n\n/**\n * Checks whether this browser supports Object Urls. If not, calls to\n * createObjectUrl and revokeObjectUrl will result in an error.\n *\n * @return {boolean} True if this browser supports Object Urls.\n */\ngoog.fs.url.browserSupportsObjectUrls = function() {\n  'use strict';\n  return goog.fs.url.findUrlObject_() != null;\n};\n","~:compiled-at",1624255573873,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fs.url.js\",\n\"lineCount\":40,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,aAAb,CAAA;AAWAD,IAAKE,CAAAA,EAAGC,CAAAA,GAAIC,CAAAA,eAAZ,GAA8BC,QAAQ,CAACC,GAAD,CAAM;AAE1C,SAAON,IAAKE,CAAAA,EAAGC,CAAAA,GAAII,CAAAA,aAAZ,EAA4BC,CAAAA,eAA5B,CAA4CF,GAA5C,CAAP;AAF0C,CAA5C;AAYAN,IAAKE,CAAAA,EAAGC,CAAAA,GAAIM,CAAAA,eAAZ,GAA8BC,QAAQ,CAACP,GAAD,CAAM;AAE1CH,MAAKE,CAAAA,EAAGC,CAAAA,GAAII,CAAAA,aAAZ,EAA4BI,CAAAA,eAA5B,CAA4CR,GAA5C,CAAA;AAF0C,CAA5C;AAUAH,IAAKE,CAAAA,EAAGC,CAAAA,GAAIS,CAAAA,UAAZ,GAAyBC,QAAQ,EAAG;CAApC;AAMAb,IAAKE,CAAAA,EAAGC,CAAAA,GAAIS,CAAAA,UAAWE,CAAAA,SAAUN,CAAAA,eAAjC,GAAmDO,QAAQ,CAACC,GAAD,CAAM;CAAjE;AAKAhB,IAAKE,CAAAA,EAAGC,CAAAA,GAAIS,CAAAA,UAAWE,CAAAA,SAAUH,CAAAA,eAAjC,GAAmDM,QAAQ,CAACC,CAAD,CAAI;CAA/D;AAUAlB,IAAKE,CAAAA,EAAGC,CAAAA,GAAII,CAAAA,aAAZ,GAA4BY,QAAQ,EAAG;AAErC,QAAMC,YAAYpB,IAAKE,CAAAA,EAAGC,CAAAA,GAAIkB,CAAAA,cAAZ,EAAlB;AACA,MAAID,SAAJ,IAAiB,IAAjB;AACE,WAAOA,SAAP;AADF;AAGE,UAAM,IAAIE,KAAJ,CAAU,gDAAV,CAAN;AAHF;AAHqC,CAAvC;AAmBAtB,IAAKE,CAAAA,EAAGC,CAAAA,GAAIkB,CAAAA,cAAZ,GAA6BE,QAAQ,EAAG;AAItC,MAAIvB,IAAKwB,CAAAA,MAAOC,CAAAA,GAAhB,KAAwBC,SAAxB,IACI1B,IAAKwB,CAAAA,MAAOC,CAAAA,GAAIjB,CAAAA,eADpB,KACwCkB,SADxC;AAEE,WAA+C1B,IAAKwB,CAAAA,MAAOC,CAAAA,GAA3D;AAFF;AAIO,QACHzB,IAAKwB,CAAAA,MAAOG,CAAAA,SADT,KACuBD,SADvB,IAEH1B,IAAKwB,CAAAA,MAAOG,CAAAA,SAAUnB,CAAAA,eAFnB,KAEuCkB,SAFvC;AAGL,aAA+C1B,IAAKwB,CAAAA,MAAOG,CAAAA,SAA3D;AAHK;AAKA,UAAI3B,IAAKwB,CAAAA,MAAOhB,CAAAA,eAAhB,KAAoCkB,SAApC;AACL,eAA+C1B,IAAKwB,CAAAA,MAApD;AADK;AAGL,eAAO,IAAP;AAHK;AALA;AAJP;AAJsC,CAAxC;AA2BAxB,IAAKE,CAAAA,EAAGC,CAAAA,GAAIyB,CAAAA,yBAAZ,GAAwCC,QAAQ,EAAG;AAEjD,SAAO7B,IAAKE,CAAAA,EAAGC,CAAAA,GAAIkB,CAAAA,cAAZ,EAAP,IAAuC,IAAvC;AAFiD,CAAnD;;\",\n\"sources\":[\"goog/fs/url.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Wrapper for URL and its createObjectUrl and revokeObjectUrl\\n * methods that are part of the HTML5 File API.\\n */\\n\\ngoog.provide('goog.fs.url');\\n\\n\\n/**\\n * Creates a blob URL for a blob object.\\n * Throws an error if the browser does not support Object Urls.\\n *\\n * @param {!File|!Blob|!MediaSource|!MediaStream} obj The object for which\\n *   to create the URL.\\n * @return {string} The URL for the object.\\n */\\ngoog.fs.url.createObjectUrl = function(obj) {\\n  'use strict';\\n  return goog.fs.url.getUrlObject_().createObjectURL(obj);\\n};\\n\\n\\n/**\\n * Revokes a URL created by {@link goog.fs.url.createObjectUrl}.\\n * Throws an error if the browser does not support Object Urls.\\n *\\n * @param {string} url The URL to revoke.\\n */\\ngoog.fs.url.revokeObjectUrl = function(url) {\\n  'use strict';\\n  goog.fs.url.getUrlObject_().revokeObjectURL(url);\\n};\\n\\n\\n/**\\n * @record\\n * @private\\n */\\ngoog.fs.url.UrlObject_ = function() {};\\n\\n/**\\n * @param {!File|!Blob|!MediaSource|!MediaStream} arg\\n * @return {string}\\n */\\ngoog.fs.url.UrlObject_.prototype.createObjectURL = function(arg) {};\\n\\n/**\\n * @param {string} s\\n */\\ngoog.fs.url.UrlObject_.prototype.revokeObjectURL = function(s) {};\\n\\n\\n/**\\n * Get the object that has the createObjectURL and revokeObjectURL functions for\\n * this browser.\\n *\\n * @return {!goog.fs.url.UrlObject_} The object for this browser.\\n * @private\\n */\\ngoog.fs.url.getUrlObject_ = function() {\\n  'use strict';\\n  const urlObject = goog.fs.url.findUrlObject_();\\n  if (urlObject != null) {\\n    return urlObject;\\n  } else {\\n    throw new Error('This browser doesn\\\\'t seem to support blob URLs');\\n  }\\n};\\n\\n\\n/**\\n * Finds the object that has the createObjectURL and revokeObjectURL functions\\n * for this browser.\\n *\\n * @return {?goog.fs.url.UrlObject_} The object for this browser or null if the\\n *     browser does not support Object Urls.\\n * @private\\n */\\ngoog.fs.url.findUrlObject_ = function() {\\n  'use strict';\\n  // This is what the spec says to do\\n  // http://dev.w3.org/2006/webapi/FileAPI/#dfn-createObjectURL\\n  if (goog.global.URL !== undefined &&\\n      goog.global.URL.createObjectURL !== undefined) {\\n    return /** @type {!goog.fs.url.UrlObject_} */ (goog.global.URL);\\n    // This is what Chrome does (as of 10.0.648.6 dev)\\n  } else if (\\n      goog.global.webkitURL !== undefined &&\\n      goog.global.webkitURL.createObjectURL !== undefined) {\\n    return /** @type {!goog.fs.url.UrlObject_} */ (goog.global.webkitURL);\\n    // This is what the spec used to say to do\\n  } else if (goog.global.createObjectURL !== undefined) {\\n    return /** @type {!goog.fs.url.UrlObject_} */ (goog.global);\\n  } else {\\n    return null;\\n  }\\n};\\n\\n\\n/**\\n * Checks whether this browser supports Object Urls. If not, calls to\\n * createObjectUrl and revokeObjectUrl will result in an error.\\n *\\n * @return {boolean} True if this browser supports Object Urls.\\n */\\ngoog.fs.url.browserSupportsObjectUrls = function() {\\n  'use strict';\\n  return goog.fs.url.findUrlObject_() != null;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"fs\",\"url\",\"createObjectUrl\",\"goog.fs.url.createObjectUrl\",\"obj\",\"getUrlObject_\",\"createObjectURL\",\"revokeObjectUrl\",\"goog.fs.url.revokeObjectUrl\",\"revokeObjectURL\",\"UrlObject_\",\"goog.fs.url.UrlObject_\",\"prototype\",\"goog.fs.url.UrlObject_.prototype.createObjectURL\",\"arg\",\"goog.fs.url.UrlObject_.prototype.revokeObjectURL\",\"s\",\"goog.fs.url.getUrlObject_\",\"urlObject\",\"findUrlObject_\",\"Error\",\"goog.fs.url.findUrlObject_\",\"global\",\"URL\",\"undefined\",\"webkitURL\",\"browserSupportsObjectUrls\",\"goog.fs.url.browserSupportsObjectUrls\"]\n}\n"]