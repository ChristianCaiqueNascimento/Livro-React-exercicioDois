import React from 'react'
import Logo from './Logo'
import Navegacao from './Navegacao'
const Topo = () => {
    return (
        <div>
            <header className="topo">
                <Logo/>
                <Navegacao/>
            </header>
        </div>
    );
};
export default Topo;