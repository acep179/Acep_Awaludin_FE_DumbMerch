import React from 'react'
import { NavBar } from './../../component'
import { useMutation, useQuery } from "react-query";
import { API } from '../../config/api';
import { useNavigate, useParams } from 'react-router-dom';


function DetailProduct() {

    const { id } = useParams()
    const navigate = useNavigate()
    console.log(typeof (id))

    let { data: product } = useQuery('productCache', async () => {
        const response = await API.get('/product/' + id)
        return response.data.product;
    });

    const handleBuy = useMutation(async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };

            const data = {
                idProduct: product.id,
                idSeller: product.user.id,
                price: product.price,
            };

            const body = JSON.stringify(data);

            await API.post('/transaction', body, config);

            navigate('/profile');
        } catch (error) {
            console.log(error);
        }
    });


    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <img className='h-100 col-4' src={product?.image} alt={product?.name} />
                    <div className='ms-5 col-6'>
                        <h1 className='text-orange'>{product?.name}</h1>
                        <p>Stock: {product?.qty}</p>
                        <ul>
                            <li>Wireless Mouse</li>
                            <li>Konektivitas wireless 2.4 GHz</li>
                            <li>Jarak wireless hingga 10m</li>
                            <li>Plug and Play</li>
                            <li>Baterai tahan hingga 12 bulan</li>
                        </ul>
                        <p className='text-justify'>
                            {product?.desc}
                        </p>
                        {/* Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS. */}
                        <p className='text-orange text-end fs-3 fw-bold'>{product?.price}</p>
                        <button
                            className='btn btn-orange w-100'
                            onClick={(e) => handleBuy.mutate(e)}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct