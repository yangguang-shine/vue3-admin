import { TypeI, ItemI, QueueItemI, A, B, C, D, E } from "./data";
let queueList: QueueItemI[][] = [[], [], [], [], []];
let time = 0;
export function getTwoMinTime() {
  queueList = [[], [], [], [], []];
  time = 0;

  let typeList: TypeI[] = getRandomList({
    customCount: 5,
    customerTypeNum: 5,
  });
  typeList = ['B', 'A', 'D', 'C','E']
  console.log(typeList);
  formatTypeList(typeList);
  queueList.forEach((item) => {
    console.table(item);
  });
  if (!queueList.length) {
    return;
  }
  readyStart();
  console.log(time);
}
function getRandomList(config: { customCount: number; customerTypeNum: number }): TypeI[] {
  const { customCount, customerTypeNum } = config;
  const ravage: number = 1 / customerTypeNum;
  const list: TypeI[] = [];
  for (let i = 0; i < customCount; i++) {
    if (0 < Math.random() && Math.random() <= ravage) {
      list.push("A");
    } else if (ravage < Math.random() && Math.random() <= ravage * 2) {
      list.push("B");
    } else if (ravage * 2 < Math.random() && Math.random() <= ravage * 3) {
      list.push("C");
    } else if (ravage * 3 < Math.random() && Math.random() <= ravage * 4) {
      list.push("D");
    } else {
      list.push("E");
    }
  }
  return list;
}
function readyStart() {
  // const endFlag: boolean =  false
  let min = queueList[0][0].order;
  let minIndex = 0;
  queueList.find((item, index) => {
    if (item[0].order < min) {
      min = item[0].order;
      minIndex = index;
    }
  });
  const readyStartItem = queueList[minIndex].shift();
  filterQueueList();
  if (readyStartItem) {
    time += readyStartItem.finish;
    toStart(readyStartItem.free);
  }
  if (queueList.length) {
    readyStart();
  }
}
function toStart(remainFree: number) {
  let canParallelItem: QueueItemI | null = null;
  let canParallelIndex: number | null = null;
  queueList.forEach((item, index) => {
    if (item[0].finish <= remainFree) {
      if (!canParallelItem) {
        canParallelItem = item[0];
        canParallelIndex = index;
      } else if (canParallelItem.order > item[0].order) {
        canParallelItem = item[0];
        canParallelIndex = index;
      }
    }
  });
  if (canParallelIndex !== null) {
    const canParallelItem = queueList[canParallelIndex].shift();
    filterQueueList();
    if (canParallelItem) {
      toStart(canParallelItem.free);
      remainFree = remainFree - canParallelItem.finish;
      if (remainFree > 0) {
        toStart(remainFree);
      }
    }
  }
}
function formatTypeList(typeList: TypeI[]) {
  let order = 1;
  typeList.forEach((item) => {
    if (item === "A") {
      queueList[0].push({
        type: "A",
        order,
        ...A,
      });
    } else if (item === "B") {
      queueList[1].push({
        type: "B",
        order,
        ...B,
      });
    } else if (item === "C") {
      queueList[2].push({
        type: "C",
        order,
        ...C,
      });
    } else if (item === "D") {
      queueList[3].push({
        type: "D",
        order,
        ...D,
      });
    } else if (item === "E") {
      queueList[4].push({
        type: "E",
        order,
        ...E,
      });
    }
    order++;
  });
  filterQueueList();
  console.log(JSON.parse(JSON.stringify(queueList)));
}
function filterQueueList() {
  queueList = queueList.filter((item) => item.length);
}
