import FloatingButton from "./floatingButton"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface DictTemplateProps {
  content: ReactNode
  title: string
  isHome?: boolean
}

export default function DictTemplate({title, content, isHome}: DictTemplateProps) {
  return (
    <div className='bg-white w-full max-w-3xl rounded-sm flex flex-col gap-4 min-h-screen md:rounded-md md:min-h-[95vh] md:max-h-[95vh] md:overflow-auto scrollbar-hide'>

      <div className="fixed md:max-w-3xl w-full h-16 flex justify-center items-center bg-purple-400 shadow-md md:rounded-t-md">
        <div className="absolute left-4">
          {!isHome ?
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
            </Link> : null}
        </div>
        <span className="text-xl text-white font-semibold">{title}</span>
      </div>

      <div className="mt-20 mb-10 w-full px-[5vw] sm:px-20 lg:px-28">
        {content}
      </div>

      <div className="md:fixed md:bottom-[5vh] md:left-0 md:w-full md:flex md:justify-center">
        <div className="md:w-full md:max-w-3xl md:flex md:justify-end md:px-6">
          {isHome ?
            <FloatingButton path="/write">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </FloatingButton> : null}
        </div>
      </div>

    </div>
  )
}