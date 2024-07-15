import Image from "next/image"
import { useState } from 'react'

function List({ title, id, children, handleDrop, listOfList, setListOfList }) {

  const [isAddCard, setIsAddCard] = useState(false)
  const [task, setTask] = useState("")
  const [isError, setIsError] = useState(false)

  function handleDragOver(event) {
    event.preventDefault()
  }

  function handleAddClick() {
    setIsAddCard(true)
  }

  function generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxx7xyx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return parseInt(c == 'x' ? r : (r & 0x3 | 0x8));
    });
    return uuid;
  }

  function handleAddCard(event) {
    if (task.trim() === "") {
      setIsError(true)
      return
    }

    const list = event.target.closest("[data-id]").dataset.id

    const random = Math.ceil(Math.random() * (4 - 0) + 0)
    const id = generateUUID();
    setIsError(false)

    const newCard = {
      id,
      title: task,
      user: {
        user_id: random,
        avatar: `/photo-${random}.png`
      },
    }

    const newListOfList = structuredClone(listOfList)
    newListOfList[list].push(newCard)

    setListOfList(newListOfList)
    setTask("")
    setIsAddCard(false)
  }

  function handleChange(event) {
    setTask(event.target.value)
    setIsError(false)
  }

  function handleCancel() {
    setTask("")
    setIsAddCard(false)
    setIsError(false)
  }

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} className="relative flex flex-1" data-id={id}>
      <div className="absolute inset-0 flex flex-col flex-1 gap-4 p-4 bg-gray-300 rounded ">
        <div className="flex justify-between">
          <h2 className="font-bold text-white">{title}</h2>
          <span className="text-white leading-list">•••</span>
        </div>
        <div className="flex flex-col flex-1 gap-4 overflow-auto">
          {children}
        </div>
        {
          isAddCard
            ? <div className="flex flex-col gap-4 p-1">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 p-2 bg-white rounded">
                  <input onChange={handleChange} value={task} type="text" className="w-full pr-2 text-black bg-white rounded" placeholder="Introduzca un título para esta tarjeta..." />
                  <Image src="/pen.svg" width="24" height="24" alt="" />
                </div>
                {
                  isError ? <p className="p-1 font-bold text-center text-white transition-all rounded bg-rose-700">Debes introducir el titulo</p> : null
                }
              </div>

              <div className="flex items-center gap-4">
                <button onClick={handleAddCard} className="p-2 text-white transition-transform bg-indigo-500 rounded cursor-pointer  active:scale-90">Añada tarjeta</button>
                <div onClick={handleCancel} className="transition-transform cursor-pointer active:scale-90">
                  <Image src="/cancel.svg" width="20" height="20" alt="" />
                </div>
              </div>
            </div>
            :
            <div onClick={handleAddClick} className="flex gap-1 p-1 transition-transform rounded-lg cursor-pointer bg-slate-200/50 active:scale-90">
              <Image src="/add.svg" width="20" height="20" alt="" />
              <p className="font-medium text-indigo-900">Añada otra tarjeta</p>
            </div>
        }

      </div>
    </div>
  )
}

export default List