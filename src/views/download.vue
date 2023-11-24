

<style lang="less" scoped>
</style>
<template>
  <div class="container">
    <Row>
      <Title>文件下载</Title>
    </Row>
    <br>
    <Divider>a标签链接下载</Divider>
    <a href="/sys-api/file/test1.xlsx" :download="fileName">下载</a>
    <Divider>Blob下载（处理一些特殊情况）</Divider>
    <a href="javascript:void(0)" @click="download">下载</a>
    <Divider>Blob图片展示（处理一些特殊情况）</Divider>
    <img style="width:100px;height:100px;" :src="imageUrl">
  </div>
</template>

<script lang="ts">
import { onBeforeMount, onUnmounted, ref } from "vue";
import { downloadFile, downFile } from "../api/manage";

export default {
  name: "DemoDownload",
  setup() {
    let fileName = ref("表格.xlsx");
    let imageUrl = ref("");

    let tempUrl = "";

    onBeforeMount(() => {
      downFile("/image/test.jpg", null).then((data: any) => {
        tempUrl = window.URL.createObjectURL(data);
        imageUrl.value = tempUrl;
      });
    });

    onUnmounted(() => {
      window.URL.revokeObjectURL(tempUrl); // 释放掉blob对象
    });

    const download = function () {
      downloadFile("/file/test1.xlsx", "表格.xlsx", {});
    };

    return {
      download,
      fileName,
      imageUrl,
    };
  },
};
</script>
