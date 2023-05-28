import styled from 'styled-components/native';
import colors from '../colors';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled.Text`
  color: ${colors.persian_blue};
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 4px;
`;

export const PhoneContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const PhoneNumberText = styled.Text`
  color: ${colors.gray};
  font-weight: 300;
  font-size: 12px;
  margin-left: 4px;
`;

export const PhoneImage = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ImageContainer = styled.View`
  height: 60px;
  width: 60px;
  border: 3px solid ${colors.violet};
  border-radius: 30px;
`;

export const FakePersonImage = styled.Image`
  resize-mode: contain;
  flex: 1;
  width: 100%;
  border-radius: 30px;
  align-items: center;
`;
