import prettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import nextTypescript from "eslint-config-next/typescript";
import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig, globalIgnores } from "eslint/config";

const lineLengthSortOptions = {
  type: "line-length",
  order: "asc",
  fallbackSort: { type: "alphabetical", order: "asc" },
};

const importPathPattern = (path) => `^(?:@/|(?:\\.\\.?/)+)${path}(?:/|$)`;

const importDirectoryGroups = [
  "dir-app",
  "dir-features",
  "dir-routes",
  "dir-shared",
];

const importDirectoryGroupSpacing = importDirectoryGroups.flatMap(
  (group, index) => (index === 0 ? [group] : [{ newlinesBetween: 0 }, group]),
);

const importLineLengthSortOptions = {
  ...lineLengthSortOptions,
  // @/ alias를 외부 패키지가 아닌 앱 내부 import로 분류합니다.
  internalPattern: ["^@/.+"],
  // 현재 src 구조(app/features/routes/shared)끼리 먼저 묶고, 각 묶음 안에서 짧은 import 줄부터 정렬합니다.
  customGroups: [
    {
      groupName: "dir-app",
      elementNamePattern: importPathPattern("app"),
    },
    {
      groupName: "dir-features",
      elementNamePattern: importPathPattern("features"),
    },
    {
      groupName: "dir-routes",
      elementNamePattern: importPathPattern("routes"),
    },
    {
      groupName: "dir-shared",
      elementNamePattern: importPathPattern("shared"),
    },
  ],
  groups: [
    ["side-effect-style", "side-effect"],
    { newlinesBetween: 1 },
    ["type-builtin", "type-external", "value-builtin", "value-external"],
    { newlinesBetween: 1 },
    ...importDirectoryGroupSpacing,
    { newlinesBetween: 1 },
    [
      "type-internal",
      "value-internal",
      "type-parent",
      "type-sibling",
      "type-index",
      "value-parent",
      "value-sibling",
      "value-index",
    ],
    "ts-equals-import",
    "unknown",
  ],
};

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    plugins: {
      perfectionist,
    },
    rules: {
      // 기존 import를 바로 대량 수정하지 않도록 경고로 시작하고, --fix 실행 시 짧은 줄부터 정렬합니다.
      "perfectionist/sort-imports": ["warn", importLineLengthSortOptions],
      // import/export 중괄호 내부 항목도 짧은 항목부터 정렬합니다.
      "perfectionist/sort-named-imports": ["warn", lineLengthSortOptions],
      "perfectionist/sort-named-exports": ["warn", lineLengthSortOptions],
      // re-export 선언도 같은 길이순 기준을 사용합니다.
      "perfectionist/sort-exports": ["warn", lineLengthSortOptions],
    },
  },
  // 마지막에 Prettier와 충돌하는 스타일 규칙을 꺼서 formatter와 역할을 분리합니다.
  prettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "coverage/**",
    "node_modules/**",
    ".omx/**",
    "next-env.d.ts",
  ]),
]);
