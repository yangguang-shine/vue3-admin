export type TypeI = "A" | "B" | "C" | "D" | "E";
export interface ItemI  {
  finish: number,
  free: number
}
export type QueueItemI  = {
  type: TypeI,
  count: number
} & ItemI;
export const A: ItemI = {
  finish: 10,
  free: 8
}
export const B: ItemI = {
  finish: 8,
  free: 6
}
export const C: ItemI = {
  finish: 6,
  free: 4
}
export const D: ItemI = {
  finish: 4,
  free: 2
}
export const E: ItemI = {
  finish: 2,
  free: 0
}