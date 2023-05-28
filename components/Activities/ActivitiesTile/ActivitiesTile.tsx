import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import Card from '../../common/Card';
import {
  HeaderContainer,
  HeaderText,
  ActivityTextContainer,
  ActivityText,
  ActivitySubText,
  ActivityPercentageText,
  AverageCallsText,
} from './ActivitiesTile.style';

type ActivitiesTileProps = PropsWithChildren<{
  headerText?: string;
  activityText?: number;
  activityTextColor?: string;
  activityPercentText?: number;
  averageCalls?: number;
}>;

const ActivitiesTile: React.FC<ActivitiesTileProps> = ({
  headerText,
  activityTextColor,
  activityText,
  activityPercentText,
  averageCalls,
}) => {
  return (
    <Card width={'48%'}>
      <HeaderContainer>
        <HeaderText>{headerText}</HeaderText>
      </HeaderContainer>
      <ActivityTextContainer>
        <Text>
          <ActivityText color={activityTextColor}>{activityText}</ActivityText>
          <ActivitySubText color={activityTextColor}> Calls</ActivitySubText>
        </Text>
        <ActivityPercentageText color={activityTextColor}>
          {activityPercentText}%
        </ActivityPercentageText>
      </ActivityTextContainer>
      <AverageCallsText>Avg. {averageCalls} calls per day</AverageCallsText>
    </Card>
  );
};

export default ActivitiesTile;
