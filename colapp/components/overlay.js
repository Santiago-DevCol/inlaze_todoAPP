
function Overlay({ children, isActive, setModal }) {
  return (
    <div>
      {
        isActive
          ? <div className="fixed inset-0 z-10 flex items-center justify-center filter-blur">
            {children}
          </div>
          : null
      }
    </div>
  )
}

export default Overlay