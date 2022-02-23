import classes from "./Meetup.module.css";

const Meetup = (props) => {
  return (
    <div className={classes.meetup}>
      <img
        className={classes.pic}
        src={props.meetup.photoUrl}
        alt={props.meetup.title}
      />
      <h2 className={classes.title}>{props.meetup.title}</h2>
      <p className={classes.description}>{props.meetup.description}</p>
      <div className={classes.btns}>
        <button
          className={classes.btn}
          onClick={() => {
            props.onFav(props.meetup);
          }}
        >
          {props.meetup.isFav ? "Remove" : "Add to favorites"}
        </button>
        <button
          className={classes.btn}
          onClick={() => {
            props.onSch(props.meetup);
          }}
        >
          {props.meetup.isSet ? "Unset" : "Set schedule"}
        </button>
      </div>
    </div>
  );
};

export default Meetup;
