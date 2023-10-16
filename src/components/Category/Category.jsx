import Image from "next/image";

const Category = ({ category: { name, icon } }) => {
  console.log(name, icon);
  return (
    <div className="border-4 border-color-green rounded-2xl p-5">
      <Image width={130} height={130} alt="" src={icon} />
      <p>{name}</p>
    </div>
  );
};

export default Category;
