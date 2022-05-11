# vue-uix

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Testing performance

1. Inject log to VueJs runtime core

Goto `/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js` for `serve` mode
or `/node_modules/@vue/runtime-core/dist/runtime-core.cjs.prod.js` for `build` mode then:

Add `window._createVNodeCtr++` to `_createVNode` function.

```javascript
window._createVNodeCtr = 0;

function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  window._createVNodeCtr++;
  // ...
}
```

Add `window.cloneVNodeCtr++` to `cloneVNode` function.

```javascript
window.cloneVNodeCtr = 0;

function cloneVNode(vnode, extraProps, mergeRef = false) {
  window.cloneVNodeCtr++
  // ...
}
```

2. Goto `/src/main.js`, uncomment each app (App1.vue, App2.vue, App3.vue) and open browser

DEMO: https://www.youtube.com/watch?v=RC9lKbv88qQ

### Build output

App.vue
```javascript
export default {
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var counter = ref(0);
    setInterval(function () {
      counter.value++;
      nextTick(function () {
        console.clear();
        console.log('_createVNode', window._createVNodeCtr);
        console.log('cloneVNode', window.cloneVNodeCtr);
      });
    }, 1000);
    var __returned__ = {
      counter: counter,
      ref: ref,
      nextTick: nextTick
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}

var _hoisted_1 = createElementVNode("div", null, "Static", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, 
      [
          createElementVNode("div", null, toDisplayString($setup.counter), 1), _hoisted_1
      ])
}
```

App2.vue

```javascript
export default {
  setup: function setup() {
    var counter = ref(0);
    setInterval(function () {
      counter.value++;
      nextTick(function () {
        console.clear();
        console.log('_createVNode', window._createVNodeCtr);
        console.log('cloneVNode', window.cloneVNodeCtr);
      });
    }, 1000);

    return function () {
      return createVNode("div", null,
          [
            createVNode("div", null, [counter.value]),
            createVNode("div", null, [createTextVNode("JSX_Static")])
          ])
    }
  }
}
```

App3.vue

```javascript
var Counter = {
  setup: function setup() {
    var counter = ref(0);
    setInterval(function () {
      counter.value++;
      nextTick(function () {
        console.clear();
        console.log('_createVNode', window._createVNodeCtr);
        console.log('cloneVNode', window.cloneVNodeCtr);
      });
    }, 1000);

    return function () {
      return counter.value;
    };
  }
};

export default {
  components: {Counter: Counter},
  setup: function setup() {
    return function () {
      return createVNode("div", null,
          [
            createVNode("div", null, [createVNode(resolveComponent("counter"), null, null)]),
            createVNode("div", null, [createTextVNode("JSX_Static")])
          ])
    }
  }
}
```
