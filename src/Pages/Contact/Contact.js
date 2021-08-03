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