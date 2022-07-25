import React from 'react'
import { NavBar, DetailProfile, TransactionCardDetail } from './../component'
import { useQuery } from "react-query";
import { API } from '../config/api';
import dateFormat from 'dateformat';

function Profile() {

    let { data: transactions } = useQuery('transactionsCache', async () => {
        const response = await API.get('/transactions')
        return response.data.data.transaction;
    });

    console.log(transactions)

    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className='row'>
                    <DetailProfile />
                    <div className='col-6'>
                        <h5 className='text-orange'>
                            My Transaction
                        </h5>
                        {transactions?.map((item) => {
                            return (
                                <TransactionCardDetail
                                    key={item.id}
                                    id={item.id}
                                    image={item.product.image}
                                    productName={item.product.name}
                                    transactionDate={dateFormat(item.createdAt, 'dddd, d mmmm yyyy')}
                                    price={item.price}
                                    subTotal={item.price}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile