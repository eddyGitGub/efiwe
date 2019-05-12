<template>
  <div>
    <div id="page-header" class="section-block landing-bg">
      <div class="row flex">
        <div class="column width-8 push-2">
          <div class="feature-content">
            <div class="feature-content-inner center">
              <h1 class="color-white mb-0 font-mont">Book Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="dashboard" class="top-border animated fadeInUp">
      <div class="card w-85" v-if="details">
        <div class="search-banner">
          <a>
            <div class="offset-8 event-thumb-img">
              <div class="view overlay">
                <img
                  class="full-width search-img card-img-top"
                  :src="getPic(details.bookImage)"
                  alt
                >
              </div>
            </div>
          </a>
        </div>
        <!-- <div class="view overlay">
          <img
            :src="getPic(details.bookImage)"
            class="full-width search-img card-img-top"
            alt="..."
          >
        </div>-->

        <div class="card-body">
          <div class="row mx-auto" style="width: 70%;">
            <div class="col-4">
              <h5>Field</h5>
              <p>{{details.field}}</p>
            </div>
            <div class="col-4">
              <h5>Type</h5>
              <p>{{details.type}}</p>
            </div>
            <div class="col-3">
              <h5>Status</h5>
              <p>{{details.status}}</p>
            </div>
            <hr>
            <div class="col-4">
              <h5>Min Publish Year</h5>
              <p>{{details.year}}</p>
            </div>
            <div class="col-4">
              <h5>Copies</h5>
              <p>{{details.copies}}</p>
            </div>
            <div class="col-3" v-if="details.requestedBy">
              <h5>Requested By</h5>
              <p>{{ details.requestedBy.user.firstname}} {{ details.requestedBy.user.lastname}}</p>
            </div>
            <div class="col-12">
              <h5>Description</h5>
              <p>{{ details.description}}</p>
            </div>
            <div class="col-3">
              <h5>Requested Date</h5>
              <p>{{ details.created_at | formatDate}}</p>
            </div>
            <div class="col-3" v-if="details.requestHandleBy">
              <h5>Owned By</h5>
              <p>{{ details.requestHandleBy.firstname}} {{ details.requestHandleBy.lastname}}</p>
            </div>
            <div class="col-3" v-if="details.dateOwned">
              <h5>Date Owned</h5>
              <p>{{ details.dateOwned | formatDate}}</p>
            </div>
            <div class="col-3">
              <h5>Request Duration</h5>
              <p>{{ details.durationOfRequest}}</p>
            </div>
            <div class="col-3" v-if="details.requestedBy">
              <h5>School</h5>
              <p>{{ details.requestedBy.school}}</p>
            </div>
            <div class="col-12" v-if="details.status == 'Book Request'">
              <button
                type="button"
                v-if="authenticated"
                class="relax-left button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white float-right"
                :disabled="submitting"
                @click="ownedBookReq(details._id)"
              >Owned Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../api/efiwe";
export default {
  data() {
    return {
      field1: "123 test st",
      field2: null,
      field3: null,
      street: null,
      addr2: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      form: {
        street: null,
        addr2: null,
        city: null,
        state: null,
        zip: null,
        country: null
      },
      submitting: false,
      details: {}
    };
  },
  methods: {
    ownedBookReq(id) {
      this.submitting = true;
      const model = {
        id: id,
        status: "Owned"
      };
      axios
        .post("/books/updateStatus/", model)
        .then(res => {
          this.submitting = false;
          this.$toastr("success", res.data.message, "status");
          this.$router.push("/books");
        })
        .catch(err => {
          this.submitting = false;
          console.log("Error", err.statusText);
        });
    },
    getPic(index) {
      return "http://efiwe.org:3100/" + index;
    }
  },
  created() {
    const id = this.$route.params.id;
    if (id == null) {
      this.$toastr("error", "Invalid parameters", "status");
      this.$router.push("/books");
      return;
    }
    axios
      .get(`/books/bookById/${id}`)
      .then(res => {
        this.details = res.data;
        console.log("result", this.details);
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    authenticated() {
      const userData = JSON.parse(localStorage.getItem("loginUser"));
      const auth = userData || "{}";
      console.log("user", auth);
      return auth.role_id !== 3;
    }
  }
};
</script>

