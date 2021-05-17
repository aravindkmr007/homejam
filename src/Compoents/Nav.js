import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [Show, sethandleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                sethandleShow(true)
            }
            else sethandleShow(false)
        })
        // return () => {
        //     window.addEventListener('scroll')
        // }
    }, [])
    return (
        <div className={Show ? 'nav_black nav' : 'nav'}>
            <nav className="navbar navbar-expand-lg  navbar-light bg-transparent">
            <img className="logo" src="https://s3-alpha-sig.figma.com/img/d734/0f7f/35f5e6691bad4f951854e70ee7aad23a?Expires=1621814400&Signature=X42koH13f7-Ak7TvUmacwAvB2zwTPfaCxgkWuDMyo8wugMqwZpE3sNS46VvGCV046HbVvqfWMl6RIvlqtuSbUwe2tlQAnFVHXkh7FPRX71HKtaAPg~GWNIK3S46KPirkGtYJKDF9dfd7mjZEtKOmX1hhcwuOY4cSMTKcFG-eCJzdYX0qwIezwQfSIFPW7TstT3RvwswWn1UMtwqye4i-3r~8g6tdEKNL3SEz6GEdailwVWHRZ9zBAtkOACX6ayrLQSx93hPsmh1FwWsz4PjRbmqEuzLwaSw-o5btEP-drzzU2jsTT1~lqi7fovD5Gpx6V4txDGkOIa0TbpZ6bySMRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo" />

                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Help</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Account</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
