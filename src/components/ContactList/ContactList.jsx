import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import s from '../Contact/Contact.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactOps";

function ContactList() {

  const contacts = useSelector(selectFilteredContacts); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
      <ul className={s.wrapperList}>
        {contacts.map(contact => (
            <Contact 
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            />
        ))}
      </ul>
  );
}

export default ContactList;
