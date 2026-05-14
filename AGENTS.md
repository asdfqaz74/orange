# AGENTS.md

이 문서는 이 저장소에서 작업하는 코딩 에이전트의 기준 문서입니다. 더 구체적인 하위 지침이 생기면 해당 범위에서는 하위 문서를 우선합니다.

## 프로젝트 요약

- 패키지 매니저: `pnpm@11.1.1`
- Node: `26.1.0` via Volta
- 앱 형태: Next.js App Router 기반 React 단일 앱
- 공통 스택: Next.js 16, React 19, TypeScript, axios, Tailwind CSS
- 주요 설정: `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`
- 생성물(`.next`, `dist`)과 `node_modules`, 로컬 런타임 상태(`.omx`)는 수정하거나 구현 기준으로 삼지 않습니다.

## 작업 기준

- 수정 전 기존 파일과 현재 구조를 먼저 읽고, 가장 작은 변경으로 해결합니다.
- 새 의존성은 명시적 요청이 있을 때만 추가합니다.
- 우선 활용 디렉터리:
  - `src/app`: App Router 라우트, 페이지, 레이아웃, 라우트 전용 컴포넌트
  - `src/features`: 도메인/기능별 컴포넌트, 상수, 타입
  - `src/routes`: 경로 상수와 라우팅 관련 유틸리티
  - `src/shared`: 공통 API, 컴포넌트, 유틸리티
- 기존 구현은 `src` 아래 구조와 `@/*` 경로 alias를 우선 사용합니다.
- CSS 및 className은 기존 스타일을 최대한 활용 및 보존합니다. 특별히 명령하여 변경하지 않는 한 스타일은 수정하지 않습니다.
- API 작성 순서와 폴더 역할은 `docs/common/api_작성순서.md`를 참고합니다.
- 주석/JSDoc 작성 방식은 `docs/common/주석작성방법.md`를 따릅니다.
- 디자인 토큰과 시각 기준은 `docs/project/DESIGN.md`를 참고합니다.

## 상태/API 규칙

- 클라이언트 전역 상태가 필요하면 Jotai를 사용합니다.
- 서버 상태, 캐싱, invalidation이 필요하면 TanStack Query를 사용합니다.
- HTTP/API 모듈은 axios 기반으로 `src/shared/api` 또는 기능별 API 경계에 둡니다.
- 서버 요청 로직은 UI 컴포넌트에 직접 섞지 말고 API 모듈 또는 query hook으로 분리합니다.
- Jotai/TanStack Query가 아직 설치되어 있지 않은 경우, 도입은 명시적 요청이 있을 때만 진행합니다.

## 스타일/도구

- ESLint는 루트 flat config(`eslint.config.mjs`) 기준입니다.
- import 정렬은 `eslint-plugin-perfectionist` 규칙을 따릅니다.
- Next.js ESLint config와 TypeScript strict 설정을 유지합니다.
- Prettier와 충돌하는 ESLint 스타일 규칙은 `eslint-config-prettier` 기준으로 분리합니다.
- `@/*` alias는 `tsconfig.json`의 `./src/*` 매핑을 기준으로 사용합니다.
- Windows에서 `omx explore`가 실패하면 PowerShell 직접 명령으로 읽기 전용 탐색을 수행합니다.

## 루트 명령어

- 개발 서버: `pnpm dev`
- 빌드: `pnpm build`
- 실행: `pnpm start`
- 타입 검사: `pnpm typecheck`
- 테스트/통합 검증: `pnpm test`
- 린트: `pnpm lint`
- 린트 자동 수정: `pnpm lint:fix`

## 검증 기준

- 루트 설정 또는 공통 구조 변경: `pnpm lint` + `pnpm typecheck` + `pnpm build`
- 컴포넌트/로직 변경: `pnpm lint` + `pnpm typecheck` + `pnpm build`
- 문서만 변경: 파일 경로와 내용 확인, 필요 시 `git diff --check`
- 테스트를 추가하는 경우 루트 `test` 폴더 아래에 둡니다. 예: `test/components/Button.test.tsx`
- 테스트는 변경된 부분과 관련된 기능을 커버해야 합니다. 단위 테스트만 작성하여 컴포넌트/로직이 예상대로 작동하는지 확인합니다.

## 기본 비목표

명시적 요청이 없으면 monorepo 전환, 공통 UI 패키지 생성, SSR/라우팅 구조 재설계, axios/Jotai/TanStack Query 교체, 대규모 스타일 개편은 하지 않습니다.
