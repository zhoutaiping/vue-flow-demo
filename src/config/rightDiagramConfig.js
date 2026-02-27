// 右侧流程图配置

export const rightItems = [
  { text: "进线柜", status: "active", lineHeight: "100%" },
  { text: "SVG", status: "error", lineHeight: "23px" },
  { text: "SVG柜", status: "active", lineHeight: "50px" },
];

// 可拖拽表格配置
export const rightDraggableTables = [
  {
    id: 1,
    title: "进线柜-100",
    dataList: [
      { label: "有功功率", value: "500kW" },
      { label: "无功功率", value: "200kVar" },
      { label: "计量电量", value: "800kWh" },
    ],
    titleColor: "#1890ff",
    labelColor: "#13c2c2",
    borderColor: "#1890ff",
    x: -100,
    y: 0,
    width: 250,
    className: "power-table--250"
  },
  {
    id: 2,
    title: "SVG-22222100",
    dataList: [
      { label: "有功功率", value: "300kW" },
      { label: "无功功率", value: "150kVar" },
      { label: "计量电量", value: "600kWh" },
    ],
    titleColor: "#722ed1",
    labelColor: "#eb2f96",
    borderColor: "#722ed1",
    x: 250,
    y: 0,
    width: 200,
    className: "power-table--200"
  },
  {
    id: 3,
    title: "SVG-222222100",
    dataList: [
      { label: "有功功率", value: "400kW" },
      { label: "无功功率", value: "180kVar" },
      { label: "计量电量", value: "700kWh" },
    ],
    titleColor: "#faad14",
    labelColor: "#fa541c",
    borderColor: "#faad14",
    x: 500,
    y: 0,
    width: 200,
    className: "power-table--200"
  }
];

// 符号区域 PowerTable 配置
export const rightSymbolPowerTableConfig = {
  title: "曼德电子05方阵M004-FZ005",
  dataList: [
    { label: "有功功率", value: "789kW" },
    { label: "无功功率", value: "456kVar" },
    { label: "计量电量", value: "1234kWh" },
  ],
  titleColor: "#13c2c2",
  labelColor: "#52c41a",
  borderColor: "#13c2c2",
};

// 底部 PowerTable 配置
export const rightBottomPowerTableConfig = {
  title: "曼德电子06方阵M005-FZ006",
  dataList: [
    { label: "有功功率", value: "890kW" },
    { label: "无功功率", value: "567kVar" },
    { label: "计量电量", value: "1567kWh" },
  ],
  titleColor: "#722ed1",
  labelColor: "#eb2f96",
  borderColor: "#722ed1",
};

// CollapsePowerTable 配置
export const rightCollapseTableConfig = {
  triggerTitle: "右侧方阵列表",
  tableTitle: "右侧方阵详情",
  columns: ['有功功率', '无功功率', '日发电量', '总发电量'],
  dataList: [
    {
      name: '曼德电子03方阵',
      有功功率: '234kW',
      无功功率: '56kVar',
      日发电量: '912kWh',
      总发电量: '23.4MWh',
    },
    {
      name: '曼德电子04方阵',
      有功功率: '567kW',
      无功功率: '89kVar',
      日发电量: '1023kWh',
      总发电量: '56.7MWh',
    },
  ],
  titleColor: "#13c2c2",
  labelColor: "#52c41a",
  borderColor: "#13c2c2",
  lineColor: "#13c2c2"
};

// CircleLine 配置
export const rightCircleLineConfig = {
  type: "error",
  size: "40px",
  topLineHeight: "50px",
  bottomLineHeight: "50px",
};
