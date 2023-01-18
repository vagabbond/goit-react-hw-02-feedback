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

export default Statistics;
