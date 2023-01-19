import propTypes from 'prop-types';

import { SectionStyled, FeedbackTitle } from './Feedback.styled';
const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;
