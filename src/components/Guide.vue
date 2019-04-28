<template>
    <div id="guide">
        <main>
                <div class="webapp-content">
                    <div class="webapp-content__inner" :class="headerTag">
                        <div class="for-pc mt-30"></div>
                        <div class="row flex boxes one-column-on-tablet"
                                 v-for="(profile, index) in teamMember" :key="index">
                                <div class="column width-3 no-padding-right for-pc">
                                    <div class="features column width-12 left center magic-b">
                                        <div class="grid-boxes rounded large style-3 columns-1 mb-0 border-grey-light">
                                            <div class="grid-boxes-column">
                                                <div class="grid-boxes-header">
                                                    <img :src="require('../assets/images/teams/' + profile.img)" alt="" class="round-img">
                                                </div>
                                                <hr class="no-margins">
                                                <div class="grid-boxes-text bkg-white">
                                                    <p class="lead">
                                                        <span class="title-name">{{ profile.name }}  </span>
                                                        <span class="title-post">{{ profile.discipline }}</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column width-9 no-padding-right">
                                    <div class="box xlarge rounded border-grey-light box-shadow ">
                                        <div class="table">


                                            <button @click="closeProfile()" class="close-btn"></button>

                                            <div >
                                                <h4 class="font-mont">Profile</h4>
                                                <p class="lead mb-20 left-txt font-mont">
                                                    {{ profile.description }}
                                                </p>

                                                <p class="lead mb-20 left-txt font-mont">
                                                    {{ profile.moreInfo }}
                                                </p>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>


                    </div>
                </div>
            </main>
    </div>
</template>
<script>
export default {
  data() {
    return {
      teamMember: [],
      headerTag: { "animated fadeInUp": false, hidden: true }
    };
  },
  props: ["memberProfile"],

  methods: {
    closeProfile() {
      this.$root.$emit("swapHandler", this.memberProfile);
    }
  },
  mounted() {
    if (this.memberProfile) {
      this.teamMember.push(this.memberProfile);
    }

    setTimeout(() => {
      this.headerTag = { "animated fadeInUp": true, hidden: false };
      setTimeout(() => {
        this.headerTag = { "animated fadeInDown": false, hidden: false };
      }, 1500);
    }, 100);
  }
};
</script>
