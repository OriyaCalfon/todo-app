
const PrioritySelect = ({ value, onChange, onKeyDown, name = "priority", autoFocus = false }) => {
    return (
        <select
            className="edit-select"
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus={autoFocus}
        >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    );
};

export default PrioritySelect;
