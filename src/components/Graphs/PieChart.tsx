import { ResponsivePie } from "@nivo/pie";

interface PieChartProps {
    data: any
}
const PieChart = (props: PieChartProps) => {
    const data = props.data.map((item: any) => {
        return {
            id: item.label,
            label: item.label,
            value: item.value,
            color: "hsl(353, 70%, 50%)"
        }
    })
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={['#0b0378', '#ff6002', '#ff914d', '#bc0067', '#9d306c']}
            activeOuterRadiusOffset={8}
            borderWidth={2}
            arcLabelsTextColor={"white"}
            legends={[
                {
                    anchor: 'left',
                    direction: 'column',
                    justify: false,
                    translateX: -70,
                    translateY: -50,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: 'black',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        ></ResponsivePie>
    )
}
export default PieChart;