export const currentHour = () => {
  const hour = new Date().getHours();
  let greeting: string;

  if (hour < 12) {
    greeting = 'Bom dia, treinador(a) ☀️';
  } else
    greeting =
      hour < 18 ? 'Boa tarde, treinador(a) 🌤️' : 'Boa noite, treinador(a) 🌙';

  return greeting;
};
