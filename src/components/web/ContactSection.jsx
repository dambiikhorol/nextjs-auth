
"use client"
import Image from "next/image";
import Container from "./Containerweb";
import { useState } from "react";
import { set } from "react-hook-form";


const ContactSection = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (name == "" && email == "") {
            setLoading(false);
            alert("Please enter both name & email id");
            return false;
        }

        await fetch("/api/send", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ name, email, message}),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                if (data) {
                    alert(`Thank you for your interest ${name}! We will get back to you soon!`);
                    setName("");
                    setEmail("");
                    setMessage("");
                } else {
                    alert("Apologies! Please try again.");
                }
            })
            .catch((err) => {
                setLoading(false);
                alert("Ooops! unfortunately some error has occurred.");
            });
        return true;
    };

    return (
        <Container className="max-w-screen-2xl py-20">
            <div className="grid grid-cols-2" id="contact">

                <div className="bg-gray-100 rounded-2xl md:p-14 col-span-2 md:col-span-1">
                    <h1 className="text-xl md:text-6xl font-light text-black p-20">
                        Interested in growing your business? <br />Write to us!
                    </h1>

                </div>
                <div className="bg-yellow-400 rounded-2xl p-2 md:p-14 col-span-2 md:col-span-1">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-12">


                            <div className="">

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-3xl font-light">
                                    <div className="sm:col-span-4 ">

                                        <div className="mt-2 border-b border-black">
                                            <input
                                                placeholder="Your name*"
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="bg-yellow-400 block w-full py-3 text-black placeholder:text-black "
                                            />
                                        </div>
                                    </div>

                                  

                                    <div className="sm:col-span-4">

                                        <div className="mt-2 border-b border-black">
                                            <input
                                                placeholder="Email*"
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="bg-yellow-400 block w-full py-3 text-black placeholder:text-black"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">

                                        <div className="mt-2 border-b border-black">
                                            <textarea
                                                placeholder="Messages*"
                                                id="message"
                                                name="message"
                                                autoComplete="message"
                                                required
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows={3}
                                                className="bg-yellow-400 block w-full py-3 text-black placeholder:text-black"
                                           
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div className="mt-6 flex items-center justify-start gap-x-6">

                            <button
                                type="submit"
                                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {loading ? (
                            <div
                                style={{
                                    borderTopColor: "transparent",
                                }}
                                className="text-white bg-black w-4 h-4 border-2 border-white border-solid rounded-full animate-spin"
                            ></div>
                        ) : (
                            "Send"
                        )}
                                
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </Container>
    );
}

function Avatar(props) {
    return (
        <Image
            src={props.image}

            alt="Avatar"
        />
    );
}

export default ContactSection;