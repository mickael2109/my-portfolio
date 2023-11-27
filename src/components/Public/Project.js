import React, { Component } from 'react';
import '@/assets/components/Public/Project.css'
import { FaFacebook, FaGithub, FaPlusCircle } from "react-icons/fa"

class Project extends Component {

    state = {
        showInfo : false
    }

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {

        const {name, langagues, languagesIcons, source, info, picture} = this.props.item

        return (
            <div className='myProject'>
                <div className='icons'>            
                    <i><FaFacebook/></i>
                    <i><FaGithub/></i>                        
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
                <div>
                    <img src={picture} alt='' onClick={this.handleInfo}/>
                </div>
                <div>
                    <span className='infos' onClick={this.handleInfo}> 
                            <i><FaPlusCircle/></i>
                    </span>
                </div>

                {
                    this.state.showInfo && (
                        <div className='showInfo'>
                            <div className='infosContent'>
                                <div className='head'>
                                    <h2>{name}</h2>
                                </div>
                                <div className='sourceCode'>
                                    <a href={source} rel='noopener noreferrer' className='button' target='_blank'> Code Source</a>
                                </div>
                                <p>{info}</p>
                                <div className='button-return'  onClick={this.handleInfo}>Retourner sur la page</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;