import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import "./AddClasses.css"
const AddClasses = () => {
    const addName = useRef();
    const addPrice = useRef();
    const addImage = useRef();
    const addText = useRef();
    const tagName = useRef();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = addName.current.value;
        const price = addPrice.current.value;
        const image = addImage.current.value;
        const description = addText.current.value;
        const tagNames= tagName.current.value;
        const totalAdd = { name, price, image, description, tagNames  };
        console.log(totalAdd);
        fetch("http://localhost:5000/add-class", {
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
        <div className="add-class">
      <div>
        <h1>Add Your Course Here</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name=""
            id=""
            ref={addName}
            placeholder="Course Name"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addPrice}
            placeholder=" Price"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addImage}
            placeholder="Course Image Url"
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
          <label htmlFor="tag"> <span className='selectType'>Select a Type:</span> </label>
        <select ref={tagName} name="tag" id="tag">
          <option value="Yoga">Yoga</option>
          <option value="Runing">Runing</option>
          <option value="Weightloss">Weightloss</option>
          <option value="Cario">Cario</option>
          <option value="Body-buiding">Body buiding</option>
          <option value="Nutrition">Nutrition</option>
        </select>
        <br />
          <br />
          <input id="submit-buttn1" type="submit" value="Add Course" />
        </form>
      </div>
    </div>
    );
};

export default AddClasses;