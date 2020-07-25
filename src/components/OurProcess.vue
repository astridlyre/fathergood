<template>
  <section class="flex flex-col items-center w-full bg-light">
    <div class="mb-8 p-8 max-w-screen-md lg:max-w-screen-xl w-full">
      <h4 class="mb-4 text-sm text-daccent">OUR PROCESS</h4>
      <h3
        class="text-4xl md:text-5xl lg:text-6xl leading-none font-serif text-dark"
      >
        Control your <em>fertility</em> from home.
      </h3>
    </div>
    <div
      class="mb-8 lg:pt-16 lg:mb-0 w-full max-w-screen-md lg:max-w-screen-xl lg:flex lg:flex-row-reverse z-0"
    >
      <img class="lg:w-2/3" src="@/assets/img/product.jpg" alt="Our Product" />
      <div
        class="p-8 lg:px-8 lg:pb-8 lg:pt-0 flex flex-col justify-start items-end w-full lg:w-1/2"
      >
        <h4 class="mt-8 lg:mt-0 mb-4 text-sm text-daccent">HOW IT WORKS</h4>
        <h3
          class="mb-2 text-4xl md:text-5xl leading-none text-right font-serif text-dark"
        >
          Save your sperm at home.
        </h3>
        <p class="text-sm lg:text-base text-daccent text-right w-1/2">
          Next business day delivery, pick up when you're ready.
        </p>
        <router-link to="/howitworks">
          <button
            class="mt-8 px-4 py-2 bg-dark text-light text-sm font-semibold hover:bg-daccent focus:bg-daccent ease outline-none focus:outline-none"
          >
            LEARN MORE
          </button></router-link
        >
      </div>
    </div>
    <div
      class="mb-8 lg:mb-0 w-full max-w-screen-md lg:max-w-screen-xl lg:flex lg:flex-row z-0"
    >
      <img class="lg:w-2/3" src="@/assets/img/ipad.jpg" alt="Analysis" />
      <div class="p-8 flex flex-col justify-start items-start w-full lg:w-1/2">
        <h4 class="mt-8 lg:mt-0 mb-4 text-sm text-daccent">ANALYSIS</h4>
        <h3 class="mb-2 text-4xl md:text-5xl leading-none font-serif text-dark">
          Interpret and improve your fertility.
        </h3>
        <p class="text-sm lg:text-base text-daccent w-1/2">
          Accurate clinical sperm analysis, provided securely to you online in
          just two days.
        </p>
        <router-link to="/analysis">
          <button
            class="mt-8 px-4 py-2 bg-dark text-light text-sm font-semibold hover:bg-daccent focus:bg-daccent ease outline-none focus:outline-none"
          >
            LEARN MORE
          </button></router-link
        >
      </div>
    </div>
    <div
      class="w-full max-w-screen-md lg:max-w-screen-xl lg:flex lg:flex-row-reverse z-0"
    >
      <img class="lg:w-2/3" src="@/assets/img/facility.jpg" alt="Analysis" />
      <div class="p-8 flex flex-col justify-start items-end w-full lg:w-1/2">
        <h4 class="mt-8 lg:mt-0 mb-4 text-sm text-daccent">STORAGE</h4>
        <h3
          class="mb-2 text-4xl md:text-5xl leading-none font-serif text-right text-dark"
        >
          Safeguard your virility with cryostorage.
        </h3>
        <p class="text-sm lg:text-base text-daccent text-right w-1/2">
          State-of-the-art facilities and multi-site storage for maximum peace
          of mind.
        </p>
        <router-link to="/about">
          <button
            class="mt-8 px-4 py-2 bg-dark text-light text-sm font-semibold hover:bg-daccent focus:bg-daccent ease outline-none focus:outline-none"
          >
            LEARN MORE
          </button></router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Process",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped></style>
