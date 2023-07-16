import React, {useState, useEffect} from 'react';
import cors from 'cors';

const Home = () => {

	//const hostname = "localhost";
	const hostname = "192.168.200.249";
	const port = "3000";
	const [userName, setUserName] = useState('');
	const [show, setShow] = useState(false);
	//const show = true;
	const userHomePage = async() => {
		try{
			const res = await fetch(`http://${hostname}:${port}/getdata`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			});

			console.log('...........home response start..............')
            console.log(res)
			console.log('...........home response end..............')
			console.log('res.status')
			console.log(res.status)

			if (res.status === 200) {
				const data = await res.json();
				console.log('data')
				console.log(data)
				setUserName(data.name);
				setShow(true);
			  } else {
				console.log("response is not successfull");
			  }
		}catch(err){
			console.log(err);
		}
		
	}
	useEffect(() => {
		userHomePage();
	}, []);
	return(
	 <>
	 <div className="container">
	 <div className="home-page">
	   <div className="home-div">
	     <p className="pt-5">WELCOME {userName}</p>
		 <h2>{show ? 'welcome this project' : 'welcome this project'}</h2>
	   </div>
	 </div>
	 </div>  
	 </>
	)
}

export default Home