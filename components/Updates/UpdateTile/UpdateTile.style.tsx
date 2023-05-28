import styled from 'styled-components/native';
import colors from '../../colors';

type Prop = {
  bgColor?: string;
};

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const ActionContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.View<Prop>`
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : colors.gray)};
  border-radius: 12.5px;
  padding: 5px;
`;

export const StyledImage = styled.Image<Prop>`
  width: 100%;
  resize-mode: contain;
  height: undefined;
  aspect-ratio: 1;
  tint-color: ${(props) => (props.bgColor ? props.bgColor : colors.white)};
  border-radius: 12.5px;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-weight: 600;
  font-size: 12px;
  margin-left: 12px;
  flex: 1;
  flex-wrap: wrap;
`;

export const ActionText = styled.Text`
  color: ${colors.white};
  font-weight: 300;
  font-size: 12px;
  margin-right: 12px;
  flex: 1;
  flex-wrap: wrap;
  width: 60%;
`;
