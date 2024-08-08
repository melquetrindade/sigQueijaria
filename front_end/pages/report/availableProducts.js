// relatório de Felipe -> produtos disponíveis

export default function AvailableProducts () {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        // Carregando os dados dos produtos
        async function fetchData() {
            try {
                const data = await fetch("http://127.0.0.1:8000/produtos/");
                const dataProducts = await data.json();
                setProduct(dataProducts);
            } catch (error) {
                console.error("Erro ao carregar:", error);
            }
        }

        fetchData();
    }, []);

    return(
        <div>
            {product.filter((product) => product.status !== false).map((product) => (
                <div><p>{product.nome} --- {product.quantidade}</p></div>
            ))}
        </div>
    );
}