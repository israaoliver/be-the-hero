import React from 'react';

export default function Header({ children }){
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}

/**
 * Pode tambem fazer a exportação depois do function:
 *    export default Header;
 */