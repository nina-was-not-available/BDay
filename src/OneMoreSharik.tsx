import {Sharik} from "./Sharik";

type Props = {
    speed: number;
    color: string;
    index: number;
    total: number;
};

export const OneMoreSharik = ({ speed, color, index, total }: Props) => {
    const leftPosition = (index / total) * 100;

    const style: React.CSSProperties = {
        animation: `move ${speed}s linear infinite`,
        left: `${leftPosition}%`,
    };

    return (
        <span className={"sharik"} style={style}>
      <Sharik fill={color} />
    </span>
    );
};