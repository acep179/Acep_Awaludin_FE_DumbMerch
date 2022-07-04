import React from 'react'
import { NavBar } from './../component'
import Products from './../assets/img/product1.png'

function DetailProduct() {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className='row justify-content-center'>
                    <img className='h-100 col-4' src={Products} alt="Products" />
                    <div className='ms-5 col-6'>
                        <h1 className='text-orange'>Mouse</h1>
                        <p>Stock: 600</p>
                        <ul>
                            <li>Wireless Mouse</li>
                            <li>Konektivitas wireless 2.4 GHz</li>
                            <li>Jarak wireless hingga 10m</li>
                            <li>Plug and Play</li>
                            <li>Baterai tahan hingga 12 bulan</li>
                        </ul>
                        <p className='text-justify'>
                            Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                        </p>
                        <p className='text-orange text-end fs-3 fw-bold'>300.900</p>
                        <p className='btn btn-orange w-100'>Buy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct