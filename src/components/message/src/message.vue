<template>
  <transition name="xq-message-fade" @after-leave="onClose">
    <div name="xq-message" :style="selfStyle" @mousemove="clearTimer" @mouseleave="startTimer">
      <slot>{{ message }}</slot>
      <i class="xq-message__closeButton" v-if="showClose" @click="onClose">
        <x-icon name="close"></x-icon>
      </i>
    </div>
  </transition>
</template>

<script>
import XIcon from "@/components/icon/icon.vue";
export default {
  name: "message",
  components: { XIcon },
  props: {},
  data() {
    return {
      message: "",
      verticalOffset: 20,
      zIndex: 10,
      showClose: false,
      visible: false,
      closeTime: 2000,
      duration: 1000,
      timer: null
    };
  },
  computed: {
    selfStyle() {
      return {
        zIndex: `${this.zIndex}`,
        top: `${this.verticalOffset}px`
      };
    }
  },
  methods: {
    startTimer() {
      console.log("message timer ->");

      if (Math.abs(this.duration) > 0) {
        this.timer = setTimeout(() => {
          this.onClose();
        }, Math.abs(this.duration));
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    onClose() {
      this.visible = false;
      this.$el.remove();
      this.$destroy(true);
      // setTimeout(() => {
      //   this.$el.remove();
      //   this.$destroy();
      // }, 300);
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.onClose();
        }
      }
    }
  },
  mounted() {
    console.log("message ->");
    this.startTimer();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    this.clearTimer();
    document.removeEventListener("keydown", this.keydown);
  }
};
</script>

<style>
</style>