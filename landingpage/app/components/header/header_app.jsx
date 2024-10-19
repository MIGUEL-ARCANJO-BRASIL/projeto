import Image from "next/image";
import Logo from "@/app/images/logo.png";
import Link from "next/link";
import Styles from "./header.module.scss";

const HeaderApp = () => {

    return <div className={Styles.container}>
        <div className={Styles.logo}> <b>Nome do App</b> </div>
        <div className={Styles.menu}>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Pontos de Coleta</Link>
            <Link href={"/"}>Sobre</Link>
        </div>
        <div className={Styles.action}><button>Fale Conosco</button></div>
    </div>
}

export default HeaderApp;