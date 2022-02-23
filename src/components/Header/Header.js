import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.links}>
        All meetups
      </Link>
      <Link to="/Favorites" className={classes.links}>
        Favorites
      </Link>
      <Link to="/Scheduled" className={classes.links}>
        Scheduled
      </Link>
      <Link to="/AddNewMeetup" className={classes.links}>
        Add new meetup
      </Link>
      <div />
      <div />
      <div />
      <div />
    </header>
  );
};

export default Header;
