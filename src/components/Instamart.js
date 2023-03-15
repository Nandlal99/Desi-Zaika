
import {useState} from "react";

const Section = ({name,isVisiable,setIsVisiable}) => {
    // const [isVisiable,setIsVisiable] = useState(false);
    return (
        <div className="border-solid border-2 border-gray-500 p-5 m-10 rounded-lg">
                <h1 className="pb-2 font-semibold text-gray-700">{name} 
                {
                isVisiable ? 
                <button className="  px-5 h-5 rounded-md" onClick={() => setIsVisiable(false)}>Hide</button>
                 : <button className=" px-5 h-5 rounded-md" onClick={() => setIsVisiable(true)}>Show</button>}
                </h1>
                
                
                { isVisiable && <p>My favourite food is a burger. It has many layers of fresh 
                    vegetables, sauces and a patty filled between two buns.
                     A burger is a fun dish, and everyone at home enjoys eating it. 
                     Many restaurants serve delicious burgers, 
                     but I love the one my mother makes at home. 
                     I love the taste of the fresh, crunchy lettuce leaves, 
                     the tangy tomatoes and the cheese that melts in the mouth. 
                     Burgers are my favourite 4 pm snack, and my mom always makes 
                     it as healthy as she can! I love every bite! </p> }
            </div>
    );
};


const Instamart = () => {
    const [sectionVisiable, setSectionVisiable] = useState("Food");
    return (
        <div className="Instamart mt-32 p-5 m-5">
            <h1 className="font-bold text-3xl text-blue-900 mx-12">Coming Soon ...</h1>
            
            <Section name={"Food Instamart"}
              isVisiable={sectionVisiable==="Food"}
              setIsVisiable={(display) =>
                { if(display){ 
                    setSectionVisiable("Food");}
                    else{
                        setSectionVisiable("");
                    }
                }
            }
            />
            <Section name={"Careers"} 
              isVisiable={sectionVisiable==="Careers"}
              setIsVisiable={(display) =>
                { if(display){ 
                    setSectionVisiable("Careers");}
                    else{
                        setSectionVisiable("");
                    }
                }
            } 
            />
            <Section name={"Teams"}
              isVisiable={sectionVisiable==="Teams"} 
              setIsVisiable={(display) =>
                { if(display){ 
                    setSectionVisiable("Teams");}
                    else{
                        setSectionVisiable("");
                    }
                }
            }
            />
        </div>
    );
};

export default Instamart;