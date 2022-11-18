import React, {useState} from 'react';

import {FormControl, TextField, Typography, Button} from '@mui/material';

const consoleData = data => {
  console.log(data);
};

function FormToForm({title, fields}) {
  const [inputs, setinputs] = useState([]);

  const handleText = (e, index) => {
    inputs[index] = e.target.value;
    setinputs([...inputs]);
  };

  function renderfields(fields) {
    return fields.map(({label, type, placeholder, hidden}, index) => {
      if (!hidden && index <=5) {
        return (
          <TextField
            key={`${label}-${index}`}
            label={label}
            type="text"
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
          onClick={() => consoleData(inputs)}
          variant="contained">
          Enviar
        </Button>
      </FormControl>
    </div>
  );
}

export default FormToForm;
