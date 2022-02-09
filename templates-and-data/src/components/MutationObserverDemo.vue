<template>
  <div class="container" v-bind:class="{ show: isShow === true }">
    <div class="inner">
      <article
        id="cross-page-top"
        data-content-priority=""
        ref="article"
      >
         Lorem ipsum dolor sit amet.
      </article>
    </div>
    <div class="close-button" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: "MutationObserverDemo",
  data: function () {
    return {
      ATTR_DATA_CONTENT_PRIORITY: "data-content-priority",
      isShow: false,
      observer: null,
    };
  },
  methods: {
    close() {
      this.isShow = false;
    },

    initObserver() {
      const vm = this;

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === this.ATTR_DATA_CONTENT_PRIORITY
          ) {
            vm.onData();
          }
        });
      });

      this.observer = observer;
      this.startObserving();
    },

    onData() {
      let article = this.$refs.article;
      const attrValue = article.getAttribute(this.ATTR_DATA_CONTENT_PRIORITY);
      this.isShow = !attrValue || attrValue === "null" ? false : true;
    },

    startObserving() {
      this.observer.observe(this.$refs.article, { attributes: true });
    },
    stopObserving() {
      if (this.observer) this.observer.disconnect();
    },

    doTest() {
      let article = this.$refs.article;
      let counter = 0;

      var interval = setInterval(() => {
        counter += 1;

        if (counter === 5) {
          this.stopObserving();
        }

        if (counter === 7) {
          this.startObserving();
        }

        if (counter === 10) {
          clearInterval(interval);
          this.stopObserving();
        }

        let attrValue = counter % 2 !== 0 ? "foobar" : "";
        article.setAttribute(this.ATTR_DATA_CONTENT_PRIORITY, attrValue);
      }, 3700);
    },
  },
  mounted() {
    this.initObserver();
    this.doTest();
  },
  beforeDestroy() {
    this.stopObserving();
  },
};
</script>


<style scoped>
.container {
  display: none;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0 14px 0 25px;
  border-radius: 4px;
  background-color: var(--color-favorit-plus-4);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.46);
  box-sizing: border-box;
  width: 90%;
  height: 56px;
  margin: 10px auto auto;
}
.container .inner {
  margin-right: auto;
}
.container .inner article {
  color: var(--color-primary-text);
  font-size: 16px;
  font-weight: 700;
}
.container .close-button::after {
  cursor: pointer;
  content: "\2715";
  font-size: 15px;
  display: block;
}
.container.show {
  display: flex;
}
</style>

