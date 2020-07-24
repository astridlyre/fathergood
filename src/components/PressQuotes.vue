<template>
  <section class="py-8 flex flex-col items-center w-full bg-daccent">
    <div class="max-w-screen-md lg:max-w-screen-xl w-full">
      <h4 class="ml-8 xl:ml-0 mt-8 text-sm text-laccent">PRESS</h4>

      <div v-show="carousel === 1" class="w-full ease lg:w-1/2 z-0">
        <div class="p-8 flex flex-col justify-start items-end w-full">
          <h3 class="mb-2 text-3xl leading-none font-serif text-light">
            "At Fathergood, clients are assigned a number, like a Swiss bank
            account. This number is used to label the samples and communicate
            with the company. Everything is encrypted, and the company does not
            sell its data."
          </h3>
          <p class="text-sm text-laccent">
            WASHINGTON POST
          </p>
        </div>
      </div>

      <div v-show="carousel === 2" class="w-full ease lg:w-1/2 z-0">
        <div class="p-8 flex flex-col justify-start items-end w-full">
          <h3 class="mb-2 text-3xl leading-none font-serif text-light">
            "Fathergood, a start-up out of Oxford Innovation Laboratories, began
            in 2018 to make inconvenient meetings with physicians a thing of the
            past."
          </h3>
          <p class="text-sm text-laccent">
            THE NEW YORK TIMES
          </p>
        </div>
      </div>

      <div v-show="carousel === 3" class="w-full ease lg:w-1/2 z-0">
        <div class="p-8 flex flex-col justify-start items-end w-full">
          <h3 class="mb-2 text-3xl leading-none font-serif text-light">
            "And the winner of Startup Battlefield at TechCrunch Disrupt is...
            Fathergood!"
          </h3>
          <p class="text-sm text-laccent">
            TECHCRUNCH
          </p>
        </div>
      </div>

      <div class="mb-8 w-full flex justify-center">
        <button
          type="button"
          @click="previous()"
          :class="{
            'text-laccent': carousel === 1,
            'text-light': carousel > 1,
          }"
          class="px-2 py-1 focus:outline-none outline-none rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6 stroke-current"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          @click="next()"
          :class="{
            'text-laccent': carousel === 3,
            'text-light': carousel < 3,
          }"
          class="px-2 py-1 focus:outline-none outline-none rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6 stroke-current"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Press",
  props: {},
  data() {
    return {
      carousel: 1,
    };
  },
  computed: {},
  methods: {
    previous() {
      if (this.carousel === 1) {
        return;
      } else {
        this.carousel--;
      }
    },
    next() {
      if (this.carousel === 3) {
        return;
      } else {
        this.carousel++;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
