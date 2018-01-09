import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IntroTextWrap = styled.section`
  margin: 0 auto 10px;
  max-width: 800px;
  padding: 0 20px;
`;

const IntroText = styled.p`
  color: #999;
  font-size: 0.75em;
  line-height: 1.3;
  margin: 0.5rem 0 1rem;
  text-align: center;
`;

const IntroQuestion = styled.h2`
  color: palevioletred;
  font-size: 1.75rem;
  text-align: center;
`;

export default function Intro(props)  {
  return (
	  <IntroTextWrap style={{display: props.display ? 'block' : 'none'}}>
	  	<IntroText>{props.introText}</IntroText>
	  	<IntroQuestion>{props.intro2Text}</IntroQuestion>
  	</IntroTextWrap>
  );
}

Intro.propTypes = {
  introText: PropTypes.string.isRequired,
}