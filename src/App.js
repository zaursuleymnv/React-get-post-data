import './App.css';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostService, UserService } from './services';

function App() {

  useEffect(() => {
    PostService.getPosts().then(res => console.log(res))
    PostService.getPostsDetail(2).then(res => console.log(res))
    PostService.newPost({
      userId: 3,
      title: 'test',
      body: 'test'
    })
      .then(res => console.log(res))

    UserService.getUsers()
  })


  // const [users, setUsers] = useState(false)
  // const [name, setName] = useState('Zaur')
  // const [avatar, setAvatar] = useState(false)

  // const addPost = data => {

  //   const headers = new Headers()
  //   // headers.append('Content-type', 'application/json')
  //   headers.append('Authorization', 'Bearer 2325362744563')

  //   const formData = new FormData()
  //   formData.append('userId', data.userId)
  //   formData.append('title', data.title)
  //   formData.append('body', data.body)

  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     // body: JSON.stringify(data),
  //     body: formData,
  //     headers
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     if (res.ok && res.status === 200) {
  //       return res.json()
  //     }
  //   })
  //   .then(data => setUsers(data))
  //   .catch(err => console.log(err))

  //   addPost({
  //     userId: 7,
  //     title: "Zaur's Title example",
  //     body: 'Body example'
  //   })
  // }, [])

  // const submitHandle = e => {

  //   const formData = new FormData()
  //   formData.append('name', name)
  //   formData.append('avatar', avatar)

  //   e.preventDefault()
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: formData
  //   })
  // }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4">
          {/* <form action="" onSubmit={submitHandle}>
            <div className="input-group mb-3">
              <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
              <input type="file" className="form-control" onChange={e => setAvatar(e.target.files[0])}></input>
            </div>
            <button type="submit" className="btn btn-primary mt-3" disabled={!name || !avatar}>Submit</button>
          </form> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          {/* <h1>User List</h1>
          <ul>
            {
              users && users.map(user => (
                <li key={user.id}>
                  {user.name}
                </li>
              ))
            }
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default App;
