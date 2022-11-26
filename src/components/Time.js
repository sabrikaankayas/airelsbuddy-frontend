import { useEffect, useRef, useState } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../styles/Time.css"
import axios from "axios"
import { TiTick } from 'react-icons/ti';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);




const Time = () => {

const [value, onChange] = useState(new Date());

const [isLoading, setIsLoading] = useState(false)
const [isLoading2, setIsLoading2] = useState(false)
const [isLoading3, setIsLoading3] = useState(false)

const [createCheck, setCreateCheck] = useState(false)

const [initialize, setInitialize] = useState(false)
const [initialize2, setInitialize2] = useState(false)
const [initialize3, setInitialize3] = useState(false)
const [initialize4, setInitialize4] = useState(false)
const [initialize5, setInitialize5] = useState(false)
const [initialize6, setInitialize6] = useState(false)
const [initialize7, setInitialize7] = useState(false)
const [initialize8, setInitialize8] = useState(false)
const [initialize9, setInitialize9] = useState(false)
const [initialize10, setInitialize10] = useState(false)
const [initialize11, setInitialize11] = useState(false)
const [initialize12, setInitialize12] = useState(false)

const [st, setSt] = useState()
const [toggle, setToggle] = useState("2")
const [toggle2, setToggle2] = useState(0)
const [toggle3, setToggle3] = useState(false)
const [toggle4, setToggle4] = useState(false)
const [toggle5, setToggle5] = useState(false)

const [gd, setGd] = useState(false)

const [savedMilisec, setSavedMilisec] = useState(null)

const [milisec, setMilisec] = useState()
const [sec, setSec] = useState()
const [min, setMin] = useState()
const [hour, setHour] = useState()

const [milisecTemp, setMilisecTemp] = useState(0)
const [secTemp, setSecTemp] = useState(0)
const [minTemp, setMinTemp] = useState(0)
const [hourTemp, setHourTemp] = useState(0)
const [savedMilisecTemp, setSavedMilisecTemp] = useState(null)
const [baseSecTemp, setBaseSecTemp] = useState()

const [currentSec, setCurrentSec] = useState()
const [baseSec, setBaseSec] = useState()
const [difSec, setDifSec] = useState()

//graphic back and forward

const [backForwardDay, setBackForwardDay] = useState(new Date().getDate())
const [backForwardMonth, setBackForwardMonth] = useState(new Date().getMonth() + 1)
const [backForwardYear, setBackForwardYear] = useState(new Date().getFullYear())


//db 

const [data, setData] = useState([])
const [data2, setData2] = useState([])
const [times, setTimes] = useState([])
const [timesFinal, setTimesFinal] = useState([])
const [duration, setDuration] = useState([0])
const [diffDuration, setDiffDuration] = useState([])
const [diffFinalDuration, setDiffFinalDuration] = useState([])

const [milisecData, setMilisecData] = useState({
    totalTime: 0,
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds()
})

//useEffects

//başlangıç

useEffect(() => {
    if (initialize7) {
        createInitialTime()
        setToggle4(true)
        console.log(`selamm ${times}`)
    } else {
        createInitialTime()
        setInitialize7(true)
        setToggle5(true)
    }
   
}, [toggle3])

useEffect(() => {
    if (initialize8) {
        getTimes()
        getTimes2()
    } else {
        setInitialize8(true)
    }
}, [createCheck])

useEffect(() => {
    if (initialize9) {
        if (toggle === "2") {
        console.log(`agaa`)
        setMilisec(data[0].totalTime)
         console.log(`agbb`)
        }
    } else {
        setInitialize9(true)
    }
}, [data])
//gün döngüsü için

useEffect(() => {
        const interval = setInterval(() => {
            if (gd && new Date().getHours() == 0 && new Date().getMinutes() == 0 && new Date().getSeconds() == 3) {
                console.log("aaa")
                setMilisec(0)
                setSec(0)
                setMin(0)
                setHour(0)
                setSavedMilisec(1)
                setBaseSec(new Date().getTime())
                start()
                setGd(false)
                
            } else if (st && new Date().getHours() == 23 && new Date().getMinutes() == 59 && new Date().getSeconds() == 58) {
                console.log("bbbb")
                pause()
                setGd(true)
            } else if (gd && new Date().getHours() == 0 && new Date().getMinutes() == 0 && new Date().getSeconds() == 1) {
                console.log("ccc")
                createInitialTime()
            }
        }, 1000)
        return () => clearInterval(interval)
}, [st])

// useEffect(() => {
//     if (toggle3 && initialize5) {
//     setMilisecData({
//         totalTime: 0,
//         year: new Date().getFullYear(),
//         month: new Date().getMonth() + 1,
//         day: new Date().getDate(),
//         hour: new Date().getHours(),
//         minute: new Date().getMinutes(),
//         second: new Date().getSeconds()})
//     } else {
//         setInitialize5(true)
//     }
// }, [toggle3])

// useEffect(() => {
//     if (initialize6) {
//     getTimes()
//     getTimes2()
//     setToggle3(false)
//     setToggle4(false)
//     } else {
//         setInitialize6(true)
//     }
// }, [toggle4])


//------------------------

useEffect(() => {
    if(initialize && st) {
        getTimes()
        const interval = setInterval(() => {
            setCurrentSec(new Date().getTime())
        }, 1000)
        setBaseSec(new Date().getTime())
        setBaseSecTemp(new Date().getTime())
        return () => clearInterval(interval)
    } else {
        setInitialize(true)
    }
}, [st])


useEffect(() => {
    if (initialize2) {
        if(savedMilisec) {
            setMilisecTemp(savedMilisecTemp + currentSec - baseSecTemp)
            setMilisec(savedMilisec + currentSec - baseSec)
        } else {
        setMilisecTemp(currentSec - baseSecTemp)
        setMilisec(data[0].totalTime + currentSec - baseSec)
    }
    } else {
        setInitialize2(true)
    }
}, [currentSec])

useEffect(() => {
    if(initialize3) {
    setSec(pad(Math.floor(((milisec + 200) / 1000) % 60)))
    setMin(pad(Math.floor(((milisec + 200) / (1000 * 60)) % 60)))
    setHour(pad(Math.floor(((milisec + 200) / (1000 * 60 * 60)) % 60)))
    setSecTemp(pad(Math.floor(((milisecTemp + 200) / 1000) % 60)))
    setMinTemp(pad(Math.floor(((milisecTemp + 200) / (1000 * 60)) % 60)))
    setHourTemp(pad(Math.floor(((milisecTemp + 200) / (1000 * 60 * 60)) % 60)))
} else {
    setInitialize3(true)
}
}, [milisec])

useEffect(() => {
    if (!st) {
        setMilisecData({
            totalTime: milisec,
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()})
        setSavedMilisec(milisec)
        setSavedMilisecTemp(milisecTemp)
    } else if (st) {
        createStartTime()
    }
}, [toggle])

useEffect(() => {
    if (toggle === "1") {
    createTime()
    setToggle2(toggle2 + 1)
}
}, [savedMilisec])

useEffect(() => {
    if (initialize4) {
        console.log(data)
    } else {
        setInitialize4(true)
    }
}, [toggle2])

useEffect(() => {
    if (initialize10) {
        setDiffFinalDuration([])
        setTimesFinal([])
    for (let i = 1; i<duration.length; i++) {
        setDiffDuration(prev => [...prev,  duration[i] - duration[i-1]])
    }} else {
        setInitialize10(true)
    }
}, [duration])

useEffect(() => {
    if (initialize12) {
    for (let i = 0; i<diffDuration.length; i++) {
        if (diffDuration[i] >= 60) {
        setDiffFinalDuration(prev => [...prev,  Math.floor(diffDuration[i] / 60)])
        setTimesFinal(prev => [...prev,  times[i]])
    }}} else {
        setInitialize12(true)
    }
}, [diffDuration])

//small functions

const pad =(unit) => {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
}

//functions

const start = () => {
    setSt(true)
    setToggle("0")
}

const pause = () => {
    setSt(false)
    setToggle("1")
}

const reset = () => {
    setSavedMilisecTemp(0)
    setBaseSecTemp(new Date().getTime())
    setSecTemp(pad(0))
    setMinTemp(pad(0))
    setHourTemp(pad(0))
}

//database

const createTime = async () => {
    try {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/times`, milisecData)
        getTimes()
        getTimes2()
    }catch(error){
        console.log(error.message)
    }
}

const createInitialTime = async () => {
    try {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/times`, {
            totalTime: 0,
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds(),
        })
        getTimes()
        getTimes2()
    }catch(error){
        console.log(error.message)
    }
}

const createStartTime = async () => {
    try {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/times`, {
            totalTime: 1,
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds(),
        })
        getTimes()
        getTimes2()
    }catch(error){
        console.log(error.message)
    }
}

const getTimes = async () => {
    setIsLoading(true)
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/times`)
        setData(data)
        setIsLoading(false)
    }catch(error){
        console.log(error)
        setIsLoading(false)
    }
}
const getTimes2 = async () => {
    setIsLoading2(true)
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/times/backUp`)
        setData2(data)
        setTimes([])
        setDuration([0])
        setDiffDuration([])
        for (let i = 0; i < data.length; i++) {
            if (data[i].day == backForwardDay && data[i].month == backForwardMonth && data[i].year == backForwardYear) {
            if(i != (data.length - 1) && data[i].totalTime == 1 && data[i+1].totalTime != 0) {
            setTimes(prev => [...prev, `${pad(data[i].hour)} : ${pad(data[i].minute)}`]) 
            } else if (i != 0 && data[i].totalTime != 1 && data[i].totalTime != 0 && data[i-1].totalTime == 1) {
            setDuration(prev => [...prev, Math.floor((data[i].totalTime) / 1000)])
            }   
        }}
        setIsLoading2(false)
    }catch(error){
        console.log(error)
        setIsLoading2(false)
    }
}

//back-forward

const back = () => {
    if (backForwardDay === 1) {
    if (backForwardMonth == 2 || backForwardMonth == 4 || backForwardMonth == 6 || backForwardMonth == 8 || backForwardMonth == 9 || backForwardMonth == 11) {
        setBackForwardDay(31) 
        setBackForwardMonth(backForwardMonth - 1)
    } else if (backForwardMonth == 5 || backForwardMonth == 7 || backForwardMonth == 10 || backForwardMonth == 12) {
        setBackForwardDay(30) 
        setBackForwardMonth(backForwardMonth - 1)
    }else if (backForwardMonth == 3 && backForwardYear % 4 != 0) {
        setBackForwardDay(28) 
        setBackForwardMonth(backForwardMonth - 1)
    } else if (backForwardMonth == 3 && backForwardYear % 4 == 0) {
        setBackForwardDay(29)
        setBackForwardMonth(backForwardMonth - 1)
    } else if (backForwardMonth == 1) {
        setBackForwardDay(30) 
        setBackForwardMonth(12)
        setBackForwardYear(backForwardYear - 1)
    }} else {
    setBackForwardDay(backForwardDay - 1)
    }
}

const forward = () => {
    if ((backForwardDay === 31) && (backForwardMonth == 1 || backForwardMonth ==  3 || backForwardMonth == 5 || backForwardMonth == 8 || backForwardMonth == 10)) {
        setBackForwardDay(1) 
        setBackForwardMonth(backForwardMonth + 1)
    }else if ((backForwardDay == 30) && (backForwardMonth == 4 || backForwardMonth == 6 || backForwardMonth == 7 || backForwardMonth == 9 || backForwardMonth == 11)) {
        setBackForwardDay(1) 
        setBackForwardMonth(backForwardMonth + 1)
    }else if (backForwardDay == 28 && backForwardMonth == 2 && backForwardYear % 4 != 0) {
        setBackForwardDay(1) 
        setBackForwardMonth(backForwardMonth + 1)
    }else if (backForwardDay == 29 && backForwardMonth == 2 && backForwardYear % 4 == 0) {
        setBackForwardDay(1) 
        setBackForwardMonth(backForwardMonth + 1)
    }else if (backForwardDay == 31 && backForwardMonth == 12) {
        setBackForwardDay(1) 
        setBackForwardMonth(1)
        setBackForwardYear(backForwardYear + 1)
    } else {
    setBackForwardDay(parseInt(backForwardDay) + 1)
    console.log("sss")
    }
}

useEffect(() => {
if (initialize11) {
    getTimes2()
} else {
    setInitialize11(true)
}
console.log(`${backForwardDay} - ${backForwardMonth} - ${backForwardYear}`)
}, [backForwardDay])

useEffect(() => {
console.log(value.toString().split(' '))
if(value.toString().split(' ')[1] == "Jan") {
    setBackForwardMonth(1)
} else if(value.toString().split(' ')[1] == "Feb") {
    setBackForwardMonth(2)
} else if(value.toString().split(' ')[1] == "Jan") {
    setBackForwardMonth(3)
} else if(value.toString().split(' ')[1] == "Mar") {
    setBackForwardMonth(4)
} else if(value.toString().split(' ')[1] == "Apr") {
    setBackForwardMonth(5)
} else if(value.toString().split(' ')[1] == "May") {
    setBackForwardMonth(6)
} else if(value.toString().split(' ')[1] == "Jun") {
    setBackForwardMonth(7)
} else if(value.toString().split(' ')[1] == "Jul") {
    setBackForwardMonth(8)
} else if(value.toString().split(' ')[1] == "Aug") {
    setBackForwardMonth(9)
} else if(value.toString().split(' ')[1] == "Oct") {
    setBackForwardMonth(10)
} else if(value.toString().split(' ')[1] == "Nov") {
    setBackForwardMonth(11)
} else if(value.toString().split(' ')[1] == "Dec") {
    setBackForwardMonth(12)
} 
setBackForwardDay(value.toString().split(' ')[2])
setBackForwardYear(value.toString().split(' ')[3])
}, [value])

//*********************************TASK**************************************

const [toggleTask, setToggleTask] = useState(0)

  const [tasks, setTasks] = useState([])
  const [lecture, setLecture] = useState("")
  const [detail, setDetail] = useState("")
  const [type, setType] = useState("")
  const [lectureText, setLectureText] = useState("")
  const [typeText, setTypeText] = useState("")

  const lectureRef = useRef()
  const typeRef = useRef()
  


  useEffect(() => {
    getTasks()
  }, [toggleTask])

//form handlers

  const lecturePicker = (e) => {
    setLecture(e.target.value)
    setLectureText(e.target.value)
  }

  const typePicker = (e) => {
    setType(e.target.value)
    setTypeText(e.target.value)
  }

  const detailPicker = (e) => {
    setDetail(e.target.value)
  }

  const taskButton = (e) => {
    e.preventDefault()
    createTask()
    setLectureText("")
    setTypeText("")
    setDetail("")
    setLecture("")
    setType("")
    console.log(lectureRef)
    lectureRef.current.selectedIndex = 0
    typeRef.current.selectedIndex = 0
  }

  //database

  const createTask = async () => {
    try {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/tasks`, {
          lecture,
          type,
          detail,
          completed: false,
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate(),
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          second: new Date().getSeconds(),
        })
    } catch(error){
      console.log(error)
    }
    setToggleTask(toggleTask + 1)
  }

  const getTasks = async () => {
    setIsLoading(true)
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/tasks`)
      setTasks(data)
      setIsLoading(false)
    }catch(error){
      console.log(error)
      setIsLoading(false)
    }
  }

//Tick olunca gitmemesi newFormData olan kısma kadarki yer

  const setToComplete = async (task) => {
        try {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/tasks`, {
          lecture: task.lecture,
          type: task.type,
          detail: task.detail,
          completed: false,
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate(),
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          second: new Date().getSeconds(),
        })
    } catch(error){
      console.log(error)
    }
    setToggleTask(toggleTask + 1)
    const newFormData = {
      lecture: task.lecture,
      type: task.type,
      completed: true,
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    }
    try {
      await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/tasks/${task._id}`, newFormData)
      getTasks()
    }catch(error){
      console.log(error)
    }
  }

  const deleteTask = async (id) => {
    try {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/tasks/${id}`)
        getTasks()
    }catch(error) {
        console.log(error.message)
    }
}


//HTML

  return (
    <div>
        <div className="top-container">
            <div className="time-container">
                <div className="clocks">
                    <div className="time-clock">
                        <h4>Bugün</h4>
                        <h2><span>{hour}</span>:<span>{min}</span>:<span>{sec}</span></h2>
                    </div>
                    <div className="time-clock-temp">
                        <h4>Kronometre</h4>             
                        <h2>{hourTemp}:{minTemp}:{secTemp}</h2>
                </div>
                </div>
                <div className="time-buttons">
                    <button disabled={isLoading? true: false} onClick={start}>Başlat</button>
                    <button disabled={isLoading? true: false} onClick={pause}>Durdur ve Kaydet</button>
                    <button disabled={isLoading? true: false} onClick={reset}>Sıfırla</button>
                </div>
                <div className="left-bot">
                    <div className="bar-container">
                        <div className="total-time-graph">
                            <h5>{`${backForwardDay} - ${backForwardMonth} - ${backForwardYear}`}</h5>
                        </div>
                        <div className="bar">
                            <div>
                                <span onClick={back}><MdOutlineArrowBackIos/> </span>
                            </div>
                            <div>
                                <Bar className="graph"
                                    datasetIdKey='id'
                                    data={{
                                        labels: timesFinal,
                                        datasets: [
                                        {
                                            label: 'Çalışma süresi (dakika)',
                                            data: diffFinalDuration,
                                            backgroundColor: "rgb(248, 177, 216)",  
                                            
                                        },
                                        ],
                                    }}
                                    options= {{
                                        plugins: {
                                            legend:{
                                                display: false,
                                            }
                                        },
                                        scales: {
                                            y:{
                                                ticks:{
                                                    beginAtZero: true,
                                                    color: 'white',
                                                    fontSize: 12,
                                                    precision: 0, integerSteps: true,
                                                    stepSize: 30,
                                                }
                                            },
                                            x: {
                                                ticks:{
                                                    beginAtZero: true,
                                                    color: 'white',
                                                    fontSize: 12,
                                                    precision: 0, integerSteps: true,
                                                }
                                            },
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <span onClick={forward}> <MdOutlineArrowForwardIos/> </span>
                            </div>
                        </div>
                        <div className="total-time-graph">
                        {!isLoading2 ? 
                            <h5> Toplam Süre: {pad(Math.floor(duration[duration.length - 1] / (60 * 60)) % 60)} : {pad(Math.floor(duration[duration.length - 1] / 60) % 60)} : {pad(Math.floor(duration[duration.length - 1]) % 60)}</h5>
                        : <h5>Loading...</h5> 
                        }
                        </div>
                    </div>
                    <div className="calender-container">
                            <Calendar className="calender" onChange={onChange} value={value} />
                    </div>
                </div>
                <div className="completed-tasks">
                    {
                        tasks.map((task, index) => {
                            if(task.day == backForwardDay && task.month == backForwardMonth && task.year == backForwardYear && task.completed == true) {
                            return (
                            <div className="completed-task" key={task._id}>
                                <h5>{task.lecture}</h5>
                                <h5>{task.type}</h5>
                                <h5>{task.detail}</h5>
                                <TiTick className="icon3"/>
                            </div>
                            )}
                        })
                    }
                </div>
            </div>
        {/* *******************************TASK HTML****************************** */}
            <div className="task-container">
                <div className="form-container">
                        <div>
                            <h4>Ders</h4>
                            <input onChange={lecturePicker} type="text" value={lectureText} name="" id="" />
                            <select onChange={lecturePicker} ref={lectureRef} name="" id="">
                            <option value="">Dersler</option>
                            <option value="Fizyoloji">Fizyoloji</option>
                            <option value="Patoloji">Patoloji</option>
                            <option value="Kadın Doğum">Kadın Doğum</option>
                            <option value="Dahiliye">Dahiliye</option>
                            <option value="Küçük Stajlar">Küçük Stajlar</option>
                            <option value="Mikrobiyoloji">Mikrobiyoloji</option>
                            <option value="Anatomi">Anatomi</option>
                            <option value="Genel Cerrahi">Genel Cerrahi</option>
                            <option value="Pediatri">Pediatri</option>
                            <option value="Biyokimya">Biyokimya</option>
                            <option value="Farmakoloji">Farmakoloji</option>
                            <option value="Karışık">Karışık</option>
                            </select>
                        </div>
                        <div>
                            <h4>Çalışma</h4>
                            <input onChange={typePicker} type="text" value={typeText} name="" id="" />
                            <select onChange={typePicker} ref={typeRef} name="" id="">
                            <option value="">Çalışma Tipi</option>
                            <option value="1. Tekrar">1. Tekrar</option>
                            <option value="2. Tekrar">2. Tekrar</option>
                            <option value="3. Tekrar">3. Tekrar</option>
                            <option value="4. Tekrar">4. Tekrar</option>
                            <option value="Çıkmış Sorular">Çıkmış Sorular</option>
                            <option value="Soru Çözümü">Soru Çözümü</option>
                            <option value="Dershane">Dershane</option>
                            <option value="Video Ders">Video Ders</option>
                            <option value="Deneme Sınavı">Deneme Sınavı</option>
                            </select>
                        </div>
                        <div>
                             <h4>Açıklama</h4>
                            <input onChange={detailPicker} type="text" value={detail} name="" id="" />
                        </div>
                        <div>
                            <button onClick={taskButton}>Ekle</button>     
                        </div>

                 </div>
                 <div className="tasks">
                 {
                    <>
                        {
                        tasks.map((task, index) => {
                            if(task.completed == false) {
                            return (
                            <div className="current-task-container" key={task._id}>
                                <div>
                                    <h4>{task.lecture}</h4>
                                </div>
                                <div>
                                    <h4>{task.type}</h4>
                                </div>
                                <div>
                                    <h4>{task.detail}</h4>
                                </div>
                                <div>
                                    <TiTick className="icon" onClick={() => setToComplete(task)}/>
                                    <RiDeleteBin5Fill className="icon2" onClick={() => deleteTask(task._id)}/>
                                </div>
                            </div>
                            )}
                        })
                        }
                    </>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Time
