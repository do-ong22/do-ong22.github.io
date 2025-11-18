import React, { useState, useEffect, useRef, useMemo } from 'react';

function Intro() {
  // 기존 타이핑 효과 상태들...
  const jobTitles = useMemo(() => ['백엔드', '프론트엔드', 'AI'], []);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [displayedJob, setDisplayedJob] = useState('');
  const [isTypingJob, setIsTypingJob] = useState(true);

  const specialties = useMemo(() => [
    'AI API 백엔드 설계',
    '머신러닝 모델링',
    '데이터 분석 및 시각화',
    '리액트 개발',
  ], []);
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);
  const [displayedSpecialty, setDisplayedSpecialty] = useState('');
  const [isTypingSpecialty, setIsTypingSpecialty] = useState(true);

  // 3D 틸트 효과용 상태
  const [tiltStyle, setTiltStyle] = useState({});
  const imageRef = useRef(null);

  // 마우스 움직임 핸들러
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // 틸트 강도 조절 (값이 클수록 더 많이 기울어짐)
    const tiltX = (mouseY / rect.height) * 20; // 상하 기울기
    const tiltY = (mouseX / rect.width) * -20; // 좌우 기울기
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  // 마우스가 이미지를 벗어났을 때 원래 상태로 복귀
  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out'
    });
  };

  // 기존 타이핑 효과 코드들...
  useEffect(() => {
    const currentText = jobTitles[currentJobIndex];
    
    if (isTypingJob) {
      if (displayedJob.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedJob(currentText.slice(0, displayedJob.length + 1));
        }, 150);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTypingJob(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedJob.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedJob(displayedJob.slice(0, -1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length);
        setIsTypingJob(true);
      }
    }
  }, [currentJobIndex, displayedJob, isTypingJob, jobTitles]);

  useEffect(() => {
    const currentText = specialties[currentSpecialtyIndex];
    
    if (isTypingSpecialty) {
      if (displayedSpecialty.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedSpecialty(currentText.slice(0, displayedSpecialty.length + 1));
        }, 80);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTypingSpecialty(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedSpecialty.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedSpecialty(displayedSpecialty.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentSpecialtyIndex((prev) => (prev + 1) % specialties.length);
        setIsTypingSpecialty(true);
      }
    }
  }, [currentSpecialtyIndex, displayedSpecialty, isTypingSpecialty, specialties]);

  return (
    <>
      <section className="intro">
        <div className="intro-text">
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
            안녕하세요!<br />
            <span className="typing-text">
              {displayedJob}
            </span><br />
            개발자 김동근입니다.
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
              사용자와 팀을 위한 기술을 고민하고<br /> 문제 해결하는 것을 좋아합니다.<br />
              요즘은 이런 일에 집중하고 있습니다.<br />
            <span className="typing-text force-newline">
              {displayedSpecialty}
            </span><br />
          </p>
        </div>
        <img
          ref={imageRef}
          src={`${process.env.PUBLIC_URL}/images/KakaoTalk_Photo_2025-05-28-11-56-06.jpeg`}
          alt="김동근 프로필"
          style={tiltStyle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="profile-image-3d"
        />
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-description">
            드론 개발 및 교육 현장에서 배운 <strong>정밀한 조율과 유기적 협업의 중요성</strong>을 개발 철학으로 삼고 있습니다.
          </p>
          <p className="about-description">
            빠른 문제 파악과 데이터 기반 의사결정, 그리고 팀과의 긴밀한 소통을 통해 <strong>기술적 난제를 실용적 해결책</strong>으로 전환하는 것을 강점으로 합니다.
          </p>
          <p className="about-description">
            특히 <strong>성능 최적화와 대규모 데이터 처리</strong>에 강점을 가지고 있으며, 사용자 중심의 서비스 설계와 팀 전체의 생산성 향상에 기여하는 것을 중요하게 생각합니다.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="section-title">경력</h2>
        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-header">
              <h3>(주) 엘리스</h3>
              <span className="experience-period">2025.03 ~ 현재 (9개월)</span>
            </div>
            <p className="experience-role">팀원 (Technical Operator) | ICT팀</p>
            <ul className="experience-details">
              <li>AI 개발자 양성 과정 DS 트랙 코치 활동</li>
              <li>월 평균 80명 이상의 수강생 대상 강의 보조, 질의응답, 실습 피드백 제공</li>
              <li>20개 이상의 추가 학습자료 제작으로 교육 품질 향상 기여</li>
              <li>수강생 평균 만족도 4.8/5.0 달성</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>(주) 메멘토에이아이</h3>
              <span className="experience-period">2024.10 ~ 2025.01 (4개월)</span>
            </div>
            <p className="experience-role">사원 | 제품개발팀 (BackEnd Developer)</p>
            <ul className="experience-details">
              <li>증권 분석 플랫폼 AlphaFinder 백엔드 아키텍처 설계 및 핵심 기능 개발</li>
              <li>사내 인사관리 시스템 Check(HDR) 백엔드 개발로 사내 만족도 95% 달성</li>
              <li>한국/미국 약 11,000개 종목 실시간 데이터 수집 파이프라인 구축</li>
              <li>Refinitiv DB 쿼리 성능 개선: 응답 시간 60초 → 1초 (98% 단축)</li>
              <li>FastAPI + Celery 기반 비동기 배치 시스템 설계</li>
              <li>RESTful API 설계 및 Swagger 문서화로 프론트엔드 개발 속도 30% 향상</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>(주) 마린로보틱스</h3>
              <span className="experience-period">2022.07 ~ 2023.07 (1년)</span>
            </div>
            <p className="experience-role">사원 | 교육 및 기술운영팀</p>
            <ul className="experience-details">
              <li>초·중·고·성인 대상 드론 자격 교육 진행 (연간 500명 이상)</li>
              <li>실내 군집 드론 콘텐츠 기획 및 포메이션 설계, 드론쇼 구현</li>
              <li>소방·경찰 협업 열감지 및 객체 탐지 기반 수색 프로젝트 참여</li>
              <li>YOLO 기반 조류 탐지 및 퇴치 시스템 시범 운영</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certification Section */}
      <section className="education-section">
        <h2 className="section-title">학력 및 자격증</h2>
        <div className="education-content">
          <div className="education-item">
            <h3>전남과학대학교</h3>
            <p>전문대 | 드론운용학과 졸업</p>
            <span className="education-period">2019.03 ~ 2021.02</span>
          </div>
          <div className="certification-item">
            <h3>자격증</h3>
            <p>SQLD (SQL 개발자) - 한국데이터산업진흥원</p>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="competencies-section">
        <h2 className="section-title">핵심 역량</h2>
        <div className="competencies-grid">
          <div className="competency-card">
            <h3>Communication & Collaboration</h3>
            <p className="competency-subtitle">문제 해결 중심의 기술 커뮤니케이션</p>
            <ul>
              <li>FastAPI 프로젝트에서 발생한 worker 분산 오류 및 API 지연 문제를 프론트엔드 팀과의 실시간 로그 분석으로 해결</li>
              <li>배포 구조 재설계 + API 로직 최적화로 응답 시간 70% 개선</li>
              <li>기획/교육/운영/개발까지 다양한 역할 수행 경험</li>
              <li>복잡한 기술적 개념을 비전공자도 이해할 수 있는 언어로 설명</li>
            </ul>
          </div>

          <div className="competency-card">
            <h3>Technical Excellence</h3>
            <p className="competency-subtitle">성능 최적화 & 대규모 데이터 처리</p>
            <ul>
              <li>데이터베이스 쿼리 최적화로 98% 성능 향상 달성</li>
              <li>11,000개 이상의 대용량 데이터셋 안정적 처리 파이프라인 설계</li>
              <li>pandas, numpy를 활용한 효율적인 데이터 처리 및 메모리 최적화</li>
              <li>기획 → 설계 → 개발 → 배포 → 유지보수 전 과정 실무 경험</li>
            </ul>
          </div>

          <div className="competency-card">
            <h3>지향하는 개발자상</h3>
            <p className="competency-subtitle">"기술을 도구로, 사람과 서비스를 중심에 두는 개발자"</p>
            <ul>
              <li><strong>문제 중심 사고:</strong> 기술은 수단, 해결해야 할 문제가 무엇인지 먼저 고민</li>
              <li><strong>끈기 있는 실행력:</strong> 막히는 문제 앞에서 포기하지 않고 끝까지 파고듦</li>
              <li><strong>협업을 통한 성장:</strong> 팀과 함께 성장하며, 의미 있는 결과를 만드는 것에 보람</li>
              <li><strong>데이터 기반 의사결정:</strong> 추측이 아닌 근거를 바탕으로 최선의 방향을 찾아감</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;