<template>
  <div>
    <div class="container">
      <div class="title" v-text="button"></div>
      <div style="margin:10px">
        <x-button type="success">你妈死了</x-button>
        <x-button type="danger" @click="handleClick">你妈死了</x-button>
        <x-button type="primary" :disabled="true" @click="handleClick">你妈死了</x-button>
      </div>
      <div style="margin:10px">
        <x-button centre>你妈死了</x-button>
        <x-button left>你妈死了</x-button>
        <x-button centre>你妈死了</x-button>
        <x-button right>你妈死了</x-button>
      </div>
      <div style="margin:10px">
        <x-button size="large">large</x-button>
        <x-button size="default">default</x-button>
        <x-button size="small">small</x-button>
      </div>
    </div>
    <div class="container">
      <div class="title" v-text="icon"></div>
      <div style="margin:10px">
        <x-button right>你妈死了</x-button>
      </div>
      <div style="margin:10px">
        <x-icon name="editor" size="32px"/>
        <x-icon name="loading" size="32px"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      button: '按钮组件',
      icon: 'icon 组件'
    }
  },
  methods: {
    handleClick () {
      console.log('click!')
    }
  },
}
</script>

<style scoped>
.title {
  height: 50px;
  background: #1e90ff;
}
.container {
  padding: 24px;
  color: white;
}
</style>
