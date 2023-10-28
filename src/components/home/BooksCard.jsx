import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiShow, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import BooksModal from './BooksModal';
import { useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md';

const BooksCard = ({ books }) => {
	const [showModal, setShowModal] = useState(false);
	const [boook, setBoook] = useState({});

	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{books.data.map((book) => (
				<div
					key={book._id}
					className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x1"
				>
					<h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
						{book.publishedYear}
					</h2>
					<h4 className="my-2 text-gray-500">{book._id}</h4>
					<div className="flex justify-start items-center gap-x-2">
						<PiBookOpenTextLight className="text-red-300 text-2xl" />
						<h2 className="my-1">{book.title}</h2>
					</div>
					<div className="flex justify-start items-center gap-x-2">
						<BiUserCircle className="text-red-300 text-2xl" />
						<h2 className="my-1">{book.author}</h2>
					</div>
					<div className="flex justify-between items-center gap-x-2 mt-4 p-4">
						<BiShow
							className="text-3xl text-blue-500 hover:text-black cursor-pointer"
							onClick={() => {
								setShowModal(true);
								setBoook(book);
							}}
						/>
						<Link to={`/books/details/${book._id}`}>
							<BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
						</Link>
						<Link to={`/books/${book._id}`}>
							<AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
						</Link>
						<Link to={`/books/delete/${book._id}`}>
							<MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
						</Link>
					</div>
					{showModal && (
						<BooksModal book={boook} onClose={() => setShowModal(false)} />
					)}
				</div>
			))}
		</div>
	);
};

export default BooksCard;
