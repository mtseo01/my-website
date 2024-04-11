---
title: 'daily-record 개발기 1 - useForm Custom Hook'
excerpt: 'form 관리 라이브러리에 의존하지 않고 자체적으로 form 관리할 수 있는 React hook을 만들고 daily-record에 적용하는 이야기를 담았습니다.'
description: 'daily-record 개발기 1편 - useForm Custom hook'
date: '2024-04-11'
author:
  name: mtseo
---

### 라이브러리 없이 form 관리를 하자

회사에서는 form을 `react-form-hook` 라이브러리와 사내 자체 개발 라이브러리를 결합해서 관리한다.
이미 다 갖춰 진 상태에서 개발하다 보면 굉장히 편하다. 그러다 문득 라이브러리 사용이 제한적이라면 form 관리를 어떻게 하면 좋을지 생각하게 되었다.

`daily-record`의 개발 목적은 기술적 부재를 채우기 위한 것이기에 최대한 라이브러리 없이 개발하고 싶은 욕심이 났다. 어떤 식으로 개발하면 좋을 지 고민하다가 김정환님 블로그의 [리액트로 폼(Form) 다루기](https://jeonghwan-kim.github.io/dev/2022/03/29/react-form-and-formik.html) 포스팅을 읽고 큰 영감을 얻고 개발을 시작했다.

가장 중요한 것은 **재활용**이 가능해야하고 사용성이 **편리**해야만 한다. `daily-record`에는 로그인, 회원가입처럼 간단한 form부터 프로젝트, 과제 그리고 액티비티 생성, 수정의 복잡한 form도 있기 때문이다.

뼈대는 김정환님이 작성한 코드를 베이스로 하고 있으며, `daily-record`의 경우 `TypeScript`로 개발하고 있기에 `TypeScript`를 같이 적용하고 필요한 기능을 추가하는 식으로 개발하였다.

다음은 useForm hook의 전체 코드이다:

```tsx
// useForm hook 전체 코드

// 제네릭으로 타입을 동적으로 처리하기
interface FormTypes<T = any> {
  initialValues: T;
  validate: (values: T) => { [value in keyof T]: string };
  onSubmit: (values: T) => void;
}

type ErrorsState<U> = {
  [name in keyof U]: string;
};

type TouchedState<U> = {
  [field in keyof U]: boolean;
};

// custom hook
export default function useForm<T>({
  initialValues,
  validate,
  onSubmit,
}: FormTypes<T>) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ErrorsState<T>>({} as ErrorsState<T>);
  const [touched, setTouched] = useState<TouchedState<T>>(
    {} as TouchedState<T>
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setTouched({
      ...(touched as TouchedState<T>),
      [e.target.name]: true,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setTouched(
      Object.getOwnPropertyNames(values).reduce((touched, field) => {
        touched[field as keyof T] = true;
        return touched;
      }, {} as TouchedState<T>)
    );

    const errors = runValidator();
    // 오류 메세지 상태를 갱신한다
    setErrors(errors);
    // 잘못된 값이면 제출 처리를 중단한다.
    if (Object.values(errors).some((v) => v)) {
      return;
    }

    onSubmit(values);
  };

  const runValidator = useCallback(() => validate(values), [values, validate]);

  useEffect(() => {
    const errors = runValidator();
    setErrors(errors);
  }, [values]);

  return {
    values,
    setValues, // handleChange로는 2 depth 이상 객체 처리가 힘들어 나중엔 setValues 자체를 리턴 처리하였다.
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
```

재사용성을 고려해 FormTypes에 `TypeScript`의 제네릭을 이용해서 `initialValues` 값의 타입을 동적으로 받아 지정했고 나머지 에러 메세지 상태 값과 터치 상태 값도 마찬가지로 동적으로 받아 처리하였다.

```tsx
// SignUpForm
import useForm from '@/hooks/useForm';

type SignUpFormTypes = {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
};

const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
  useForm<SignUpFormTypes>({
    initialValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {
        email: '',
        nickname: '',
        password: '',
        confirmPassword: '',
      };
      /** 나머지 코드 생략 */
    },
    async onSubmit(values) {
      /** 나머지 코드 생략 */
    },
  });
```

`daily-record`의 회원가입 form을 예시로 가져왔다. `TypeScript`도 같이 적용하여 개발 단에서의 실수를 줄일 수 있었고, 무엇보다 재활용성이 매우 커서 이보다 더 복잡한 form도 관리가 쉬워졌다.

물론 이슈도 있었다. `handleChange` 함수로 form 값들을 변경하고 있었는데 `daily-record`의 과제 form 같은 경우 `initialValues`가 2 depth 이상이기에 `handleChange`으로만으로 값 변경 처리가 힘들어졌다.

그냥 모든 값을 1 depth로 다 빼내고 `onSubmit` 과정에서 다시 2 depth 이상으로 재가공하려고도 생각했었지만 과제 생성 기능 뿐만 아니라 수정 기능도 있었고 오히려 추후 재가공처리가 코드량이 많아질 것으로 판단하여 일단은 `useForm`에서 `setValues`자체를 반환해 2 depth 이상의 값의 변경처리 방식으로 적용했다. (이 부분이 개선되는 대로 블로그에 포스팅하려고 한다.)

이번 포스트는 React Custom Hook을 이용해 재활용성과 편리성을 고려한 useForm Custom Hook 개발기를 다루어 보았다. `daily-record` 개발기의 다음 편은 useForm과 같이 쓸 `input`, `textarea`, `button` 태그들과 error message를 컴포넌트화하여 적용하는 이야기를 포스팅하려 한다.

---

긴 글 읽어 주셔서 감사합니다.
