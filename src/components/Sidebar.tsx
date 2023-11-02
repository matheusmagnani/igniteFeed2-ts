import { Avatar } from "./Avatar.jsx"
import styles from "./Sidebar.module.css";

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://plus.unsplash.com/premium_photo-1663937462387-6000810badb1?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className={styles.cover}
      />

      <div className={styles.profile}>
      <Avatar src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/082ebb8cd9e9e4b48e21d12ebf1d15fc~c5_100x100.jpeg?x-expires=1698508800&x-signature=to7oSdOSvEh7PHAPUOY9hFAbkM4%3D" alt="" />
        <strong>Julia de Barcelos</strong>
        <span>Fotógrafa</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil </a>
      </footer>
    </aside>
  )

}