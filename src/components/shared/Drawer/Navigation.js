import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "gatsby";
import {
  Box,
  Divider,
  ListItem,
  ListSubheader,
  List,
  Typography,
} from "@material-ui/core";
import ListItems from "./ListItems";
import DrawerFooter from "./DrawerFooter";

const variantMenu = {
  open: {
    pointerEvents: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    pointerEvents: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <Box
    height="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    paddingTop={{ sm: 2, md: 7 }}
  >
    <>
      <motion.ul variants={variantMenu}>
        <ListItems />
      </motion.ul>
      <motion.ul variants={variantMenu}>
        <DrawerFooter />
      </motion.ul>
    </>
  </Box>
);
