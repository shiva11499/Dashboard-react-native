import styled from 'styled-components/native';
import colors from '../../colors';

type Prop = {
  color?: string;
};

export const HeaderContainer = styled.View`
  display: flex;
  margin-bottom: 12px;
`;

export const ProgressBarContainer = styled.View`
  display: flex;
  margin-vertical: 4px;
`;

export const ProgressValueContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProgressValueText = styled.Text`
  color: ${colors.persian_blue};
  font-weight: 700;
  font-size: 16px;
  margin-top: 8px;
`;

export const ProgressValueSubText = styled.Text`
  color: ${colors.gray};
  font-weight: 400;
  font-size: 12px;
`;

export const HeaderText = styled.Text`
  color: ${colors.persian_blue};
  font-weight: 700;
  font-size: 16px;
  margin-horizontal: 8px;
`;

export const HeaderMessageText = styled.Text`
  color: ${colors.gray};
  font-weight: 600;
  font-size: 12px;
  margin-top: 8px;
  margin-horizontal: 8px;
`;

export const ActivityText = styled.Text<Prop>`
  color: ${(props) => (props.color ? props.color : colors.gray)};
  font-weight: 700;
  font-size: 24px;
`;

export const ActivitySubText = styled.Text<Prop>`
  color: ${(props) => (props.color ? props.color : colors.gray)};
`;

export const ActivityPercentageText = styled.Text<Prop>`
  color: ${(props) => (props.color ? props.color : colors.gray)};
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 12px;
`;

export const AverageCallsText = styled.Text<Prop>`
  color: ${colors.gray};
  font-weight: 600;
  font-size: 12px;
  margin-top: 12px;
  margin-left: 8px;
`;
