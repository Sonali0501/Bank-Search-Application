import React from 'react';

const Dropdown = ({ label, dataList, initialValue, onChange }) => {
    return (
        <div className='dropdown'>
            <label>{label}: </label>
            <select className="form-control" style={{ display:'initial', width:'max-content' }} onChange={(e) => onChange(e.target.value)}>
                {dataList.map((item,index) => {
                    return <option key={index} selected={initialValue === item ? true : false} value={item}>{item}</option>
                })}
                
            </select>
        </div>
    );
}

export default Dropdown;