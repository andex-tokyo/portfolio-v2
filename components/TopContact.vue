<template>
  <div class="contact" id="contact">
    <h3>-Contact-</h3>
    <div class="contact-list">
      <div v-for="content in AboutData.contact" :key="content.text">
        <div class="contact-icon">
          <a :href="content.link" target="_blank" rel="noopener noreferrer"
            ><img :src="content.img.url" alt=""
          /></a>
          <h4>{{ content.text }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["AboutData"],
};
</script>
<style>
.contact {
  width: 100%;
  margin: 10% auto;
}

.contact-list {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto 10% auto;
}

.contact-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-icon a {
  margin: 0 auto;
  transition-duration: 0.3s;
}

.contact-icon a:hover {
  transform: scale(1.2);
}

.contact-icon h4 {
  font-size: 8pt;
  font-family: "Roboto Condensed";
  text-align: center;
}

.contact-icon img {
  margin: 0 auto;
  width: 60px;
  cursor: pointer;
}
/*============
tablet
=============*/
@media screen and (max-width: 1024px) {
  .contact-list {
    width: 80%;
  }

  .contact-icon img {
    width: 40px;
  }

  .contact-icon h4 {
    font-size: 3pt;
  }

  .works-title-text {
    font-size: 14px;
    letter-spacing: 5px;
  }
}
</style>