
'use client'
import { useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  Typography,
  Popover,
} from "@mui/material";
import {
  IconSettings,
  IconSun,
  IconMoon,
  IconDeviceDesktop,
} from "@tabler/icons-react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<string>(() => {
    return localStorage.getItem("theme-mode") || "system";
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (darkMode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      prefersDark
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme-mode", darkMode);
  }, [darkMode]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (mode: string) => {
    setDarkMode(mode);
    handleClose();
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        aria-controls="theme-menu"
        aria-haspopup="true"
      >
        <IconSettings className="h-6 w-6 text-foodconnect-900 dark:text-foodconnect-50" />
      </IconButton>

      <Popover
      // className="z-[6000]"
        id="theme-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPopover-paper": {
            backgroundColor: darkMode === "dark" ? "#481700" : "#fffbea",
            color: darkMode === "dark" ? "#fffbea" : "#481700",
          },
        }}
      >
        <MenuItem onClick={() => handleThemeChange("system")}>
          <ListItemIcon>
            <IconDeviceDesktop className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </ListItemIcon>
          <Typography>System Default</Typography>
        </MenuItem>

        <MenuItem onClick={() => handleThemeChange("light")}>
          <ListItemIcon>
            <IconSun className="h-5 w-5 text-yellow-500" />
          </ListItemIcon>
          <Typography>Light Mode</Typography>
        </MenuItem>

        <MenuItem onClick={() => handleThemeChange("dark")}>
          <ListItemIcon>
            <IconMoon className="h-4 w-4 text-neutral-300" />
          </ListItemIcon>
          <Typography>Dark Mode</Typography>
        </MenuItem>
      </Popover>
    </div>
  );
};

export default DarkModeToggle;
