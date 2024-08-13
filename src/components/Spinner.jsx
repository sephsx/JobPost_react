import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({ loading }) => {
    return (
        <ClimbingBoxLoader
            color="#36d7b7"
            loading={loading}
            cssOverride={override}
            
        />
    )
}

export default Spinner
