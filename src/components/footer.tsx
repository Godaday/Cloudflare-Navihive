import { Box, Stack, Typography, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 2,
        borderTop: '1px dashed',
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{
          color: 'text.secondary',
          fontSize: '0.85rem',
          rowGap: 1,
        }}
      >
        {/* 环境说明 */}
        <Typography variant="caption">🚀 dev：开发环境</Typography>
        <Typography variant="caption">🧪 staging：客户测试环境</Typography>
        <Typography variant="caption">🏭 prod：客户生产环境</Typography>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 1, display: { xs: 'none', sm: 'block' } }}
        />

        {/* 网络属性 */}
        <Typography variant="caption">🔒 内网</Typography>
        <Typography variant="caption">🌐 公网</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
