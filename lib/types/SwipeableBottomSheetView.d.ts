import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './index.css';
interface IProps {
    children: JSX.Element | JSX.Element[];
    bodyRef: any;
    index: number;
    height: number;
    isOpen?: boolean;
    isClosed: boolean;
    containerClassName?: string;
    bodyClassName?: string;
    overlayClassName?: string;
    swipeableViewsProps?: SwipeableViews;
    style: any;
    bodyStyle: any;
    bottomSlideStyle: any;
    swipeableViewsRootStyle: any;
    swipeableViewsContainerStyle: any;
    swipeableViewsSlideStyle: any;
    handleChangeIndex: (index: number) => void;
    handleTransitionEnd: () => void;
}
declare const _default: React.NamedExoticComponent<IProps>;
export default _default;
