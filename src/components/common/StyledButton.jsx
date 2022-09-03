const StyledButton = ({ children, ...props }) => {
  return (
    <button className='h-16 bg-white/40 border-none rounded-xl px-8 my-4 font-bold text-white/80' {...props}>
      {children}
    </button>
  )
}

export default StyledButton
