<template>
  <main class="w-full flex flex-col">
    <section
      class="bg-image relative z-0 bg-light min-h-screen flex flex-col justify-center items-center"
    >
      <div class="w-full sm:w-2/3 lg:w-1/2 sm:p-8 p-4 bg-dark">
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
            OUR PROCESS
          </h4>
          <h3
            class="mb-2 text-5xl lg:text-6xl leading-none font-serif text-light"
          >
            How Fathergood works.
          </h3>
          <div class="mt-8 flex flex-wrap sm:flex-nowrap justify-center">
            <div
              class="p-4 w-full sm:w-1/4 flex flex-col items-center justify-between text-laccent"
            >
              <h5 class="text-lg text-center mb-2 font-sans text-light">
                Order your brand new kit from Fathergood.
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-8 h-8 stroke-current"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div class="justify-center items-center hidden sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-8 h-8 stroke-current text-light"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div
              class="p-4 w-full sm:w-1/4 flex flex-col items-center justify-between text-laccent"
            >
              <h5 class="text-lg text-center mb-2 font-sans text-light">
                Get your kit, collect your sperm and get same-day pickup.
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-8 h-8 stroke-current"
              >
                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                ></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div class="justify-center items-center hidden sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-8 h-8 stroke-current text-light"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div
              class="p-4 w-full sm:w-1/4 flex flex-col items-center justify-between text-laccent"
            >
              <h5 class="text-lg text-center mb-2 font-sans text-light">
                Get your report and start cryostorage.
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-8 h-8 stroke-current"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
          </div>
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
@media screen and (orientation: landscape) {
  .bg-image {
    background: url("../assets/img/product.jpg");
    background-position: center;
    background-size: cover;
  }
}
@media screen and (orientation: portrait) {
  .bg-image {
    background: url("../assets/img/productportrait.jpg");
    background-position: center;
    background-size: cover;
  }
}
</style>
