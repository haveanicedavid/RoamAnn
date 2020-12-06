import tw, { styled } from 'twin.macro'

export const EditorStyles = styled.div`
  & {
    h1 {
      ${tw`text-3xl`}
    }
    h2 {
      ${tw`text-2xl`}
    }
    h3 {
      ${tw`text-xl`}
    }
    a {
      ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
    }
    ul {
      ${tw`list-disc`}
    }
    ol {
      ${tw`list-decimal`}
    }
  }
`
