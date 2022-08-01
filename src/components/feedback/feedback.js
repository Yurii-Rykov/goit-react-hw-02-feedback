import React from 'react';
import s from './feedback.module.css';

class FeedBack extends React.Component {
  static defaultProps = {
    initialGodd: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal:0,
    initialPositive:0,
  };

  state = {
    good: this.props.initialGodd,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    total: this.props.initialTotal,
    positive: this.props.initialPositive,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }))
  }
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
     positive:  prevState.good / prevState.total * 100 + '%'
    }))
  }

  render() {
    return (
      <div>
        <h1 className="feedback_title">Please leave feedback</h1>

        <div className="feedback_wrapper">
          <button type='button' className="feedback_btn" onClick={this.goodIncrement}>good</button>
          <button type='button' className="feedback_btn" onClick={this.neutralIncrement}>neutral</button>
          <button type='button' className="feedback_btn" onClick={this.badIncrement}>bad</button>
        </div>

        <h2 className="statistic_title">Statistics</h2>
        <ul className="statistic_wrapper">
          <li className="statistic_item">Good: {this.state.good}</li>
          <li className="statistic_item">Neutral: {this.state.neutral}</li>
          <li className="statistic_item">Bad: {this.state.bad}</li>
          <li className="statistic_item">Total: {this.state.total}</li>
          <li className="statistic_item">PositiveFeedBack: {this.state.positive}</li> 
        </ul>
      </div>
    );
  }
}

export default FeedBack;
