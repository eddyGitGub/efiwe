<template>
  <div id="login-ui" class="header-bg">
    <main class="grid__padding__sm static-form">
      <div class="webapp-content__inner">
        <div class="center-txt">
          <div class="webapp-user-form-wrapper" :class="headerTag">
            <div class="webapp-user-form-inner np">
              <div class="form-wrapper">
                <div v-if="loginVerification === 1" class="form-loader form-loader-login verify">
                  <!--<div class="center-txt webapp-ripple-text"><i class="fas fa-user"></i> Authenticating User</div>-->

                  <!--<div class="webapp-ripple">-->
                  <!--<div></div><div></div>-->
                  <!--</div>-->

                  <div class="center-txt webapp-ripple-text">
                    <i class="fas fa-business-time"></i> Login.....
                  </div>

                  <div class="webapp-ripple">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div
                  v-else-if="loginVerification === 2"
                  class="form-loader form-loader-login success"
                >
                  <div class="center-txt webapp-ripple-text">
                    <i class="fas fa-check-circle"></i> Authentication Successful
                  </div>

                  <div class="webapp-ripple">
                    <div></div>
                    <i class="webapp-ripple-notification fa fa-check-circle"></i>
                    <div></div>
                  </div>
                </div>
                <div
                  v-else-if="loginVerification === 3"
                  class="form-loader form-loader-login failure"
                >
                  <!--<div class="center-txt webapp-ripple-text">   <i class="fa fa-bell"></i> Authentication Failed</div>-->

                  <!--<div class="webapp-ripple">-->
                  <!--<div></div>-->
                  <!--<i class="webapp-ripple-notification fa fa-times-circle"></i>-->
                  <!--<div></div>-->
                  <!--</div>-->

                  <div class="center-txt webapp-ripple-text">
                    <i class="fas fa-business-time"></i>Invalid email or password.
                  </div>

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
                                <i class="fas fa-user"></i>
                              </div>
                              <div class="m-l-10 align-self-center">
                                <h3 class="wallet m-b-0 font-light text-white">Login</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="form-group grid__full mt-10">
                    <label class="form-component text-white" for="loginEmail">Email ID</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <input
                        id="loginEmail"
                        v-model.trim="loginData.email"
                        :class="{ 'form-error': submitted && $v.loginData.email.$error }"
                        class="form-control"
                        type="text"
                        placeholder="Email Address"
                      >
                      <div v-if="submitted && $v.loginData.email.$error" class="invalid-fback">
                        <span v-if="!$v.loginData.email.required">Email is required</span>
                        <span v-if="!$v.loginData.email.email">Email is invalid</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group grid__full">
                    <label class="form-component text-white" for="loginPasskey">Password</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon">
                        <i class="fas fa-lock"></i>
                      </div>
                      <input
                        id="loginPasskey"
                        v-model.trim="loginData.password"
                        :class="{ 'form-error': submitted && $v.loginData.password.$error }"
                        class="form-control"
                        type="password"
                        placeholder="Password"
                      >
                      <div v-if="submitted && $v.loginData.password.$error" class="invalid-fback">
                        <span v-if="!$v.loginData.password.required">Password is required</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group grid__full">
                    <div class="input-group">
                      <div class="login-session">
                        <label class="md-check form-component text-white" for="loginSession">
                          <input id="loginSession" type="checkbox" class="has-value">
                          <i class="primary"></i> Keep me signed in
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="grid__four__sticky">
                    <span
                      @click.prevent="forgotPass"
                      class="form-nav relax-right color-white color-hover-white"
                    >
                      <i class="fas fa-question-circle"></i> Forgot Pass
                    </span>
                  </div>

                  <div class="grid__half__sticky">
                    <button
                      @click.prevent="loginUser"
                      type="submit"
                      class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                    >
                      <i class="fas fa-lock"></i> Sign in
                    </button>
                  </div>

                  <div class="grid__four__sticky">
                    <span
                      @click.prevent="register"
                      class="form-nav relax-left color-white color-hover-white"
                    >
                      <i class="fas fa-user-plus"></i> New User
                    </span>
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
import jwt_decode from "jwt-decode";
import Vue from "vue";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
//import {store} from "./store.js";
export default {
  data() {
    return {
      submitted: false,
      active: true,
      authenticated: "",
      validEmail: false,
      proceed: true,
      validateUser: {
        email_error: { "form-error": false },
        password_error: { "form-error": false }
      },
      headerTag: { "animated fadeInUp": false, hidden: true },
      loginData: {
        email: "",
        password: ""
      },
      loginVerification: 0
    };
  },
  validations: {
    loginData: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    loginUser() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.proceed = true;
      let formActor = this.proceed;

      this.processRequest(formActor);
    },
    processRequest(formActor) {
      if (formActor) {
        this.loginVerification = 1;
        let authUser = {};
        axios
          .post("/auth", this.loginData)
          .then(loginRequest => {
            if (loginRequest.status === 200) {
              setTimeout(() => {
                this.loginVerification = 2;
                let crypto = Math.random()
                  .toString(36)
                  .substr(2, 14);

                //"session-id" = crypto;
                localStorage.setItem("loginToken", loginRequest.data.token);
                localStorage.setItem(
                  "loginUser",
                  JSON.stringify(loginRequest.data.loginUser)
                );
                const authUser = JSON.parse(localStorage.getItem("loginUser"));
                this.$root.$emit("auth");
                setTimeout(() => {
                  if (authUser.role_id === 1) {
                    this.$router.push("/users");
                  } else if (authUser.role_name === "Librarian") {
                    this.$router.push("/librarian");
                  } else if (authUser.role_id === 5) {
                    this.$router.push("/volunteer");
                  } else {
                    this.$router.push("/books");
                  }
                }, 4000);
              }, 500);
            } else if (loginRequest.status === 500) {
              setTimeout(() => {
                this.loginVerification = 3;
                setTimeout(() => {
                  this.loginVerification = 0;
                }, 4000);
              }, 500);
            } else {
              setTimeout(() => {
                this.loginVerification = 0;
                //app.$store.state.isLoggedIn = false;
              }, 500);
            }
          })
          .catch(error => {
            setTimeout(() => {
              this.loginVerification = 3;
              setTimeout(() => {
                this.loginVerification = 0;
              }, 4000);
            }, 500);
            console.log(error.status);
          });
      }
    },
    register() {
      this.$router.push("/register");
    },
    forgotPass() {
      this.$router.push("/forgot-password");
    },
    tokenizer() {
      let validation = localStorage.getItem("loginToken");
      if (validation) {
        window.location.href = "./";
      }
    }
  },
  props: ["session"],
  mounted() {
    setTimeout(() => {
      this.headerTag = { "animated fadeInUp": true, hidden: false };
      setTimeout(() => {
        this.headerTag = { "animated fadeInDown": false, hidden: false };
      }, 1500);
    }, 100);
  },
  beforeMount() {
    this.authenticated = this.session;
  }
};
</script>
<style scoped>
.invalid-fback {
  display: block !important;
  width: 100%;
  margin-top: 0;
  color: #fff !important;
  background: #f46b45;
}
</style>

