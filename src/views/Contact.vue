<template>
  <div id="contact-ui" class="header-bg">
    <main class="grid__padding__sm static-form">
      <div class="webapp-content__inner">
        <div class="center-txt">
          <div class="webapp-user-form-wrapper" :class="headerTag">
            <div class="webapp-user-form-inner np">
              <div class="form-wrapper">
                <div v-if="contactVerification === 1" class="form-loader form-loader-login verify">
                  <div class="center-txt webapp-ripple-text">
                    <i class="fas fa-envelope"></i> Sending Your Message
                  </div>

                  <div class="webapp-ripple">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div
                  v-else-if="contactVerification === 2"
                  class="form-loader form-loader-login success"
                >
                  <div class="center-txt webapp-ripple-text">
                    <i class="fas fa-check-circle"></i> Message Sent Successful
                  </div>

                  <div class="webapp-ripple">
                    <div></div>
                    <i class="webapp-ripple-notification fa fa-check-circle"></i>
                    <div></div>
                  </div>
                </div>
                <div
                  v-else-if="contactVerification === 3"
                  class="form-loader form-loader-login failure"
                >
                  <div class="center-txt webapp-ripple-text">
                    <i class="fa fa-bell"></i> Message Sending Failed
                  </div>
                  <div class="webapp-ripple">
                    <!--<div></div>-->
                    <i class="webapp-ripple-notification fa fa-times-circle"></i>
                    <!--<div></div>-->
                  </div>
                  <!-- <div class="center-txt webapp-ripple-text"><i class="fas fa-business-time"></i> Coming Soon</div> -->

                  <div class="webapp-ripple">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div class="login-form grid__padding pt-15" v-else>
                  <div class="webapp-user-form-header m-b-sm nb ns">
                    <div class="webapp-user-form-inner">
                      <div class="grid__full">
                        <div class="card" style="width:70%">
                          <div class="card-body">
                            <div class="d-flex flex-row">
                              <div class="round round-lg align-self-center">
                                <i class="fas fa-envelope"></i>
                              </div>
                              <div class="m-l-10">
                                <h3 class="wallet m-b-0 font-light">Contact Us</h3>
                                <h5 class="wallet text-muted m-b-0">
                                  <i class="palette4 fas fa-map-signs"></i> 135 Springer Avenue, Edwardsville, IL, 62025
                                </h5>
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
                      <div class="input-group-addon">
                        <i class="fas fa-user"></i>
                      </div>
                      <input
                        id="formName"
                        v-model.trim="contactData.name"
                        :class="{ 'form-error': submitted && $v.contactData.name.$error }"
                        class="form-control"
                        type="text"
                        placeholder="Enter FullName"
                      />
                    </div>
                    <div class="invalid-fback" v-if="submitted && $v.contactData.name.$error">
                      <div v-if="submitted && !$v.contactData.name.required">
                        <small>Name is required</small>
                      </div>
                      <div v-if="!$v.contactData.name.minLength">
                        <small>Name must have at least {{$v.contactData.name.$params.minLength.min}} letters.</small>
                      </div>
                    </div>
                  </div>
                  <div class="form-group grid__full mt-10">
                    <label class="form-component text-white" for="formEmail">Email ID</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <input
                        id="formEmail"
                        v-model.trim="contactData.email"
                        :class="{ 'form-error': submitted && $v.contactData.email.$error }"
                        class="form-control"
                        type="text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div v-if="submitted && $v.contactData.email.$error" class="invalid-fback">
                      <span v-if="!$v.contactData.email.required">
                        <small>Email is required</small>
                      </span>
                      <span v-if="!$v.contactData.email.email">
                        <small>Email is invalid</small>
                      </span>
                    </div>
                  </div>
                  <div class="form-group grid__full mt-10">
                    <label class="form-component text-white" for="formPhone">Phone</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon">
                        <i class="fas fa-mobile"></i>
                      </div>
                      <input
                        id="formPhone"
                        v-model.trim="contactData.phone"
                        :class="{ 'form-error': submitted && $v.contactData.phone.$error }"
                        class="form-control"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div class="invalid-fback" v-if="submitted && $v.contactData.phone.$error">
                      <div v-if="submitted && !$v.contactData.phone.required"></div>
                      <small>Phone is required</small>
                      <div v-if="!$v.contactData.phone.minLength">
                        <small>Phone must have at least {{$v.contactData.phone.$params.minLength.min}} Digits.</small>
                      </div>
                    </div>
                  </div>
                  <div class="form-group grid__full mt-10">
                    <label class="form-component text-white" for="formMessage">Message</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon">
                        <i class="fas fa-comment"></i>
                      </div>
                      <textarea
                        id="formMessage"
                        v-model.trim="contactData.message"
                        :class="{ 'form-error': submitted && $v.contactData.message.$error }"
                        class="form-control"
                        type="text"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                    <div class="invalid-fback" v-if="submitted && $v.contactData.message.$error">
                      <div v-if="submitted && !$v.contactData.message.required">
                        <small>Message is required</small>
                      </div>
                      <div v-if="!$v.contactData.message.minLength">
                        <small>Message must have at least {{$v.contactData.message.$params.minLength.min}} letters.</small>
                      </div>
                    </div>
                  </div>

                  <div class="grid__full mt-10">
                    <button
                      @click.prevent="sendMessage"
                      type="submit"
                      class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                    >
                      <i class="fas fa-envelope"></i> Send Message
                    </button>
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
export default {
  data() {
    return {
      submitted: false,
      headerTag: { "animated fadeInUp": false, hidden: true },
      contactData: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      contactVerification: 0
    };
  },
  validations: {
    contactData: {
      name: { required, minLength: minLength(3) },
      phone: { required, minLength: minLength(6) },
      email: { required, email },
      message: { required, minLength: minLength(6) }
    }
  },
  methods: {
    sendMessage() {
      this.submitted = true;
      this.$v.contactData.$touch();
      if (this.$v.contactData.$invalid) {
        return;
      }
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
<style scoped>
.form-group {
  margin-bottom: 0.1rem !important;
}
.invalid-fback {
  display: block !important;
  width: 100%;
  margin-top: 0;
  color: #fff !important;
  background: #f46b45;
}
</style>
