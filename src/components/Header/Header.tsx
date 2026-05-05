import css from "./Header.module.css";
import { MdOutlineExitToApp } from "react-icons/md";
import logoIcon from "../../../public/logo.svg";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import LogIn from "../../components/auth/LogIn/LogIn";
import Register from "../../components/auth/Register/Register";
// import AuthDetails from "../auth/AuthDetails";
import { Link } from "react-router-dom";
import AuthDetails from "../auth/AuthDetails";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>();
  const [isOpenLogIn, setIsOpenLogIn] = useState<boolean>();
  const [isOpenRegister, setIsOpenMenuRegister] = useState<boolean>();

  const toggelMenu = () => setIsOpenMenu(!isOpenMenu);
  const toggelLogInMenu = () => setIsOpenLogIn(!isOpenLogIn);
  const toggelRegister = () => setIsOpenMenuRegister(!isOpenRegister);

  useEffect(() => {
    if (!isOpenRegister) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      const y = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, parseInt(y || "0") * -1);
    };
  }, [isOpenRegister]);

  useEffect(() => {
    if (!isOpenLogIn) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      const y = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, parseInt(y || "0") * -1);
    };
  }, [isOpenLogIn]);

  const [authUser, setAuthUser] = useState<User | null>(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const handleClick = () => {
    setIsOpenMenu(false);
  };

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
            <Link to="/" className={css.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="teachers" className={css.link}>
              Teachers
            </Link>
          </li>
        </ul>

        {/* Авторизація */}
        {authUser ? (
          <AuthDetails />
        ) : (
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
        )}
      </nav>
      <nav className={css.containerPhone}>
        <Link to="/" className={css.logoLink}>
          <img
            src={logoIcon}
            alt=""
            width={28}
            height={28}
            className={css.logoIcon}
          />
          LearnLingo
        </Link>

        {isOpenMenu ? (
          <>
            <div className={css.navigation}>
              <div className={css.headerPhone}>
                {/* Logo */}
                <Link
                  to="/"
                  onClick={handleClick}
                  className={css.logoLinkPhone}
                >
                  <img
                    src={logoIcon}
                    alt=""
                    width={28}
                    height={28}
                    className={css.logoIcon}
                  />
                  LearnLingo
                </Link>
                {/* Кнопка для закриття модалки навiгацii  */}
                <button onClick={toggelMenu} className={css.closeBtn}>
                  <IoIosClose className={css.closeIcon} />
                </button>
              </div>

              <div className={css.menu}>
                {/* Список зі сторінками */}
                <ul className={css.pages}>
                  <li>
                    <Link to="/" className={css.link}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/teachers" className={css.link}>
                      Teachers
                    </Link>
                  </li>
                </ul>

                {/* Авторизація */}
                {authUser ? (
                  <AuthDetails />
                ) : (
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
                )}
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
