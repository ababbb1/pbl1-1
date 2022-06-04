import DictDetailItem from "./dictDetailItem"
import { DictItem } from "../utils/interfaces"

interface DictListItemProps {
  dictItem: DictItem
}

export default function DictListItem({dictItem}: DictListItemProps) {
  return (
    <div className="w-full p-4 flex flex-col gap-3 border rounded-md bg-gray-50">
      <DictDetailItem {...{label: "", content: dictItem.word, textStyle: "text-2xl text-gray-800 font-bold"}} />
      <DictDetailItem {...{label: "설명", content: dictItem.description, textStyle: "text-gray-800 break-words whitespace-pre-wrap"}} />
      {dictItem.example ?
        <DictDetailItem {...{label: "예시", content: dictItem.example, textStyle: "text-blue-400 break-words whitespace-pre-wrap"}} /> : null}
    </div>
  )
}