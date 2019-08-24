
<template>
  <div id="recovery-ui" class="header-bg">
    <main class="grid__padding__sm static-form">
      <div class="webapp-content__inner">
        <div class="center-txt">
          <div class="page-header">
            <h4 class="text-white">Register</h4>
          </div>
          <div class="webapp-user-form-wrapper">
            <div class="webapp-user-form-inner np">
              <div class="form-wrapper">
                <div class="alert alert-danger" role="alert" v-if="message">{{message}}</div>
                <div class="webapp-user-form-header speedo">
                  <form autocomplete="off" @submit.prevent="registerShipper" method="post">
                    <div class="form-group grid__full mt-10">
                      <label class="form-component text-white" for="name">Name</label>
                      <div class="input-group full-border">
                        <div class="input-group-addon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <input
                          id="name"
                          v-model.trim="shipper.name"
                          :class="{ 'form-error': loading && $v.shipper.name.$error }"
                          class="form-control"
                          type="text"
                          placeholder="Company name"
                          required
                        />
                      </div>
                      <div v-if="loading && $v.shipper.name.$error" class="invalid-fback">
                        <span v-if="!$v.shipper.name.required">Name is required</span>
                        <span v-if="!$v.shipper.name.minLength">Name must be at least 4 characters</span>
                      </div>
                    </div>
                    <div class="form-group grid__full mt-10">
                      <label class="form-component text-white" for="location">Location</label>
                      <div class="input-group full-border">
                        <div class="input-group-addon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <input
                          id="location"
                          v-model.trim="shipper.location"
                          :class="{ 'form-error': loading && $v.shipper.location.$error }"
                          class="form-control"
                          type="text"
                          placeholder="location"
                          required
                        />
                      </div>
                      <div v-if="loading && $v.shipper.location.$error" class="invalid-fback">
                        <span v-if="!$v.shipper.location.required">Location is required</span>
                        <span
                          v-if="!$v.shipper.location.minLength"
                        >Location must be at least 4 characters</span>
                      </div>
                    </div>
                    <div class="form-group grid__full mt-10">
                      <label
                        class="form-component text-white"
                        for="shipmentDestinations"
                      >Shipment Destinations</label>
                      <div class="input-group full-border">
                        <div class="input-group-addon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <input
                          id="shipmentDestinations"
                          v-model.trim="shipmentDestinations"
                          :class="{ 'form-error': loading && $v.shipper.shipmentDestinations.$error }"
                          class="form-control"
                          type="text"
                          placeholder="Shipment Destinations"
                          required
                        />
                      </div>
                      <div
                        v-if="loading && $v.shipper.shipmentDestinations.$error"
                        class="invalid-fback"
                      >
                        <span
                          v-if="!$v.shipper.shipmentDestinations.required"
                        >Shipment Destinations is required</span>
                        <span
                          v-if="!$v.shipper.shipmentDestinations.minLength"
                        >Shipment Destinations must be at least 4 characters</span>
                      </div>
                    </div>
                    <div class="form-group grid__full mt-10">
                      <label class="form-component text-white" for="whatsAppLink">WhatsApp Link</label>
                      <div class="input-group full-border">
                        <div class="input-group-addon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <input
                          id="whatsAppLink"
                          v-model.trim="shipper.whatsAppLink"
                          :class="{ 'form-error': loading && $v.shipper.whatsAppLink.$error }"
                          class="form-control"
                          type="text"
                          placeholder="WhatsApp Link"
                          required
                        />
                      </div>
                      <div v-if="loading && $v.shipper.whatsAppLink.$error" class="invalid-fback">
                        <span v-if="!$v.shipper.whatsAppLink.required">WhatsApp Link is required</span>
                        <span
                          v-if="!$v.shipper.whatsAppLink.minLength"
                        >WhatsApp Link must be at least 6 characters</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                      :disabled="loading"
                    >
                      <span v-show="loading" class="spinner-border spinner-border-sm mr-1"></span>
                      <i class="fas fa-arrow-right"></i> Register
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
import { required, email, minLength } from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
export default {
  data() {
    return {
      message: "",
      shipper: {
        name: "",
        location: "",
        shipmentDestinations: "",
        whatsAppLink: ""
      },
      loading: false
    };
  },
  validations: {
    shipper: {
      name: { required, minLength: minLength(4) },
      location: { required, minLength: minLength(4) },
      shipmentDestinations: { required, minLength: minLength(4) },
      whatsAppLink: { required, minLength: minLength(4) }
    }
  },
  methods: {
    registerShipper() {
      // stop here if form is invalid
      console.log(this.shipper);
      this.$v.shipper.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.shipper.$pending || this.$v.shipper.$error) return;
      this.loading = true;
      axios.post("/shippers", this.shipper).then(
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