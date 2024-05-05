import Cell from "./cell"

export default function SmallContainer({ title, color }) {
    return (
        <div className="bg-white shadow-md w-[400px] h-48 rounded-lg flex flex-col justify-start p-6 capitalize">
            <p className="font-bold pb-1">{title}</p>
            <div className="flex flex-col gap-4 py-2 ">
                <Cell color={color} content={"Total"}/>
                <Cell color={color} content={"Quantidade"}/>
            </div>
        </div>
    )
}