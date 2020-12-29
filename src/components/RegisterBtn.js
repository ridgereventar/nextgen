import React from 'react';

import '../index.css';

const RegisterBtn = (props) => {

    return (
        <a href="mailto:nextgenedu@gmail.com?subject=REGISTRATION&body=Full Name:%0D%0APhone number:">
            <button className="register-btn" style={{backgroundColor: props.bg, color: props.color}}>REGISTER</button>
        </a>
    );
}

export default RegisterBtn;