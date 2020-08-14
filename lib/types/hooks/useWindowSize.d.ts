interface IProps {
    height: number;
    handleHeight: (data: number) => void;
}
declare const useWindowSize: ({ height, handleHeight }: IProps) => void;
export default useWindowSize;
