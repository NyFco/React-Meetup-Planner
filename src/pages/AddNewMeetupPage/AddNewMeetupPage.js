import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AddNewMeetupPage.module.css";

const AddNewMeetupPage = (props) => {
  const titleInputRef = useRef();
  const photoUrlInputRef = useRef();
  const descriptionInputRef = useRef();

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      photoUrl: photoUrlInputRef.current.value,
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      isSet: false,
      isFav: false,
    };

    photoUrlInputRef.current.value = "";
    titleInputRef.current.value = "";
    descriptionInputRef.current.value = "";

    fetch(
      "https://react-getting-started-9b01b-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
      props.onAdd();
    });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.formContainer}>
        <span className={classes.titleContainer}>
          <h1 className={classes.title}>Add a new meetup</h1>
        </span>
        <form className={classes.subContainer} onSubmit={submitHandler}>
          <input
            type="text"
            required
            className={classes.textInput}
            placeholder="Title"
            ref={titleInputRef}
          />
          <input
            type="text"
            required
            className={classes.textInput}
            placeholder="photoUrl"
            ref={photoUrlInputRef}
          />
          <textarea
            className={classes.description}
            rows="5"
            placeholder="Description"
            ref={descriptionInputRef}
          />
          <button className={classes.btn}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewMeetupPage;
