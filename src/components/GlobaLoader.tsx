import { useLoadingStore } from '@/stores/LoadingStore'

export const GlobalLoader = () => {
  const isLoading = useLoadingStore((state) => state.isLoading)

  if (!isLoading) return null

  return (
    <div className="font-gothic fixed inset-0 z-50 flex items-center justify-center bg-dark-primary/80 text-light-primary">
    <div className="relative flex flex-row border-2 border-light-primary w-100 text-center items-center justify-start">
      <div className="flex gap-1.5  justify-start px-2 py-2">
        <div className="w-4 h-8 bg-light-primary animate-block-fade" style={{ animationDelay: '0ms' }} />
        <div className="w-4 h-8 bg-light-primary animate-block-fade" style={{ animationDelay: '200ms' }} />
        <div className="w-4 h-8 bg-light-primary animate-block-fade" style={{ animationDelay: '400ms' }} />
        <div className="w-4 h-8 bg-light-primary animate-block-fade" style={{ animationDelay: '600ms' }} />
        <div className="w-4 h-8 bg-light-primary animate-block-fade" style={{ animationDelay: '800ms' }} />
        <div className="w-4 h-8 bg-light-primary animate-block-fade" style={{ animationDelay: '1000ms' }} />
      </div>
      <div className="absolute w-full flex justify-center text-center text-base tracking-wider">
        <h1>Loading ...</h1>
        </div>
    </div>
  </div>
  )
}