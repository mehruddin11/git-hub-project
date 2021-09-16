import React from 'react';
import styled from 'styled-components';
import {Bar3D, 
	Column3D, Dougnout2D, Pie3D} 
from './chart';
import {useGlobalContext} from '../context/context';
const Repos = () => {
	const  {repos} = useGlobalContext();
  const  languages = repos.reduce((total,item)=>{
    const {language, stargazers_count} = item;
    if(!language)return total;
    if(!total[language]){
     total[language]= {label:language,value:1,stars:stargazers_count} ;
    }
    else{
       total[language]= {...total[language],value:total[language].value+1,
        stars:total[language].stars+stargazers_count} ;

    }
    return total;

  },{})
  const MostusedLang=Object.values(languages).sort((a,b)=>{
    return b.value-a.value;
  }).slice(0,8);
  const mostPoplular = Object.values(languages).sort((a,b)=>{
    return b.stars-a.stars;
  }).map((item)=>{
    return {...item,value:item.stars};

  });

  let {stars,forks}  =repos.reduce((total,item)=>{
    const {stargazers_count,name, forks}= item;
    total.stars[stargazers_count]= {label:name,value:stargazers_count}
    total.forks[forks]= {label:name, value:forks}
    return total;


  },{
    stars:{},
    forks:{}
  }
);
  stars= Object.values(stars).slice(-5).reverse();

   forks = Object.values(forks).slice(-5).reverse();
  return (
		<section className="section">
		<Wrapper className="section-center" >
		<Pie3D data = {MostusedLang} />
    <div> <Column3D data ={stars}/> </div>
    <Dougnout2D data = {mostPoplular} />
    <div> <Bar3D data={forks}/> </div>
		</Wrapper>
		</section>
		)
}
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
