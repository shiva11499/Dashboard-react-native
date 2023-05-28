import ActivitiesTile from './ActivitiesTile';
import colors from '../colors';
import { Container } from './Activities.style';

const Activities = () => {
  return (
    <Container>
      <ActivitiesTile
        headerText='Activities this week'
        activityText={136}
        activityTextColor={colors.red}
        activityPercentText={-7.6}
        averageCalls={26}
      />
      <ActivitiesTile
        headerText='Activities this month'
        activityText={986}
        activityTextColor={colors.green}
        activityPercentText={10.6}
        averageCalls={146}
      />
    </Container>
  );
};

export default Activities;
