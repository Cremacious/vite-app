import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  return <>Book {id}</>;
};

export default Book;
