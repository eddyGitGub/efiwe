<template>
  <div class="content clearfix bkg-light">
    <div id="dashboard-header" class="section-block landing-bg">
      <div class="row flex">
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
                    <p class="font-mont text-white center-txt medium-text">Books Request</p>
                  </div>
                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">{{dashboard.ownedRequest}}</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Total Owned Requests</p>
                  </div>
                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width">
                      <div class="countCenter">640</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">Books Shipped</p>
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
                    <p class="font-mont text-white center-txt medium-text">Books Delivered</p>
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
                    <p class="font-mont text-white center-txt medium-text">Funds Received</p>
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
          <div class="column width-12 center-block center-elem mt-10">
            <button
              @click.prevent="miniScroll('dashboard')"
              class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
            >
              <i class="fas fa-search"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="dashboard" class="top-border animated fadeInUp">
      <div class="offset-6 col mt-3">
        <router-link to="/addbook" class="btn btn-info">
          <span class="fa fa-plus text-cente"></span> Add Book
        </router-link>
      </div>
      <div class="tab-wrapper">
        <div class="tabs cf">
          <input type="radio" name="tabs" id="tab1" class="tab-radio" checked />
          <label class="tab-label" for="tab1">Books Request</label>
          <!-- <input type="radio" name="tabs" id="tab2" class="tab-radio">
          <label class="tab-label" for="tab2">List of Students</label>-->
          <input type="radio" name="tabs" id="tab3" class="tab-radio" />
          <label class="tab-label" for="tab3">Books Collected</label>
          <input type="radio" name="tabs" id="tab4" class="tab-radio" />
          <label class="tab-label" for="tab4">Awaiting Shipment</label>
          <div id="tab-content1" class="tab-content">
            <!-- Book Request -->

            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12">
                  <h3 class="text-center">Book Requested</h3>
                  <hr />
                </div>
              </div>

              <img v-if="loading" src="//placehold.it/100" />

              <section v-else>
                <div class="container-fluid" v-if="books">
                  <div v-for="(book, i) in books" :key="book._id" class="offset-sm-3 col-sm-8">
                    <div class="card mb-3">
                      <img
                        :src="getPic(book.bookImage)"
                        class="card-img-top"
                        alt="..."
                        style="height: 18rem;"
                      />
                      <div class="card-body">
                        <div class="row">
                          <div class="col-sm">
                            <p>
                              <small>Request By:</small>
                              {{book.nameoflibrary}}
                            </p>
                            <p>
                              <label>Type</label>
                              :{{book.type}}
                            </p>
                            <p>
                              <label>Number of books</label>
                              :{{book.numberofbooks}}
                            </p>
                          </div>
                          <div class="col-sm">
                            <label>Subjects</label>
                            <p v-for=" tag in (book.subjects.split(','))">
                              <span>{{tag}}</span>
                            </p>
                          </div>
                          <div class="col-sm">
                            <p>
                              <label>Status</label>
                              :
                              <span
                                :class="[book.status === 'Delivered' ? 'badge badge-success': '' ]"
                              >{{book.status}}</span>
                            </p>
                            <p>
                              <label>Request Date</label>
                              : {{book.created_at | formatDate}}
                            </p>
                          </div>
                        </div>

                        <b-collapse :id="'collapse-' + i" class="mt-2">
                          <b-card>
                            <textarea class="form-control" cols="35" v-model="reviews[book._id]"></textarea>
                            <b-col lg="4" class="pb-2">
                              <b-button size="sm" @click.prevent="evaluate(book._id)">Small Button</b-button>
                            </b-col>
                          </b-card>
                        </b-collapse>
                        <div class="card-footer">
                          <b-button-toolbar key-nav aria-label="Toolbar with button groups">
                            <b-button-group class="mx-1">
                              <b-button>&laquo;</b-button>
                              <b-button>&lsaquo;</b-button>
                            </b-button-group>
                            <b-button-group class="mx-1">
                              <b-button
                                v-b-toggle="'collapse-' + i"
                                variant="primary"
                                v-if="!book.evaluation && book.status === 'Delivered'"
                              >Evaluate this Request</b-button>
                              <b-button variant="info">Extend request</b-button>
                              <!-- <b-button>Undo</b-button> -->
                              <b-button
                                variant="warning"
                                @click="activate(book._id)"
                                v-if="book.status !== 'Delivered'"
                              >Delivered ?</b-button>
                            </b-button-group>
                            <b-button-group class="mx-1">
                              <b-button>&rsaquo;</b-button>
                              <b-button>&raquo;</b-button>
                            </b-button-group>
                          </b-button-toolbar>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <!-- <div id="tab-content2" class="tab-content">
            <div class="column width-12 no-padding mt-30">Book Cllected</div>
          </div>-->
          <div id="tab-content3" class="tab-content">
            <div class="column width-12 no-padding mt-30">
              <button class="btn btn-sm btn-dark pull-left">Book Collected</button>
            </div>
            <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
              <v-toolbar color="pink" dark>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>My Music</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
              </v-toolbar>

              <v-card>
                <v-container fluid grid-list-lg>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-card color="blue-grey darken-2" class="white--text">
                        <v-card-title primary-title>
                          <div>
                            <div class="headline">Unlimited music now</div>
                            <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-btn flat dark>Listen now</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>

                    <v-flex xs12>
                      <v-card color="cyan darken-2" class="white--text">
                        <v-layout>
                          <v-flex xs5>
                            <v-img
                              src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                              height="125px"
                              contain
                            ></v-img>
                          </v-flex>
                          <v-flex xs7>
                            <v-card-title primary-title>
                              <div>
                                <div class="headline">Supermodel</div>
                                <div>Foster the People</div>
                                <div>(2014)</div>
                              </div>
                            </v-card-title>
                          </v-flex>
                        </v-layout>
                        <v-divider light></v-divider>
                        <v-card-actions class="pa-3">
                          Rate this album
                          <v-spacer></v-spacer>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                        </v-card-actions>
                      </v-card>
                    </v-flex>

                    <v-flex xs12>
                      <v-card color="purple" class="white--text">
                        <v-layout row>
                          <v-flex xs7>
                            <v-card-title primary-title>
                              <div>
                                <div class="headline">Halycon Days</div>
                                <div>Ellie Goulding</div>
                                <div>(2013)</div>
                              </div>
                            </v-card-title>
                          </v-flex>
                          <v-flex xs5>
                            <v-img
                              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                              height="125px"
                              contain
                            ></v-img>
                          </v-flex>
                        </v-layout>
                        <v-divider light></v-divider>
                        <v-card-actions class="pa-3">
                          Rate this album
                          <v-spacer></v-spacer>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                          <v-icon>star_border</v-icon>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </div>
          </div>
          <div id="tab-content4" class="tab-content">
            <div class="column width-12 no-padding mt-30">Shipment ........................</div>
            <div id="app" class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="text-center">Products</h1>
                  <hr />
                </div>
              </div>

              <img v-if="loading" src="//placehold.it/100" />

              <section v-else style="margin-left: 10px;"></section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../api/efiwe";
import Swal from "sweetalert2/dist/sweetalert2.js";
var prodData = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "http://placehold.it/600/92c952",
    thumbnailUrl: "https://gradientjoy.com/300"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "http://placehold.it/600/771796",
    thumbnailUrl: "https://gradientjoy.com/300"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "http://placehold.it/600/24f355",
    thumbnailUrl: "https://gradientjoy.com/300"
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "http://placehold.it/600/d32776",
    thumbnailUrl: "http://gradientjoy.com/300"
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "http://placehold.it/600/f66b97",
    thumbnailUrl: "https://gradientjoy.com/300"
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "http://placehold.it/600/56a8c2",
    thumbnailUrl: "https://gradientjoy.com/300"
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "http://placehold.it/600/b0f7cc",
    thumbnailUrl: "https://gradientjoy.com/300"
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "http://placehold.it/600/54176f",
    thumbnailUrl: "https://gradientjoy.com/300"
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "http://placehold.it/600/51aa97",
    thumbnailUrl: "https://gradientjoy.com/300"
  }
];
export default {
  data() {
    return {
      reviews: [],
      loading: false,
      collapse: false,
      cart: [],
      books: [],
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

      userData: [],
      currentUser: "",
      userType: 0,
      dashboard: {
        totalRequest: 0,
        totalReceived: 0,
        ownedRequest: 0,
        totalDonated: 0
      }
    };
  },
  props: ["session"],
  methods: {
    getPic(index) {
      return "http://localhost:3000/" + index;
    },
    addProductToCart: function(product) {
      this.cart.push(product);
      console.log(this.cart);
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
      this.userType === 0
        ? (this.currentUser = "Dika | Student")
        : (this.currentUser = "Philip | Liberian");
    },
    addBook() {
      this.$router.push({ name: "AddBook" });
    },
    getBooks() {
      axios
        .get("/books")
        .then(response => {
          this.books = response.data;
          console.log(this.books);
        })
        .catch(err => console.log(err));
    },
    getDashboardData() {
      axios
        .get("/dashboard/libStat/")
        .then(response => {
          console.log("response", response.data.counter);
          let data = response.data.counter;
          this.dashboard.totalRequest = data.totalRequest;
          this.dashboard.totalReceived = data.totalReceived;
          this.dashboard.ownedRequest = data.ownedRequest;
          console.log("dashboard", this.dashboard);
        })
        .catch(err => console.log(err));
    },
    evaluate(i) {
      const model = {
        id: i,
        evaluation: this.reviews[i]
      };
      console.log(model);
      axios
        .post("/books/evaluate", model)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    activate(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Request Delivered!"
      }).then(result => {
        if (result.value) {
          this.isDelivered(id);
        }
      });
    },
    async isDelivered(id) {
      console.log(id);
      await axios
        .put("/books/changeStatus/" + id, { status: "Delivered" })
        .then(function(response) {
          if (response) {
            if (m == 1) {
              Swal.fire("Dilevered!", "updated successfully", "success");
            } else {
              Swal.fire(
                "Error!",
                "Error Occurred please try again later.",
                "danger"
              );
            }
          }
        })
        .catch(function(error) {
          console.log(error);
          Swal.fire("Oops...", "Something went wrong!", "error");
        })
        .then(function() {});
      this.getBooks();
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
  },
  mounted() {
    this.userSwitcher();
    this.getBooks();
    this.getDashboardData();
  },
  created() {
    this.loading = true;
    this.products = prodData;
    this.loading = false;
  }
};
</script>
