import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';
function AuthWrapper({children}) {
  const {isLoading, err} = useAuth0();
  if(isLoading){
    return <Wrapper> <img src ={loadingGif} 
    alt ="spinner"/>
    </Wrapper>
  }
  if(err){
    return <Wrapper> <h1> {err.msg} </h1> </Wrapper>
  }
  return <>{children} </>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
