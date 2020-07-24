<template>
  <div id="app" class="bg-daccent min-h-screen">
    <SiteNav></SiteNav>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export default {
  data() {
    return {};
  },
  components: {
    SiteNav,
    Footer,
  },
};
</script>

<style src="./assets/css/app.css"></style>
