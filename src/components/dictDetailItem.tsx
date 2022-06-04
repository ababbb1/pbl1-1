interface DictDetailItemProps {
  label: string
  content: string
  textStyle?: string
}

export default function DictDetailItem({label, content, textStyle}: DictDetailItemProps) {
  return (
    <div>
      <span className="text-sm font-semibold">{label}</span>
      <pre className={textStyle || ""}>{content}</pre>
    </div>
  )
}