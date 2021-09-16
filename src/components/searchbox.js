import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {MdSearch} from 'react-icons/md';
import {useGlobalContext} from '../context/context';
const SearchBox = () => {
  const {request,error,Searchgithubusers, loading} = useGlobalContext();
const [user, setUsers]= useState("");
const handleSumbit= (e) =>{
e.preventDefault();
if(user){
	Searchgithubusers(user);
}
else return;
}
	return <section className="section">
		<Wrapper className ="section-center">
    {error.show && 
      <ErrorWrapper>
      <p> {error.msg} </p>
      </ErrorWrapper>}
		<form className= "form-control" onSubmit = {handleSumbit} >
		<MdSearch/>
		<input type ="text" placeholder="Search Github Users"
		value = {user} 
		onChange ={(e)=>setUsers(e.target.value)}/>
    {request>0 && !loading && ( <button type ="submit" 
     > Search </button>)}
		
		</form>
    <h3>Request {request}/60 </h3>
		</Wrapper>
	</section>
	 
}
const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default SearchBox;