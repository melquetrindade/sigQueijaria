import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

export default function CrudNav({ actions, placeholder, TableFunction, searchState }) {
    return (
        <div className="flex flex-col justify-evenly items-center p-2 overflow-hidden">
            <div className="flex gap-6 flex-wrap items-center justify-center my-2">
                {actions.map((action, index) => (
                    <div
                        key={index}
                        className="bg-white font-bold shadow-md cursor-pointer p-4 w-52 rounded-xl flex justify-evenly items-center gap-2"
                        onClick={action.onClick}
                    >
                        <action.icon className={`size-5 ${action.color}`} />
                        <p>{action.label}</p>
                    </div>
                ))}
            </div>
            <div className="bg-white h-96 w-full flex flex-col rounded-md shadow-md my-2 overflow-y-scroll">
                <div className="flex justify-between items-center p-4 text-black">
                    <div className="flex justify-end items-center relative">
                        <input
                            className="w-48 border-0 border-b-2 border-slate-300 bg-transparent focus:outline-none focus:border-slate-400 placeholder:text-sm"
                            placeholder={placeholder}
                            onChange={(e) => searchState(e.target.value)}
                        />
                        <FaSearch className="size-4 absolute right-2" />
                    </div>
                    <SlOptionsVertical className="size-4 cursor-pointer" />
                </div>
                {/* TABLE COM OS DADOS */}
                
                {<TableFunction />}
                
            </div>
        </div>
    );
}

CrudNav.propTypes = {
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType.isRequired,
            label: PropTypes.string.isRequired,
            color: PropTypes.string,
            onClick: PropTypes.func,
        })
    ).isRequired,
    placeholder: PropTypes.string.isRequired,
    TableFunction: PropTypes.func.isRequired,
    searchState: PropTypes.elementType.isRequired
};
