import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withWindow } from './hocs';
import { useWindowSize } from './hooks';
import SwipeableBottomSheetView from './SwipeableBottomSheetView';

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

const SwipeableBottomSheet: FC<IProps> = ({
  marginTop = 0,
  overflowHeight = 0,

  isOpen,
  isFullScreen,
  isScrollTopOnClose = true,
  swipeableViewsProps = {},

  onChange,
  ...props
}): JSX.Element | null => {
  const index = isOpen ? 1 : 0;
  const isFullyHiddenWhenClosed = overflowHeight === 0;

  const bodyRef = useRef<any>();

  const [height, handleHeight] = useState(window.innerHeight);
  const [isClosed, handleClosed] = useState<boolean>(isFullyHiddenWhenClosed);

  useWindowSize({ height, handleHeight });

  const maxHeight = height - marginTop;

  useEffect(() => {
    isFullyHiddenWhenClosed && handleClosed(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && isScrollTopOnClose && !isFullyHiddenWhenClosed) {
      bodyRef?.current?.scrollTo(0, 0);
    }
  }, [isOpen, isScrollTopOnClose, isFullyHiddenWhenClosed]);

  const handleChangeIndex = useCallback(
    (index: number) => onChange(!!index),
    [],
  );

  const handleTransitionEnd = useCallback(() => {
    isFullyHiddenWhenClosed && !index && handleClosed(true);
  }, [index, isFullyHiddenWhenClosed]);

  const style = useMemo(() => ({ height: overflowHeight }), [overflowHeight]);
  const bodyStyle = useMemo(
    () => ({ height: isFullScreen ? maxHeight : 'initial', maxHeight }),
    [isFullScreen, maxHeight],
  );
  const bottomSlideStyle = useMemo(() => ({ marginBottom: overflowHeight }), [
    overflowHeight,
  ]);

  const swipeableViewsRootStyle = useMemo(
    () => ({
      overflowY: 'initial',
      boxSizing: 'border-box',
      ...swipeableViewsProps.style,
    }),
    [swipeableViewsProps.style],
  );
  const swipeableViewsContainerStyle = useMemo(
    () => ({
      boxSizing: 'border-box',
      ...swipeableViewsProps.containerStyle,
    }),
    [swipeableViewsProps.containerStyle],
  );
  const swipeableViewsSlideStyle = useMemo(
    () => ({
      marginBottom: -overflowHeight,
      boxSizing: 'border-box',
      overflow: 'visible',
      ...swipeableViewsProps.slideStyle,
    }),
    [overflowHeight, swipeableViewsProps.slideStyle],
  );

  return (
    <SwipeableBottomSheetView
      {...props}
      bodyRef={bodyRef}
      index={index}
      height={height}
      isOpen={isOpen}
      isClosed={isClosed}
      swipeableViewsProps={swipeableViewsProps}
      style={style}
      bodyStyle={bodyStyle}
      bottomSlideStyle={bottomSlideStyle}
      swipeableViewsRootStyle={swipeableViewsRootStyle}
      swipeableViewsContainerStyle={swipeableViewsContainerStyle}
      swipeableViewsSlideStyle={swipeableViewsSlideStyle}
      handleChangeIndex={handleChangeIndex}
      handleTransitionEnd={handleTransitionEnd}
    />
  );
};

export default memo(withWindow<IProps>(SwipeableBottomSheet));
