import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import "./Home.css";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import { calendarClear, star, flame } from "ionicons/icons";
import MoviesLayout from "../components/MoviesLayout";
import MovieCard from "../components/MovieCard";
import { MovieType } from "../types/movie";
import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../lib/server";
import { IMG_ORIGIN } from "../lib/constants";

const Home: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<MovieType[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data.results);
    });
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data.results);
    });
    getUpcomingMovies().then((data) => {
      setUpcomingMovies(data.results);
    });
  }, []);

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/popular" />
          <Route
            path="/popular"
            render={() => (
              <MoviesLayout title="Popular Movies">
                {popularMovies.map((e, i) => (
                  <MovieCard
                    key={i}
                    title={e.title}
                    src={IMG_ORIGIN + e.poster_path}
                    subtitle={e.original_title}
                  />
                ))}
              </MoviesLayout>
            )}
            exact={true}
          />
          <Route
            path="/toprated"
            render={() => (
              <MoviesLayout title="Top Rated Movies">
                {topRatedMovies.map((e, i) => (
                  <MovieCard
                    key={i}
                    title={e.title}
                    src={IMG_ORIGIN + e.poster_path}
                    subtitle={e.original_title}
                  />
                ))}
              </MoviesLayout>
            )}
            exact={true}
          />
          <Route
            path="/upcoming"
            render={() => (
              <MoviesLayout title="Upcoming Movies">
                {upcomingMovies.map((e, i) => (
                  <MovieCard
                    key={i}
                    title={e.title}
                    src={IMG_ORIGIN + e.poster_path}
                    subtitle={e.original_title}
                  />
                ))}
              </MoviesLayout>
            )}
            exact={true}
          />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="popular" href="/popular">
            <IonIcon icon={flame} />
            <IonLabel>Popular</IonLabel>
          </IonTabButton>

          <IonTabButton tab="toprated" href="/toprated">
            <IonIcon icon={star} />
            <IonLabel>Top Rated</IonLabel>
          </IonTabButton>

          <IonTabButton tab="upcoming" href="/upcoming">
            <IonIcon icon={calendarClear} />
            <IonLabel>Upcoming</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
