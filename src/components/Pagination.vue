<script setup lang="ts">
import { ref, onMounted, computed, watch, withDefaults } from 'vue'

const index = ref<number>(1)
const size = ref<number>(10)
const jumpIndex = ref<string>('')
const shortCutLength = ref<number>(7)
// const prop = defineProps<{ pageNum: number, pageSize: number, total: number, pageSizes?: number[], control?: ('pageSizes' | 'jump')[] }>()

interface PropI {
  pageNum: number, 
  pageSize: number, 
  total: number, 
  pageSizes?: number[], 
  control?: ('pageSizes' | 'jump')[]
}
const prop = withDefaults(defineProps < PropI> (), {
  pageNum: 1, 
  pageSize: 10, 
  total: 0, 
  pageSizes: () => [10, 20, 50], 
  control: () => ["pageSizes", "jump"]
})

const emit = defineEmits<{
  (event: 'change', params: {
    pageNum: number,
    pageSize: number
  }): void
}>()
onMounted(() => {
  init()
})
const showPageSizesFlag = computed((): boolean => {
  return prop.control.includes("pageSizes");
})
const showJumpFlag = computed((): boolean => {
  return prop.control.includes("jump");
})
const totalPage = computed((): number => {
  return Math.ceil(prop.total / size.value);
})
const isFirstPage = computed((): boolean => {
  return index.value <= 1;
})
const isLastPage = computed((): boolean => {
  return index.value >= totalPage.value;
})
const hasLeftEllipsisFlag = computed((): boolean => {
  return totalPage.value > shortCutLength.value && index.value > Math.ceil(shortCutLength.value / 2);
})
const hasRightEllipsisFlag = computed((): boolean => {
  return totalPage.value > shortCutLength.value && index.value < totalPage.value - Math.floor(shortCutLength.value / 2);
})

const shortCutPages = computed((): number[] => {
  let start = 0;
  let end = 0;
  let arr = [];
  let avg = Math.floor(shortCutLength.value / 2); //向下取整
  if (totalPage.value > shortCutLength.value) {
    start = index.value - avg;
    end = index.value + avg;
    if (start <= 0) {
      start = 1;
      end = shortCutLength.value;
    }
    if (end > totalPage.value) {
      start = totalPage.value - shortCutLength.value + 1;
      end = totalPage.value;
    }
  } else {
    start = 1;
    end = totalPage.value;
  }
  for (let i = start; i > 0 && i <= end; i++) {
    arr.push(i);
  }
  return arr;
})
function change() {
  if (!/^[1-9]\d*$/.test(jumpIndex.value)) {
    jumpIndex.value = jumpIndex.value.replace(/[^\d]/g, "");
  }
}

function jumpPage(jumpNum: number | string) {
  if (jumpNum >= 1 && jumpNum <= totalPage.value) {
    index.value = parseInt(`${jumpNum}`, 10);
    pageChange();
  } else if (jumpNum > totalPage.value) {
    index.value = parseInt(`${totalPage.value}`, 10);
    pageChange();
  }
}
function prePage() {
  index.value--;
  pageChange();
}
function nextPage() {
  index.value++;
  pageChange();
}
function firstPage() {
  index.value = 1;
  pageChange();
}
function lastPage() {
  index.value = totalPage.value;
  pageChange();
}
function pageSizeChange() {
  if (size.value * (index.value - 1) > prop.total) {
    index.value = totalPage.value;
  }
  pageChange();
}
function pageChange() {
  emit("change", {
    pageNum: index.value,
    pageSize: size.value,
  });
}
function init() {
  index.value = prop.pageNum
  size.value = prop.pageSize
}
</script>

<template>
  <div class="hf-pagination">
    <div v-if="showPageSizesFlag" class="hf-pagination-item-first">
      <span>每页显示 </span>
      <select class="form-control" v-model="size" @change="pageSizeChange">
        <option v-for="(item, index) in pageSizes" :key="index">{{ item }}</option>
      </select>
    </div>
    <div class="hf-pagination-item"><button disabled class="cursor-default">共<i>{{ total }}</i>条 </button>
    </div>
    <div class="hf-pagination-item"><button :disabled="isFirstPage" @click="firstPage()">首页</button></div>
    <div class="hf-pagination-item"><button :disabled="isFirstPage" @click="prePage()">上一页</button></div>
    <div v-show="hasLeftEllipsisFlag" class="hf-pagination-item ellipsis"><span>...</span></div>
    <div class="hf-pagination-item" v-for="pageIndex in shortCutPages" :key="pageIndex"
      :class="{ 'hf-pagination-item_active': pageIndex == index }">
      <span @click="jumpPage(pageIndex)">{{ pageIndex }}</span>
    </div>
    <div v-show="hasRightEllipsisFlag" class="hf-pagination-item ellipsis"><span>...</span></div>
    <div class="hf-pagination-item"><button :disabled="isLastPage" @click="nextPage()">下一页</button></div>
    <div class="hf-pagination-item"><button :disabled="isLastPage" @click="lastPage()">尾页</button></div>
    <div class="hf-pagination-item"><button disabled class="cursor-default">共<i>{{ totalPage }}</i>页
      </button>
    </div>
    <div v-if="showJumpFlag" class="hf-pagination-item-last">
      到第
      <input v-model="jumpIndex" @input="change" @keyup.enter="jumpPage(jumpIndex)">
      页
      <button class="cursor-pointer" @click="jumpPage(jumpIndex)">确定</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 分页器 */
.hf-pagination {
  padding: 20px;
  display: flex;
  font-size: 14px;
  align-items: center;
  white-space: nowrap;
}

.hf-pagination-item-first {
  color: #337ab7;
  width: 140px;
  margin-left: 0px;
  flex-shrink: 0;

  span {
    margin-right: 6px;
  }

  select {
    outline: none;
    height: 26px;
    width: 50px;
  }

  .el-select .el-input {
    width: 65px;
  }

  .el-input__suffix {
    right: -14px;
  }

  .el-select .el-input .el-select__caret {
    font-size: 10px;
  }
}

.hf-pagination-item-last {
  margin-left: 12px;

  input {
    width: 68px;
    height: 32px;
    border: 1px #ccc solid;
    border-radius: 4px;
    text-align: center;
    outline: none;
    margin: 0 5px;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }

  button {
    height: 26px;
    width: 50px;
    margin-left: 6px;
  }
}

.hf-pagination-item {

  span,
  button {
    border: 1px solid #ddd;
    background-color: #fff;
    text-decoration: none;
    position: relative;
    float: left;
    outline: none;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer;
  }

  span:hover,
  button:hover {
    background-color: #eee;
  }

  button:disabled {
    cursor: not-allowed;
  }

  i {
    font-style: normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 14px;
  }
}



.hf-pagination-item_active span {
  color: #fff;
  cursor: default;
  background-color: #0066ff;
  border-color: #0066ff;

  &:hover {
    background-color: #0066ff;
    border-color: #0066ff;
  }
}

.cursor-default {
  cursor: default !important;
}

.hf-drop {
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px rgba(0, 0, 0, 0.2) solid;
  cursor: no-drop;

  &:hover {
    border: 1px rgba(0, 0, 0, 0.2) solid;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
</style>
