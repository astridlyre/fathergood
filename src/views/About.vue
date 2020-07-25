<template>
  <main class="w-full flex flex-col">
    <section
      class="bg-image pt-24 md:pt-0 relative z-0 bg-brand min-h-screen flex flex-col justify-start md:justify-center md:items-end items-center"
    >
      <div class="w-full sm:w-2/3 lg:w-2/3 sm:p-8 p-4">
        <div class="flex flex-col">
          <h4 class="mb-4 text-sm text-dark">
            ABOUT US
          </h4>
          <h1
            class="mb-4 text-4xl xl:text-6xl text-brand font-bold font-serif leading-none"
          >
            Male fertility may be changing, but we’re here to make sure that
            fatherhood doesn't.
          </h1>
          <p class="text-sm sm:text-base text-dark w-4/5 md:w-full self-end">
            We are not just experts in male fertility, we are fathers too, and
            aspiring parents, and people who understand how much that decision
            matters.
          </p>
        </div>
      </div>
      <svg
        class="absolute bottom-0 left-0 right-0 h-16 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#5e726e"
          fill-opacity="1"
          d="M0,160L1440,64L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
    <section class="flex flex-col items-center w-full z-10">
      <div
        class="my-8 p-8 md:grid md:grid-cols-2 w-full max-w-screen-md lg:max-w-screen-xl"
      >
        <div class="flex flex-col">
          <h4 class="mb-4 text-sm text-laccent">
            OUR ADVISORS
          </h4>
          <ul>
            <li class="relative">
              <h6 class="absolute top-0 left-0 -ml-4 text-xs text-laccent">
                01
              </h6>
              <a
                @click="blurb = 1"
                @mouseover="blurb = 1"
                :class="[blurb === 1 ? 'text-laccent' : 'text-light']"
                class="cursor-pointer hover:text-laccent focus:text-laccent ease"
                ><h3
                  class="mb-2 text-4xl sm:text-5xl lg:text-6xl leading-none font-serif"
                >
                  Dr. Hassam DeWitt
                </h3></a
              >
            </li>
            <li class="relative">
              <h6 class="absolute top-0 left-0 -ml-4 text-xs text-laccent">
                02
              </h6>
              <a
                @click="blurb = 2"
                @mouseover="blurb = 2"
                :class="[blurb === 2 ? 'text-laccent' : 'text-light']"
                class="cursor-pointer hover:text-laccent focus:text-laccent ease"
                ><h3
                  class="mb-2 text-4xl sm:text-5xl lg:text-6xl leading-none font-serif"
                >
                  Dr. Paul Trundle
                </h3></a
              >
            </li>
            <li class="relative">
              <h6 class="absolute top-0 left-0 -ml-4 text-xs text-laccent">
                03
              </h6>
              <a
                @click="blurb = 3"
                @mouseover="blurb = 3"
                :class="[blurb === 3 ? 'text-laccent' : 'text-light']"
                class="cursor-pointer hover:text-laccent focus:text-laccent ease"
                ><h3
                  class="mb-2 text-4xl sm:text-5xl lg:text-6xl leading-none font-serif"
                >
                  Dr. Franciso Arrenlendo
                </h3></a
              >
            </li>
            <li class="relative">
              <h6 class="absolute top-0 left-0 -ml-4 text-xs text-laccent">
                04
              </h6>
              <a
                @click="blurb = 4"
                @mouseover="blurb = 4"
                :class="[blurb === 4 ? 'text-laccent' : 'text-light']"
                class="cursor-pointer hover:text-laccent focus:text-laccent ease"
                ><h3
                  class="mb-2 text-4xl sm:text-5xl lg:text-6xl leading-none font-serif"
                >
                  Jerrup Smithe
                </h3></a
              >
            </li>
          </ul>
        </div>
        <div class="mt-8 md:mt-0 flex flex-col">
          <div v-if="blurb === 1" class="text-sm md:text-xl text-light">
            <img src="@/assets/img/us3.jpg" alt="Dr. Hassam DeWitt" />
            <h6 class="text-laccent mb-2">
              HCLINICAL INSTRUCTOR, STANFORD SCHOOL OF MEDICINE; STRATEGIC
              ADVISOR
            </h6>
          </div>
          <div v-if="blurb === 2" class="text-sm md:text-xl text-light">
            <img src="@/assets/img/us1.jpg" alt="Dr. Paul Trundle" />
            <h6 class="text-laccent mb-2">
              LEADING EXPERT, MEN’S SEXUAL HEALTH AND REPRODUCTIVE UROLOGY; THE
              T CLINIC
            </h6>
          </div>
          <div v-if="blurb === 3" class="text-sm md:text-xl text-light">
            <img src="@/assets/img/us2.jpg" alt="Dr. Franciso Arrenlendo" />
            <h6 class="text-laccent mb-2">
              FORMER CHIEF MEDICAL OFFICER, EPIC FERTILITY
            </h6>
          </div>
          <div v-if="blurb === 4" class="text-sm md:text-xl text-light">
            <img src="@/assets/img/jerrup.jpg" alt="Jerrup Smithe" />
            <h6 class="text-laccent mb-2">
              CHIEF EXECUTIVE OFFICER, MASTERMIND
            </h6>
          </div>
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
          fill="#5e726e"
          fill-opacity="1"
          d="M0,160L1440,64L1440,0L0,0Z"
        ></path>
      </svg>
      <div
        class="mb-8 lg:mb-0 w-full max-w-screen-md lg:max-w-screen-xl z-0 grid grid-cols-1 md:grid-cols-5"
      >
        <img
          class="col-span-1 md:col-span-2 w-full object-cover"
          src="@/assets/img/manrope.jpg"
          alt="Man with Scarf"
        />
        <div
          class="p-8 md:pb-0 col-span-1 md:col-span-3 flex flex-col justify-start md:justify-end items-start w-full"
        >
          <h4 class="mt-8 lg:mt-0 mb-4 text-sm text-daccent">
            OFFICES
          </h4>
          <h3
            class="mb-2 text-4xl md:text-5xl leading-none font-serif text-dark"
          >
            Boston, San Francisco, Dubai, UAE, Switzerland and Singapore.
          </h3>
          <p class="text-sm lg:text-base text-daccent">
            Our team brings international experience in male fertility,
            healthcare policy, and business with a world-class advisory board.
          </p>
        </div>
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
    background: url("../assets/img/manwithdogs.jpg");
    background-position: center;
    background-size: cover;
  }
}
@media screen and (orientation: portrait) {
  .bg-image {
    background: url("../assets/img/manwithdogsportrait.jpg");
    background-position: center;
    background-size: cover;
  }
}
</style>
