<template>
  <div class="content clearfix bkg-light">
    <div id="dashboard-header" class="section-block landing-bg">
      <div class="row flex">
        <!-- <div class="column width-8 push-2">
          <div class="feature-content">
            <div class="feature-content-inner center">
              <h1 class="color-white mb-0 font-mont">Hi {{currentUser}}</h1>
            </div>
          </div>
        </div>-->
        <div v-if="userType === 0">
          <div class="column width-12">
            <div class="row flex boxes three-columns-on-tablet">
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">{{dashboard.totalRequest}}</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Total Books Request</p>
                  </div>
                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">{{dashboard.totalDonated}}</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Total Books Donated</p>
                  </div>
                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">{{dashboard.totalReceived}}</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Total Books Received</p>
                  </div>
                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">0</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Total Fund Donated</p>
                  </div>
                </div>
              </div>
              <!-- <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">640</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Total Books Shipped to Africa</p>
                  </div>
                </div>
              </div>-->

              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">0</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p
                      class="font-mont text-white center-txt medium-text"
                    >Total Funds Received By You</p>
                  </div>
                </div>
              </div>
              <!-- <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">100</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p
                      class="font-mont text-white center-txt medium-text"
                    >Books Awaiting Shipment (USA)</p>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
          <!-- <div class="column width-12 center-block center-elem mt-10">
            <button
              @click.prevent="miniScroll('dashboard')"
              class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
            >
              <i class="fas fa-search"></i> Search
            </button>
          </div>-->
        </div>
        <div v-if="userType === 1">
          <div class="column width-12">
            <div class="row flex boxes three-columns-on-tablet">
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">100</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p
                      class="font-mont text-white center-txt medium-text"
                    >Total Books Donated By You</p>
                  </div>
                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">125</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Total Fund Donated By You</p>
                  </div>
                </div>
              </div>
              <!-- <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">640</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Total Books Shipped to Africa</p>
                  </div>
                </div>
              </div>-->
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">259</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p
                      class="font-mont text-white center-txt medium-text"
                    >Total Books Received From You</p>
                  </div>
                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">008</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p
                      class="font-mont text-white center-txt medium-text"
                    >Total Funds Received From You</p>
                  </div>
                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">100</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p
                      class="font-mont text-white center-txt medium-text"
                    >Books Awaiting Shipment (USA)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="column width-12 center-block center-elem mt-10">
            <button
              @click.prevent="miniScroll('dashboard')"
              class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
            >
              <i class="fas fa-search"></i> Search
            </button>
          </div>-->
        </div>
      </div>
    </div>
    <div id="dashboard" class="top-border animated fadeInUp">
      <div class="tab-wrapper">
        <div class="tabs cf">
          <input type="radio" name="tabs" id="tab1" class="tab-radio" checked>
          <label class="tab-label" for="tab1">Books Collection</label>
          <input type="radio" name="tabs" id="tab2" class="tab-radio">
          <label class="tab-label" for="tab2">Fund Donation</label>
          <input type="radio" name="tabs" id="tab3" class="tab-radio">
          <label class="tab-label" for="tab3">Awaiting Shipment</label>
          <div id="tab-content1" class="tab-content">
            <div class="column width-12 no-padding mt-30">
              <div class="event" v-for="book in books" :key="book._id">
                <div class="row">
                  <div class="search-details white-bg">
                    <div class="event-content white-bg nb">
                      <div class="row">
                        <div class="col-12">
                          <h5 class="event-title">
                            <a href="#">{{book.type}}</a>
                          </h5>
                        </div>
                      </div>
                      <ul class="event-held">
                        <li>Field : {{book.fields}}</li>
                        <li>Copies : {{book.copies}}</li>
                        <li>Redeemed : {{book.copiesRedeemed}}</li>
                        <li>Remaining : {{book.copiesRemaining}}</li>
                        <li
                          class="list-group-item active text-center mt-3 mb-0"
                          v-if="book.copiesRedeemed >= book.copies"
                        >Complete</li>
                      </ul>

                      <div class="grid__half__sticky" v-if="book.copies > book.copiesRedeemed">
                        <div class="input-group mt-3">
                          <input
                            type="number"
                            v-on:input="addToCart($event.target.value, book._id)"
                            min="0"
                            class="form-control border"
                            placeholder="Quatity"
                            aria-label="Quatity"
                            aria-describedby="button-addon2"
                            :disabled="submitting"
                            style="width:30%;"
                          >
                          <div class="input-group-append">
                            <button
                              :disabled="submitting"
                              class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
                              style="width:30%;"
                              @click="Add(book._id)"
                            >
                              <i class="fas fa-book"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      class="btn btn-primary btn-sm float-right"
                      @click="openModal(book._id,book.bookId)"
                    >Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-content2" class="tab-content">
            <donated-fund></donated-fund>
          </div>
          <div id="tab-content3" class="tab-content">
            <awaiting-shipment></awaiting-shipment>
          </div>
        </div>
      </div>
      <button
        class="btn btn-primary btn-sm float-right"
        @click="navigateToOrganization()"
      >Organization Details</button>
      <!-- Model -->
      <modal v-if="showModal" side position="top-right" direction="right">
        <h3 slot="header" class="modal-title">Add More Books</h3>

        <div slot="body">
          <form>
            <div class="form-group">
              <label>Quantity</label>
              <input
                type="number"
                class="form-control"
                placeholder="quantity"
                required="required"
                v-model="book.quantity"
              >
              <div class="bg-danger text-white" v-if="error">Quantity must be greater than 0</div>
            </div>
            <div class="form-group">
              <label>Remark</label>
              <input type="text" class="form-control" placeholder="remark" v-model="book.remark">
            </div>
            <div class="form-group">
              <label>Upload File in any</label>
              <input
                type="file"
                class="form-control-file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
              >
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
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
import axios from "../api/efiwe";
import Modal from "../components/Modal.vue";
import UserDetail from "../components/UserDetail.vue";
import DonatedFund from "../components/DonatedFund.vue";
import AwaitingShipment from "../components/AwaitingShipment.vue";
Vue.use(Vuelidate);
export default {
  // register it as a component
  components: {
    Modal,
    DonatedFund,
    AwaitingShipment
  },
  data() {
    return {
      showModal: false,
      submitting: false,
      error: false,
      quantity: 0,
      books: [],
      file: "",
      active: true,
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
      searchState: 1,
      authenticated: "",
      userData: [],
      currentUser: "",
      userType: 0,
      book: {
        id: "",
        bookId: "",
        quantity: 0,
        remark: ""
      },
      dashboard: {
        totalRequest: 0,
        totalReceived: 0,
        ownedRequest: 0,
        totalDonated: 0
      }
    };
  },
  validations: {
    book: {
      quantity: { required, minLength: minLength(1) }
    }
  },
  props: ["session"],
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    openModal(id, bookId) {
      console.log(bookId);
      this.book.id = id;
      this.book.bookId = bookId;
      this.showModal = true;
    },
    closeModal() {
      this.book.id = "";
      this.book.bookId = "";
      this.showModal = false;
    },
    submitAndClose() {
      this.$v.$touch();
      if (this.book.quantity === 0) {
        this.error = true;
        return;
      }
      console.log(this.book);
      let formData = new FormData();
      formData.append("bookImage", this.file, this.file.name);
      for (const key in this.book) {
        let value = this.book[key];
        let pty = key;
        formData.append(key, this.book[key]);
      }
      this.isLoading = true;
      let uri = "/volunteers/addmore/";
      axios
        .post(uri, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response);
          this.getBooks();
          this.isLoading = false;
          this.closeModal();
        })
        .catch(err => {
          console.log(err);
          this.isLoading = false;
        });
    },
    getPic(index) {
      console.log(index);
      const src = "http://localhost:3000/" + index;
      console.log(src);
      return src;
    },
    addToCart: function(event, id) {
      this.quantity = event;
      console.log(this.quantity);
      console.log(id);
    },
    Add(id) {
      const model = {
        id: id,
        quantity: this.quantity
      };
      this.submitting = true;
      axios
        .post("/volunteers/addBook", model)
        .then(res => {
          this.submitting = false;
          this.$toastr("success", res.data.message, "status");
          this.getBooks();
        })
        .catch(err => {
          console.log(err);
          this.submitting = false;
        });
    },
    tokenizer() {
      const validation = localStorage.getItem("loginToken");
      if (validation) {
        this.userData = JSON.parse(validation);
      }
    },
    miniScroll(dest) {
      if (dest) {
        const item = document.getElementById(String(dest));

        const scrollToItem = item => {
          const diff = (item.offsetTop - window.scrollY) / 8;
          if (Math.abs(diff) > 1) {
            window.scrollTo(0, window.scrollY + diff);
            clearTimeout(window._TO);
            window._TO = setTimeout(scrollToItem, 33, item);
          } else {
            window.scrollTo(0, item.offsetTop);
          }
        };
        scrollToItem(item);
      }
    },
    userSwitcher() {
      this.userType === 1
        ? (this.currentUser = "Dika | Student")
        : (this.currentUser = "Philip | Liberian");
    },
    addBook() {
      this.$router.push({ name: "AddBook" });
    },
    navigateToOrganization() {
      this.$router.push({ name: "organization" });
    },
    getBooks() {
      axios
        .get("/volunteers")
        .then(response => {
          this.books = response.data.books;
          console.log(this.books);
        })
        .catch(err => console.log(err));
    },
    getDashboardData() {
      axios
        .get("/dashboard/bookCounter/")
        .then(response => {
          console.log("response", response.data.counter);
          let data = response.data.counter;
          this.dashboard.totalRequest = data.totalRequest;
          this.dashboard.totalReceived = data.totalReceived;
          this.dashboard.ownedRequest = data.ownedRequest;
          console.log("dashboard", this.dashboard);
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    avatar() {
      let fullName = "";
      if (this.userData.user) {
        fullName = this.userData.user;
      } else {
        fullName = "Guest Guest";
      }
      let firstName = fullName
          .split(" ")
          .slice(0, 1)
          .join(" "),
        lastName = fullName
          .split(" ")
          .slice(1)
          .join(" ");
      return firstName;
    }
  },
  beforeMount() {
    //this.tokenizer();
    this.authenticated = this.session;
  },
  mounted() {
    this.userSwitcher();
    this.getBooks();
    this.getDashboardData();
  }
};
</script>
