
<template>
  <div id="recovery-ui" class="header-bg">
    <main class="grid__padding__sm static-form">
      <div class="webapp-content__inner">
        <div class="center-txt">
          <div class="webapp-user-form-wrapper">
            <div class="webapp-user-form-inner np">
              <div class="form-wrapper">
                <div class="alert alert-danger" role="alert" v-if="message">{{message}}</div>
                <div class="webapp-user-form-header speedo">
                  <form autocomplete="off" @submit.prevent="requestResetPassword" method="post">
                    <div class="form-group grid__full mt-10">
                      <label class="form-component text-white" for="email">Email ID</label>
                      <div class="input-group full-border">
                        <div class="input-group-addon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <input
                          id="email"
                          v-model.trim="email"
                          :class="has_error"
                          class="form-control"
                          type="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                      :disabled="loading"
                    >
                      <span v-show="loading" class="spinner-border spinner-border-sm mr-1"></span>
                      <i class="fas fa-arrow-right"></i> Send Password Reset Link
                    </button>
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
export default {
  data() {
    return {
      message: "",
      email: null,
      loading: false
    };
  },
  methods: {
    requestResetPassword() {
      this.loading = true;
      axios.post(`reset_password/user/${this.email}`).then(
        result => {
          this.message = result.data;
          this.loading = false;
          console.log(result.data);
        },
        error => {
          this.loading = false;
          console.error(error);
        }
      );
    }
  }
};
</script>