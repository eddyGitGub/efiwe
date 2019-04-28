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
        </div> -->
        <div v-if="userType === 0">
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
                    <p class="font-mont text-white center-txt medium-text">Total Books Donated</p>
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
                      <div class="countCenter">259</div>
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
                      <div class="countCenter">008</div>
                    </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p
                      class="font-mont text-white center-txt medium-text"
                    >Total Funds Received By You</p>
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
                  <div class="search-banner">
                    <a>
                      <!-- <div class="event-thumb">
                        <div class="thumb">
                          <img
                            class="full-width search-img"
                            src="../assets/images/blog/post1.jpg"
                            alt
                          >
                        </div>
                      </div>-->
                    </a>
                  </div>
                  <div class="search-details white-bg">
                    <div class="event-content white-bg nb">
                      <h5 class="event-title">
                        <a href="#">{{book.type}}</a>
                      </h5>
                      <ul class="event-held">
                        <li>Field : {{book.fields}}</li>
                        <li>Copies : {{book.copies}}</li>
                        <li>Redeemed : {{book.copiesRedeemed}}</li>
                        <li>Remaining : {{book.copiesRemaining}}</li>
                        <li class="list-group-item active text-center mt-3 mb-0" v-if="book.copiesRedeemed >= book.copies">Complete</li>
                      </ul>

                      <div class="grid__half__sticky" v-if="book.copies > book.copiesRedeemed">
                        <div class="input-group mt-3">
                          <input
                           type="number" v-on:input="addToCart($event.target.value, book._id)" min="0"
                            class="form-control border"
                            placeholder="Quatity"
                            aria-label="Quatity"
                            aria-describedby="button-addon2"
                            :disabled="submitting"
                          >
                          <div class="input-group-append">
                            <button :disabled="submitting"
                              class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
                              @click="Add(book._id)"
                            >
                              <i class="fas fa-book"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-content2" class="tab-content">+</div>
          <div id="tab-content3" class="tab-content">
            <div class="column width-12 no-padding mt-30">
              <button class="btn btn-sm btn-dark pull-left">Request For Book</button>
            </div>
            <div class="column width-12 no-padding mt-30">
              <div class="event">
                <div class="row">
                  <div class="search-banner">
                    <a>
                      <div class="event-thumb">
                        <div class="thumb">
                          <img
                            class="full-width search-img"
                            src="../assets/images/blog/post1.jpg"
                            alt
                          >
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="search-details white-bg">
                    <div class="event-content white-bg nb">
                      <h5 class="event-title">
                        <a href="#">Programming Cook Book PHP 7</a>
                      </h5>
                      <ul class="event-held">
                        <li>Author : Eric Johnson</li>
                        <li>Field : Technology</li>
                        <li>Edition : 1st</li>
                        <li>Issue Date : April 23 2018</li>
                        <li>Copies : 3</li>
                        <li>Collected From : School Name</li>
                        <li>Delivered to : School Name</li>
                        <li>Status: Awaiting Shipment</li>
                      </ul>

                      <div class="grid__half__sticky">
                        <button
                          class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
                        >
                          <i class="fas fa-book"></i> Show Less
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="row">
                  <div class="search-banner">
                    <a>
                      <div class="event-thumb">
                        <div class="thumb">
                          <img
                            class="full-width search-img"
                            src="../assets/images/blog/post1.jpg"
                            alt
                          >
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="search-details white-bg">
                    <div class="event-content white-bg nb">
                      <h5 class="event-title">
                        <a href="#">Learning C++ Through Game Programming</a>
                      </h5>
                      <ul class="event-held">
                        <li>Author : Eric Johnson</li>
                        <li>Field : Technology</li>
                        <li>Edition : 1st</li>
                        <li>Issue Date : April 23 2018</li>
                        <li>Copies : 3</li>
                        <li>Collected From : School Name</li>
                        <li>Delivered to : School Name</li>
                        <li>Status: Awaiting Shipment</li>
                      </ul>

                      <div class="grid__half__sticky">
                        <button
                          class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
                        >
                          <i class="fas fa-book"></i> Show Less
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="row">
                  <div class="search-banner">
                    <a>
                      <div class="event-thumb">
                        <div class="thumb">
                          <img
                            class="full-width search-img"
                            src="../assets/images/blog/post1.jpg"
                            alt
                          >
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="search-details white-bg">
                    <div class="event-content white-bg nb">
                      <h5 class="event-title">
                        <a href="#">The Go Programming Language</a>
                      </h5>
                      <ul class="event-held">
                        <li>Author : Eric Johnson</li>
                        <li>Field : Technology</li>
                        <li>Edition : 1st</li>
                        <li>Issue Date : April 23 2018</li>
                        <li>Copies : 3</li>
                        <li>Collected From : School Name</li>
                        <li>Delivered to : School Name</li>
                        <li>Status: Awaiting Shipment</li>
                      </ul>

                      <div class="grid__half__sticky">
                        <button
                          class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
                        >
                          <i class="fas fa-book"></i> Show Less
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="row">
                  <div class="search-banner">
                    <a>
                      <div class="event-thumb">
                        <div class="thumb">
                          <img
                            class="full-width search-img"
                            src="../assets/images/blog/post1.jpg"
                            alt
                          >
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="search-details white-bg">
                    <div class="event-content white-bg nb">
                      <h5 class="event-title">
                        <a href="#">Andriod App Development with Kotlin</a>
                      </h5>
                      <ul class="event-held">
                        <li>Author : Eric Johnson</li>
                        <li>Field : Technology</li>
                        <li>Edition : 1st</li>
                        <li>Issue Date : April 23 2018</li>
                        <li>Copies : 3</li>
                        <li>Collected From : School Name</li>
                        <li>Delivered to : School Name</li>
                        <li>Status: Awaiting Shipment</li>
                      </ul>

                      <div class="grid__half__sticky">
                        <button
                          class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
                        >
                          <i class="fas fa-book"></i> Show Less
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        submitting: false,
      quantity: 0,
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
      authenticated: "",
      userData: [],
      currentUser: "",
      userType: 0
    };
  },
  props: ["session"],
  methods: {
    getPic(index) {
      console.log(index);
      const src = "http://localhost:3000/" + index;
      console.log(src);
      return src;
    },
     addToCart: function (event, id) {
         this.quantity = event;
    console.log(this.quantity)
    console.log(id)
  },
    Add(id) {
        const model = {
            id:id,
            quantity: this.quantity
        }
        this.submitting  = true;
     axios.post('/volunteers/addBook',model).then(res =>{
         this.submitting = false;
          this.$toastr("success", res.data.message, "status");
          this.getBooks();
     }).catch(err =>{
         console.log(err)
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
    getBooks() {
      axios
        .get("/volunteers")
        .then(response => {
          console.log(response.data);
          this.books = response.data.books;
          console.log(this.books);
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
  }
};
</script>
