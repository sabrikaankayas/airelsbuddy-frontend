// import { useEffect, useState } from "react"
// import "../styles/Time.css"

// import axios from "axios"

// const Task = () => {
//   const [toggleTask, setToggleTask] = useState(0)

//   const [tasks, setTasks] = useState([])
//   const [lecture, setLecture] = useState("asd")
//   const [type, setType] = useState("asd")
  


//   useEffect(() => {
//     getTasks()
//   }, [toggleTask])

// //form handlers

//   const lecturePicker = (e) => {
//     setLecture(e.target.value)
//   }

//   const typePicker = (e) => {
//     setType(e.target.value)
//   }

//   const taskButton = (e) => {
//     e.preventDefault()
//     createTask()
//   }

//   //database



//   const createTask = async () => {
//     try {
//         await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/tasks`, {
//           lecture,
//           type,
//           completed: false,
//           year: new Date().getFullYear(),
//           month: new Date().getMonth() + 1,
//           day: new Date().getDate(),
//           hour: new Date().getHours(),
//           minute: new Date().getMinutes(),
//           second: new Date().getSeconds(),
//         })
//     } catch(error){
//       console.log(error)
//     }
//     setToggleTask(toggleTask + 1)
//   }

//   const getTasks = async () => {
//     try {
//       const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/tasks`)
//       setTasks(data)
//     }catch(error){
//       console.log(error)
//     }
//   }

//   const setToComplete = async (task) => {
//     const newFormData = {
//       lecture: task.lecture,
//       type: task.type,
//       completed: true,
//       year: new Date().getFullYear(),
//       month: new Date().getMonth() + 1,
//       day: new Date().getDate(),
//       hour: new Date().getHours(),
//       minute: new Date().getMinutes(),
//       second: new Date().getSeconds(),
//     }
//     try {
//       await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/tasks/${task._id}`, newFormData)
//       getTasks()
//     }catch(error){
//       console.log(error)
//     }
//   }

//   const deleteTask = async (id) => {
//     try {
//         await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/tasks/${id}`)
//         getTasks()
//     }catch(error) {
//         console.log(error.message)
//     }
// }



//   return (
//     <div>
//       <form action="">
//         <input onChange={lecturePicker} type="text" name="" id="" />
//         <input onChange={typePicker} type="text" name="" id="" />
//       </form>
//       <form action="">
//         <select onChange={lecturePicker} name="" id="">
//           <option value="Fizyoloji">Fizyoloji</option>
//           <option value="Patoloji">Patoloji</option>
//           <option value="Kadın Doğum">Kadın Doğum</option>
//           <option value="Dahiliye">Dahiliye</option>
//           <option value="Küçük Stajlar">Küçük Stajlar</option>
//           <option value="Mikrobiyoloji">Mikrobiyoloji</option>
//           <option value="Anatomi">Anatomi</option>
//           <option value="Genel Cerrahi">Genel Cerrahi</option>
//           <option value="Pediatri">Pediatri</option>
//           <option value="Biyokimya">Biyokimya</option>
//           <option value="Farmakoloji">Farmakoloji</option>
//         </select>
//         <select onChange={typePicker} name="" id="">
//           <option value="1. Tekrar">1. Tekrar</option>
//           <option value="2. Tekrar">2. Tekrar</option>
//           <option value="3. Tekrar">3. Tekrar</option>
//           <option value="4. Tekrar">4. Tekrar</option>
//           <option value="Çıkmış Tus Soruları">Çıkmış Tus Soruları</option>
//           <option value="Soru Çözümü">Soru Çözümü</option>
//           <option value="Dershane">Dershane</option>
//           <option value="Video Ders">Video Ders</option>
//           <option value="Deneme Sınavı">Deneme Sınavı</option>
//         </select>
//         <button onClick={taskButton}>Ekle</button>
//       </form>
//       <>
//         {
//           tasks.map((task, index) => {
//             return (
//             <div key={task._id}>
//               <p>
//                   <b>{index + 1}. </b>
//                   {task.lecture}
//                   {task.type}
//               </p>
//               <div>
//                 <p onClick={() => setToComplete(task)}>completed</p>
//                 <p onClick={() => deleteTask(task._id)}>delete</p>
//               </div>
//             </div>
//             )
//           })
//         }
//       </>
//     </div>
//   )
// }

// export default Task

{/* <div className="time__dif-sec">
{milisec}
</div>
<div className="time__current-sec">
Şu anki milisaniye: {currentSec}
</div>
<div className="time__base-sec">
Başlangıç milisaniyesi: {baseSec}
</div> */}