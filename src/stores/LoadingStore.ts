import { create } from 'zustand'

type LoadingState = {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
}))
