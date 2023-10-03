const Input2 = ({ label, value, onChange, examLabel }) => {
  return (
    <div className="row mb-3">
      <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
        {label}
      </label>
      <div className="col-sm-8">
        <input
          type="text"
          className="form-control"
          id="inputEmail3"
          value={value}
          onChange={(e) => onChange(e.target.value, examLabel)}
        />
      </div>
    </div>
  );
};

export default Input2;
