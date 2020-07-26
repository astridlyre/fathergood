<template>
  <main class="w-full flex flex-col">
    <section
      class="bg-image pt-24 md:pt-0 relative z-0 bg-brand min-h-screen flex flex-col justify-center items-center"
    >
      <div
        class="w-full bg-dark lg:-mt-48 lg:mt-0 sm:w-2/3 lg:w-2/3 sm:p-8 p-4"
      >
        <div class="flex flex-col">
          <h4 class="mb-4 text-sm text-laccent">
            CONTACT
          </h4>
          <h1
            class="mb-4 text-5xl xl:text-6xl text-light font-bold font-serif leading-none"
          >
            We’re always here to help. Reach out to us with any questions.
          </h1>
        </div>
      </div>
      <svg
        class="absolute bottom-0 left-0 right-0 h-16 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#68534f"
          fill-opacity="1"
          d="M0,160L1440,64L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
    <section class="flex flex-col bg-dark items-center w-full z-10">
      <div
        class="my-8 p-8 md:grid md:grid-cols-2 w-full max-w-screen-md lg:max-w-screen-xl"
      >
        <div class="md:mr-4 flex flex-col">
          <h4 class="mb-4 text-sm text-laccent">
            GET ANSWERS
          </h4>
          <h3
            class="mb-2 text-4xl text-light sm:text-5xl lg:text-6xl leading-none font-serif"
          >
            Customer support
          </h3>
          <p class="text-sm sm:text-base text-light">
            For any questions, please fill out the form below, and a member of
            our team will be in touch within 24 hours. For immediate questions,
            you can e-mail us at help@fathergood.com, or call or text us at
            +1(800)873-9292
          </p>
        </div>
        <div class="mt-16 md:mt-0 md:ml-4 flex flex-col w-full">
          <form v-on:submit.prevent>
            <input
              type="text"
              placeholder="First Name"
              class="w-full bg-transparent outline-none focus:outline-none border-0 rounded-none placeholder-laccent border-b-2 border-light form-input"
            />
            <input
              type="text"
              placeholder="Last name"
              class="mt-2 w-full bg-transparent outline-none focus:outline-none border-0 rounded-none placeholder-laccent border-b-2 border-light form-input"
            />
            <input
              type="email"
              placeholder="Email"
              class="mt-2 w-full bg-transparent outline-none focus:outline-none border-0 rounded-none placeholder-laccent border-b-2 border-light form-input"
            />
            <input
              type="text"
              placeholder="Subject"
              class="mt-2 w-full bg-transparent outline-none focus:outline-none border-0 rounded-none placeholder-laccent border-b-2 border-light form-input"
            />
            <h5 class="mt-8 ml-3 text-laccent">Message</h5>
            <textarea
              rows="8"
              class="mt-1 w-full bg-transparent outline-none focus:outline-none border-2 rounded-none placeholder-laccent border-light form-textarea resize-none"
            ></textarea>
            <button
              class="mt-8 px-4 py-2 bg-light text-daccent text-sm font-semibold hover:bg-laccent focus:bg-laccent ease outline-none focus:outline-none"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col items-center justify-center w-full relative bg-light"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="absolute inset-x-0 top-0 w-full h-16 z-10"
        preserveAspectRatio="none"
      >
        <path
          fill="#68534f"
          fill-opacity="1"
          d="M0,160L1440,64L1440,0L0,0Z"
        ></path>
      </svg>
      <div class="w-full max-w-screen-md lg:max-w-screen-xl z-0">
        <img
          class="w-full object-cover"
          src="@/assets/img/winterman.jpg"
          alt="Man jumping into the water."
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {
      blurb: 1,
    };
  },
};
</script>

<style scoped>
@media screen and (orientation: landscape) {
  .bg-image {
    background: url("../assets/img/map.jpg");
    background-position: center;
    background-size: cover;
  }
}
@media screen and (orientation: portrait) {
  .bg-image {
    background: url("../assets/img/map.jpg");
    background-position: center;
    background-size: cover;
  }
}
</style>
