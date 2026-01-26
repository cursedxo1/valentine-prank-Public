import { useState } from 'react';
import { Container } from 'reactstrap';
import Default from './components/Default';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [yesClicked, setYesClicked] = useState(false);

  return (
    <Container>
      <h1>Will you be my valentine?</h1>
      {!yesClicked ? (
        <Default onYesClick={() => setYesClicked(true)} />
      ) : (
        <>
          <p className="fs-3">That&apos;s a yes! No take-backsies! 🥰</p>
          <img
            src="https://media.tenor.com/sFStC1YwBzMAAAAi/milk-and-mocha-hug.gif"
            alt="Milk and Mocha hugging"
            width={400}
          />
        </>
      )}
    </Container>
  );
}

export default App
