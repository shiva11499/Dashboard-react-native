import styled from 'styled-components/native';
import type { PropsWithChildren } from 'react';
import colors from '../../colors';

type ButtonProps = PropsWithChildren<{
  isSelected?: boolean;
}>;

export const Container = styled.Pressable<ButtonProps>`
  background-color: ${(props) =>
    props.isSelected ? colors.neon_blue : colors.ghost_white};
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border-radius: 20px;
  margin-horizontal: 8px;
`;

export const StyledText = styled.Text<ButtonProps>`
  color: ${(props) => (props.isSelected ? colors.white : colors.gray)};
  font-size: 14px;
  font-weight: 700;
  padding: 2px;
`;
