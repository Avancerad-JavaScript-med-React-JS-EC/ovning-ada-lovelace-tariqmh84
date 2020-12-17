import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import About from './About';



function App(){
    const name = 'Ada Lovelace';

    return(
        <mian>
        <h2>{name}</h2>
        <Image />
        <About />
        </mian>
    )
}
ReactDOM.render(
    <App/>, document.getElementById('root')
);