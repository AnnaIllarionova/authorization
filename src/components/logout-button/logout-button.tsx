import { useNavigate } from "react-router-dom";
import style from "./logout-button.module.scss";
import { useDispatch } from "react-redux";
import { setLogin, setPassword } from "../../store/slices/user-slice";

export const LogOutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setLogin({ login: "" }));
    dispatch(setPassword({ password: "" }));
    navigate("/auth");
  };
  return (
    <button className={style.logout} onClick={logOut}>
      Выйти
    </button>
  );
};
