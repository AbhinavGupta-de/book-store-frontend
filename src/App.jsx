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
			<Route path="/books/create" element={<CreateBooks />} />
			<Route path="/books/:id/edit" element={<EditBooks />} />
			<Route path="/books/details/:id/" element={<ShowBooks />} />
			<Route path="/books/delete/:id/" element={<DeleteBook />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
