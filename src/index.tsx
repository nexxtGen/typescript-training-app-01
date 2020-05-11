import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormElem = React.FormEvent<HTMLFormElement>;

export default function IndexApp(): JSX.Element {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    setValue('');
    console.log(value);
  };

  return (
    <Fragment>
      <h1>Tofo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
    </Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>,
  document.getElementById('root')
);
