import { getCategories } from "@/services/categorisService";
import Category from "./Category";

const CategoriesList = async () => {
  const { data: categoris } = await getCategories();
  return (
    <div className="grid sm:grid-col-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
      {categoris.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
