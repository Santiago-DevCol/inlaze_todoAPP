import Image from "next/image"

function Modal({ setModal, id, title, user, comments = [] }) {

  function handleCloseModal() {
    setModal(false)
  }

  function generateRandom() {
    return Math.ceil(Math.random() * (14 - 2) + 2)
  }

  return (
    <div className="flex flex-col w-4/5 max-w-2xl gap-4 p-4 text-gray-800 rounded bg-slate-200">
      <div className="flex justify-between">
        <h2 className="font-bold">{title}</h2>
        <button onClick={handleCloseModal} className="transition-transform cursor-pointer active:scale-75">
          <Image src="/cancel.svg" width="24" height="24" alt="" />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Descripción</h2>
        <input className="w-full p-2 text-gray-600 rounded bg-slate-300" placeholder="Añadir una descripción ..." />
      </div>
      <div className="flex gap-2">
        <Image className="self-center rounded-full" src={user.avatar} width="30" height="30" alt="" />
        <input className="w-full p-1 text-gray-600 rounded bg-slate-300" placeholder="Escriba un comentario ..." />
      </div>

      {
        comments.map((item) => (
          <div className="flex flex-col" key={item.comment_id}>
            <div className="flex gap-2">
              <div className="flex self-start gap-2">
                <Image className="rounded-full" src={item.user.avatar} width="32" height="32" alt="" />
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className="flex items-center gap-2">
                  <p></p>
                  <span className="text-xs text-gray-400">hace {generateRandom()} horas</span>
                </div>
                <input className="p-1 bg-white rounded" placeholder="Comentario ..." defaultValue={item.text} />
                <p className="text-sm text-gray-500 underline cursor-pointer">Responder</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Modal