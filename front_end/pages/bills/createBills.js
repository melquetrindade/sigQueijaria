export async function createBills({ idBill, billType }) {
    let sell = null;

    // Função para buscar os dados da venda
    async function fetchDataSell() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/vendas/${idBill}/`);
            if (!response.ok) {
                throw new Error(`Erro ao carregar dados da venda: ${response.statusText}`);
            }
            sell = await response.json();
        } catch (error) {
            console.error("Erro ao carregar:", error);
        }
    }

    // Função para enviar dados ao backend
    async function handleSubmit() {
        try {
            const response = await fetch("http://127.0.0.1:8000/contas/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ownerVenda: idBill,
                    tipoReceber: billType,
                    valor: sell.total,
                    dataVencimento: sell.data,
                    resolvida: false,
                }),
            });
            if (response.status === 200 || response.status === 201) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error(`Erro ao inserir venda: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Erro ao inserir venda!", error);
        }
    }

    // Executa a lógica sequencialmente
    if (billType === true) {
        await fetchDataSell();  // Busca os dados da venda
        if (sell) {
            await handleSubmit();  // Envia os dados ao backend
        } else {
            console.error("Dados da venda não encontrados.");
        }
    }
}