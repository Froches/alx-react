import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';


function Footer() {
    <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
    </div>
}

export default Footer;