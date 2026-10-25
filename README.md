# Idam-web

**이담건축** 포트폴리오·견적 문의 사이트입니다. [a365.at](https://www.a365.at) 레이아웃을 기반으로 콘텐츠와 브랜드를 이담건축에 맞게 구성했습니다.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, shadcn/ui
- 견적 문의: `/api/contact` (SMTP, nodemailer)

## Prerequisites

- [Node.js](https://nodejs.org/) 24+ (see `.nvmrc`)

## Setup

```bash
npm ci
cp .env.example .env.local
# .env.local 에 SMTP 설정 입력
npm run dev
```

브라우저: [http://localhost:3000](http://localhost:3000)

## Environment

견적 문의 메일 전송에 SMTP가 필요합니다. `.env.example`을 참고해 `.env.local`(로컬) 또는 배포 환경 변수에 설정합니다.

| Variable | Description |
| -------- | ----------- |
| `SMTP_HOST` | SMTP 호스트 |
| `SMTP_PORT` | 포트 (예: 465) |
| `SMTP_USER` | SMTP 계정 |
| `SMTP_PASS` | 앱 비밀번호 등 |
| `CONTACT_TO` | 수신 주소 (비우면 `SMTP_USER`) |

## Scripts

```bash
npm run dev        # 개발 서버
npm run check      # lint + typecheck + build (PR/배포 전)
npm run lint
npm run typecheck
npm run build
```

## Main routes

| Path | Description |
| ---- | ----------- |
| `/` | 홈 |
| `/about` | 회사 소개 |
| `/work` | 건축 작품 목록 |
| `/works/[slug]` | 작품 상세 |
| `/inside` | 현장 소식 |
| `/contact` | 견적 문의 |

## Project layout

```
src/app/                    # Routes
src/components/sites/a365/  # UI + 이담 콘텐츠 (data.ts 등)
public/sites/idam/          # 이담 이미지·폰트
public/sites/a365/          # 레이아웃용 일부 에셋
```

에이전트/클론 워크플로는 `AGENTS.md`, `.agents/skills/clone-website/`를 참고합니다.

## License

MIT
