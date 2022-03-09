<template>
  <div id="navArea">
    <nav>
      <div class="inner">
        <ul>
          <li><a href="#works">-Works-</a></li>
          <li><a href="#about">-About-</a></li>
          <li><a href="#contact">-Contact-</a></li>
        </ul>
      </div>
    </nav>

    <div class="toggle_btn">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id="mask"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const $nav = $("#navArea");
    const $btn = $(".toggle_btn");
    const $navbtn = $(".inner a");
    const open = "open";

    $btn.on("click", function () {
      if (!$nav.hasClass(open)) {
        $nav.addClass(open);
      } else {
        $nav.removeClass(open);
      }
    });
    // mask close
    $navbtn.on("click", function () {
      $nav.removeClass(open);
    });
  },
};
</script>
<style>
/*============
nav
=============*/
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: -60vw;
  bottom: 0;
  width: 60vw;
  background: #1f1f1f;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transition: all 0.5s;
  z-index: 2;
  opacity: 0;
}

/*navのrightを-60vwに、widthを60vwに*/

.open nav {
  right: 0;
  opacity: 1;
}

nav .inner {
  padding: 25px;
}

nav .inner ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav .inner ul li a {
  display: block;
  color: #fff;
  font-size: 20pt;
  font-family: "Roboto Condensed";
  padding: 1em;
  text-decoration: none;
  transition-duration: 0.2s;
  margin: 50px auto;
}
/*============
  .toggle_btn
  =============*/
.toggle_btn {
  display: block;
  position: fixed;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 3;
}

.toggle_btn span {
  display: block;
  position: absolute;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: #333;
  border-radius: 4px;
  transition: all 0.5s;
}

.toggle_btn span:nth-child(1) {
  top: 4px;
}

.toggle_btn span:nth-child(2) {
  top: 14px;
}

.toggle_btn span:nth-child(3) {
  bottom: 4px;
}

.open .toggle_btn span {
  background-color: #fff;
}

.open .toggle_btn span:nth-child(1) {
  -webkit-transform: translateY(10px) rotate(-315deg);
  transform: translateY(10px) rotate(-315deg);
}

.open .toggle_btn span:nth-child(2) {
  opacity: 0;
}

.open .toggle_btn span:nth-child(3) {
  -webkit-transform: translateY(-10px) rotate(315deg);
  transform: translateY(-10px) rotate(315deg);
}
</style>