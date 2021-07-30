import Maps from '../../../assets/Main/Formula/Vector.png'
import cls from './Formula.module.css'
import './modal.css'

import Bubble from '../../../assets/Main/bubble.png'
import Aknurs from '../../../assets/Aknur product/AknurCard3.png'
import Color from '../../../assets/Aknur product/colorOt.png'
import colorCard6 from '../../../assets/Aknur product/colorCard6.png'
import purpleSoap from '../../../assets/Main/purpleSoap.png'
import AinurCard from '../../../assets/Ainur product/colorCard3kg.png'
import Active from '../../../assets/Main/BlueSlider/active.png' 
import UnActive from '../../../assets/Main/BlueSlider/unactive.png'
import Persik from '../../../assets/Main/persik.png'
import Granat from '../../../assets/Main/granat.png'

// import Text from '../../../assets/Main/BlueSlider/text.png'
import Planet from '../../../assets/Main/BlueSlider/planet.png'
import Ainur9 from '../../../assets/Ainur product/ainurCard9.png'
import One from '../../../assets/Article/one.png'
import Two from '../../../assets/Article/three.png'
import Three from '../../../assets/Article/six.png'
import Four from '../../../assets/Article/two.png'
import Five from '../../../assets/Article/four.png'
import Six from '../../../assets/Article/fiv.png'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Mint from '../../../assets/Main/mint.png'
import {useMediaQuery} from 'react-responsive'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.min.css';
import { useSelector} from 'react-redux';
import SwiperCore, { Pagination} from 'swiper';
SwiperCore.use([ Pagination]);




const Formula = () =>{
    const [startIndex, setStartIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1)
    const [open , setOpen] = useState(false)
    const openModal = () => setOpen(prev => !prev);
    const {selectedLang:{Mains , Contact}} = useSelector(s => s.Lang)
    const isSmall = useMediaQuery({query:'(max-width:500px)'})
    const [activeSliderBase , setActiveSliderBase] = useState(Mains.sliderBase.slice(0,2));




    // Contact 


    const [name , setName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [code , setCode] = useState('+7')
    const [number , setNumber] = useState('')
    const [country , setCountry] = useState('')
    const [town , setTown] = useState('')
    const [check , setCheck] = useState(false)
    const [feed , setFeed] = useState('')
    const formSubmit =  e => {
        e.preventDefault()
        if(name !== '' && lastName !== '' && email !== '' && code !== '' && number !== '' && country !== '' && town !== '' && feed !== ''){
                if(check){
                    fetch('http://530753-cq66777.tmweb.ru:8080/api/becomedealer',{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            firstName:name,
                            lastName:lastName,
                            internationalCode:code,
                            phoneNumber:number,
                            email:email,
                            country:country,
                            city:town,
                            description:feed
            
                        })
                    }).then(res =>{
                        if(Math.floor(res.status / 100) === 2){
                            console.log(res)
                            alert('Отправлено успешно!')
                            setCheck(false)
                            setName('')
                            setLastName('')
                            setCode('+7')
                            setNumber('')
                            setEmail('')
                            setCountry('')
                            setTown('')
                            setFeed('')
                        }
                    }).catch(()=>{
                        alert(Contact.err)
                    })
                }else{
                    alert(Contact.confirm)
                }
            }else{
                alert(Contact.full)
            }
        }











    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])

    useEffect(()=>{
        if(isSmall){
            setActiveSliderBase(Mains.sliderBase.slice(startIndex, nextIndex))
        }else{
            setActiveSliderBase(Mains.sliderBase.slice(0,2))
        }
    }, [isSmall, Mains.sliderBase])
    useEffect(() => {
        if(isSmall){
            setTimeout(() => {
                if(nextIndex === Mains.sliderBase.length){
                    setStartIndex(0)
                    setNextIndex(1)
                    setActiveSliderBase(Mains.sliderBase.slice(startIndex, nextIndex));
                }else{
                    setStartIndex(prev => prev + 1)
                    setNextIndex(prev => prev + 1)
                    setActiveSliderBase(Mains.sliderBase.slice(startIndex, nextIndex));
                }
            }, 2000)
        }
    }, [ isSmall, Mains.sliderBase])

    
   
    const isMedium = useMediaQuery({query:"(max-width:414px)"})


    return (
        <>
            <div className={cls.formula_banner}>
                <div className={cls.formula_inline}>
                     <div className={cls.formula_left}>
                         <div className={cls.formula_left_circle}>
                            <img alt="" src={Mains.map.textImg}/>
                            <img alt="" src={Maps}/>
                         </div>
                     </div>
                     <div className={cls.formula_right}>
                          <div className={cls.formula_right_text}>
                               <h1>{Mains.formulaTitle}</h1>
                               <p>
                                   {Mains.formulaText}
                               </p>
                               <p>{Mains.formulaText2}</p>
                          </div>
                     </div>
                     <div className={cls.formula_bubble}>
                        <img src={Bubble} className={cls.bubble_one} alt=''/>
                        <img src={Bubble} className={cls.bubble_two} alt=''/>
                        <img src={Bubble} className={cls.bubble_three} alt=''/>
                        <img src={Bubble} className={cls.bubble_four} alt=''/>
                     </div>
                </div>
            </div>

            <div className={cls.our_product}>
                <h1>{Mains.productTitle}</h1>
            </div>

            {
                isMedium ? (
                   <div className={cls.slider}>
                       <div className={cls.center_slide}>
                       <Swiper 
                       spaceBetween={0}
                       pagination={{
                        "dynamicBullets": true
                      }} 
                       slidesPerView={1}
                       onSlideChange={() => console.log('slide change')}
                       onSwiper={(swiper) => console.log(swiper)}
                       >
                        <SwiperSlide className={cls.swiper1}>
                            
                            <div className={cls.product_card}>
                                <img alt="" src={Aknurs}/>
                                <div className={cls.product_card_abs}>
                                    <h1>ак нур автомат</h1>
                                    <p>
                                        стиральный порошок – 6кг.
                                    </p>
                                    <Link to='/aknur-product'>
                                         <button>подробнее</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide 
                        className={cls.swiper2}
                    >
                        <div className={cls.product_card} >
                                <img alt="" src={Color}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.otbel}</h1>
                                    <p>
                                        {Mains.productCard.otbelText}
                                    </p>
                                    <Link to='/cleaner'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className={cls.product_card}>
                                <img alt="" src={colorCard6}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.color}</h1>
                                    <p>
                                        {Mains.productCard.colorText6}
                                    </p>
                                    <Link to='/aknur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className={cls.swiper4}>
                            <div className={cls.product_card}>
                                <img alt="" src={purpleSoap}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapLavanda}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className={cls.product_card}>
                                <img alt="" src={AinurCard}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.ainur}</h1>
                                    <p>
                                        {Mains.productCard.ainurText3}
                                    </p>
                                    <Link to='/ainur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className={cls.swiper6}>
                            <div className={cls.product_card}>
                                <img alt="" src={Persik}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapPersik}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className={cls.product_card}>
                                <img alt="" src={Ainur9}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.ainur}</h1>
                                    <p>
                                        {Mains.productCard.ainurText9}
                                    </p>
                                    <Link to='/ainur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className={cls.swiper8}>
                            <div className={cls.product_card}>
                                <img alt="" src={Mint}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapMint}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide> 
                    <SwiperSlide className={cls.swiper9}>
                        <div className={cls.product_card}>
                                <img alt="" src={Granat}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapGranat}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                    </SwiperSlide>
                   </Swiper>
                   </div>
                   </div>
                ) : (
                    <div className={cls.slider}>
                    <div className={cls.slide_track}>
                            <div className={cls.product_card}>
                                <img alt="" src={Granat}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapGranat}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={Aknurs}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.aknur}</h1>
                                    <p>
                                        {Mains.productCard.aknurText3}
                                    </p>
                                    <Link to='/aknur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card} >
                                <img alt="" src={Color}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.otbel}</h1>
                                    <p>
                                       {Mains.productCard.otbelText}                          
                                    </p>
                                    <Link to='/cleaner'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={colorCard6}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.color}</h1>
                                    <p>
                                        {Mains.productCard.colorText6}
                                    </p>
                                    <Link to='/aknur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={purpleSoap}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapLavanda}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={AinurCard}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.ainur}</h1>
                                    <p>
                                        {Mains.productCard.ainurText3}
                                    </p>
                                    <Link to='/ainur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={Persik}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapPersik}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={Ainur9}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.ainurAw}</h1>
                                    <p>
                                        {Mains.productCard.ainurText9}
                                    </p>
                                    <Link to='/ainur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={Mint}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapMint}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={Granat}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapGranat}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={Aknurs}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.aknur}</h1>
                                    <p>
                                            {Mains.productCard.aknurText6}
                                    </p>
                                    <Link to='/aknur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card} >
                                <img alt="" src={Color}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.otbel}</h1>
                                    <p>
                                        {Mains.productCard.otbelText}
                                    </p>
                                    <Link to='/cleaner'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={colorCard6}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.color}</h1>
                                    <p>
                                        {Mains.productCard.colorText6}
                                    </p>
                                    <Link to='/aknur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={purpleSoap}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapLavanda}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>

                            <div className={cls.product_card}>
                                <img alt="" src={AinurCard}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.ainur}</h1>
                                    <p>
                                        {Mains.productCard.ainurText3}
                                    </p>
                                    <Link to='/ainur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={cls.product_card}>
                                <img alt="" src={Persik}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.soap}</h1>
                                    <p>
                                        {Mains.productCard.soapPersik}
                                    </p>
                                    <Link to='/soap-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                           
                            <div className={cls.product_card}>
                                <img alt="" src={Ainur9}/>
                                <div className={cls.product_card_abs}>
                                    <h1>{Mains.productCard.ainur}</h1>
                                    <p>
                                        {Mains.productCard.ainurText9}
                                    </p>
                                    <Link to='/ainur-product'>
                                        <button>{Mains.productCard.more}</button>
                                    </Link>
                                </div>
                            </div>
                        
                            
                    </div>              
                </div>
                )
            }


            <div className={cls.darkblue_banner}>

                <div className={cls.darkblue_inline}>

                    {
                        activeSliderBase.map((item , index) =>{
                            return (
                            <div fade="true" key={item.id} className={index === 0 ? cls.dark_left : cls.dark_right}>
                                    <div className={cls.cardHeight}>
                                        <img alt="" style={{width:item.size}} src={item.image}/>
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>
                                        {
                                            item.text
                                        }
                                    </p>
                            </div>
                            )
                        })
                    }
                    
                </div>
                    {/* {
                        DeviceMotionEvent.map(item =>{})
                    } */}
                <div className={cls.slide_block}>
                    {
                        Mains.sliderBase.map((item , index) =>(
                            isSmall ? (
                                <img alt="" key={item.id}  src={item.id === activeSliderBase[0].id ? Active : UnActive} onClick={() =>{
                                    setActiveSliderBase(Mains.sliderBase.slice(index , index+1))
                                 }}   />
                            ) : (
                                index % 2 === 0 && (
                                    <img alt="" key={item.id}  src={item === activeSliderBase[0] ? Active : UnActive} onClick={() =>{
                                        setActiveSliderBase(Mains.sliderBase.slice(index , index +2))
                                     }}   />
                                )
                            )
                        ))
                    }
                   
                </div>
            </div>


            <div className={cls.order_world}>
                <div className={cls.order_title}>
                    <h1>{Mains.orderTitle}</h1>
                </div>
                
                <div className={cls.order_inline}>
                    <div className={cls.order_left}>
                        <p>
                            {Mains.orderText}
                            <br />
                            <span>{Mains.orderText2}</span>
                        </p>
                        <button onClick={openModal}>{Mains.orderBtn}</button>
                    </div>

                    <div className={cls.order_right}>
                        <div className={cls.circle_blue}>
                             <img alt="" src={Mains.planet} className={cls.textOrder}/>
                             <img alt="" src={Planet}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={open ? 'modal_background activeModal' : 'modal_background' }>
                    <span onClick={openModal}>&times;</span>

                    <div className="modal_center">
                        <div className='modal_card'>
                            <div className='modal_position'>
                                <div className='w-hun'>
                                    <input type="text" placeholder={Contact.inputName} onChange={e=> setName(e.target.value)} value={name}/>
                                </div>  
                                <div className='w-hun'>
                                    <input type="text" placeholder={Contact.inputLastName} onChange={e => setLastName(e.target.value)} value={lastName}/>
                                </div>  
                                <div className='w-hun'>
                                    <input type="text" placeholder="E-mail"  onChange={e => setEmail(e.target.value)} value={email}/>
                                </div> 
                                <div className='input_inline'>
                                    <select onChange={e => setCode(e.target.value)} defaultValue={code}>
                                        <opiton value='+'>
                                            +
                                        </opiton >
                                        <option value="+7">
                                            +7
                                        </option>
                                        <option value='+996'>
                                            +996
                                        </option>
                                    </select>
                                    <input type='number' placeholder={Contact.inputNumber} onChange={e => setNumber(e.target.value)} value={number}/>
                                </div> 
                                <div className='input_inline2'>
                                    <input type='text' placeholder={Contact.inputCountry} onChange={e=> setCountry(e.target.value)} value={country}/>
                                    <input type='text' placeholder={Contact.inputCity} onChange={e=> setTown(e.target.value)} value={town}/> 
                                </div>
                                <div className='input_feed'>
                                    <input type='text' placeholder={Contact.text} onChange={e => setFeed(e.target.value)} value={feed}/>
                                </div>
                                <div className='modal_сheck'>
                                    <input id="check" type='checkbox' onChange={e => setCheck(e.target.checked)} defaultChecked={check} className='check'/>
                                    <label htmlFor="check">{Contact.checkBox}</label>
                                </div>
                                <div className='modal_btn'>
                                    <button onClick={formSubmit}>{Contact.ContactBtn}</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>  

            <div className={cls.interest}>
                 <h1>{Mains.needToKnow}</h1>
            </div>


           {
               isMedium ? (
                   <div className={cls.slide_banner}>
                       <div className={cls.slide_banner_center  }>
                       <Swiper 
                       spaceBetween={0}
                       
                       slidesPerView={1}
                       onSlideChange={() => console.log('slide change')}
                       onSwiper={(swiper) => console.log(swiper)}
                       >
                        <SwiperSlide>
                            <div className={cls.article_card}>
                                <img alt="" src={One}/>
                                <h1>{Mains.goodFor.rightClear}</h1>
                                <Link to='right-clear
                                '>{Mains.productCard.more}</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.article_card}>
                                <img alt="" src={Two}/>
                                <h1>{Mains.goodFor.prostyn}</h1>
                                <Link to='/prostyn'>{Mains.productCard.more}</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.article_card}>
                                <img alt="" src={Three}/>
                                <h1>{Mains.goodFor.lifehack}</h1>
                                <Link to='/lifehack'>{Mains.productCard.more}</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.article_card}>
                                <img alt="" src={Four}/>
                                <h1>{Mains.goodFor.deepclear}</h1>
                                <Link to='/deepclear'>{Mains.productCard.more}</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.article_card}>
                                <img alt="" src={Five}/>
                                <h1>{Mains.goodFor.high}</h1>
                                <Link to='/high-clear'>{Mains.productCard.more}</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cls.article_card}>
                                <img alt="" src={Six}/>
                                <h1>{Mains.goodFor.method}</h1>
                                <Link to='/method'>{Mains.productCard.more}</Link>
                            </div>  
                        </SwiperSlide>
                        </Swiper>
                       </div>
                   </div>
               ) : (
                    <div className={cls.slider_banner}>
                    <div className={cls.slider_inline}>
                        <div className={cls.article_card}>
                            <img alt="" src={One}/>
                            <h1>{Mains.goodFor.rightClear}</h1>
                            <Link to='right-clear
                            '>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Two}/>
                            <h1>{Mains.goodFor.prostyn}</h1>
                            <Link to='/prostyn'>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Three}/>
                            <h1>{Mains.goodFor.lifehack}</h1>
                            <Link to='/lifehack'>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Four}/>
                            <h1>{Mains.goodFor.deepclear}</h1>
                            <Link to='/deepclear'>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Five}/>
                            <h1>{Mains.goodFor.high}</h1>
                            <Link to='/high-clear'>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Six}/>
                            <h1>{Mains.goodFor.method}</h1>
                            <Link to='/method'>{Mains.productCard.more}</Link>
                        </div>  
                        <div className={cls.article_card}>
                            <img alt="" src={One}/>
                            <h1>{Mains.goodFor.rightClear}</h1>
                            <Link to='right-clear
                            '>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Two}/>
                            <h1>{Mains.goodFor.prostyn}</h1>
                            <Link to='/prostyn'>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Three}/>
                            <h1>{Mains.goodFor.lifehack}</h1>
                            <Link to='/lifehack'>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Four}/>
                            <h1>{Mains.goodFor.deepclear}</h1>
                            <Link to='/deepclear'>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Five}/>
                            <h1>{Mains.goodFor.high}</h1>
                            <Link to='/high-clear'>{Mains.productCard.more}</Link>
                        </div>
                        <div className={cls.article_card}>
                            <img alt="" src={Six}/>
                            <h1>{Mains.goodFor.method}</h1>
                            <Link to='/method'>{Mains.productCard.more}</Link>
                        </div> 
                        
                    </div>
                </div>
               )
           }
        </>
    )
}
export default Formula;
