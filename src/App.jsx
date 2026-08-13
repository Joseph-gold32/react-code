import {Route, Routes} from "react-router-dom"
import { Navbar } from "./components/Navbar"
// import Button from "./components/Button"
import { About } from "./components/pages/About"
import { Contact } from "./components/pages/Contact"
import { Dashboard } from "./components/pages/Dashboard"
import { Home } from "./components/pages/Home"
import { NotFound } from "./components/pages/NotFound"
import { ProductForm } from "./components/pages/form"

function App() {

  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
<Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/form" element={<ProductForm />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    
    </>
  )

}

export default App


// import { useState } from 'react'
// import './App.css'
// import Interpolation from './interpolation'
// import Sqi from './Sqi'
// import Button from './Button'
// import Set from './set'
// import { TodoInput } from './TODOLIST/todoinput'
// import { TodoList } from './TODOLIST/todolist'

// const user = {
//   name: "kelvin",
//   occupation:"software engineer",
//   gender: "Female",
//   class: "React"

// }
// return(
//   <>
//   <div>
//     <ul>
//       <li>{user.name}</li>
//       <li>{user.occupation}</li>
//       <li>{user.gender}</li>
//       <li>{user.class}</li>
//     </ul>
//   </div>
  
//   </>
// )


// function App() {
//   const [task, setTask] = useState('')
//   const [todoArray, setTodoArray] = useState([])

//   const deleteTodo = (id) => {
//     setTodoArray((prev) => prev.filter((todo) => todo.id !== id))
//   }

//   const deleteTodoByText = (text) => {
//     const trimmed = text.trim()
//     if (!trimmed) {
//       return alert('Type a task name to delete')
//     }

//     const exists = todoArray.some((todo) => todo.task === trimmed)
//     if (!exists) {
//       return alert('No todo found with that exact text')
//     }

//     setTodoArray((prev) => prev.filter((todo) => todo.task !== trimmed))
//     setTask('')
//   }

//   const newsItems = [
//     {
//       image:
//         'https://sqi.edu.ng/wp-content/uploads/2026/02/IMG-20250712-WA0024-400x250.jpg',
//       title:
//         'SQI College of ICT Partners with Ladoke Akintola University of Technology LAUTECH',
//       date: 'Feb 13, 2026',
//       description:
//         'SQI College of ICT is pleased to formally announce a strategic academic collaboration with Ladoke Akintola University of Technology (LAUTECH) for the support and coordination of selected LAUTECH Part-Time Degree Programmes.This collaboration will operate at: SQI...',
//     },
//     {
//       image:
//         'https://sqi.edu.ng/wp-content/uploads/2025/11/SQI4348-convocation-400x250.jpg',
//       title:
//         'SQI College of ICT Holds First Convocation, Honours Pioneer Graduates',
//       date: 'Nov 22, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, marked a landmark achievement on Saturday, 22nd November 2025, as the institution held its maiden Convocation Ceremony at its main campus along Old Ilorin Road, Ogbomoso. The event, which drew dignitaries from across Nigeria�s academic...',
//     },
//      {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
    

//      {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
    

//      {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
//     {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
//     {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
//     {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
//     {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
//     {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
//     {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
    


    
//     {
//       image: 'https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg',
//       title:
//         'Students embrace new opportunities with matriculation at SQI College of ICT',
//       date: 'May 5, 2025',
//       description:
//         'SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 6th Matriculation Ceremony for the 2024/2025 academic session. The vibrant ceremony, held at the college�s main auditorium, brought together dignitaries from the education sector, traditional rulers,...',
//     },
    

//   ]

//   return (

//     <div>
//       <main className="latest-news">
//         <section className="news-wrap">
//           <div className="news-header">
//             <h1>Latest News</h1>
//             <button className="read-more"><a href="">Read More</a></button>
//           </div>

//           <div className="news-grid">
//             {newsItems.map((item) => (
//               <article className="news-card" key={item.title}>
//                 <img src={item.image} alt={item.title} />
//                 <div className="container">
//                   <h2>{item.title}</h2>
//                   <p className="news-date">{item.date}</p>
//                   <p className="news-text">{item.description}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>
        


//         <button className="chat-widget" aria-label="Chat with us on WhatsApp">
//           <span className="chat-icon">WhatsApp</span>
//           {/* <span>Need Help? Chat with us</span> */}
//         </button>


//       </main>
//       <Interpolation />
//       <Sqi />
//       {/* <Card /> replaced by Sqi component to show the new design */}
//       <section className="todo-section">
//         <h2>Todo App</h2>
//         <TodoInput
//           task={task}
//           setTask={setTask}
//           todoArray={todoArray}
//           setTodoArray={setTodoArray}
//           deleteTodoByText={deleteTodoByText}
//         />
//         <TodoList todoArray={todoArray}
//          deleteTodo={deleteTodo}
//          setTodoArray={setTodoArray}
         
         
//          />
//       </section>
//       <Button />
//       <Set />
//     </div>
//   )

//  }



