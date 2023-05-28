import type { PropsWithChildren } from 'react';
import Card from '../../common/Card';
import * as Progress from 'react-native-progress';

import {
  HeaderContainer,
  HeaderText,
  HeaderMessageText,
  ProgressBarContainer,
  ProgressValueContainer,
  ProgressValueText,
  ProgressValueSubText,
} from './ProgressBarTile.style';
import colors from '../../colors';

type ActivitiesTileProps = PropsWithChildren<{
  headerText?: string;
  headerMessage?: string;
  progressValue?: number;
  completed?: number;
  pending?: number;
}>;

const ActivitiesTile: React.FC<ActivitiesTileProps> = ({
  headerText,
  headerMessage,
  progressValue,
  completed,
  pending,
}) => {
  return (
    <Card width={'48%'}>
      <HeaderContainer>
        <HeaderText>{headerText}</HeaderText>
        <HeaderMessageText>{headerMessage}</HeaderMessageText>
      </HeaderContainer>
      <ProgressBarContainer>
        <Progress.Bar
          progress={progressValue}
          height={5}
          color={colors.neon_blue}
          unfilledColor={colors.ghost_white}
          borderWidth={0}
        />
        <ProgressValueContainer>
          <ProgressValueText>{completed}</ProgressValueText>
          <ProgressValueText>{pending}</ProgressValueText>
        </ProgressValueContainer>

        <ProgressValueContainer>
          <ProgressValueSubText>Completed</ProgressValueSubText>
          <ProgressValueSubText>Pending</ProgressValueSubText>
        </ProgressValueContainer>
      </ProgressBarContainer>
    </Card>
  );
};

export default ActivitiesTile;
