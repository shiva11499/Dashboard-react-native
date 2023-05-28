import Card from '../common/Card';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import colors from '../colors';
import { Line, Dots } from './chartAdds';
import { StyleSheet } from 'react-native';
import {
  Container,
  GraphContainer,
  TitleText,
  LegendContainer,
  LegendColor,
  LegendText,
} from './Graphs.style';

const Graphs = () => {
  const data = [25, 18, 20, 17, 24, 21, 25];
  const anotherData = [14, 12, 8, 20, 27, 14];

  return (
    <Container>
      <Card width='100%'>
        <TitleText>September Activities</TitleText>
        <LegendContainer>
          <LegendColor bgColor={colors.purple} />
          <LegendText>Current month</LegendText>
          <LegendColor bgColor={colors.aquamarine} />
          <LegendText>Previous month</LegendText>
        </LegendContainer>
        <GraphContainer>
          <AreaChart
            style={{ height: 150 }}
            data={data}
            gridMin={-120}
            gridMax={120}
            contentInset={{ top: 20, bottom: 5 }}
            svg={{ strokeWidth: 'rgba(94, 160, 113, 0.8)' }}></AreaChart>
          <AreaChart
            style={StyleSheet.absoluteFill}
            data={data}
            gridMin={0}
            contentInset={{ top: 20, bottom: 5 }}
            curve={shape.curveNatural}
            svg={{
              fill: `${colors.aquamarine}`,
              strokeWidth: 5,
              fillOpacity: 0.1,
            }}>
            <Line color={colors.aquamarine} />
            <Dots color={colors.aquamarine} />
          </AreaChart>
          <AreaChart
            style={StyleSheet.absoluteFill}
            data={anotherData}
            gridMin={0}
            contentInset={{ top: 20, bottom: 5 }}
            curve={shape.curveNatural}
            svg={{
              fill: `${colors.purple}`,
              strokeWidth: 5,
              fillOpacity: 0.1,
            }}>
            <Line color={colors.purple} />
            <Dots color={colors.purple} />
          </AreaChart>
        </GraphContainer>
      </Card>
    </Container>
  );
};
export default Graphs;
