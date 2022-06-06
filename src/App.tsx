import DictTemplate from "./components/dictTemplate"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DictList from "./components/dictList";
import WriteForm from "./components/writeForm";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { initializeState } from "./redux/dictReducer";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeState())
  }, [])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='bg-slate-200 w-full min-h-screen flex justify-center items-center'>
        <Routes>
          <Route path="/" element={<DictTemplate {...{title:"My Dictionary", content: <DictList />, isHome: true}} />} />
          <Route path="/write" element={<DictTemplate {...{title: "단어 추가", content: <WriteForm />}} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App;
