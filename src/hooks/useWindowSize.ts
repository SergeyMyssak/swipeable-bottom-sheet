import { useEffect } from 'react';

interface IProps {
  height: number;
  handleHeight: (data: number) => void;
}

const useWindowSize = ({ height, handleHeight }: IProps): void => {
  useEffect(() => {
    const handleResize = (): void => {
      const { innerHeight: windowHeight } = window;

      if (windowHeight && windowHeight !== height) {
        handleHeight(windowHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [height, handleHeight]);
};

export default useWindowSize;
