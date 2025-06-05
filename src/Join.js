import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Join(props) {
  //1. 상태변수 선언
  const [form, setForm] = useState({
    username : '', //1. 사용자아이디
    password : '', //2. 패스워드
    password2 : '', //3. 패스워드확인
    email : '', //4. 이메일
    tel : '' //5. 전화번호
  });

  const [error, setError] = useState(''); //회원가입 실패한 경우 출력되는 변수
  const [success, setSuccess] = useState(''); // 회원가입 성공시 출력되는 변수
  const navigate = useNavigate();

  //2. handleChange 함수
  const handleChange=(e)=>{
    //사용자가 각각 입력폼에 데이터를 입력하면 변수에 담는다
    setForm({...form, [e.target.name]:e.target.value});
    setError(''); //에러초기화
    setSuccess(''); //성공초기화
    //데이터가 없으면 에러, 성공으로 출력나오게
  }

  //3. handleSubmit 함수
  const handleSubmit= async e =>{
    //사용자가 입력한 data를 backend 서버에 post방식으로 넘긴다
    e.preventDefault(); //새로고침 방지

    //비밀번호1, 비밀번호2가 일치하는지 여부 확인
    if(form.password !== form.password2){
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    //서버측에 post방식으로 데이터값을 전달한다.
    try{
      await axios.post('http://localhost:9070/register', {
        username:form.username,
        password:form.password,
        tel:form.tel,
        email:form.email
      });
      setSuccess('회원가입이 완료 되었습니다.');
      setForm({ //폼양식에 데이터를 모두 초기화(비워준다.)
        username:'',
        password:'',
        password2:'',
        tel:'',
        email:''
      });
      navigate('/ginipet');
    }catch(error){ //전송실패시 에러 출력
      setError('회원가입실패 : 아이디가 이미 존재하거나 서버 오류입니다.');
    }
  };



  return (
    <section>
      <h2>회원가입</h2>
      <form className='form' onSubmit={handleSubmit}>
        <p className='title'>
          <label htmlFor='username'>아이디 : </label>
          <input type='text' id='username' name='username' placeholder='아이디입력' onChange={handleChange} value={form.username} required />
        </p>
        <p className='title'>
          <label htmlFor='password'>패스워드 : </label>
          <input type='password' id='password' name='password' placeholder='패스워드 입력' onChange={handleChange} value={form.password} required />
        </p>
        <p className='title'>
          <label htmlFor='password2'>패스워드 확인 : </label>
          <input type='password' id='password2' name='password2' placeholder='패스워드 확인' onChange={handleChange} value={form.password2} required />
        </p>
        <p className='title'>
          <label htmlFor='email'>이메일 : </label>
          <input type='email' id='email' name='email' placeholder='id@domain co.kr or com' onChange={handleChange} value={form.email} required />
        </p>
        <p className='title'>
          <label htmlFor='tel'>전화번호 : </label>
          <input type='text' id='tel' name='tel'placeholder='010-0000-0000' onChange={handleChange} value={form.tel} required />
        </p>
        <p>
          <input type='checkbox' id='agree' required />
          <label htmlFor='agree'> 이용약관, 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다. </label>
        </p>
        <div className='btn-box'>
        <p>
          <button type='submit' className='join-btn'>회원가입 완료</button>
        </p>
        {/* 회원가입 실패시 나오는 문구 */}
        {error&&<p style={{color:'red'}}>{error}</p>}

        {/* 회원가입 성공시 나오는 문구 */}
        {success&&<p style={{color:'green'}}>{success}</p>}
        </div>
      </form>
    </section>
  );
}

export default Join;