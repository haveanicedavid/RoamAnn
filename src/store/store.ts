import create from 'zustand'
import axios from 'axios'
import { createBlockQuery } from './queries'

const API_URL =
  'https://4c67k7zc26.execute-api.us-west-2.amazonaws.com/v1/alphaAPI'
const API_KEY = 'AfjmYgauMw4DWV2FL7oa32ZsoB9TbogY87gEYWbT'
const API_TOKEN =
  'wjUMf1j7zc1j8nPC1EEgoSD4E-9XhRoFPDyc7fVomU1Dugftt0JddmUKFC6PhA77'
// const CORS_PROXY = 'https://cors-proxy.htmldriven.com/?url='
// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

const post = axios.create({
  baseURL: API_URL,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
    'x-api-token': API_TOKEN,
    'Access-Control-Allow-Origin': '*',
  },
})

type StoreState = {
  pages: any
  createBlock: (str: string, parentId: string) => Promise<any>
}

export const useStore = create<StoreState>((set) => ({
  pages: {},
  createBlock: async (str, parentId) => {
    try {
      const res = await post('', { data: createBlockQuery(str, parentId) })
      // const res = await axios.post(
      //   '',
      //   `{:action     "create-block" \
      //     :graph-name "interhackt" \
      //     :location   {:parent-uid "${parentId}" \
      //                 :order       0} \
      //     :block      {:string "${str}"}}`
      // )
      return res
    } catch (err) {
      console.error('err :>> ', err)
    }
  },
  fetchIssueCount: async () => {
    console.log('TODO :>> ')
  },
}))
