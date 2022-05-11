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

Goto `/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js` for `serve` mode or `/node_modules/@vue/runtime-core/dist/runtime-core.cjs.prod.js` for `build` mode then:

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
