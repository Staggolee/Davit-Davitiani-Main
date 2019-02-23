import React from "react";

const UserInput = props => (
  <>
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        const dataType = e.target.elements.dataType.value.toLowerCase();
        const dataCount = e.target.elements.dataCount.value;
        props.onSubmit(dataType, dataCount);
      }}
    >
      <div>
        <label htmlFor="type">Choose What to Load</label>
        <input id="type" list="types" name="dataType" required />
        <datalist id="types">
          <option value="Posts" />
          <option value="Comments" />
          <option value="Albums" />
          <option value="Photos" />
          <option value="Todos" />
          <option value="Users" />
        </datalist>
      </div>
      <div>
        <label htmlFor="input">Quantity</label>
        <input id="input" type="number" name="dataCount" min="1" required />
      </div>
      <div>
        <button className="button" type="submit">
          Load
        </button>
      </div>
    </form>
  </>
);

export default UserInput;
