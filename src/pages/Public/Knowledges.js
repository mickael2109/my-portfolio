import React from 'react';
import '@/assets/pages/Public/knowledge.css'
import { FaCode, FaDatabase, FaReact } from 'react-icons/fa';
import ProgressBar from '../../components/Public/ProgressBar';

const Knowledges = () => {

    const languages = [
        { id: 1, value: "PHP", xp: 2 },
        { id: 2, value: "JAVA", xp: 1.8 },
        { id: 3, value: "PYTHON", xp: 1.5 },
        { id: 4, value: "C#", xp: 0.8 },
    ]

    return (
        <section className='' id='knowledge'>
            <div>
                <div className='' id='contentTitre'>
                    <span>MES <span className='titre'>TECHNOLOGIES</span></span>
                </div>
                <div className='' id='listeTechno'>
                    <div className='' id='boxCompetence'>
                        <div className='icon'><i><FaCode/></i></div>
                        <div className='titreBox'><span>Langages de programmation</span></div>
                        <div className='images'>
                            <img src='./media/cSharp.svg' alt='icone'/>
                            <img src='./media/java.png' alt='icone'/>
                            <img src='./media/python.png' alt='icone'/>
                            <img src='./media/php.png' alt='icone'/>
                            <img src='./media/javascript.png' alt='icone'/>
                        </div>
                        <div className='description'></div>
                    </div>
                    <div className='' id='boxCompetence'>
                            <div className='icon'><i><FaReact/></i></div>
                            <div className='titreBox'><span>Framework</span></div>
                            <div className='images'>
                                <img src='./media/react.png' alt='icone'/>
                                <img src='./media/symfony.png' alt='icone'/>
                                <img src='./media/django.svg' alt='icone'/>
                                <img src='./media/nodejs.svg' alt='icone'/>
                                <img src='./media/express.svg' alt='icone'/>
                            </div>
                            <div className='description'></div>
                    </div>
                    <div className='' id='boxCompetence'>
                            <div className='icon'><i><FaDatabase/></i></div>
                            <div className='titreBox'><span>Base de donnée</span></div>
                            <div className='images'>
                                <img src='./media/postgre.png' alt='icone'/>
                                <img src='./media/mysql.png' alt='icone'/>
                                <img src='./media/mongodb.svg' alt='icone'/>
                                <img src='./media/sqlite.svg' alt='icone'/>
                            </div>
                            <div className='description'></div>
                    </div>
                </div>
            </div>
           
            <div className='progressBar'>
                <ProgressBar languages={languages} className="languageDisplay" title="Languages"/>
            </div>
        </section>
       
    );
};

export default Knowledges;