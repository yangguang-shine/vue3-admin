export * from './common'
export * from './constant'
export * from './load'
export * from './message'
export * from './sessionStorage'

export const prePath = "/s";
export const rootUrl = window.location.href.substring(
  0,
  window.location.href.indexOf(prePath) + 1
);

export function delayAsync(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}




