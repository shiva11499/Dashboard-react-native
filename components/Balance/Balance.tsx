import { useEffect, useState } from 'react';
import axios from 'axios';
import colors from '../colors';
import Card from '../common/Card';
import {
  Container,
  HeaderContainer,
  ImageContainer,
  StyledImage,
  WalletImageAndDetailsContainer,
  BalanceDetailsContainer,
  BalanceText,
  BalanceHeading,
  HorizontalLine,
  VerticalLine,
  DateAndAmountContainer,
  DateContainer,
  AmountContainer,
  DateAndAmountText,
  DateAndAmountHeading,
} from './Balance.style';

export type BalanceDetail = {
  balance?: string;
  auto_fill_amount?: string;
  auto_fill_date: any;
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Balance = () => {
  const [balanceDetails, setBalanceDetails] = useState<BalanceDetail | null>(
    null
  );
  const walletImage = require('../../assets/wallet.jpeg');
  const balanceButtonImage = require('../../assets/balance-button.jpeg');

  const formatDate = () => {
    const date = new Date(balanceDetails?.auto_fill_date);
    var day = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    return day + ' ' + month + ', ' + year;
  };

  const getBalanceDetails = () => {
    axios
      .get('https://3.api.fy23ey01.careers.ifelsecloud.com/')
      .then(({ data }) => {
        setBalanceDetails(data);
        formatDate();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getBalanceDetails();
  }, []);

  return (
    <Container>
      <Card width='100%'>
        <HeaderContainer>
          <WalletImageAndDetailsContainer>
            <ImageContainer>
              <StyledImage source={walletImage} />
            </ImageContainer>
            <BalanceDetailsContainer>
              <BalanceText>${balanceDetails?.balance}</BalanceText>
              <BalanceHeading>Wallet Balance</BalanceHeading>
            </BalanceDetailsContainer>
          </WalletImageAndDetailsContainer>
          <ImageContainer bgColor={colors.white}>
            <StyledImage source={balanceButtonImage} bgColor={colors.gray} />
          </ImageContainer>
        </HeaderContainer>
        <HorizontalLine></HorizontalLine>
        <DateAndAmountContainer>
          <DateContainer>
            <DateAndAmountText>{formatDate()}</DateAndAmountText>
            <DateAndAmountHeading>Auto fill date</DateAndAmountHeading>
          </DateContainer>
          <VerticalLine />
          <AmountContainer>
            <DateAndAmountText>
              ${balanceDetails?.auto_fill_amount}
            </DateAndAmountText>
            <DateAndAmountHeading>Auto fill amount</DateAndAmountHeading>
          </AmountContainer>
        </DateAndAmountContainer>
      </Card>
    </Container>
  );
};

export default Balance;
