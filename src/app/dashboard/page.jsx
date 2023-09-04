'use client'
import Image from 'next/image';
import style from '../styles.module.css';
import dashboard from '../../../public/dashboard.png';
import { AiFillSchedule, AiOutlinePieChart, AiOutlineSearch, AiOutlineSetting, AiOutlineTags,AiOutlineLike } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr';
import { FaMoneyCheck } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import profile from '../../../public/a.png';
import {ChartComponent} from '../chartComponents';
import TopProducts from '../TopProducts';
import AddProfile, { Model } from '../AddProfile';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const icon=[
  {
    id:1,
    icon:<AiOutlinePieChart size={20} style={{marginRight:15}}/>,
    name:'Dashboard'
  },
  {
    id:2,
    icon:<AiOutlineTags  size={20} style={{marginRight:15}} />,
    name:'Transactions'
  },
  {
    id:3,
    icon:<AiFillSchedule  size={20} style={{marginRight:15}}/>,
    name:'Schedules'
  },
  {
    id:4,
    icon:<BiUserCircle  size={20} style={{marginRight:15}}/>,
    name:'User'
  },
  {
    id:5,
    icon:<AiOutlineSetting  size={20} style={{marginRight:15}}/>,
    name:'Setting'
  },
]

const dummyData=[
  {
    id:1,
    abhayIcons:<FaMoneyCheck  size={20} color={'white'}/>,
    iconBGC:'#7FCD93',
    name:'Total Revenues',
    value:"$2,129,430",
    growthper:'+2.5%',
    growthperColor:'#E9F9EB',
  },
  {
    id:2,
    abhayIcons:<AiOutlineTags size={18} color={'white'}/>,
    iconBGC:'#DEBF85',
    name:'Total Transactions',
    value:"1,520",
    growthper:'+1.7%',
    growthperColor:'#E9F9EB',
  },
  {
    id:3,
    abhayIcons:<AiOutlineLike  size={20} color={'white'}/>,
    iconBGC:'#ECA4A4',
    name:'Total Likes',
    value:"9,721",
    growthper:'+1.4%',
    growthperColor:'#E9F9EB',
  },
  {
    id:4,
    abhayIcons: <FiUsers size={20} color={'white'}/>,
    iconBGC:'#A9B0E5',
    name:'Total Users',
    value:"9,721",
    growthper:'+4.2%',
    growthperColor:'#E9F9EB',
  },
]





const Dashboard = () => {
  const session =useSession();
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
    <section className={style.dashboard}>
      {/* left side */}
      <div className={style.dashboardLeft}>
        <h1 className={style.dashboardName}>Board.</h1>
        
        <div className={style.dashboardItems}>
          {icon.map((item)=>(
            // eslint-disable-next-line react/jsx-key
            <div key={item.id} className={style.dashboardli}>
            {item.icon}
            <p style={{fontWeight:item.id==1?'600':''}}>{item.name}</p>
          </div>
          ))}
        </div>
        
        <div className={style.dashboardBottom}>
          <p>help</p>
          <p>Contact us</p>
        </div>
        </div>

        {/* right side */}
      <div className={style.dashboardRight}>

        <div className={style.dashboardRightHeader}>
          <div className={style.dashboardRightHeaderName}><h1 className={isLightMode?'':'text-black'}>Dashboard</h1></div>
          <div className={isLightMode?"":'text-black'}>
            <div className={style.dashboardRightLists}>
              <div className={style.dashboardRightTools}>
                <input placeholder='search...' className={style.dashboardRightInput}/>
                <AiOutlineSearch  size={20}/>
              </div>

              <div className={style.dashboardRightToolsIcon}>
                <GrNotification size={20} />
              </div>

              <Image onClick={()=>signOut('google')} className={style.profile} src={session?.data?.user?.image || profile} alt='profile' height={40} width={40}/>

            </div>
          </div>
        </div>
          
        <div className={style.dashboardRightInformations}>
            {
              dummyData.map((item)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div key={item.id} className={style.dashboardRightInformationsLists}>
                    <div style={{backgroundColor:item.iconBGC,padding:5,borderRadius:20,width:30,alignItems:'center',justifyContent:'center'}}>
                    {item.abhayIcons}
                    </div>
                    <p className={isLightMode?'':'text-black'} style={{fontWeight:'300',marginTop:10}}>{item.name}</p>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <h1 className={isLightMode?'':'text-black'} style={{fontWeight:'500',}}>{item.value}</h1>
                      <h1 className={isLightMode?'':'text-black'} style={{fontWeight:'500',backgroundColor:item.growthperColor,borderRadius:8,padding:2,color:'green'}}>{item.growthper}</h1>
                    </div>
                  </div>
              ))
            }
        </div>  

        {/* chart sections */}
        <div className={style.dashboardRightChartSection}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',}}>
              <div>
                <h1 className={isLightMode?'':'text-black'}>Activites</h1>
                <p className={isLightMode?'':'text-black'}>May-June 2021</p>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
                <div style={{backgroundColor:'#EE8484',borderRadius:5,height:5,width:5,marginRight:10}}></div>
                <div className={isLightMode?'':'text-black'} style={{marginRight:10}}>Guest</div>
                <div style={{backgroundColor:'#98D89E',borderRadius:5,height:5,width:5,marginRight:10}}></div>
                <div className={isLightMode?'':'text-black'}>User</div>
              </div>
            </div>
            <div className={style.mainChart}>
              <ChartComponent />
            </div>
        </div>

        {/* bottom section */}
        <div className={style.bottmSection}>
          <div className={style.bottmSectionFirst}>
            <TopProducts />
          </div>
          <div className={style.bottmSectionFirst}>
            <AddProfile />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Dashboard