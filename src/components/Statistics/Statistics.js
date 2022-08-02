import React from "react";
import s from './Statistics.module.css'

class Statistics extends React.Component {
    
    render() {
        const { onStateGood, onStateNeutral, onStateBad, onTotal, onPositiv } = this.props
        
        return (
     
        <ul className={s.statistic_wrapper}>
          <li className={s.statistic_item}>Good: {onStateGood}</li>
          <li className={s.statistic_item}>Neutral: {onStateNeutral}</li>
          <li className={s.statistic_item}>Bad: {onStateBad}</li>
          <li className={s.statistic_item}>Total: {onTotal}</li>
          <li className={s.statistic_item}>PositiveFeedBack: {onPositiv.toFixed()}%</li>
        </ul>
       
        )
    }
    
}

export default Statistics;