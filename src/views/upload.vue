

<style lang="less" scoped>
</style>
<template>
  <div class="container">
    <Row>
      <Title>支持拖拽</Title>
    </Row>
    <Row>
      <Text>VIEW UI自带上传组件。 访问地址：<a href="https://iviewui.com/view-ui-plus/component/form/upload">VIEW UI Upload</a></Text>
    </Row>
    <br>
    <Upload multiple type="drag" action="/posts/fileUplaod">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
      </div>
    </Upload>
  </div>
</template>

<script lang="ts">

export default {
  name: "DemoUpload",
  setup() {
  },
};
</script>
