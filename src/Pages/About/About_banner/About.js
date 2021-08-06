import cls from './About.module.css'
import '../../Main/Formula/modal.css'
import Circle from '../../../assets/About/aboutText.png'
import AkColor from '../../../assets/About/aknur.png'
import Ainur from '../../../assets/About/ainur.png'
import medal from '../../../assets/About/medal.png'
import Bubble from '../../../assets/Main/bubble.png'
import formSubmit  from '../../Main/Formula/Formula'
import { useSelector } from 'react-redux'
import { useEffect , useState} from 'react'
const About = () =>{
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])  
    const {selectedLang:{AboutPage , Mains , Contact}} = useSelector(s  => s.Lang)
    const [open , setOpen] = useState(false)
    const openModal = () => setOpen(prev => !prev);
    const [name , setName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [code , setCode] = useState('+')
    const [number , setNumber] = useState('')
    const [country , setCountry] = useState('')
    const [town , setTown] = useState('')
    const [check , setCheck] = useState(false)
    const [feed , setFeed] = useState('')
    const formSubmit =  e => {
        e.preventDefault()
        if(name !== '' && lastName !== '' && email !== '' && code !== '' && number !== '' && country !== '' && town !== '' && feed !== ''){
                if(check){
                    fetch('http://530753-cq66777.tmweb.ru:8080/api/feedback',{
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
                            setCode('+')
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
  
    return (
        <>
            <div className={cls.about_banner}>
                <div className={cls.about_title}>
                     <h1>{AboutPage.bannerTitle}</h1>
                </div>
                <div className={cls.about_inline}>
                    <div className={cls.about_left}>
                        <p>
                            {AboutPage.bannerText} <br />   
                            <span>
                                 {AboutPage.bannerText2}
                            </span>
                        </p>
                      
                        <p>
                            {AboutPage.bannerText3}
                        </p>
                    </div>
                    <div className={cls.about_right}>
                        <div className={cls.about_circle}>
                                <img alt="" className={cls.medal} src={medal}/>
                                <img alt="" className={cls.text} src={Mains.medal}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.about_bannerOne}>

            </div>
            <div className={cls.blue_banner}>
                <div className={cls.blue_text}>
                    <h1>
                         {AboutPage.blueTitle}
                         <img alt="" src={Bubble} className={cls.blue_bubble1}/>
                         <img alt="" src={Bubble} className={cls.blue_bubble2}/>
                    </h1>
                    <p>
                        {AboutPage.blueText}
                        <img alt="" src={Bubble} className={cls.blue_bubble3}/>
                        <img alt="" src={Bubble} className={cls.blue_bubble4}/>
                    </p>
                </div>
            </div>
            <div className={cls.about_bannerTwo}>

            </div>
            <div className={cls.blue_banner}>
                <div className={cls.blue_text}>
                    <h1>{AboutPage.blueTitle2}</h1>
                    <p>
                        {AboutPage.blueText2}
                    </p>
                    <p>{AboutPage.blueText3}</p>

                </div>
            </div>
            <div className={cls.about_status}>
                <h1>{AboutPage.statusTitle}</h1>

                <div className={cls.about_status_inline}>
                     <ul className={cls.about_list}>
                         <li>{AboutPage.goodFirst}</li>
                         <li>{AboutPage.similarStatus}</li>
                         <li>{AboutPage.noneDust} </li>
                         <li>{AboutPage.quickWater}</li>
                         <li>{AboutPage.highConcetrate}</li>
                         <li>{AboutPage.saveColor}</li>
                         <li>{AboutPage.haveNiceSmell}</li>
                         <li>{AboutPage.easyWork}</li>
                         <li>{AboutPage.componentGran}</li>
                         <li>{AboutPage.effectLow}</li>
                         <li className={cls.center}>
                             <button onClick={openModal}>{AboutPage.btnConnect}</button>
                         </li>
                     </ul>
                     <ul className={cls.about_bubble}>
                         <li><img alt="" src={Bubble} className={cls.foot_bubble1}/></li>
                         <li><img alt="" src={Bubble} className={cls.foot_bubble2}/></li>
                         <li><img alt="" src={Bubble} className={cls.foot_bubble3}/></li>
                         <li><img alt="" src={Bubble} className={cls.foot_bubble4}/></li>

                     </ul>
                     <ul className={cls.absolute_img}>
                        <li>
                            <img alt="" src={AkColor} className={cls.aknur_img}/>
                        </li>
                        <li><img alt="" src={Ainur} className={cls.ainur_img}/></li>
                     </ul>
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
                                    <input type="text" placeholder="E-mail"  required onChange={e => setEmail(e.target.value)} value={email}/>
                                </div> 
                                <div className='input_inline'>
                                    <select onChange={e => setCode(e.target.value)} defaultValue={code}>
                                    <option value="+">
                                        +
                                    </option>
                                    <option value="+61">
                                        +61
                                    </option>
                                    <option value="+43">
                                        +43
                                    </option>
                                    <option value="+994">
                                        +994
                                    </option>
                                    <option value="+355">
                                        +355
                                    </option>
                                    <option value="+213">
                                        +213
                                    </option>
                                    <option value="+684">
                                        +684
                                    </option>
                                    <option value="+1264">
                                        +1264
                                    </option>
                                    <option value="+244">
                                        +244
                                    </option>
                                    <option value="+376">
                                        +376
                                    </option>
                                    <option value="+672">
                                        +672
                                    </option>
                                    <option value="+1268">
                                        +1268
                                    </option>
                                    <option value="+971">
                                        +971
                                    </option>
                                    <option value="+54">
                                        +54
                                    </option>
                                    <option value="+374">
                                        +374
                                    </option>
                                    <option value="+297">
                                        +297
                                    </option>
                                    <option value="+93">
                                        +93
                                    </option>
                                    <option value="+1242">
                                        +1242
                                    </option>
                                    <option value="+880">
                                        +880
                                    </option>
                                    <option value="+1246">
                                        +1246
                                    </option>
                                    <option value="+973">
                                        +973
                                    </option>
                                    <option value="+375">
                                        +375
                                    </option>
                                    <option value="+501">
                                        +501
                                    </option>
                                    <option value="+32">
                                        +32
                                    </option>
                                    <option value="+229">
                                        +229
                                    </option>
                                    <option value="+1441">
                                        +1441
                                    </option>
                                    <option value="+359">
                                        +359
                                    </option>
                                    <option value="+591">
                                        +591
                                    </option>
                                    <option value="+387">
                                        +387
                                    </option>
                                    <option value="+267">
                                        +267
                                    </option>
                                    <option value="+55">
                                        +55
                                    </option>
                                    <option value="+246">
                                        +246
                                    </option>
                                    <option value="+673">
                                        +673
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











        </>
    )
}

export default About