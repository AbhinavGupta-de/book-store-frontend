import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../components/Spinner';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

const Home = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get('https://books-store.up.railway.app/books')
			.then((res) => {
				setBooks(res.data);
				setLoading(false);
				console.log(books);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	return (
		<div className="p-4">
			<div className="flex justify-between	items-center">
				<h1 className="text-2xl font-bold">Books List</h1>
				<Link
					to="/books/create"
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					<MdOutlineAddBox className="text-sky-800 text-4xl" />
				</Link>
			</div>
			{loading ? (
				<Spinner />
			) : (
				<table className="w-full border-separate border-spacing-2">
					<thead>
						<tr>
							<th className="border border-slate-600 rounded-md">No</th>
							<th className="border border-slate-600 rounded-md">Title</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Author
							</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Publish Year
							</th>
							<th className="border border-slate-600 rounded-md">Operations</th>
						</tr>
					</thead>
					<thead>
						{books.data.map((book, index) => (
							<tr key={book._id} className="h-8">
								<td className="border border-slate-600 rounded-md text-center">
									{index + 1}
								</td>
								<td className="border border-slate-600 rounded-md text-center">
									{book.title}
								</td>
								<td className="border border-slate-600 rounded-md max-md:hidden text-center ">
									{book.author}
								</td>
								<td className="border border-slate-600 rounded-md max-md:hidden text-center">
									{book.publishedYear}
								</td>
								<td className="border border-slate-600 rounded-md">
									<div className="flex justify-center gap-x-4">
										<Link to={'/books/details/' + book._id}>
											<BsInfoCircle className="text-[#ada100] text-2xl" />
										</Link>
										<Link to={'/books/' + book._id + '/edit'}>
											<AiOutlineEdit className="text-[#1ff22e] text-2xl" />
										</Link>
										<Link to={'/books/delete/' + book._id}>
											<MdOutlineDelete className="text-[#e30e0b] text-2xl" />
										</Link>
									</div>
								</td>
							</tr>
						))}
					</thead>
				</table>
			)}
		</div>
	);
};

export default Home;
