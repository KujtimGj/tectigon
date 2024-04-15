import "./home.css";
import Logo from "../assets/logo.png"
import { useState } from "react";

const Home = () => {

    const arrayProfesionet = ['ReactJs', "Softare developer", "Graphic designer", "Mobile App", "Video Editor", "Instructor", "Ui/Ux"];
    const [count, setCount] = useState(arrayProfesionet.length);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }


    const number = [1, 2, 3, 4, 5, 6];

    const products = [
        { id: 1, name: "Laptop", price: 600, category: "Paisje" },
        { id: 2, name: "Tastier", price: 50, category: "Paisje" },
        { id: 3, name: "Maus", price: 50, category: "Paisje" },
    ];

    const puntoret = [
        { id: 1, name: "John", departamenti: "IT", skills: ["Javascript", "ReactJs", "NodeJs"] },
        { id: 2, name: "Doe", departamenti: "IT", skills: ["Javascript", "ReactJs", "NodeJs"] },
        { id: 3, name: "Test", departamenti: "IT", skills: ["Javascript", "ReactJs", "NodeJs"] },
    ]

    const [name,setName]=useState();

    const handleClick = () =>{
        console.log("I have been clicked");
    }

    const handleName = (name)=>{
        setName(name)
    }

    return (
        <div className="home">
            <div className="header">
                <div className="header-content">
                    <h1 className="header-content-h1">Find your first project</h1>
                </div>
            </div>
            <div className="professions">
                {arrayProfesionet.map((ap) => (
                    <div className="professions-item">{ap}</div>
                ))}
            </div>
            <div className="professions-count">
                <p className="count"> {count} </p>
            </div>
            <div className="plus-minus">
                <h1 onClick={increment} className="count">+</h1>
                <h1 onClick={decrement} className="count">-</h1>
            </div>
            <div className="professions-count">
                {number.map((n) => (
                    <div className="div">{n}</div>
                ))}
            </div>
            <div className="professions-count">
                <h4>Produktet</h4>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Prices</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <div className="professions-count">
                <ul>
                    {puntoret.map((p) => (
                        <li key={p.id}>
                            <h4>Emri:{p.name}</h4>
                            <p>Departamenti: {p.departamenti}</p>
                            <p>Aftesite: {p.skills.join(", ")}</p>
                        </li>
                    ))}
                </ul>
            </div> *
            <div className="professions-count">
                <button onClick={handleClick}>Click me</button>
            </div>
            <div className="professions-count">
                <button onClick={()=>handleName("Tectigon")}>Click me</button>
                <p>{name}</p>
            </div>
        </div>
    );
}

export default Home;