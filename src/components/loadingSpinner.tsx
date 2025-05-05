const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-4 border-lime-300 opacity-30"></div>
        <div className="animate-spin rounded-full h-14 w-14 border-4 border-lime-500 border-t-transparent shadow-md"></div>
      </div>
    </div>
  );

export default LoadingSpinner;