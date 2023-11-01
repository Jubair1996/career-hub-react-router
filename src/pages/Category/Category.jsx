import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
// import CategoryItem from "./CategoryItem";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Job Category List</h1>
      <p className="text-center font-medium text-xl mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 p-6 gap-4">
      {categories.map((categorys) => (
        <CategoryItem key={categorys.id} categorys={categorys}></CategoryItem>
      ))}
    </div>
    </div>
  );
};

export default Category;
