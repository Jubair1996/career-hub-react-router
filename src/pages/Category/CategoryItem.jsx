import PropTypes from 'prop-types';
const CategoryItem = ({categorys}) => {
    const {logo, availability, category_name} = categorys;
    return (
        <div className="bg-gray-200 p-6 rounded space-y-3">
            <div className="flex justify-center items-center">
            <img src={logo} alt="" />
            </div>
            <h1 className="text-center font-bold text-2xl">{category_name}</h1>
            <p className="text-center font-semibold text-xl">{availability}</p>
        </div>
    );
};
CategoryItem.propTypes = {
    categorys: PropTypes.object
  };
export default CategoryItem;