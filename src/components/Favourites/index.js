import React from 'react';
import { connect } from 'react-redux';
import { removeFavourite } from '../../actionCreators';
import Table from '../BanksList/Table';

const Favourites = (props) => {
    return (
        <div className='favourites'>
            <h4 className='text-center'>Favourite Banks</h4>
            {props.favourites.length === 0 ? <div className="no">No Favourites Added</div>
                : <Table data={props.favourites} />}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { 
        favourites: state.favourites    
    }
}

export default connect(mapStateToProps,{removeFavourite})(Favourites);