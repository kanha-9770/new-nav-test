import BlurImage from "./BlurImage";
import Breadcrumb from "./Breadcrumb";
import { Button } from "./button";

interface ProductModalProps {
  image: string;
  title: string;
  description: string;
  buttons: { text: string; icon: boolean }[];
  items: { className: string; text: string }[];
  firstname: string;
  secondname: string;
}

const ProductModal: React.FC<ProductModalProps> = ({
  image,
  title,
  description,
  buttons,
  items,
  firstname,
  secondname,
}) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: title, current: true }, // Use the title prop for the dynamic breadcrumb item
  ];

  return (
    <>
      <div className="bg-[#F5F5F7] z-[99999] dark:bg-neutral-800 p-8 font-poppins font-regular md:p-14 h-80 rounded-3xl mb-4">
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[78rem] h-[90vh] bg-white rounded-xl p-6 transform transition-transform overflow-y-auto z-50">
            <Breadcrumb items={breadcrumbItems} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col items-center">
                <BlurImage
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-fill lg:object-contain h-[350px]"
                />
                <div className="flex w-[60%] lg:-ml-14 space-x-2 lg:space-x-8 justify-center mt-8">
                  {buttons.map((button, index) => (
                    <div key={index} className="ml-1">
                      <Button className="rounded-full flex items-center bg-primary text-primary-foreground hover:bg-white hover:text-black border border-black px-1 py-2 text-base font-regular group">
                        <span className="flex-grow ml-2 text-center">
                          View All
                        </span>
                        <span className="ml-2 bg-white rounded-full p-1 transition-colors duration-200 group-hover:bg-black">
                          
                        </span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl font-semibold lg:font-bold mb-4">
                  <span className="text-red-600">{firstname}</span>
                  <span className="text-[#483d78] ml-2">{secondname}</span>
                </h2>
                <p className="text-gray-700 text-sm font-regular mb-4">
                  {description}
                </p>
                <ul className="list-none grid grid-cols-2 gap-4 text-gray-700">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-sm font-regular">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductModal;
