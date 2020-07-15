import React from 'react';
import Auxiliary from '../HOC/Auxiliary';
import classes from './Layout.css'

const Layout =( props ) => (
    <Auxiliary>
    <div> TOOLBAR ,SIDEBAR,BACKDROP</div>
    <main className={classes.Colp}>
        {props.children}
    </main>
    </Auxiliary>
);

export default Layout;