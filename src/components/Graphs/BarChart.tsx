import { ResponsiveBar } from "@nivo/bar"

const BarChart = (props: any) => {
    return (
        <ResponsiveBar
            data={props.data}
            keys={[props.yName]}
            indexBy={props.xName}
            margin={{ top: 10, right: 5, bottom: 40, left: 35 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            colors="#0b0378"
            animate={true}
            enableLabel={false}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: props.xName.toUpperCase(),
                legendPosition: "middle",
                legendOffset: 32}}
            axisLeft={{
                legend: props.yName.toUpperCase(),
                legendPosition: "middle",
                legendOffset: -30
            }}
        />
    )
}
export default BarChart;