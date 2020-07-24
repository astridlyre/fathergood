<template>
  <main class="mt-16 w-full flex flex-col">
    <section
      class="bg-image relative z-0 bg-light min-h-screen flex flex-col sm:items-center lg:items-end lg:justify-center"
    >
      <div class="my-8 sm:mt-24 w-full sm:w-2/3 lg:w-1/2 p-4">
        <div class="lg:w-2/3">
          <h1
            class="mb-4 text-4xl md:text-6xl text-dark md:text-light font-bold font-serif leading-none"
          >
            Fatherhood starts with <em>you</em>
          </h1>
          <p class="text-sm sm:text-base text-daccent md:text-light">
            We know fertility is personal, and that's why understanding and
            safeguarding yours begins where you feel most comfortable — home.
          </p>
          <button
            class="mt-8 px-4 py-2 bg-dark text-light text-sm font-semibold hover:bg-daccent focus:bg-daccent ease outline-none focus:outline-none"
          >
            GET STARTED
          </button>
        </div>
      </div>
      <svg
        class="mt-16 w-full absolute bottom-0 right-0 left-0 z-minus"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ccbf90"
          fill-opacity="1"
          d="M0,224L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
    <OurProcess></OurProcess>
    <section class="flex flex-col items-center w-full z-10">
      <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ccbf90"
          fill-opacity="1"
          d="M0,224L1440,160L1440,0L0,0Z"
        ></path>
      </svg>
      <div
        class="mb-8 p-8 flex justify-center w-full max-w-screen-md lg:max-w-screen-xl"
      >
        <div class="lg:mb-8 flex flex-col">
          <h4 class="mt-8 mb-4 text-sm text-laccent">
            UNDERSTANDING THE FACTS
          </h4>
          <h3
            class="mb-2 text-5xl lg:text-6xl leading-none font-serif text-light"
          >
            We are 50% of the fertility <em>equation</em>.
          </h3>
          <div class="my-8 lg:my-4 w-1/4 h-1 bg-light rounded"></div>
          <h3 class="text-5xl lg:text-6xl leading-none font-serif text-light">
            Let's be 50% of the fertility <em>conversation</em>.
          </h3>
          <button
            class="mt-4 flex self-end items-center hover:border-2 hover:border-light px-2 py-1 hover:text-light text-laccent text-sm font-semibold ease"
          >
            <span>WHAT ARE THE FACTS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2 w-6 h-6 stroke-current"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
    <OurAdvisors></OurAdvisors>
    <PressQuotes></PressQuotes>
  </main>
</template>

<script>
import OurProcess from "@/components/OurProcess";
import OurAdvisors from "@/components/OurAdvisors";
import PressQuotes from "@/components/PressQuotes";

export default {
  name: "Home",
  components: {
    OurProcess,
    OurAdvisors,
    PressQuotes,
  },
};
</script>

<style scoped>
@media only screen and (orientation: portrait) {
  .bg-image {
    background: url("../assets/img/heroportrait.jpg");
    background-position: center;
    background-size: cover;
  }
}
@media only screen and (orientation: landscape) {
  .bg-image {
    background: url("../assets/img/hero.jpg");
    background-position: center;
    background-size: cover;
  }
}
</style>
