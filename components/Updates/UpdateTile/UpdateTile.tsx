import Card from '../../common/Card';
import type { PropsWithChildren } from 'react';
import {
  HeaderContainer,
  ImageContainer,
  StyledImage,
  HeaderText,
  ActionContainer,
  ActionText,
} from './UpdateTile.style';
import colors from '../../colors';

type UpdateTileProps = PropsWithChildren<{
  color?: string;
  icon?: any;
  buttonImage?: any;
  headerText?: string;
  actionText?: string;
}>;

const UpdateTile: React.FC<UpdateTileProps> = ({
  color,
  icon,
  buttonImage,
  headerText,
  actionText,
}) => {
  return (
    <Card color={color} width={'180px'}>
      <HeaderContainer>
        <ImageContainer>
          <StyledImage source={icon} />
        </ImageContainer>
        <HeaderText>{headerText}</HeaderText>
      </HeaderContainer>
      <ActionContainer>
        <ActionText>{actionText}</ActionText>
        <ImageContainer bgColor={colors.white}>
          <StyledImage source={buttonImage} bgColor={color} />
        </ImageContainer>
      </ActionContainer>
    </Card>
  );
};

export default UpdateTile;
