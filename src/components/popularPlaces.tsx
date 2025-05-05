import { IPlace } from '../interfaces';
import { usePopularPlaces } from '../queries/usePlaces';
import PlaceContainer from './placeContainer';

const PopularPlacesContent = () => {
    const { popularPlaces } = usePopularPlaces();
  
  
    if (!popularPlaces || popularPlaces.length === 0) {
      return <p className="text-gray-500">Henüz popüler mekan bulunmamaktadır.</p>;
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularPlaces.map((place: IPlace) => (
          <PlaceContainer key={place.id} place={place} />
        ))}
      </div>
    );
  };
  
  export default PopularPlacesContent;