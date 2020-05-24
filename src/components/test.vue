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
      <div style="margin:10px">
        <x-button icon="editor">large</x-button>
        <x-button icon="loading">default</x-button>
        <x-button icon="loading" iconColor="red" disabled>small</x-button>
        <x-button>
          large
          <x-icon name="editor" />
        </x-button>
      </div>
      <div style="margin:10px">
        <x-button loading>loading</x-button>
        <x-button :loading="false">loading</x-button>
      </div>
    </div>
    <div class="container">
      <div class="title" v-text="icon"></div>
      <div style="margin:10px">
        <x-button right>你妈死了</x-button>
      </div>
      <div style="margin:10px">
        <x-icon name="editor" size="32px" />
        <x-icon name="close" size="32px" />
        <x-icon name="loading" size="32px" />
        <x-icon name="loading" size="40px" />
      </div>
    </div>
    <div class="container">
      <div class="title" v-text="message"></div>
      <div style="margin:10px">
        <x-button @click="handleMessage">message</x-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      button: "按钮组件",
      icon: "icon 组件",
      message: "message 组件"
    };
  },
  methods: {
    handleClick() {
      console.log("click!");
    },
    handleMessage() {
      console.log(this);
      this.$message({
        message: "一条基本信息"
      });
    }
  }
};
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
