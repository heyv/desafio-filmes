import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Content, AnimationContainer } from './styles';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAuth } from '../../hooks/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        toast.error('E-mail/Senha inválidos', {
          position: 'top-center',
        });
      }
    },
    [signIn, history]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="imagem logo" />
          <ToastContainer />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button
              className="waves-effect waves-light btn-small"
              type="submit"
            >
              Entrar
            </Button>

            <a href="criar">Criar conta</a>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
