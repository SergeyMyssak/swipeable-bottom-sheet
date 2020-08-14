import React, { FC, memo } from 'react';
import classNames from 'classnames';
import './index.scss';

interface IProps {
  height: number;
  isOpen?: boolean;
  overlayClassName?: string;
  onChangeIndex: (index: number) => void;
}

const Overlay: FC<IProps> = ({
  height,
  isOpen,
  overlayClassName,
  onChangeIndex,
}): JSX.Element => {
  const handleClick = (): void => onChangeIndex(0);

  return (
    <div
      className={classNames(
        'swipeable-bs-root__overlay',
        { 'swipeable-bs-root__overlay--open': isOpen },
        overlayClassName,
      )}
      style={{ height }}
      onClick={handleClick}
    />
  );
};

export default memo(Overlay);
