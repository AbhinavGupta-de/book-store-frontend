import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BooksModal = ({ book, onClose }) => {
	return (
		<div className="fixed bg-black bg-opacity-60 top-0 left-0 w-full h-full flex justify-center items-center z-50">
			<div
				onClick={(event) => event.stopPropagation()}
				className="w-[600px] h-[600px] bg-white rounded-xl flex flex-col justify-center items-center relative p-4"
			>
				<AiOutlineClose
					className="absolute right-6 top-6 text-3xl tex-red-600 cursor-pointer"
					onClick={onClose}
				/>
				<h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
					{book.publishedYear}
				</h2>
				<h4 className="my-2 text-gray-500">{book._id}</h4>
				<div className="flex justify-start items-center gap-x-2">
					<PiBookOpenTextLight className="text-red-300 text-2xl" />
					<h2 className="text-2xl">{book.title}</h2>
				</div>
				<div className="flex justify-start items-center gap-x-2">
					<BiUserCircle className="text-red-300 text-2xl" />
					<h2 className="text-2xl">{book.author}</h2>
				</div>
				<div className="flex justify-center items-center my-2">
					<p className="text-2xl">{book.description}</p>
				</div>
			</div>
		</div>
	);
};

export default BooksModal;
