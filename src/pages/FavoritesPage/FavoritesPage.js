import classes from "./FavoritesPage.module.css";

import Meetups from "../../components/Meetups/Meetups";

const FavoritesPage = (props) => {
  return (
    <div className={classes.container}>
      <Meetups
        meetups={props.meetups}
        mode="Fav"
        onFav={props.onFav}
        onSet={props.onSet}
      />
    </div>
  );
};

export default FavoritesPage;
