<template>
  <div id="app">
    <!-- <app-loader :session="session" @displayWebApp="webApp"></app-loader> -->

      <!-- <div :class="headerTag">
        <app-header :session="session" @miniScrollHandler="miniScroll"></app-header>
        <keep-alive>
          <router-view :session = "session" @miniScrollHandler="miniScroll"></router-view>
        </keep-alive>
        <app-footer :session = "session"></app-footer>
      </div> -->
      <app-header></app-header>
         <router-view></router-view>
        <app-footer></app-footer>

  </div>
</template>
<script>
import Loader from "./components/Loader.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      session: false,
      headerTag: {
        "animated fadeInRight": false,
        hidden: true
      }
    };
  },
  components: {
    "app-loader": Loader,
    "app-header": Header,
    "app-footer": Footer
  },
  methods: {
    tokenizer() {
      let token = "";
      const validation = localStorage.getItem("loginToken");
      this.session = !!validation;
      return token;
    },
    webApp(version) {
      if (version === "web") {
        this.headerTag = {
          "animated fadeInRight": true,
          hidden: false
        };
        setTimeout(() => {
          this.headerTag = {
            "animated fadeInRight": false,
            hidden: false
          };
        }, 1000);
      }
    },
    miniScroll(dest) {
      if (dest) {
        const item = document.getElementById(String(dest));
        const scrollToItem = item => {
          const diff = (item.offsetTop - window.scrollY) / 8;
          if (Math.abs(diff) > 1) {
            window.scrollTo(0, window.scrollY + diff);
            clearTimeout(window._TO);
            window._TO = setTimeout(scrollToItem, 33, item);
          } else {
            window.scrollTo(0, item.offsetTop);
          }
        };
        scrollToItem(item);
      }
    }
  },
  beforeMount() {
    this.tokenizer();
  }
  
};
</script>
