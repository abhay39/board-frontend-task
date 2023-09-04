"use client"
import style from '../styles.module.css';
import {AiFillApple, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { signIn, useSession } from 'next-auth/react'
import Dashboard from '../dashboard/page';
import { Model } from '../AddProfile';
import { useEffect, useState } from 'react';

const Login = () => {
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

    const [isLightMode,setIsLightMode]=useState(true);

  useEffect(()=>{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsLightMode(false)
    } else {
      // User has light mode preference
      setIsLightMode(true);
    }
  },[isLightMode])

  return (
    <section className={isLightMode?'':'text-black'}>
      <div className={style.loginDiv}>
        {/* left side */}
        <div className={style.left}>
          <div className="absolute top-12 left-12 text-xl hidden md:block "><h1 className="text-bold font-Montserrat">Logo</h1></div>
          <div className={style.logo}>
            <h1 className={style.comName}>Board.</h1>
          </div>
          <div className={style.socialIcons}>
            <AiFillGithub size={30}/>
            <AiFillTwitterCircle size={30}/>
            <AiFillLinkedin size={30}/>
            <BsDiscord size={30}/>
          </div>
        </div>

        {/* right side */}
        <div className={style.right}>
          <div>
            <h1 className={style.heading} style={{fontSize:25,fontWeight:'700',font:'Montserrat'}}>{showModel?'Sign Up':'Sing In'}</h1> 
            <p  className={style.heading}style={{fontWeight:'400',font:'Montserrat',fontSize:14}}>{showModel?"Sign up your account":"Sign in to your account"}</p>

            <div className={style.options}>
              <div onClick={() => signIn('google')} className={style.sign}>
                  <FcGoogle  size={20}/>
                <p style={{color:'#999999'}}>{showModel?'Sign up with google':'Sign in with google'}</p>
              </div>
              <div className={style.sign}>
                  <AiFillApple  color={'#999999'} size={20}/>
                <p style={{color:'#999999'}}>{showModel?'Sign up with apple':'Sign in with apple'}</p>
              </div>
            </div>

            <div className={style.inputBoxes}>
                <div className={style.email}>
                  <label>Email Address</label> <br/>
                  <input className={style.input} type='email' placeholder='johndoe@gmail.com'/>
                </div>
                <div>
                  <label>Password</label> <br/>
                  <input className={style.input} type='password' placeholder='••••••••'/>
                </div>
                <div style={{alignItems:'left',marginTop:10}}>
                  <label style={{color:'#346BD4',textAlign:'left'}} className={style.link}>{showModel?'':'Forgot password?'}</label><br/>
                  <button className={style.btn}>{showModel?"Sign Up":'Sign In'}</button>
                </div>
            </div>
            <div className={style.register}>
              <span style={{color:'#999999'}}>{showModel?"Already have an Account?":"Don't have an Account?"}</span>&nbsp; <label onClick={()=>setShowModel(!showModel)}>{showModel?"Login Here":'Register Here'}</label>
            </div>
          </div>
          </div>
      </div>
      {/* {showModel?<Model onFormDataReceived={handleFormDataFromModal} onClose={()=>setShowModel(!showModel)}/>:""} */}
    </section>
  )
}

export default Login