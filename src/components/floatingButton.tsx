import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface FloatingButtonProps {
  path: string
  children: ReactNode
}

export default function FloatingButton({path, children}: FloatingButtonProps) {
  return (
    <Link to={path}>
      <div className="fixed md:static bottom-6 right-6 w-12 h-12 rounded-full bg-purple-400 flex justify-center items-center shadow-md">
        {children}
      </div>
    </Link>
  )
}