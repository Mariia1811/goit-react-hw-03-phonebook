import React from 'react';
import PropTypes from 'prop-types';
import {NumberEl, ItemEl} from './ContactItem.styled'

function ContactItem({ id, name, number, children }) {
  return (
    <ItemEl id={id}>
      <span>{name}: </span>
      <NumberEl>{number}</NumberEl>
      {children}
    </ItemEl>
  );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactItem;
