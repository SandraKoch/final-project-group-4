import s from "./SearchComponent.module.css";

const SearchComponent = () => {
    return (
        <form className={s.formSearch}>
            <div className={s.formSearchLabel}>
                <input type="text" placeholder="Beef"></input>
                <button type="submit">Search</button>
            </div>
        </form>
    );
};

export default SearchComponent;