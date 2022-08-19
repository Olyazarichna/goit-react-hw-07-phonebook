import css from './Filter.module.css';
import { filterContact } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <form className={css.form}>
      <label className={css.findCont}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={event => dispatch(filterContact(event.target.value))}
          value={filter}
          className={css.findInput}
          placeholder="Search"
        />
      </label>
    </form>
  );
};
export default Filter;
