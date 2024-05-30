import * as React from "react";
import {
  Container,
  TextField,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  Paper,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { productsList } from "../../constants/crudPath";
import QueryLoader from "../QueryLoader";

interface Data {
  id: number;
  categoryName: string;
  description: string;
  name: string;
  price: number;
  priority: number;
}

function createData(
  id: number,
  categoryName: string,
  description: string,
  name: string,
  price: number,
  priority: number
): Data {
  return {
    categoryName,
    description,
    id,
    name,
    price,
    priority,
  };
}

function descendingComparator<T extends Record<keyof T, string | number>>(
  a: T,
  b: T,
  orderBy: keyof T
) {
  const aValue = String(a[orderBy]).toLowerCase();
  const bValue = String(b[orderBy]).toLowerCase();

  return bValue.localeCompare(aValue);
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  id: keyof Data;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    label: "Id",
  },
  {
    id: "categoryName",
    label: "Category",
  },
  {
    id: "description",
    label: "Description",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "price",
    label: "Price",
  },
  {
    id: "priority",
    label: "Priority",
  },
];

interface EnhancedTableProps {
  onRequestSort: (property: keyof Data) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property: keyof Data) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{ fontWeight: "bold" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function ProductsTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("id");
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Data[]>([]);
  const [searchSymbols, setSearchSymbols] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(productsList);

        if (!response.ok) {
          throw new Error("Network response was not success.");
        }

        setTimeout(async () => {
          const result = await response.json();

          setData(result);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const rows: Data[] = data.map((item) =>
    createData(
      item.id,
      item.categoryName,
      item.description,
      item.name,
      item.price,
      item.priority
    )
  );

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const sortedData = stableSort(data, getComparator(order, property));
    setData(sortedData);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSymbols(e.target.value);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchSymbols.toLowerCase());
      } else if (typeof value === "number") {
        return value.toString().includes(searchSymbols.toLowerCase());
      }
      return false;
    })
  );

  return (
    <Container>
      <QueryLoader fetching={loading}>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <Typography variant="h4" p={2} textAlign="center">
              Products table
            </Typography>
            <Box m={2} display="flex" justifyContent="right">
              <TextField
                label="Search..."
                variant="outlined"
                color="secondary"
                value={searchSymbols}
                onChange={handleSearchInput}
                size="small"
              />
            </Box>
            <TableContainer>
              <Table
                sx={{ minWidth: 750, minHeight: 510 }}
                aria-labelledby="tableTitle"
                size="medium"
              >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {filteredRows.map((row) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.categoryName || "Other"}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.priority}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </QueryLoader>
    </Container>
  );
}

export default ProductsTable;
