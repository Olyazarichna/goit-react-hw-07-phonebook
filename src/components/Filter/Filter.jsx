import css from './Filter.module.css';
import { filterContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={css.findCont}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(filterContact(event.target.value))}
        value={filter}
        className={css.findInput}
      />
    </label>
  );
};
export default Filter;
