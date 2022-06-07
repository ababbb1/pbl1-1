import { DictItem } from "../utils/interfaces";

export function fetchInitState() {
  return new Promise<DictItem[]>(resolve => {
    fetch("/dictionary.json")
      .then(res => {
        const data = res.json()
        console.log(data)
        return data
      })
      .then(data => resolve(data))
  })
}