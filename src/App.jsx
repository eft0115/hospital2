import {
  AccessTime,
  Air,
  ArrowForward,
  Article,
  Badge,
  CalendarMonth,
  Close,
  DirectionsCar,
  Emergency,
  ExpandMore,
  Favorite,
  HealthAndSafety,
  HelpOutline,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LocalHospital,
  LocationOn,
  Login,
  Menu as MenuIcon,
  Pause,
  PersonAdd,
  PhoneInTalk,
  Place,
  PlayArrow,
  Science,
} from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import heroImage1 from '../material/h1_.png';
import heroImage2 from '../material/h2_.png';
import heroImage3 from '../material/h3_.png';
import { HospitalNavigationBar } from './components/navigation';

const primary = '#0096D1';
const primaryDark = '#005D9B';
const blueSoft = '#A7D9F5';
const green = '#63B32E';
const greenLight = '#8CC63F';
const greenSoft = '#F3FAED';
const orange = '#F5A623';
const orangeDark = '#E38B00';
const orangeSoft = '#FFF7E8';
const ink = '#1F2933';

const menuGroups = [
  ['검진안내', ['배치전·배치후검진', '특수건강검진', '야간근로자검진', '건강검진', '채용검진']],
  ['기업검진', ['출장검진', '산업체검진', '사업장검진', '건설현장검진', '학교·기관검진', '검진 일정 조율']],
  ['개인검진', ['개인 배치전검진 예약', '준비물 안내', '금식 안내', '결과 확인', 'FAQ']],
  ['외래진료', ['내과', '정형외과', '신경외과', '재활치료', '예방접종']],
  ['이용안내', ['진료시간', '오시는 길', '전화문의', '카카오톡 문의', '서류 발급']],
  ['병원소개', ['스마트허브병원 소개', '검진 운영 역량', '의료장비', '공지사항', '블로그 가이드']],
];

const quickMenu = [
  ['기업문의', CalendarMonth],
  ['개인예약', Article],
  ['검진FAQ', HealthAndSafety],
  ['오시는길', LocationOn],
];

const guideLinks = [
  ['출장검진', LocalHospital],
  ['배치전검진', Badge],
  ['특수건강검진', Place],
  ['야간근로자검진', HealthAndSafety],
  ['사업장검진', DirectionsCar],
  ['준비물 안내', Article],
  ['빠른 상담', PhoneInTalk],
  ['오시는 길', Place],
];

const notices = [
  ['배치전검진 준비물 및 결과 확인 안내', '처음 검진을 받는 근로자도 필요한 준비물, 금식 여부, 결과 확인 방법을 빠르게 확인할 수 있습니다.', '2026.05.09'],
  ['기업 출장검진 문의 절차 안내', '검진 인원, 일정, 항목, 결과 전달 방식까지 사업장 검진 운영에 필요한 과정을 안내합니다.', '2026.04.20'],
  ['특수건강검진 대상 여부 확인 안내', '유해인자 노출 업무, 야간근로 등 특수건강검진 대상 여부를 확인하는 기본 기준을 안내합니다.', '2026.04.15'],
  ['야간근로자 검진 예약 안내', '야간근로자 검진이 필요한 사업장과 개인 근로자를 위한 예약 및 상담 경로를 안내합니다.', '2026.03.25'],
];

const centers = [
  ['출장검진', '사업장, 건설현장, 물류센터, 학교와 기관 등 현장 상황에 맞춰 검진 일정과 운영 방식을 조율합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_01.jpg'],
  ['배치전·배치후검진', '근로자가 검진 대상 여부, 준비물, 결과 확인 흐름을 빠르게 이해할 수 있도록 안내합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_02.jpg'],
  ['특수건강검진', '업무 환경과 유해인자에 따라 필요한 특수건강검진 항목과 절차를 명확하게 안내합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_03.jpg'],
  ['기업검진 상담', '검진 인원, 항목, 일정, 결과 전달까지 기업 담당자가 필요한 운영 정보를 빠르게 연결합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_04.jpg'],
  ['지역 외래 진료', '검진과 외래 진료를 가까운 곳에서 편하게 연결해 지역 주민의 일상 의료를 지원합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_05.jpg'],
];

const coreServices = [
  ['출장검진', HealthAndSafety],
  ['배치전검진', Favorite],
  ['특수건강검진', Air],
  ['사업장검진', Science],
];

const clinics = [
  ['기업 출장검진', '검진 일정, 대상, 인원, 항목, 결과 전달까지 사업장 검진 운영에 필요한 과정을 명확하게 안내합니다.', 'https://www.dswhosp.co.kr/common/img/main/section04_img01.jpg'],
  ['배치전·배치후검진', '처음 받는 검진이어도 준비물, 금식 여부, 결과 확인 방법을 쉽게 확인할 수 있습니다.', 'https://www.dswhosp.co.kr/common/img/main/section04_img02.jpg'],
  ['특수건강검진', '유해인자와 업무 환경에 따른 대상 여부와 검진 절차를 이해하기 쉽게 정리합니다.', 'https://www.dswhosp.co.kr/common/img/main/section04_img03.jpg'],
  ['지역 외래 진료', '검진과 외래 진료를 가까운 곳에서 연결해 지역 주민의 일상 의료를 지원합니다.', 'https://www.dswhosp.co.kr/common/img/main/section04_img04.jpg'],
];

const certifications = [
  '산업체·사업장 검진 상담',
  '배치전·배치후검진 안내',
  '특수건강검진 절차 안내',
  '출장검진 일정 조율',
  '검진 준비물·금식 안내',
  '결과 확인 및 사후 안내',
];

const heroSlides = [
  {
    image: heroImage1,
    label: 'SMART HUB HOSPITAL',
    title: (
      <>
        기업과 근로자를 연결하는
        <br />
        산업·현장 건강검진 허브
      </>
    ),
  },
  {
    image: heroImage2,
    label: 'ON-SITE HEALTH CHECKUP',
    title: (
      <>
        사업장과 현장으로 찾아가는
        <br />
        건강검진 인프라
      </>
    ),
  },
  {
    image: heroImage3,
    label: 'CLEAR MEDICAL GUIDE',
    title: (
      <>
        복잡한 검진 절차를
        <br />
        빠르고 명확하게 안내합니다
      </>
    ),
  },
];

const smartHubLocation = {
  lat: 37.3459,
  lng: 126.7374,
};

const smartHubMapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${smartHubLocation.lng - 0.012}%2C${smartHubLocation.lat - 0.007}%2C${smartHubLocation.lng + 0.012}%2C${smartHubLocation.lat + 0.007}&layer=mapnik&marker=${smartHubLocation.lat}%2C${smartHubLocation.lng}`;

function Logo() {
  return (
    <Stack direction="row" spacing={1.3} alignItems="center">
      <Box
        aria-hidden
        sx={{
          width: 46,
          height: 46,
          border: `3px solid ${primary}`,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          color: primary,
          fontSize: 30,
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        +
      </Box>
      <Box>
        <Typography sx={{ fontSize: { xs: 19, md: 23 }, fontWeight: 900, color: ink, lineHeight: 1, letterSpacing: 0 }}>
          스마트허브병원
        </Typography>
        <Typography sx={{ mt: .5, fontSize: 11, fontWeight: 800, color: 'text.secondary', letterSpacing: 0 }}>
          SMART HUB HOSPITAL
        </Typography>
      </Box>
    </Stack>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width:1180px)');

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ minHeight: 97 }}>
          <Logo />
          {isDesktop && <HospitalNavigationBar groups={menuGroups} />}
          <Stack direction="row" alignItems="center" spacing={1}>
            {isDesktop && (
              <>
                <Button variant="text" startIcon={<Login />}>상담조회</Button>
                <Button variant="outlined" startIcon={<PersonAdd />}>검진문의</Button>
              </>
            )}
            <IconButton aria-label="전체 메뉴 열기" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: { xs: 320, sm: 460 }, p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Logo />
            <IconButton aria-label="전체 메뉴 닫기" onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Stack>
          <Divider sx={{ my: 3 }} />
          {menuGroups.map(([label, items]) => (
            <Accordion key={label} elevation={0} disableGutters sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography sx={{ fontWeight: 900 }}>{label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={1}>
                  {items.map((item) => (
                    <Link key={item} href="#" underline="none" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                      {item}
                    </Link>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
}

function QuickRail({ visible }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 18,
        top: '28%',
        zIndex: 20,
        display: { xs: 'none', lg: visible ? 'block' : 'none' },
      }}
    >
      <Stack sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', borderRadius: 2, overflow: 'hidden', boxShadow: '0 12px 32px rgba(31,41,51,.12)' }}>
        {quickMenu.map(([label, icon]) => (
          <Stack key={label} component="a" href="#" alignItems="center" spacing={.6} sx={{ width: 94, p: 1.4, color: ink, textDecoration: 'none', borderBottom: '1px solid', borderColor: 'divider' }}>
            <Box component={icon} sx={{ color: label === '검진FAQ' ? orange : green }} />
            <Typography variant="caption" sx={{ fontWeight: 900 }}>{label}</Typography>
          </Stack>
        ))}
        <Box sx={{ bgcolor: primary, color: 'white', textAlign: 'center', py: 1.4, borderTop: `3px solid ${greenLight}` }}>
          <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>검진<br />상담</Typography>
        </Box>
        <Button size="small" href="#top" sx={{ color: ink }}>TOP</Button>
      </Stack>
    </Box>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const goToSlide = (direction) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <Box id="top" component="section" sx={{ position: 'relative', minHeight: { xs: 620, md: 720 }, mb: 13.75, overflow: 'visible', color: 'white' }}>
      <Box sx={{ position: 'absolute', inset: 0 }}>
        {heroSlides.map((slide, index) => (
          <Box
            key={slide.image}
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: index === activeSlide ? 1 : 0,
              transition: 'opacity 900ms ease',
              pointerEvents: index === activeSlide ? 'auto' : 'none',
              '@keyframes heroZoomIn': {
                from: { transform: 'scale(1)' },
                to: { transform: 'scale(1.08)' },
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(90deg, rgba(0,37,58,.68), rgba(0,37,58,.36), rgba(0,37,58,.08)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transformOrigin: 'center center',
                animation: index === activeSlide ? 'heroZoomIn 6.2s ease-out forwards' : 'none',
              }}
            />
            <Container maxWidth="xl" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', pt: 10 }}>
              <Box sx={{ maxWidth: 860 }}>
                <Typography component="h5" sx={{ fontWeight: 900, color: blueSoft, letterSpacing: 0, mb: 2 }}>
                  {slide.label}
                </Typography>
                <Typography component="h1" sx={{ fontSize: { xs: 42, md: 68 }, fontWeight: 900, lineHeight: 1.14, letterSpacing: 0 }}>
                  {slide.title}
                </Typography>
                <Typography sx={{ mt: 3, maxWidth: 660, fontSize: { xs: 17, md: 20 }, color: 'rgba(255,255,255,.86)', lineHeight: 1.7 }}>
                  기업 담당자와 개인 근로자가 복잡한 검진 절차를 빠르게 이해하고, 병원 방문 또는 출장검진 문의까지 명확하게 이동할 수 있도록 돕습니다.
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 3.5 }}>
                  <IconButton aria-label="이전 슬라이드" size="small" onClick={() => goToSlide(-1)} sx={{ width: 34, height: 34, color: 'white', border: '1px solid rgba(255,255,255,.45)' }}>
                    <ArrowForward sx={{ fontSize: 17, transform: 'rotate(180deg)' }} />
                  </IconButton>
                  <IconButton aria-label="다음 슬라이드" size="small" onClick={() => goToSlide(1)} sx={{ width: 34, height: 34, color: 'white', border: '1px solid rgba(255,255,255,.45)' }}>
                    <ArrowForward sx={{ fontSize: 17 }} />
                  </IconButton>
                  <IconButton aria-label={isPlaying ? '슬라이드 정지' : '슬라이드 재생'} size="small" onClick={() => setIsPlaying((playing) => !playing)} sx={{ width: 34, height: 34, color: 'white', border: '1px solid rgba(255,255,255,.45)' }}>
                    {isPlaying ? <Pause sx={{ fontSize: 17 }} /> : <PlayArrow sx={{ fontSize: 18 }} />}
                  </IconButton>
                  <Typography sx={{ color: 'white', fontWeight: 900, ml: 1, fontSize: 14 }}>
                    {activeSlide + 1} / {heroSlides.length}
                  </Typography>
                </Stack>
              </Box>
            </Container>
          </Box>
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', minHeight: { xs: 620, md: 720 }, pointerEvents: 'none' }}>
        <Grid container spacing={0} sx={{ position: 'absolute', left: 'calc((100vw - 100%) / -2)', top: '100%', width: '100vw !important', maxWidth: '100vw', m: 0, pointerEvents: 'auto' }}>
          <Grid size={6} sx={{ flexBasis: '50%', maxWidth: '50%', flexGrow: 0 }}>
            <Box sx={{ bgcolor: primary, color: 'white', minHeight: 110 }}>
              <Box
                component="a"
                href="#"
                sx={{
                  display: 'block',
                  height: '100%',
                  py: { xs: 2.2, md: 3 },
                  pr: { xs: 2.2, md: 3 },
                  pl: {
                    xs: 2,
                    sm: 3,
                    md: 'max(24px, calc((100vw - 1536px) / 2 + 24px))',
                  },
                  color: 'inherit',
                  textDecoration: 'none',
                  transition: 'background-color 180ms ease',
                  '& .cta-rule': {
                    transition: 'width 180ms ease, background-color 180ms ease',
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,.12)',
                  },
                  '&:hover .cta-rule': {
                    width: 46,
                    bgcolor: 'rgba(255,255,255,.95)',
                  },
                }}
              >
                <Typography component="h2" sx={{ fontSize: { xs: 17, sm: 20, md: 22 }, fontWeight: 900 }}>
                  기업 출장·특수검진 문의
                  <Box className="cta-rule" component="span" aria-hidden sx={{ display: 'inline-block', width: 30, height: 1, ml: 1.4, mb: .6, bgcolor: 'rgba(255,255,255,.75)' }} />
                </Typography>
                <Typography component="p" sx={{ mt: .8, color: 'rgba(255,255,255,.82)', fontSize: { xs: 13, sm: 14, md: 16 } }}>
                  일정, 인원, 항목, 결과 전달 방식까지 상담합니다.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={6} sx={{ flexBasis: '50%', maxWidth: '50%', flexGrow: 0 }}>
            <Box sx={{ bgcolor: green, color: 'white', minHeight: 110 }}>
              <Box
                component="a"
                href="#"
                sx={{
                  display: 'block',
                  height: '100%',
                  py: { xs: 2.2, md: 3 },
                  pr: { xs: 2.2, md: 3 },
                  pl: { xs: 3.4, md: 7 },
                  color: 'inherit',
                  textDecoration: 'none',
                  transition: 'background-color 180ms ease, padding-left 180ms ease',
                  '& .cta-rule': {
                    transition: 'width 180ms ease, background-color 180ms ease',
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,.12)',
                    pl: { xs: 4.1, md: 8.2 },
                  },
                  '&:hover .cta-rule': {
                    width: 46,
                    bgcolor: 'rgba(255,255,255,.95)',
                  },
                }}
              >
                <Typography component="h2" sx={{ fontSize: { xs: 17, sm: 20, md: 22 }, fontWeight: 900 }}>
                  개인 배치전검진 예약
                  <Box className="cta-rule" component="span" aria-hidden sx={{ display: 'inline-block', width: 30, height: 1, ml: 1.4, mb: .6, bgcolor: 'rgba(255,255,255,.75)' }} />
                </Typography>
                <Typography component="p" sx={{ mt: .8, color: 'rgba(255,255,255,.74)', fontSize: { xs: 13, sm: 14, md: 16 } }}>
                  준비물, 금식, 결과 확인 방법을 안내합니다.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function GuideMenu() {
  return (
    <Container id="guide-menu" maxWidth="xl" component="section" sx={{ py: { xs: 5, md: 7 } }}>
      <Grid container spacing={1.5}>
        {guideLinks.map(([label, icon]) => (
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 1.5 }} key={label}>
            <Stack
              alignItems="center"
              justifyContent="center"
              spacing={1.2}
              sx={{
                minHeight: 130,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                bgcolor: 'white',
                cursor: 'pointer',
                transition: 'border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease',
                '& .guide-menu-icon': { transition: 'color 160ms ease, transform 160ms ease' },
                '&:hover': {
                  borderColor: green,
                  bgcolor: greenSoft,
                  boxShadow: '0 10px 24px rgba(20,27,34,.08)',
                  transform: 'translateY(-2px)',
                },
                '&:hover .guide-menu-icon': {
                  color: green,
                  transform: 'translateY(-3px) scale(1.08)',
                },
              }}
            >
              <Box className="guide-menu-icon" component={icon} sx={{ fontSize: 34, color: green }} />
              <Typography sx={{ fontWeight: 900, textAlign: 'center' }}>{label}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function SectionTitle({ title, action }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
      <Typography component="h2" sx={{ fontSize: { xs: 30, md: 42 }, fontWeight: 900, color: ink, letterSpacing: 0 }}>
        {title}
      </Typography>
      {action && <Button endIcon={<ArrowForward />}>{action}</Button>}
    </Stack>
  );
}

function NavControls() {
  return (
    <Stack direction="row" spacing={0} aria-label="carousel controls">
      {[KeyboardArrowLeft, KeyboardArrowRight].map((Icon, index) => (
        <IconButton
          key={index === 0 ? 'prev' : 'next'}
          size="small"
          sx={{
            width: 34,
            height: 34,
            border: '1px solid',
            borderColor: '#D8DDE2',
            borderRadius: 0,
            ml: index === 0 ? 0 : '-1px',
            color: ink,
            bgcolor: 'white',
            '&:hover': { bgcolor: '#F6F8FA' },
          }}
        >
          <Icon fontSize="small" />
        </IconButton>
      ))}
    </Stack>
  );
}

function NoticeAndCenters() {
  const featuredNotices = notices.slice(0, 2);
  const featuredCenter = centers[3];

  return (
    <Box component="section" sx={{ bgcolor: 'white', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <Grid container columnSpacing={{ xs: 4, lg: 6 }} rowSpacing={5} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3.2 }}>
              <Typography component="h2" sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 900, color: ink, letterSpacing: 0 }}>
                공지사항
              </Typography>
              <NavControls />
            </Stack>
            <Box sx={{ minHeight: { xs: 'auto', md: 292 }, border: '1px solid', borderColor: '#D8DDE2', bgcolor: 'white', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, alignItems: 'stretch' }}>
              {featuredNotices.map(([title, body, date], index) => (
                <Box key={title} sx={{ px: { xs: 3, md: 4.4 }, py: { xs: 3.2, md: 3.8 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: { xs: 0, md: index === 1 ? '1px solid #E4E7EA' : 0 }, borderTop: { xs: index === 1 ? '1px solid #E4E7EA' : 0, md: 0 }, bgcolor: index === 0 ? orangeSoft : 'white' }}>
                  <Box>
                    <Typography sx={{ fontWeight: 900, fontSize: { xs: 21, md: 24 }, color: index === 0 ? orangeDark : '#252525', lineHeight: 1.25 }}>
                      {title}
                    </Typography>
                    <Typography sx={{ mt: { xs: 2.6, md: 4.5 }, color: '#555', fontSize: { xs: 14, md: 16 }, lineHeight: 1.7, maxWidth: 330, wordBreak: 'keep-all' }}>
                      {body}
                    </Typography>
                  </Box>
                  <Typography sx={{ mt: 3, color: '#7B8288', fontSize: 15 }}>
                    {date}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3.2 }}>
              <Typography component="h2" sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 900, color: ink, letterSpacing: 0 }}>
                핵심 안내
              </Typography>
              <NavControls />
            </Stack>
            <Box sx={{ minHeight: { xs: 'auto', md: 292 }, border: '2px solid', borderColor: primary, bgcolor: 'white', px: { xs: 2.4, sm: 3.2 }, py: { xs: 3, sm: 3.8 }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '214px 1fr' }, columnGap: { xs: 0, sm: 3 }, rowGap: 2.2, alignItems: 'center', boxShadow: `inset 0 4px 0 ${greenLight}` }}>
              <Box component="img" src={featuredCenter[2]} alt={featuredCenter[0]} sx={{ width: '100%', maxWidth: { xs: '100%', sm: 214 }, aspectRatio: '1 / 1', objectFit: 'cover', display: 'block' }} />
              <Box>
                <Typography sx={{ fontWeight: 900, color: primaryDark, fontSize: { xs: 22, md: 26 }, lineHeight: 1.2 }}>
                  {featuredCenter[0]}
                </Typography>
                <Typography sx={{ mt: 1.8, color: '#2B2B2B', fontSize: { xs: 14, md: 16 }, lineHeight: 1.7, wordBreak: 'keep-all' }}>
                  {featuredCenter[1]}
                </Typography>
                <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 2.4 }}>
                  {centers.map(([title]) => (
                    <Box key={title} aria-hidden sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: title === featuredCenter[0] ? '#767676' : '#D6D6D6' }} />
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Departments() {
  return (
    <Container maxWidth="xl" component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: { xs: 2.5, md: 3 } }}>
        <Typography component="h2" sx={{ fontSize: { xs: 30, md: 36 }, fontWeight: 900, color: ink, letterSpacing: 0 }}>
          핵심 검진
        </Typography>
        <NavControls />
      </Stack>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: 1.6, md: 3 } }}>
        {coreServices.map(([service, Icon], index) => (
          <Box key={service} component="a" href="#" sx={{ minHeight: { xs: 210, md: 240 }, p: { xs: 3, md: 3.6 }, border: '1px solid', borderColor: '#D8DDE2', borderTop: `2px solid ${index === 0 ? primary : index === 1 ? green : index === 2 ? orange : primaryDark}`, bgcolor: index === 1 ? greenSoft : index === 2 ? orangeSoft : '#F3F5F7', color: ink, textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease', '&:hover': { borderColor: index === 1 ? green : index === 2 ? orange : primary, boxShadow: '0 12px 28px rgba(20,27,34,.1)', transform: 'translateY(-2px)' } }}>
            <Box>
              <Typography sx={{ color: index === 1 ? green : index === 2 ? orangeDark : primary, fontSize: 13, fontWeight: 900 }}>
                {String(index + 1).padStart(2, '0')}/{String(coreServices.length).padStart(2, '0')}
              </Typography>
              <Typography sx={{ mt: 1, fontSize: { xs: 22, md: 24 }, fontWeight: 900, lineHeight: 1.25, color: '#2B2B2B', wordBreak: 'keep-all' }}>
                {service}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={.5} sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: 15, color: '#555', fontWeight: 700 }}>바로가기</Typography>
                <ArrowForward sx={{ fontSize: 17, color: '#2B2B2B' }} />
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box component={Icon} sx={{ fontSize: { xs: 58, md: 70 }, color: index === 1 ? green : index === 2 ? orange : primary, opacity: .88 }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

function Clinics() {
  return (
    <Box component="section" sx={{ bgcolor: 'white', py: { xs: 6, md: 9 } }}>
      <Container maxWidth="xl">
        <Typography component="h2" sx={{ mb: { xs: 3.5, md: 4 }, fontSize: { xs: 30, md: 40 }, fontWeight: 900, color: ink, textAlign: 'center', letterSpacing: 0 }}>
          검진 서비스
        </Typography>
        <Grid container spacing={0}>
          {clinics.map(([title, body, image], index) => {
            const isReversedRow = Math.floor(index / 2) % 2 === 1;

            return (
              <Grid size={{ xs: 12, lg: 6 }} key={title}>
                <Box component="a" href="#" sx={{ minHeight: { xs: 'auto', md: 300 }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, color: ink, textDecoration: 'none', overflow: 'hidden', '& .clinic-image': { transition: 'transform 420ms ease' }, '& .clinic-copy': { transition: 'background-color 180ms ease, color 180ms ease' }, '& .clinic-copy-text, & .clinic-button': { transition: 'color 180ms ease, border-color 180ms ease, background-color 180ms ease' }, '&:hover .clinic-image': { transform: 'scale(1.08)' }, '&:hover .clinic-copy': { bgcolor: index % 2 === 0 ? primary : green, color: 'white' }, '&:hover .clinic-copy-text': { color: 'rgba(255,255,255,.82)' }, '&:hover .clinic-button': { color: 'white', borderColor: 'rgba(255,255,255,.9)', bgcolor: 'rgba(255,255,255,.08)' } }}>
                  <Box sx={{ minHeight: { xs: 220, md: 300 }, overflow: 'hidden', order: { xs: 0, sm: isReversedRow ? 2 : 0 } }}>
                    <Box className="clinic-image" component="img" src={image} alt={title} sx={{ width: '100%', height: '100%', minHeight: { xs: 220, md: 300 }, objectFit: 'cover', display: 'block' }} />
                  </Box>
                  <Box className="clinic-copy" sx={{ minHeight: { xs: 260, md: 300 }, px: { xs: 3.2, md: 5 }, py: { xs: 4, md: 5.5 }, bgcolor: index === 2 ? orangeSoft : '#F1F3F5', order: { xs: 1, sm: isReversedRow ? 1 : 0 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Typography sx={{ fontSize: { xs: 23, md: 25 }, fontWeight: 900, color: 'inherit', letterSpacing: 0 }}>
                      {title}
                    </Typography>
                    <Typography className="clinic-copy-text" sx={{ mt: 2.2, color: '#555', fontSize: 16, lineHeight: 1.65, wordBreak: 'keep-all', maxWidth: 290 }}>
                      {body}
                    </Typography>
                    <Button className="clinic-button" variant="outlined" sx={{ mt: 4, px: 2.5, py: 1.1, borderRadius: 999, borderColor: index % 2 === 0 ? primary : green, color: index % 2 === 0 ? primary : green, fontWeight: 900 }}>
                      {title} 바로가기
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

function NaverMapPanel() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
  const [isMapReady, setIsMapReady] = useState(false);
  const [, setMapStatus] = useState(() => (naverMapClientId ? 'loading' : 'missing-key'));

  useEffect(() => {
    if (!naverMapClientId || !mapRef.current) {
      return undefined;
    }

    let isDisposed = false;

    const initializeMap = () => {
      if (isDisposed || !window.naver?.maps || !mapRef.current) {
        return;
      }

      const position = new window.naver.maps.LatLng(smartHubLocation.lat, smartHubLocation.lng);
      const map = new window.naver.maps.Map(mapRef.current, {
        center: position,
        zoom: 16,
        scaleControl: false,
        logoControl: true,
        mapDataControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      });

      const marker = new window.naver.maps.Marker({
        position,
        map,
        title: '스마트허브병원',
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: '<div style="padding:12px 14px;font-size:14px;font-weight:700;color:#1F2933;">스마트허브병원</div>',
        borderWidth: 0,
        backgroundColor: '#FFFFFF',
        anchorSize: new window.naver.maps.Size(10, 8),
        pixelOffset: new window.naver.maps.Point(0, -12),
      });

      infoWindow.open(map, marker);
      mapInstanceRef.current = map;
      setIsMapReady(true);
      setMapStatus('ready');
    };

    if (window.naver?.maps) {
      initializeMap();
    } else {
      const existingScript = document.querySelector('script[data-naver-map-sdk="true"]');

      if (existingScript) {
        existingScript.addEventListener('load', initializeMap, { once: true });
        existingScript.addEventListener('error', () => setMapStatus('error'), { once: true });
      } else {
        const script = document.createElement('script');
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverMapClientId}`;
        script.async = true;
        script.dataset.naverMapSdk = 'true';
        script.addEventListener('load', initializeMap);
        script.addEventListener('error', () => setMapStatus('error'));
        document.head.appendChild(script);
      }
    }

    return () => {
      isDisposed = true;
      mapInstanceRef.current = null;
      setIsMapReady(false);
    };
  }, [naverMapClientId]);

  return (
    <Box
      sx={{
        minHeight: { xs: 360, md: 480 },
        borderRadius: 1,
        border: '1px solid',
        borderColor: isMapReady ? green : 'divider',
        bgcolor: '#EAF6FC',
        color: ink,
        overflow: 'hidden',
        position: 'relative',
        transition: 'border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
        '&:hover': {
          borderColor: green,
          boxShadow: '0 16px 32px rgba(20,27,34,.12)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: isMapReady ? 3 : 0,
          opacity: isMapReady ? 1 : 0,
          transition: 'opacity 180ms ease',
        }}
      >
        <Box
          ref={mapRef}
          aria-label="스마트허브병원 네이버 지도"
          sx={{
            width: '100%',
            height: '100%',
            minHeight: { xs: 360, md: 480 },
          }}
        />
      </Box>
      <Box
        component="iframe"
        title="스마트허브병원 위치 지도"
        src={smartHubMapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 0,
          zIndex: 1,
          opacity: isMapReady ? 0 : 1,
          transition: 'opacity 180ms ease',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 16, md: 18 },
          bottom: { xs: 16, md: 18 },
          width: { xs: 'calc(100% - 32px)', sm: 360 },
          p: { xs: 2.2, md: 2.5 },
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          borderRadius: 1,
          bgcolor: 'rgba(255,255,255,.94)',
          border: '1px solid',
          borderColor: '#D8DDE2',
          boxShadow: '0 12px 28px rgba(20,27,34,.14)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.1}>
          <AccessTime sx={{ color: primary, fontSize: 28 }} />
          <Typography sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 900, letterSpacing: 0 }}>
            진료시간
          </Typography>
        </Stack>
        <Stack spacing={.85} sx={{ color: '#3D464D', fontSize: { xs: 14, md: 15 }, fontWeight: 800, lineHeight: 1.55 }}>
          <Typography sx={{ font: 'inherit' }}>평일 : 오전 8시 부터 오후 5시</Typography>
          <Typography sx={{ font: 'inherit' }}>토요일 : 오전 8시 부터 12:00(정오)</Typography>
          <Typography sx={{ font: 'inherit' }}>점심시간 12:00 - 13:00</Typography>
        </Stack>
      </Box>
      {isMapReady ? (
        <Stack
          component="a"
          href="https://map.naver.com/p/search/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%97%88%EB%B8%8C%EB%B3%91%EC%9B%90"
          target="_blank"
          rel="noopener noreferrer"
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            position: 'absolute',
            left: 18,
            bottom: 18,
            zIndex: 3,
            px: 2,
            py: 1,
            borderRadius: 999,
            bgcolor: 'white',
            color: primaryDark,
            textDecoration: 'none',
            border: '1px solid',
            borderColor: '#D8DDE2',
            boxShadow: '0 8px 24px rgba(20,27,34,.12)',
          }}
        >
          <Place sx={{ fontSize: 19 }} />
          <Typography sx={{ fontSize: 14, fontWeight: 900 }}>네이버지도</Typography>
        </Stack>
      ) : null}
    </Box>
  );
}

function Support() {
  const supportLinks = [
    ['공지사항', Article],
    ['1:1 빠른상담 연결', PhoneInTalk],
    ['장비소개', Science],
    ['궁금한 것은 다 여기!', HelpOutline],
  ];

  return (
    <Container maxWidth="xl" component="section" sx={{ py: { xs: 6, md: 9 } }}>
      <SectionTitle title="고객지원" />
      <Grid container spacing={2.5} alignItems="stretch">
        <Grid size={{ xs: 12, lg: 7.2 }}>
          <NaverMapPanel />
        </Grid>
        <Grid size={{ xs: 12, lg: 4.8 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5, height: '100%' }}>
            {supportLinks.map(([label, icon]) => (
              <Stack key={label} component="a" href="#" sx={{ p: { xs: 2.4, md: 3 }, minHeight: { xs: 142, md: '100%' }, border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: label.includes('궁금') ? orangeSoft : 'white', color: ink, textDecoration: 'none', justifyContent: 'space-between', transition: 'border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease', '& .support-link-icon': { transition: 'color 160ms ease, transform 160ms ease' }, '&:hover': { borderColor: label.includes('상담') || label.includes('궁금') ? orange : green, bgcolor: label.includes('상담') || label.includes('궁금') ? orangeSoft : greenSoft, boxShadow: '0 10px 24px rgba(20,27,34,.08)', transform: 'translateY(-2px)' }, '&:hover .support-link-icon': { color: label.includes('상담') || label.includes('궁금') ? orangeDark : green, transform: 'translateY(-3px) scale(1.08)' } }}>
                <Box component={icon} className="support-link-icon" sx={{ color: label.includes('상담') || label.includes('궁금') ? orange : green, fontSize: 34 }} />
                <Typography sx={{ fontWeight: 900, fontSize: { xs: 17, md: 20 }, lineHeight: 1.25, wordBreak: 'keep-all' }}>{label}</Typography>
              </Stack>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1F2933', color: 'white', py: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={1.5} sx={{ mb: 3 }}>
          {certifications.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={item}>
              <Box sx={{ height: '100%', p: 1.8, border: '1px solid rgba(255,255,255,.14)', borderRadius: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 900 }}>{item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ borderColor: 'rgba(255,255,255,.14)', my: 3 }} />
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
          {['이용약관', '개인정보처리방침', '검진 준비 안내', '기업검진 문의', '오시는 길'].map((item) => (
            <Link key={item} href="#" underline="none" sx={{ color: 'rgba(255,255,255,.8)', fontWeight: 800 }}>{item}</Link>
          ))}
        </Stack>
        <Typography sx={{ fontWeight: 900 }}>스마트허브병원</Typography>
        <Typography sx={{ mt: 1, color: 'rgba(255,255,255,.72)' }}>
          기업과 근로자의 검진 문제를 명확히 정리하는 산업·현장 건강검진 허브입니다.
        </Typography>
        <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'rgba(255,255,255,.55)' }}>
          Copyright (C) Smart Hub Hospital. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default function App() {
  const [showQuickRail, setShowQuickRail] = useState(false);

  useEffect(() => {
    const updateQuickRail = () => {
      const guideMenu = document.getElementById('guide-menu');
      if (!guideMenu) return;

      const { top } = guideMenu.getBoundingClientRect();
      setShowQuickRail(top <= window.innerHeight * 0.72);
    };

    updateQuickRail();
    window.addEventListener('scroll', updateQuickRail, { passive: true });
    window.addEventListener('resize', updateQuickRail);

    return () => {
      window.removeEventListener('scroll', updateQuickRail);
      window.removeEventListener('resize', updateQuickRail);
    };
  }, []);

  return (
    <>
      <Header />
      <QuickRail visible={showQuickRail} />
      <main>
        <Hero />
        <GuideMenu />
        <NoticeAndCenters />
        <Departments />
        <Clinics />
        <Support />
      </main>
      <Footer />
      <Box sx={{ display: { xs: 'grid', md: 'none' }, gridTemplateColumns: '1fr 1fr', gap: 1, position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 30, p: 1, bgcolor: 'rgba(255,255,255,.95)', border: '1px solid', borderColor: 'divider', borderRadius: 2, boxShadow: '0 8px 24px rgba(31,41,51,.12)' }}>
        <Button variant="contained" startIcon={<CalendarMonth />}>기업문의</Button>
        <Button variant="outlined" startIcon={<Emergency />}>개인예약</Button>
      </Box>
    </>
  );
}
