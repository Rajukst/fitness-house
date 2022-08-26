import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import "./AddTrainer.css"
const AddTrainer = () => {
    const addName= useRef()
    const addDesigNation= useRef()
    const addAge= useRef()
    const addHeight= useRef()
    const addWeight= useRef()
    const addImage= useRef()
    const addText= useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = addName.current.value;
        const designation = addDesigNation.current.value;
        const image = addImage.current.value;
        const description = addText.current.value;
        const height= addHeight.current.value;
        const weight= addWeight.current.value;
        const age= addAge.current.value;
        const totalAdd = { name, designation, image, description, height, weight, age  };
        console.log(totalAdd);
        fetch("http://localhost:5000/add-trainer", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(totalAdd),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Added SuccessFully!!",
                showConfirmButton: false,
                timer: 1500,
              });
              e.target.reset();
            }
          });
      };
    return (
        <div className="add-trainer">
      <div>
        <h1>Add Trainer</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            ref={addName}
            placeholder="Trainer Name"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addDesigNation}
            placeholder="Trainer Designation"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addAge}
            placeholder=" Age"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addHeight}
            placeholder=" Height"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addWeight}
            placeholder=" Weight"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addImage}
            placeholder="Trainer Image"
          />
          <br />
          <br />
          <textarea
            id=""
            ref={addText}
            placeholder="short Description"
            name=""
            rows=""
            cols=""
          ></textarea>
        <br />
          <br />
          <input id="submit-buttn1" type="submit" value="Add Trainer" />
        </form>
      </div>
    </div>
    );
};

export default AddTrainer;