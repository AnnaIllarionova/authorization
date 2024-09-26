import { Field, Form, Formik } from "formik";
import style from "./auth-form.module.scss";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../../types/types";
import { useDispatch } from "react-redux";
import { setLogin, setPassword } from "../../store/slices/user-slice";

export const AuthForm = () => {
  const dispatch = useDispatch();
  const initialValues: FormValues = { email: "", password: "" };
  const validateEmail = (value: string) => {
    if (!value) {
      return "Это поле должно быть заполнено";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Email введен неккоректно";
    }
  };
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1 className={style.box__title}>Зарегистрируйтесь в приложении</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
              dispatch(setLogin({ login: values.email }));
              dispatch(setPassword({ password: values.password }));
              setSubmitting(false);
              navigate("/");
            }, 3000);
          }}
        >
          {({ errors, touched, isSubmitting }) => {
            return (
              <Form className={style.box__form}>
                <div className={style.box__form_info}>
                  <label htmlFor="email" className={style.box__form_label}>
                    Email
                  </label>
                  <Field
                    className={style.box__form_input}
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Введите свой email"
                    validate={validateEmail}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.email && touched.email && (
                    <p className={style.box__form_error}>{errors.email}</p>
                  )}
                </div>
                <div className={style.box__form_info}>
                  <label htmlFor="password" className={style.box__form_label}>
                    Пароль
                  </label>
                  <Field
                    className={style.box__form_input}
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Введите свой пароль"
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    !isSubmitting
                      ? style.box__form_button
                      : `${style.box__form_button} ${style.box__form_button_disabled}`
                  }
                >
                  {!isSubmitting ? "Войти" : "Подождите..."}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
