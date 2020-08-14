import { useEffect } from 'react';

interface IProps {
  height: number;
  handleHeight: (data: number) => void;
}

interface IGetSize {
  height?: number;
}

const useWindowSize = ({ height, handleHeight }: IProps): void => {
  const isClient = typeof window === 'object';

  const getSize = (): IGetSize => ({
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      const { height: windowHeight } = getSize();

      if (windowHeight && windowHeight !== height) {
        handleHeight(windowHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [height, handleHeight]);
};

export default useWindowSize;
