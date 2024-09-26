import { LogOutButton } from "../logout-button/logout-button";
import { useAppSelector } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import style from "./main-info.module.scss";

export const MainInfo = () => {
  const navigate = useNavigate();
  const login = useAppSelector((state) => state.user.email);
  useEffect(() => {
    if (login === "") {
      navigate("/auth");
    }
  }, [login, navigate]);

  return (
    <div className={style.main}>
      <h1 className={style.main__title}>
        Добро пожаловать, <span className={style.main__title_span}>{login}</span>
      </h1>
      <LogOutButton />
    </div>
  );
};
