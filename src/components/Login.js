import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  //1. 상태변수선언
  const [form, setForm] = useState({
    username:'',
    password:''
  });
  const [error, setError] = useState('');
    const navigate = useNavigate();

  //2. 입력시 실행되는 함수
  //사용자가 입력폼에 데이터를 입력시 변수에 데이터를 담는다.
  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value});
    setError('');
  }

  //3. 로그인 클릭시 실행되는 함수
  const handleSubmit = async e => {
    e.preventDefault();

    try{ //입력이 성공하면 
      const res = await axios.post('https://port-0-backend-mbeeoks1e1ce5c07.sel4.cloudtype.app/login', form);

      //사용자 인증이 끝나면 '토큰'을 생성
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username); //사용자 아이디 저장
      alert('로그인성공');
      navigate('/');
    }catch{
      setError('로그인실패 : 아이디 또는 비밀번호를 확인하세요.');
    }
  }

  return (
    <section>
      <h2>로그인</h2>
      <form className="form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor='username'>아이디</label>
          <input type='text'
          id='username' 
          name='username' 
          required 
          placeholder='아이디'
          value={form.username}
          onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor='password'>패스워드</label>
          <input type='password'
          id='password'
          name='password'
          required 
          placeholder='패스워드' 
          value={form.password}
          onChange={handleChange}
          />
        </p>
        <p>
          <input type='submit' value='로그인'/>
        </p>
        {error&&<p style={{color:'red'}}>{error}</p>}

        <p className='btn-group'>
          <Link to='/id_search'>아이디찾기</Link>&#10072;
          <Link to='/pw_search'>비번찾기</Link>&#10072;
          <Link to='/join'>회원가입</Link>

        </p>
      </form>
    </section>
  );
}

export default Login;
