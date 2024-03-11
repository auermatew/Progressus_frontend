import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { PiMaskSad, PiMaskSadFill } from "react-icons/pi";
import { MdPersonSearch } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";

const Row1 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const control = useAnimation();
    useEffect(() => {
        if (isInView) {
            control.start("visible");
        }
    }, [isInView]);

    return (
        <>
            <div ref={ref} className="row1">
                <motion.div
                    className="cards"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={control}
                    transition={{ duration: 1 }}
                >
                    <div className="col1">
                        <PiMaskSad size={120} />
                        <h1>1. lépés:</h1>
                        <p>Regisztrálj, ne hagyd holnapra!</p>
                    </div>
                    <div className="col2">
                        <MdPersonSearch size={120} />
                        <h1>2. lépés:</h1>
                        <p>Keresd meg a hozzád megfelelő tanárt és kezdj el fejlődni!</p>
                    </div>
                    <div className="col3">
                        <HiLightBulb size={120} />
                        <h1>3. lépés:</h1>
                        <p>Érd el a legjobb formádat, legyél okosabb mint tegnap!</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Row1;
