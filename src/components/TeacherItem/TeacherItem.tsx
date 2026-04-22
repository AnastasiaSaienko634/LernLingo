import css from "./TeacherItem.module.css";
// icons
import { FiBookOpen } from "react-icons/fi";
import { GiRoundStar } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useFavoriteStore } from "../../lib/store/favoriteStore";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

type Teacher = {
  id: number;
  avatar_url: string;
  conditions: string;
  experience: string;
  languages: string[];
  lesson_info: string;
  lessons_done: number;
  levels: string[];
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
  surname: string;
};

type Props = {
  teacher: Teacher;
};

const TeacherItem = ({ teacher }: Props) => {
  const { toggleFavorite, favorites } = useFavoriteStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const isFavorite = favorites.includes(teacher.name);

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
    if (!authUser) {
      setModalOpen(true);
      return;
    }

    toggleFavorite(teacher.name);
  };

  return (
    <div className={css.teacherContainer}>
      <div className={css.cardContent}>
        <div className={css.teacherPhotoContainer}>
          <img
            className={css.teacherPhoto}
            src={teacher.avatar_url}
            alt="photo"
          />
        </div>

        <div className={css.infoContainer}>
          <div className={css.headerContainer}>
            <p className={css.languagesTitle}>Languages</p>

            <ul className={css.teacherInfo}>
              <li className={css.teacherInfoItem}>
                <FiBookOpen className={css.iconBook} />
                Lessons online
              </li>
              <li className={css.teacherInfoItem}>
                Lessons done: {teacher.lessons_done}
              </li>
              <li className={css.teacherInfoItem}>
                <GiRoundStar className={css.starIcon} />
                Rating: {teacher.rating}
              </li>
              <li className={css.teacherInfoItem}>
                Price / 1 hour:{" "}
                <span className={css.lessonPrice}>
                  {teacher.price_per_hour}$
                </span>
              </li>
              <li className={css.teacherInfoItem}>
                <button className={css.favoriteAddBtn} onClick={handleClick}>
                  <CiHeart
                    className={` ${css.teacherFavoriteIcon} ${isFavorite ? css.active : ""} `}
                  />
                </button>
              </li>
            </ul>
          </div>

          <h2 className={css.teacherName}>
            {teacher.name} {teacher.surname}
          </h2>

          <p className={css.languages}>
            Speaks:
            <span className={css.markerLanguage}>
              {" "}
              {teacher.languages.join(", ")}
            </span>
          </p>

          <p className={css.lessonInfo}>
            Lesson Info:
            <span className={css.lessonsInfoDescription}>
              {teacher.lesson_info}
            </span>
          </p>

          <p className={css.conditions}>
            Conditions:
            <span className={css.conditionsDescription}>
              {teacher.conditions}
            </span>
          </p>

          <button
            className={css.readMoreBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Hide" : "Read More"}
          </button>

          {isOpen && (
            <div className={css.reiewsBlockContainer}>
              {teacher.reviews.map((review) => (
                <div
                  key={review.reviewer_name}
                  className={css.reviewerContainer}
                >
                  <p className={css.reviewerName}>{review.reviewer_name}</p>
                  <p className={css.reviewerRating}>
                    <GiRoundStar className={css.starIcon} />
                    {review.reviewer_rating}
                  </p>
                  <p className={css.reviewerComment}>{review.comment}</p>
                </div>
              ))}
            </div>
          )}

          <ul className={css.languageLevelsList}>
            {teacher.levels.map((levl) => (
              <li className={css.languageLevlItem} key={levl}>
                #{levl}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className={css.modalWindowOverlay}>
          <div className={css.modalWindow}>
            <h3 className={css.modalTitle}>
              To save, you need to sign up or log in.
            </h3>
            <Link to="/" className={css.modalBtn}>
              Go to Homepage
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherItem;
