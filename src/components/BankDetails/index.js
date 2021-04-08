import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../../actionCreators';

const BankDetails = (props) => {
    
    const [isFavourite, setIsFavourite] = useState()

    useEffect(() => {
        const x = props.favourites.filter(i => i.ifsc === props.match.params.id)
        console.log(x)
        if(x.length === 0){
            setIsFavourite(false)
        }
        else{
            setIsFavourite(true)
        }
    },[props.favourites])

    console.log(props.bank,isFavourite);

    return (
        <div className="bank-details">
            <h4 className='text-center'>Bank Details</h4>
            <div className="item">
                <p className="label">Bank Name : </p>
                <p className="data">{props.bank[0].bank_name}</p>
            </div>
            <div className="item">
                <p className="label">Bank ID : </p>
                <p className="data">{props.bank[0].bank_id}</p>
            </div>
            <div className="item">
                <p className="label">Branch : </p>
                <p className="data">{props.bank[0].branch}</p>
            </div>
            <div className="item">
                <p className="label">IFSC : </p>
                <p className="data">{props.bank[0].ifsc}</p>
            </div>
            <div className="item">
                <p className="label">Address : </p>
                <p className="data">{props.bank[0].address}</p>
            </div>
            <button onClick={() => isFavourite ? props.removeFavourite(props.bank[0].ifsc) : props.addFavourite(props.bank[0])}>{isFavourite ? 'Remove from Favourites' :'Add To Favourite'}</button>
        </div>
    );
}

const mapStateToProps = (state,ownProps) => {
    return { 
        bank: state.banks.filter(i => i.ifsc == ownProps.match.params.id),
        favourites: state.favourites    
    }
}

export default connect(mapStateToProps,{ addFavourite,removeFavourite })(BankDetails);