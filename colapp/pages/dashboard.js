import Layout from '../components/layout'
import Header from '../components/header'
import Board from '../components/board'
import Overlay from '../components/overlay'
import Modal from '../components/modal'
import ClientOnlyPortal from '../components/portal'
import { useState } from 'react';

export default function Home() {

  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({})

  return (
    <Layout>
      <ClientOnlyPortal>
        <Overlay isActive={modal}>
          <Modal setModal={setModal} {...details} />
        </Overlay>
      </ClientOnlyPortal>
      <Header />
      <Board setModal={setModal} setDetails={setDetails} />
    </Layout>
  )
}
