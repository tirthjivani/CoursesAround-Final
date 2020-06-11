import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { Route, Switch, Router } from "react-router";
import NoMatch from "./errors/404error";
import { AUTH_TOKEN } from "./Constant";
import { createHttpLink } from "apollo-link-http";
import Play from "./components/play";
import { ApolloLink, concat } from "apollo-link";
import Prev from "./components/prev";
import Login from "./auth/Login";
import SignUp from "./auth/Registeration";
// import { onError } from "apollo-link-error";
import NetworkError from "./errors/networkerror";
import SomethingWentWrong from "./errors/swwerror";
import ForgetPwd from "./auth/ForgetPwd";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-167389332-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri: "http://35.188.175.132:8000/graphql/" });

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			authorization: !localStorage.getItem(AUTH_TOKEN)
				? null
				: "JWT " + localStorage.getItem(AUTH_TOKEN)
		}
	});
	return forward(operation);
});

const client = new ApolloClient({
	cache,
	link: concat(authMiddleware, httpLink)
});

ReactDOM.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/login" component={Login}></Route>
				<Route path="/signup" component={SignUp} />
				<Route path="/search" component={Search} />
				<Route path="/search/:response" component={SearchPage} />
				<Route path="/recommend" exact component={Play} />
				<Route path="/forgetpwd" exact component={ForgetPwd} />
				<Route path="/network-error" component={NetworkError} />
				<Route path="/something-went-wrong" component={SomethingWentWrong} />
				<Route path="/prev" exact component={Prev} />
				<Route component={NoMatch} />
			</Switch>
		</ApolloProvider>
	</BrowserRouter>,
	document.getElementById("root")
);

serviceWorker.unregister();
