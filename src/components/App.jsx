
import { Component } from "react";
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';


const options = ['Good', 'Neutral','Bad'];

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  

  onClickBtn = event => {
  const btnEvent =event.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [btnEvent]: prevState[btnEvent] + 1}));
  };
 
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() ? Math.round((this.state.good / this.countTotalFeedback()) * 100) : 0};
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <Container>
          <Section title='Please leave feedback'>
           <FeedbackOptions
             options={options}
             onLeaveFeedback={this.onClickBtn}
           />
          </Section>
          <Section title={'Statistics'}>
            {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
             