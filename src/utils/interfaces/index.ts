export interface Action {
  type: string
  payload: any
}

export interface State {
  myDict: DictState
}

export interface DictState {
  dictItemList: DictItem[]
}

export interface DictItem {
  word: string
  description: string
  example?: string
}