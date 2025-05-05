import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQueries
} from '@tanstack/react-query';

import {
  addCommentToPlace,
  createPlace,
  getPaginatedPlaces,
  getPlace,
  getPlaces,
  getPopularPlaces,
  toggleFavoriteRequest
} from '../services/mockService';

import { IPlace } from '../interfaces';

export const usePlaces = () => {
  return useQuery({
    queryKey: ['places'],
    queryFn: getPlaces,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePlace = (placeId: string) => {
  return useQuery({
    queryKey: ['place', placeId],
    queryFn: () => getPlace(placeId),
    enabled: !!placeId,  // undefined gelirse çalışmasın sorgu
    staleTime: 1000 * 60 * 5
  });
};

export const useCreatePlace = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places'] });
    },
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ placeId, review }: { placeId: string; review: string }) =>
      addCommentToPlace(placeId, review),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['place', variables.placeId] });
    },
  });
};

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ placeId, isFavorite }: { placeId: string; isFavorite: boolean }) =>
      toggleFavoriteRequest(placeId, isFavorite),

    onMutate: async ({ placeId, isFavorite }) => { // optimistik update yapılan yer mutasyon başlamadan önce çalışır ve cachedeki önceki değeri iptal edip yeni cache oluşturup yeni veriyi eskisine ekler
      await queryClient.cancelQueries(['places']);

      const previousPlaces = queryClient.getQueryData<any[]>(['places']);

      queryClient.setQueryData(['places'], (old: IPlace[]) =>
        old?.map((place: IPlace) =>
          place.id === placeId ? { ...place, isFavorite } : place
        )
      );

      return { previousPlaces }; // error durumunda geri dönmek için eski cache'yi gönderiyoruz ediyoruz
    },

    onError: (_error, _variables, context) => { // Eğer istek başarısız olursa cache'yi eski haline getiriyoruz (rollback)
      if (context?.previousPlaces) {
        queryClient.setQueryData(['places'], context.previousPlaces); 
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries(['places']);
      queryClient.invalidateQueries(['places', 'infinite']);
    },
  });
};

export const useInfinitePlaces = () => {
  return useInfiniteQuery<IPlace[], Error>({
    queryKey: ['places', 'infinite'], // qery key'i değiştirdik çünkü üstteki usePlaces ile çakışmasştı
    queryFn: ({ pageParam= 1 }) => getPaginatedPlaces(pageParam),
    initialPageParam: 1, // başlangıçta 1. sayfayı yükler
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage: IPlace[], allPages: IPlace[][]) => {
      if (!lastPage || lastPage.length === 0) return undefined; // eüğer veri yoksa, son sayfadır
      return allPages.length + 1; // bir sonraki sayfa numarası
    },
  });
};



export const usePrefetchPopularPlaces = () => {
  const queryClient = useQueryClient();

  const prefetchPopularPlaces = async () => {
    await queryClient.prefetchQuery({
      queryKey: ["popularPlaces"],
      queryFn: getPopularPlaces,
      staleTime: 1000 * 60 * 5, // 5 dakika
    });
  };

  return { prefetchPopularPlaces };
};


export const usePopularPlaces = () => {
  const [{ data: popularPlaces }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['popularPlaces'],
        queryFn: getPopularPlaces,
        staleTime: 1000 * 60 * 5, // 5 dakika boyunca bayat sayma
      }
    ]
  });

  return { popularPlaces };
};