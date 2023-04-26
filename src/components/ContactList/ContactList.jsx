import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';
import css from './ContactList.module.scss';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)
    const filteredContacts = useSelector(selectFilter);
    const contactsFilter = contacts.filter(contact =>
   contact.name.toLowerCase().includes(filteredContacts)
  );

    const handleDelete = id => {
        dispatch(removeContact(id));
    }

  return (
        <ul className={css.list}>
            {contactsFilter.map(({id, name, number}) => (
                <li className={css.item} key={id}>
                    <p className={css.label}>
                        {name}: {number}
                    </p>
                    <button className={css.button} type="button" onClick={() => handleDelete(id)} value="delete">Delete</button>
                </li>
            ))}
        </ul>
    )    
}
