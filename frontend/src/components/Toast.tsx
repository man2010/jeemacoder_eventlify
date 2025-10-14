import { useEffect } from 'react';

interface Props {
  message: string | null;
  onHide: () => void;
}

export function Toast({ message, onHide }: Props) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => onHide(), 2500);
    return () => clearTimeout(t);
  }, [message, onHide]);

  if (!message) return null;
  return <div className="toast">{message}</div>;
}
