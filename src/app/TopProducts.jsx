import { useEffect, useState } from 'react';
import { PieChart } from './PieChart';
import style from './styles.module.css';

const TopProducts = () => {
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
    <div className={isLightMode?"":'text-black'}>
            <div className={style.TopProducts}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
                <h1>Top Products</h1>
                <p>May-June 2021</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className={style.piechart}>
                    <PieChart />
                </div>
                
                <div>
                    <div style={{display:'flex',alignItems:'center'}}>
                        
                        <div>
                            <div>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{backgroundColor:'#98D89E',borderRadius:5,height:5,width:5,marginRight:10}}></div>
                                <h1>Basic Tree</h1>
                            </div>
                                <p style={{marginLeft:16}}>55%</p>
                            </div>
                            <div>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <div style={{backgroundColor:'#F6DC7D',borderRadius:5,height:5,width:5,marginRight:10}}></div>
                            <h1>Custom Short Pants</h1>
                        </div>
                            <p style={{marginLeft:16}}>31%</p>
                        </div>
                        <div>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <div style={{backgroundColor:'#EE8484',borderRadius:5,height:5,width:5,marginRight:10}}></div>
                            <h1>Super Hoodies</h1>
                        </div>
                            <p style={{marginLeft:16}}>14%</p>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default TopProducts