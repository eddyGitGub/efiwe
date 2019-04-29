<template>
  <div class="content clearfix">
    <div id="blog-header" class="section-block header-bg"></div>

    <div id="blog" class="top-border animated fadeInUp">
      <div class="section-block bkg-light">
        <div class="row">
          <div class="column width-3"></div>
          <div class="column width-12">
            <div class="row flex">
              <div class="column width-12 center magic-b mx-auto">
                <!-- <div>
                <b-button v-b-modal.modal1>Launch demo modal</b-button>-->
                <!-- Modal Component -->
                <!-- <b-modal id="modal1" title="BootstrapVue">
                    <p class="my-4">Hello from modal!</p>
                  </b-modal>
                </div>-->
                <table class="table table-bordered table-hover mr-4">
                  <thead>
                    <tr>
                      <th>#</th>

                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Category</th>
                      <th>Is Admin</th>
                      <th>Approved?</th>
                      <th>Date Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in users" :key="user._id">
                      <th>{{ index + 1}}</th>

                      <th>{{ user.firstname }}</th>

                      <td>{{ user.lastname }}</td>

                      <td>{{ user.email }}</td>

                      <td>{{user.phone }}</td>
                      <td>
                        <span v-if="user.role_id === 1">Admin</span>
                        <span v-else-if="user.role_id === 2">Staff</span>
                        <span v-else-if="user.role_id === 3">Librarian</span>
                        <span v-else-if="user.role_id === 4">Student</span>
                        <span v-else-if="user.role_id === 5">Others</span>
                        <span v-else></span>
                      </td>
                      <td>
                        <span v-if="!user.isAdmin">No</span>
                        <span v-if="user.isAdmin">Yes</span>
                      </td>
                      <td>
                        <span v-if="user.isApproved">Yes</span>
                        <span v-if="!user.isApproved">No</span>
                      </td>
                      <td>{{user.created_at | formatDate}}</td>
                      <td>
                        <span
                          v-if="!user.isApproved"
                          class="btn btn-info"
                          @click="activate(user._id)"
                        >
                          <i class="fa fa-check"></i>
                        </span>
                        <span
                          v-if="user.isApproved"
                          class="btn btn-danger"
                          @click="deactivate(user._id)"
                        >
                          <i class="fa fa-times"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-3 text-center">
                  <b-pagination
                    align="center"
                    :link-gen="linkGen"
                    :total-rows="total"
                    v-model="currentPage"
                    :per-page="pages"
                    @input="getUsers(currentPage)"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="column width-3 no-padding-right">
            <div class="mb-60">
              <h4 class="font-mont">Upcoming Events</h4>
              <div class=" row flex boxes two-columns-on-mobile">
                <div class="column width-12 left center no-padding-left blog-entry-inline">
                  <div class="event">
                    <div class="row">
                      <div class="event-banner">
                        <a>
                          <div class="event-thumb">
                            <div class="thumb">
                              <img class="full-width event-img-small" src="../assets/images/blog/post9.jpg" alt="">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="event-details">
                        <div class="event-content-small white-bg nb">
                          <h5 class="event-title small-text"><a href="#">Event Name</a></h5>
                          <ul class="event-held list-inline">
                            <li><i class="fas fa-calendar"></i> SEP 20 2018</li>
                            <li><i class="fas fa-eye"></i> View Event</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="column width-12 left center no-padding-left blog-entry-inline">
                  <div class="event">
                    <div class="row">
                      <div class="event-banner">
                        <a>
                          <div class="event-thumb">
                            <div class="thumb">
                              <img class="full-width event-img-small" src="../assets/images/blog/post11.jpg" alt="">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="event-details">
                        <div class="event-content-small white-bg nb">
                          <h5 class="event-title small-text"><a href="#">Event Name</a></h5>
                          <ul class="event-held list-inline">
                            <li><i class="fas fa-calendar"></i> SEP 20 2018</li>
                            <li><i class="fas fa-eye"></i> View Event</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="column width-12 left center no-padding-left blog-entry-inline">
                  <div class="event">
                    <div class="row">
                      <div class="event-banner">
                        <a>
                          <div class="event-thumb">
                            <div class="thumb">
                              <img class="full-width event-img-small" src="../assets/images/blog/post2.jpg" alt="">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="event-details">
                        <div class="event-content-small white-bg nb">
                          <h5 class="event-title small-text"><a href="#">Event Name</a></h5>
                          <ul class="event-held list-inline">
                            <li><i class="fas fa-calendar"></i> NOV 20 2018</li>
                            <li><i class="fas fa-eye"></i> View Event</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="column width-12 left center no-padding-left blog-entry-inline">
                  <div class="event">
                    <div class="row">
                      <div class="event-banner">
                        <a>
                          <div class="event-thumb">
                            <div class="thumb">
                              <img class="full-width event-img-small" src="../assets/images/blog/post10.jpg" alt="">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="event-details">
                        <div class="event-content-small white-bg nb">
                          <h5 class="event-title small-text"><a href="#">Event Name</a></h5>
                          <ul class="event-held list-inline">
                            <li><i class="fas fa-calendar"></i> SEP 20 2018</li>
                            <li><i class="fas fa-eye"></i> View Event</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
            <div class="mb-60">
              <h4 class="font-mont">Categories</h4>
              <div class="mt-20 blog-entry-inline">
                <div class=" row flex boxes  two-columns-on-mobile">
                  <div class="column width-6 left center no-padding-left blog-entry-inline">
                    <div class="blog-entry card-2">
                      <div class="img-box">
                        <img src="../assets/images/blog/post2.jpg" alt="Blog Post Image">
                      </div>
                      <div class="content-box">
                        <div class="content">
                          <h3 class="category-text bold-font text-uppercase category-name center-txt">Category Name </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column width-6 left center no-padding-right blog-entry-inline">
                    <div class="blog-entry card-2">
                      <div class="img-box">
                        <img src="../assets/images/blog/post3.jpg" alt="Blog Post Image">
                      </div>
                      <div class="content-box">
                        <div class="content">
                          <h3 class="category-text bold-font text-uppercase category-name center-txt">Category Name </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-20 blog-entry-inline">
                <div class=" row flex boxes  two-columns-on-mobile">
                <div class="column width-6 left center no-padding-left blog-entry-inline">
                  <div class="blog-entry card-2">
                    <div class="img-box">
                      <img src="../assets/images/blog/post9.jpg" alt="Blog Post Image">
                    </div>
                    <div class="content-box">
                      <div class="content">
                        <h3 class="category-text bold-font text-uppercase category-name center-txt">Category Name </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column width-6 left center no-padding-right blog-entry-inline">
                  <div class="blog-entry card-2">
                    <div class="img-box">
                      <img src="../assets/images/blog/post5.png" alt="Blog Post Image">
                    </div>
                    <div class="content-box">
                      <div class="content">
                        <h3 class="category-text bold-font text-uppercase category-name center-txt">Category Name </h3>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>

            </div>


          </div>-->
          <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
              <h3>Hello From My Modal!</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
          </b-modal>
        </div>
      </div>
    </div>

    <div>
      <app-footernav></app-footernav>
    </div>
  </div>
</template>
<script>
import FooterNav from "./FooterNav";
import axios from "../api/efiwe";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  //   data() {
  //     return {
  //       userData: []
  //     };
  //   },
  data() {
    return {
      currentPage: 1,
      total: 0,
      pages: 10,
      users: []
    };
  },
  components: {
    "app-footernav": FooterNav
  },
  methods: {
    showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    },
    linkGen(pageNum) {
      console.log(pageNum);
    },
    getUsers(currentPage) {
      axios
        .get(`/users/${this.currentPage}`)
        .then(res => {
          (this.users = res.data.data), (this.total = res.data.count);
          //this.pages = res.data.pages
        })
        .catch(err => console.log(err))
        .then(fin => console.log(fin));
    },
    activate(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, activate!"
      }).then(result => {
        if (result.value) {
          this.isApprovedOrDecline(id, 1);
        }
      });
    },
    deactivate(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, deactive!"
      }).then(result => {
        if (result.value) {
          this.isApprovedOrDecline(id, 2);
        }
      });
    },
    async isApprovedOrDecline(id, m) {
      let url = "";
      if (m == 1) {
        url = "/users/approve/";
      } else {
        url = "/users/disapprove/";
      }
      await axios
        .put(url + id)
        .then(function(response) {
          if (response) {
            if (m == 1) {
              Swal.fire(
                "Activated!",
                "User has been successfully activated.",
                "success"
              );
            } else {
              Swal.fire(
                "Deactivated!",
                "User has been successfully deactivated.",
                "success"
              );
            }
          }
        })
        .catch(function(error) {
          Swal.fire("Oops...", "Something went wrong!", "error");
        })
        .then(function() {});
      this.getUsers();
    }
  },
  created() {
    this.getUsers();
  }
};
</script>
<style scoped>
.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
</style>

