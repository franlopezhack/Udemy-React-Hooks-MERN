import React, { Fragment } from 'react';
import PropTypes from 'prop-types'


function PrimeraApp({saludo}) {

   
    return (
        <>
            <h1>{saludo}</h1>
            <p>Mi primera aplicación</p>
        </>
    )

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string,
    name: PropTypes.string.isRequired
}

export default PrimeraApp