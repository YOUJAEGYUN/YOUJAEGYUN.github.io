let resumeData = {
    "name": "유재균",
    "role": "데브옵스 엔지니어",
    "linkedinId":"jiwonj15",
    "email":"dbworbs10@naver.com",
    "phoneNumber": "010-2046-6906",
    "roleDescription": "일의 효율을 끌어올리는 것을 즐깁니다.\n개발자의 생산성을 증가시키거나, 리소스를 효율적으로 사용하는 일에 희열을 느낍니다.",
    "socialLinks": [
        {
            "name":"linkedin",
            "tag": "i",
            "url":"https://www.linkedin.com/in/%EC%9E%AC%EA%B7%A0-%EC%9C%A0-425a19339/",
            "className":"fa fa-linkedin"
        },
        {
            "name":"github",
            "tag": "i",
            "url":"https://github.com/YOUJAEGYUN",
            "className":"fa fa-github"
        }
      ],
    "aboutme": "안녕하세요. 데브옵스 엔지니어 유재균입니다.\n" +
        "<br>" +
        "저는 <code>생산성</code>, <code>효율성</code>, <code>자동화</code>를 중요시하며 자연스레 CI/CD 파이프라인, 아키텍처, 컨테이너 오케스트레이션 등에 관심을 가지게 되었습니다.\n" +
        "최근에는 쿠버네티스를 학습하고 있으며 Grafana, Prometheus, Promtail, Loki를 이용하여 클러스터에 포함되어 있는 리소스의 메트릭과 어플리케이션 로그를 모니터링하는 시스템을 구축하여 운영해본 경험이 있습니다.\n" +
        "<span>같이 일하고 싶은, 책임감 있는 개발자(엔지니어)</span>가 되는 것을 목표로 삼고 있으며 성장하는 느낌이 들 때 가장 행복합니다.",
    "address": "Korea",
    "website": "dbworbs10@naver.com",
    "education": [
        {
            "UniversityName": "인하대학교",
            "specialization": "컴퓨터공학",
            "MonthOfPassing": "Feb",
            "YearOfPassing": "2026",
        }
    ],
    "work": [
        {
            "CompanyName":"대우로지스틱스",
            "specialization":"DevOps Engineer",
            "MonthOfJoining":"Jan",
            "YearOfJoining":"2025",
            "MonthOfLeaving":"July 2025",
            "description":"인턴 | Jan 2025 ~ July 2025, IPP"
            // "YearOfLeaving":"2021"
        }
    ],
    "skillsDescription": "Docker, Kubernetes, Grafana, Prometheus, Loki, AWS, React+Vite, Nest.js",
    "skillsCategory": [
        {
            "name": "language",
            "skills": [
                {
                    "skillname": "Python"
                },
                {
                    "skillname": "Go"
                }
            ]
        },
        {
            "name": "grafana stack",
            "skills": [
                {
                    "skillname": "Grafana"
                },
                {
                    "skillname": "Prometheus"
                },
                {
                    "skillname": "Loki"
                }
            ]
        },
        {
            "name": "container",
            "skills": [
                {
                    "skillname": "Docker"
                },
                {
                    "skillname": "Kubernetes"
                },
            ]
        },
        {
            "name": "etc",
            "skills": [
                {
                    "skillname": "RabbitMQ"
                },
                {
                    "skillname": "Git"
                },
                {
                    "skillname": "AWS"
                }
            ]
        }
    ],
    "portfolio": [
        {
            "name": "E-commerce using AWS",
            "description": "AWS를 활용하여 올리브영 온라인 이커머스 구축 사례입니다.\n대규모 트래픽 감당할 수 있게 설계하였고, AWS가 장애를 일으키더라도\n멀티클라우드(알리바바)를 이용하여 다운타임 없이 복구가능합니다. ",
            "imgurl": "/images/cloudwave.jpeg",
            "preview": "/images/ecommerce-demo.mp4",
            "period": "2024/06 ~ 2024/08",
            "stack": '#React.js #Spring #AWS #Nginx #RabbitMQ #Terraform #Kubernetes #Docker #Prometheus #Grafana #GitLab #ArgoCD #Slack #Notion #Miro',
            "github": "https://github.com/cwave-druwa",
            "contribute": "Frontend(all), Monitoring(all), Backend(fix, refactor), Infra(Lambda, Cost, EKS)",
            "Architecture": "/images/CloudWave_architecture.png"
        },
        {
            "name": "AIoT를 활용한 대학 건물별 소비전력 예측 및 절감 솔루션",
            "description": "인하대학교 교내 강의실에 Vision Camera를 배치하여 실시간 재실 인원을 감지하고, 이를 기반으로 HVAC 시스템을 자동 제어하여 불필요한 전력 소비를 최소화했습니다.\n건물별 전력 소비 예측을 위해 Federated Learning 기반 AI 모델을 구축하여 중앙 서버로의 raw data 전송을 제거하고, 로컬 학습을 통해 데이터 프라이버시를 보장하면서도 모델 성능을 유지했습니다.\n실시간 제어 시스템과 예측 모델을 통합하여 에너지 효율을 극대화하고 탄소 배출을 감축했습니다.",
            "imgurl": "/images/Advantech.png",
            "preview": "/images/Advantech_video.mp4",
            "period": "2024/02, 2024/06",
            "stack": '#React #Spring #AIoT #Git #Grafana #Wise-Paas #digital-tween #FL',
            "github": "https://github.com/advantech-project",
            "contribute": "Backend(all), Frontend(all)",
            "Architecture": "/images/Advantech_Architecture.png"
        },
        {
            "name": "현대적 비동기 IO를 활용한 성능 개발",
            "description": "대학교 캡스톤 디자인으로 진행한 프로젝트입니다.\n레거시한 파일입출력 라이브러리를 사용하는 대신 현대적 비동기 IO를 활용할 수 있도록 라이브러리를 개발 및 성능개선 벤치마킹입니다.",
            "imgurl": "/images/prize.jpg",
            "preview": "/images/Capstone_251214.mp4",
            "period": "2025/08 ~ 2025/12",
            "stack": '#Vue.js #Node.js #Express #D3.js #MongoDB #Nginx',
            "github": "https://github.com/nativeio-resource-manager",
            "contribute": "Infra(CI/CD), Monitoring(Signoz)",
            "Architecture": "/images/capstone.jpg"
        },
        {
            "name": "사용자별로 신청할 수 있는 다양한 공공정책 추천 웹사이트",
            "description": "현재 개인 프로젝트로 진행중인 노티스입니다. 2025년 전 국민 민생회복소비쿠폰 신청을 깜빡하고 놓친 후, 사용자 개인 맞춤형 혜택 알림이 필요하다 생각되어 개발을 시작했습니다\n아직 진행중인 프로젝트라 아키텍처는 추후 업로드 예정입니다",
            "imgurl": "/images/notis_logo.png",
            "preview": "/images/Notis.mp4",
            "period": "2025/10 ~ 진행 중",
            "stack": "#Nest.js #React(TypeScript) #Vite #PostgreSQL #DBeaver #AWS",
            "github": "https://github.com/YOUJAEGYUN/notis",
            "contribute": "All(Single Project)",
            "Architecture": "",
        }
    ],
    "experience": [
        { // "탄중2기, 어드벤텍, 클웨, 대우, 캡스, 노티스",
            "name": "탄소중립 아카데미 2기 (회장) [2024.01 ~ 2024.06]",
            "contents": [{"title": "실시간으로 혼잡도, 공사 등을 고려하여 교통의 흐름을 예측 및 웹 UI로 시각화",
                "descriptions": []},
                {"title": "AI : LSTM기반 시계열 트래픽 예측 모델 구현",
                "descriptions": [
                    "교통량 시계열 데이터를 기반으로 LSTM 등 딥러닝 모델을 활용한 트래픽 예측 모델을 구현",
                    "데이터 전처리, 탐색적 데이터 분석(EDA), 모델 학습 및 예측 결과 평가 파이프라인 구성",
                    "Python 기반으로 실험 환경을 구성하고, 예측 정확도 비교 및 모델 개선을 반복 수행",
                ]},
                {"title": "Spring-Worker",
                "descriptions": [
                    "ITS(Open API) 등 외부 교통 데이터를 Spring Boot 기반 워커 서비스에서 주기적으로 수집 및 처리",
                    "수집된 트래픽/노드/링크 데이터를 정규화하여 DB에 저장하고, 후속 분석 및 예측에 활용 가능하도록 설계",
                    "배치 처리 및 API 연동 중심의 백엔드 워커 역할 수행"
                ]},
                {"title": "Back-End",
                "descriptions": [
                    "트래픽 예측 결과 및 교통 데이터를 API 형태로 제공하기 위한 백엔드 레포지토리",
                    "FE, AI, Worker 서비스들을 연결하는 중앙 백엔드 역할을 목표로 설계"
                ]},
                {"title": "Front-End",
                "descriptions": [
                    "지도 기반 UI를 통해 교통 데이터 및 혼잡 정보를 시각적으로 표현하는 웹 프론트엔드",
                    "JavaScript, HTML, CSS 기반으로 지도 렌더링 및 인터랙션 구현",
                    "실시간 또는 가공된 트래픽 데이터를 사용자에게 직관적으로 제공하는 역할"
                ]},
            ],            
            "type": "none"
        },
        { // "탄중2기, 어드벤텍, 클웨, 대우, 캡스, 노티스",
            "name": "어드벤텍 대상 [2024.01 ~ 2024.06]",
            "contents": [{"title": "대학 건물별 소비 전력 예측 및 절감 솔루션 개발",
                "descriptions": []},
                {"title": "AI : Federated Leraning Server",
                "descriptions": [
                    "LSTM 기반 건물별 전력 사용 패턴 예측 모델을 Federated Learning 방식으로 학습",
                    "각 건물의 데이터를 중앙 서버로 수집하지 않고, 로컬 학습 후 글로벌 모델을 집계(FedAvg / FedMut)",
                    "데이터 프라이버시를 유지하면서 일반화 성능을 향상시키는 분산 학습 구조 구현",
                ]},
                {"title": "Back-end",
                "descriptions": [
                    "각 건물의 전력 사용 데이터를 수집·저장하고, 예측 결과 및 상태 정보를 API 형태로 제공",
                    "전력 사용량이 예측치 대비 10%·20% 이상 초과 시 경보 및 자동화 이벤트를 생성",
                    "IoT 제어, AI 예측 결과, Dashboard를 연결하는 중앙 비즈니스 로직 계층 역할 수행"
                ]},
                {"title": "Front-end",
                "descriptions": [
                    "Advantech Wise-IoT Suite 및 Grafana 연동을 통해 건물별 전력 사용량을 실시간 시각화하는 웹 대시보드 구현",
                    "시계열 전력 데이터, 예측값, 임계치 초과 이벤트를 그래프 및 Digital Twin UI로 표현",
                    "사용자 관점에서 전력 소비 현황을 직관적으로 파악할 수 있도록 UI/UX 중심의 프론트엔드 구성"
                ]},
                {"title": "IoT",
                "descriptions": [
                    "Vision Camera 및 센서 데이터를 기반으로 교실 사용 여부를 판단하여 IoT 기기 자동 제어",
                    "사람이 없거나 전력 사용량이 기준치를 초과할 경우 냉난방·전력 차단 이벤트 발행",
                    "WiFi + UDP 통신을 활용한 실시간 IoT 제어 및 이벤트 오케스트레이션 구현 "
                ]},
            ],            
            "type": "none"
        },
        { // "탄중2기, 어드벤텍, 클웨, 대우, 캡스, 노티스",
            "name": "CloudWave [2024.06 ~ 2024.08]",
            "contents": [{"title": "올리브영 온라인 이커머스 인프라 구축",
                "descriptions": []},
                {"title": "Terraform",
                "descriptions": [
                    "인프라 구성을 코드로 정의한 Terraform 리포지토리로 AWS 기반 네트워크, 클러스터, 모니터링 리소스까지 IaC로 관리",
                    "EKS 클러스터, node group, IAM Roles, VPC, ALB, SSM, CloudWatch 등 클러드 인프라 구축/버전 관리",
                    "CI/CD 파이프라인과 연동하여 인프라 변경 시 코드 리뷰 → 플랜 → 적용 자동화",
                ]},
                {"title": "AWS Lambda",
                "descriptions": [
                    "기존에 Lambda로 작성되었던 코드들을 관리하는 저장소",
                    "서버리스 함수들을 모아두어 이벤트 기반 처리, 비동기 작업, 알림/배치 기능으로 활용",
                    "Python 기반으로 AWS Lambda 배포용 패키징 및 핸들러 정의"
                ]},
                {"title": "Kubernetes",
                "descriptions": [
                    "서버(백엔드/프론트엔드) 배포를 위한 Kubernetes manifest(Deployment/Service/Ingress)",
                    "HPA/HPA autoscaling 설정을 포함하며, staging/production 라벨/네임스페이스 분리",
                    "GitOps 방식 적용 가능 (ArgoCD/Flux 연계 고려)"
                ]},
                {"title": "Monitoring",
                "descriptions": []},
                {"title": "Prometheus 기반 Metrics 수집",
                "descriptions": [
                    "kube-state-metrics, node-exporter, cAdvisor 등 Exporter를 활용해 Kubernetes 클러스터/노드/Pod 자원 사용량 수집",
                    "CPU/Memory/Network I/O/Filesystem 같은 클러스터 레벨 지표",
                    "HPA의 autoscaling 지표로 활용",
                    "메트릭은 Prometheus에 스크랩(pull) 되어 시계열 DB로 저장",
                    "설정된 Alert Rule (예: CPU 사용량 80% 도달) 을 통해 Alertmanager에 전달"
                ]},
                {"title": "Grafana",
                "descriptions": [
                    "Prometheus 데이터 소스로 연결된 Grafana 대시보드 구성",
                    "클러스터 상태, 노드/Pod 리소스, 애플리케이션 응답시간, 에러율 등 실시간/히스토리 시각화",
                    "관리자가 직관적으로 시스템 상태를 파악할 수 있는 운영 대시보드 제공"
                ]
                },
                {"title": "Loki",
                "descriptions": [
                    "Loki + Promtail 을 활용하여 Kubernetes 로그 수집 및 구조화",
                    "Pod STDOUT 로그, 시스템 로그, 애플리케이션 로그를 Loki에 저장",
                    "로그는 Label 기반 검색이 가능해 문제 조사 시 빠른 검색"
                ]
                },
            ],            
            "type": "none"
        },
        { // "탄중2기, 어드벤텍, 클웨, 대우, 캡스, 노티스",
            "name": "노티스 [2025.10 ~ ing]",
            "contents": [{"title": "사용자 프로필과 정책 자격 조건을 기반으로 정부·지자체 정책을 개인화 추천",
                "descriptions": []},
                {"title": "Front-end",
                "descriptions": [
                    "React 18 + Vite + TypeScript 기반 SPA 구조로 빠른 빌드 및 모듈 단위 개발",
                    "React Query v5를 활용한 서버 상태 관리 및 정책/알림 데이터 캐싱",
                    "HttpOnly Cookie 기반 인증으로 토큰을 클라이언트에 저장하지 않는 보안 중심 설계",
                    "Tailwind CSS v4를 통한 유틸리티 퍼스트 스타일링 및 반응형 UI 구성",
                ]},
                {"title": "Back-end",
                "descriptions": [
                    "NestJS + TypeScript 기반의 모듈화된 서버 아키텍처",
                    "TypeORM + PostgreSQL을 활용한 명확한 도메인 중심 데이터 모델링",
                    "JWT + HttpOnly Cookie 인증 구조(FE딴에서 토큰을 보관하지 않으며 Back딴에서 JwtAuthGuard로 요청단위로 인증 처리",
                    "Cron 기반 배치 시스템"
                ]},
                {"title": "Crawling / Data Collector",
                "descriptions": [
                    "Collectors 모듈을 통한 정책 수집 파이프라인 설계",
                    "외부 정부/지자체 정책 API 또는 웹 페이지를 대상으로 ETL 구조 적용",
                    "정책 중복 체크, 상태(ACTIVE/INACTIVE) 자동 갱신"
                ]},
            ],            
            "type": "none"
        },
    ],
    "activity": [
        {
            "name": "현대점프스쿨 - 현대자동차그룹 대학생 봉사단 [2022.03 ~ 2022.12]",
            "contents": [{
                "title": "",
                "description": "현대차그룹 대학생 교육봉사단 H-점프스쿨 9기 장학샘으로 소외계층의 교육격차 해소 사회 통합 프로그램 1년간 진행"
            }],
            "type": "link",
            "url": "https://h-jumpschool.kr/"
        },
        {
            "name": "인천광역시교육청 웹 취약점 보안 점검위원 위촉 [2023.09 ~ 2023.10]",
            "contents": [{
                "title": "",
                "description": "국가사이버안보센터(NCSC) 및 인천광역시교육청과 함께 실시한 프로젝트로, 2022년도 모의고사 성적 유출사건 이후 관련 보안사고 재발 방지를 위해 교육청 웹 보안 취약점을 점검"
            }],
            "type": "link",
            "url": "/images/web_security_report.pdf"
        },
    ],
    "certificate": [
        {
            "name": "Toeic Speaking (English) Intermediate High",
            "contents": [{
                "title": "",
                "description": "발행일: 2025년 8월 · 만료일: 2027년 8월 / from 와이비엠"
            }]
        },
        {
            "name": "AI-POT 1급 (프롬프트 엔지니어)",
            "contents": [{
                "title":"",
                "description": "발행일: 2025년 11월 / from kpc자격"
            }]
        }
    ]
}

export default resumeData