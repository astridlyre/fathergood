<template>
  <main class="w-full flex flex-col">
    <section
      class="bg-image relative z-0 bg-light min-h-screen flex flex-col justify-end items-center"
    >
      <div
        class="w-full mb-12 sm:mb-24 md:mb-48 sm:w-2/3 lg:w-1/2 sm:p-8 p-4 bg-dark"
      >
        <div>
          <h1
            class="mb-4 text-4xl md:text-6xl text-light font-bold font-serif leading-none"
          >
            Fertility isn't hard to concieve.
          </h1>
          <p class="text-sm sm:text-base text-laccent md:text-light">
            Our process starts where you feel most comfortable and takes just
            one week from collection to analysis and storage. So whether you are
            looking to learn about how healthy your sperm is today or freeze it
            for the future, you never have to wait.
          </p>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center w-full z-10">
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
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.bg-image {
  background: url("../assets/img/product.jpg");
  background-position: center;
  background-size: cover;
}
</style>
