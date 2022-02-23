import classes from "./Meetups.module.css";

import Meetup from "../Meetup/Meetup";

const Meetups = (props) => {
  return (
    <div className={classes.container}>
      {props.mode === "All" &&
        props.meetups.map((meetup, idx) => {
          return (
            <Meetup
              meetup={meetup}
              onFav={props.onFav}
              onSch={props.onSet}
              key={idx}
            />
          );
        })}
      {props.mode === "Fav" &&
        props.meetups.map((meetup, idx) => {
          if (meetup.isFav)
            return (
              <Meetup
                meetup={meetup}
                onFav={props.onFav}
                onSch={props.onSet}
                key={idx}
              />
            );
          return;
        })}
      {props.mode === "Sch" &&
        props.meetups.map((meetup, idx) => {
          if (meetup.isSet)
            return (
              <Meetup
                meetup={meetup}
                onFav={props.onFav}
                onSch={props.onSet}
                key={idx}
              />
            );
          return;
        })}
    </div>
  );
};

export default Meetups;
