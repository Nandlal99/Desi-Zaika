import React from "react";
import Profile from "./Profile";

// class About extends React.Component{

//     constructor(props){
//         super(props);
//         console.log("parent constructor");
//     };

//     componentDidMount(){
//         console.log("parent DidMount");
//     };


//     render(){
//         console.log("parent render");
//         return (
//             <div className="about">
//                 <h2>About us page</h2>
//                 <Profile name={"Nandlal"} />
//             </div>
//         );
//     }
// };

const About = () => {
    return (
        <div className="about mt-24 flex my-3">
            <Profile />
            <div className="shadow-xl w-2/3 my-5 text-center">
                <h1 className="font-bold text-2xl mb-5 text-gray-600">About this project</h1>
                <h4>This is Food Ordering Webapp - a Swiggy App Clone 
                    where you order food from near local restaurant.</h4>
                <h3 className="font-medium text-2xl m-5 text-gray-600">Some Feature of this Project : </h3>
                <div className="text-justify mx-60">
                    <h4> - Integrated Swiggy Public API</h4>
                    <h4> - Shimmer UI</h4>
                    <h4> - Search Restaurant</h4>
                    <h4> - Restaurant Menu Page</h4>
                    <h4> - Implement Cart functionality</h4>
                    <h4> - Lazy loading has been implemented to optimize application</h4>
                    <h4> - Landing with Restaurant List</h4>
                    <h4> - Error message display when users go Offline</h4>
                </div>
            </div>
        </div>
    );
};

export default About;