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
            <!-- 
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group grid__full">
                  <label class="form-component">Title:</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="book.title"
                    :class="{ 'border border-danger': $v.book.title.$error }"
                  >
                  <div class="bg-danger text-white" v-if="$v.book.title.$error">
                    <div v-if="!$v.book.title.required">Title is required</div>
                    <div
                      v-if="!$v.book.title.minLength"
                    >Title must have at least {{$v.book.title.$params.minLength.min}} letters.</div>
                  </div>
                </div>
              </div>
            </div>-->
            <div class="row ">
              <div class="col-sm-12">
                <div class="form-group grid__full">
                  <label class="form-label">Type</label>
                   <multi-select :options="options2"
                       :selected-options="items1"
                       placeholder="select type"
                        v-model="book.type"
                       @select="onSelectType">
                  </multi-select>
                  

                  <div class="bg-danger text-white" v-if="$v.book.type.$error">
                    <div v-if="!$v.book.type.required">Type is required</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">Field:</label>
                  <multi-select
                    :options="options"
                    :selected-options="items"
                    placeholder="select field(s)"
                    v-model="book.field"
                    @select="onSelect"
                    :class="{ 'border border-danger': $v.book.field.$error }"
                  ></multi-select>

                  <div class="bg-danger text-white" v-if="$v.book.field.$error">
                    <div v-if="!$v.book.field.required">Field is required</div>
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
                  <label class="form-component">Min Publish Year:</label>
                  <input type="text" class="form-control" v-model="book.year">
                  <div
                    class="bg-danger text-white"
                    v-if="$v.book.year.$error"
                    :class="{ 'border border-danger': $v.book.year.$error }"
                  >
                    <div v-if="!$v.book.year.required">Min Year is required</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-component">Copies:</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="book.copies"
                    :class="{ 'border border-danger': $v.book.copies.$error }"
                  >
                  <div class="bg-danger text-white" v-if="$v.book.copies.$error">
                    <div v-if="!$v.book.copies.required">Copies is required</div>
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
                  v-model="book.durationOfRequest" placeholder="select duration"
                 :class="{ 'border border-danger': $v.book.durationOfRequest.$error }"></model-select>
                  <!-- <input
                    type="text"
                    class="form-control"
                    v-model="book.durationOfRequest"
                    :class="{ 'border border-danger': $v.book.durationOfRequest.$error }"
                  > -->
                  <div class="bg-danger text-white" v-if="$v.book.durationOfRequest.$error">
                    <div v-if="!$v.book.durationOfRequest.required">Duration Of Request is required</div>
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
                    placeholder="Tell Us More"
                  :class="{ 'border border-danger': $v.book.description.$error }"></textarea>
                  <div class="bg-danger text-white" v-if="$v.book.description.$error">
                              <div v-if="!$v.book.description.required">Description is required</div>
                            <div v-if="!$v.book.description.minLength" >Description must have at least {{$v.book.description.$params.minLength.min}} letters.</div>
                 </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group grid__full">
                  <label class="form-component">School Logo/Library Image:</label>
                  <input
                    type="file"
                    id="file"
                    ref="file"
                    v-on:change="handleFileUpload()"
                    class="form-control"
                  >
                 <div class="bg-danger text-white" v-if="$v.file.$error">
                    <div v-if="!$v.file.required">Logo or Library photo is required</div>
                  </div>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <button class="btn btn-primary pull-right">Request Book</button>
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
import {
  ModelSelect,
  MultiSelect,
  ModelListSelect,
  MultiListSelect
} from "vue-search-select";

Vue.use(Vuelidate);
export default {
  components: { ModelSelect, MultiSelect, ModelListSelect, MultiListSelect },
  data() {
    return {
      file: "",
      fields: [],
      types: [],
      reqfields:[],
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
        //title: "",
        type: "",
        field: "",
       // author: "",
        //edition: "",
        copies: "",
        durationOfRequest: "",
        description: ""
      },
     
      searchText: "", // If value is falsy, reset searchText & searchItem
      items: [],
      items1: [],
      lastSelectItem: {},
      lastSelectType: {}
    };
  },
  validations: {
    file: {required},
    book: {
     // title: { required, minLength: minLength(3) },
      type: { required },
      field: { required },
      //author: { required },
      //edition: { required },
      year: { required },
      copies: { required },
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
  console.log('Test',key +" "+ value);
   formData.append(key, this.book[key]);
  
}
console.log(this.book.type);
      let uri = "/books/withImage/";
      axios
        .post(uri, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response);
          this.$router.push("/librarian");
        })
        .catch(err => console.log(err));
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
      console.log(this.types);
      this.book.field = this.reqfields.join();
    },
     onSelectType(items1, lastSelectType) {
      this.items1 = items1;
      this.types.push(lastSelectType.text);
      console.log(this.types);
      this.book.type = this.types.join();
      console.log(this.book.type);
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
@import "~vue-multiselect/dist/vue-multiselect.min.css";
.bg-danger text-white {
  display: block !important;
  width: 100%;
  margin-top: 0;
  color: #fff !important;
  background: #f46b45;
}
</style>
