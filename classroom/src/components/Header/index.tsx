import styles from "./styles.module.css"
import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"
// import { type } from './../../utils/words';

type Props = {
    current: number; // Número de tentativas
    max: number; // Número máximo de tentativas
    onRestart: () => void // Função para retornar a execução
}

export function Header({ current, max, onRestart }: Props) {
    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo" />

            <header>
                <span>
                    <strong>{current}</strong> de {max} tentativas
                </span>

                <button type="button" onClick={onRestart}>
                    <img src={restart} alt="Ícone de reiniciar" />
                </button>
            </header>
        </div>
    )
}