const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-ocean-200 border-t-ocean-600 rounded-full animate-spin"></div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
