import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { DictItem } from "../utils/interfaces"
import { RootState } from "./createStore"
import { fetchInitState } from "./dictAPI"

export interface DictState {
  dictList: DictItem[]
}

export const initialState: DictState = {
  dictList: [{word: "hi", description: "hi", example: "hi"}]
}

export const dictSlice = createSlice({
  name: "dict",
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<DictItem>) => {
      state.dictList = [...state.dictList, action.payload]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initializeState.fulfilled, (state, action) => {
      state.dictList = action.payload
    })
  }
})

export const initializeState = createAsyncThunk(
  "dict/initState",
  async () => {
    return await fetchInitState()
 }
)

export const { addWord } = dictSlice.actions
export const selectDict = (state: RootState) => state.dictList
export default dictSlice.reducer