import Image from "next/image";
import Link from "next/link";

const Category = ({ category: { id, name, icon } }) => {
  return (
    <Link href={`/${name}-${id}`} className="rounded-2xl">
      <Image width={350} height={350} alt="" src={icon} />
    </Link>
  );
};

export default Category;
