import styled from 'styled-components'
import {Link} from 'react-router-dom';
const ErrorPage = () =>{
	return (
		<Wrapper>
		<div>
		<h1> 404 </h1>
		<h3> Page Not Found   </h3>
		<Link to ='/'>
		<button className="btns"> BackHome </button>
		</Link>
		</div>
		</Wrapper>

		)
}
const Wrapper = styled.section`
	min-height:100vh;
	display:grid;
	place-items:center;
	background:var(--clr-primary-10);
	text-align:center;
	h1{
		font-size:10rem;
	}
	h3{
		margin-bottom:1.5rem;
	}
	.btns{
		text-transform:uppercase;
		padding: 0.375rem 0.75rem;
		background:var(--clr-primary-5);
		color: var(--clr-primary-10);
		transition:all 0.3s linear;
		letter-spacing:0.1em;
		font-weight:400;
		border:2px solid transparent;
		font-size:0.875rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		border-radius:0.25rem;
	}
	.btns:hover{
  	background: var(--clr-primary-8);
  	color: var(--clr-primary-1);
}
`;
export default ErrorPage;