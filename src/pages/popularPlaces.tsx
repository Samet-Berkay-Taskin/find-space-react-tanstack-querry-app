import  { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingSpinner from '../components/loadingSpinner';
import ErrorFallback from '../components/errorFallback';
import PopularPlacesContent from '../components/popularPlaces';


// Main component with view toggle
const PopularPlaces = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Popüler Mekanlar</h1>
      </div>
      
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense fallback={<LoadingSpinner />}>
          <PopularPlacesContent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default PopularPlaces;