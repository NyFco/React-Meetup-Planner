import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import AllMeetupsPage from "./pages/AllMeetupsPage/AllMeetupsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ScheduledPage from "./pages/ScheduledPage/ScheduledPage";
import AddNewMeetupPage from "./pages/AddNewMeetupPage/AddNewMeetupPage";

function App() {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageReloader, setPageReloader] = useState(true);

  useEffect(() => {
    fetch(
      "https://react-getting-started-9b01b-default-rtdb.firebaseio.com/data.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        meetupsInit(Object.values(data));
      });
  }, [pageReloader]);

  const meetupsInit = (meetupsArr) => {
    let temp = [];
    meetupsArr.forEach((el) => {
      temp.push(el);
    });
    setMeetups(temp);
  };

  const favoriteBtnHandler = (meetup) => {
    const idx = meetups.indexOf(meetup);
    let temp = [...meetups];
    temp[idx].isFav = !temp[idx].isFav;
    setMeetups(temp);
  };

  const scheduleBtnHandler = (meetup) => {
    const idx = meetups.indexOf(meetup);
    let temp = [...meetups];
    temp[idx].isSet = !temp[idx].isSet;
    setMeetups(temp);
  };

  const addNewMeetupHandler = () => {
    setPageReloader(!pageReloader);
  };

  return (
    <div className="root">
      <Header />
      {isLoading ? (
        <div className="loaderSpinner" />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <AllMeetupsPage
                meetups={meetups}
                onFav={favoriteBtnHandler}
                onSet={scheduleBtnHandler}
              />
            }
          />
          <Route
            path="/Favorites"
            element={
              <FavoritesPage
                meetups={meetups}
                onFav={favoriteBtnHandler}
                onSet={scheduleBtnHandler}
              />
            }
          />
          <Route
            path="/Scheduled"
            element={
              <ScheduledPage
                meetups={meetups}
                onFav={favoriteBtnHandler}
                onSet={scheduleBtnHandler}
              />
            }
          />
          <Route
            path="/AddNewMeetup"
            element={<AddNewMeetupPage onAdd={addNewMeetupHandler} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
