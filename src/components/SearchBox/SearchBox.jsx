import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from '../SearchBox/SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <p>Find contacts by name</p>
        <input
          type="text"
          placeholder="Enter name"
          value={filter}
          onChange={handleChange}
          className={s.field}
        />
      </label>
    </div>
  );
};

export default SearchBox;
