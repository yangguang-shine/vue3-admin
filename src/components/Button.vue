
<template>
  <button class="hf-button" :class="extraClass" @click="click">
    <slot></slot>
    <span v-if="type" :class="'hf-button_img hf-button-' + type"></span>
    <span class="hf-button_text">{{ showText }}</span>
  </button>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, watch, withDefaults } from 'vue'
// text: {
//       type: String,
//       default: "",
//     },
//     href: {
//       type: String,
//       default: "",
//     },
//     type: {
//       type: ["query", "delete", "add", "export", "edit", "import", "clear"],
//       default: "",
//     },
//     config: {
//       type: Array,
//       default: () => {
//         return [];
//       },
//     },
const typeMap = {
  query: "查询",
  delete: "删除",
  clear: "清空",
  add: "新增",
  export: "导出",
  import: "导入",
  edit: "编辑",
};
const prop = withDefaults(defineProps<{
  type: "query" | "delete" | "add" | "export" | "edit" | "import" | "clear",
  text?: string,
  href?: string,
  config?: any[],
}>(), {
  type: 'query',
  text: '',
  href: '',
  config: () => [],
})

const emit = defineEmits<{
  (event: 'click'): void
}>()

const showText = computed((): string => {
  if (prop.text) {
    return prop.text;
  }
  if (typeMap[prop.type]) {
    return typeMap[prop.type];
  }
  return ''
})
const extraClass = computed((): string => {
  let arr = [];
  if (prop.config.includes("space") || (typeMap[prop.type] && !prop.text)) {
    arr.push("hf-button--space");
  }
  if (prop.config.includes("deep") || prop.type === "query") {
    arr.push("hf-button--deep");
  }
  return arr.join(" ");
})

function click() {
  emit("click");
  if (prop.href) {
    window.location.href = prop.href;
  }
}
</script>

<style lang="less" scoped>
/* 按钮 */
.hf-button {
  height: 33px;
  line-height: 33px;
  background-color: #fff;
  border: 1px #0066ff solid;
  color: #0066ff;
  border-radius: 3px;
  margin-right: 15px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  padding: 0 15px;
}

.hf-button>img {
  margin-right: 6px;
  width: 16px;
  height: 16px;
  transform: translateY(2px);
  vertical-align: inherit;
}

.hf-button>.hf-button_img {
  display: inline-block;
  margin-right: 6px;
  width: 16px;
  height: 16px;
  background-size: 100% 100%;
  transform: translateY(2px);
}

.hf-button>.hf-button-query {
  background-image: url("../../image/button/query.png");
}

.hf-button>.hf-button-edit {
  background-image: url("../image/button/edit.png");
}

.hf-button>.hf-button-delete {
  background-image: url("../image/button/delete.png");
}

.hf-button>.hf-button-clear {
  background-image: url("../image/button/clear.png");
}

.hf-button>.hf-button-export {
  background-image: url("../image/button/export.png");
}

.hf-button>.hf-button-add {
  background-image: url("../image/button/add.png");
}

.hf-button>.hf-button-import {
  background-image: url("../image/button/import.png");
}

.hf-button--space {
  padding-right: 5px;
}

.hf-button--space .hf-button_text {
  letter-spacing: 10px;
}

.hf-button--deep {
  background-color: #0066ff;
  color: #fff;
}

.hf-button--default {
  background-color: #f1f1f1;
  color: #333;
  border: 1px #ddd solid;
}

.hf-button--deep>.hf-button-query {
  background-image: url("../image/button/query_w.png");
}

.hf-button--deep>.hf-button-edit {
  background-image: url("../image/button/edit_w.png");
}

.hf-button--deep>.hf-button-delete {
  background-image: url("../image/button/delete_w.png");
}

.hf-button--deep>.hf-button-clear {
  background-image: url("../image/button/clear_w.png");
}

.hf-button--deep>.hf-button-export {
  background-image: url("../image/button/export_w.png");
}

.hf-button--deep>.hf-button-add {
  background-image: url("../image/button/add_w.png");
}

.hf-button--deep>.hf-button-import {
  background-image: url("../image/button/import_w.png");
}

.hf-button:hover {
  border: 1px #66afe9 solid;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
</style>
