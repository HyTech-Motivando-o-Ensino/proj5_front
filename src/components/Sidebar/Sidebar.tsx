import './Sidebar.css'
import iconDashboard from '../../assets/icon-dashboard.svg'
import iconResearcher from '../../assets/icon-researcher.svg'
import iconProduction from '../../assets/icon-production.svg'
import iconAdd from '../../assets/icon-add.svg'
import iconPermission from '../../assets/icon-permission.svg'
import iconDownload from '../../assets/icon-download.svg'

const Sidebar = () => {

    return (

        <div className="sidebar">
            <p className="text1">Sci<label className="text2">CESAR</label></p>
            <div className="mark">
                <button className="button-dashboard">
                    <img src={iconDashboard}></img>
                    <p className="text-chosen">Dashboard</p>
                </button>
            </div>
            <button className="button-container">
                <img src={iconResearcher}></img>
                <p className="text-other">Pesquisadores</p>
            </button>
            <button className="button-container">
                <img src={iconProduction}></img>
                <p className="text-other">Produções</p>
            </button>
            <button className="button-container">
                <img src={iconAdd}></img>
                <p className="text-other">Adicionar</p>
            </button>
            <button className="button-container">
                <img src={iconPermission}></img>
                <p className="text-other">Permissões</p>
            </button>
            <button className="button-download">
                <img src={iconDownload}></img>
                <p className="text-chosen">Baixar XML’s</p>
            </button>
        </div>
    )
}
export default Sidebar;