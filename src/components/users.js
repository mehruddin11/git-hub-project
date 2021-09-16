import React from 'react';
import styled from 'styled-components';
import Card from './cards';
import Follower from './follower'
const Users = () => {

	return (
		<section  className="section"> 
		<Wrapper className="section-center">
		<Card/>
		<Follower/>
		</Wrapper>
		 </section >
		)
}
const Wrapper = styled.div`
padding-top:2rem;
display:grid;
gap:2rem 3rem;
@media(min-width:990px){
	grid-template-columns:1fr 1fr;
}

`
export default Users;