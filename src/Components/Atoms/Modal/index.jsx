import React from "react";
import styled from "styled-components";

function Modal({ isOpen, close, init, id, name, valid, link }) {
  function Show() {
    if (valid === 0) {
      return (
        <Alert>
          <Text>
            학번: {id} / 이름: {name}
          </Text>
          <div style={{ height: "0.5rem" }} />
          <Text>재학 및 학생회비 납부 여부가 확인되었습니다!</Text>
          <Button
            onClick={() => {
              close();
              init();
            }}
          >
            Proceed
          </Button>
        </Alert>
      );
    } else if (valid === 1) {
      return (
        <Alert>
          <Text>
            학번: {id} / 이름: {name}
          </Text>
          <div style={{ height: "0.5rem" }} />
          <Text>학생회비 납부자 명단에 이름이 없습니다.</Text>
          <Button
            onClick={() => {
              close();
              init();
            }}
          >
            Proceed
          </Button>
        </Alert>
      );
    } else if (valid === 2) {
      return (
        <Alert>
          <Text>
            학번: {id} / 이름: {name}
          </Text>
          <div style={{ height: "0.5rem" }} />
          <Text>이미 수령하였습니다.</Text>
          <Button
            onClick={() => {
              close();
              init();
            }}
          >
            Proceed
          </Button>
        </Alert>
      );
    }
    else if (valid === 3) {
      return (
        <Alert>
          <Text>
            {id} - 특별 모드: Download
          </Text>
          <div style={{ height: "0.5rem" }} />
          <a href={link} style={{fontSize: "2rem"}}>다운로드 링크</a>
          <Button
            onClick={() => {
              close();
              init();
            }}
          >
            Proceed
          </Button>
        </Alert>
      )
    }
    else if (valid === 4){

      return (
        <Alert>
          <Text>
            {id} - 특별 모드: Upload
          </Text>
          <div style={{ height: "0.5rem" }} />
          <Text>
            {name} - newRoute
          </Text>
          <Button
            onClick={() => {
              close();
              init();
            }}
          >
            Proceed
          </Button>
        </Alert>
      )
    }
  } 
  return (
    <div>
      {isOpen ? (
        <Background>
          <Show />
        </Background>
      ) : null}
    </div>
  );
}

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;
const Alert = styled.div`
  margin-left: -25rem;
  margin-top: -7.5rem;
  width: 50rem;
  height: 15rem;
  position: absolute;
  border: 1px solid #b3b3b3;
  border-radius: 1rem;
  top: 35%;
  left: 50%;
  background-color: #eeeeee;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.p`
  margin-top: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
const Button = styled.div`
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  width: 5rem;
  height: 3rem;
  background-color: #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: center;
`;
