<template>
  <div class="content clearfix bkg-light">
    <div id="dashboard-header" class="section-block landing-bg">
      <div class="row flex">
        <div class="column width-8 push-2">
          <div class="feature-content">
            <div class="feature-content-inner center">
              <h4 class="color-white mb-0 font-mont">Add Book</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="dashboard" class="top-border animated fadeInUp">
      <div class="form-wrapper">
        <div class="card" style="margin-left: 20% !important;width: 50rem; margin-top:3%">
          <div class="card-body">
            <form v-on:submit.prevent="addItem">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group grid__full">
                    <label class="form-component">Name of library :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="book.nameoflibrary "
                      :class="{ 'border border-danger': $v.book.nameoflibrary.$error }"
                    />
                    <div class="bg-danger text-white" v-if="$v.book.nameoflibrary.$error">
                      <div v-if="!$v.book.nameoflibrary.required">Name of library is required</div>
                      <div
                        v-if="!$v.book.nameoflibrary.minLength"
                      >Name of library must have at least {{$v.book.nameoflibrary.$params.minLength.min}} letters.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="form-component">Number of books:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="book.numberofbooks "
                      :class="{ 'border border-danger': $v.book.numberofbooks.$error }"
                    />
                    <div class="bg-danger text-white" v-if="$v.book.numberofbooks.$error">
                      <div v-if="!$v.book.numberofbooks.required">Number of books is required</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="form-component">Description:</label>
                    <textarea
                      v-model="book.description"
                      name="description"
                      id="description"
                      class="form-control"
                      rows="5"
                      cols="30"
                      placeholder="Two paragraphs stating why these books are needed and relevant"
                      :class="{ 'border border-danger': $v.book.description.$error }"
                    ></textarea>
                    <div class="bg-danger text-white" v-if="$v.book.description.$error">
                      <div v-if="!$v.book.description.required">Description is required</div>
                      <div
                        v-if="!$v.book.description.minLength"
                      >Description must have at least {{$v.book.description.$params.minLength.min}} letters.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group grid__full">
                    <label class="form-label">Type</label>
                    <multi-select
                      :options="options2"
                      :selected-options="items1"
                      placeholder="select type"
                      v-model="book.type"
                      @select="onSelectType"
                    ></multi-select>

                    <div class="bg-danger text-white" v-if="$v.book.type.$error">
                      <div v-if="!$v.book.type.required">Type is required</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="form-label">Subjects:</label>
                    <multi-select
                      :options="options"
                      :selected-options="items"
                      placeholder="select field(s)"
                      v-model="book.subjects"
                      @select="onSelect"
                      :class="{ 'border border-danger': $v.book.subjects.$error }"
                    ></multi-select>

                    <div class="bg-danger text-white" v-if="$v.book.subjects.$error">
                      <div v-if="!$v.book.subjects.required">subject(s) is required</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-component">Author:</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="book.author"
                    :class="{ 'border border-danger': $v.book.author.$error }"
                  >
                  <div class="bg-danger text-white" v-if="$v.book.author.$error">
                    <div v-if="!$v.book.author.required">Author is required</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-component">Edition:</label>
                  <input type="text" class="form-control" v-model="book.edition">
                  <div
                    class="bg-danger text-white"
                    v-if="$v.book.edition.$error"
                    :class="{ 'border border-danger': $v.book.edition.$error }"
                  >
                    <div v-if="!$v.book.edition.required">Edition is required</div>
                  </div>
                </div>
              </div>
              </div>-->
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="form-component">Restrictions:</label>
                    <!-- <input type="text" class="form-control" v-model="book.year" /> -->
                    <date-picker v-model="book.restrictions" :config="dateoptions"></date-picker>
                    <div
                      class="bg-danger text-white"
                      v-if="$v.book.restrictions.$error"
                      :class="{ 'border border-danger': $v.book.restrictions.$error }"
                    >
                      <div v-if="!$v.book.restrictions.required">Restrictions is required</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="form-label">Duration Of Request:</label>
                    <model-select
                      :options="durations"
                      v-model="book.durationOfRequest"
                      placeholder="select duration"
                      :class="{ 'border border-danger': $v.book.durationOfRequest.$error }"
                    ></model-select>
                    <!-- <input
                    type="text"
                    class="form-control"
                    v-model="book.durationOfRequest"
                    :class="{ 'border border-danger': $v.book.durationOfRequest.$error }"
                    >-->
                    <div class="bg-danger text-white" v-if="$v.book.durationOfRequest.$error">
                      <div
                        v-if="!$v.book.durationOfRequest.required"
                      >Duration Of Request is required</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group grid__full">
                    <label class="form-component">Picture of library :</label>
                    <input
                      type="file"
                      id="file"
                      ref="file"
                      v-on:change="handleFileUpload()"
                      class="form-control"
                    />
                    <div class="bg-danger text-white" v-if="$v.file.$error">
                      <div v-if="!$v.file.required">Logo or Picture library photo is required</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <button class="btn btn-primary pull-right" :disabled="isLoading">Request Book</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
import axios from "../api/efiwe";
import { ajaxFindCountry, getCountries } from "../api/countriesApi";
import fields from "../data/fields.json";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  ModelSelect,
  MultiSelect,
  ModelListSelect,
  MultiListSelect
} from "vue-search-select";
// Import required dependencies
import "bootstrap/dist/css/bootstrap.css";

// Import this component
import datePicker from "vue-bootstrap-datetimepicker";

// Import date picker css
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
Vue.use(Vuelidate);
export default {
  components: {
    ModelSelect,
    MultiSelect,
    ModelListSelect,
    MultiListSelect,
    datePicker
  },
  data() {
    return {
      dateoptions: {
        format: "YYYY",
        useCurrent: false
      },
      isLoading: false,
      file: "",
      fields: [],
      types: [],
      reqfields: [],
      fields: fields,
      selectedFields: {},
      options2: [
        { value: "Book", text: "Book" },
        { value: "Journal", text: "Journal" },
        { value: "Encyclopedia", text: "Encyclopedia" }
      ],
      durations: [
        { value: "1 month", text: "1 month" },
        { value: "2 months", text: "2 months" },
        { value: "3 months", text: "3 months" },
        { value: "4 months", text: "4 months" },
        { value: "5 months", text: "5 months" },
        { value: "6 months", text: "6 months" },
        { value: "7 months", text: "7 months" },
        { value: "8 months", text: "8 months" },
        { value: "9 months", text: "9 months" },
        { value: "10 months", text: "10 months" },
        { value: "11 months", text: "11 months" },
        { value: "12 months", text: "12 months" }
      ],
      options: [],
      book: {
        nameoflibrary: "",
        type: "",
        subjects: "",
        numberofbooks: "",
        durationOfRequest: "",
        description: "",
        restrictions: ""
      },

      searchText: "", // If value is falsy, reset searchText & searchItem
      items: [],
      items1: [],
      lastSelectItem: {},
      lastSelectType: {}
    };
  },
  validations: {
    file: { required },
    book: {
      nameoflibrary: { required, minLength: minLength(3) },
      type: { required },
      subjects: { required },
      //author: { required },
      //edition: { required },
      restrictions: { required },
      numberofbooks: { required },
      durationOfRequest: { required },
      description: { required, minLength: minLength(10) }
    }
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    addItem() {
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let formData = new FormData();
      formData.append("bookImage", this.file, this.file.name);
      for (const key in this.book) {
        let value = this.book[key];
        let pty = key;
        formData.append(key, this.book[key]);
      }
      this.isLoading = true;
      let uri = "/books/withImage/";
      axios
        .post(uri, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          // const res = response.data;
          console.log(response);
          console.log(`resonse ${response.data.status}`);
          this.isLoading = false;
          let status = response.data.status;
          if (response.data.status) {
            this.$router.push("/librarian");
          }
          Swal.fire({
            position: "top-end",
            type: "warning",
            title: `${response.data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(err => {
          this.isLoading = false;
          Swal.fire({
            position: "top-end",
            type: "error",
            title:  `${res.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
    addBook() {
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let uri = "/books";
      axios
        .post(uri, this.book)
        .then(response => {
          console.log(response);
          this.$router.push("/librarian");
        })
        .catch(err => console.log(err));
    },
    onDateSelected: function(daterange) {
      this.selectedDate = daterange;
    },
    onSelect(items, lastSelectItem) {
      this.items = items;
      this.reqfields.push(lastSelectItem.text);
      this.book.subjects = this.reqfields.join();
    },
    onSelectType(items1, lastSelectType) {
      this.items1 = items1;
      this.types.push(lastSelectType.text);
      this.book.type = this.types.join();
    },
    // deselect option
    reset() {
      this.items = []; // reset
    },
    searchCountry(searchText) {
      this.searchText = searchText;
      ajaxFindCountry(searchText).then(response => {
        //this.countries = response
      });
    },
    getFields() {
      fields.forEach(ele => {
        this.options = [...this.options, { value: ele.code, text: ele.name }];
      });
    },
    getField() {
      getFields().then(response => {
        console.log("val", JSON.stringify(response));
      });
    }
  },
  computed: {
    // a computed getter
    isError() {
      return this.items1.length === 0;
    }
  },
  mounted() {
    //this.searchCountry('').
    this.getFields();
    //this.countries = countries;
    //console.log(this.countries);
  }
};
</script>
<style scoped>
.toast-container {
  position: fixed;
  z-index: 999999;
  pointer-events: none;
  background-color: #030303 !important;
}

.toast {
  background-color: #030303 !important;
  top: initial;
}
.toast-success {
  background-color: #51a351;
}
.toast-error {
  background-color: #bd362f !important;
}
.toast-info {
  background-color: #2f96b4 !important;
}
.toast-warning {
  background-color: #f89406 !important;
}
@import "~vue-multiselect/dist/vue-multiselect.min.css";
.bg-danger text-white {
  display: block !important;
  width: 100%;
  margin-top: 0;
  color: #fff !important;
  background: #f46b45;
}
</style>
