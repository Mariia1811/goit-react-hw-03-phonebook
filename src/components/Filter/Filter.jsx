import React from 'react'
import PropTypes from 'prop-types'
import { FilterWrap, Input, Text } from './Filter.styled'

function Filter({value, onInput}) {
  return (
    <FilterWrap>
    <Text>Find contacts by name</Text>
    <Input name="filter" type='text' value={value} onChange={e => onInput(e)}  />
  </FilterWrap>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
}

export default Filter
