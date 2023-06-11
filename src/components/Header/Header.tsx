import './Header.css'

import SearchButton from '../../assets/searchButton.svg';
import FunilIcon from '../../assets/funil.svg';
import NotificationsIcon from '../../assets/notifications.svg';
import ReloadIcon from '../../assets/reload.svg';
import UserIcon from '../../assets/user.svg'

const Header = () => {

    return (

        <div className="header">
            <div className="reload">
                <img src={ReloadIcon} alt="" />
                <p className="text-reload">Recarregar Informações</p>
            </div>
            <div className="search">
                <input type="text" className="input-search"  />
                <img src={SearchButton} alt="Search Button" className="search-buton" />
            </div>
            <div className="header--icons">
                <img src={FunilIcon} alt="" />
                <img src={NotificationsIcon} alt="" />
                <img src={UserIcon} alt="" />
            </div>
        </div>
    )
}
export default Header;