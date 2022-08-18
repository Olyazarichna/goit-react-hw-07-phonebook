import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useGetContactsQuery } from 'redux/contacstApi';
// import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log(data);
  // const contactItems = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);

  // const filterContacts = () => {
  //   return contactItems.filter(contactItem => {
  //     return contactItem.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  // const dispatch = useDispatch();
  return (
    <ul className={css.contactList}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map(contact => {
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

      {/* {filterContacts().map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={() => dispatch(deleteContact(id))}
          />
        );
      })} */}
    </ul>
  );
};

export default ContactList;
