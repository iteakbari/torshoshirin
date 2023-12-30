import Accordion from "@/common/Accordion";

const Faq = () => {
  return (
    <div className="container lg:px-10 2xl:px-0 mx-auto pt-24 px-3">
      <p className="text-2xl text-center py-16">پرسش‌های متداول</p>
      <div className="faq md:w-2/3 mx-auto pb-20">
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
