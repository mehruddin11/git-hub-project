import React from 'react';
import styled from 'styled-components';
import LoginImg from '../images/login-img.svg'
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
	React.useEffect(()=>{
		document.title= "login-page"
	},[])
	const {loginWithRedirect} = useAuth0();
	return (
		<Wrapper>
		<div className="container">
		<h1> Github user login</h1>
		<img src={LoginImg} alt ={LoginImg}/>
		<Link to ='/'>
			<button className= "btns" onClick={loginWithRedirect} > Login /sign up</button>
		</Link>
		</div> 
		</Wrapper>
		)
}
const Wrapper = styled.section`
background:var(--clr-grey-5);
min-height:100vh;
display:grid;
place-items:center;
text-transform:captalized;
h1{
	color:var(--clr-primary-10);
}
.container{
	width:90vw;
	max-width:600px;
	text-align:center;
}
img{
	margin-bottom:1.5rem;
}
.btns{
	padding:0.55rem 1rem;
	margin-top:1.5rem;
	text-transform:uppercase;
	font-weight:400;
	font-size:0.875rem;
	border-radius:1em;
	transition:all 0.3s linear;
	background:var(--clr-primary-5);
	color: var(--clr-primary-10);
	text-align:center;
}
.btns:hover{
	background:var(--clr-primary-8);
	color: var(--clr-primary-1);

}
`;
export default Login;