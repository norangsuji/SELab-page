# 커밋 메시지 컨벤션 가이드

모든 커밋 메시지는 다음과 같은 형식을 따릅니다:

---

## ✅ 커밋 타입 목록

| 이모지 | 타입     | 설명                                     |
| ------ | -------- | ---------------------------------------- |
| ✨     | feat     | 새로운 기능 추가                         |
| 🐛     | fix      | 버그 수정                                |
| 🎨     | style    | UI 스타일 / 포맷팅 수정 (로직은 X)       |
| 🧹     | refactor | 코드 리팩토링 (기능 변화 없이 구조 개선) |
| 📄     | docs     | 문서 수정 (README, 안내 문서 등)         |
| 🧪     | test     | 테스트 코드 추가/변경                    |
| 🗑️     | chore    | 설정 파일, 패키지 등 기타 작업           |
| 🚀     | deploy   | 배포 관련 작업                           |

---

## 📝 커밋 예시

| 작업 내용                  | 커밋 메시지 예시                                  |
| -------------------------- | ------------------------------------------------- |
| 멤버 목록 fetch 기능 추가  | `✨ feat: Google Sheets 기반 멤버 목록 기능 추가` |
| 이미지가 안 뜨는 문제 수정 | `🐛 fix: 멤버 프로필 이미지 경로 오류 수정`       |
| Emotion 스타일 적용        | `🎨 style: MemberCard 스타일 emotion 적용`        |
| 불필요한 코드 제거         | `🗑️ chore: 사용하지 않는 components 삭제`         |
| 페이지 배포                | `🚀 deploy: gh-pages로 정적 페이지 배포`          |

---

## 💡 커밋 작성 팁

- 메시지는 **간결하고 명확하게**!
- 설명은 가능한 한 **무엇을 왜 바꿨는지** 드러나도록!
- 커밋 단위는 **작게, 기능 단위로** 쪼개는 걸 추천합니다.

---
