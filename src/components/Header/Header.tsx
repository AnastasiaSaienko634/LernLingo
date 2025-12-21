import css from "./Header.module.css";
import { MdOutlineExitToApp } from "react-icons/md";
import logoIcon from "../../../public/logo.svg";

const Header = () => {
  return (
    <nav className={css.header}>
      {/* Логотип */}
      <a href="" className={css.logoLink}>
        <img
          src={logoIcon}
          alt=""
          width={28}
          height={28}
          className={css.logoIcon}
        />
        LearnLingo
      </a>

      {/* Список зі сторінками */}
      <ul className={css.pages}>
        <li>
          <a href="" className={css.link}>
            Home
          </a>
        </li>
        <li>
          <a href="" className={css.link}>
            Teachers
          </a>
        </li>
      </ul>

      {/* Авторизація */}
      <ul className={css.authorization}>
        <li>
          <a href="" className={css.loginLink}>
            <MdOutlineExitToApp className={css.loginIcon} />
            Log in
          </a>
        </li>
        <li>
          <a href="" className={css.registrationLink}>
            Registration
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
