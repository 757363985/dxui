export interface Data {
  [key: string]: unknown
}

export interface Option {
  label: string
  value: string
  disabled?: boolean
}

export type CheckedValue = string[]
