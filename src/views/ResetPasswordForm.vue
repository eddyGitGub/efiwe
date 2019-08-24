<template>
  <div id="recovery-ui" class="header-bg">
    <main class="grid__padding__sm static-form">
      <div class="webapp-content__inner">
        <div class="center-txt">
          <div class="webapp-user-form-wrapper">
            <div class="webapp-user-form-inner np">
              <div class="form-wrapper">
                <div class="webapp-user-form-header speedo">
                  <div>
                    <h3>{{message}}</h3>
                  </div>
                  <form autocomplete="off" @submit.prevent="resetPassword">
                    <div class="form-group grid__full">
                      <label class="form-component text-white" for="opassword">Password</label>
                      <div
                        class="form-group grid__full"
                        :class="{ 'form-error': submitted && $v.user.password.$error }"
                      >
                        <div class="input-group full-border">
                          <div class="input-group-addon">
                            <i class="fas fa-lock"></i>
                          </div>
                          <input
                            id="opassword"
                            v-model.trim="user.password"
                            class="form-control"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                        <div v-if="submitted && $v.user.password.$error" class="invalid-fback">
                          <span v-if="!$v.user.password.required">Password is required</span>
                          <span
                            v-if="!$v.user.password.minLength"
                          >Password must be at least 6 characters</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group grid__full">
                      <label
                        class="form-component text-white"
                        for="verify-password"
                      >Confirm Password</label>
                      <div
                        class="input-group top-border right-border bottom-border left-border-mobile"
                      >
                        <input
                          id="verify-password"
                          v-model.trim="user.password_confirmation"
                          :class="{ 'form-error': submitted && $v.user.password_confirmation.$error }"
                          class="form-control"
                          type="password"
                          placeholder="Confirm Password"
                        />
                        <div
                          v-if="submitted && $v.user.password_confirmation.$error"
                          class="invalid-fback"
                        >
                          <span
                            v-if="!$v.user.password_confirmation.required"
                          >Confirm Password is required</span>
                          <span
                            v-else-if="!$v.user.password_confirmation.sameAsPassword"
                          >Passwords must match</span>
                        </div>
                      </div>
                    </div>
                    <div class="grid__full">
                      <button
                        type="submit"
                        class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                      >
                        <i class="fas fa-user-plus"></i> Update
                      </button>
                    </div>
                  </form>
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
      message: "",
      user: {
        password: "",
        password_confirmation: ""
      }
    };
  },
  validations: {
    user: {
      password: { required, minLength: minLength(6) },
      password_confirmation: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    resetPassword() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.user.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.user.$pending || this.$v.user.$error) return;
      const { userId, token } = this.$route.params;

      axios
        .post(`reset_password/receive_new_password/${userId}/${token}`, {
          password: this.user.password
        })
        .then(
          result => {
            this.$router.push({ name: "login" });
          },
          error => {
            console.error(error);
          }
        );
    }
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
