import {
  AccessTime,
  ArrowForward,
  Article,
  Badge,
  CalendarMonth,
  Call,
  Close,
  DirectionsCar,
  Emergency,
  ExpandMore,
  Facebook,
  Air,
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
import { useEffect, useState } from 'react';
import heroImage1 from '../material/h1_.png';
import heroImage2 from '../material/h2_.png';
import heroImage3 from '../material/h3_.png';
import { HospitalNavigationBar } from './components/navigation';

const green = '#008038';
const ink = '#141B22';

const menuGroups = [
  ['이용안내', ['층별안내', '전화번호안내', '주차안내', '편의시설', '찾아오시는길', '장례식장']],
  ['진료안내', ['진료과/의료진', '온라인예약', '외래진료', '응급진료', '입/퇴원안내', '비급여조회', '제증명신청']],
  ['센터안내', ['종합검진센터', '건강관리센터', '응급의료센터', '인공신장센터', '척추관절센터', '진료협력센터']],
  ['전문클리닉', ['전문클리닉소개', '의료장비소개', '건강정보']],
  ['병원소개', ['이사장인사말', '미션/비전', '연혁', '조직도', 'HI', '원가']],
  ['병원광장', ['공지사항', '병원소식', '서식자료실', '고객의소리', '칭찬합시다', '고객센터', '채용정보']],
];

const quickMenu = [
  ['온라인예약', CalendarMonth],
  ['병원소식', Article],
  ['건강정보', HealthAndSafety],
  ['오시는길', LocationOn],
];

const guideLinks = [
  ['진료과/의료진', LocalHospital],
  ['면회안내', Badge],
  ['층별안내', Place],
  ['편의시설', HealthAndSafety],
  ['주차안내', DirectionsCar],
  ['제증명', Article],
  ['전화번호', PhoneInTalk],
  ['장례식장', Place],
];

const notices = [
  ['대체공휴일 정상진료 안내(부처님 오신 날 대체공휴일 5/25)', '5월 25일(월) 부처님 오신 날 대체공휴일은 정상진료입니다. 응급의료센터는 365일 24시간 운영합니다.', '2026.05.09'],
  ['5월 진료과 휴진일정', '5월 휴진 일정 안내드립니다. 병원 이용에 참고해 주시길 바랍니다.', '2026.04.20'],
  ['5월(근로자의 날, 어린이날) 진료안내', '5월 1일 근로자의 날은 오전진료, 5월 5일 어린이날은 휴진입니다.', '2026.04.15'],
  ['4월 진료과 휴진일정', '2026년 04월 진료과별 휴진 일정을 안내드립니다.', '2026.03.25'],
];

const centers = [
  ['종합검진센터', '동수원병원 종합건강검진센터는 양·한방 협진과 정밀 검사를 통해 건강 상태를 체계적으로 확인합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_01.jpg'],
  ['건강관리센터', '예방 차원의 검진에서 질환 발견 및 치료, 정밀검사까지 연결하는 검진 서비스를 제공합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_02.jpg'],
  ['응급의료센터', '응급의학과 전문의가 24시간 상주하며 신속하고 정확한 응급진료를 제공합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_03.jpg'],
  ['인공신장센터', '풍부한 임상 경험과 최신 지견을 바탕으로 환자 개인에 맞는 투석 치료를 시행합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_04.jpg'],
  ['척추관절센터', '척추, 어깨관절, 고관절, 슬관절, 미세수술, 골절 등 정형외과 전 분야 진료를 시행합니다.', 'https://www.dswhosp.co.kr/common/img/main/sec03_right_05.jpg'],
];

const departments = [
  ['소화기 내과', HealthAndSafety],
  ['심장 내과', Favorite],
  ['호흡기 내과', Air],
  ['내분비 내과', Science],
];

const clinics = [
  ['관절클리닉', '관절부위 통증을 없애고 정상에 가까운 일상생활을 가능하게 도와줍니다.', 'https://www.dswhosp.co.kr/common/img/main/section04_img01.jpg'],
  ['비만클리닉', '정확한 체성분을 측정하여 체지방을 효과적으로 제거하는 것을 돕습니다.', 'https://www.dswhosp.co.kr/common/img/main/section04_img02.jpg'],
  ['내시경클리닉', '내시경을 통해 소화기관 및 기관지 질환의 정확한 진단과 치료를 돕습니다.', 'https://www.dswhosp.co.kr/common/img/main/section04_img03.jpg'],
  ['성장클리닉', '아이에게 맞는 치료시기와 투여방법으로 클리닉 효과를 높입니다.', 'https://www.dswhosp.co.kr/common/img/main/section04_img04.jpg'],
];

const certifications = [
  '보건복지부 인증의료기관',
  '대한신장협회 우수인공신장실 인증',
  '경기도지정 지역응급의료센터',
  '한국보훈복지의료공단 보훈위탁지정병원',
  '수원시아동학대 전담의료기관 지정',
  '간호간병통합서비스병동운영',
];

const heroSlides = [
  {
    image: heroImage1,
    label: 'DONGSUWON GENERAL HOSPITAL',
    title: (
      <>
        전문의 중심의 진료로 <br />
        질 높은 의료서비스 제공
      </>
    ),
  },
  {
    image: heroImage2,
    label: 'DONGSUWON GENERAL HOSPITAL',
    title: (
      <>
        찾아가는 검진 서비스로 <br />
        더 가까운 건강관리 실현
      </>
    ),
  },
  {
    image: heroImage3,
    label: 'DONGSUWON GENERAL HOSPITAL',
    title: (
      <>
        정밀 장비와 전문 진료로 <br />
        신뢰할 수 있는 검사 제공
      </>
    ),
  },
];

function Logo() {
  return (
    <Stack direction="row" spacing={1.3} alignItems="center">
      <Box
        aria-hidden
        sx={{
          width: 46,
          height: 46,
          border: `3px solid ${green}`,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          color: green,
          fontSize: 30,
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        +
      </Box>
      <Box>
        <Typography sx={{ fontSize: { xs: 19, md: 23 }, fontWeight: 900, color: ink, lineHeight: 1, letterSpacing: 0 }}>
          동수원병원
        </Typography>
        <Typography sx={{ mt: .5, fontSize: 11, fontWeight: 800, color: 'text.secondary', letterSpacing: 0 }}>
          DONGSUWON GENERAL HOSPITAL
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
          {isDesktop && (
            <HospitalNavigationBar groups={menuGroups} />
          )}
          <Stack direction="row" alignItems="center" spacing={1}>
            {isDesktop && (
              <>
                <IconButton aria-label="페이스북"><Facebook fontSize="small" /></IconButton>
                <Button variant="text" startIcon={<Login />}>로그인</Button>
                <Button variant="outlined" startIcon={<PersonAdd />}>회원가입</Button>
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
            <Box component={icon} sx={{ color: green }} />
            <Typography variant="caption" sx={{ fontWeight: 900 }}>{label}</Typography>
          </Stack>
        ))}
        <Box sx={{ bgcolor: green, color: 'white', textAlign: 'center', py: 1.4 }}>
          <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>1533-<br />2114</Typography>
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
    if (!isPlaying) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const goToSlide = (direction) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <Box
      id="top"
      component="section"
      className="section section01"
      sx={{
        position: 'relative',
        minHeight: { xs: 620, md: 720 },
        mb: 13.75,
        overflow: 'visible',
        color: 'white',
      }}
    >
      <Box className="swiper-container bgSwiper" sx={{ position: 'absolute', inset: 0 }}>
        <Box className="swiper-wrapper" sx={{ position: 'relative', width: '100%', height: '100%' }}>
          {heroSlides.map((slide, index) => (
            <Box
              key={slide.image}
              className={`swiper-slide ${index === activeSlide ? 'swiper-slide-active' : index === (activeSlide + 1) % heroSlides.length ? 'swiper-slide-next' : 'swiper-slide-prev'}`}
              data-swiper-slide-index={index}
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
                className={`bg bg0${index + 1}`}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.58), rgba(0,0,0,.3), rgba(0,0,0,.08)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transformOrigin: 'center center',
                  animation: index === activeSlide ? 'heroZoomIn 6.2s ease-out forwards' : 'none',
                }}
              />
              <Container maxWidth="xl" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', pt: 10 }}>
                <Box className="txtBox" sx={{ maxWidth: 820 }}>
                  <Typography className="montserrat" component="h5" sx={{ fontWeight: 900, color: '#BDE8CF', letterSpacing: 0, mb: 2 }}>
                    {slide.label}
                  </Typography>
                  <Typography component="h1" sx={{ fontSize: { xs: 42, md: 68 }, fontWeight: 900, lineHeight: 1.14, letterSpacing: 0 }}>
                    {slide.title}
                  </Typography>
                  <Typography sx={{ mt: 3, maxWidth: 620, fontSize: { xs: 17, md: 20 }, color: 'rgba(255,255,255,.86)', lineHeight: 1.7 }}>
                    가족을 위한 마음으로 건강과 행복을 전하는 환자중심의 병원, 동수원병원입니다.
                  </Typography>
                  <Stack
                    className="arrow"
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mt: 3.5 }}
                  >
                    <IconButton
                      aria-label="이전 슬라이드"
                      size="small"
                      onClick={() => goToSlide(-1)}
                      sx={{ width: 34, height: 34, color: 'white', border: '1px solid rgba(255,255,255,.45)' }}
                    >
                      <ArrowForward sx={{ fontSize: 17, transform: 'rotate(180deg)' }} />
                    </IconButton>
                    <IconButton
                      aria-label="다음 슬라이드"
                      size="small"
                      onClick={() => goToSlide(1)}
                      sx={{ width: 34, height: 34, color: 'white', border: '1px solid rgba(255,255,255,.45)' }}
                    >
                      <ArrowForward sx={{ fontSize: 17 }} />
                    </IconButton>
                    <IconButton
                      aria-label={isPlaying ? '슬라이드 정지' : '슬라이드 재생'}
                      size="small"
                      onClick={() => setIsPlaying((playing) => !playing)}
                      sx={{ width: 34, height: 34, color: 'white', border: '1px solid rgba(255,255,255,.45)' }}
                    >
                      {isPlaying ? <Pause sx={{ fontSize: 17 }} /> : <PlayArrow sx={{ fontSize: 18 }} />}
                    </IconButton>
                    <Typography className="swiper-pagination swiper-pagination-fraction" sx={{ color: 'white', fontWeight: 900, ml: 1, fontSize: 14 }}>
                      <Box component="span" className="swiper-pagination-current">{activeSlide + 1}</Box>
                      {' / '}
                      <Box component="span" className="swiper-pagination-total">{heroSlides.length}</Box>
                    </Typography>
                  </Stack>
                </Box>
              </Container>
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', minHeight: { xs: 620, md: 720 }, pointerEvents: 'none' }}>
        <Grid
          container
          spacing={0}
          className="lt_wrap"
          sx={{
            position: 'absolute',
            left: 'calc((100vw - 100%) / -2)',
            right: 'auto',
            top: '100%',
            width: '100vw !important',
            maxWidth: '100vw',
            transform: 'none',
            m: 0,
            pointerEvents: 'auto',
          }}
        >
          <Grid size={6} sx={{ flexBasis: '50%', maxWidth: '50%', flexGrow: 0 }}>
            <Box className="leftArea" sx={{ bgcolor: green, color: 'white', minHeight: 110 }}>
              <Box
                component="a"
                href="/medical/medical_reser.php"
                sx={{
                  display: 'block',
                  height: '100%',
                  p: { xs: 2.2, md: 3 },
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Typography component="h2" sx={{ fontSize: { xs: 17, sm: 20, md: 22 }, fontWeight: 900 }}>
                  온라인 진료예약
                  <Box
                    component="span"
                    aria-hidden
                    sx={{
                      display: 'inline-block',
                      width: 30,
                      height: 1,
                      ml: 1.4,
                      mb: .6,
                      bgcolor: 'rgba(255,255,255,.75)',
                    }}
                  />
                </Typography>
                <Typography component="p" sx={{ mt: .8, color: 'rgba(255,255,255,.82)', fontSize: { xs: 13, sm: 14, md: 16 } }}>
                  로그인 후 진료예약을 하실 수 있습니다.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={6} sx={{ flexBasis: '50%', maxWidth: '50%', flexGrow: 0 }}>
            <Box className="rightArea" sx={{ bgcolor: 'rgba(20,27,34,.94)', color: 'white', minHeight: 110 }}>
              <Box
                component="a"
                href="/medical/proof.php"
                sx={{
                  display: 'block',
                  height: '100%',
                  p: { xs: 2.2, md: 3 },
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Typography component="h2" sx={{ fontSize: { xs: 17, sm: 20, md: 22 }, fontWeight: 900 }}>
                  제증명 발급 서비스
                  <Box
                    component="span"
                    aria-hidden
                    sx={{
                      display: 'inline-block',
                      width: 30,
                      height: 1,
                      ml: 1.4,
                      mb: .6,
                      bgcolor: 'rgba(255,255,255,.75)',
                    }}
                  />
                </Typography>
                <Typography component="p" sx={{ mt: .8, color: 'rgba(255,255,255,.74)', fontSize: { xs: 13, sm: 14, md: 16 } }}>
                  제증명 발급 신청 관련 내용을 확인하실 수 있습니다.
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
                '& .guide-menu-icon': {
                  transition: 'color 160ms ease, transform 160ms ease',
                },
                '&:hover': {
                  borderColor: green,
                  bgcolor: '#F0FAF4',
                  boxShadow: '0 10px 24px rgba(20,27,34,.08)',
                  transform: 'translateY(-2px)',
                },
                '&:hover .guide-menu-icon': {
                  color: '#006D30',
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
  const featuredNotices = notices.slice(2, 4).reverse();
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
            <Box
              sx={{
                minHeight: { xs: 'auto', md: 292 },
                border: '1px solid',
                borderColor: '#D8DDE2',
                bgcolor: 'white',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                alignItems: 'stretch',
              }}
            >
              {featuredNotices.map(([title, body, date], index) => (
                <Box
                  key={title}
                  sx={{
                    px: { xs: 3, md: 4.4 },
                    py: { xs: 3.2, md: 3.8 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderLeft: { xs: 0, md: index === 1 ? '1px solid #E4E7EA' : 0 },
                    borderTop: { xs: index === 1 ? '1px solid #E4E7EA' : 0, md: 0 },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 900, fontSize: { xs: 21, md: 24 }, color: '#252525', lineHeight: 1.25 }}>
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: { xs: 2.6, md: 4.5 },
                        color: '#555',
                        fontSize: { xs: 14, md: 16 },
                        lineHeight: 1.7,
                        maxWidth: 300,
                        wordBreak: 'keep-all',
                      }}
                    >
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
                센터정보
              </Typography>
              <NavControls />
            </Stack>
            <Box
              sx={{
                minHeight: { xs: 'auto', md: 292 },
                border: '2px solid',
                borderColor: green,
                bgcolor: 'white',
                px: { xs: 2.4, sm: 3.2 },
                py: { xs: 3, sm: 3.8 },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '214px 1fr' },
                columnGap: { xs: 0, sm: 3 },
                rowGap: 2.2,
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={featuredCenter[2]}
                alt={featuredCenter[0]}
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 214 },
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 900, color: green, fontSize: { xs: 22, md: 26 }, lineHeight: 1.2 }}>
                  {featuredCenter[0]}
                </Typography>
                <Typography sx={{ mt: 1.8, color: '#2B2B2B', fontSize: { xs: 14, md: 16 }, lineHeight: 1.7, wordBreak: 'keep-all' }}>
                  {featuredCenter[1]}
                </Typography>
                <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 2.4 }}>
                  {centers.map(([title]) => (
                    <Box
                      key={title}
                      aria-hidden
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: title === featuredCenter[0] ? '#767676' : '#D6D6D6',
                      }}
                    />
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
          진료과
        </Typography>
        <NavControls />
      </Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(4, minmax(0, 1fr))',
            lg: 'repeat(5, minmax(0, 1fr))',
          },
          gap: { xs: 1.6, md: 3 },
        }}
      >
        {departments.map(([department, Icon], index) => (
          <Box
            key={department}
            component="a"
            href="#"
            sx={{
              minHeight: { xs: 210, md: 240 },
              p: { xs: 3, md: 3.6 },
              border: '1px solid',
              borderColor: '#D8DDE2',
              borderTop: `2px solid ${green}`,
              bgcolor: '#F3F5F7',
              color: ink,
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease',
              '&:hover': {
                borderColor: green,
                boxShadow: '0 12px 28px rgba(20,27,34,.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box>
              <Typography sx={{ color: green, fontSize: 13, fontWeight: 900 }}>
                {String(index + 1).padStart(2, '0')}/{String(departments.length).padStart(2, '0')}
              </Typography>
              <Typography sx={{ mt: 1, fontSize: { xs: 22, md: 24 }, fontWeight: 900, lineHeight: 1.25, color: '#2B2B2B', wordBreak: 'keep-all' }}>
                {department}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={.5} sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: 15, color: '#555', fontWeight: 700 }}>바로가기</Typography>
                <ArrowForward sx={{ fontSize: 17, color: '#2B2B2B' }} />
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box component={Icon} sx={{ fontSize: { xs: 58, md: 70 }, color: green, opacity: .88 }} />
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
        <Typography
          component="h2"
          sx={{
            mb: { xs: 3.5, md: 4 },
            fontSize: { xs: 30, md: 40 },
            fontWeight: 900,
            color: ink,
            textAlign: 'center',
            letterSpacing: 0,
          }}
        >
          전문 클리닉
        </Typography>
        <Grid container spacing={0}>
          {clinics.map(([title, body, image], index) => {
            const isReversedRow = Math.floor(index / 2) % 2 === 1;

            return (
            <Grid size={{ xs: 12, lg: 6 }} key={title}>
              <Box
                component="a"
                href="#"
                sx={{
                  minHeight: { xs: 'auto', md: 300 },
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  color: ink,
                  textDecoration: 'none',
                  overflow: 'hidden',
                  '& .clinic-image': {
                    transition: 'transform 420ms ease',
                  },
                  '& .clinic-copy': {
                    transition: 'background-color 180ms ease, color 180ms ease',
                  },
                  '& .clinic-copy-text, & .clinic-button': {
                    transition: 'color 180ms ease, border-color 180ms ease, background-color 180ms ease',
                  },
                  '&:hover .clinic-image': {
                    transform: 'scale(1.08)',
                  },
                  '&:hover .clinic-copy': {
                    bgcolor: green,
                    color: 'white',
                  },
                  '&:hover .clinic-copy-text': {
                    color: 'rgba(255,255,255,.82)',
                  },
                  '&:hover .clinic-button': {
                    color: 'white',
                    borderColor: 'rgba(255,255,255,.9)',
                    bgcolor: 'rgba(255,255,255,.08)',
                  },
                }}
              >
                <Box
                  sx={{
                    minHeight: { xs: 220, md: 300 },
                    overflow: 'hidden',
                    order: { xs: 0, sm: isReversedRow ? 2 : 0 },
                  }}
                >
                  <Box
                    className="clinic-image"
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: { xs: 220, md: 300 },
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </Box>
                <Box
                  className="clinic-copy"
                  sx={{
                    minHeight: { xs: 260, md: 300 },
                    px: { xs: 3.2, md: 5 },
                    py: { xs: 4, md: 5.5 },
                    bgcolor: '#F1F3F5',
                    order: { xs: 1, sm: isReversedRow ? 1 : 0 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography sx={{ fontSize: { xs: 23, md: 25 }, fontWeight: 900, color: 'inherit', letterSpacing: 0 }}>
                    {title}
                  </Typography>
                  <Typography className="clinic-copy-text" sx={{ mt: 2.2, color: '#555', fontSize: 16, lineHeight: 1.65, wordBreak: 'keep-all', maxWidth: 260 }}>
                    {body}
                  </Typography>
                  <Button
                    className="clinic-button"
                    variant="outlined"
                    sx={{
                      mt: 4,
                      px: 2.5,
                      py: 1.1,
                      borderRadius: 999,
                      borderColor: green,
                      color: green,
                      fontWeight: 900,
                    }}
                  >
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
          <Box
            component="a"
            href="https://map.naver.com/p/search/%EB%8F%99%EC%88%98%EC%9B%90%EB%B3%91%EC%9B%90"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              minHeight: { xs: 360, md: 480 },
              p: { xs: 3, md: 4.5 },
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: '#E8F0EA',
              backgroundImage: `
                linear-gradient(90deg, rgba(0,128,56,.12) 1px, transparent 1px),
                linear-gradient(0deg, rgba(0,128,56,.12) 1px, transparent 1px),
                linear-gradient(135deg, rgba(255,255,255,.88), rgba(219,235,225,.72))
              `,
              backgroundSize: '72px 72px, 72px 72px, cover',
              color: ink,
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              position: 'relative',
              transition: 'border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '9%',
                right: '12%',
                top: '38%',
                height: 18,
                borderRadius: 999,
                bgcolor: 'rgba(0,128,56,.22)',
                transform: 'rotate(-10deg)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                left: '38%',
                top: '14%',
                bottom: '10%',
                width: 18,
                borderRadius: 999,
                bgcolor: 'rgba(20,27,34,.1)',
                transform: 'rotate(18deg)',
              },
              '&:hover': {
                borderColor: green,
                boxShadow: '0 16px 32px rgba(20,27,34,.12)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Chip label="NAVER MAP" sx={{ bgcolor: green, color: 'white', fontWeight: 900 }} />
              <Typography sx={{ mt: 2.4, fontSize: { xs: 28, md: 38 }, fontWeight: 900, letterSpacing: 0 }}>
                오시는 길
              </Typography>
              <Typography sx={{ mt: 1.2, color: '#3D464D', fontSize: { xs: 15, md: 17 }, fontWeight: 700 }}>
                경기도 수원시 팔달구 중부대로 165
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" spacing={1.2} sx={{ position: 'relative', zIndex: 1, alignSelf: 'flex-start', px: 2.2, py: 1.2, borderRadius: 999, bgcolor: 'white', border: '1px solid', borderColor: '#D8DDE2', color: green }}>
              <Place />
              <Typography sx={{ fontWeight: 900 }}>네이버지도 바로가기</Typography>
              <ArrowForward sx={{ fontSize: 18 }} />
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 4.8 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5, height: '100%' }}>
            {supportLinks.map(([label, icon]) => (
              <Stack
                key={label}
                component="a"
                href="#"
                sx={{
                  p: { xs: 2.4, md: 3 },
                  minHeight: { xs: 142, md: '100%' },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  bgcolor: 'white',
                  color: ink,
                  textDecoration: 'none',
                  justifyContent: 'space-between',
                  transition: 'border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease',
                  '& .support-link-icon': {
                    transition: 'color 160ms ease, transform 160ms ease',
                  },
                  '&:hover': {
                    borderColor: green,
                    bgcolor: '#F0FAF4',
                    boxShadow: '0 10px 24px rgba(20,27,34,.08)',
                    transform: 'translateY(-2px)',
                  },
                  '&:hover .support-link-icon': {
                    color: '#006D30',
                    transform: 'translateY(-3px) scale(1.08)',
                  },
                }}
              >
                <Box component={icon} className="support-link-icon" sx={{ color: green, fontSize: 34 }} />
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
          {['이용약관', '개인정보처리방침', '환자의권리와의무', '비급여수가', '응급실당직표'].map((item) => (
            <Link key={item} href="#" underline="none" sx={{ color: 'rgba(255,255,255,.8)', fontWeight: 800 }}>{item}</Link>
          ))}
        </Stack>
        <Typography sx={{ fontWeight: 900 }}>의료법인 동수원병원</Typography>
        <Typography sx={{ mt: 1, color: 'rgba(255,255,255,.72)' }}>
          대표: 변영훈 · 주소: (16494) 경기도 수원시 팔달구 중부대로 165 · 대표번호: 1533-2114 · 팩스번호: 031)210-0140
        </Typography>
        <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'rgba(255,255,255,.55)' }}>
          Copyright (C) 2016 Dongsuwon General Hospital. All Rights Reserved.
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
        <Button variant="contained" color="secondary" startIcon={<CalendarMonth />}>예약</Button>
        <Button variant="outlined" startIcon={<Emergency />}>응급센터</Button>
      </Box>
    </>
  );
}
