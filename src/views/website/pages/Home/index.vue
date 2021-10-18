<template>
  <div>
    <section class="pb-4 landing">
      <svg
        viewBox="0 0 1024 449"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          data-aos="fade-down"
          d="M423 91.5C94.1102 201.13 0 141 0 141V0H1024V427.5C1024 427.5 923.124 401.05 853.5 282.5C798 188 667.5 10 423 91.5Z"
          fill="#333333"
          fill-opacity="0.5"
        />
        <path
          data-aos="fade-down "
          data-aos-duration='1000'
          d="M1024 0V132.564V448.869C714.465 454.757 643.3 260.801 539.724 157.935C401.643 20.8011 114.028 93.0526 0 139.232V0H1024Z"
          fill="#383838"
          fill-opacity="0.95"
        />
      </svg>
      <div class="overlay">
        <b-row no-gutters>
          <b-col cols="12" md="5" class="d-none d-md-block">
            <div
            data-aos='fade-left'
              class="
                mr-auto
                intro
                d-flex
                w-75
                flex-column
                text-light
                align-items-start
                justify-content-start
              "
            >
              <h1 class="text-light">مؤسسة العلم نور</h1>
              <p>
                أحصل على
                <span class="text-custom-yello mx-50">
                  <strong> أنا والباندا </strong></span
                >
                <br />
                سلسلة تكون من ثلاث مستويات لمرحلة رياض الاطفال تتميز بشموليّتها
                للمهاراتِ الأساسيّة للطفل
              </p>
              <b-button
                class="back-yello b-0 text-light rounded-pill text-gray"
              >
                اقرأ تفاصيل المنهج
              </b-button>
            </div>
          </b-col>
          <b-col class="p-0 m-0" md="7" cols="12">
            <animated-logo></animated-logo>
          </b-col>
        </b-row>
      </div>
    </section>

    <section class="about py-5">
      <about></about>
    </section>

    <section class="path1 py-5">
      <services></services>

      <contact class="mt-5 py-3"> </contact>
    </section>

    <the-footer></the-footer>
  </div>
</template>

<script>
import AnimatedLogo from "./components/AnimatedLogo.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Contact from "./components/Contact.vue";
import TheFooter from "../../components/Footer.vue";
import AOS from "aos";
export default {
  components: {
    Contact,
    AnimatedLogo,
    About,
    Services,
    TheFooter,
  },
  created() {
    AOS.init();
  },
};
</script>

<style lang="scss">
@import "../../../../assets/variables.scss";
p,
li {
  color: #8f8f8f;
}
.landing {
  min-height: 100vh;
  @media (max-width: 767px) {
    svg {
      width: 100%;
      margin: auto;
    }
  }
  .overlay {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .intro {
    position: relative;
    top: 35%;
  }
  h1 {
    font-size: 45px;
  }
  p {
    font-size: 20px;
  }
}
.path1 {
  background-image: url("../../../../assets/svg/services.svg");
  background-size: 150%;
  background-position: center;
  background-position-y: 0%;
  background-repeat: no-repeat;
}
</style>
