import { info } from "console";
import { useState } from "react";
import { FC } from "react";
import { FunctionOrConstructorTypeNode } from "typescript";
import assets from "../../assets";
import styles from './toolTip.module.scss'

interface Props {
    closeToolTip?(): void
    info: string[]
}

const ToolTip: FC<Props> = ({ closeToolTip, info }) => {

    const [infoIndex, setInfoIndex] = useState<number>(0);

    const nextInfo = () => {
        setInfoIndex((i) => {
            if (i < info.length - 1) {
                ++i;
            }
            return i;
        })
    }

    const prevInfo = () => {
        setInfoIndex((i) => {
            if (i > 0) {
                --i;
            }
            return i;
        })
    }

    return (
        <span className={styles.toolTipCon}>
            <span className={styles.arrow} />
            <div className={styles.toolTip}>
                <img src={assets.close} className={styles.close} onClick={closeToolTip} />
                <p className={styles.info}>
                    {info[infoIndex]}
                </p>
                <span className={styles.infoPagination}>
                    {(infoIndex > 0) && <img src={assets.prevIcon} className={styles.prev} onClick={prevInfo} />}
                    {(infoIndex < info.length - 1) && <img src={assets.nextIcon} className={styles.next} onClick={nextInfo} />}
                </span>

            </div>

        </span >
    );
};

export default ToolTip;