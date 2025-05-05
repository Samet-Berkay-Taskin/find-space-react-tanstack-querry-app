import { Routes, Route } from "react-router";
import Home from '../pages/home';

import Layout from "../layout";

import NewPlace from '../pages/newPlace';
import AddReview from '../pages/addReview';
import PlaceDetail from "../pages/placeDetail";
import Profile from "../pages/profile";
import FavoritePage from "../pages/FavoritePage";
import PlacesList from "../pages/placeList";
import PopularPlaces from "../pages/popularPlaces";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/places" element={<PlaceDetail />} />
        <Route path="/places/:placeId" element={<PlaceDetail />} />
        <Route path="/new" element={<NewPlace />} />
        <Route path="/places/review" element={<AddReview />} />
        <Route path="/places/review/:placeId" element={<AddReview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/place-list" element={<PlacesList />} />
        <Route path="/popular-places" element={<PopularPlaces />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
