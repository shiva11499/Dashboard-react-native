import styled from 'styled-components/native';
import type { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  width?: any;
  color?: string;
}>;

export const Content = styled.View`
  padding: 16px 12px;
`;

export const Container = styled.View<CardProps>`
  flex-shrink: 0;
  width: ${(props) => (props.width ? props.width : '150px')};
  background-color: ${(props) => (props.color ? props.color : 'white')};
  border-radius: 8px;
  shadow-radius: 5px;
  shadow-opacity: 0.2;
  shadow-offset: 4px 8px;
  transition: 0.3s;
  margin-right: 12px;
`;
