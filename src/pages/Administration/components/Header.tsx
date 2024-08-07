import { Box, Button, Image, Select } from "@mantine/core";

export function Header() {
  
    return (
      <header>
        <img className="headerLogo" src="logo.png" />
        <select className="selectLanguage">
            <option value="English">English</option>
        </select>
            
      </header>
    );
  }