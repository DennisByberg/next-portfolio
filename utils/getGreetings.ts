export default function getGreetings() {
  const greetings = [
    'Aloha', // Hawaiian
    'Hallo', // Afrikaans
    'Hallo', // German
    'Halo', // Indonesian
    'Hei', // Norwegian
    'Hej', // Swedish
    'Hello', // English
    'Hola', // Spanish
    'Merhaba', // Turkish
    'Nǐ hǎo', // Chinese
    'Salut', // French
    'Xin chào', // Vietnamese
  ];

  for (let i = greetings.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [greetings[i], greetings[j]] = [greetings[j], greetings[i]];
  }

  return greetings.flatMap((greeting) => [greeting, 2000]);
}
