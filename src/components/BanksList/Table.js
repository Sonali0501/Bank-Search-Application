import React, { useMemo } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

const Table = ({pagination,search,data}) => {

    const BankListData = useMemo(() => {
      let computedData = data;

      if (search) {
          computedData = computedData.filter(
              bank =>
                  bank.bank_name.toLowerCase().includes(search.toLowerCase()) ||
                  bank.branch.toLowerCase().includes(search.toLowerCase()) ||
                  bank.ifsc.toLowerCase().includes(search.toLowerCase())
          );
      }

      return computedData

    }, [search]);


    const options = {
      sizePerPage: 10,
      hideSizePerPage: pagination ? false : true,
      showTotal: pagination ? true : false,
      hidePageListOnlyOnePage: true,
      onSizePerPageChange: function (page, sizePerPage) {
        console.log('page', page);
        console.log('sizePerPage', sizePerPage);
      }
    };
    const columns = [
      {
        dataField: 'bank_id',
        text: 'Bank ID'
      },
      {
        dataField: 'bank_name',
        text: 'Bank Name',
        formatter: pagination ? (cell, row, rowIndex, extraData) => (
          <div>
            <Link to={`/banks/${row.ifsc}`}> {cell} </Link>
          </div>
        ) : ''
      },
      {
        dataField: 'ifsc',
        text: 'IFSC'
      },
      {
        dataField: 'branch',
        text: 'Branch'
      }
    ];

    return (
        <BootstrapTable
          keyField="ifsc"
          data={ BankListData }
          columns={ columns }
          pagination={ pagination ? paginationFactory(options) : null }
        />
        
    );
  }

export default Table;