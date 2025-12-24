import css from "./Header.module.css";
import { MdOutlineExitToApp } from "react-icons/md";
import logoIcon from "../../../public/logo.svg";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const toggel = () => setIsOpen(!isOpen);
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

        {isOpen ? (
          <>
            <button onClick={toggel} className={css.closeBtn}>
              <IoIosClose className={css.closeIcon} />
            </button>
            <div className={css.navigation}>
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
              </div>
            </div>
          </>
        ) : (
          <button onClick={toggel} className={css.humburgerBtn}>
            <FiAlignJustify className={css.humburgerIcon} />
          </button>
        )}
      </nav>
    </>
  );
};

export default Header;
