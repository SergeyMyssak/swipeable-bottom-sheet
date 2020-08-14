import React, { FC, memo } from 'react';
import SwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';
import { Overlay } from './components';
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

const SwipeableBottomSheetView: FC<IProps> = ({
  children,

  bodyRef,
  index,
  height,
  isOpen,
  isClosed,

  containerClassName,
  bodyClassName,
  overlayClassName,
  swipeableViewsProps,

  style,
  bodyStyle,
  bottomSlideStyle,
  swipeableViewsRootStyle,
  swipeableViewsContainerStyle,
  swipeableViewsSlideStyle,

  handleChangeIndex,
  handleTransitionEnd,
}): JSX.Element => (
  <div
    className={classNames('swipeable-bs-root', containerClassName)}
    style={style}
  >
    <Overlay
      height={height}
      isOpen={isOpen}
      overlayClassName={overlayClassName}
      onChangeIndex={handleChangeIndex}
    />
    <SwipeableViews
      {...swipeableViewsProps}
      index={index}
      axis='y'
      enableMouseEvents={true}
      onChangeIndex={handleChangeIndex}
      onTransitionEnd={handleTransitionEnd}
      style={swipeableViewsRootStyle}
      containerStyle={swipeableViewsContainerStyle}
      slideStyle={swipeableViewsSlideStyle}
    >
      <div
        ref={bodyRef}
        className={classNames(
          'swipeable-bs-root__body',
          {
            'swipeable-bs-root__body--hidden': !isOpen,
            'swipeable-bs-root__body--none': isClosed,
          },
          bodyClassName,
        )}
        style={bodyStyle}
      >
        {children}
      </div>
      <div style={bottomSlideStyle} />
    </SwipeableViews>
  </div>
);

export default memo(SwipeableBottomSheetView);
