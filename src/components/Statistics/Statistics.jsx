import { Box, Text } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({good,neutral,bad,total,positivePercentage}) =>{
    return(
        <Box >
        <Text>Good:<span>{good}</span></Text>
        <Text>Neutral:<span>{neutral}</span></Text>
        <Text>Bad:<span>{bad}</span></Text>
        <Text>Total:<span>{total}</span></Text>
        <Text>Positive feedback:<span>{positivePercentage}%</span></Text>
      </Box>
    )
}



Statistics.protoType = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.func.isRequired,
  positivePercentage:PropTypes.func.isRequired
}