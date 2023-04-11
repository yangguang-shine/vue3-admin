import { TypeI, ItemI, QueueItemI, A, B, C, D, E } from "./data";
let queueList: QueueItemI[][] = [[], [], [], [], []];
let time = 0;
export function getTwoMinTime() {
  // const typeList: TypeI[] = ["D", "D", "B", "C", "E", "A", "D", "B", "C", "A"];
  // const typeList: TypeI[] = ["A", "D", "D", "E", "E"];
  const typeList: TypeI[] = getRandomList(20);

  formatTypeList(typeList);
  queueList.forEach(item => {
    console.table(item);
  })
  if (!queueList.length) {
    console.log(time);
    return;
  }
  readyStart();
  console.log(time);
}
function getRandomList(length: number): TypeI[] {
  const list: TypeI[] = [];
  for (let i = 0; i < length; i++) {
    if (0 < Math.random() && Math.random() <= 0.2) {
      list.push("A");
    } else if (0.2 < Math.random() && Math.random() <= 0.4) {
      list.push("B");
    } else if (0.4 < Math.random() && Math.random() <= 0.6) {
      list.push("C");
    } else if (0.6 < Math.random() && Math.random() <= 0.6) {
      list.push("D");
    } else {
      list.push("E");
    }
  }
  return list;
}
function readyStart() {
  // const endFlag: boolean =  false
  let min = queueList[0][0].count;
  let minIndex = 0;
  queueList.find((item, index) => {
    if (item[0].count < min) {
      min = item[0].count;
      minIndex = index;
    }
  });
  const readyStartItem = queueList[minIndex].shift();
  filterQueueList();
  if (readyStartItem) {
    console.log('readyStart')
    console.log(readyStartItem)
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
      } else if (canParallelItem.count > item[0].count) {
        canParallelItem = item[0];
        canParallelIndex = index;
      }
    }
  });
  if (canParallelIndex !== null) {
    const canParallelItem = queueList[canParallelIndex].shift();
    filterQueueList();
    if (canParallelItem) {
      console.log(canParallelItem)
      toStart(canParallelItem.free);
      remainFree = remainFree - canParallelItem.finish
      if (remainFree > 0) {
        toStart(remainFree);
      }

    }
  }
}
function formatTypeList(typeList: TypeI[]) {
  let count = 1;
  typeList.forEach((item) => {
    if (item === "A") {
      queueList[0].push({
        type: "A",
        count,
        ...A,
      });
    } else if (item === "B") {
      queueList[1].push({
        type: "B",
        count,
        ...B,
      });
    } else if (item === "C") {
      queueList[2].push({
        type: "C",
        count,
        ...C,
      });
    } else if (item === "D") {
      queueList[3].push({
        type: "D",
        count,
        ...D,
      });
    } else if (item === "E") {
      queueList[4].push({
        type: "E",
        count,
        ...E,
      });
    }
    count++;
  });
  filterQueueList();
  console.log(JSON.parse(JSON.stringify(queueList)));
}
function filterQueueList() {
  queueList = queueList.filter((item) => item.length);
}
