import React, { useState } from 'react';

const Add = ({ handleSubmit, handleEvent }) => {

  const [transType, setType] = useState('Credit');
  const [amount, setAmount] = useState(0);
  const [description, setDesc] = useState('');

  const SubmitData = () => {
    const payload = { transType: transType, amount: Number(amount), description: description }
    setType('Credit');
    setAmount(0);
    setDesc('');
    handleSubmit(payload);
  }

  return (
    <>
      <button type="button" className="btn btn-primary btn-lg" onClick={() => handleEvent()}>List Transaction</button>

      <div className="add">
        <form>
          <div class="form-group">
            <label>Transaction Type</label>
            <select className="form-control" onChange={(val) => setType(val.target.value)}>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>
          <div className="form-group">
            <label >Amount</label>
            <input onChange={(val) => setAmount(val.target.value)} type="number" className="form-control" placeholder="Enter amount" />
          </div>
          <div className="form-group">
            <label> Description</label>
            <textarea onChange={(val) => setDesc(val.target.value)} className="form-control" rows="3" placeholder="Enter description" ></textarea>
          </div>
          <button type="button" onClick={() => SubmitData()}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Add;