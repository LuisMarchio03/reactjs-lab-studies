import React, { FormEvent, useState } from 'react'

import usePersistedState from './utils/usePersistedState';

function App() {
  const [name, setName] = usePersistedState('name', '');
  const [email, setEmail] = usePersistedState('email', '');
  const [password, setPassword] = usePersistedState('password', '');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(name)
    console.log(email)
    console.log(password)
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />

        <button type="submit">Salvar</button>
      </form>

      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  )
}

export default App
