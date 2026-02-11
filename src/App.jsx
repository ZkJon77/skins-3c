import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="auth-container">
        <div className="auth-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="auth-card">
          <div className="auth-header">
            <h1>Bem-Vindo</h1>
            <p>Entre para continuar</p>
          </div>

          <div className="form-group">
            <label htmlFor="usuario">Usuário</label>
            <input 
              type="text" 
              id='usuario' 
              name='usuario' 
              placeholder='Escolha seu nome de usuário' 
              required  />
          </div>

          <div className="form-group">
            <label htmlFor="email">Usuário ou Email</label>
            <input 
              type="text" 
              id='email' 
              name='email' 
              placeholder='Digite seu usuário ou email' 
              required  />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id='senha' 
              name='senha' 
              placeholder='*********' 
              required  />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input 
              type="password" 
              id='confirmarSenha' 
              name='confirmarSenha' 
              placeholder='*********' 
              required  />
          </div>

          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type='submit' className='submit-btn'>
            Entrar
          </button>

          <div className="auth-footer">
            <p>Não tem uma conta?</p>
            <button className='toggle-btn'>Cadastre-se</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App