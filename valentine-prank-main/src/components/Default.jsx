import { useState } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import useMousePosition from "../hooks/useMousePosition";


const Default = ({ onYesClick }) => {
  const [noClicked, setNoClicked] = useState(false);
  const { clientX, clientY } = useMousePosition();

  return (
    <>
      <img
        src="https://media1.tenor.com/m/EQ1XagNtbr8AAAAC/love-you-forever.gif"
        alt="Will you be my valentine?"
        width="200"
        className="mb-3"
      />
      <div>
        {noClicked ? (
          <Button
            color="success"
            className="position fs-2 text-capitalize"
            onClick={onYesClick}
            style={{
              top: clientY,
              left: clientX,
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
            }}
          >
            You mean yes, right ?
          </Button>
        ) : (
          <Button
            color="success"
            size="xl"
            className="me-3"
            onClick={onYesClick}
          >
            Yes
          </Button>
        )}
        <Button color="danger" size="xl" onClick={() => setNoClicked(true)}>
          No
        </Button>
      </div>
    </>
  );
}

Default.propTypes = {
  onYesClick: PropTypes.func.isRequired
}

export default Default;