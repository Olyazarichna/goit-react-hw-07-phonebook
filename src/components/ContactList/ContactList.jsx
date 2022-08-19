import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

import { useGetContactsQuery } from 'redux/contactsApi';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const { filter } = useSelector(state => state.filter);

  const filterContacts = () => {
    return data.filter(contactItem => {
      return contactItem.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <ul className={css.contactList}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        filterContacts().map(contact => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
            />
          );
        })
      ) : null}
    </ul>
  );
};

export default ContactList;
