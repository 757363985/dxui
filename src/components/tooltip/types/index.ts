export interface Data {
  [key: string]: unknown,
  visible?: boolean | null,
  trigger?: 'hover' | 'click',
  title?: string
}
