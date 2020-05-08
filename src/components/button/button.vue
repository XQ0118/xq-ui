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
      }
    ]"
    :type="nativeType"
  >
    <!-- <i class="xq-icon-loading" v-if="loading"></i> -->
    <!-- <i v-if="icon !== '' && !loading" :class="icon"></i> -->
    <!-- <span :class="[prefixCls + '__loading',type]" v-if="loading"></span> -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
  <!-- <button
    class="xq-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :class="[
      type ? 'xq-button--' + type : '',
      size ? 'xq-button--' + size : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round
      }
    ]"
    :type="nativeType"
  >
    <i class="xq-icon-loading" v-if="loading"></i>
    <i v-if="icon !== '' && !loading" :class="icon"></i>
    
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>-->
</template>

<script>


export default {
  name: 'XButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'submit'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    left: Boolean, // 方向
    right: Boolean,
    centre: Boolean,
    disabled: Boolean,
    round: Boolean,
    loading: Boolean
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log('class =>', '_2_' + this.type + '--' + this.size)
  },
  computed: {
    buttonDisabled () {
      return this.disabled
    },
    sizeType () {
      const list = ['small', 'default', 'large'];
      if (list.includes(this.size)) return `size-${this.size}`;
      return 'size-default';
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
