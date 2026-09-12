export const WHATSAPP_NUMBER = "5561992703375";
export const WHATSAPP_CONTACT_MESSAGE = "Olá! Gostaria de solicitar um orçamento para o meu evento com a FestDrinks.";

export function buildWhatsAppContactUrl() {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_CONTACT_MESSAGE)}`;
}
const categoryOrder = ["gin", "vodka", "cachaca", "sem-alcool", "espumantes", "mao-de-obra", "balcoes"];
export function buildWhatsAppUrl(formData, selectedDrinks) {
    const groups = categoryOrder.map((category) => ({ label: selectedDrinks.find((drink) => drink.categoria === category)?.rotulo, drinks: selectedDrinks.filter((drink) => drink.categoria === category) })).filter((group) => group.drinks.length);
    const drinkText = groups.map((group) => `${group.label.toUpperCase()}\n${group.drinks.map((drink) => `• ${drink.nome}`).join("\n")}`).join("\n\n");
    const message = `Olá! Gostaria de solicitar um orçamento com a FestDrinks. 🍸\n\n📋 DADOS DO EVENTO\n\n👤 Nome:\n${formData.get("nome")}\n\n📅 Data:\n${formData.get("data")}\n\n⏰ Horário:\n${formData.get("horario")}\n\n👥 Número de convidados:\n${formData.get("convidados")} pessoas\n\n🎉 Tipo de evento:\n${formData.get("tipo")}\n\n🍸 DRINKS SELECIONADOS\n\n${drinkText}\n\nGostaria de receber mais informações sobre valores e disponibilidade.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
