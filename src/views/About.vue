<template>
  <div class="content clearfix">
    <div id="blog-header" class="section-block header-bg">
      <div class="row flex">
        <div class="column width-8 push-2">
          <div class="feature-content">
            <div class="feature-content-inner center">
              <h1 class="color-white mb-0 font-mont">About Us</h1>
              <p class="lead color-white grid__padding">
                We are very passionate about our work and continuously strive for excellence.
                We also believe that Great things which make a difference are never done by one person.
              </p>
              <div class="table-view m-auto">
                <ul class="list-unstyled list-inline uppercase">
                  <li class="webapp-social"><a href="https://www.facebook.com/efiweNGO/" class="fb white-bg"><i class="fab  fa-facebook-f"></i></a></li>
                  <li class="webapp-social"><a href="https://twitter.com/efiweorg" class="tw white-bg"><i class="fab  fa-twitter"></i></a></li>
                  <li class="webapp-social"><a href="https://www.linkedin.com/company/efiwe" class="ln white-bg"><i class="fab  fa-linkedin"></i></a></li>
                  <li class="webapp-social"><a href="https://www.instagram.com/efiwengo/" class="in white-bg"><i class="fab fa-instagram"></i></a></li>
                  <li class="webapp-social"><a href="https://www.youtube.com/channel/UCiCX2uangOHF_qTPGrCmm_Q" class="yt white-bg"><i class="fab  fa-youtube"></i></a></li>
                  <li class="webapp-social"><a href="https://chat.whatsapp.com/Hii1MW4n10VKTz35W4MB2t" class="wh white-bg"><i class="fab  fa-whatsapp"></i></a></li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="about" class=" section-block top-border animated fadeInUp">
      <div class="row flex boxes one-column-on-tablet mt-30">
        <div class="column width-3 no-padding-right">
          <div class="box xlarge rounded border-grey-light box-shadow bkg-charcoal-light">
            <div class="table">

              <div class="about-img">
                <img  class="about-logo" src="../assets/images/efiwe-about.png" alt="Efiwe Logo" />

              </div>


            </div>
          </div>
        </div>
        <div class="column width-9 no-padding-right">
          <div class="box xlarge rounded border-grey-light box-shadow ">
            <div class="table">

              <div >
                <h4 class="font-mont">Profile</h4>
                <p class="lead mb-20 left-txt font-mont">
                  Efiwe is a 501 (c) (3) Non-Profit Organization based in the United States with the aim of continuing to enrich the educational experiences of Africans in higher institutions back on the continent.

                </p>

                <p class="lead mb-20 left-txt font-mont">
                  We believe that access to more and better books/textbooks will significantly impact on the human capital in Africa and therefore lead to a more educated populace and a better Africa.

                </p>

                <p class="lead mb-20 left-txt font-mont">
                  We will run a very open and transparent system of book collections, donations and transport to Africa and to deserving institutions. Please feel free to ask us questions about our process and handling of resources (financial, educational etc.).

                </p>

              </div>


            </div>
          </div>
        </div>
        <div class="column width-8 no-padding-right">
          <div class="box xlarge rounded border-grey-light box-shadow ">
            <div class="table">

              <div >
                <h4 class="font-mont">History</h4>
                <p class="lead mb-20 left-txt font-mont">
                  This project began from an idea conceived by Philip Àlàbí, a graduate student of Chemistry at Southern Illinois Univerisity Edwardsville (from May 2016-March 2017)
                  who was also the first to run a book drive to deliver over 1000 books from SIUE to his alma mater, – Tai Solarin University of Education, Nigeria.
                  <br/> <br/>
                  The idea, according to him, started when he noticed how many books are thrown away every year by American universities. He decided to collect them, raise some funds, and send them to his home school.
                  <br/> <br/>
                  Through the success of the book drive, funded by private donations from friends, family, colleagues, professors, and acquaintances (he raised $1288 through an online crowdfunding drive),
                  he was motivated to continue to do this on a grand scale in order to benefit more under-served institutions in Nigeria and around the continent.
                  <br/>
                  The core focus of this organization is to collect and ship university textbooks to African University libraries. This will help alleviate the lack of sufficient materials
                  in many of these under-served universities and expose the students to hundreds of current and relevant texts.
                  <br/> <br/>
                  We are able to achieve this by collaborating with American universities, book donors,
                  student volunteers, private donors, and African universities. The initial drive will send books to Nigeria, west Africa and then the African continent.

                </p>

              </div>


            </div>
          </div>
        </div>
        <div class="column width-4 no-padding-right">
          <div class="row flex boxes">

            <div class="column width-12 no-padding-right">
              <div class="box xlarge rounded border-grey-light box-shadow hiw">
                <h4 class="font-mont">
                  Mission
                </h4>
                <p class="font-mont">
                  To send over 1,000,000 relevant textbooks to African tertiary Institution libraries from the US. by 2030.

                </p>
              </div>
            </div>

            <div class="column width-12 no-padding-right">
              <div class="box xlarge rounded border-grey-light box-shadow hiw">
                <h4 class="font-mont">
                  Vision
                </h4>
                <p class="font-mont">
                  To contribute our quota to the development of Africa by engineering student’s access to quality educational materials, books, journals,
                  and tools.
                  <br/> <br/>
                  This will help in the delivery of the human capital development that is required for the long awaited development of Africa.

                </p>
              </div>
            </div>

            <div class="column width-12 no-padding-right">
              <div class="box xlarge rounded border-grey-light box-shadow hiw">
                <h4 class="font-mont">
                  Volunteer
                </h4>
                <p class="font-mont">
                  We are supported by Volunteers all over the US and in Africa.
                  <br/> <br/>
                  Volunteers run book drive campaigns raise funds for shipment of books and
                  help build a community of people committed to African development, Volunteers have also been involved in reaching more Libraries in Africa.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column width-12 center-block center-elem mt-10">

          <button @click="teamsHandler()" class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-users"></i> Our Team</button>

        </div>
      </div>
    </div>

    <div>
      <app-footernav></app-footernav>
    </div>

  </div>
</template>
<script>
import FooterNav from "./FooterNav";
export default {
  data() {
    return {
      userData: []
    };
  },
  components: {
    "app-footernav": FooterNav
  },
  methods: {
    teamsHandler() {
      this.$root.$emit("teams");
    }
  }
};
</script>
