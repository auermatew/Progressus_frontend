import React from "react";
import "./_row2.scss";

const Row2 = () => {
    return (
        <div className="mainRow">
            <div className="left">
                <div className="titleBox">
                    <h1>Hogyan is működik az oldalunk?</h1>
                </div>
                <div className="imageBox">
                    <img src="../../../assets/images/kep.png" />
                </div>
            </div>
            <div className="right">
                <div className="textBox">
                    <p>
                        Az oldal lényege, hogy tanárokat/mentorokat köt össze
                        diákokkal és tanulni kívánó embereket.<br></br>Az
                        oldalunkon első sorban regisztrálni lehet, ahol
                        kiválaszthatjuk a hozzánk megfelelő feladat körünket,
                        majd ezután egy kereső oldalon megtalálhatjuk a hozzánk
                        legjobban illő mentort. Itt megkapjuk az elérhetőségeket
                        és már lehet is kezdeni a fejlődést!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Row2;
