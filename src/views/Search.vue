<template>
  <div class="content clearfix">
    <div id="search-ui" class="header-bg ">
      <main class="grid__padding__sm static-form">

        <div class="webapp-content__inner">
          <div class="center-txt">

            <div class="row flex">
              <div class="column width-12">
                <div class="feature-content">
                  <div class="feature-content-inner center">
                    <div class="section-block nb" :class="headerTag">
                      <div v-if="searchState === 1" class="table-view m-auto login-form flex-form">
                        <div class="form-loader form-loader-login verify">
                          <!--<div class="center-txt webapp-ripple-text"><i class="fas fa-search"></i> Processing Request</div>-->

                          <!--<div class="webapp-ripple">-->
                            <!--<div></div><div></div>-->
                          <!--</div>-->


                          <div class="center-txt webapp-ripple-text"><i class="fas fa-business-time"></i> Coming Soon</div>

                          <div class="webapp-ripple">
                          <div></div><div></div>
                          </div>



                        </div>
                      </div>

                      <div v-else-if="searchState === 2" class="table-view m-auto login-form flex-form">
                        <div class="form-loader form-loader-login success">
                          <div class="center-txt webapp-ripple-text">   <i class="fas fa-check-circle"></i> Results Received</div>

                          <div class="webapp-ripple">
                            <div></div>
                            <i class="webapp-ripple-notification fa fa-check-circle"></i>
                            <div></div>
                          </div>

                        </div>
                      </div>

                      <div v-else-if="searchState === 3" class="table-view m-auto login-form flex-form" >
                        <div class="form-loader form-loader-login failure">
                          <!--<div class="center-txt webapp-ripple-text">   <i class="fa fa-bell"></i> Search Failed</div>-->

                          <!--<div class="webapp-ripple">-->
                            <!--<div></div>-->
                            <!--<i class="webapp-ripple-notification fa fa-times-circle"></i>-->
                            <!--<div></div>-->
                          <!--</div>-->

                          <div class="center-txt webapp-ripple-text"><i class="fas fa-business-time"></i> Coming Soon</div>

                          <div class="webapp-ripple">
                            <div></div><div></div>
                          </div>

                        </div>
                      </div>

                      <div class="table-view m-auto login-form" v-else>
                        <div class="block-view mt-10">
                          <div class="form-group grid__60">
                            <label class="form-component light-txt">Search</label>
                            <div class="input-group white-border">
                              <div class="input-group-addon"><i class="fas fa-book"></i></div>
                              <input v-model.trim="searchData.input" :class="validateData.input_error"
                                     class="form-control" type="text" placeholder="Book Name, Author or Category">
                            </div>
                          </div>
                          <div class="form-group grid__20">
                            <label for="book-type" class="form-component text-white invisible">Filter</label>
                            <div class="input-group form-select form-element rounded medium left-border">
                              <select name="book-type" tabindex="6" class="form-aux" data-label="Search Filter" id="book-type" v-model="searchData.type">
                                <option v-for="(filter, index) in filters" :key="index" :value="filter">{{ filter.name }}</option>
                              </select>
                            </div>
                          </div>
                          <div class="form-group grid__20">
                            <label class="form-component text-white invisible">Search</label>
                            <button @click.prevent="search" type="submit"
                                    class="relax-left mt-1 button search rounded bkg-green bkg-hover-green color-white color-hover-white">
                              <i class="fas fa-search"></i> Search
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

      </main>

    </div>
    <div v-if="searchResults" id="search-result" class="top-border animated fadeInUp">
      <div class="section-block bkg-light">
        <div class="row flex mb-30">
          <div class="column width-12">
            <div class="feature-content">
              <div class="feature-content-inner center">
                <div class="table-view m-auto no-padding column width 12">
                  <div class="form-group grid__half nm">
                    <label class="form-component">Search</label>
                    <div class="input-group full-border">
                      <div class="input-group-addon"><i class="fas fa-book"></i></div>
                      <input v-model.trim="searchData.input" :class="validateData.input_error" class="form-control"
                             type="text" placeholder="Book Name, Author or Category">
                    </div>
                  </div>
                  <div class="form-group grid__20 nm">
                    <label class="form-component text-white invisible" for="book-type-search">Filter</label>
                    <div class="input-group form-select form-element rounded medium">
                      <select id="book-type-search" name="budget" tabindex="6" class="form-aux" data-label="book-type-search">
                        <option selected="selected" value="Project Budget">All</option>
                        <option value="">Book</option>
                        <option value="">Journal</option>
                        <option value="">Encyclopedia</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group grid__30 nm">
                    <div class="grid__half__sticky nm relax-left">
                      <label class="form-component text-white invisible">Search</label>
                      <button @click.prevent="search" type="submit"
                              class="relax-left mt-1 button medium rounded bkg-green bkg-hover-green color-white color-hover-white">
                        <i class="fas fa-search"></i> Search
                      </button>
                    </div>
                    <div class="grid__half__sticky nm relax-right">
                      <label class="form-component text-white invisible">Search</label>
                      <button @click.prevent="search" type="submit"
                              class="relax-right mt-1 button medium rounded bkg-orange bkg-hover-orange color-white color-hover-white">
                        <i class="fas fa-shopping-basket"></i> My Bag
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column width-2 no-padding">
            <div class="mb-60">
              <h5 class="font-mont text-uppercase bold-font">Filter Results</h5>
              <div class="event">
                <div class="row">
                  <div class="card-no-border grid__full">
                    <div class="event-content-small nb">
                      <h6 class="event-title ">Type</h6>
                      <div class="col-md-12 custom-checkbox mt-5">
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Book
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Journal
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Encyclopedia
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="event">
                <div class="row">
                  <div class="card-no-border grid__full">
                    <div class="event-content-small nb">
                      <h6 class="event-title ">Field</h6>
                      <div class="col-md-12 custom-checkbox mt-5">
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Arts
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Science
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">History
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Law
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Medicine
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="event">
                <div class="row">
                  <div class="card-no-border grid__full">
                    <div class="event-content-small nb">
                      <h6 class="event-title ">Status</h6>
                      <div class="col-md-12 custom-checkbox mt-5">
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">All
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Awaiting Shipment
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Shipped
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="event">
                <div class="row">
                  <div class="card-no-border grid__full">
                    <div class="event-content-small nb">
                      <h6 class="event-title ">Region</h6>
                      <div class="col-md-12 custom-checkbox mt-5">
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">North America
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">South America
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Africa
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Asia
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Europe
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="event">
                <div class="row">
                  <div class="card-no-border grid__full">
                    <div class="event-content-small nb">
                      <h6 class="event-title ">Condition</h6>
                      <div class="col-md-12 custom-checkbox mt-5">
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">Used</label>
                          <input type="checkbox"/>
                          <div class="control__indicator"></div>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="control-vertical control--checkbox ">New
                            <input type="checkbox"/>
                            <div class="control__indicator"></div>
                          </label>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
              <div class="event">
                <div class="row">
                  <div class="card-no-border grid__full">
                    <div class="event-content-small nb">
                      <h6 class="event-title ">Publish Year</h6>
                      <div class="event-held list-inline no-padding-left">
                        <div class="form-group grid__half__sticky mt-10">
                          <label class="form-component">Min</label>
                          <div class="input-group full-border">
                            <input v-model.trim="searchData.input" :class="validateData.input_error" class="form-control"
                                   type="text" placeholder="Min">
                          </div>
                        </div>
                        <div class="form-group grid__half__sticky mt-10">
                          <label class="form-component">Max</label>
                          <div class="input-group full-border">
                            <input v-model.trim="searchData.input" :class="validateData.input_error" class="form-control"
                                   type="text" placeholder="Max">
                          </div>
                        </div>
                          <button
                            class="relax-left button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                            <i class="fas fa-search"></i> Go
                          </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>
          <div class="column width-10 no-padding-right">
            <div class="event">
              <div class="row">
                <div class="search-banner">
                  <a>
                    <div class="event-thumb">
                      <div class="thumb">
                        <img class="full-width search-img" src="../assets/images/blog/post1.jpg" alt="">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="search-details white-bg">
                  <div class="event-content white-bg nb">
                    <h5 class="event-title"><a href="#">Programming Cook Book PHP 7</a>
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
                        class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
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
                        <img class="full-width search-img" src="../assets/images/blog/post1.jpg" alt="">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="search-details white-bg">
                  <div class="event-content white-bg nb">
                    <h5 class="event-title"><a href="#">Learning C++ Through Game
                      Programming </a></h5>
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
                        class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
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
                        <img class="full-width search-img" src="../assets/images/blog/post1.jpg" alt="">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="search-details white-bg">
                  <div class="event-content white-bg nb">
                    <h5 class="event-title"><a href="#">The Go Programming Language </a>
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
                        class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
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
                        <img class="full-width search-img" src="../assets/images/blog/post1.jpg" alt="">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="search-details white-bg">
                  <div class="event-content white-bg nb">
                    <h5 class="event-title"><a href="#">Andriod App Development with
                      Kotlin</a></h5>
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
                        class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
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
</template>
<script>
import axios from "../api/efiwe";
export default {
  data() {
    return {
      filters: [
        { name: "All", value: "all" },
        { name: "Book", value: "book" },
        { name: "Journal", value: "journal" },
        { name: "Encyclopedia", value: "encyclopedia" }
      ],
      proceed: true,
      validateData: {
        input_error: { "form-error": false },
        type_error: { "form-error": false }
      },
      headerTag: { "animated fadeInUp": false, hidden: true },
      searchData: {
        input: "",
        type: ""
      },
      searchState: 0,
      searchResults: false,
      searchRequest: {}
    };
  },
  methods: {
    populateForms() {
      this.searchData.type = this.filters[0];
    },
    search() {
      if (this.searchData.input.length <= 3) {
        this.validateData.input_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateData.input_error = { "form-error": false };
      }

      if (this.searchData.type.length <= 3) {
        this.validateData.type_error = { "form-error": true };
        this.proceed = false;
      } else {
        this.validateData.type_error = { "form-error": false };
      }

      if (
        this.searchData.input.length > 3 &&
        this.searchData.input.length > 3
      ) {
        this.proceed = true;
        let formActor = this.proceed;
        this.searchRequest = {
          token:
            "C30A52470BFCD552CBA9BD20DF5736A30A17914C83A8E1DF2E05F4A430213CE0D35DD0D2EB7946A16F34ABD60E84F5C901E310DB044A3844572041B01E3D64F3",
          input: this.searchData.input,
          type: this.searchData.type.value
        };
        console.log("Search Data:", this.searchRequest);
        this.searchState = 3;
        this.processRequest(formActor);
      }
    },
    processRequest(formActor) {
      if (formActor) {
        this.searchState = 2;
         this.searchResults = true;
        axios
          .post("/auth-user.php", this.searchRequest)
          .then(searchResponse => {
            if (searchResponse.data.status === "Results Received") {
              setTimeout(() => {
                this.searchState = 2;
                this.searchResults = true;
                setTimeout(() => {
                  this.searchState = 0;
                }, 4000);
              }, 1000);
            } else if (searchResponse.data.status === "Request Failed") {
              setTimeout(() => {
                this.searchState = 3;
                setTimeout(() => {
                  this.searchState = 0;
                }, 4000);
              }, 500);
            } else {
              setTimeout(() => {
                this.searchState = 0;
              }, 500);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    tokenizer() {
      let validation = localStorage.getItem("loginToken");
      if (validation) {
        window.location.href = "./";
      }
    }
  },
  props: ["session"],
  mounted() {
    this.populateForms();
    setTimeout(() => {
      this.headerTag = { "animated fadeInUp": true, hidden: false };
      setTimeout(() => {
        this.headerTag = { "animated fadeInDown": false, hidden: false };
      }, 1500);
    }, 100);
  },
  beforeMount() {
    this.authenticated = this.session;
  }
};
</script>
