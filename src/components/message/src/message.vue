<template>
  <transition name="xq-message-fade" @after-leave="onClose">
    <div
      class="xq-message"
      v-show="visible"
      :style="selfStyle"
      @mousemove="clearTimer"
      @mouseleave="startTimer"
    >
      <slot>{{ message }}</slot>
      <i class="xq-message__closeButton" v-if="closeButton" @click="onClose">
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
  props: {
    type: {
      type: String,
      default: "nomal"
    },
    autoClose: {
      // 是否自动关闭
      type: Boolean,
      default: true
    },
    duration: {
      // 关闭的延时
      type: Number,
      default: 2000
    },
    closeButton: {
      // 是否要关闭的x
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10
    },
    verticalOffset: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      message: "",
      visible: false,
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
      if (this.autoClose && Math.abs(this.duration) > 0) {
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

      this.timer = setTimeout(() => {
        this.$el.remove();
        this.$destroy(true);
      }, 300);
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息

        this.onClose();
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