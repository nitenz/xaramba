import React from 'react';
import './info.styles.scss';

import outside from '../../assets/exterior-0.jpg';
import outside1 from '../../assets/exteriror-1.jpg';
import inside from '../../assets/interior-0.jpg';
import inside1 from '../../assets/interior-1.jpg';


const Info = () => (
    <div className="info-page">
        <div className="info-page-text-section">
            <div>
                <h1>Pizzaria Xaramba</h1> 
            </div>
            <div>
                <p>Rua Da Carreira nº 67</p>
                <p>9000-042 Sé, Centro</p>
                <p>Aberto das 12:00h - 22:00h de segunda-feira a quinta-feira. Sexta-feira e Sábado das 12:00h - 23:00h </p>
                <p>Temos deliciosas pizzas, massas, saladas e sobremesas</p>
                <p>Telefone: 291229101</p>
                <p>Venha experimentar, esperamos por você!</p>
                <p>Bom apetite</p>
            </div>
        </div>
        <div className="info-page-photos-section">
            <img alt="Foto do interior" src={outside}/>
            <img alt="Foto do interior" src={outside1}/>
            <img alt="Foto do exterior" src={inside}/>
            <img alt="Foto do exterior" src={inside1}/>
        </div>
        
    </div>
)

export default Info;