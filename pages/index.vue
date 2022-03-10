<template>
  <div>
    <div class="loading">
      <div class="loading-text name">YUKI TSUCHIDA</div>
    </div>
    <div class="wrap">
      <Nav></Nav>
      <div class="left">
        <span class="name"
          ><a href="/" @click="nameClick"> YUKI TSUCHIDA </a></span
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
      if (sessionStorage.getItem("access")) {
        $(".loading").css("display", "none");
        $(".wrap").css("display", "flex");
      } else {
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
      }
    };

    webStorage();
    $(".wrap").css("display", "flex");
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
/*============
tablet
=============*/
@media screen and (max-width: 1024px) {
  .name {
    font-size: 20pt;
  }

  h3 {
    font-size: 15pt;
  }
}
/*============
sp
=============*/
@media screen and (max-width: 649px) {
  .wrap {
    flex-direction: column;
  }
  .loading-text {
    display: none;
  }

  .left {
    width: 100vw;
    height: 100vh;
  }

  .scroll-button {
    position: absolute;
    bottom: 20px;
    z-index: 2;
    display: inline-block;
    text-decoration: none;
    padding-top: 80px;
    font-family: "RobotoCondensed";
    color: #1f1f1f;
  }

  .scroll-button span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 2px solid #1f1f1f;
    border-bottom: 2px solid #1f1f1f;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
    opacity: 0;
    box-sizing: border-box;
  }

  .scroll-button span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  .scroll-button span:nth-of-type(2) {
    top: 16px;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }

  .scroll-button span:nth-of-type(3) {
    top: 32px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  @-webkit-keyframes sdb {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes sdb {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  .animation {
    animation: anim 1s forwards;
  }

  @keyframes anim {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  .name {
    position: relative;
    font-size: 20pt;
    letter-spacing: 7px;
  }

  .right {
    width: 96vw;
    margin: 50px auto;
  }

  h3 {
    font-size: 15pt;
  }
}
</style>
