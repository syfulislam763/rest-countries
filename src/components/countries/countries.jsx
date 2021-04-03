import React from 'react';
import shortid from 'shortid';


const Flags = ({countries}) => {
    return<div style={{width:"60%", margin:"0px auto", display:"flex", flexWrap:"wrap", flexDirection:"row", justifyContent:"center"}}>
        {
            countries.map(country => <img key={shortid.generate()} style={{margin:"10px"}} height="100px" width="200px" src={country.flag} alt="" />)
        }
    </div>
}

export default Flags;