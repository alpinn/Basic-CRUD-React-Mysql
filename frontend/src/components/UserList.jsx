import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {

const [users, setUser] = useState([]);

useEffect(() => {
   getUsers(); 
}, []);

const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users')
    setUser(response.data);
};

const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${id}`)
        getUsers();
    } catch (error) {
       console.log(error); 
    }
}


  return (
    <div
        className='
        relative overflow-x-auto
        '
    >
        <Link to={'add'} className='bg-yellow-400 rounded-full px-3 py-2 mt-5'>Add New</Link>
        <table
            className='
            w-full mt-8 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400
            '
        >
            <thead
            className='
            text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400    
            '>
                <tr>
                    <th className='px-6 py-3'>No</th>
                    <th className='px-6 py-3'>Name</th>
                    <th className='px-6 py-3'>Email</th>
                    <th className='px-6 py-3'>Gender</th>
                    <th className='px-6 py-3'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (       
                <tr key={user.id}
                 className='
                 bg-white border-b dark:bg-gray-800 dark:border-gray-700
                 '>
                    <td className='px-6 py-4'>{index + 1}</td>
                    <td className='px-6 py-4'>{user.name}</td>
                    <td className='px-6 py-4'>{user.email}</td>
                    <td className='px-6 py-4'>{user.gender}</td>
                    <td>
                        <Link to={`edit/${user.id}`}   
                        className='
                            rounded-full  bg-blue-700 px-3 py-2
                            '
                        >
                            Edit
                        </Link>
                        <button
                        onClick={() => deleteUser(user.id)}
                            className='
                            rounded-full  bg-red-700 px-3 py-2
                            '
                        >
                            Delete
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList