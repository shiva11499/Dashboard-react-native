import styled from 'styled-components/native';
import colors from '../colors';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

export const ProgressContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-horizontal: 12px;
`;

export const ProgressTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 12px;
`;

export const ProgressText = styled.Text`
  color: ${colors.white};
  font-weight: 700;
  font-size: 14px;
`;

export const ProgressTitleText = styled.Text`
  color: ${colors.white};
  font-weight: 700;
  font-size: 16px;
`;

export const ProgressMessageText = styled.Text`
  color: ${colors.white};
  font-weight: 300;
  font-size: 12px;
  margin-top: 8px;
  flex-wrap: wrap;
`;
