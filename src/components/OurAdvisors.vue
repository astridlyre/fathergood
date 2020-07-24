<template>
  <section class="flex flex-col items-center w-full bg-light">
    <div
      class="mb-8 lg:mb-0 max-w-screen-md lg:max-w-screen-xl lg:flex lg:flex-row-reverse w-full z-10"
    >
      <img class="" src="@/assets/img/scientist.jpg" alt="Our Advisors" />
      <div
        class="mt-8 lg:mt-0 p-8 flex flex-col justify-start items-end w-full lg:w-1/2"
      >
        <h3
          class="mb-2 text-4xl md:text-5xl lg:text-6xl lg:text-right leading-none font-serif text-dark"
        >
          Our team includes world-class <em>experts</em>.
        </h3>
        <p class="text-sm md:text-base lg:text-right text-daccent">
          We are proud to employ an advisory board of the world's foremost
          experts on male fertility. In addition, we host an annual fertility
          conference to promote best-practices and foster innovation.
        </p>
      </div>
    </div>
    <div
      class="mb-8 pb-8 max-w-screen-md w-full lg:max-w-screen-xl lg:flex product z-0"
    >
      <img class="" src="@/assets/img/cutecouple.jpg" alt="Cute Couple" />
      <div
        class="mt-8 px-8 flex flex-col justify-start items-start w-full lg:w-1/2"
      >
        <h4 class="mt-8 lg:mt-0 mb-4 text-sm text-daccent">
          YOU ARE PROTECTED
        </h4>
        <h3 class="mb-2 text-5xl lg:text-6xl leading-none font-serif text-dark">
          <em>Privacy</em> is the cornerstone of our work.
        </h3>
        <p class="text-sm md:text-base text-daccent">
          When you come to us, you’re not just a customer. You are your future.
          Everything you do with us happens on your terms. That’s why your
          identity and data belongs exclusively to you at every stage in the
          process.
        </p>
        <p class="mt-2 text-sm md:text-base text-daccent">
          Keeping your information secure is our business. Your data is stored
          on encrypted servers and only shared using encrypted transmissions. We
          are HIPAA compliant, GDPR compliant, and CCPA compliant. No data is
          ever given to third parties without explicit permission from its owner
          — you.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Advisors",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped></style>
