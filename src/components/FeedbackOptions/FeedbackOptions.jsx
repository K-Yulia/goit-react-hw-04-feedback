import { Box, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options,onLeaveFeedback})=>{
    return (<Box>

        {options.map(opt=><Button 
            type='button' 
            key={opt}
            onClick={onLeaveFeedback}
        >{opt}</Button>)}</Box>
        
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}