import React from 'react'
import RMDEditor from 'rich-markdown-editor'
import { EditorStyles } from './Editor.styles'

type Props = {}
export const Editor: React.FC<Props> = (props) => {
  function handleChange(val: () => string) {
    const text = val()
    console.log('text :>> ', text)
  }

  return (
    <EditorStyles>
      <RMDEditor onChange={handleChange} />
    </EditorStyles>
  )
}
