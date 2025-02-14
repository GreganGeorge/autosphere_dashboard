import React,{useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import {Search, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import axios from 'axios'
const RequestsTable = ({title}) => {
    const [search,setSearch]=useState("");
    const [filteredRequests,setFilteredRequests]=useState([]);
    const [requests,setRequests]=useState([]);
    const handleChange=(e)=>{
      const term=e.target.value.toLowerCase();
      setSearch(term);
      const filtered=requests.filter(request=>request.username.toLowerCase().includes(term));
      setFilteredRequests(filtered);
    }
    const getData = async () => {
        if(title==='mechanic'){
            const url = `http://localhost:5059/api/AdminUser/Get1`;
            try {
            const response = await fetch(url);
            const data = await response.json();
            setFilteredRequests(data);
            setRequests(data);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        }
        else if(title==='car wash'){
            const url = `http://localhost:5059/api/AdminUser/Get2`;
            try {
            const response = await fetch(url);
            const data = await response.json();
            setFilteredRequests(data);
            setRequests(data);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        }
        else if(title==='Mechanics'){
            const url = `http://localhost:5059/api/AdminUser/Get3`;
            try {
            const response = await fetch(url);
            const data = await response.json();
            setFilteredRequests(data);
            setRequests(data);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        }
        else if(title==='carwash'){
            const url = `http://localhost:5059/api/AdminUser/Get4`;
            try {
            const response = await fetch(url);
            const data = await response.json();
            setFilteredRequests(data);
            setRequests(data);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        }
      };
    useEffect(()=>{
        getData();
    },[])
    const handleClick=(value,id,email,name)=>{
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText:'No',
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: value==='accepted'?"Accepted!":"Rejected!",
                icon: "success"
              });
              if(title==='mechanic'){
                fetch(`http://localhost:5059/api/AdminUser?id=${id}&value=${value}`,{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    id:id,
                    value:value
                })
                })
                .then(res=>res.json())
                .then((result)=>{
                    getData();
                },(error)=>{
                })
              }
              else if(title==='car wash'){
                fetch(`http://localhost:5059/api/AdminUser/Put1?id=${id}&value=${value}`,{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    id:id,
                    value:value
                })
                })
                .then(res=>res.json())
                .then((result)=>{
                    getData();
                },(error)=>{
                })
              }
              axios.post("http://localhost:5059/api/Email", {
                id:id,
                recipient_email:email,
                value:value,
                title:title,
                name:name
                })
                .then(() => {
                    toast.success("Email sent.");
                })
                .catch((error) => {
                console.error("Error sending", error);
                });
            }
          });
    }
    const handleDelete=(id,value)=>{
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText:'No',
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: value==='accepted'?"Accepted!":"Rejected!",
                icon: "success"
              });
            if(title==='Mechanics'){
                fetch(`http://localhost:5059/api/AdminUser?id=${id}&value=${value}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        id:id,
                        value:value
                    })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        getData();
                    },(error)=>{
                    })
            }
            else if(title==='carwash'){
                fetch(`http://localhost:5059/api/AdminUser/Put1?id=${id}&value=${value}`,{
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        id:id,
                        value:value
                    })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        getData();
                    },(error)=>{
                    })
                }
            }
          })
    }
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg 
      rounded-xl p-6 border border-gray-700 mb-8' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
        <div className='flex justify-between items-center mb-6'>
          <div className='relative'>
            <input type='text' onChange={handleChange} value={search} placeholder='Search requests...' className='bg-gray-700 text-white placeholder-gray-400
            rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <Search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-700'>
            <thead>
              <tr>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Name</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Email</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Phone Number</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Government Id Proof</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>{title==='mechanic'||title==='Mechanics'?'Mechanic Certification/Qualifications':'Car Wash Servicing Video'}</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
              {filteredRequests.map((request)=>(
                <motion.tr initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {request.username}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {request.email}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
                    {request.phone_number}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600'>
                    <Link to={request.govidproofURL} target="_blank">View</Link>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600'>
                  <Link to={title==='mechanic'||title==='Mechanics'?request.mechaniccertURL:request.carWashVideoURL} target="_blank">View</Link>
                  </td>
                  {(title==='mechanic'|| title==='car wash') && <td className='px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2'>
                    <button onClick={()=>handleClick('accepted',request.id,request.email,request.username)} className='text-blue-600'>Accept</button>
                    <button onClick={()=>handleClick('rejected',request.id,request.email,request.username)} className='text-red-600'>Reject</button>
                  </td>}
                  <td className='px-6 py-4'>
                    {(title==='Mechanics' || title==='carwash')&& <Trash2 onClick={()=>handleDelete(request.id,'rejected')} className="w-5 h-5 cursor-pointer"/>}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
  )
}

export default RequestsTable