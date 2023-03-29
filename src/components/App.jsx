
import { useState } from "react";
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';


const options = ['Good', 'Neutral','Bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
    

  const onClickBtn = event => {
    const btnEvent = event.target.textContent.toLowerCase();
    
    switch (btnEvent) {
      case 'good':
        setGood(good + 1);
        break;
    
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        return;
    }
  }
    
  const countTotalFeedback = () => {
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() ? Math.round((good / countTotalFeedback()) * 100) : 0};
 
    return (
      <Container>
          <Section title='Please leave feedback'>
           <FeedbackOptions
             options={options}
             onLeaveFeedback={onClickBtn}
           />
          </Section>
          <Section title={'Statistics'}>
            {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
             