import { DictItem } from "../utils/interfaces";

export function fetchInitState() {
  return new Promise<DictItem[]>(resolve => {
    fetch("https://0136b733-9a7f-4570-a12a-f768abca8002.mock.pstmn.io/load")
      .then(res => resolve(res.json()))
  })
}