import React, { useContext } from 'react'
import { NavBar, DetailProfile, TransactionCardDetail } from './../component'
import { useQuery } from "react-query";
import { API } from '../config/api';
import dateFormat from 'dateformat';
import { UserContext } from '../context/userContext';

function Profile() {
    const [state, dispatch] = useContext(UserContext);
    const id = state.user.id

    let { data: transactions } = useQuery('transactionsCache', async () => {
        const response = await API.get('/transactions')
        return response.data.data.transaction;
    });

    let { data: profile } = useQuery('profileCache', async () => {
        const response = await API.get(`/user/${id}`)
        return response.data.data;
    });

    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className='row'>
                    <DetailProfile
                        key={profile?.id}
                        id={profile?.id}
                        image={profile?.profile.image}
                        name={profile?.name}
                        email={profile?.email}
                        phone={profile?.profile.phone}
                        gender={profile?.profile.gender}
                        address={profile?.profile.address}
                    />
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