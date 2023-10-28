import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import Spinner from '../components/Spinner';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [view, setView] = useState(true);

	useEffect(() => {
		setLoading(true);
		const url = import.meta.env.VITE_URL;
		axios
			.get(`${url}`)
			.then((res) => {
				setBooks(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	const handleChangeView = (e) => {
		setView(!view);
	};

	return (
		<div className="p-4">
			<div className="flex justify-center items-center gap-x-4">
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={handleChangeView}
				>
					{view ? 'Table View' : 'Card View'}
				</button>
			</div>
			<div className="flex justify-between	items-center">
				<h1 className="text-2xl font-bold">Books List</h1>
				<Link to="/books/create" className="">
					<MdOutlineAddBox className="text-sky-800 text-4xl" />
				</Link>
			</div>
			{loading ? (
				<Spinner />
			) : view ? (
				<BooksTable books={books} />
			) : (
				<BooksCard books={books} />
			)}
		</div>
	);
};

export default Home;
