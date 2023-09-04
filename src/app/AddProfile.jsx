'use client'
import { useState,useEffect } from 'react'
import style from './styles.module.css'
import {AiOutlineInstagram, AiOutlinePlusCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export const Model=({showModel,onClose,onFormDataReceived})=>{
    const [selectedTab, setSelectedTab] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone:'',
      instagramUsername:'',
      youtubeUsername:'',
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(formData);
      onFormDataReceived(formData);
      onClose()
    };

  const handleTabChange = (tabNumber) => {
    setSelectedTab(tabNumber);
  };

    return(
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center sm:w-full'>
        <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%]'>
          <div className='bg-white p-4 sm:p-2 md:p-2 lg:p-4 xl:p-4 rounded-xl items-center'>
            <h1 className='text-2xl text-center'>Add New Profile</h1>
            <br />
            <div className='p-4'>
              <ul className='flex justify-between items-center'>
                <li
                  className={`cursor-pointer  p-2 ${
                    selectedTab === 1 ? 'text-white rounded text-xl  bg-slate-600 w-[260px] text-center' : 'text-white rounded text-xl  bg-gray-300 w-[260px] text-center'
                  }`}
                  onClick={() => handleTabChange(1)}
                >
                  Basic
                </li>
                <li
                  className={`cursor-pointer p-2 ${
                    selectedTab === 2 ? 'text-white rounded text-xl  bg-slate-600 w-[260px] text-center' : 'text-white rounded text-xl  bg-gray-300 w-[260px] text-center'
                  }`}
                  onClick={() => handleTabChange(2)}
                >
                  {selectedTab===2?"Social":"Contact"}
                </li>
              </ul>
              {selectedTab === 1 && (
                <div>
                  <div className='p-4'>
                        <label>Enter Name*</label><br/>
                        <input name='name' value={formData.name} onChange={handleInputChange} placeholder='Eg. John Doe' className='p-3 border-none outline-none bg-slate-300 rounded w-full sm:w-[90%] md:w-[80%] lg:w-[100%] xl:w-[100%] '/>
                    </div>
                    <div className='p-4'>
                        <label>Enter Email*</label><br/>
                        <input name='email' value={formData.email} onChange={handleInputChange}  type='email' placeholder='Eg. John@xyz.com' className='p-3 border-none outline-none bg-slate-300 w-full sm:w-[90%] md:w-[80%] lg:w-[100%] xl:w-[100%] rounded '/>
                    </div>
                    <div className='p-4'>
                        <label>Enter Phone*</label><br/>
                        <input name='phone' value={formData.phone} onChange={handleInputChange}  type='number' placeholder='Eg. 9123456789' className='p-3 border-none outline-none bg-slate-300 w-full sm:w-[90%] md:w-[80%] lg:w-[100%] xl:w-[100%] rounded '/>
                    </div>
                    <button onClick={()=>setSelectedTab(2)} className='bg-[#3E84F8] p-3 mx-40 text-2xl text-white rounded-lg w-[120px] flex flex-row items-center justify-center'>Next</button>
                </div>
              )}
              {selectedTab === 2 && (
                <div>
                  <div className='p-4'>
                        <label>Instagram Link (Optional)</label><br/>
                        <input name='instagramUsername' value={formData.instagramUsername} onChange={handleInputChange}  type='url' placeholder='Eg. instagram.com/username' className='p-3 border-none outline-none bg-slate-300 w-full sm:w-[90%] md:w-[80%] lg:w-[100%] xl:w-[100%] rounded'/>
                    </div>
                    <div className='p-4'>
                    <label>Youtube Link (Optional)</label><br/>
                        <input  name='youtubeUsername' value={formData.youtubeUsername} onChange={handleInputChange} type='url' placeholder='Eg. youtube/username' className='p-3 border-none outline-none bg-slate-300 w-full sm:w-[90%] md:w-[80%] lg:w-[100%] xl:w-[100%] rounded'/>
                    </div>
                    
                    <div className='flex '>
                        <button onClick={()=>setSelectedTab(1)} className=' my-2 ml-3 px-3 p-4 text-2xl text-black rounded-lg w-[300px] border-black border-2 '>Back</button>
                        <button onClick={handleSubmit} className='bg-[#3E84F8] my-2 ml-3 px-3 p-4 text-2xl text-white rounded-lg w-[300px] '>Done</button>
                    </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}
const AddProfile = () => {
  const [isLightMode,setIsLightMode]=useState(true);

  useEffect(()=>{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsLightMode(false)
    } else {
      // User has light mode preference
      setIsLightMode(true);
    }
  },[isLightMode])

    const [showModel,setShowModel]=useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone:'',
      instagramUsername:'',
      youtubeUsername:'',
    });

    const handleFormDataFromModal = (data) => {
      setFormData(data);
    };

  return (
    <div className={isLightMode?"":"text-black"}>
        {formData.name!=''? (<div  className={style.AddProfile1}>
            <h1 className='text-xl text-left'>{formData.name}</h1>
            <div className='flex justify-between w-[90%] mt-6'>
              <div className='flex items-center'>
                  <div className='h-8 w-8 items-center flex justify-center rounded-full bg-[#E9F9EB] mr-2 '>
                    <AiOutlineWhatsApp size={18} color='green'/>
                  </div>
                  <span className='underline text-[12px] cursor-pointer'>{formData?.phone || 'Not Available'}</span>
              </div>
              <div className='flex items-center '>
                <div className='h-8 w-8 items-center flex justify-center rounded-full bg-[#EBE6F9] mr-2 '>
                    <AiOutlineInstagram size={18} color='red'/>
                  </div>
                  <span className='underline text-[12px] cursor-pointer'>{formData?.instagramUsername || 'Not Available'}</span>
              </div>
            </div>  
            <div className='flex justify-between w-[90%] mt-3'>
              <div className='flex items-center'>
              <div className='h-8 w-8 items-center flex justify-center rounded-full bg-[#EBE6F9] mr-2 '>
                    <MdEmail size={18} color='blue'/>
                  </div>
                  <span className='underline text-[12px] cursor-pointer'>{formData?.email || 'Not Available'}</span>
              </div>
              <div className='flex items-center'>
              <div className='h-8 w-8 items-center flex justify-center rounded-full bg-[#EBE6F9] mr-2 '>
                    <BsYoutube size={18} color='red'/>
                  </div>
                  <span className='underline text-[12px] cursor-pointer'>{formData?.youtubeUsername || 'Not Available'}</span>
              </div>
            </div>  
            </div>):(<div className={style.AddProfile}>
              <AiOutlinePlusCircle onClick={()=>setShowModel(!showModel)} size={50}/>
        <h1>Add Profile</h1>
        {showModel?<Model onFormDataReceived={handleFormDataFromModal} onClose={()=>setShowModel(!showModel)}/>:""}
            </div>)}
    </div>
  )
}

export default AddProfile