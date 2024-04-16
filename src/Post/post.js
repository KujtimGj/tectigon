import { useState } from "react";
import "./post.css"
import axios from "axios";

const Post = () => {

    // fullName,email, description,industry,businessName

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [industry, setIndustry] = useState("");
    const [businessName, setBusinessName] = useState("")


    const handleSubmit = () => {
        const payload = {
            fullName,
            email,
            description,
            industry,
            businessName
        };


        axios.post("https://weak-lime-squid-fez.cyclic.app/contact", payload)
            .then((response) => {
                console.log("Postimi u kriju me sukses");
                setFullName("");
                setBusinessName("");
                setEmail("");
                setDescription("");
                setIndustry("");
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div className="post">
            <input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
            <input type="text" placeholder="Business name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />

            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Post;