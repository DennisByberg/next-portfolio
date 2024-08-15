export default function getGreetings() {
  const greetings = [
    'Ahlan', // Arabic
    'Aloha', // Hawaiian
    'Hallo', // Afrikaans
    'Hallo', // German
    'Halo', // Indonesian
    'Hei', // Norwegian
    'Hej', // Swedish
    'Hello', // English
    'Hola', // Spanish
    'Kamusta', // Filipino
    'Merhaba', // Turkish
    'Nǐ hǎo', // Chinese
    'Oi', // Portuguese
    'Sawasdee', // Thai
    'Salut', // French
    'Selam', // Turkish
    'Shalom', // Hebrew
    'Sveiki', // Latvian
    'Szia', // Hungarian
    'Sawubona', // Zulu
    'Tere', // Estonian
    'Xin chào', // Vietnamese
    'Yā, Yō', // Japanese
    'Yassou', // Greek
  ];

  for (let i = greetings.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [greetings[i], greetings[j]] = [greetings[j], greetings[i]];
  }

  return greetings.flatMap((greeting) => [greeting, 2000]);
}
