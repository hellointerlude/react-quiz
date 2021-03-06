import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NextButton = styled.button`
  background: palevioletred;
  border: 0;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding: 1rem 3rem;
  text-align: center;
  text-transform: uppercase;

  &[disabled],
  &[disabled]:hover {
  	background: palevioletred;
  	cursor: not-allowed;
  	opacity: 0.5;
  }
  &:hover {
  	background: black;
  	cursor: pointer;
  }
`;

export default function Next(props)  {
  return <NextButton id={`button${props.round}`} onClick={() => props.onClick()} disabled={props.disabled}>{props.nextText}</NextButton>
}

Next.propTypes = {
  round: PropTypes.number.isRequired,
  nextText: PropTypes.string.isRequired,
}