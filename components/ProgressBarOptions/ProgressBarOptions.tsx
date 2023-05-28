import { useState } from 'react';
import Button from '../common/StyledButton';
import { Container } from './ProgressBarOptions.style';

const ProgressBarOptions = () => {
  const [selected, setSelected] = useState(0);

  const handleChange = (id: number) => {
    setSelected(id);
  };

  return (
    <Container>
      <Button
        title='Recent'
        isSelected={selected === 0}
        onPress={() => {
          handleChange(0);
        }}
      />
      <Button
        title='All groups'
        isSelected={selected === 1}
        onPress={() => {
          handleChange(1);
        }}
      />
      <Button
        title='Archived'
        isSelected={selected === 2}
        onPress={() => {
          handleChange(2);
        }}
      />
    </Container>
  );
};

export default ProgressBarOptions;
