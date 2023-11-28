<style lang="less" scoped>
@message-width: 80px;

.mgb20 {
  margin-bottom: 20px;
}

.grid-message {
  display: flex;
  align-items: center;
  height: @message-width;
  cursor: pointer;
}

.grid-msg-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-msg-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-msg-icon {
  font-size: 50px;
  width: @message-width;
  height: @message-width;
  text-align: center;
  line-height: @message-width;
  color: #fff;
}

.chart-card {
  :deep(.ivu-card-body) {
    padding: 0 10px;
  }
}

.chart-cont {
  height: 140px;

  >h1 {
    color: #606266;
    font-weight: normal;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  >p {
    margin: 0;
    padding: 0;
    font-size: 30px;
    line-height: 40px;
  }

  >div {
    height: 60px;
    width: 100%;

    >p {
      margin: 0;
      padding-top: 10px;
      line-height: 20px;
      font-size: 12px;
      color: #909399;
    }
  }
}

.chart-cont2 {
  height: 240px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>
<template>
  <div ref="homePage">

    <!-- 待办、已办、办结、消息、预警 -->
    <Row :gutter="20" class="mgb20">
      <Col v-for="(item, index) in messageList" :span="4" :key="index">
      <Card dis-hover :padding="0">
        <div class="grid-message">
          <Icon :type="item.icon" class="grid-msg-icon" :style="{ background: item.color }" />
          <div class="grid-msg-right">
            <div class="grid-msg-num" :style="{ color: item.color }">{{ item.count }}</div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </Card>
      </Col>
    </Row>

    <!-- 市场占比 销售数量 总销售额 成本-->
    <Row :gutter="20" class="mgb20">
      <Col :span="6">
      <Card dis-hover class="chart-card">
        <div class="chart-cont">
          <h1>
            <span>市场占比</span>
            <Dropdown>
              <a href="javascript:void(0)">
                产品
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <template #list>
                <DropdownMenu>
                  <DropdownItem>电脑A</DropdownItem>
                  <DropdownItem>手机A</DropdownItem>
                </DropdownMenu>
              </template>
            </Dropdown>
          </h1>
          <p>80%</p>
          <div>
            <p>型号：HW20349</p>
            <Progress :percent="80" :stroke-width="20" text-inside />
          </div>
        </div>
      </Card>
      </Col>

      <Col :span="6">
      <Card dis-hover class="chart-card">
        <div class="chart-cont">
          <h1>
            <span>销售数量</span>
            <Dropdown>
              <a href="javascript:void(0)">
                季度
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <template #list>
                <DropdownMenu>
                  <DropdownItem>一季度</DropdownItem>
                  <DropdownItem>二季度</DropdownItem>
                </DropdownMenu>
              </template>
            </Dropdown>
          </h1>
          <p>
            40000
          </p>
          <div ref="refChart1"></div>
        </div>
      </Card>
      </Col>

      <Col :span="6">
      <Card dis-hover class="chart-card">
        <div class="chart-cont">
          <h1>
            <span>总销售额</span>
            <Dropdown>
              <a href="javascript:void(0)">
                季度
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <template #list>
                <DropdownMenu>
                  <DropdownItem>一季度</DropdownItem>
                  <DropdownItem>二季度</DropdownItem>
                </DropdownMenu>
              </template>
            </Dropdown>
          </h1>
          <p>
            ￥400,000.00
          </p>
          <div ref="refChart2"></div>
        </div>
      </Card>
      </Col>

      <Col :span="6">
      <Card dis-hover class="chart-card">
        <div class="chart-cont">
          <h1>
            <span>投入成本</span>
          </h1>
          <p>
            ￥380,000.00
          </p>
          <div ref="refChart3"></div>
        </div>
      </Card>
      </Col>
    </Row>

    <!-- -->
    <Row :gutter="20" class="mgb20">
      <Col :span="8">
      <Card dis-hover :body-style="{ padding: '10px' }">
        <Row class="chart-cont2">
          <Col :span="16">
          <Circle :size="220" :trail-width="9" :stroke-width="10" :percent="75" stroke-linecap="square"
            stroke-color="#43a3fb">
            <div class="demo-Circle-custom">
              <h1>4,000</h1>
              <p>下载人数</p>
              <span>
                占总人数
                <i>75%</i>
              </span>
            </div>
          </Circle>
          </Col>

          <Col :span="8">
          <Timeline>
            <TimelineItem color="green">发布1.0版本</TimelineItem>
            <TimelineItem color="green">发布2.0版本</TimelineItem>
            <TimelineItem color="red">严重故障</TimelineItem>
            <TimelineItem color="blue">发布3.0版本</TimelineItem>
            <TimelineItem color="blue">发布4.0版本</TimelineItem>
          </Timeline>
          </Col>
        </Row>
      </Card>
      </Col>

      <Col :span="16">
      <Card dis-hover :body-style="{ padding: '10px' }">
        <div class="chart-cont2" ref="refChart5"></div>
      </Card>
      </Col>
    </Row>

    <!-- -->
    <Row :gutter="20" class="mgb20">
      <Col :span="16">
      <Card dis-hover :padding="10">
        <template #title>
          <span>人员信息</span>
        </template>
        <template #extra>
          <a href="#">更多</a>
        </template>
        <Table :columns="columns1" :data="tableData1" border size="small"></Table>
      </Card>
      </Col>
      <Col :span="8">
      <Card dis-hover :padding="10">
        <template #title>
          <span>我的消息</span>
        </template>
        <template #extra>
          <a href="#">更多</a>
        </template>
        <Table :columns="columns2" :data="tableData2" size="small"></Table>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import * as echarts from "echarts";
import { onBeforeUnmount } from 'vue';
import { watch } from 'vue';
import { useElementSize } from '@vueuse/core';

const messageList = ref(
  [{
    type: "mytask",
    name: "我的申请",
    count: 10,
    color: "#409EFF",
    icon: "ios-paper-plane",
    linkUrl: "#",
  }, {
    type: "todo",
    name: "代办",
    count: 2,
    color: "#409EFF",
    icon: "md-flag",
    linkUrl: "#",
  }, {
    type: "done",
    name: "已办",
    count: 10,
    color: "#67C23A",
    icon: "md-checkmark-circle",
    linkUrl: "#",
  }, {
    type: "conclude",
    name: "办结",
    count: 3,
    color: "#67C23A",
    icon: "md-checkbox",
    linkUrl: "#",
  }, {
    type: "message",
    name: "我的消息",
    count: 10,
    color: "#E6A23C",
    icon: "md-chatboxes",
    linkUrl: "#",
  }, {
    type: "warninng",
    name: "预警信息",
    count: 10,
    color: "#F56C6C",
    icon: "md-warning",
    linkUrl: "#",
  }]
)

const tableData1 = [
  {
    date: '2016-05-03',
    name: '张三',
    sex: '男',
    email: 'zhangsan@134.com',
    address: '四川省成都市双流区',
  },
  {
    date: '2016-05-02',
    name: '李四',
    sex: '男',
    email: 'lisi@134.com',
    address: '四川省成都市高新区',
  },
  {
    date: '2016-05-04',
    name: '王五',
    sex: '男',
    email: 'wangwu@134.com',
    address: '四川省成都市武侯区',
  },
  {
    date: '2016-05-01',
    name: '小明',
    sex: '男',
    email: 'xiaoming@134.com',
    address: '四川省成都市郫都区',
  },
  {
    date: '2016-05-01',
    name: '小红',
    sex: '女',
    email: 'xiaohong@134.com',
    address: '四川省成都市锦江区',
  },
]

const columns1 = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 120
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 80
  },
  {
    title: '出生日期',
    dataIndex: 'date',
    key: 'date',
    width: 140
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    width: 180
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]

const tableData2 = [{
  no: 1,
  text: '张三发来一条消息'
}, {
  no: 2,
  text: '李四发来一条消息'
}, {
  no: 3,
  text: '王五发来一条消息'
}, {
  no: 4,
  text: '小红发来一条消息'
}, {
  no: 5,
  text: '小明发来一条消息'
}]

const columns2 = [
  {
    title: '序号',
    dataIndex: 'no',
    key: 'no',
    width: 80
  },
  {
    title: '消息',
    dataIndex: 'text',
    key: 'text'
  }
]

// 图标1
let refChart1 = ref();
let myChart1: echarts.EChartsType;
const initChart1 = () => {
  if (refChart1.value) {
    //初始化echarts实例
    myChart1 = echarts.init(refChart1.value);
    // 指定图表的配置项和数据
    let option = {
      grid: {
        left: 3,
        top: 0,
        right: 3,
        bottom: 0
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['手机A', '手机B', '手机C', '电脑A', '电脑B', '电脑C', '电脑D'],
        show: false
      },
      yAxis: {
        type: 'value',
        max: function (value: { max: number; }) {
          return value.max + 100;
        },
        show: false
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);
  }
}

// 图标1
let refChart2 = ref();
let myChart2: echarts.EChartsType;
const initChart2 = () => {
  if (refChart2.value) {
    //初始化echarts实例
    myChart2 = echarts.init(refChart2.value);
    // 指定图表的配置项和数据
    let option = {
      grid: {
        left: 3,
        top: 0,
        right: 3,
        bottom: 0
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['手机A', '手机B', '手机C', '电脑A', '电脑B', '电脑C', '电脑D'],
          axisTick: {
            alignWithLabel: true
          },
          show: false
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: false
        }
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barWidth: '60%',
          data: [20000, 40000, 30000, 90000, 50000, 110000, 130000]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option);
  }
}

// 图标3
let refChart3 = ref();
let myChart3: echarts.EChartsType;
const initChart3 = () => {
  if (refChart3.value) {
    //初始化echarts实例
    myChart3 = echarts.init(refChart3.value);
    // 指定图表的配置项和数据
    let option = {
      grid: {
        left: 3,
        top: 0,
        right: 3,
        bottom: 0
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '电脑',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '手机',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option);
  }
}

// 图标3
let refChart4 = ref();
let myChart4: echarts.EChartsType;
const initChart4 = () => {
  if (refChart4.value) {
    //初始化echarts实例
    myChart4 = echarts.init(refChart4.value);
    // 指定图表的配置项和数据
    let option = {
      title: {
        text: '推广统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        left: 'center',
        bottom: 0,
      },
      series: [
        {
          name: '数量',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接' },
            { value: 580, name: '邮件' },
            { value: 484, name: '联合广告' },
            { value: 300, name: '视频广告' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart4.setOption(option);
  }
}

// 图标5
let refChart5 = ref();
let myChart5: echarts.EChartsType;
const initChart5 = () => {
  if (refChart5.value) {
    //初始化echarts实例
    myChart5 = echarts.init(refChart5.value);
    // 指定图表的配置项和数据
    let option = {
      title: {
        text: '天气',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { title: '数据视图', show: true, readOnly: false },
          magicType: { title: { line: '折线图', bar: '柱状图' }, show: true, type: ['line', 'bar'] },
          restore: { title: '刷新', show: true },
          saveAsImage: { title: '下载', show: true }
        }
      },
      legend: {
        data: ['蒸发量', '降水', '温度'],
        bottom: 0,
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '降水',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: '蒸发量',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: string) {
              return value + ' ml';
            }
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: '降水',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: string) {
              return value + ' ml';
            }
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: '温度',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: string) {
              return value + ' °C';
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart5.setOption(option);
  }
}

//重新渲染图表
const resizeChart = () => {
  // 折叠板延迟时间
  setTimeout(() => {
    myChart1?.resize();
    myChart2?.resize();
    myChart3?.resize();
    myChart4?.resize();
    myChart5?.resize();
  }, 400);
}

// 监听页面大小变化
const homePage = ref();
const { width: pageWidth } = useElementSize(homePage);
watch(pageWidth, () => {
  resizeChart();
});
// 样式变化重新渲染
// const store = userStore();
// const collapse = computed(() => store.meunIsCollapsed);
// watch(collapse, () => {
//   resizeChart();
// });

// 初始化渲染
onMounted(() => {
  nextTick(() => {
    initChart1();
    initChart2();
    initChart3();
    initChart4();
    initChart5();
    window.addEventListener("resize", resizeChart);
  });
});

//销毁
onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeChart);
})

// defineExpose无需导入，直接使用
// defineExpose({ value });
</script>
