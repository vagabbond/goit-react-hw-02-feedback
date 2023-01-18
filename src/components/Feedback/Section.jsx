import { SectionStyled, FeedbackTitle } from './Feedback.styled';
const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </SectionStyled>
  );
};

export default Section;
