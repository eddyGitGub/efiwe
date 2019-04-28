<template>
    <div id="recovery-ui" class="header-bg">
        <main class="grid__padding__sm static-form">
           <div class="webapp-content__inner">
            <div class="center-txt">
                <div class="webapp-user-form-wrapper" :class="headerTag">

                    <div class="webapp-user-form-inner np">
                      <div class="form-wrapper">
                                <div v-if="recoveryVerification === 1" class="form-loader form-loader-login verify">
                                    <!--<div class="center-txt webapp-ripple-text"><i class="fas fa-user"></i> Verifying User</div>-->

                                    <!--<div class="webapp-ripple">-->
                                        <!--<div></div><div></div>-->
                                    <!--</div>-->

                                    <div class="center-txt webapp-ripple-text"><i class="fas fa-business-time"></i> Coming Soon</div>

                                    <div class="webapp-ripple">
                                        <div></div><div></div>
                                    </div>

                                </div>
                                <div v-else-if="recoveryVerification === 2" class="form-loader form-loader-login success">
                                    <div class="center-txt webapp-ripple-text">   <i class="fas fa-check-circle"></i> Verification Successful</div>

                                    <div class="webapp-ripple">
                                        <div></div>
                                        <i class="webapp-ripple-notification fa fa-check-circle"></i>
                                        <div></div>
                                    </div>

                                </div>
                                <div v-else-if="recoveryVerification === 3" class="form-loader form-loader-login failure">
                                        <!--<div class="center-txt webapp-ripple-text">   <i class="fa fa-bell"></i> Verification Failed</div>-->

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
                                <div v-else-if="recoveryVerification === 4" class="form-loader form-loader-login verify">
                                    <div class="center-txt webapp-ripple-text"><i class="fas fa-lock"></i> Updating Your Password</div>

                                    <div class="webapp-ripple">
                                        <div></div><div></div>
                                    </div>

                                </div>
                                <div title="Please login with your new password"  v-else-if="recoveryVerification === 5" class="form-loader form-loader-login success">
                                    <div class="center-txt webapp-ripple-text">   <i class="fas fa-check-circle"></i> Update Successful</div>

                                    <div class="webapp-ripple">
                                        <div></div>
                                        <i class="webapp-ripple-notification fa fa-check-circle"></i>
                                        <div></div>
                                    </div>

                                </div>
                                <div v-else-if="recoveryVerification === 6" class="form-loader form-loader-login failure">
                                    <div class="center-txt webapp-ripple-text">   <i class="fa fa-bell"></i> Update Failed</div>

                                    <div class="webapp-ripple">
                                        <div></div>
                                        <i class="webapp-ripple-notification fa fa-times-circle"></i>
                                        <div></div>
                                    </div>

                                </div>
                                <div class="login-form grid__padding pt-15" v-else>
                                    <div  class="webapp-user-form-header m-b-sm nb ns">
                                        <div class="webapp-user-form-inner">
                                            <div class="grid__full">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex flex-row">
                                                            <div class="round round-lg align-self-center"><i class="fas fa-recycle"></i></div>
                                                            <div class="m-l-10 align-self-center">
                                                                <h3 class="wallet m-b-0 font-light text-white">{{recoveryTitle}}</h3>
                                                                <h5 class="wallet text-muted m-b-0 text-white">{{userGuide}}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div v-if="recoveryStep === 1" class="webapp-user-form-header speedo" :class="navPrev">
                                        <div class="form-group grid__full mt-10">
                                            <label class="form-component text-white" for="recoveryEmail">Email ID</label>
                                            <div class="input-group full-border">
                                                <div class="input-group-addon"><i class="fas fa-envelope"></i></div>
                                                <input id="recoveryEmail" v-model.trim="recoveryData.email" :class="validateUser.email_error" class="form-control" type="text" placeholder="Email Address">
                                            </div>
                                        </div>
                                        <div class="form-group grid__full" title="Enter your Recovery Key used during registration">
                                            <label class="form-component text-white" for="recoveryPasskey">Recovery Key</label>
                                            <div class="input-group full-border">
                                                <div class="input-group-addon"><i class="fas fa-lock"></i></div>
                                                <input id="recoveryPasskey" v-model.trim="recoveryData.key" :class="validateUser.key_error" class="form-control" type="password" placeholder="Recovery Key">
                                            </div>
                                        </div>

                                        <button @click.prevent="verifyUser"  type="submit" class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"><i class="fas fa-arrow-right"></i> Next Step</button>

                                    </div>
                                    <div v-else-if="recoveryStep === 2" class="webapp-user-form-header speedo" :class="navNext">
                                        <div class="form-group grid__full mt-10">
                                            <label class="form-component text-white" for="newpass">New Password</label>
                                            <div class="input-group full-border">
                                                <div class="input-group-addon"><i class="fas fa-lock"></i></div>
                                                <input id="newpass" v-model.trim="recoveryData.npass" :class="validateUser.npass_error" class="form-control" type="password" placeholder="New Password">
                                            </div>
                                        </div>
                                        <div class="form-group grid__full" title="Please confirm your password by entering the identical password above">
                                            <label class="form-component text-white" for="conpass">Confirm Password</label>
                                            <div class="input-group full-border">
                                                <div class="input-group-addon"><i class="fas fa-lock"></i></div>
                                                <input id="conpass" v-model.trim="recoveryData.cpass" :class="validateUser.cpass_error" class="form-control" type="password" placeholder="Confirm Password">
                                            </div>
                                        </div>

                                      <button @click.prevent="toggleSteps(1)"  type="submit" class="button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-arrow-left"></i> Prev Step</button>
                                      <button @click.prevent="validatePassword"  type="submit" class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"><i class="fas fa-save"></i> Update Data</button>

                                    </div>
                                    <div class="webapp-user-form-header speedo" v-else>
                                        <button @click.prevent="loginUser"  type="submit" class="button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-lock"></i> Sign in</button>
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
      recoveryTitle: "Forgot Password",
      userGuide: "1. Enter Your Data",
      active: true,
      authenticated: " ",
      validEmail: false,
      proceed: true,
      validateUser: {
        email_error: { "form-error": false },
        key_error: { "form-error": false },
        npass_error: { "form-error": false },
        cpass_error: { "form-error": false }
      },
      headerTag: { "animated fadeInUp": false, hidden: true },
      recoveryData: {
        token:
          "C30A52470BFCD552CBA9BD20DF5736A30A17914C83A8E1DF2E05F4A430213CE0D35DD0D2EB7946A16F34ABD60E84F5C901E310DB044A3844572041B01E3D64F3",
        fullname: "",
        email: "",
        key: "",
        npass: "",
        cpass: ""
      },
      recoveryVerification: 0,
      recoveryStep: 1,
      navPrev: {
        fadeOutLeft: false,
        fadeInLeft: false,
        fadeOutRight: false,
        fadeInRight: false
      },
      navNext: {
        fadeOutLeft: false,
        fadeInLeft: false,
        fadeOutRight: false,
        fadeInRight: false
      }
    };
  },
  methods: {
    tokenizer() {
      let validation = localStorage.getItem("loginToken");
      if (validation) {
        window.location.href = "./";
      }
    },
    toggleSteps(step) {
      if (step === 1) {
        this.recoveryTitle = "Forgot Password";
        this.userGuide = "1. Enter Your Data";
        this.navNext = { fadeOutRight: true };
        setTimeout(() => {
          this.recoveryStep = step;
          this.navPrev = { fadeInLeft: true };
        }, 100);
        setTimeout(() => {
          this.navPrev = { fadeInLeft: false };
          this.navNext = { fadeOutRight: false };
        }, 1000);
      } else if (step === 2) {
        this.userGuide = "2. Update Your Password";
        this.navPrev = { fadeOutLeft: true };
        setTimeout(() => {
          this.recoveryStep = step;
          this.navNext = { fadeInRight: true };
        }, 100);
        setTimeout(() => {
          this.navPrev = { fadeOutLeft: false };
          this.navNext = { fadeInRight: false };
        }, 1000);
      } else {
        console.log("Invalid step entered on recovery module");
      }
    },
    verifyUser() {
      const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
      this.validEmail = reg.test(this.recoveryData.email);

      if (this.validEmail === false) {
        this.validateUser.email_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateUser.email_error = { "form-error": false };
      }

      if (this.recoveryData.key.length <= 3) {
        this.validateUser.key_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateUser.key_error = { "form-error": false };
      }

      if (this.validEmail === true && this.recoveryData.key.length > 3) {
        this.validateUser.email_error = { "form-error": false };
        this.validateUser.key_error = { "form-error": false };
        this.recoveryVerification = 1;

        axios
          .post("/verify-user.php", this.recoveryData)
          .then(verResponse => {
            if (verResponse.data.status === "Verification Successful") {
              this.recoveryData.fullname = verResponse.data.user;
              this.recoveryTitle = "Welcome Back " + this.avatar;
              this.recoveryVerification = 2;

              setTimeout(() => {
                this.toggleSteps(2);
                this.recoveryVerification = 0;
              }, 1000);
            } else if (verResponse.data.status === "Verification Failed") {
              setTimeout(() => {
                this.recoveryVerification = 3;
                setTimeout(() => {
                  this.recoveryStep = 1;
                  this.recoveryVerification = 0;
                }, 4000);
              }, 500);
            } else {
              setTimeout(() => {
                this.recoveryVerification = 0;
                this.recoveryStep = 1;
              }, 500);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    validatePassword() {
      if (this.recoveryData.npass.length <= 6) {
        this.validateUser.npass_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateUser.npass_error = { "form-error": false };
      }

      if (this.recoveryData.cpass.length <= 6) {
        this.validateUser.cpass_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateUser.cpass_error = { "form-error": false };
      }
      if (
        this.recoveryData.npass.length > 6 &&
        this.recoveryData.cpass.length > 6 &&
        this.recoveryData.npass === this.recoveryData.cpass
      ) {
        this.validateUser.npass_error = { "form-error": false };
        this.validateUser.cpass_error = { "form-error": false };
        this.proceed = true;
        setTimeout(() => {
          this.updatePassword(this.recoveryData.npass);
        }, 500);
      } else {
        this.validateUser.npass_error = { "form-error": true };
        this.proceed = false;
        this.validateUser.cpass_error = { "form-error": true };
        this.proceed = false;
      }
    },
    updatePassword(newPassword) {
      if (newPassword) {
        this.recoveryVerification = 4;
        axios
          .post("/update-password.php", this.recoveryData)
          .then(recoveryResponse => {
            if (recoveryResponse.data.status === "Update Successful") {
              /* Email Notification For Password Update */
              this.recoveryData.token =
                "63f683c7085c1f6665db909526b646ebcc2fea09c5a80c8670e0e1de6e3be129d47004a95b274648eb8f3a9425c8d59c3e16a632c6b23a075d27541e3ce05d3f";
              axios
                .post("/notify-user.php", this.recoveryData)
                .then(notificationResponse => {
                  if (notificationResponse.data === "Notification Sent") {
                    console.log("Registration Notification Sent");
                  } else {
                    console.log("Registration Notification Error");
                  }
                })
                .catch(error => console.log(error));

              setTimeout(() => {
                this.recoveryVerification = 5;
                setTimeout(() => {
                  this.$router.push("/login");
                }, 4000);
              }, 1000);
            } else if (recoveryResponse.data.status === "Update Failed") {
              setTimeout(() => {
                this.recoveryVerification = 6;
                setTimeout(() => {
                  this.recoveryVerification = 0;
                }, 4000);
              }, 500);
            } else {
              setTimeout(() => {
                this.recoveryVerification = 0;
              }, 500);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  computed: {
    avatar: function() {
      let fullName = this.recoveryData.fullname,
        fisrtname = fullName
          .split(" ")
          .slice(0, 1)
          .join(" "),
        lastname = fullName
          .split(" ")
          .slice(1)
          .join(" ");
      return fisrtname;
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
    this.tokenizer();
    this.authenticated = this.session;
  }
};
</script>
