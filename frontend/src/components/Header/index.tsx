import {HeaderContainer, HeaderWrapper, UserInfo} from './styles';
import UserCircle from '../UserCircle';

import logoInter from '../../assets/images/Inter-orange.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
   
    const navigate = useNavigate();

    const handleLogoff = () => {
        navigate('/signin')
    }
    return (
        <HeaderContainer>
            <HeaderWrapper>
                   <img src={logoInter} width={172} height={61} alt="logo inter" />
                <UserInfo>
                  <UserCircle initials="VF" />
                  <div>
                      <p>Olá, <span className="primary-color font-bold">Vinícius</span></p>
                      <strong>1954562-1</strong><br/>
                      <a href="#" onClick={handleLogoff}>Sair</a>
                  </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header