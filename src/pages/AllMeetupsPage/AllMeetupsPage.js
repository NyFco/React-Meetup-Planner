import classes from "./AllMeetupsPage.module.css";

import Meetups from "../../components/Meetups/Meetups";

const AllMeetupsPage = (props) => {
  return (
    <div className={classes.container}>
      <Meetups
        meetups={props.meetups}
        mode="All"
        onFav={props.onFav}
        onSet={props.onSet}
      />
    </div>
  );
};

export default AllMeetupsPage;
