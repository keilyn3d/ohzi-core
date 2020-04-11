// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"v0GF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseApplication = /*#__PURE__*/function () {
  function BaseApplication() {
    _classCallCheck(this, BaseApplication);
  }

  _createClass(BaseApplication, [{
    key: "start",
    value: function start() {}
  }, {
    key: "end",
    value: function end() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "on_post_render",
    value: function on_post_render() {}
  }, {
    key: "on_pre_render",
    value: function on_pre_render() {}
  }, {
    key: "resources_fully_loaded",
    value: function resources_fully_loaded() {}
  }]);

  return BaseApplication;
}();

exports.default = BaseApplication;
},{}],"XMgG":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CameraManager = /*#__PURE__*/function () {
  function CameraManager() {
    _classCallCheck(this, CameraManager);

    this._current = undefined;
  }

  _createClass(CameraManager, [{
    key: "current",
    set: function set(camera) {
      this._current = camera;
    },
    get: function get() {
      return this._current;
    }
  }]);

  return CameraManager;
}();

var camera_manager = new CameraManager();
module.exports = camera_manager;
},{}],"JIgx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Screen = /*#__PURE__*/function () {
  function Screen() {
    _classCallCheck(this, Screen);

    this.width = 1;
    this.height = 1;
    this.width_height = new THREE.Vector2(this.width, this.height);
    this.screen_materials = [];
    this.native_width = this.width;
    this.native_height = this.height;
    this.pixel_size = new THREE.Vector2(1 / this.width, 1 / this.height);
  }

  _createClass(Screen, [{
    key: "update_size",
    value: function update_size(width, height) {
      this.width = width;
      this.height = height;
      this.pixel_size = new THREE.Vector2(1 / this.width, 1 / this.height);
      this.width_height.x = width;
      this.width_height.y = height;
      var i = this.screen_materials.length;

      while (i--) {
        this.screen_materials[i].uniforms._ScreenSize.value = this.width_height;
      }
    }
  }, {
    key: "apply_pixel_density_v2",
    value: function apply_pixel_density_v2(vector2) {
      vector2.multiplyScalar(1 / window.devicePixelRatio);
      return vector2;
    }
  }, {
    key: "apply_pixel_density",
    value: function apply_pixel_density(value) {
      return value * (1 / window.devicePixelRatio);
    }
  }, {
    key: "update_native_size",
    value: function update_native_size() {
      this.native_width = window.innerWidth;
      this.native_height = window.innerHeight;
    }
  }, {
    key: "add_screen_material",
    value: function add_screen_material(mat) {
      this.screen_materials.push(mat);
      mat.uniforms._ScreenSize.value = this.width_height;
    }
  }, {
    key: "remove_screen_material",
    value: function remove_screen_material(mat) {
      var index = this.screen_materials.indexOf(mat);

      if (index > -1) {
        this.screen_materials.splice(index, 1);
      }
    }
  }, {
    key: "get_pixel_size",
    value: function get_pixel_size() {
      return this.pixel_size;
    }
  }, {
    key: "aspect_ratio",
    get: function get() {
      return this.width / this.height;
    }
  }]);

  return Screen;
}();

var _default = new Screen();

exports.default = _default;
},{}],"RyjO":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*

  A configuration class used as a singleton

*/
var Configuration = /*#__PURE__*/function () {
  function Configuration() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Configuration);

    this.dpr = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.is_mobile = false;
    this.is_ios = false;
    this.vertex_image_unit_supported = true;
    this.min_zoom_distance = 3000;
    this.max_zoom_distance = 40000;
    this.max_zoom_distance_scale = 1.1;
    this.zoom_speed = 0.1;
    this.use_fxaa = false;
    this.use_ssaa = true;
    this.background_color = new THREE.Color(0.768, 0.768, 0.768); //TOUCH

    this.touch_sensitivity = 1.5;
    this.zoom_sensitivity = 0.7;
    this.spin_sensitivity = 2;
    this.three_finger_rotation_speed = 3;
    this.three_finger_allowed_x_rotation_offset = 30;
    this.three_finger_allowed_y_rotation_offset = 20;
    this.use_touch_gestures = false;
    this.texture_float_supported = false;
    this.use_ortographic = true;
    this.hover_enabled = false;
    this.rotation_enabled = false;
    this.transparency_amount = 0.2;
    this.show_debug_sphere_on_floor_selection = false;
    this.show_debug_sphere_on_steps_in_floor = false;
    this.display_cleanup_log = false;
    this.navigation_speed_damping = 0.74;
    this.navigation_speed = 200;
    this.out_of_bounds_force = 1.5;
    this.mouse_zoom_speed = 0.05;
    this.touch_zoom_speed = 0.5;
  }

  _createClass(Configuration, [{
    key: "from_json",
    value: function from_json(json) {}
  }]);

  return Configuration;
}();

var configuration = new Configuration();
module.exports = configuration;
},{}],"wewU":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Time = /*#__PURE__*/function () {
  function Time() {
    _classCallCheck(this, Time);

    this.___time = new THREE.Clock();
    this.__delta_time = 0;
    this.__elapsed_time = 0;
    this.__allocated_time = new THREE.Vector2(0, 0);
  }

  _createClass(Time, [{
    key: "__update",
    value: function __update() {
      this.__delta_time = this.___time.getDelta();
      this.__elapsed_time = this.___time.getElapsedTime();
    }
  }, {
    key: "delta_time",
    get: function get() {
      return this.__delta_time < 0.4 ? this.__delta_time : 0.016;
    }
  }, {
    key: "elapsed_time",
    get: function get() {
      return this.__elapsed_time;
    }
  }, {
    key: "shader_time",
    get: function get() {
      this.__allocated_time.x = this.delta_time;
      this.__allocated_time.y = this.elapsed_time;
      return this.__allocated_time;
    }
  }]);

  return Time;
}();

var time = new Time();
module.exports = time;
},{}],"Oo8n":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardInput = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyboardInput = /*#__PURE__*/function () {
  function KeyboardInput() {
    _classCallCheck(this, KeyboardInput);

    this.ctrlz_pressed = false;
    this.ctrlz_fired = false;
    this.keys = [];
  }

  _createClass(KeyboardInput, [{
    key: "init",
    value: function init() {
      document.onkeydown = this.on_key_down.bind(this);
      document.onkeyup = this.on_key_up.bind(this);
      document.onkeypress = this.on_key_press.bind(this);
    }
  }, {
    key: "on_key_down",
    value: function on_key_down(e) {
      if (e.keyCode == 90 && e.ctrlKey && !this.ctrlz_fired) {
        this.ctrlz_pressed = true;
        this.ctrlz_fired = true;
      }

      if (e.key) {
        this.press_key(e.key);
      }
    }
  }, {
    key: "on_key_press",
    value: function on_key_press(e) {}
  }, {
    key: "on_key_up",
    value: function on_key_up(e) {
      this.release_keys();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctrlz_pressed = false;

      for (var i = 0; i < this.keys.length; i++) {
        this.keys[i].pressed = false;
      }
    }
  }, {
    key: "release_keys",
    value: function release_keys() {
      this.ctrlz_fired = false;

      for (var i = 0; i < this.keys.length; i++) {
        this.keys[i].fired = false;
        this.keys[i].down = false;
      }
    }
  }, {
    key: "press_key",
    value: function press_key(key) {
      for (var i = 0; i < this.keys.length; i++) {
        if (this.keys[i].key_name === key && !this.keys[i].fired) {
          this.keys[i].pressed = true;
          this.keys[i].down = true;
          this.keys[i].fired = true;
        }
      }
    }
  }, {
    key: "key_is_pressed",
    value: function key_is_pressed(key) {
      for (var i = 0; i < this.keys.length; i++) {
        if (this.keys[i].key_name === key) {
          return this.keys[i].pressed;
        }
      }

      return false;
    }
  }, {
    key: "key_is_down",
    value: function key_is_down(key) {
      for (var i = 0; i < this.keys.length; i++) {
        if (this.keys[i].key_name === key) {
          return this.keys[i].down;
        }
      }

      return false;
    }
  }, {
    key: "register_key",
    value: function register_key(key) {
      this.keys.push({
        key_name: key,
        pressed: false,
        down: false,
        up: false,
        fired: false
      });
    }
  }, {
    key: "unregister_key",
    value: function unregister_key(key_name) {
      var key = undefined;

      for (var i = 0; i < this.keys.length; i++) {
        if (this.keys[i].key_name === key_name) key = this.keys[i];
      }

      var index = this.keys.indexOf(key);

      if (index > -1) {
        this.keys.splice(index, 1);
      }
    }
  }]);

  return KeyboardInput;
}();

exports.KeyboardInput = KeyboardInput;
var keyboard_input = new KeyboardInput();
module.exports = keyboard_input;
},{}],"k3P6":[function(require,module,exports) {
"use strict";

var _Screen = _interopRequireDefault(require("/Screen"));

var _Configuration = _interopRequireDefault(require("/Configuration"));

var _Time = _interopRequireDefault(require("/Time"));

var _KeyboardInput = _interopRequireDefault(require("/KeyboardInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Input = /*#__PURE__*/function () {
  function Input() {
    _classCallCheck(this, Input);

    this.mouse_pos = new THREE.Vector2();
    this.last_mouse_pos = new THREE.Vector2();
    this.mouse_dir = new THREE.Vector2();
    this.__clicked_time = 0;
    this.__elapsed_time = 0;
    this.__delta_time = 0;
    this.is_mouse_down = false;
    this.is_mouse_up = false;
    this.rotation_angle = 0;
    this._normalized_mouse_pos = new THREE.Vector2(0, 0);
    this.left_mouse_button_down = false;
    this.left_mouse_button_pressed = false;
    this.left_mouse_button_released = false;
    this.middle_mouse_button_down = false;
    this.right_mouse_button_down = false;
    this.right_mouse_button_pressed = false;
    this.right_mouse_button_released = false;
    this.mousewheel = 0;
    this.previous_scale = 0;
    this.previous_rotation = 0;
    this.previous_rotation_dirty = true;
    this.mouse_str = "mouse";
    this.tmp_mouse_velocity = new THREE.Vector2();
    this.bounding_client = new THREE.Vector2();
    this.multitouch_active = false;
    this.tapped = false;
    this.initial_zoom_distance = 100;
    this.zoom_center = new THREE.Vector2();
    this.zoom_started = false;
    this.touch_zoom = 1;
    this.multi_touch_dir = new THREE.Vector2();
    this.wheel_delta = 0;
    this.mac = 'mac';
    this.pinching_with_trackpad = false;
    this.scrolling_with_trackpad = false;
    this.scrolling_with_mouse = false;
    this.double_click = false;
    this.canvas = undefined;
  }

  _createClass(Input, [{
    key: "mouse_is_within_bounds",
    value: function mouse_is_within_bounds() {
      var rect = this.canvas.getBoundingClientRect();
      return this.mouse_pos.x > rect.left && this.mouse_pos.x < rect.left + rect.width && this.mouse_pos.y > rect.top && this.mouse_pos.y < rect.top + rect.height;
    }
  }, {
    key: "init",
    value: function init(container, canvas) {
      var _this = this;

      this.canvas = canvas;
      var region = new ZingTouch.Region(container, false, false);

      _KeyboardInput.default.init();

      var scope = this;
      region.bind(container, 'tap', function (e) {
        scope.tapped = true;
        scope.set_mouse_pos(e);
      });
      window.addEventListener('dblclick', this.on_double_click.bind(this));
      container.addEventListener('mouseleave', this.on_focus_lost.bind(this)); // region.bind(container, 'pan', function(e){
      // 	scope.on_mouse_move(e);
      // 	console.log("PAN");
      // });

      var one_finger_pan = new ZingTouch.Pan({
        numInputs: 1
      });
      region.register("one_finger_pan", one_finger_pan);
      region.bind(container, "one_finger_pan", function (event) {
        if (event.detail.data.length > 0) {
          // scope.multi_touch_dir.set(event.detail.data[0].change.x, event.detail.data[0].change.y)
          // scope.multi_touch_dir.multiplyScalar(scope.__delta_time);
          scope.on_mouse_move(event);
        }
      });
      var two_fingers_pan = new ZingTouch.Pan({
        numInputs: 2
      });
      region.register("two_fingers_pan", two_fingers_pan);
      region.bind(container, "two_fingers_pan", function (event) {
        if (event.detail.data.length > 0) {
          // scope.multi_touch_dir.set(event.detail.data[0].change.x, event.detail.data[0].change.y)
          // scope.multi_touch_dir.multiplyScalar(scope.__delta_time);
          scope.multi_touch_dir.set(event.detail.data[0].change.x, event.detail.data[0].change.y);
          scope.multi_touch_dir.multiplyScalar(scope.__delta_time);
        }
      });
      var three_fingers_pan = new ZingTouch.Pan({
        numInputs: 3
      });
      region.register("three_fingers_pan", three_fingers_pan);
      region.bind(container, "three_fingers_pan", function (event) {
        if (event.detail.data.length > 0) {
          scope.multi_touch_dir.set(event.detail.data[0].change.x, event.detail.data[0].change.y);
          scope.multi_touch_dir.multiplyScalar(scope.__delta_time);
        }
      });
      region.bind(container, 'distance', function (e) {
        if (!scope.zoom_started) {
          scope.zoom_started = true;
          scope.touch_zoom_delta = 0;
          scope.initial_zoom_distance = e.detail.distance;
          scope.last_zoom_distance = e.detail.distance;
          scope.zoom_center.set(e.detail.center.x, e.detail.center.y);
          scope.mouse_pos.set(e.detail.center.x, e.detail.center.y);
        }

        scope.touch_zoom_delta = e.detail.distance - scope.last_zoom_distance;
        scope.last_zoom_distance = e.detail.distance;
        scope.touch_zoom = 1;
      }, false);
      var gesture = new ZingTouch.Gesture();

      gesture.end = function (inputs, state, element) {
        scope.on_mouse_up(inputs);
      };

      gesture.start = function (inputs, state, element) {
        scope.on_mouse_down(inputs);
      };

      region.register('shortTap', gesture);
      region.bind(container, 'shortTap', function (e) {}); // $(container).mousewheel(this.on_mouse_wheel.bind(this));

      window.addEventListener('wheel', this.on_mouse_wheel.bind(this));
      container.addEventListener("mousemove", function (event) {
        _this.mouse_pos.x = event.clientX;
        _this.mouse_pos.y = event.clientY;
        _this.scrolling_with_mouse = false;
        _this.scrolling_with_trackpad = false;
        _this.pinching_with_trackpad = false;
      });
    }
  }, {
    key: "set_mouse_pos",
    value: function set_mouse_pos(ev) {
      this.mouse_pos.x = ev.detail.events[0].clientX;
      this.mouse_pos.y = ev.detail.events[0].clientY;
    }
  }, {
    key: "is_mac",
    value: function is_mac() {
      return this.get_os() === this.mac;
    }
  }, {
    key: "on_double_click",
    value: function on_double_click(event) {
      this.double_click = true;
    }
  }, {
    key: "on_mouse_wheel",
    value: function on_mouse_wheel(event) {
      this.mouse_pos.x = event.clientX;
      this.mouse_pos.y = event.clientY; // User is using a mac

      if (this.is_mac()) {
        // User is pinching
        if (event.ctrlKey) {
          // Negative values means pinch in.
          // Positive values means pinch out.
          console.log("Pinching with a touchpad", event.deltaY);
          this.pinching_with_trackpad = true;
          this.scrolling_with_trackpad = false;
          this.scrolling_with_mouse = false; // User is scrolling
        } else {
          // User is using the touchpad
          if (this.is_int(event.deltaY)) {
            // Negative values means scroll up
            // Positive values means scroll down
            // console.log("Scrolling with a touchpad", (event.deltaY))
            // 350 is aprox the maximum value of deltaY on touchpad scroll
            this.pinching_with_trackpad = false;
            this.scrolling_with_trackpad = true;
            this.scrolling_with_mouse = false;
            this.wheel_delta = 1 - event.deltaY / 350 * 2.0 - 1;
          } else {
            // Negative values means scroll up
            // Positive values means scroll down
            // console.log("Scrolling with a mouse", event.deltaY)
            this.pinching_with_trackpad = false;
            this.scrolling_with_trackpad = false;
            this.scrolling_with_mouse = true;
            this.wheel_delta = event.deltaY / Math.abs(event.deltaY);
          }
        }
      } else {
        //probably windows
        this.pinching_with_trackpad = false;
        this.scrolling_with_trackpad = false;
        this.scrolling_with_mouse = true;
        this.wheel_delta = event.deltaY / Math.abs(event.deltaY);
      }
    }
  }, {
    key: "on_mouse_down",
    value: function on_mouse_down(inputs) {
      this.mouse_pos.x = inputs[0].current.clientX;
      this.mouse_pos.y = inputs[0].current.clientY;
      this.multitouch_active = inputs.length > 1;
      this.mouse_dir.x = 0;
      this.mouse_dir.y = 0;
      this.__clicked_time = this.__elapsed_time;
      this.is_mouse_down = true;
      this.is_mouse_up = false;

      switch (inputs[0].current.originalEvent.which) {
        case 1:
          this.left_mouse_button_down = true;
          this.left_mouse_button_pressed = true;
          break;

        case 2:
          this.middle_mouse_button_down = true;
          break;

        case 3:
          this.right_mouse_button_down = true;
          this.right_mouse_button_pressed = true;
          break;

        default:
          this.left_mouse_button_down = true;
          this.left_mouse_button_pressed = true;
          break;
      }

      this.wheel_delta = 0;
      this.previous_scale = 0;
      this.previous_rotation = 0;
    }
  }, {
    key: "mouse_clicked",
    value: function mouse_clicked() {
      return this.tapped;
    }
  }, {
    key: "on_mouse_up",
    value: function on_mouse_up(inputs) {
      // this.left_mouse_button_released = true;
      this.multitouch_active = inputs ? inputs.length > 1 : false;
      this.is_mouse_up = true;
      this.zoom_started = false;
      this.touch_zoom = 1;
      this.mouse_dir.x = 0;
      this.mouse_dir.y = 0;
      this.previous_scale = 0;
      this.previous_rotation = 0;
      this.wheel_delta = 0;
      this.left_mouse_button_down = false;
      this.middle_mouse_button_down = false;
      this.right_mouse_button_down = false;

      if (inputs) {
        switch (inputs[0].current.originalEvent.which) {
          case 1:
            this.left_mouse_button_released = true;
            break;

          case 2:
            this.middle_mouse_button_released = true;
            break;

          case 3:
            this.right_mouse_button_released = true;
            break;

          default:
            this.left_mouse_button_released = true;
            break;
        }
      }

      this.is_mouse_down = false;
      this.previous_rotation_dirty = true;
      this.rotation_delta = 0;
    }
  }, {
    key: "on_focus_lost",
    value: function on_focus_lost() {
      this.on_mouse_up();
      this.left_mouse_button_released = true;
      this.middle_mouse_button_released = true;
      this.right_mouse_button_released = true;
      this.left_mouse_button_released = true;
    }
  }, {
    key: "time_since_last_mouse_down",
    value: function time_since_last_mouse_down() {
      return this.__elapsed_time - this.__clicked_time;
    }
  }, {
    key: "on_mouse_move",
    value: function on_mouse_move(event) {
      if (event.detail.data.length > 0) {
        this.set_mouse_pos(event);
        this.mouse_dir.set(event.detail.data[0].change.x, event.detail.data[0].change.y); // this.mouse_dir.x *=  Screen.height / Screen.width;
        // this.mouse_dir.multiplyScalar(this.__delta_time/window.devicePixelRatio);
      }
    }
  }, {
    key: "get_os",
    value: function get_os() {
      var userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'mac';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'ios';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'windows';
      } else if (/Android/.test(userAgent)) {
        os = 'android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'linux';
      }

      return os;
    }
  }, {
    key: "is_int",
    value: function is_int(n) {
      return n % 1 === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.__elapsed_time = _Time.default.elapsed_time;
      this.__delta_time = _Time.default.delta_time;
      this.is_mouse_up = false;
      this.wheel_delta = 0;
      this.rotation_delta = 0;
      this.double_click = false;
      this.tapped = false;
      this.mouse_dir.multiplyScalar(0);
      this.multi_touch_dir.multiplyScalar(0);
      this.left_mouse_button_pressed = false;
      this.left_mouse_button_released = false;
      this.right_mouse_button_pressed = false;
      this.right_mouse_button_released = false;

      _KeyboardInput.default.clear();
    }
  }, {
    key: "normalized_mouse_pos",
    get: function get() {
      this._normalized_mouse_pos.x = this.mouse_pos.x / _Screen.default.width * 2.0 - 1;
      this._normalized_mouse_pos.y = -1 * (this.mouse_pos.y / _Screen.default.height * 2.0 - 1);
      return this._normalized_mouse_pos;
    }
  }, {
    key: "NDC",
    get: function get() {
      return this.normalized_mouse_pos;
    }
  }]);

  return Input;
}();

var INPUT = new Input();
module.exports = INPUT;
},{"/Screen":"JIgx","/Configuration":"RyjO","/Time":"wewU","/KeyboardInput":"Oo8n"}],"sPjl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Sphere = /*#__PURE__*/function (_THREE$Mesh) {
  _inherits(Sphere, _THREE$Mesh);

  var _super = _createSuper(Sphere);

  function Sphere(radius, color) {
    _classCallCheck(this, Sphere);

    color = color || "#FF0000";
    radius = radius || 1;
    var geometry = new THREE.SphereBufferGeometry(radius, 64, 64);
    var material = new THREE.MeshBasicMaterial({
      color: color
    });
    return _super.call(this, geometry, material);
  }

  return Sphere;
}(THREE.Mesh);

exports.default = Sphere;
},{}],"iaBK":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvoid main()\n{\n  vec3 pos = position;\n  mat4 MVP = projectionMatrix * modelViewMatrix;\n\n  gl_Position = MVP * vec4( pos, 1.0 );\n  //gl_Position.zw -= 0.1;\n}";
},{}],"bHqx":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform vec3 _Color;\n\nvoid main()\n{\n    gl_FragColor = vec4(_Color, 1.0);\n}";
},{}],"ezmQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _object_picker_vert = _interopRequireDefault(require("/editor/shaders/object_picker_vert"));

var _object_picker_frag = _interopRequireDefault(require("/editor/shaders/object_picker_frag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Mesh = /*#__PURE__*/function (_THREE$Mesh) {
  _inherits(Mesh, _THREE$Mesh);

  var _super = _createSuper(Mesh);

  function Mesh(geometry, material) {
    var _this;

    _classCallCheck(this, Mesh);

    _this = _super.call(this, geometry, material);
    _this._selectable_material = _this.__get_selectable_material();
    _this.original_material = _this.material;
    _this.stored_layers = _this.layers.mask;
    return _this;
  }

  _createClass(Mesh, [{
    key: "__get_selectable_material",
    value: function __get_selectable_material() {
      return new THREE.ShaderMaterial({
        uniforms: {
          _Color: {
            value: new THREE.Color()
          }
        },
        vertexShader: _object_picker_vert.default,
        fragmentShader: _object_picker_frag.default
      });
    }
  }, {
    key: "restore_material",
    value: function restore_material() {
      this.material = this.original_material;
    }
  }, {
    key: "store_layer_state",
    value: function store_layer_state() {
      this.stored_layers = this.layers.mask;
    }
  }, {
    key: "restore_layer_state",
    value: function restore_layer_state() {
      this.layers.mask = this.stored_layers;
    }
  }, {
    key: "selectable_material",
    get: function get() {
      return this._selectable_material;
    }
  }]);

  return Mesh;
}(THREE.Mesh);

exports.default = Mesh;
},{"/editor/shaders/object_picker_vert":"iaBK","/editor/shaders/object_picker_frag":"bHqx"}],"E21w":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Mesh2 = _interopRequireDefault(require("/Mesh"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Arrow = /*#__PURE__*/function (_Mesh) {
  _inherits(Arrow, _Mesh);

  var _super = _createSuper(Arrow);

  function Arrow(color, length, dir) {
    var _this;

    _classCallCheck(this, Arrow);

    color = color || "#FF0000";
    length = length || 1;
    var cone_height = 0.4;
    var cylinder_height = length - cone_height;
    var cylinder_geo = new THREE.CylinderBufferGeometry(0.01, 0.01, cylinder_height, 32);
    cylinder_geo.translate(0, cylinder_height / 2, 0);
    var cone_geometry = new THREE.ConeBufferGeometry(0.1, cone_height, 32);
    cone_geometry.translate(0, cylinder_height + cone_height / 2, 0);
    var buffer_geometry = THREE.BufferGeometryUtils.mergeBufferGeometries([cylinder_geo, cone_geometry]);
    buffer_geometry.rotateX(3.14 / 2);
    var material = new THREE.MeshBasicMaterial({
      color: color
    });
    _this = _super.call(this, buffer_geometry, material);
    if (dir) _this.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    return _this;
  }

  _createClass(Arrow, [{
    key: "dir",
    set: function set(dir) {
      this.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    }
  }, {
    key: "length",
    set: function set(value) {
      this.scale.z = value;
    }
  }]);

  return Arrow;
}(_Mesh2.default);

exports.default = Arrow;
},{"/Mesh":"ezmQ"}],"qvMM":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SceneManager = /*#__PURE__*/function () {
  function SceneManager() {
    _classCallCheck(this, SceneManager);

    this._current = new THREE.Scene();
    this._current.name = "default_scene";
  }

  _createClass(SceneManager, [{
    key: "add_scene",
    value: function add_scene(name) {}
  }, {
    key: "current",
    get: function get() {
      return this._current;
    },
    set: function set(scene) {
      this._current = scene;
    }
  }]);

  return SceneManager;
}();

var scene_manager = new SceneManager();
module.exports = scene_manager;
},{}],"ayC1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MathUtilities = /*#__PURE__*/function () {
  function MathUtilities() {
    _classCallCheck(this, MathUtilities);
  }

  _createClass(MathUtilities, null, [{
    key: "linear_map",
    value: function linear_map(value, from_range_start_value, from_range_end_value, to_range_start_value, to_range_end_value) {
      return (value - from_range_start_value) / (from_range_end_value - from_range_start_value) * (to_range_end_value - to_range_start_value) + to_range_start_value;
    }
  }, {
    key: "between",
    value: function between(value, min, max) {
      return value >= min && value <= max;
    }
  }, {
    key: "rgb_to_hex",
    value: function rgb_to_hex(rgb) {
      rgb.r = Math.round(rgb.r * 255).toString(16);
      rgb.g = Math.round(rgb.g * 255).toString(16);
      rgb.b = Math.round(rgb.b * 255).toString(16);
      if (rgb.r.length == 1) rgb.r = "0" + rgb.r;
      if (rgb.g.length == 1) rgb.g = "0" + rgb.g;
      if (rgb.b.length == 1) rgb.b = "0" + rgb.b;
      return "#" + rgb.r + rgb.g + rgb.b;
    }
  }, {
    key: "project_points_on_plane",
    value: function project_points_on_plane(points, plane) {
      var projected_point = new THREE.Vector3();
      var points_on_plane = [];

      for (var i = 0; i < points.length; i++) {
        plane.projectPoint(points[i], projected_point);
        points_on_plane.push(projected_point.clone());
      }

      return points_on_plane;
    }
  }, {
    key: "matrix4_lerp",
    value: function matrix4_lerp(from, to, target, t) {
      for (var i = 0; i < 16; i++) {
        target.elements[i] = THREE.Math.lerp(from.elements[i], to.elements[i], t);
      }
    }
  }, {
    key: "equals",
    value: function equals(x1, x2) {
      return Math.abs(x1 - x2) < 0.000001;
    }
  }]);

  return MathUtilities;
}();

exports.default = MathUtilities;
},{}],"ugwp":[function(require,module,exports) {
"use strict";

var _CameraManager = _interopRequireDefault(require("/CameraManager"));

var _Input = _interopRequireDefault(require("/Input"));

var _Sphere = _interopRequireDefault(require("/primitives/Sphere"));

var _Arrow = _interopRequireDefault(require("/primitives/Arrow"));

var _SceneManager = _interopRequireDefault(require("/SceneManager"));

var _MathUtilities = _interopRequireDefault(require("/utilities/MathUtilities"));

var _Screen = _interopRequireDefault(require("/Screen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CameraUtilities = /*#__PURE__*/function () {
  function CameraUtilities() {
    _classCallCheck(this, CameraUtilities);

    this.tmp_mat = new THREE.Matrix4();
    this.tmp_vec = new THREE.Vector3(0, 0, 1);
    this.tmp_vec2 = new THREE.Vector3(0, 0, 0);
    this.plane = new THREE.Plane();
    this.ray = new THREE.Ray();
    this.tmp_size = new THREE.Vector3();
    this.tmp_unproj = new THREE.Vector3();
  }

  _createClass(CameraUtilities, [{
    key: "get_up_dir",
    value: function get_up_dir(camera) {
      camera = camera || _CameraManager.default.current;
      this.tmp_vec.set(0, 1, 0);
      this.tmp_vec.applyQuaternion(camera.quaternion);
      return this.tmp_vec;
    }
  }, {
    key: "get_forward_dir",
    value: function get_forward_dir(camera) {
      camera = camera || _CameraManager.default.current;
      this.tmp_vec.set(0, 0, 1);
      this.tmp_vec.applyQuaternion(camera.quaternion);
      return this.tmp_vec;
    }
  }, {
    key: "get_right_dir",
    value: function get_right_dir(camera) {
      camera = camera || _CameraManager.default.current;
      this.tmp_vec.set(1, 0, 0);
      this.tmp_vec.applyQuaternion(camera.quaternion);
      return this.tmp_vec;
    }
  }, {
    key: "unproject_mouse_position",
    value: function unproject_mouse_position(NDC, camera) {
      camera = camera || _CameraManager.default.current;
      var v_fov = camera.fov / 2 * Math.PI / 180;
      var h_fov = 2 * Math.atan(Math.tan(v_fov) * camera.aspect) / 2;
      var distV = Math.tan(v_fov) * camera.far;
      var distH = Math.tan(h_fov) * camera.far;
      this.tmp_vec.set(distH * NDC.x, distV * NDC.y, -camera.far).normalize();
      return this.tmp_vec.applyQuaternion(camera.quaternion);
    }
  }, {
    key: "get_plane_intersection",
    value: function get_plane_intersection(plane_position, plane_normal, NDC, camera) {
      camera = camera || _CameraManager.default.current;
      NDC = NDC || _Input.default.normalized_mouse_pos;
      this.plane.setFromNormalAndCoplanarPoint(plane_normal || this.get_forward_dir(camera), plane_position);

      if (camera.isPerspectiveCamera) {
        this.ray.set(camera.position, this.unproject_mouse_position(NDC, camera));
      } else {
        this.tmp_unproj.set(NDC.x, NDC.y, 1).unproject(camera);
        this.ray.set(camera.position, this.tmp_unproj);
      }

      this.ray.intersectPlane(this.plane, this.tmp_vec2);
      return this.tmp_vec2;
    }
  }, {
    key: "fit_points_on_camera",
    value: function fit_points_on_camera(points) {
      var zoom_scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var points_sphere = new THREE.Sphere().setFromPoints(points);
      var world_space_center = points_sphere.center;
      var camera_forward = this.get_forward_dir(_CameraManager.default.current).clone();
      var plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera_forward, world_space_center);

      var points_on_plane = _MathUtilities.default.project_points_on_plane(points, plane);

      var projected_points_center = new THREE.Vector3();
      var box = new THREE.Box3().setFromPoints(points_on_plane);
      box.getCenter(projected_points_center);
      var up = new THREE.Vector3(0, 1, 0).applyQuaternion(_CameraManager.default.current.quaternion);
      var right = up.clone().cross(camera_forward).normalize();
      var mat = new THREE.Matrix4().set(right.x, up.x, camera_forward.x, world_space_center.x, right.y, up.y, camera_forward.y, world_space_center.y, right.z, up.z, camera_forward.z, world_space_center.z, 0, 0, 0, 1);
      var inverse_mat = new THREE.Matrix4().getInverse(mat);

      for (var i = 0; i < points_on_plane.length; i++) {
        points_on_plane[i].applyMatrix4(inverse_mat);
      }

      var size = new THREE.Vector3();
      box = new THREE.Box3().setFromPoints(points_on_plane);
      box.getSize(size);
      size.multiplyScalar(zoom_scale);
      var projected_center = new THREE.Vector3();
      box.getCenter(projected_center);
      return {
        position: projected_points_center,
        zoom: this.get_zoom_to_fit_rect(size.x / 2, size.y / 2)
      };
    }
  }, {
    key: "get_zoom_to_fit_rect",
    value: function get_zoom_to_fit_rect(width, height) {
      var v_fov = _CameraManager.default.current.fov / 2 * Math.PI / 180;
      var h_fov = 2 * Math.atan(Math.tan(v_fov) * _CameraManager.default.current.aspect) / 2;
      var distV = height / Math.tan(v_fov);
      var distH = width / Math.tan(h_fov);
      return Math.max(Math.abs(distH), Math.abs(distV));
    }
  }, {
    key: "get_zoom_to_fit_box",
    value: function get_zoom_to_fit_box(bb, camera) {
      if (camera.isOrthographicCamera) {
        bb.getSize(this.tmp_size);
        var obj_x = this.tmp_size.x;
        var obj_y = this.tmp_size.y;
        var object_aspect = obj_x / obj_y;

        if (_Screen.default.aspect_ratio / object_aspect > 1) {
          return _Screen.default.height / obj_y;
        } else {
          return _Screen.default.width / obj_x;
        }
      } else {
        // return this.fit_points_on_camera([bb.min, bb.max], 1).zoom;
        var size = new THREE.Vector3();
        bb.getSize(size);
        return this.get_zoom_to_fit_rect(size.x, size.y);
      }
    }
  }, {
    key: "get_html_screen_pos",
    value: function get_html_screen_pos(object, camera) {
      object.getWorldPosition(this.tmp_vec);
      this.tmp_vec.project(camera);
      this.tmp_vec.x = (this.tmp_vec.x * 0.5 + 0.5) * _Screen.default.width;
      this.tmp_vec.y = (1 - (this.tmp_vec.y * 0.5 + 0.5)) * _Screen.default.height;
      return this.tmp_vec;
    }
  }, {
    key: "update_projection",
    value: function update_projection(camera) {
      camera.left = -_Screen.default.width / 2;
      camera.right = _Screen.default.width / 2;
      camera.top = _Screen.default.height / 2;
      camera.bottom = -_Screen.default.height / 2;
      camera.aspect = _Screen.default.aspect_ratio;
      camera.updateProjectionMatrix(true);
    }
  }]);

  return CameraUtilities;
}();

var camera_utilities = new CameraUtilities();
module.exports = camera_utilities;
},{"/CameraManager":"XMgG","/Input":"k3P6","/primitives/Sphere":"sPjl","/primitives/Arrow":"E21w","/SceneManager":"qvMM","/utilities/MathUtilities":"ayC1","/Screen":"JIgx"}],"hZlU":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Capabilities = function Capabilities() {
  _classCallCheck(this, Capabilities);

  this.max_anisotropy = 0;
  this.vertex_texture_sampler_available = false;
  this.fp_textures_available = false;
};

var capabilities = new Capabilities();
module.exports = capabilities;
},{}],"ZeWG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EasingFunctions = /*#__PURE__*/function () {
  function EasingFunctions() {
    _classCallCheck(this, EasingFunctions);
  }

  _createClass(EasingFunctions, null, [{
    key: "ease_out_sine",
    value: function ease_out_sine(x) {
      return Math.sin(x * 3.14 / 2);
    }
  }, {
    key: "ease_in_out_cubic",
    value: function ease_in_out_cubic(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
  }, {
    key: "ease_out_cubic",
    value: function ease_out_cubic(x) {
      return 1 - Math.pow(1 - x, 3);
    }
  }, {
    key: "ease_in_out_quint",
    value: function ease_in_out_quint(x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }
  }, {
    key: "ease_out_quint",
    value: function ease_out_quint(x) {
      return 1 - Math.pow(1 - x, 5);
    }
  }, {
    key: "ease_in_out_circ",
    value: function ease_in_out_circ(x) {
      return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    }
  }, {
    key: "ease_out_quad",
    value: function ease_out_quad(x) {
      return 1 - (1 - x) * (1 - x);
    }
  }]);

  return EasingFunctions;
}();

exports.default = EasingFunctions;
},{}],"pJqg":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    this.queue = {};
    this.zoom_changed_evt = "zoom_changed";
    this.store_clickd_evt = "store_clicked";
    this.point_selected_evt = "point_selected";
    this.config_changed = "config_changed";
    this.path_substep_completed = "path_substep_completed";
    this.path_completed = "path_completed";
    this.go_to_store_requested_evt = "go_to_store_requested";
    this.resource_loaded_evt = "resource_loaded";
    this.service_clicked_evt = "service_clicked";
    this.unit_pos_updated_evt = "unit_position_updated";
    this.floor_changed_evt = "floor_changed";
    this.on_enter_floor_navigation = "on_enter_floor_navigation";
    this.on_exit_floor_navigation = "on_exit_floor_navigation";
    this.on_enter_floor_selection = "on_enter_floor_selection";
    this.on_exit_floor_selection = "on_exit_floor_selection";
    this.on_enter_outside_navigation = "on_enter_outside_navigation";
    this.on_exit_outside_navigation = "on_exit_outside_navigation";
    this.step_selected_evt = "step_selected";
  }

  _createClass(EventManager, [{
    key: "fire",
    value: function fire(event, payload) {
      var queue = this.queue[event];

      if (queue === undefined) {
        return;
      }

      var i = queue.length;

      while (i--) {
        queue[i](payload);
      }
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      if (typeof this.queue[event] === 'undefined') {
        this.queue[event] = [];
      }

      this.queue[event].push(callback);
    }
  }, {
    key: "fire_zoom_changed",
    value: function fire_zoom_changed(zoom) {
      this.fire(this.zoom_changed_evt, zoom);
    }
  }, {
    key: "fire_store_selected",
    value: function fire_store_selected(store_id) {
      this.fire(this.store_clickd_evt, store_id);
    }
  }, {
    key: "fire_point_selected",
    value: function fire_point_selected(hit_data) {
      this.fire(this.point_selected_evt, hit_data);
    }
  }, {
    key: "fire_config_changed",
    value: function fire_config_changed() {
      this.fire(this.config_changed);
    }
  }, {
    key: "fire_path_substep_completed",
    value: function fire_path_substep_completed(step_number) {
      this.fire(this.path_substep_completed, step_number);
    }
  }, {
    key: "fire_path_completed",
    value: function fire_path_completed() {
      this.fire(this.path_completed);
    }
  }, {
    key: "fire_step_selected",
    value: function fire_step_selected(step_index) {
      this.fire(this.step_selected_evt, step_index);
    }
  }, {
    key: "fire_go_to_store_requested",
    value: function fire_go_to_store_requested(store_id) {
      this.fire(this.go_to_store_requested_evt, store_id);
    }
  }, {
    key: "fire_resource_loaded",
    value: function fire_resource_loaded(resource) {
      this.fire(this.resource_loaded_evt, resource);
    }
  }, {
    key: "fire_service_clicked",
    value: function fire_service_clicked(service) {
      this.fire(this.service_clicked_evt, service);
    }
  }, {
    key: "fire_unit_position_updated",
    value: function fire_unit_position_updated(unit_data) {
      this.fire(this.unit_pos_updated_evt, unit_data);
    }
  }, {
    key: "fire_floor_switched",
    value: function fire_floor_switched(floor_id) {
      this.fire(this.floor_changed_evt, floor_id);
    }
  }, {
    key: "fire_on_enter_floor_navigation",
    value: function fire_on_enter_floor_navigation(state) {
      this.fire(this.on_enter_floor_navigation, state);
    }
  }, {
    key: "fire_on_exit_floor_navigation",
    value: function fire_on_exit_floor_navigation(state) {
      this.fire(this.on_exit_floor_navigation, state);
    }
  }, {
    key: "fire_on_enter_floor_selection",
    value: function fire_on_enter_floor_selection(state) {
      this.fire(this.on_enter_floor_selection, state);
    }
  }, {
    key: "fire_on_exit_floor_selection",
    value: function fire_on_exit_floor_selection(state) {
      this.fire(this.on_exit_floor_selection, state);
    }
  }, {
    key: "fire_on_enter_outside_navigation",
    value: function fire_on_enter_outside_navigation(state) {
      this.fire(this.on_enter_outside_navigation, state);
    }
  }, {
    key: "fire_on_exit_outside_navigation",
    value: function fire_on_exit_outside_navigation(state) {
      this.fire(this.on_exit_outside_navigation, state);
    }
  }]);

  return EventManager;
}();

var event_manager = new EventManager();
module.exports = event_manager;
},{}],"xAef":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AxisHelper = /*#__PURE__*/function (_THREE$Object3D) {
  _inherits(AxisHelper, _THREE$Object3D);

  var _super = _createSuper(AxisHelper);

  function AxisHelper() {
    var _this;

    var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;

    _classCallCheck(this, AxisHelper);

    _this = _super.call(this);
    var blueAxisMat = new THREE.LineBasicMaterial({
      color: 0x4444ff,
      depthFunc: THREE.AlwaysDepth
    });
    var blueAxisGeo = new THREE.Geometry();
    blueAxisGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    blueAxisGeo.vertices.push(new THREE.Vector3(0, 0, 1000));
    var blueAxisLine = new THREE.Line(blueAxisGeo, blueAxisMat);
    blueAxisLine.renderOrder = 50000;
    var greenAxisMat = new THREE.LineBasicMaterial({
      color: 0x44ff44,
      depthFunc: THREE.AlwaysDepth
    });
    var greenAxisGeo = new THREE.Geometry();
    greenAxisGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    greenAxisGeo.vertices.push(new THREE.Vector3(0, 1000, 0));
    var greenAxisLine = new THREE.Line(greenAxisGeo, greenAxisMat);
    greenAxisLine.renderOrder = 50000;
    var redAxisMat = new THREE.LineBasicMaterial({
      linewidth: 100,
      color: 0xff4444,
      depthFunc: THREE.AlwaysDepth
    });
    var redAxisGeo = new THREE.Geometry();
    redAxisGeo.computeLineDistances();
    redAxisGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    redAxisGeo.vertices.push(new THREE.Vector3(1000, 0, 0));
    var redAxisLine = new THREE.Line(redAxisGeo, redAxisMat);
    redAxisLine.renderOrder = 50000;
    _this.renderOrder = 100000;

    _this.add(blueAxisLine);

    _this.add(greenAxisLine);

    _this.add(redAxisLine);

    _this.scale.set(scale, scale, scale);

    return _this;
  }

  _createClass(AxisHelper, [{
    key: "update",
    value: function update() {}
  }, {
    key: "dispose",
    value: function dispose() {}
  }]);

  return AxisHelper;
}(THREE.Object3D);

exports.default = AxisHelper;
},{}],"QfnR":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main()\n{\n  vec3 pos = position;\n  mat4 MVP = projectionMatrix * modelViewMatrix;\n\n  gl_Position = MVP * vec4( pos, 1.0 );\n  vUv = uv;\n}";
},{}],"gDca":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseRender = /*#__PURE__*/function () {
  function BaseRender() {
    _classCallCheck(this, BaseRender);
  }

  _createClass(BaseRender, [{
    key: "render",
    value: function render() {}
  }, {
    key: "on_enter",
    value: function on_enter(context, renderer) {}
  }, {
    key: "on_exit",
    value: function on_exit(context, renderer) {}
  }, {
    key: "resize",
    value: function resize() {}
  }]);

  return BaseRender;
}();

exports.default = BaseRender;
},{}],"bFlA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RenderLayers = /*#__PURE__*/function () {
  function RenderLayers() {
    _classCallCheck(this, RenderLayers);
  }

  _createClass(RenderLayers, null, [{
    key: "opaque",
    get: function get() {
      return 0;
    }
  }, {
    key: "transparent",
    get: function get() {
      return 1;
    }
  }, {
    key: "outline",
    get: function get() {
      return 2;
    }
  }, {
    key: "selectable",
    get: function get() {
      return 3;
    }
  }]);

  return RenderLayers;
}();

exports.default = RenderLayers;
},{}],"aRZG":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform sampler2D _MainTex;\nuniform sampler2D _Blur;\nuniform vec2 _Screen;\nvarying vec2 vUv;\n\nfloat aastep(float threshold, float value) {\n  #ifdef GL_OES_standard_derivatives\n    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;\n    return smoothstep(threshold-afwidth, threshold+afwidth, value);\n  #else\n    return step(threshold, value);\n  #endif  \n}\n\nvoid main()\n{\n\tvec2 pixel_size = 1.0/_Screen;\n\n\tvec4 color = texture2D( _MainTex, vUv);\n\tfloat mask = 1.0 - color.a;\n\n\tfloat blur = texture2D( _Blur, vUv).a;\n\n  // gl_FragColor = vec4(mask,mask,mask,0.0);\n  // gl_FragColor = color;\n\n\tgl_FragColor = vec4(mix(color.rgb, mix(color.rgb, vec3(1.,0.,0.),aastep(0.076, blur)), mask), 1.0);\n}\n\n";
},{}],"GnKT":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform sampler2D _MainTex;\nuniform vec2 _Resolution;\nuniform vec2 _SampleDir;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvec3 sum = vec3(0.,0.,0.);\n\tvec2 dir = (0.5/_Resolution) * _SampleDir;\n\tfloat _Distance = 2.0;\n\tsum += texture2D( _MainTex, vUv + dir * -4. * _Distance ).rgb * 0.0525;\n\tsum += texture2D( _MainTex, vUv + dir * -3. * _Distance ).rgb * 0.075;\n\tsum += texture2D( _MainTex, vUv + dir * -2. * _Distance ).rgb * 0.110;\n\tsum += texture2D( _MainTex, vUv + dir * -1. * _Distance ).rgb * 0.150;\n\tsum += texture2D( _MainTex, vUv + dir *  0. * _Distance ).rgb * 0.225;\n\tsum += texture2D( _MainTex, vUv + dir *  1. * _Distance ).rgb * 0.150;\n\tsum += texture2D( _MainTex, vUv + dir *  2. * _Distance ).rgb * 0.110;\n\tsum += texture2D( _MainTex, vUv + dir *  3. * _Distance ).rgb * 0.075;\n\tsum += texture2D( _MainTex, vUv + dir *  4. * _Distance ).rgb * 0.0525;\n\tgl_FragColor = vec4(sum, 1.0);\n\n}\n";
},{}],"s876":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform sampler2D _MainTex;\n\nvarying vec2 vUv;\nvoid main()\n{\n\tgl_FragColor = texture2D(_MainTex, vUv);\n}";
},{}],"i1za":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main()\n{\n\tgl_Position = vec4(uv * 2.0 - 1.0, 1.0, 1.0);\n\tvUv = uv;\n}";
},{}],"F9Xn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Screen = _interopRequireDefault(require("/Screen"));

var _RenderLayers = _interopRequireDefault(require("/RenderLayers"));

var _compose_frag = _interopRequireDefault(require("/shaders/box_blur/compose_frag"));

var _box_blur_frag = _interopRequireDefault(require("/shaders/box_blur/box_blur_frag"));

var _copy_frag = _interopRequireDefault(require("/shaders/copy/copy_frag"));

var _copy_vert = _interopRequireDefault(require("/shaders/copy/copy_vert"));

var _basic_color_frag = _interopRequireDefault(require("/shaders/basic_color/basic_color_frag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OutlineRender = /*#__PURE__*/function () {
  function OutlineRender(webgl) {
    _classCallCheck(this, OutlineRender);

    this.main_rt = new THREE.WebGLRenderTarget(_Screen.default.width, _Screen.default.height);
    this.rt1 = new THREE.WebGLRenderTarget(_Screen.default.width, _Screen.default.height);
    this.rt2 = new THREE.WebGLRenderTarget(_Screen.default.width, _Screen.default.height);
    this.compose_material = this.__get_compose_material();
    this.copy_material = this.__get_copy_material();
    this.box_blur_material = this.__get_box_blur_material();
    this.background_material = this.__get_background_material();
    this.copy_plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.copy_material);
    this.copy_plane.frustumCulled = false;
    this.copy_scene = new THREE.Scene();
    this.copy_scene.add(this.copy_plane);
  }

  _createClass(OutlineRender, [{
    key: "resize",
    value: function resize(w, h) {
      this.main_rt.setSize(w, h);
      this.rt1.setSize(w, h);
      this.rt2.setSize(w, h);

      this.box_blur_material.uniforms._Screen.value.set(w, h);

      this.compose_material.uniforms._Screen.value.set(w, h);
    }
  }, {
    key: "render",
    value: function render(webgl) {
      webgl.camera.updateMatrix();
      webgl.camera.updateMatrixWorld();
      webgl.camera.layers.enable(_RenderLayers.default.opaque);
      webgl.camera.layers.enable(_RenderLayers.default.transparent);
      webgl.camera.layers.disable(_RenderLayers.default.outline); //render scene

      webgl._renderer.setClearColor(webgl.clear_color, 0);

      webgl._renderer.clearTarget(this.main_rt, true, true, true);

      this.copy_scene.overrideMaterial = this.background_material;

      this.background_material.uniforms._Color.value.set(webgl.clear_color.r, webgl.clear_color.g, webgl.clear_color.b, 0);

      webgl._renderer.render(this.copy_scene, webgl.camera, this.main_rt, false);

      webgl._renderer.render(webgl.scene, webgl.camera, this.main_rt, false); //horizontal blur


      this.box_blur_material.uniforms._MainTex.value = this.main_rt.texture;

      this.box_blur_material.uniforms._SampleDir.value.set(1, 0);

      this.copy_scene.overrideMaterial = this.box_blur_material;

      webgl._renderer.render(this.copy_scene, webgl.camera, this.rt1, false); //vertical blur


      this.box_blur_material.uniforms._SampleDir.value.set(0, 1);

      this.box_blur_material.uniforms._MainTex.value = this.rt1.texture;

      webgl._renderer.render(this.copy_scene, webgl.camera, this.rt2, false); //compose


      this.copy_scene.overrideMaterial = this.compose_material;
      this.compose_material.uniforms._MainTex.value = this.main_rt.texture;
      this.compose_material.uniforms._Blur.value = this.rt2.texture;

      webgl._renderer.render(this.copy_scene, webgl.camera, undefined, false);

      this.copy_scene.overrideMaterial = undefined;
    }
  }, {
    key: "__get_copy_material",
    value: function __get_copy_material() {
      return new THREE.ShaderMaterial({
        uniforms: {
          _MainTex: {
            value: undefined
          }
        },
        vertexShader: _copy_vert.default,
        fragmentShader: _copy_frag.default,
        depthTest: false,
        depthWrite: false
      });
    }
  }, {
    key: "__get_box_blur_material",
    value: function __get_box_blur_material() {
      return new THREE.ShaderMaterial({
        uniforms: {
          _MainTex: {
            value: undefined
          },
          _SampleDir: {
            value: new THREE.Vector2()
          },
          _Screen: {
            value: new THREE.Vector2(_Screen.default.width, _Screen.default.height)
          }
        },
        vertexShader: _copy_vert.default,
        fragmentShader: _box_blur_frag.default,
        depthTest: false,
        depthWrite: false
      });
    }
  }, {
    key: "__get_compose_material",
    value: function __get_compose_material() {
      return new THREE.ShaderMaterial({
        uniforms: {
          _MainTex: {
            value: undefined
          },
          _Blur: {
            value: undefined
          },
          _Screen: {
            value: new THREE.Vector2(_Screen.default.width, _Screen.default.height)
          }
        },
        vertexShader: _copy_vert.default,
        fragmentShader: _compose_frag.default,
        depthTest: false,
        depthWrite: false,
        extensions: {
          derivatives: true
        }
      });
    }
  }, {
    key: "__get_background_material",
    value: function __get_background_material() {
      return new THREE.ShaderMaterial({
        uniforms: {
          _Color: {
            value: new THREE.Vector4(0, 0, 0, 0)
          }
        },
        vertexShader: _copy_vert.default,
        fragmentShader: _basic_color_frag.default,
        depthTest: true,
        depthWrite: false
      });
    }
  }, {
    key: "on_enter",
    value: function on_enter(webgl) {
      webgl._renderer.autoClear = false;
    }
  }, {
    key: "on_exit",
    value: function on_exit(webgl) {
      webgl._renderer.autoClear = true;
    }
  }]);

  return OutlineRender;
}();

exports.default = OutlineRender;
},{"/Screen":"JIgx","/RenderLayers":"bFlA","/shaders/box_blur/compose_frag":"aRZG","/shaders/box_blur/box_blur_frag":"GnKT","/shaders/copy/copy_frag":"s876","/shaders/copy/copy_vert":"i1za","/shaders/basic_color/basic_color_frag":"bHqx"}],"yntx":[function(require,module,exports) {
"use strict";

var _Input = _interopRequireDefault(require("/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);

    this.ui_elements = [];
    this._tmp_normalized_pos = new THREE.Vector2();
    this.scene = new THREE.Scene();
    this.scene.autoUpdate = false;
    this.scene.frustumCulled = false;
  }

  _createClass(UI, [{
    key: "add_clickable_element",
    value: function add_clickable_element(elem) {
      this.ui_elements.push(elem);
      this.scene.add(elem.mesh);
    }
  }, {
    key: "remove_clickable_element",
    value: function remove_clickable_element(elem) {
      var index = this.ui_elements.indexOf(elem);

      if (index > -1) {
        this.ui_elements.splice(index, 1);
      }

      this.scene.remove(elem.mesh);
    }
  }, {
    key: "update",
    value: function update() {
      this._tmp_normalized_pos.copy(_Input.default.normalized_mouse_pos);

      for (var i = 0; i < this.ui_elements.length; i++) {
        this.ui_elements[i].update(this._tmp_normalized_pos);
      }
    }
  }, {
    key: "render",
    value: function render(renderer) {
      renderer.render_ui(this.scene);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.current_clicked_element = undefined;
    }
  }, {
    key: "resize",
    value: function resize() {
      for (var i = 0; i < this.ui_elements.length; i++) {
        this.ui_elements[i].resize();
      }
    }
  }]);

  return UI;
}();

var ui = new UI();
module.exports = ui;
},{"/Input":"k3P6"}],"Ftca":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _copy_vert = _interopRequireDefault(require("/shaders/copy/copy_vert"));

var _copy_frag = _interopRequireDefault(require("/shaders/copy/copy_frag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BlitMaterial = /*#__PURE__*/function (_THREE$ShaderMaterial) {
  _inherits(BlitMaterial, _THREE$ShaderMaterial);

  var _super = _createSuper(BlitMaterial);

  function BlitMaterial(frag_shader, vert_shader, defines) {
    var _super$call;

    _classCallCheck(this, BlitMaterial);

    return _super.call(this, (_super$call = {
      uniforms: {
        _MainTex: {
          value: null
        },
        _Resolution: {
          value: new THREE.Vector2(0, 0)
        }
      },
      defines: defines || {},
      vertexShader: vert_shader || _copy_vert.default,
      fragmentShader: frag_shader || _copy_frag.default,
      depthWrite: false,
      blending: THREE.NoBlending,
      depthTest: false
    }, _defineProperty(_super$call, "depthWrite", false), _defineProperty(_super$call, "depthFunc", THREE.AlwaysDepth), _super$call));
  }

  return BlitMaterial;
}(THREE.ShaderMaterial);

exports.default = BlitMaterial;
},{"/shaders/copy/copy_vert":"i1za","/shaders/copy/copy_frag":"s876"}],"qoY1":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform vec4 _DepthNormal;\nvec2 EncodeFloatRG( float v )\n{\n    vec2 kEncodeMul = vec2(1.0, 255.0);\n    float kEncodeBit = 1.0/255.0;\n    vec2 enc = kEncodeMul * v;\n    enc = fract (enc);\n    enc.x -= enc.y * kEncodeBit;\n    return enc;\n}\n\nvec2 EncodeNormal (vec3 n)\n{\n    float scale = 1.7777;\n    vec2 enc = n.xy / (n.z+1.0);\n    enc /= scale;\n    enc = enc*0.5+0.5;\n    return enc;\n}\n\nvoid main()\n{\n    gl_FragColor = vec4(EncodeFloatRG(_DepthNormal.x), EncodeNormal(normalize(_DepthNormal.yzw)));  \n}";
},{}],"bGMu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BlitMaterial2 = _interopRequireDefault(require("/materials/BlitMaterial"));

var _clear_depth_normal_frag = _interopRequireDefault(require("/shaders/clear/clear_depth_normal_frag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ClearDepthNormalMaterial = /*#__PURE__*/function (_BlitMaterial) {
  _inherits(ClearDepthNormalMaterial, _BlitMaterial);

  var _super = _createSuper(ClearDepthNormalMaterial);

  function ClearDepthNormalMaterial(clear_depth, clear_normal) {
    var _this;

    _classCallCheck(this, ClearDepthNormalMaterial);

    _this = _super.call(this, _clear_depth_normal_frag.default);
    _this.uniforms._DepthNormal = {
      value: new THREE.Vector4(clear_depth, clear_normal.x, clear_normal.y, clear_normal.z)
    };
    return _this;
  }

  return ClearDepthNormalMaterial;
}(_BlitMaterial2.default);

exports.default = ClearDepthNormalMaterial;
},{"/materials/BlitMaterial":"Ftca","/shaders/clear/clear_depth_normal_frag":"qoY1"}],"DRHE":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying vec3 v_normal;\nvarying vec3 v_pos;\n\nvoid main()\n{\n  vec3 pos = position;\n  mat4 MVP = projectionMatrix * modelViewMatrix;\n\n  v_normal \t= (modelViewMatrix * vec4(normal, 0.0)).xyz;\n  v_pos \t\t= (modelViewMatrix * vec4( pos, 1.0 )).xyz;\n\n  gl_Position = MVP * vec4( pos, 1.0 );\n}";
},{}],"a4Wy":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying vec3 v_normal;\nvarying vec3 v_pos;\n\nuniform float _FarPlane;\n\nvec2 EncodeFloatRG( float v )\n{\n    vec2 kEncodeMul = vec2(1.0, 255.0);\n    float kEncodeBit = 1.0/255.0;\n    vec2 enc = kEncodeMul * v;\n    enc = fract (enc);\n    enc.x -= enc.y * kEncodeBit;\n    return enc;\n}\n\nvec2 EncodeNormal (vec3 n)\n{\n    float scale = 1.7777;\n    vec2 enc = n.xy / (n.z+1.0);\n    enc /= scale;\n    enc = enc*0.5+0.5;\n    return enc;\n}\n\nvoid main()\n{\n\tgl_FragColor = vec4(EncodeFloatRG(length(v_pos.z)/_FarPlane), EncodeNormal(normalize(v_normal)));\t\n}\n\n";
},{}],"VcOC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _depth_normals_vert = _interopRequireDefault(require("/shaders/depth_normals/depth_normals_vert"));

var _depth_normals_frag = _interopRequireDefault(require("/shaders/depth_normals/depth_normals_frag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DepthNormalMaterial = /*#__PURE__*/function (_THREE$ShaderMaterial) {
  _inherits(DepthNormalMaterial, _THREE$ShaderMaterial);

  var _super = _createSuper(DepthNormalMaterial);

  function DepthNormalMaterial() {
    _classCallCheck(this, DepthNormalMaterial);

    return _super.call(this, {
      uniforms: {
        _FarPlane: {
          value: 1
        }
      },
      vertexShader: _depth_normals_vert.default,
      fragmentShader: _depth_normals_frag.default
    });
  }

  _createClass(DepthNormalMaterial, [{
    key: "far_plane",
    set: function set(value) {
      this.uniforms._FarPlane.value = value;
    }
  }]);

  return DepthNormalMaterial;
}(THREE.ShaderMaterial);

exports.default = DepthNormalMaterial;
},{"/shaders/depth_normals/depth_normals_vert":"DRHE","/shaders/depth_normals/depth_normals_frag":"a4Wy"}],"pWL9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CameraManager = _interopRequireDefault(require("/CameraManager"));

var _SceneManager = _interopRequireDefault(require("/SceneManager"));

var _Screen = _interopRequireDefault(require("/Screen"));

var _ClearDepthNormalMaterial = _interopRequireDefault(require("/materials/ClearDepthNormalMaterial"));

var _DepthNormalMaterial = _interopRequireDefault(require("/materials/DepthNormalMaterial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DepthAndNormalsRenderer = /*#__PURE__*/function () {
  function DepthAndNormalsRenderer() {
    _classCallCheck(this, DepthAndNormalsRenderer);

    this.RT = new THREE.WebGLRenderTarget(_Screen.default.width, _Screen.default.height);
    this.clear_depth_normal_mat = new _ClearDepthNormalMaterial.default(1, new THREE.Vector3(0, 0, 1));
    this.depth_normal_material = new _DepthNormalMaterial.default();
  }

  _createClass(DepthAndNormalsRenderer, [{
    key: "render",
    value: function render(graphics) {
      this.__resize_RT_if_necessary();

      graphics.clear(this.RT, undefined, true, true);
      graphics.blit_clear_with_material(this.RT, this.clear_depth_normal_mat);
      this.depth_normal_material.far_plane = _CameraManager.default.current.far;
      graphics.render(undefined, undefined, this.RT, this.depth_normal_material);
    }
  }, {
    key: "__resize_RT_if_necessary",
    value: function __resize_RT_if_necessary() {
      if (this.RT.width !== _Screen.default.width || this.RT.height !== _Screen.default.height) {
        this.RT.setSize(_Screen.default.width, _Screen.default.height);
      }
    }
  }, {
    key: "render_target",
    get: function get() {
      return this.RT;
    }
  }]);

  return DepthAndNormalsRenderer;
}();

exports.default = DepthAndNormalsRenderer;
},{"/CameraManager":"XMgG","/SceneManager":"qvMM","/Screen":"JIgx","/materials/ClearDepthNormalMaterial":"bGMu","/materials/DepthNormalMaterial":"VcOC"}],"IerZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BlitMaterial = _interopRequireDefault(require("/materials/BlitMaterial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Blitter = /*#__PURE__*/function () {
  function Blitter(renderer) {
    _classCallCheck(this, Blitter);

    this.renderer = renderer;
    this._blit_scene = new THREE.Scene();
    this._blit_material = new _BlitMaterial.default();
    this._blit_quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), this._blit_material);

    this._blit_scene.add(this._blit_quad);

    this._blit_camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10000, 10000);
  }

  _createClass(Blitter, [{
    key: "blit",
    value: function blit(src, dst) {
      this._blit_quad.material = this._blit_material;
      this._blit_quad.material.uniforms._MainTex.value = src.texture;

      this._blit_quad.material.uniforms._Resolution.value.set(src.width, src.height);

      this.renderer.setRenderTarget(dst === undefined ? null : dst);
      this.renderer.render(this._blit_scene, this._blit_camera);
    }
  }, {
    key: "blit_with_material",
    value: function blit_with_material(src, dst, mat) {
      this._blit_quad.material = mat;
      this._blit_quad.material.uniforms._MainTex.value = src.texture;

      this._blit_quad.material.uniforms._Resolution.value.set(src.width, src.height);

      this.renderer.setRenderTarget(dst === undefined ? null : dst);
      this.renderer.render(this._blit_scene, this._blit_camera);
    }
  }, {
    key: "blit_clear_with_material",
    value: function blit_clear_with_material(dst_RT, mat) {
      this._blit_quad.material = mat;
      this.renderer.setRenderTarget(dst_RT === undefined ? null : dst_RT);
      this.renderer.render(this._blit_scene, this._blit_camera);
    }
  }]);

  return Blitter;
}();

exports.default = Blitter;
},{"/materials/BlitMaterial":"Ftca"}],"xMH9":[function(require,module,exports) {
"use strict";

var _Configuration = _interopRequireDefault(require("/Configuration"));

var _BaseRender = _interopRequireDefault(require("/render_mode/BaseRender"));

var _OutlineRender = _interopRequireDefault(require("/render_mode/OutlineRender"));

var _Screen = _interopRequireDefault(require("/Screen"));

var _CameraManager = _interopRequireDefault(require("/CameraManager"));

var _SceneManager = _interopRequireDefault(require("/SceneManager"));

var _UI = _interopRequireDefault(require("/UI"));

var _Capabilities = _interopRequireDefault(require("/Capabilities"));

var _DepthAndNormalsRenderer = _interopRequireDefault(require("/render_utilities/DepthAndNormalsRenderer"));

var _Blitter = _interopRequireDefault(require("/render_utilities/Blitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Graphics = /*#__PURE__*/function () {
  function Graphics() {
    _classCallCheck(this, Graphics);

    this._renderer = undefined;
    this.blitter = undefined;
    this.canvas = undefined;
    this.no_render = undefined;
    this.current_render_mode = undefined;
    this.generateDepthNormalTexture = false;
    this.depth_and_normals_renderer = undefined;
  }

  _createClass(Graphics, [{
    key: "init",
    value: function init(canvas) {
      this._renderer = new THREE.WebGLRenderer({
        antialias: false,
        preserveDrawingBuffer: true,
        alpha: true,
        canvas: canvas
      });
      this._renderer.autoClear = false;

      if (_Configuration.default.is_mobile) {
        this._renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      } else {
        this._renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 1.5), 2));
      }

      this._renderer.extensions.get('ANGLE_instanced_arrays');

      this.blitter = new _Blitter.default(this._renderer);
      this.canvas = this._renderer.domElement;
      this.no_render = new _BaseRender.default();
      this.current_render_mode = this.no_render;
      _Capabilities.default.max_anisotropy = this._renderer.capabilities.getMaxAnisotropy();
      _Capabilities.default.vertex_texture_sampler_available = this._renderer.capabilities.maxVertexTextures > 0;
      _Capabilities.default.fp_textures_available = this._renderer.capabilities.floatVertexTextures;
      this.generateDepthNormalTexture = false;
      this.depth_and_normals_renderer = new _DepthAndNormalsRenderer.default(); // let canvas = document.getElementById("tiled_canvas");
      // let ctx_2D = canvas.getContext("2d");
      // this.canvas = canvas;
      // this.ctx_2D = ctx_2D;
    }
  }, {
    key: "set_state",
    value: function set_state(new_state) {
      console.log("VIEWAPI - map render mode switch to: " + new_state.constructor.name);
      this.current_render_mode.on_exit(this, this._renderer);
      this.current_render_mode = new_state;
      this.current_render_mode.on_enter(this, this._renderer);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.generateDepthNormalTexture) {
        this.depth_and_normals_renderer.render(this);
      }

      if (_CameraManager.default.current) {
        _CameraManager.default.current.aspect = _Screen.default.aspect_ratio;

        _CameraManager.default.current.updateProjectionMatrix();

        _CameraManager.default.current.updateMatrix();

        _CameraManager.default.current.updateMatrixWorld(true);

        this.current_render_mode.render();
      }
    }
  }, {
    key: "render",
    value: function render(scene, camera, RT, override_mat) {
      this.__apply_override_material(scene, override_mat);

      this._renderer.setRenderTarget(RT === undefined ? null : RT);

      this._renderer.render(scene || _SceneManager.default.current, camera || _CameraManager.default.current);

      this.__apply_override_material(scene, undefined);
    }
  }, {
    key: "__apply_override_material",
    value: function __apply_override_material(scene, mat) {
      if (scene) scene.overrideMaterial = mat;else _SceneManager.default.current.overrideMaterial = mat;
    }
  }, {
    key: "readback_RT",
    value: function readback_RT(RT, buffer) {
      this._renderer.readRenderTargetPixels(RT, 0, 0, RT.width, RT.height, buffer);
    }
  }, {
    key: "clear",
    value: function clear(RT, camera, clear_depth, clear_stencil) {
      this._renderer.setRenderTarget(RT === undefined ? null : RT);

      if (camera) {
        this._renderer.setClearColor(camera.clear_color, camera.clear_alpha);
      }

      this._renderer.clear(camera ? true : false, // clear color
      clear_depth ? true : false, clear_stencil ? true : false);
    }
  }, {
    key: "render_ui",
    value: function render_ui(scene) {
      this._renderer.render(scene, _CameraManager.default.current);
    }
  }, {
    key: "on_resize",
    value: function on_resize() {
      var width = this.canvas.offsetWidth;
      var height = this.canvas.offsetHeight;

      _Screen.default.update_size(width, height);

      _Screen.default.update_native_size();

      this._renderer.setSize(width, height, false);

      _UI.default.resize();

      this.current_render_mode.resize(width, height);
    }
  }, {
    key: "blit",
    value: function blit(src_RT, dst_RT, mat) {
      if (mat) this.blitter.blit_with_material(src_RT, dst_RT, mat);else this.blitter.blit(src_RT, dst_RT);
    }
  }, {
    key: "blit_clear_with_material",
    value: function blit_clear_with_material(dst_RT, mat) {
      this.blitter.blit_clear_with_material(dst_RT, mat);
    }
  }, {
    key: "take_screenshot",
    value: function take_screenshot(blob_callback) {
      // let img    = this.dom.toDataURL("image/png;base64;");
      // let link = document.createElement('a');
      // // link.download = "Snapshot.png";
      // // link.href = img;
      // // link.click();
      // window.open(img,'_blank');
      // por algun motivo esto fallaba al pedir el contexto 2D, asiq lo termine poniendo en el constructor
      // let canvas = document.getElementById("tiled_canvas");
      // let ctx_2D = canvas.getContext("2d");
      var ctx = this;
      var old_width = _Screen.default.width;
      var old_height = _Screen.default.height;
      var new_width = 4096;
      var new_height = 4096;
      var tile_width = 1024;
      var tile_height = 1024;
      var divisions_x = parseInt(Math.ceil(new_width / tile_width));
      var divisions_y = parseInt(Math.ceil(new_height / tile_height));

      _Screen.default.update_size(tile_width, tile_height);

      this._renderer.setPixelRatio(1);

      this._renderer.setSize(tile_width, tile_height, false);

      this.ctx_2D.canvas.width = new_width;
      this.ctx_2D.canvas.height = new_height;
      _CameraManager.default.current.aspect = _Screen.default.aspect_ratio;

      _CameraManager.default.current.updateMatrix();

      _CameraManager.default.current.updateMatrixWorld(true);

      for (var x = 0; x < divisions_x; x++) {
        for (var y = 0; y < divisions_y; y++) {
          _CameraManager.default.current.setViewOffset(new_width, new_height, _Screen.default.width * x, _Screen.default.height * y, _Screen.default.width, _Screen.default.height);

          this.current_render_mode.render();
          this.ctx_2D.drawImage(this._renderer.domElement, _Screen.default.width * x, _Screen.default.height * y);
        }
      } // transform the result canvas into a blob
      // from them the callback turns into a ULR and download it


      this.ctx_2D.canvas.toBlob(blob_callback, "image/png;base64;");

      _CameraManager.default.current.clearViewOffset();

      _Screen.default.update_size(old_width, old_height);

      this._renderer.setPixelRatio(window.devicePixelRatio);

      this._renderer.setSize(old_width, old_height, false);

      _CameraManager.default.current.aspect = _Screen.default.aspect_ratio;

      _CameraManager.default.current.updateMatrix();

      _CameraManager.default.current.updateMatrixWorld(true);
    }
  }, {
    key: "download_screenshot",
    value: function download_screenshot(blob) {
      console.log("el blob", blob);
      var link = document.createElement('a');
      link.download = "Snapshot.png";
      link.href = URL.createObjectURL(blob);
      link.click();

      link.onclick = function () {
        requestAnimationFrame(function () {
          URL.revokeObjectURL(a.href);
        });
        a.removeAttribute('href');
      };
    }
  }, {
    key: "dom_element",
    get: function get() {
      return this._renderer.domElement;
    }
  }, {
    key: "depth_normals_RT",
    get: function get() {
      return this.depth_and_normals_renderer.render_target;
    }
  }]);

  return Graphics;
}();

var graphics = new Graphics();
module.exports = graphics;
},{"/Configuration":"RyjO","/render_mode/BaseRender":"gDca","/render_mode/OutlineRender":"F9Xn","/Screen":"JIgx","/CameraManager":"XMgG","/SceneManager":"qvMM","/UI":"yntx","/Capabilities":"hZlU","/render_utilities/DepthAndNormalsRenderer":"pWL9","/render_utilities/Blitter":"IerZ"}],"wyL4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Mesh2 = _interopRequireDefault(require("/Mesh"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Cube = /*#__PURE__*/function (_Mesh) {
  _inherits(Cube, _Mesh);

  var _super = _createSuper(Cube);

  function Cube(size, segments, color) {
    _classCallCheck(this, Cube);

    size = size || new THREE.Vector3(1, 1, 1);
    segments = segments || new THREE.Vector3(1, 1, 1);
    color = color || 0xff0000;
    var geometry = new THREE.BoxGeometry(size.x, size.y, size.z, segments.x, segments.y, segments.z);
    var material = new THREE.MeshBasicMaterial({
      color: color
    });
    return _super.call(this, geometry, material);
  }

  return Cube;
}(_Mesh2.default);

exports.default = Cube;
},{"/Mesh":"ezmQ"}],"J9UP":[function(require,module,exports) {
"use strict";

var _AxisHelper = _interopRequireDefault(require("/components/AxisHelper"));

var _basic_color_vert = _interopRequireDefault(require("/shaders/basic_color/basic_color_vert"));

var _basic_color_frag = _interopRequireDefault(require("/shaders/basic_color/basic_color_frag"));

var _SceneManager = _interopRequireDefault(require("/SceneManager"));

var _Graphics = _interopRequireDefault(require("/Graphics"));

var _Cube = _interopRequireDefault(require("/primitives/Cube"));

var _Sphere = _interopRequireDefault(require("/primitives/Sphere"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Debug = /*#__PURE__*/function () {
  function Debug() {
    _classCallCheck(this, Debug);

    this.Vector3_one = new THREE.Vector3(1, 1, 1);
    this.Vector3_zero = new THREE.Vector3(0, 0, 0);
    this.canvas_renderer = undefined;
    this.rt_debug = undefined;
  }

  _createClass(Debug, [{
    key: "init",
    value: function init(webgl) {
      this.webgl = webgl;
      this.ctx = undefined; // var cln = webgl.dom.cloneNode(false);
      // cln.id = "canvas_debug";
      // $(cln).css("position", "absolute");
      // webgl.dom.parentElement.insertBefore(cln, webgl.dom);
      // this.ctx = cln.getContext('2d');
      // this.ctx.clearRect(0, 0, cln.width, cln.height);
      // this.ctx.fillStyle =  "rgba(255, 0, 0, 1)";
    }
  }, {
    key: "draw_axis",
    value: function draw_axis() {
      var axis = new _AxisHelper.default();

      _SceneManager.default.current.add(axis);

      return axis;
    }
  }, {
    key: "set_debug_RT",
    value: function set_debug_RT(RT) {
      this.rt_debug = RT;
    }
  }, {
    key: "draw_rectangle",
    value: function draw_rectangle(position_2d, width, height, color) {
      width = width || 100;
      height = height || 100;
      this.ctx.fillStyle = color || "rgba(255, 0, 0, 1)";
      this.ctx.fillRect(position_2d.x - width / 2, this.ctx.canvas.height - position_2d.y - height / 2, width, height);
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.ctx) this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  }, {
    key: "draw_line_2D",
    value: function draw_line_2D(from, to, color) {
      this.ctx.strokeStyle = color || "rgba(255, 0, 0, 1)";
      this.ctx.beginPath();
      this.ctx.moveTo(from.x, from.y);
      this.ctx.lineTo(to.x, to.y);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }, {
    key: "draw_line",
    value: function draw_line(from, to, color) {
      color = color || 0xff0000;
      var mat = new THREE.LineBasicMaterial({
        color: color
      });
      var geo = new THREE.Geometry();
      geo.vertices.push(from);
      geo.vertices.push(to);
      var line = new THREE.Line(geo, mat);

      _SceneManager.default.current.add(line);

      return line;
    }
  }, {
    key: "draw_cube",
    value: function draw_cube(pos, size, color) {
      size = size || 1;
      color = color || 0xff0000;
      pos = pos || new THREE.Vector3();
      var cube = new _Cube.default(new THREE.Vector3(size, size, size), undefined, color);
      cube.position.copy(pos);

      _SceneManager.default.current.add(cube);

      return cube;
    }
  }, {
    key: "draw_oriented_cube",
    value: function draw_oriented_cube(from, to) {
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#FF0000";
      var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.1;
      var size = from.distanceTo(to);
      var cube = new _Cube.default(new THREE.Vector3(depth, height, size), undefined, color);
      var center = to.clone().sub(from).multiplyScalar(0.5);
      var forward_dir = center.clone().normalize();
      center.add(from);
      cube.position.copy(center);
      var up = new THREE.Vector3(0, 1, 0);
      var forward = forward_dir.clone();
      var right = forward.clone().cross(up); // cube.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right,up,forward));

      cube.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), forward_dir);

      _SceneManager.default.current.add(cube);

      return cube;
    }
  }, {
    key: "draw_plane",
    value: function draw_plane(width, height, color) {
      var geometry = new THREE.PlaneGeometry(width, height);
      var material = new THREE.ShaderMaterial({
        uniforms: {
          _Color: {
            value: new THREE.Vector4(0, 1, 0, 0.2)
          }
        },
        vertexShader: _basic_color_vert.default,
        fragmentShader: _basic_color_frag.default,
        transparent: true,
        depthWrite: false
      });
      var plane = new THREE.Mesh(geometry, material);
      plane.renderOrder = -10000;

      _SceneManager.default.current.add(plane);

      return plane;
    }
  }, {
    key: "draw_empty_cube",
    value: function draw_empty_cube(pos, size, color) {
      size = size || 1;
      color = color || 0xff0000;
      var box = new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(), new THREE.Vector3(size, size, size));
      var helper = new THREE.Box3Helper(box, color);
      helper.position.copy(pos || new THREE.Vector3());
      return helper;
    }
  }, {
    key: "draw_sphere",
    value: function draw_sphere(pos, size, color) {
      size = size || 1;
      color = color || 0xff0000;
      pos = pos || new THREE.Vector3();
      var sphere = new _Sphere.default(size, color);
      sphere.position.copy(pos);

      _SceneManager.default.current.add(sphere);

      return sphere;
    }
  }, {
    key: "draw_sphere_helper",
    value: function draw_sphere_helper(sphere, color) {
      color = color || 0xff0000;
      var geometry = new THREE.SphereGeometry(sphere.radius, 32, 32);
      var material = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide
      });
      var sphere = new THREE.Mesh(geometry, material);

      _SceneManager.default.current.add(sphere);
    }
  }, {
    key: "draw_math_sphere",
    value: function draw_math_sphere(sphere) {
      var geometry = new THREE.SphereGeometry(sphere.radius, 32, 32);
      var material = new THREE.ShaderMaterial({
        uniforms: {
          _Color: {
            value: new THREE.Vector4(1, 0, 0, 0.2)
          }
        },
        vertexShader: _basic_color_vert.default,
        fragmentShader: _basic_color_frag.default,
        transparent: true
      }); // var material = new THREE.MeshBasicMaterial( {color: 0xff0000, transparent = true} );

      var sphere1 = new THREE.Mesh(geometry, material);
      sphere1.position.copy(sphere.center);

      _SceneManager.default.current.add(sphere1);
    }
  }, {
    key: "draw_bounding_box",
    value: function draw_bounding_box(bb) {
      var helper = new THREE.Box3Helper(bb, 0xffff00);

      _SceneManager.default.current.add(helper);
    }
  }, {
    key: "draw_curve",
    value: function draw_curve(curve, options) {
      var offset = new THREE.Vector3(0, 0, 0);
      if (options) offset.y = options.offset || 0;

      for (var i = 0; i < curve.length - 1; i++) {
        this.draw_line(curve[i].clone().add(offset), curve[i + 1].clone().add(offset));
      }
    }
  }]);

  return Debug;
}();

var DEBUG = new Debug();
module.exports = DEBUG;
},{"/components/AxisHelper":"xAef","/shaders/basic_color/basic_color_vert":"QfnR","/shaders/basic_color/basic_color_frag":"bHqx","/SceneManager":"qvMM","/Graphics":"xMH9","/primitives/Cube":"wyL4","/primitives/Sphere":"sPjl"}],"Zz8J":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CameraManager = _interopRequireDefault(require("/CameraManager"));

var _SceneManager = _interopRequireDefault(require("/SceneManager"));

var _Screen = _interopRequireDefault(require("/Screen"));

var _BaseRender2 = _interopRequireDefault(require("/render_mode/BaseRender"));

var _Graphics = _interopRequireDefault(require("/Graphics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NormalRender = /*#__PURE__*/function (_BaseRender) {
  _inherits(NormalRender, _BaseRender);

  var _super = _createSuper(NormalRender);

  function NormalRender() {
    _classCallCheck(this, NormalRender);

    return _super.call(this);
  }

  _createClass(NormalRender, [{
    key: "render",
    value: function render() {
      _Graphics.default.clear(undefined, _CameraManager.default.current, true, true);

      _Graphics.default.render(_SceneManager.default.current, _CameraManager.default.current);
    }
  }]);

  return NormalRender;
}(_BaseRender2.default);

exports.default = NormalRender;
},{"/CameraManager":"XMgG","/SceneManager":"qvMM","/Screen":"JIgx","/render_mode/BaseRender":"gDca","/Graphics":"xMH9"}],"iUFL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PerspectiveCamera = /*#__PURE__*/function (_THREE$PerspectiveCam) {
  _inherits(PerspectiveCamera, _THREE$PerspectiveCam);

  var _super = _createSuper(PerspectiveCamera);

  function PerspectiveCamera(fov, aspect, near, far) {
    var _this;

    _classCallCheck(this, PerspectiveCamera);

    _this = _super.call(this, fov, aspect, near, far);
    _this.clear_color = new THREE.Color("#000000");
    _this.clear_alpha = 1;
    return _this;
  }

  return PerspectiveCamera;
}(THREE.PerspectiveCamera);

exports.default = PerspectiveCamera;
},{}],"WHWR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GeometryBatch = /*#__PURE__*/function () {
  function GeometryBatch(geometry, batch_width) {
    _classCallCheck(this, GeometryBatch);

    this.geometry = geometry;
    this.material = undefined;
    this.uniforms = {};
    this.batch_width = batch_width;
    this.data_textures = [];
    this.object_names = undefined;
    this.zero_offset = new THREE.Vector2();
    this.write_offset = new THREE.Vector2();
    this.uniform_dirty_count = 0;
    this.tmp_uploaded_data_count = 0;
  }

  _createClass(GeometryBatch, [{
    key: "init",
    value: function init(object_names, vert_shader, frag_shader) {
      this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: vert_shader,
        fragmentShader: frag_shader
      });
      this.object_names = object_names;
    }
  }, {
    key: "add_global_uniform",
    value: function add_global_uniform(name, data) {
      this.uniforms[name] = {
        value: data
      };
      this.material.needsUpdate = true;
    }
  }, {
    key: "set_global_uniform",
    value: function set_global_uniform(name, data) {
      this.uniforms[name].value = data;
    }
  }, {
    key: "add_object_uniform_v3",
    value: function add_object_uniform_v3(uniform_name, default_value_v3) {
      var src_tex = this.__create_rgb_texture(this.batch_width);

      var dst_tex = this.__create_rgb_texture(this.batch_width);

      var one_pixel_tex = this.__create_rgb_texture(1);

      var new_data_tex = this.__add_data_texture(uniform_name, src_tex, dst_tex, one_pixel_tex);

      if (default_value_v3) this.__flood_data_texture_rgb(new_data_tex, default_value_v3);
    }
  }, {
    key: "add_object_uniform_v4",
    value: function add_object_uniform_v4(uniform_name, default_value_v4) {
      var src_tex = this.__create_rgba_texture(this.batch_width);

      var dst_tex = this.__create_rgba_texture(this.batch_width);

      var one_pixel_tex = this.__create_rgba_texture(1);

      var new_data_tex = this.__add_data_texture(uniform_name, src_tex, dst_tex, one_pixel_tex);

      if (default_value_v4) this.__flood_data_texture_rgba(new_data_tex, default_value_v4);
    }
  }, {
    key: "add_object_uniform_v4_float",
    value: function add_object_uniform_v4_float(uniform_name, default_value_v4) {
      var src_tex = this.__create_rgba_float_texture(this.batch_width);

      var dst_tex = this.__create_rgba_float_texture(this.batch_width);

      var one_pixel_tex = this.__create_rgba_float_texture(1);

      var new_data_tex = this.__add_data_texture(uniform_name, src_tex, dst_tex, one_pixel_tex);

      if (default_value_v4) this.__flood_data_texture_rgba(new_data_tex, default_value_v4);
    }
  }, {
    key: "set_object_uniform_v3",
    value: function set_object_uniform_v3(object_name, uniform_name, vector3, use_r, use_g, use_b) {
      var obj_index = this.__get_object_index(object_name);

      var data_texture = this.__get_data_texture(uniform_name);

      this.__set_pixel_rgb(data_texture.src, obj_index, vector3, use_r, use_g, use_b);

      this.__set_pixel_rgb(data_texture.one_pixel, 0, vector3, use_r, use_g, use_b);

      data_texture.last_accessed_index = obj_index;
      data_texture.dirty_count++;
    }
  }, {
    key: "set_object_uniform_v4",
    value: function set_object_uniform_v4(object_name, uniform_name, vector4, use_r, use_g, use_b, use_a) {
      var obj_index = this.__get_object_index(object_name);

      var data_texture = this.__get_data_texture(uniform_name);

      this.__set_pixel_rgba(data_texture.src, obj_index, vector4, use_r, use_g, use_b, use_a);

      this.__set_pixel_rgba(data_texture.one_pixel, 0, vector4, use_r, use_g, use_b, use_a);

      data_texture.last_accessed_index = obj_index;
      data_texture.dirty_count++;
    }
  }, {
    key: "upload_texture_data",
    value: function upload_texture_data(renderer, upload_budget) {
      for (var i = 0; i < this.data_textures.length; i++) {
        if (upload_budget > 0 && this.data_textures[i].dirty_count > 0) {
          if (this.data_textures[i].dirty_count === 1) this.__partial_texture_data_upload(renderer, this.data_textures[i]);
          if (this.data_textures[i].dirty_count > 1) this.__full_texture_data_upload(renderer, this.data_textures[i]);
          this.data_textures[i].dirty_count = 0;
          upload_budget--;
        }
      }
    }
  }, {
    key: "get_uniform_dirty_count",
    value: function get_uniform_dirty_count() {
      this.uniform_dirty_count = 0;

      for (var i = 0; i < this.data_textures.length; i++) {
        if (this.data_textures[i].dirty_count > 0) this.uniform_dirty_count++;
      }

      return this.uniform_dirty_count;
    }
  }, {
    key: "__full_texture_data_upload",
    value: function __full_texture_data_upload(renderer, texture_data) {
      // console.log("full texture update of"+ texture_data.name);
      texture_data.dst.needsUpdate = true;
      renderer.copyTextureToTexture(this.zero_offset, texture_data.src, texture_data.dst);
    }
  }, {
    key: "__partial_texture_data_upload",
    value: function __partial_texture_data_upload(renderer, texture_data) {
      // console.log("partial texture update"+ texture_data.name);
      var index = texture_data.last_accessed_index;
      if (index === -1) return;
      this.write_offset.y = Math.floor(index / this.batch_width);
      this.write_offset.x = index - this.batch_width * this.write_offset.y;
      renderer.copyTextureToTexture(this.write_offset, texture_data.one_pixel, texture_data.dst);
    }
  }, {
    key: "get_mesh",
    value: function get_mesh() {
      return new THREE.Mesh(this.geometry, this.material);
    }
  }, {
    key: "__set_pixel_rgb",
    value: function __set_pixel_rgb(data_texture, index, vector3, use_r, use_g, use_b) {
      if (use_r) data_texture.image.data[index * 3 + 0] = vector3.x;
      if (use_g) data_texture.image.data[index * 3 + 1] = vector3.y;
      if (use_b) data_texture.image.data[index * 3 + 2] = vector3.z;
    }
  }, {
    key: "__set_pixel_rgba",
    value: function __set_pixel_rgba(data_texture, index, vector4, use_r, use_g, use_b, use_a) {
      if (use_r) data_texture.image.data[index * 4 + 0] = vector4.x;
      if (use_g) data_texture.image.data[index * 4 + 1] = vector4.y;
      if (use_b) data_texture.image.data[index * 4 + 2] = vector4.z;
      if (use_a) data_texture.image.data[index * 4 + 3] = vector4.w;
    }
  }, {
    key: "__flood_data_texture_rgb",
    value: function __flood_data_texture_rgb(data_texture, v3) {
      for (var i = 0; i < this.batch_width * this.batch_width; i++) {
        this.__set_pixel_rgb(data_texture.src, i, v3, true, true, true);

        data_texture.dirty_count++;
      }
    }
  }, {
    key: "__flood_data_texture_rgba",
    value: function __flood_data_texture_rgba(data_texture, v4) {
      for (var i = 0; i < this.batch_width * this.batch_width; i++) {
        this.__set_pixel_rgba(data_texture.src, i, v4, true, true, true, true);

        data_texture.dirty_count++;
      }
    }
  }, {
    key: "__create_rgb_texture",
    value: function __create_rgb_texture(width) {
      var data = new Uint8Array(3 * width * width);
      return new THREE.DataTexture(data, width, width, THREE.RGBFormat);
    }
  }, {
    key: "__create_rgba_texture",
    value: function __create_rgba_texture(width) {
      var data = new Uint8Array(4 * width * width);
      return new THREE.DataTexture(data, width, width, THREE.RGBAFormat);
    }
  }, {
    key: "__create_rgba_float_texture",
    value: function __create_rgba_float_texture(width) {
      var data = new Float32Array(4 * width * width);
      return new THREE.DataTexture(data, width, width, THREE.RGBA, THREE.FloatType);
    }
  }, {
    key: "__get_data_texture",
    value: function __get_data_texture(uniform_name) {
      for (var i = 0; i < this.data_textures.length; i++) {
        if (this.data_textures[i].name === uniform_name) return this.data_textures[i];
      }

      conosle.error("Data texture " + uniform_name + " does not exist");
      return undefined;
    }
  }, {
    key: "__get_object_index",
    value: function __get_object_index(name) {
      for (var i = 0; i < this.object_names.length; i++) {
        if (this.object_names[i] === name) return i;
      }

      console.error("the name " + name + " is not contained in this batch");
      return undefined;
    }
  }, {
    key: "__add_data_texture",
    value: function __add_data_texture(uniform_name, src_texture, dst_texture, one_pixel_text) {
      dst_texture.needsUpdate = true;
      this.data_textures.push({
        name: uniform_name,
        src: src_texture,
        dst: dst_texture,
        one_pixel: one_pixel_text,
        last_accessed_index: -1,
        dirty_count: 0
      });
      this.uniforms[uniform_name] = {
        value: dst_texture
      };
      return this.data_textures[this.data_textures.length - 1];
    }
  }, {
    key: "dispose",
    value: function dispose() {
      for (var i = 0; i < this.data_textures.length; i++) {
        this.data_textures[i].src.dispose();
        this.data_textures[i].dst.dispose();
        this.data_textures[i].one_pixel.dispose();
      }
    }
  }]);

  return GeometryBatch;
}();

exports.default = GeometryBatch;
},{}],"VduU":[function(require,module,exports) {
"use strict";

var _GeometryBatch = _interopRequireDefault(require("/static_batcher/GeometryBatch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GeometryBatcher = /*#__PURE__*/function () {
  function GeometryBatcher() {
    _classCallCheck(this, GeometryBatcher);

    this.batches = [];
  }

  _createClass(GeometryBatcher, [{
    key: "batch",
    value: function batch(buffer_geometries) {
      var attr_accessor_uvs = [];
      var texture_width = THREE.Math.ceilPowerOfTwo(Math.sqrt(buffer_geometries.length)); // console.log("Store count: " + buffer_geometries.length + ", Texture size: " +texture_width);

      this.__init_uv_array(attr_accessor_uvs, texture_width);

      var uv_index = 0;

      for (var i = 0; i < buffer_geometries.length; i++) {
        var vertex_count = buffer_geometries[i].getAttribute('position').count;
        var y = Math.floor(i / texture_width);
        var x = i - texture_width * y;

        for (var count = 0; count < vertex_count; count++) {
          attr_accessor_uvs[uv_index] = x / texture_width + 0.5 / texture_width;
          attr_accessor_uvs[uv_index + 1] = y / texture_width + 0.5 / texture_width;
          uv_index += 2;
        }
      }

      var buffer_attribute = new THREE.BufferAttribute(new Float32Array(attr_accessor_uvs), 2);
      var buffer_geometry = THREE.BufferGeometryUtils.mergeBufferGeometries(buffer_geometries);
      buffer_geometry.addAttribute('attr_accessor_uv', buffer_attribute);
      this.batches.push(new _GeometryBatch.default(buffer_geometry, texture_width));
      return this.batches[this.batches.length - 1];
    }
  }, {
    key: "upload_texture_data",
    value: function upload_texture_data(renderer) {
      for (var i = 0; i < this.batches.length; i++) {
        this.batches[i].upload_texture_data(renderer, 1);
      }
    }
  }, {
    key: "__init_uv_array",
    value: function __init_uv_array(uvs, texture_width) {
      for (var i = 0; i < texture_width * texture_width * 2; i++) {
        uvs.push(0);
      }
    }
  }]);

  return GeometryBatcher;
}();

var geometry_batcher = new GeometryBatcher();
module.exports = geometry_batcher;
},{"/static_batcher/GeometryBatch":"WHWR"}],"QYq1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Time = _interopRequireDefault(require("/Time"));

var _Input = _interopRequireDefault(require("/Input"));

var _UI = _interopRequireDefault(require("/UI"));

var _Debug = _interopRequireDefault(require("/Debug"));

var _GeometryBatcher = _interopRequireDefault(require("/static_batcher/GeometryBatcher"));

var _BaseApplication = _interopRequireDefault(require("/BaseApplication"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RenderLoop = /*#__PURE__*/function () {
  function RenderLoop(target_application, renderer) {
    _classCallCheck(this, RenderLoop);

    target_application = target_application || new _BaseApplication.default();
    this._frame_id = -1;
    this.target_application = target_application;
    this.renderer = renderer;
    this.is_running = true;
  }

  _createClass(RenderLoop, [{
    key: "update",
    value: function update() {
      if (!this.is_running) return;

      _Time.default.__update();

      _Debug.default.clear(); //###### START CYCLE ######


      this.target_application.update();
      this.target_application.on_pre_render();
      this.renderer.update(); // render scene

      _UI.default.update(); // update after new camera matrix has been calculated


      _UI.default.render(this.renderer); // render ui layer on top


      this.target_application.on_post_render();
      if (_Debug.default.rt_debug) this.renderer.blit(_Debug.default.rt_debug); //###### END  CYCLE #######

      _Input.default.clear();

      _UI.default.clear(); //   GeometryBatcher.upload_texture_data(this.renderer);


      this._frame_id = requestAnimationFrame(this.update.bind(this));
    }
  }, {
    key: "start",
    value: function start() {
      this.target_application.start();
      this.update();
      this.is_running = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.is_running = false;
      this.target_application.end();
      cancelAnimationFrame(this._frame_id);
    }
  }]);

  return RenderLoop;
}();

exports.default = RenderLoop;
},{"/Time":"wewU","/Input":"k3P6","/UI":"yntx","/Debug":"J9UP","/static_batcher/GeometryBatcher":"VduU","/BaseApplication":"v0GF"}],"mqLz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractLoader = /*#__PURE__*/function () {
  function AbstractLoader(resource_id, url) {
    _classCallCheck(this, AbstractLoader);

    this.progress = 0;
    this.resource_id = resource_id;
    this.url = url;
    this.has_finished = false;
    this.has_error = false;
    this.error_message = "none";
  }

  _createClass(AbstractLoader, [{
    key: "__update_progress",
    value: function __update_progress(value) {
      this.progress = value;
    }
  }, {
    key: "__loading_ended",
    value: function __loading_ended() {
      this.has_finished = true;
    }
  }, {
    key: "__set_error",
    value: function __set_error(message) {
      this.has_error = true;
      this.error_message = message;
    }
  }, {
    key: "print_error",
    value: function print_error() {
      console.error("Error while loading " + this.resource_id + "\n\t path: " + this.url + "\n\t\t" + this.error_message);
    }
  }, {
    key: "load",
    value: function load(resource_container) {}
  }]);

  return AbstractLoader;
}();

exports.default = AbstractLoader;
},{}],"ged4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractLoader2 = _interopRequireDefault(require("/resource_loader/AbstractLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextureLoader = /*#__PURE__*/function (_AbstractLoader) {
  _inherits(TextureLoader, _AbstractLoader);

  var _super = _createSuper(TextureLoader);

  function TextureLoader(resource_id, url) {
    var _this;

    _classCallCheck(this, TextureLoader);

    _this = _super.call(this, resource_id, url);
    _this.loader = new THREE.TextureLoader();
    return _this;
  }

  _createClass(TextureLoader, [{
    key: "load",
    value: function load(resource_container) {
      var ctx = this;
      this.loader.load(this.url, function (image) {
        resource_container.set_resource(ctx.resource_id, image);

        ctx.__update_progress(1);

        ctx.__loading_ended();
      }, undefined, function () {
        ctx.__set_error("Image could not  be loaded. Maybe wrong name or path, I don't know" + '¯\\_(ツ)_/¯');

        ctx.__loading_ended();
      });
    }
  }]);

  return TextureLoader;
}(_AbstractLoader2.default);

exports.default = TextureLoader;
},{"/resource_loader/AbstractLoader":"mqLz"}],"DPLo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractLoader2 = _interopRequireDefault(require("/resource_loader/AbstractLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GLTFLoader = /*#__PURE__*/function (_AbstractLoader) {
  _inherits(GLTFLoader, _AbstractLoader);

  var _super = _createSuper(GLTFLoader);

  function GLTFLoader(resource_id, url) {
    var _this;

    _classCallCheck(this, GLTFLoader);

    _this = _super.call(this, resource_id, url);
    _this.loader = new THREE.GLTFLoader();
    return _this;
  }

  _createClass(GLTFLoader, [{
    key: "load",
    value: function load(resource_container) {
      var ctx = this;
      this.loader.load(this.url, function (gltf) {
        resource_container.set_resource(ctx.resource_id, gltf);

        ctx.__update_progress(1);

        ctx.__loading_ended();
      }, function (xhr) {
        ctx.__update_progress(xhr.loaded / xhr.total);
      }, function (msg) {
        ctx.__set_error(msg + "\n\n\t If the error says something about unexpected token < in JSON then the probably the problem is related to the file not being found. Check the name and path of the resource");

        ctx.__loading_ended();
      });
    }
  }]);

  return GLTFLoader;
}(_AbstractLoader2.default);

exports.default = GLTFLoader;
},{"/resource_loader/AbstractLoader":"mqLz"}],"k6LD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractLoader2 = _interopRequireDefault(require("/resource_loader/AbstractLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DAELoader = /*#__PURE__*/function (_AbstractLoader) {
  _inherits(DAELoader, _AbstractLoader);

  var _super = _createSuper(DAELoader);

  function DAELoader(resource_id, url) {
    var _this;

    _classCallCheck(this, DAELoader);

    _this = _super.call(this, resource_id, url);
    _this.loader = new THREE.ColladaLoader();
    return _this;
  }

  _createClass(DAELoader, [{
    key: "load",
    value: function load(resource_container) {
      var ctx = this;
      this.loader.load(this.url, function (gltf) {
        resource_container.set_resource(ctx.resource_id, gltf);

        ctx.__update_progress(1);

        ctx.__loading_ended();
      }, function (xhr) {
        ctx.__update_progress(xhr.loaded / xhr.total);
      }, function (msg) {
        ctx.__set_error(msg + "\n\n\t If the error says something about unexpected token < in JSON then the probably the problem is related to the file not being found. Check the name and path of the resource");

        ctx.__loading_ended();
      });
    }
  }]);

  return DAELoader;
}(_AbstractLoader2.default);

exports.default = DAELoader;
},{"/resource_loader/AbstractLoader":"mqLz"}],"X88z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractLoader2 = _interopRequireDefault(require("/resource_loader/AbstractLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextLoader = /*#__PURE__*/function (_AbstractLoader) {
  _inherits(TextLoader, _AbstractLoader);

  var _super = _createSuper(TextLoader);

  function TextLoader(resource_id, url) {
    var _this;

    _classCallCheck(this, TextLoader);

    _this = _super.call(this, resource_id, url);
    _this.loader = new THREE.FileLoader();
    return _this;
  }

  _createClass(TextLoader, [{
    key: "load",
    value: function load(resource_container) {
      var ctx = this;
      this.loader.load(this.url, function (gltf) {
        resource_container.set_resource(ctx.resource_id, gltf);

        ctx.__update_progress(1);

        ctx.__loading_ended();
      }, function (xhr) {
        ctx.__update_progress(xhr.loaded / xhr.total);
      }, function (msg) {
        ctx.__set_error(msg);

        ctx.__loading_ended();
      });
    }
  }]);

  return TextLoader;
}(_AbstractLoader2.default);

exports.default = TextLoader;
},{"/resource_loader/AbstractLoader":"mqLz"}],"jYGB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractLoader2 = _interopRequireDefault(require("/resource_loader/AbstractLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CubemapLoader = /*#__PURE__*/function (_AbstractLoader) {
  _inherits(CubemapLoader, _AbstractLoader);

  var _super = _createSuper(CubemapLoader);

  function CubemapLoader(resource_id, url) {
    var _this;

    _classCallCheck(this, CubemapLoader);

    _this = _super.call(this, resource_id, url);
    _this.loader = new THREE.CubeTextureLoader();
    _this.urls = [];

    _this.urls.push(url);

    _this.urls.push(url);

    _this.urls.push(url);

    _this.urls.push(url);

    _this.urls.push(url);

    _this.urls.push(url);

    return _this;
  }

  _createClass(CubemapLoader, [{
    key: "load",
    value: function load(resource_container) {
      var ctx = this;
      this.loader.load(this.urls, function (image) {
        resource_container.set_resource(ctx.resource_id, image);

        ctx.__update_progress(1);

        ctx.__loading_ended();
      }, undefined, function (error) {
        ctx.__set_error("Image could not  be loaded. Maybe wrong name or path, I don't know" + '¯\\_(ツ)_/¯', error);

        ctx.__loading_ended();
      });
    }
  }]);

  return CubemapLoader;
}(_AbstractLoader2.default);

exports.default = CubemapLoader;
},{"/resource_loader/AbstractLoader":"mqLz"}],"w983":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractLoader2 = _interopRequireDefault(require("/resource_loader/AbstractLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AudioLoader = /*#__PURE__*/function (_AbstractLoader) {
  _inherits(AudioLoader, _AbstractLoader);

  var _super = _createSuper(AudioLoader);

  function AudioLoader(resource_id, url, listener, loop, volume) {
    var _this;

    _classCallCheck(this, AudioLoader);

    _this = _super.call(this, resource_id, url);
    _this.loader = new THREE.AudioLoader();
    _this.loop = loop;
    _this.listener = listener;
    _this.voluem = volume;
    return _this;
  }

  _createClass(AudioLoader, [{
    key: "load",
    value: function load(resource_container) {
      var _this2 = this;

      var ctx = this;
      var sound = new THREE.Audio(this.listener);
      this.loader.load(this.url, function (audio) {
        sound.setBuffer(audio);
        sound.setLoop(_this2.loop);
        sound.setVolume(_this2.voluem);
        resource_container.set_resource(ctx.resource_id, sound);

        if (!resource_container.get_resource('audio_listener')) {
          resource_container.set_resource('audio_listener', _this2.listener);
        }

        ctx.__update_progress(1);

        ctx.__loading_ended();
      }, undefined, function (error) {
        ctx.__set_error("Audio could not be loaded. Maybe wrong name or path, I don't know" + '¯\\_(ツ)_/¯', error);

        ctx.__loading_ended();
      });
    }
  }]);

  return AudioLoader;
}(_AbstractLoader2.default);

exports.default = AudioLoader;
},{"/resource_loader/AbstractLoader":"mqLz"}],"NvAk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractLoader2 = _interopRequireDefault(require("/resource_loader/AbstractLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var JSONLoader = /*#__PURE__*/function (_AbstractLoader) {
  _inherits(JSONLoader, _AbstractLoader);

  var _super = _createSuper(JSONLoader);

  function JSONLoader(resource_id, url, username, password) {
    var _this;

    _classCallCheck(this, JSONLoader);

    _this = _super.call(this, resource_id, url);
    _this.loader = new THREE.FileLoader();
    _this.username = username;
    _this.password = password;
    _this.resource_container = undefined;
    return _this;
  }

  _createClass(JSONLoader, [{
    key: "load",
    value: function load(resource_container) {
      // let headers = new Headers();
      var headers = {};
      this.resource_container = resource_container;

      if (this.username !== undefined && this.password !== undefined) {
        headers['Authorization'] = "Basic ".concat(btoa("".concat(this.username, ":").concat(this.password)));
      }

      fetch(this.url, {
        headers: headers
      }).then(this.__parse_to_json.bind(this)).then(this.__set_resource.bind(this));
    }
  }, {
    key: "__parse_to_json",
    value: function __parse_to_json(response) {
      return response.json();
    }
  }, {
    key: "__set_resource",
    value: function __set_resource(data) {
      this.resource_container.set_resource(this.resource_id, data);

      this.__update_progress(1);

      this.__loading_ended();
    }
  }]);

  return JSONLoader;
}(_AbstractLoader2.default);

exports.default = JSONLoader;
},{"/resource_loader/AbstractLoader":"mqLz"}],"HJ6F":[function(require,module,exports) {
"use strict";

var _EventManager = _interopRequireDefault(require("/EventManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResourceContainer = /*#__PURE__*/function () {
  function ResourceContainer() {
    _classCallCheck(this, ResourceContainer);

    this.resources = {};
  }

  _createClass(ResourceContainer, [{
    key: "set_resource",
    value: function set_resource(name, resource) {
      this.resources[name] = resource;

      _EventManager.default.fire_resource_loaded({
        name: name,
        value: resource
      });
    }
  }, {
    key: "get_resource",
    value: function get_resource(name) {
      return this.resources[name];
    }
  }]);

  return ResourceContainer;
}();

var resource_container = new ResourceContainer();
module.exports = resource_container;
},{"/EventManager":"pJqg"}],"gkjv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TextureLoader = _interopRequireDefault(require("/resource_loader/TextureLoader"));

var _GLTFLoader = _interopRequireDefault(require("/resource_loader/GLTFLoader"));

var _DAELoader = _interopRequireDefault(require("/resource_loader/DAELoader"));

var _TextLoader = _interopRequireDefault(require("/resource_loader/TextLoader"));

var _CubemapLoader = _interopRequireDefault(require("/resource_loader/CubemapLoader"));

var _AudioLoader = _interopRequireDefault(require("/resource_loader/AudioLoader"));

var _JSONLoader = _interopRequireDefault(require("/resource_loader/JSONLoader"));

var _ResourceContainer = _interopRequireDefault(require("/ResourceContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResourceBatch = /*#__PURE__*/function () {
  function ResourceBatch(batch_name) {
    _classCallCheck(this, ResourceBatch);

    this.resource_loaders = [];
    this.batch_name = batch_name || "unnamed batch";
  }

  _createClass(ResourceBatch, [{
    key: "add_texture",
    value: function add_texture(resource_id, url) {
      this.resource_loaders.push(new _TextureLoader.default(resource_id, url));
    }
  }, {
    key: "add_gltf",
    value: function add_gltf(resource_id, url) {
      this.resource_loaders.push(new _GLTFLoader.default(resource_id, url));
    }
  }, {
    key: "add_dae",
    value: function add_dae(resource_id, url) {
      this.resource_loaders.push(new _DAELoader.default(resource_id, url));
    }
  }, {
    key: "add_text",
    value: function add_text(resource_id, url) {
      this.resource_loaders.push(new _TextLoader.default(resource_id, url));
    }
  }, {
    key: "add_cubemap",
    value: function add_cubemap(resource_id, url) {
      this.resource_loaders.push(new _CubemapLoader.default(resource_id, url));
    }
  }, {
    key: "add_audio",
    value: function add_audio(resource_id, url, listener, loop, volume) {
      this.resource_loaders.push(new _AudioLoader.default(resource_id, url, listener, loop, volume));
    }
  }, {
    key: "add_json",
    value: function add_json(resource_id, url, username, password) {
      this.resource_loaders.push(new _JSONLoader.default(resource_id, url, username, password));
    }
  }, {
    key: "load",
    value: function load(resource_container) {
      for (var i = 0; i < this.resource_loaders.length; i++) {
        this.resource_loaders[i].load(resource_container || _ResourceContainer.default);
      }
    }
  }, {
    key: "print_errors",
    value: function print_errors() {
      console.error("Batch <" + this.batch_name + "> could not load successfully");

      for (var i = 0; i < this.resource_loaders.length; i++) {
        if (this.resource_loaders[i].has_error) this.resource_loaders[i].print_error();
      }
    }
  }, {
    key: "get_progress",
    value: function get_progress() {
      var progress = 0;

      for (var i = 0; i < this.resource_loaders.length; i++) {
        progress += this.resource_loaders[i].progress;
      }

      return progress / this.resource_loaders.length;
    }
  }, {
    key: "loading_finished",
    get: function get() {
      var finished = true;

      for (var i = 0; i < this.resource_loaders.length; i++) {
        finished = finished && this.resource_loaders[i].has_finished;
      }

      return finished;
    }
  }, {
    key: "has_errors",
    get: function get() {
      var has_error = false;

      for (var i = 0; i < this.resource_loaders.length; i++) {
        has_error = has_error || this.resource_loaders[i].has_error;
      }

      return has_error;
    }
  }]);

  return ResourceBatch;
}();

exports.default = ResourceBatch;
},{"/resource_loader/TextureLoader":"ged4","/resource_loader/GLTFLoader":"DPLo","/resource_loader/DAELoader":"k6LD","/resource_loader/TextLoader":"X88z","/resource_loader/CubemapLoader":"jYGB","/resource_loader/AudioLoader":"w983","/resource_loader/JSONLoader":"NvAk","/ResourceContainer":"HJ6F"}],"wwEn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This class helps with parsing an entire recording that spans several days, into one-day recordings
// that start at 0:00:00 and ends at 23:59:59, except for the first and last day of a recording range
var TimeUtilities = /*#__PURE__*/function () {
  function TimeUtilities() {
    _classCallCheck(this, TimeUtilities);
  }

  _createClass(TimeUtilities, null, [{
    key: "get_days_between",
    value: function get_days_between(start_date, end_date) {
      // 	let startDate = moment.parseZone("2020-03-15T18:31:23.623794-04:00");
      // let endDate 	= moment.parseZone("2020-03-23T12:17:06.815451-04:00");
      var startDate = moment.parseZone(start_date);
      var endDate = moment.parseZone(end_date);
      var duration = moment.duration(endDate.diff(startDate));
      var days = Math.ceil(duration.asDays());
      var start, end;
      var days_array = [];

      for (var i = 0; i <= days; i++) {
        if (startDate.date() === endDate.date()) {
          start = startDate;
          end = endDate;
        } else {
          if (i == 0) {
            start = startDate;
            end = moment(startDate).endOf("day");
          } else if (i == days) {
            start = moment(endDate).startOf('day');
            end = endDate;
          } else {
            start = moment(startDate).add('days', i).startOf('day');
            end = moment(startDate).add('days', i).endOf('day');
          }
        }

        days_array.push({
          start: moment(start),
          end: moment(end),
          duration_in_seconds: moment.duration(moment(end).diff(moment(start))).asSeconds(),
          absolute_start_date: start_date,
          absolute_end_date: end_date
        });
      }

      return days_array;
    }
  }, {
    key: "full_day_ms",
    get: function get() {
      return 86400000;
    }
  }]);

  return TimeUtilities;
}();

exports.default = TimeUtilities;
},{}],"Focm":[function(require,module,exports) {
"use strict";

var _BaseApplication = _interopRequireDefault(require("/BaseApplication"));

var _CameraManager = _interopRequireDefault(require("/CameraManager"));

var _CameraUtilities = _interopRequireDefault(require("/utilities/CameraUtilities"));

var _Capabilities = _interopRequireDefault(require("/Capabilities"));

var _Configuration = _interopRequireDefault(require("/Configuration"));

var _EasingFunctions = _interopRequireDefault(require("/utilities/EasingFunctions"));

var _EventManager = _interopRequireDefault(require("/EventManager"));

var _Debug = _interopRequireDefault(require("/Debug"));

var _Graphics = _interopRequireDefault(require("/Graphics"));

var _Input = _interopRequireDefault(require("/Input"));

var _MathUtilities = _interopRequireDefault(require("/utilities/MathUtilities"));

var _NormalRender = _interopRequireDefault(require("/render_mode/NormalRender"));

var _PerspectiveCamera = _interopRequireDefault(require("/PerspectiveCamera"));

var _RenderLoop = _interopRequireDefault(require("/RenderLoop"));

var _ResourceBatch = _interopRequireDefault(require("/resource_loader/ResourceBatch"));

var _ResourceContainer = _interopRequireDefault(require("/ResourceContainer"));

var _SceneManager = _interopRequireDefault(require("/SceneManager"));

var _Screen = _interopRequireDefault(require("/Screen"));

var _Time = _interopRequireDefault(require("/Time"));

var _TimeUtilities = _interopRequireDefault(require("/utilities/TimeUtilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  BaseApplication: _BaseApplication.default,
  CameraManager: _CameraManager.default,
  CameraUtilities: _CameraUtilities.default,
  Capabilities: _Capabilities.default,
  Configuration: _Configuration.default,
  EasingFunctions: _EasingFunctions.default,
  EventManager: _EventManager.default,
  Debug: _Debug.default,
  Graphics: _Graphics.default,
  Input: _Input.default,
  MathUtilities: _MathUtilities.default,
  NormalRender: _NormalRender.default,
  PerspectiveCamera: _PerspectiveCamera.default,
  RenderLoop: _RenderLoop.default,
  ResourceBatch: _ResourceBatch.default,
  ResourceContainer: _ResourceContainer.default,
  SceneManager: _SceneManager.default,
  Screen: _Screen.default,
  Time: _Time.default,
  TimeUtilities: _TimeUtilities.default
};
},{"/BaseApplication":"v0GF","/CameraManager":"XMgG","/utilities/CameraUtilities":"ugwp","/Capabilities":"hZlU","/Configuration":"RyjO","/utilities/EasingFunctions":"ZeWG","/EventManager":"pJqg","/Debug":"J9UP","/Graphics":"xMH9","/Input":"k3P6","/utilities/MathUtilities":"ayC1","/render_mode/NormalRender":"Zz8J","/PerspectiveCamera":"iUFL","/RenderLoop":"QYq1","/resource_loader/ResourceBatch":"gkjv","/ResourceContainer":"HJ6F","/SceneManager":"qvMM","/Screen":"JIgx","/Time":"wewU","/utilities/TimeUtilities":"wwEn"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map