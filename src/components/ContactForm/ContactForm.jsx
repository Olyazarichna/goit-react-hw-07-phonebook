import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useAddContactMutation } from 'redux/contacstApi';

const ContactForm = () => {
  const [addContact, result] = useAddContactMutation();
  console.log(addContact);
  // const contactItems = useSelector(state => state.contacts.items);

  // const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  // const haveContacts = (contactItems, data) => {
  //   return contactItems.some(
  //     contactItem => contactItem.name.toLowerCase() === data.name.toLowerCase()
  //   );
  // };

  const handleAddContactSubmit = async values => {
    try {
      console.log('values', values);
      await addContact(values);
      console.log('you add new contact');
    } catch (error) {
      console.log(error);
    }
  };

  // const onHandleSubmit = event => {
  //   event.preventDefault();
  //   const id = nanoid(5);
  //   const contact = {
  //     id: id,
  //     name: name,
  //     number: number,
  //   };

  //   if (!haveContacts(contactItems, contact)) {
  //     dispatch(addContact(contact));
  //     reset();
  //   } else {
  //     alert(`${contact.name} is already exist`);
  //     reset();
  //   }
  // };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleAddContactSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
          className={css.formInput}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
          className={css.formInput}
        />
      </label>

      <button type="submit" className={css.btnForm}>
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
