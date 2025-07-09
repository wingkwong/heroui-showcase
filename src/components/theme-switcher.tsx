import React from 'react';
import { Icon } from '@iconify/react';
import { Switch, Tooltip } from '@heroui/react';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = React.useState(false);
  
  React.useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const handleToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  return (
    <Tooltip 
      content={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="bottom"
    >
      <div className="flex items-center gap-2">
        <Icon icon="lucide:sun" className={`text-default-500 ${!isDark && "text-primary-500"}`} />
        <Switch 
          isSelected={isDark}
          onValueChange={handleToggle}
          size="sm"
          color="primary"
          className="mx-1"
        />
        <Icon icon="lucide:moon" className={`text-default-500 ${isDark && "text-primary-500"}`} />
      </div>
    </Tooltip>
  );
};