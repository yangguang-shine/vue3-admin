export type PositionCssI = 'absolute' | 'relative' | 'fixed'
export interface PositionI {
  width: number,
  height: number,
  top: number,
  left?: number,
  right?: number,
  bottom?: number,
  zIndex?: number,
}

export interface PositionConfigI {
  [index: string]: PositionI
}
export interface PositionPXI {
  position: PositionCssI
  width: string,
  height: string,
  top: string | 0,
  left?: string | 0 ,
  right?: string | 0,
  bottom?: string | 0,
  zIndex: number,
}
export interface ObjectI<T = any> {
  [index: string]: T
}

export type WindowTypeI = "headerWindow" |"defaultWindow" | "popWindow" | "secondWindow"
// export type DirPathI = 
export type ControlStringI = 'close' | 'fullScreen'
export type WindowSideI = "top" | "left" | "right" | ''


