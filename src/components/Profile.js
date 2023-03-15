import React from "react";
import Logo from "../img/photo.jpg"
import Github from "../img/github.png";
import Linkedin from "../img/Linkedin.png";
import { Link } from "react-router-dom";


const Profile = () => {
    return (
        <div className="w-1/3 shadow-xl p-5  mx-5 text-center m-5">
            <h1 className="font-bold text-2xl mb-5 text-gray-600">About Me</h1>
            <img className="h-52 w-44 rounded-lg m-3 mx-24" alt="photo" src={Logo} />
            <p>I am fresher, I love development and coding, currently learning React js and JavaScript & build some interesting project.</p>
            <h3 className="py-2 text-gray-500">Email : nandlal.jaiswal.jaiswal@gmail.com</h3>
            <div className="flex gap-5 mx-28 mt-3">
                <Link to="https://github.com/Nandlal99"><img className="h-10" alt="github" src={Github} /></Link>
                <Link to="https://www.linkedin.com/in/nandlal-jaiswal-321a10190/"><img className="h-10" alt="Linkedin" src={Linkedin} /></Link>
            </div>
        </div>
    );
};

// class Profile extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             count:0,
//             count2:1,
//         }
//         console.log("child constructor");
//     };

//     componentDidMount(){
//         console.log("child DidMount");
//         // this.timer = setInterval(() => {
//         //     console.log("Namaste React");
//         // },1000);
//     };

//     componentDidUpdate(){
//         console.log(" child component didupdated");
//     }

//     componentWillUnmount(){
//         // clearInterval(this.timer);
//         console.log("child WillUnmount");
//     }

//     render(){
//         console.log("child render");
//         return (
//             <div>
//                 <h3>Profile Class  Component</h3>
//                 <h3>Name : {this.props.name}</h3>
//                 <button onClick={() => {
//                     this.setState({count:1});
//                 }}><h4> Count : {this.state.count}</h4></button>
//             </div>
//         );
//     }
// }

/*
* Parent constructor
* Parent render
* child constructor
* child render
* 
* Parent DidMount
* (API call) this.setState
* child DidMount
* child render
* child Didupdate
* child WillUnmount
*/

export default Profile;