import css from "./Filters.module.css";
import { useCourseFilterStore } from "../../store/Filters";

const Filters = () => {
  const { setLanguage, setLevel, setPrice, language, level, price } =
    useCourseFilterStore();
  return (
    <div className={css.switcherContainer}>
      <label htmlFor="languages-selector" className={css.languagesLabel}>
        Languages
        <select
          name="Languages"
          id="languages-selector"
          className={css.selectorLanguages}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="french" className={css.optionLanguages}>
            French
          </option>
          <option value="english" className={css.optionLanguages}>
            English
          </option>
          <option value="german" className={css.optionLanguages}>
            German
          </option>
          <option value="ukrainian" className={css.optionLanguages}>
            Ukrainian
          </option>
          <option value="polish" className={css.optionLanguages}>
            Polish
          </option>
        </select>
      </label>

      <label htmlFor="levl-selector" className={css.levlLabel}>
        Level of knowledge
        <select
          name="Levl"
          id="levl-selector"
          className={css.selectorLevls}
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="beginner" className={css.optionLevls}>
            A1 Beginner
          </option>
          <option value="elementary" className={css.optionLevls}>
            A2 Elementary
          </option>
          <option value="intermediate" className={css.optionLevls}>
            B1 Intermediate
          </option>
          <option value="upper-intermediate" className={css.optionLevls}>
            B2 Upper-Intermediate
          </option>
        </select>
      </label>

      <label htmlFor="price-selector" className={css.priceLabel}>
        Price
        <select
          name="Price"
          id="price-selector"
          className={css.selectorPrice}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="thirty" className={css.optionPrice}>
            30 $
          </option>
          <option value="ten" className={css.optionPrice}>
            10 $
          </option>
          <option value="twanthy" className={css.optionPrice}>
            20 $
          </option>
          <option value="upper-firthy" className={css.optionPrice}>
            40 $
          </option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
