import { Header } from "./components/Header"
import styles from "./App.module.css"

export function App() {

  function handleRestartGame() {
    alert("Reiniciar o jogo")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={11} onRestart={handleRestartGame} />
      </main>
    </div>
  ) 
}