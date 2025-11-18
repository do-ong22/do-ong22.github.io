# 포트폴리오 업데이트 작업 내역

## 작업 일시
2025년 11월 18일

## 작업 개요
이력서(이력서_김동근_개선.md) 내용을 기반으로 포트폴리오 웹사이트에 프로젝트 및 경력 정보를 추가 및 업데이트

---

## 1. 프로젝트 데이터 업데이트 (src/content/projects.json)

### 1.1 Steam 커뮤니티 플랫폼 프로젝트 추가
**위치**: `src/content/projects.json:1-52`

**기술 스택**:
- Spring Boot, React, TypeScript, QueryDSL, Jenkins, Docker, AWS EC2, Grafana, MySQL

**주요 기능**:
- 게임 커뮤니티 게시판 및 댓글 시스템 구현
- QueryDSL 기반 동적 쿼리 처리로 검색 성능 3배 향상 (3초 → 1초)
- 좋아요 기능 무결성 보장 로직 개발
- Grafana + 로그 기반 모니터링 시스템 구축
- Jenkins + Docker 기반 CI/CD 파이프라인 구성
- AWS EC2 자동 배포로 배포 시간 80% 단축 (15분 → 3분)

**성과**:
- QueryDSL 도입으로 검색 성능 3배 향상
- CI/CD 파이프라인으로 배포 시간 80% 단축
- 모니터링 시스템 구축으로 에러 대응 시간 60% 단축

---

### 1.2 Alpha-Finder 프로젝트 내용 보강
**위치**: `src/content/projects.json:73-98`

**추가된 주요 내용**:
- 한국/미국 약 11,000개 종목 실시간 데이터 수집 파이프라인 구축
- 상장폐지 위험 예측 기능 추가로 투자 리스크 관리 기능 강화
- pandas 기반 대규모 데이터 Join 최적화로 메모리 사용량 40% 절감
- Refinitiv DB 쿼리 성능 개선: 응답 시간 60초 → 1초 (98% 단축)
- FastAPI + Swagger 문서 자동화로 API 통합 테스트 시간 70% 단축
- RESTful API 설계 및 문서화로 프론트엔드 개발 속도 30% 향상

---

### 1.3 Check (HDR) 프로젝트 내용 보강
**위치**: `src/content/projects.json:128-149`

**추가된 주요 내용**:
- 입사일/회계일 기준 자동 연차 계산 로직 및 Celery 기반 배치 시스템 구축
- 관리자 승인 프로세스 정립으로 통합 백오피스 체계 구축
- 모두싸인 API 연동으로 전자결재 자동화
- Excel/PDF 문서 자동 출력 기능으로 월 평균 40시간 업무 시간 절감
- 사내 만족도 95% 달성, 기존 대비 업무 처리 시간 80% 단축
- 문서 처리 시간 90% 절감

---

## 2. Intro 페이지 확장 (src/components/Intro.js)

### 2.1 기존 구조
- 간단한 인사말과 타이핑 효과
- 프로필 이미지

### 2.2 추가된 섹션

#### About Me 섹션 (Intro.js:141-154)
- 개발 철학: 정밀한 조율과 유기적 협업의 중요성
- 강점: 빠른 문제 파악, 데이터 기반 의사결정, 팀과의 긴밀한 소통
- 전문 분야: 성능 최적화와 대규모 데이터 처리

#### 경력 섹션 (Intro.js:157-204)
**3개 회사 경력 상세 추가**:

1. **(주) 엘리스** (2025.03 ~ 현재, 9개월)
   - 팀원 (Technical Operator) | ICT팀
   - AI 개발자 양성 과정 DS 트랙 코치 활동
   - 월 평균 80명 이상 수강생 대상 강의 보조
   - 20개 이상 추가 학습자료 제작
   - 수강생 평균 만족도 4.8/5.0 달성

2. **(주) 메멘토에이아이** (2024.10 ~ 2025.01, 4개월)
   - 사원 | 제품개발팀 (BackEnd Developer)
   - AlphaFinder 백엔드 아키텍처 설계 및 개발
   - Check(HDR) 백엔드 개발로 사내 만족도 95% 달성
   - 11,000개 종목 실시간 데이터 수집 파이프라인 구축
   - Refinitiv DB 쿼리 성능 98% 단축
   - RESTful API 설계로 프론트엔드 개발 속도 30% 향상

3. **(주) 마린로보틱스** (2022.07 ~ 2023.07, 1년)
   - 사원 | 교육 및 기술운영팀
   - 드론 자격 교육 진행 (연간 500명 이상)
   - 실내 군집 드론 콘텐츠 기획 및 드론쇼 구현
   - YOLO 기반 조류 탐지 및 퇴치 시스템 시범 운영

#### 학력 및 자격증 섹션 (Intro.js:207-220)
- **전남과학대학교**: 드론운용학과 졸업 (2019.03 ~ 2021.02)
- **자격증**: SQLD (SQL 개발자) - 한국데이터산업진흥원

#### 핵심 역량 섹션 (Intro.js:223-259)
3개 카드로 구성:

1. **Communication & Collaboration**
   - 문제 해결 중심의 기술 커뮤니케이션
   - FastAPI 프로젝트 worker 분산 오류 해결 경험
   - 배포 구조 재설계로 응답 시간 70% 개선
   - 크로스 도메인 경험

2. **Technical Excellence**
   - 성능 최적화 & 대규모 데이터 처리
   - 데이터베이스 쿼리 최적화로 98% 성능 향상
   - 11,000개 이상 데이터셋 안정적 처리
   - 전체 개발 사이클 경험

3. **지향하는 개발자상**
   - "기술을 도구로, 사람과 서비스를 중심에 두는 개발자"
   - 문제 중심 사고
   - 끈기 있는 실행력
   - 협업을 통한 성장
   - 데이터 기반 의사결정

---

## 3. CSS 스타일링 추가 (src/css/App.css)

### 3.1 새로운 스타일 클래스 추가 (App.css:391-659)

**섹션 공통 스타일**:
- `.about-section`, `.experience-section`, `.education-section`, `.competencies-section`
- 최대 너비 1000px, 중앙 정렬
- fadeIn 애니메이션 적용

**섹션 타이틀**:
- `.section-title`: 2rem 폰트, 중앙 정렬
- 하단에 그라데이션 언더라인 효과

**카드형 컴포넌트**:
- 반투명 배경 (rgba(255, 255, 255, 0.03))
- 1px 테두리 (rgba(255, 255, 255, 0.1))
- 12px 둥근 모서리
- backdrop-filter 블러 효과

**호버 효과**:
- 모든 카드에 호버 시 5px 위로 이동
- 테두리 색상 변경 (#58a6ff)
- 그림자 효과 추가

**반응형 디자인** (App.css:621-659):
- 768px 이하 화면에서 레이아웃 조정
- 폰트 크기 축소
- 그리드 → 단일 컬럼 전환

---

## 4. 네비게이션 수정 (src/components/Header.js)

**변경 내용** (Header.js:13):
```javascript
// Before
<a href="#projects">Projects</a>

// After
<Link to="/projects">Projects</Link>
```

**이유**:
- 해시 링크에서 React Router Link로 변경
- 프로젝트 페이지로 올바른 라우팅 제공

---

## 5. 코드 품질 개선 (src/components/Intro.js)

### 5.1 React Hooks 최적화
**변경 내용** (Intro.js:1, 5, 10):
```javascript
// Before
const jobTitles = ['백엔드', '프론트엔드', 'AI'];
const specialties = ['AI API 백엔드 설계', ...];

// After
import { ..., useMemo } from 'react';
const jobTitles = useMemo(() => ['백엔드', '프론트엔드', 'AI'], []);
const specialties = useMemo(() => [...], []);
```

**이유**:
- ESLint 경고 해결 (react-hooks/exhaustive-deps)
- 배열이 매 렌더링마다 재생성되는 것을 방지
- 성능 최적화

### 5.2 접근성 개선
**변경 내용** (Intro.js:132):
```javascript
// Before
alt="Profile Image"

// After
alt="김동근 프로필"
```

**이유**:
- 스크린 리더 접근성 개선
- ESLint 경고 해결 (jsx-a11y/img-redundant-alt)

---

## 6. 빌드 설정 개선

### 6.1 환경 변수 추가 (.env)
```
SKIP_PREFLIGHT_CHECK=true
GENERATE_SOURCEMAP=false
```

### 6.2 CRACO 설정 추가 (craco.config.js)
- html-webpack-plugin minification 비활성화
- Node.js v25 호환성 문제 해결 시도

### 6.3 패키지 스크립트 변경 (package.json)
```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```

### 6.4 추가된 devDependencies
- `@craco/craco`: ^7.1.0
- `html-webpack-plugin`: ^5.6.4

---

## 7. 알려진 이슈

### Node.js v25 호환성 문제
**증상**:
```
SecurityError: Cannot initialize local storage without a `--localstorage-file` path
```

**원인**:
- Node.js v25.2.0에서 도입된 localStorage API가 html-webpack-plugin과 충돌
- react-scripts 5.0.1과의 호환성 문제

**해결 방법**:
1. **Node.js 다운그레이드 (권장)**
   ```bash
   # nvm 사용 시
   nvm install 20
   nvm use 20
   npm start
   ```

2. **또는 기존 빌드 사용**
   - `build/` 디렉토리에 기존 빌드 파일 존재
   - `npm run deploy`로 배포 가능

---

## 8. 파일 구조

```
/Users/donggeun/Desktop/dong/repo/front/
├── src/
│   ├── components/
│   │   ├── Intro.js              # ✅ 대폭 확장 (141줄 → 264줄)
│   │   └── Header.js             # ✅ 네비게이션 수정
│   ├── content/
│   │   └── projects.json         # ✅ 3개 프로젝트 추가/보강
│   └── css/
│       └── App.css               # ✅ 새로운 스타일 추가 (390줄 → 660줄)
├── .env                          # ✅ 신규 생성
├── craco.config.js               # ✅ 신규 생성
└── package.json                  # ✅ 스크립트 및 의존성 업데이트
```

---

## 9. 주요 성과 지표 (이력서 기반)

### 기술적 성과
- **DB 쿼리 성능**: 60초 → 1초 (98% 단축)
- **검색 성능**: 3초 → 1초 (3배 향상)
- **배포 시간**: 15분 → 3분 (80% 단축)
- **API 응답 시간**: 18초 → 1초 이내
- **메모리 사용량**: 40% 절감
- **에러 대응 시간**: 60% 단축

### 비즈니스 성과
- **사내 만족도**: 95%
- **수강생 만족도**: 4.8/5.0
- **업무 처리 시간**: 80% 단축
- **문서 처리 시간**: 90% 절감
- **월 업무 시간 절감**: 평균 40시간

---

## 10. 테스트 방법

### 개발 환경 실행
```bash
# Node.js 버전 확인
node --version  # v20 권장

# 개발 서버 시작
npm start

# 브라우저에서 확인
# http://localhost:3000
```

### 프로덕션 빌드
```bash
# 빌드 생성
npm run build

# 배포
npm run deploy
```

---

## 11. 다음 단계 제안

### 우선순위 높음
1. Node.js v20으로 다운그레이드
2. 개발 서버 정상 동작 확인
3. 프로젝트 이미지 추가 (`/images/steam-community.png` 등)

### 우선순위 중간
1. 반응형 디자인 테스트 (모바일, 태블릿)
2. 브라우저 호환성 테스트
3. 성능 최적화 (Lighthouse 점수)

### 우선순위 낮음
1. SEO 메타 태그 추가
2. Google Analytics 연동
3. Contact 폼 추가

---

## 12. 작업 시간
- **총 작업 시간**: 약 2시간
- **주요 파일 수정**: 6개
- **신규 파일 생성**: 3개
- **코드 라인 추가**: 약 400줄

---

## 작성자
Claude Code (Anthropic)

작업 완료일: 2025년 11월 18일
