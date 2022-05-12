<template>
  <div class="works-wrap">
    <Nav></Nav>
    <div class="works-header">
      <span class="works-name"
        ><a href="/" @click="nameClick"> andex. </a>
      </span>
    </div>
    <div class="works-main">
      <WorksSlider :DetailData="DetailData"></WorksSlider>
      <WorksDetail :DetailData="DetailData"></WorksDetail>
    </div>
    <div class="works-back">
      <a href="/#works"><span class="works-back-text">ホームへ戻る</span></a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms, params }) {
    const DetailData = await $microcms.get({
      endpoint: "works",
      contentId: params.slug,
    });
    return { DetailData: DetailData };
  },
  mounted() {
    $(".works-wrap").css("display", "block");
  },
  head() {
    return {
      title: this.DetailData.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.DetailData.description.replace(/(<([^>]+)>)/gi, ""),
        },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.DetailData.title} | andex.`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.DetailData.description.replace(/(<([^>]+)>)/gi, ""),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.DetailData.image[0].img.url,
        },
      ],
    };
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
.works-header {
  width: 96vw;
  margin: 20px;
}
.works-name {
  font-size: 35pt;
  font-family: "Roboto Condensed";
  font-weight: 300;
  font-style: italic;
  margin-left: 20px;
}
.works-name a {
  color: #1f1f1f;
  text-decoration: none;
}
.works-wrap {
  display: none;
}
.works-main {
  margin: 0 auto;
  width: 60%;
}

.works-back {
  position: fixed;
  right: 80px;
  bottom: 50px;
}

.works-back-text {
  display: inline-block;
  position: relative;
  color: #555;
  text-decoration: none;
  cursor: pointer;
}

.works-back-text:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  background: #555;
  transform: scale(0, 1);
  transform-origin: left;
  transition: 0.4s;
}

.works-back-text:hover:before {
  transform: scale(1);
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
  .works-main {
    margin: 0 auto;
    width: 80%;
  }
}
/*============
sp
=============*/
@media screen and (max-width: 649px) {
  .works-name {
    font-size: 25pt;
    font-family: "Roboto Condensed";
  }
  .works-main {
    margin: 0 auto;
    width: 80%;
  }
  .works-back {
    right: 20px;
    bottom: 20px;
  }

  .works-back-text {
    font-size: 9pt;
  }
}
</style>