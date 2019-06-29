<template>
  <div class="content clearfix bkg-light">
    <div id="dashboard-header" class="section-block landing-bg">
      <div class="row flex"></div>
    </div>
    <user-detail></user-detail>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import UserDetail from "../components/UserDetail.vue";
export default {
  components: {
    Modal,
    UserDetail
  },
  data() {
    return {
      showModal: false,
      submitting: false,
      error: false,

      searchState: 1,
      authenticated: "",
      userData: [],
      currentUser: ""
    };
  },
  methods: {
    // openModal(id, bookId) {
    //   console.log(bookId);
    //   this.book.id = id;
    //   this.book.bookId = bookId;
    //   this.showModal = true;
    // },
    // closeModal() {
    //   this.book.id = "";
    //   this.book.bookId = "";
    //   this.showModal = false;
    // },
    // submitAndClose() {
    //   this.$v.$touch();
    //   if (this.book.quantity === 0) {
    //     this.error = true;
    //     return;
    //   }
    //   let formData = new FormData();
    //   formData.append("bookImage", this.file, this.file.name);
    //   for (const key in this.book) {
    //     let value = this.book[key];
    //     let pty = key;
    //     formData.append(key, this.book[key]);
    //   }
    //   this.isLoading = true;
    //   let uri = "/volunteers/addmore/";
    //   axios
    //     .post(uri, formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       }
    //     })
    //     .then(response => {
    //       console.log(response);
    //       this.getBooks();
    //       this.isLoading = false;
    //       this.closeModal();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       this.isLoading = false;
    //     });
    // },
    // tokenizer() {
    //   const validation = localStorage.getItem("loginToken");
    //   if (validation) {
    //     this.userData = JSON.parse(validation);
    //   }
    // },
  }
};
</script>
