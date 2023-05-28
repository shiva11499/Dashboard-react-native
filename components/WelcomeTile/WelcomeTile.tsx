import {
  Container,
  DetailsContainer,
  TitleText,
  PhoneContainer,
  PhoneImage,
  PhoneNumberText,
  ImageContainer,
  FakePersonImage,
} from './WelcomeTile.style';

const WelcomeTile = () => {
  const phoneImage = require('../../assets/phone-volume-solid.png');
  const fakePersonImage = require('../../assets/fake-person.jpeg');

  return (
    <Container>
      <DetailsContainer>
        <TitleText>Hi, Clarence</TitleText>
        <PhoneContainer>
          <PhoneImage source={phoneImage} />
          <PhoneNumberText>{'(801) 923-2930'}</PhoneNumberText>
        </PhoneContainer>
      </DetailsContainer>
      <ImageContainer>
        <FakePersonImage source={fakePersonImage} />
      </ImageContainer>
    </Container>
  );
};

export default WelcomeTile;
