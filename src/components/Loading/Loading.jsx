import "./loading.css";

const Loading = () => {
    return (
        <div className="loadingContainer">
            <img className="loadingImage" src="../assets/loading.gif" alt="Cargando"/>
            <h1 className="loadingTitle">Cargando...</h1>
        </div>    
    )
}

export default Loading;