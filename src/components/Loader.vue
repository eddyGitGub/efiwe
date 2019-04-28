<template>
  <div id="temp-loader" v-if="loaderStatus">
    <div class="lockscreen">
      <div class="webapp-loader landing-bg">
        <div class="webapp-icon-lock" :class="scalePre"></div>
        <div class="webapp-icon-message">
          <div class="contain-content center-txt">
            <div class="webapp-user-form-wrapper auto-width" :class="scaleOut">
              <div class="webapp-user-form-inner np">
                <div class="form-wrapper">

                  <div class="form-loader form-loader-login auto-width">

                    <div v-if="appLoaded" :class="headerTag">
                      <div class="center-txt light-txt grid__padding" :class="scaleOut">
                        <h4 class="welcome-txt-2 color-white weight-semi-bold font-mont mt-20">Give Books, Make A Change</h4>
                      </div>
                    </div>
                    <div v-if="textLoaded" :class="triggerTag">
                      <div class="mt-30 center-block center-elem block-view" :class="scaleOut">
                        <button @click.prevent="web" type="submit" class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"><i class="fas fa-bell"></i> Welcome {{avatar}}</button>
                      </div>
                    </div>
                    </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      authenticated: this.session,
      userData: "{}",
      appLoaded: false,
      textLoaded: false,
      status: true,
      loaderStatus: true,
      headerTag: { "animated fadeInUp": false, hidden: true },
      triggerTag: { "animated fadeInUp": false, hidden: true },
      scalePre: { "webapp-scaleDownCenter": false, "sppeed-1x": false },
      scaleOut: { "webapp-scaleDownCenter": false, "sppeed-1x": false }
    };
  },
  methods: {
    tokenizer() {
      let validation = localStorage.getItem("loginUser");
      if (validation) {
        this.userData = JSON.parse(validation);
      }
    },
    websiteLoaded() {
      new Promise(() => {
        setTimeout(() => {
          this.headerTag = { "animated fadeInUp": true, hidden: false };
          this.appLoaded = true;
          setTimeout(() => {
            this.triggerTag = { "animated fadeInUp": true, hidden: false };
            this.textLoaded = true;
          }, 1500);
        }, 2000);
      }).then(
        setTimeout(() => {
          this.headerTag = { "animated fadeInDown": false, hidden: false };
          this.triggerTag = { "animated fadeInUp": true, hidden: false };

          setTimeout(() => {
            this.web();
          }, 3000);
        }, 1500)
      );
    },
    web() {
      new Promise(() => {
        this.scalePre = { "webapp-scaleDownCenter": true, "speed-1x": true };
      })
        .then(
          setTimeout(() => {
            this.scaleOut = {
              "webapp-scaleDownCenter": true,
              "speed-1x": true
            };
          }, 700)
        )
        .then(
          setTimeout(() => {
            document.querySelector("body").classList.remove("webapp-loading");
          }, 800)
        )
        .then(
          setTimeout(() => {
            let version = "web";
            this.$emit("displayWebApp", version);
            this.loaderStatus = false;
          }, 2000)
        );
    }
  },
  props: ["session"],
  computed: {
    avatar: function() {
      let fullName = "",
        firstName = "",
        lastName = "";
      if (this.userData) {
        fullName = this.userData.firstname + " " + this.userData.lastname;
      } else {
        fullName = "Guest Guest";
      }

      firstName = fullName
        .split(" ")
        .slice(0, 1)
        .join(" ");
      lastName = fullName
        .split(" ")
        .slice(1)
        .join(" ");
      return firstName;
    }
  },
  mounted() {
    this.websiteLoaded();
    this.authenticated = this.session;
  },
  beforeMount() {
    this.tokenizer();
  }
};
</script>
