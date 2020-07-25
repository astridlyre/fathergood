<template>
  <div id="app" class="bg-daccent min-h-screen">
    <SiteNav></SiteNav>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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

<style>
@import url("./assets/css/app.css");
.fade-enter-active,
.fade-leave-active {
  transition: all 0.12s ease;
  transform: translateX(0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
