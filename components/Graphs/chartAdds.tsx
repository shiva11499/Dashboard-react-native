import { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import React from 'react';

interface LineProps {
  line: string;
  color: string;
}

export const Line = (props: Partial<LineProps>) => {
  const { line, color } = props as LineProps;
  return (
    <Path
      key={'line'}
      d={line}
      stroke={color}
      fill={'none'}
      strokeWidth={3}
      opacity={1}
    />
  );
};

interface DecoratorProps {
  x: (arg: number) => number;
  y: (arg: number) => number;
  data: number[];
  color: string;
}

export const Dots = (props: Partial<DecoratorProps>) => {
  const { x, y, data, color } = props as DecoratorProps;
  return (
    <>
      {data?.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          // stroke={'rgb(0, 0, 0)'}
          fill={color}
        />
      ))}
    </>
  );
};

export const Gradient = () => (
  <Defs>
    <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'rgb(194, 65, 244)'} stopOpacity={0.8} />
      <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.2} />
    </LinearGradient>
  </Defs>
);
