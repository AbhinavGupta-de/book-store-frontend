import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useState } from 'react';

const DeleteBook = () => {
	const [loading, setLoading] = useState(false);
	const id = useParams().id;
	const navigate = useNavigate();

	const handleDeleteBook = async () => {
		setLoading(true);
		const url = import.meta.env.VITE_URL;
		axios
			.delete(`${url}/${id}`)
			.then(() => {
				setLoading(false);
				navigate('/');
			})
			.catch((err) => {
				alert('Error occured please check console...');
				console.log(err);
				setLoading(false);
			});
	};

	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Delete Book</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className="flex flex-col items-center border-2 border-skey-400 rounded-xl w-[600px] p-8 mx-auto">
					<h1 className="text-2xl my-4">Are you sure?</h1>
					<button
						className="bg-red-500 text-white px-4 py-2 rounded-md"
						onClick={handleDeleteBook}
					>
						Delete
					</button>
				</div>
			)}
		</div>
	);
};

export default DeleteBook;
