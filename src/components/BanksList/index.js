import React, {useState, useEffect} from 'react';
import {CITIES} from '../../Data';
import Dropdown from './Dropdown';
import Search from './Search';
import Table from './Table';
import { fetchData, setCityState } from '../../actionCreators';
import { connect } from 'react-redux';

const BankList = (props) => {

    const [city,setCity] = useState(props.city === '' ? CITIES[0] : props.city);
    const [search,setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        props.setCityState(city);
        const getData = async () => {
            setIsLoading(true);
            await props.fetchData(city)
            .then(() => {
                setIsLoading(false);
                console.log(props.banks);
            })
                
        }

        getData();
    },[city]);

    return (
        <div className="bank-list">
            <div className="sub-header">
                <Dropdown label='Choose City' initialValue={city} dataList={CITIES} onChange={e => setCity(e)} />
                <Search onSearch={value => setSearch(value)} />
            </div>
            {isLoading ? <div className="loader">
                          Loading... </div> 
                    : <div className='table'><Table pagination search={search} data={props.banks} /></div>}
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return { banks: state.banks, city: state.city }
}

export default connect(mapStateToProps,{fetchData, setCityState})(BankList);