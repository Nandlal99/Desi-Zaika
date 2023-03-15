
const MenuShimmerUI = () => {

    return (
        <div className="mt-20">
            <div className="left-0 right-0 restaurantDetails flex bg-slate-800 h-52">
                <div className="ml-48 p-5 m-2 h-48 w-56 bg-gray-400 rounded-sm"></div>
                <div className="mx-8 py-5">
                    <div className="bg-gray-400 w-56 h-5 m-5 rounded-sm"></div>
                    <div className="bg-gray-400 w-56 h-5 m-5 rounded-sm"></div>
                    <div className="bg-gray-400 w-80 h-5 m-5 rounded-sm"></div>
                    <div className="bg-gray-400 w-80 h-5 m-5 rounded-sm"></div>
                </div>
            </div>
            <div className="mt-5 mx-40 w-2/3 p-10 shadow-lg">
                <div className="h-5 w-40 bg-gray-400 rounded-sm"></div>
                <div className="h-3 w-32 bg-gray-300 mt-3 rounded-sm"></div>
                {Array(8).fill("").map((e, index) => (
                    <div key={index} className=" mx-5 mt-8 flex gap-72">
                        <div>
                            <div className="h-4 w-40  bg-gray-400 rounded-sm mb-3"></div>
                            <div className="h-4 w-40  bg-gray-400 rounded-sm"></div>
                        </div>
                        <div className="h-24 w-56 bg-gray-400 rounded-sm"></div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default MenuShimmerUI;