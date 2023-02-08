import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormStyled, Input, BtnStyled  } from './FormElem.styled';

const initialValues = { name: '', number: '' };

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

function FormElem({ addContact }) {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
   
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <BtnStyled  type="submit">Add contact</BtnStyled>
      </FormStyled>
    </Formik>
  );
}

FormElem.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default FormElem;
