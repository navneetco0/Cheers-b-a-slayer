import { categories } from "../../../static/mockdata";

const Categories = () => {
  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="text-center">
                <div
                  className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform cursor-pointer`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-gray-300">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
