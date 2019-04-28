<template>
  <div id="slider">
      <section class="cd-slider">
        <ul>
          <li data-color="#091124" id="slide1" >
            <div class="content" >
              <blockquote>
                <div class="row flex">
                  <div class="column width-8 push-2">
                    <div class="feature-content">
                      <div class="feature-content-inner center">
                        <h1 class="color-white mb-0 font-mont">Changing Africa</h1>
                        <h1 class="color-white weight-semi-bold font-mont"> </h1>
                        <p class="lead color-white grid__padding">
                          Our vision is to facilitate the development of Africa and Africans by providing access to relevant information
                          (Books, journals and resources)

                        </p>


                        <div>
                          <button @click.prevent="miniScroll('donate-stats')"
                                  class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                            <i class="fas fa-book"></i> Read More
                          </button>
                          <router-link to="/register">
                            <button class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-check-circle"></i> Join Us</button>
                          </router-link>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </li>
          <li data-color="#127b41" id="slide2">
            <div class="content"  >
              <blockquote>
                <div class="row flex">
                  <div class="column width-8 push-2">
                    <div class="feature-content">
                      <div class="feature-content-inner center">
                        <h1 class="color-white mb-0 font-mont">Why We Care ? </h1>
                        <h1 class="color-white weight-semi-bold font-mont"> </h1>
                        <p class="lead color-white grid__padding">
                          We are excited about providing access to relevant information and creating the enlightenment that can usher Africa’s development.
                        </p>

                        <div>
                          <button @click.prevent="miniScroll('donate-stats')"
                                  class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                            <i class="fas fa-book"></i> Read More
                          </button>
                          <router-link to="/register">
                            <button class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-check-circle"></i> Join Us</button>
                          </router-link>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
             </blockquote>
            </div>
          </li>
          <li data-color="#F37D21" id="slide3">
            <div class="content"  >
              <blockquote>
                <div class="row flex">
                  <div class="column width-8 push-2">
                    <div class="feature-content">
                      <div class="feature-content-inner center">
                        <h1 class="color-white mb-0 font-mont">Our Process</h1>
                        <h1 class="color-white weight-semi-bold font-mont"> </h1>
                        <p class="lead color-white grid__padding">
                          We provide resources by donating relevant books to post-secondary institution libraries and community Libraries in Africa

                        </p>
                        <div>
                          <button @click.prevent="miniScroll('donate-stats')"
                                  class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                            <i class="fas fa-book"></i> Read More
                          </button>
                         <router-link to="/register">
                            <button class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-check-circle"></i> Join Us</button>
                          </router-link>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </li>
          <li data-color="#0D0D0D" id="slide4" >
            <div class="content" >
              <blockquote>
                <div class="row flex">
                  <div class="column width-8 push-2">
                    <div class="feature-content">
                      <div class="feature-content-inner center">
                        <h1 class="color-white mb-0 font-mont">Volunteers </h1>
                        <h1 class="color-white weight-semi-bold font-mont"> </h1>
                        <p class="lead color-white grid__padding">
                          We have a model that facilitate book collections in the US and deliver the collected books to African Librarians/Libraries
                        </p>
                        <div>
                          <button @click.prevent="miniScroll('donate-stats')"
                                  class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white">
                            <i class="fas fa-book"></i> Read More
                          </button>
                          <router-link to="/register">
                            <button class="landing-button button medium rounded bkg-theme bkg-hover-theme color-white color-hover-white"><i class="fas fa-check-circle"></i> Join Us</button>
                          </router-link>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </li>
        </ul>
        <nav>
          <div><a class="prev" href="#"></a></div>
          <div><a class="next" href="#"></a></div>
        </nav>
      </section>
  </div>
</template>
<script>
/* eslint-disable no-inner-declarations */

export default {
  data() {
    return {};
  },
  methods: {
    slider() {
      {
        let cdSlider = document.querySelector(".cd-slider"),
          item = cdSlider.querySelectorAll("li"),
          nav = cdSlider.querySelector("nav");

        item[0].className = "current_slide";

        for (let i = 0, len = item.length; i < len; i++) {
          let color = item[i].getAttribute("data-color");
          item[i].style.borderColor = color;
        }

        // Detect IE browsers and disable ripple effect on IE9
        let ua = window.navigator.userAgent;
        let msie = ua.indexOf("MSIE");
        if (msie > 0) {
          let version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
          if (version === 9) {
            cdSlider.className = "cd-slider ie9";
          }
        }

        if (item.length <= 1) {
          nav.style.display = "none";
        }

        const prevSlide = () => {
          let currentSlide = cdSlider.querySelector("li.current_slide"),
            prevElement = currentSlide.previousElementSibling,
            prevSlide =
              prevElement !== null ? prevElement : item[item.length - 1],
            prevColor = prevSlide.getAttribute("data-color"),
            el = document.createElement("span");

          currentSlide.className = "";
          prevSlide.className = "current_slide";

          nav.children[0].appendChild(el);

          let size =
              cdSlider.clientWidth >= cdSlider.clientHeight
                ? cdSlider.clientWidth * 2
                : cdSlider.clientHeight * 2,
            ripple = nav.children[0].querySelector("span");

          ripple.style.height = size + "px";
          ripple.style.width = size + "px";
          ripple.style.backgroundColor = prevColor;

          ripple.addEventListener("webkitTransitionEnd", function() {
            if (this.parentNode) {
              this.parentNode.removeChild(this);
            }
          });

          ripple.addEventListener("transitionend", function() {
            if (this.parentNode) {
              this.parentNode.removeChild(this);
            }
          });
        };

        const nextSlide = () => {
          let currentSlide = cdSlider.querySelector("li.current_slide"),
            nextElement = currentSlide.nextElementSibling,
            nextSlide = nextElement !== null ? nextElement : item[0],
            nextColor = nextSlide.getAttribute("data-color"),
            el = document.createElement("span");

          currentSlide.className = "";
          nextSlide.className = "current_slide";

          nav.children[1].appendChild(el);

          let size =
              cdSlider.clientWidth >= cdSlider.clientHeight
                ? cdSlider.clientWidth * 2
                : cdSlider.clientHeight * 2,
            ripple = nav.children[1].querySelector("span");

          ripple.style.height = size + "px";
          ripple.style.width = size + "px";
          ripple.style.backgroundColor = nextColor;

          ripple.addEventListener("webkitTransitionEnd", function() {
            if (this.parentNode) {
              this.parentNode.removeChild(this);
            }
          });

          ripple.addEventListener("transitionend", function() {
            if (this.parentNode) {
              this.parentNode.removeChild(this);
            }
          });
        };

        updateNavColor();

        function updateNavColor() {
          let currentSlide = cdSlider.querySelector("li.current_slide");

          let nextColor =
            currentSlide.nextElementSibling !== null
              ? currentSlide.nextElementSibling.getAttribute("data-color")
              : item[0].getAttribute("data-color");
          let prevColor =
            currentSlide.previousElementSibling !== null
              ? currentSlide.previousElementSibling.getAttribute("data-color")
              : item[item.length - 1].getAttribute("data-color");

          if (item.length > 2) {
            nav.querySelector(".prev").style.backgroundColor = prevColor;
            nav.querySelector(".next").style.backgroundColor = nextColor;
          }
        }

        nav.querySelector(".next").addEventListener("click", function(event) {
          event.preventDefault();
          nextSlide();
          updateNavColor();
        });

        nav.querySelector(".prev").addEventListener("click", function(event) {
          event.preventDefault();
          prevSlide();
          updateNavColor();
        });
      }
    },
    miniScroll(handler) {
      let dest = String(handler);
      this.$emit("miniScrollHandler", dest);
    }
  },
  mounted() {
    this.slider();
  }
};
</script>
