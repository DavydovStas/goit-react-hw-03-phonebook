export default function Filter({ filter, onChange }) {
  return (
    <div className="filter-section">
      <p className="filter-title">Find contacts by name</p>
      <input
        className="filter-input"
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
    // console.log(filter);
  );
}
