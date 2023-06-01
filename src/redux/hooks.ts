import type { RootStateType, AppDispatch } from "@/redux/store"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// To avoid typescript warnings!
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
