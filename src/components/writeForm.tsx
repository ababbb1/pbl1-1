import { useForm, FieldErrors } from "react-hook-form"
import { createDictItem } from "../redux/modules/myDict"
import { cls } from "../utils/fxs/className"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { DictItem } from "../../src/utils/interfaces"

interface WriteForm extends DictItem {
  errors?: string //전역에러
}

export default function WriteForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DictItem>({
    mode: "onSubmit"
  })

  const onValid = (data: WriteForm) => {
    const {word, description, example = ""} = data
    dispatch(createDictItem({word, description, example}))
    navigate("/")
  }
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors)
  }
  const wordCheck = (value: string) =>
    !(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(value)) || "단어에 특수문자는 포함될 수 없습니다."

  const borderStyle = (type: "word" | "description" | "example"): string =>
    cls(errors[type]?.message ?
        "border-2 border-red-400 focus:outline-red-400" : "border border-gray-400 focus:outline-purple-400", "rounded-md")

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="py-10 md:px-10 flex flex-col gap-6">

      <div className="w-full flex flex-col gap-2">
        <span className="ml-1">단어</span>
        <input
          {...register("word", {
            required: "단어를 입력해주세요.",
            validate: {
              notSpecialChars: wordCheck
            }
          })}
          type="text"
          className={cls(borderStyle("word"), "h-10", "text-xl", "px-2")}
        />
        <span className="text-sm text-gray-700 ml-1">{errors.word?.message}</span>
      </div>

      <div className="w-full flex flex-col gap-2">
        <span className="ml-1">설명</span>
        <textarea
          {...register("description", {
            required: "단어의 뜻을 입력해주세요."
          })}
          className={cls(borderStyle("description"), "h-36", "resize-none", "p-2")}
        />
        <span className="text-sm text-gray-700 ml-1">{errors.description?.message}</span>
      </div>

      <div className="w-full flex flex-col gap-2">
        <span className="ml-1">예시</span>
        <textarea
          {...register("example")}
          className={cls(borderStyle("example"), "h-36", "resize-none", "p-2")} />
      </div>

      <button type="submit" className="w-full h-10 bg-purple-400 text-white rounded-md">등록</button>
    </form>
  )
}