import Vue from 'vue';
import App from './App.vue';
// Necessary imports for bootstrap to work
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  // Inside our render function, we'll return the createElement function, but the convention is to call it 'h', so we'll use that here.
  //   render: function(h) { Also, instead of this classic version, we use an arrow function lik you see down there, which is 100% equivalent.
  //     return h(App);
  //   }
  render: h => h(App)
}).$mount('#app');