import { Container, Content } from './Card.styles';
import type { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  width?: any;
  color?: string;
}>;

const Card: React.FC<CardProps> = ({ children, width, color }) => {
  return (
    <Container width={width} color={color}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
