import './App.css';
import React, {useState, createContext, useCallback} from 'react';
import FormDinamico from './FormDinamico';
import FormToForm from './FormToForm';
import {MentionsInput, Mention} from 'react-mentions';

export const FieldContext = createContext();

const fieldsText = [
  {
    label: 'Campo 1',
    type: '',
    placeholder: '',
    hidden: false,
  },
  {
    label: 'Campo 2',
    type: '',
    placeholder: '',
    hidden: false,
  },
  {
    label: 'Campo 3',
    type: '',
    placeholder: '',
    hidden: false,
  },
  {
    label: 'Campo 4',
    type: '',
    placeholder: '',
    hidden: false,
  },
  {
    label: 'Campo 5',
    type: '',
    placeholder: '',
    hidden: false,
  },
];

const fields = [
  {
    label: 'Nome',
    type: 'text',
    placeholder: 'Digite seu nome',
    hidden: false,
  },
  {
    label: 'Email',
    type: 'email',
    placeholder: 'Digite seu email',
    hidden: false,
  },
  {
    label: fieldsText[1].label,
    type: 'text',
    placeholder: 'Digite seu endereço',
    hidden: false,
  },
  {
    label: 'Hiden',
    type: 'text',
    placeholder: 'Escondido',
    hidden: true,
  },
];

const usuarios = [
  {
    display: 'Rafael',
    id: 'Rafael',
  },

  {
    display: 'Sara',
    id: 'Sara',
  },

  {
    display: 'Miguel',
    id: 'Miguel',
  },

  {
    display: 'Irlani',
    id: 'Irlani',
  },
];

function App() {
  const [fieldsTextState, setFieldsTextState] = useState(fieldsText);
  const [value, setValue] = useState('');

  return (
    <>
      {/* <Form />; */}
      <FieldContext.Provider value={{fieldsTextState, setFieldsTextState}}>
        <FormToForm title="Formulario do formulario" fields={fieldsText} />
        <FormDinamico title="Dinâmico" fields={fields} />;
      </FieldContext.Provider>

      <MentionsInput
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        placeholder={"Mention people using '@'"}>
        <Mention trigger="@" data={usuarios}  displayTransform={login => `@${login}`} />
      </MentionsInput>
    </>
  );
}

export default App;
