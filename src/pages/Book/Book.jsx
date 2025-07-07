import React, { use } from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";



// const Book = ({bookPromise}) => {
//     const data =use(bookPromise);
//     console.log(data);

const Book = ({singleBook}) => {
    //console.log(singleBook);

    const {bookName, author,image,rating,category,yearOfPublishing,tags,publisher}  =singleBook;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
    <img className='h-[160px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className='flex justify-center gap-10 mt-5'>
    {
      tags.map(tag=> <button>{tag}</button>)
    }
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book by: {publisher}</p>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfStroke />
</div>
    </div>
  </div>
</div>
    );
};

export default Book;