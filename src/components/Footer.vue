<template>
    <div>
        <div id="footer-template">

            <!-- Copyright Block -->
            <div class="subfooter grid__full">
                <ul class="list-unstyled list-inline relax-center uppercase grid__full">
                    <li class="grid__three">
                        <a>
                            Find Us On
                            <hr>
                            <ul class="list-unstyled list-inline uppercase">
                                <li class="webapp-social"><a href="https://www.facebook.com/efiweNGO/" class="fb"><i
                                        class="fab  fa-facebook-f"></i></a></li>
                                <li class="webapp-social"><a href="https://twitter.com/efiweorg" class="tw"><i
                                        class="fab  fa-twitter"></i></a></li>
                                <li class="webapp-social"><a href="https://www.linkedin.com/company/efiwe" class="ln"><i
                                        class="fab  fa-linkedin"></i></a></li>
                                <li class="webapp-social"><a href="https://www.instagram.com/efiwengo/" class="in"><i
                                        class="fab fa-instagram"></i></a></li>
                                <li class="webapp-social"><a
                                        href="https://www.youtube.com/channel/UCiCX2uangOHF_qTPGrCmm_Q" class="yt"><i
                                        class="fab  fa-youtube"></i></a></li>
                                <li class="webapp-social"><a href="https://chat.whatsapp.com/Hii1MW4n10VKTz35W4MB2t"
                                                             class="wh"><i class="fab  fa-whatsapp"></i></a></li>
                            </ul>
                        </a>
                    </li>
                    <li class="grid__three">
                        <a>
                            Back to Top
                            <hr>
                            <ul class="list-unstyled list-inline uppercase">
                                <li class="webapp-social"><a @click.prevent="scroller" class="top"><i
                                        class="fas fa-angle-up"></i></a></li>
                            </ul>

                        </a>
                    </li>
                    <li class="grid__three">
                        <a>

                            <i class="fas fa-copyright"></i> 2018 Efiwe.org
                            <hr>
                            <ul class="list-unstyled list-inline uppercase">
                                <li class="webapp-social">
                                    <a class="copyright-icon mg"><i class="fas fa-mobile"></i></a>
                                    <div class="footer-link dark-text"> +1 618-746-9666</div>
                                </li>
                                <li class="webapp-social">
                                    <a class="copyright-icon mg"><i class="fas  fa-envelope"></i></a>
                                    <div class="footer-link dark-text lowercase"> info@efiwe.org</div>
                                </li>
                            </ul>
                        </a>
                    </li>

                </ul>
            </div>
            <!-- Copyright Block -->


        </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      authenticated: ""
    };
  },
  methods: {
    scroller() {
      let scrollDuration = 1500,
        scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(() => {
          if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
    }
  },
  computed: {},
  props: ["session"],
  mounted() {
    this.authenticated = this.session;
  }
};
</script>
