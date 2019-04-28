<template>
  <div id="contact-ui" class="header-bg">
    <main class="grid__padding__sm static-form">

      <div class="webapp-content__inner">
        <div class="center-txt">

          <div class="webapp-user-form-wrapper" :class="headerTag">

            <div class="webapp-user-form-inner np">
              <div class="form-wrapper">
                <div v-if="contactVerification === 1" class="form-loader form-loader-login verify">
                  <div class="center-txt webapp-ripple-text"><i class="fas fa-envelope"></i> Sending Your Message</div>

                  <!--<div class="webapp-ripple">-->
                    <!--<div></div><div></div>-->
                  <!--</div>-->

                  <!-- <div class="center-txt webapp-ripple-text"><i class="fas fa-business-time"></i> Coming Soon</div> -->

                  <div class="webapp-ripple">
                    <div></div><div></div>
                  </div>

                </div>
                <div v-else-if="contactVerification === 2" class="form-loader form-loader-login success">
                  <div class="center-txt webapp-ripple-text">   <i class="fas fa-check-circle"></i> Message Sent Successful</div>

                  <div class="webapp-ripple">
                    <div></div>
                    <i class="webapp-ripple-notification fa fa-check-circle"></i>
                    <div></div>
                  </div>

                </div>
                <div v-else-if="contactVerification === 3" class="form-loader form-loader-login failure">
                  <div class="center-txt webapp-ripple-text">   <i class="fa fa-bell"></i> Message Sending Failed</div>-->

                  <div class="webapp-ripple">
                    <!--<div></div>-->
                    <i class="webapp-ripple-notification fa fa-times-circle"></i>
                    <!--<div></div>-->
                 </div>
                  <!-- <div class="center-txt webapp-ripple-text"><i class="fas fa-business-time"></i> Coming Soon</div> -->

                  <div class="webapp-ripple">
                    <div></div><div></div>
                  </div>

                </div>
                <div class="login-form grid__padding pt-15" v-else>
                  <div  class="webapp-user-form-header m-b-sm nb ns">
                    <div class="webapp-user-form-inner">
                      <div class="grid__full">
                        <div class="card" style="width:70%">
                          <div class="card-body">
                            <div class="d-flex flex-row">
                              <div class="round round-lg align-self-center"><i class="fas fa-envelope"></i></div>
                              <div class="m-l-10 align-self-center">
                                <h3 class="wallet m-b-0 font-light text-white">Contact Us</h3>
                                <h5 class="wallet text-muted m-b-0 text-white"><i class="palette4 fas fa-map-signs"></i> 135 Springer Avenue, Edwardsville, Il, 62025 </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="form-group grid__full mt-10">
                    <label class="form-component text-white" for="formName">Name</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon"><i class="fas fa-user"></i></div>
                      <input id="formName" v-model.trim="contactData.name" :class="validateForm.name_error" class="form-control" type="text" placeholder="Enter FullName">
                    </div>
                  </div>
                  <div class="form-group grid__full mt-10">
                    <label class="form-component text-white" for="formEmail">Email ID</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon"><i class="fas fa-envelope"></i></div>
                      <input id="formEmail" v-model.trim="contactData.email" :class="validateForm.email_error" class="form-control" type="text" placeholder="Email Address">
                    </div>
                  </div>
                  <div class="form-group grid__full mt-10" >
                    <label class="form-component text-white" for="formPhone">Phone</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon"><i class="fas fa-mobile"></i></div>
                      <input id="formPhone" v-model.trim="contactData.phone" :class="validateForm.phone_error" class="form-control" type="text" placeholder="Phone Number">

                  </div>
                  </div>
                  <div class="form-group grid__full mt-10">
                    <label class="form-component text-white" for="formMessage">Message</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon"><i class="fas fa-comment"></i></div>
                      <textarea id="formMessage" v-model.trim="contactData.message" :class="validateForm.message_error" class="form-control" type="text" placeholder="Enter Message"></textarea>
                    </div>
                  </div>

                  <div class="grid__full mt-10">
                    <button @click.prevent="sendMessage"  type="submit" class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"><i class="fas fa-envelope"></i> Send Message</button>
                  </div>


                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </main>
  </div>
</template>
<script>
import axios from "../api/efiwe";
export default {
  data() {
    return {
      validEmail: false,
      proceed: true,
      validateForm: {
        name_error: { "form-error": false },
        email_error: { "form-error": false },
        phone_error: { "form-error": false },
        message_error: { "form-error": false }
      },
      headerTag: { "animated fadeInUp": false, hidden: true },
      contactData: {
        token:
          "C30A52470BFCD552CBA9BD20DF5736A30A17914C83A8E1DF2E05F4A430213CE0D35DD0D2EB7946A16F34ABD60E84F5C901E310DB044A3844572041B01E3D64F3",
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      contactVerification: 0
    };
  },
  methods: {
    sendMessage() {
      const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
      this.validEmail = reg.test(this.contactData.email);

      if (this.contactData.name.length <= 3) {
        this.validateForm.name_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateForm.name_error = { "form-error": false };
      }

      if (this.validEmail === false) {
        this.validateForm.email_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateForm.email_error = { "form-error": false };
      }

      if (this.contactData.phone.length <= 5) {
        this.validateForm.phone_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateForm.phone_error = { "form-error": false };
      }

      if (this.contactData.message.length <= 10) {
        this.validateForm.message_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateForm.message_error = { "form-error": false };
      }

      if (
        this.contactData.name.length > 3 &&
        this.validEmail === true &&
        this.contactData.phone.length > 5 &&
        this.contactData.message.length > 10
      ) {
        this.proceed = true;
        let formActor = this.proceed;

        this.processRequest(formActor);
      }
    },
    processRequest(formActor) {
      const validUser = formActor;
      if (validUser) {
        this.contactVerification = 1;
        axios
          .post("/send-message.php", this.contactData)
          .then(serverRespsonse => {
            if (serverRespsonse.data.status == "Message Successful") {
              setTimeout(() => {
                this.contactVerification = 2;
                setTimeout(() => {
                  window.location.href = "./";
                }, 4000);
              }, 500);
            } else if (serverRespsonse.data.status == "Message Failed") {
              setTimeout(() => {
                this.contactVerification = 3;
                setTimeout(() => {
                  this.contactVerification = 0;
                }, 4000);
              }, 500);
            } else {
              setTimeout(() => {
                this.contactVerification = 0;
              }, 500);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.headerTag = { "animated fadeInUp": true, hidden: false };
      setTimeout(() => {
        this.headerTag = { "animated fadeInDown": false, hidden: false };
      }, 1500);
    }, 100);
  }
};
</script>
