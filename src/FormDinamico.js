import React, {useState, useEffect} from 'react';

import {FormControl, TextField, Typography, Button} from '@mui/material';

const consoleData = data => {
  console.log(data);
};

function FormDinamico({title, fields}) {
  const [text, setText] = useState([]);
  console.log(text);

  const handleText = (e, index) => {
    text[index] = e.target.value;
    setText([...text]);
  };

  function renderfields(fields) {
    return fields.map(({label, type, placeholder, hidden}, index) => {
      if (!hidden) {
        return (
          <TextField
            key={`${label}-${index}`}
            label={label}
            type={type}
            placeholder={placeholder}
            margin="dense"
            onChange={e => handleText(e, index)}
          />
        );
      }
      return null;
    });
  }

  return (
    <div className="App">
      <Typography variant="h1">{title}</Typography>

      <FormControl>
        {renderfields(fields)}
        <Button
          type="submit"
          onClick={() => consoleData(text)}
          variant="contained">
          Enviar
        </Button>
      </FormControl>
    </div>
  );
}

export default FormDinamico;
