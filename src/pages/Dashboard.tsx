
import { useEffect, useState } from 'react';
import BarChart from '../components/Graphs/BarChart';
import useAPI from '../hooks/useApi';
import './Dashboard.css';
import PieChart from '../components/Graphs/PieChart';
import InfoCard from '../components/InfoCard/InfoCard';
import BarCanvasChart from '../components/Graphs/BarCanvasChart';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

export interface DashboardRequest {
    articles_in_last_triennium: number;
    articles_per_year: [{ ano: string, count: number }];
    articles_per_field: [{ label: string, value: number }];
    articles_per_stratum: [{ estrato: string, count: number }];
    authors_with_supervision_count: [{ dissertacao_mestrado: number, nome_completo: string, tese_doutorado: number, trabalho_conclusao_graduacao: number, trabalho_iniciacao_cientifica: number }];
    total_articles: number;
    supervisions_in_last_triennium: number;
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
            const { data } = await api.get('/api/dashboard/')
            setDashboardData(data)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            alert('ERRO')
            console.log(error);
        }
    }

    return (
        <div className="dashboard-page">
            <div className="sidebar-side">
                <Sidebar />
            </div>
            <div className="content-side">
                <Header />
                {!loading ? (
                    <div>
                        <div className="info-cards-container">
                            <InfoCard
                                title="Orientações no último triênio"
                                value={dashboardData?.supervisions_in_last_triennium}
                            />
                            <InfoCard
                                title="Artigos Publicados"
                                value={dashboardData?.total_articles}
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
                        <div className="one-line-graph">
                            <p className="graph-header">Orientadores x Quantidade de dissertações defendidas</p>
                            <div className="graph-container-full">
                                <BarCanvasChart
                                    data={dashboardData?.authors_with_supervision_count}
                                    xName="nome_completo"
                                    yName={["dissertacao_mestrado", "tese_doutorado", "trabalho_conclusao_graduacao", "trabalho_iniciacao_cientifica"]}
                                />
                            </div>
                        </div>
                    </div>
                ) : (<h1>Carregando...</h1>)}
            </div>
        </div>
    )
}
export default Dashboard;