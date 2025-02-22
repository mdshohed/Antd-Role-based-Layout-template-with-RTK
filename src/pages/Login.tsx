import { Button, Row } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';

const Login = () => {
  const navigate = useNavigate(); 
  const dispatch = useAppDispatch(); 
  // const { register, handleSubmit } = useForm(
  //   {
  //     defaultValues: {
  //       userId: 'A-0001', 
  //       password: '12345'
  //     }
  //   }
  // );
  // const { register } = useFormContext(); 
  const defaultValues = {
    userId: 'A-0001',
    password: '12345'
  }

  const [login, {data, error}] = useLoginMutation(); 

  console.log("data => ", data);
  console.log("error => ", error);
  

  const onSubmit = async (data: FieldValues) =>{
    console.log(data);
    
    const toastId = toast.loading('Logging in'); 
    try{
      const userInfo = {
        id: data.userId, 
        password: data.password, 
      }
      const res =  await login(userInfo).unwrap(); 
      
      const user = verifyToken(res.data.accessToken) as TUser; 
      
      dispatch(setUser({ user: user, token: res.data.accessToken}))
      toast.success('Logged in', { id: toastId, duration: 2000})
      navigate(`/${user.role}/dashboard`); 
    }catch(err){
      toast.error('Someting went wrong', { id: toastId}); 
    }
  }

  return (
    <Row justify="center" align="middle" style={{height: '100vh'}}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" lavel="ID:"></PHInput>
        <PHInput type="text" name="password" lavel="Password: "></PHInput>
        <Button htmlType='submit'>Login</Button>
      </PHForm>
    </Row>
    
  );
};

export default Login;