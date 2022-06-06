export interface Action {
  type: string
  payload: any
}

export interface State {
  dictList: DictItem[]
}

export interface DictItem {
  word: string
  description: string
  example?: string
}