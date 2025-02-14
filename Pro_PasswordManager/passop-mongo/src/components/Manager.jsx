import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])

    // fun to copy texts
    const copyText = (text) => {
        toast('🦄 Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }


    const showPassword = () => {
        console.log(ref.current.src);
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "icons/eyecross.png"
        }
    }


    const savePassword = (params) => {
        if(form.site.length>3 && form.username.length>3 && form.password.length>3){
        console.log(form);
        setPasswordArray([...passwordArray, {...form, id:uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
        console.log(...passwordArray, form);
        setform({ site: "", username: "", password: "" })
        toast('Saved Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        else{
            toast('Error: Not Saved!');
        }
    }

    const deletePassword = (id) => {
        console.log("deleting password with id: ", id);
        let c = confirm("do you really want to delete?")
        if(c){
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }
        toast('Deleted Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }

    const editPassword = (id) => {
        console.log("editing password with id: ", id);
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />


            <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>


            <div className="p-3 min-h[90vh] md:mycontainer ">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'> &lt; </span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP/&gt; </span>
                </h1>

                <p className='text-green-900 text-center'>Your own Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-7 items-center">
                    <input value={form.site} onChange={handleChange} className='rounded-full border border-green-500 w-full p-4 py-1' type="text" placeholder='Enter website url' name='site' />

                    <div className="flex flex-col md:flex-row w-full gap-8">
                        <input value={form.username} onChange={handleChange} className='rounded-full border border-green-500 w-full p-3 py-1' type="text" placeholder='Enter username' name='username' />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-full border border-green-500 w-full p-3 py-1' type="password" placeholder='Enter password' name='password' />

                            <span className="absolute right-[3px] top-[3px] cursor-pointer " onClick={showPassword}>
                                <img ref={ref} className='p-1' width={27} src="icons/eye.png" alt="" />
                            </span>

                        </div>
                    </div>

                    <button onClick={savePassword} className=' font-bold text-xl flex justify-center text-center bg-green-500 hover:bg-green-300 border-2 border-green-700 w-fit px-8 py-2 rounded-full gap-3'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon>
                        Save </button>

                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full overflow-hidden rounded-md">
                        <thead className='text-white bg-green-600'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center '>
                                        <div className='flex items-center justify-center '>
                                            <a href={item.site} target='_blank'>{item.site}</a>

                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }} >
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center '>
                                            <span>{item.username}</span>

                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-2 border border-white text-center '>
                                        <div className='flex items-center justify-center '>
                                            <span>{item.password}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-2 border border-white text-center '>
                                    <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>

        </>
    )
}

export default Manager
