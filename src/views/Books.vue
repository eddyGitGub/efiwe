 <template>
  <div class="content clearfix bkg-light">
    <div id="dashboard-header" class="section-block landing-bg">
      <div class="row flex">
        <div class="column width-12">
          <div class="row flex boxes three-columns-on-tablet">
            <div class="column width-2" style="margin-bottom:0">
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
                  <p class="font-mont text-white center-txt medium-text">Total Funds Received</p>
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
      </div>
    </div>
    <div id="dashboard" class="top-border animated fadeInUp">
      <div class="card text-center">
        <div class="card-header">
          <div class="row">
            <div class="column width-12 no-padding">
              <div class="mb-60">
                <h5 class="font-mont text-uppercase bold-font">Filter Results</h5>
                <div class="event">
                  <div class="row">
                    <div class="card-no-border grid__five">
                      <div class="event-content-small nb">
                        <h6 class="event-title">Type</h6>
                        <div class="col-md-12 custom-checkbox mt-5">
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Book
                              <input type="radio" value="Book" v-model="search.type" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Journal
                              <input type="radio" value="Journal" v-model="search.type" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Encyclopedia
                              <input
                                type="radio"
                                value="Encyclopedia"
                                v-model="search.type"
                              />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-no-border grid__five">
                      <div class="event-content-small nb">
                        <h6 class="event-title">Field</h6>
                        <div class="col-md-12 custom-checkbox mt-5">
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Arts
                              <input type="radio" value="Arts" v-model="search.field" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Science
                              <input type="radio" value="Science" v-model="search.field" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              History
                              <input type="radio" value="History" v-model="search.field" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Law
                              <input type="radio" value="Law" v-model="search.field" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Medicine
                              <input type="radio" value="Medicine" v-model="search.field" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-no-border grid__five">
                      <div class="event-content-small nb">
                        <h6 class="event-title">Status</h6>
                        <div class="col-md-12 custom-checkbox mt-5">
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              All
                              <input type="radio" value="All" v-model="search.status" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>

                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Book Request
                              <input
                                type="radio"
                                value="Book Request"
                                v-model="search.status"
                              />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Awaiting Shipment
                              <input
                                type="radio"
                                value="Awaiting Shipment"
                                v-model="search.status"
                              />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Shipped
                              <input type="radio" value="Shipped" v-model="search.status" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Delivered
                              <input
                                type="radio"
                                value="Delivered"
                                v-model="search.status"
                              />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="control-vertical control--checkbox">
                              Owned
                              <input type="radio" value="Owned" v-model="search.status" />
                              <div class="control__indicator"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-no-border grid__five">
                      <div class="event-content-small nb">
                        <h6 class="event-title">Publish Year</h6>
                        <ul class="event-held list-inline no-padding-left">
                          <div class="form-group grid__half__sticky mt-10">
                            <!-- <label class="form-component">Min Year</label> -->
                            <div class="input-group full-border">
                              <input
                                v-model="search.min"
                                class="form-control"
                                type="text"
                                placeholder="Year"
                              />
                            </div>
                          </div>
                          <!-- <div class="form-group grid__half__sticky mt-10">
                                <label class="form-component">Max</label>
                                <div class="input-group full-border">
                                  <input
                                    v-model="search.max"
                                    class="form-control"
                                    type="text"
                                    placeholder="Max"
                                  >
                                </div>
                          </div>-->
                        </ul>
                      </div>
                    </div>
                    <div class="card-no-border grid__six">
                      <div class="event-content-small nb">
                        <ul class="event-held list-inline no-padding-left">
                          <li>
                            <button
                              class="relax-left button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
                              @click="getBooks()"
                            >
                              <i class="fas fa-search"></i> Go
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <ul class="nav nav-pills card-header-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>-->
        </div>
        <div class="card-body">
          <h5 class="card-title">List of Book Request</h5>
          <table class="table mx-auto" style="width: 80%;">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Requested By</th>
                <th scope="col">Country</th>
                <th scope="col">Lib Name</th>
                <th scope="col">Type</th>
                <th scope="col">Subjects</th>
                <th scope="col">Nos.Req</th>
                <th scope="col">Duration</th>
                <th scope="col">Request Date</th>
                <th scope="col">Status</th>
                <th>>>>></th>
              </tr>
            </thead>
            <tbody>
              <template v-if="books.length">
                <tr v-for="(book, index) in books" :key="book._id">
                  <th scope="row">{{ index + 1}}</th>
                  <td>
                    <span
                      v-if="book.requestedBy"
                    >{{ book.requestedBy.user.firstname}} {{ book.requestedBy.user.lastname}}</span>
                  </td>
                  <td>
                    <span v-if="book.requestedBy">{{ book.requestedBy.country}}</span>
                  </td>
                  <td>
                    <span v-if="book.requestedBy">{{ book.requestedBy.school}}</span>
                  </td>
                  <td>{{book.type}}</td>
                  <td>{{book.subjects}}</td>
                  <td>{{book.numberofbooks}}</td>
                  <td>{{book.durationOfRequest}}</td>
                  <td>{{book.created_at | formatDate}}</td>
                  <td>{{book.status}}</td>
                  <td>
                    <router-link
                      :to="{
                      name:'BookDetails', 
                      params:{id: book._id}
                    }"
                      class="icon"
                    >
                      <i class="fa fa-eye"></i>
                    </router-link>
                  </td>
                  <!-- <td><span class="btn btn-primary" @click="ownedBookReq(book._id)">Owned Request</span></td> -->
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="11" class="text-danger">Book list is empty!</td>
                </tr>
              </template>
            </tbody>
          </table>
          <div class="mt-3 text-center" v-if="books.length">
            <b-pagination
              align="center"
              :total-rows="total"
              v-model="currentPage"
              :per-page="pages"
              @input="getUsers(currentPage)"
            />
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
      currentPage: 1,
      total: 0,
      pages: 10,
      books: [],
      search: {
        type: "",
        field: "",
        status: "",
        min: "",
        max: ""
      },
      dashboard: {
        totalRequest: 0,
        totalReceived: 0,
        ownedRequest: 0,
        totalDonated: 0
      }
    };
  },
  methods: {
    getBooks() {
      const params = new URLSearchParams();
      params.append("type", this.search.type);
      params.append("field", this.search.field);
      params.append("status", this.search.status);
      params.append("min", this.search.min);
      params.append("max", this.search.max);

      var request = {
        params: params
      };
      axios
        .get(`/books/${this.currentPage}`, request)
        .then(res => {
          console.log(res);
          this.books = res.data.data;
          this.total = res.data.count;
        })
        .catch(err => console.log(err))
        .then(fin => console.log(fin));
    },
    ownedBookReq(id) {
      const model = {
        id: id,
        status: "Owned"
      };
      axios
        .post("/books/updateStatus/", model)
        .then(res => {
          console.log(res);
          getBooks();
        })
        .catch();
    },
    searchRequest() {
      console.log(this.search);
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
  created() {
    this.getBooks();
    this.getDashboardData();
  }
};
</script>
