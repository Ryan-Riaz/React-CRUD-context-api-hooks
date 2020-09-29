import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";

// STEP:: 8 --> importing a provider that wraps app components
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
	return (
		<div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
			{/* //global provider wraps whole app for getting and passing states and methods */}
			<GlobalProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/add" component={AddUser} />
						<Route path="/edit/:id" component={EditUser} />
					</Switch>
				</Router>
			</GlobalProvider>
		</div>
	);
};

export default App;
