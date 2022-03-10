import { GlobalStyles } from './GlobalStyles';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PopularMovies from './components/PopularMovies';
import UpcomingMovies from './components/UpcomingMovies';
import TopRatedMovies from './components/TopRatedMovies';
import PopularTv from './components/PopularTv';
import TopRatedTv from './components/TopRatedTv';
import Trending from './components/Trending';
import Movie from './components/Movie';
import NavBar from './components/navBar/NavBar';
import Tv from './components/Tv';
import Search from './components/Search';
import PageNotFound from './components/PageNotFound';

import { useSearchFetch } from './hooks/useSearchFetch';
import Footer from './components/Footer/Footer';

function App() {
    const {
        searchState,
        searchLoading,
        searchError,
        searchTerm,
        setSearchTerm,
        setSearchLoadMore,
    } = useSearchFetch();

    return (
        <BrowserRouter>
            <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/PopularMovies' element={<PopularMovies />} />
                <Route path='/UpcomingMovies' element={<UpcomingMovies />} />
                <Route path='/TopRatedMovies' element={<TopRatedMovies />} />
                <Route path='/PopularTv' element={<PopularTv />} />
                <Route path='/TopRatedTv' element={<TopRatedTv />} />
                <Route path='/Trending' element={<Trending />} />
                <Route path='/movie/:movieId' element={<Movie />}></Route>
                <Route path='/tv/:tvId' element={<Tv />} />
                <Route
                    path='/results'
                    element={
                        searchTerm ? (
                            <Search
                                searchState={searchState}
                                searchLoading={searchLoading}
                                searchError={searchError}
                                setSearchLoadMore={setSearchLoadMore}
                            />
                        ) : (
                            <Navigate to='/' />
                        )
                    }
                />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
            <Footer />
            <GlobalStyles />
        </BrowserRouter>
    );
}

export default App;
