import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [publishedYear, setPublishedYear] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const book = { title, author, description, publishedYear };
		const url = import.meta.env.VITE_URL;
		axios
			.post(`${url}`, book)
			.then(() => {
				setLoading(false);
				enqueueSnackbar('Book created successfully', { variant: 'success' });
				navigate('/');
			})
			.catch((err) => {
				enqueueSnackbar('Error occured please check console...', {
					variant: 'error',
				});
				console.log(err);
				setLoading(false);
			});
	};

	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Create Book</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className="flex flex-col border-2 border-skey-400 rounded-xl w-[600px] p-4 mx-auto">
					<div className="my-4">
						<label className="block">Tittle</label>
						<input
							className="w-full border-2 rounded-md"
							type="text"
							required
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="my-4">
						<label className="block">Author</label>
						<input
							className="w-full border-2 rounded-md"
							type="text"
							required
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div className="my-4">
						<label className="block">Description</label>
						<textarea
							className="w-full border-2 rounded-md"
							type="text"
							required
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className="my-4">
						<label className="block">Published Year</label>
						<input
							className="w-full border-2 rounded-md"
							type="number"
							required
							value={publishedYear}
							onChange={(e) => setPublishedYear(e.target.value)}
						/>
					</div>
					<button
						className="w-full p-2 bg-blue-500 text-white rounded-md"
						type="submit"
						onClick={handleSubmit}
					>
						Save
					</button>
				</div>
			)}
		</div>
	);
};

export default CreateBooks;
