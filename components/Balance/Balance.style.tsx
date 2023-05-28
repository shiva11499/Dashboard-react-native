import styled from 'styled-components/native';
import colors from '../colors';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

type Prop = {
  bgColor?: string;
};

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const WalletImageAndDetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BalanceDetailsContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const BalanceText = styled.Text`
  color: ${colors.persian_blue};
  font-weight: 700;
  font-size: 20px;
  margin-left: 12px;
  margin-bottom: 2px;
`;

export const BalanceHeading = styled.Text`
  color: ${colors.gray};
  font-weight: 500;
  font-size: 12px;
  margin-left: 12px;
`;

export const HorizontalLine = styled.View`
  margin-top: 4px;
  margin-bottom: 8px;
  border: 1px dashed ${colors.gray};
`;

export const VerticalLine = styled.View`
  backgroundcolor: ${colors.gray};
  height: 100%;
  width: 1px;
  border: 1px dotted ${colors.gray};
`;

export const DateAndAmountContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

export const DateContainer = styled.View`
  display: flex;
  flex-direction: column;
`;
export const AmountContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.View<Prop>`
  height: 30px;
  width: 30px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : colors.gray)};
  border-radius: 15px;
  padding: 5px;
`;

export const StyledImage = styled.Image<Prop>`
  width: 100%;
  resize-mode: contain;
  height: undefined;
  aspect-ratio: 1;
  tint-color: ${(props) => (props.bgColor ? props.bgColor : colors.neon_blue)};
  border-radius: 15px;
`;

export const DateAndAmountText = styled.Text`
  color: ${colors.persian_blue};
  font-weight: 700;
  font-size: 16px;
  margin-left: 12px;
  margin-bottom: 2px;
`;

export const DateAndAmountHeading = styled.Text`
  color: ${colors.gray};
  font-weight: 500;
  font-size: 12px;
  margin-horizontal: 12px;
`;
