const SelectInput2 = ({
  label,
  items,
  sideItems,
  value,
  onChange,
  value2,
  onChange2,
  examLabel,
  examLabel2,
}) => {
  return (
    <div className="row mb-3">
      <label htmlFor="inputEmail3" className="col-1 col-form-label">
        {label}
      </label>
      <div className="col-7">
        <select
          className="form-select"
          value={value}
          onChange={(e) => onChange(e.target.value, examLabel)}
        >
          <option value=""></option>
          {items.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="col-4">
        <select
          className="form-select"
          value={value2}
          onChange={(e) => onChange2(e.target.value, examLabel2)}
        >
          <option value=""></option>
          {sideItems.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput2;
