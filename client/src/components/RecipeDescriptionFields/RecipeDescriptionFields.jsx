import React, { useEffect, useState } from "react";
import css from "./RecipeDescriptionFields.module.css";
import { selectCategories } from "../../redux/categories/selectors";
import { getAllCategoriesList } from "../../redux/categories/operations";
import { useDispatch, useSelector } from "react-redux";
import { useFormikContext } from "formik";
import { toast } from "react-toastify";
import { Select } from "../../components/Select/Select";
import { useRecipeData } from "../AddRecipeForm/recipeContext";
// import { FormError } from "../validationAddRecipe";

export const RecipeDescriptionFields = () => {
  const [categoryValue, setCategoryValue] = useState("Breakfast");
  const [timeValue, setTimeValue] = useState("5 min");
  const [selectedImgPath, setSelectedImgPath] = useState();
  const [selectedImgFile, setSelectedImgFile] = useState();
  const [titleValue, setTitleValue] = useState("");
  const [aboutValue, setAboutValue] = useState("");
  const { recipeData, setRecipeData } = useRecipeData();

  // const {
  //   categoryValue,
  //   timeValue,
  //   selectedImgPath,
  //   selectedImgFile,
  //   titleValue,
  //   aboutValue,
  // } = recipeData;

  const dispatch = useDispatch();
  const categoriesList = useSelector(selectCategories);

  useEffect(() => {
    if (!categoriesList || categoriesList.length === 0) {
      dispatch(getAllCategoriesList());
    }
  }, [dispatch, categoriesList]);

  const categoryOptions = categoriesList.map((option) => ({
    value: option.toLowerCase(),
    label: option,
  }));

  const formikProps = useFormikContext();

  const setFormikValue = (name, value) => {
    formikProps.setFieldValue(name, value);
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    const fileURL = file && URL.createObjectURL(file);
    setSelectedImgFile(file);
    setSelectedImgPath(fileURL);

    if (!file) {
      toast.error("Please, upload the image file");
      return;
    }
    if (
      !["image/jpeg", "image/jpg", "image/web", "image/png"].includes(file.type)
    ) {
      toast.error("You can upload only images");
      return;
    }
    if (!file.size > 2 * 1024 * 1024) {
      toast.error("File must be less than 2MB");
      return;
    }
  };

  const handleCategoryInputChange = (value) => {
    setCategoryValue(value);
    setFormikValue("category", value);
  };
  const handleTimeInputChange = (value) => {
    setTimeValue(value);
    setFormikValue("time", value);
  };
  const handleTitleInputChange = (value) => {
    setTitleValue(value);
    setFormikValue("title", value);
  };

  const handleAboutInputChange = (value) => {
    setAboutValue(value);
    setFormikValue("about", value);
  };

  const cookingTimeOptions = (() => {
    const start = 5;
    const end = 120;
    const range = [];
    for (let i = start; i <= end; i += 5) {
      range.push(i);
    }
    return range.map((item) => ({
      value: item.toString(),
      label: item.toString() + "min",
    }));
  })();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={css.main__box}>
        <div>
          <div style={{ position: "relative" }}>
            <svg className={css.rectangle1}>
              <rect width="100%" height="100%" fill="#8BAA36" />
            </svg>
            <svg className={css.rectangle2}>
              <rect width="100%" height="100%" fill="#000" />
            </svg>
            <svg className={css.rectangle3}>
              <rect width="100%" height="100%" fill="#8BAA36" />
            </svg>
          </div>
          <h1 className={css.h1}>Add recipe</h1>
        </div>
        <div className={css.form__box}>
          <div className={css.image__box}>
            <label className={css.image__upload}>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*,.png,.jpg,.web,.gif,.png"
                style={{ display: "none" }}
                onChange={handleUploadFile}
              />
              <div className={css.img__icons}>
                {selectedImgPath && (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundPosition: "cover",
                    }}
                    alt="recipe"
                    src={selectedImgPath}
                  />
                )}
                <svg
                  className={css.camera__box}
                  width="100%"
                  height="100%"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M56.381 22.8571V13.696C56.3811 12.0826 55.7414 10.535 54.6023 9.39244C53.4631 8.24988 51.9175 7.60557 50.3041 7.60073L41.143 7.5733M56.381 41.1428V50.2857C56.381 51.9022 55.7389 53.4526 54.5958 54.5957C53.4527 55.7387 51.9024 56.3809 50.2858 56.3809H41.143M22.8572 7.5733L13.6961 7.60378C12.0827 7.60862 10.5371 8.25293 9.39792 9.39549C8.2588 10.538 7.61913 12.0856 7.61914 13.699V22.8571M22.8572 56.3809H13.7144C12.0978 56.3809 10.5475 55.7387 9.40439 54.5957C8.26132 53.4526 7.61914 51.9022 7.61914 50.2857V41.1428"
                    stroke="#FAFAFA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  className={css.camera}
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 17.5C13.25 17.5 14.3127 17.0627 15.188 16.188C16.0627 15.3127 16.5 14.25 16.5 13C16.5 11.75 16.0627 10.6873 15.188 9.812C14.3127 8.93733 13.25 8.5 12 8.5C10.75 8.5 9.68733 8.93733 8.812 9.812C7.93733 10.6873 7.5 11.75 7.5 13C7.5 14.25 7.93733 15.3127 8.812 16.188C9.68733 17.0627 10.75 17.5 12 17.5ZM4 21C3.45 21 2.97933 20.8043 2.588 20.413C2.196 20.021 2 19.55 2 19V7C2 6.45 2.196 5.97933 2.588 5.588C2.97933 5.196 3.45 5 4 5H7.15L9 3H15L16.85 5H20C20.55 5 21.021 5.196 21.413 5.588C21.8043 5.97933 22 6.45 22 7V19C22 19.55 21.8043 20.021 21.413 20.413C21.021 20.8043 20.55 21 20 21H4Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
            </label>
          </div>
          <form className={css.form} /*onSubmit={handleSubmit} */>
            <div className={css.input__box}>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter item title"
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
                pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
                className={css.input__title}
                value={titleValue}
                onChange={(e) => handleTitleInputChange(e.currentTarget.value)}
              />
            </div>
            <div className={css.input2__box}>
              <input
                type="text"
                id="about"
                name="about"
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
                pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
                className={css.input__descr}
                placeholder="Enter about recipe"
                value={aboutValue}
                onChange={(e) => handleAboutInputChange(e.currentTarget.value)}
              />
            </div>
            <div>
              {/* <Select /> */}
              <select
                name="category"
                // options={categoryOptions}
                value={categoryValue}
                placeholder={categoryValue}
                onChange={(e) => handleCategoryInputChange(e.label)}
                className={css.select}
              >
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                {/* <svg
                  width="100%"
                  height="100%"
                  id="icon-down"
                  viewBox="0 0 32 32"
                  fill="none"
                  className={css.arrow}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5.333"
                    d="M29.333 9.333 16 22.666 2.667 9.333"
                  />
                </svg> */}
              </select>
            </div>
            <div className={css.time__box}>
              <label htmlFor="cookingTime" className={css.time}>
                <span className={css.time__text}>Cooking time</span>
              </label>
              <select
                name="time"
                options={cookingTimeOptions}
                value={timeValue}
                onChange={(e) => handleTimeInputChange(e.label)}
                className={css.select}
              >
                <svg
                  width="100%"
                  height="100%"
                  id="icon-down"
                  viewBox="0 0 32 32"
                  fill="none"
                  className={css.arrow}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5.333"
                    d="M29.333 9.333 16 22.666 2.667 9.333"
                  />
                </svg>
              </select>
              <svg
                fill="none"
                id="icon-down"
                viewBox="0 0 32 32"
                className={css.arrow}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5.333"
                  d="M29.333 9.333 16 22.666 2.667 9.333"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RecipeDescriptionFields;

// export const cookingTimeOptions = (() => {
//   const start = 5;
//   const end = 120;
//   const range = [];
//   for (let i = start; i <= end; i += 5) {
//     range.push(i);
//   }
//   return range.map(item => ({
//     value: item.toString(),
//     label: item.toString() + 'min',
//   }));
// })();
{
  /* <option className={css.select__list} value="5 min">
                  5 min
                </option>
                <option className={css.select__list} value="30 min">
                  10 min
                </option>
                <option className={css.select__list} value="45 min">
                  15 min
                </option>
                <option className={css.select__list} value="60 min">
                  20 min
                </option>
                <option className={css.select__list} value="90 min">
                  25 min
                </option>
                <option className={css.select__list} value="30 min">
                  30 min
              </option>*/
}
