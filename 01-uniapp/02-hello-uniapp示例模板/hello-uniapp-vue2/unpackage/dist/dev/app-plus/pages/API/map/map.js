"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/uni-cloud-stat.es.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uniCloud) {function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 获取系统信息
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */
var sys = uni.getSystemInfoSync();

// 访问开始即启动小程序，访问结束结分为：进入后台超过5min、在前台无任何操作超过30min、在新的来源打开小程序；
var STAT_VERSION = "3.6.5";
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800; // 页面在前台无操作结束访问时间 单位s
var APP_PVER_TIME = 300; // 应用在后台结束访问时间 单位s
var OPERATING_TIME = 10; // 数据上报时间 单位s
var DIFF_TIME = 60 * 1000 * 60 * 24;

// 获取 manifest.json 中统计配置
var uniStatisticsConfig = {"version":"2","enable":true};
var statConfig = {
  appid: "" };

var titleJsons = {};
var debug =  false || false;






// eslint-disable-next-line no-restricted-globals
var pagesTitle = __webpack_require__(/*! uni-pages?{"type":"style"} */ 8).default;
var pagesData = pagesTitle.pages;
for (var i in pagesData) {var _style$navigationBar;
  var style = pagesData[i];
  var titleText =
  // MP
  style.navigationBarTitleText ||
  // ali
  style.defaultTitle || (
  // H5 || App
  (_style$navigationBar = style.navigationBar) === null || _style$navigationBar === void 0 ? void 0 : _style$navigationBar.titleText) ||
  '';
  if (titleText) {
    titleJsons[i] = titleText;
  }
}


// TODO 在云函数中获取，暂时注释
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';
function getUuid() {
  var uuid = '';
  if (get_platform_name() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var get_uuid = function get_uuid(statData) {
  // 有可能不存在 deviceId（一般不存在就是出bug了），就自己生成一个
  return sys.deviceId || getUuid();
};

/**
    * 获取配置信息 如 appid
    */
var stat_config = statConfig;

var get_sgin = function get_sgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }

  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var get_encodeURIComponent_options = function get_encodeURIComponent_options(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

/**
    * 获取当前平台
    * 移动端  : 'n',
    * h5	  : 'h5',
    * 微信	  : 'wx',
    * 阿里	  : 'ali',
    * 百度	  : 'bd',
    * 头条	  : 'tt',
    * qq	  : 'qq',
    * 快应用  : 'qn',
    * 快手	  : 'ks',
    * 飞书	  : 'lark',
    * 快应用  : 'qw',
    * 钉钉	  : 'dt'
    */
var get_platform_name = function get_platform_name() {var _platformList;
  // 苹果审核代码中禁止出现 alipay 字样 ，需要特殊处理一下
  var aliArr = ['y', 'a', 'p', 'mp-ali'];
  var platformList = (_platformList = {
    app: 'n',
    'app-plus': 'n',
    h5: 'h5',
    'mp-weixin': 'wx' }, _defineProperty(_platformList,
  aliArr.reverse().join(''), 'ali'), _defineProperty(_platformList,
  'mp-baidu', 'bd'), _defineProperty(_platformList,
  'mp-toutiao', 'tt'), _defineProperty(_platformList,
  'mp-qq', 'qq'), _defineProperty(_platformList,
  'quickapp-native', 'qn'), _defineProperty(_platformList,
  'mp-kuaishou', 'ks'), _defineProperty(_platformList,
  'mp-lark', 'lark'), _defineProperty(_platformList,
  'quickapp-webview', 'qw'), _platformList);

  if (platformList["app-plus"] === 'ali') {
    if (my && my.env) {
      var clientName = my.env.clientName;
      if (clientName === 'ap') return 'ali';
      if (clientName === 'dingtalk') return 'dt';
      // TODO 缺少 ali 下的其他平台
    }
  }
  return platformList["app-plus"];
};

/**
    * 获取小程序 appid
    */
var get_pack_name = function get_pack_name() {
  var packName = '';
  if (get_platform_name() === 'wx' || get_platform_name() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  if (get_platform_name() === 'n') ;
  return packName;
};

/**
    * 应用版本
    */
var get_version = function get_version() {
  return get_platform_name() === 'n' ? plus.runtime.version : '';
};

/**
    * 获取渠道
    */
var get_channel = function get_channel() {
  var platformName = get_platform_name();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

/**
    * 获取小程序场景值
    * @param {Object} options 页面信息
    */
var get_scene = function get_scene(options) {
  var platformName = get_platform_name();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};

/**
    * 获取页面url，不包含参数
    */
var get_route$1 = function get_route$1(pageVm) {
  var _self = pageVm || get_page_vm();
  if (get_platform_name() === 'bd') {
    var mp_route = _self.$mp && _self.$mp.page && _self.$mp.page.is;
    var scope_route = _self.$scope && _self.$scope.is;
    return mp_route || scope_route || '';
  } else {
    return (
      _self.route ||
      _self.$scope && _self.$scope.route ||
      _self.$mp && _self.$mp.page.route);

  }
};

/**
    * 获取页面url, 包含参数
    */
var get_page_route = function get_page_route(pageVm) {
  // 从 app 进入应用 ，没有 $page ,获取不到路由 ，需要获取页面 尝试从 getCurrentPages 获取也页面实例
  // FIXME 尽量不使用 getCurrentPages ，大部分获取路由是从 onHide 获取 ，这时可以获取到，如果是 onload ,则可能获取不到，比如 百度

  var page = pageVm && (pageVm.$page || pageVm.$scope && pageVm.$scope.$page);
  var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
  if (!page) return lastPageRoute || '';
  // 如果找不到 fullPath 就取 route 的值
  return page.fullPath === '/' ? page.route : page.fullPath || page.route;
};

/**
    * 获取页面实例
    */
var get_page_vm = function get_page_vm() {
  var pages = getCurrentPages();
  var $page = pages[pages.length - 1];
  if (!$page) return null;
  return $page.$vm;
};

/**
    * 获取页面类型
    */
var get_page_types = function get_page_types(self) {
  // XXX 百度有问题 ，获取的都是 componet ,等待修复
  if (
  self.mpType === 'page' ||
  self.$mpType === 'page' ||
  self.$mp && self.$mp.mpType === 'page' ||
  self.$options.mpType === 'page')
  {
    return 'page';
  }
  if (
  self.mpType === 'app' ||
  self.$mpType === 'app' ||
  self.$mp && self.$mp.mpType === 'app' ||
  self.$options.mpType === 'app')
  {
    return 'app';
  }
  return null;
};

/**
    * 处理上报参数
    * @param {Object}  需要处理的数据
    */
var handle_data = function handle_data(statData) {
  var firstArr = [];
  var contentArr = [];
  var lastArr = [];var _loop = function _loop(
  _i) {
    var rd = statData[_i];
    rd.forEach(function (elm) {
      var newData = '';
      {
        newData = elm;
      }
      if (_i === 0) {
        firstArr.push(newData);
      } else if (_i === 3) {
        lastArr.push(newData);
      } else {
        contentArr.push(newData);
      }
    });};for (var _i in statData) {_loop(_i);
  }

  firstArr.push.apply(firstArr, contentArr.concat(lastArr));
  // 参数需要处理成字符串，方便上传
  return JSON.stringify(firstArr);
};

/**
    * 自定义事件参数校验
    */
var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report Missing [eventName] parameter");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] Parameter type error, it can only be of type String");


    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] Parameter length cannot be greater than 255");


    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error(
    'uni.report [options] Parameter type error, Only supports String or Object type');

    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] Parameter length cannot be greater than 255");


    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error("uni.report [eventName] When the parameter is title, the [options] parameter can only be of type String");


    return true;
  }
};

var get_page_name = function get_page_name(routepath) {
  return titleJsons && titleJsons[routepath] || '';
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var is_report_data = function is_report_data() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref) {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2) {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }
  });
};

var requestData = function requestData(done) {
  var appid = "";
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var
      data = res.data;
      if (data.ret === 0) {
        typeof done === 'function' &&
        done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      typeof done === 'function' &&
      done({
        enable: report_status_code });

    } });

};

/**
    * 获取uniCloud服务空间配置
    * @returns {Object}
    */
var uni_cloud_config = function uni_cloud_config() {
  return {} || {};
};

/**
    * 获取服务空间
    * @param {*} config
    * @returns
    */
var get_space = function get_space(config) {
  var uniCloudConfig = uni_cloud_config();var
  spaceId = uniCloudConfig.spaceId,provider = uniCloudConfig.provider,clientSecret = uniCloudConfig.clientSecret;
  var space_type = ['tcb', 'tencent', 'aliyun'];
  var is_provider = space_type.indexOf(provider) !== -1;
  var is_aliyun = provider === 'aliyun' && spaceId && clientSecret;
  var is_tcb = (provider === 'tcb' || provider === 'tencent') && spaceId;

  if (is_provider && (is_aliyun || is_tcb)) {
    return uniCloudConfig;
  } else {
    if (config && config.spaceId) {
      return config;
    }
  }

  return null;
};

/**
    * 是否开启 debug 模式
    */
var is_debug = debug;

/**
                       * 日志输出
                       * @param {*} data
                       */
var log = function log(data, type) {
  var msg_type = '';
  switch (data.lt) {
    case '1':
      msg_type = '应用启动';
      break;
    case '3':
      msg_type = '应用进入后台';
      break;

    case '11':
      msg_type = '页面切换';
      break;
    case '21':
      msg_type = '事件触发';
      break;
    case '31':
      msg_type = '应用错误';
      break;
    case '101':
      msg_type = 'PUSH';
      break;}



  // 在 app 中，日志转为 字符串
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }


  if (type) {
    console.log("=== \u7EDF\u8BA1\u961F\u5217\u6570\u636E\u4E0A\u62A5 ===");
    console.log(data);
    console.log("=== \u4E0A\u62A5\u7ED3\u675F ===");
    return;
  }

  if (msg_type) {
    console.log("=== \u7EDF\u8BA1\u6570\u636E\u91C7\u96C6\uFF1A".concat(msg_type, " ==="));
    console.log(data);
    console.log("=== \u91C7\u96C6\u7ED3\u675F ===");
  }
};

/**
    * 获取上报时间间隔
    * @param {*} defaultTime 默认上报间隔时间 单位s
    */
var get_report_Interval = function get_report_Interval(defaultTime) {
  var time = uniStatisticsConfig.reportInterval;
  // 如果上报时间配置为0 相当于立即上报
  if (Number(time) === 0) return 0;
  time = time || defaultTime;
  var reg = /(^[1-9]\d*$)/;
  // 如果不是整数，则默认为上报间隔时间
  if (!reg.test(time)) return defaultTime;
  return Number(time);
};

/**
    * 获取隐私协议配置
    */
var is_push_clientid = function is_push_clientid() {
  if (uniStatisticsConfig.collectItems) {
    var ClientID = uniStatisticsConfig.collectItems.uniPushClientID;
    return typeof ClientID === 'boolean' ? ClientID : false;
  }
  return false;
};

var appid = ""; // 做应用隔离
var dbSet = function dbSet(name, value) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};

  if (!data) {
    data = {};
  }
  data[name] = value;
  uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
};

var dbGet = function dbGet(name) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};
  if (!data[name]) {
    var dbdata = uni.getStorageSync('$$STAT__DBDATA:' + appid);
    if (!dbdata) {
      dbdata = {};
    }
    if (!dbdata[name]) {
      return undefined;
    }
    data[name] = dbdata[name];
  }
  return data[name];
};

var dbRemove = function dbRemove(name) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};
  if (data[name]) {
    delete data[name];
    uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
  } else {
    data = uni.getStorageSync('$$STAT__DBDATA:' + appid);
    if (data[name]) {
      delete data[name];
      uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
    }
  }
};

// 首次访问时间
var FIRST_VISIT_TIME_KEY = '__first__visit__time';
// 最后访问时间
var LAST_VISIT_TIME_KEY = '__last__visit__time';
/**
                                                  * 获取当前时间
                                                  */
var get_time = function get_time() {
  return parseInt(new Date().getTime() / 1000);
};

/**
    * 获取首次访问时间
    */
var get_first_visit_time = function get_first_visit_time() {
  var timeStorge = dbGet(FIRST_VISIT_TIME_KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = get_time();
    dbSet(FIRST_VISIT_TIME_KEY, time);
    // 首次访问需要 将最后访问时间置 0
    dbRemove(LAST_VISIT_TIME_KEY);
  }
  return time;
};

/**
    * 最后访问时间
    */
var get_last_visit_time = function get_last_visit_time() {
  var timeStorge = dbGet(LAST_VISIT_TIME_KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  }
  dbSet(LAST_VISIT_TIME_KEY, get_time());
  return time;
};

// 页面停留时间记录key
var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_Residence_Time = 0;
var Last_Page_Residence_Time = 0;

/**
                                   * 设置页面停留时间
                                   */
var set_page_residence_time = function set_page_residence_time() {
  First_Page_Residence_Time = get_time();
  dbSet(PAGE_RESIDENCE_TIME, First_Page_Residence_Time);
  return First_Page_Residence_Time;
};

/**
    * 获取页面停留时间
    */
var get_page_residence_time = function get_page_residence_time() {
  Last_Page_Residence_Time = get_time();
  First_Page_Residence_Time = dbGet(PAGE_RESIDENCE_TIME);
  return Last_Page_Residence_Time - First_Page_Residence_Time;
};

/**
    * 获取总访问次数
    */
var TOTAL_VISIT_COUNT = '__total__visit__count';
var get_total_visit_count = function get_total_visit_count() {
  var timeStorge = dbGet(TOTAL_VISIT_COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  dbSet(TOTAL_VISIT_COUNT, count);
  return count;
};


var FIRST_TIME = '__first_time';
/**
                                  * 设置页面首次访问时间，用户获取页面/应用停留时常
                                  */
var set_first_time = function set_first_time() {
  var time = new Date().getTime();
  var timeStorge = dbSet(FIRST_TIME, time);
  return timeStorge;
};

/**
    * 获取最后一次时间 ，暂时用不到，直接获取当前时间即可
    */
// export const get_last_time = () => {
// 	let time = new Date().getTime()
// 	Set__Last__Time = time
// 	return time
// }

/**
 * 获取页面 \ 应用停留时间
 */
var get_residence_time = function get_residence_time(type) {
  var residenceTime = 0;
  var first_time = dbGet(FIRST_TIME);
  var last_time = get_time();
  if (first_time !== 0) {
    residenceTime = last_time - first_time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }
  return {
    residenceTime: residenceTime };

};

var eport_Interval = get_report_Interval(OPERATING_TIME);
// 统计数据默认值
var statData = {
  uuid: get_uuid(), // 设备标识
  ak: stat_config.appid, // uni-app 应用 Appid
  p: sys.platform === 'android' ? 'a' : 'i', // 手机系统
  ut: get_platform_name(), // 平台类型
  mpn: get_pack_name(), // 原生平台包名、小程序 appid
  usv: STAT_VERSION, // 统计 sdk 版本
  v: get_version(), // 应用版本，仅app
  ch: get_channel(), // 渠道信息
  cn: '', // 国家
  pn: '', // 省份
  ct: '', // 城市
  t: get_time(), // 上报数据时的时间戳
  tt: '',
  brand: sys.brand || '', // 手机品牌
  md: sys.model, // 手机型号
  sv: sys.system.replace(/(Android|iOS)\s/, ''), // 手机系统版本
  mpsdk: sys.SDKVersion || '', // x程序 sdk version
  mpv: sys.version || '', // 小程序平台版本 ，如微信、支付宝
  lang: sys.language, // 语言
  pr: sys.pixelRatio, // pixelRatio 设备像素比
  ww: sys.windowWidth, // windowWidth 可使用窗口宽度
  wh: sys.windowHeight, // windowHeight 可使用窗口高度
  sw: sys.screenWidth, // screenWidth 屏幕宽度
  sh: sys.screenHeight // screenHeight 屏幕高度
};var
Report = /*#__PURE__*/function () {"use strict";
  function Report() {_classCallCheck(this, Report);
    // 页面实例
    this.self = '';
    // 进入应用标识
    this.__licationShow = false;
    // 离开应用标识
    this.__licationHide = false;
    // 统计默认值
    this.statData = statData;
    // 标题默认值
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };


    // 页面参数
    this._query = {};
    // 页面最后停留页面的 url
    // this._lastPageRoute = ''

    // 注册拦截器
    var registerInterceptor = typeof uni.addInterceptor === 'function';
    if (registerInterceptor) {
      this.addInterceptorInit();
      this.interceptLogin();
      this.interceptShare(true);
      this.interceptRequestPayment();
    }
  }_createClass(Report, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "_login", value: function _login()

    {
      this.sendEventRequest(
      {
        key: 'login' },

      0);

    } }, { key: "_share", value: function _share()

    {
      this.sendEventRequest(
      {
        key: 'share' },

      0);

    } }, { key: "_payment", value: function _payment(
    key) {
      this.sendEventRequest(
      {
        key: key },

      0);

    }

    /**
       * 进入应用触发
       */ }, { key: "applicationShow", value: function applicationShow()
    {
      // 通过 __licationHide 判断保证是进入后台后在次进入应用，避免重复上报数据
      if (this.__licationHide) {
        var time = get_residence_time('app');
        // 需要判断进入后台是否超过时限 ，默认是 30min ，是的话需要执行进入应用的上报
        if (time.overtime) {
          var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
          var options = {
            path: lastPageRoute,
            scene: this.statData.sc,
            cst: 2 };

          this.sendReportRequest(options);
        }
        // 状态重置
        this.__licationHide = false;
      }
    }

    /**
       * 离开应用触发
       * @param {Object} self
       * @param {Object} type
       */ }, { key: "applicationHide", value: function applicationHide(
    self, type) {
      if (!self) {
        // 表示应用切换到后台 ，此时需要从页面栈获取页面实例
        self = get_page_vm();
      }
      // 进入应用后台保存状态，方便进入前台后判断是否上报应用数据
      this.__licationHide = true;
      var time = get_residence_time();
      var route = get_page_route(self);
      uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
      this.sendHideRequest(
      {
        urlref: route,
        urlref_ts: time.residenceTime },

      type);

      // 更新页面首次访问时间
      set_first_time();
    }

    /**
       * 进入页面触发
       */ }, { key: "pageShow", value: function pageShow(
    self) {
      // 清空值 ，初始化 ，避免污染后面的上报数据
      this._navigationBarTitle = {
        config: '',
        page: '',
        report: '',
        lt: '' };


      var route = get_page_route(self);
      var routepath = get_route$1(self);

      this._navigationBarTitle.config = get_page_name(routepath);
      // 表示应用触发 ，页面切换不触发之后的逻辑
      if (this.__licationShow) {
        // 更新页面首次访问时间
        set_first_time();
        // this._lastPageRoute = route
        uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
        this.__licationShow = false;
        return;
      }

      var time = get_residence_time('page');
      // 停留时间
      if (time.overtime) {
        var options = {
          path: route,
          scene: this.statData.sc,
          cst: 3 };

        this.sendReportRequest(options);
      }
      // 更新页面首次访问时间
      set_first_time();
    }

    /**
       * 离开页面触发
       */ }, { key: "pageHide", value: function pageHide(
    self) {
      if (!this.__licationHide) {
        var time = get_residence_time('page');
        var route = get_page_route(self);
        var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
        if (!lastPageRoute) {
          lastPageRoute = route;
        }
        uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
        this.sendPageRequest({
          url: route,
          urlref: lastPageRoute,
          urlref_ts: time.residenceTime });

        // this._lastPageRoute = route
        return;
      }
    }

    /**
       * 发送请求,应用维度上报
       * @param {Object} options 页面信息
       * @param {Boolean} type 是否立即上报
       */ }, { key: "sendReportRequest", value: function sendReportRequest(
    options, type) {
      this._navigationBarTitle.lt = '1';
      this._navigationBarTitle.config = get_page_name(options.path);
      var is_opt = options.query && JSON.stringify(options.query) !== '{}';
      var query = is_opt ? '?' + JSON.stringify(options.query) : '';
      Object.assign(this.statData, {
        lt: '1',
        url: options.path + query || '',
        t: get_time(),
        sc: get_scene(options.scene),
        fvts: get_first_visit_time(),
        lvts: get_last_visit_time(),
        tvc: get_total_visit_count(),
        // create session type  上报类型 ，1 应用进入 2.后台30min进入 3.页面30min进入
        cst: options.cst || 1 });

      if (get_platform_name() === 'n') {
        this.getProperty(type);
      } else {
        this.getNetworkInfo(type);
      }
    }

    /**
       * 发送请求,页面维度上报
       * @param {Object} opt
       */ }, { key: "sendPageRequest", value: function sendPageRequest(
    opt) {var
      url = opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time() };

      this.request(options);
    }

    /**
       * 进入后台上报数据
       * @param {Object} opt
       * @param {Object} type
       */ }, { key: "sendHideRequest", value: function sendHideRequest(
    opt, type) {var
      urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time() };

      this.request(options, type);
    }

    /**
       * 自定义事件上报
       */ }, { key: "sendEventRequest", value: function sendEventRequest()
    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? '' : _ref3$value;
      var routepath = '';

      try {
        routepath = get_route$1();
      } catch (error) {
        var launch_options = dbGet('__launch_options');
        routepath = launch_options.path;
      }

      this._navigationBarTitle.config = get_page_name(routepath);
      this._navigationBarTitle.lt = '21';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '21',
        ut: this.statData.ut,
        url: routepath,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: get_time() };

      this.request(options);
    } }, { key: "sendPushRequest", value: function sendPushRequest(

    options, cid) {var _this = this;
      var time = get_time();

      var statData = {
        lt: '101',
        cid: cid,
        t: time,
        ut: this.statData.ut };


      // debug 打印打点信息
      if (is_debug) {
        log(statData);
      }

      var stat_data = handle_data({
        101: [statData] });

      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: stat_data };


      // XXX 安卓需要延迟上报 ，否则会有未知错误，需要验证处理
      if (get_platform_name() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this.sendRequest(optionsData);
        }, 200);
        return;
      }

      this.sendRequest(optionsData);
    }

    /**
       * 获取wgt资源版本
       */ }, { key: "getProperty", value: function getProperty(
    type) {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo(type);
      });
    }

    /**
       * 获取网络信息
       */ }, { key: "getNetworkInfo", value: function getNetworkInfo(
    type) {var _this3 = this;
      uni.getNetworkType({
        success: function success(result) {
          _this3.statData.net = result.networkType;
          _this3.getLocation(type);
        } });

    }

    /**
       * 获取位置信息
       */ }, { key: "getLocation", value: function getLocation(
    type) {var _this4 = this;
      if (stat_config.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this4.statData.cn = result.address.country;
              _this4.statData.pn = result.address.province;
              _this4.statData.ct = result.address.city;
            }

            _this4.statData.lat = result.latitude;
            _this4.statData.lng = result.longitude;
            _this4.request(_this4.statData, type);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData, type);
      }
    }

    /**
       * 发送请求
       * @param {Object} data 上报数据
       * @param {Object} type 类型
       */ }, { key: "request", value: function request(
    data, type) {var _this5 = this;
      var time = get_time();
      var title = this._navigationBarTitle;
      Object.assign(data, {
        ttn: title.page,
        ttpj: title.config,
        ttc: title.report });


      var uniStatData = dbGet('__UNI__STAT__DATA') || {};
      if (!uniStatData[data.lt]) {
        uniStatData[data.lt] = [];
      }
      // 加入队列
      uniStatData[data.lt].push(data);
      dbSet('__UNI__STAT__DATA', uniStatData);

      var page_residence_time = get_page_residence_time();
      // debug 打印打点信息
      if (is_debug) {
        log(data);
      }
      // 判断时候到达上报时间 ，默认 10 秒上报
      if (page_residence_time < eport_Interval && !type) return;

      // 时间超过，重新获取时间戳
      set_page_residence_time();
      var stat_data = handle_data(uniStatData);
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: stat_data };


      // 重置队列
      dbRemove('__UNI__STAT__DATA');

      // XXX 安卓需要延迟上报 ，否则会有未知错误，需要验证处理
      if (get_platform_name() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this5.sendRequest(optionsData);
        }, 200);
        return;
      }

      this.sendRequest(optionsData);
    } }, { key: "getIsReportData", value: function getIsReportData()

    {
      return is_report_data();
    }

    /**
       * 数据上报
       * @param {Object} optionsData 需要上报的数据
       */ }, { key: "sendRequest", value: function sendRequest(
    optionsData) {
      {
        if (!uni.__stat_uniCloud_space) {
          console.error(
          '应用未关联服务空间，统计上报失败，请在uniCloud目录右键关联服务空间.');

          return;
        }

        var uniCloudObj = uni.__stat_uniCloud_space.importObject(
        'uni-stat-receiver',
        {
          customUI: true });


        uniCloudObj.
        report(optionsData).
        then(function () {
          if (is_debug) {
            log(optionsData, true);
          }
        }).
        catch(function (err) {
          if (is_debug) {
            console.warn('=== 统计上报错误');
            console.error(err);
          }
        });
      }
    }

    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = get_sgin(get_encodeURIComponent_options(data)).options;
        image.src = STAT_H5_URL + '?' + options;
        if (is_debug) {
          log(data, true);
        }
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this.sendEventRequest(
      {
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },

      1);

    } }]);return Report;}();var


Stat = /*#__PURE__*/function (_Report) {"use strict";_inherits(Stat, _Report);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!uni.__stat_instance) {
        uni.__stat_instance = new Stat();
      }

      // 2.0 init 服务空间
      {
        var space = get_space(uniCloud.config);
        if (!uni.__stat_uniCloud_space) {
          //   判断不为空对象
          if (space && Object.keys(space).length !== 0) {
            var spaceData = {
              provider: space.provider,
              spaceId: space.spaceId,
              clientSecret: space.clientSecret };

            if (space.endpoint) {
              spaceData.endpoint = space.endpoint;
            }
            uni.__stat_uniCloud_space = uniCloud.init(spaceData);
            // console.log(
            //   '=== 当前绑定的统计服务空间spaceId：' +
            //     uni.__stat_uniCloud_space.config.spaceId
            // )
          } else {
            console.error(
            '应用未关联服务空间，请在uniCloud目录右键关联服务空间');

          }
        }
      }

      return uni.__stat_instance;
    } }]);
  function Stat() {_classCallCheck(this, Stat);return _super.call(this);

  }

  /**
     * 获取推送id
     */_createClass(Stat, [{ key: "pushEvent", value: function pushEvent(
    options) {var _this6 = this;
      var ClientID = is_push_clientid();
      if (uni.getPushClientId && ClientID) {
        uni.getPushClientId({
          success: function success(res) {
            var cid = res.cid || false;
            //  只有获取到才会上传
            if (cid) {
              _this6.sendPushRequest(options, cid);
            }
          } });

      }
    }

    /**
       * 进入应用
       * @param {Object} options 页面参数
       * @param {Object} self	当前页面实例
       */ }, { key: "launch", value: function launch(
    options, self) {
      // 初始化页面停留时间  start
      set_page_residence_time();
      this.__licationShow = true;
      dbSet('__launch_options', options);
      // 应用初始上报参数为1
      options.cst = 1;
      this.sendReportRequest(options, true);
    } }, { key: "load", value: function load(
    options, self) {
      this.self = self;
      this._query = options;
    } }, { key: "appHide", value: function appHide(

    self) {
      this.applicationHide(self, true);
    } }, { key: "appShow", value: function appShow(

    self) {
      this.applicationShow(self);
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (get_page_types(self) === 'page') {
        this.pageShow(self);
      }










      if (get_page_types(self) === 'app') {
        this.appShow();
      }

    } }, { key: "hide", value: function hide(

    self) {
      this.self = self;
      if (get_page_types(self) === 'page') {
        this.pageHide(self);
      }










      if (get_page_types(self) === 'app') {
        this.appHide();
      }

    } }, { key: "error", value: function error(

    em) {
      // 开发工具内不上报错误
      // if (this._platform === 'devtools') {
      //   if (process.env.NODE_ENV === 'development') {
      //     console.info('当前运行环境为开发者工具，不上报数据。')
      //     return
      //   }
      // }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }

      var route = '';
      try {
        route = get_route();
      } catch (e) {
        // 未获取到页面路径
        route = '';
      }

      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '31',
        url: route,
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: parseInt(new Date().getTime() / 1000) };

      this.request(options);
    } }]);return Stat;}(Report);

var Stat$1 = Stat;

var stat = Stat$1.getInstance();

// 用于判断是隐藏页面还是卸载页面
var isHide = false;

var lifecycle = {
  onLaunch: function onLaunch(options) {
    // 进入应用上报数据
    stat.launch(options, this);
    // 上报push推送id
    stat.pushEvent(options);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


// 加载统计代码
function load_stat() {



















  // eslint-disable-next-line no-restricted-globals
  var Vue = __webpack_require__(/*! vue */ 9);
  (Vue.default || Vue).mixin(lifecycle);
  uni.report = function (type, options) {
    stat.sendEvent(type, options);
  };

}

function main() {
  if (is_debug) {
    {



    }
    load_stat();
  } else {
    if (true) {
      uni.report = function (type, options) {};
    } else {}
  }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 10:
/*!***********************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 11).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTJDIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),

/***/ 11:
/*!***********************************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 12);
/* harmony import */ var _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 12:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),

/***/ 13:
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),

/***/ 134:
/*!**************************************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/main.js?{"page":"pages%2FAPI%2Fmap%2Fmap"} ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dcloudio_uni_stat_dist_uni_cloud_stat_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat/dist/uni-cloud-stat.es.js */ 1);\n/* harmony import */ var _dcloudio_uni_stat_dist_uni_cloud_stat_es_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat_dist_uni_cloud_stat_es_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 10);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uni-polyfill */ 13);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_API_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/API/map/map.nvue?mpType=page */ 135);\n\n        \n        \n        \n        \n        _pages_API_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mpType = 'page'\n        _pages_API_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"].route = 'pages/API/map/map'\n        _pages_API_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"].el = '#root'\n        new Vue(_pages_API_map_map_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLFFBQThEO0FBQzlELFFBQThCO0FBQzlCLFFBQTZCO0FBQzdCLFFBQThEO0FBQzlELFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIxMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC91bmktY2xvdWQtc3RhdC5lcy5qcyc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9BUEkvbWFwL21hcC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9BUEkvbWFwL21hcCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///134\n");

/***/ }),

/***/ 135:
/*!******************************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages/API/map/map.nvue?mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.nvue?vue&type=template&id=1665e023&mpType=page */ 136);\n/* harmony import */ var _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.nvue?vue&type=script&lang=js&mpType=page */ 138);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./map.nvue?vue&type=style&index=0&lang=css&mpType=page */ 140).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./map.nvue?vue&type=style&index=0&lang=css&mpType=page */ 140).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"9c696a68\",\n  false,\n  _map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/API/map/map.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQzBOO0FBQzFOLGdCQUFnQixpT0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21hcC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjVlMDIzJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tYXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbWFwLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9tYXAubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFwwMS1zb2Z0d2FyZVxcXFw4MC1oYnVpbGRlclhcXFxcSEJ1aWxkZXJYLjMuNi41LjIwMjIxMTIxXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI5YzY5NmE2OFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9BUEkvbWFwL21hcC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///135\n");

/***/ }),

/***/ 136:
/*!************************************************************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages/API/map/map.nvue?vue&type=template&id=1665e023&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map.nvue?vue&type=template&id=1665e023&mpType=page */ 137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_template_id_1665e023_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 137:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages/API/map/map.nvue?vue&type=template&id=1665e023&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["content"] },
        [
          _c("map", {
            ref: "map1",
            staticClass: ["map"],
            attrs: {
              id: "map1",
              controls: _vm.controls,
              scale: _vm.scale,
              longitude: _vm.location.longitude,
              latitude: _vm.location.latitude,
              showLocation: _vm.showLocation,
              enable3D: _vm.enable3D,
              rotate: _vm.rotate,
              skew: _vm.skew,
              showCompass: _vm.showCompass,
              enableOverlooking: _vm.enableOverlooking,
              enableZoom: _vm.enableZoom,
              enableScroll: _vm.enableScroll,
              enableRotate: _vm.enableRotate,
              enableSatellite: _vm.enableSatellite,
              enableTraffic: _vm.enableTraffic,
              markers: _vm.markers,
              polyline: _vm.polyline,
              circles: _vm.circles,
              polygons: _vm.polygons,
              includePoints: _vm.includePoints
            },
            on: {
              tap: _vm.maptap,
              controltap: _vm.oncontroltap,
              markertap: _vm.onmarkertap,
              callouttap: _vm.oncallouttap,
              poitap: _vm.onpoitap,
              updated: _vm.onupdated,
              regionchange: _vm.onregionchange
            }
          }),
          _c(
            "scroll-view",
            { staticClass: ["scrollview"], attrs: { scrollY: "true" } },
            [
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.changeScale } },
                [_vm._v("changeScale")]
              ),
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.changeRotate } },
                [_vm._v("changeRotate")]
              ),
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.changeSkew } },
                [_vm._v("skew")]
              ),
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.addMarkers } },
                [_vm._v("addMarkers")]
              ),
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.addPolyline } },
                [_vm._v("addPolyline")]
              ),
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.addPolygons } },
                [_vm._v("addPolygons")]
              ),
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.addCircles } },
                [_vm._v("addCircles")]
              ),
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.includePoint } },
                [_vm._v("includePoints")]
              ),
              _c(
                "button",
                {
                  staticClass: ["button"],
                  on: { click: _vm.handleGetCenterLocation }
                },
                [_vm._v("getCenterLocation")]
              ),
              _c(
                "button",
                { staticClass: ["button"], on: { click: _vm.handleGetRegion } },
                [_vm._v("getRegion")]
              ),
              _c(
                "button",
                {
                  staticClass: ["button"],
                  on: { click: _vm.handleTranslateMarker }
                },
                [_vm._v("translateMarker")]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 138:
/*!******************************************************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages/API/map/map.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map.nvue?vue&type=script&lang=js&mpType=page */ 139);\n/* harmony import */ var _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRrQixDQUFnQiwrbUJBQUcsRUFBQyIsImZpbGUiOiIxMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXDAxLXNvZnR3YXJlXFxcXDgwLWhidWlsZGVyWFxcXFxIQnVpbGRlclguMy42LjUuMjAyMjExMjFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcMDEtc29mdHdhcmVcXFxcODAtaGJ1aWxkZXJYXFxcXEhCdWlsZGVyWC4zLjYuNS4yMDIyMTEyMVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXDAxLXNvZnR3YXJlXFxcXDgwLWhidWlsZGVyWFxcXFxIQnVpbGRlclguMy42LjUuMjAyMjExMjFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFwwMS1zb2Z0d2FyZVxcXFw4MC1oYnVpbGRlclhcXFxcSEJ1aWxkZXJYLjMuNi41LjIwMjIxMTIxXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXDAxLXNvZnR3YXJlXFxcXDgwLWhidWlsZGVyWFxcXFxIQnVpbGRlclguMy42LjUuMjAyMjExMjFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFwwMS1zb2Z0d2FyZVxcXFw4MC1oYnVpbGRlclhcXFxcSEJ1aWxkZXJYLjMuNi41LjIwMjIxMTIxXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///138\n");

/***/ }),

/***/ 139:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages/API/map/map.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar testMarkers = [{\n  id: 0,\n  latitude: 39.989631,\n  longitude: 116.481018,\n  title: '方恒国际 阜通东大街6号',\n  zIndex: '1',\n  rotate: 0,\n  width: 20,\n  height: 20,\n  anchor: {\n    x: 0.5,\n    y: 1 },\n\n  callout: {\n    content: '方恒国际 阜通东大街6号',\n    color: '#00BFFF',\n    fontSize: 10,\n    borderRadius: 4,\n    borderWidth: 1,\n    borderColor: '#333300',\n    bgColor: '#CCFF99',\n    padding: '5',\n    display: 'ALWAYS' } },\n\n\n{\n  id: 1,\n  latitude: 39.9086920000,\n  longitude: 116.3974770000,\n  title: '天安门',\n  zIndex: '1',\n  iconPath: '/static/location.png',\n  width: 40,\n  height: 40,\n  anchor: {\n    x: 0.5,\n    y: 1 },\n\n  callout: {\n    content: '首都北京\\n天安门',\n    color: '#00BFFF',\n    fontSize: 12,\n    borderRadius: 2,\n    borderWidth: 0,\n    borderColor: '#333300',\n    bgColor: '#CCFF11',\n    padding: '1',\n    display: 'ALWAYS' } }];\n\n\n\nvar testPolyline = [{\n  points: [{\n    latitude: 39.925539,\n    longitude: 116.279037 },\n\n  {\n    latitude: 39.925539,\n    longitude: 116.520285 }],\n\n\n  color: '#FFCCFF',\n  width: 7,\n  dottedLine: true,\n  arrowLine: true,\n  borderColor: '#000000',\n  borderWidth: 2 },\n\n{\n  points: [{\n    latitude: 39.938698,\n    longitude: 116.275177 },\n\n  {\n    latitude: 39.966069,\n    longitude: 116.289253 },\n\n  {\n    latitude: 39.944226,\n    longitude: 116.306076 },\n\n  {\n    latitude: 39.966069,\n    longitude: 116.322899 },\n\n  {\n    latitude: 39.938698,\n    longitude: 116.336975 }],\n\n\n  color: '#CCFFFF',\n  width: 5,\n  dottedLine: true,\n  arrowLine: true,\n  borderColor: '#CC0000',\n  borderWidth: 3 }];\n\n\nvar testPolygons = [{\n  points: [{\n    latitude: 39.781892,\n    longitude: 116.293413 },\n\n  {\n    latitude: 39.787600,\n    longitude: 116.391842 },\n\n  {\n    latitude: 39.733187,\n    longitude: 116.417932 },\n\n  {\n    latitude: 39.704653,\n    longitude: 116.338255 }],\n\n\n  fillColor: '#FFCCFF',\n  strokeWidth: 3,\n  strokeColor: '#CC99CC',\n  zIndex: 11 },\n\n{\n  points: [{\n    latitude: 39.887600,\n    longitude: 116.518932 },\n\n  {\n    latitude: 39.781892,\n    longitude: 116.518932 },\n\n  {\n    latitude: 39.781892,\n    longitude: 116.428932 },\n\n  {\n    latitude: 39.887600,\n    longitude: 116.428932 }],\n\n\n  fillColor: '#CCFFFF',\n  strokeWidth: 5,\n  strokeColor: '#CC0000',\n  zIndex: 3 }];\n\n\nvar testCircles = [{\n  latitude: 39.996441,\n  longitude: 116.411146,\n  radius: 15000,\n  strokeWidth: 5,\n  color: '#CCFFFF',\n  fillColor: '#CC0000' },\n\n{\n  latitude: 40.096441,\n  longitude: 116.511146,\n  radius: 12000,\n  strokeWidth: 3,\n  color: '#CCFFFF',\n  fillColor: '#FFCCFF' },\n\n{\n  latitude: 39.896441,\n  longitude: 116.311146,\n  radius: 9000,\n  strokeWidth: 1,\n  color: '#CCFFFF',\n  fillColor: '#CC0000' }];\n\n\nvar testIncludePoints = [{\n  latitude: 39.989631,\n  longitude: 116.481018 },\n\n{\n  latitude: 39.9086920000,\n  longitude: 116.3974770000 }];var _default =\n\n\n{\n  data: function data() {\n    return {\n      location: {\n        longitude: 116.3974770000,\n        latitude: 39.9086920000 },\n\n      controls: [{\n        id: 1,\n        position: {\n          left: 5,\n          top: 180,\n          width: 30,\n          height: 30 },\n\n        iconPath: '/static/logo.png',\n        clickable: true }],\n\n      showLocation: false,\n      scale: 13,\n      showCompass: true,\n      enable3D: true,\n      enableOverlooking: true,\n      enableZoom: true,\n      enableScroll: true,\n      enableRotate: true,\n      enableSatellite: false,\n      enableTraffic: false,\n      polyline: [],\n      markers: [],\n      polygons: [],\n      circles: [],\n      includePoints: [],\n      rotate: 0,\n      skew: 0 };\n\n  },\n  onLoad: function onLoad() {},\n  onReady: function onReady() {\n    this.map = uni.createMapContext(\"map1\", this);\n  },\n  methods: {\n\n    changeScale: function changeScale() {\n      this.scale = this.scale == 9 ? 15 : 9;\n    },\n    changeRotate: function changeRotate() {\n      this.rotate = this.rotate == 90 ? 0 : 90;\n    },\n    changeSkew: function changeSkew() {\n      this.skew = this.skew == 30 ? 0 : 30;\n    },\n\n    enableThreeD: function enableThreeD(e) {\n      this.enable3D = e.detail.value;\n    },\n    changeShowCompass: function changeShowCompass(e) {\n      this.showCompass = e.detail.value;\n    },\n    changeEnableOverlooking: function changeEnableOverlooking(e) {\n      this.enableOverlooking = e.detail.value;\n    },\n    changeEnableZoom: function changeEnableZoom(e) {\n      this.enableZoom = e.detail.value;\n    },\n    changeEnableScroll: function changeEnableScroll(e) {\n      this.enableScroll = e.detail.value;\n    },\n    changeEnableRotate: function changeEnableRotate(e) {\n      this.enableRotate = e.detail.value;\n    },\n    changeEnableSatellite: function changeEnableSatellite(e) {\n      this.enableSatellite = e.detail.value;\n    },\n    changeEnableTraffic: function changeEnableTraffic(e) {\n      this.enableTraffic = e.detail.value;\n    },\n    addMarkers: function addMarkers() {\n      this.markers = testMarkers;\n    },\n    addPolyline: function addPolyline() {\n      this.polyline = testPolyline;\n    },\n\n    addPolygons: function addPolygons() {\n      this.polygons = testPolygons;\n    },\n\n    addCircles: function addCircles() {\n      this.circles = testCircles;\n    },\n    includePoint: function includePoint() {\n      this.includePoints = testIncludePoints;\n    },\n    handleGetCenterLocation: function handleGetCenterLocation() {\n      this.map.getCenterLocation({\n        success: function success(ret) {\n          __f__(\"log\", JSON.stringify(ret), \" at pages/API/map/map.nvue:341\");\n          uni.showModal({\n            content: JSON.stringify(ret) });\n\n        } });\n\n    },\n    handleGetRegion: function handleGetRegion() {\n      this.map.getRegion({\n        success: function success(ret) {\n          __f__(\"log\", JSON.stringify(ret), \" at pages/API/map/map.nvue:351\");\n          uni.showModal({\n            content: JSON.stringify(ret) });\n\n        } });\n\n    },\n\n    handleTranslateMarker: function handleTranslateMarker() {\n      this.map.translateMarker({\n        markerId: 1,\n        destination: {\n          latitude: 39.989631,\n          longitude: 116.481018 },\n\n        duration: 2000 },\n      function (ret) {\n        __f__(\"log\", JSON.stringify(ret), \" at pages/API/map/map.nvue:368\");\n        uni.showModal({\n          content: JSON.stringify(ret) });\n\n      });\n    },\n\n    maptap: function maptap(e) {\n      uni.showModal({\n        content: JSON.stringify(e) });\n\n    },\n    onmarkertap: function onmarkertap(e) {\n      uni.showModal({\n        content: JSON.stringify(e) });\n\n    },\n    oncontroltap: function oncontroltap(e) {\n      uni.showModal({\n        content: JSON.stringify(e) });\n\n    },\n    oncallouttap: function oncallouttap(e) {\n      uni.showModal({\n        content: JSON.stringify(e) });\n\n    },\n    onupdated: function onupdated(e) {\n      __f__(\"log\", JSON.stringify(e), \" at pages/API/map/map.nvue:396\");\n    },\n    onregionchange: function onregionchange(e) {\n      __f__(\"log\", JSON.stringify(e), \" at pages/API/map/map.nvue:399\");\n    },\n    onpoitap: function onpoitap(e) {\n      uni.showModal({\n        content: JSON.stringify(e) });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 58)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvQVBJL21hcC9tYXAubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBO0FBQ0EsT0FEQTtBQUVBLHFCQUZBO0FBR0EsdUJBSEE7QUFJQSx1QkFKQTtBQUtBLGFBTEE7QUFNQSxXQU5BO0FBT0EsV0FQQTtBQVFBLFlBUkE7QUFTQTtBQUNBLFVBREE7QUFFQSxRQUZBLEVBVEE7O0FBYUE7QUFDQSwyQkFEQTtBQUVBLG9CQUZBO0FBR0EsZ0JBSEE7QUFJQSxtQkFKQTtBQUtBLGtCQUxBO0FBTUEsMEJBTkE7QUFPQSxzQkFQQTtBQVFBLGdCQVJBO0FBU0EscUJBVEEsRUFiQTs7O0FBeUJBO0FBQ0EsT0FEQTtBQUVBLHlCQUZBO0FBR0EsMkJBSEE7QUFJQSxjQUpBO0FBS0EsYUFMQTtBQU1BLGtDQU5BO0FBT0EsV0FQQTtBQVFBLFlBUkE7QUFTQTtBQUNBLFVBREE7QUFFQSxRQUZBLEVBVEE7O0FBYUE7QUFDQSx3QkFEQTtBQUVBLG9CQUZBO0FBR0EsZ0JBSEE7QUFJQSxtQkFKQTtBQUtBLGtCQUxBO0FBTUEsMEJBTkE7QUFPQSxzQkFQQTtBQVFBLGdCQVJBO0FBU0EscUJBVEEsRUFiQSxFQXpCQTs7OztBQW1EQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSx5QkFGQTs7QUFJQTtBQUNBLHVCQURBO0FBRUEseUJBRkEsRUFKQSxDQURBOzs7QUFVQSxrQkFWQTtBQVdBLFVBWEE7QUFZQSxrQkFaQTtBQWFBLGlCQWJBO0FBY0Esd0JBZEE7QUFlQSxnQkFmQTs7QUFpQkE7QUFDQTtBQUNBLHVCQURBO0FBRUEseUJBRkE7O0FBSUE7QUFDQSx1QkFEQTtBQUVBLHlCQUZBLEVBSkE7O0FBUUE7QUFDQSx1QkFEQTtBQUVBLHlCQUZBLEVBUkE7O0FBWUE7QUFDQSx1QkFEQTtBQUVBLHlCQUZBLEVBWkE7O0FBZ0JBO0FBQ0EsdUJBREE7QUFFQSx5QkFGQSxFQWhCQSxDQURBOzs7QUFzQkEsa0JBdEJBO0FBdUJBLFVBdkJBO0FBd0JBLGtCQXhCQTtBQXlCQSxpQkF6QkE7QUEwQkEsd0JBMUJBO0FBMkJBLGdCQTNCQSxFQWpCQTs7O0FBK0NBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHlCQUZBOztBQUlBO0FBQ0EsdUJBREE7QUFFQSx5QkFGQSxFQUpBOztBQVFBO0FBQ0EsdUJBREE7QUFFQSx5QkFGQSxFQVJBOztBQVlBO0FBQ0EsdUJBREE7QUFFQSx5QkFGQSxFQVpBLENBREE7OztBQWtCQSxzQkFsQkE7QUFtQkEsZ0JBbkJBO0FBb0JBLHdCQXBCQTtBQXFCQSxZQXJCQTs7QUF1QkE7QUFDQTtBQUNBLHVCQURBO0FBRUEseUJBRkE7O0FBSUE7QUFDQSx1QkFEQTtBQUVBLHlCQUZBLEVBSkE7O0FBUUE7QUFDQSx1QkFEQTtBQUVBLHlCQUZBLEVBUkE7O0FBWUE7QUFDQSx1QkFEQTtBQUVBLHlCQUZBLEVBWkEsQ0FEQTs7O0FBa0JBLHNCQWxCQTtBQW1CQSxnQkFuQkE7QUFvQkEsd0JBcEJBO0FBcUJBLFdBckJBLEVBdkJBOzs7QUErQ0E7QUFDQSxxQkFEQTtBQUVBLHVCQUZBO0FBR0EsZUFIQTtBQUlBLGdCQUpBO0FBS0Esa0JBTEE7QUFNQSxzQkFOQTs7QUFRQTtBQUNBLHFCQURBO0FBRUEsdUJBRkE7QUFHQSxlQUhBO0FBSUEsZ0JBSkE7QUFLQSxrQkFMQTtBQU1BLHNCQU5BLEVBUkE7O0FBZ0JBO0FBQ0EscUJBREE7QUFFQSx1QkFGQTtBQUdBLGNBSEE7QUFJQSxnQkFKQTtBQUtBLGtCQUxBO0FBTUEsc0JBTkEsRUFoQkE7OztBQXlCQTtBQUNBLHFCQURBO0FBRUEsdUJBRkE7O0FBSUE7QUFDQSx5QkFEQTtBQUVBLDJCQUZBLEVBSkEsRTs7O0FBU0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQURBO0FBRUEsK0JBRkEsRUFEQTs7QUFLQTtBQUNBLGFBREE7QUFFQTtBQUNBLGlCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLG9CQUpBLEVBRkE7O0FBUUEsb0NBUkE7QUFTQSx1QkFUQSxHQUxBOztBQWdCQSx5QkFoQkE7QUFpQkEsZUFqQkE7QUFrQkEsdUJBbEJBO0FBbUJBLG9CQW5CQTtBQW9CQSw2QkFwQkE7QUFxQkEsc0JBckJBO0FBc0JBLHdCQXRCQTtBQXVCQSx3QkF2QkE7QUF3QkEsNEJBeEJBO0FBeUJBLDBCQXpCQTtBQTBCQSxrQkExQkE7QUEyQkEsaUJBM0JBO0FBNEJBLGtCQTVCQTtBQTZCQSxpQkE3QkE7QUE4QkEsdUJBOUJBO0FBK0JBLGVBL0JBO0FBZ0NBLGFBaENBOztBQWtDQSxHQXBDQTtBQXFDQSxRQXJDQSxvQkFxQ0EsRUFyQ0E7QUFzQ0EsU0F0Q0EscUJBc0NBO0FBQ0E7QUFDQSxHQXhDQTtBQXlDQTs7QUFFQSxlQUZBLHlCQUVBO0FBQ0E7QUFDQSxLQUpBO0FBS0EsZ0JBTEEsMEJBS0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxjQVJBLHdCQVFBO0FBQ0E7QUFDQSxLQVZBOztBQVlBLGdCQVpBLHdCQVlBLENBWkEsRUFZQTtBQUNBO0FBQ0EsS0FkQTtBQWVBLHFCQWZBLDZCQWVBLENBZkEsRUFlQTtBQUNBO0FBQ0EsS0FqQkE7QUFrQkEsMkJBbEJBLG1DQWtCQSxDQWxCQSxFQWtCQTtBQUNBO0FBQ0EsS0FwQkE7QUFxQkEsb0JBckJBLDRCQXFCQSxDQXJCQSxFQXFCQTtBQUNBO0FBQ0EsS0F2QkE7QUF3QkEsc0JBeEJBLDhCQXdCQSxDQXhCQSxFQXdCQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkEsc0JBM0JBLDhCQTJCQSxDQTNCQSxFQTJCQTtBQUNBO0FBQ0EsS0E3QkE7QUE4QkEseUJBOUJBLGlDQThCQSxDQTlCQSxFQThCQTtBQUNBO0FBQ0EsS0FoQ0E7QUFpQ0EsdUJBakNBLCtCQWlDQSxDQWpDQSxFQWlDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFvQ0EsY0FwQ0Esd0JBb0NBO0FBQ0E7QUFDQSxLQXRDQTtBQXVDQSxlQXZDQSx5QkF1Q0E7QUFDQTtBQUNBLEtBekNBOztBQTJDQSxlQTNDQSx5QkEyQ0E7QUFDQTtBQUNBLEtBN0NBOztBQStDQSxjQS9DQSx3QkErQ0E7QUFDQTtBQUNBLEtBakRBO0FBa0RBLGdCQWxEQSwwQkFrREE7QUFDQTtBQUNBLEtBcERBO0FBcURBLDJCQXJEQSxxQ0FxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQURBOztBQUdBLFNBTkE7O0FBUUEsS0E5REE7QUErREEsbUJBL0RBLDZCQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBREE7O0FBR0EsU0FOQTs7QUFRQSxLQXhFQTs7QUEwRUEseUJBMUVBLG1DQTBFQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUNBLDZCQURBO0FBRUEsK0JBRkEsRUFGQTs7QUFNQSxzQkFOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBLHNDQURBOztBQUdBLE9BWkE7QUFhQSxLQXhGQTs7QUEwRkEsVUExRkEsa0JBMEZBLENBMUZBLEVBMEZBO0FBQ0E7QUFDQSxrQ0FEQTs7QUFHQSxLQTlGQTtBQStGQSxlQS9GQSx1QkErRkEsQ0EvRkEsRUErRkE7QUFDQTtBQUNBLGtDQURBOztBQUdBLEtBbkdBO0FBb0dBLGdCQXBHQSx3QkFvR0EsQ0FwR0EsRUFvR0E7QUFDQTtBQUNBLGtDQURBOztBQUdBLEtBeEdBO0FBeUdBLGdCQXpHQSx3QkF5R0EsQ0F6R0EsRUF5R0E7QUFDQTtBQUNBLGtDQURBOztBQUdBLEtBN0dBO0FBOEdBLGFBOUdBLHFCQThHQSxDQTlHQSxFQThHQTtBQUNBO0FBQ0EsS0FoSEE7QUFpSEEsa0JBakhBLDBCQWlIQSxDQWpIQSxFQWlIQTtBQUNBO0FBQ0EsS0FuSEE7QUFvSEEsWUFwSEEsb0JBb0hBLENBcEhBLEVBb0hBO0FBQ0E7QUFDQSxrQ0FEQTs7QUFHQSxLQXhIQSxFQXpDQSxFIiwiZmlsZSI6IjEzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPG1hcCBjbGFzcz1cIm1hcFwiIGlkPVwibWFwMVwiIHJlZj1cIm1hcDFcIiA6Y29udHJvbHM9XCJjb250cm9sc1wiIDpzY2FsZT1cInNjYWxlXCIgOmxvbmdpdHVkZT1cImxvY2F0aW9uLmxvbmdpdHVkZVwiXG4gICAgICAgICAgICA6bGF0aXR1ZGU9XCJsb2NhdGlvbi5sYXRpdHVkZVwiIDpzaG93LWxvY2F0aW9uPVwic2hvd0xvY2F0aW9uXCIgOmVuYWJsZS0zRD1cImVuYWJsZTNEXCIgOnJvdGF0ZT1cInJvdGF0ZVwiIDpza2V3PVwic2tld1wiXG4gICAgICAgICAgICA6c2hvdy1jb21wYXNzPVwic2hvd0NvbXBhc3NcIiA6ZW5hYmxlLW92ZXJsb29raW5nPVwiZW5hYmxlT3Zlcmxvb2tpbmdcIiA6ZW5hYmxlLXpvb209XCJlbmFibGVab29tXCJcbiAgICAgICAgICAgIDplbmFibGUtc2Nyb2xsPVwiZW5hYmxlU2Nyb2xsXCIgOmVuYWJsZS1yb3RhdGU9XCJlbmFibGVSb3RhdGVcIiA6ZW5hYmxlLXNhdGVsbGl0ZT1cImVuYWJsZVNhdGVsbGl0ZVwiXG4gICAgICAgICAgICA6ZW5hYmxlLXRyYWZmaWM9XCJlbmFibGVUcmFmZmljXCIgOm1hcmtlcnM9XCJtYXJrZXJzXCIgOnBvbHlsaW5lPVwicG9seWxpbmVcIiA6Y2lyY2xlcz1cImNpcmNsZXNcIiA6cG9seWdvbnM9XCJwb2x5Z29uc1wiXG4gICAgICAgICAgICA6aW5jbHVkZS1wb2ludHM9XCJpbmNsdWRlUG9pbnRzXCIgQHRhcD1cIm1hcHRhcFwiIEBjb250cm9sdGFwPVwib25jb250cm9sdGFwXCIgQG1hcmtlcnRhcD1cIm9ubWFya2VydGFwXCJcbiAgICAgICAgICAgIEBjYWxsb3V0dGFwPVwib25jYWxsb3V0dGFwXCIgQHBvaXRhcD1cIm9ucG9pdGFwXCIgQHVwZGF0ZWQ9XCJvbnVwZGF0ZWRcIiBAcmVnaW9uY2hhbmdlPVwib25yZWdpb25jaGFuZ2VcIj48L21hcD5cbiAgICAgICAgPHNjcm9sbC12aWV3IGNsYXNzPVwic2Nyb2xsdmlld1wiIHNjcm9sbC15PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPCEtLSA8dmlldyBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5pi+56S6M0TmpbzlnZc8L3RleHQ+XG4gICAgICAgICAgICAgICAgPHN3aXRjaCA6Y2hlY2tlZD1cImVuYWJsZTNEXCIgQGNoYW5nZT1cImVuYWJsZVRocmVlRFwiIC8+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5pi+56S65oyH5Y2X6ZKIPC90ZXh0PlxuICAgICAgICAgICAgICAgIDxzd2l0Y2ggOmNoZWNrZWQ9XCJzaG93Q29tcGFzc1wiIEBjaGFuZ2U9XCJjaGFuZ2VTaG93Q29tcGFzc1wiIC8+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5byA5ZCv5L+v6KeGPC90ZXh0PlxuICAgICAgICAgICAgICAgIDxzd2l0Y2ggOmNoZWNrZWQ9XCJlbmFibGVPdmVybG9va2luZ1wiIEBjaGFuZ2U9XCJjaGFuZ2VFbmFibGVPdmVybG9va2luZ1wiIC8+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5piv5ZCm5pSv5oyB57yp5pS+PC90ZXh0PlxuICAgICAgICAgICAgICAgIDxzd2l0Y2ggOmNoZWNrZWQ9XCJlbmFibGVab29tXCIgQGNoYW5nZT1cImNoYW5nZUVuYWJsZVpvb21cIiAvPlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImxpc3QtdGV4dFwiPuaYr+WQpuaUr+aMgeaLluWKqDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8c3dpdGNoIDpjaGVja2VkPVwiZW5hYmxlU2Nyb2xsXCIgQGNoYW5nZT1cImNoYW5nZUVuYWJsZVNjcm9sbFwiIC8+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGlzdC10ZXh0XCI+5piv5ZCm5pSv5oyB5peL6L2sPC90ZXh0PlxuICAgICAgICAgICAgICAgIDxzd2l0Y2ggOmNoZWNrZWQ9XCJlbmFibGVSb3RhdGVcIiBAY2hhbmdlPVwiY2hhbmdlRW5hYmxlUm90YXRlXCIgLz5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsaXN0LXRleHRcIj7mmK/lkKblvIDlkK/ljavmmJ/lm748L3RleHQ+XG4gICAgICAgICAgICAgICAgPHN3aXRjaCA6Y2hlY2tlZD1cImVuYWJsZVNhdGVsbGl0ZVwiIEBjaGFuZ2U9XCJjaGFuZ2VFbmFibGVTYXRlbGxpdGVcIiAvPlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImxpc3QtdGV4dFwiPuaYr+WQpuW8gOWQr+WunuaXtui3r+WGtTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8c3dpdGNoIDpjaGVja2VkPVwiZW5hYmxlVHJhZmZpY1wiIEBjaGFuZ2U9XCJjaGFuZ2VFbmFibGVUcmFmZmljXCIgLz5cbiAgICAgICAgICAgIDwvdmlldz4gLS0+XG5cdFx0XHRcdDwhLS0gI2lmbmRlZiBNUC1KRCAtLT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJjaGFuZ2VTY2FsZVwiPmNoYW5nZVNjYWxlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiY2hhbmdlUm90YXRlXCI+Y2hhbmdlUm90YXRlPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJjaGFuZ2VTa2V3XCI+c2tldzwvYnV0dG9uPlxuXHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJhZGRNYXJrZXJzXCI+YWRkTWFya2VyczwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImFkZFBvbHlsaW5lXCI+YWRkUG9seWxpbmU8L2J1dHRvbj5cblx0XHRcdFx0PCEtLSAjaWZuZGVmIE1QLUpEIC0tPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImFkZFBvbHlnb25zXCI+YWRkUG9seWdvbnM8L2J1dHRvbj5cblx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiYWRkQ2lyY2xlc1wiPmFkZENpcmNsZXM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJpbmNsdWRlUG9pbnRcIj5pbmNsdWRlUG9pbnRzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiaGFuZGxlR2V0Q2VudGVyTG9jYXRpb25cIj5nZXRDZW50ZXJMb2NhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImhhbmRsZUdldFJlZ2lvblwiPmdldFJlZ2lvbjwvYnV0dG9uPlxuXHRcdFx0XHQ8IS0tICNpZm5kZWYgTVAtSkQgLS0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiaGFuZGxlVHJhbnNsYXRlTWFya2VyXCI+dHJhbnNsYXRlTWFya2VyPC9idXR0b24+XG5cdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxuICAgICAgICA8L3Njcm9sbC12aWV3PlxuICAgIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgY29uc3QgdGVzdE1hcmtlcnMgPSBbe1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBsYXRpdHVkZTogMzkuOTg5NjMxLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuNDgxMDE4LFxuICAgICAgICAgICAgdGl0bGU6ICfmlrnmgZLlm73pmYUg6Zic6YCa5Lic5aSn6KGXNuWPtycsXG4gICAgICAgICAgICB6SW5kZXg6ICcxJyxcbiAgICAgICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAyMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICAgICAgeTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxvdXQ6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5pa55oGS5Zu96ZmFIOmYnOmAmuS4nOWkp+ihlzblj7cnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwQkZGRicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMzMzMzMDAnLFxuICAgICAgICAgICAgICAgIGJnQ29sb3I6ICcjQ0NGRjk5JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ0FMV0FZUydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBsYXRpdHVkZTogMzkuOTA4NjkyMDAwMCxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjM5NzQ3NzAwMDAsXG4gICAgICAgICAgICB0aXRsZTogJ+WkqeWuiemXqCcsXG4gICAgICAgICAgICB6SW5kZXg6ICcxJyxcbiAgICAgICAgICAgIGljb25QYXRoOiAnL3N0YXRpYy9sb2NhdGlvbi5wbmcnLFxuICAgICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgICAgICB5OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbG91dDoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfpppbpg73ljJfkuqxcXG7lpKnlronpl6gnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwQkZGRicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMzMzMzMDAnLFxuICAgICAgICAgICAgICAgIGJnQ29sb3I6ICcjQ0NGRjExJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ0FMV0FZUydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF07XG4gICAgY29uc3QgdGVzdFBvbHlsaW5lID0gW3tcbiAgICAgICAgICAgIHBvaW50czogW3tcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDM5LjkyNTUzOSxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuMjc5MDM3XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAzOS45MjU1MzksXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjUyMDI4NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb2xvcjogJyNGRkNDRkYnLFxuICAgICAgICAgICAgd2lkdGg6IDcsXG4gICAgICAgICAgICBkb3R0ZWRMaW5lOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dMaW5lOiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBvaW50czogW3tcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDM5LjkzODY5OCxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuMjc1MTc3XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAzOS45NjYwNjksXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjI4OTI1M1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogMzkuOTQ0MjI2LFxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDExNi4zMDYwNzZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDM5Ljk2NjA2OSxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuMzIyODk5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAzOS45Mzg2OTgsXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjMzNjk3NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb2xvcjogJyNDQ0ZGRkYnLFxuICAgICAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgICAgICBkb3R0ZWRMaW5lOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dMaW5lOiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQ0MwMDAwJyxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAzXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGNvbnN0IHRlc3RQb2x5Z29ucyA9IFt7XG4gICAgICAgICAgICBwb2ludHM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAzOS43ODE4OTIsXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjI5MzQxM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogMzkuNzg3NjAwLFxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDExNi4zOTE4NDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDM5LjczMzE4NyxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuNDE3OTMyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAzOS43MDQ2NTMsXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjMzODI1NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxsQ29sb3I6ICcjRkZDQ0ZGJyxcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICcjQ0M5OUNDJyxcbiAgICAgICAgICAgIHpJbmRleDogMTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcG9pbnRzOiBbe1xuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogMzkuODg3NjAwLFxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDExNi41MTg5MzJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDM5Ljc4MTg5MixcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuNTE4OTMyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAzOS43ODE4OTIsXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjQyODkzMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogMzkuODg3NjAwLFxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDExNi40Mjg5MzJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsbENvbG9yOiAnI0NDRkZGRicsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogNSxcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAnI0NDMDAwMCcsXG4gICAgICAgICAgICB6SW5kZXg6IDNcbiAgICAgICAgfVxuICAgIF07XG4gICAgY29uc3QgdGVzdENpcmNsZXMgPSBbe1xuICAgICAgICAgICAgbGF0aXR1ZGU6IDM5Ljk5NjQ0MSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjQxMTE0NixcbiAgICAgICAgICAgIHJhZGl1czogMTUwMDAsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogNSxcbiAgICAgICAgICAgIGNvbG9yOiAnI0NDRkZGRicsXG4gICAgICAgICAgICBmaWxsQ29sb3I6ICcjQ0MwMDAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogNDAuMDk2NDQxLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuNTExMTQ2LFxuICAgICAgICAgICAgcmFkaXVzOiAxMjAwMCxcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgICAgY29sb3I6ICcjQ0NGRkZGJyxcbiAgICAgICAgICAgIGZpbGxDb2xvcjogJyNGRkNDRkYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiAzOS44OTY0NDEsXG4gICAgICAgICAgICBsb25naXR1ZGU6IDExNi4zMTExNDYsXG4gICAgICAgICAgICByYWRpdXM6IDkwMDAsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgICAgIGNvbG9yOiAnI0NDRkZGRicsXG4gICAgICAgICAgICBmaWxsQ29sb3I6ICcjQ0MwMDAwJ1xuICAgICAgICB9XG4gICAgXTtcbiAgICBjb25zdCB0ZXN0SW5jbHVkZVBvaW50cyA9IFt7XG4gICAgICAgICAgICBsYXRpdHVkZTogMzkuOTg5NjMxLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuNDgxMDE4LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYXRpdHVkZTogMzkuOTA4NjkyMDAwMCxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMTE2LjM5NzQ3NzAwMDAsXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTYuMzk3NDc3MDAwMCxcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDM5LjkwODY5MjAwMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbe1xuICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICcvc3RhdGljL2xvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgc2hvd0xvY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzY2FsZTogMTMsXG4gICAgICAgICAgICAgICAgc2hvd0NvbXBhc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZW5hYmxlM0Q6IHRydWUsXG4gICAgICAgICAgICAgICAgZW5hYmxlT3Zlcmxvb2tpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZW5hYmxlWm9vbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbmFibGVTY3JvbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgZW5hYmxlUm90YXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVuYWJsZVNhdGVsbGl0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZW5hYmxlVHJhZmZpYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcG9seWxpbmU6IFtdLFxuICAgICAgICAgICAgICAgIG1hcmtlcnM6IFtdLFxuICAgICAgICAgICAgICAgIHBvbHlnb25zOiBbXSxcbiAgICAgICAgICAgICAgICBjaXJjbGVzOiBbXSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlUG9pbnRzOiBbXSxcbiAgICAgICAgICAgICAgICByb3RhdGU6IDAsXG4gICAgICAgICAgICAgICAgc2tldzogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkxvYWQoKSB7fSxcbiAgICAgICAgb25SZWFkeSgpIHtcbiAgICAgICAgICAgIHRoaXMubWFwID0gdW5pLmNyZWF0ZU1hcENvbnRleHQoXCJtYXAxXCIsIHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG5cdFx0XHQgIC8vICNpZm5kZWYgTVAtSkRcbiAgICAgICAgICAgIGNoYW5nZVNjYWxlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnNjYWxlID09IDkgPyAxNSA6IDk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlUm90YXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlID0gdGhpcy5yb3RhdGUgPT0gOTAgPyAwIDogOTA7XG4gICAgICAgICAgICB9LFxuXHRcdFx0XHRjaGFuZ2VTa2V3KCkge1xuXHRcdFx0XHQgICAgdGhpcy5za2V3ID0gdGhpcy5za2V3ID09IDMwID8gMCA6IDMwO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyAjZW5kaWZcbiAgICAgICAgICAgIGVuYWJsZVRocmVlRChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUzRCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZVNob3dDb21wYXNzKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wYXNzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlRW5hYmxlT3Zlcmxvb2tpbmcoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlT3Zlcmxvb2tpbmcgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VFbmFibGVab29tKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVpvb20gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VFbmFibGVTY3JvbGwoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlRW5hYmxlUm90YXRlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVJvdGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZUVuYWJsZVNhdGVsbGl0ZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVTYXRlbGxpdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VFbmFibGVUcmFmZmljKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVRyYWZmaWMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRNYXJrZXJzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFya2VycyA9IHRlc3RNYXJrZXJzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFBvbHlsaW5lKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmUgPSB0ZXN0UG9seWxpbmU7XG4gICAgICAgICAgICB9LFxuXHRcdFx0XHQvLyAjaWZuZGVmIE1QLUpEXG4gICAgICAgICAgICBhZGRQb2x5Z29ucygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlnb25zID0gdGVzdFBvbHlnb25zO1xuICAgICAgICAgICAgfSxcblx0XHRcdFx0Ly8gI2VuZGlmXG4gICAgICAgICAgICBhZGRDaXJjbGVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlcyA9IHRlc3RDaXJjbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGVQb2ludCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluY2x1ZGVQb2ludHMgPSB0ZXN0SW5jbHVkZVBvaW50cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVHZXRDZW50ZXJMb2NhdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5nZXRDZW50ZXJMb2NhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHJldClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUdldFJlZ2lvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5nZXRSZWdpb24oe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmV0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShyZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cdFx0XHRcdC8vICNpZm5kZWYgTVAtSkRcbiAgICAgICAgICAgIGhhbmRsZVRyYW5zbGF0ZU1hcmtlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC50cmFuc2xhdGVNYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJJZDogMSxcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAzOS45ODk2MzEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDExNi40ODEwMThcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9LCByZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShyZXQpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXHRcdFx0XHQvLyAjZW5kaWZcbiAgICAgICAgICAgIG1hcHRhcChlKSB7XG4gICAgICAgICAgICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbm1hcmtlcnRhcChlKSB7XG4gICAgICAgICAgICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNvbnRyb2x0YXAoZSkge1xuICAgICAgICAgICAgICAgIHVuaS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jYWxsb3V0dGFwKGUpIHtcbiAgICAgICAgICAgICAgICB1bmkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9udXBkYXRlZChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25yZWdpb25jaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbnBvaXRhcChlKSB7XG4gICAgICAgICAgICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5tYXAge1xuICAgICAgICB3aWR0aDogNzUwcnB4O1xuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC8qICNlbmRpZiAqL1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIH1cblxuICAgIC5zY3JvbGx2aWV3IHtcblx0XHQvKiAjaWZkZWYgSDUgKi9cblx0XHRtYXJnaW4tdG9wOiAyNDBweDtcblx0XHQvKiAjZW5kaWYgKi9cbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgfVxuXG4gICAgLmxpc3QtdGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///139\n");

/***/ }),

/***/ 140:
/*!**************************************************************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages/API/map/map.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./map.nvue?vue&type=style&index=0&lang=css&mpType=page */ 141);
/* harmony import */ var _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_01_software_80_hbuilderX_HBuilderX_3_6_5_20221121_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_map_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 141:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages/API/map/map.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".content": {
    "": {
      "flex": [
        1,
        0,
        0,
        0
      ]
    }
  },
  ".map": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        1
      ],
      "height": [
        "250",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#f0f0f0",
        0,
        0,
        1
      ]
    }
  },
  ".scrollview": {
    "": {
      "flex": [
        1,
        0,
        0,
        2
      ],
      "paddingTop": [
        "10",
        0,
        0,
        2
      ],
      "paddingRight": [
        "10",
        0,
        0,
        2
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        2
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        2
      ]
    }
  },
  ".list-item": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        3
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        3
      ],
      "alignItems": [
        "center",
        0,
        0,
        3
      ],
      "paddingTop": [
        "5",
        0,
        0,
        3
      ],
      "paddingRight": [
        "0",
        0,
        0,
        3
      ],
      "paddingBottom": [
        "5",
        0,
        0,
        3
      ],
      "paddingLeft": [
        "0",
        0,
        0,
        3
      ]
    }
  },
  ".list-text": {
    "": {
      "flex": [
        1,
        0,
        0,
        4
      ]
    }
  },
  ".button": {
    "": {
      "marginTop": [
        "5",
        0,
        0,
        5
      ],
      "marginBottom": [
        "5",
        0,
        0,
        5
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 2:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 3));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 5);var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 6));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e33) {throw _e33;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e34) {didErr = true;err = _e34;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function n(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function s(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var o = s(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},o = s.lib = {},r = o.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = o.WordArray = r.extend({ init: function init(e, n) {e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,o = e.sigBytes;if (this.clamp(), s % 4) for (var r = 0; r < o; r++) {var i = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;t[s + r >>> 2] |= i << 24 - (s + r) % 4 * 8;} else for (r = 0; r < o; r += 4) {t[s + r >>> 2] = n[r >>> 2];}return this.sigBytes += o, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = r.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], o = function o(t) {t = t;var n = 987654321,s = 4294967295;return function () {var o = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);};}, r = 0; r < t; r += 4) {var a = o(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], o = 0; o < n; o++) {var r = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;s.push((r >>> 4).toString(16)), s.push((15 & r).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], o = 0; o < n; o++) {var r = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;s.push(String.fromCharCode(r));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },l = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },h = o.BufferedBlockAlgorithm = r.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,o = n.sigBytes,r = this.blockSize,a = o / (4 * r),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * r,u = e.min(4 * c, o);if (c) {for (var l = 0; l < c; l += r) {this._doProcessBlock(s, l);}var h = s.splice(0, c);n.sigBytes -= u;}return new i.init(h, u);}, clone: function clone() {var e = r.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 });o.Hasher = h.extend({ cfg: r.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {h.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} });var d = s.algo = {};return s;}(Math), n);}),r = (s(function (e, t) {var n;e.exports = (n = o, function (e) {var t = n,s = t.lib,o = s.WordArray,r = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = r.extend({ _doReset: function _doReset() {this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,o = e[s];e[s] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);}var r = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],k = e[t + 9],v = e[t + 10],T = e[t + 11],S = e[t + 12],A = e[t + 13],P = e[t + 14],I = e[t + 15],b = r[0],O = r[1],C = r[2],E = r[3];b = u(b, O, C, E, i, 7, a[0]), E = u(E, b, O, C, c, 12, a[1]), C = u(C, E, b, O, f, 17, a[2]), O = u(O, C, E, b, p, 22, a[3]), b = u(b, O, C, E, g, 7, a[4]), E = u(E, b, O, C, m, 12, a[5]), C = u(C, E, b, O, y, 17, a[6]), O = u(O, C, E, b, _, 22, a[7]), b = u(b, O, C, E, w, 7, a[8]), E = u(E, b, O, C, k, 12, a[9]), C = u(C, E, b, O, v, 17, a[10]), O = u(O, C, E, b, T, 22, a[11]), b = u(b, O, C, E, S, 7, a[12]), E = u(E, b, O, C, A, 12, a[13]), C = u(C, E, b, O, P, 17, a[14]), b = l(b, O = u(O, C, E, b, I, 22, a[15]), C, E, c, 5, a[16]), E = l(E, b, O, C, y, 9, a[17]), C = l(C, E, b, O, T, 14, a[18]), O = l(O, C, E, b, i, 20, a[19]), b = l(b, O, C, E, m, 5, a[20]), E = l(E, b, O, C, v, 9, a[21]), C = l(C, E, b, O, I, 14, a[22]), O = l(O, C, E, b, g, 20, a[23]), b = l(b, O, C, E, k, 5, a[24]), E = l(E, b, O, C, P, 9, a[25]), C = l(C, E, b, O, p, 14, a[26]), O = l(O, C, E, b, w, 20, a[27]), b = l(b, O, C, E, A, 5, a[28]), E = l(E, b, O, C, f, 9, a[29]), C = l(C, E, b, O, _, 14, a[30]), b = h(b, O = l(O, C, E, b, S, 20, a[31]), C, E, m, 4, a[32]), E = h(E, b, O, C, w, 11, a[33]), C = h(C, E, b, O, T, 16, a[34]), O = h(O, C, E, b, P, 23, a[35]), b = h(b, O, C, E, c, 4, a[36]), E = h(E, b, O, C, g, 11, a[37]), C = h(C, E, b, O, _, 16, a[38]), O = h(O, C, E, b, v, 23, a[39]), b = h(b, O, C, E, A, 4, a[40]), E = h(E, b, O, C, i, 11, a[41]), C = h(C, E, b, O, p, 16, a[42]), O = h(O, C, E, b, y, 23, a[43]), b = h(b, O, C, E, k, 4, a[44]), E = h(E, b, O, C, S, 11, a[45]), C = h(C, E, b, O, I, 16, a[46]), b = d(b, O = h(O, C, E, b, f, 23, a[47]), C, E, i, 6, a[48]), E = d(E, b, O, C, _, 10, a[49]), C = d(C, E, b, O, P, 15, a[50]), O = d(O, C, E, b, m, 21, a[51]), b = d(b, O, C, E, S, 6, a[52]), E = d(E, b, O, C, p, 10, a[53]), C = d(C, E, b, O, v, 15, a[54]), O = d(O, C, E, b, c, 21, a[55]), b = d(b, O, C, E, w, 6, a[56]), E = d(E, b, O, C, I, 10, a[57]), C = d(C, E, b, O, y, 15, a[58]), O = d(O, C, E, b, A, 21, a[59]), b = d(b, O, C, E, g, 6, a[60]), E = d(E, b, O, C, T, 10, a[61]), C = d(C, E, b, O, f, 15, a[62]), O = d(O, C, E, b, k, 21, a[63]), r[0] = r[0] + b | 0, r[1] = r[1] + O | 0, r[2] = r[2] + C | 0, r[3] = r[3] + E | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,o = 8 * t.sigBytes;n[o >>> 5] |= 128 << 24 - o % 32;var r = e.floor(s / 4294967296),i = s;n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var l = c[u];c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);}return a;}, clone: function clone() {var e = r.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, o, r, i) {var a = e + (t & n | ~t & s) + o + i;return (a << r | a >>> 32 - r) + t;}function l(e, t, n, s, o, r, i) {var a = e + (t & s | n & ~s) + o + i;return (a << r | a >>> 32 - r) + t;}function h(e, t, n, s, o, r, i) {var a = e + (t ^ n ^ s) + o + i;return (a << r | a >>> 32 - r) + t;}function d(e, t, n, s, o, r, i) {var a = e + (n ^ (t | ~s)) + o + i;return (a << r | a >>> 32 - r) + t;}t.MD5 = r._createHelper(c), t.HmacMD5 = r._createHmacHelper(c);}(Math), n.MD5);}), s(function (e, t) {var n, s, r;e.exports = (s = (n = o).lib.Base, r = n.enc.Utf8, void (n.algo.HMAC = s.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = r.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), a = o.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}o.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), s(function (e, t) {e.exports = o.HmacMD5;})),i = s(function (e, t) {e.exports = o.enc.Utf8;}),a = s(function (e, t) {var n;e.exports = (n = o, function () {var e = n,t = e.lib.WordArray;function s(e, n, s) {for (var o = [], r = 0, i = 0; i < n; i++) {if (i % 4) {var a = s[e.charCodeAt(i - 1)] << i % 4 * 2,c = s[e.charCodeAt(i)] >>> 6 - i % 4 * 2;o[r >>> 2] |= (a | c) << 24 - r % 4 * 8, r++;}}return t.create(o, r);}e.enc.Base64 = { stringify: function stringify(e) {var t = e.words,n = e.sigBytes,s = this._map;e.clamp();for (var o = [], r = 0; r < n; r += 3) {for (var i = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; a < 4 && r + .75 * a < n; a++) {o.push(s.charAt(i >>> 6 * (3 - a) & 63));}}var c = s.charAt(64);if (c) for (; o.length % 4;) {o.push(c);}return o.join("");}, parse: function parse(e) {var t = e.length,n = this._map,o = this._reverseMap;if (!o) {o = this._reverseMap = [];for (var r = 0; r < n.length; r++) {o[n.charCodeAt(r)] = r;}}var i = n.charAt(64);if (i) {var a = e.indexOf(i);-1 !== a && (t = a);}return s(e, t, o);}, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };}(), n.enc.Base64);});var c = "FUNCTION",u = "OBJECT",l = "CLIENT_DB";function h(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function d(e) {return "object" === h(e);}function f(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var p = "development" === "development",g = "app-plus";var m;"true" === Object({"NODE_ENV":"development","UNI_APP_ID":"","UNI_APP_NAME":"hello-uniapp","UNI_PLATFORM":"app-plus","VUE_APP_PLATFORM":"app-plus","UNI_CLOUD_PROVIDER":undefined,"UNICLOUD_DEBUG":undefined,"RUN_BY_HBUILDERX":true,"UNI_AUTOMATOR_WS_ENDPOINT":undefined,"UNI_STAT_UNI_CLOUD":{},"UNI_STATISTICS_CONFIG":{"version":"2","enable":true},"UNI_STAT_DEBUG":false,"UNI_COMPILER_VERSION":"3.6.5"}).UNI_SECURE_NETWORK || Object({"NODE_ENV":"development","UNI_APP_ID":"","UNI_APP_NAME":"hello-uniapp","UNI_PLATFORM":"app-plus","VUE_APP_PLATFORM":"app-plus","UNI_CLOUD_PROVIDER":undefined,"UNICLOUD_DEBUG":undefined,"RUN_BY_HBUILDERX":true,"UNI_AUTOMATOR_WS_ENDPOINT":undefined,"UNI_STAT_UNI_CLOUD":{},"UNI_STATISTICS_CONFIG":{"version":"2","enable":true},"UNI_STAT_DEBUG":false,"UNI_COMPILER_VERSION":"3.6.5"}).UNI_SECURE_NETWORK, m = "h5" === g ? "web" : "app-plus" === g ? "app" : g;var y = f(undefined),_ = f(undefined) || [],w = true;var k = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 7).default || __webpack_require__(/*! uni-stat-config */ 7);k = _e2.appid;}} catch (e) {}var v = {};function T(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = v, s = e, Object.prototype.hasOwnProperty.call(n, s) || (v[e] = t), v[e];}"app" === m && (v = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var S = ["invoke", "success", "fail", "complete"],A = T("_globalUniCloudInterceptor");function P(e, t) {A[e] || (A[e] = {}), d(t) && Object.keys(t).forEach(function (n) {S.indexOf(n) > -1 && function (e, t, n) {var s = A[e][t];s || (s = A[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function I(e, t) {A[e] || (A[e] = {}), d(t) ? Object.keys(t).forEach(function (n) {S.indexOf(n) > -1 && function (e, t, n) {var s = A[e][t];if (!s) return;var o = s.indexOf(n);o > -1 && s.splice(o, 1);}(e, n, t[n]);}) : delete A[e];}function b(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function O(e, t) {return A[e] && A[e][t] || [];}function C(e) {P("callObject", e);}var E = T("_globalUniCloudListener"),R = "response",U = "needLogin",x = "refreshToken",L = "clientdb",D = "cloudfunction",N = "cloudobject";function q(e) {return E[e] || (E[e] = []), E[e];}function F(e, t) {var n = q(e);n.includes(t) || n.push(t);}function M(e, t) {var n = q(e),s = n.indexOf(t);-1 !== s && n.splice(s, 1);}function j(e, t) {var n = q(e);for (var _e3 = 0; _e3 < n.length; _e3++) {(0, n[_e3])(t);}}var $ = !1;var B = new Promise(function (e) {$ && e(), function t() {if ("function" == typeof getCurrentPages) {var _t2 = getCurrentPages();_t2 && _t2[0] && ($ = !0, e());}$ || setTimeout(function () {t();}, 30);}();});function K() {return B;}function W(e, t) {return t ? function (n) {var _this = this;var s = !1;if ("callFunction" === t) {var _e4 = n && n.type || c;s = _e4 !== c;}var o = "callFunction" === t && !s;var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var i = r.then(function () {return s ? Promise.resolve() : b(O(t, "invoke"), n);}).then(function () {return e.call(_this, n);}).then(function (e) {return s ? Promise.resolve(e) : b(O(t, "success"), e).then(function () {return b(O(t, "complete"), e);}).then(function () {return o && j(R, { type: D, content: e }), Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : b(O(t, "fail"), e).then(function () {return b(O(t, "complete"), e);}).then(function () {return j(R, { type: D, content: e }), Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return i;i.then(function (e) {n.success && n.success(e), n.complete && n.complete(e), o && j(R, { type: D, content: e });}, function (e) {n.fail && n.fail(e), n.complete && n.complete(e), o && j(R, { type: D, content: e });});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var H = /*#__PURE__*/function (_Error) {_inherits(H, _Error);var _super = _createSuper(H);function H(e) {var _this2;_classCallCheck(this, H);var t = e.code || "SYSTEM_ERROR",n = e.message || "unknown system error";_this2 = _super.call(this, n), _this2.errMsg = n, _this2.errCode = _this2.code = t, _this2.requestId = e.requestId;return _this2;}return H;}( /*#__PURE__*/_wrapNativeSuper(Error));function z() {var e, t;try {if (uni.getLaunchOptionsSync) {if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),_n = _uni$getLaunchOptions.scene,_s = _uni$getLaunchOptions.channel;e = _s, t = _n;}} catch (e) {}return { channel: e, scene: t };}var J;function V() {var e = uni.getLocale && uni.getLocale() || "en";if (J) return _objectSpread(_objectSpread({}, J), {}, { locale: e, LOCALE: e });var t = uni.getSystemInfoSync(),n = t.deviceId,s = t.osName,o = t.uniPlatform,r = t.appId,i = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];for (var _e5 = 0; _e5 < i.length; _e5++) {delete t[i[_e5]];}return J = _objectSpread(_objectSpread({ PLATFORM: o, OS: s, APPID: r, DEVICEID: n }, z()), t), _objectSpread(_objectSpread({}, J), {}, { locale: e, LOCALE: e });}var Y = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), p && "web" === m && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new H({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var o = e.data;if (o.error) return s(new H({ code: o.error.code, message: o.error.message, requestId: t }));o.result = o.data, o.requestId = t, delete o.data, n(o);} }));});}, toBase64: function toBase64(e) {return a.stringify(i.parse(e));} };var X = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} },G = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };var _e6 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: G, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: G }, "zh-Hans"),Q = _e6.t;var Z = /*#__PURE__*/function () {function Z(e) {_classCallCheck(this, Z);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(Q("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = X, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(Z, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return Y.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this3 = this;return Promise.resolve().then(function () {return _this3.hasAccessToken ? t ? _this3.requestWrapped(e) : _this3.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this3.getAccessToken();}).then(function () {var t = _this3.rebuildRequest(e);return _this3.request(t, !0);});}) : _this3.getAccessToken().then(function () {var t = _this3.rebuildRequest(e);return _this3.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = Y.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = Y.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this4 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this4.setAccessToken(e.result.accessToken), _this4._getAccessTokenPromiseStatus = "fulfilled", t(_this4.accessToken)) : (_this4._getAccessTokenPromiseStatus = "rejected", n(new H({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this4._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this5 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,o = _ref.fileType,r = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this5.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: o, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new H({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new H({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof r && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {r({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function () {var _uploadFile = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref2) {var e, t, _ref2$fileType, n, s, o, r, i, a, c, u, l, d, f, p, g, m, y, _e7, _;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:e = _ref2.filePath, t = _ref2.cloudPath, _ref2$fileType = _ref2.fileType, n = _ref2$fileType === void 0 ? "image" : _ref2$fileType, s = _ref2.onUploadProgress, o = _ref2.config;if (!("string" !== h(t))) {_context.next = 3;break;}throw new H({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });case 3:if (t = t.trim()) {_context.next = 5;break;}throw new H({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });case 5:if (!/:\/\//.test(t)) {_context.next = 7;break;}throw new H({ code: "INVALID_PARAM", message: "cloudPath不合法" });case 7:r = o && o.envType || this.config.envType;_context.next = 10;return this.getOSSUploadOptionsFromPath({ env: r, filename: t });case 10:i = _context.sent.result;a = "https://" + i.cdnDomain + "/" + i.ossPath;c = i.securityToken;u = i.accessKeyId;l = i.signature;d = i.host;f = i.ossPath;p = i.id;g = i.policy;m = i.ossCallbackUrl;y = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: u, Signature: l, host: d, id: p, key: f, policy: g, success_action_status: 200 };if (c && (y["x-oss-security-token"] = c), m) {_e7 = JSON.stringify({ callbackUrl: m, callbackBody: JSON.stringify({ fileId: p, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });y.callback = Y.toBase64(_e7);}_ = { url: "https://" + i.host, formData: y, fileName: "file", name: "file", filePath: e, fileType: n };_context.next = 25;return this.uploadFileToOSS(Object.assign({}, _, { onUploadProgress: s }));case 25:if (!m) {_context.next = 27;break;}return _context.abrupt("return", { success: !0, filePath: e, fileID: a });case 27:_context.next = 29;return this.reportOSSUpload({ id: p });case 29:if (!_context.sent.success) {_context.next = 31;break;}return _context.abrupt("return", { success: !0, filePath: e, fileID: a });case 31:throw new H({ code: "UPLOAD_FAILED", message: "文件上传失败" });case 32:case "end":return _context.stop();}}}, _callee, this);}));function uploadFile(_x) {return _uploadFile.apply(this, arguments);}return uploadFile;}() }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new H({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "getFileInfo", value: function () {var _getFileInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _ref5,e,t,_args2 = arguments;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_ref5 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref5.fileList;if (!(!Array.isArray(e) || 0 === e.length)) {_context2.next = 3;break;}throw new H({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });case 3:t = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e.map(function (e) {return e.split("?")[0];}).join(",") }) };_context2.next = 6;return this.request(this.setupRequest(t));case 6:_context2.t0 = _context2.sent.result;return _context2.abrupt("return", { fileList: _context2.t0 });case 8:case "end":return _context2.stop();}}}, _callee2, this);}));function getFileInfo() {return _getFileInfo.apply(this, arguments);}return getFileInfo;}() }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return Z;}();var ee = { init: function init(e) {var t = new Z(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var te = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var ne;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(ne || (ne = {}));var se = function se() {};var oe = function oe() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t3 = function _t3() {throw new H({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });};return Object.defineProperty(e.promise, "then", { get: _t3 }), Object.defineProperty(e.promise, "catch", { get: _t3 }), e;}var t = new Promise(function (t, n) {e = function e(_e8, s) {return _e8 ? n(_e8) : t(s);};});return e.promise = t, e;};function re(e) {return void 0 === e;}function ie(e) {return "[object Null]" === Object.prototype.toString.call(e);}var ae;function ce(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e9 = _step.value;var _t4 = _e9.isMatch,_n2 = _e9.genAdapter,_s2 = _e9.runtime;if (_t4()) return { adapter: _n2(), runtime: _s2 };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(ae || (ae = {}));var ue = { adapter: null, runtime: void 0 },le = ["anonymousUuidKey"];var he = /*#__PURE__*/function (_se) {_inherits(he, _se);var _super2 = _createSuper(he);function he() {var _this6;_classCallCheck(this, he);_this6 = _super2.call(this), ue.adapter.root.tcbObject || (ue.adapter.root.tcbObject = {});return _this6;}_createClass(he, [{ key: "setItem", value: function setItem(e, t) {ue.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return ue.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete ue.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete ue.adapter.root.tcbObject;} }]);return he;}(se);function de(e, t) {switch (e) {case "local":return t.localStorage || new he();case "none":return new he();default:return t.sessionStorage || new he();}}var fe = /*#__PURE__*/function () {function fe(e) {_classCallCheck(this, fe);if (!this._storage) {this._persistence = ue.adapter.primaryStorage || e.persistence, this._storage = de(this._persistence, ue.adapter);var _t5 = "access_token_".concat(e.env),_n3 = "access_token_expire_".concat(e.env),_s3 = "refresh_token_".concat(e.env),_o = "anonymous_uuid_".concat(e.env),_r = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t5, accessTokenExpireKey: _n3, refreshTokenKey: _s3, anonymousUuidKey: _o, loginTypeKey: _r, userInfoKey: _i };}}_createClass(fe, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = de(e, ue.adapter);for (var _e10 in this.keys) {var _s4 = this.keys[_e10];if (t && le.includes(_e10)) continue;var _o2 = this._storage.getItem(_s4);re(_o2) || ie(_o2) || (n.setItem(_s4, _o2), this._storage.removeItem(_s4));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },o = JSON.stringify(s);try {this._storage.setItem(e, o);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return fe;}();var pe = {},ge = {};function me(e) {return pe[e];}var ye = function ye(e, t) {_classCallCheck(this, ye);this.data = t || null, this.name = e;};var _e = /*#__PURE__*/function (_ye) {_inherits(_e, _ye);var _super3 = _createSuper(_e);function _e(e, t) {var _this7;_classCallCheck(this, _e);_this7 = _super3.call(this, "error", { error: e, data: t }), _this7.error = e;return _this7;}return _e;}(ye);var we = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s5 = n[e].indexOf(t);-1 !== _s5 && n[e].splice(_s5, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof _e) return console.error(e.error), this;var n = "string" == typeof e ? new ye(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e11 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e11),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t6 = _step2.value;_t6.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function ke(e, t) {we.on(e, t);}function ve(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};we.fire(e, t);}function Te(e, t) {we.off(e, t);}var Se = "loginStateChanged",Ae = "loginStateExpire",Pe = "loginTypeChanged",Ie = "anonymousConverted",be = "refreshAccessToken";var Oe;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(Oe || (Oe = {}));var Ce = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],Ee = { "X-SDK-Version": "1.3.5" };function Re(e, t, n) {var s = e[t];e[t] = function (t) {var o = {},r = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(o, s), Object.assign(r, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), o);else for (var _e12 in o) {i.append(_e12, o[_e12]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), r), s.call(e, t);};}function Ue() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, Ee), {}, { "x-seqid": e }) };}var xe = /*#__PURE__*/function () {function xe() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, xe);var t;this.config = e, this._reqClass = new ue.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = me(this.config.env), this._localCache = (t = this.config.env, ge[t]), Re(this._reqClass, "post", [Ue]), Re(this._reqClass, "upload", [Ue]), Re(this._reqClass, "download", [Ue]);}_createClass(xe, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.post(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function post(_x2) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return this._reqClass.upload(e);case 2:return _context4.abrupt("return", _context4.sent);case 3:case "end":return _context4.stop();}}}, _callee4, this);}));function upload(_x3) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return this._reqClass.download(e);case 2:return _context5.abrupt("return", _context5.sent);case 3:case "end":return _context5.stop();}}}, _callee5, this);}));function download(_x4) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var e, t;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context6.prev = 1;_context6.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context6.sent;_context6.next = 10;break;case 7:_context6.prev = 7;_context6.t0 = _context6["catch"](1);t = _context6.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context6.next = 12;break;}throw t;case 12:return _context6.abrupt("return", e);case 13:case "end":return _context6.stop();}}}, _callee6, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var _this$_cache$keys, e, t, n, s, o, r, i, a, _e13, _e14, _t7, _s6;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, o = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);r = this._cache.getStore(n);if (r) {_context7.next = 5;break;}throw new H({ message: "未登录CloudBase" });case 5:i = { refresh_token: r };_context7.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context7.sent;if (!a.data.code) {_context7.next = 21;break;}_e13 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e13 || "REFRESH_TOKEN_EXPIRED" === _e13 || "INVALID_REFRESH_TOKEN" === _e13)) {_context7.next = 20;break;}if (!(this._cache.getStore(s) === Oe.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e13)) {_context7.next = 19;break;}_e14 = this._cache.getStore(o);_t7 = this._cache.getStore(n);_context7.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e14, refresh_token: _t7 });case 17:_s6 = _context7.sent;return _context7.abrupt("return", (this.setRefreshToken(_s6.refresh_token), this._refreshAccessToken()));case 19:ve(Ae), this._cache.removeStore(n);case 20:throw new H({ code: a.data.code, message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code) });case 21:if (!a.data.access_token) {_context7.next = 23;break;}return _context7.abrupt("return", (ve(be), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context7.stop();}}}, _callee7, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var _this$_cache$keys2, e, t, n, s, o, r;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context8.next = 3;break;}throw new H({ message: "refresh token不存在，登录状态异常" });case 3:s = this._cache.getStore(e), o = this._cache.getStore(t), r = !0;_context8.t0 = this._shouldRefreshAccessTokenHook;if (!_context8.t0) {_context8.next = 9;break;}_context8.next = 8;return this._shouldRefreshAccessTokenHook(s, o);case 8:_context8.t0 = !_context8.sent;case 9:_context8.t1 = _context8.t0;if (!_context8.t1) {_context8.next = 12;break;}r = !1;case 12:return _context8.abrupt("return", (!s || !o || o < Date.now()) && r ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: o });case 13:case "end":return _context8.stop();}}}, _callee8, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(e, t, n) {var s, o, r, _e15, i, _e16, _e17, a, c, u, l, h, d, f, p, g;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:s = "x-tcb-trace_".concat(this.config.env);o = "application/x-www-form-urlencoded";r = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === Ce.indexOf(e))) {_context9.next = 10;break;}_e15 = this._cache.keys.refreshTokenKey;_context9.t0 = this._cache.getStore(_e15);if (!_context9.t0) {_context9.next = 10;break;}_context9.next = 9;return this.getAccessToken();case 9:r.access_token = _context9.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e16 in i) {i.hasOwnProperty(_e16) && void 0 !== i[_e16] && i.append(_e16, r[_e16]);}o = "multipart/form-data";} else {o = "application/json", i = {};for (_e17 in r) {void 0 !== r[_e17] && (i[_e17] = r[_e17]);}}a = { headers: { "content-type": o } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, l = t.inQuery, h = t.search;d = { env: this.config.env };u && (d.parse = !0), l && (d = _objectSpread(_objectSpread({}, l), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var o = "";for (var _e18 in n) {"" === o ? !s && (t += "?") : o += "&", o += "".concat(_e18, "=").concat(encodeURIComponent(n[_e18]));}return /^http(s)?\:\/\//.test(t += o) ? t : "".concat(e).concat(t);}(te, "//tcb-api.tencentcloudapi.com/web", d);h && (f += h);_context9.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context9.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context9.next = 26;break;}throw new H({ code: "NETWORK_ERROR", message: "network request error" });case 26:return _context9.abrupt("return", p);case 27:case "end":return _context9.stop();}}}, _callee9, this);}));function request(_x5, _x6, _x7) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(e) {var t,n,_n4,_args10 = arguments;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:t = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};_context10.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context10.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === Ce.indexOf(e))) {_context10.next = 13;break;}_context10.next = 7;return this.refreshAccessToken();case 7:_context10.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n4 = _context10.sent;if (!_n4.data.code) {_context10.next = 12;break;}throw new H({ code: _n4.data.code, message: _n4.data.message });case 12:return _context10.abrupt("return", _n4.data);case 13:if (!n.data.code) {_context10.next = 15;break;}throw new H({ code: n.data.code, message: n.data.message });case 15:return _context10.abrupt("return", n.data);case 16:case "end":return _context10.stop();}}}, _callee10, this);}));function send(_x8) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return xe;}();var Le = {};function De(e) {return Le[e];}var Ne = /*#__PURE__*/function () {function Ne(e) {_classCallCheck(this, Ne);this.config = e, this._cache = me(e.env), this._request = De(e.env);}_createClass(Ne, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:_context11.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context11.sent;e = _yield$this$_request$.data;return _context11.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context11.stop();}}}, _callee11, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return Ne;}();var qe = /*#__PURE__*/function () {function qe(e) {_classCallCheck(this, qe);if (!e) throw new H({ code: "PARAM_ERROR", message: "envId is not defined" });this._envId = e, this._cache = me(this._envId), this._request = De(this._envId), this.setUserInfo();}_createClass(qe, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new H({ code: "PARAM_ERROR", message: "ticket must be string" });return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new H({ code: "PARAM_ERROR", message: "username must be a string" });return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context12.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context12.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context12.stop();}}}, _callee12, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13(e) {var t, n, s, o, r, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;o = e.province;r = e.country;i = e.city;_context13.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: o, country: r, city: i });case 8:_yield$this$_request$3 = _context13.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context13.stop();}}}, _callee13, this);}));function update(_x9) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_context14.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context14.sent;e = _yield$this$_request$4.data;return _context14.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context14.stop();}}}, _callee14, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this8 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this8[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return qe;}();var Fe = /*#__PURE__*/function () {function Fe(e) {_classCallCheck(this, Fe);if (!e) throw new H({ code: "PARAM_ERROR", message: "envId is not defined" });this._cache = me(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,o = this._cache.getStore(t),r = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: o, accessToken: r, accessTokenExpire: i }, this.user = new qe(e);}_createClass(Fe, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === Oe.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === Oe.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === Oe.WECHAT || this.loginType === Oe.WECHAT_OPEN || this.loginType === Oe.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Fe;}();var Me = /*#__PURE__*/function (_Ne) {_inherits(Me, _Ne);var _super4 = _createSuper(Me);function Me() {_classCallCheck(this, Me);return _super4.apply(this, arguments);}_createClass(Me, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15() {var _this$_cache$keys7, e, t, n, s, o, _e19;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context15.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:o = _context15.sent;if (!(o.uuid && o.refresh_token)) {_context15.next = 20;break;}this._setAnonymousUUID(o.uuid);this.setRefreshToken(o.refresh_token);_context15.next = 14;return this._request.refreshAccessToken();case 14:ve(Se);ve(Pe, { env: this.config.env, loginType: Oe.ANONYMOUS, persistence: "local" });_e19 = new Fe(this.config.env);_context15.next = 19;return _e19.user.refresh();case 19:return _context15.abrupt("return", _e19);case 20:throw new H({ message: "匿名登录失败" });case 21:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e) {var _this$_cache$keys8, t, n, s, o, r;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);o = this._cache.getStore(n);_context16.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: o, ticket: e });case 7:r = _context16.sent;if (!r.refresh_token) {_context16.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(r.refresh_token);_context16.next = 13;return this._request.refreshAccessToken();case 13:ve(Ie, { env: this.config.env });ve(Pe, { loginType: Oe.CUSTOM, persistence: "local" });return _context16.abrupt("return", { credential: { refreshToken: r.refresh_token } });case 16:throw new H({ message: "匿名转化失败" });case 17:case "end":return _context16.stop();}}}, _callee16, this);}));function linkAndRetrieveDataWithTicket(_x10) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Oe.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return Me;}(Ne);var je = /*#__PURE__*/function (_Ne2) {_inherits(je, _Ne2);var _super5 = _createSuper(je);function je() {_classCallCheck(this, je);return _super5.apply(this, arguments);}_createClass(je, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {var t, n;return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:if (!("string" != typeof e)) {_context17.next = 2;break;}throw new H({ param: "PARAM_ERROR", message: "ticket must be a string" });case 2:t = this._cache.keys.refreshTokenKey;_context17.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context17.sent;if (!n.refresh_token) {_context17.next = 15;break;}this.setRefreshToken(n.refresh_token);_context17.next = 10;return this._request.refreshAccessToken();case 10:ve(Se);ve(Pe, { env: this.config.env, loginType: Oe.CUSTOM, persistence: this.config.persistence });_context17.next = 14;return this.refreshUserInfo();case 14:return _context17.abrupt("return", new Fe(this.config.env));case 15:throw new H({ message: "自定义登录失败" });case 16:case "end":return _context17.stop();}}}, _callee17, this);}));function signIn(_x11) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return je;}(Ne);var $e = /*#__PURE__*/function (_Ne3) {_inherits($e, _Ne3);var _super6 = _createSuper($e);function $e() {_classCallCheck(this, $e);return _super6.apply(this, arguments);}_createClass($e, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {var n, s, o, r, i;return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:if (!("string" != typeof e)) {_context18.next = 2;break;}throw new H({ code: "PARAM_ERROR", message: "email must be a string" });case 2:n = this._cache.keys.refreshTokenKey;_context18.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context18.sent;o = s.refresh_token;r = s.access_token;i = s.access_token_expire;if (!o) {_context18.next = 22;break;}this.setRefreshToken(o);if (!(r && i)) {_context18.next = 15;break;}this.setAccessToken(r, i);_context18.next = 17;break;case 15:_context18.next = 17;return this._request.refreshAccessToken();case 17:_context18.next = 19;return this.refreshUserInfo();case 19:ve(Se);ve(Pe, { env: this.config.env, loginType: Oe.EMAIL, persistence: this.config.persistence });return _context18.abrupt("return", new Fe(this.config.env));case 22:throw s.code ? new H({ code: s.code, message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message) }) : new H({ message: "邮箱登录失败" });case 23:case "end":return _context18.stop();}}}, _callee18, this);}));function signIn(_x12, _x13) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e) {return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:return _context19.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context19.stop();}}}, _callee19, this);}));function activate(_x14) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20(e, t) {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function resetPasswordWithToken(_x15, _x16) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return $e;}(Ne);var Be = /*#__PURE__*/function (_Ne4) {_inherits(Be, _Ne4);var _super7 = _createSuper(Be);function Be() {_classCallCheck(this, Be);return _super7.apply(this, arguments);}_createClass(Be, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {var n, s, o, r, i;return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:if (!("string" != typeof e)) {_context21.next = 2;break;}throw new H({ code: "PARAM_ERROR", message: "username must be a string" });case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context21.next = 6;return this._request.send("auth.signIn", { loginType: Oe.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context21.sent;o = s.refresh_token;r = s.access_token_expire;i = s.access_token;if (!o) {_context21.next = 23;break;}this.setRefreshToken(o);if (!(i && r)) {_context21.next = 16;break;}this.setAccessToken(i, r);_context21.next = 18;break;case 16:_context21.next = 18;return this._request.refreshAccessToken();case 18:_context21.next = 20;return this.refreshUserInfo();case 20:ve(Se);ve(Pe, { env: this.config.env, loginType: Oe.USERNAME, persistence: this.config.persistence });return _context21.abrupt("return", new Fe(this.config.env));case 23:throw s.code ? new H({ code: s.code, message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message) }) : new H({ message: "用户名密码登录失败" });case 24:case "end":return _context21.stop();}}}, _callee21, this);}));function signIn(_x17, _x18) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return Be;}(Ne);var Ke = /*#__PURE__*/function () {function Ke(e) {_classCallCheck(this, Ke);this.config = e, this._cache = me(e.env), this._request = De(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), ke(Pe, this._onLoginTypeChanged);}_createClass(Ke, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new Me(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new je(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new $e(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new Be(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22() {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:return _context22.abrupt("return", new Me(this.config).signIn());case 1:case "end":return _context22.stop();}}}, _callee22, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23(e, t) {return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:return _context23.abrupt("return", new $e(this.config).signIn(e, t));case 1:case "end":return _context23.stop();}}}, _callee23, this);}));function signInWithEmailAndPassword(_x19, _x20) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new Be(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new Me(this.config)), ke(Ie, this._onAnonymousConverted);_context24.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context24.abrupt("return", _context24.sent);case 4:case "end":return _context24.stop();}}}, _callee24, this);}));function linkAndRetrieveDataWithTicket(_x21) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25() {var _this$_cache$keys10, e, t, n, s, o;return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:if (!(this.loginType === Oe.ANONYMOUS)) {_context25.next = 2;break;}throw new H({ message: "匿名用户不支持登出操作" });case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context25.next = 5;break;}return _context25.abrupt("return");case 5:_context25.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:o = _context25.sent;return _context25.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), ve(Se), ve(Pe, { env: this.config.env, loginType: Oe.NULL, persistence: this.config.persistence }), o));case 9:case "end":return _context25.stop();}}}, _callee25, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26(e, t) {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:return _context26.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context26.stop();}}}, _callee26, this);}));function signUpWithEmailAndPassword(_x22, _x23) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:return _context27.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context27.stop();}}}, _callee27, this);}));function sendPasswordResetEmail(_x24) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this9 = this;ke(Se, function () {var t = _this9.hasLoginState();e.call(_this9, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {ke(Ae, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {ke(be, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {ke(Ie, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this10 = this;ke(Pe, function () {var t = _this10.hasLoginState();e.call(_this10, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28() {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:_context28.next = 2;return this._request.getAccessToken();case 2:_context28.t0 = _context28.sent.accessToken;_context28.t1 = this.config.env;return _context28.abrupt("return", { accessToken: _context28.t0, env: _context28.t1 });case 5:case "end":return _context28.stop();}}}, _callee28, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new Fe(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:if (!("string" != typeof e)) {_context29.next = 2;break;}throw new H({ code: "PARAM_ERROR", message: "username must be a string" });case 2:_context29.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context29.sent;t = _yield$this$_request$5.data;return _context29.abrupt("return", t && t.isRegistered);case 7:case "end":return _context29.stop();}}}, _callee29, this);}));function isUsernameRegistered(_x25) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:return _context30.abrupt("return", new je(this.config).signIn(e));case 1:case "end":return _context30.stop();}}}, _callee30, this);}));function signInWithTicket(_x26) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Ke;}();var We = function We(e, t) {t = t || oe();var n = De(this.config.env),s = e.cloudPath,o = e.filePath,r = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,l = _e$data2.fileId,h = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": h, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: o, name: s, fileType: i, onUploadProgress: r }).then(function (e) {201 === e.statusCode ? t(null, { fileID: l, requestId: d }) : t(new H({ code: "STORAGE_REQUEST_FAIL", message: "STORAGE_REQUEST_FAIL: ".concat(e.data) }));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},He = function He(e, t) {t = t || oe();var n = De(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},ze = function ze(_ref6, t) {var e = _ref6.fileList;if (t = t || oe(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t8 = _step3.value;if (!_t8 || "string" != typeof _t8) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return De(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Je = function Je(_ref7, t) {var e = _ref7.fileList;t = t || oe(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s7 = _step4.value;"object" == typeof _s7 ? (_s7.hasOwnProperty("fileID") && _s7.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s7.fileID, max_age: _s7.maxAge })) : "string" == typeof _s7 ? n.push({ fileid: _s7 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return De(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ve = /*#__PURE__*/function () {var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(_ref8, t) {var e, n, s, o;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:e = _ref8.fileID;_context31.next = 3;return Je.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context31.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context31.next = 6;break;}return _context31.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = De(this.config.env);o = n.download_url;if (!(o = encodeURI(o), !t)) {_context31.next = 10;break;}return _context31.abrupt("return", s.download({ url: o }));case 10:_context31.t0 = t;_context31.next = 13;return s.download({ url: o });case 13:_context31.t1 = _context31.sent;(0, _context31.t0)(_context31.t1);case 15:case "end":return _context31.stop();}}}, _callee31, this);}));return function Ve(_x27, _x28) {return _ref9.apply(this, arguments);};}(),Ye = function Ye(_ref10, r) {var e = _ref10.name,t = _ref10.data,n = _ref10.query,s = _ref10.parse,o = _ref10.search;var i = r || oe();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new H({ code: "PARAM_ERROR", message: "函数名不能为空" }));var c = { inQuery: n, parse: s, search: o, function_name: e, request_data: a };return De(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t9 = e.data.response_data;if (s) i(null, { result: _t9, requestId: e.requestId });else try {_t9 = JSON.parse(e.data.response_data), i(null, { result: _t9, requestId: e.requestId });} catch (e) {i(new H({ message: "response data must be json" }));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},Xe = { timeout: 15e3, persistence: "session" },Ge = {};var Qe = /*#__PURE__*/function () {function Qe(e) {_classCallCheck(this, Qe);this.config = e || this.config, this.authObj = void 0;}_createClass(Qe, [{ key: "init", value: function init(e) {switch (ue.adapter || (this.requestClient = new ue.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, Xe), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new Qe(this.config);} }, { key: "auth", value: function auth() {var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref11.persistence;if (this.authObj) return this.authObj;var t = e || ue.adapter.primaryStorage || Xe.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;pe[t] = new fe(e), ge[t] = new fe(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, Le[n.env] = new xe(n), this.authObj = new Ke(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return ke.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return Te.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return Ye.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return ze.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Je.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ve.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return We.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return He.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Ge[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var n;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:n = Ge[e];if (n) {_context32.next = 3;break;}throw new H({ message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C") });case 3:_context32.next = 5;return n.invoke(t, this);case 5:return _context32.abrupt("return", _context32.sent);case 6:case "end":return _context32.stop();}}}, _callee32, this);}));function invokeExtension(_x29, _x30) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref12 = ce(e) || {},t = _ref12.adapter,n = _ref12.runtime;t && (ue.adapter = t), n && (ue.runtime = n);} }]);return Qe;}();var Ze = new Qe();function et(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),o = "";for (var r in n) {"" === o ? !s && (t += "?") : o += "&", o += r + "=" + encodeURIComponent(n[r]);}return /^http(s)?:\/\//.test(t += o) ? t : "" + e + t;}var tt = /*#__PURE__*/function () {function tt() {_classCallCheck(this, tt);}_createClass(tt, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, o) {X.request({ url: et("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {o(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,o = e.file,r = e.data,i = e.headers,a = e.fileType,c = X.uploadFile({ url: et("https:", s), name: "file", formData: Object.assign({}, r), filePath: o, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && r.success_action_status && (n.statusCode = parseInt(r.success_action_status, 10)), t(n);}, fail: function fail(e) {n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return tt;}();var nt = { setItem: function setItem(e, t) {X.setStorageSync(e, t);}, getItem: function getItem(e) {return X.getStorageSync(e);}, removeItem: function removeItem(e) {X.removeStorageSync(e);}, clear: function clear() {X.clearStorageSync();} };var st = { genAdapter: function genAdapter() {return { root: {}, reqClass: tt, localStorage: nt, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Ze.useAdapters(st);var ot = Ze,rt = ot.init;ot.init = function (e) {e.env = e.spaceId;var t = rt.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = W(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var it = ot;function at() {return { token: X.getStorageSync("uni_id_token") || X.getStorageSync("uniIdToken"), tokenExpired: X.getStorageSync("uni_id_token_expired") };}function ct() {var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref13.token,t = _ref13.tokenExpired;e && X.setStorageSync("uni_id_token", e), t && X.setStorageSync("uni_id_token_expired", t);}function ut() {if (!p || "web" !== m) return;uni.getStorageSync("__LAST_DCLOUD_APPID") !== k && (uni.setStorageSync("__LAST_DCLOUD_APPID", k), console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), X.removeStorageSync("uni_id_token"), X.removeStorageSync("uniIdToken"), X.removeStorageSync("uni_id_token_expired"));}var lt = /*#__PURE__*/function (_Z) {_inherits(lt, _Z);var _super8 = _createSuper(lt);function lt() {_classCallCheck(this, lt);return _super8.apply(this, arguments);}_createClass(lt, [{ key: "getAccessToken", value: function getAccessToken() {var _this11 = this;return new Promise(function (e, t) {var n = "Anonymous_Access_token";_this11.setAccessToken(n), e(n);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = Y.sign(n, this.config.clientSecret);var o = V();s["x-client-info"] = encodeURIComponent(JSON.stringify(o));var _at = at(),r = _at.token;return s["x-client-token"] = r, { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref14) {var _this12 = this;var e = _ref14.url,t = _ref14.formData,n = _ref14.name,s = _ref14.filePath,o = _ref14.fileType,r = _ref14.onUploadProgress;return new Promise(function (i, a) {var c = _this12.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: o, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new H({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new H({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof r && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {r({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref15) {var _this13 = this;var e = _ref15.filePath,t = _ref15.cloudPath,_ref15$fileType = _ref15.fileType,n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,s = _ref15.onUploadProgress;if (!t) throw new H({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var o;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,r = _t$result.url,i = _t$result.formData,a = _t$result.name;o = t.result.fileUrl;var c = { url: r, formData: i, name: a, filePath: e, fileType: n };return _this13.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: s }));}).then(function () {return _this13.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: o }) : s(new H({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref16) {var e = _ref16.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref17.fileList;var t = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }]);return lt;}(Z);var ht = { init: function init(e) {var t = new lt(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };function dt(_ref18) {var e = _ref18.data;var t;t = V();var n = JSON.parse(JSON.stringify(e || {}));if (Object.assign(n, { clientInfo: t }), !n.uniIdToken) {var _at2 = at(),_e20 = _at2.token;_e20 && (n.uniIdToken = _e20);}return n;}function ft() {var _this14 = this;var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.name,t = _ref19.data;var _this$__dev__ = this.__dev__,n = _this$__dev__.localAddress,s = _this$__dev__.localPort,o = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],r = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {X.request({ method: "POST", url: i, data: { name: e, platform: m, provider: o, spaceId: r }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref20.data;var _ref21 = e || {},t = _ref21.code,n = _ref21.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref22) {var n = _ref22.code,s = _ref22.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e21 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e21), new Error(_e21);}case "SWITCH_TO_CLOUD":break;default:{var _e22 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e22), new Error(_e22);}}return _this14._callCloudFunction({ name: e, data: t });}return new Promise(function (e, n) {var s = dt.call(_this14, { data: t });X.request({ method: "POST", url: a, data: { provider: o, platform: m, param: s }, success: function success() {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref23.statusCode,s = _ref23.data;return !t || t >= 400 ? n(new H({ code: s.code || "SYS_ERR", message: s.message || "request:fail" })) : e({ result: s });}, fail: function fail(e) {n(new H({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var pt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var gt = /[\\^$.*+?()[\]{}|]/g,mt = RegExp(gt.source);function yt(e, t, n) {return e.replace(new RegExp((s = t) && mt.test(s) ? s.replace(gt, "\\$&") : s, "g"), n);var s;}function _t(_ref24) {var e = _ref24.functionName,t = _ref24.result,n = _ref24.logPvd;if (this.__dev__.debugLog && t && t.requestId) {var _s8 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s8, "[/").concat(n, "-request]"));}}function wt(e) {var t = e.callFunction,n = function n(_n5) {var _this15 = this;var s = _n5.name;_n5.data = dt.call(e, { data: _n5.data });var o = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider];return t.call(this, _n5).then(function (e) {return e.errCode = 0, _t.call(_this15, { functionName: s, result: e, logPvd: o }), Promise.resolve(e);}, function (e) {return _t.call(_this15, { functionName: s, result: e, logPvd: o }), e && e.message && (e.message = function () {var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref25$message = _ref25.message,e = _ref25$message === void 0 ? "" : _ref25$message,_ref25$extraInfo = _ref25.extraInfo,t = _ref25$extraInfo === void 0 ? {} : _ref25$extraInfo,_ref25$formatter = _ref25.formatter,n = _ref25$formatter === void 0 ? [] : _ref25$formatter;for (var _s9 = 0; _s9 < n.length; _s9++) {var _n$_s = n[_s9],_o3 = _n$_s.rule,_r2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_o3);if (!_a) continue;var _c = _r2;for (var _e23 = 1; _e23 < _a.length; _e23++) {_c = yt(_c, "{$".concat(_e23, "}"), _a[_e23]);}for (var _e24 in t) {_c = yt(_c, "{".concat(_e24, "}"), t[_e24]);}return "replace" === i ? _c : e + _c;}return e;}({ message: "[".concat(_n5.name, "]: ").concat(e.message), formatter: pt, extraInfo: { functionName: s } })), Promise.reject(e);});};e.callFunction = function (t) {var s;p && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && _ ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = ft), s = ft) : s = n, s = s.bind(e);var o = s(t);return Object.defineProperty(o, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), o;};}var kt = Symbol("CLIENT_DB_INTERNAL");function vt(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = kt, e.__ob__ = void 0, new Proxy(e, { get: function get(e, n, s) {if ("_uniClient" === n) return null;if (n in e || "string" != typeof n) {var _t10 = e[n];return "function" == typeof _t10 ? _t10.bind(e) : _t10;}return t.get(e, n, s);} });}function Tt(e) {return { on: function on(t, n) {e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);}, off: function off(t, n) {e[t] = e[t] || [];var s = e[t].indexOf(n);-1 !== s && e[t].splice(s, 1);} };}var St = ["db.Geo", "db.command", "command.aggregate"];function At(e, t) {return St.indexOf("".concat(e, ".").concat(t)) > -1;}function Pt(e) {switch (h(e)) {case "array":return e.map(function (e) {return Pt(e);});case "object":return e._internalType === kt || Object.keys(e).forEach(function (t) {e[t] = Pt(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function It(e) {return e && e.content && e.content.$method;}var bt = /*#__PURE__*/function () {function bt(e, t, n) {_classCallCheck(this, bt);this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;}_createClass(bt, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: Pt(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),s = this.getCommand();if (s.$db.push({ $method: e, $param: Pt(t) }), p) {var _e25 = s.$db.find(function (e) {return "collection" === e.$method;}),_t11 = _e25 && _e25.$param;_t11 && 1 === _t11.length && "string" == typeof _e25.$param[0] && _e25.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");}return this._database._callCloudFunction({ action: n, command: s });} }, { key: "isAggregate", get: function get() {var e = this;for (; e;) {var t = It(e),_n6 = It(e.prevStage);if ("aggregate" === t && "collection" === _n6 || "pipeline" === t) return !0;e = e.prevStage;}return !1;} }, { key: "isCommand", get: function get() {var e = this;for (; e;) {if ("command" === It(e)) return !0;e = e.prevStage;}return !1;} }, { key: "isAggregateCommand", get: function get() {var e = this;for (; e;) {var t = It(e),_n7 = It(e.prevStage);if ("aggregate" === t && "command" === _n7) return !0;e = e.prevStage;}return !1;} }, { key: "count", get: function get() {if (!this.isAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return Ot({ $method: "count", $param: Pt(Array.from(arguments)) }, e, this._database);};} }, { key: "remove", get: function get() {if (!this.isCommand) return function () {return this._send("remove", Array.from(arguments));};var e = this;return function () {return Ot({ $method: "remove", $param: Pt(Array.from(arguments)) }, e, this._database);};} }, { key: "set", get: function get() {if (!this.isCommand) return function () {throw new Error("JQL禁止使用set方法");};var e = this;return function () {return Ot({ $method: "set", $param: Pt(Array.from(arguments)) }, e, this._database);};} }]);return bt;}();function Ot(e, t, n) {return vt(new bt(e, t, n), { get: function get(e, t) {var s = "db";return e && e.content && (s = e.content.$method), At(s, t) ? Ot({ $method: t }, e, n) : function () {return Ot({ $method: t, $param: Pt(Array.from(arguments)) }, e, n);};} });}function Ct(_ref26) {var e = _ref26.path,t = _ref26.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var Et = /*#__PURE__*/function (_ref27) {_inherits(Et, _ref27);var _super9 = _createSuper(Et);function Et() {_classCallCheck(this, Et);return _super9.apply(this, arguments);}_createClass(Et, [{ key: "_callCloudFunction", value: function _callCloudFunction(_ref28) {var _this16 = this;var e = _ref28.action,t = _ref28.command,n = _ref28.multiCommand,s = _ref28.queryList;function o(e, t) {if (n && s) for (var _n8 = 0; _n8 < s.length; _n8++) {var _o4 = s[_n8];_o4.udb && "function" == typeof _o4.udb.setResult && (t ? _o4.udb.setResult(t) : _o4.udb.setResult(e.result.dataList[_n8]));}}var r = this;function i(e) {return r._callback("error", [e]), b(O("database", "fail"), e).then(function () {return b(O("database", "complete"), e);}).then(function () {return o(null, e), j(R, { type: L, content: e }), Promise.reject(e);});}var a = b(O("database", "invoke")),c = this._uniClient;return a.then(function () {return c.callFunction({ name: "DCloud-clientDB", type: l, data: { action: e, command: t, multiCommand: n } });}).then(function (e) {var _e$result = e.result,t = _e$result.code,n = _e$result.message,s = _e$result.token,r = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,a = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (a) for (var _e26 = 0; _e26 < a.length; _e26++) {var _a$_e = a[_e26],_t12 = _a$_e.level,_n9 = _a$_e.message,_s10 = _a$_e.detail,_o5 = console["app" === m && "warn" === _t12 ? "error" : _t12] || console.log;var _r3 = "[System Info]" + _n9;_s10 && (_r3 = "".concat(_r3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s10)), _o5(_r3);}if (t) {return i(new H({ code: t, message: n, requestId: e.requestId }));}e.result.errCode = e.result.code, e.result.errMsg = e.result.message, s && r && (ct({ token: s, tokenExpired: r }), _this16._callbackAuth("refreshToken", [{ token: s, tokenExpired: r }]), _this16._callback("refreshToken", [{ token: s, tokenExpired: r }]), j(x, { token: s, tokenExpired: r }));var c = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];var _loop = function _loop(_t13) {var _c$_t = c[_t13],n = _c$_t.prop,s = _c$_t.tips;if (n in e.result) {var _t14 = e.result[n];Object.defineProperty(e.result, n, { get: function get() {return console.warn(s), _t14;} });}};for (var _t13 = 0; _t13 < c.length; _t13++) {_loop(_t13);}return function (e) {return b(O("database", "success"), e).then(function () {return b(O("database", "complete"), e);}).then(function () {return o(e, null), j(R, { type: L, content: e }), Promise.resolve(e);});}(e);}, function (e) {/fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");return i(new H({ code: e.code || "SYSTEM_ERROR", message: e.message, requestId: e.requestId }));});} }]);return Et;}( /*#__PURE__*/function () {function _class3() {var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref29$uniClient = _ref29.uniClient,e = _ref29$uniClient === void 0 ? {} : _ref29$uniClient;_classCallCheck(this, _class3);this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = T("_globalUniCloudDatabaseCallback")), this.auth = Tt(this._authCallBacks), Object.assign(this, Tt(this._dbCallBacks)), this.env = vt({}, { get: function get(e, t) {return { $env: t };} }), this.Geo = vt({}, { get: function get(e, t) {return Ct({ path: ["Geo"], method: t });} }), this.serverDate = Ct({ path: [], method: "serverDate" }), this.RegExp = Ct({ path: [], method: "RegExp" });}_createClass(_class3, [{ key: "getCloudEnv", value: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };} }, { key: "_callback", value: function _callback(e, t) {var n = this._dbCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "_callbackAuth", value: function _callbackAuth(e, t) {var n = this._authCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "multiSend", value: function multiSend() {var e = Array.from(arguments),t = e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };});return this._callCloudFunction({ multiCommand: t, queryList: e });} }]);return _class3;}());function Rt(e) {e.database = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).database();if (this._database) return this._database;var n = function (e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return vt(new e(t), { get: function get(e, t) {return At("db", t) ? Ot({ $method: t }, null, e) : function () {return Ot({ $method: t, $param: Pt(Array.from(arguments)) }, null, e);};} });}(Et, { uniClient: e });return this._database = n, n;};}var Ut = "token无效，跳转登录页面",xt = "token过期，跳转登录页面",Lt = { TOKEN_INVALID_TOKEN_EXPIRED: xt, TOKEN_INVALID_INVALID_CLIENTID: Ut, TOKEN_INVALID: Ut, TOKEN_INVALID_WRONG_TOKEN: Ut, TOKEN_INVALID_ANONYMOUS_USER: Ut },Dt = { "uni-id-token-expired": xt, "uni-id-check-token-failed": Ut, "uni-id-token-not-exist": Ut, "uni-id-check-device-feature-failed": Ut };function Nt(e, t) {var n = "";return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");}function qt() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";var n = [],s = [];return e.forEach(function (e) {!0 === e.needLogin ? n.push(Nt(t, e.path)) : !1 === e.needLogin && s.push(Nt(t, e.path));}), { needLoginPage: n, notNeedLoginPage: s };}function Ft(e) {return e.split("?")[0].replace(/^\//, "");}function Mt() {return function (e) {var t = e && e.$page && e.$page.fullPath || "";return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;}(function () {var e = getCurrentPages();return e[e.length - 1];}());}function jt() {return Ft(Mt());}function $t() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};if (!e) return !1;if (!(t && t.list && t.list.length)) return !1;var n = t.list,s = Ft(e);return n.some(function (e) {return e.pagePath === s;});}var Bt = !!_pages.default.uniIdRouter;var _ref30 = function () {var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,_ref31$pages = _ref31.pages,e = _ref31$pages === void 0 ? [] : _ref31$pages,_ref31$subPackages = _ref31.subPackages,n = _ref31$subPackages === void 0 ? [] : _ref31$subPackages,_ref31$uniIdRouter = _ref31.uniIdRouter,s = _ref31$uniIdRouter === void 0 ? {} : _ref31$uniIdRouter,_ref31$tabBar = _ref31.tabBar,o = _ref31$tabBar === void 0 ? {} : _ref31$tabBar;var r = s.loginPage,_s$needLogin = s.needLogin,i = _s$needLogin === void 0 ? [] : _s$needLogin,_s$resToLogin = s.resToLogin,a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,_qt = qt(e),c = _qt.needLoginPage,u = _qt.notNeedLoginPage,_ref32 = function () {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var t = [],n = [];return e.forEach(function (e) {var s = e.root,_e$pages = e.pages,o = _e$pages === void 0 ? [] : _e$pages,_qt2 = qt(o, s),r = _qt2.needLoginPage,i = _qt2.notNeedLoginPage;t.push.apply(t, _toConsumableArray(r)), n.push.apply(n, _toConsumableArray(i));}), { needLoginPage: t, notNeedLoginPage: n };}(n),l = _ref32.needLoginPage,h = _ref32.notNeedLoginPage;return { loginPage: r, routerNeedLogin: i, resToLogin: a, needLoginPage: [].concat(_toConsumableArray(c), _toConsumableArray(l)), notNeedLoginPage: [].concat(_toConsumableArray(u), _toConsumableArray(h)), loginPageInTabBar: $t(r, o) };}(),Kt = _ref30.loginPage,Wt = _ref30.routerNeedLogin,Ht = _ref30.resToLogin,zt = _ref30.needLoginPage,Jt = _ref30.notNeedLoginPage,Vt = _ref30.loginPageInTabBar;if (zt.indexOf(Kt) > -1) throw new Error("Login page [".concat(Kt, "] should not be \"needLogin\", please check your pages.json"));function Yt(e) {var t = Ft(function (e) {var t = jt(),n = e.charAt(0),s = e.split("?")[0];if ("/" === n) return s;var o = s.replace(/^\//, "").split("/"),r = t.split("/");r.pop();for (var _e27 = 0; _e27 < o.length; _e27++) {var _t15 = o[_e27];".." === _t15 ? r.pop() : "." !== _t15 && r.push(_t15);}return "" === r[0] && r.shift(), r.join("/");}(e));return !(Jt.indexOf(t) > -1) && (zt.indexOf(t) > -1 || Wt.some(function (t) {return function (e, t) {return new RegExp(t).test(e);}(e, t);}));}function Xt(_ref33) {var e = _ref33.redirect;var t = Ft(e),n = Ft(Kt);return jt() !== n && t !== n;}function Gt() {var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref34.api,t = _ref34.redirect;if (!t || !Xt({ redirect: t })) return;var n = function (e, t) {return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;}(Kt, t);Vt ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo"), setTimeout(function () {uni[e]({ url: n });});}function Qt() {var _ref35 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref35.url;var t = { abortLoginPageJump: !1, autoToLoginPage: !1 },n = function () {var _at3 = at(),e = _at3.token,t = _at3.tokenExpired;var n;if (e) {if (t < Date.now()) {var _e28 = "uni-id-token-expired";n = { errCode: _e28, errMsg: Dt[_e28] };}} else {var _e29 = "uni-id-check-token-failed";n = { errCode: _e29, errMsg: Dt[_e29] };}return n;}();if (Yt(e) && n) {n.uniIdRedirectUrl = e;if (q(U).length > 0) return setTimeout(function () {j(U, n);}, 0), t.abortLoginPageJump = !0, t;t.autoToLoginPage = !0;}return t;}function Zt() {!function () {var e = Mt(),_Qt = Qt({ url: e }),t = _Qt.abortLoginPageJump,n = _Qt.autoToLoginPage;t || n && Gt({ api: "redirectTo", redirect: e });}();var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];var _loop2 = function _loop2(_t16) {var n = e[_t16];uni.addInterceptor(n, { invoke: function invoke(e) {var _Qt2 = Qt({ url: e.url }),t = _Qt2.abortLoginPageJump,s = _Qt2.autoToLoginPage;return t ? e : s ? (Gt({ api: n, redirect: e.url }), !1) : e;} });};for (var _t16 = 0; _t16 < e.length; _t16++) {_loop2(_t16);}}function en() {this.onResponse(function (e) {var t = e.type,n = e.content;var s = !1;switch (t) {case "cloudobject":s = function (e) {var t = e.errCode;return t in Dt;}(n);break;case "clientdb":s = function (e) {var t = e.errCode;return t in Lt;}(n);}s && function () {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var t = q(U);K().then(function () {var n = Mt();if (n && Xt({ redirect: n })) return t.length > 0 ? j(U, Object.assign({ uniIdRedirectUrl: n }, e)) : void (Kt && Gt({ api: "navigateTo", redirect: n }));});}(n);});}function tn(e) {!function (e) {e.onResponse = function (e) {F(R, e);}, e.offResponse = function (e) {M(R, e);};}(e), function (e) {e.onNeedLogin = function (e) {F(U, e);}, e.offNeedLogin = function (e) {M(U, e);}, Bt && (T("uni-cloud-status").needLoginInit || (T("uni-cloud-status").needLoginInit = !0, K().then(function () {Zt.call(e);}), Ht && en.call(e)));}(e), function (e) {e.onRefreshToken = function (e) {F(x, e);}, e.offRefreshToken = function (e) {M(x, e);};}(e);}var nn;var sn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",on = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function rn() {var e = at().token || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(nn(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}nn = "function" != typeof atob ? function (e) {if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !on.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e += "==".slice(2 - (3 & e.length));for (var n, s, o = "", r = 0; r < e.length;) {t = sn.indexOf(e.charAt(r++)) << 18 | sn.indexOf(e.charAt(r++)) << 12 | (n = sn.indexOf(e.charAt(r++))) << 6 | (s = sn.indexOf(e.charAt(r++))), o += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);}return o;} : atob;var an = s(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:ok",s = "chooseAndUploadFile:fail";function o(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function r(e, t, _ref36) {var s = _ref36.onChooseFile,o = _ref36.onUploadProgress;return t.then(function (e) {if (s) {var _t17 = s(e);if (void 0 !== _t17) return Promise.resolve(_t17).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: n, tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var o = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = n;var r = t.tempFiles,i = r.length;var a = 0;return new Promise(function (n) {for (; a < s;) {c();}function c() {var s = a++;if (s >= i) return void (!r.find(function (e) {return !e.url && !e.errMsg;}) && n(t));var u = r[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, o && o(e);} }).then(function (e) {u.url = e.fileID, s < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < i && c();});}});}(e, t, 5, o);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? r(e, function (e) {var t = e.count,n = e.sizeType,_e$sourceType = e.sourceType,r = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: n, sourceType: r, extension: i, success: function success(t) {e(o(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? r(e, function (e) {var t = e.camera,n = e.compressed,r = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: n, maxDuration: r, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,s = t.duration,r = t.size,i = t.height,a = t.width;e(o({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: r, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: s, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : r(e, function (e) {var t = e.count,n = e.extension;return new Promise(function (e, r) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return r({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: n, success: function success(t) {e(o(t));}, fail: function fail(e) {r({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}),cn = n(an);var un = "manual";function ln(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, spaceInfo: { type: Object, default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this17 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this17[t]);}), e;}, function (e, t) {if (_this17.loadtime === un) return;var n = !1;var s = [];for (var _o6 = 2; _o6 < e.length; _o6++) {e[_o6] !== t[_o6] && (s.push(e[_o6]), n = !0);}e[0] !== t[0] && (_this17.mixinDatacomPage.current = _this17.pageCurrent), _this17.mixinDatacomPage.size = _this17.pageSize, _this17.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this18 = this;var _ref37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref37$getone = _ref37.getone,e = _ref37$getone === void 0 ? !1 : _ref37$getone,t = _ref37.success,n = _ref37.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this18.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,o = _n$result.count;_this18.getcount && (_this18.mixinDatacomPage.count = o), _this18.mixinDatacomHasMore = s.length < _this18.pageSize;var r = e ? s.length ? s[0] : void 0 : s;_this18.mixinDatacomResData = r, t && t(r);}).catch(function (e) {_this18.mixinDatacomLoading = !1, _this18.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _n10;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database(this.spaceInfo);var s = t.action || this.action;s && (n = n.action(s));var o = t.collection || this.collection;n = Array.isArray(o) ? (_n10 = n).collection.apply(_n10, _toConsumableArray(o)) : n.collection(o);var r = t.where || this.where;r && Object.keys(r).length && (n = n.where(r));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var l = t.orderby || this.orderby;l && (n = n.orderBy(l));var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;} } };}function hn(e) {return function (t) {var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};n = function (e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return e.customUI = t.customUI || e.customUI, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == typeof t.secretMethods && (e.secretMethods = t.secretMethods), e;}({ customUI: !1, loadingOptions: { title: "加载中...", mask: !0 }, errorOptions: { type: "modal", retry: !1 } }, n);var _n11 = n,s = _n11.customUI,o = _n11.loadingOptions,r = _n11.errorOptions,i = !s;return new Proxy({}, { get: function get(s, a) {return function () {var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref38.fn,t = _ref38.interceptorName,n = _ref38.getCallbackArgs;return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee33() {var _len,s,_key,o,r,i,_args33 = arguments;return _regenerator.default.wrap(function _callee33$(_context33) {while (1) {switch (_context33.prev = _context33.next) {case 0:for (_len = _args33.length, s = new Array(_len), _key = 0; _key < _len; _key++) {s[_key] = _args33[_key];}o = n ? n({ params: s }) : {};_context33.prev = 2;_context33.next = 5;return b(O(t, "invoke"), _objectSpread({}, o));case 5:_context33.next = 7;return e.apply(void 0, s);case 7:r = _context33.sent;_context33.next = 10;return b(O(t, "success"), _objectSpread(_objectSpread({}, o), {}, { result: r }));case 10:return _context33.abrupt("return", r);case 13:_context33.prev = 13;_context33.t0 = _context33["catch"](2);i = _context33.t0;_context33.next = 18;return b(O(t, "fail"), _objectSpread(_objectSpread({}, o), {}, { error: i }));case 18:throw i;case 19:_context33.prev = 19;_context33.next = 22;return b(O(t, "complete"), i ? _objectSpread(_objectSpread({}, o), {}, { error: i }) : _objectSpread(_objectSpread({}, o), {}, { result: r }));case 22:return _context33.finish(19);case 23:case "end":return _context33.stop();}}}, _callee33, null, [[2, 13, 19, 23]]);}));}({ fn: function () {var _s11 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee35() {var l,_len2,c,_key2,h,_ref40,d,f,p,_yield,_e31,_e30,_args35 = arguments;return _regenerator.default.wrap(function _callee35$(_context35) {while (1) {switch (_context35.prev = _context35.next) {case 0:i && uni.showLoading({ title: o.title, mask: o.mask });for (_len2 = _args35.length, c = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {c[_key2] = _args35[_key2];}h = { name: t, type: u, data: { method: a, params: c } };"object" == typeof n.secretMethods && function (e, t) {var n = t.data.method,s = e.secretMethods || {},o = s[n] || s["*"];o && (t.secret = o);}(n, h);_context35.prev = 4;_context35.next = 7;return e.callFunction(h);case 7:l = _context35.sent;_context35.next = 13;break;case 10:_context35.prev = 10;_context35.t0 = _context35["catch"](4);l = { result: _context35.t0 };case 13:_ref40 = l.result || {}, d = _ref40.errCode, f = _ref40.errMsg, p = _ref40.newToken;if (!(i && uni.hideLoading(), p && p.token && p.tokenExpired && (ct(p), j(x, _objectSpread({}, p))), d)) {_context35.next = 30;break;}if (!i) {_context35.next = 28;break;}if (!("toast" === r.type)) {_context35.next = 20;break;}uni.showToast({ title: f, icon: "none" });_context35.next = 28;break;case 20:if (!("modal" !== r.type)) {_context35.next = 22;break;}throw new Error("Invalid errorOptions.type: ".concat(r.type));case 22:_context35.next = 24;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee34() {var _ref42,e,t,n,s,o,_args34 = arguments;return _regenerator.default.wrap(function _callee34$(_context34) {while (1) {switch (_context34.prev = _context34.next) {case 0:_ref42 = _args34.length > 0 && _args34[0] !== undefined ? _args34[0] : {}, e = _ref42.title, t = _ref42.content, n = _ref42.showCancel, s = _ref42.cancelText, o = _ref42.confirmText;return _context34.abrupt("return", new Promise(function (r, i) {uni.showModal({ title: e, content: t, showCancel: n, cancelText: s, confirmText: o, success: function success(e) {r(e);}, fail: function fail() {r({ confirm: !1, cancel: !0 });} });}));case 2:case "end":return _context34.stop();}}}, _callee34);}))({ title: "提示", content: f, showCancel: r.retry, cancelText: "取消", confirmText: r.retry ? "重试" : "确定" });case 24:_yield = _context35.sent;_e31 = _yield.confirm;if (!(r.retry && _e31)) {_context35.next = 28;break;}return _context35.abrupt("return", s.apply(void 0, c));case 28:_e30 = new H({ code: d, message: f, requestId: l.requestId });throw _e30.detail = l.result, j(R, { type: N, content: _e30 }), _e30;case 30:return _context35.abrupt("return", (j(R, { type: N, content: l.result }), l.result));case 31:case "end":return _context35.stop();}}}, _callee35, null, [[4, 10]]);}));function s() {return _s11.apply(this, arguments);}return s;}(), interceptorName: "callObject", getCallbackArgs: function getCallbackArgs() {var _ref43 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref43.params;return { objectName: t, methodName: a, params: e };} });} });};}function dn(_x31, _x32) {return _dn.apply(this, arguments);}function _dn() {_dn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee37(e, t) {var n, _e35, s;return _regenerator.default.wrap(function _callee37$(_context37) {while (1) {switch (_context37.prev = _context37.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context37.prev = 1;_context37.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {X.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e35 = _context37.sent;return _context37.abrupt("return", !(!_e35.data || 0 !== _e35.data.code));case 8:_context37.prev = 8;_context37.t0 = _context37["catch"](1);return _context37.abrupt("return", !1);case 11:case "end":return _context37.stop();}}}, _callee37, null, [[1, 8]]);}));return _dn.apply(this, arguments);}function fn(e) {if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus) return;var t = Promise.resolve();var n;n = 1, t = new Promise(function (e, t) {setTimeout(function () {e();}, n);}), e.isReady = !1, e.isDefault = !1;var s = e.auth();e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function () {return s.getLoginState();}).then(function (e) {return e ? Promise.resolve() : s.signInAnonymously();}).then(function () {if (!p) return Promise.resolve();if ("app" === m) {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),_e32 = _uni$getSystemInfoSyn.osName,_t18 = _uni$getSystemInfoSyn.osVersion;"ios" === _e32 && function (e) {if (!e || "string" != typeof e) return 0;var t = e.match(/^(\d+)./);return t && t[1] ? parseInt(t[1]) : 0;}(_t18) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");}if (p && e.__dev__.debugInfo) {var _e$__dev__$debugInfo = e.__dev__.debugInfo,_t19 = _e$__dev__$debugInfo.address,_n12 = _e$__dev__$debugInfo.servePort;return function () {var _ref44 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee36(e, t) {var n, _s12, _o7;return _regenerator.default.wrap(function _callee36$(_context36) {while (1) {switch (_context36.prev = _context36.next) {case 0:_s12 = 0;case 1:if (!(_s12 < e.length)) {_context36.next = 11;break;}_o7 = e[_s12];_context36.next = 5;return dn(_o7, t);case 5:if (!_context36.sent) {_context36.next = 8;break;}n = _o7;return _context36.abrupt("break", 11);case 8:_s12++;_context36.next = 1;break;case 11:return _context36.abrupt("return", { address: n, port: t });case 12:case "end":return _context36.stop();}}}, _callee36);}));return function (_x33, _x34) {return _ref44.apply(this, arguments);};}()(_t19, _n12);}}).then(function () {var _ref45 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref45.address,n = _ref45.port;if (!p) return Promise.resolve();var s = console["app" === m ? "error" : "warn"];if (t) e.__dev__.localAddress = t, e.__dev__.localPort = n;else if (e.__dev__.debugInfo) {var _t20 = "";"remote" === e.__dev__.debugInfo.initialLaunchType ? (e.__dev__.debugInfo.forceRemote = !0, _t20 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs") : _t20 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs", "web" === m && (_t20 += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === m.indexOf("mp-") && (_t20 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s(_t20);}}).then(function () {ut(), e.isReady = !0, e.initUniCloudStatus = "fulfilled";}).catch(function (t) {console.error(t), e.initUniCloudStatus = "rejected";});}var pn = { tcb: it, tencent: it, aliyun: ee, private: ht };var gn = new ( /*#__PURE__*/function () {function _class4() {_classCallCheck(this, _class4);}_createClass(_class4, [{ key: "init", value: function init(e) {var t = {};var n = pn[e.provider];if (!n) throw new Error("未提供正确的provider参数");t = n.init(e), t.__dev__ = {}, t.__dev__.debugLog = p && ("web" === m && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === m);var s = y;p && s && !s.code && (t.__dev__.debugInfo = s), fn(t), t.reInit = function () {fn(this);}, wt(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {return t.call(this, e);};}(t), Rt(t), function (e) {e.getCurrentUserInfo = rn, e.chooseAndUploadFile = cn.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return ln(e);} }), e.importObject = hn(e);}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {if (!t[e]) return;var n = t[e];t[e] = function () {return t.reInit(), n.apply(t, Array.from(arguments));}, t[e] = W(t[e], e).bind(t);}), t.init = this.init, t;} }]);return _class4;}())();(function () {var e = _;var t = {};if (e && 1 === e.length) t = e[0], gn = gn.init(t), gn.isDefault = !0;else {var _t21 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];var _n13;_n13 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : w ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t21.forEach(function (e) {gn[e] = function () {return console.error(_n13), Promise.reject(new H({ code: "SYS_ERR", message: _n13 }));};});}Object.assign(gn, { get mixinDatacom() {return ln(gn);} }), tn(gn), gn.addInterceptor = P, gn.removeInterceptor = I, gn.interceptObject = C, p && "web" === m && (window.uniCloud = gn);})();var mn = gn;exports.default = mn;

/***/ }),

/***/ 24:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 4);

/***/ }),

/***/ 4:
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ 5:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}

/***/ }),

/***/ 58:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),

/***/ 6:
/*!***********************************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages.json?{"type":"origin-pages-json"} ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"leftWindow":{"path":"windows/left-window.vue","style":{"width":"350px"}},"topWindow":{"path":"windows/top-window.vue","style":{"height":"60px"}},"pages":[{"path":"pages/tabBar/component/component","style":{"navigationBarTitleText":"内置组件","app-plus":{"bounce":"vertical","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},"nvue":true},{"path":"pages/tabBar/API/API","style":{"navigationBarTitleText":"接口","app-plus":{"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},"nvue":true},{"path":"pages/tabBar/template/template","style":{"navigationBarTitleText":"模版","app-plus":{"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},"nvue":true},{"path":"pages/tabBar/extUI/extUI","style":{"navigationBarTitleText":"扩展组件","app-plus":{"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},"nvue":true},{"path":"pages/component/view/view","style":{"navigationBarTitleText":"view"}},{"path":"pages/component/scroll-view/scroll-view","style":{"navigationBarTitleText":"scroll-view"}},{"path":"pages/component/swiper/swiper","style":{"navigationBarTitleText":"swiper"}},{"path":"pages/component/cover-view/cover-view","style":{"navigationBarTitleText":"cover-view"},"nvue":true},{"path":"pages/component/movable-view/movable-view","style":{"navigationBarTitleText":"movable-view"}},{"path":"pages/component/text/text","style":{"navigationBarTitleText":"text"}},{"path":"pages/component/rich-text/rich-text","style":{"navigationBarTitleText":"rich-text"}},{"path":"pages/component/progress/progress","style":{"navigationBarTitleText":"progress"}},{"path":"pages/component/button/button","style":{"navigationBarTitleText":"button"}},{"path":"pages/component/checkbox/checkbox","style":{"navigationBarTitleText":"checkbox"}},{"path":"pages/component/form/form","style":{"navigationBarTitleText":"form"}},{"path":"pages/component/input/input","style":{"navigationBarTitleText":"input","app-plus":{"softinputNavBar":"none"}},"nvue":true},{"path":"pages/component/label/label","style":{"navigationBarTitleText":"label"}},{"path":"pages/component/picker/picker","style":{"navigationBarTitleText":"picker"}},{"path":"pages/component/picker-view/picker-view","style":{"navigationBarTitleText":"picker-view"}},{"path":"pages/component/radio/radio","style":{"navigationBarTitleText":"radio"}},{"path":"pages/component/slider/slider","style":{"navigationBarTitleText":"slider"}},{"path":"pages/component/switch/switch","style":{"navigationBarTitleText":"switch"}},{"path":"pages/component/textarea/textarea","style":{"navigationBarTitleText":"textarea"}},{"path":"pages/component/editor/editor","style":{"navigationBarTitleText":"editor","app-plus":{"softinputMode":"adjustResize"}}},{"path":"pages/component/navigator/navigator","style":{"navigationBarTitleText":"navigator"}},{"path":"pages/component/navigator/navigate/navigate","style":{"navigationBarTitleText":"navigatePage"}},{"path":"pages/component/navigator/redirect/redirect","style":{"navigationBarTitleText":"redirectPage"}},{"path":"pages/component/image/image","style":{"navigationBarTitleText":"image"}},{"path":"pages/component/video/video","style":{"navigationBarTitleText":"video"},"nvue":true},{"path":"pages/component/map/map","style":{"navigationBarTitleText":"map"},"nvue":true},{"path":"pages/component/canvas/canvas","style":{"navigationBarTitleText":"canvas"}},{"path":"pages/component/web-view/web-view","style":{"navigationBarTitleText":"web-view"}},{"path":"pages/component/ad/ad","style":{"navigationBarTitleText":"AD"}},{"path":"pages/component/web-view-local/web-view-local","style":{}},{"path":"platforms/app-plus/speech/speech","style":{"navigationBarTitleText":"语音识别"}},{"path":"platforms/app-plus/orientation/orientation","style":{"navigationBarTitleText":"方向传感器"}},{"path":"platforms/app-plus/proximity/proximity","style":{"navigationBarTitleText":"距离传感器"}},{"path":"platforms/app-plus/push/push","style":{"navigationBarTitleText":"推送"}},{"path":"platforms/app-plus/shake/shake","style":{"navigationBarTitleText":"摇一摇"}},{"path":"pages/about/about","style":{"navigationBarTitleText":"关于"}},{"path":"platforms/app-plus/feedback/feedback","style":{"navigationBarTitleText":"问题反馈"}},{"path":"uni_modules/uni-upgrade-center-app/pages/upgrade-popup","style":{"app-plus":{"animationDuration":200,"animationType":"fade-in","background":"transparent","backgroundColorTop":"transparent","popGesture":"none","scrollIndicator":false,"titleNView":false},"disableScroll":true}}],"subPackages":[{"root":"pages/API","pages":[{"path":"login/login","style":{"navigationBarTitleText":"授权登录"}},{"path":"subnvue/subnvue","style":{"navigationBarTitleText":"原生子窗体","app-plus":{"subNVues":[{"id":"drawer","path":"subnvue/subnvue/drawer","type":"popup","style":{"width":"50%"}},{"id":"popup","path":"subnvue/subnvue/popup","type":"popup","style":{"margin":"auto","width":"80%","height":"600rpx"}},{"id":"video_mask","path":"subnvue/subnvue/video-mask","style":{"position":"absolute","bottom":"30px","left":"0","width":"230px","height":"110px","background":"transparent"}}]}}},{"path":"get-user-info/get-user-info","style":{"navigationBarTitleText":"获取用户信息"}},{"path":"request-payment/request-payment","style":{"navigationBarTitleText":"发起支付"}},{"path":"share/share","style":{"navigationBarTitleText":"分享"}},{"path":"set-navigation-bar-title/set-navigation-bar-title","style":{"navigationBarTitleText":"设置界面标题"}},{"path":"show-loading/show-loading","style":{"navigationBarTitleText":"加载提示框"}},{"path":"navigator/navigator","style":{"navigationBarTitleText":"页面跳转"}},{"path":"navigator/new-page/new-vue-page-1","style":{"navigationBarTitleText":"新VUE页面1"}},{"path":"navigator/new-page/new-vue-page-2","style":{"navigationBarTitleText":"新VUE页面2"}},{"path":"navigator/new-page/new-nvue-page-1","style":{"navigationBarTitleText":"新NVUE页面1"},"nvue":true},{"path":"navigator/new-page/new-nvue-page-2","style":{"navigationBarTitleText":"新NVUE页面2"},"nvue":true},{"path":"pull-down-refresh/pull-down-refresh","style":{"navigationBarTitleText":"下拉刷新","enablePullDownRefresh":true}},{"path":"animation/animation","style":{"navigationBarTitleText":"创建动画"}},{"path":"get-node-info/get-node-info","style":{"navigationBarTitleText":"节点信息"}},{"path":"intersection-observer/intersection-observer","style":{"navigationBarTitleText":"节点布局相交状态"}},{"path":"canvas/canvas","style":{"navigationBarTitleText":"创建绘画"}},{"path":"action-sheet/action-sheet","style":{"navigationBarTitleText":"操作菜单"}},{"path":"modal/modal","style":{"navigationBarTitleText":"模态弹窗"}},{"path":"toast/toast","style":{"navigationBarTitleText":"消息提示框"}},{"path":"get-network-type/get-network-type","style":{"navigationBarTitleText":"获取设备网络状态"}},{"path":"get-system-info/get-system-info","style":{"navigationBarTitleText":"获取设备系统信息"}},{"path":"add-phone-contact/add-phone-contact","style":{"navigationBarTitleText":"添加手机联系人"}},{"path":"on-accelerometer-change/on-accelerometer-change","style":{"navigationBarTitleText":"监听加速度计数据"}},{"path":"on-compass-change/on-compass-change","style":{"navigationBarTitleText":"监听罗盘数据"}},{"path":"make-phone-call/make-phone-call","style":{"navigationBarTitleText":"打电话"}},{"path":"scan-code/scan-code","style":{"navigationBarTitleText":"扫码"}},{"path":"clipboard/clipboard","style":{"navigationBarTitleText":"剪贴板"}},{"path":"request/request","style":{"navigationBarTitleText":"网络请求"}},{"path":"upload-file/upload-file","style":{"navigationBarTitleText":"上传文件"}},{"path":"download-file/download-file","style":{"navigationBarTitleText":"下载文件"}},{"path":"image/image","style":{"navigationBarTitleText":"图片"}},{"path":"voice/voice","style":{"navigationBarTitleText":"录音"}},{"path":"inner-audio/inner-audio","style":{"navigationBarTitleText":"音频"}},{"path":"background-audio/background-audio","style":{"navigationBarTitleText":"背景音频"}},{"path":"video/video","style":{"navigationBarTitleText":"视频"}},{"path":"file/file","style":{"navigationBarTitleText":"文件"}},{"path":"map/map","style":{"navigationBarTitleText":"map"},"nvue":true},{"path":"map-search/map-search","style":{"navigationBarTitleText":"map search"},"nvue":true},{"path":"get-location/get-location","style":{"navigationBarTitleText":"获取位置"}},{"path":"open-location/open-location","style":{"navigationBarTitleText":"查看位置"}},{"path":"choose-location/choose-location","style":{"navigationBarTitleText":"使用地图选择位置"}},{"path":"storage/storage","style":{"navigationBarTitleText":"数据存储"}},{"path":"sqlite/sqlite","style":{"navigationBarTitleText":"SQLite"}},{"path":"rewarded-video-ad/rewarded-video-ad","style":{"navigationBarTitleText":"激励视频广告"}},{"path":"full-screen-video-ad/full-screen-video-ad","style":{"navigationBarTitleText":"全屏视频广告"}},{"path":"brightness/brightness","style":{"navigationBarTitleText":"屏幕亮度"}},{"path":"save-media/save-media","style":{"navigationBarTitleText":"保存媒体到本地"}},{"path":"bluetooth/bluetooth","style":{"navigationBarTitleText":"蓝牙"}},{"path":"soter/soter","style":{"navigationBarTitleText":"生物认证"}},{"path":"ibeacon/ibeacon","style":{"navigationBarTitleText":"iBeacon"}},{"path":"vibrate/vibrate","style":{"navigationBarTitleText":"震动"}},{"path":"websocket-socketTask/websocket-socketTask","style":{"navigationBarTitleText":"websocket-socketTask"}},{"path":"websocket-global/websocket-global","style":{"navigationBarTitleText":"websocket-global"}}]},{"root":"pages/extUI","pages":[{"path":"forms/forms","style":{"navigationBarTitleText":"Form 表单"}},{"path":"group/group","style":{"navigationBarTitleText":"Group 分组"}},{"path":"badge/badge","style":{"navigationBarTitleText":"Badge 数字角标"}},{"path":"breadcrumb/breadcrumb","style":{"navigationBarTitleText":"Breadcrumb 面包屑"}},{"path":"countdown/countdown","style":{"navigationBarTitleText":"Countdown 倒计时"},"nvue":true},{"path":"drawer/drawer","style":{"navigationBarTitleText":"Drawer 抽屉"}},{"path":"icons/icons","style":{"navigationBarTitleText":"Icons 图标"},"nvue":true},{"path":"load-more/load-more","style":{"navigationBarTitleText":"LoadMore 加载更多"},"nvue":true},{"path":"nav-bar/nav-bar","style":{"navigationBarTitleText":"NavBar 导航栏","navigationStyle":"custom","enablePullDownRefresh":true,"app-plus":{"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"70px"}}},"nvue":true},{"path":"number-box/number-box","style":{"navigationBarTitleText":"NumberBox 数字输入框"},"nvue":true},{"path":"popup/popup","style":{"navigationBarTitleText":"Popup 弹出层","app-plus":{"softinputMode":"adjustResize"}}},{"path":"segmented-control/segmented-control","style":{"navigationBarTitleText":"SegmentedControl 分段器"}},{"path":"tag/tag","style":{"navigationBarTitleText":"Tag 标签"},"nvue":true},{"path":"list/list","style":{"navigationBarTitleText":"List 列表"},"nvue":true},{"path":"card/card","style":{"navigationBarTitleText":"Card 卡片"},"nvue":true},{"path":"collapse/collapse","style":{"navigationBarTitleText":"Collapse 折叠面板"}},{"path":"pagination/pagination","style":{"navigationBarTitleText":"Pagination 分页器"}},{"path":"swiper-dot/swiper-dot","style":{"navigationBarTitleText":"SwiperDot 轮播图指示点","mp-baidu":{"disableSwipeBack":true}},"nvue":true},{"path":"grid/grid","style":{"navigationBarTitleText":"Grid 宫格"},"nvue":true},{"path":"rate/rate","style":{"navigationBarTitleText":"Rate 评分"},"nvue":true},{"path":"steps/steps","style":{"navigationBarTitleText":"Steps 步骤条"}},{"path":"notice-bar/notice-bar","style":{"navigationBarTitleText":"NoticeBar 通告栏"}},{"path":"swipe-action/swipe-action","style":{"navigationBarTitleText":"SwipeAction 滑动操作","app-plus":{"bounce":"none"}}},{"path":"search-bar/search-bar","style":{"navigationBarTitleText":"SearchBar 搜索栏"}},{"path":"calendar/calendar","style":{"navigationBarTitleText":"Calendar 日历"},"nvue":true},{"path":"indexed-list/indexed-list","style":{"navigationBarTitleText":"IndexedList 索引列表","mp-weixin":{"disableScroll":true},"app-plus":{"bounce":"none"},"mp-alipay":{"allowsBounceVertical":"NO"},"mp-baidu":{"disableScroll":true}},"nvue":true},{"path":"fab/fab","style":{"navigationBarTitleText":"Fab 悬浮按钮"}},{"path":"fav/fav","style":{"navigationBarTitleText":"Fav 收藏按钮"}},{"path":"goods-nav/goods-nav","style":{"navigationBarTitleText":"GoodsNav 商品导航"},"nvue":true},{"path":"section/section","style":{"navigationBarTitleText":"Section 标题栏"}},{"path":"transition/transition","style":{"navigationBarTitleText":"Transition 过渡动画"}},{"path":"title/title","style":{"navigationBarTitleText":"Title 章节标题"}},{"path":"tooltip/tooltip","style":{"navigationBarTitleText":"Tooltip 文字提示"}},{"path":"link/link","style":{"navigationBarTitleText":"Link 链接"}},{"path":"combox/combox","style":{"navigationBarTitleText":"Combox 组合框"}},{"path":"list/chat","style":{}},{"path":"table/table","style":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"dateformat/dateformat","style":{"navigationBarTitleText":"Dateformat 日期格式化","enablePullDownRefresh":false}},{"path":"data-checkbox/data-checkbox","style":{"navigationBarTitleText":"DataCheckbox 单选复选框","enablePullDownRefresh":false}},{"path":"easyinput/easyinput","style":{"navigationBarTitleText":"Easyinput 增强输入框","enablePullDownRefresh":false}},{"path":"data-picker/data-picker","style":{"navigationBarTitleText":"DataPicker 级联选择","enablePullDownRefresh":false},"nvue":true},{"path":"data-select/data-select","style":{"navigationBarTitleText":"DataSelect 下拉框","enablePullDownRefresh":false}},{"path":"datetime-picker/datetime-picker","style":{"navigationBarTitleText":"DatetimePicker 日期时间","enablePullDownRefresh":false}},{"path":"row/row","style":{"navigationBarTitleText":"Layout 布局","enablePullDownRefresh":false}},{"path":"file-picker/file-picker","style":{"navigationBarTitleText":"FilePicker 文件选择上传","enablePullDownRefresh":false}},{"path":"space/space","style":{"navigationBarTitleText":"间距","enablePullDownRefresh":false},"nvue":true},{"path":"font/font","style":{"navigationBarTitleText":"字体","enablePullDownRefresh":false},"nvue":true},{"path":"color/color","style":{"navigationBarTitleText":"颜色","enablePullDownRefresh":false},"nvue":true},{"path":"radius/radius","style":{"navigationBarTitleText":"圆角","enablePullDownRefresh":false},"nvue":true},{"path":"button/button","style":{"navigationBarTitleText":"","enablePullDownRefresh":false}}]},{"root":"pages/template","pages":[{"path":"ucharts/ucharts","style":{"navigationBarTitleText":"uCharts 图表"}},{"path":"nav-default/nav-default","style":{"navigationBarTitleText":"默认导航栏"}},{"path":"component-communication/component-communication","style":{"navigationBarTitleText":"组件通讯"}},{"path":"nav-transparent/nav-transparent","style":{"navigationBarTitleText":"透明渐变导航栏","transparentTitle":"auto"}},{"path":"nav-button/nav-button","style":{"navigationBarTitleText":"导航栏带自定义按钮","app-plus":{"titleNView":{"buttons":[{"type":"share"},{"type":"favorite"}]}}}},{"path":"nav-image/nav-image","style":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","titleImage":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b3e4cbd0-517d-11eb-a16f-5b3e54966275.png"}},{"path":"nav-city-dropdown/nav-city-dropdown","style":{"navigationBarTitleText":"导航栏带城市选择","app-plus":{"titleNView":{"buttons":[{"text":"北京市","fontSize":"14","select":true,"width":"auto"}]}}}},{"path":"nav-dot/nav-dot","style":{"navigationBarTitleText":"导航栏带红点和角标","app-plus":{"titleNView":{"buttons":[{"text":"消息","fontSize":"14","redDot":true},{"text":"关注","fontSize":"14","badgeText":"12"}]}}}},{"path":"nav-search-input/nav-search-input","style":{"navigationBarTitleText":"导航栏带搜索框","app-plus":{"titleNView":{"type":"transparent","titleColor":"#fff","backgroundColor":"#007AFF","buttons":[{"fontSrc":"/static/uni.ttf","text":"","width":"40px","fontSize":"28px","color":"#fff","background":"rgba(0,0,0,0)"}],"searchInput":{"backgroundColor":"#fff","borderRadius":"6px","placeholder":"请输入地址 如：大钟寺","disabled":true}}}}},{"path":"nav-search-input/detail/detail","style":{"navigationBarTitleText":"搜索","app-plus":{"titleNView":{"titleColor":"#fff","backgroundColor":"#007AFF","buttons":[{"fontSrc":"/static/uni.ttf","text":"","width":"auto","fontSize":"28px","color":"#fff"}],"searchInput":{"backgroundColor":"#fff","borderRadius":"6px","placeholder":"请输入地址 如：大钟寺","autoFocus":true}}}}},{"path":"list2detail-list/list2detail-list","style":{"navigationBarTitleText":"列表到详情示例","enablePullDownRefresh":true}},{"path":"list2detail-detail/list2detail-detail","style":{"navigationBarTitleText":"详情","app-plus":{"titleNView":{"type":"transparent","buttons":[{"type":"share"}]}},"h5":{"titleNView":{"type":"transparent","buttons":[]}}}},{"path":"tabbar/tabbar","style":{"navigationBarTitleText":"可拖动顶部选项卡"},"nvue":true},{"path":"tabbar/detail/detail","style":{"navigationBarTitleText":"详情页面"}},{"path":"swiper-vertical/swiper-vertical","style":{"navigationBarTitleText":"上下滑动切换视频","app-plus":{"titleNView":false}},"nvue":true},{"path":"swiper-list/swiper-list","style":{"navigationBarTitleText":"swiper-list"},"nvue":true},{"path":"swiper-list-nvue/swiper-list-nvue","style":{"navigationBarTitleText":"swiper-list"},"nvue":true},{"path":"scheme/scheme","style":{"navigationBarTitleText":"打开外部应用"}},{"path":"vant-button/vant-button","style":{"navigationBarTitleText":"微信自定义组件示例","usingComponents":{"van-button":"/wxcomponents/vant/button/index"}}},{"path":"global/global","style":{"navigationBarTitleText":"GlobalData和vuex"}}]}],"globalStyle":{"pageOrientation":"portrait","navigationBarTitleText":"Hello uniapp","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#F8F8F8","backgroundColorTop":"#F4F5F6","backgroundColorBottom":"#F4F5F6","mp-360":{"navigationStyle":"custom"},"h5":{"maxWidth":1190,"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F1F1F1"}},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/tabBar/component/component","iconPath":"static/component.png","selectedIconPath":"static/componentHL.png","text":"内置组件"},{"pagePath":"pages/tabBar/API/API","iconPath":"static/api.png","selectedIconPath":"static/apiHL.png","text":"接口"},{"pagePath":"pages/tabBar/extUI/extUI","iconPath":"static/extui.png","selectedIconPath":"static/extuiHL.png","text":"扩展组件"},{"pagePath":"pages/tabBar/template/template","iconPath":"static/template.png","selectedIconPath":"static/templateHL.png","text":"模板"}]},"nvue":{"pages":[{"path":"pages/component/map/map.html","style":{"navigationBarTitleText":"map"}},{"path":"pages/component/video/video.html","style":{"navigationBarTitleText":"video"}},{"path":"pages/component/input/input.html","style":{"navigationBarTitleText":"input","app-plus":{"softinputNavBar":"none"},"softinputNavBar":"none"}},{"path":"pages/component/cover-view/cover-view.html","style":{"navigationBarTitleText":"cover-view"}},{"path":"pages/tabBar/extUI/extUI.html","style":{"navigationBarTitleText":"扩展组件","app-plus":{"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}},"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"pages/tabBar/template/template.html","style":{"navigationBarTitleText":"模版","app-plus":{"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}},"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"pages/tabBar/API/API.html","style":{"navigationBarTitleText":"接口","app-plus":{"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}},"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"pages/tabBar/component/component.html","style":{"navigationBarTitleText":"内置组件","app-plus":{"bounce":"vertical","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}},"bounce":"vertical","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"pages/API/map-search/map-search.html","style":{"navigationBarTitleText":"map search"}},{"path":"pages/API/map/map.html","style":{"navigationBarTitleText":"map"}},{"path":"pages/API/navigator/new-page/new-nvue-page-2.html","style":{"navigationBarTitleText":"新NVUE页面2"}},{"path":"pages/API/navigator/new-page/new-nvue-page-1.html","style":{"navigationBarTitleText":"新NVUE页面1"}},{"path":"pages/extUI/radius/radius.html","style":{"navigationBarTitleText":"圆角","enablePullDownRefresh":false}},{"path":"pages/extUI/color/color.html","style":{"navigationBarTitleText":"颜色","enablePullDownRefresh":false}},{"path":"pages/extUI/font/font.html","style":{"navigationBarTitleText":"字体","enablePullDownRefresh":false}},{"path":"pages/extUI/space/space.html","style":{"navigationBarTitleText":"间距","enablePullDownRefresh":false}},{"path":"pages/extUI/data-picker/data-picker.html","style":{"navigationBarTitleText":"DataPicker 级联选择","enablePullDownRefresh":false}},{"path":"pages/extUI/goods-nav/goods-nav.html","style":{"navigationBarTitleText":"GoodsNav 商品导航"}},{"path":"pages/extUI/indexed-list/indexed-list.html","style":{"navigationBarTitleText":"IndexedList 索引列表","mp-weixin":{"disableScroll":true},"app-plus":{"bounce":"none"},"mp-alipay":{"allowsBounceVertical":"NO"},"mp-baidu":{"disableScroll":true},"bounce":"none"}},{"path":"pages/extUI/calendar/calendar.html","style":{"navigationBarTitleText":"Calendar 日历"}},{"path":"pages/extUI/rate/rate.html","style":{"navigationBarTitleText":"Rate 评分"}},{"path":"pages/extUI/grid/grid.html","style":{"navigationBarTitleText":"Grid 宫格"}},{"path":"pages/extUI/swiper-dot/swiper-dot.html","style":{"navigationBarTitleText":"SwiperDot 轮播图指示点","mp-baidu":{"disableSwipeBack":true}}},{"path":"pages/extUI/card/card.html","style":{"navigationBarTitleText":"Card 卡片"}},{"path":"pages/extUI/list/list.html","style":{"navigationBarTitleText":"List 列表"}},{"path":"pages/extUI/tag/tag.html","style":{"navigationBarTitleText":"Tag 标签"}},{"path":"pages/extUI/number-box/number-box.html","style":{"navigationBarTitleText":"NumberBox 数字输入框"}},{"path":"pages/extUI/nav-bar/nav-bar.html","style":{"navigationBarTitleText":"NavBar 导航栏","navigationStyle":"custom","enablePullDownRefresh":true,"app-plus":{"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"70px"}},"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"70px"}}},{"path":"pages/extUI/load-more/load-more.html","style":{"navigationBarTitleText":"LoadMore 加载更多"}},{"path":"pages/extUI/icons/icons.html","style":{"navigationBarTitleText":"Icons 图标"}},{"path":"pages/extUI/countdown/countdown.html","style":{"navigationBarTitleText":"Countdown 倒计时"}},{"path":"pages/template/swiper-list-nvue/swiper-list-nvue.html","style":{"navigationBarTitleText":"swiper-list"}},{"path":"pages/template/swiper-list/swiper-list.html","style":{"navigationBarTitleText":"swiper-list"}},{"path":"pages/template/swiper-vertical/swiper-vertical.html","style":{"navigationBarTitleText":"上下滑动切换视频","app-plus":{"titleNView":false},"titleNView":false}},{"path":"pages/template/tabbar/tabbar.html","style":{"navigationBarTitleText":"可拖动顶部选项卡"}}],"entryPagePath":"pages/tabBar/component/component"}});

/***/ }),

/***/ 7:
/*!**********************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages.json?{"type":"stat"} ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":""});

/***/ }),

/***/ 8:
/*!***********************************************************************************************!*\
  !*** E:/03-work/03-宇信/00-代码学习/uniapp学习/hello-uniapp/hello-uniapp/pages.json?{"type":"style"} ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });