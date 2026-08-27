import { useEffect, useState } from 'react';

interface Options {
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}

/**
 * Cycles through `words`, typing and deleting one character at a time.
 * When the visitor prefers reduced motion, the first word is shown statically.
 */
export function useTypewriter(words: string[], options: Options = {}): string {
  const { typeSpeed = 70, deleteSpeed = 35, holdTime = 1600 } = options;
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reduced || words.length === 0) return;
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), holdTime);
      return () => window.clearTimeout(hold);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = window.setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex, words, reduced, typeSpeed, deleteSpeed, holdTime]);

  if (reduced) return words[0] ?? '';
  return text;
}
