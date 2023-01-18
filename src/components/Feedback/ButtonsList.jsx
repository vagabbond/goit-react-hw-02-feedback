import { FeedbackButtonWrap, FeedbackButton } from './Feedback.styled';

const ButtonList = ({ options, hadleClick }) => {
  return (
    <FeedbackButtonWrap>
      {options.map(el => (
        <FeedbackButton key={el} onClick={hadleClick}>
          {el}
        </FeedbackButton>
      ))}
    </FeedbackButtonWrap>
  );
};

export default ButtonList;
