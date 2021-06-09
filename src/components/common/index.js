import AddToCartBtn from './AddToCartBtn';

let MyPlugin = {};

MyPlugin.install = function(Vue) {
    Vue.component(AddToCartBtn.name, AddToCartBtn);
}

export default MyPlugin;