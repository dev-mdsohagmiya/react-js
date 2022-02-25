
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [totalValue, inputValue] = useState('')
  const [totalInputArr, setInputArr] = useState([])
  const [checkTrueFasle, setTrueFalse] = useState(false)
  const [editableStudent, setEditableStudent] = useState({})
  const [present, setpresent] = useState([])
  const [absent, setabsent] = useState([])
  const inputValueHandler = (e) => {
    inputValue(e.target.value)
  }
  const clickHandler = () => {
    if (totalValue) {
      const obj = {
        id: Date.now(),
        totalValue
      }
      setInputArr([...totalInputArr, obj])
      inputValue("")
      console.log(totalInputArr)
    }
    else {
      alert("Please provite a student name!")
    }
  }
  const deleteStudent = (id) => {
    const filterArr = totalInputArr.filter((value) => value.id !== id)
    setInputArr(filterArr)
  }
  const editHandler = (id) => {
    console.log("all ok")
    setTrueFalse(true)
    const arrFind = totalInputArr.find((e) => e.id === id)
    setEditableStudent(arrFind)
    inputValue(arrFind.totalValue)
  }
  const updateHandler = () => {
    if (totalValue) {
      editableStudent.totalValue = totalValue
      inputValue("")
      setTrueFalse(false)

    }
    else {
      alert("Please provite a studend name!")
    }

  }
  const presentHandler = (id) => {
    const presentfind = totalInputArr.filter((value) => value.id === id)
    const filterArr = totalInputArr.filter((value) => value.id !== id)
    setInputArr(filterArr)
    setpresent([...present, presentfind[0].totalValue])
   

  }
  const absentHandler = (id) => {
    const absentfind = totalInputArr.filter((value) => value.id === id)
    const filterArr = totalInputArr.filter((value) => value.id !== id)
    setInputArr(filterArr)
    setabsent([...absent, absentfind[0].totalValue])
 
  }
  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <div className="row py-4">
            <div className="col-8"><input value={totalValue} onChange={(e) => inputValueHandler(e)} type="text" style={{ height: "38px" }} className="form-control w-100" /></div>
            <div className="col-4"><button onClick={() => checkTrueFasle ? updateHandler() : clickHandler()} className='btn btn-primary w-100'>{checkTrueFasle ? "UPDATE" : "ADD"}</button></div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className='m-1  box-1'>
              <h3 className='text-center'>All Student</h3>
              <hr />
              {totalInputArr.map((e, index) => (
                <ul key={e.id}>
                  <li>{e.totalValue} <br />
                    <button onClick={() => editHandler(e.id)}>Edit</button>
                    <button onClick={() => deleteStudent(e.id)}>Delete</button>
                    <button onClick={() => presentHandler(e.id)}>Present</button>
                    <button onClick={() => absentHandler(e.id)}>Absent</button>
                    <hr />
                  </li>

                </ul>
              ))}
            </div>
          </div>
          <div className="col-4">
            <div className='m-1 box-1'>
              <h3 className='text-center'>Present</h3>
              <hr />
              <ul>
                {
                  present.map((e) => <li key={Math.random()}>{e}</li>)
                }
              </ul>
            </div>

          </div>
          <div className="col-4">
            <div className='m-1 box-1'>
              <h3 className='text-center'>Absent</h3>
              <hr />
              <ul>
                {
                  absent.map((e) => <li key={Math.random()}>{e}</li>)
                }
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default App
