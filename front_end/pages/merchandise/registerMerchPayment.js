import { createBills } from "../bills/createBills";

export default async function RegisterMerchPayment(paymentType) {
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
        const merchandisePayment = await fetch(
            "http://127.0.0.1:8000/entradasMercadoriasMetodosPagamentos/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ownerEntradaMercadoria: lastMerchandiseId,
                    ownerMetodoPagamento: paymentType,
                }),
            }
        );

        if (merchandisePayment.status == 200 || merchandisePayment.status == 201) {
            createBills({ idBill: lastMerchandiseId, billType: false });
        }


        const merchandisePaymentData = await merchandisePayment.json();
        console.log("Resposta da criação do produto:", merchandisePaymentData);

    } catch (error) {
        console.error("Erro ao processar:", error);
    }
}
