<template>
  <div class="content clearfix  bkg-light">
    <div id="dashboard-header" class="section-block header-bg">
      <div class="row flex">
       
        <div v-if="userType === 0">
          <div class="column width-12">
            <div class="row flex boxes three-columns-on-tablet ">
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width"><div class="countCenter">100</div> </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">
                      Books Awaiting Shipment (USA)
                    </p>
                  </div>



                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width"><div class="countCenter">125</div> </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">
                      Books Awaiting Shipment (EUR)
                    </p>
                  </div>



                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width"><div class="countCenter">640</div> </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">
                      Books Shipped to Africa
                    </p>
                  </div>



                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width"><div class="countCenter">259</div> </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">
                      Books Delivered to Students (Africa)
                    </p>
                  </div>



                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width"><div class="countCenter">008</div> </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">
                      Funds Received By You
                    </p>
                  </div>



                </div>
              </div>
              <div class="column width-2">
                <div class="box xlarge rounded box-shadow hiw border-charcoal">
                  <div class="grid__full no-padding">
                    <h4 class="font-mont full-width"><div class="countCenter">100</div> </h4>
                  </div>
                  <div class="grid__full no-padding mt-10">
                    <p class="font-mont text-white center-txt medium-text">
                      Books Awaiting Shipment (USA)
                    </p>
                  </div>



                </div>
              </div>
            </div>
          </div>
          <div class="column width-12 center-block center-elem mt-10">

            <button @click.prevent="miniScroll('dashboard')"
                    class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"
            ><i class="fas fa-search"></i> Search
            </button>

          </div>
        </div>
      </div>
    </div>
    <div id="dashboard" class="top-border animated fadeInUp">
        <div class="tab-wrapper">
          <div class="tabs cf">
            <input type="radio" name="tabs" id="tab1" class="tab-radio" checked >
            <label class="tab-label" for="tab1">
              Search Books
            </label>
            <input type="radio" name="tabs" id="tab2" class="tab-radio">
            <label class="tab-label" for="tab2">
              List of Students
            </label>
            <input type="radio" name="tabs" id="tab3" class="tab-radio">
            <label class="tab-label" for="tab3">
              Books Collected
            </label>
            <input type="radio" name="tabs" id="tab4" class="tab-radio">
            <label class="tab-label" for="tab4">
              Awaiting Shipment
            </label>
            <div id="tab-content1" class="tab-content">
              <div v-if="userType === 0">
                <div class="row flex mb-30">
                  <div class="column width-12">
                    <div class="feature-content">
                      <div class="feature-content-inner center">
                        <div class="table-view m-auto no-padding column width 12">
                          <div class="form-group grid__half nm">
                            <label class="form-component" >Search</label>
                            <div class="input-group full-border">
                              <div class="input-group-addon"><i class="fas fa-book"></i></div>
                              <input v-model.trim="loginData.email" :class="validateUser.email_error" class="form-control" type="text" placeholder="Book Name, Author or Category">
                            </div>
                          </div>
                          <div class="form-group grid__20 nm">
                            <label class="form-component text-white invisible">Filter</label>
                            <div class="input-group form-select form-element rounded medium">
                              <select name="budget" tabindex="6" class="form-aux left-border-mobile" data-label="Project Budget">
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
                              <button @click.prevent="search"  type="submit" class="relax-left mt-1 button medium rounded bkg-green bkg-hover-green color-white color-hover-white"><i class="fas fa-search"></i> Search</button>
                            </div>
                            <div class="grid__half__sticky nm relax-right">
                              <label class="form-component text-white invisible">Search</label>
                              <button @click.prevent="search"  type="submit" class="relax-right mt-1 button medium rounded bkg-orange bkg-hover-orange color-white color-hover-white"><i class="fas fa-book"></i> Add a Book</button>
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
                                  <label class="control-vertical control--checkbox ">Used
                                    <input type="checkbox"/>
                                    <div class="control__indicator"></div>
                                  </label>
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
                              <ul class="event-held list-inline no-padding-left">
                                <div class="form-group grid__half__sticky mt-10">
                                  <label class="form-component" >Min</label>
                                  <div class="input-group full-border">
                                    <input v-model.trim="loginData.email" :class="validateUser.email_error" class="form-control" type="text" placeholder="Min">
                                  </div>
                                </div>
                                <div class="form-group grid__half__sticky mt-10">
                                  <label class="form-component" >Max</label>
                                  <div class="input-group full-border">
                                    <input v-model.trim="loginData.email" :class="validateUser.email_error" class="form-control" type="text" placeholder="Max">
                                  </div>
                                </div>
                                <li><button class="relax-left button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-search"></i> Go
                                </button></li>
                              </ul>
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
                            <h5 class="event-title"><a href="#">Programming Cook Book PHP 7</a></h5>
                            <ul class="event-held">
                              <li>Author : Eric Johnson</li>
                              <li>Field : Technology </li>
                              <li>Edition : 1st </li>
                              <li>Issue Date : April 23 2018 </li>
                              <li>Copies : 3 </li>
                              <li>Collected From : School Name </li>
                              <li>Delivered to : School Name </li>
                              <li>Status: Awaiting Shipment </li>
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
                            <h5 class="event-title"><a href="#">Learning C++ Through Game Programming </a></h5>
                            <ul class="event-held">
                              <li>Author : Eric Johnson</li>
                              <li>Field : Technology </li>
                              <li>Edition : 1st </li>
                              <li>Issue Date : April 23 2018 </li>
                              <li>Copies : 3 </li>
                              <li>Collected From : School Name </li>
                              <li>Delivered to : School Name </li>
                              <li>Status: Awaiting Shipment </li>
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
                            <h5 class="event-title"><a href="#">The Go Programming Language </a></h5>
                            <ul class="event-held">
                              <li>Author : Eric Johnson</li>
                              <li>Field : Technology </li>
                              <li>Edition : 1st </li>
                              <li>Issue Date : April 23 2018 </li>
                              <li>Copies : 3 </li>
                              <li>Collected From : School Name </li>
                              <li>Delivered to : School Name </li>
                              <li>Status: Awaiting Shipment </li>
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
                            <h5 class="event-title"><a href="#">Andriod App Development with Kotlin</a></h5>
                            <ul class="event-held">
                              <li>Author : Eric Johnson</li>
                              <li>Field : Technology </li>
                              <li>Edition : 1st </li>
                              <li>Issue Date : April 23 2018 </li>
                              <li>Copies : 3 </li>
                              <li>Collected From : School Name </li>
                              <li>Delivered to : School Name </li>
                              <li>Status: Awaiting Shipment </li>
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
              <div v-else >
                <div class="row flex mb-30">
                  <div class="column width-12">
                    <div class="feature-content">
                      <div class="feature-content-inner center">
                        <div class="table-view m-auto no-padding column width 12">
                          <div class="form-group grid__half nm">
                            <label class="form-component" >Search</label>
                            <div class="input-group full-border">
                              <div class="input-group-addon"><i class="fas fa-book"></i></div>
                              <input v-model.trim="loginData.email" :class="validateUser.email_error" class="form-control" type="text" placeholder="Book Name, Author or Category">
                            </div>
                          </div>
                          <div class="form-group grid__20 nm">
                            <label class="form-component text-white invisible">Filter</label>
                            <div class="input-group form-select form-element rounded medium">
                              <select name="budget" tabindex="6" class="form-aux border-left-mobile" data-label="Project Budget">
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
                              <button @click.prevent="search"  type="submit" class="relax-left mt-1 button medium rounded bkg-green bkg-hover-green color-white color-hover-white"><i class="fas fa-search"></i> Search</button>
                            </div>
                            <div class="grid__half__sticky nm relax-right">
                              <label class="form-component text-white invisible">Search</label>
                              <button @click.prevent="search"  type="submit" class="relax-right mt-1 button medium rounded bkg-orange bkg-hover-orange color-white color-hover-white"><i class="fas fa-shopping-basket"></i> My Bag</button>
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
                                  <label class="control-vertical control--checkbox ">Used
                                    <input type="checkbox"/>
                                    <div class="control__indicator"></div>
                                  </label>
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
                              <ul class="event-held list-inline no-padding-left">
                                <div class="form-group grid__half__sticky mt-10">
                                  <label class="form-component" >Min</label>
                                  <div class="input-group full-border">
                                    <input v-model.trim="loginData.email" :class="validateUser.email_error" class="form-control" type="text" placeholder="Min">
                                  </div>
                                </div>
                                <div class="form-group grid__half__sticky mt-10">
                                  <label class="form-component" >Max</label>
                                  <div class="input-group full-border">
                                    <input v-model.trim="loginData.email" :class="validateUser.email_error" class="form-control" type="text" placeholder="Max">
                                  </div>
                                </div>
                                <li><button class="relax-left button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-search"></i> Go
                                </button></li>
                              </ul>
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
                            <div class="grid__80">
                              <h5 class="event-title"><a href="#">Programming Cook Book PHP 7</a></h5>
                              <ul class="event-held">
                                <li>Author : Eric Johnson</li>
                                <li>Field : Technology </li>
                                <li>Edition : 1st </li>
                                <li>Issue Date : April 23 2018 </li>
                                <li>Copies : 3 </li>
                                <li>Collected From : School Name </li>
                                <li>Delivered to : School Name </li>
                                <li>Status: Awaiting Shipment </li>
                              </ul>
                              <button
                                class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                <i class="fas fa-book"></i> Show Less
                              </button>
                            </div>
                            <div class="grid__20 mt-10">
                              <div class="relax-left mb-10 mobile-half">
                                <label class="form-component">Quantity</label>
                                <div class="input-group form-select form-element rounded medium left-border "><select name="quantity" tabindex="6" data-label="Quantity" class="form-aux"><option selected="selected" value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option></select></div>
                              </div>
                              <div class="relax-left mobile-half">
                                <label class="form-component for-mobile invisible">Quantity</label>
                                <button
                                  class="relax-right mobile-half landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                  <i class="fas fa-check-circle"></i> Select
                                </button>
                              </div>

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

                            <div class="grid__80">
                              <h5 class="event-title"><a href="#">Learning C++ Through Game Programming </a></h5>
                              <ul class="event-held">
                                <li>Author : Eric Johnson</li>
                                <li>Field : Technology </li>
                                <li>Edition : 1st </li>
                                <li>Issue Date : April 23 2018 </li>
                                <li>Copies : 3 </li>
                                <li>Collected From : School Name </li>
                                <li>Delivered to : School Name </li>
                                <li>Status: Awaiting Shipment </li>
                              </ul>
                              <button
                                class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                <i class="fas fa-book"></i> Show Less
                              </button>
                            </div>
                            <div class="grid__20 mt-10">
                              <div class="relax-left mb-10 mobile-half">
                                <label class="form-component">Quantity</label>
                                <div class="input-group form-select form-element rounded medium left-border "><select name="quantity" tabindex="6" data-label="Quantity" class="form-aux"><option selected="selected" value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option></select></div>
                              </div>
                              <div class="relax-left mobile-half">
                                <label class="form-component for-mobile invisible">Quantity</label>
                                <button
                                  class="relax-right mobile-half landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                  <i class="fas fa-check-circle"></i> Select
                                </button>
                              </div>

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

                            <div class="grid__80">
                              <h5 class="event-title"><a href="#">The Go Programming Language </a></h5>
                              <ul class="event-held">
                                <li>Author : Eric Johnson</li>
                                <li>Field : Technology </li>
                                <li>Edition : 1st </li>
                                <li>Issue Date : April 23 2018 </li>
                                <li>Copies : 3 </li>
                                <li>Collected From : School Name </li>
                                <li>Delivered to : School Name </li>
                                <li>Status: Awaiting Shipment </li>
                              </ul>
                              <button
                                class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                <i class="fas fa-book"></i> Show Less
                              </button>
                            </div>
                            <div class="grid__20 mt-10">
                              <div class="relax-left mb-10 mobile-half">
                                <label class="form-component">Quantity</label>
                                <div class="input-group form-select form-element rounded medium left-border "><select name="quantity" tabindex="6" data-label="Quantity" class="form-aux"><option selected="selected" value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option></select></div>
                              </div>
                              <div class="relax-left mobile-half">
                                <label class="form-component for-mobile invisible">Quantity</label>
                                <button
                                  class="relax-right mobile-half landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                  <i class="fas fa-check-circle"></i> Select
                                </button>
                              </div>

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
                            <div class="grid__80">
                              <h5 class="event-title"><a href="#">Andriod App Development with Kotlin </a></h5>
                              <ul class="event-held">
                                <li>Author : Eric Johnson</li>
                                <li>Field : Technology </li>
                                <li>Edition : 1st </li>
                                <li>Issue Date : April 23 2018 </li>
                                <li>Copies : 3 </li>
                                <li>Collected From : School Name </li>
                                <li>Delivered to : School Name </li>
                                <li>Status: Awaiting Shipment </li>
                              </ul>
                              <button
                                class="relax-left landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                <i class="fas fa-book"></i> Show Less
                              </button>
                            </div>
                            <div class="grid__20 mt-10">
                              <div class="relax-left mb-10 mobile-half">
                                <label class="form-component">Quantity</label>
                                <div class="input-group form-select form-element rounded medium left-border "><select name="quantity" tabindex="6" data-label="Quantity" class="form-aux"><option selected="selected" value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option></select></div>
                              </div>
                              <div class="relax-left mobile-half">
                                <label class="form-component for-mobile invisible">Quantity</label>
                                <button
                                  class="relax-right mobile-half landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                                  <i class="fas fa-check-circle"></i> Select
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
            <div id="tab-content2" class="tab-content">
              <div class="column width-12 no-padding mt-30">
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
                        <h5 class="event-title"><a href="#">Programming Cook Book PHP 7</a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">Learning C++ Through Game Programming </a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">The Go Programming Language </a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">Andriod App Development with Kotlin</a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
            <div id="tab-content3" class="tab-content">
              <div class="column width-12 no-padding mt-30">
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
                        <h5 class="event-title"><a href="#">Programming Cook Book PHP 7</a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">Learning C++ Through Game Programming </a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">The Go Programming Language </a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">Andriod App Development with Kotlin</a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
            <div id="tab-content4" class="tab-content">
              <div class="column width-12 no-padding mt-30">
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
                        <h5 class="event-title"><a href="#">Programming Cook Book PHP 7</a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">Learning C++ Through Game Programming </a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">The Go Programming Language </a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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
                        <h5 class="event-title"><a href="#">Andriod App Development with Kotlin</a></h5>
                        <ul class="event-held">
                          <li>Author : Eric Johnson</li>
                          <li>Field : Technology </li>
                          <li>Edition : 1st </li>
                          <li>Issue Date : April 23 2018 </li>
                          <li>Copies : 3 </li>
                          <li>Collected From : School Name </li>
                          <li>Delivered to : School Name </li>
                          <li>Status: Awaiting Shipment </li>
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



  </div>
</template>
<script>
export default {
  data() {
    return {
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
    tokenizer() {
      let validation = localStorage.getItem("loginToken");
      if (validation) {
        this.userData = JSON.parse(validation);
      }
    },
    miniScroll(dest) {
      if (dest) {
        const item = document.getElementById(String(dest));

        let scrollToItem = item => {
          let diff = (item.offsetTop - window.scrollY) / 8;
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
    userSwitcher: function() {
      this.userType === 0
        ? (this.currentUser = "Dika | Student")
        : (this.currentUser = "Philip | Liberian");
    }
  },
  computed: {
    avatar: function() {
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
    this.tokenizer();
    this.authenticated = this.session;
  },
  mounted() {
    this.userSwitcher();
  }
};
</script>
