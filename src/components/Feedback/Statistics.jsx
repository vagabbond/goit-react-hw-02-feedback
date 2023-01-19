import propTypes from 'prop-types';

import { FeedbackStatistics, FeedbackStatisticsItem } from './Feedback.styled';

const Statistics = ({ options, feedbackArr, total, positivePercentage }) => {
  return (
    <FeedbackStatistics>
      {options.map((element, i) => (
        <FeedbackStatisticsItem key={element}>
          {element}: {feedbackArr[i]}
        </FeedbackStatisticsItem>
      ))}
      <FeedbackStatisticsItem>Total Feedback: {total}</FeedbackStatisticsItem>
      {total !== 0 && (
        <FeedbackStatisticsItem>
          Precent of positive Feedback: {positivePercentage} %
        </FeedbackStatisticsItem>
      )}
    </FeedbackStatistics>
  );
};

Statistics.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  feedbackArr: propTypes.arrayOf(propTypes.number.isRequired).isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
