import { useState } from 'react';
import css from './ContactForm.module.css';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  // const notify = () => toast('Wow so easy !');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const haveContacts = values => {
    const sameName = contacts.some(contactName => {
      return contactName.name.toLowerCase() === values.name.toLowerCase();
    });

    return sameName;
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const values = {
      name: name,
      phone: number,
    };
    if (haveContacts(values)) {
      toast.success('This contact already exist !');
      reset();
      return;
    } else {
      toast.info('You add new contact !');
      addContact(values);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onHandleSubmit} className={css.form}>
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
          placeholder="Enter name"
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
          placeholder="Enter phone number"
        />
      </label>

      <button type="submit" className={css.btnForm}>
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
