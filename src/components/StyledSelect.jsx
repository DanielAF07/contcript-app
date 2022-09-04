function StyledSelect ({ label, placeholder, options, onChange, value, name }) {
  return (
    <div className='flex flex-col mb-4'>
      <p className='text-left mb-2'>{label}</p>
      <select
        className='form-select bg-white/20 border-none rounded-xl py-2'
        onChange={onChange}
        value={value}
        name={name}
      >
        {placeholder && <option value='' disabled>{placeholder}</option>}
        {options && (
          options.map(option => (
            <option key={option.value} value={option.label}>{option.label}</option>
          ))
        )}
      </select>
    </div>
  )
}

export default StyledSelect
