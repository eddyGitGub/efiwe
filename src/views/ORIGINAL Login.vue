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

                                    <div class="center-txt webapp-ripple-text"><i class="fas fa-business-time"></i> Coming Soon</div>

                                    <div class="webapp-ripple">
                                        <div></div><div></div>
                                    </div>

                                </div>
                                <div v-else-if="loginVerification === 2" class="form-loader form-loader-login success">
                                    <div class="center-txt webapp-ripple-text">   <i class="fas fa-check-circle"></i> Authentication Successful</div>

                                    <div class="webapp-ripple">
                                        <div></div>
                                        <i class="webapp-ripple-notification fa fa-check-circle"></i>
                                        <div></div>
                                    </div>

                                </div>
                                <div v-else-if="loginVerification === 3" class="form-loader form-loader-login failure">
                                        <!--<div class="center-txt webapp-ripple-text">   <i class="fa fa-bell"></i> Authentication Failed</div>-->

                                    <!--<div class="webapp-ripple">-->
                                        <!--<div></div>-->
                                        <!--<i class="webapp-ripple-notification fa fa-times-circle"></i>-->
                                        <!--<div></div>-->
                                    <!--</div>-->

                                    <div class="center-txt webapp-ripple-text"><i class="fas fa-business-time"></i> Coming Soon</div>

                                    <div class="webapp-ripple">
                                        <div></div><div></div>
                                    </div>

                                </div>
                                <div class="login-form grid__padding pt-15" v-else>
                                    <div  class="webapp-user-form-header m-b-sm nb ns">
                                        <div class="webapp-user-form-inner">
                                            <div class="grid__full">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex flex-row">
                                                            <div class="round round-lg align-self-center"><i class="fas fa-user"></i></div>
                                                            <div class="m-l-10 align-self-center">
                                                                <h3 class="wallet m-b-0 font-light text-white">Login: </h3>
                                                                <h5 class="wallet text-muted m-b-0 text-white">to your account</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="form-group grid__full mt-10">
                                        <label class="form-component text-white" for="loginEmail">Email ID</label>
                                        <div class="input-group full-border">
                                            <div class="input-group-addon"><i class="fas fa-envelope"></i></div>
                                            <input id="loginEmail" v-model.trim="loginData.email" :class="validateUser.email_error" class="form-control" type="text" placeholder="Email Address">
                                        </div>
                                    </div>
                                    <div class="form-group grid__full">
                                        <label class="form-component text-white" for="loginPasskey">Password</label>
                                        <div class="input-group full-border">
                                            <div class="input-group-addon"><i class="fas fa-lock"></i></div>
                                            <input id="loginPasskey" v-model.trim="loginData.password" :class="validateUser.password_error" class="form-control" type="password" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group grid__full">
                                    <div class="input-group">
                                      <div class="login-session">
                                        <label class="md-check form-component text-white" for="loginSession">
                                          <input id="loginSession" type="checkbox" class="has-value"><i class="primary"></i> Keep me signed in
                                        </label>
                                      </div>
                                   </div>

                                  </div>

                                  <div class="grid__four__sticky">
                                    <span @click.prevent="forgotPass" class="form-nav relax-right color-white color-hover-white"><i class="fas fa-question-circle"></i> Forgot Pass</span>
                                  </div>

                                  <div class="grid__half__sticky">
                                    <button @click.prevent="loginUser"  type="submit" class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"><i class="fas fa-lock"></i> Sign in</button>
                                  </div>

                                  <div class="grid__four__sticky">
                                    <span @click.prevent="register" class="form-nav relax-left  color-white color-hover-white"><i class="fas fa-user-plus"></i> New User</span>
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
        token:
          "C30A52470BFCD552CBA9BD20DF5736A30A17914C83A8E1DF2E05F4A430213CE0D35DD0D2EB7946A16F34ABD60E84F5C901E310DB044A3844572041B01E3D64F3",
        email: "",
        password: ""
      },
      loginVerification: 0
    };
  },
  methods: {
    loginUser() {
      const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
      this.validEmail = reg.test(this.loginData.email);

      if (this.validEmail === false) {
        this.validateUser.email_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateUser.email_error = { "form-error": false };
      }

      if (this.loginData.password.length <= 3) {
        this.validateUser.password_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateUser.password_error = { "form-error": false };
      }

      if (this.validEmail === true && this.loginData.password.length > 3) {
        this.proceed = true;
        let formActor = this.proceed;

        this.processRequest(formActor);
      }
    },
    processRequest(formActor) {
      if (formActor) {
        this.loginVerification = 1;
        axios
          .post("/auth-user.php", this.loginData)
          .then(loginRequest => {
            if (loginRequest.data.status === "Authentication Successful") {
              setTimeout(() => {
                this.loginVerification = 2;
                let crypto = Math.random()
                  .toString(36)
                  .substr(2, 14);
                let loginToken = {
                  id: loginRequest.data.id,
                  email: this.loginData.email,
                  user: loginRequest.data.user,
                  phone: loginRequest.data.phone,
                  /* 'recovery_key': loginRequest.data.recovery_key, */
                  "session-id": crypto
                };
                localStorage.setItem("loginToken", JSON.stringify(loginToken));
                this.authenticated = this.session;
                setTimeout(() => {
                  window.location.href = "./";
                }, 4000);
              }, 500);
            } else if (loginRequest.data.status === "Authentication Failed") {
              setTimeout(() => {
                this.loginVerification = 3;
                setTimeout(() => {
                  this.loginVerification = 0;
                }, 4000);
              }, 500);
            } else {
              setTimeout(() => {
                this.loginVerification = 0;
              }, 500);
            }
          })
          .catch(error => {
            console.log(error);
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
