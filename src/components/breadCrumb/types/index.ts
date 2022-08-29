export interface Data {
  [key: string]: any
}

export interface ItemData {
  [key: string]: unknown
  className: string
  config: ConfigPathItemType
}

export type ConfigPathItemType = {
  text: string
  path: string
  query?: object
  replace?: boolean
  onClick?: () => void
}

export type ConfigPathType = ConfigPathItemType[]

export type ConfigNameItemType = {
  text: string
  name: string
  params?: object
  replace?: boolean
  onClick?: () => void
}

export type ConfigNameType = ConfigNameItemType[]

export type ConfigItemType = ConfigPathItemType | ConfigNameItemType

export type ConfigType = ConfigPathType | ConfigNameType