import React, { useEffect } from 'react'
import './App.css'
import { GlobalStyles } from 'twin.macro'
import { Editor } from 'components/molecules'
import { useStore } from 'store'
import { dailyNoteDate } from 'helpers'

function App() {
  const createBlock = useStore((s) => s.createBlock)
  async function handleClick(e: any) {
    const res = await createBlock('hello', dailyNoteDate())
    console.log('res :>> ', res)
  }

  return (
    <>
      <GlobalStyles />
      <button onClick={handleClick}>create</button>
      <div tw="px-10 py-5">
        <Editor />
      </div>
    </>
  )
}

export default App
