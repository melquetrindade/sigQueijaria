import Cell from "./cell";

export default function BigContainer({ title, color }) {

    return (
        <div className="bg-white w-[400px] h-60 rounded-lg flex flex-col justify-start p-6 px-7 capitalize shadow-md">    
            <p className="font-bold pb-1">{title}</p>
            <div className="flex flex-col gap-4 py-2">
                <Cell color={color} content={"Provas"}/>
                <Cell color={color} content={"Retiradas"}/>
                <Cell color={color} content={"Devoluções"}/>
            </div>
        </div>
    );
}
