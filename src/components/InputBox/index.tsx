import { FC } from 'react';
import styles from './inputBox.module.scss'
const InputBox: FC = () => {
    return (
        <div className={styles.tokenInput}>
            <input type="text" placeholder={"Enter Token address"} />
        </div>
    );
};

export default InputBox;