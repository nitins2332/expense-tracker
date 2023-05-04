import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

const Detail = styled(ListItem)`
  margin-top: 10px;
`;

const Transaction = ({ transaction, setTransactions, transactions }) => {
  const color = transaction.amount > 0 ? "green" : "red";

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <Box>
      <Detail style={{ background: `${color}`, color: "#fff" }}>
        <ListItemIcon>
          <DeleteIcon
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => deleteTransaction(transaction.id)}
          />
        </ListItemIcon>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
      </Detail>
      <Divider />
    </Box>
  );
};

export default Transaction;
