<template lang="pug">
  #app: main
    section.hero.is-dark.is-primary: .hero-body: .container
      h1.title 메이플스토리 썬콜 육성기
      h2.subtitle 2018.06.23 ~

    section.section: .container: .columns
      maple-info
</template>

<script>
import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.css";
import WebFont from "webfontloader";

import MapleInfo from "./components/Info.vue";

export default {
  components: {
    MapleInfo
  },

  created() {
    WebFont.load({
      custom: {
        families: ["Noto Sans"],
        urls: ["https://fonts.googleapis.com/css?family=Noto+Sans"]
      }
    });
  }
};
</script>

<style>
*:focus {
  outline: none;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
