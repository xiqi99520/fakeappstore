const apiContext = require.context(`./modules/`, true, /\.js$/);
const api = {};
apiContext.keys().forEach(key => {
  const apiName = key.replace(/^\.\/(.*)\.\w+$/, `$1`);
  api[apiName] = apiContext(key);
});
export const $api = api;

export default {
  install(Vue) {
    Vue.prototype.$api = api;
  }
};
