<template>
  <div id="home">
    <div class="header">
      <!-- Header -->
      <header
        class="header header-absolute header-fixed-on-mobile header-transparent"
        :class="stickyMenu"
      >
        <div class="header-inner">
          <div class="row nav-bar">
            <div class="column width-12 nav-bar-inner">
              <div class="logo">
                <div class="logo-inner">
                  <a href="./">
                    <img src="../assets/images/efiwe.png" alt="Efiwe Logo">
                  </a>
                  <a href="./">
                    <img src="../assets/images/efiwe-dark.png" alt="Efiwe Logo">
                  </a>
                </div>
              </div>
              <nav class="navigation nav-block primary-navigation nav-left">
                <ul>
                  <li :class="menuSwitcher.home">
                    <a @click.prevent="miniScroll('home')">Home</a>
                  </li>
                  <li :class="menuSwitcher.about">
                    <a @click.prevent="miniScroll('about')">About</a>
                  </li>
                  <li :class="menuSwitcher.team">
                    <a @click.prevent="miniScroll('team')">Team</a>
                  </li>
                  <li :class="menuSwitcher.contact">
                    <a @click="contact()">Contact</a>
                  </li>
                  <li :class="menuSwitcher.search">
                    <a @click.prevent="search">Search</a>
                  </li>
                </ul>
              </nav>
              <nav class="navigation nav-block secondary-navigation nav-right">
                <ul>
                  <li>
                    <!-- Dropdown Login -->
                    <div class="v-align-middle for-pc">
                      <div class="dropdown">
                        <nav class="navigation nav-block primary-navigation">
                          <ul class="relax-right">
                            <li
                              :class="menuSwitcher.contact"
                              v-if="user.isAdmin || user.role_id === 3"
                            >
                              <router-link to="/librarian">Librarian</router-link>
                            </li>
                            <li
                              :class="menuSwitcher.contact"
                              v-if="user.isAdmin || user.role_id === 5"
                            >
                              <router-link to="/volunteer">Volunteer</router-link>
                            </li>
                            <li :class="menuSwitcher.contact" v-if="user.isAdmin">
                              <a @click="users()">Users</a>
                            </li>
                            <li class="contains-sub-menu" v-if="authenticated">
                              <a @click.prevent>
                                <i class="fas fa-chevron-circle-down"></i>
                                {{user.firstname}} {{user.lastname}}
                              </a>
                              <ul class="sub-menu">
                                <li>
                                  <a @click.prevent="logout">Logout</a>
                                </li>
                                <!-- <li>
                                  <a @click.prevent="register">Join Us</a>
                                </li>-->
                              </ul>
                            </li>
                            <li class="contains-sub-menu" v-else>
                              <a @click.prevent>
                                <i class="fas fa-chevron-circle-down"></i> My
                                Account
                              </a>
                              <ul class="sub-menu">
                                <li>
                                  <a @click.prevent="login">Login</a>
                                </li>
                                <li>
                                  <a @click.prevent="register">Join Us</a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <button
                                @click="donate()"
                                class="button small rounded bkg-theme bkg-hover-theme color-white color-hover-white"
                              >
                                <span class="fas fa-heartbeat"></span>
                                <span>Donate</span>
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </li>
                  <li class="aux-navigation hide">
                    <div
                      @click.prevent="menuBtnToggle"
                      class="navigation-show side-nav-show nav-icon"
                    >
                      <span
                        class="fas fa-times-circle animated webapp-scaleUpCenter"
                        v-if="menuToggle"
                      ></span>
                      <span class="fas fa-th animated webapp-scaleUpCenter" v-else></span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <!-- Header End -->
    </div>
    <div id="mobile-wrapper" :class="mobileMode" v-if="mobileToggle" @click.prevent="swapGuide">
      <div class="sphone">
        <ul class="main-menu menu animated fadeIn">
          <li class="menu-item" :class="menuSwitcher.home">
            <a @click.prevent="miniScroll('home')">Home</a>
          </li>
          <li class="menu-item" :class="menuSwitcher.about">
            <a @click.prevent="miniScroll('about')">About</a>
          </li>
          <li class="menu-item" :class="menuSwitcher.team">
            <a @click.prevent="miniScroll('team')">Team</a>
          </li>
          <li class="menu-item" :class="menuSwitcher.contact">
            <a @click.prevent="contact()">Contact</a>
          </li>
          <li class="menu-item" :class="menuSwitcher.search">
            <a @click.prevent="search()">Search</a>
          </li>
          <li class="menu-item">
            <a @click.prevent="login">Login</a>
          </li>
          <li class="menu-item">
            <a @click.prevent="register">Join Us</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="guide-wrapper" :class="guideMode" v-if="guideToggle">
      <app-guide :memberProfile="memberProfile"></app-guide>
    </div>
  </div>
</template>
<script>
import Guide from "./Guide.vue";
import axios from "../api/efiwe";
export default {
  data() {
    return {
      user: "{}",
      destination: "",
      //authenticated: "",
      deviceWidth: "",
      baseWidth: "",
      baseHeight: "",
      currentPosition: 0,
      scrollPosition: 0,
      desktopMode: false,
      activeState: false,
      navStats: false,
      guideToggle: false,
      guideStatus: false,
      guideMode: { viewguide: this.guideStatus },
      loginMenu: { "user-menu": false },
      signupMenu: { "user-menu": false },
      profileMenu: { "user-menu": false },
      menuToggle: false,
      mobileMode: { active: this.activeState },
      mobileToggle: false,
      navigationStatus: { "header-sticky": this.navStats },
      menuSwitcher: {
        home: "current",
        about: "",
        team: "",
        blog: "",
        contact: "",
        search: ""
      },
      stickyMenu: {
        "header-sticky": false,
        "header-background": false,
        "navigation--unpin": false
      },
      memberProfile: []
    };
  },
  components: {
    "app-guide": Guide
  },
  methods: {
    currentDevice() {
      this.deviceWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      this.baseWidth = 769;
      if (this.deviceWidth < this.baseWidth) {
        this.mobileToggle = true;
        this.desktopMode = false;
      } else {
        this.mobileToggle = false;
        this.desktopMode = true;
      }
    },
    menuBtnToggle() {
      this.menuToggle === true
        ? (this.menuToggle = false)
        : (this.menuToggle = true);
      this.mobileMode.active === true
        ? (this.mobileMode.active = false)
        : (this.mobileMode.active = true);
      document.querySelector("html", "body").classList.toggle("webapp-loading");
      this.navigationStatus.navStats === true
        ? (this.navigationStatus.navStats = false)
        : (this.navigationStatus.navStats = true);
    },
    toggleGuide(profile) {
      this.guideToggle = !this.guideToggle;
      this.guideMode.viewguide === true
        ? (this.guideMode.viewguide = false)
        : (this.guideMode.viewguide = true);
      this.stickyMenu = {
        "header-sticky": true,
        "header-background": true,
        "navigation--unpin": false
      };
      document.querySelector("html", "body").classList.add("webapp-loading");
      this.memberProfile = profile;
    },
    dynamicViews() {
      window.addEventListener("resize", event => {
        this.currentDevice();
      });
    },
    stickyHeader() {
      this.deviceWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      this.baseWidth = 769;
      this.baseHeight = 400;
      this.scrollPosition = 0;
      if (this.deviceWidth > this.baseWidth) {
        window.addEventListener("scroll", () => {
          const distance =
            window.pageYOffset - document.getElementById("app").offsetTop;
          if (distance === 0) {
            this.stickyMenu = {
              "header-sticky": false,
              "header-background": false,
              "navigation--unpin": false
            };
          } else if (distance > this.baseHeight) {
            this.stickyMenu = {
              "header-sticky": true,
              "header-background": true,
              "navigation--unpin": false
            };
          }
        });
      }
    },
    swapGuide() {
      document.querySelector("html", "body").classList.remove("webapp-loading");
      this.guideToggle = false;
      this.guideMode.viewguide = false;
      this.menuToggle = false;
      this.mobileMode.active = false;
    },
    about() {
      this.scroller();
      this.swapGuide();
      this.$router.push("/about");
      this.menuSwitcher = {
        home: "",
        about: "current",
        team: "",
        blog: "",
        contact: "",
        search: ""
      };
    },
    teams() {
      this.scroller();
      this.swapGuide();
      this.$router.push("/our-team");
      this.menuSwitcher = {
        home: "",
        about: "",
        team: "current",
        blog: "",
        contact: "",
        search: ""
      };
    },
    contact() {
      this.scroller();
      this.swapGuide();
      this.$router.push("/contact");
      this.menuSwitcher = {
        home: "",
        about: "",
        team: "",
        blog: "",
        contact: "current",
        search: ""
      };
    },
    users() {
      this.scroller();
      this.swapGuide();
      this.$router.push("/users");
      this.menuSwitcher = {
        home: "",
        about: "",
        team: "",
        blog: "",
        contact: "",
        search: "",
        users: "current"
      };
    },

    login() {
      this.scroller();
      this.swapGuide();
      this.$router.push("/login");
      this.menuSwitcher = {
        home: "",
        about: "",
        team: "",
        blog: "",
        contact: "",
        search: ""
      };
    },
    register() {
      this.scroller();
      this.swapGuide();
      this.$router.push("/register");
      this.menuSwitcher = {
        home: "",
        about: "",
        team: "",
        blog: "",
        contact: "",
        search: ""
      };
    },
    donate() {
      this.scroller();
      this.swapGuide();
      this.$router.push("/donate");
      this.menuSwitcher = {
        home: "",
        about: "",
        team: "",
        blog: "",
        contact: "",
        search: ""
      };
    },
    blog() {
      this.scroller();
      this.swapGuide();
      this.$router.push("/blog");
      this.menuSwitcher = {
        home: "",
        about: "",
        team: "",
        blog: "current",
        contact: "",
        search: ""
      };
    },
    logout() {
      localStorage.removeItem("loginToken");
      localStorage.removeItem("loginUser");
      delete axios.defaults.headers.common["x-auth-token"];
      window.location.href = "./login";
    },
    search() {
      this.$router.push("/search");
      this.scroller();
      this.swapGuide();
      this.menuSwitcher = {
        home: "",
        about: "",
        team: "",
        blog: "",
        contact: "",
        search: "current"
      };
    },
    scroller() {
      let scrollDuration = 1500,
        scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(() => {
          if (window.scrollY > 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
    },
    miniScroll(dest) {
      this.swapGuide();
      this.$router.push("/");
      const scrollToItem = destination => {
        if (destination) {
          const diff = (destination.offsetTop - window.scrollY) / 8;
          if (Math.abs(diff) > 1) {
            window.scrollTo(0, window.scrollY + diff);
            clearTimeout(window._TO);
            window._TO = setTimeout(scrollToItem, 33, destination);
          } else {
            window.scrollTo(0, destination.offsetTop);
          }
        }
      };
      if (dest === "home") {
        this.menuSwitcher = {
          home: "current",
          about: "",
          team: "",
          blog: "",
          contact: "",
          search: ""
        };
      }
      if (dest === "about") {
        this.menuSwitcher = {
          home: "",
          about: "current",
          team: "",
          blog: "",
          contact: "",
          search: ""
        };
      } else if (dest === "team") {
        this.menuSwitcher = {
          home: "",
          about: "",
          team: "current",
          blog: "",
          contact: "",
          search: ""
        };
      } else if (dest === "blog") {
        this.menuSwitcher = {
          home: "",
          about: "",
          team: "",
          blog: "current",
          contact: "",
          search: ""
        };
      } else if (dest === "contact") {
        this.menuSwitcher = {
          home: "",
          about: "",
          team: "",
          blog: "",
          contact: "contact"
        };
      } else {
        this.menuSwitcher = {
          home: "current",
          steps: "",
          features: "",
          services: "",
          more: ""
        };
      }
      setTimeout(() => {
        this.destination = document.getElementById(dest);
        scrollToItem(this.destination);
      }, 100);
    },
    getLoginUserData() {
      //this.authenticated = !!localStorage.getItem("loginToken");
      const userData = JSON.parse(localStorage.getItem("loginUser"));
      this.user = userData || "{}";
    }
  },
  props: ["session"],
  beforeMount() {
    this.currentDevice();
  },
  mounted() {
    this.$root.$on("miniScroll", dest => {
      this.miniScroll(dest);
    });
    this.$root.$on("teamHandler", profile => {
      this.toggleGuide(profile);
    });
    this.$root.$on("swapHandler", profile => {
      this.swapGuide();
    });
    this.$root.$on("about", () => {
      this.about();
    });
    this.$root.$on("contact", () => {
      this.contact();
    });
    this.$root.$on("login", () => {
      this.login();
    });
    this.$root.$on("donate", () => {
      this.donate();
    });
    this.$root.$on("search", () => {
      this.search();
    });
    this.$root.$on("teams", () => {
      this.teams();
    });
    this.$root.$on("blog", () => {
      this.blog();
    });

    this.$root.$on("auth", () => {
      this.getLoginUserData();
    });
    //this.authenticated = this.session;
    this.headerTag = { "animated fadeInDown": true };
    setTimeout(() => {
      this.headerTag = { "animated fadeInDown": false };
    }, 1900);
    // const token = localStorage.getItem("loginToken");
    // if (token === null){
    //    this.$router.push("/login");
    // }
  },
  created() {
    this.dynamicViews();
    this.stickyHeader();
    this.getLoginUserData();
  },
  computed: {
    authenticated() {
      return JSON.parse(localStorage.getItem("loginUser"));
    }
  }
};
</script>
