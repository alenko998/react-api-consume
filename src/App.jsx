import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { AddEmployee } from './components/AddEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EmployeeList } from './components/EmployeeList'
import { UpdateEmployee } from './components/UpdateEmployee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<EmployeeList/>}/>
      <Route index element={<EmployeeList/>}/>
      <Route path='/addEmployee' element={<AddEmployee/>}/>
      <Route path='/updateEmployee/:id' element={<UpdateEmployee/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
