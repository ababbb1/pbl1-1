import DictListItem from "./dictListItem"
import { DictItem } from "../utils/interfaces"
import { useAppSelector } from "../redux/hooks"
import { selectDict } from "../redux/dictReducer"

export default function DictList() {
  const dictList = useAppSelector(selectDict)

  return (
    <div className="flex flex-col items-center gap-6">
      {dictList?.map((dictItem: DictItem) => (
        <DictListItem {...{ key: dictItem.word, dictItem }} />
      ))}
    </div>
  )
}