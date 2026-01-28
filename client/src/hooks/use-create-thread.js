import { useState } from "react";

export function useCreateThread() {
  const [open, setOpen] = useState(false);

  return {
    open,
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
    setOpen,
  };
}
