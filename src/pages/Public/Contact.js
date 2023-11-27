import React from 'react';
import { FaMap, FaPhone, FaShare } from 'react-icons/fa';
import '@/assets/pages/Public/contact.css'

const Contact = () => {
    return (
        <section className='' id='contact'>
            <div className='' id='contentTitre'>
               <span className='titre'>CONTACT</span>
            </div>
            <div className='contenuContact'>
                <div className='col-md-4 grid-margin stretch-card' id='myContact'>
                    <div className='icon'><i><FaPhone/></i><span className='txtContact'>038 10 993 79</span></div>
                    <div className='icon'><i><FaShare/></i><span className='txtContact'>mickaelrkt20@gmail.com</span></div>
                    <div className='icon'><i><FaMap/></i><span className='txtContact'>Lot E 199 AM Antsofinondry Sabotsy Namehana</span></div>
                </div>
                
                <div className='col-md-6 grid-margin stretch-card' id='sendMessage'>
                    <div className='inputMes'>
                        <div className=''><input type='text' className='txtMes'placeholder='Nom et prénom'/></div>
                        <div className=''><input type='text' className='txtMes' placeholder='Adresse Email'/></div>
                    </div>
                    <div className='inputMes'>
                        <div className=''><input type='text' className='txtMes' placeholder='Numéro téléphone'/></div>
                        <div className=''><input type='text' className='txtMes' placeholder='Objet Email'/></div>
                    </div>
                    <div className='inputMes'>
                        <textarea name="" id="" cols="60" rows="5" className='txtMesEcrit' placeholder='Votre message'></textarea>
                    </div>
                    <div className='inputMes'>
                        <button type="submit" id='btnEnvoyerMsg'>Envoyer</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;