import { forwardRef, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const defaultMenuGroups = [
  {
    id: 'guide',
    label: '이용안내',
    items: ['층별안내', '전화번호안내', '주차안내', '편의시설', '찾아오시는길', '장례식장'],
  },
  {
    id: 'care',
    label: '진료안내',
    items: ['진료과/의료진', '온라인예약', '외래진료', '응급진료', '입/퇴원안내', '비급여조회', '제증명신청'],
  },
  {
    id: 'center',
    label: '센터안내',
    items: ['종합검진센터', '건강관리센터', '응급의료센터', '인공신장센터', '척추관절센터', '진료협력센터'],
  },
  {
    id: 'clinic',
    label: '전문클리닉',
    items: ['전문클리닉소개', '의료장비소개', '건강정보'],
  },
  {
    id: 'about',
    label: '병원소개',
    items: ['이사장인사말', '미션/비전', '연혁', '조직도', 'HI', '원가'],
  },
  {
    id: 'community',
    label: '병원광장',
    items: ['공지사항', '병원소식', '서식자료실', '고객의소리', '칭찬합시다', '고객센터', '채용정보'],
  },
];

const normalizeGroups = (groups) => {
  return groups.map((group, index) => {
    if (Array.isArray(group)) {
      const [label, items = []] = group;

      return {
        id: label || String(index),
        label,
        items,
      };
    }

    return {
      id: group.id || group.label || String(index),
      label: group.label,
      items: group.items || [],
      href: group.href,
    };
  });
};

const HospitalNavigationBar = forwardRef(function HospitalNavigationBar({
  groups = defaultMenuGroups,
  activeId,
  ariaLabel = '주요 메뉴',
  panelMaxWidth = 1180,
  onItemClick,
  sx,
  ...props
}, ref) {
  const normalizedGroups = useMemo(() => normalizeGroups(groups), [groups]);
  const [hoveredId, setHoveredId] = useState(null);
  const currentId = hoveredId || activeId || normalizedGroups[0]?.id;
  const isPanelOpen = Boolean(hoveredId);

  const closePanel = () => setHoveredId(null);

  return (
    <Box
      ref={ref}
      onMouseLeave={closePanel}
      sx={ {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        ...sx,
      } }
      { ...props }
    >
      <Stack
        component="nav"
        direction="row"
        alignItems="center"
        spacing={3}
        aria-label={ ariaLabel }
      >
        { normalizedGroups.map((group) => {
          const isActive = group.id === currentId;

          return (
            <Link
              key={ group.id }
              href={ group.href || '#' }
              underline="none"
              onMouseEnter={() => setHoveredId(group.id)}
              onFocus={() => setHoveredId(group.id)}
              onClick={(event) => {
                if (!group.href) {
                  event.preventDefault();
                }

                onItemClick?.(group);
              }}
              sx={ {
                position: 'relative',
                color: 'text.primary',
                fontSize: 20,
                fontWeight: 900,
                lineHeight: 1,
                py: 3,
                letterSpacing: 0,
                whiteSpace: 'nowrap',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 14,
                  height: 3,
                  backgroundColor: isActive ? 'text.primary' : 'transparent',
                  transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'center',
                  transition: 'transform 160ms ease, background-color 160ms ease',
                },
                '&:hover::after, &:focus-visible::after': {
                  backgroundColor: 'text.primary',
                  transform: 'scaleX(1)',
                },
                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: 4,
                },
              } }
            >
              { group.label }
            </Link>
          );
        }) }
      </Stack>

      { isPanelOpen ? (
        <Box
          role="region"
          aria-label="하위 메뉴"
          onMouseEnter={() => setHoveredId(currentId)}
          sx={ {
            position: 'absolute',
            top: '100%',
            left: '50%',
            width: 'calc(100vw - 40px)',
            transform: 'translateX(-50%)',
            zIndex: (theme) => theme.zIndex.appBar + 1,
            backgroundColor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'divider',
            boxShadow: 'none',
          } }
        >
          <Box
            sx={ {
              maxWidth: panelMaxWidth,
              mx: 'auto',
              px: { xs: 3, md: 5 },
              py: 5,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0, 1fr))',
                lg: 'repeat(6, minmax(0, 1fr))',
              },
              columnGap: 5,
              rowGap: 4,
            } }
          >
            { normalizedGroups.map((group) => (
              <Box key={ group.id }>
                <Typography
                  component="h3"
                  sx={ {
                    mb: 2,
                    color: group.id === currentId ? 'primary.dark' : 'text.primary',
                    fontSize: 18,
                    fontWeight: 900,
                    lineHeight: 1.2,
                  } }
                >
                  { group.label }
                </Typography>
                <Stack spacing={1.2}>
                  { group.items.map((item) => (
                    <Link
                      key={ item }
                      href="#"
                      underline="none"
                      onClick={(event) => {
                        event.preventDefault();
                        onItemClick?.({ ...group, selectedItem: item });
                      }}
                      sx={ {
                        color: 'text.secondary',
                        fontSize: 15,
                        fontWeight: 700,
                        lineHeight: 1.25,
                        '&:hover, &:focus-visible': {
                          color: 'primary.main',
                        },
                        '&:focus-visible': {
                          outline: '2px solid',
                          outlineColor: 'primary.main',
                          outlineOffset: 3,
                        },
                      } }
                    >
                      { item }
                    </Link>
                  )) }
                </Stack>
              </Box>
            )) }
          </Box>
        </Box>
      ) : null }
    </Box>
  );
});

export { HospitalNavigationBar, defaultMenuGroups };
