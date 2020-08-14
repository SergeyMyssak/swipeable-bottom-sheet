import React from 'react';
import SwipeableViews from 'react-swipeable-views';
export interface IProps {
    marginTop?: number;
    overflowHeight?: number;
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
    isFullScreen?: boolean;
    isScrollTopOnClose?: boolean;
    containerClassName?: string;
    bodyClassName?: string;
    overlayClassName?: string;
    swipeableViewsProps?: SwipeableViews;
    onChange: (state: boolean) => void;
}
declare const _default: React.MemoExoticComponent<(props: IProps) => JSX.Element | null>;
export default _default;
