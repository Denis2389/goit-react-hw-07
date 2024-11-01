import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactOps';
import s from '../Contact/Contact.module.css';
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import PropTypes from 'prop-types';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.wrapper}>
      <li className={s.items}>
        <div className={s.contactInfo}>
          <div>
            <div className={s.iconWrap}>
              <FaUser className={s.icon} />
              <p className={s.name}>{name}</p>
            </div>
            <div className={s.iconWrap}>
              <FaPhoneAlt />
              <p className={s.number}>{number}</p>
            </div>
          </div>
        </div>
        <button className={s.button} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );

}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

export default Contact;
