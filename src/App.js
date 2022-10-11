import './App.css';
import {FormControl, TextField, Typography, Button} from '@mui/material';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import getConfig from './service/apiConfig';

const consoleData = data => {
  console.log(data);
};

const config = getConfig();
console.log(config);
const userNameMinimal = config.userNameMinimal;
const passwordMinLength = config.passwordMinLength;
const passwordMaxLength = config.passwordMaxLength;
const PasswordContainsNumber = config.passwordContainsNumber;
const PasswordContainsLowerCase = config.passwordContainsLowerCase;
const PasswordContainsUpperCase = config.passwordContainsUpperCase;
const PasswordContainsSpecialSympol = config.passwordContainsSpecialSympol;

const schema = yup.object({
  Name: yup
    .string()
    .required('O campo do nome é obrogatório')
    .min(
      userNameMinimal,
      `O nome deve ter no mínimo ${userNameMinimal} carcteres`,
    ),
  Email: yup
    .string()
    .email('Digite um email válido')
    .required('O campo de email  é obrigatório'),
  Password: yup
    .string()
    .required('O campo de password não pode está vazio')
    .min(
      passwordMinLength,
      `A senha deve ter no mínimo ${passwordMinLength} carcteres`,
    )
    .max(
      passwordMaxLength,
      `A senha deve ter no máximo ${passwordMaxLength} carcteres`,
    )
    .test('upercase', 'A senha deve conter letra maiuscula', Password => {
      if (PasswordContainsUpperCase === true) {
        const uppercase = /(.*[A-Z].*)/;
        return uppercase.test(Password);
      } else {
        return true;
      }
    })
    .test('upercase', 'A senha deve conter números', Password => {
      if (PasswordContainsNumber === true) {
        const containsNumber = /(.*[0-9].*)/;
        return containsNumber.test(Password);
      } else {
        return true;
      }
    })
    .test('upercase', 'A senha deve conter simbolos', Password => {
      if (PasswordContainsSpecialSympol === true) {
        const ContainsSpecialSympol = /(.*[!@#$%^&*^~;,'"_()].*)/;
        return ContainsSpecialSympol.test(Password);
      } else {
        return true;
      }
    })
    .test('upercase', 'A senha deve conter letra minuscula', Password => {
      if (PasswordContainsLowerCase === true) {
        const containsLowerCase = /(.*[a-z].*)/;
        return containsLowerCase.test(Password);
      } else {
        return true;
      }
    }),
  PasswordConfirm: yup
    .string()
    .oneOf([yup.ref('Password'), null], 'As senhas devem ser iguais'),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="App">
      <Typography variant="h1">Formulário</Typography>

      <FormControl>
        <TextField
          label="Name"
          type="text"
          margin="dense"
          {...register('Name')}
          helperText={errors.Name?.message}
        />
        <TextField
          label="Email"
          type="email"
          margin="dense"
          {...register('Email')}
          helperText={errors.Email?.message}
        />
        <TextField
          label="Password"
          type="text"
          margin="dense"
          {...register('Password')}
          helperText={errors.Password?.message}
        />
        <TextField
          label="Password Confirm"
          type="text"
          margin="dense"
          {...register('PasswordConfirm')}
          helperText={errors.PasswordConfirm?.message}
        />
        <Button
          type="submit"
          onClick={handleSubmit(consoleData)}
          variant="contained">
          Enviar
        </Button>
      </FormControl>
    </div>
  );
}

export default App;
