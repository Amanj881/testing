import React from 'react'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Index from './User/';

function Routes() {
	// return (
	// 	<div>
	// 		const [loader, setLoader] = useState(true)

	// useEffect(() => {
 //   setTimeout(()=>setLoader(false),3000)
 //  }, [])
  
  return (
  	<BrowserRouter>
    
    <Switch>
    
      <Route path="/" component={Index} />

            

    </Switch>
   
    
    
    </BrowserRouter>
		// </div>
	)
}

export default Routes