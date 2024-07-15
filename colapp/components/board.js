import List from "./list"
import Card from "./card"
import { useState } from 'react';
import { todoList, inProgressList, doneList } from './data'
import Image from "next/image";

function Board({ setModal, setDetails }) {

  const [dragged, setDragged] = useState(null)
  const [listOfList, setListOfList] = useState({
    todoList,
    inProgressList,
    doneList,
  })

  function handleDrop(event) {
    const list = event.currentTarget.dataset.id

    const listOfListClone = structuredClone(listOfList)

    const newList = listOfListClone[dragged.list].filter(item => {
      return dragged.data.id !== item.id
    })

    listOfListClone[dragged.list] = newList
    listOfListClone[list].push(dragged.data)

    setListOfList(listOfListClone)
  }

  return (
    <div className="flex flex-col flex-1 p-4 bg-white/40">
      <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-500">
        <h1 className="text-xl font-bold sm:text-2xl">Proyecto de Desarrollo</h1>
        <span className="w-1 h-10 border-r-2"></span>
        <div className="flex">
          <Image className="self-center -mr-2 rounded-full" src="https://api.multiavatar.com/Binx Bond.svg" width="36" height="36" alt=""/>
          <Image className="self-center -mr-2 rounded-full" src="https://api.multiavatar.com/Binx ana.svg" width="36" height="36" alt=""/>
          <Image className="self-center -mr-2 rounded-full" src="https://api.multiavatar.com/Binx truea.svg" width="36" height="36" alt=""/>
          <Image className="self-center -mr-2 rounded-full" src="https://api.multiavatar.com/Binx carl.svg" width="36" height="36" alt=""/>
        </div>
        <span className="w-1 h-10 border-r-2"></span>
        <button className="p-2 transition-transform bg-slate-500 rounded cursor-pointer active:scale-90 text-white">Invitar</button>
      </div>
      <main className="flex flex-col flex-1 gap-6 sm:flex-row">
        <List title="Todo" id="todoList" handleDrop={handleDrop} listOfList={listOfList} setListOfList={setListOfList}>
          {
            listOfList.todoList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} dataItem={item.id} setModal={setModal} listOfList={listOfList} setDetails={setDetails} />
            ))
          }
        </List>

        <List title="In Progress" id="inProgressList" handleDrop={handleDrop} listOfList={listOfList} setListOfList={setListOfList}>
          {
            listOfList.inProgressList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} dataItem={item.id} setModal={setModal} listOfList={listOfList} setDetails={setDetails} />
            ))
          }
        </List>

        <List title="Done" id="doneList" handleDrop={handleDrop} listOfList={listOfList} setListOfList={setListOfList}>
          {
            listOfList.doneList.map(item => (
              <Card {...item} key={item.id} setDragged={setDragged} dataItem={item.id} setModal={setModal} listOfList={listOfList} setDetails={setDetails} />
            ))
          }
        </List>

      </main>
    </div>
  )
}

export default Board