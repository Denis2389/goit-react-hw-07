import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactOps';
import { selectContacts } from '../../redux/contactsSlice'
import s from './ContactForm.module.css';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name must contain at least 3 characters")
    .max(50, "The name cannot exceed 50 characters")
    .required("Name is required"),
  number: Yup.string().required("Number is required"),
});

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  const handleSubmit = (values, { resetForm }) => {
    const exists = contacts.some(contact => contact.name === values.name);
    if (!exists) {
      dispatch(addContact({ id: nanoid(), ...values }));
      resetForm();
    } else {
      alert(`${values.name} вже э в контактах!`);
    }
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.field} name="name"/>
            <ErrorMessage name='name' />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.field} name="number"/>
            <ErrorMessage name='number' />
          </label>
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm;
