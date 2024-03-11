import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
                        <h2>Blabla</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Assumenda debitis ab, quod repellendus aliquam
                            beatae perspiciatis nihil obcaecati quia amet itaque
                            deserunt aspernatur, enim nulla facilis, fugiat
                            deleniti rerum doloremque.
                        </p>
                    </div>
                    <div className="col2">
                        <h2>Blabla</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Adipisci, exercitationem. Expedita ducimus
                            facere suscipit. Eaque recusandae est molestiae
                            nobis atque cumque velit necessitatibus natus dolor.
                            Itaque iste totam veniam est.
                        </p>
                    </div>
                    <div className="col3">
                        <h2>Blabla</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Illum facere ab excepturi, odit molestias iure
                            dicta, odio accusamus amet minima nam, explicabo
                            ipsam et aut delectus illo ex placeat repudiandae.
                        </p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Row1;
