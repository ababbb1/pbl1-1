import { DictItem, Action, DictState } from "../../utils/interfaces"

const INIT = "myDict/INIT"
const LOAD = "myDict/LOAD"
const CREATE = "myDict/CREATE"

let initState: DictState = {
  dictItemList: []
}

export const initDictState = () => async (dispatch: any) => {
  const url = "https://0136b733-9a7f-4570-a12a-f768abca8002.mock.pstmn.io/load"
  const data = await fetch(url).then(res => res.json())

  dispatch({ type: INIT, payload: data })
}

export const loadDictItem = (dict: DictItem): Action => {
  return {type: LOAD, payload: dict}
}

export const createDictItem = (dict: DictItem): Action => {
  return {type: CREATE, payload: dict}
}

export default function reducer(state: DictState = initState, action: Action) {
  switch (action.type) {
    case INIT:
      return { dictItemList: action.payload }
    case LOAD:
      return state;
    case CREATE:
      const newList = [...state.dictItemList, action.payload]
      return { dictItemList: newList }
    default:
      return state
  }
}