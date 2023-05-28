import WelcomeTile from '../WelcomeTile';
import Updates from '../Updates/Updates';
import Balance from '../Balance';
import Activities from '../Activities';
import Progress from '../Progress';
import ProgressBarOptions from '../ProgressBarOptions';
import ProgressBarSection from '../ProgressBarSection';
import Graphs from '../Graphs';
import { Container } from './Dashboard.style';

const Dashboard = () => {
  return (
    <Container>
      <WelcomeTile />
      <Updates />
      <Balance />
      <Activities />
      <Progress />
      <ProgressBarOptions />
      <ProgressBarSection />
      <Graphs />
    </Container>
  );
};

export default Dashboard;
