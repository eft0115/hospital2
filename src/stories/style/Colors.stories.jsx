import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const SectionTitle = ({ title, description }) => (
  <Box sx={ { borderBottom: '1px solid', borderColor: 'divider', mb: 2, pb: 1 } }>
    <Typography variant="h6" sx={ { fontWeight: 700 } }>
      { title }
    </Typography>
    { description ? (
      <Typography variant="body2" color="text.secondary">
        { description }
      </Typography>
    ) : null }
  </Box>
);

const ColorSwatch = ({ label, value, token }) => (
  <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
    <Box
      aria-label={ `${label} color swatch` }
      sx={ {
        width: 56,
        height: 36,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: value,
        flexShrink: 0,
      } }
    />
    <Box>
      <Typography variant="body2" sx={ { fontWeight: 700 } }>
        { token }
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={ { fontFamily: 'monospace' } }>
        { value }
      </Typography>
    </Box>
  </Box>
);

const colorRows = (theme) => [
  {
    token: 'primary.main',
    value: theme.palette.primary.main,
    label: '메인 하늘색/블루',
    usage: '대표 CTA, 주요 링크, 활성 상태',
  },
  {
    token: 'primary.dark',
    value: theme.palette.primary.dark,
    label: '진한 블루',
    usage: 'CTA hover, 헤더, 신뢰 강조',
  },
  {
    token: 'primary.light',
    value: theme.palette.primary.light,
    label: '밝은 블루',
    usage: '보조 강조, 하이라이트',
  },
  {
    token: 'info.light',
    value: theme.palette.info.light,
    label: '연한 블루 포인트',
    usage: '안내 패널, 부드러운 섹션 포인트',
  },
  {
    token: 'secondary.main',
    value: theme.palette.secondary.main,
    label: '메인 그린',
    usage: '건강, 완료, 긍정 상태',
  },
  {
    token: 'secondary.light',
    value: theme.palette.secondary.light,
    label: '밝은 라임그린',
    usage: '보조 배지, 긍정 보조 강조',
  },
  {
    token: 'warning.main',
    value: theme.palette.warning.main,
    label: '메인 오렌지',
    usage: '주의, 중요 안내, 긴급도',
  },
  {
    token: 'warning.dark',
    value: theme.palette.warning.dark,
    label: '딥 오렌지',
    usage: '오렌지 hover, 강한 주의 강조',
  },
  {
    token: 'background.default',
    value: theme.palette.background.default,
    label: '화이트',
    usage: '기본 배경',
  },
  {
    token: 'grey.100',
    value: theme.palette.grey[100],
    label: '연회색 배경',
    usage: '보조 배경, 코드 블록, 표면 구분',
  },
];

export default {
  title: 'Style/Colors',
  parameters: {
    layout: 'padded',
  },
};

export const Docs = {
  render: () => {
    const theme = useTheme();
    const rows = colorRows(theme);

    return (
      <Box sx={ { maxWidth: 1100, mx: 'auto', py: 4 } }>
        <Typography variant="overline" color="primary.main">
          SmartHub Design System
        </Typography>
        <Typography variant="h4" sx={ { fontWeight: 900, mb: 1 } }>
          Color System
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 5 } }>
          스마트허브병원 브랜드에 사용하는 블루, 그린, 오렌지, 배경 색상 토큰입니다.
        </Typography>

        <SectionTitle title="토큰 구조" description="theme.palette에서 사용하는 주요 색상 경로입니다." />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            border: '1px solid',
            borderColor: 'divider',
            p: 2,
            mb: 5,
            fontSize: 13,
            fontFamily: 'monospace',
            overflow: 'auto',
          } }
        >
{`palette
├─ primary: main / dark / light
├─ secondary: main / light
├─ warning: main / dark
├─ info: light
├─ background: default / paper
└─ grey: 100`}
        </Box>

        <SectionTitle title="토큰 값" description="주요 토큰의 실제 값과 사용 목적입니다." />
        <TableContainer sx={ { mb: 5 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 700 } }>Color</TableCell>
                <TableCell sx={ { fontWeight: 700 } }>Name</TableCell>
                <TableCell sx={ { fontWeight: 700 } }>Usage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { rows.map((row) => (
                <TableRow key={ row.token }>
                  <TableCell>
                    <ColorSwatch label={ row.label } value={ row.value } token={ row.token } />
                  </TableCell>
                  <TableCell>{ row.label }</TableCell>
                  <TableCell sx={ { color: 'text.secondary' } }>{ row.usage }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="사용 예시" description="MUI sx prop에서의 토큰 활용 예시입니다." />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            border: '1px solid',
            borderColor: 'divider',
            p: 2,
            mb: 5,
            fontSize: 13,
            fontFamily: 'monospace',
            overflow: 'auto',
          } }
        >
{`<Box sx={ { backgroundColor: 'primary.main', color: 'primary.contrastText' } } />
<Box sx={ { backgroundColor: 'secondary.main', color: 'secondary.contrastText' } } />
<Typography sx={ { color: 'warning.main' } }>중요 안내</Typography>
<Box sx={ { backgroundColor: 'info.light' } }>연한 블루 안내 패널</Box>`}
        </Box>

        <SectionTitle title="Vibe Coding Prompt" description="AI 코딩 도구에서 활용할 수 있는 프롬프트 예시입니다." />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.900',
            color: 'common.white',
            p: 2,
            fontSize: 13,
            fontFamily: 'monospace',
            overflow: 'auto',
          } }
        >
{`"primary.main (#0096D1)을 사용해서 스마트허브병원 CTA 버튼을 만들어줘.
hover 상태는 primary.dark (#005D9B), 완료 상태는 secondary.main (#63B32E)을 사용해줘."`}
        </Box>
      </Box>
    );
  },
};
