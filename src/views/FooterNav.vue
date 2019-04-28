<template>
  <div :id="name">
    <footer class="grid__full animated fadeInUp">
      <div class="grid__three grid__padding pb-30  animated fadeInUp">
        <h4 class="uppercase left-txt"><i class="palette4 fas fa-compass" aria-hidden="true"></i> Quick Links</h4>
        <div class="grid__half__sticky">
          <dl class="faqs">
            <dt><a @click.prevent="aboutHandler"><i class="fa fa-caret-right" aria-hidden="true"></i> About Us </a></dt>

            <dt><a @click.prevent="teamsHandler"><i class="fa fa-caret-right" aria-hidden="true"></i> Our team</a></dt>

            <dt><a @click.prevent="blogHandler"><i class="fa fa-caret-right" aria-hidden="true"></i> Our Blog</a></dt>

            <dt><a @click.prevent="searchHandler"><i class="fa fa-caret-right" aria-hidden="true"></i> Search</a></dt>


          </dl>
        </div>

        <div class="grid__half__sticky">

          <dl class="faqs">
            <dt><a @click.prevent="loginHandler"><i class="fa fa-caret-right" aria-hidden="true"></i> Login</a></dt>

            <dt><a @click.prevent="registerHandler"><i class="fa fa-caret-right" aria-hidden="true"></i> Join Us</a></dt>

            <dt><a @click.prevent="donateHandler"><i class="fa fa-caret-right" aria-hidden="true"></i> Donations</a></dt>

            <dt><a @click.prevent="contactHandler"><i class="fa fa-caret-right" aria-hidden="true"></i> Contact Us</a></dt>

            <!--<dt><router-link to="/message-us" @click.native="scroller"><a><i class="fa fa-caret-right" aria-hidden="true"></i> Message Us</a></router-link></dt>-->

          </dl>
        </div>
      </div>
      <div class="grid__three grid__padding pb-30">
        <h4 class="uppercase left-txt"><i class="palette4 fas fa-map-marker-alt" aria-hidden="true"></i> Visit Us </h4>
        <p class="light-txt normal-font">
          Efiwe is a 501 (c) (3) non-profit organisation that drives the needed educational Change that a 21st century Africa demands.


          <br/>
          <span class="copyright"><i class="palette4 fas fa-map-signs"></i> 135 Springer Avenue, Edwardsville, IL, USA. 62025 </span>

        </p>
        <div>

        </div>

      </div>
      <div class="grid__three grid__padding full-footer">
        <h4 class="uppercase left-txt"><i class="palette4 fas fa-comments" aria-hidden="true"></i> Lets Talk </h4>
        <p class="light-txt normal-font">
          Should you have any queries, suggestions or useful feedback, you can always reach out to us
          via email or voice calls.
          <br/>
          <span class="copyright"><i class="palette4 fas fa-mobile"></i> +1 618-746-9666</span>
          <span class="copyright pallete2"> &nbsp; | &nbsp; </span>
          <span class="copyright"><i class="palette4 fas fa-envelope"></i>  info@efiwe.org</span>

        </p>
      </div>
    </footer>
  </div>

</template>
<script>
export default {
  data() {
    return {
      name: "footer-nav"
    };
  },
  methods: {
    aboutHandler() {
      this.$root.$emit("about");
    },
    contactHandler() {
      this.$root.$emit("contact");
    },
    loginHandler() {
      this.$root.$emit("login");
    },
    registerHandler() {
      this.$root.$emit("register");
    },
    donateHandler() {
      this.$root.$emit("donate");
    },
    searchHandler() {
      this.$root.$emit("search");
    },
    blogHandler() {
      this.$root.$emit("blog");
    },
    teamsHandler() {
      this.$root.$emit("teams");
    }
  }
};
</script>
