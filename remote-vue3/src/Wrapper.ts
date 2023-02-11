import { createApp } from "vue";
import App from "./App.vue";

const Wrapper = (el) => {
  createApp(App).mount(el);
}

export default Wrapper;