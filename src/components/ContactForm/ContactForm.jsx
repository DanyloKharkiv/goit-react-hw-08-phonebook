import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import css from './ContactForm.module.scss';

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
  
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const { name, number } = form.elements;
        const contact = {
            id: nanoid(),
            name: name.value,
            number: number.value,
        };

    if (contacts.find(contact => contact.name === name.value && contact.number === number.value )) {
      Report.warning(
        'Phonebook Warning',
        'The contact already exists with this name',
        'Okay',
      );
      return;
        }
    dispatch(addContacts(contact));
    form.reset();
    };
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>Name
                <input className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.label}>Number
                <input className={css.input}
                    placeholder="000-00-00"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button} type="submit">
                Add contact
            </button>
        </form>
    );
}
