import { IPlace } from "../interfaces";

const PlaceContainer = ({ place }: { place: IPlace }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
        <p className="text-gray-600 mb-4">{place.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <span className="mr-2">⭐ Favori</span>
            <span className="mr-2">💬 {place.comments?.length || 0}</span>
          </div>
          <div className="text-xs text-gray-400">
            {place.lat.toFixed(4)}, {place.lng.toFixed(4)}
          </div>
        </div>
      </div>
    </div>
  );

export default PlaceContainer;