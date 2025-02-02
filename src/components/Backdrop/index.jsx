const Backdrop = ({ children, onClick }) => {
  return (
    <div
      className="fade-in-fast fixed bottom-0 left-0 right-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-25 backdrop-blur before:w-full"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Backdrop
