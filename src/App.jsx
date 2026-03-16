import { useState } from 'react'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Dados do formulário:', formData);
  };
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const togglemode = () => {
    setIsLogin(!islogin);
    setFormData({usuario:'',email:'',senha:'',confirmarSenha:''});
  }

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="auth-card">
        <div className="auth-header">
          <h1>Bem-Vindo</h1>
          <p>{isLogin ? "Entre para continuar" : "Crie sua conta"}</p>
        </div>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Escolha seu nome de usuário"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Usuário ou Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu usuário ou email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="*********"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="*********"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="#">Esqueceu a senha?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>

        </form>

        <div className="auth-footer">
          <p>{isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}</p>
          <button
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Cadastre-se" : "Fazer login"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;