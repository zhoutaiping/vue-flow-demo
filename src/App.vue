<script setup>
import { ref } from "vue";
import FlowDiagramLeft from "./components/FlowDiagramLeft.vue";
import FlowDiagramRight from "./components/FlowDiagramRight.vue";

// 导入左侧配置
import {
  leftFirstRowItem,
  leftSecondRowItems,
  leftDraggableTables,
  leftSymbolPowerTableConfig,
  leftBottomPowerTableConfig,
  leftCollapseTableConfig,
  leftCircleLineConfig
} from './config/leftDiagramConfig.js'

// 导入右侧配置
import {
  rightItems,
  rightDraggableTables,
  rightSymbolPowerTableConfig,
  rightBottomPowerTableConfig,
  rightCollapseTableConfig,
  rightCircleLineConfig
} from './config/rightDiagramConfig.js'

const flowTitle = ref("电网墩徳线");
const flowTitleUnit = ref("10kV");
</script>

<template>
  <div class="app">
    <div class="app__main">
      <div class="app__diagram">
      <FlowDiagramLeft
        :flow-title="flowTitle"
        :first-row-item="leftFirstRowItem"
        :second-row-items="leftSecondRowItems"
        :draggable-tables="leftDraggableTables"
        :power-table-config="leftSymbolPowerTableConfig"
        :bottom-power-table-config="leftBottomPowerTableConfig"
        :collapse-table-config="leftCollapseTableConfig"
        :circle-line-config="leftCircleLineConfig"
      />

      <FlowDiagramRight
        :flow-title-unit="flowTitleUnit"
        :items="rightItems"
        :draggable-tables="rightDraggableTables"
        :power-table-config="rightSymbolPowerTableConfig"
        :bottom-power-table-config="rightBottomPowerTableConfig"
        :collapse-table-config="rightCollapseTableConfig"
        :circle-line-config="rightCircleLineConfig"
      />
      </div>
    </div>

  </div>
</template>

<style scoped>
.app {
  background-color: #212e40;
  width: 100%;
  min-height: 100vh;
}

.app__main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app__diagram {
  display: flex;
  gap: 20px;
}
</style>
