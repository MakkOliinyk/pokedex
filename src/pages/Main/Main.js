import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Link } from 'react-router-dom';

import cx from './Main.css';

const Main = () => {
    return (
        <div className={cx('test')}>
            <Link to="/pokemon/pikachu">Show me Pikachu!</Link>
            In the future we will see a list pokmon here
        </div>
    );
};

export default hot(Main);
