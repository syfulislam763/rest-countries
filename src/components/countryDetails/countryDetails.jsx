import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CountryDetails = (props) => {
    const [country, setCountry] = useState({});
    const {name} = useParams();
    


    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
            .catch(e=> {
                console.log(e.message);
            })
    }, [name])



        console.log(country)
       return <table>
           <tbody>
                <tr>
                    <th>Country</th>
                    <th>{country.name}</th>
                </tr>
                <tr>
                    <td>Flag</td>
                    <td><img height="100px" width="200px" src={`${country.flag}`} alt=""/></td>
                </tr>
                <tr>
                    <td>Native name</td>
                    <td>{country.nativeName}</td>
                </tr>
                <tr>
                    <td>Capital</td>
                    <td>{country.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area} km²</td>
                </tr>
                <tr>
                    <td>Region</td>
                    <td>{country.region}</td>
                </tr>
                <tr>
                    <td>Sub Region</td>
                    <td>{country.subregion}</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{country.population}</td>
                </tr>
                <tr>
                    <td>Timezone</td>
                    <td>{country.timezones}</td>
                </tr>
           </tbody>
        </table>
}


export default CountryDetails;