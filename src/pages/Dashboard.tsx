
import { useEffect, useState } from 'react';
import BarChart from '../components/Graphs/BarChart';
import useAPI from '../hooks/useApi';
import './Dashboard.css';
import PieChart from '../components/Graphs/PieChart';
import InfoCard from '../components/InfoCard/InfoCard';

export interface DashboardRequest {
    articles_in_last_triennium: number;
    articles_per_year: [{ ano: string, count: number }];
    articles_per_field: [{ label: string, value: number }];
    articles_per_stratum: [{ estrato: string, count: number }];
    authors_with_supervision_count: [{ dissertacao_mestrado: number, nome_completo: string, tese_doutorado: number, trabalho_conclusao_graduacao: number, trabalho_iniciacao_cientifica: number }];
    total_articles: number;
}

const Dashboard = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [dashboardData, setDashboardData] = useState<DashboardRequest>()

    useEffect(() => {
        requestData();
    }, [])

    const requestData = async () => {
        const api = useAPI();
        try {
            setLoading(true);
            const { data } = await api.get('e8feff5c-17a1-4179-af91-8677e1d0d6f4')
            setDashboardData(data)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            alert('ERRO')
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Bar</h1>
            {!loading ? (
                <div>
                    <div className="info-cards-container">
                        <InfoCard
                            title="Colaboradores na área de pesquisa"
                            value={"?????"}
                        />
                        <InfoCard
                            title="Artigos Publicados"
                            value={dashboardData?.total_articles}
                        />
                        <InfoCard
                            title="Artigos na área de dados"
                            value={"?????"}
                        />
                        <InfoCard
                            title="Publicados no último triênio"
                            value={dashboardData?.articles_in_last_triennium}
                        />
                    </div>
                    <div className="cards">
                        <div className="graph-card">
                            <p className="graph-header">Quantidade de dissertações X Ano</p>
                            <div className="graph-container">
                                <BarChart
                                    data={dashboardData?.articles_per_year}
                                    xName="ano"
                                    yName="count"
                                />
                            </div>
                        </div>
                        <div className="graph-card">
                            <p className="graph-header">Dissertações X Publicações por ano</p>
                            <div className="graph-container">
                                <BarChart
                                    data={dashboardData?.articles_per_stratum}
                                    xName="estrato"
                                    yName="count"
                                />
                            </div>
                        </div>
                        <div className="graph-card">
                            <p className="graph-header">Dissertações X Publicações por ano</p>
                            <div className="graph-container">
                                <PieChart
                                    data={dashboardData?.articles_per_field}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<h1>Carregando...</h1>)}
        </div>
    )
}
export default Dashboard;