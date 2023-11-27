import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project'
import '@/assets/components/Public/ProjectList.css'

class ProjectList extends Component {

    state = {
        projects:portfolioData,

        radios:[
            {id: 1, value: "javascript"},
            {id: 2, value: "python"},
            {id: 3, value: "react"},
            {id: 4, value: "java"}
        ],
    
        selectedRadio:'javascript'
    }

    handleRadio = (event) =>{
        let radio = event.target.value
        this.setState({selectedRadio : radio})
        console.log("selectedRadio : ", radio)
    }

    render() {

        let {projects, radios, selectedRadio} = this.state;

        return (

           
            <div className='portfolioContent'>
            <ul className='radioDisplay'>
                {
                    radios.map((radio) => {
                        return(
                            <li key={radio.id}><input type='radio' name='radio' checked={radio.value === selectedRadio} value={radio.value} id={radio.value} onChange={this.handleRadio}/>
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='projects'>
                {
                    projects.filter(item => item.langagues.includes(selectedRadio)).map(item => {
                        return(
                            <Project key={item.id} item = {item} />
                        )
                    })
                }
            </div>
        </div>
        );
    }
}

export default ProjectList;

/*import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project'
import '@/assets/components/Public/ProjectList.css'


const ProjectList = () => {

    const  projects = portfolioData

    const radios=[
        {id: 1, value: "javascript"},
        {id: 2, value: "python"},
        {id: 3, value: "react"},
        {id: 4, value: "java"}
    ]

    const selectedRadio = 'javascript'

    const handleRadio = (event) =>{
        let radio = event.target.value
        this.selectedRadio({selectedRadio : radio})
    }
    return (
        <div className='portfolioContent'>
            <ul className='radioDisplay'>
                {
                    radios.map((radio) => {
                        return(
                            <li key={radio.id}><input type='radio' name='radio' checked={radio.value === selectedRadio} value={radio.value} id={radio.value} onChange={handleRadio}/>
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='projects'>
                {
                    projects.map(item => {
                        return(
                            <Project  
                                key={item.id}
                                item = {item}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProjectList;*/