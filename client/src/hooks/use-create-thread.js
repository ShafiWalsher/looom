import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useCreateThread = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // If user lands on /create → open dialog
  useEffect(() => {
    if (location.pathname === "/create") {
      setOpen(true);
    }
  }, [location.pathname]);

  const openDialog = () => {
    setOpen(true);
    navigate("/create");
  };

  const closeDialog = () => {
    setOpen(false);
    navigate("/");
  };

  return {
    open,
    setOpen,
    openDialog,
    closeDialog,
  };
};
