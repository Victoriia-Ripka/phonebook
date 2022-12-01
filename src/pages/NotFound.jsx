import PageNotFound from '../img/NotFoundPage.png';
import { Box } from '@mui/material';

export default function NotFound() {
  return (
    <Box sx={{ width: '100%' }}>
      <img src={PageNotFound} alt="Page Not Found" width="100%"/>
    </Box>
  );
}
