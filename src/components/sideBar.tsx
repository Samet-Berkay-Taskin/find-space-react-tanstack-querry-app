import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { usePrefetchPopularPlaces } from '../queries/usePlaces';

const SideBar = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const pathname = location.pathname;

    const { prefetchPopularPlaces } = usePrefetchPopularPlaces();


    const handleMouseEnter = () => {
      prefetchPopularPlaces();
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/' ? 'bg-lime-100 text-gray-900' : '';
        }
        if (path === '/places') {
            return pathname.startsWith('/places') && !pathname.startsWith('/places/review') ? 'bg-lime-100 text-gray-900' : '';
        }
        if (path === '/places/review') {
            return pathname.startsWith('/places/review') ? 'bg-lime-100 text-gray-900' : '';
        }
        return pathname.startsWith(path) ? 'bg-lime-100 text-gray-900' : '';
    };

    return (
        <div className="flex h-screen">
            <div className="w-60 h-full p-3 space-y-2 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-center p-2 space-x-4">
                    <img
                        src="/src/assets/images/minion.png"
                        alt=""
                        className="w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">Mekancı</h2>
                        <span className="flex items-center space-x-1">
                            <a
                                rel="noopener noreferrer"
                                href="/profile"
                                className="text-xs hover:underline dark:text-gray-600"
                            >
                                Profil
                            </a>
                        </span>
                    </div>
                </div>
                <div className="divide-y dark:divide-gray-300">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className={`rounded-md transition-colors ${isActive('/')}`}>
                            <Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>Ana Sayfa</span>
                            </Link>
                        </li>
                        <li className={`rounded-md transition-colors ${isActive('/places')}`}>
                            <Link to="/places" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507Z"></path>
                                </svg>
                                <span>Bölge Detay</span>
                            </Link>
                        </li>
                        <li className={`rounded-md transition-colors ${isActive('/new')}`}>
                            <Link to="/new" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M240 256c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
                                    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 343.5c-53.8 53.8-141.3 53.8-195 0-53.8-53.8-53.8-141.3 0-195s141.3-53.8 195 0c53.7 53.7 53.7 141.3 0 195z" />
                                </svg>
                                <span>Yeni Bölge</span>
                            </Link>
                        </li>
                        <li className={`rounded-md transition-colors ${isActive('/places/review')}`}>
                            <Link to="/places/review" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                                <span>İnceleme Ekle</span>
                            </Link>
                        </li>
                        <li className={`rounded-md transition-colors ${isActive('/favorites')}`}>
                            <Link to="/favorites" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                <span>Favorilerim</span>
                            </Link>
                        </li>
                        <li className={`rounded-md transition-colors ${isActive('/place-list')}`}>
                            <Link to="/place-list" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                                </svg>
                                <span>Mekan Listesi</span>
                            </Link>
                        </li>
                        <li
              className={`rounded-md transition-colors ${isActive(
                "/popular-places"
              )}`}
            >
              <Link
                to="/popular-places"
                className="flex items-center p-2 space-x-3 rounded-md"
                onMouseEnter={handleMouseEnter}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 fill-current dark:text-gray-600"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>Popüler Mekanlar</span>
              </Link>
            </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 p-4">
                {children}
            </div>
        </div>
    );
};

export default SideBar;
