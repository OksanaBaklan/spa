import React, { useContext, useState } from "react";
import { ContextState } from "../globals/context";

import "./FormPerson.css";

import styled from "styled-components";

const FormPerson = () => {
  const [person, dispatch] = useContext(ContextState);

  const [state, setState] = useState({
    id: null,
    name: "",
    age: "",
  });

  const addPerson = (e) => {
    e.preventDefault();
    const { name, age } = state;
    if (name === "" || age === "") {
      alert("Some of inputs are empty!");
      return;
    }
    dispatch({
      type: "ADD_PERSON",
      data: { id: person.length + 1, name, age },
    });
    setState({
      name: "",
      age: "",
    });
  };

  const startEdit = (id) => {
    setState(person.find((per) => per.id === id));
  };

  const editPerson = (e) => {
    e.preventDefault();
    const { name, age } = state;
    dispatch({
      type: "EDIT_PERSON",
      data: { id: state.id, name, age },
    });
    setState({
      name: "",
      age: "",
    });
  };

  const deletePerson = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      data: { id },
    });
  };

  return (
    <>
      <FormOfPerson>
        <div>
          <StyledInput
            placeholder="Name"
            name="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div>
          <StyledInput
            placeholder="Age"
            name="age"
            value={state.age}
            onChange={(e) => setState({ ...state, age: e.target.value })}
          />
        </div>
        <StyledButtonAdd onClick={state.id ? editPerson : addPerson}>
          {state.id ? "Save" : "Add"}
        </StyledButtonAdd>
      </FormOfPerson>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {person.length > 0 ? (
          person.map((onePerson) => {
            return (
              <tr>
                <td>{onePerson.id}</td>
                <td>{onePerson.name}</td>
                <td>{onePerson.age}</td>
                <td>
                  <StyledButtonEdit onClick={() => startEdit(onePerson.id)}>
                    Edit
                  </StyledButtonEdit>
                </td>
                <td>
                  <StyledButtonDelete
                    onClick={() => deletePerson(onePerson.id)}
                  >
                    Delete
                  </StyledButtonDelete>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </table>
    </>
  );
};

const FormOfPerson = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  margin: auto;
  margin-top: 30px;
  div {
    display: grid;
  }
`;

const StyledInput = styled.input`
  width: 50%;
  margin: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const StyledButtonAdd = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  width: 50%;
  margin: auto;
  margin-left: 25%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledButtonDelete = styled.button`
  background-color: #e61a1a;
  color: white;
  padding: 10px;
  margin-top: 10px;
  width: 50%;
  margin: auto;
  margin-left: 25%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledButtonEdit = styled.button`
  background-color: #e61ab6;
  color: white;
  padding: 10px;
  margin-top: 10px;
  width: 50%;
  margin: auto;
  margin-left: 25%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default FormPerson;
