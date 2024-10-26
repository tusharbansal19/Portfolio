
import styled from "styled-components";

const MiinImageHead = ({children
}) => {
  return (
    <StyledWrapper>
      <div className="loader flex  justify-center items-center ">
        <div className="loader_cube loader_cube--color" />
        .{children}
        <div className="loader_cube loader_cube--glowing" />
      </div>
       
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
  width: 400px;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader_cube {
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 10px;
}

.loader_cube--glowing {
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.loader_cube--color {
  z-index: 1;
  filter: blur(4px);
  background: linear-gradient(45deg, #ffca18, #ff6f00);
  animation: loadtwo 3s ease-in-out infinite;
}

@keyframes loadtwo {
  50% {
    transform: rotate(-90deg);
  }
}
`;

export default MiinImageHead;
