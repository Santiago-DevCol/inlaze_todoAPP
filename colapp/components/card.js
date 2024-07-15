import Image from "next/image"


function Card({ id, title, user, comments = [], setDragged, dataItem, setModal, listOfList, setDetails }) {
  function handleDragStart(event) {
    setDragged(
      {
        list: event.target.closest("[data-id]").dataset.id,
        data: {
          id,
          title,
          user,
          comments,
        }
      }
    )
  }

  function handleClick(event) {
    const list = event.target.closest("[data-id]").dataset.id
    const id = event.target.closest("[data-item]").dataset.item

    const card = listOfList[list].filter(item => item.id == id)

    if (card[0]) {
      setDetails(card[0])
    }

    setModal(true);
  }

  return (
    <div draggable onDragStart={handleDragStart} className="flex flex-col gap-4 p-2 bg-white rounded text-stone-800" data-item={dataItem}>
      <div className="flex justify-between">
        <p className="">{title}</p>
        <div onClick={handleClick} className="transition-transform cursor-pointer active:scale-90">
          <Image src="/pen.svg" alt="" width="20" height="20" />
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <div onClick={handleClick} className="flex gap-1 transition-transform cursor-pointer active:scale-90">
          <Image src="/note.svg" alt="" width="20" height="20" />
          {comments.length > 0 ? <span>{comments.length}</span> : null}
        </div>
        <Image className="rounded-full" src={user.avatar} alt="" width="32" height="32" />
      </div>
    </div>
  )
}

export default Card