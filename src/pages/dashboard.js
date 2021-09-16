import React from 'react';
import {
	Info, 
	Navbar, 
	Repos, 
	SearchBox, 
Users
} 
from '../components'
import LoadingImage from '../images/preloader.gif';
import {useGlobalContext} from '../context/context'
// import styled from 'styled-components';
const DashBoard = () =>{
React.useEffect(()=>{
	document.title ="dashboard";

},[])
const  {loading} = useGlobalContext();
if(loading){
	return <main>
	<Navbar/>
	<SearchBox/>
	<img src ={LoadingImage} className ="loading-img" 
	alt ="loading"/>
	</main>
}

	return (
		<div>
			<Navbar/>
			<SearchBox/>
			<Info/>
			<Users/>
			<Repos/>
		</div>

		)
}
export default DashBoard;