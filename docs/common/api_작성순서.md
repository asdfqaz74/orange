# API 작성 순서

## 목적

이 문서는 프로젝트에서 API를 추가할 때 어떤 순서로 파일을 만들고 연결하면 되는지 정리한 가이드입니다.

기본 흐름은 아래 순서를 기준으로 진행합니다.

1. `types`에서 요청/응답 타입 정의
2. 공통 응답 타입 확인
3. `constants`에 API URL 정의
4. `api`에 실제 호출 함수 작성
5. `queryKeys`에 Query Key 정의
6. `queries`에 query/mutation 옵션 작성
7. `hooks`에 화면에서 사용할 훅 작성
8. 컴포넌트에서 훅 사용

## 폴더별 역할

- `src/types`: API request/response 타입 정의
- `src/api`: axios 기반 API 호출 함수 정의
- `src/constants`: API URL, Query Key 같은 상수 정의
- `src/queries`: TanStack Query 옵션 팩토리 정의
- `src/hooks`: 화면에서 바로 사용할 query/mutation 훅 정의

## 1. 타입 정의

먼저 `types` 폴더에 request/response 타입을 정의합니다.

- 응답 본문 구조
- 요청 파라미터 구조
- 화면에서 자주 참조하는 item 타입

예시:

```ts
// menu-list.types.ts
import type { ApiResponse } from '@/api/common.api';

/* -------------------------------------------- */
/*                 메뉴 목록 조회                */
/* -------------------------------------------- */

/** 메뉴 목록 아이템 */
export interface MenuListItem {
  siteCode: string;
  recKey: string;
  parentRecKey: string;
  step: string;
  step1: string;
  stepName: string;
  stepName1: string;
  depth: number;
  menuOrder: string;
  desc?: string;
  alias: string;
  name: string;
  type: string;
  useYn: Yn;
  mainMenuHideYn: Yn;
  hideYn: Yn;
  code: string;
  code2: string;
  [key: `step${number}`]: string | undefined;
  [key: `stepName${number}`]: string | undefined;
}

/** 메뉴 목록 응답 data */
export interface MenuListResponseData {
  menuList: MenuListItem[];
}

/** 메뉴 목록 조회 전체 응답 */
export type MenuListResponse = ApiResponse<MenuListResponseData>;
```

## 2. 공통 응답 타입 정의

API 응답이 공통 포맷을 사용한다면 `common.api.ts`에 제네릭 타입을 정의해 둡니다.

예시:

```ts
// common.api.ts
export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}
```

이렇게 두면 각 API 타입 파일에서 `ApiResponse<T>`를 조합해서 재사용할 수 있습니다.

## 3. API URL 상수 정의

API 경로는 하드코딩하지 말고 `constants` 폴더에서 관리합니다.

예시:

```ts
// menu-list.constants.ts
export const GET_MENU_LIST = '/api/menu/list';
```

## 4. API 함수 작성

`api` 폴더에 실제 호출 함수를 작성합니다.

작성 기준:

- 함수 이름만 봐도 어떤 API인지 알 수 있게 작성
- 반환 타입은 명확하게 지정
- URL은 상수를 사용
- 예외는 잡아서 다시 throw

예시:

```ts
// menu-list.api.ts
import { api } from '@/api/instance';
import { GET_MENU_LIST } from '@/constants/menu-list.constants';
import type { MenuListResponse } from '@/types/menu-list.types';

/**
 * 메뉴 목록 조회
 *
 * 사이트 코드가 "main"으로 고정되어 있어
 * 별도 파라미터 없이 호출합니다.
 */
export const getMenuList = async (): Promise<MenuListResponse> => {
  try {
    const response = await api.get<MenuListResponse>(GET_MENU_LIST);
    return response.data;
  } catch (error) {
    console.error('메뉴 목록 조회 실패:', error);
    throw error;
  }
};
```

## 5. Query Key 정의

TanStack Query를 사용할 경우 Query Key를 별도 상수로 관리합니다.

예시:

```ts
// queryKeys.constants.ts
export const MENU_ALL_QUERY_KEY = ['menu'] as const;

export const MENU_QUERY_KEYS = {
  list: [...MENU_ALL_QUERY_KEY, 'menu-list'] as const,
  detail: (recKey: string) => [...MENU_ALL_QUERY_KEY, 'detail', recKey] as const
};
```

## 6. Query/Mutation 옵션 작성

`queries` 폴더에는 `queryOptions`, `mutationOptions`를 모아 둡니다.

장점:

- query key와 query fn을 한 곳에서 관리할 수 있음
- 여러 훅에서 같은 옵션을 재사용할 수 있음
- invalidate 대상이 명확해짐

예시:

```ts
// menu-list.query.ts
import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { getMenuList, updateMenu } from '@/api/menu-list.api';
import { MENU_QUERY_KEYS } from '@/constants/queryKeys.constants';
import type { MenuUpdateRequest } from '@/types/menu-list.types';

export const menuListQueries = {
  list: () =>
    queryOptions({
      queryKey: MENU_QUERY_KEYS.list,
      queryFn: getMenuList
    }),
  detail: ({ recKey }: { recKey: string }) =>
    queryOptions({
      queryKey: MENU_QUERY_KEYS.detail(recKey),
      queryFn: () => Promise.resolve(recKey)
    })
};

export const menuListMutations = {
  updateMenu: () =>
    mutationOptions({
      mutationFn: (body: MenuUpdateRequest) => updateMenu(body)
    })
};
```

`detail` 예시는 invalidate 흐름을 보여주기 위한 샘플입니다. 실제 프로젝트에서는 상세 조회 API에 맞게 구현하면 됩니다.

## 7. 훅 작성

컴포넌트에서 직접 `useQuery`, `useMutation`를 반복해서 작성하지 않고, 도메인 단위 훅으로 한 번 감싸서 사용합니다.

예시:

```ts
// useMenuList.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { menuListMutations, menuListQueries } from '@/queries/menu-list.query';

export const useMenuList = () => {
  const queryClient = useQueryClient();

  const list = useQuery(menuListQueries.list());

  const updateMenu = useMutation({
    ...menuListMutations.updateMenu(),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: menuListQueries.list().queryKey
      });

      queryClient.invalidateQueries({
        queryKey: menuListQueries.detail({ recKey: variables.recKey }).queryKey
      });
    }
  });

  return {
    list,
    updateMenu
  };
};
```

## 8. 컴포넌트에서 사용

최종적으로 화면에서는 API 함수가 아니라 훅을 기준으로 사용합니다.

예시:

```tsx
import { useMenuList } from '@/hooks/useMenuList';

const MyComponent = () => {
  const { list, updateMenu } = useMenuList();

  if (list.isLoading) return <div>Loading...</div>;
  if (list.error) return <div>Error occurred: {list.error.message}</div>;

  const handleUpdate = (menu: MenuListItem) => {
    updateMenu.mutate({ recKey: menu.recKey, name: 'Updated Name' });
  };

  return (
    <div>
      <h1>Menu List</h1>
      <ul>
        {list.data?.data.menuList.map((menu) => (
          <li key={menu.recKey}>
            {menu.name}
            <button onClick={() => handleUpdate(menu)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

위 예시처럼 공통 응답이 `ApiResponse<T>` 구조라면 실제 데이터 접근은 `list.data?.data.menuList` 형태가 됩니다.

## 추천 작성 순서 요약

새 API를 추가할 때는 아래 순서로 작업하면 됩니다.

1. `types`에 request/response 타입 작성
2. `constants`에 URL 상수 작성
3. `api`에 axios 호출 함수 작성
4. `queryKeys`에 Query Key 작성
5. `queries`에 query/mutation 옵션 작성
6. `hooks`에 재사용 훅 작성
7. 화면 컴포넌트에서 훅 연결

## 체크 포인트

- URL은 문자열 하드코딩 대신 상수 사용
- 응답 타입과 요청 타입 분리
- API 함수는 호출만 담당하고, 캐싱/무효화는 Query 계층에서 처리
- 컴포넌트에서는 가능하면 API 함수 직접 호출 대신 훅 사용
- invalidate 대상은 query key 기준으로 명확하게 관리

## 한 줄 정리

이 프로젝트에서 API 추가는 `types -> constants -> api -> queryKeys -> queries -> hooks -> component` 순서로 진행하면 가장 관리하기 쉽습니다.
