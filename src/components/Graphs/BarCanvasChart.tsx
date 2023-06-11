import { ResponsiveBarCanvas } from "@nivo/bar";

interface BarCanvasChartsProps {
    data: any;
    xName: string;
    yName: string[];
}

const BarCanvasChart = (props: BarCanvasChartsProps) => {
    const data = props.data.map((item: any) => {
        return {
            "Nome Completo": item.nome_completo,
            "Trabalho Conclusao Graduacao": item.trabalho_conclusao_graduacao,
            "Dissertacao Mestrado": item.dissertacao_mestrado,
            "Tese Doutorado": item.tese_doutorado,
            "Trabalho Iniciacao Cientifica": item.trabalho_iniciacao_cientifica
        }
    });
    return (
        <ResponsiveBarCanvas
            data={data}
            keys={[
                "Trabalho Conclusao Graduacao",
                "Dissertacao Mestrado",
                "Tese Doutorado",
                "Trabalho Iniciacao Cientifica"
            ]}
            indexBy="Nome Completo"
            margin={{ top: 50, right: 215, bottom: 140, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            enableGridX={false}
            enableGridY={false}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Quantidade',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}
export default BarCanvasChart;