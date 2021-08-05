import { FC } from 'react';
import assets from '../../assets';
import styles from './iconChipInput.module.scss'

interface Props {
    icon?: string,
    title: string,
    value: string,
}

const IconChipInput: FC<Props> = ({ title, value, icon }) => {
    return (
        <span className={styles.iconChip}>
            <span className={styles.iconContainer}>
                <img src={icon ? icon : assets.bnbIcon} />
            </span>
            <span className={styles.textContainer}>
                <p className={styles.title}>{title}</p>
                <span className={styles.input}>
                    <input type="text" placeholder={"12345"} />
                </span>
            </span>

        </span>
    );
};

export default IconChipInput;