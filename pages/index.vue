<template>
  <div>
    <div class="loading">
      <div class="loading-text name">YUKI TSUCHIDA</div>
    </div>
    <div class="wrap">
      <Nav></Nav>
      <div class="left">
        <span class="name"
          ><a href="https://tsucchy.me/" @click="nameClick">
            YUKI TSUCHIDA
          </a></span
        >
        <a href="#works" class="scroll-button"
          ><span></span><span></span><span></span>Scroll</a
        >
      </div>
      <div class="right">
        <TopWorks :WorksData="WorksData"></TopWorks>
        <TopAbout :AboutData="AboutData"></TopAbout>
        <TopContact :AboutData="AboutData"></TopContact>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const WorksData = await $microcms.get({
      endpoint: "works",
    });
    const AboutData = await $microcms.get({
      endpoint: "about",
    });
    return { WorksData: WorksData, AboutData: AboutData };
  },
  mounted() {
    const webStorage = function () {
      const $loading = $(".loading");
      const ua = navigator.userAgent;

      // if (sessionStorage.getItem("access")) {
      //   $(".wrap").css("display", "none");
      //   $(".loader-bg ,.loader").height(h).css("display", "flex");
      //   $(".loading").css("display", "none");
      //   $(".wrap").css("display", "flex");
      // } else {
      if (window.innerWidth < 649) {
        $(".loading").delay(1500).fadeOut(800);
      } else {
        $(".loading").delay(2500).fadeOut(800);
        $(".loading-text")
          .delay(1500)
          .queue(function () {
            $(this).addClass("animation");
          });
      }
      sessionStorage.setItem("access", 0);
    };
    // };

    webStorage();
    $(".wrap").css("display", "flex");
    $(".works-wrap").css("display", "block");
  },
  methods: {
    nameClick() {
      sessionStorage.removeItem("access");
    },
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic",
    Verdana, Meiryo, sans-serif;
  color: #1f1f1f;
}

.wrap {
  display: none;
  flex-direction: row;
}

h3 {
  font-size: 20pt;
  text-align: center;
  font-family: "Roboto Condensed";
  font-weight: 300;
  font-style: italic;
  margin-bottom: 10%;
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 100vh;
  font-weight: 300;
  font-style: italic;
}

.scroll-button {
  display: none;
}

.name {
  position: fixed;
  font-size: 30pt;
  font-family: "Roboto Condensed";
  letter-spacing: 5px;
}

.name a {
  color: #1f1f1f;
  text-decoration: none;
}

.right {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60vw;
}

/*============
  loading
  =============*/
.loading {
  width: 100vw;
  height: 100vh;
  transition: all 1s;
  background-color: #fff;
  font-weight: 300;
  font-style: italic;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animation {
  animation: anim 1s forwards;
}

@keyframes anim {
  0% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(-30vw);
  }
}
</style>
