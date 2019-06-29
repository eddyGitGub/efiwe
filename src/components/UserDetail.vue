<template>
  <div>
    <div class="card text-center mt-5">
      <div class="card-header">
        <button
          class="btn btn-primary btn-sm col-2 float-right"
          @click="openModal()"
        >Add User to your profile</button>
      </div>

      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <div class="card" style="width: 18rem;">
          <div class="card-header">Featured</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
      <div class="card-footer text-muted">2 days ago</div>
    </div>
    <!-- Model -->
    <modal v-if="showModal" side position="top-right" direction="right">
      <h3 slot="header" class="modal-title">Add new user under your profile</h3>

      <div slot="body">
        <form>
          <div class="form-group">
            <label>Firstname</label>
            <input
              type="text"
              class="form-control"
              placeholder="firstname"
              required="required"
              v-model="userDetail.firstname"
              :class="{ 'border border-danger': $v.userDetail.firstname.$error }"
            >
            <div class="bg-danger text-white" v-if="$v.userDetail.firstname.$error">
              <span v-if="!$v.userDetail.firstname.required">Firstname is required</span>
              <span
                v-if="!$v.userDetail.firstname.minLength"
              >Firstname must have at least {{$v.userDetail.firstname.$params.minLength.min}} letters.</span>
            </div>
            <!-- <div class="bg-danger text-white" v-if="error">Firstname must be greater than 0</div> -->
          </div>
          <div class="form-group">
            <label>Lastname</label>
            <input
              type="text"
              class="form-control"
              placeholder="lastname"
              required="required"
              v-model="userDetail.lastname"
              :class="{ 'border border-danger': $v.userDetail.lastname.$error }"
            >
            <div class="bg-danger text-white" v-if="$v.userDetail.lastname.$error">
              <div v-if="!$v.userDetail.lastname.required">lastname is required</div>
            </div>
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              class="form-control"
              placeholder="phone"
              required="required"
              v-model="userDetail.phone"
              :class="{ 'border border-danger': $v.userDetail.phone.$error }"
            >
            <div class="bg-danger text-white" v-if="$v.userDetail.phone.$error">
              <div v-if="!$v.userDetail.phone.required">phone is required</div>
              <span
                v-if="!$v.userDetail.phone.minLength"
              >Phone Number must have at least {{$v.userDetail.phone.$params.minLength.min}} letters.</span>
            </div>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="email"
              required="required"
              v-model="userDetail.email"
              :class="{ 'border border-danger': $v.userDetail.email.$error }"
            >
            <div class="bg-danger text-white" v-if="$v.userDetail.email.$error">
              <span v-if="!$v.userDetail.email.required">Email is required</span>
              <span v-if="!$v.userDetail.email.email">Email is invalid</span>
            </div>
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="password"
              required="required"
              v-model="userDetail.password"
              :class="{ 'border border-danger': $v.userDetail.password.$error }"
            >
            <div class="bg-danger text-white" v-if="$v.userDetail.password.$error">
              <div v-if="!$v.userDetail.password.required">password is required</div>
            </div>
          </div>
        </form>
      </div>

      <div slot="footer">
        <button type="button" class="btn btn-outline-info" @click="closeModal()">Close</button>
        <button
          type="button"
          class="btn btn-primary"
          data-dismiss="modal"
          @click="submitAndClose()"
        >Submit</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
import axios from "../api/efiwe";
import Modal from "../components/Modal.vue";
Vue.use(Vuelidate);
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      submitting: false,
      error: false,
      userDetail: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        verify_password: "",
        nationality: "n/a",
        location: "n/a",
        motivation: "n/a",
        workHours: "Same as the creator",
        volunteerRole: "Same as the creator"
      }
    };
  },
  validations: {
    userDetail: {
      firstname: { required, minLength: minLength(3) },
      lastname: { required },
      email: { required, email },
      phone: { required, minLength: minLength(9) },
      password: { required }
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitAndClose() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.userDetail.verify_password = this.userDetail.password;
      console.log("Passed");
      this.submitting = true;
      let url = "/others/addUser/";
      axios
        .post(url, this.userDetail)
        .then(response => {
          this.submitting = false;
          this.closeModal();
        })
        .catch(err => {
          console.log(err);
          this.submitting = false;
        });
    },
    getOrganizationUser() {
      axios
        .get("/users/organization/")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getOrganizationUser();
  }
};
</script>

