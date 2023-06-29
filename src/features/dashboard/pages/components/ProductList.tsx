import { Fragment, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography
} from '@mui/material';
import { Product } from '../../../../types';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { fetchData } from '../../dashboardSlice';
const ProductList = () => {
  const dispatch = useAppDispatch();
  const productList: Product[] = useAppSelector((state) => state.dashBoard.productList);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <Toolbar />
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Fragment>
                <Typography component='h2' variant='h6'>
                  Product List
                </Typography>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center'>Avatar</TableCell>
                      <TableCell align='center'>Name</TableCell>
                      <TableCell align='center'>Category</TableCell>
                      <TableCell align='center'>Best Selling</TableCell>
                      <TableCell align='center'>Special</TableCell>
                      <TableCell align='center'>Price</TableCell>
                      <TableCell align='right'></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productList.map((product) => {
                      return (
                        <TableRow key={product.id}>
                          <TableCell align='center'>
                            <Avatar alt={product.sku} src={product.avatar} />
                          </TableCell>
                          <TableCell>{product.productName}</TableCell>
                          <TableCell>{product.category.categoryName}</TableCell>
                          <TableCell align='center'>
                            {product.isBetSelling ? (
                              <CheckCircleOutline sx={{ color: 'green' }} />
                            ) : (
                              <HighlightOff sx={{ color: 'red' }} />
                            )}
                          </TableCell>
                          <TableCell align='center'>
                            {product.isSpecial ? (
                              <CheckCircleOutline sx={{ color: 'green' }} />
                            ) : (
                              <HighlightOff sx={{ color: 'red' }} />
                            )}
                          </TableCell>
                          <TableCell align='center'>{product.price}</TableCell>
                          <TableCell align='right'>
                            <Button variant='contained'>Edit</Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Fragment>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductList;
