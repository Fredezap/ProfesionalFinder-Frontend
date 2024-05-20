import LargePrimaryButton from '../atoms/buttons/LargePrimaryButton';
import WhiteButton from '../atoms/buttons/WhiteButton';
import Logo from '../atoms/others/Logo';
import { createRoutesSlice } from '../../store/slices/createRoutesSlice';

const HeaderNavbar = () => {
    const { routes } = createRoutesSlice();
    
    return (
        <div className='flex flex-row fixed top-0 left-0 h-24 bg-blue-900 w-full justify-between items-center px-10'>
            <Logo to={routes.home}/>
            <div className='flex items-center justify-end space-x-4'>
                <WhiteButton to={routes.register}>Register</WhiteButton>  
                <LargePrimaryButton to={routes.login}>Login</LargePrimaryButton>    
            </div>
        </div>
    );
}

export default HeaderNavbar;
