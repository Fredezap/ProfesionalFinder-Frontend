import React from 'react';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import './others.css'
import { MdOutlineSecurity } from "react-icons/md";

const Logo = () => {
    return (
        <div className='logoBox'>
            <MdOutlineSecurity className='logo' />
            <p>Logging app</p>
        </div>
    );
}

export default Logo;
