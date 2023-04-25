import { flatten } from 'lodash-es';

export default function createCylinderBarSeries(data: BarSeriesData[], colors: any[], yAxisCount: number) {
  const result = data.map((item, index) =>
    createCylinderSeries(item, colors[index], yAxisCount === 1 ? 0 : index, index)
  );
  const series = flatten(result);
  return series;
}

function createCylinderSeries(seriesData: BarSeriesData, color: any, yAxisIndex: number, index: number) {
  return [
    {
      name: seriesData.name,
      type: 'bar',
      barWidth: 20,
      data: seriesData.data?.map(i => ({ value: i, unit: seriesData.unit })),
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowColor: 'rgba(255, 255, 255, 1)',
        },
      },
      yAxisIndex,
      itemStyle: {
        color,
        borderRadius: [0, 0, 10, 10],
      },
      barGap: index === 0 ? '-30%' : '30%',
      animation: false,
    },
    // 顶部垫片
    {
      z: 3,
      type: 'pictorialBar',
      symbolPosition: 'end',
      data: seriesData.data,
      yAxisIndex,
      symbol: 'circle',
      symbolOffset: [0, '-50%'],
      symbolSize: [20, 10],
      itemStyle: {
        color,
      },
      barWidth: 20,
      barGap: index === 0 ? '-30%' : '30%',
      animation: false,
    },
  ];
}
