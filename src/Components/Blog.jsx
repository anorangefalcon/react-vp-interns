import { useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  return (
    <div className="blog">
      <h1>Blog</h1>
      <p>Welcome to the Blog page!</p>
      <p>blog id is {id}</p>
    </div>
  );
}
