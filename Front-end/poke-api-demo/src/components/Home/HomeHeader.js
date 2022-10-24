import React from "react";

const HomeHeader = () => {

    return (
        <div className="headerContainer" >
            <div className="title-description" >

                <h1 ><span style={{ color: "#FF0505" }}>Pokemon-API</span>
                    <span style={{ color: "#058CFF" }} >Challange</span></h1>


                <p className="site-desc" >
                    En esta pagina puedes ver los pokemons mas famosos
                    con un poco de detalles sobre sus habilidades y
                    caractisticas, espero que disfrutes tu tour :)</p>
            </div>

        </div>

    );
};

export default HomeHeader;