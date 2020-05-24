<template>
  <button
    class="xq-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :class="[
      sizeType,
      type ? 'xq-button--' + type : '',
      {
        'is-left':left,
        'is-right':right,
        'is-centre':centre,
        'is-disabled': buttonDisabled,
        'is-loading':buttonLoading
      }
    ]"
    :type="nativeType"
  >
    <x-icon v-if="icon" :name="icon" :color="realyIconColor" style="margin-right:4px"></x-icon>
    <span v-if="$slots.default">
      <x-icon v-if="loading" name="loading" :color="loadingColor" style="margin-right:4px"></x-icon>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import XIcon from "@/components/icon/icon.vue";
export default {
  name: "XButton",
  components: { XIcon },
  props: {
    type: {
      type: String,
      default: "default"
    },
    nativeType: {
      type: String,
      default: "submit"
    },
    size: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: Boolean,
    left: Boolean, // 方向
    right: Boolean,
    centre: Boolean,
    round: Boolean,
    iconColor: {
      type: String,
      default: "#111"
    }
  },
  data() {
    return {};
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
    buttonLoading() {
      return this.loading;
    },
    sizeType() {
      const list = ["small", "default", "large"];
      if (list.includes(this.size)) return `size-${this.size}`;
      return "size-default";
    },
    realyIconColor() {
      if (this.disabled) return "#bbb";
      else return this.iconColor;
    },
    loadingColor() {
      if (this.loading) return "#bbb";
      else return "#bbb";
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
