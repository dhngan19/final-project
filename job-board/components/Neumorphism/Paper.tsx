import React from 'react';
import classNames from "classNames/bind";
import {
    Box,
    BoxProps
} from '@mui/material';
import styles from '@/styles/neumorphism/Box.module.scss';

const cx = classNames.bind(styles);
export const CustomPaper: React.FC<BoxProps> = ({
    children,
    ...restProps
}) => {
    return (
        <Box className={cx("neumorph-box__wrapper")} {...restProps}>
            {children}
        </Box>
    );
};