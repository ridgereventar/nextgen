import React from 'react';

import '../index.css';

const RegisterBtn = (props) => {

    return (
        <a href="mailto:nextgenedu@gmail.com?subject=REGISTRATION&body=Full Name:%0D%0APhone number:">
            <button className="register-btn">REGISTER</button>
        </a>
    );
}

export default RegisterBtn;