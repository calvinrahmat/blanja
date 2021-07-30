import SearchBar from './components/SearchBar';
import NavbarInit from './components/navbar_before_login/Navbar';
import { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className="NavbarBeforeLogin">
				<NavbarInit />
				<SearchBar />
			</div>
		);
	}
}

export default App;
