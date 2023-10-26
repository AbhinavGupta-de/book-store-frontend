import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import EditBooks from './pages/EditBooks';
import ShowBooks from './pages/ShowBooks';
import DeleteBook from './pages/DeleteBook';
import NotFound from './pages/NotFound';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
