import { twMerge } from "tailwind-merge";

export default function Cell({ color, content }) {
    return (
        <div className={twMerge("p-2 rounded-md", color)}>
            <p className="flex justify-between items-center px-2"><span>{content}</span> 0</p> {/*Colocar icone*/}
        </div>
    );
}
