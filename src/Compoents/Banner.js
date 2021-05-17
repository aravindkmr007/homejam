import React,{useEffect,useState} from 'react'
import './Banner.css'
function Banner() {
    
    return (
        <header style={
            {
                backgroundSize : 'Cover',
                backgroundImage :  "url" + "(https://s3-alpha-sig.figma.com/img/8e38/7f00/fd5ed16a69cccc86d41be47a11ab8c86?Expires=1621814400&Signature=JYsGDoJuwN3ppY2OkBufDhVWzcac7HA2zJ3bV7okJE3QFWW1S4oTMe77kKDh~5dhpUvcutwG~An2iQ7btizaEkbnSBv~2ZdYig5GR-JYkOMF3UZ1apUbvkHYBsnPhHHXvSkwFtLNAnl9voeKkRCNaGTozUmjDiP--AdBEBwKm8HUeTylLg1QZWJ3TgUba3P-uESI6ZroHnBzPY4qBI2ntcxuEdEYPO3e2783dlkcEy9L-MsL-wbXuNlwJ9C4Rcv-xoqMhCzTX56vNqPJmAAgVjNI034HQToUHb-yoS6ozhjNIUjiM2pUfN8tM1qM2cMAkSrKU4a1OrtUN0obwDNW9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)",
                backgroundPosition : "center"
                
            }
        } className="col-lg-12 col-md-12 col-sm-12">
            <div className='banner_Name' >
            <h1>Cari Cari</h1>
            <div className='banner_Contents'>
                Live from thier sofa to yours.Get closer to your favorite artists and never miss out
            </div>
            <div className='banner_fade'>

            </div>
            
            </div>
        </header>
    )
}

export default Banner
