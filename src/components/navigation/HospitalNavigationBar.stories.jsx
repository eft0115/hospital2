import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { HospitalNavigationBar, defaultMenuGroups } from './HospitalNavigationBar';
import { DocumentTitle, PageContainer } from '../storybookDocumentation';
import { SectionContainer } from '../container/SectionContainer';

export default {
  title: 'Component/10. Navigation/HospitalNavigationBar',
  component: HospitalNavigationBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    groups: {
      control: 'object',
      description: '상단 메뉴와 하위 메뉴 그룹 데이터',
    },
    activeId: {
      control: 'text',
      description: '초기 활성 메뉴 ID',
    },
    panelMaxWidth: {
      control: { type: 'number', min: 960, max: 1440, step: 20 },
      description: '메가 메뉴 패널 내부 최대 너비',
    },
    ariaLabel: {
      control: 'text',
      description: 'nav aria-label',
    },
  },
};

const Logo = () => (
  <Stack direction="row" spacing={1.2} alignItems="center">
    <Box
      aria-hidden
      sx={ {
        width: 40,
        height: 40,
        border: '3px solid',
        borderColor: 'secondary.main',
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        color: 'secondary.main',
        fontSize: 26,
        fontWeight: 900,
        lineHeight: 1,
      } }
    >
      +
    </Box>
    <Box>
      <Typography sx={ { fontSize: 20, fontWeight: 900, lineHeight: 1 } }>
        스마트허브병원
      </Typography>
      <Typography sx={ { mt: 0.4, fontSize: 10, fontWeight: 800, color: 'text.secondary' } }>
        SMART HUB HOSPITAL
      </Typography>
    </Box>
  </Stack>
);

const HeaderPreview = ({ activeId }) => (
  <Box sx={ { minHeight: 520, backgroundColor: 'grey.100' } }>
    <Box
      sx={ {
        position: 'relative',
        zIndex: 2,
        height: 82,
        px: 5,
        display: 'grid',
        gridTemplateColumns: '240px minmax(0, 1fr) 220px',
        alignItems: 'center',
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      } }
    >
      <Logo />
      <HospitalNavigationBar groups={ defaultMenuGroups } activeId={ activeId } />
      <Stack direction="row" spacing={1.5} justifyContent="flex-end">
        <Typography sx={ { fontSize: 14, fontWeight: 800 } }>로그인</Typography>
        <Typography sx={ { fontSize: 14, fontWeight: 800, color: 'primary.main' } }>예약문의</Typography>
      </Stack>
    </Box>
    <Box sx={ { p: 5 } }>
      <Typography variant="h4" sx={ { fontWeight: 900 } }>
        메가 메뉴 미리보기
      </Typography>
      <Typography color="text.secondary" sx={ { mt: 1 } }>
        상단 메뉴에 마우스를 올리면 Nike 예시처럼 넓은 하위 메뉴 패널이 열립니다.
      </Typography>
    </Box>
  </Box>
);

export const Default = {
  args: {
    groups: defaultMenuGroups,
    activeId: 'guide',
    panelMaxWidth: 1180,
    ariaLabel: '주요 메뉴',
  },
};

export const HospitalHeader = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Hospital Navigation Bar"
        status="Ready"
        note="Mega navigation for hospital menu groups"
        brandName="Navigation"
        systemName="HospitalNavigationBar"
        version="1.0"
      />
      <SectionContainer sx={ { py: 0 } }>
        <HeaderPreview activeId="guide" />
      </SectionContainer>
    </PageContainer>
  ),
};
