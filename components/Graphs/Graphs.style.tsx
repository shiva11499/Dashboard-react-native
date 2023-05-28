import styled from 'styled-components/native';
import type { PropsWithChildren } from 'react';
import colors from '../colors';

type GraphProps = PropsWithChildren<{
  bgColor?: string;
}>;

export const Container = styled.View`
  display: flex;
  margin-top: 16px;
`;

export const GraphContainer = styled.View`
  display: flex;
  margin-top: 16px;
`;

export const LegendContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const LegendColor = styled.View<GraphProps>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : colors.gray)};
  height: 10px;
  width: 10px;
  border-radius: 5px;
`;

export const LegendText = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
  font-weight: 600;
  margin-horizontal: 8px;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  color: ${colors.persian_blue};
  font-weight: 700;
  margin-left: 8px;
`;
