import "./bootstrap";
import router from "./routes";

import App from "./App.vue";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
