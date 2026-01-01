import css from "./Header.module.css";
import { MdOutlineExitToApp } from "react-icons/md";
import logoIcon from "../../../public/logo.svg";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>();
  const [isOpenLogIn, setIsOpenLogIn] = useState<boolean>();
  const [isOpenRegister, setIsOpenMenuRegister] = useState<boolean>();

  const toggelMenu = () => setIsOpenMenu(!isOpenMenu);
  const toggelLogInMenu = () => setIsOpenLogIn(!isOpenLogIn);
  const toggelRegister = () => setIsOpenMenuRegister(!isOpenRegister);

  return (
    <>
      <nav className={css.containerDekstop}>
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
            <button
              type="button"
              onClick={toggelLogInMenu}
              className={css.loginLink}
            >
              <MdOutlineExitToApp className={css.loginIcon} />
              Log in
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={toggelRegister}
              className={css.registrationLink}
            >
              Registration
            </button>
          </li>
        </ul>
      </nav>
      <nav className={css.containerPhone}>
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

        {isOpenMenu ? (
          <>
            <div className={css.navigation}>
              <div className={css.headerPhone}>
                {/* Logo */}
                <a href="" className={css.logoLinkPhone}>
                  <img
                    src={logoIcon}
                    alt=""
                    width={28}
                    height={28}
                    className={css.logoIcon}
                  />
                  LearnLingo
                </a>
                {/* Кнопка для закриття модалки навiгацii  */}
                <button onClick={toggelMenu} className={css.closeBtn}>
                  <IoIosClose className={css.closeIcon} />
                </button>
              </div>

              <div className={css.menu}>
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
                  <li className={css.loginItem}>
                    <button
                      onClick={toggelLogInMenu}
                      type="button"
                      className={css.loginLink}
                    >
                      <MdOutlineExitToApp className={css.loginIcon} />
                      Log in
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={toggelRegister}
                      className={css.registrationLink}
                    >
                      Registration
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <button onClick={toggelMenu} className={css.humburgerBtn}>
            <FiAlignJustify className={css.humburgerIcon} />
          </button>
        )}
      </nav>
      {/* LoginForm Modal */}
      <LogIn toggelLogInMenu={toggelLogInMenu} isOpenLogIn={isOpenLogIn} />

      {/* Register Modal */}
      <Register
        toggelRegister={toggelRegister}
        isOpenRegister={isOpenRegister}
      />
    </>
  );
};

export default Header;
