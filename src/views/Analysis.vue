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
            Gain a rich understanding of your fertility.
          </h1>
          <p class="text-sm sm:text-base text-laccent md:text-light">
            Find out where you’re at. Learn how to promote the quality of your
            sperm—with a detailed, personal, and private fertility report that
            breaks down how healthy your sperm is today.
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
            THE FIVE KEY FACTORS
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
                  Volume
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
                  Count
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
                  Concentration
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
                  Motility
                </h3></a
              >
            </li>
            <li class="relative">
              <h6 class="absolute top-0 left-0 -ml-4 text-xs text-laccent">
                05
              </h6>
              <a
                @click="blurb = 5"
                @mouseover="blurb = 5"
                :class="[blurb === 5 ? 'text-laccent' : 'text-light']"
                class="cursor-pointer hover:text-laccent focus:text-laccent ease"
                ><h3
                  class="mb-2 text-4xl sm:text-5xl lg:text-6xl leading-none font-serif"
                >
                  Morphology
                </h3></a
              >
            </li>
          </ul>
        </div>
        <div class="mt-8 md:mt-0 flex flex-col">
          <div v-if="blurb === 1" class="text-sm md:text-xl text-light">
            <h6 class="text-laccent mb-2">HOW MUCH SEMEN YOU PRODUCE</h6>
            <p>
              Semen plays a crucial role in carrying sperm through the
              reproductive tract. Producing the right amount means giving sperm
              the best chance at reaching the egg for fertilization.
            </p>
          </div>
          <div v-if="blurb === 2" class="text-sm md:text-xl text-light">
            <h6 class="text-laccent mb-2">HOW MUCH SPERM YOU PRODUCE</h6>
            <p>
              Not only does a healthy sperm count improve your chances of
              conception, it’s also a great indicator of your overall health.
            </p>
          </div>
          <div v-if="blurb === 3" class="text-sm md:text-xl text-light">
            <h6 class="text-laccent mb-2">THE RATIO BETWEEN SEMEN AND SPERM</h6>
            <p>
              Sperm concentration helps contextualize the relationship between
              your unique volume and count. The right ratio can be as important
              an indicator of fertility as a high sperm count.
            </p>
          </div>
          <div v-if="blurb === 4" class="text-sm md:text-xl text-light">
            <h6 class="text-laccent mb-2">HOW WELL YOUR SPERM MOVE</h6>
            <p>
              Sperm that move naturally and efficiently have the best chance of
              reaching the egg for fertilization. Your total motile sperm count
              is one of the most important factors in your fertility.
            </p>
          </div>
          <div v-if="blurb === 5" class="text-sm md:text-xl text-light">
            <h6 class="text-laccent mb-2">THE SHAPE OF YOUR SPERM</h6>
            <p>
              A sperm’s shape affects its ability to both reach and fertilize an
              egg —this metric helps you understand what percentage of your
              sperm have a natural shape and what abnormalities there might be.
              Testing for morphology can be an indicator of genetic
              abnormalities or lifestyle factors that can affect your ability to
              conceive.
            </p>
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
          src="@/assets/img/reportsmiles.jpg"
          alt="Man with Scarf"
        />
        <div
          class="p-8 md:pb-0 col-span-1 md:col-span-3 flex flex-col justify-start md:justify-end items-start w-full"
        >
          <h4 class="mt-8 lg:mt-0 mb-4 text-sm text-daccent">
            DEMYSTIFYING FERTILITY
          </h4>
          <h3
            class="mb-2 text-4xl md:text-5xl leading-none font-serif text-dark"
          >
            Simple, secure and easy to ensure your legacy.
          </h3>
          <p class="text-sm lg:text-base text-daccent">
            Our goal at Fathergood is to help you understand your fertility.
            That means turning our expertise into a clear and detailed report
            that doesn’t ask you to do extra online research. If you ever do
            have questions, we’re here to answer them.
          </p>
          <h3
            class="mb-2 mt-8 text-4xl md:text-5xl leading-none font-serif text-dark"
          >
            Personalized advice.
          </h3>
          <p class="text-sm lg:text-base text-daccent">
            Our sperm health takes cues from our overall health, which means
            that with a quality diet, an extra run a week, or simply better
            stress management, we can enjoy increased fertility. Your report
            looks at where you’re at today to help you see what day-to-day
            changes you can make to promote a more fertile you.
          </p>
          <button
            class="mt-8 px-4 py-2 bg-dark text-light text-sm font-semibold hover:bg-daccent focus:bg-daccent ease outline-none focus:outline-none"
          >
            GET YOUR REPORT
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Analysis",
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
    background: url("../assets/img/lab.jpg");
    background-position: center;
    background-size: cover;
  }
}
@media screen and (orientation: portrait) {
  .bg-image {
    background: url("../assets/img/labportrait.jpg");
    background-position: center;
    background-size: cover;
  }
}
</style>
