<script setup>
import TextItem from "./TextItem.vue";
import CircleLine from './CircleLine.vue'
import PowerTable from "./PowerTable.vue";
import DcAcIcon from "./DcAcIcon.vue";
import TriangleGroup from "./TriangleGroup.vue";
import CollapsePowerTable from './CollapsePowerTable.vue'

defineProps({
  flowTitleUnit: {
    type: String,
    default: "",
  },
  // 进线柜、SVG、SVG柜 等
  items: {
    type: Array,
    default: () => [],
  },
  // PowerTable 配置
  powerTableConfig: {
    type: Object,
    default: () => ({
      title: "曼德电子03方阵M002-FZ003",
      dataList: [
        { label: "有功功率", value: "456kW" },
        { label: "无功功率", value: "123kVar" },
        { label: "计量电量", value: "789kWh" },
      ],
      titleColor: "#52c41a",
      labelColor: "#fa8c16",
      borderColor: "#52c41a",
    }),
  },
  // CircleLine 配置
  circleLineConfig: {
    type: Object,
    default: () => ({
      type: "error",
      size: "40px",
      topLineHeight: "50px",
      bottomLineHeight: "50px",
    }),
  },
});
</script>
<template>
  <div class="fd-right">

    <PowerTable
        :title="'进线柜-100'"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style=" width: 250px; margin-right: 50px; position: absolute; top: 390px; left: 900px;"
      />
      <PowerTable
       :title="'SVG-22222100'"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style=" width: 200px; margin-right: 50px; position: absolute; top: 390px; left: 1250px;"
      />
      <PowerTable
        :title="'SVG-222222100'"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style=" width: 200px; margin-right: 50px; position: absolute; top: 390px; left: 1550px;"
      />
    <div class="fd-right__label">{{ flowTitleUnit }}</div>
    <div class="fd-right__spacer"></div>

    <div class="fd-right__body">
      <div class="fd-right__corner"></div>
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['fd-right__cell', { 'fd-right__cell--first': index === 0 }]"
      >
        <div
          class="fd-right__vline"
          :style="{ height: item.lineHeight || '100%' }"
        ></div>
        <TextItem :text="item.text" :status="item.status" class="fd-right__label-item" />
      </div>
    </div>
    <div class="fd-right__symbol">
      <PowerTable
        :title="powerTableConfig.title"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style="margin-left: 40px; width: 320px"
      />
      <CircleLine
        class="fd-right__symbol-icon"
        :type="circleLineConfig.type"
        :size="circleLineConfig.size"
        :top-line-height="circleLineConfig.topLineHeight"
        :bottom-line-height="circleLineConfig.bottomLineHeight"
      />
    </div>

    <div style="display: flex; flex-direction: row; gap: 5px; ">

      <PowerTable
        :title="powerTableConfig.title"
        :dataList="powerTableConfig.dataList"
        :titleColor="powerTableConfig.titleColor"
        :labelColor="powerTableConfig.labelColor"
        :borderColor="powerTableConfig.borderColor"
        style=" width: 180px; margin-right: 50px; "
      />

      <div style="display: flex; flex-direction: column; gap: 5px;">
        
        <div
        style="
          border: 1px solid rgba(90, 255, 255, 1);
          padding: 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          "
      >
          <DcAcIcon status="active" style="margin-right: 40px;"/>
          <DcAcIcon status="active" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
            "
          >
            <TriangleGroup  selected />
          </div>
          <DcAcIcon status="active" style="margin-right: 40px;"/>
          <DcAcIcon status="active" />
        </div>
  
        <CollapsePowerTable
          triggerTitle="方阵列表"
          tableTitle="方阵详情"
          :columns="['有功功率', '无功功率', '日发电量', '总发电量']"
          :dataList="[
            {
              name: '曼德电子01方阵',
              有功功率: '123kW',
              无功功率: '45kVar',
              日发电量: '890kWh',
              总发电量: '12.3MWh',
            },
            {
              name: '曼德电子02方阵',
              有功功率: '456kW',
              无功功率: '78kVar',
              日发电量: '901kWh',
              总发电量: '45.6MWh',
            },
          ]"
          titleColor="#52c41a"
          labelColor="#fa8c16"
          borderColor="#52c41a"
          lineColor="#52c41a"
          style="width: 400px"
        />
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.fd-right {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.fd-right__label {
  margin-top: 185px;
  min-width: 100px;
  color: rgb(255, 0, 0);
  font-size: 14px;
  display: inline-flex;
  justify-content: end;
  flex-direction: column;
  align-items: flex-start;
  top: 5px;
  position: relative;
}

.fd-right__spacer {
  width: 565px;
  height: 80px;
  border-bottom: 2px solid rgba(255, 0, 0, 1);
}

.fd-right__body {
  width: 800px;
  height: 230px;
  border-bottom: 2px solid rgba(255, 0, 0, 1);
  display: flex;
  align-items: center;
  padding-left: 80px;
  margin-left: -21px;
}

.fd-right__corner {
  width: 175px;
  height: 80px;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  position: absolute;
  margin-top: -146.5px;
  margin-left: -204.5px;
}

.fd-right__cell {
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.fd-right__cell--first {
  margin-left: 50px;
}

.fd-right__vline {
  width: 1px;
  background-color: #fff;
}

.fd-right__label-item {
  margin-top: 23px;
}

.fd-right__symbol {
  width: 800px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
}


.fd-right__symbol-icon {
  margin-right: 100px;
}
</style>
