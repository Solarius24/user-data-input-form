import React, {useState} from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'


const App = () => {
    const [userList, setUserList] = useState([])

    const addUSerHandler = (userName, userAge,) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name: userName, age:userAge, id:Math.random().toString()}]
        })
    } 
    return <div>
        <AddUser onAddUser = {addUSerHandler}/>
        <UsersList users = {userList} />
    </div>
}

export default App