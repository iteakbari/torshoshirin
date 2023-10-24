import CategoriesList from "@/components/Category/CategorisList";

const categoryPage = () => {
  return (
    <>
      <div className="p-7 rounded-3xl bg-white my-14 text-center text-4xl">
        دسته بندی
      </div>
      <CategoriesList />
    </>
  );
};

export default categoryPage;
