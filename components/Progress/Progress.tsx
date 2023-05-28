import colors from '../colors';
import Card from '../common/Card';
import {
  Container,
  ProgressContainer,
  ProgressText,
  ProgressTextContainer,
  ProgressTitleText,
  ProgressMessageText,
} from './Progress.style';
import ProgressCircle from 'react-native-progress-circle';

const percentage = 76;

const Progress = () => {
  return (
    <Container>
      <Card width='100%' color={colors.neon_blue}>
        <ProgressContainer>
          <ProgressCircle
            percent={percentage}
            radius={40}
            borderWidth={8}
            color={colors.white}
            shadowColor={colors.persian_blue}
            bgColor={colors.neon_blue}>
            <ProgressText>{percentage}%</ProgressText>
          </ProgressCircle>
          <ProgressTextContainer>
            <ProgressTitleText>Overall Task Completion</ProgressTitleText>
            <ProgressMessageText>
              Achievements against total calls targeted for the month of
              September
            </ProgressMessageText>
          </ProgressTextContainer>
        </ProgressContainer>
      </Card>
    </Container>
  );
};

export default Progress;
