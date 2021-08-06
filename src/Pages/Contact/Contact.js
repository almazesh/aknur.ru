import cls from './Contact.module.css'
import {useState , useEffect} from 'react'
import InputMask from 'react-input-mask'
import {  useSelector} from 'react-redux'
const Contact = () =>{
    const [name , setName] = useState('')
    const [company , setCompany] = useState('')
    const [email , setEmail] = useState('')
    const [code , setCode] = useState('+7')
    const [number , setNumber] = useState('')
    const [country , setCountry] = useState('')
    const [town , setTown] = useState('')
    const [feed , setFeed] = useState('')
    const [check , setCheck] = useState(false)

    const {selectedLang:{Contact}} = useSelector(r => r.Lang)
    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    }, [])
   
    const formSubmit =  e => {
        e.preventDefault()
        if(name !== '' && company !== '' && email !== '' && code !== '' && number !== '' && country !== '' && town !== '' && feed !== ''){
                if(check){
                    fetch('http://530753-cq66777.tmweb.ru:8080/api/becomedealer',{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            name:name,
                            company:company,
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
                            setCompany('')
                            setName('')
                            setCode('+7')
                            setNumber('')
                            setEmail('')
                            setCountry('')
                            setTown('')
                            setFeed('')
                        }
                    }).catch(()=>{
                        alert(`${Contact.err}`)
                    })
                }else{
                    alert(Contact.confirm)
                }
            }else{
                alert(`${Contact.full}`)
            }
        }
    return (
        <>
            <div className={cls.contact_banner}>
                <div className={cls.contact_title}>
                    <h1>{Contact.contactTitle}</h1>
                    <p>
                        {Contact.contactText}
                    </p>
                </div>


                <div className={cls.contact_form}>
                    <form className={cls.form} onSubmit={formSubmit}>
                        <div className={cls.max_input}>
                            <input type='text' placeholder={Contact.name} onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div className={cls.max_input}>
                            <input type='text' placeholder={Contact.company } onChange={e => setCompany(e.target.value)} value={company} />
                        </div>
                        <div className={cls.max_input}>
                            <input type='email' placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className={cls.contact_inline_input}>
                            <div>
                                <select defaultValue={code} className={cls.international} onChange={e=> setCode(e.target.value)}>
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
                            </div>
                            <div>
                                <InputMask onChange={e => {
                                    setNumber(e.target.value)
                                }} mask={code === '+7' ? "(999) 999-99-99" : "(999) 99-99-99"} placeholder={Contact.inputNumber} className={cls.number} value={number}/>
                            </div>
                        </div>
                        <div className={cls.contact_b}>
                             <div>
                                 <input type='text' placeholder={Contact.inputCountry} onChange={e=> setCountry(e.target.value)} value={country}/>
                             </div>
                             <div>
                                 <input className={cls.noneTown} type='text' placeholder={Contact.inputCity} value={town} onChange={e=> setTown(e.target.value)}/>
                             </div>
                        </div>  
                        <div>
                            <textarea placeholder={Contact.text} value={feed} type='text' onChange={e=>setFeed(e.target.value)}></textarea>
                        </div>
                        <div className={cls.contact_сheck}>
                            <input id="check" type='checkbox' defaultChecked={check} onChange={e => setCheck(e.target.checked)}/>
                            <label htmlFor="check">{Contact.checkBox}</label>
                        </div>
                        <div className={cls.centerBtn}>
                        <button  type='submit'>{Contact.ContactBtn}</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;