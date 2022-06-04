import DictListItem from "./dictListItem"
import { useSelector, useDispatch } from "react-redux"
import { State, DictItem } from "../utils/interfaces"

export default function DictList() {
  const dictList = useSelector((state: State): DictItem[] => state.myDict.dictItemList)

  return (
    <div className="flex flex-col items-center gap-6">
      {dictList ? dictList.map((dictItem: DictItem) => (
        <DictListItem {...{ key: dictItem.word, dictItem }} />
      )) : null}
    </div>
  )
}