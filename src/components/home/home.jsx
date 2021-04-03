import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import './home.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import CountryDetails from '../countryDetails/countryDetails';
import Flags from '../countries/countries';



const CountryName = ({country}) => {
    return <h1 className="countryName"><Link style={{textDecoration:"none"}} to={`/details/${country}`}>{country}</Link></h1>
}



const Home = () => {
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(countries => {
                setCountries(countries);
            })
            .catch(e=> console.log(e.message))
    }, [])


    const handleSearch = e => {
        setSearchValue(e.target.value)
    }

    let filteredCountry = countries.filter(d => d.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));

    return<div>
        <Router>

            <div style={{display:"flex",width:"80%",margin:"20px auto", flexDirection:"row",justifyContent:"space-between"}}>
                <ul>
                    <li><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
                    <li><Link style={{textDecoration:"none"}} to="/flags">Flags</Link></li>
                </ul>
                <Route exact path="/">
                    <input value={searchValue} onChange={handleSearch} placeholder="Search country" style={{padding:"0px 10px",width:"30%"}} type="search" />
                </Route>
            </div>



            <Switch>

                <Route exact path="/">
                    <div className="countries">
                    <h1>Countries</h1>
                        {
                            filteredCountry.map(country => (
                                <CountryName key={shortid.generate()} country={country.name} />
                            ))
                        }
                    </div>
                </Route>


                <Route exact path="/details/:name">
                    <div style={{width:"70%",margin:"0px auto"}}>
                        <CountryDetails/>
                    </div>
                </Route>

                <Route exact path="/flags">
                    <Flags countries={countries} />
                </Route>


                <Route exact path="*">
                    <div style={{ width:"50%", margin:"0px auto", textAlign:"center"}}>
                        <h1 style={{color:"red"}}>404 NOT FOUND!</h1>
                    </div>
                </Route>

            </Switch>
        </Router>


    </div>
}


export default Home;