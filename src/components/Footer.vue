<template>
  <section
    class="md:pt-48 pt-16 flex items-center justify-center pb-16 w-full bg-dark"
  >
    <footer
      class="grid md:grid-cols-3 max-w-screen-md lg:max-w-screen-xl w-full"
    >
      <div class="p-8 flex flex-col items-start">
        <router-link
          class="text-light text-3xl font-semibold font-sans underlineEffect"
          to="/about"
          >About Us</router-link
        >
        <router-link
          class="text-light text-3xl font-semibold font-sans underlineEffect"
          to="/contact"
          >Contact</router-link
        >
        <a
          class="cursor-pointer text-light text-3xl font-semibold font-sans underlineEffect"
          >Privacy Policy</a
        >
      </div>
      <div class="p-8 w-full flex flex-col">
        <h3 class="mt-8 lg:mt-0 text-laccent text-3xl font-semibold font-sans">
          Subscribe
        </h3>
        <div class="relative ">
          <button
            type="button"
            class="absolute top-0 bottom-0 right-0 flex items-center hover:text-light text-laccent focus:text-light focus:outline-none outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 stroke-current"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <input
            class="form-input w-full px-0 bg-transparent focus:outline-none outline:none border-0 rounded-none border-b-2 border-laccent placeholder-laccent"
            type="email"
            placeholder="Email address"
          />
        </div>
      </div>
      <div class="p-8 w-full lg:flex lg:justify-end lg:items-start">
        <button
          class="p-2 bg-light rounded-full hover:bg-laccent focus:bg-laccent outline-none focus:outline-none ease"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 hw-6 stroke-current text-dark"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </button>
        <button
          class="ml-4 p-2 bg-light rounded-full hover:bg-laccent focus:bg-laccent outline-none focus:outline-none ease"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 hw-6 stroke-current text-dark"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </button>
        <button
          class="ml-4 p-2 bg-light rounded-full hover:bg-laccent focus:bg-laccent outline-none focus:outline-none ease"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6 stroke-current text-dark"
          >
            <path
              d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            ></path>
          </svg>
        </button>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped></style>
