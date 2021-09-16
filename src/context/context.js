import React from 'react';
import {
	useState, 
	useContext,
	useEffect
} 
from 'react';
import MockFollower from './mockdata/mockfollowers'
import MockRepos from './mockdata/mockrepos'
import MockUsers from './mockdata/mockusers'
//axios externel library;
import axios from 'axios';
const AppContext = React.createContext();
//root url 
const rooturl = 'https://api.github.com'
const AppProvider = ({children})=>{
	const [followers, setFollowers] = useState(MockFollower)
	const [repos, setRepos] = useState(MockRepos);
	const [githubuser, setGihubUsers] = useState(MockUsers);
	const [request , setRequest] = useState(0);
	const [loading, setLoading]=useState(false);
	const [error, setError]= useState({show:false,msg:""})
	//error state;
	const CheckRequest = () =>{
		setLoading(true)
		axios.get(`${rooturl}/rate_limit`)
		.then(({data})=>{
			// console.log(data);
			let {
				rate:{remaining}
			}=data;
			setRequest(remaining);
			setLoading(false)
			if(remaining===0){
				toggleError(true,"you have exceede your limit")
				setLoading(false);
			}
		}).catch((err)=>console.log(err));
	}
	useEffect(()=>{
		CheckRequest()
	},[]);


	function toggleError (show=false, msg=''){
		setError({show, msg});
		setLoading(false);
	}
	const Searchgithubusers = async(user)=>{
	     toggleError();
	     setLoading(true);
	     const response = await axios(`${rooturl}/users/${user}`)
	     .catch((err)=>console.log(err));
	     if(response){
	     	const {login, followers_url}= response.data;

	     	setGihubUsers(response.data);
	     	Promise.allSettled([axios(`${rooturl}/users/${login}/repos?per_page=100`),
	     		 axios(`${followers_url}?per_page=100`)])
	     	.then((result)=>{
	     		const [repos, followers]= result;
	     		const status ='fulfilled';
	     		if(repos.status === status){
	     			setRepos(repos.value.data);
	     		}
	     		if(followers.status === status){
	     			setFollowers(followers.value.data);
	     		}

	     	});
	     	 
	      
	     }
	     else{
	     	toggleError(true,"no user found  with that username")
	     }
	     setLoading(false);
	     CheckRequest();
	}
	return <AppContext.Provider 
	value = {
		{
			followers,
			repos,
			githubuser,
			request,
			error,
			Searchgithubusers,
			loading
		}
	} >{children}
	</AppContext.Provider>
}
const useGlobalContext = ()=>{
	return (useContext(AppContext));
}
export {
	useGlobalContext, 
	AppContext, 
	AppProvider
}