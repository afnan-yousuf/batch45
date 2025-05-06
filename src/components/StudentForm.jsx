import React, { useEffect, useState } from "react";

function StudentForm() {
  const [data, setData] = useState({ fname: "", lname: "", age: 1 });
  const [error, setError] = useState(null);


  
  function sendata(e) {
    
    e.preventDefault();
    if (data.fname === "" && data.lname === "" && data.age === 0) {
      setError("Must Fill all the feilds");
    } else if (data.fname === "") {
      setError("Must Fill First Name");
    } else {
      setError(null);

      console.log(data);
    }
  }
  function handleValue(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div>{error && <h2 style={{color:"red"}}>{error}</h2>}</div>
      <form onSubmit={sendata}>
        <input
          type="text"
          value={data.fname}
          name="fname"
          required
          onChange={handleValue}
        />
        <input
          type="text"
          value={data.lname}
          name="lname"
          required
          onChange={handleValue}
        />
        <input
          type="number"
          min="1"
          value={data.age}
          name="age"
          onChange={handleValue}
        />
        <input type="submit" value="Save" />
      </form>
    </>
  );
}

export default StudentForm;
