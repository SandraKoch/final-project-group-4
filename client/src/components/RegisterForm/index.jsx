import { useDispatch } from "react-redux";
import css from "./Register.module.css";
import { register } from "../../redux/auth/operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    console.log({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div className={css.container}>
      <img
        className={css.image}
        alt="A person using yummy mobile app"
        src="https://github.com/SandraKoch/final-project-group-4/blob/main/client/src/images/backgrounds/registration-image-desktop.png?raw=true"
      />
      <div className={css.formwrap}>
        <h3 className={css.formlabel}>Registration</h3>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            <input
              className={css.input}
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              label="Name"
              placeholder="Name"
            />
          </label>
          <label className={css.label}>
            <input
              className={css.input}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
            />
          </label>
          <label className={css.label}>
            <input
              className={css.input}
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder="Password"
            />
          </label>
          <button className={css.submitbutton} type="submit">
            Sign up
          </button>
        </form>
      </div>
      <img
        className={css.backgroundimage}
        alt=""
        src="https://github.com/SandraKoch/final-project-group-4/blob/main/client/src/images/backgrounds/registration-background-desktop.png?raw=true"
      />
    </div>
  );
};
