import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaVoicemail, FaWhatsapp } from "react-icons/fa"
import '@/assets/pages/Public/Home.css'

const Home = () => {

    const PDF_FILE_URL = 'http://localhost:3000/RAKOTONDRAVONY_REF242_FB.pdf'

    const downloadCv = () => {
        const fileName = PDF_FILE_URL.split("/").pop()
        const aTag = document.createElement("a")
        aTag.href = PDF_FILE_URL
        aTag.setAttribute("download", fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    // 
    return (
        <section className='' id='home'>
            <div className='' id='home-img'>
                <div className='glowing-circle'>
                    <span></span>
                    <span></span>
                    <div className='image'>
                        <img src='./media/myprofile.png' alt='profile'></img>
                    </div>
                </div>
            </div>
            <div className='' id='aboutMe'>
                <div>
                    <p className='myInfo'>Hello, It's me <span className='textExp'>Mickael RAKOTONDRAVONY </span>, and I'm a <span className='textExp'> Developper</span></p>
                    <p className='myInfoHisto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore, voluptas doloremque similique, corporis explicabo qui illo soluta possimus quibusdam eligendi, temporibus beatae veniam facere laudantium recusandae sint hic debitis.</p>
                </div>
                <div className='' id='reseauSocio'>
                    <li className='col-md-2 grid-margin stretch-card'><Link to='#home'><i><FaFacebook/></i></Link></li>
                    <li className='col-md-2 grid-margin stretch-card'><Link to='#home'><i><FaVoicemail/></i></Link></li>
                    <li className='col-md-2 grid-margin stretch-card'><Link to='#home'><i><FaLinkedin/></i></Link></li>
                    <li className='col-md-2 grid-margin stretch-card'><Link to='#home'><i><FaGithub/></i></Link></li>
                    <li className='col-md-2 grid-margin stretch-card'><Link to='#home'><i><FaWhatsapp/></i></Link></li>
                </div>
                <div className='btnCv'>
                    <button id='btnDownloadCv' type='submit' onClick={()=> downloadCv()}>TELECHARGER LE CV</button>
                </div>
              
            </div>
        </section>
    );
};

export default Home;