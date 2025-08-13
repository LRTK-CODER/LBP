# LBP (LRTK Blog Platform)

Next.js 기반의 모던 블로그 플랫폼으로, HeroUI 디자인 시스템과 React Bits를 활용한 아름다운 UI와 자체 제작 CMS를 제공합니다.

## 프로젝트 개요

기존 Jekyll 템플릿(Norlin-LRTK)을 Next.js로 전환하여 다음 기능들을 제공하는 블로그 플랫폼입니다:

- 🎨 HeroUI 기반의 모던한 UI + React Bits 컴포넌트 활용
- 📝 자체 제작 CMS로 컨텐츠 관리 (Obsidian → CMS 복붙 워크플로우 지원)
- 🔄 로컬 개발 서버에서 실시간 미리보기
- 🚀 GitHub Pages 자동 배포
- 📱 반응형 디자인
- 🔍 SEO 최적화
- 🏷️ 태그 시스템
- 💬 댓글 시스템 (Disqus)
- 📊 Google Analytics 통합

## 기술 스택

### Frontend
- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **HeroUI** - 메인 디자인 시스템 및 컴포넌트 라이브러리
- **React Bits** - 특별한 인터랙션 컴포넌트 (부분적 사용)

### CMS & 데이터 관리
- **Markdown** - 순수 마크다운 파일 처리
- **Gray-matter** - Front matter 처리
- **Remark/Rehype** - 마크다운 파싱 및 변환
- **Zustand** - 상태 관리

### 통계 & 분석
- **Chart.js / Recharts** - 통계 차트 및 그래프
- **Date-fns** - 날짜 처리 및 계산
- **React Query** - 데이터 페칭 및 캐싱
- **Local Storage / IndexedDB** - 클라이언트 사이드 데이터 저장

### 배포 & 호스팅
- **GitHub Pages** - 정적 사이트 호스팅
- **GitHub Actions** - 자동 배포 파이프라인

## 프로젝트 구조

```
LBP/
├── README.md                    # 프로젝트 문서
├── package.json                 # 패키지 설정
├── next.config.js              # Next.js 설정
├── tailwind.config.js          # Tailwind 설정
├── tsconfig.json               # TypeScript 설정
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 홈페이지
│   │   ├── about/              # 소개 페이지
│   │   ├── posts/              # 블로그 포스트 페이지들
│   │   ├── tag/                # 태그별 포스트 목록
│   │   └── cms/                # CMS 관리 페이지들
│   ├── components/             # 재사용 가능한 컴포넌트들
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── ui/                 # HeroUI + React Bits 기반 UI 컴포넌트
│   │   ├── blog/               # 블로그 관련 컴포넌트
│   │   └── cms/                # CMS 관련 컴포넌트
│   ├── lib/                    # 유틸리티 함수들
│   │   ├── posts.ts            # 포스트 데이터 처리
│   │   ├── markdown.ts         # 마크다운 처리
│   │   └── github.ts           # GitHub API 연동
│   ├── store/                  # Zustand 상태 관리
│   ├── styles/                 # 글로벌 스타일
│   └── types/                  # TypeScript 타입 정의
├── content/                    # 블로그 컨텐츠
│   ├── posts/                  # 블로그 포스트 (.md)
│   └── pages/                  # 정적 페이지 (.md)
├── public/                     # 정적 파일들
│   ├── images/                 # 이미지 파일들
│   └── icons/                  # 아이콘 파일들
└── .github/
    └── workflows/              # GitHub Actions 워크플로우
        └── deploy.yml          # 자동 배포 설정
```

## 주요 기능

### 1. 블로그 시스템
- Markdown 기반 포스트 작성 (Jekyll 스타일)
- 태그 및 카테고리 분류
- 검색 기능
- 관련 포스트 추천
- 소셜 미디어 공유

### 2. 자체 CMS
- **분할 화면 인터페이스**
  - 왼쪽: Obsidian 친화적인 마크다운 복붙 에디터
  - 오른쪽: 실시간 블로그 스타일 미리보기 (실제 블로그와 동일한 렌더링)
- **실시간 동기화**
  - 에디터에서 타이핑하는 즉시 오른쪽 미리보기 영역에 반영
  - 스크롤 동기화 (에디터 스크롤 시 미리보기도 함께 스크롤)
- **메타데이터 관리**
  - Front matter 자동 생성 및 시각적 편집
  - 태그, 카테고리, 발행일 등 메타데이터 관리
- **미디어 관리**
  - 드래그 앤 드롭 이미지 업로드
  - 이미지 최적화 및 자동 경로 생성
- **포스트 관리**
  - 초안/발행 상태 관리
  - Jekyll 스타일 파일명 자동 생성 (YYYY-MM-DD-title.md)
  - 포스트 목록 및 검색 기능
- **에디터 커스터마이징**
  - 다크/라이트 테마, 폰트 설정, 키바인딩 선택
  - Vim/Emacs 스타일 키보드 단축키 지원
  - 자동 저장 및 버전 히스토리
- **블로그 커스터마이징**
  - 실시간 테마 및 브랜딩 설정 (로고, 컬러, 폰트)
  - 사이트 설정 (제목, 설명, SEO, 소셜 미디어)
  - 변경사항 즉시 미리보기 반영
- **통계 및 분석**
  - 포스트별 조회수, 좋아요, 공유 수 추적
  - 인기 태그 및 카테고리 분석
  - 방문자 통계 (일별, 주별, 월별)
  - 검색 키워드 분석
  - 포스트 작성 활동 통계 (작성 빈도, 워드 카운트 등)

### 3. 배포 시스템
- CMS에서 "배포" 버튼 클릭
- GitHub API를 통한 컨텐츠 푸시
- GitHub Actions 자동 빌드 및 배포
- GitHub Pages 호스팅

### 4. 개발자 경험
- 로컬 개발 서버 (hot reload)
- TypeScript 타입 안전성
- ESLint + Prettier 코드 포맷팅
- 컴포넌트 스토리북 (선택사항)

## 개발 단계별 계획

### Phase 1: 기본 구조 설정
- [ ] Next.js 프로젝트 초기 설정
- [ ] TypeScript 및 Tailwind CSS 구성
- [ ] 기본 레이아웃 및 라우팅 설정
- [ ] Markdown 처리 시스템 구현 (Jekyll 스타일)

### Phase 2: UI 컴포넌트 개발
- [ ] HeroUI 기반 디자인 시스템 구축 + React Bits 컴포넌트 통합
- [ ] 블로그 레이아웃 컴포넌트 개발
- [ ] 포스트 목록 및 상세 페이지 구현
- [ ] 네비게이션 및 검색 기능

### Phase 3: CMS 시스템 구현
- [ ] 분할 화면 CMS 인터페이스 설계 및 구현
- [ ] 왼쪽 에디터 영역 개발
  - [ ] 마크다운 에디터 통합 (Monaco Editor 또는 CodeMirror)
  - [ ] Obsidian 스타일 단축키 및 기능 지원
  - [ ] 드래그 앤 드롭 이미지 업로드
  - [ ] 에디터 설정 기능
    - [ ] 다크/라이트 테마 토글
    - [ ] 폰트 크기 조절 (12px ~ 24px)
    - [ ] 폰트 패밀리 선택 (Fira Code, JetBrains Mono, SF Mono 등)
    - [ ] 키바인딩 선택 (기본, Vim, Emacs)
    - [ ] 자동 저장 간격 설정
- [ ] 오른쪽 미리보기 영역 개발
  - [ ] 실시간 마크다운 → HTML 변환 및 렌더링
  - [ ] 실제 블로그 스타일과 동일한 CSS 적용
  - [ ] 스크롤 동기화 구현
- [ ] 메타데이터 관리 시스템
  - [ ] Front matter 시각적 편집기
  - [ ] 태그 자동완성 및 관리
- [ ] 포스트 상태 관리 (초안/발행/예약발행)
- [ ] 블로그 커스터마이징 시스템
  - [ ] 사이트 설정 관리
    - [ ] 블로그 제목 및 설명 편집
    - [ ] 로고 업로드 및 교체 (SVG, PNG 지원)
    - [ ] Favicon 업로드 및 생성 (다양한 사이즈 자동 생성)
    - [ ] 메타 태그 및 SEO 설정
  - [ ] 테마 커스터마이징
    - [ ] 메인 브랜드 컬러 선택 (Primary, Secondary)
    - [ ] 다크/라이트 테마 설정
    - [ ] 폰트 설정 (헤딩, 본문 폰트 개별 선택)
    - [ ] 레이아웃 옵션 (사이드바 위치, 헤더 스타일 등)
  - [ ] 소셜 미디어 설정
    - [ ] Twitter, Facebook, GitHub, Instagram 등 소셜 링크
    - [ ] Open Graph 이미지 설정
    - [ ] Twitter Card 설정
  - [ ] 실시간 미리보기
    - [ ] 변경사항을 즉시 미리보기에 반영
    - [ ] 커스터마이징 변경 히스토리
    - [ ] 설정 내보내기/가져오기 (JSON)
- [ ] 통계 및 분석 시스템
  - [ ] 대시보드 구현
    - [ ] 포스트 성과 차트 (조회수, 좋아요, 공유 수)
    - [ ] 방문자 통계 그래프 (일별/주별/월별)
    - [ ] 인기 콘텐츠 TOP 10 리스트
  - [ ] 포스트 분석 기능
    - [ ] 개별 포스트 상세 통계
    - [ ] 태그별 성과 분석
    - [ ] 읽기 시간 및 완독률 추적
  - [ ] 작성 활동 분석
    - [ ] 작성 빈도 캘린더 (GitHub 잔디밭 스타일)
    - [ ] 워드 카운트 추적 및 목표 설정
    - [ ] 작성 스트릭 및 목표 달성 알림
  - [ ] 데이터 내보내기
    - [ ] CSV/JSON 형태로 통계 데이터 내보내기
    - [ ] Google Analytics 연동
    - [ ] 사용자 정의 기간별 리포트 생성

### Phase 4: 배포 시스템 구축
- [ ] GitHub API 연동
- [ ] 자동 배포 파이프라인 구성
- [ ] 환경 변수 및 보안 설정
- [ ] 에러 핸들링 및 로깅

### Phase 5: 최적화 및 완성
- [ ] SEO 최적화
- [ ] 성능 최적화
- [ ] 테스트 작성 및 실행
- [ ] 문서화 완성

## 시작하기

```bash
# 프로젝트 클론
git clone <repository-url>
cd LBP

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# CMS 접속
# http://localhost:3000/cms
```

## 라이선스

MIT License