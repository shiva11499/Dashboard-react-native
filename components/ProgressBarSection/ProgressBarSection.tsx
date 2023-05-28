import ActivitiesTile from './ProgressBarTile';
import colors from '../colors';
import { Container } from './ProgressBarSection.style';

const Activities = () => {
  return (
    <Container>
      <ActivitiesTile
        headerText='Lead Generation Campaign'
        headerMessage='Lorem ipsum dolor sit amet, consectetur'
        completed={343}
        pending={368}
        progressValue={0.48}
      />
      <ActivitiesTile
        headerText='Product Launch Marketing'
        headerMessage='Lorem ipsum dolor sit amet, consectetur'
        completed={488}
        pending={105}
        progressValue={0.82}
      />
    </Container>
  );
};

export default Activities;
