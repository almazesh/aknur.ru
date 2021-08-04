import cls from './Toilet.module.css'
import MintBtn from '../../assets/Soap product/mintBtn.png'
import PeachBtn from '../../assets/Soap product/peachBtn.png'
import GarnetBtn from '../../assets/Soap product/garnetBtn.png'
import LavanderBtn from '../../assets/Soap product/LavBtn.png'
// CARDS
import LavanderCard from '../../assets/Soap product/Lavanda.png'
import MintCard from '../../assets/Soap product/mint.png'
import PeachCard from '../../assets/Soap product/PeachCard.png'
import GarnetCard from '../../assets/Soap product/Garnet.png'
import { useEffect } from 'react'

// Btn Bubble
import Pink from '../../assets/Soap product/pinkCircle.png'
import Green from '../../assets/Soap product/greenCircle.png'
import MintBubble from '../../assets/Soap product/mintBubble.png'
import LavanderBubble from '../../assets/Soap product/lavanderBubble.png'
import granatBubble from '../../assets/Soap product/granatBubble.png'
import peachBubble from '../../assets/Soap product/peachBubble.png'
import { useState } from 'react'
import Combo from '../../assets/Soap product/bubbleCom.png'
import {useSelector} from 'react-redux' 

const Toilet = () =>{
    const {selectedLang:{Soap}} = useSelector(s => s.Lang)

    const data = [
        {
            id: 1,
            original: LavanderBtn,  
            mainPicture: Soap.soapLavanda,
            thumbnail: LavanderBubble
            
        },
        {
            id: 2,
            original: MintBtn,
            mainPicture: Soap.soapMint,
            thumbnail:MintBubble,
        },
        {
            id: 3,
            original: GarnetBtn,
            mainPicture:Soap.soapGranat,
            thumbnail:granatBubble
        },
        {
            id: 4,
            original: PeachBtn,
            mainPicture:Soap.soapPersik,
            thumbnail:peachBubble,
    
    
        }
    ]
    
    const [activeImg, setActiveImg] = useState(data[1])
    
    const handleChangeImage = item => {
        setActiveImg(item)
    }
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])

    return (
        <>
            <div className={cls.toilet_banner}>
                <div className={cls.toilet_title}>
                     <h1>{Soap.soapTitle}</h1>
                     <p>
                         {Soap.soapText}
                     </p>
                </div>


                <div className={cls.toilet_content_inline}>
                    <div className={cls.toilet_content_left}>
                        <div className={cls.soap_product}>
                            <div 
                                className={cls.card}
                                style={{
                                    backgroundImage: `url(${activeImg.mainPicture})` 
                                }}
                            >
                                <div className={cls.Circles} style={{backgroundImage:`url(${activeImg.circle})`}}>
                                    {activeImg.circleText}
                                </div>

                            </div>
                        </div>
                        <div className={cls.slide_inline}>
                            {
                                data.map(item => (
                                    <div 
                                        onClick={() => {
                                            handleChangeImage(item)
                                        }}
                                        className={cls.firsts} 
                                        key={item.id}
                                        style={{
                                            backgroundImage: `url(${item.id === activeImg.id ? item.original  : item.thumbnail})`,
                                        }}>
                                            
                                    </div>
                                ))
                            }
                           
                        </div>
                    </div>
                    <div className={cls.toilet_content_right}>
                        <div>
                            <h2>{Soap.structure} </h2>
                            <p>
                                {Soap.structureText}
                            </p>
                        </div>
                        <div className={cls.none_el}>
                            <h2>{Soap.safe}</h2>
                            <p>
                               {Soap.safeText}
                            </p>
                        </div>
                        <div  className={cls.none_el}>
                            <h2>{Soap.local}</h2>
                            <p>
                               {Soap.localText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.combo}>
                 <img alt="" src={Combo}/>
            </div>
        </>
    )
}

export default Toilet