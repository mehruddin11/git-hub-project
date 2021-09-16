import React from 'react';
import styled from 'styled-components';
import{GoRepo, GoGist} from 'react-icons/go';
import {FiUser, FiUserPlus} from 'react-icons/fi';
import {useGlobalContext} from '../context/context'
const Info = () => {
	const {githubuser} =useGlobalContext();
	// console.log(githubuser);
	const {public_repos, 
			public_gists, 
			followers, 
			following} = githubuser;
	const items = [
	{
		id:1,
		icon:<GoRepo  className="icon" />,
		label:'repos',
		value:public_repos,
		color:'pink'
	},
	
	{
		id:2,
		icon:<FiUser  className="icon" />,
		label:'followers',
		value:followers,
		color:'purple'
	},
	{
		id:3,
		icon:<FiUserPlus  className="icon" />,
		label:'following',
		value:following,
		color:'yellow'
	},
	{
		id:4,
		icon:<GoGist  className="icon" />,
		label:'Gists',
		value:public_gists,
		color:'green'
	},
];

return (
	<section className="section">
	<Wrapper className="section-center">
	{
		items.map((item)=>{
			return <List key = {item.id} {...item}/>
		})
	}
	 
	</Wrapper>
	</section>
		)
};
const List=({icon, value, label, color}) =>{
	return <article  className='item' >
		<span className={color}>{icon}</span>
		<div>
			<h3>{value} </h3>
			<p> {label} </p>
		</div>
	</article>
}
const Wrapper = styled.section`
display:grid;
grid-template-columns:repeat(auto-fill, minmax(200px , 1fr));
gap:1rem 2rem;
@media(min-width:600px){
	grid-template-columns:repeat(auto-fill, minmax(260px , 1fr));
}
.item{
	border-radius:var(--radius);
	padding:1rem 2rem;
	background:var(--clr-white);
	display:grid;
	grid-template-columns:auto 1fr;
	coloumn-gap:3rem;
	align-items:center;
	span{
		width:3rem;
		height:3rem;
		display:grid;
		place-items:center;
		border-radius:50%;
		margin-right:.4rem;
	}
	.icon{
		font-size:1.5rem;
	}
	h3{
		margin-bottom:0;
		letter-spacing:0;
	}
	p{
		margin-bottom:0;
		text-transform:uppercase;
	}
	.pink{
		background:#ffe0f0;
		color:#da4aa1;
	}
	.green{
		background:var(--clr-primary-10);
		color:var(--clr-primary-5);
	}
	.purple{
		background:#e6e6ff;
		color:#5d55fa;
	}
	.yellow{
		background:#fffbea;
		color:#f0b429;
	}
}
`
export default Info;