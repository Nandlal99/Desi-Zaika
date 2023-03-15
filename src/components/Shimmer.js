
const ShimmerUI = () => {
    return (
        <div className="mt-32">
            <div className=" h-7 w-80 bg-gray-300 rounded-md  mx-auto p-1 my-8"></div>
            <div className="restaurant-list flex flex-wrap gap-5 justify-center">
                {/* <div  className="shimmer-box"></div> */}
                {Array(15).fill("").map((e, index) => (
                    <div key={index} className=" shadow-lg p-2 m-2 w-60 h-56 bg-gray-300"></div>))}
            </div>
        </div>
    );
};

export default ShimmerUI;