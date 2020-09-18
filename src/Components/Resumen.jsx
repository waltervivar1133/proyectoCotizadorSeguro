import React from 'react'
import styled from '@emotion/styled'
import {primeraMayuscula} from '../helper'

const ConetenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color : #fff;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {

    const {marca , year , plan } = datos
    if (marca === '' || year === '' || plan === '') 
    return null;
    return ( 
    <ConetenedorResumen>
    <h2>Resumen de cotizacion</h2> 
    <ul>
        <li>Marca : {primeraMayuscula(marca)}</li>
        <li>Plan : {primeraMayuscula(plan)}</li>
        <li>Año del auto : {year} </li>

    </ul>
    </ConetenedorResumen>
    );
}
 
export default Resumen;