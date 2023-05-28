import React from 'react';
import { StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';
import { Container, StyledText } from './StyledButton.style';

type ButtonProps = PropsWithChildren<{
  title?: string;
  isSelected?: boolean;
  onPress?: any;
}>;

const Button: React.FC<ButtonProps> = ({
  title,

  isSelected,
  onPress,
}) => {
  return (
    <Container isSelected={isSelected} onPress={onPress}>
      <StyledText isSelected={isSelected}>{title}</StyledText>
    </Container>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
