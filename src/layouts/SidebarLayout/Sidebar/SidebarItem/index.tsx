import { FC, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import * as Icons from '@mui/icons-material/'

interface SidebarItemProps {
  fieldId: string;
  text: string;
  href: string;
  icons: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  fieldId = '',
  text = '',
  href = '',
  icons = '',
}) => {
  console.log({ fieldId })

  const [menus, setMenus] = useState([])

  useEffect(() => {
    const fetchMenus = async () => {
      const response = await fetch(`/api/menus?fieldId=${fieldId}`)
      const data = await response.json()
      setMenus(data)
    }
    fetchMenus()
  }, [])

  console.log(menus)


  return (
    <NextLink href="/dashboards/crypto" passHref>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          {React.createElement(Icons['StarBorder'])}
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItemButton>
    </NextLink>
  );
};

SidebarItem.propTypes = {
  fieldId: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  icons: PropTypes.string
};

export default SidebarItem;
