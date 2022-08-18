// import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDeleteContactMutation } from 'redux/contacstApi';

const Contact = ({ id, name, number }) => {
  const [deleteContact, result] = useDeleteContactMutation();
  return (
    <li className={css.listItem}>
      {name}: {number}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.bthList}
        disabled={result.isLoading}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

// Contact.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
