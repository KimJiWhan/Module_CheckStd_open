import React, { useState, useEffect } from "react";
import Modal from "./Components/Atoms/Modal";
import styled from "styled-components";

function App() {
  const [raw, set_raw] = useState("Datas/std.txt");
  const [event, set_event] = useState("Datas/event_220607.txt");
  const [modalOpen, set_modalOpen] = useState(false);
  const closeModal = () => {
    set_modalOpen(false);
  };
  const [rawData, set_rawData] = useState("s"); // for assigning whether he / she paid or not
  const [userData, set_userData] = useState("s"); // for assigning whether he / she participated before
  const [stID, set_stID] = useState("");
  const [stName, set_stName] = useState("");
  const onIDChange = (e) => {
    set_stID(e.target.value);
  };
  const onNameChange = (e) => {
    set_stName(e.target.value);
  };
  const init = () => {
    set_stID("");
    set_stName("");
  };
  const [valid, set_valid] = useState(1);
  useEffect(() => {
    var tempArray = [];
    var i = 0;
    var len = 0;
    fetch(raw)
      .then((response) => response.text())
      .then((text) => {
        tempArray = text.split("\n");
        len = tempArray.length;
        while (i < len) {
          tempArray[i] = tempArray[i].split("\t");
          i++;
        }
        set_rawData(tempArray);
        });
    
    var tempArray2 = [];
    fetch(event)
      .then((response) => response.text())
      .then((text) => {
        tempArray2 = text.split("\n");
        if (tempArray2[0] == ""){
          tempArray2.shift();
        }
        set_userData(tempArray2)
      });
  }, []);
  
  const [link, set_link] = useState(null)
  function makeTextFile(arrayT) {
    var text = arrayT.join("\n");
    var textFile = null;
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    set_link(textFile);
  }

  function checkValid() {
    var j = 0;
    var l = 0;
    while (j < rawData.length) {
      if (stName === rawData[j][1]) {
        l = 0;
        while (l < userData.length) {
          if (userData[l] === stID) {
            set_valid(2);
            return;
          }
          l++;
        }
        set_valid(0);
        var inputArray = userData;
        inputArray.push(stID);
        set_userData(inputArray);
        return;
      }
      else if (stID === "download"){
        set_valid(3);
        return;
      }
      else if (stID === "rawData"){
        set_raw(stName);
        set_valid(4);
        return;
      }
      else if (stID === "userData"){
        set_event(stName);
        set_valid(4);
        return;
      }
      else {
        set_valid(1);
      }
      j++;
    }
  }

  return (
    <MainDiv>
      <Modal
        isOpen={modalOpen}
        close={closeModal}
        init={init}
        id={stID}
        name={stName}
        valid={valid}
        link={link}
      />
      <img
        alt="simple"
        src="images/init.jpeg"
        width="500px"
        height="500px"
        style={{ marginTop: "3rem", marginBottom: "1rem" }}
      />
      <RowBox>
        <VerBox>
          <Btn onClick = {() => {
            set_stID("2021189");
          }}>
            21
          </Btn>
          <Btn onClick = {() => {
            set_stID("2022189");
          }}>
            22
          </Btn>
        </VerBox>
        <VerBox>
          <InputThings
            placeholder="예시: 2021189004"
            onChange={onIDChange}
            value={stID}
            type="text"
          />
          <InputThings
            placeholder="예시: 김지환"
            onChange={onNameChange}
            value={stName}
            type="text"
          />
        </VerBox>
        <ConfirmBtn
          onClick={() => {
            checkValid();
            set_modalOpen(true);
            makeTextFile(userData);
          }}
        >
          Proceed
        </ConfirmBtn>
      </RowBox>
    </MainDiv>
  );
}

export default App;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Btn = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 1rem;
  border: 0.3rem solid #dddddd;
  margin: 0.3rem 1rem 0.3rem 0rem;
  cursor: pointer;
  font-size: 3rem;
  
  display: flex;
  jusitfy-content: center;
  align-items: center;
`;
const RowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const VerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ConfirmBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10.6rem;
  width: 10.6rem;
  border: 0.2rem solid #abc8e8;
  border-radius: 1rem;
  background-color: #abc8e8;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: 1000;
  cursor: pointer;
`;
const InputThings = styled.input`
  width: 30rem;
  height: 5rem;
  border-radius: 1rem;
  border: 0.3rem solid #dddddd;
  font-size: 2rem;
  margin: 0.3rem 0rem 0.3rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;