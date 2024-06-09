import Link from "next/link";


export default function HomePageStock({produtos}) {
    return (
        <div className="flex flex-col justify-center items-cente h-96 gap-20">
            <Link>
                <div
                    className="bg-white font-bold shadow-md cursor-pointer p-4 w-52 rounded-xl 
                        flex justify-evenly items-center"
                >
                    Novo Produto
                </div>
            </Link>
            <div className="bg-slate-900 text-white">
                {produtos.map((product) => (
                    <div
                        key={product.id}
                        className="flex gap-5 justify-between items-center w-80 mb-5"
                    >
                        <div>
                            {product.nome} ------ {product.quantidade}
                        </div>
                        <button onClick={() => setProductId(product.id)}>
                            add +
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
