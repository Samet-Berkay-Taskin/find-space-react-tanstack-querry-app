const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
    <div className="p-4 text-red-500 bg-red-50 rounded-lg">
      <p className="font-medium">Bir hata oluştu: {error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        className="mt-2 px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600"
      >
        Tekrar Dene
      </button>
    </div>
  );

export default ErrorFallback;