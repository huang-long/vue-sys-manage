<style lang="less" scoped>
.print-area {
  max-width: 800px;
}
</style>
<template>
  <div class="container">
    <Row>
      相关文档：
      <a href="https://github.com/huang-long/vue3-print-ts">vue-print-ts</a>
    </Row>
    <Row>
      <Button type="primary" size="small" v-print="printObj">打印</Button>
      <div id="loading" v-show="printLoading"></div>
    </Row>
    <Divider>打印区域</Divider>
    <div id="printMe" class="print-area">
      <Table stripe :columns="columns" :data="data"></Table>
    </div>
    <Divider>打印区域</Divider>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import type { PrintConf } from 'vue3-print-ts';

export default {
  name: "DemoPrint",
  setup() {
    let printLoading = ref(true);
    let printObj = ref<PrintConf>({
      ids: "printMe",
      printTitle: '打印测试',
      extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
      showBackground: true,
      beforePrint() {
        console.log('打印之前')
      },
      afterPrint() {
        console.log('打印之后')
      }
    })
    let columns = ref([
      {
        title: 'Name',
        key: 'name'
      },
      {
        title: 'Age',
        key: 'age'
      },
      {
        title: 'Address',
        key: 'address'
      }
    ])
    let data = ref([
      {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03'
      },
      {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        date: '2016-10-01'
      },
      {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        date: '2016-10-02'
      },
      {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        date: '2016-10-04'
      }
    ])

    return {
      printLoading,
      printObj,
      columns,
      data
    }
  },
};
</script>
