import React from 'react';
import { Link, Route } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact, children}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : '';
                return (
                    <Link to={ to } className={ `item ${active}` }>
                        { children } {label}
                    </Link>
                );
            }}
        />);
}

export default MenuLink;
