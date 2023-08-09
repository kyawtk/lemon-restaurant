import { MenuCardProps } from '../types'

const MenuCard = ({ price, description, name, imgurl }: MenuCardProps) => {
  return (
    <div className="flex flex-col max-w-[400px]  shadow-lg border-lemon border  md:w-[300px] rounded-lg overflow-hidden">
      <div className="w-full h-[200px]">
        <img src={imgurl} className="image object-cover" alt={name} />
      </div>
      <div className="p-5 ">
        <div className="flex justify-between items-center">
          {" "}
          <h2 className="text-3xl text-black font-semibold"> {name}</h2>
          <p className="text-orange-600">{price} $</p>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
