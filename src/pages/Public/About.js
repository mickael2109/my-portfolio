import React, {useState, useEffect } from 'react';
import '@/assets/pages/Public/about.css'
import ProjectList from '../../components/Public/ProjectList';
import axios from "axios"

const About = () => {


    return (
        <section className='about' id='about'>
           <ProjectList/>
        </section>
    );
};

export default About;