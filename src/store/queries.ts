export const createBlockQuery = (str: string, parentId: string) =>
  `{:action     "create-block" 
    :graph-name "interhackt" 
    :location   {:parent-uid "${parentId}" 
                :order       0} 
    :block      {:string "${str}"}}`

// const t = (str: string, parentId: string) =>
//   '{:action     "create-block" \
//     :graph-name "interhackt" \
//     :location   {:parent-uid "12-05-2020" \
//                 :order      0} \
//     :block      {:string "Mondays are cool!"}}'
