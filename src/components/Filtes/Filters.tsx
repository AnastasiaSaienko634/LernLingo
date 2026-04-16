import css from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={css.switcherContainer}>
      <label htmlFor="languages-selector">
        Languages
        <select
          name="Languages"
          id="languages-selector"
          className={css.selectorLanguages}
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

      <label htmlFor="levl-selector">
        Level of knowledge
        <select name="Levl" id="levl-selector" className={css.selectorLevls}>
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

      <label htmlFor="price-selector">
        Price
        <select name="Price" id="price-selector" className={css.selectorPrice}>
          <option value="thirty" className={css.optionPrice}>
            30 $
          </option>
          <option value="ten" className={css.optionPrice}>
            10 $
          </option>
          <option value="twanty" className={css.optionPrice}>
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
