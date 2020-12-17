import React from 'react';

function Image(){
    const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg';

    return(
        <img src={imgSrc} width='300'></img>
    )
}

export default Image;