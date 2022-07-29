export type SizeType = 'default' | 'large' | 'small'
export type ButtonType = 'info' | 'danger' | 'warning' | 'success' | 'ghost'
export type ModeType = 'normal' | 'text' | 'dashed'
export type ShapeType = 'rectangle' | 'circle' | 'round'
export type onClickType = (event: Event) => void | undefined

export interface Data {
  [key: string]: unknown
}
