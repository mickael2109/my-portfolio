import React, { useState } from 'react';
import '@/assets/pages/Public/portfolio.css'

const Portfolio = () => {

  return (
      <section className='portfolio' id='portfolio'>
        <div className='' id='contentTitre'>
            <span>MES <span className='titre'>PROJETS</span></span>
        </div>
        <div className='project'>
          {/* {data && data.map((item, index) => {
              return(
                 
                  <div className='' id='box-projet' key={index}>
                     <div className='image-projet'>
                        <img src={`http://localhost:5000/images/`+item.photo} alt='profile'></img>
                      </div>
                      <div className='description-projet'>
                        <div className='cont titre-projet'><span>{item.nomProjet}</span></div>
                        <div className='cont desc-projet'><span>Technologies : {item.langage}</span></div>
                        <div className='cont btn-projet'><button type='submit'>Voir</button></div>
                      </div>
                  </div>
              )
          })} */}

          <div className='' id='box-projet'>
           
           
          </div>

          

        </div>
      </section>
    
  );



  /*
  <table className='styled-table'>
              <thead>
                  <tr>
                      <th style={{textAlign: "center"}}>ID. </th>
                      <th style={{textAlign: "center"}}>Nom </th>
                      <th style={{textAlign: "center"}}>Langage </th>
                      <th style={{textAlign: "center"}}>lien GitHub </th>
                      <th style={{textAlign: "center"}}>Photo </th>
                      <th style={{textAlign: "center"}}>Desription </th>
                      <th style={{textAlign: "center"}}>Like </th>
                  </tr>
              </thead>
              <tbody>
                  {data && data.map((item, index) => {
                      return(
                          <tr key={index}>
                              <th scope='row'>{index + 1 }</th>
                              <td>{item.nomProjet}</td>
                              <td>{item.langage}</td>
                              <td>{item.lienGit}</td>
                              <img src={item.photo} alt='profile'></img>
                              <td>{item.description}</td>
                              <td>{item.likeProjet}</td>
                          </tr>
                      )
                  })}
              </tbody>
            </table>
          */
 

};

export default Portfolio;

