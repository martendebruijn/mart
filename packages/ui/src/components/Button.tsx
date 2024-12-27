import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export function Button({ onClick, children, disabled = false }: Props) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
