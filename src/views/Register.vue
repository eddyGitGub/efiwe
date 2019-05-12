<template>
  <div id="register-ui" class="header-bg">
    <main class="grid__padding__sm static-form">
      <div class="webapp-content__inner">
        <div class="center-txt mt-10">
          <div class="webapp-user-pper np" :class="headerTag">
            <div class="webapp-user-form-inner np">
              <form name="form" @submit.prevent="submit">
                <div class="form-wrapper">
                  <div class="mt-60-pc"></div>
                  <div v-if="regVerification === 1" class="form-loader form-loader-signup verify">
                    <!--<div class="center-txt webapp-ripple-text"><i class="fas fa-user-plus"></i> Creating Account</div>-->
                    <!--<div class="webapp-ripple">-->
                    <!--<div></div>-->
                    <!--<div></div>-->
                    <!--</div>-->
                    <div class="center-txt webapp-ripple-text">
                      <i class="fas fa-business-time"></i> Processing.....
                    </div>

                    <div class="webapp-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div
                    v-else-if="regVerification === 2"
                    class="form-loader form-loader-signup success"
                  >
                    <div class="center-txt webapp-ripple-text">
                      <i class="fas fa-user"></i> Account Created
                    </div>

                    <div class="webapp-ripple">
                      <div></div>
                      <i class="webapp-ripple-notification fa fa-check-circle"></i>
                      <div></div>
                    </div>
                  </div>
                  <div
                    v-else-if="regVerification === 3"
                    class="form-loader form-loader-signup failure"
                  >
                    <!--<div class="center-txt webapp-ripple-text"><i class="fa fa-bell"></i> Registration Error</div>-->
                    <!--<div class="webapp-ripple">-->
                    <!--<div></div>-->
                    <!--<i class="webapp-ripple-notification fa fa-times-circle"></i>-->
                    <!--<div></div>-->
                    <!--</div>-->
                    <div class="center-txt webapp-ripple-text">
                      <i class="fas fa-business-time"></i> Processing .....
                    </div>

                    <div class="webapp-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div
                    v-else-if="regVerification === 4"
                    class="form-loader form-loader-signup notify"
                  >
                    <div class="center-txt webapp-ripple-text">
                      <i class="fas fa-comment-alt"></i> Already Registered
                    </div>

                    <div class="webapp-ripple">
                      <div></div>
                      <i class="webapp-ripple-notification fas fa-server"></i>
                      <div></div>
                    </div>
                  </div>
                  <div class="login-form grid__padding pt-15" v-else>
                    <div class="full-width" v-if="regStep === 2">
                      <div class="animated fadeInUp">
                        <div class="webapp-user-form-header m-b-sm nb ns">
                          <div class="webapp-user-form-inner">
                            <div class="grid__full">
                              <div class="card">
                                <div class="card-body">
                                  <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center">
                                      <i class="fas fa-user-plus"></i>
                                    </div>
                                    <div class="m-l-10 align-self-center">
                                      <h3 class="wallet m-b-0 font-light text-white">Create Account</h3>
                                      <h5
                                        class="wallet text-muted m-b-0 text-white"
                                      >2. African librarian</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br>
                        <div class="form-group grid__full mt-10">
                          <label class="form-component text-white" for="fullName">Full Name</label>
                          <div class="input-group grid__half__sticky full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-user"></i>
                            </div>
                            <input
                              id="fullName"
                              v-model.trim="librarianData.firstname"
                              :class="{ 'form-error': submitted && $v.librarianData.firstname.$error }"
                              class="form-control"
                              type="text"
                              placeholder="Firstname"
                            >
                            <div
                              class="invalid-fback"
                              v-if="submitted && $v.librarianData.firstname.$error"
                            >
                              <div
                                v-if="submitted && !$v.librarianData.firstname.required"
                              >Firstname is required</div>
                              <div
                                v-if="!$v.librarianData.firstname.minLength"
                              >Firstname must have at least {{$v.librarianData.firstname.$params.minLength.min}} letters.</div>
                            </div>
                          </div>
                          <div
                            class="input-group grid__half__sticky top-border right-border bottom-border left-border-mobile"
                          >
                            <input
                              id="lastName"
                              v-model.trim="librarianData.lastname"
                              :class="{ 'form-error': submitted && $v.librarianData.lastname.$error }"
                              class="form-control"
                              type="text"
                              placeholder="Lastname"
                            >
                            <div
                              class="invalid-fback"
                              v-if="submitted && $v.librarianData.lastname.$error"
                            >
                              <div
                                v-if="submitted && !$v.librarianData.lastname.required"
                              >Lastname is required</div>
                              <div
                                v-if="!$v.librarianData.lastname.minLength"
                              >Lastname must have at least {{$v.librarianData.lastname.$params.minLength.min}} letters.</div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="regEmail">Email ID</label>
                          <div class="input-group full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-envelope"></i>
                            </div>
                            <input
                              id="regEmail"
                              v-model.trim="librarianData.email"
                              :class="{ 'form-error': submitted && $v.librarianData.email.$error }"
                              class="form-control"
                              type="text"
                              placeholder="Email Address"
                            >
                            <div
                              v-if="submitted && $v.librarianData.email.$error"
                              class="invalid-fback"
                            >
                              <span v-if="!$v.librarianData.email.required">Email is required</span>
                              <span v-if="!$v.librarianData.email.email">Email is invalid</span>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="contactLine">Contact Line</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-mobile"></i>
                            </div>
                            <input
                              id="contactLine"
                              v-model.trim="librarianData.phone"
                              :class="{ 'form-error': submitted && $v.librarianData.phone.$error }"
                              class="form-control"
                              type="text"
                              placeholder="+234..."
                            >
                            <div
                              v-if="submitted && $v.librarianData.phone.$error"
                              class="invalid-fback"
                            >
                              <span v-if="!$v.librarianData.phone.required">Contact Line is required</span>
                              <span
                                v-if="!$v.librarianData.phone.minLength"
                              >Contact Line must have at least {{$v.librarianData.phone.$params.minLength.min}} letters.</span>
                            </div>
                          </div>
                        </div>

                        <div class="grid__half__sticky">
                          <label class="form-component text-white" for="password">Password</label>
                          <div class="form-group grid__full">
                            <div class="input-group full-border">
                              <div class="input-group-addon">
                                <i class="fas fa-lock"></i>
                              </div>
                              <input
                                id="password"
                                v-model.trim="librarianData.password"
                                :class="{ 'form-error': submitted && $v.librarianData.password.$error }"
                                class="form-control"
                                type="password"
                                placeholder="Password"
                              >
                              <div
                                v-if="submitted && $v.librarianData.password.$error"
                                class="invalid-fback"
                              >
                                <span
                                  v-if="!$v.librarianData.password.required"
                                >Password is required</span>
                                <span
                                  v-if="!$v.librarianData.password.minLength"
                                >Password must be at least 6 characters</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="grid__half__sticky">
                          <div class="form-group grid__full">
                            <label
                              class="form-component text-white"
                              for="verify-password"
                            >Verify Password</label>
                            <div
                              class="input-group top-border right-border bottom-border left-border-mobile"
                            >
                              <input
                                id="verify-password"
                                v-model.trim="librarianData.verify_password"
                                :class="{ 'form-error': submitted && $v.librarianData.verify_password.$error }"
                                class="form-control"
                                type="password"
                                placeholder="Confirm Password"
                              >
                              <div
                                v-if="submitted && $v.librarianData.verify_password.$error"
                                class="invalid-fback"
                              >
                                <span
                                  v-if="!$v.librarianData.verify_password.required"
                                >Verify Password is required</span>
                                <span
                                  v-else-if="!$v.librarianData.verify_password.sameAsPassword"
                                >Passwords must match</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="Country">Country</label>
                          <div class="input-group full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-flag"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="Country" v-if="countries.length">
                                <select
                                  name="user-country"
                                  class="form-control center-txt camelcase"
                                  v-model="librarianData.country"
                                  :class="{ 'form-error': submitted && $v.librarianData.country.$error }"
                                >
                                  <option disabled value>Please select</option>
                                  <option
                                    v-for="ctry in countries"
                                    :value="ctry.name"
                                    :key="ctry.code"
                                  >{{ ctry.name }}</option>
                                </select>
                                <div
                                  class="invalid-fback"
                                  v-if="submitted && $v.librarianData.country.$error"
                                >
                                  <div
                                    v-if="submitted && !$v.librarianData.country.required"
                                  >Please select country</div>
                                  <!-- <div v-if="!$v.otherData.lastname.minLength" >Lastname must have at least {{$v.otherData.lastname.$params.minLength.min}} letters.</div> -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="School">University</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-hospital"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="School" v-if="schools.name.length">
                                <select
                                  name="school-name"
                                  class="form-control center-txt camelcase"
                                  :class="{ 'form-error': submitted && $v.librarianData.school.$error }"
                                  v-model="librarianData.school"
                                >
                                  <option disabled value>Please select</option>
                                  <option
                                    v-for="school in schools.name"
                                    :value="school.name"
                                    :key="school.code"
                                  >{{school.name }}</option>
                                </select>
                                <div
                                  class="invalid-fback"
                                  v-if="submitted && $v.librarianData.school.$error"
                                >
                                  <div
                                    v-if="submitted && !$v.librarianData.school.required"
                                  >University is required</div>
                                  <!-- <div v-if="!$v.otherData.lastname.minLength" >Lastname must have at least {{$v.otherData.lastname.$params.minLength.min}} letters.</div> -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__full">
                          <label
                            class="form-component text-white"
                            for="adminEmail"
                          >School Admin Email</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-envelope"></i>
                            </div>
                            <input
                              id="adminEmail"
                              v-model.trim="librarianData.schoolAdmin"
                              :class="{ 'form-error': submitted && $v.librarianData.schoolAdmin.$error }"
                              class="form-control"
                              type="text"
                              placeholder="School Email Address"
                            >
                            <div
                              v-if="submitted && $v.librarianData.schoolAdmin.$error"
                              class="invalid-fback"
                            >
                              <span
                                v-if="!$v.librarianData.schoolAdmin.required"
                              >School Email is required</span>
                              <span v-if="!$v.librarianData.schoolAdmin.email">Email is invalid</span>
                            </div>
                          </div>
                        </div>

                        <div class="grid__full">
                          <button
                            @click.prevent="createUser('librarian')"
                            type="submit"
                            class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                          >
                            <i class="fas fa-user-plus"></i> Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="full-width" v-else-if="regStep === 3">
                      <div class="animated fadeInUp">
                        <div class="webapp-user-form-header m-b-sm nb ns">
                          <div class="webapp-user-form-inner">
                            <div class="grid__full">
                              <div class="card">
                                <div class="card-body">
                                  <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center">
                                      <i class="fas fa-user-plus"></i>
                                    </div>
                                    <div class="m-l-10 align-self-center">
                                      <h3 class="wallet m-b-0 font-light text-white">Create Account</h3>
                                      <h5
                                        class="wallet text-muted m-b-0 text-white"
                                      >2. Student Volunteer</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br>
                        <div class="form-group grid__full mt-10">
                          <label class="form-component text-white" for="sfullName">Full Name</label>
                          <div class="input-group grid__half__sticky full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-user"></i>
                            </div>
                            <input
                              id="sfullName"
                              v-model.trim="studentData.firstname"
                              :class="validateUser.fname_error"
                              class="form-control"
                              type="text"
                              placeholder="Firstname"
                            >
                          </div>
                          <div
                            class="input-group grid__half__sticky top-border right-border bottom-border left-border-mobile"
                          >
                            <input
                              id="slastName"
                              v-model.trim="studentData.lastname"
                              :class="validateUser.lname_error"
                              class="form-control"
                              type="text"
                              placeholder="Lastname"
                            >
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="regEmail">Email ID</label>
                          <div class="input-group full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-envelope"></i>
                            </div>
                            <input
                              id="sEmail"
                              v-model.trim="studentData.email"
                              :class="validateUser.email_error"
                              class="form-control"
                              type="text"
                              placeholder="Email Address"
                            >
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="contactLine">Contact Line</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-mobile"></i>
                            </div>
                            <input
                              id="scontactLine"
                              v-model.trim="studentData.phone"
                              :class="validateUser.phone_error"
                              class="form-control"
                              type="text"
                              placeholder="+234..."
                            >
                          </div>
                        </div>

                        <div class="grid__half__sticky">
                          <label class="form-component text-white" for="password">Password</label>
                          <div class="form-group grid__full">
                            <div class="input-group full-border">
                              <div class="input-group-addon">
                                <i class="fas fa-lock"></i>
                              </div>
                              <input
                                id="spassword"
                                v-model.trim="studentData.password"
                                :class="validateUser.password_error"
                                class="form-control"
                                type="password"
                                placeholder="Password"
                              >
                            </div>
                          </div>
                        </div>
                        <div class="grid__half__sticky">
                          <div class="form-group grid__full">
                            <label
                              class="form-component text-white"
                              for="verify-password"
                            >Verify Password</label>
                            <div
                              class="input-group top-border right-border bottom-border left-border-mobile"
                            >
                              <input
                                id="sverify-password"
                                v-model.trim="studentData.verify_password"
                                :class="validateUser.verify_password_error"
                                class="form-control"
                                type="password"
                                placeholder="Password"
                              >
                            </div>
                          </div>
                        </div>

                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="sCountry">Nationality</label>
                          <div class="input-group full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-flag"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="sCountry" v-if="nationality.countries.length">
                                <select
                                  name="student-nationality"
                                  class="form-control center-txt camelcase"
                                  v-model="studentData.nationality"
                                >
                                  <option
                                    v-for="country in nationality.countries"
                                    :value="country.name"
                                    :key="country.code"
                                  >{{country.name }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="sSchool">University</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-hospital"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="sSchool" v-if="schools.name.length">
                                <select
                                  name="school-name"
                                  class="form-control center-txt camelcase"
                                  v-model="studentData.school"
                                >
                                  <option
                                    v-for="school in schools.name"
                                    :value="school.name"
                                    :key="school.code"
                                  >{{school.name }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="sState">State</label>
                          <div class="input-group full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="sState" v-if="schools.name.length">
                                <select
                                  name="school-name"
                                  class="form-control center-txt camelcase"
                                  v-model="studentData.state"
                                >
                                  <option
                                    v-for="school in schools.name"
                                    :value="school.name"
                                    :key="school.code"
                                  >{{school.name }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="sTown">Town</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-hospital"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="sTown" v-if="schools.name.length">
                                <select
                                  name="school-name"
                                  class="form-control center-txt camelcase"
                                  v-model="studentData.town"
                                >
                                  <option
                                    v-for="school in schools.name"
                                    :value="school.name"
                                    :key="school.code"
                                  >{{school.name }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="discipline">Field of Study</label>
                          <div class="input-group full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-graduation-cap"></i>
                            </div>
                            <input
                              id="discipline"
                              v-model.trim="studentData.studyField"
                              :class="validateUser.studyField_error"
                              class="form-control"
                              type="text"
                              placeholder="Discipline"
                            >
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="position">Volunteer Role</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-id-badge"></i>
                            </div>
                            <input
                              id="position"
                              v-model.trim="studentData.volunteerRole"
                              :class="validateUser.volunteerRole_error"
                              class="form-control"
                              type="text"
                              placeholder="Volunteer Role"
                            >
                          </div>
                        </div>

                        <div class="form-group grid__half">
                          <label
                            class="form-component text-white"
                            for="africanDegree"
                          >African Degree ?</label>
                          <div class="input-group full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-certificate"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="africanDegree" v-if="schools.name.length">
                                <select
                                  name="school-name"
                                  class="form-control center-txt camelcase"
                                  v-model="studentData.africanDegree"
                                >
                                  <option
                                    v-for="school in schools.name"
                                    :value="school.name"
                                    :key="school.code"
                                  >{{school.name }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label
                            class="form-component text-white"
                            for="africanUni"
                          >African University</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-hospital"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="africanUni" v-if="schools.name.length">
                                <select
                                  name="school-name"
                                  class="form-control center-txt camelcase"
                                  v-model="studentData.africanSchool"
                                >
                                  <option
                                    v-for="school in schools.name"
                                    :value="school.name"
                                    :key="school.code"
                                  >{{school.name }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="grid__full">
                          <button
                            @click.prevent="createUser('student')"
                            type="submit"
                            class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                          >
                            <i class="fas fa-user-plus"></i> Sign Up
                          </button>
                        </div>
                      </div>
                    </div>-->
                    <div class="full-width" v-else-if="regStep === 4">
                      <div class="animated fadeInUp">
                        <div class="webapp-user-form-header m-b-sm nb ns">
                          <div class="webapp-user-form-inner">
                            <div class="grid__full">
                              <div class="card">
                                <div class="card-body">
                                  <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center">
                                      <i class="fas fa-user-plus"></i>
                                    </div>
                                    <div class="m-l-10 align-self-center">
                                      <h3 class="wallet m-b-0 font-light text-white">Create Account</h3>
                                      <h5
                                        class="wallet text-muted m-b-0 text-white"
                                      >2. Other Volunteer</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br>
                        <!-- others -->
                        <div class="form-group grid__full mt-10">
                          <label class="form-component text-white" for="ofullName">Full Name</label>
                          <div class="input-group grid__half__sticky full-border">
                            <div class="input-group-addon">
                              <i class="fas fa-user"></i>
                            </div>
                            <input
                              type="text"
                              v-model="otherData.firstname"
                              id="ofullName"
                              name="firstname"
                              class="form-control"
                              placeholder="Firstname"
                              :class="{ 'form-error': submitted && $v.otherData.firstname.$error }"
                            >
                            <div
                              class="invalid-fback"
                              v-if="submitted && $v.otherData.firstname.$error"
                            >
                              <div
                                v-if="submitted && !$v.otherData.firstname.required"
                              >Firstname is required</div>
                              <div
                                v-if="!$v.otherData.firstname.minLength"
                              >Firstname must have at least {{$v.otherData.firstname.$params.minLength.min}} letters.</div>
                            </div>
                          </div>
                          <div
                            class="input-group grid__half__sticky top-border right-border bottom-border left-border-mobile"
                            :class="{ 'form-error': $v.otherData.lastname.$error }"
                          >
                            <input
                              id="ofullName"
                              name="lastname"
                              v-model.trim="otherData.lastname"
                              class="form-control"
                              type="text"
                              placeholder="Lastname"
                            >
                            <div
                              class="invalid-fback"
                              v-if="submitted && $v.otherData.lastname.$error"
                            >
                              <div
                                v-if="submitted && !$v.otherData.lastname.required"
                              >Lastname is required</div>
                              <div
                                v-if="!$v.otherData.lastname.minLength"
                              >Lastname must have at least {{$v.otherData.lastname.$params.minLength.min}} letters.</div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="oEmail">Email ID</label>
                          <div
                            class="input-group full-border"
                            :class="{ 'form-error': submitted && $v.otherData.email.$error }"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-envelope"></i>
                            </div>
                            <input
                              id="oEmail"
                              v-model.trim="otherData.email"
                              class="form-control"
                              type="text"
                              placeholder="Email Address"
                            >
                            <div
                              v-if="submitted && $v.otherData.email.$error"
                              class="invalid-fback"
                            >
                              <span v-if="!$v.otherData.email.required">Email is required</span>
                              <span v-if="!$v.otherData.email.email">Email is invalid</span>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="ocontactLine">Contact Line</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                            :class="{ 'form-error': submitted && $v.otherData.phone.$error }"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-mobile"></i>
                            </div>
                            <input
                              id="ocontactLine"
                              v-model.trim="otherData.phone"
                              class="form-control"
                              type="text"
                              placeholder="+234..."
                            >
                          </div>
                          <div v-if="submitted && $v.otherData.phone.$error" class="invalid-fback">
                            <span v-if="!$v.otherData.phone.required">Contact Line is required</span>
                            <span
                              v-if="!$v.otherData.phone.minLength"
                            >Contact Line must have at least {{$v.otherData.phone.$params.minLength.min}} letters.</span>
                          </div>
                        </div>
                        <div class="grid__half__sticky">
                          <label class="form-component text-white" for="opassword">Password</label>
                          <div
                            class="form-group grid__full"
                            :class="{ 'form-error': submitted && $v.otherData.password.$error }"
                          >
                            <div class="input-group full-border">
                              <div class="input-group-addon">
                                <i class="fas fa-lock"></i>
                              </div>
                              <input
                                id="opassword"
                                v-model.trim="otherData.password"
                                class="form-control"
                                type="password"
                                placeholder="Password"
                              >
                            </div>
                            <div
                              v-if="submitted && $v.otherData.password.$error"
                              class="invalid-fback"
                            >
                              <span v-if="!$v.otherData.password.required">Password is required</span>
                              <span
                                v-if="!$v.otherData.password.minLength"
                              >Password must be at least 6 characters</span>
                            </div>
                          </div>
                        </div>
                        <div class="grid__half__sticky">
                          <div
                            class="form-group grid__full"
                            :class="{ 'form-error': submitted && $v.otherData.verify_password.$error }"
                          >
                            <label
                              class="form-component text-white"
                              for="overify-password"
                            >Verify Password</label>
                            <div
                              class="input-group top-border right-border bottom-border left-border-mobile"
                            >
                              <input
                                id="overify-password"
                                v-model.trim="otherData.verify_password"
                                class="form-control"
                                type="password"
                                placeholder="Password"
                              >
                              <div
                                v-if="submitted && $v.otherData.verify_password.$error"
                                class="invalid-fback"
                              >
                                <span
                                  v-if="!$v.otherData.verify_password.required"
                                >Verify Password is required</span>
                                <span
                                  v-else-if="!$v.otherData.verify_password.sameAsPassword"
                                >Passwords must match</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="oCountry">Nationality</label>
                          <div
                            class="input-group full-border"
                            :class="{ 'form-error': submitted && $v.otherData.nationality.$error }"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-flag"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="oCountry">
                                <select
                                  name="student-nationality"
                                  class="form-control center-txt camelcase"
                                  v-model="otherData.nationality"
                                >
                                  <option value selected="selected">Choose</option>
                                  <option v-if="countries.length == 0">No result</option>
                                  <option
                                    v-for="country in countries"
                                    :value="country.name"
                                    :key="country.code"
                                  >{{country.name }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="location">Current Location</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                            :class="{ 'form-error': submitted && $v.otherData.location.$error }"
                          >
                            <div class="input-group-addon" style="heigh:80%">
                              <i class="fas fa-map-marker-alt"></i>
                            </div>

                            <div class="grid__full">
                              <place-autocomplete-field
                                v-model="otherData.location"
                                placeholder="Enter Current Location"
                                name="location"
                                api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
                              ></place-autocomplete-field>
                            </div>
                            <div
                              class="invalid-fback"
                              v-if="submitted && $v.otherData.location.$error"
                            >
                              <div
                                v-if="submitted && !$v.otherData.location.required"
                              >Current Location is required</div>
                              <!-- <div v-if="!$v.otherData.lastname.minLength" >Lastname must have at least {{$v.otherData.lastname.$params.minLength.min}} letters.</div> -->
                            </div>
                          </div>
                        </div>

                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="workHours">Work Hours</label>
                          <div
                            class="input-group full-border"
                            :class="{ 'form-error': submitted && $v.otherData.workHours.$error }"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-clock"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="workHours" v-if="workHours.slots.length">
                                <select
                                  name="school-name"
                                  class="form-control center-txt camelcase"
                                  v-model="otherData.workHours"
                                >
                                  <option
                                    v-for="slot in workHours.slots"
                                    :value="slot.name"
                                    :key="slot.code"
                                  >{{slot.name }}</option>
                                </select>
                              </div>
                            </div>
                            <div
                              class="invalid-fback"
                              v-if="submitted && $v.otherData.workHours.$error"
                            >
                              <div
                                v-if="submitted && !$v.otherData.workHours.required"
                              >Work Hours is required</div>
                              <!-- <div v-if="!$v.otherData.lastname.minLength" >Lastname must have at least {{$v.otherData.lastname.$params.minLength.min}} letters.</div> -->
                            </div>
                          </div>
                        </div>
                        <div class="form-group grid__half">
                          <label class="form-component text-white" for="oposition">Volunteer Role</label>
                          <div
                            class="input-group top-border right-border bottom-border left-border-mobile"
                            :class="{ 'form-error': submitted && $v.otherData.volunteerRole.$error }"
                          >
                            <div class="input-group-addon">
                              <i class="fas fa-id-badge"></i>
                            </div>
                            <div class="grid__full">
                              <div class="select" id="Country" v-if="countries.length">
                                <select
                                  name="user-country"
                                  class="form-control center-txt camelcase"
                                  v-model.trim="otherData.volunteerRole"
                                >
                                  <option disabled value>Please select</option>
                                  <option
                                    v-for="ctry in volunteerRoles"
                                    :value="ctry.name"
                                    :key="ctry.code"
                                  >{{ ctry.name }}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div
                            class="invalid-fback"
                            v-if="submitted && $v.otherData.volunteerRole.$error"
                          >
                            <div
                              v-if="submitted && !$v.otherData.volunteerRole.required"
                            >Volunteer Role is required</div>
                            <!-- <div v-if="!$v.otherData.lastname.minLength" >Lastname must have at least {{$v.otherData.lastname.$params.minLength.min}} letters.</div> -->
                          </div>
                        </div>
                        <div class="form-group grid__full">
                          <label class="form-component text-white" for="motivation">Motivation</label>
                          <div
                            class="input-group grid__full full-border"
                            :class="{ 'form-error': submitted && $v.otherData.motivation.$error }"
                          >
                            <textarea
                              v-model="otherData.motivation"
                              name="motivation"
                              id="motivation"
                              class="form-control"
                              rows="5"
                              cols="30"
                              placeholder="Tell us why to want to join us"
                            ></textarea>
                          </div>
                          <div
                            class="invalid-fback"
                            v-if="submitted && $v.otherData.motivation.$error"
                          >
                            <div
                              v-if="submitted && !$v.otherData.motivation.required"
                            >Motivation is required</div>
                            <!-- <div v-if="!$v.otherData.lastname.minLength" >Lastname must have at least {{$v.otherData.lastname.$params.minLength.min}} letters.</div> -->
                          </div>
                        </div>
                        <div class="grid__full">
                          <button
                            @click.prevent="createUser('other')"
                            type="submit"
                            class="button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                          >
                            <i class="fas fa-user-plus"></i> Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="full-width" v-else>
                      <div class="webapp-user-form-header m-b-sm nb ns">
                        <div class="webapp-user-form-inner">
                          <div class="grid__full">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex flex-row">
                                  <div class="round round-lg align-self-center">
                                    <i class="fas fa-user-plus"></i>
                                  </div>
                                  <div class="m-l-10 align-self-center">
                                    <h3 class="wallet m-b-0 font-light text-white">Get Started</h3>
                                    <h5
                                      class="wallet text-muted m-b-0 text-white"
                                    >1. Please select a category</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="webapp-user-form-header m-b-sm nb ns">
                        <div class="webapp-user-form-inner">
                          <div class="grid__full mt-20 mb-10">
                            <div class="grid__full">
                              <button
                                @click.prevent="selectUser('librarian')"
                                type="submit"
                                class="signup-button button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                              >
                                <i class="fas fa-user-plus"></i> African librarian
                              </button>
                            </div>
                            <!-- <div class="grid__full">
                              <button
                                @click.prevent="selectUser('student')"
                                type="submit"
                                class="signup-button button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                              >
                                <i class="fas fa-user-plus"></i> Student Volunteer
                              </button>
                            </div>-->
                            <div class="grid__full">
                              <button
                                @click.prevent="selectUser('other')"
                                type="submit"
                                class="signup-button button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                              >
                                <i class="fas fa-user-plus"></i> Other Volunteer
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="webapp-user-form-header m-b-sm nb ns">
                        <div class="webapp-user-form-inner">
                          <div class="grid__full">
                            <div class="grid__full">
                              <p class="lead-alt light-txt no-margins">Already have an Account ?</p>
                              <button
                                @click.prevent="login()"
                                type="submit"
                                class="mt-10 button medium rounded bkg-green bkg-hover-green color-white color-hover-white"
                              >
                                <i class="fas fa-lock"></i> Sign in
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import axios from "../api/efiwe";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
import countries from "../data/countries.json";

Vue.use(Vuelidate);
export default {
  data() {
    return {
      submitted: false,
      countries: countries,
      active: true,
      authenticated: this.session,
      validEmail: false,
      proceed: true,
      volunteerRoles: [
        { code: "Book drive lead", name: "Book drive lead" },
        { code: "Book drive associate", name: "Book drive associate" },
        { code: "Logistics", name: "Logistics" },
        { code: "Communication", name: "Communication" },
        { code: "Planning", name: "Planning" },
        { code: "Social media", name: "Social media" },
        { code: "Writer", name: "Writer" }
      ],
      calendar: {
        day: [
          { code: "01", name: "1st" },
          { code: "02", name: "2nd" },
          { code: "03", name: "3rd" },
          { code: "04", name: "4th" },
          { code: "05", name: "5th" },
          { code: "06", name: "6th" },
          { code: "07", name: "7th" },
          { code: "08", name: "8th" },
          { code: "09", name: "9th" },
          { code: "10", name: "10th" },
          { code: "11", name: "11th" },
          { code: "12", name: "12th" },
          { code: "13", name: "13th" },
          { code: "14", name: "14th" },
          { code: "15", name: "15th" },
          { code: "16", name: "16th" },
          { code: "17", name: "17th" },
          { code: "18", name: "18th" },
          { code: "19", name: "19th" },
          { code: "20", name: "20th" },
          { code: "21", name: "21st" },
          { code: "22", name: "22nd" },
          { code: "23", name: "23rd" },
          { code: "24", name: "24th" },
          { code: "25", name: "25th" },
          { code: "26", name: "26th" },
          { code: "27", name: "27th" },
          { code: "28", name: "28th" },
          { code: "29", name: "29th" },
          { code: "30", name: "30th" },
          { code: "31", name: "31st" }
        ],
        month: [
          { code: "01", name: "January" },
          { code: "02", name: "February" },
          { code: "03", name: "March" },
          { code: "04", name: "April" },
          { code: "05", name: "May" },
          { code: "06", name: "June" },
          { code: "07", name: "July" },
          { code: "08", name: "August" },
          { code: "09", name: "September" },
          { code: "10", name: "October" },
          { code: "11", name: "Novemeber" },
          { code: "12", name: "December" }
        ]
      },
      dob: {
        day: "",
        month: "",
        year: ""
      },
      workHours: {
        slots: [
          { code: "1-3", name: "1-3 Hours weekly" },
          { code: "2-4", name: "2-4 Hours weekly" },
          { code: "3-6", name: "3-6 Hours weekly" },
          { code: "4-8", name: "4-8 Hours weekly" },
          { code: "5-10", name: "5-10 Hours weekly" },
          { code: "6-12", name: "6-12 Hours weekly" }
        ]
      },
      schools: {
        name: [
          { code: "Unilag", name: "Univerity of Lagos" },
          { code: "Bolton-University", name: "University of Bolton" },
          { code: "Canadian-University", name: "Canadian University" },
          { code: "Berlin-University", name: "University of Berlin" },
          { code: "havard-university", name: "Havard University" },
          { code: "spain-university", name: "Espanol Univerity" },
          { code: "UNITED-KINGDOM", name: "Univerity of Notthingham" }
        ]
      },
      validateUser: {
        fname_error: { "form-error": false },
        lname_error: { "form-error": false },
        phone_error: { "form-error": false },
        email_error: { "form-error": false },
        dob_error: { "form-error": false },
        verify_password_error: { "form-error": false },
        password_error: { "form-error": false },
        schoolAdmin_error: { "form-error": false },
        studyField_error: { "form-error": false },
        volunteerRole_error: { "form-error": false },
        motivation_error: { "form-error": false }
      },
      headerTag: { "animated fadeInUp": false, hidden: true },
      librarianData: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        verify_password: "",
        country: "",
        school: "",
        schoolAdmin: ""
      },
      studentData: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        verify_password: "",
        nationality: "",
        school: "",
        state: "",
        town: "",
        studyField: "",
        volunteerRole: "",
        africanDegree: "",
        africanSchool: ""
      },
      otherData: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        verify_password: "",
        nationality: "",
        location: "",
        volunteerRole: "",
        workHours: "",
        motivation: ""
      },
      regVerification: 0,
      regStep: 1
    };
  },
  validations: {
    otherData: {
      firstname: { required, minLength: minLength(3) },
      lastname: { required, minLength: minLength(3) },
      phone: { required, minLength: minLength(6) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      verify_password: { required, sameAsPassword: sameAs("password") },
      nationality: { required },
      location: { required },
      volunteerRole: { required },
      workHours: { required },
      motivation: { required }
    },
    librarianData: {
      firstname: { required, minLength: minLength(3) },
      lastname: { required, minLength: minLength(3) },
      phone: { required, minLength: minLength(6) },
      email: { required, email },
      schoolAdmin: { required, email },
      password: { required, minLength: minLength(6) },
      verify_password: { required, sameAsPassword: sameAs("password") },
      country: { required },
      school: { required }
    }
  },
  methods: {
    selectUser(selected) {
      this.submitted = true;
      if (selected === "librarian") {
        this.regStep = 2;
      } else if (selected === "student") {
        this.regStep = 3;
      } else if (selected === "other") {
        this.regStep = 4;
      } else {
        this.regStep = 1;
      }
    },
    createUser(category) {
      this.submitted = true;
      const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
      const numbersOnly = /[0-9]|\./;
      if (category === "librarian") {
        this.validEmail = reg.test(this.librarianData.email);
        this.validAdmin = reg.test(this.librarianData.schoolAdmin);

        if (this.librarianData.firstname.length <= 3) {
          this.validateUser.fname_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.fname_error = { "form-error": false };
        }

        if (this.librarianData.lastname.length <= 3) {
          this.validateUser.lname_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.lname_error = { "form-error": false };
        }

        if (this.librarianData.phone.length <= 3) {
          this.validateUser.phone_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.phone_error = { "form-error": false };
        }

        if (this.validEmail === false) {
          this.validateUser.email_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.email_error = { "form-error": false };
        }

        if (this.librarianData.password.length <= 5) {
          this.validateUser.password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.password_error = { "form-error": false };
        }

        if (this.librarianData.verify_password.length <= 5) {
          this.validateUser.verify_password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.verify_password_error = { "form-error": false };
        }

        if (this.validAdmin === false) {
          this.validateUser.schoolAdmin_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.schoolAdmin_error = { "form-error": false };
        }

        if (
          this.librarianData.password !== this.librarianData.verify_password
        ) {
          this.validateUser.verify_password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.verify_password_error = { "form-error": false };
        }

        if (
          this.librarianData.firstname.length > 3 &&
          this.librarianData.lastname.length > 3 &&
          this.librarianData.phone.length > 3 &&
          this.librarianData.password.length > 5 &&
          this.librarianData.verify_password.length > 5 &&
          this.librarianData.password === this.librarianData.verify_password &&
          this.validEmail === true &&
          this.validAdmin === true
        ) {
          this.proceed = true;
          let formActor = this.proceed;
          this.processRequest(formActor, category);
        } else {
          // stop here if form is invalid
          this.$v.$touch();
          if (this.$v.$invalid) {
            return;
          }
          console.log("coudnt validate all fields");
        }
      } else if (category === "student") {
        this.validEmail = reg.test(this.studentData.email);

        if (this.studentData.firstname.length <= 3) {
          this.validateUser.fname_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.fname_error = { "form-error": false };
        }

        if (this.studentData.lastname.length <= 3) {
          this.validateUser.lname_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.lname_error = { "form-error": false };
        }

        if (this.studentData.phone.length <= 3) {
          this.validateUser.phone_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.phone_error = { "form-error": false };
        }

        if (this.validEmail === false) {
          this.validateUser.email_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.email_error = { "form-error": false };
        }

        if (this.studentData.password.length <= 5) {
          this.validateUser.password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.password_error = { "form-error": false };
        }

        if (this.studentData.verify_password.length <= 5) {
          this.validateUser.verify_password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.verify_password_error = { "form-error": false };
        }

        if (this.studentData.studyField.length <= 3) {
          this.validateUser.studyField_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.studyField_error = { "form-error": false };
        }

        if (this.studentData.volunteerRole.length <= 3) {
          this.validateUser.volunteerRole_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.volunteerRole_error = { "form-error": false };
        }

        if (this.studentData.password !== this.studentData.verify_password) {
          this.validateUser.verify_password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.verify_password_error = { "form-error": false };
        }

        if (
          this.studentData.firstname.length > 3 &&
          this.studentData.lastname.length > 3 &&
          this.studentData.phone.length > 3 &&
          this.studentData.password.length > 5 &&
          this.studentData.verify_password.length > 5 &&
          this.studentData.password === this.studentData.verify_password &&
          this.validEmail === true &&
          this.studentData.studyField.length > 3 &&
          this.studentData.volunteerRole.length > 3
        ) {
          this.proceed = true;
          let formActor = this.proceed;
          this.processRequest(formActor, category);
        } else console.log("coudnt validate all fields");
      } else if (category === "other") {
        this.validEmail = reg.test(this.otherData.email);
        if (this.otherData.firstname.length <= 3) {
          this.validateUser.fname_error = { "form-error": true };
          this.proceed = false;
          console.log(this.validateUser["fname_error"]);
        } else {
          this.validateUser.fname_error = { "form-error": false };
        }

        if (this.otherData.lastname.length <= 3) {
          this.validateUser.lname_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.lname_error = { "form-error": false };
        }

        if (this.otherData.phone.length <= 3) {
          this.validateUser.phone_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.phone_error = { "form-error": false };
        }

        if (this.validEmail === false) {
          this.validateUser.email_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.email_error = { "form-error": false };
        }

        if (this.otherData.password.length <= 5) {
          this.validateUser.password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.password_error = { "form-error": false };
        }

        if (this.otherData.verify_password.length <= 5) {
          this.validateUser.verify_password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.verify_password_error = { "form-error": false };
        }

        if (this.otherData.volunteerRole.length <= 3) {
          this.validateUser.volunteerRole_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.volunteerRole_error = { "form-error": false };
        }

        if (this.otherData.motivation.length <= 3) {
          this.validateUser.motivation_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.motivation_error = { "form-error": false };
        }

        if (this.otherData.password !== this.otherData.verify_password) {
          this.validateUser.verify_password_error = { "form-error": true };
          this.proceed = false;
        } else {
          this.validateUser.verify_password_error = { "form-error": false };
        }

        if (
          this.otherData.firstname.length > 3 &&
          this.otherData.lastname.length > 3 &&
          this.otherData.phone.length > 3 &&
          this.otherData.password.length > 5 &&
          this.otherData.verify_password.length > 5 &&
          this.otherData.password === this.otherData.verify_password &&
          this.validEmail === true &&
          this.otherData.volunteerRole.length > 3 &&
          this.otherData.motivation.length > 3
        ) {
          this.proceed = true;
          let formActor = this.proceed;
          this.processRequest(formActor, category);
        } else {
          // stop here if form is invalid
          this.$v.$touch();
          console.log(this.otherData);
          if (this.$v.$invalid) {
            return;
          }
        }
      } else {
        console.log("Invalid category type for new user");
      }
    },
    processRequest(formActor, category) {
      const validUSignup = formActor;
      if (validUSignup) {
        let url = "";
        let data = {};
        this.regVerification = 1;
        switch (category) {
          case "librarian":
            url = "/librarians";
            data = this.librarianData;
            break;
          case "student":
            url = "/students";
            data = this.studentData;
            break;
          case "other":
            url = "/others";
            data = this.otherData;
            break;
          default:
            // code block
            return;
        }
        axios
          .post(url, data)
          .then(signupResponse => {
            if (signupResponse.data === "Registration Successful") {
              setTimeout(() => {
                this.regVerification = 2;
                let crypto = Math.random()
                  .toString(36)
                  .substr(2, 14);
                let loginToken = {
                  email: this.librarianData.email,
                  user: this.librarianData.firstname,
                  phone: this.librarianData.phone,
                  "session-id": crypto
                };
                // localStorage.setItem("loginToken", JSON.stringify(loginToken));
                // this.authenticated = this.session;
                setTimeout(() => {
                  window.location.href = "./";
                }, 4000);
              }, 3500);
            } else if (signupResponse.data === "Registration Error") {
              setTimeout(() => {
                this.regVerification = 3;
                setTimeout(() => {
                  this.regVerification = 0;
                }, 5000);
              }, 3500);
            } else if (signupResponse.data === "Already Registered") {
              setTimeout(() => {
                this.regVerification = 4;
                setTimeout(() => {
                  this.regVerification = 0;
                }, 5000);
              }, 3500);
            } else {
              setTimeout(() => {
                this.regVerification = 3;
              }, 3500);
            }
          })
          .catch(error => console.log(error));
      }
    },
    populateForms() {
      this.dob.day = this.calendar.day[0];
      this.dob.month = this.calendar.month[0];
      this.librarianData.country = "";
      this.librarianData.school = "";
      this.studentData.nationality = "";
      this.studentData.state = this.schools.name[0];
      this.studentData.school = this.schools.name[0];
      this.studentData.town = this.schools.name[0];
      this.studentData.africanDegree = this.schools.name[0];
      this.studentData.africanSchool = this.schools.name[0];
      this.otherData.workHours = "";
      this.otherData.nationality = "";
      this.otherData.location = "";
    },
    login() {
      this.$router.push("/login");
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
  }
};
</script>
<style scoped>
.form-group {
  margin-bottom: 0.1rem !important;
}
.invalid-fback {
  display: block !important;
  width: 100%;
  margin-top: 0;
  color: #fff !important;
  background: #f46b45;
}
</style>
