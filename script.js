/* prettier-ignore */
const packages = ["chalk", "glob", "axios", "vue", "semver", "express", "commander", "js-yaml", "minimatch", "lodash", "debug", "tslib", "ajv", "fs-extra", "async", "yargs", "lru-cache", "uuid", "ms", "moment", "react", "mkdirp", "minimist", "inquirer", "open", "execa", "form-data", "bluebird", "webpack", "rimraf", "dotenv", "body-parser", "ora", "typescript", "ws", "escape-string-regexp", "colors", "eslint", "compression", "node-fetch", "immutable", "react-dom", "qs", "html-webpack-plugin", "underscore", "prop-types", "rxjs", "cross-spawn", "json5", "core-js", "chokidar", "postcss", "through2", "classnames", "argparse", "q", "jsonwebtoken", "cheerio", "rollup", "shelljs", "util", "winston", "buffer", "ansi-styles", "marked", "mime", "ip", "ejs", "color-convert", "autoprefixer", "mocha", "xml2js", "bytes", "find-up", "babel-loader", "jquery", "slash", "css-loader", "joi", "loader-utils", "@types/node", "depd", "crypto-js", "socket.io", "aws-sdk", "jsdom", "redux", "yaml", "co", "statuses", "cors", "handlebars", "style-loader", "path-to-regexp", "nanoid", "prettier", "del", "uglify-js", "connect", "@types/express", "object-assign", "iconv-lite", "expect", "jsonfile", "superagent", "protobufjs", "jest", "has-flag", "webpack-dev-server", "eslint-plugin-react", "merge-stream", "got", "fast-glob", "bn.js", "on-finished", "validator", "dayjs", "nodemailer", "sass", "globby", "chai", "bootstrap", "url-parse", "ramda", "mongodb", "brace-expansion", "less", "entities", "pretty-format", "eslint-plugin-import", "mongoose", "accepts", "react-router", "react-redux", "mime-types", "resolve", "react-is", "estraverse", "nan", "babel-core", "morgan", "readable-stream", "gulp", "reflect-metadata", "sass-loader", "nodemon", "ansi-regex", "file-loader", "meow", "postcss-loader", "graceful-fs", "graphql", "lodash.merge", "finalhandler", "inherits", "node-sass", "query-string", "whatwg-fetch", "markdown-it", "progress", "npm", "redis", "camelcase", "serve-static", "promise", "cookie", "source-map", "color-name", "js-cookie", "@babel/runtime", "events", "pify", "cross-env", "escape-html", "react-router-dom", "balanced-match", "date-fns", "copy-webpack-plugin", "through", "he", "esprima", "deepmerge", "ajv-keywords", "pm2", "pretty-bytes", "acorn", "ts-node", "source-map-support", "tmp", "postcss-import", "http-proxy", "url", "extend", "run-parallel", "url-loader", "lodash.debounce", "concat-map", "array-flatten", "flat", "picocolors", "concat-stream", "xlsx", "diff", "clone", "whatwg-url", "pump", "braces", "long", "@types/react-dom", "browserify", "@babel/core", "ioredis", "busboy", "cookie-parser", "content-type", "convert-source-map", "ini", "es6-promise", "log-symbols", "@types/lodash", "update-notifier", "http-errors", "htmlparser2", "tapable", "webpack-merge", "merge2", "eventemitter3", "content-disposition", "esbuild", "http-proxy-middleware", "pg", "@types/yargs", "cookie-signature", "object-hash", "xtend", "strip-ansi", "base64-js", "styled-components", "babel-runtime", "text-table", "combined-stream", "isomorphic-fetch", "tar", "history", "once", "dedent", "socket.io-client", "micromatch", "multer", "glob-parent", "react-scripts", "sharp", "passport", "eslint-config-prettier", "universalify", "@babel/preset-env", "mysql", "formidable", "strip-bom", "node-notifier", "moment-timezone", "highlight.js", "clean-css", "yarn", "which", "arg", "supports-color", "eslint-config-airbnb", "webpack-bundle-analyzer", "cli-spinners", "path-exists", "react-native", "assert", "serve", "fsevents", "color", "husky", "mz", "webpack-dev-middleware", "ipaddr.js", "fs.realpath", "koa", "sprintf-js", "@testing-library/user-event", "optimist", "@types/react", "locate-path", "supertest", "validate-npm-package-name", "eslint-plugin-jsx-a11y", "i18next", "globals", "npmlog", "kind-of", "sinon", "dateformat", "log4js", "md5", "etag", "express-session", "espree", "bcrypt", "sequelize", "bcryptjs", "next", "magic-string", "tough-cookie", "file-type", "archiver", "nopt", "vue-router", "@angular/core", "yargs-parser", "node-addon-api", "arrify", "luxon", "antd", "puppeteer", "react-transition-group", "browserslist", "strip-json-comments", "array-union", "path", "eventemitter2", "doctrine", "tsconfig-paths", "big.js", "clsx", "fastq", "helmet", "rc", "redux-thunk", "callsites", "cssnano", "pretty-ms", "bignumber.js", "@testing-library/react", "@testing-library/jest-dom", "tailwindcss", "event-stream", "serialize-javascript", "fresh", "destroy", "node-gyp", "parse5", "d3", "prompts", "fast-xml-parser", "require-from-string", "svgo", "sax", "invariant", "bl", "deep-equal", "babel-plugin-istanbul", "json-stringify-safe", "eslint-plugin-prettier", "eslint-plugin-jest", "js-beautify", "split2", "jsdoc", "domhandler", "cosmiconfig", "grunt", "reusify", "serve-favicon", "type-fest", "sqlite3", "require-directory", "compressible", "verror", "karma", "bowser", "colorette", "faker", "readdirp", "stylus", "@types/jsonwebtoken", "aproba", "regenerator-runtime", "case-sensitive-paths-webpack-plugin", "punycode", "cli-table", "ignore", "pako", "vary", "bindings", "escodegen", "babel-jest", "node-forge", "ncp", "safe-buffer", "jszip", "bunyan", "send", "is-number", "discord.js", "gulp-rename", "raw-body", "less-loader", "anymatch", "get-stream", "blessed", "asap", "xmlbuilder", "pkg-dir", "vuex", "pluralize", "cliui", "fast-deep-equal", "zone.js", "psl", "babel-plugin-macros", "shortid", "json-schema-traverse", "browser-sync", "delayed-stream", "eslint-config-airbnb-base", "retry", "html-entities", "babel-polyfill", "acorn-jsx", "split", "make-dir", "p-limit", "pug", "temp", "source-map-loader", "babel-preset-react-app", "gulp-uglify", "lodash-es", "font-awesome", "is-callable", "minipass", "parseurl", "configstore", "idb", "mustache", "config", "reselect", "image-size", "npm-run-all", "https-proxy-agent", "figures", "axe-core", "html-minifier", "http-server", "chownr", "ts-loader", "http-status", "jest-cli", "file-saver", "ua-parser-js", "three", "@babel/preset-react", "JSONStream", "express-validator", "jsesc", "cookie-session", "type-is", "loader-runner", "resolve-from", "clone-deep", "concurrently", "boxen", "qrcode", "command-line-args", "yeoman-generator", "react-select", "googleapis", "localforage", "gulp-sass", "commondir", "react-icons", "clipboardy", "memfs", "preact", "jshint", "firebase", "debounce", "cross-fetch", "isarray", "emittery", "filesize", "mime-db", "mri", "table", "webpack-cli", "enhanced-resolve", "stylelint", "webpack-hot-middleware", "react-dev-utils", "querystringify", "end-of-stream", "gulp-concat", "hoist-non-react-statics", "jest-util", "webpack-manifest-plugin", "raf", "eslint-scope", "figlet", "codemirror", "big-integer", "gulp-sourcemaps", "simple-git", "canvas", "untildify", "lz-string", "methods", "parse-json", "terser", "process", "mysql2", "download", "http-proxy-agent", "memory-fs", "read-pkg-up", "is-glob", "string-width", "prismjs", "eslint-plugin-flowtype", "change-case", "@types/ws", "is-stream", "cron", "string_decoder", "js-base64", "ansi-escapes", "detective", "has", "jest-worker", "prompt", "elliptic", "pino", "esquery", "consolidate", "@typescript-eslint/parser", "fast-levenshtein", "traverse", "babel-preset-env", "tweetnacl", "agentkeepalive", "requires-port", "object-inspect", "batch", "@angular/common", "@angular/router", "p-map", "postcss-nested", "d3-scale", "knex", "adm-zip", "jimp", "css", "eslint-visitor-keys", "optimize-css-assets-webpack-plugin", "signal-exit", "amqplib", "leven", "selenium-webdriver", "normalize-path", "memoize-one", "normalize.css", "deep-extend", "read-pkg", "nyc", "cli-color", "mini-css-extract-plugin", "swiper", "follow-redirects", "recursive-readdir", "pretty-error", "cli", "is-plain-object", "vite", "decamelize", "vinyl", "log-update", "common-tags", "jest-mock", "for-each", "is-core-module", "assert-plus", "resolve-url-loader", "@angular/compiler", "decimal.js", "wrap-ansi", "schema-utils", "enquirer", "performance-now", "domutils", "y18n", "node-schedule", "connect-history-api-fallback", "react-dropzone", "nock", "underscore.string", "react-helmet", "@babel/plugin-proposal-class-properties", "warning", "jsonc-parser", "normalize-url", "portfinder", "react-bootstrap", "get-intrinsic", "type-check", "utils-merge", "@babel/types", "emoji-regex", "merge-descriptors", "npm-package-arg", "gm", "ts-jest", "babel-plugin-transform-react-remove-prop-types", "neo-async", "@types/qs", "core-util-is", "oauth", "node-cache", "@angular/forms", "human-signals", "chart.js", "eslint-plugin-promise", "unfetch", "dot-prop", "mqtt", "eslint-plugin-react-hooks", "isomorphic-unfetch", "@jest/types", "raw-loader", "defined", "@babel/plugin-syntax-dynamic-import", "inflight", "unique-filename", "yallist", "yauzl", "dompurify", "optionator", "load-json-file", "node-dir", "needle", "@babel/plugin-transform-runtime", "negotiator", "string-length", "clipboard", "onetime", "yamljs", "dotenv-expand", "object.assign", "@angular/platform-browser-dynamic", "global", "@babel/generator", "ansi-colors", "postcss-flexbugs-fixes", "interpret", "eslint-config-react-app", "bower", "nconf", "jest-message-util", "vue-loader", "has-symbols", "js-tokens", "asynckit", "define-properties", "xmldom", "tempy", "safe-regex", "range-parser", "pdfjs-dist", "strip-final-newline", "http-status-codes", "jwt-decode", "function-bind", "loglevel", "is-generator-function", "isobject", "lint-staged", "url-join", "supports-preserve-symlinks-flag", "spdy", "mathjs", "write-file-atomic", "webpack-sources", "@angular/platform-browser", "errorhandler", "uri-js", "clean-webpack-plugin", "terser-webpack-plugin", "generic-pool", "atob", "babel-preset-react", "cli-truncate", "jws", "isexe", "tree-kill", "serialize-error", "rfdc", "wrappy", "@angular/animations", "delegates", "prelude-ls", "react-i18next", "component-emitter", "basic-auth", "any-promise", "graphql-tag", "babel-cli", "proxy-addr", "caniuse-lite", "@rollup/plugin-node-resolve", "word-wrap", "normalize-package-data", "glob-to-regexp", "@types/body-parser", "node-emoji", "side-channel", "base-64", "fill-range", "rsvp", "get-stdin", "sockjs", "cookies", "jest-snapshot", "vue-template-compiler", "is-buffer", "bser", "serve-index", "enzyme", "kleur", "to-regex-range", "babel-register", "babylon", "csso", "path-parse", "make-error", "crypto-browserify", "grunt-cli", "gzip-size", "json-schema", "sha.js", "extract-zip", "jest-matcher-utils", "aws4", "jest-get-type", "randombytes", "is-docker", "tr46", "cacache", "jsonschema", "immer", "jest-regex-util", "svelte", "js2xmlparser", "listr", "estree-walker", "html-escaper", "hash.js", "json-stable-stringify", "delay", "react-test-renderer", "gulp-autoprefixer", "merge", "p-locate", "is-arguments", "esutils", "wordwrap", "should", "stack-trace", "hosted-git-info", "archy", "path-key", "queue-microtask", "opener", "d3-array", "yocto-queue", "lodash.clonedeep", "mssql", "styled-jsx", "continuation-local-storage", "extend-shallow", "worker-farm", "numeral", "builtins", "indent-string", "webpack-node-externals", "lodash.isequal", "btoa", "rechoir", "echarts", "eslint-config-standard", "xregexp", "loose-envify", "bs58", "util-deprecate", "throttle-debounce", "jest-haste-map", "path-browserify", "imagemin", "eslint-plugin-node", "is-plain-obj", "class-transformer", "map-stream", "on-headers", "has-value", "dezalgo", "cli-progress", "gulp-if", "get-port", "eris", "webidl-conversions", "passport-local", "passport-jwt", "gauge", "abbrev", "@emotion/react", "@babel/plugin-proposal-object-rest-spread", "fast-diff", "unique-slug", "@aws-sdk/types", "cssom", "polished", "npm-run-path", "regexp.prototype.flags", "csvtojson", "ssh2", "builtin-modules", "fbjs", "ionicons", "find-cache-dir", "stripe", "base64url", "class-validator", "gulp-babel", "jsbn", "commitizen", "gulp-imagemin", "tape", "connect-redis", "vue-i18n", "duplexify", "unified", "websocket", "d3-selection", "setimmediate", "@types/debug", "@typescript-eslint/eslint-plugin", "get-value", "electron", "camelize", "element-ui", "koa-router", "exit", "is-typed-array", "lodash.get", "resize-observer-polyfill", "event-target-shim", "jest-diff", "ci-info", "path-type", "d3-shape", "dashdash", "babelify", "d3-format", "type-detect", "jake", "set-value", "object-path", "react-modal", "@nestjs/core", "tar-stream", "encodeurl", "@mui/material", "when", "update-browserslist-db", "config-chain", "cli-cursor", "lodash.throttle", "picomatch", "postcss-selector-parser", "upath", "fb-watchman", "@types/mime", "humanize-ms", "ftp", "serverless", "sanitize-html", "tunnel-agent", "object-keys", "@types/chai", "flat-cache", "setprototypeof", "es6-promisify", "nprogress", "defaults", "csv-parse", "jasmine", "fast-csv", "shebang-regex", "copy-to-clipboard", "buffer-from", "redux-saga", "mobx", "@babel/plugin-syntax-nullish-coalescing-operator", "shebang-command", "throat", "gaze", "has-property-descriptors", "jest-circus", "@types/estree", "shell-quote", "dlv", "express-rate-limit", "mississippi", "fuse.js", "is-binary-path", "duplexer", "process-nextick-args", "dom-helpers", "xml", "react-intl", "wcwidth", "vinyl-fs", "liftoff", "glob-promise", "babel-plugin-styled-components", "ethers", "fork-ts-checker-webpack-plugin", "lie", "identity-obj-proxy", "snyk", "watchify", "backbone", "import-local", "@aws-crypto/sha256-js", "gulp-plumber", "pnpm", "css-select", "tinycolor2", "@babel/plugin-syntax-import-meta", "regexpp", "csv", "buffer-crc32", "react-hot-loader", "npm-check-updates", "camelcase-keys", "@nestjs/common", "address", "@typescript-eslint/utils", "@babel/code-frame", "levn", "is-extglob", "tar-fs", "@angular/cli", "event-emitter", "@angular-devkit/schematics", "is-arrayish", "natural-compare", "leaflet", "repeat-string", "faye-websocket", "eslint-plugin-vue", "cpy", "memory-cache", "functions-have-names", "jscodeshift", "imurmurhash", "d3-color", "readline", "caseless", "function.prototype.name", "wildcard", "diff-sequences", "babel-plugin-transform-object-rest-spread", "hammerjs", "stylelint-scss", "unbox-primitive", "http-signature", "string.prototype.trimend", "string.prototype.trimstart", "promise-retry", "error-ex", "ee-first", "fastify", "stream-combiner", "ajv-formats", "node-int64", "workerpool", "html2canvas", "bson", "console-control-strings", "jsx-ast-utils", "es-abstract", "forever", "method-override", "array-unique", "shallowequal", "swagger-ui-express", "react-dnd", "lit-html", "restify", "app-root-path", "touch", "thenify", "rx", "gh-pages", "is-shared-array-buffer", "@types/jest", "watch"];

let timeTilNextSpawn = Math.random() * 4;
let step = 0;
let base = document.querySelector("main");
let pkgs = [];
let glitch = false;
function frame() {
    timeTilNextSpawn = Math.random() * 1;
    const pkg = document.createElement("span");
    let pkgname = packages[Math.floor(Math.random() * packages.length)];
    pkg.innerHTML = `installing <span>${pkgname}</span>`;
    if (glitch) {
        pkg.dataset.text = "installing " + pkgname;
        pkg.style.setProperty('--duration', `${glitch}s`);
        pkg.style.setProperty('--distance', `${1 / (glitch) - 1}px`);
        pkg.style.setProperty('--ndistance', `-${1 / (glitch) - 1}px`);
    }
    base.appendChild(pkg);
    pkgs.push(pkg);
    if (pkgs.length > 100) {
        let pkg = pkgs.shift();
        base?.removeChild(pkg);
    }
    window.requestAnimationFrame(frame);
}

let pkgManagers = ["npm install", "pnpm install", "yarn add", "bun install"];
let cmdText = `${pkgManagers[Math.floor(Math.random() * pkgManagers.length)]
    } everything`;
let cmd = document.querySelector(".first > p");
let caret = document.querySelector(".caret");

function type() {
    if (step != cmdText.length) {
        cmd.textContent += cmdText[step];
        step++;
        setTimeout(() => {
            window.requestAnimationFrame(type);
        }, Math.random() * 30 + 100);
    } else {
        caret.classList.add("blink");
        step = -1;
        //setTimeout(() => caret.remove(), 100)
        setTimeout(() => {
            window.requestAnimationFrame(frame);
        }, 1000);
    }
}

setTimeout(() => {
    window.requestAnimationFrame(type);
    caret.classList.remove("blink");
}, 2000);

let audio = new Audio("fan.mp3");
let vid = document.querySelector("video")
vid.load()
audio.addEventListener('ended', () => {
    vid.style.opacity = "1"
    setTimeout(() => vid.play(), 1000)
})
vid.addEventListener('ended', () => {
    window.location = "https://github.com/everything-registry/everything"
})

// play sound on user interaction
document.body.addEventListener('click', function () {
    audio.volume = 0;
    audio.play();
    let interval = setInterval(function () {
        audio.volume += 0.0001;
        if (audio.volume >= 0.25) {
            audio.volume = 0.25;
            clearInterval(interval);
        }
    }, 10);
}, { once: true });

// trigger glitch effect after 10 seconds
setTimeout(() => {
    glitch = 1;
    function increaseto3() {
        let interval3 = setInterval(function () {
            glitch += 0.001;
            if (glitch >= 0.3) {
                glitch = 0.3;
                clearInterval(interval3);
            }
        }, 10);
    }
    let interval2 = setInterval(function () {
        glitch -= 0.001;
        if (glitch <= 0.001) {
            glitch = 0.001;
            clearInterval(interval2);
            increaseto3();
        }
    }, 10);
}, 10_000);
