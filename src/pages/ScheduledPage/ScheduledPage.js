import classes from "./ScheduledPage.module.css";

import Meetups from "../../components/Meetups/Meetups";

const ScheduledPage = (props) => {
  return (
    <div className={classes.container}>
      <Meetups
        meetups={props.meetups}
        mode="Sch"
        onFav={props.onFav}
        onSet={props.onSet}
      />
    </div>
  );
};

export default ScheduledPage;
