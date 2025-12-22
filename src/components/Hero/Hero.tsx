import css from "./Hero.module.css";
import heroPhoto from "../../../public/heroPhoto.png";

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.container}>
        <div className={css.leftBlock}>
          <h1 className={css.titleHero}>
            Unlock your potential with the best{" "}
            <span className={css.markerText}>language</span> tutors
          </h1>
          <p className={css.descriptionHero}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={css.btnHero}>Get started</button>
        </div>
        <div className={css.rightBlock}>
          <img src={heroPhoto} alt="" />
        </div>
      </div>

      <div className={css.reviewBlock}>
        <ul className={css.listReview}>
          <li className={css.listItemReview}>
            <h2 className={css.reviewTitle}>32,000 +</h2>
            <p className={css.reviewDescription}>Experienced tutors</p>
          </li>
          <li className={css.listItemReview}>
            <h2 className={css.reviewTitle}>300,000 +</h2>
            <p className={css.reviewDescription}>5-star tutor reviews</p>
          </li>
          <li className={css.listItemReview}>
            <h2 className={css.reviewTitle}>120 +</h2>
            <p className={css.reviewDescription}>Subjects taught</p>
          </li>
          <li className={css.listItemReview}>
            <h2 className={css.reviewTitle}>200 +</h2>
            <p className={css.reviewDescription}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
