import classNames from 'classnames/bind';
import styles from './Model.module.scss';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function Model() {
    const [model, setModel] = useState(false);
    return <div>model</div>;
}

export default Model;
