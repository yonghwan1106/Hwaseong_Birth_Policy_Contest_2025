// 화성시 AI 육아 생태계 핵심 데이터

export const projectStats = {
  investment: {
    total: 1100000000, // 11억원
    phases: {
      phase1: 300000000, // 3억원 (기반 구축)
      phase2: 500000000, // 5억원 (플랫폼 개발)
      phase3: 300000000, // 3억원 (확산 및 고도화)
    }
  },
  expectedOutcomes: {
    roi: 2945, // 2,945%
    birthRateIncrease: 0.09, // 1.01 → 1.1명
    economicEffect: 10800000000, // 108억원/년
    expandingCities: 10,
    userSatisfaction: 92, // 92%
    costReduction: 35, // 35% 비용 절감
  },
  timeline: {
    totalMonths: 36,
    phase1Duration: 12, // 12개월
    phase2Duration: 18, // 18개월
    phase3Duration: 6,  // 6개월
  }
}

export const coreFeatures = [
  {
    id: 'ai-counseling',
    title: 'AI 24시간 육아 상담',
    description: '언제든지 이용 가능한 전문 AI 상담사가 육아 고민을 해결합니다',
    icon: '🤖',
    color: 'primary',
    stats: {
      availability: '24/7',
      responseTime: '< 3초',
      accuracy: '95%',
      languages: 3
    },
    benefits: [
      '즉시 응답으로 육아 스트레스 해소',
      '전문적이고 개인화된 조언 제공',
      '다국어 지원으로 다문화 가정 포용',
      '학습형 AI로 지속적 서비스 개선'
    ]
  },
  {
    id: 'development-guide',
    title: '개인 맞춤형 발달 가이드',
    description: '아이의 성장 데이터를 분석하여 개인별 최적 발달 가이드를 제공합니다',
    icon: '📈',
    color: 'success',
    stats: {
      dataPoints: '50+',
      accuracy: '92%',
      updateFrequency: '주간',
      ageRange: '0-7세'
    },
    benefits: [
      '과학적 데이터 기반 발달 추적',
      '개인별 맞춤 활동 추천',
      '발달 지연 조기 발견',
      '전문의 연계 서비스'
    ]
  },
  {
    id: 'smart-matching',
    title: '스마트 돌봄 매칭',
    description: '신뢰할 수 있는 돌봄 인력과 즉시 매칭되는 스마트 서비스입니다',
    icon: '👥',
    color: 'warm',
    stats: {
      providers: '500+',
      avgMatchTime: '15분',
      satisfaction: '98%',
      availability: '주 7일'
    },
    benefits: [
      'AI 기반 최적 매칭 알고리즘',
      '검증된 돌봄 제공자 네트워크',
      '실시간 위치 기반 서비스',
      '투명한 평가 및 리뷰 시스템'
    ]
  },
  {
    id: 'data-feedback',
    title: '데이터 기반 정책 피드백',
    description: '실시간 데이터 분석으로 더 나은 육아 정책을 만들어갑니다',
    icon: '📊',
    color: 'tech',
    stats: {
      dataProcessing: '실시간',
      insights: '월 100+',
      policyUpdates: '분기별',
      participation: '70%'
    },
    benefits: [
      '시민 참여형 정책 개발',
      '데이터 기반 의사결정',
      '정책 효과 실시간 모니터링',
      '지속적 서비스 개선'
    ]
  },
  {
    id: 'enterprise-cooperation',
    title: '지역 기업 협력 생태계',
    description: '화성시 IT 기업들과 협력하여 지속가능한 육아 생태계를 구축합니다',
    icon: '🏢',
    color: 'primary',
    stats: {
      partners: '15+',
      jobs: '200+',
      investment: '50억+',
      sustainability: '자립형'
    },
    benefits: [
      '지역 경제 활성화',
      '양질의 일자리 창출',
      '기술 혁신 가속화',
      '산관학 협력 모델'
    ]
  }
]

export const partnerCompanies = [
  {
    name: '삼성전자',
    type: 'AI/IoT 기술',
    contribution: 'AI 모델 개발 및 스마트 디바이스 연동',
    logo: '/partners/samsung.png'
  },
  {
    name: 'SK하이닉스',
    type: '데이터 인프라',
    contribution: '고성능 데이터 처리 및 저장 솔루션',
    logo: '/partners/skhynix.png'
  },
  {
    name: '현대자동차',
    type: '모빌리티',
    contribution: '돌봄 서비스 이동 솔루션',
    logo: '/partners/hyundai.png'
  },
  {
    name: '카카오',
    type: '플랫폼',
    contribution: '사용자 인터페이스 및 소통 플랫폼',
    logo: '/partners/kakao.png'
  },
  {
    name: '네이버',
    type: 'AI/검색',
    contribution: 'AI 기술 및 정보 검색 시스템',
    logo: '/partners/naver.png'
  }
]

export const implementationPhases = [
  {
    phase: 1,
    title: '기반 구축 단계',
    duration: '1-12개월',
    budget: 300000000,
    objectives: [
      'AI 개발 환경 구축',
      '파트너십 체결',
      '기본 플랫폼 개발',
      '파일럿 테스트 실시'
    ],
    deliverables: [
      'AI 상담 시스템 프로토타입',
      '기업 파트너십 MOU',
      '사용자 연구 보고서',
      '기술 아키텍처 설계서'
    ],
    risks: [
      {
        risk: '기술 개발 지연',
        probability: 'Medium',
        impact: 'High',
        mitigation: '예비 개발팀 구성 및 단계별 점검'
      },
      {
        risk: '파트너 협상 난항',
        probability: 'Low',
        impact: 'Medium',
        mitigation: '다양한 파트너 옵션 확보'
      }
    ]
  },
  {
    phase: 2,
    title: '플랫폼 개발 단계',
    duration: '13-30개월',
    budget: 500000000,
    objectives: [
      '전체 플랫폼 개발',
      '서비스 정식 출시',
      '사용자 확산',
      '서비스 고도화'
    ],
    deliverables: [
      '통합 육아 플랫폼',
      '모바일 앱 출시',
      '사용자 매뉴얼',
      '운영 체계 구축'
    ],
    risks: [
      {
        risk: '사용자 수용성 문제',
        probability: 'Medium',
        impact: 'High',
        mitigation: '지속적 사용자 피드백 수집 및 개선'
      },
      {
        risk: '개인정보 보안 이슈',
        probability: 'Low',
        impact: 'High',
        mitigation: '최고 수준 보안 시스템 구축'
      }
    ]
  },
  {
    phase: 3,
    title: '확산 및 고도화 단계',
    duration: '31-36개월',
    budget: 300000000,
    objectives: [
      '타 지자체 확산',
      '서비스 고도화',
      '자립 운영 체계',
      '글로벌 진출 준비'
    ],
    deliverables: [
      '확산 모델 가이드',
      '고도화된 AI 시스템',
      '자립 운영 계획',
      '국제 표준 준수'
    ],
    risks: [
      {
        risk: '확산 속도 지연',
        probability: 'Medium',
        impact: 'Medium',
        mitigation: '인센티브 제공 및 성공 사례 홍보'
      },
      {
        risk: '경쟁 서비스 등장',
        probability: 'High',
        impact: 'Medium',
        mitigation: '지속적 혁신 및 차별화 전략'
      }
    ]
  }
]

export const impactSimulation = {
  scenarios: {
    conservative: {
      name: '보수적 시나리오',
      birthRateIncrease: 0.05, // 1.01 → 1.06
      adoptionRate: 60,
      economicEffect: 5400000000, // 54억원
      roi: 1473 // 1,473%
    },
    realistic: {
      name: '현실적 시나리오',
      birthRateIncrease: 0.09, // 1.01 → 1.1
      adoptionRate: 75,
      economicEffect: 10800000000, // 108억원
      roi: 2945 // 2,945%
    },
    optimistic: {
      name: '낙관적 시나리오',
      birthRateIncrease: 0.14, // 1.01 → 1.15
      adoptionRate: 90,
      economicEffect: 16200000000, // 162억원
      roi: 4418 // 4,418%
    }
  },
  assumptions: {
    childRaisingCost: 300000000, // 3억원 (1명당 총 비용)
    economicContribution: 7200000000, // 72억원 (1명당 생애 기여)
    serviceAdoptionPeriod: 24, // 24개월
    operationalEfficiency: 0.8 // 80% 효율성
  }
}

export const competitiveAnalysis = [
  {
    country: '핀란드',
    policy: '네우볼라 시스템',
    strengths: ['통합 지원', '예방 중심', '전문성'],
    weaknesses: ['높은 비용', '인력 의존'],
    applicability: 'High',
    adaptations: ['AI 도입으로 효율성 증대', '한국형 맞춤화']
  },
  {
    country: '덴마크',
    policy: '유연근무제',
    strengths: ['일·가정 양립', '높은 만족도'],
    weaknesses: ['제도적 한계', '기업 부담'],
    applicability: 'Medium',
    adaptations: ['스마트워크 기술 접목', '단계적 도입']
  },
  {
    country: '일본',
    policy: '육아 패키지',
    strengths: ['종합적 접근', '지역 특화'],
    weaknesses: ['분산된 서비스', '접근성 문제'],
    applicability: 'High',
    adaptations: ['디지털 통합 플랫폼', '원스톱 서비스']
  }
]

export default {
  projectStats,
  coreFeatures,
  partnerCompanies,
  implementationPhases,
  impactSimulation,
  competitiveAnalysis
}
