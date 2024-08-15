export default async function RegisterMerchProduct(productId) {
    try {
        // Carregando os dados dos fornecedores (entradas de mercadorias)
        const dataMerch = await fetch(
            "http://127.0.0.1:8000/entradasMercadorias/"
        );
        const dataMerchandise = await dataMerch.json();
        
        // Pegando a última entrada de mercadoria
        const lastMerchandise = dataMerchandise[dataMerchandise.length - 1];
        const lastMerchandiseId = lastMerchandise ? lastMerchandise.id : 0;
        
        console.log("ID da última entrada:", lastMerchandiseId);

        // Fazendo a requisição de POST para entradasMercadoriasProdutos
        const merchandiseProduct = await fetch(
            "http://127.0.0.1:8000/entradasMercadoriasProdutos/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ownerProduto: productId,
                    ownerEntradaMercadoria: lastMerchandiseId,
                }),
            }
        );

        const merchandiseProductData = await merchandiseProduct.json();
        console.log("Resposta da criação do produto:", merchandiseProductData);

    } catch (error) {
        console.error("Erro ao processar:", error);
    }
}
