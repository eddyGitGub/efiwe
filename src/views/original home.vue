<template>
  <div class="content clearfix">
    <div id="intro">
      <app-slider @miniScrollHandler="miniScroll" />
      <div @click="miniScroll('donate-stats')" class="for-pc link-down animated fadeInUp" style="opacity: 1;"></div>
    </div>

    <div id="donate-stats"
      class="section-block animated fadeInUp bkg-light">
      <div class="row">
        <div class="column width-12">
          <div class="tabs rounded button-nav pill small nb center ">
            <div class="tab-panes">
              <div class="row flex boxes two-columns-on-tablet">
                <div class="grid__full">
                  <div class="card">
                    <div class="card-body">
                      <div class="column width-12">

                        <div class="row flex">
                          <div class="column width-8 push-2">
                            <div class="feature-content">
                              <div class="feature-content-inner center">
                                <div class="round round-lg align-self-center">
                                    <i class="fas fa-gift"></i>
                                </div>
                                <h3 class=" mb-0 font-mont">Our Donations</h3>
                                <p class="lead grid__padding">
                                  Efiwe has been raising funds for the shipment of
                                  collected books, outreaches to more schools to start
                                  book drives and for the management of our web
                                  platform. Efiwe is a 501 (c) (3) Non-Profit
                                  Organization based in the United States.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row flex boxes two-columns-on-tablet">
                          <div class="features column width-3 left center magic-b">
                            <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                              <div class="grid-boxes-column">
                                <div class="grid-boxes-header">
                                  <div class="grid__full no-padding">

                                      <div class="countCenter">
                                        <div class="font-mont full-width light-txt">
                                          <i class="fas fa-book-open"></i>
                                        </div>
                                      </div>

                                  </div>
                                </div>
                                <hr class="no-margins">
                                <div class="grid-boxes-text bkg-white">
                                  <p class="lead">
                                    <span class="title-name"> 10,277 Books Donated </span>
                                    <span class="title-post">


                                      Books Donated since 2016, 18 benefitting Institution Libraries in Nigeria and Ghana.

                                    </span>
                                  </p>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div class="features column width-3 left center magic-b">
                            <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                              <div class="grid-boxes-column">
                                <div class="grid-boxes-header">
                                  <div class="countCenter">
                                    <div class="font-mont full-width light-txt">
                                      <i class="fas fa-landmark"></i>
                                    </div>
                                  </div>
                                </div>
                                <hr class="no-margins">
                                <div class="grid-boxes-text bkg-white">
                                  <p class="lead">

                                    <span class="title-name"> Four Locations </span>
                                    <span class="title-post">


                                      Book drives currently happening @ Brown U., Ewardsville Il. University of Idaho. Join us

                                    </span>
                                  </p>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div class="features column width-3 left center magic-b">
                            <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                              <div class="grid-boxes-column">
                                <div class="grid-boxes-header">
                                  <div class="countCenter">
                                    <div class="font-mont full-width light-txt">
                                      <i class="fas fa-hands-helping"></i>
                                    </div>
                                  </div>
                                </div>
                                <hr class="no-margins">
                                <div class="grid-boxes-text bkg-white">
                                  <p class="lead">

                                    <span class="title-name"> Over 150 Volunteers </span>
                                    <span class="title-post">
                                      We've got support from numerous volunteers working hard to helpus reach our goals.

                                    </span>
                                  </p>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div class="features column width-3 left center magic-b">
                            <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                              <div class="grid-boxes-column">
                                <div class="grid-boxes-header">
                                  <div class="countCenter">
                                    <div class="font-mont full-width light-txt">
                                      <i class="fas fa-donate"></i>
                                    </div>
                                  </div>
                                </div>
                                <hr class="no-margins">
                                <div class="grid-boxes-text bkg-white">
                                  <p class="lead">
                                    <span class="title-name">Over $7898 Donated </span>
                                    <span class="title-post">With the support of friends and colleagues, we've raised $7898
                                    for the shipment of books collected
                                    </span>
                                  </p>
                                </div>

                              </div>
                            </div>
                          </div>
                          <br>
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
      <div class="row flex boxes one-column-on-tablet">
        <div class="column width-8 mt-30 push-2">

          <div class="feature-content center-block center-elem">
            <div class="feature-content-inner center">
              <div class="center-block center-elem">
                <button
                  @click="donateHandler()"
                  class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                  <i class="fas fa-gift"></i> Donate
                </button>
                <button
                  @click.prevent="miniScroll('about')"
                  class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                  <i class="fab fa-black-tie"></i> About Us
                </button>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

    <div id="about"
      class="section-block top-border animated fadeInUp ">
      <div class="row">
        <div class="column width-12 center grid__padding">
          <div class="round round-lg align-self-center"><i class="fab fa-black-tie"></i></div>
          <h3 class=" mb-0 font-mont">About Us</h3>
          <p class="lead font-mont grid__padding">We are very passionate about our work and continuously
          strive for
          excellence.</p>
        </div>
      </div>
      <div class="row flex boxes one-column-on-tablet mt-30">
        <div class="column width-3 no-padding-right">
          <div class="about-wrapper box xlarge rounded border-grey-light box-shadow bkg-charcoal-light">
            <div class="table">

              <div class="about-img">
                <img
                  class="about-logo"
                  src="../assets/images/efiwe-about.png"
                  alt="Efiwe Logo">

              </div>


            </div>
          </div>
        </div>
        <div class="column width-9 no-padding-right">
          <div class="box xlarge rounded border-grey-light box-shadow ">
            <div class="table">

              <div>
                <h4 class="font-mont left-txt">Profile</h4>
                <p class="lead mb-20 left-txt font-mont">
                  Efiwe is a 501 (c) (3) Non-Profit Organization based in the United States with the
                  aim of continuing
                  to enrich the educational experiences of Africans in higher institutions back on the
                  continent.

                </p>

                <p class="lead mb-20 left-txt font-mont">
                  We believe that access to more and better books/textbooks will significantly impact
                  on the human
                  capital in Africa and therefore lead to a more educated populace and a better
                  Africa.

                </p>

                <p class="lead mb-20 left-txt font-mont">
                  We will run a very open and transparent system of book collections, donations and
                  transport to Africa
                  and to deserving institutions. Please feel free to ask us questions about our
                  process and handling of
                  resources (financial, educational etc.).

                </p>

              </div>


            </div>
          </div>
        </div>

        <div class="column width-8 mt-50 push-2">

          <div class="feature-content center-block center-elem">
            <div class="feature-content-inner center">
              <div class="center-block center-elem">
                <button
                  @click="aboutHandler()"
                  class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                  <i class="fas fa-check-circle"></i> Read More
                </button>
                <button
                  @click.prevent="miniScroll('team')"
                  class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                  <i class="fas fa-users"></i> Our Team
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

    <div id="team"
      class="animated fadeInUp">
      <div class="section-block bkg-light">
        <div class="row">
          <div class="column width-12 center grid__padding">
            <div class="round round-lg align-self-center"><i class="fas fa-users"></i></div>
            <h3 class=" mb-0 font-mont">Our Team</h3>
            <p class="lead font-mont grid__padding">We believe tha great inventions worthy of note are never
            done by one
            person</p>
          </div>
        </div>
        <div class="row">
          <div class="column width-12">
            <div class="tabs rounded button-nav pill small nb center ">
              <div class="tab-panes">
                <div class="row flex boxes two-columns-on-tablet">
                  <div class="features column width-3 left center magic-b">
                    <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                      <div class="grid-boxes-column">
                        <div class="grid-boxes-header">
                          <img
                            src="../assets/images/teams/ee.jpg"
                            alt=""
                            class="round-img">
                        </div>
                        <hr class="no-margins">
                        <div class="grid-boxes-text bkg-white">
                          <p class="lead">
                            <span class="title-name">Prof. Emmanuel Eneyo </span>
                            <span class="title-post">Board Memeber / Treasurer </span>
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="features column width-3 left center magic-b">
                    <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                      <div class="grid-boxes-column">
                        <div class="grid-boxes-header">
                          <img
                            src="../assets/images/teams/jc.jpg"
                            alt=""
                            class="round-img">
                        </div>
                        <hr class="no-margins">
                        <div class="grid-boxes-text bkg-white">
                          <p class="lead">
                            <span class="title-name">Jodi Cox</span>
                            <span class="title-post">Vice Chairman/ Board Secretary</span>
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="features column width-3 left center magic-b">
                    <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                      <div class="grid-boxes-column">
                        <div class="grid-boxes-header">
                          <img
                            src="../assets/images/teams/pa.jpg"
                            alt=""
                            class="round-img">
                        </div>
                        <hr class="no-margins">
                        <div class="grid-boxes-text bkg-white">
                          <p class="lead">
                            <span class="title-name">Philip Alibi </span>
                            <span class="title-post">Founder / Managing Director</span>
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="features column width-3 left center magic-b">
                    <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                      <div class="grid-boxes-column">
                        <div class="grid-boxes-header">
                          <img
                            src="../assets/images/teams/ao.jpg"
                            alt=""
                            class="round-img">
                        </div>
                        <hr class="no-margins">
                        <div class="grid-boxes-text bkg-white">
                          <p class="lead">
                            <span class="title-name">Ayodeji Oluyemi </span>
                            <span class="title-post">Logistics, Nigeria</span>
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>

        <div class="row flex boxes one-column-on-tablet">
          <div class="column width-8 mt-30 push-2">

            <div class="feature-content center-block center-elem">
              <div class="feature-content-inner center">
                <div class="center-block center-elem">
                  <button
                    @click.prevent="teamsHandler()"
                    class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                    <i class="fas fa-users"></i> View All
                  </button>
                  <button
                    @click.prevent="miniScroll('stories')"
                    class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                    <i class="fas fa-newspaper"></i> Our Stories
                  </button>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <div id="stories" class="top-border  animated fadeInUp">
      <div class="section-block bkg-light">
        <div class="row">
          <div class="column width-12 center grid__padding">
            <div class="round round-lg align-self-center"><i class="fas fa-newspaper"></i></div>
            <h3 class=" mb-0 font-mont">Our Stories</h3>
            <p class="lead font-mont grid__padding">We've been mentioned in numerous articles regarding our mission, vision and impact in the African Educational sector.</p>
          </div>
        </div>
        <div class="row">
          <div class="column width-12">
            <div class="tabs rounded button-nav pill small nb center ">
              <div class="tab-panes">
                <div class="row boxes" v-if="this.newStories.length > 0">
                  <app-carousel
                  :navigationEnabled=true
                  :perPageCustom="[[480, 2], [768, 3], [1200, 4], [1366, 4], [1500, 4] ]"
                  :autoplay=true
                  :loop=true
                  :autoplayTimeout=3000
                  :autoplayHoverPause=true
                  :scrollPerPage=false
                  :paginationSize=10
                  :easing=this.linear
                  :speed=700
                  >
                  <app-content v-for="(story, index) in newStories" :key="index" class="animated fadeInDown">

                      <div class="features column width-12">
                        <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                          <div :id="story.id" class="grid-boxes-column animated webapp-scaleUpCenter">
                            <div class="grid-boxes-header">
                              <img :src="require('../assets/images/stories/' + story.img)" alt="" class="square-img">
                            </div>
                            <hr class="no-margins">
                            <div class="grid-boxes-text bkg-white">
                              <p class="lead">
                                <span class="title-name">{{ story.name }} </span>
                                <a :href="story.url"
                                   class="story-link landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white mt-10">
                                  <i class="fas fa-newspaper"></i> View Story
                                </a>


                              </p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </app-content>
                  </app-carousel>
                </div>
                <button @click="miniScroll('blog')"
                        class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white mt-30"
                ><i class="fas fa-newspaper"></i> Our Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--<div id="units" class="section-block animated fadeInUp">-->

    <!--<div class="columns-12 center grid__padding">-->
    <!--<div class="row flex">-->
    <!--<div class="column width-8 push-2">-->
    <!--<div class="round round-lg align-self-center"><i class="fas fa-hands-helping"></i></div>-->
    <!--<h3 class=" mb-0 font-mont">We Need Volunteers</h3>-->
    <!--<p class="lead font-mont grid__padding">-->
    <!--We are very passionate about our work and open to new Volunteers. We'll love to have you in any the departments below-->
    <!--</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->


    <!--<div class="row">-->
    <!--<div class="column width-12">-->
    <!--<div class="row flex boxes two-columns-on-tablet">-->
    <!--<div class="features column width-4 left center magic-b">-->
    <!--<div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">-->
    <!--<div class="grid-boxes-column">-->
    <!--<div class="grid-boxes-header">-->
    <!--<div class="grid__full no-padding">-->
    <!--<h4 class="font-mont full-width">-->
    <!--<div class="countCenter"><i-->
    <!--class="fas fa-book-reader"></i>-->
    <!--</div>-->
    <!--</h4>-->
    <!--</div>-->
    <!--</div>-->
    <!--<hr class="no-margins">-->
    <!--<div class="grid-boxes-text bkg-white">-->
    <!--<p class="lead">-->

    <!--<span class="title-name"> Book Donors </span>-->

    <!--<span class="title-post">-->

    <!--We encourage scholars to donates books as this keeps our initiative running-->
    <!--</span>-->
    <!--</p>-->
    <!--</div>-->

    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="features column width-4 left center magic-b">-->
    <!--<div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">-->
    <!--<div class="grid-boxes-column">-->
    <!--<div class="grid-boxes-header">-->
    <!--<h4 class="font-mont full-width">-->
    <!--<div class="countCenter"><i class="fas fa-hand-holding-heart"></i></div>-->
    <!--</h4>-->
    <!--</div>-->
    <!--<hr class="no-margins">-->
    <!--<div class="grid-boxes-text bkg-white">-->
    <!--<p class="lead">-->

    <!--<span class="title-name"> Volunteers</span>-->

    <!--<span class="title-post">-->

    <!--Our volunteers are very involved in book collections in the US with logistics in Africa-->
    <!--</span>-->
    <!--</p>-->
    <!--</div>-->

    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="features column width-4 left center magic-b">-->
    <!--<div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">-->
    <!--<div class="grid-boxes-column">-->
    <!--<div class="grid-boxes-header">-->
    <!--<h4 class="font-mont full-width">-->
    <!--<div class="countCenter"><i class="fas fa-hand-holding-usd"></i></div>-->
    <!--</h4>-->
    <!--</div>-->
    <!--<hr class="no-margins">-->
    <!--<div class="grid-boxes-text bkg-white">-->
    <!--<p class="lead">-->

    <!--<span class="title-name">Fund Raising Donors</span>-->

    <!--<span class="title-post">-->
    <!--The funds needed to send the collected books are gotten from generous donations and grants-->
    <!--</span>-->
    <!--</p>-->
    <!--</div>-->

    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="features column width-4 left center magic-b">-->
    <!--<div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">-->
    <!--<div class="grid-boxes-column">-->
    <!--<div class="grid-boxes-header">-->
    <!--<h4 class="font-mont full-width">-->
    <!--<div class="countCenter"><i class="fas fa-landmark"></i></div>-->
    <!--</h4>-->
    <!--</div>-->
    <!--<hr class="no-margins">-->
    <!--<div class="grid-boxes-text bkg-white">-->
    <!--<p class="lead">-->

    <!--<span class="title-name">Tertiary Institutions </span>-->

    <!--<span class="title-post">-->
    <!--Tertiary Institutions in Africa collaborate with us to send desired books to their libraries.-->
    <!--</span>-->
    <!--</p>-->
    <!--</div>-->

    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="features column width-4 left center magic-b">-->
    <!--<div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">-->
    <!--<div class="grid-boxes-column">-->
    <!--<div class="grid-boxes-header">-->
    <!--<h4 class="font-mont full-width">-->
    <!--<div class="countCenter"><i class="fas fa-bullhorn"></i></div>-->
    <!--</h4>-->
    <!--</div>-->
    <!--<hr class="no-margins">-->
    <!--<div class="grid-boxes-text bkg-white">-->
    <!--<p class="lead">-->

    <!--<span class="title-name"> Media </span>-->

    <!--<span class="title-post">-->
    <!--The media plays a huge role in telling our stories all over the world.-->
    <!--</span>-->
    <!--</p>-->
    <!--</div>-->

    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="features column width-4 left center magic-b">-->
    <!--<div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">-->
    <!--<div class="grid-boxes-column">-->
    <!--<div class="grid-boxes-header">-->
    <!--<div class="grid__full no-padding">-->
    <!--<h4 class="font-mont full-width">-->
    <!--<div class="countCenter"><i-->
    <!--class="fas fa-users"></i>-->
    <!--</div>-->
    <!--</h4>-->
    <!--</div>-->
    <!--</div>-->
    <!--<hr class="no-margins">-->
    <!--<div class="grid-boxes-text bkg-white">-->
    <!--<p class="lead">-->

    <!--<span class="title-name"> Teamwork</span>-->

    <!--<span class="title-post">-->

    <!--We will remain indebted to the team of Volunteers That has made this whole initiative possible.-->
    <!--</span>-->
    <!--</p>-->
    <!--</div>-->

    <!--</div>-->
    <!--</div>-->
    <!--</div>-->


    <!--</div>-->
    <!--</div>-->
    <!--<div class="column width-8 mt-50 push-2">-->

    <!--<div class="feature-content center-block center-elem">-->
    <!--<div class="feature-content-inner center">-->
    <!--<div class="center-block center-elem">-->
    <!--<button @click="register()"-->
    <!--class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">-->
    <!--<i class="fas fa-check-circle"></i> Join Us-->
    <!--</button>-->
    <!--<button @click.prevent="miniScroll('blog')"-->
    <!--class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">-->
    <!--<i class="fas fa-newspaper"></i> Our Blog-->
    <!--</button>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

<!--</div>-->
    <!--</div>-->


    <!--</div>-->

    <div id="blog"
      class="animated fadeInUp">
      <div class="section-block bkg-white">
        <div class="row">
          <div class="column width-12 center grid__padding">
            <div class="round round-lg align-self-center"><i class="fas fa-newspaper"></i></div>
            <h3 class=" mb-0 font-mont">Our Blog</h3>
            <p class="lead font-mont grid__padding">We've got updated information regarding professional
            guidance in
            Education, Events, Scholarship Programs plus more.</p>


          </div>
        </div>

        <div class="row">
          <div class="column width-12">
            <div class="tabs rounded button-nav pill small nb center">
              <div class="tab-panes">
                <div class="row flex boxes two-columns-on-tablet">
                  <div class="column width-4 left center magic-b">
                    <div class="blog-entry card-2 card-stack  box-shadow">
                      <div class="img-box">
                        <img
                          src="../assets/images/blog/post4.png"
                          alt="Blog Post Image">
                      </div>
                      <div class="content-box">
                        <div class="date-box">
                          <div class="inner">
                            <div class="date">20</div>
                            <div class="comment">SEP</div>
                          </div>
                        </div>
                        <div class="content">
                          <h3 class="title-small bold-font">Over 40,000 Books Supplied to West
                          Africa for Improved
                          Education </h3>
                          <p class="lead">
                            Some amazing and catchy content will come here which will be
                            supported by a nice call to
                            action
                            button so the user can read the post accordingly.
                          </p>
                          <button
                            @click.prevent="blog"
                            class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                            <i class="fas fa-info-circle"></i> View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column width-4 left center magic-b">
                    <div class="blog-entry card-2 card-stack  box-shadow">
                      <div class="img-box">
                        <img
                          src="../assets/images/blog/post9.jpg"
                          alt="Blog Post Image">
                      </div>
                      <div class="content-box">
                        <div class="date-box">
                          <div class="inner">
                            <div class="date">15</div>
                            <div class="comment">OCT</div>
                          </div>
                        </div>
                        <div class="content">
                          <h3 class="title-small bold-font">30 New Scholarship Programmes for
                          African Students this
                          October </h3>
                          <p class="lead">
                            Some amazing and catchy content will come here which will be
                            supported by a nice call to
                            action
                            button so the user can read the post accordingly.
                          </p>
                          <button
                            @click.prevent="blog"
                            class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                            <i class="fas fa-info-circle"></i> View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column width-4 left center magic-b">
                    <div class="blog-entry card-2 card-stack  box-shadow">
                      <div class="img-box">
                        <img
                          src="../assets/images/blog/post5.png"
                          alt="Blog Post Image">
                      </div>
                      <div class="content-box">
                        <div class="date-box">
                          <div class="inner">
                            <div class="date">09</div>
                            <div class="comment">DEC</div>
                          </div>
                        </div>
                        <div class="content">
                          <h3 class="title-small bold-font">20 International Universities
                          Offering Free Tuition into
                          2019 / 2020 </h3>
                          <p class="lead">
                            Some amazing and catchy content will come here which will be
                            supported by a nice call to
                            action
                            button so the user can read the post accordingly.
                          </p>
                          <button
                            @click.prevent="blog"
                            class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                            <i class="fas fa-info-circle"></i> View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="column width-12 center-block center-elem mt-50">

            <button
              @click.prevent="blogHandler()"
              class="center-elem button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white mt-30">
              <i class="fas fa-rss"></i> View All Posts
            </button>


          </div>
        </div>


      </div>
    </div>
    

    <div id="footer-block">
      <app-footernav/>
    </div>

  </div>
</template>
<script>
import Slider from "./Slider.vue";
import { Carousel, Slide } from "vue-carousel";
import FooterNav from "./FooterNav.vue";
export default {
  data() {
    return {
      linear: "linear",
      authenticated: this.session,
      storiesData: [
        {
          id: 1,
          url:
            "http://www.stltoday.com/pr/news/nonprofit-org-donating-textbooks-to-african-universities/article_5c905f20-4934-11e7-9be2-308d99b27af4.html",
          img: "stltoday.png",
          name: "StlToday"
        },
        {
          id: 2,
          url:
            "https://www.riverbender.com/articles/details/siue-grad-student-launches-international-nonprofit-to-fill-west-african-universities-shelves-with-textbooks-21219.cfm#.WTgH4uvyt0w",
          img: "riverbender.png",
          name: "RiverBender"
        },
        {
          id: 3,
          url:
            "http://m.alestlelive.com/lifestyles/article_2c4d0c06-55ea-11e7-865e-bb00d5551cf3.html?mode=jqm",
          img: "alestle.png",
          name: "The Alestle"
        },
        {
          id: 4,
          url:
            "https://www.naij.com/1108706-see-nigerian-student-helping-universities-world-photos.html",
          img: "naij.png",
          name: "Naij"
        },
        {
          id: 5,
          url:
            "http://www.theintelligencer.com/news/article/Graduate-student-hosts-college-textbook-drive-11199453.php",
          img: "edwardsvilleIntelligencer.png",
          name: "Intelligencer"
        },
        {
          id: 6,
          url:
            "http://www.edglentoday.com/articles/details/siue-grad-student-launches-international-nonprofit-to-fill-west-african-universities-shelves-with-textbooks-21219.cfm#.WTgJYevyt0w",
          img: "edglentoday.png",
          name: "EdgeGlen Today"
        },
        {
          id: 7,
          url:
            "http://tellmystory.com.ng/why-i-want-to-send-one-million-books-to-african-university-libraries-by-2030-with-efiwe-org-philip-alabi/",
          img: "tellmystory.png",
          name: "Tell My Story"
        },
        {
          id: 8,
          url: "http://www.bnd.com/living/magazine/article123722114.html",
          img: "bellevillenewsdemocrat.png",
          name: "Belleville News"
        },
        {
          id: 9,
          url:
            "http://thetelegraph.com/news/90677/siue-student-donating-900-books-to-nigerian-university",
          img: "altontelegraph.png",
          name: "Alton Telegraph"
        },
        {
          id: 10,
          url:
            "https://www.siue.edu/news/2016/10/SIUE-Graduate-Student-to-Donate-900-Books-to-Nigerian-University.shtml",
          img: "southerncity.png",
          name: "Southern City"
        },
        {
          id: 11,
          url:
            "http://www.theintelligencer.com/local/article/Student-looks-to-salvage-textbooks-10672570.php",
          img: "edwardsvilleIntelligencer.png",
          name: "Intelligencer"
        },
        {
          id: 12,
          url:
            "http://www.browndailyherald.com/2018/01/31/phd-student-founds-nonprofit-aid-stocked-african-libraries",
          img: "browndailyherald.png",
          name: "Daily Herald"
        },
        {
          id: 13,
          url:
            "https://www.brown.edu/academics/gradschool/about/newsletter/international-impact%C2%A0%C3%A0l%C3%A0b%C3%AD-collects-books-nigerian-schools",
          img: "brownuniversity.png",
          name: "Brown University"
        }
      ],
      storiesGrabber: []
    };
  },
  components: {
    "app-slider": Slider,
    "app-footernav": FooterNav,
    "app-carousel": Carousel,
    "app-content": Slide
  },
  props: ["session"],
  methods: {
    scroller() {
      const scrollDuration = 1500,
        scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(() => {
          if (window.scrollY > 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
    },
    tokenizer() {
      const validation = localStorage.getItem("loginToken");
      if (validation) {
        this.userData = JSON.parse(validation);
      }
    },
    miniScroll(handler) {
      this.$root.$emit("miniScroll", String(handler));
    },
    aboutHandler() {
      this.$root.$emit("about");
    },
    teamsHandler() {
      this.$root.$emit("teams");
    },
    donateHandler() {
      this.$root.$emit("donate");
    },
    blogHandler() {
      this.$root.$emit("blog");
    }
  },
  computed: {
    avatar() {
      let fullName = " ";
      if (this.userData.user) {
        fullName = this.userData.user;
      } else {
        fullName = "Guest Guest";
      }
      return fullName
        .split(" ")
        .slice(0, 1)
        .join(" ");
    },
    newStories() {
      let newStories = [];
      if (this.storiesGrabber.length > 0) {
        newStories = this.storiesData;
      }
      return newStories;
    }
  },
  beforeMount() {
    this.tokenizer();
    this.authenticated = this.session;
  },
  mounted() {
    setTimeout(() => {
      this.storiesGrabber = this.storiesData;
    }, 8500);
  }
};
</script>
<style>
.VueCarousel {
  visibility: visible;
  flex-basis: 100%;
  width: 100%;
}
.VueCarousel-dot.VueCarousel-dot--active button {
  background: #1bb05d !important;
}
.VueCarousel-navigation-button {
  background: #fff !important;
  border-radius: 5px;
  width: 45px;
  height: 45px;
}
</style>
