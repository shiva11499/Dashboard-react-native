import UpdateTile from './UpdateTile';
import { ScrollView } from 'react-native';
import colors from '../colors';
import { Container } from './Updates.style';

const Updates = () => {
  const bellImage = require('../../assets/bell.jpeg');
  const playImage = require('../../assets/play.jpeg');
  const tickImage = require('../../assets/tick.jpeg');

  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 4 }}>
        <UpdateTile
          color={colors.neon_blue}
          icon={bellImage}
          buttonImage={playImage}
          headerText='Tips on increasing your go forward'
          actionText='Lorem ipsum dolor sit amet, consectetur'
        />
        <UpdateTile
          color={colors.aquamarine}
          icon={tickImage}
          buttonImage={tickImage}
          headerText='Tips on increasing your go forward'
          actionText='Lorem ipsum dolor sit amet, consectetur'
        />
      </ScrollView>
    </Container>
  );
};

export default Updates;
