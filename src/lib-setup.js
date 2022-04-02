import OurVue from "vue";
import components from "./components";
// import myButton from "@/components/myButton";

/**
 * install function
 *
 * @param {*} Vue parent component vue contructor
 */
function install(Vue) {
  if (OurVue !== Vue) {
    // eslint-disable-next-line no-console
    console.error("Multiple instances of Vue detected ");
  }

  if (install.installed) return;
  install.installed = true;

  // registering component to use as  plugin
  //   if we need to use a single component only use below line only
  //   Vue.component("my-button", myButton);
  for (const prop in components) {
    // eslint-disable-next-line no-prototype-builtins
    if (components.hasOwnProperty(prop)) {
      const component = components[prop];
      Vue.component(component.name, component);
    }
  }
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

plugin.install = install;

export default plugin;
