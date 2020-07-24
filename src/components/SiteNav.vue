<template>
  <div>
    <div
      v-if="isMenuActive"
      @click="isMenuActive = false"
      class="fixed inset-0 z-20 lg:hidden"
    ></div>
    <nav
      class="fixed bg-daccent top-0 left-0 right-0 bottom-0 sm:bottom-auto flex flex-col w-full justify-center sm:justify-start items-center text-light text-3xl font-semibold font-serif sm:mt-16 p-8 z-20 lg:hidden"
      :class="{ 'menu-active': isMenuActive }"
      @click="isMenuActive = false"
    >
      <router-link class="underlineEffect" to="/howitworks"
        >How It Works</router-link
      >
      <router-link class="underlineEffect" to="/analysis">Analysis</router-link>
      <router-link class="underlineEffect" to="/storage">Storage</router-link>
      <router-link class="underlineEffect" to="/resources"
        >Resources</router-link
      >
    </nav>
    <header
      :class="{ navbarHidden: scrolled, navbarShown: !scrolled }"
      class="fixed flex justify-center top-0 left-0 right-0 w-full p-4 sm:px-12 bg-daccent z-30"
    >
      <div class="grid grid-cols-9 w-full max-w-screen-md lg:max-w-screen-xl">
        <div class="col-span-2 lg:hidden z-40 h-full flex items-center">
          <button
            type="menu"
            @click="isMenuActive = !isMenuActive"
            :class="{ 'menu-active': isMenuActive }"
            id="nav-button-portrait"
          >
            <div
              :class="{ 'menu-active': isMenuActive }"
              class="btn-line btn-line-top"
            ></div>
            <div
              :class="{ 'menu-active': isMenuActive }"
              class="btn-line btn-line-middle"
            ></div>
            <div
              :class="{ 'menu-active': isMenuActive }"
              class="btn-line btn-line-bottom"
            ></div>
          </button>
        </div>
        <div
          class="hidden lg:flex lg:col-span-3 z-40 h-full flex justify-between items-center"
        >
          <router-link
            class="underlineEffect text-light font-semibold"
            to="/howitworks"
            >How It Works</router-link
          >
          <router-link
            class="underlineEffect text-light font-semibold"
            to="/analysis"
            >Analysis</router-link
          >
          <router-link
            class="underlineEffect text-light font-semibold"
            to="/storage"
            >Storage</router-link
          >
          <router-link
            class="underlineEffect text-light font-semibold"
            to="/resources"
            >Resources</router-link
          >
        </div>
        <div class="col-span-5 lg:col-span-3 flex justify-center items-center">
          <router-link to="/" class="flex items-center">
            <img
              class="object-cover w-8"
              src="data:img/png;base64,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"
            />
            <h3
              class="ml-4 text-3xl text-light font-semibold font-serif hidden lg:block hover:text-laccent focus:laccent ease "
            >
              FATHERGOOD
            </h3>
          </router-link>
        </div>
        <div
          class="flex col-span-2 lg:col-span-3 justify-end h-full flex items-center"
        >
          <button
            class="border-2 border-light px-2 py-1 text-light text-xs font-semibold hover:border-laccent focus:border-laccent hover:text-laccent focus:text-laccent ease"
            type="button"
          >
            ORDER
          </button>
          <button
            class="ml-4 text-light hover:text-laccent focus:text-laccent ease outline-none focus:outline-none"
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
              <path
                d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
              ></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "SiteNav",
  props: {},
  data() {
    return {
      isMenuActive: false,
      limitPosition: 100,
      scrolled: false,
      lastPosition: 0,
    };
  },
  methods: {
    handleScroll() {
      if (
        (this.lastPosition,
        window.scrollY &&
          this.limitPosition < window.scrollY &&
          !this.isMenuActive)
      ) {
        this.scrolled = true;
      }
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
      }
      this.lastPosition = window.scrollY;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav-button-portrait {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;
  width: 1.6rem;
  outline: none;
  transition: all 0.2s ease-out;
}
#nav-button-portrait.menu-active {
  justify-content: center;
}

.btn-line-top {
  position: relative;
  transform: rotate(0deg);
  top: calc(0.1rem);
  transition: all 0.2s ease-out;
}
.btn-line-middle {
  height: 0;
  transition: all 0.2s ease-out;
}

.btn-line-bottom {
  position: relative;
  transform: rotate(0deg);
  bottom: calc(0.1rem);
  transition: all 0.2s ease-out;
}

.btn-line-middle.menu-active {
  opacity: 0;
  transition: all 0.2s ease-out;
}

.btn-line-top.menu-active {
  transform: rotate(-135deg);
  transform-origin: center;
  transition: all 0.2s ease-out;
}

.btn-line-bottom.menu-active {
  transform: rotate(135deg);
  transform-origin: center;
  transition: all 0.2s ease-out;
}

.btn-line-top,
.btn-line-middle,
.btn-line-bottom {
  cursor: pointer;
  width: 1.6rem;
  height: 0.1rem;
  background: #ccbf90;
}

nav.menu-active {
  transform: translateY(0);
  transition: all 0.2s ease-out;
}

nav {
  transform: translateY(-150%);
  transition: all 0.4s ease-out;
}

.navbarHidden {
  transform: translateY(-100%);
  transition: all 0.2s ease-out;
}
.navbarShown {
  transform: translateY(0);
  transition: all 0.2s ease-out;
}
</style>
