import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredname] = useState("");
  const [enteredNameTouched, setInputIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim().includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const onBlurHandler = () => {
    setInputIsTouched(true);
  };
  const onEmailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setInputIsTouched(true);

    setEmailIsTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    setEnteredname("");
    setInputIsTouched(false);
    setEnteredEmail("");
    setEmailIsTouched(false);
  };

  const onKeystrokeHandler = (event) => {
    setEnteredname(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={onKeystrokeHandler}
          onBlur={onBlurHandler}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && <p>Give a valid name!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          onChange={emailInputHandler}
          onBlur={onEmailBlurHandler}
          type="email"
          id="email"
        />
        {emailInputIsInvalid && <p>Give a valid email!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
