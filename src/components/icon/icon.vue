<template>
  <div
    class="xq-icon"
    :style="{
     display:'inline-flex',
     width:iconSize,
     height:iconSize
     }"
  >
    <svg
      :style="{fill:color}"
      :class="[
    'xq-icon-'+name,
    {
      'icon-loading': isLoading,
      'is-disabled': disabled
    }
    ]"
    >
      <use :xlink:href="`#icon${name}`" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    color: String,
    disabled: Boolean,
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: '1em'
    }
  },
  mounted () {
    console.log(this.name)
    console.log(this.name.indexOf('loading'))
    console.log(this.name.indexOf('loading') !== -1)
  },
  computed: {
    iconSize () {
      if (typeof this.size === 'number') return `${this.size}px`
      else return this.size
    },
    isLoading () {
      if (this.name.indexOf('loading') !== -1) return true
      return false
    }
  }
}
</script>

<style scoped>
/* @keyframes rotating {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.icon-loading {
  animation: rotating 1.75s infinite linear;
} */
</style>