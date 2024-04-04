import React from "react";
import "./layout.css"
import Footer from "../Footer/footer";
import Header from "../Header/header";


const layout = () => {
    return (
        <div className="layout">
            <Header />
            <main className="main">
                <h2>layout</h2>
            </main>
            <Footer />
        </div>
    )
}

export default layout